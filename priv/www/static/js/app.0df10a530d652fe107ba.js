webpackJsonp([19],{0:function(e,n,t){t("j1ja"),e.exports=t("NHnr")},"4/hK":function(e,n){},"7TWk":function(e,n){},GUiZ:function(e,n){},LDKD:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t("fZjL"),o=t.n(s),r=t("7+uW"),a=t("9JMe"),i=t("TXmL"),c=t("zL8q"),u=t.n(c),l=t("urW8"),d=t.n(l),p={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var m=t("VU/8")({name:"App"},p,!1,function(e){t("rBGa")},null,null).exports,h=t("/ocq"),f=t("bOdI"),b=t.n(f),g=t("Dd8w"),v=t.n(g),_=t("mvHQ"),S=t.n(_),w=t("NYxO"),C=t("Gu7T"),y=t.n(C),k=t("W3Iv"),I=t.n(k),A=t("gRE1"),T=t.n(A),D={on_client_connected:{label:"on_client_connected",value:"on_client_connected",en:"On Client Connected",zh:"客户端连接"},on_client_disconnected:{label:"on_client_disconnected",value:"on_client_disconnected",en:"On Client Disconnected",zh:"客户端断开连接"},on_client_subscribed:{label:"on_client_subscribed",value:"on_client_subscribed",en:"On Client Subscribed",zh:"client 订阅"},on_client_unsubscribed:{label:"on_client_unsubscribed",value:"on_client_unsubscribed",en:"On Client UnSubscribed",zh:"client 取消订阅"},on_session_subscribed:{label:"on_session_subscribed",value:"on_session_subscribed",en:"On Session Subscribed",zh:"Session 订阅"},on_session_unsubscribed:{label:"on_session_unsubscribed",value:"on_session_unsubscribed",en:"On Session UnSubscribed",zh:"Session 取消订阅"},on_message_publish:{label:"on_message_publish",value:"on_message_publish",en:"On Publish",zh:"发布消息"},on_message_delivered:{label:"on_message_delivered",value:"on_message_delivered",en:"On delivered",zh:"消息拥塞"},on_message_acked:{label:"on_message_acked",value:"on_message_acked",en:"On Acked",zh:"消息确认"},on_session_created:{label:"on_session_created",value:"on_session_created",en:"On Session Created",zh:"创建会话"},on_session_terminated:{label:"on_session_terminated",value:"on_session_terminated",en:"On Session Terminated",zh:"会话终止"}},O={auth:["on_client_connected"],acl:["on_client_subscribed","on_client_publish","on_session_subscribed","on_message_publish"],webhook:["on_client_connected","on_client_disconnected","on_client_subscribe","on_client_unsubscribe","on_session_created","on_session_subscribed","on_session_unsubscribed","on_session_terminated","on_message_publish","on_message_delivered","on_message_acked"],kafka:["on_client_connected","on_client_disconnected","on_session_subscribed","on_session_unsubscribed","on_message_publish","on_message_delivered","on_message_acked"]},E=window.localStorage.getItem("language")||window.EMQ_DASHBOARD_CONFIG.lang||"en";function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",n=O[e];if(!n)return T()(D).map(function(e){return e._label=e.label,e.label=e[E],e});var t=[];return n.forEach(function(e){D[e]&&t.push({value:D[e].value,label:D[e][E],_label:D[e].label})}),t}var x={events:D,all:N(),auth:N("auth"),webhook:N("webhook"),kafka:N("kafka"),backend:N("backend")};t("pFYg");Array.isArray;var P={host:{en:"host",zh:"地址",type:"host",value:"127.0.0.1"},port:{en:"port",zh:"端口",type:"number",value:null}},q={user:{en:"user",zh:"用户名",value:"root"},password:{en:"password",zh:"密码",value:"root"},database:{en:"database",zh:"数据库名",value:"platform"},ssl:{en:"ssl",zh:"ssl",value:!1},pool:{en:"pool",zh:"连接池",type:"number",value:8}},M={certfile:{en:"certfile",zh:"certfile",type:"file",value:""},keyfile:{en:"keyfile",zh:"keyfile",type:"file",value:""}},R={salt:{en:"salt",zh:"加密 salt",value:""}},U={password_hash:{en:"hash",zh:"加密方式",value:["plain","md5","sha","sha256","bcrypt"]}},L={insert:{value:"insert into mqtt_message (username, client_id, payload) values ( {{username}}, {{client_id}}, {{payload}} )"},query:{value:"select password from mqtt_user where username = {{username}} limit 1"},updata:{value:"update mqtt_user set state = 1 where username = {{username}}"},delete:{value:""}},z={method:{en:"method",zh:"请求方式",value:["GET","POST","PUT","DELETE"]},header:{en:"header",zh:"请求头",value:{"Content-Type":"application/json",token:""}},query:{en:"URL params",zh:"URL 参数",value:{client_id:"{{client_id}}",username:"{{username}}"}},body:{en:"body",zh:"请求体",value:{client_id:"{{client_id}}",username:"{{username}}"}}};v()({},P,q,L,M,U,R),v()({},P,q,L,M,U,R),v()({},P,q,M,U,R),v()({url:{en:"url",zh:"服务器地址",value:"http://127.0.0.1:80/server"}},z),v()({},P);var G,B,F=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(function(e){return{value:e,label:e}}),j=["sync","async","sync_batched","async_batched"].map(function(e){return{value:e,label:e}}),V=["GET","POST","PUT","DELETE"].map(function(e){return{value:e,label:e}}),$=I()({kafka:"Kafka",pgsql:"PostgresSQL",webhook:"WebHook",mysql:"MySQL",mongo:"MongoDB",redis:"Redis"}).map(function(e){return{value:e[0],label:e[1]}}),H=[].concat(y()([0,1,2].map(function(e){return{label:"QoS "+e,value:e}}))),W=["random","strict_round_robin","sticky_round_robin","custom"].map(function(e){return{value:e,label:e}}),Q=v()({},x,{method:V,resource:$,kafkaProduce:j,booleanType:[{label:"false",value:!1},{label:"true",value:!0}],redisDatabase:F,qos:H,messageEvents:[{value:"on_message_published",label:"消息发布时"},{value:"on_message_acked",label:"消息确认时"}],paritionStrategy:W});function K(e){try{return JSON.parse(e)}catch(e){return null}}r.default.use(w.a);var J={loading:!1,user:K(sessionStorage.getItem("user"))||K(localStorage.getItem("user"))||{},nodeName:"",dictCode:Q},X=(G={},b()(G,"USER_LOGIN",function(e,n){var t=e.commit;if(n.isLogOut)return sessionStorage.removeItem("user"),localStorage.removeItem("user"),void t("USER_LOGIN",n);n.remember?localStorage.setItem("user",S()(n.user)):sessionStorage.setItem("user",S()(n.user)),t("USER_LOGIN",n)}),b()(G,"CURRENT_NODE",function(e,n){(0,e.commit)("CURRENT_NODE",n)}),b()(G,"LOADING",function(e){(0,e.commit)("LOADING",arguments.length>1&&void 0!==arguments[1]&&arguments[1])}),b()(G,"SET_DICT_CODE",function(e){var n=e.commit,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=v()({},Q,t);localStorage.setItem("dictCode",S()(s)),n("SET_DICT_CODE",s)}),G),Y=(B={},b()(B,"USER_LOGIN",function(e,n){n.isLogOut?r.default.set(e,"user",{}):r.default.set(e,"user",n.user)}),b()(B,"CURRENT_NODE",function(e,n){r.default.set(e,"nodeName",n)}),b()(B,"LOADING",function(e,n){e.loading=n}),b()(B,"SET_DICT_CODE",function(e,n){r.default.set(e,"dictCode",n)}),B),Z=new w.a.Store({strict:!1,state:J,actions:X,mutations:Y});r.default.use(h.a);var ee=[{path:"/login",component:function(){return t.e(12).then(t.bind(null,"lmfZ"))},meta:{requiresAuth:!1}},{path:"/",component:function(){return t.e(4).then(t.bind(null,"lO7g"))},children:[{path:"",component:function(){return t.e(17).then(t.bind(null,"RjBg"))}},{path:"/connections",component:function(){return t.e(0).then(t.bind(null,"zXyA"))}},{path:"/sessions",component:function(){return t.e(0).then(t.bind(null,"zXyA"))}},{path:"/topics",component:function(){return t.e(0).then(t.bind(null,"zXyA"))}},{path:"/subscriptions",component:function(){return t.e(0).then(t.bind(null,"zXyA"))}},{path:"/plugins",component:function(){return t.e(3).then(t.bind(null,"GIGO"))}},{path:"/plugins/:nodeName/:pluginName",component:function(){return t.e(7).then(t.bind(null,"f35c"))}},{path:"/listeners",component:function(){return t.e(9).then(t.bind(null,"uuOo"))}},{path:"/resource",component:function(){return Promise.all([t.e(1),t.e(8)]).then(t.bind(null,"J8FC"))}},{path:"/auth",component:function(){return t.e(14).then(t.bind(null,"bgNi"))}},{path:"/rule",component:function(){return Promise.all([t.e(1),t.e(15)]).then(t.bind(null,"Oo+r"))}},{path:"/rule/:id",component:function(){return Promise.all([t.e(1),t.e(5)]).then(t.bind(null,"WR69"))}},{path:"/websocket",component:function(){return t.e(2).then(t.bind(null,"EzHP"))}},{path:"/http_api",component:function(){return t.e(13).then(t.bind(null,"qB/b"))}},{path:"/applications",component:function(){return t.e(6).then(t.bind(null,"Tk0c"))}},{path:"/users",component:function(){return t.e(10).then(t.bind(null,"QSR2"))}},{path:"/settings",component:function(){return t.e(16).then(t.bind(null,"VKKr"))}}]},{path:"*",meta:{requiresAuth:!1},component:function(){return t.e(11).then(t.bind(null,"wkqA"))}}],ne=new h.a({routes:ee});ne.beforeEach(function(e,n,t){var s=e.meta.requiresAuth;void 0===s||s?Z.state.user.password?(document.body.scrollTop=0,document.documentElement.scrollTop=0,t()):t({path:"/login",query:{redirect:e.fullPath}}):t()});var te=ne,se=(t("7TWk"),t("wUZ8")),oe=t.n(se),re=v()({},oe.a,{select:{cluster:"All Nodes",placeholder:"Select Node"},error:{networkError:"Network Error",initializationError:"Initialization Error"},success:{createSuccess:"Create Success"},oper:{confirmDelete:"Confirm Delete ?",confirmStop:"Confirm Stop?",cancel:"Cancel",confirm:"Confirm",delete:"Delete",oper:"Oper",edit:"Edit",save:"Save",create:"Create",view:"View",editSuccess:"Edit success",startSuccess:"Start Success",stopSuccess:"Stop Success",deleteSuccess:"Delete Success",from:"From",stop:"Stop",start:"Start",notice:"Notice"},leftbar:{monitoring:"MONITORING",overview:"Overview",connections:"Connections",sessions:"Sessions",topics:"Topics",subscriptions:"Subscriptions",management:"MANAGEMENT",plugins:"Plugins",listeners:"Listeners",instances:"Instances",tools:"TOOLS",websocket:"Websocket",api:"HTTP API",applications:"Applications",admin:"ADMIN",users:"Users",settings:"Settings"},overview:{broker:"Broker",erlangOTPRelease:"Erlang/OTP Release",systemName:"System Name",version:"Version",uptime:"Uptime",systemTime:"System Time",nodes:"Nodes",name:"Name",erlangProcesses:"Erlang Processes",cpuInfo:"CPU Info",memoryInfo:"Memory Info",maxFds:"MaxFds",status:"Status",stats:"Stats",topicsCount:"Topics/Count",topicsMax:"Topics/Max",connectionsCount:"Connections/Count",connectionsMax:"Connections/Max",retainedCount:"Retained/Count",retainedMax:"Retained/Max",sessionsCount:"Sessions/Count",sessionsMax:"Sessions/Max",subscribersCount:"Subscribers/Count",subscribersMax:"subscribers/Max",subscriptionsCount:"Subscription/Count",subscriptionsMax:"Subscription/Max",subscriptionsSharedCount:"Subscriptions Shared/Count",subscriptionsSharedMax:"Subscriptions Shared/Max",metrics:"Metrics",packetsData:"The packets data",messagesData:"The messages data",bytesData:"The bytes data"},connections:{node:"Node",clientId:"ClientId",username:"Username",ipAddr:"IPAddr",port:"Port",cleanStart:"CleanStart",protoVer:"ProtoVer",keepalive:"Keepalive(s)",connectedAt:"ConnectedAt",back:"Back"},sessions:{clientId:"ClientId",cleanStart:"CleanStart",subscriptionsCount:"Subscriptions/Count",expiryInterval:"Expiry Interval",maxInflight:"MaxInflight",inflightLen:"Inflight Len",mqueueLen:"MqueueLen",mqueueDropped:"MqueueDropped",awaitingRelLen:"AwaitingRelLen",deliverMsg:"DeliverMsg",enqueueMsg:"EnqueueMsg",createdAt:"CreatedAt"},topics:{topic:"Topic",node:"Node"},subscriptions:{clientId:"ClientId",topic:"Topic",qoS:"QoS"},plugins:{name:"Name",version:"Version",description:"Description",status:"Status",stopped:"Stopped",running:"Running",oper:"Oper",start:"Start",stop:"Stop",config:"Config",back:"Back",advancedConfig:"Advanced Config",add:"Add",configSuccess:"Config success",configFailure:"Config failure",notice:"Are you sure you want to submit changes and apply them ?",giveUpNotice:"Are you sure you want to give up the change and exit?",noticeTitle:"Notice",cacheNotice:"You have given up this change",emptyConfigOption:"No Default Configuration"},instances:{instances:"Instances",back:"Back",info:"Basic Info",name:"instance name",descr:"description",service:"service",configInfo:"Config Options",initConfig:"Init config or ",remarkConfig:"description is required",createInstance:"Create Instance",selectServiceType:"Instance Type",all:"All",running:"Running",stopped:"Stopped",auth:"Auth",backend:"Backend",hook:"hook",bridge:"Bridge",other:"Other",select:"Select",selected:"Selected",nextStep:"Next",authDesc:"Provide login authentication and publish subscribe ACL service.",backendDesc:"Provide message persistence to database services.",bridgeDesc:"Bridging a message flow into a message middleware data source.",hookDesc:"A service that uses the trigger callback mechanism to respond to the operation.",otherDesc:"The system runs information and other services."},listeners:{protocol:"Protocol",listenOn:"Listen On",maxConnections:"Max Connections",currentConnections:"Current Connections"},websocket:{connect:"Connect",host:"Host",port:"Port",clientID:"Client ID",username:"Username",password:"Password",keepAlive:"Keep Alive",cleanSession:"Clean Session",disconnect:"Disconnect",currentState:"Current State",subscribe:"Subscribe",topic:"Topic",qoS:"QoS",date:"Date",oper:"Oper",messages:"Messages",retained:"Retained",send:"send",messagesAlreadySent:"Messages already sent",messagesReceived:"Messages received",time:"Time",connectError:"Message send error",connectFailure:"Connect failed on",connectLeave:"The client does not connect to the broker",subscribeSuccess:"Subscribe success",subscribeFailure:"Subscribe failure",unsubscribeFailure:"Unsubscribe Failure",messageSendOut:"Message send out",connected:"CONNECTED",connecting:"CONNECTING",disconnected:"DISCONNECTED",notSupport:"Your browser doesn't support WebSocket"},httpApi:{introduction:"Introduction",desc:"Apart from this help page, all URIs will serve only resources of type application/json, and will require HTTP basic authentication. The default user is admin / public.\n<br/>The emq_dashboard plugin provides a web management console. The Dashboard helps monitor broker's running status, statistics and metrics of MQTT packets.",reference:"Reference",method:"Method",path:"Path",description:"Description",back:"Back",linkAddress:"Request address",data:"Response data"},app:{appId:"AppID",secret:"AppSecret",newApp:"New App",viewApp:"View App",editApp:"Edit App",create:"Create",errors:"Option Required",name:"AppName",desc:"Remark",expired:"Expired date",status:"Status",enable:"Allowed",disable:"Denied",enableText:"Access allowed",disableText:"Access barred",expiredText:"Never expired"},users:{newUser:"New User",editUser:"Edit User",username:"Username",remark:"Remark",password:"Password",confirmPassword:"Confirm Password",oldPassword:"Old Password",newPassword:"New Password",confirmNewPassword:"Confirm New Password",changePassword:"Change Password",dontChangePassword:"Don't Change Password",confirm:"Confirm",confirmDelete:"Confirm Delete ?",usernameRequired:"Username required",remarkRequired:"Remark required",usernameIllegal:"Username illegal",passwordRequired:"Password required",newPasswordRequired:"new password required",passwordInconsistent:"Password is inconsistent",authenticate:"You have changed your password. Please re authenticate",createUser:"Create user success",passwordIllegal:"Password Illegal"},alert:{required:"required",success:" success",failure:" failure",connect:"Connect"},login:{title:"LOG IN",username:"Username",password:"Password",remember:"Remember",loginButton:"Log In",error:"Username Or Password Error",usernameRequired:"Username Required",passwordRequired:"Password Required"},settings:{themes:"Themes",language:"Language",apply:"Apply",success:"Apply success"},config:{importConfig:"Import",selectConfigFile:"Select a config file",configFileMustBeJson:"Config file must be JSON",createBy:"Create by",create:"",createUser:"owner",nodeName:"node name",host:"host",descr:"description",createAt:"createAt",more:"more",reSelect:"Select another",not_a_valid_config_file:"Not a valid config file",payload_error:"Config option is empty",import_file_error:"Import failure",exportConfig:"Export",ex:"Export",atLeastThree:"At least three words",importSuccess:"Import success",notice:"Use backup configuration files to configure initialization modification. <br/> Notice: configuration files may contain important data, such as database address and authentication information. Please keep good configuration files and use backup function reasonably."}}),ae=t("Vi3T"),ie=t.n(ae),ce={en:re,zh:v()({},ie.a,{select:{cluster:"全部节点",placeholder:"请选择"},error:{networkError:"网络错误",initializationError:"初始化错误"},success:{createSuccess:"Create Success"},oper:{confirmDelete:"确认删除该项?",confirmStop:"确认停止?",confirm:"确认",cancel:"取消",delete:"删除",oper:"操作",edit:"编辑",save:"保存",create:"创建",view:"查看",editSuccess:"编辑成功",startSuccess:"启动成功",stopSuccess:"停止成功",deleteSuccess:"删除成功",from:"从",stop:"停止",start:"启动",notice:"注意"},leftbar:{monitoring:"监控",overview:"控制台",connections:"连接",sessions:"会话",topics:"主题",subscriptions:"订阅",management:"管理",plugins:"插件",listeners:"监听器",instances:"服务",tools:"工具",websocket:"Websocket",api:"HTTP接口",applications:"应用",admin:"系统",users:"用户",settings:"设置"},overview:{broker:"系统信息",systemName:"名称",version:"版本",uptime:"运行时间",systemTime:"系统时间",nodes:"节点信息",name:"节点名称",erlangOTPRelease:"Erlang/OTP 版本",erlangProcesses:"Erlang进程",cpuInfo:"CPU",memoryInfo:"内存",maxFds:"最大文件句柄数",status:"状态",stats:"运行统计",topicsCount:"主题数",topicsMax:"主题峰值",connectionsCount:"连接数",connectionsMax:"连接峰值",retainedCount:"保留消息数",retainedMax:"最大保留消息数",sessionsCount:"会话数",sessionsMax:"会话峰值",subscribersCount:"订阅数",subscribersMax:"订阅峰值",subscriptionsCount:"订阅数",subscriptionsMax:"订阅峰值",subscriptionsSharedCount:"共享订阅数",subscriptionsSharedMax:"共享订阅峰值",metrics:"度量指标",packetsData:"MQTT报文",messagesData:"消息(数)",bytesData:"流量收发统计(字节)"},connections:{node:"节点",clientId:"客户端ID",username:"用户名",ipAddr:"IP地址",port:"端口",cleanStart:"清除会话",protoVer:"协议版本",keepalive:"心跳(秒)",connectedAt:"连接时间",back:"返回"},sessions:{clientId:"客户端ID",cleanStart:"清除会话",subscriptionsCount:"订阅数",expiryInterval:"ExpiryInterval",maxInflight:"最大拥塞",inflightLen:"当前拥塞",mqueueLen:"当前缓存消息",mqueueDropped:"丢弃消息",awaitingRelLen:"等待释放",deliverMsg:"投递消息",enqueueMsg:"入队消息",createdAt:"创建时间"},topics:{topic:"主题",node:"节点"},subscriptions:{clientId:"客户端ID",topic:"主题",qoS:"服务质量"},plugins:{name:"插件名称",version:"版本",description:"描述",status:"状态",stopped:"已停止",running:"运行中",start:"启动",stop:"停止",config:"配置",back:"返回",advancedConfig:"高级配置",add:"新增",configSuccess:"配置成功",configFailure:"配置失败",notice:"你确定提交这些配置吗？重启插件后生效",giveUpNotice:"你确定放弃应用已更改的配置吗？",noticeTitle:"注意",cacheNotice:"已放弃操作",emptyConfigOption:"默认配置项为空"},instances:{instances:"服务",back:"返回",info:"基本信息",name:"实例名称",descr:"备注信息",service:"所属服务",configInfo:"配置信息",initConfig:"初始化配置或",remarkConfig:"请输入备注信息",createInstance:"新建服务",selectServiceType:"选择实例类型",all:"全部",running:"运行中",stopped:"已停止",auth:"认证",backend:"持久化",hook:"回调钩子",bridge:"数据桥接",other:"其他",select:"选择",selected:"已选择",nextStep:"下一步",authDesc:"提供登录认证与发布订阅 ACL 服务。",backendDesc:"提供消息持久化到数据库服务。",bridgeDesc:"提供将消息流桥接为消息中间件数据源服务。",hookDesc:"使用触发回调机制响应操作的服务。",otherDesc:"系统运行信息等其他服务。"},listeners:{protocol:"协议",listenOn:"监听地址",maxConnections:"最大连接数",currentConnections:"当前连接数"},websocket:{connect:"连接",host:"主机地址",port:"端口",clientID:"客户端ID",username:"用户名",password:"密码",keepAlive:"心跳(秒)",cleanSession:"清除会话",disconnect:"断开连接",currentState:"当前状态",subscribe:"订阅",topic:"主题",qoS:"服务质量",date:"订阅时间",oper:"操作",messages:"消息",retained:"保留",send:"发送",messagesAlreadySent:"发布消息列表",messagesReceived:"订阅消息列表",time:"时间",connectError:"消息发送错误",connectFailure:"连接失败",connectLeave:"尚未连接到服务器",subscribeSuccess:"订阅成功",subscribeFailure:"订阅失败",messageSendOut:"消息已发出",connected:"已连接",connecting:"正在连接",disconnected:"未连接",notSupport:"你的浏览器暂不支持WebSocket"},httpApi:{introduction:"说明",desc:"除了帮助页面，所有URI返回application/json格式的的资源，每个请求都需要HTTP基本认证。默认用户是admin / public。<br/>emq_dashboard插件提供了一个Web管理控制台, 用于监控服务器的运行状态，数据统计和MQTT包计数监控。",reference:"参考",method:"请求方法",path:"路径",description:"描述",back:"返回",linkAddress:"请求地址",data:"响应数据"},app:{appId:"AppID",secret:"App密钥",newApp:"新建APP",viewApp:"查看App",editApp:" 编辑App",errors:"该项为必填项",name:"App名称",desc:"备注",expired:"到期日期",status:"状态",enable:"允许访问",disable:"拒绝访问",enableText:"允许访问",disableText:"拒绝访问",expiredText:"永不过期"},users:{newUser:"新建用户",editUser:"编辑用户",username:"用户名",remark:"备注",password:"密码",confirmPassword:"确认密码",oldPassword:"旧密码",newPassword:"新密码",confirmNewPassword:"确认新密码",changePassword:"修改密码",dontChangePassword:"不修改密码",usernameRequired:"请填写用户名",remarkRequired:"请填写备注",usernameIllegal:"用户名长度非法",passwordRequired:"请填写密码",newPasswordRequired:"请填写新密码",passwordInconsistent:"密码不一致",authenticate:"你已成功修改已登录用户密码，请重新登录",createUser:"新建用户成功",passwordIllegal:"密码长度非法"},alert:{required:"字段是必填项",success:"成功",failure:"失败",connect:"连接"},login:{title:"登 录",username:"用户名",password:"密码",remember:"记住",loginButton:"登 录",error:"用户名或密码错误",usernameRequired:"请填写用户名",passwordRequired:"请填写密码"},settings:{themes:"样式主题",language:"系统语言",apply:"应 用",success:"修改成功"},config:{importConfig:"导入配置",selectConfigFile:"选择配置文件",configFileMustBeJson:"请确保备份文件为正常 JSON 格式",createBy:"由",create:"创建",createUser:"创建用户",nodeName:"节点名称",host:"主机地址",descr:"备注信息",createAt:"创建时间",more:"更多信息",reSelect:"重新选择",not_a_valid_config_file:"不是合法的配置文件",payload_error:"无效的内容",import_file_error:"导入文件出错",exportConfig:"导出配置",ex:"导出",atLeastThree:"至少3个字符",importSuccess:"导入成功",notice:"使用备份的配置文件进行配置初始化/修改。<br/>注意: 配置文件可能包含有重要数据如数据库地址与认证信息，请妥善保管配置文件并合理使用备份功能。"}})},ue=t("//Fk"),le=t.n(ue),de=t("woOf"),pe=t.n(de),me=t("mtWM"),he=t.n(me),fe=t("Y81h"),be=t.n(fe);t("UVIz");be.a.configure({showSpinner:!1}),pe()(he.a.defaults,{headers:{"Content-Type":"application/json","Cache-Control":"no-cache"},baseURL:"/api/v3",timeout:1e4});var ge=0;he.a.interceptors.request.use(function(e){return Z.state.user.username?e.auth={username:Z.state.user.username,password:Z.state.user.password}:te.push({path:"/login",query:{to:te.fullPath}}),be.a.start(),ge=setTimeout(function(){Z.dispatch("LOADING",!0)},100),e},function(e){console.warn("Request Error: ",e)}),he.a.interceptors.response.use(function(e){return be.a.done(),Z.state.LOADING||clearTimeout(ge),ge=0,Z.dispatch("LOADING",!1),e},function(e){be.a.done(),Z.dispatch("LOADING",!1);var n=e.response&&e.response.status;return e.response&&e.response.data.message&&(e.message=e.response.data.message),401===n?(Z.dispatch("USER_LOGIN",{isLogOut:!0}),te.push({path:"/login",query:{to:te.fullPath}})):404===n&&(e.message="操作失败，URL 不存在"),401!==n&&c.Message.error(e.message),le.a.reject(e.message)});var ve=he.a,_e=t("Xxa5"),Se=t.n(_e),we=t("exGp"),Ce=t.n(we),ye={name:"emq-select",components:{"el-select":c.Select,"el-option":c.Option},props:{value:{required:!0},field:{type:Object,required:!0},record:{type:Object,required:!0},disabled:{type:Boolean},placeholder:{type:String},autoSelect:{type:Boolean,default:!0},clearable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},popperClass:{type:String},getter:{type:Function}},data:function(){return{loading:!1,timer:0,options:[]}},computed:{secureValue:function(){return this.multiple&&!this.value?[]:this.value},relyData:function(){if(this.field.rely)return this.record[this.field.rely]}},watch:{relyData:function(e,n){var t=this;void 0!==n&&this.$emit("input",void 0),this.field.options||(this.relyData?this.$httpGet(this.field.url+"?"+this.field.rely+"="+this.relyData).then(function(e){t.options=e.data}):this.options=[])}},methods:{loadData:function(){var e=this;return Ce()(Se.a.mark(function n(){return Se.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.getter){n.next=5;break}return n.next=3,e.getter().catch(e.$message.error);case 3:return e.options=n.sent,n.abrupt("return");case 5:if(!e.field.options){n.next=8;break}return e.options=e.field.options,n.abrupt("return");case 8:if(e.field.url){n.next=13;break}return e.options=Q[e.field.key]||[],e.field.execute&&(e.options=e.options.filter(function(n){return!e.field.execute.includes(n.value)})),e.autoSelect&&!e.multiple&&!e.value&&e.options[0]&&e.$emit("input",e.options[0].value),n.abrupt("return");case 13:if(!e.filterable){n.next=16;break}return e.remoteMethod(e.value),n.abrupt("return");case 16:if(!e.field.rely){n.next=18;break}return n.abrupt("return");case 18:e.$httpGet(e.field.url).then(function(n){e.options=n.data});case 19:case"end":return n.stop()}},n,e)}))()},change:function(e){this.$emit("input",e)},visibleChange:function(e){e&&this.field.rely&&!this.relyData&&this.$message.error("请先选择"+this.field.relyName+"！")},remoteMethod:function(e){var n=this;clearTimeout(this.timer),e&&(this.timer=setTimeout(function(){var t=pe()({},n.field.params);n.field.searchKey&&(t=pe()({},t,b()({},n.field.searchKey,e))),n.loading=!0,n.$httpGet(n.field.url,{params:t}).then(function(e){if("edit"===n.field.state){var t={};n.secureValue.forEach(function(e){t[e]=!0});var s=n.options.filter(function(e){return t[e.value]});e.data.forEach(function(e){t[e.value]||s.push(e)}),n.options=s}else n.options=e.data;n.loading=!1}).catch(function(){n.loading=!1})},200))}},created:function(){this.loadData()}},ke={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-select",{staticClass:"emq-select",attrs:{placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,value:e.secureValue,filterable:e.filterable,remote:e.filterable,"remote-method":e.remoteMethod,loading:e.loading,clearable:e.clearable,"popper-class":e.popperClass},on:{"visible-change":e.visibleChange,input:e.change}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},staticRenderFns:[]};var Ie=t("VU/8")(ye,ke,!1,function(e){t("rm4S")},null,null).exports,Ae=t("8U58"),Te=t.n(Ae);t("GUiZ"),t("4/hK"),t("LDKD"),t("5IAE"),t("ryyk"),t("4IWT");t("aOjs");var De={name:"jsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(e){e!==this.jsonEditor.getValue()&&this.jsonEditor.setValue(S()(this.value,null,2))}},methods:{getValue:function(){return this.jsonEditor.getValue()}},mounted:function(){var e=this;this.jsonEditor=Te.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:"lesser-dark",lint:!0}),this.jsonEditor.setValue(S()(this.value,null,2)),this.jsonEditor.on("change",function(n){var t=n.getValue();e.$emit("changed",t),e.$emit("input",t)})}},Oe={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"json-editor"},[n("textarea",{ref:"textarea"})])},staticRenderFns:[]};var Ee=t("VU/8")(De,Oe,!1,function(e){t("RS39")},"data-v-29cbab3c",null).exports,Ne=t("VOAv");var xe=t("CqLJ"),Pe=t.n(xe),qe=t("0EA4"),Me=t.n(qe);var Re={howLong:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"N/A";10===e.toString().length&&(e*=1e3);var t=Me()(Date.now(),e,["years","months","days","hours","minutes","seconds"]),s=[];return o()(t).forEach(function(e,o){0!==t[e]&&s.length<n?s.push(t[e]+" "+e):s.length<n&&o>n-1&&s.push(t[e]+" "+e)}),s.join(" ")},dateFormat:function(e){return e?10===e.toString().length?Pe()(1e3*e,"yyyy-mm-dd HH:MM:ss"):Pe()(e,"yyyy-mm-dd HH:MM:ss"):""}};r.default.config.productionTip=!1,r.default.use(i.a),r.default.use(u.a),r.default.prototype.$ELEMENT={size:"medium"},r.default.use(function(e){e.prototype.$httpGet=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n._=Date.now(),ve.get(e,{params:n})},e.prototype.$httpPost=ve.post,e.prototype.$httpPut=ve.put,e.prototype.$httpDelete=ve.delete,e.prototype.$axios=ve,e.prototype.$env=window.EMQ_DASHBOARD_CONFIG||{},e.component(Ie.name,Ie),e.component(Ee.name,Ee)}),o()(Re).forEach(function(e){r.default.filter(e,Re[e])});var Ue=new i.a({locale:function(e){if(e)return window.localStorage.getItem(e)}("language")||window.EMQ_DASHBOARD_CONFIG.lang||"en",messages:ce});d.a.i18n(function(e,n){return Ue.t(e,n)}),Object(Ne.a)(),Object(a.sync)(Z,te),new r.default({el:"#app",router:te,store:Z,i18n:Ue,components:{App:m},template:"<App/>"})},RS39:function(e,n){},UVIz:function(e,n){},VOAv:function(e,n,t){"use strict";function s(e){e=["dark-themes","light-themes"].includes(e)?e:"dark-themes",document.querySelector("html").setAttribute("class",e)}function o(){s(localStorage.getItem("themes")||"dark-themes")}t.d(n,"a",function(){return o}),t.d(n,"b",function(){return s})},rBGa:function(e,n){},rm4S:function(e,n){}},[0]);