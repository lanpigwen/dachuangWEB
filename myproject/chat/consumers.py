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
# keys = redis_conn.keys('messagesHistory:*')
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
        #   ————————————————————————————————————————————
        if self.room_group_name=='addRoom':
            messages = redis_conn.lrange('rooms', 0, -1)
            messages = [message.decode('utf-8') for message in messages][::-1]
            for message in messages:
                async_to_sync(self.channel_layer.group_send)(
                        self.room_group_name,
                        {
                            'type': 'room_message',
                            'message': message,
                            'sender_channel_name': self.channel_name
                        }
                    )
        else:
            #首次进入，就加载历史记录
            messages = redis_conn.lrange(f'messagesHistory:{self.room_group_name}', 0, -1)
            messages = [message.decode('utf-8') for message in messages][::-1]
            # print(messages)
            for message in messages:         
                async_to_sync(self.channel_layer.group_send)(
                self.room_group_name,
                {
                    'type': 'return_history',
                    'history':True,
                    'message': message,
                    'sender_channel_name': self.channel_name
                }
                )

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
        #如果是addRoom频道组，则返回数据库中的 房间对象
        if (self.room_group_name=='addRoom'):
            text_data_json = json.loads(text_data)

            message = json.dumps(text_data_json['message'])
            #房间细节存进reids
            redis_conn.lpush(f'rooms', message)
            #向前端发送room 更新
            async_to_sync(self.channel_layer.group_send)(
                self.room_group_name,
                {
                    'type': 'room_message',
                    'message': message,
                    'sender_channel_name': self.channel_name
                }
            )
        else:
            text_data_json = json.loads(text_data)
            text_data_json['message']['mine']=False
            #要求返回历史数据
            if text_data_json['message'].get('ask_history')!=None:
                #返回历史数据
                messages = redis_conn.lrange(f'messagesHistory:{self.room_group_name}', 0, -1)
                messages = [message.decode('utf-8') for message in messages][::-1]
                # for message in messages:         
                async_to_sync(self.channel_layer.group_send)(
                self.room_group_name,
                {
                    'type': 'return_history',
                    'history':True,
                    'message': message,
                    'sender_channel_name': self.channel_name
                }
                )
            #正常单个聊天数据    
            else:
                message = json.dumps(text_data_json['message'])
                # print(message)
                redis_conn.lpush(f'messagesHistory:{self.room_group_name}', message)
                # 发送消息到频道组，频道组调用chat_message方法
                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        'type': 'chat_message',
                        'message': message,
                        'sender_channel_name': sender_channel_name
                    }
                )

    # 从频道组接收到消息后执行方法
    def chat_message(self, event):
        message = event['message']
        sender_channel_name = event['sender_channel_name']
        # datetime_str = datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S')

        # 判断接收者是否是发送者
        if self.channel_name != sender_channel_name:
            # 通过websocket发送消息到客户端
            self.send(text_data=json.dumps({
                'message': f'{message}'
            }))

    #从addRoom频道收到消息后        
    def room_message(self,event):
        message = event['message']
        # sender_channel_name = event['sender_channel_name']
        self.send(text_data=json.dumps({
            'message': f'{message}'
        }))        
    
    def return_history(self,event):
        message = event['message']
        sender_channel_name = event['sender_channel_name']
        # datetime_str = datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S')

        # 判断接收者是否是发送者
        if self.channel_name == sender_channel_name:
            # 通过websocket发送消息到客户端
            self.send(text_data=json.dumps({
                'message': f'{message}'
            }))

