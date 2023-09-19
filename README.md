# dachuangWEB
多轮对话语料收集与分析（大创）django+vue2+element-ui


##本地运行

先将 frontend>src>components>mainChat.vue   line220  改成本地WS_BASE_URL: 'ws://localhost:8000/ws/chat/',
后端对websocket的支撑
#cd dachuangWEB\myproject>python manage.py runserver

前端vue
#cd  dachuangWEB\frontend>npm run dev


