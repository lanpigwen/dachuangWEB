<template>
    <el-row class="tac" >
  <el-col :span="24">
    <el-menu
      default-active="3"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <router-link to="" class="link">
      <el-menu-item index="2" >
        <i class="el-icon-user-solid"></i>
        <span slot="title">角色设定</span>
      </el-menu-item>
    </router-link>
    <router-link to="/chatroom" class="link" id="chatNav6">
      <el-menu-item index="3" id="chatNav" ref="chatNav">
        <i class="el-icon-s-comment"></i>
        <span slot="title">聊天界面</span>
      </el-menu-item>
      </router-link>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
export default {
    name:'leftNav',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
.link {
  text-decoration: none; /* 取消下划线 */
  color: #000000; /* 更改文字颜色，这里使用黑色 (#000000) 作为示例 */
}

</style>