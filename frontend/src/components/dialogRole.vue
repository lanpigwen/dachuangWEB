<template>
    <div class="dialog">
        <el-dialog title="用户设置" :visible="dialogRoleVisible" :show-close="false" top="0vh">
            <div class="roleSet">
                <el-form ref="userForm" :model="user" :rules="rules" label-width="100px">
                    <el-form-item label="头像">

                        <el-radio-group v-model="user.avatar" >
                            <el-radio v-for="avatar in avatars" :key="avatar.value" :label="avatar.value">
                                <el-avatar :size="80" :src="avatar.url"
                                    :class="{ 'selected': user.avatar === avatar.value }"></el-avatar>
                            </el-radio>
                        </el-radio-group>

                    </el-form-item>
                    <el-form-item label="昵称" prop="nickname">
                        <el-input v-model="user.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio v-model="user.gender" label="male" border size="medium">男性</el-radio>
                        <el-radio v-model="user.gender" label="female" border size="medium">女性</el-radio>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="openMsgBox">取 消</el-button>
                <el-button type="primary" @click="submitForm">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>


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

@media screen and (max-width:800px) {
    .el-dialog{
    width: 100%!important;
    height: 100%!important;
    margin-bottom: 0!important;
    margin-top: 0!important;
}
.el-radio-group{
    max-height: 40vh!important;
    overflow-y: scroll!important;
}
}
</style>

<script>

export default {
    props: ['dialogRoleVisible', 'avatars', 'roleObj',],
    data() {
        return {
            
            user: { ...this.roleObj },
            rules: {
                nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' },]
            }
        }
    },
    methods: {
        openMsgBox() {
            this.$confirm('请设置用户信息！', '提示', {
                confirmButtonText: '重新设置',
                cancelButtonText: '返回首页',
                type: 'warning',
                showClose: false,
                closeOnClickModal: false,
                closeOnPressEscape:false,
            }).then(() => {

            }).catch(() => {
                this.$emit('update:dialogRoleVisible', false)
                this.$router.push('/')
            });
        },
        submitForm() {
            this.$refs.userForm.validate(valid => {
                if (valid) {
                    // 提交表单逻辑，例如发送到服务器
                    const avatar = this.avatars.find(item => item.value === this.user.avatar)
                    const url = avatar ? avatar.url : null
                    this.user.img = url

                    this.$emit('update-roleObj', this.user)
                    this.$emit('afterRoleSet')

                    this.$emit('update:dialogRoleVisible', false)
                    this.$emit('update-activeBar', "ChatLobby")
                    this.el_alert('保存成功！')
                }
                else {
                    console.log('表单验证失败！')
                    return false
                }
            })
        },

        el_alert(message, type = 'success') {
            this.$message({
                message: message,
                type: type,
                center: true
            })
        },

    },
}
</script>
  