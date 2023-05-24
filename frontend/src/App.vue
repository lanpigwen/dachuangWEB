<template>
  <div id="app" >
      <router-view ></router-view>
  </div>
</template>

<script>
import mainChat from "./components/mainChat.vue"

export default {
  name: 'app',
  components: {
    mainChat,
  },
}
</script>

<style>

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    min-height: 100vh;
}

</style>

<style >  
/* 这里不能写scrop */
.roleSet {
    width: 100%;
}

.selected {
    border: 5px solid #409eff;
    border-radius: 50%;
    /* background-color: #409eff; */
}

/* 隐藏 el-radio 的圆圈 */
.el-radio__inner {
    display: none;
}

.gen .el-radio__inner {
    display: block;
}

.el-radio__input.is-checked .el-radio__inner {
    border-color: transparent;
    background-color: #409eff;
}

/* 设置选中状态的背景色 */
.el-radio__input.is-checked .el-radio__inner::after {
    background-color: #409eff;
}
</style>
