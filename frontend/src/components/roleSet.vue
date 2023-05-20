<template>
    <div class="roleSet" >
      <el-form ref="userForm" :model="user" label-width="100px">
        <el-form-item label="头像">
            <el-radio-group v-model="user.avatar">
        <el-radio v-for="avatar in avatars" :key="avatar.value" :label="avatar.value">
            <el-avatar :size="80" :src="avatar.url" :class="{ 'selected': user.avatar === avatar.value }"></el-avatar>
        </el-radio>
        </el-radio-group>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="user.nickname"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="user.gender">
            <el-radio class="gen" label="male">男</el-radio>
            <el-radio class="gen" label="female">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <style>
  .roleSet{
    width: 50%;
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
  
  <script>
  export default {
    data() {
      return {
        // user: {
        //   avatar: '1',
        //   nickname: '',
        //   gender: 'male'
        //     },
        user: this.roleObj
      }
    },
    props: ['roleObj','avatars',],
    methods: {
        leftNavClick() {
            const elContainer = this.$parent.$parent.$el
            const chatNav = elContainer.querySelector('#chatNav')
            chatNav.dispatchEvent(new Event('click'))            
        },
      submitForm() {
        this.$refs.userForm.validate(valid => {
          if (valid) {
            // 提交表单逻辑，例如发送到服务器
                const newObj = { ...this.roleObj, avatar: this.user.avatar, gender: this.user.gender, nickname: this.user.nickname }
                console.log("点击提交后", newObj)
                this.$emit('update-roleObj', newObj)
                this.$router.push({
                      path: '/chatroom',
                      query: {
                        role:this.user.nickname
                      }
                  })
                this.leftNavClick()
          } else {
            console.log('表单验证失败！')
            return false
          }
        })
      }
    },
      mounted() {
            // this.imgs = this.avatars
            console.log("设置角色", this.roleObj)  
            // console.log(this.avatars)
    }

  }
  </script>
  