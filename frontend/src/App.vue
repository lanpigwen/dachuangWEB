<template>
  <div id="app" >
<el-container>
  <el-header><webHeader></webHeader></el-header>
  <el-container>
    <el-aside width="200px"><leftNav ref="leftNavRef"></leftNav></el-aside>
    <el-main>
      <router-view 
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

export default {
  name: 'app',

  components: {
    webHeader,
    leftNav,
    mainChat,
  },
  methods: {
    updateLeftNav(navID) {
      this.$refs.leftNavRef.$refs[navID].$el.dispatchEvent(new Event('click'))
      const navLink = navID + 'Link'
      this.$refs.leftNavRef.$refs[navLink].$el.dispatchEvent(new Event('click'))
    }

  },
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
