webpackJsonp([1],{"/qyi":function(e,t){},"1FS0":function(e,t){},JeWR:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),o=i("BO1k"),r=i.n(o),n=i("mvHQ"),s=i.n(n),l=i("Dd8w"),m=i.n(l),u={props:["dialogRoleVisible","avatars","roleObj"],data:function(){return{user:m()({},this.roleObj),rules:{nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}]}}},methods:{openMsgBox:function(){var e=this;this.$confirm("请设置用户信息！","提示",{confirmButtonText:"重新设置",cancelButtonText:"返回首页",type:"warning",showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1}).then(function(){}).catch(function(){e.$emit("update:dialogRoleVisible",!1),e.$router.push("/")})},submitForm:function(){var e=this;this.$refs.userForm.validate(function(t){if(!t)return console.log("表单验证失败！"),!1;var i=e.avatars.find(function(t){return t.value===e.user.avatar}),a=i?i.url:null;e.user.img=a,e.$emit("update-roleObj",e.user),e.$emit("afterRoleSet"),e.$emit("update:dialogRoleVisible",!1),e.$emit("update-activeBar","ChatLobby"),e.el_alert("保存成功！")})},el_alert:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$message({message:e,type:t,center:!0})}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dialog"},[i("el-dialog",{attrs:{title:"用户设置",visible:e.dialogRoleVisible,"show-close":!1,top:"0vh"}},[i("div",{staticClass:"roleSet"},[i("el-form",{ref:"userForm",attrs:{model:e.user,rules:e.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"头像"}},[i("el-radio-group",{model:{value:e.user.avatar,callback:function(t){e.$set(e.user,"avatar",t)},expression:"user.avatar"}},e._l(e.avatars,function(t){return i("el-radio",{key:t.value,attrs:{label:t.value}},[i("el-avatar",{class:{selected:e.user.avatar===t.value},attrs:{size:80,src:t.url}})],1)}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[i("el-input",{model:{value:e.user.nickname,callback:function(t){e.$set(e.user,"nickname",t)},expression:"user.nickname"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"性别"}},[i("el-radio",{attrs:{label:"male",border:"",size:"medium"},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},[e._v("男性")]),e._v(" "),i("el-radio",{attrs:{label:"female",border:"",size:"medium"},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},[e._v("女性")])],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.openMsgBox}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=i("VU/8")(u,d,!1,function(e){i("zYbz")},null,null).exports,f={props:["dialogRoomVisible","rooms","winBarConfig"],data:function(){return{outBar:"ChatLobby",formFindID:{findID:""},formCreateRoom:{id:"",img:"static/img/workshop.png",name:"",dept:"",realdept:"",readNum:0,roomType:"public"},rules:{findID:[{required:!0,message:"请输入房号",trigger:"blur"},{validator:this.validateFindID,trigger:"blur"}],id:[{required:!0,message:"请输入房号",trigger:"blur"},{validator:this.validateCreateID,trigger:"blur"}],name:[{required:!0,message:"请输入房名",trigger:"blur"}],dept:[{required:!0,message:"请输入房间描述",trigger:"blur"}]}}},methods:{validateCreateID:function(e,t,i){var a=this.rooms.find(function(e){return e.id===t});t?/^[A-Za-z0-9]+$/.test(t)?void 0!==a||["ROLE","addRoom","ChatLobby"].includes(t)?i(new Error("房号已存在！")):i():i(new Error("只能输入英文或数字")):i(new Error("请输入房号"))},validateFindID:function(e,t,i){var a=this.rooms.find(function(e){return e.id===t}),o=this.winBarConfig.list.find(function(e){return e.id===t});t?/^[A-Za-z0-9]+$/.test(t)?void 0===a?i(new Error("不存在该房间！")):void 0!==o?i(new Error("你已经在该房间内！")):i():i(new Error("只能输入英文或数字")):i(new Error("请输入房号"))},toggleDialog:function(e){this.$emit("update:dialogRoomVisible",!1),this.$emit("update-activeBar",e)},submitFindForm:function(){var e=this;this.$refs.Findform.validate(function(t){if(t){var i=e.rooms.find(function(t){return t.id===e.formFindID.findID});e.$emit("join-room",i),e.$emit("update:dialogRoomVisible",!1),e.outBar=i.id}else console.log("表单验证失败")})},submitFormCreate:function(){var e=this;this.$refs.Createform.validate(function(t){if(!t)return console.log("表单验证失败"),!1;e.formCreateRoom.realdept=e.formCreateRoom.dept,e.$emit("create-room",e.formCreateRoom),e.$emit("update:dialogRoomVisible",!1),e.outBar=e.formCreateRoom.id})}}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dialog"},[i("el-dialog",{ref:"dialog",attrs:{visible:e.dialogRoomVisible},on:{close:function(t){return e.toggleDialog(e.outBar)}}},[i("el-tabs",{attrs:{type:"border-card"}},[i("el-tab-pane",[i("span",{attrs:{slot:"label"},slot:"label"},[i("i",{staticClass:"el-icon-chat-dot-square"}),e._v(" 加入房间")]),e._v(" "),i("el-form",{ref:"Findform",attrs:{model:e.formFindID,"label-width":"80px","label-position":"left",rules:e.rules}},[i("el-form-item",{attrs:{label:"房间号",prop:"findID"}},[i("el-input",{model:{value:e.formFindID.findID,callback:function(t){e.$set(e.formFindID,"findID",t)},expression:"formFindID.findID"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.submitFindForm}},[e._v("加入")])],1)],1)],1),e._v(" "),i("el-tab-pane",[i("span",{attrs:{slot:"label"},slot:"label"},[i("i",{staticClass:"el-icon-circle-plus"}),e._v(" 创建房间")]),e._v(" "),i("el-form",{ref:"Createform",attrs:{model:e.formCreateRoom,"label-width":"80px","label-position":"left",rules:e.rules}},[i("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[i("el-radio",{attrs:{label:"public",border:"",size:"medium"},model:{value:e.formCreateRoom.roomType,callback:function(t){e.$set(e.formCreateRoom,"roomType",t)},expression:"formCreateRoom.roomType"}},[e._v("公开房间")]),e._v(" "),i("el-radio",{attrs:{label:"private",border:"",size:"medium"},model:{value:e.formCreateRoom.roomType,callback:function(t){e.$set(e.formCreateRoom,"roomType",t)},expression:"formCreateRoom.roomType"}},[e._v("私密房间")])],1),e._v(" "),i("el-form-item",{attrs:{label:"房间号",prop:"id"}},[i("el-input",{model:{value:e.formCreateRoom.id,callback:function(t){e.$set(e.formCreateRoom,"id",t)},expression:"formCreateRoom.id"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"房间名称",prop:"name"}},[i("el-input",{model:{value:e.formCreateRoom.name,callback:function(t){e.$set(e.formCreateRoom,"name",t)},expression:"formCreateRoom.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"房间描述",prop:"dept"}},[i("el-input",{model:{value:e.formCreateRoom.dept,callback:function(t){e.$set(e.formCreateRoom,"dept",t)},expression:"formCreateRoom.dept"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.submitFormCreate}},[e._v("创建")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},h=i("VU/8")(f,g,!1,null,null,null).exports,v=i("cVr7"),p=i("t02I");v.a.use(p.a);var b={name:"mainChat",components:{dialogRole:c,dialogCreateRoom:h},data:function(){var e=this;return{roleObj:{avatar:String(Math.floor(20*Math.random())+1),nickname:["炫酷忍者","热情的火焰","加练的阿杰","快乐小丸子","爱吃鱼的强哥","老莫爱吃鱼","喜欢蛋炒饭","火锅杀手","只爱珍珠奶茶","喜欢睡懒觉"][Math.floor(10*Math.random())],gender:["male","female"][Math.floor(2*Math.random())],img:"static/img/avatart/male1.png"},avatars:[{value:"1",url:"static/img/avatart/male1.png"},{value:"2",url:"static/img/avatart/male2.png"},{value:"3",url:"static/img/avatart/male3.png"},{value:"4",url:"static/img/avatart/male4.png"},{value:"5",url:"static/img/avatart/male5.png"},{value:"6",url:"static/img/avatart/male6.png"},{value:"7",url:"static/img/avatart/male7.png"},{value:"8",url:"static/img/avatart/male8.png"},{value:"9",url:"static/img/avatart/male9.png"},{value:"10",url:"static/img/avatart/male10.png"},{value:"11",url:"static/img/avatart/female1.png"},{value:"12",url:"static/img/avatart/female2.png"},{value:"13",url:"static/img/avatart/female3.png"},{value:"14",url:"static/img/avatart/female4.png"},{value:"15",url:"static/img/avatart/female5.png"},{value:"16",url:"static/img/avatart/female6.png"},{value:"17",url:"static/img/avatart/female7.png"},{value:"18",url:"static/img/avatart/female8.png"},{value:"19",url:"static/img/avatart/female9.png"},{value:"20",url:"static/img/avatart/female10.png"}],roleSetFirst:!0,rooms:[],inputMsg:"",taleList:[],AlltaleList:{},roomsOnline:{ChatLobby:[]},ws:[],tool:{show:[],showEmoji:!0,callback:this.toolEvent},dialogRoleVisible:!1,dialogRoomVisible:!1,config:{img:"static/img/user.png",name:"用户",dept:"",callback:this.bindCover,historyConfig:{show:!0,tip:"",callback:this.bindLoadHistory},quickList:[]},winBarConfig:{active:"ChatLobby",width:"160px",listHeight:"60px",list:[{id:"ROLE",img:"static/img/user.png",name:"用户",dept:"",readNum:0,lock:!0,role:!0},{id:"addRoom",img:"static/img/add.png",name:"创建房间",dept:"",readNum:0,lock:!0,add:!0},{id:"private_link",img:"static/img/link7.png",name:"私聊请求",dept:"",realdept:"",readNum:0,lock:!0},{id:"ChatLobby",img:"static/img/meeting2.png",name:"大厅",realdept:"查看在线的聊天室",dept:"",roomType:"public",readNum:0,lock:!0}],callback:this.bindWinBar},rightConfig:{tip:"",listTip:"当前在线",list:[]},talk:[],quickConfig:{nav:["快捷回复","超级回复"],showAdd:!0,maxlength:200,showHeader:!0,showDeleteBtn:!0},websocketConfig:{WS_BASE_URL:"ws://localhost:8000/ws/chat/",onOpen:function(t,i){if(console.log("WebSocket is open now.---"+i),"addRoom"!==i){e.AlltaleList[i]=[],e.roomsOnline[i]=[];e.myavartor();var a=m()({},e.roleObj);e.ws[i].send(s()({type:"p_join_room",message:a}))}},onClose:function(t,i){console.log("WebSocket is closed now.---"+i);var a="已经断开与 "+i+" 的连接";e.el_alert(a,"info")},onMessage:function(t,i){var a=JSON.parse(t.data),o=a.type;if("rooms_history"===o){var n=JSON.parse(a.message);void 0!==e.rooms.find(function(e){return e.id===n.id})||e.rooms.push(n)}else if("message_history"===o){var s=JSON.parse(a.message);e.bindGetMessage(i,s),e.winBarConfig.list.find(function(e){return e.id===i}).readNum=""}else if("other_chat_message"===o){var l=JSON.parse(a.message);e.bindGetMessage(i,l)}else if("update_rooms"===o){var u=JSON.parse(a.message);e.rooms.push(u)}else if("more_history"===o){var d=JSON.parse(a.message);e.AlltaleList[i].splice(0,0,d),e.taleList=e.AlltaleList[i]}else if("tips"===o){var c=JSON.parse(a.message).what_happen;e.el_alert(c,"warning")}else if("ChatLobby_init"===o){var f=e.rooms.reduce(function(e,t){return"public"===t.roomType&&e.push(t),e},[]).map(function(e){return{id:e.id,text:e.name,dept:e.dept}});e.robotSay("ChatLobby","点击加入房间",f);var g=JSON.parse(a.message).role_privateID;e.roleObj.id=g,e.winBarConfig.list[2].id=g,e.initOneWS(g)}else if("p_join_room"===o){var h=a.message,v=[],p=!0,b=!1,y=void 0;try{for(var w,C=r()(h);!(p=(w=C.next()).done);p=!0){var R=w.value,k=JSON.parse(R).nickname,_=m()({},JSON.parse(R),{name:k});v.push(_)}}catch(e){b=!0,y=e}finally{try{!p&&C.return&&C.return()}finally{if(b)throw y}}e.roomsOnline[i]=v,i===e.winBarConfig.active&&(e.rightConfig.list=v,e.activeWinbar(i))}},onError:function(e,t){console.log("WebSocket Error.------"+t)}}}},methods:{myavartor:function(){var e=this,t=this.avatars.find(function(t){return t.value===e.roleObj.avatar});return t?t.url:null},searchJoinRoom:function(e){this.initOneWS(e.id),this.winBarConfig.list.splice(4,0,e),console.log("申请加入",e.id),this.activeWinbar(e.id)},searchCreateRoom:function(e){var t=m()({},e),i=t.id,a=t.name,o=t.dept,r=t.roomType,n=void 0===r?"public":r;this.initOneWS(t.id),this.ws.addRoom.send(s()({type:"add_room",message:t,roomType:n})),this.winBarConfig.list.splice(4,0,t);var l=[{id:i,text:a,dept:o}],u=o,d={date:this.sendDate(),mine:!0,name:this.roleObj.nickname,img:this.roleObj.img,text:{system:{title:"我新建了一个房间",subtitle:u,content:l}}};"public"===n&&this.sendMsgObj("ChatLobby",d)},sendMsgObj:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"add_message";1!=this.ws[e].readyState?this.el_alert("已与服务器断开连接","error"):(this.AlltaleList[e].push(t),this.ws[e].send(s()({type:i,message:t})))},updatedialogRoomVisible:function(e){this.dialogRoomVisible=e},RoomDialog:function(){this.dialogRoomVisible=!0},updatedialogRoleVisible:function(e){this.dialogRoleVisible=e},updateRoleObj:function(e){console.log(e),this.roleObj=e;var t=e.id,i=e.nickname,a=e.img,o=m()({},this.winBarConfig.list[0],{privateID:t,name:i,img:a});this.winBarConfig.list.splice(0,1,o)},activeWinbar:function(e){var t=this.winBarConfig.list.find(function(t){return t.id===e}),i=t.id,a=(t.dept,t.realdept),o=void 0===a?" ":a,r=t.roomType,n=void 0===r?"public":r,s=t.name,l=t.img,u=(t.add,t.role,this.roomsOnline[i]?this.roomsOnline[i].length:0);this.config=m()({},this.config,{roomType:n,id:i,dept:o,name:s+"("+u+")",img:l}),this.winBarConfig.active=i,this.taleList=this.AlltaleList[i],this.rightConfig.list=this.roomsOnline[i]},bindWinBar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,i=e.data,a=void 0===i?{}:i;if(console.log(e),"winBar"===t){var o=a.id,n=(a.dept,a.realdept),s=void 0===n?" ":n,l=a.name,u=a.img,d=a.roomType,c=void 0===d?"public":d,f=a.add,g=void 0!==f&&f,h=a.role,v=void 0!==h&&h,p=this.roomsOnline[o]?this.roomsOnline[o].length:0;this.config=m()({},this.config,{id:o,roomType:c,dept:s,name:l+"("+p+")",img:u}),this.winBarConfig.active=o,this.taleList=this.AlltaleList[o],this.rightConfig.list=this.roomsOnline[o],console.log("查看",this.roomsOnline[o]);var b=!0,y=!1,w=void 0;try{for(var C,R=r()(this.winBarConfig.list);!(b=(C=R.next()).done);b=!0){var k=C.value;k.id==o&&(k.readNum="")}}catch(e){y=!0,w=e}finally{try{!b&&R.return&&R.return()}finally{if(y)throw w}}g&&this.RoomDialog(),v&&this.activeWinbar("ChatLobby")}if("winBtn"===t){var _=a.target,x=(_=void 0===_?{}:_).id,O=this.winBarConfig.list;this.winBarConfig.list=O.reduce(function(e,t){return(t.lock||x!=t.id)&&e.push(t),e},[]),"ROLE"!=x&&"addRoom"!=x&&"ChatLobby"!=x&&(this.ws[x].close(),this.AlltaleList[x]=[],this.activeWinbar("ChatLobby"),this.roomsOnline[x]=[])}},talkEvent:function(e){var t=e.data;if("systemItem"===e.type){var i=t.id,a=this.rooms.find(function(e){return e.id==i});void 0===this.winBarConfig.list.find(function(e){return e.id==i})?t.type&&"private"===t.type?this.searchJoinRoom(t):this.searchJoinRoom(a):this.el_alert("你已经在该房间内！","warning")}},sendDate:function(){return Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var i in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[i]:("00"+t[i]).substr((""+t[i]).length)));return e},(new Date).Format("yyyy/MM/dd HH:mm:ss")},bindEnter:function(e){console.log(e);var t=this.inputMsg;if(t){var i={date:this.sendDate(),text:{text:t},mine:!0,name:this.roleObj.nickname,img:this.roleObj.img,id:this.roleObj.id},a=this.winBarConfig.active;if(1!=this.ws[a].readyState)this.el_alert("已与服务器断开连接","error"),this.openMsgBox();else this.AlltaleList[a].push(i),this.taleList=this.AlltaleList[a],this.ws[a].send(s()({type:"add_message",message:i})),this.winBarConfig.list.find(function(e){return e.id===a}).dept=t}},bindGetMessage:function(e,t){this.AlltaleList[e].push(t),e==this.winBarConfig.active&&(this.taleList=this.AlltaleList[e]);var i=!0,a=!1,o=void 0;try{for(var n,s=r()(this.winBarConfig.list);!(i=(n=s.next()).done);i=!0){var l=n.value;l.id===e&&(""!==l.readNum?l.readNum+=1:l.readNum=1,!l.roomType||"public"!==l.roomType&&"private"!==l.roomType?"string"==typeof t.text.text?l.dept=t.text.text:l.dept="[无法预览]":"string"==typeof t.text.text?l.dept=t.name+":"+t.text.text:l.dept=t.name+":[无法预览]")}}catch(e){a=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}},bindTalk:function(e){console.log("talk",e);var t=e.key,i=e.value;"navIndex"===t&&"1"==i&&(this.talk=["回复1","回复2","回复3"]),"navIndex"===t&&"2"==i&&(this.talk=["超级回复1","超级回复2","超级回复3"]),"select"===t&&(this.inputMsg=i),"delIndex"===t&&this.talk.splice(i,1)},bindLoadHistory:function(){var e=this.winBarConfig.active;this.ws[e].send(s()({type:"more_history",roomid:e,index_0:this.AlltaleList[e].length}))},toolEvent:function(e,t){console.log("tools",e,t)},robotSay:function(e,t,i,a){var o={date:this.sendDate(),mine:!1,name:"Robot",img:"static/img/robot.png",text:{system:{title:t,content:i}}};this.bindGetMessage(e,o),a&&a()},bindCover:function(e){if(console.log("header",e),"ChatLobby"==e.value.id){var t=this.rooms.reduce(function(e,t){return"public"===t.roomType&&e.push(t),e},[]).map(function(e){return{id:e.id,text:e.name,dept:e.dept}});this.robotSay("ChatLobby","点击加入房间",t)}else console.log(e.value),"private-2"!==e.value.roomType&&this.$message({showClose:!0,dangerouslyUseHTMLString:!0,message:"<h3>房间ID: "+e.value.id+"</h3><h4>房间简介："+e.value.realdept+"</h4>"})},rightClick:function(e){console.log("rigth",e),e.value.id===this.roleObj.id?console.log("点击了自己的头像"):this.openPrivateChat(e.value)},initOneWS:function(e){var t=this,i=""+this.websocketConfig.WS_BASE_URL+e+"/";try{var a=new WebSocket(i);a.onopen=function(i){return t.websocketConfig.onOpen(i,e)},a.onclose=function(i){return t.websocketConfig.onClose(i,e)},a.onmessage=function(i){return t.websocketConfig.onMessage(i,e)},a.onerror=function(i){return t.websocketConfig.onError(i,e)},this.ws[e]=a}catch(t){console.error("Error while creating websocket connection for room "+e+":",t)}},initWebsocket:function(){var e=!0,t=!1,i=void 0;try{for(var a,o=r()(this.winBarConfig.list);!(e=(a=o.next()).done);e=!0){var n=a.value.id;"ROLE"!=n&&"private_link"!=n&&this.initOneWS(n)}}catch(e){t=!0,i=e}finally{try{!e&&o.return&&o.return()}finally{if(t)throw i}}},closeAllWebsocket:function(){var e;for(e in this.winBarConfig.list){var t=this.winBarConfig.list[e].id;this.ws[t]&&this.ws[t].close()}},handleMouseMove:function(e){var t=this.winBarConfig.active,i=function(e){if(e.id==t)return setTimeout(function(){e.readNum=""},200),"break"},a=!0,o=!1,n=void 0;try{for(var s,l=r()(this.winBarConfig.list);!(a=(s=l.next()).done);a=!0){if("break"===i(s.value))break}}catch(e){o=!0,n=e}finally{try{!a&&l.return&&l.return()}finally{if(o)throw n}}},openPrivateChat:function(e){var t=this;this.$confirm("向 "+e.name+" 发起私聊请求?","提示",{confirmButtonText:"发送",cancelButtonText:"取消",type:"warning"}).then(function(){var i=t.roleObj.id+"private"+e.id;t.initOneWS(i);var a={id:i,name:e.name,img:e.img,dept:"",readNum:0,roomType:"private-2"},o=a.id,r=a.roomType,n=[{type:"private",id:o,text:a.name,dept:a.dept,name:t.roleObj.nickname,img:t.roleObj.img,roomType:r}],l={date:t.sendDate(),mine:!0,name:t.roleObj.nickname,img:t.roleObj.img,text:{system:{title:"向你发起私人聊天请求",subtitle:"点击进入聊天",content:n}}};t.winBarConfig.list.splice(4,0,a),t.activeWinbar(o),t.ws.ChatLobby.send(s()({type:"private_2",message:l,receiver:e.id}))}).catch(function(){})},openMsgBox:function(){var e=this;this.$confirm("你已经断开连接, 是否重连?","提示",{confirmButtonText:"重连",cancelButtonText:"取消",type:"warning"}).then(function(){var t=!0,i=!1,a=void 0;try{for(var o,n=r()(e.winBarConfig.list);!(t=(o=n.next()).done);t=!0){var s=o.value;e.initOneWS(s.id)}}catch(e){i=!0,a=e}finally{try{!t&&n.return&&n.return()}finally{if(i)throw a}}e.$message({type:"success",message:"重连成功!",center:!0})}).catch(function(){e.$message({type:"error",message:"已与服务器断开连接！",center:!0})})},el_alert:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$message({message:e,type:t,center:!0})},beforeunloadFn:function(e){this.closeAllWebsocket()},afterRoleSet:function(){this.initWebsocket(),this.$el.querySelector(".ChatPage-main").addEventListener("mousemove",this.handleMouseMove),this.$emit("update-leftNav","chatNav")}},created:function(){var e=this;window.addEventListener("beforeunload",function(t){return e.beforeunloadFn(t)})},mounted:function(){this.dialogRoleVisible=!0},destroyed:function(){var e=this;window.removeEventListener("beforeunload",function(t){return e.beforeunloadFn(t)}),this.closeAllWebsocket()}},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"jw",staticClass:"jwchat"},[i("dialogRole",{attrs:{dialogRoleVisible:e.dialogRoleVisible,roleObj:e.roleObj,avatars:e.avatars},on:{"update:dialogRoleVisible":e.updatedialogRoleVisible,"update-roleObj":e.updateRoleObj,"update-activeBar":e.activeWinbar,afterRoleSet:e.afterRoleSet}}),e._v(" "),i("dialogCreateRoom",{attrs:{dialogRoomVisible:e.dialogRoomVisible,rooms:e.rooms,winBarConfig:e.winBarConfig},on:{"update:dialogRoomVisible":e.updatedialogRoomVisible,"update-activeBar":e.activeWinbar,"join-room":e.searchJoinRoom,"create-room":e.searchCreateRoom}}),e._v(" "),i("JwChat-index",{ref:"jwChat",attrs:{config:e.config,taleList:e.taleList,showRightBox:!0,scrollType:"scroll",toolConfig:e.tool,winBarConfig:e.winBarConfig,quickList:e.config.quickList,width:"1000px",height:"600px"},on:{enter:e.bindEnter,clickTalk:e.talkEvent},model:{value:e.inputMsg,callback:function(t){e.inputMsg=t},expression:"inputMsg"}},[i("JwChat-rightbox",{attrs:{config:e.rightConfig},on:{click:e.rightClick}}),e._v(" "),i("template",{slot:"tools"},[i("div",{staticStyle:{width:"20rem text-align: right"},on:{click:function(t){return e.toolEvent(12)}}})])],2)],1)},staticRenderFns:[]};var w=i("VU/8")(b,y,!1,function(e){i("OeO+")},"data-v-ba04e1ca",null).exports,C={name:"app",components:{mainChat:w}},R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var k=i("VU/8")(C,R,!1,function(e){i("/qyi"),i("1FS0")},"data-v-17a9ce9c",null).exports,_=i("/ocq"),x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("Welcome")]),this._v(" "),t("el-link",{attrs:{href:"/chatroom",target:"_blank",underline:!1}},[t("el-button",{attrs:{round:""}},[this._v("进入聊天室")])],1),this._v(" "),t("el-link",{attrs:{href:"/show",target:"_blank",underline:!1}},[t("el-button",{attrs:{round:""}},[this._v("进入可视化展示")])],1)],1)},staticRenderFns:[]};var O=i("VU/8")({name:"index"},x,!1,function(e){i("ipRT")},"data-v-22a61291",null).exports,B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("可视化的网页")])])}]};var L=i("VU/8")({name:"show"},B,!1,function(e){i("JeWR")},"data-v-3b2b90e9",null).exports;a.default.use(_.a);var $=new _.a({mode:"history",routes:[{path:"/",name:"index",component:O},{path:"/chatroom",name:"JwChat",component:w},{path:"/show",name:"show",component:L}]}),S=i("zL8q"),E=i.n(S),M=(i("tvR6"),i("cdDs")),T=i.n(M);a.default.use(E.a),a.default.use(T.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:$,components:{App:k},template:"<App/>"})},"OeO+":function(e,t){},ipRT:function(e,t){},tvR6:function(e,t){},zYbz:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.457e3a6731864a3b772b.js.map