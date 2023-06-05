# myproject

# chat 
提供websocket
使用asgi来区分http和ws

re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer.as_asgi()),

# news
提供查找语料的接口 search