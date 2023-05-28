<template>
    <div class="jwchat" ref="jw">
        <dialogRole :dialogRoleVisible="dialogRoleVisible" @update:dialogRoleVisible="updatedialogRoleVisible"
            :roleObj="roleObj" @update-roleObj="updateRoleObj" @update-activeBar="activeWinbar" :avatars="avatars"
            @afterRoleSet="afterRoleSet">
        </dialogRole>

        <dialogCreateRoom :dialogRoomVisible="dialogRoomVisible" @update:dialogRoomVisible="updatedialogRoomVisible"
            @update-activeBar="activeWinbar" @join-room="searchJoinRoom" @create-room="searchCreateRoom" :rooms="rooms"
            :winBarConfig="winBarConfig"></dialogCreateRoom>
        <!-- 
        v-model	输入框中的文字	String	-	""
        taleList	会话内容	Array	-	[]
        toolConfig	工具栏配置	Object	-	{}
        width	JwChat界面框宽度	string	-	750px
        height	JwChat界面框高度	string	-	570px
        config	组件配置	Object	-	{}
        scrollType	消息自动到低	String	scroll	noroll
        showRightBox	显示右边内容	Boolean	false	true
        winBarConfig	多窗口配置
        quickList   自动匹配快捷回复
        @enter	输入框点击就发送或者回车触发的事件	输入的原始数据
        @clickTalk	点击聊天框列中的用户和昵称触发事件	当前对话数据
       -->
        <JwChat-index ref="jwChat" :config="config" :taleList="taleList" @enter="bindEnter" @clickTalk="talkEvent"
            v-model="inputMsg" :showRightBox="true" scrollType="scroll" :toolConfig="tool" :winBarConfig="winBarConfig"
            :quickList="config.quickList"  width="1000px" height="600px" >
            <!-- 窗口右边栏 -->
            
            <JwChat-rightbox :config="rightConfig" @click="rightClick" />
            <!-- 快捷回复 -->
            <!-- <JwChat-talk :Talelist="talk" :config="quickConfig" @event="bindTalk" /> -->
            <!-- 工具栏自定义插槽 -->
            <template slot="tools">
                <div style="width: 20rem text-align: right" @click="toolEvent(12)">
                    <!-- <JwChat-icon type="icon-lishi" title="自定义" /> -->
                </div>
            </template>
        </JwChat-index>
    </div>
</template>
   
<script>
import dialogRole from './dialogRole.vue'
import dialogCreateRoom from './dialogCreateRoom.vue'

import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullDown)

export default {
    name: "mainChat",
    components: { dialogRole, dialogCreateRoom },
    data() {
        return {
            roleObj: {
                avatar: String(Math.floor(Math.random() * 20) + 1),
                nickname: ['炫酷忍者', '热情的火焰', '加练的阿杰', '快乐小丸子', '爱吃鱼的强哥',
                    '老莫爱吃鱼', '喜欢蛋炒饭', '火锅杀手', '只爱珍珠奶茶', '喜欢睡懒觉'][Math.floor(Math.random() * 10)],
                gender: ['male', 'female'][Math.floor(Math.random() * 2)],
                img: 'static/img/avatart/male1.png',
            },
            // roleObj:{},
            avatars: [
                { value: '1', url: 'static/img/avatart/male1.png' },
                { value: '2', url: 'static/img/avatart/male2.png' },
                { value: '3', url: 'static/img/avatart/male3.png' },
                { value: '4', url: 'static/img/avatart/male4.png' },
                { value: '5', url: 'static/img/avatart/male5.png' },
                { value: '6', url: 'static/img/avatart/male6.png' },
                { value: '7', url: 'static/img/avatart/male7.png' },
                { value: '8', url: 'static/img/avatart/male8.png' },
                { value: '9', url: 'static/img/avatart/male9.png' },
                { value: '10', url: 'static/img/avatart/male10.png' },

                { value: '11', url: 'static/img/avatart/female1.png' },
                { value: '12', url: 'static/img/avatart/female2.png' },
                { value: '13', url: 'static/img/avatart/female3.png' },
                { value: '14', url: 'static/img/avatart/female4.png' },
                { value: '15', url: 'static/img/avatart/female5.png' },
                { value: '16', url: 'static/img/avatart/female6.png' },
                { value: '17', url: 'static/img/avatart/female7.png' },
                { value: '18', url: 'static/img/avatart/female8.png' },
                { value: '19', url: 'static/img/avatart/female9.png' },
                { value: '20', url: 'static/img/avatart/female10.png' },

            ],
            roleSetFirst: true,
            //数据库内所有的的房间 obj
            rooms: [],
            // 输入框中的文字
            inputMsg: "",
            // 会话内容----当前窗口的
            taleList: [],
            //会话内容----所有窗口的
            AlltaleList: {},
            //所有房间的在线用户
            roomsOnline: {
                'ChatLobby': [],
            },
            //websocket
            ws: [],
            // 工具栏配置
            tool: {
                // show: ['file', 'history', 'img', 'video', 'hongbao', 'more'],
                show:[],
                showEmoji: true,
                callback: this.toolEvent,
            },
            //通知框
            dialogRoleVisible: false,
            dialogRoomVisible: false,
            // 组件配置
            config: {
                img: "static/img/user.png",
                name: "用户",
                dept: "",
                callback: this.bindCover,
                historyConfig: {
                    show: true,
                    tip: '',
                    callback: this.bindLoadHistory,
                },
                // 自动匹配快捷回复
                quickList: [
                    // { text: "这里是jwchat，您想了解什么问题。", id: 3 },
                    // { text: "jwchat是最好的聊天组件", id: 4 },
                    // { text: "谁将烟焚散，散了纵横的牵绊；听弦断，断那三千痴缠。", id: 5 },
                    // { text: "长夏逝去。山野间的初秋悄然涉足。", id: 6 },
                    // { text: "江南风骨，天水成碧，天教心愿与身违。", id: 7 },
                    // { text: "总在不经意的年生。回首彼岸。纵然发现光景绵长。", id: 8 },
                    // { text: "外面的烟花奋力的燃着，屋里的人激情的说着情话", id: 10 },
                    // { text: "假如你是云，我就是雨，一生相伴，风风雨雨；", id: 11 },
                    // {
                    //     text: "即使泪水在眼中打转，我依旧可以笑的很美，这是你学不来的坚强。",
                    //     id: 12,
                    // },
                    // {
                    //     text: " 因为不知来生来世会不会遇到你，所以今生今世我会加倍爱你。",
                    //     id: 13,
                    // },
                ],
            },
            // 多窗口配置
            winBarConfig: {
                active: "ChatLobby", // 当前选中
                width: "160px", // 宽度大小
                listHeight: "60px", // 单个高度
                // 用户列表
                list: [
                    {
                        id: "ROLE",
                        img: "static/img/user.png",
                        name: "用户",
                        dept: "",
                        readNum: 0,
                        lock: true,
                        role: true,
                    },
                    {
                        id: "addRoom",
                        img: "static/img/add.png",
                        name: "创建房间",
                        dept: "",
                        readNum: 0,
                        lock: true,
                        add: true,
                    },
                    {
                        id: "private_link",
                        img: "static/img/link7.png",//link  link3
                        name: "私聊请求",
                        dept: "",
                        realdept: '',
                        readNum: 0,
                        lock: true,
                    },
                    {
                        id: "ChatLobby",
                        img: "static/img/meeting2.png",
                        name: "大厅",
                        realdept: "查看在线的聊天室",
                        dept: '',
                        roomType: 'public',
                        readNum: 0,
                        lock: true,
                    },
                ],
                callback: this.bindWinBar,
            },
            // 窗口右边栏配置
            rightConfig: {
                tip: "",

                // notice:
                //     "【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。",
                listTip: "当前在线",
                list: [],
            },
            // 快捷回复配置
            talk: [
                // "快捷回复1",
                // "快捷回复2",
                // "快捷回复3",
                // "快捷回复4",
                // "快捷回复5",
                // "快捷回复6",
            ],
            quickConfig: {
                nav: ["快捷回复", "超级回复"],
                showAdd: true,
                maxlength: 200,
                showHeader: true,
                showDeleteBtn: true,
            },
            websocketConfig: {
                // WS_BASE_URL: 'ws://localhost:8000/ws/chat/',
                WS_BASE_URL: 'ws://8.140.192.21:8000/ws/chat/',

                onOpen: (event, roomName) => {
                    console.log(`WebSocket is open now.---${roomName}`)
                    //打开后做一些事
                    if (roomName !== 'addRoom') {
                        this.AlltaleList[roomName] = []//一旦连接，就初始化其聊天记录为空数组，连接后，后端会自动send改room的每条聊天记录obj
                        this.roomsOnline[roomName] = []
                        const url = this.myavartor()
                        const msgObj = { ...this.roleObj }
                        this.ws[roomName].send(JSON.stringify({
                            'type': 'p_join_room',
                            'message': msgObj,
                        }))

                    }
                },
                onClose: (event, roomName) => {
                    console.log(`WebSocket is closed now.---${roomName}`)
                    const message = "已经断开与 " + roomName + " 的连接"
                    this.el_alert(message, 'info')
                    // this.openMsgBox()

                },
                onMessage: (event, roomName) => {
                    const data = JSON.parse(event.data)
                    const type = data.type
                    // console.log(type, JSON.parse(data.message))
                    if (type === 'rooms_history') {
                        const roomObj = JSON.parse(data.message)
                        //将房间加入网页的rooms缓存 加if是为了避免rooms中有重复的obj   调试过程会重复websocke send 所以...
                        if (this.rooms.find(item => item.id === roomObj.id) !== undefined) {
                            //找到了相同的，就跳过
                        }
                        else {
                            this.rooms.push(roomObj)
                        }
                    }
                    else if (type === 'message_history') {
                        const msgObj = JSON.parse(data.message)
                        // this.AlltaleList[roomName].push(msgObj)
                        this.bindGetMessage(roomName, msgObj)
                        const room = this.winBarConfig.list.find(item => item.id === roomName)
                        //初始话的历史都 已读
                        room.readNum = ''
                        // console.log('传来的历史', msgObj)                        
                    }
                    else if (type === 'other_chat_message') {
                        const msgObj = JSON.parse(data.message)
                        //根据receive的，将信息添加到相应winBar的taleList
                        this.bindGetMessage(roomName, msgObj)
                    }
                    else if (type === 'update_rooms') {
                        const roomObj = JSON.parse(data.message)
                        this.rooms.push(roomObj)
                        // this.robotSay('ChatLobby',)
                    }
                    else if (type === 'more_history') {
                        const msgObj = JSON.parse(data.message)
                        this.AlltaleList[roomName].splice(0, 0, msgObj)
                        this.taleList = this.AlltaleList[roomName]
                    }
                    else if (type === 'tips') {
                        const what_happen = JSON.parse(data.message).what_happen
                        this.el_alert(what_happen, 'warning')
                    }
                    else if (type === 'ChatLobby_init') {
                        const rooms = this.rooms
                        const roomsPublic = rooms.reduce((p, i) => {
                            if (i.roomType === 'public') p.push(i);
                            return p;
                        }, [])
                        const content = roomsPublic.map(({ id: id, name: text, dept: dept }) => ({ id, text, dept }))
                        //以上是为了避免把私密房间发到大厅里面
                        const title = "点击加入房间"
                        this.robotSay('ChatLobby', title, content)

                        //把roleObj的privateID设置一下
                        const privateID = JSON.parse(data.message)['role_privateID']
                        this.roleObj.id = privateID
                        this.winBarConfig.list[2].id = privateID
                        this.initOneWS(privateID)
                        // console.log("收到ChatLobby_init后", this.roleObj)
                    }
                    else if (type === 'p_join_room') {
                        const objList = data.message
                        const newRightList = []
                        for (var objStr of objList) {
                            // console.log(objStr)
                            const { nickname } = JSON.parse(objStr)
                            const obj = { ...JSON.parse(objStr), name: nickname }
                            newRightList.push(obj)
                        }
                        this.roomsOnline[roomName] = newRightList
                        if (roomName === this.winBarConfig.active) {
                            this.rightConfig.list = newRightList
                            this.activeWinbar(roomName)

                        }
                    }
                },
                onError: (event, roomName) => {
                    console.log(`WebSocket Error.------${roomName}`)
                },
            },
        }
    },
    methods: {
        myavartor() {
            const avatar = this.avatars.find(item => item.value === this.roleObj.avatar)
            const url = avatar ? avatar.url : null
            return url
        },

        searchJoinRoom(value) {
            //search
            this.initOneWS(value.id)
            this.winBarConfig.list.splice(4, 0, value)
            console.log("申请加入", value.id)
            this.activeWinbar(value.id)

        },
        searchCreateRoom(value) {
            const newRoom = { ...value }
            const { id, name, dept, roomType = 'public' } = newRoom
            this.initOneWS(newRoom.id)
            this.ws['addRoom'].send(JSON.stringify({
                'type': 'add_room',
                'message': newRoom,
                'roomType': roomType
            }))
            this.winBarConfig.list.splice(4, 0, newRoom)

            // const { id, name, dept,roomType='public' } = newRoom
            const content = [{ id, text: name, dept }]
            const title = "我新建了一个房间"
            const subtitle = dept
            const msgObj = {
                date: this.sendDate(),
                mine: true,
                name: this.roleObj.nickname,
                img: this.roleObj.img,
                id:this.roleObj.id,
                text: {
                    system: {
                        title: title,
                        subtitle: subtitle,
                        content: content,
                    },
                },
            }
            //添加 如果是公开房，就发送
            if (roomType === 'public') {
                this.sendMsgObj('ChatLobby', msgObj)
            }
            // this.sendMsgObj('ChatLobby', msgObj)

        },
        sendMsgObj(roomID, msgObj, type = 'add_message') {
            if (this.ws[roomID].readyState != 1) {
                this.el_alert("已与服务器断开连接", 'error')
            }
            else {
                this.AlltaleList[roomID].push(msgObj)
                this.ws[roomID].send(JSON.stringify({
                    'type': type,
                    'message': msgObj,
                }))
            }
        },
        updatedialogRoomVisible(value) {
            this.dialogRoomVisible = value
        },
        RoomDialog() {
            this.dialogRoomVisible = true
        },
        updatedialogRoleVisible(value) {
            this.dialogRoleVisible = value
        },
        updateRoleObj(newObj) {
            console.log(newObj)
            this.roleObj = newObj
            //把其他地方也更新一下
            const { id, nickname, img } = newObj
            const Obj = { ...this.winBarConfig.list[0], privateID: id, name: nickname, img }
            this.winBarConfig.list.splice(0, 1, Obj)

        },
        activeWinbar(idToFind) {
            const data = this.winBarConfig.list.find(item => item.id === idToFind)
            const { id, dept, realdept = ' ', roomType = 'public', name, img, add = false, role = false } = data
            const onlineNum = this.roomsOnline[id] ? this.roomsOnline[id].length : 0
            this.config = { ...this.config, roomType, id, dept: realdept, name: name + '(' + onlineNum + ')', img }
            this.winBarConfig.active = id
            this.taleList = this.AlltaleList[id]
            this.rightConfig.list = this.roomsOnline[id]
        },
        // 切换用户窗口，加载对应的历史记录
        bindWinBar(play = {},) {
            const { type, data = {} } = play
            console.log(play)
            if (type === "winBar") {
                const { id, dept, realdept = ' ', name, img, roomType = 'public', add = false, role = false } = data
                const onlineNum = this.roomsOnline[id] ? this.roomsOnline[id].length : 0
                this.config = { ...this.config, id, roomType, dept: realdept, name: name + '(' + onlineNum + ')', img }
                this.winBarConfig.active = id
                this.taleList = this.AlltaleList[id]
                this.rightConfig.list = this.roomsOnline[id]
                console.log("查看", this.roomsOnline[id])
                for (const room of this.winBarConfig.list) {
                    if (room.id == id) {
                        room.readNum = ''
                    }
                }
                if (add) {
                    this.RoomDialog()
                }
                if (role) {
                    // this.RoleDialog()
                    this.activeWinbar('ChatLobby')
                }
                if (document.documentElement.clientWidth <= 800) {
                    console.log("手机设备")
                    var winBar = document.querySelector(".winBar")
                    // console.log(winBar.style.display = 'none !important')
                    winBar.style.width = '0'
                    console.log(winBar.style)
                    // winBar.style.cssText+="display:none!important;"

                    var header = document.querySelector(".header")
                    if (header.children.length === 1) {
                        var backButton = document.createElement('i');
                    backButton.innerHTML = '<i class="el-icon-arrow-left"></i>'
                    backButton.addEventListener('click', function () {
                        var winBar = document.querySelector(".winBar")
                        winBar.style.width='100%'
                        
                    })
                    header.insertAdjacentElement('afterbegin',backButton)
                    console.log(header)
                    }                    
                }
            }
            if (type === "winBtn") {
                const { target: { id } = {} } = data
                const { list } = this.winBarConfig
                this.winBarConfig.list = list.reduce((p, i) => {
                    //i.lock用于锁定 用户、创建房间、大厅
                    if (i.lock || id != i.id) p.push(i)
                    return p
                }, [])
                if (id != "ROLE" && id != "addRoom" && id != "ChatLobby") {
                    this.ws[id].close()
                    //清空缓存的该room的聊天记录
                    this.AlltaleList[id] = []
                    this.activeWinbar('ChatLobby')
                    this.roomsOnline[id] = []
                }
            }
        },
        // 点击聊天框列中的用户和昵称触发事件
        talkEvent(play) {
            console.log(play)
            const { data, type } = play
            // console.log(type)
            if (type === 'systemItem') {
                //再分一次情况，是不是私人，私人就不用查找 join_room

                const roomID = data.id
                const join_room = this.rooms.find(item => item.id == roomID)
                const winbarroom = this.winBarConfig.list.find(item => item.id == roomID)
                if (winbarroom === undefined) {
                    if (data.type && data.type === 'private') {
                        this.searchJoinRoom(data)
                    } else {
                        this.searchJoinRoom(join_room)
                    }
                }
                else {
                    this.el_alert("你已经在该房间内！", 'warning')
                }

            }
            else if (type == 'img') {
                console.log('点击头像')
                if (!data.mine && data.id !== 'robot') {
                    this.openPrivateChat(data)
                }
            }

        },
        sendDate() {
            // 对Date的扩展，将 Date 转化为指定格式的String  
            // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
            // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
            Date.prototype.Format = function (fmt) {
                var o = {
                    "M+": this.getMonth() + 1, //月份   
                    "d+": this.getDate(), //日   
                    "H+": this.getHours(), //小时   
                    "m+": this.getMinutes(), //分   
                    "s+": this.getSeconds(), //秒   
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
                    "S": this.getMilliseconds() //毫秒   
                }
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
                return fmt
            }
            var time1 = new Date().Format("yyyy/MM/dd HH:mm:ss")
            return time1
        },
        // 输入框点击就发送或者回车触发的事件
        bindEnter(e) {
            console.log(e)
            // console.log(document.getElementById('robot-a'))

            const msg = this.inputMsg
            if (!msg) return
            const msgObj = {
                date: this.sendDate(),
                text: { text: msg },
                mine: true,
                name: this.roleObj.nickname,
                img: this.roleObj.img,
                id: this.roleObj.id,
            }
            const roomName = this.winBarConfig.active

            if (this.ws[roomName].readyState != 1) {
                this.el_alert("已与服务器断开连接", 'error')
                this.openMsgBox()

            }
            else {
                this.AlltaleList[roomName].push(msgObj)
                this.taleList = this.AlltaleList[roomName]
                this.ws[roomName].send(JSON.stringify({
                    'type': 'add_message',
                    'message': msgObj
                }))

                //
                const activeRoomObj = this.winBarConfig.list.find(item => item.id === roomName)
                activeRoomObj.dept = msg

            }
        },
        bindGetMessage(roomName, msgObj) {
            //根据receive的，将信息添加到相应winBar的taleList
            this.AlltaleList[roomName].push(msgObj)
            if (roomName == this.winBarConfig.active) {
                this.taleList = this.AlltaleList[roomName]
            }
            //未读+1
            for (const room of this.winBarConfig.list) {
                if (room.id === roomName) {
                    if (room.readNum !== '') {
                        room.readNum += 1
                    }
                    else {
                        room.readNum = 1
                    }
                    if (room.roomType && (room.roomType === 'public' || room.roomType === 'private')) {
                        if (typeof msgObj.text.text === "string") {
                            room.dept = msgObj.name + ':' + msgObj.text.text
                        }
                        else {
                            room.dept = msgObj.name + ':[无法预览]'
                        }
                    }
                    else {
                        if (typeof msgObj.text.text === "string") {
                            room.dept = msgObj.text.text
                        }
                        else {
                            room.dept = '[无法预览]'
                        }
                    }
                    // if (typeof msgObj.text.text === "string") {
                    //     room.dept = msgObj.name + ':' + msgObj.text.text
                    // }
                    // else {
                    //     room.dept = msgObj.name + ':[无法预览]'
                    // }
                    // room.dept=
                }
            }

        },
        // 快捷回复，组件点击选中事件
        bindTalk(play) {
            console.log("talk", play)
            const { key, value } = play
            if (key === "navIndex" && value == "1") {
                this.talk = ["回复1", "回复2", "回复3"]
            }
            if (key === "navIndex" && value == "2") {
                this.talk = ["超级回复1", "超级回复2", "超级回复3"]
            }
            if (key === "select") {
                this.inputMsg = value
                // this.bindEnter()
            }
            if (key === "delIndex") {
                this.talk.splice(value, 1)
            }
        },
        /**
         * @description: 点击加载更多的回调函数
         * @param {*}
         * @return {*}
         */
        bindLoadHistory() {
            const roomID = this.winBarConfig.active
            this.ws[roomID].send(JSON.stringify({
                'type': 'more_history',
                'roomid': roomID,
                'index_0': this.AlltaleList[roomID].length,
            }))
        },
        /**
         * @description:
         * @param {*} type 当前点击的按钮
         * @param {*} plyload 附加文件或者需要处理的数据
         * @return {*}
         */
        toolEvent(type, plyload) {
            console.log("tools", type, plyload)
        },
        robotSay(roomID, title, content, callback) {
            const msgObj = {
                date: this.sendDate(),
                mine: false,
                name: "Robot",
                img: "static/img/robot.png",
                id: "robot",
                text: {
                    system: {
                        title: title,
                        content: content,
                    },
                },
            }
            this.bindGetMessage(roomID, msgObj)
            callback && callback()
        },
        bindCover(event) {
            //展示room信息
            console.log("header", event)
            if (event.value.id == 'ChatLobby') {
                const rooms = this.rooms
                const roomsPublic = rooms.reduce((p, i) => {
                    if (i.roomType === 'public') p.push(i);
                    return p;
                }, [])
                const content = roomsPublic.map(({ id: id, name: text, dept: dept }) => ({ id, text, dept }))
                const title = "点击加入房间"
                this.robotSay('ChatLobby', title, content)
                // console.log("rooms=", this.rooms)
            }
            else {
                //显示房间信息
                console.log(event.value)
                if (event.value.roomType !== 'private-2') {
                    this.$message({
                        showClose: true,
                        dangerouslyUseHTMLString: true,
                        // duration:0,
                        message: '<h3>' + "房间ID: " + event.value.id + '</h3>' + '<h4>房间简介：' + event.value.realdept + '</h4>'
                    });
                }
            }
        },
        rightClick(type) {
            console.log("rigth", type)
            if (type.value.id === this.roleObj.id) {
                console.log('点击了自己的头像')
            }
            else {
                this.openPrivateChat(type.value)
            }
            // this.openPrivateChat(type.value)

        },
        initOneWS(roomName) {
            const WS_BASE_URL = this.websocketConfig.WS_BASE_URL
            const url = `${WS_BASE_URL}${roomName}/`
            try {
                const ws = new WebSocket(url)
                ws.onopen = (event) => this.websocketConfig.onOpen(event, roomName)
                ws.onclose = (event) => this.websocketConfig.onClose(event, roomName)
                ws.onmessage = (event) => this.websocketConfig.onMessage(event, roomName)
                ws.onerror = (event) => this.websocketConfig.onError(event, roomName)
                this.ws[roomName] = ws
            } catch (error) {
                console.error(`Error while creating websocket connection for room ${roomName}:`, error)
            }
        },
        initWebsocket() {
            for (const room of this.winBarConfig.list) {
                const roomName = room.id
                if (roomName != "ROLE" && roomName != 'private_link') {
                    this.initOneWS(roomName)
                }
            }
        },
        closeAllWebsocket() {
            var room
            for (room in this.winBarConfig.list) {
                const id = this.winBarConfig.list[room].id
                this.ws[id] && this.ws[id].close()
            }
        },
        handleMouseMove(event) {
            const roomName = this.winBarConfig.active
            // console.log('鼠标坐标：', event.clientX, event.clientY)
            for (const room of this.winBarConfig.list) {
                if (room.id == roomName) {
                    setTimeout(() => { room.readNum = '' }, 200)
                    break
                }
            }
        },
        openPrivateChat(value) {
            this.$confirm('向 ' + value.name + ' 发起私聊请求?', '提示', {
                confirmButtonText: '发送',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                const private_chat_id = this.roleObj.id + 'private' + value.id
                this.initOneWS(private_chat_id)
                const private_chat = {
                    id: private_chat_id,
                    name: value.name,
                    img: value.img,
                    dept: "",
                    readNum: 0,
                    roomType: 'private-2'
                }

                const { id, name, dept, roomType } = private_chat
                const content = [{ type: 'private', id, text: name, dept, name: this.roleObj.nickname, img: this.roleObj.img, roomType }]
                const title = "向你发起私人聊天请求"
                const subtitle = '点击进入聊天'

                const msgObj = {
                    date: this.sendDate(),
                    mine: true,
                    name: this.roleObj.nickname,
                    img: this.roleObj.img,
                    text: {
                        system: {
                            title: title,
                            subtitle: subtitle,
                            content: content,
                        },
                    },
                }

                const type = 'private_2'
                this.winBarConfig.list.splice(4, 0, private_chat)
                this.activeWinbar(id)

                this.ws['ChatLobby'].send(JSON.stringify({
                    'type': type,
                    'message': msgObj,
                    'receiver': value.id,
                }))
            }).catch(() => {
                //
            });
        },
        openMsgBox() {
            this.$confirm('你已经断开连接, 是否重连?', '提示', {
                confirmButtonText: '重连',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                for (const room of this.winBarConfig.list) {
                    this.initOneWS(room.id)
                }
                this.$message({
                    type: 'success',
                    message: '重连成功!',
                    center: true
                });
            }).catch(() => {
                this.$message({
                    type: 'error',
                    message: '已与服务器断开连接！',
                    center: true

                });
            });
        },
        el_alert(message, type = 'success') {
            this.$message({
                message: message,
                type: type,
                center: true
            })
        },
        beforeunloadFn(e) {
            this.closeAllWebsocket()
        }
        ,
        afterRoleSet() {
            this.initWebsocket()
            this.$el.querySelector('.ChatPage-main').addEventListener('mousemove', this.handleMouseMove)
            this.$emit('update-leftNav', 'chatNav')
        },
        // cancelRoleSet() {
        //     this.$emit('update-leftNav', 'roleNav')
        // }
    },
    created() {
        window.addEventListener('beforeunload', e => this.beforeunloadFn(e))
    },
    mounted() {
        this.dialogRoleVisible = true
    },
    destroyed() {
        window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
        this.closeAllWebsocket()
    },

}
</script>
  
<style scoped>
.jwchat {
    /* height: 100vh; */
    /* width: 100vh; */
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;

    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

}

@media screen and (max-width:800px) {
    .jwchat {
    /* height: 100vh; */
    /* width: 100vh; */
    /* font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px; */

    /* display: flex; */
    /* justify-content: center; 水平居中 */
    /* align-items: center; 垂直居中 */

}
}

</style>
<style>
.back{
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 15;
}
</style>