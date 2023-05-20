<template>
  <div id="app" >
<el-container>
  <el-header><webHeader></webHeader></el-header>
  <el-container>
    <el-aside width="200px"><leftNav ref="leftNavRef"></leftNav></el-aside>
    <el-main>
      <router-view 
        :roleObj="roleObj" 
        @update-roleObj="updateRoleObj"
        :avatars="avatars"
        @update-leftNav="updateLeftNav" ></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import webHeader from "@/components/webHeader.vue"
import leftNav from "./components/leftNav.vue"
import mainChat from "./components/mainChat.vue"
// import RoleSet from "./components/roleSet.vue"
export default {
  name: 'app',
  data() {
    return {
      roleObj: {
        avatar: '1',
        nickname: '用户名',
        gender: 'male'
      },
      //以后可以改成 app里有一个roleObj,其他子组件的都是他传进去的，
      avatars: [
            { value: '1', url: 'static/img/1.png' },
            { value: '2', url: 'static/img/2.png' },
            { value: '3', url: 'static/img/3.png' },
            { value: '4', url: 'static/img/4.png' },
            { value: '5', url: 'static/img/5.png' },
            { value: '6', url: 'static/img/6.png' },
            { value: '7', url: 'static/img/7.png' },
            { value: '8', url: 'static/img/8.png' },
      
    ]
    }
  },
  components: {
    webHeader,
    leftNav,
    mainChat,
    // RoleSet,

  },
  methods: {
    updateRoleObj(newObj) {
      this.roleObj = newObj
    },
    updateLeftNav(navID) {
      this.$refs.leftNavRef.$refs.chatNav.$el.dispatchEvent(new Event('click'))

    }

  },
  mounted() {
    // console.log(this.roleObj)
  }
}
</script>

<style>
.el-header, .el-footer {
  background-color: #409eff;
  color: #fff;
  text-align: center;
  line-height: 60px;
  padding-bottom: 10px;
}

.el-aside {
  /* background-color: #D3DCE6; */
  /* color: #333; */
  /* text-align: center;
  line-height: 200px; */


  display: block; 
  position: absolute;
  left: 60px;
  top: 70px;
  bottom: 0;
}

.el-main {
  /* background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px; */


  height: auto;
  position: absolute;
  left: 270px;
  right: 50px;
  top: 70px;
  bottom: 0;
  /* overflow-y: scroll; */
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
body{
    margin: 0;
    background-color:aliceblue;
}
</style>
