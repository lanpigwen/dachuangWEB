// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import chat from './chat'


//aaaa
import ElementUI from 'element-ui'; // 2.1引入结构
import 'element-ui/lib/theme-chalk/index.css'; // 2.2引入样式

import JwChat from 'jwchat';
// import 'jwchat/lib/JwChat.umd.css';
// import 'jwchat/lib/JwChat.umd.min'
// import 'jwchat/lib/JwChat.common'
// import 'jwchat/lib/JwChat.umd'

Vue.use(ElementUI); // 3.安装
Vue.use(JwChat)
Vue.config.productionTip = false

// import VueWebsocket from 'vue-websocket';
// Vue.use(VueWebsocket, 'ws://127.0.0.1:8000/chat/hello/');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})


