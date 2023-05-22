#consumers.py
import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from channels_redis.core import RedisChannelLayer
from channels.layers import get_channel_layer
import datetime

import redis

# # 创建Redis连接
redis_conn = redis.Redis(host='localhost', port=6379)
# messages = redis_conn.lrange('rooms', 0, -1)
# print(messages)
# # 获取所有匹配的键
# keys = redis_conn.keys('rooms')
# for key in keys:
#     redis_conn.delete(key)

# # 提取频道组名称
# groups = [key.decode('utf-8').split(':')[-1] for key in keys]

# # 打印所有存在的频道组
# print(groups)

class ChatConsumer(WebsocketConsumer):
    # websocket建立连接时执行方法
    def connect(self):
        # 从url里获取聊天室名字，为每个房间建立一个频道组
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = self.room_name
        # 获取Redis Channel Layer
        self.channel_layer = get_channel_layer()
        # 将当前频道加入频道组
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        # 接受所有websocket请求
        self.accept()
        #这里也要区分
        #   ————————————————需要改成只向他自己发   初始化 room_history
        if self.room_group_name=='addRoom':
            messages = redis_conn.lrange('rooms', 0, -1)
            messages = [message.decode('utf-8') for message in messages][::-1]
            for message in messages:
                async_to_sync(self.channel_layer.send)(
                    self.channel_name,
                    {
                        'type': 'send_message',
                        'message': message,
                        'realtype':'rooms_history'
                    }
                )
        else:
            #首次进入，就加载历史记录
            messages = redis_conn.lrange(f'messagesHistory:{self.room_group_name}', 0, -1)
            start=0
            messages = [message.decode('utf-8') for message in messages]
            messages=messages[start:start+10] if start+10 <len(messages) else messages[start:]
            messages=messages[::-1]
            # print(messages)
            for message in messages:         
                async_to_sync(self.channel_layer.send)(
                    self.channel_name,
                    {
                        'type': 'send_message',
                        'message': message,
                        'realtype':'message_history'
                    }
                )
            if self.room_group_name=='ChatLobby':
                async_to_sync(self.channel_layer.send)(
                    self.channel_name,
                    {
                        'type': 'send_message',
                        'message': '为啥',
                        'realtype':'ChatLobby_init'
                    }
                )

    def send_message(self, event):
        type=event['realtype']
        message = event['message']
        self.send(text_data=json.dumps({
            'type': type,
            'message': message
        }))
                        

    # websocket断开时执行方法
    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # 从websocket接收到消息时执行函数
    def receive(self, text_data):
        # 获取当前用户的channel_name
        sender_channel_name = self.channel_name
        # redis_conn.lpush(f'messages:{self.room_group_name}', message)
        # 获取Redis Channel Layer
        self.channel_layer = get_channel_layer()
        #如果是addRoom频道组 则是收到了前端 有人新建了房间 ，
        if (self.room_group_name=='addRoom'):
            text_data_json = json.loads(text_data)
            print(text_data_json)
            message = json.dumps(text_data_json['message'])
            #房间细节存进reids
            redis_conn.lpush(f'rooms', message)
            #向前端发送room 更新
            async_to_sync(self.channel_layer.group_send)(
                self.room_group_name,
                {
                    'type': 'send_message',
                    'message': message,
                    'realtype': 'update_rooms'
                }
            )
        else:
            text_data_json = json.loads(text_data)
            #要求返回历史数据
            if text_data_json['type']=='more_history':
                start=text_data_json['index_0']
                roomid=text_data_json['roomid']
                # 返回历史数据
                messages = redis_conn.lrange(f'messagesHistory:{roomid}', 0, -1)
                messages = [message.decode('utf-8') for message in messages]
                his_len=len(messages)
                end=start+10 if start+10 <len(messages) else -1
                messages=messages[start:start+10] if start+10 <len(messages) else messages[start:]
                if start<his_len:
                    for message in messages:        
                        async_to_sync(self.channel_layer.send)(
                        self.channel_name,
                        {
                            'type': 'send_message',
                            'message': message,
                            'realtype':'more_history'
                        }
                        )
                else:
                    message={"what_happen":"到达聊天记录顶端！"}
                    message=json.dumps(message)
                    async_to_sync(self.channel_layer.send)(
                    self.channel_name,
                    {
                        'type': 'send_message',
                        'message': message,
                        'realtype':'tips'
                    }
                    )                    
                    print('加载完全部')
                print('收到历史要求',start,end,his_len)
            #正常单个聊天数据    
            elif text_data_json['type']=='p_join_room':
                message=json.dumps(text_data_json['message'])
                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        'type': 'send_message',
                        'message': message,
                        'sender_channel_name': sender_channel_name,
                        'realtype':'p_join_room'
                    }
                )                
                print(text_data_json['message'])
            else:
                text_data_json['message']['mine']=False
                message = json.dumps(text_data_json['message'])
                # print(message)
                redis_conn.lpush(f'messagesHistory:{self.room_group_name}', message)
                # 发送消息到频道组，频道组调用chat_message方法
                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        'type': 'chat_message',
                        'message': message,
                        'sender_channel_name': sender_channel_name,
                        'realtype':'other_chat_message'
                    }
                )

    # 从频道组接收到消息后执行方法
    def chat_message(self, event):
        message = event['message']
        sender_channel_name = event['sender_channel_name']
        type=event['realtype']
        # datetime_str = datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S')

        # 判断接收者是否是发送者
        if self.channel_name != sender_channel_name:
            # 通过websocket发送消息到客户端
            self.send(text_data=json.dumps({
                'type':type,
                'message': f'{message}'
            }))    
    
    def return_more_history(self,event):
        message = event['message']
        type=event['realtype']
        sender_channel_name = event['sender_channel_name']

        # 判断接收者是否是发送者
        if self.channel_name == sender_channel_name:
            # 通过websocket发送消息到客户端
            self.send(text_data=json.dumps({
                'type':type,
                'message': f'{message}'
            }))

