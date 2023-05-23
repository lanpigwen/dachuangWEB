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
keys = redis_conn.keys(f'Online:*')
for key in keys:
    redis_conn.delete(key)
    


# # 提取频道组名称
# groups = [key.decode('utf-8').split(':')[-1] for key in keys]

# # 打印所有存在的频道组
# print(groups)

# all_online=redis_conn.hgetall(f'Online:*')
# redis_conn.delete(f'Online:ChatLobby')


class ChatConsumer(WebsocketConsumer):
    # websocket建立连接时执行方法
    def connect(self):
        # 从url里获取聊天室名字，为每个房间建立一个频道组
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = self.room_name
        self.privateID=self.channel_name            #
        # 获取Redis Channel Layer
        self.channel_layer = get_channel_layer()
        # 将当前频道加入频道组
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        # 接受所有websocket请求
        self.accept()

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
                self.privateID=str(self.channel_name).split('!')[1]
                message={'role_privateID':self.privateID}
                message=json.dumps(message)
                async_to_sync(self.channel_layer.send)(
                    self.channel_name,
                    {
                        'type': 'send_message',
                        'message': message,
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

        # redis_conn.hdel(f'Online:{self.room_group_name}',self.privateID)
        all_online=redis_conn.hgetall(f'Online:{self.room_group_name}')
        result = []
        for key, value in all_online.items():
            value = value.decode('utf-8')  # 将字节解码为字符串
            value_dict = json.loads(value)  # 解析为字典
            value_dict['id'] = key.decode('utf-8')  # 添加 id 属性
            result.append(json.dumps(value_dict))  # 转换为字符串流
        message=result
        print(self.room_group_name,"有人退出前",message)
        print(self.room_group_name,"有人退出时 他的privateID",self.privateID)

        redis_conn.hdel(f'Online:{self.room_group_name}',self.privateID)
        all_online=redis_conn.hgetall(f'Online:{self.room_group_name}')
        result = []
        for key, value in all_online.items():
            value = value.decode('utf-8')  # 将字节解码为字符串
            value_dict = json.loads(value)  # 解析为字典
            value_dict['id'] = key.decode('utf-8')  # 添加 id 属性
            result.append(json.dumps(value_dict))  # 转换为字符串流
        message=result        
        print(self.room_group_name,"有人退出后",message)
        # print(self.room_group_name,all_online)
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'send_message',
                'message': message,
                'realtype':'p_join_room'
            }
        ) 



    # 从websocket接收到消息时执行函数
    def receive(self, text_data):
        # 获取当前用户的channel_name
        sender_channel_name = self.channel_name
        # 获取Redis Channel Layer
        self.channel_layer = get_channel_layer()
        #如果是addRoom频道组 则是收到了前端 有人新建了房间 ，
        text_data_json = json.loads(text_data)
        if text_data_json['type']=='add_room':
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
        elif text_data_json['type']=='more_history':
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
        #更新在线人数   
        elif text_data_json['type']=='p_join_room':
            # message=json.dumps(text_data_json['message'])
            #还得加入在线
            if text_data_json['message'].get('id')!=None:
                self.privateID=text_data_json['message'].get('id')

            # text_data_json['message']['privateID']=self.privateID
            message=json.dumps(text_data_json['message'])

            redis_conn.hset(f'Online:{self.room_group_name}', self.privateID , message)        
            all_online=redis_conn.hgetall(f'Online:{self.room_group_name}')
            result = []
            for key, value in all_online.items():
                value = value.decode('utf-8')  # 将字节解码为字符串
                value_dict = json.loads(value)  # 解析为字典
                value_dict['id'] = key.decode('utf-8')  # 添加 id 属性
                result.append(json.dumps(value_dict))  # 转换为字符串流
            message=result
            async_to_sync(self.channel_layer.group_send)(
                self.room_group_name,
                {
                    'type': 'send_message',
                    'message': message,
                    'realtype':'p_join_room'
                }
            )
        elif text_data_json['type']=='private_2':
            # print(text_data_json)
            text_data_json['message']['mine']=False
            receiver=text_data_json['receiver']
            # realgroup=str(self.room_group_name).split('!')[0]+receiver
            message=json.dumps(text_data_json['message'])
            async_to_sync(self.channel_layer.group_send)(
                receiver,
                {
                    'type': 'send_message',
                    'message': message,
                    'realtype':'other_chat_message'
                }
            )            

        #正常单个聊天数据 
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

