import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mainChat from '@/components/mainChat'
import roleSet from '@/components/roleSet'
import dialogRole from "@/components/dialogRole";
import dialogCreateRoom from "@/components/dialogCreateRoom";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorldDefault',
      component: HelloWorld
    },

    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,
    {
      path: '/chatroom',
      name: "JwChat",
      component:mainChat
    },
    {
      path: '/roleSet',
      name: "roleSet",
      component:roleSet
    },
    {
      path: '/dialogRole',
      name: "dialogRole",
      component:dialogRole
    },
    {
      path: '/dialogCreateRoom',
      name: "dialogCreateRoom",
      component:dialogCreateRoom
    }
  ]
})
