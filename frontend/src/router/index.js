import Vue from 'vue'
import Router from 'vue-router'
import mainChat from '@/components/mainChat'
import index from "@/components/index"
import show from "@/components/show"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/chatroom',
      name: "JwChat",
      component:mainChat
    },
    {
      path: '/show',
      name: "show",
      component:show
    }
  ]
})


