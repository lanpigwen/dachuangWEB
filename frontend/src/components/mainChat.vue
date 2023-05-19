<template>
    <div class="jwchat">
        <!-- <router-link to="/dialogRole" ></router-view> -->
        <dialogRole :dialogRoleVisible="dialogRoleVisible" @update:dialogRoleVisible="updatedialogRoleVisible"
            :roleObj="roleObj" @update-roleObj="updateRoleObj" @update-activeBar="activeWinbar" :avatars="avatars">
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
        <JwChat-index v-model="inputMsg" :taleList="taleList" :config="config" :showRightBox="true" scrollType="scroll"
            :winBarConfig="winBarConfig" :quickList="config.quickList" @enter="bindEnter" @clickTalk="talkEvent">
            <!-- 窗口右边栏 -->
            <JwChat-rightbox :config="rightConfig" @click="rightClick" />
            <!-- 快捷回复 -->
            <!-- <JwChat-talk :Talelist="talk" :config="quickConfig" @event="bindTalk" /> -->
            <!-- 工具栏自定义插槽 -->
            <template slot="tools">
                <div style="width: 20rem; text-align: right" @click="toolEvent(12)">
                    <JwChat-icon type="icon-lishi" title="自定义" />
                </div>
            </template>
        </JwChat-index>
    </div>
</template>
   
<script>
import dialogRole from './dialogRole.vue';
import dialogCreateRoom from './dialogCreateRoom.vue';
//const img = "https://www.baidu.com/img/flexible/logo/pc/result.png";
// const listData = [
//     {
//         date: "2020/04/25 21:19:07",
//         text: {
//             text: "<i class='el-icon-document-checked' style='font-size:2rem;'/>",
//             subLink: {
//                 text: "a.txt",
//                 prop: {
//                     underline: false,
//                 },
//             },
//         },
//         mine: false,
//         name: "留恋人间不羡仙",
//         img: "https://img0.baidu.com/it/u=3066115177,3339701526&fm=26&fmt=auto&gp=0.jpg",
//     },
//     {
//         date: "",
//         text: { text: "起床不" },
//         mine: false,
//         name: "留恋人间不羡仙",
//         img: "https://img0.baidu.com/it/u=3066115177,3339701526&fm=26&fmt=auto&gp=0.jpg",
//     },
//     {
//         text: "2020/04/25 21:19:07tip---------SS",
//         type: "tip",
//     },
//     {
//         date: "2020/04/25 21:19:07",
//         text: {
//             text: "<audio data-src='https://www.w3school.com.cn/i/horse.mp3'/>",
//         },
//         mine: false,
//         name: "只盼流星不盼雨",
//         img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
//     },
//     {
//         date: "2020/04/25 21:19:07",
//         text: { text: "<img data-src='" + img + "'/>" },
//         mine: false,
//         name: "只盼流星不盼雨",
//         img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
//     },
//     {
//         date: "2020/04/16 21:19:07",
//         text: {
//             text: "<video data-src='https://www.w3school.com.cn/i/movie.mp4' controls='controls' />",
//         },
//         mine: true,
//         name: "JwChat",
//         img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
//     },
//     {
//         date: "2021/03/02 13:14:21",
//         mine: false,
//         name: "留恋人间不羡仙",
//         img: "https://img0.baidu.com/it/u=3066115177,3339701526&fm=26&fmt=auto&gp=0.jpg",
//         text: {
//             system: {
//                 title: "在接入人工前，智能助手将为您首次应答。",
//                 subtitle: "猜您想问:",
//                 content: [
//                     {
//                         id: `system1`,
//                         text: "组件如何使用",
//                     },
//                     {
//                         id: `system2`,
//                         text: "组件参数在哪里查看",
//                     },
//                     {
//                         id: "system",
//                         text: "我可不可把组件用在商业",
//                     },
//                 ],
//             },
//         },
//     },
// ];
// const listData = [];
// function getListArr(roomID) {

//     const listSize = listData.length;
//     if (!size) {
//         size = listSize;
//     }
//     // let result = listData;
//     let result = [];
//     for (let i = 0; i < size; i++) {
//         const item = listData[i];
//         item.id = Math.random().toString(16).substr(-6);
//         result.push(item);
//     }
//     return [];
// }
export default {
    name: "mainChat",
    components: { dialogRole, dialogCreateRoom },
    data() {
        return {
            roleSetFirst: true,
            //数据库内所有的的房间 obj
            rooms: [],
            // 输入框中的文字
            inputMsg: "",
            // 会话内容----当前窗口的
            taleList: [],
            //会话内容----所有窗口的
            AlltaleList: {},
            // 工具栏配置
            tool: {
                //   show: ['file', 'history', 'img', ['文件1', '', '美图']],
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
                    tip: "滚动到顶时候显示的提示",
                    callback: this.bindLoadHistory,
                },
                // 自动匹配快捷回复
                quickList: [
                    { text: "这里是jwchat，您想了解什么问题。", id: 3 },
                    { text: "jwchat是最好的聊天组件", id: 4 },
                    { text: "谁将烟焚散，散了纵横的牵绊；听弦断，断那三千痴缠。", id: 5 },
                    { text: "长夏逝去。山野间的初秋悄然涉足。", id: 6 },
                    { text: "江南风骨，天水成碧，天教心愿与身违。", id: 7 },
                    { text: "总在不经意的年生。回首彼岸。纵然发现光景绵长。", id: 8 },
                    { text: "外面的烟花奋力的燃着，屋里的人激情的说着情话", id: 10 },
                    { text: "假如你是云，我就是雨，一生相伴，风风雨雨；", id: 11 },
                    {
                        text: "即使泪水在眼中打转，我依旧可以笑的很美，这是你学不来的坚强。",
                        id: 12,
                    },
                    {
                        text: " 因为不知来生来世会不会遇到你，所以今生今世我会加倍爱你。",
                        id: 13,
                    },
                ],
            },
            // 多窗口配置
            winBarConfig: {
                active: "win01", // 当前选中
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
                        id: "ChatLobby",
                        img: "static/img/meeting2.png",
                        name: "大厅",
                        dept: "查看在线的聊天室",
                        readNum: 0,
                        lock: true,
                    },
                    // {
                    //     id: "win00",
                    //     img: "https://img1.baidu.com/it/u=2109725846,3376113789&fm=26&fmt=auto&gp=0.jpg",
                    //     name: "JwChat",
                    //     dept: "最简单、最便捷",
                    //     readNum: 0,
                    // },
                    // {
                    //     id: "win01",
                    //     img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
                    //     name: "阳光明媚爱万物",
                    //     dept: "沙拉黑油",
                    //     readNum: 0,
                    // },
                    // {
                    //     id: "win02",
                    //     img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
                    //     name: "只盼流星不盼雨",
                    //     dept: "最后说的话",
                    //     readNum: 0,
                    // },
                    // {
                    //     id: "win03",
                    //     img: "https://img0.baidu.com/it/u=3066115177,3339701526&fm=26&fmt=auto&gp=0.jpg",
                    //     name: "留恋人间不羡仙",
                    //     dept: "这里可以放万物",
                    //     readNum: 0,
                    // },
                    // {
                    //     id: "win04",
                    //     img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
                    //     name: "阳光明媚爱万物",
                    //     dept: "官方客服",
                    //     readNum: 0,
                    // },

                ],
                callback: this.bindWinBar,
            },
            // 窗口右边栏配置
            rightConfig: {
                tip: "群公告",
                notice:
                    "【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。",
                listTip: "当前在线",
                list: [
                    {
                        name: "JwChat",
                        img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
                        id: 1,
                    },
                    {
                        id: 2,
                        name: "JwChat",
                        img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
                    },
                    {
                        id: 3,
                        name: "JwChat",
                        img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
                    },
                    {
                        id: 4,
                        name: "留恋人间不羡仙",
                        img: "https://img0.baidu.com/it/u=3066115177,3339701526&fm=26&fmt=auto&gp=0.jpg",
                    },
                    {
                        name: "只盼流星不盼雨",
                        img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
                    },
                ],
            },
            // 快捷回复配置
            talk: [
                "快捷回复1",
                "快捷回复2",
                "快捷回复3",
                "快捷回复4",
                "快捷回复5",
                "快捷回复6",
            ],
            quickConfig: {
                nav: ["快捷回复", "超级回复"],
                showAdd: true,
                maxlength: 200,
                showHeader: true,
                showDeleteBtn: true,
            },
            rightConfig2: {
                listTip: "当前在线",
                //   notice: '【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。点个赞再走吧 ',
                list: [
                    {
                        name: "JwChat",
                        img: "https://img1.baidu.com/it/u=2109725846,3376113789&fm=26&fmt=auto&gp=0.jpg",
                    },
                    {
                        name: "留恋人间不羡仙",
                        img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
                    },
                    {
                        name: "只盼流星不盼雨",
                        img: "https://img1.baidu.com/it/u=2109725846,3376113789&fm=26&fmt=auto&gp=0.jpg",
                    },
                ],
            },
            websocketConfig: {
                WS_BASE_URL: 'ws://localhost:8000/ws/chat/',
                onOpen:(event, roomName) =>{
                    console.log(`WebSocket is open now.------${roomName}`);
                    //打开后做一些事
                    if (roomName !== 'addRoom') {
                        this.AlltaleList[roomName] = [];//一旦连接，就初始化其聊天记录为空数组，连接后，后端会自动send改room的每条聊天记录obj
                    }

                },
                onClose:(event, roomName)=> {
                    console.log(`WebSocket is closed now.------${roomName}`);
                    
                },
                onMessage: (event, roomName) => {
                    const data = JSON.parse(event.data);
                    const type = data.type;
                    console.log(type,JSON.parse(data.message));
                    if (type === 'add_room_message') {
                        const roomObj = JSON.parse(data.message);
                        //将房间加入网页的rooms缓存 加if是为了避免rooms中有重复的obj   调试过程会重复websocke send 所以...
                        if (this.rooms.find(item => item.id === roomObj.id) !== undefined) {
                            //找到了相同的，就跳过
                        }
                        else {
                            this.rooms.push(roomObj);
                        }                        
                    }
                    else if (type === 'return_history_message') {
                        const msgObj = JSON.parse(data.message);
                        // this.AlltaleList[roomName].push(msgObj);
                        this.bindGetMessage(roomName, msgObj);
                        // console.log('传来的历史', msgObj);                        
                    }
                    else if (type === 'other_chat_message') {
                        const msgObj = JSON.parse(data.message);
                        //根据receive的，将信息添加到相应winBar的taleList
                        this.bindGetMessage(roomName, msgObj);                        
                    }
                    //——————————————————有人新建了聊天——————————————————————————
                    // if (roomName == 'addRoom') {
                    //     const roomObj = JSON.parse(data.message);
                    //     //将房间加入网页的rooms缓存 加if是为了避免rooms中有重复的obj   调试过程会重复websocke send 所以...
                    //     if (this.rooms.find(item => item.id === roomObj.id) !== undefined) {
                    //         //找到了相同的，就跳过
                    //     }
                    //     else {
                    //         this.rooms.push(roomObj);
                    //     }
                    // }
                    // //———————————————————聊天记录—————————————————————————
                    // else if (data.history !== undefined) {
                    //     const msgObj = JSON.parse(data.message);
                    //     this.AlltaleList[roomName].push(msgObj);
                    //     console.log('传来的历史', msgObj);
                    // }
                    // //————————————————————别人实时发的消息————————————————————————
                    // else {
                    //     const msgObj = JSON.parse(data.message);
                    //     //根据receive的，将信息添加到相应winBar的taleList
                    //     console.log(data);
                    //     this.bindGetMessage(roomName, msgObj);
                    // }
                },
                onError:(event, roomName)=> {
                    console.log(`WebSocket Error.------${roomName}`);
                },
            },
        };
    },
    methods: {
        searchJoinRoom(value) {
            //search
            this.initOneWS(value.id);
            this.winBarConfig.list.splice(3, 0, value);
            console.log("申请加入", value);

        },
        searchCreateRoom(value) {
            const newRoom = { ...value };
            this.initOneWS(newRoom.id);
            this.ws['addRoom'].send(JSON.stringify({
                'message': newRoom
            }));
            this.winBarConfig.list.splice(3, 0, newRoom);
            console.log("申请创建" + newRoom);

        },
        updatedialogRoomVisible(value) {
            this.dialogRoomVisible = value;
        },
        RoleDialog() {
            this.dialogRoleVisible = true;
        },
        RoomDialog() {
            this.dialogRoomVisible = true;
        },
        updatedialogRoleVisible(value) {
            this.dialogRoleVisible = value;
        },
        updateRoleObj(newObj) {
            this.$emit('update-roleObj', newObj);
        },
        activeWinbar(idToFind) {
            const data = this.winBarConfig.list.find(item => item.id === idToFind)
            const { id, dept, name, img, add = false, role = false } = data;
            this.config = { ...this.config, id, dept, name, img };
            this.winBarConfig.active = id;
            this.taleList = this.AlltaleList[id];
        },
        // 切换用户窗口，加载对应的历史记录
        bindWinBar(play = {},) {
            const { type, data = {} } = play;
            console.log(play);
            if (type === "winBar") {
                const { id, dept, name, img, add = false, role = false } = data;
                this.config = { ...this.config, id, dept, name, img };
                this.winBarConfig.active = id;
                this.taleList = this.AlltaleList[id];
                for (const room of this.winBarConfig.list) {
                    if (room.id == id) {
                        room.readNum = 0;
                    }
                }
                if (add) {
                    this.RoomDialog();
                }
                if (role) {
                    this.RoleDialog();
                }


            }
            if (type === "winBtn") {
                const { target: { id } = {} } = data;
                const { list } = this.winBarConfig;
                this.winBarConfig.list = list.reduce((p, i) => {
                    //i.lock用于锁定 用户、创建房间、大厅
                    if (i.lock || id != i.id) p.push(i);
                    return p;
                }, []);
                if (id != "ROLE" && id != "addRoom" && id != "ChatLobby") {
                    this.ws[id].close();
                    //清空缓存的该room的聊天记录
                    this.AlltaleList[id] = [];
                }

                // //清空缓存的该room的聊天记录
                // this.AlltaleList[id] = [];
            }
        },
        // 点击聊天框列中的用户和昵称触发事件
        talkEvent(play) {
            console.log(play);
            // alert("点击了头像");
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
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
            var time1 = new Date().Format("yyyy/MM/dd HH:mm:ss");
            return time1
        },
        // 输入框点击就发送或者回车触发的事件
        bindEnter(e) {
            console.log(e);
            console.log(document.getElementById('robot-a'));
            const avatar = this.avatars.find(item => item.value === this.roleObj.avatar);
            const url = avatar ? avatar.url : null;

            const msg = this.inputMsg;
            if (!msg) return;
            const msgObj = {
                date: this.sendDate(),
                text: { text: msg },
                mine: true,
                name: this.roleObj.nickname,
                img: url,
            };
            const roomName = this.winBarConfig.active;
            // alert(this.ws[roomName].readyState);
            if (this.ws[roomName].readyState != 1) { alert("已与服务器断开连接"); return; }
            this.AlltaleList[roomName].push(msgObj);
            this.taleList = this.AlltaleList[roomName];
            this.ws[roomName].send(JSON.stringify({
                'message': msgObj
            }));
        },
        bindGetMessage(roomName, msgObj) {
            //根据receive的，将信息添加到相应winBar的taleList
            // console.log("收到的消息气泡",msgObj);
            this.AlltaleList[roomName].push(msgObj);
            if (roomName == this.winBarConfig.active) {
                this.taleList = this.AlltaleList[roomName];
            }
            //未读+1
            for (const room of this.winBarConfig.list) {
                if (room.id == roomName) {
                    room.readNum += 1;
                }
            }
        },
        // 快捷回复，组件点击选中事件
        bindTalk(play) {
            console.log("talk", play);
            const { key, value } = play;
            if (key === "navIndex" && value == "1") {
                this.talk = ["回复1", "回复2", "回复3"];
            }
            if (key === "navIndex" && value == "2") {
                this.talk = ["超级回复1", "超级回复2", "超级回复3"];
            }
            if (key === "select") {
                this.inputMsg = value;
                // this.bindEnter();
            }
            if (key === "delIndex") {
                this.talk.splice(value, 1);
            }
        },
        /**
         * @description: 点击加载更多的回调函数
         * @param {*}
         * @return {*}
         */
        bindLoadHistory() {
            const history = new Array(3).fill().map((i, j) => {
                return {
                    date: "2020/05/20 23:19:07",
                    text: { text: j + new Date() },
                    mine: false,
                    name: "JwChat-hhhh",
                    img: "https://img1.baidu.com/it/u=31094377,222380373&fm=26&fmt=auto&gp=0.jpg",
                };
            });
            let list = history.concat(this.taleList);
            this.taleList = list;
            console.log("加载历史", list, history);
        },
        /**
         * @description:
         * @param {*} type 当前点击的按钮
         * @param {*} plyload 附加文件或者需要处理的数据
         * @return {*}
         */
        toolEvent(type, plyload) {
            console.log("tools", type, plyload);
        },
        bindCover(event) {
            //展示room信息
            console.log("header", event);
            if (event.value.id == 'ChatLobby') {
                const roomMessageObj = {
                    date: this.sendDate(),
                    mine: false,
                    name: "Robot",
                    img: "static/img/robot.png",
                    text: {
                        // text: '<i class="el-icon-edit" @click="alert("点击了链接")"></i>',
                        text:'<div id="robot-a"><a href="#" class="robot-a">W3School1</a></br><a href="#" class="robot-a">W3School2</a></div>',
                        // system: {
                        //     title: "在接入人工前，智能助手将为您首次应答。",
                        //     subtitle: "猜您想问:",
                        //     content: [
                        //         {
                        //             id: `system1`,
                        //             text: "组件如何使用",
                        //         },
                        //         {
                        //             id: `system2`,
                        //             text: "组件参数在哪里查看",
                        //         },
                        //         {
                        //             id: "system",
                        //             text: "我可不可把组件用在商业",
                        //         },
                        //     ],
                        //     callback:console.log(event),
                        // },
                    },
                };
                this.bindGetMessage('ChatLobby', roomMessageObj);
                console.log(document.getElementById('robot-a'));
                console.log("rooms=",this.rooms);
            }
        },
        rightClick(type) {
            console.log("rigth", type);
        },
        initOneWS(roomName) {
            const WS_BASE_URL = this.websocketConfig.WS_BASE_URL;
            const url = `${WS_BASE_URL}${roomName}/`;
            try {
                const ws = new WebSocket(url);
                ws.onopen = (event) => this.websocketConfig.onOpen(event, roomName);
                ws.onclose = (event) => this.websocketConfig.onClose(event, roomName);
                ws.onmessage = (event) => this.websocketConfig.onMessage(event, roomName);
                ws.onerror = (event) => this.websocketConfig.onError(event, roomName);
                this.ws[roomName] = ws;
            } catch (error) {
                console.error(`Error while creating websocket connection for room ${roomName}:`, error);
            }
        },
        initWebsocket() {
            for (const room of this.winBarConfig.list) {
                const roomName = room.id;
                if (roomName != "ROLE") {
                    this.initOneWS(roomName);
                }
            }
        },
        closeAllWebsocket() {
            var room;
            for (room in this.winBarConfig.list) {
                const id = this.winBarConfig.list[room].id;
                this.ws[id].close();
            }
        },
        handleMouseMove(event) {
            const roomName = this.winBarConfig.active;
            // console.log('鼠标坐标：', event.clientX, event.clientY);
            for (const room of this.winBarConfig.list) {
                if (room.id == roomName) {
                    setTimeout(() => { room.readNum = 0; }, 200);
                    break;
                }
            }
        },
    },
    props: ['avatars', 'roleObj'],
    mounted() {
        this.dialogRoleVisible = true;
        this.ws = [];
        this.initWebsocket();
        this.$el.querySelector('.ChatPage-main').addEventListener('mousemove', this.handleMouseMove);
        this.$emit('update-leftNav', 'chatNav');
    },
    destroyed() {
        // this.closeAllWebsocket();
    },

};
</script>
  
<style>
.jwchat {
    /* height: 100vh; */
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}
</style>
  