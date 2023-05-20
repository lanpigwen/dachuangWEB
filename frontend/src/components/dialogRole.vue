<template>
<div class="dialog" >
    <el-dialog title="用户设置" :visible="dialogRoleVisible" @close="toggleDialog">
        <div class="roleSet" >
        <el-form ref="userForm" :model="user" :rules="rules" label-width="100px">
                <el-form-item label="头像">
                    <el-radio-group v-model="user.avatar">
                <el-radio v-for="avatar in avatars" :key="avatar.value" :label="avatar.value">
                    <el-avatar :size="80" :src="avatar.url" :class="{ 'selected': user.avatar === avatar.value }"></el-avatar>
                </el-radio>
                </el-radio-group>
                </el-form-item>
                <el-form-item label="昵称" prop="nickname">
                <el-input v-model="user.nickname"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                <el-radio-group v-model="user.gender">
                    <el-radio class="gen" label="male">男</el-radio>
                    <el-radio class="gen" label="female">女</el-radio>
                </el-radio-group>
                </el-form-item>
            </el-form>
        </div>
        <div slot="footer" class="dialog-footer">
        <el-button @click="toggleDialog">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
  </div>
    </el-dialog>
</div>
</template>


<style>
.roleSet{
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

<script>
export default {
    props: ['dialogRoleVisible', 'avatars', 'roleObj',],
data() {
    return {
        user: { ...this.roleObj },
        rules: {
            nickname:[{ required: true, message: '请输入昵称', trigger: 'blur' },]
        }
    }
},
methods: {
    toggleDialog() {
        this.user = { ...this.roleObj };
        this.$emit('update:dialogRoleVisible', false);
        this.$emit('update-activeBar', "ChatLobby");
        //弹一个修改成功
    },
    submitForm() {
        this.$refs.userForm.validate(valid => {
            if (valid) {
                // 提交表单逻辑，例如发送到服务器
                this.$emit('update-roleObj', this.user);
                this.toggleDialog();
                this.ok('保存成功！');
            }
            else {
                console.log('表单验证失败！');
                return false;
            }
        });
    },

    ok(message,type='success') {
        this.$message({
          message: message,
          type: type
        });
      },
    
    },
};
</script>
  