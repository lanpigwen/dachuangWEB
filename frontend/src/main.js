// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import chat from './chat'


//aaaa
import ElementUI from 'element-ui' // 2.1引入结构
import 'element-ui/lib/theme-chalk/index.css' // 2.2引入样式

import JwChat from 'jwchat'

Vue.use(ElementUI) // 3.安装
Vue.use(JwChat)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


