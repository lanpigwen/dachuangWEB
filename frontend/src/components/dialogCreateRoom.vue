<template>
    <div class="dialog">
        <el-dialog ref="dialog" :visible="dialogRoomVisible" @close="toggleDialog(outBar)">
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-chat-dot-square"></i> 加入房间</span>
                    <el-form ref="Findform" :model="formFindID" label-width="80px" label-position="left" :rules="rules">
                        <el-form-item label="房间号" prop="findID">
                            <el-input v-model="formFindID.findID"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitFindForm">加入</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-circle-plus"></i> 创建房间</span>
                    <el-form ref="Createform" :model="formCreateRoom" label-width="80px" label-position="left"
                        :rules="rules">

                        <div style="margin-top: 20px;margin-bottom: 20px">
                            <el-radio v-model="formCreateRoom.roomType" label="public" border size="medium">公开房间</el-radio>
                            <el-radio v-model="formCreateRoom.roomType" label="private" border size="medium">私密房间</el-radio>
                        </div>
                        <el-form-item label="房间号" prop="id">
                            <el-input v-model="formCreateRoom.id"></el-input>
                        </el-form-item>
                        <el-form-item label="房间名称" prop="name">
                            <el-input v-model="formCreateRoom.name"></el-input>
                        </el-form-item>
                        <el-form-item label="房间描述" prop="dept">
                            <el-input v-model="formCreateRoom.dept"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitFormCreate">创建</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script>
export default {
    // name: "dialogCreateRoom",
    props: ['dialogRoomVisible', 'rooms', 'winBarConfig'],
    data() {
        return {
            outBar: 'ChatLobby',
            formFindID: {
                findID: '',
            },
            formCreateRoom: {
                id: '',
                img: "static/img/workshop.png",
                name: '',
                dept: '',
                realdept:'',
                readNum: 0,
                roomType:'public'
            },
            rules: {
                findID: [{ required: true, message: '请输入房号', trigger: 'blur' },
                { validator: this.validateFindID, trigger: 'blur' }],
                id: [{ required: true, message: '请输入房号', trigger: 'blur' },
                { validator: this.validateCreateID, trigger: 'blur' }],
                name: [{ required: true, message: '请输入房名', trigger: 'blur' },],
                dept: [{ required: true, message: '请输入房间描述', trigger: 'blur' },],

            }

        }
    },
    methods: {
        validateCreateID(rule, value, callback) {
            const regExp = /^[A-Za-z0-9]+$/ // 正则表达式匹配英文和数字
            const valueRoom = this.rooms.find(item => item.id === value)
            const invalidValues = ['ROLE', 'addRoom', 'ChatLobby']
            //直接在这从后端获取已有的房间
            if (!value) {
                callback(new Error('请输入房号'))
            } else if (!regExp.test(value)) {
                callback(new Error('只能输入英文或数字'))
            } else if (valueRoom !== undefined || invalidValues.includes(value)) {
                callback(new Error('房号已存在！'))
            } else {
                callback()
            }
        },
        validateFindID(rule, value, callback) {
            const regExp = /^[A-Za-z0-9]+$/ // 正则表达式匹配英文和数字
            const valueRoom = this.rooms.find(item => item.id === value)
            const winBarRoom = this.winBarConfig.list.find(item => item.id === value)
            if (!value) {
                callback(new Error('请输入房号'))
            } else if (!regExp.test(value)) {
                callback(new Error('只能输入英文或数字'))
            } else if (valueRoom === undefined) {
                callback(new Error('不存在该房间！'))
            }
            else if (winBarRoom !== undefined) {
                callback(new Error('你已经在该房间内！'))
            }
            else {
                callback()
            }
        },

        toggleDialog(BarID) {
            // this.user = { ...this.roleObj }
            this.$emit('update:dialogRoomVisible', false)
            this.$emit('update-activeBar', BarID)
            //弹一个修改成功
        },
        submitFindForm() {
            this.$refs.Findform.validate(valid => {
                if (valid) {
                    //查找
                    // console.log(this.formFindID.findID)
                    const joinRoom = this.rooms.find(item => item.id === this.formFindID.findID)
                    this.$emit('join-room', joinRoom)
                    this.$emit('update:dialogRoomVisible', false)
                    //编辑触发@close时  返回时的BarId  光只是调用this.toggleDialog(joinRoom.id)的话，最后始终会自动触发@close
                    this.outBar = joinRoom.id
                }
                else {
                    // 表单验证不通过，提示用户错误信息
                    console.log('表单验证失败')
                }
            })
        },

        submitFormCreate() {
            this.$refs.Createform.validate(valid => {

                if (valid) {
                    // 表单验证通过，执行提交操作
                    this.formCreateRoom.realdept=this.formCreateRoom.dept
                    this.$emit('create-room', this.formCreateRoom)
                    this.$emit('update:dialogRoomVisible', false)
                    this.outBar = this.formCreateRoom.id
                }
                else {
                    // 表单验证不通过，提示用户错误信息
                    console.log('表单验证失败')
                    return false
                }
            })
        }
    }
}
</script>

<style>
@media screen and (max-width:800px) {
    .el-dialog{
    width: 100%!important;
    height: 100%!important;
    margin-bottom: 0!important;
    margin-top: 0!important;
}
/* .el-radio-group{
    max-height: 40vh!important;
    overflow-y: scroll!important;
} */
}
</style>