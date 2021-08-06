// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.env = "cloud1-5gvbuiy3dd99f63c"
if (cc.sys.platform === cc.sys.WECHAT_GAME) {
    wx.cloud.init({env: window.env})
}
window.userInfo = {};

cc.Class({
    extends: cc.Component,

    properties: {
        oneSayLabel: {
            default: null,
            type: cc.Label
        },
        loginplay: cc.Button,
        visitorplay: cc.Button,
        levelLayout: cc.Prefab
    },




    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        //加载一言
        //  this.oneSay();

         //开始游戏按钮
         if(this.loginplay == null) this.loginplay = cc.find('Canvas/mainBg/loginplay').getComponent(cc.Button)
         this.loginplay.node.on('click', this.loginLevelList, this)
         if(this.visitorplay == null) this.visitorplay = cc.find('Canvas/mainBg/visitorplay').getComponent(cc.Button)
         this.visitorplay.node.on('click', this.visitorLevelList, this)



     },

    start () {
        let that = this;








        // this.loadImg();
        //
        // setInterval(function () {
        //     that.oneSay();
        // },10000)

        this.getUserInfo();

        // this.login();
    },


    // update (dt) {},

    loadImg: function(){
        var that = this;
        let container = cc.find('Canvas/mainBg/bingBg');//图片呈现位置
        var imgServeUrl = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1';
        var imgUrl = '';
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response =  JSON.parse(xhr.responseText);
                imgUrl = 'https://cn.bing.com' + response.images[0].urlbase + '_720x1280.jpg'
                window.bgUrlBase = 'https://cn.bing.com' + response.images[0].urlbase;

                cc.assetManager.loadRemote(imgUrl, function (err, texture) {
                    var sprite  = new cc.SpriteFrame(texture);
                    container.spriteFrame = sprite;
                    //创建一个使用图片资源的新节点对象
                    let starNode = new cc.Node(); //创建一个新节点
                    starNode.name = "star1";
                    starNode.setPosition(0,0);
                    let starSprite = starNode.addComponent(cc.Sprite); //增加精灵组件
                    starSprite.spriteFrame = sprite; //设置精灵组件图片资源
                    starSprite.sizeMode = 'CUSTOM';
                    starSprite.node.width = cc.winSize.width
                    starSprite.node.height = cc.winSize.height
                    container.addChild(starNode); //场景中增加新节点
                });
            }
        };
        xhr.open("get", imgServeUrl, true);
        xhr.send();
    },
    oneSay(){
        let that = this;
        let url = "https://v1.hitokoto.cn/";
        let xhr = new XMLHttpRequest();
        let oneSayLabel = cc.find("Canvas/mainBg/oneSay").getComponent(cc.Component);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response =  JSON.parse(xhr.responseText);
               if(that.oneSayLabel && that.oneSayLabel.string != null) that.oneSayLabel.string = response.hitokoto + ' -- ' +  response.from;
               else if(oneSayLabel && oneSayLabel.string != null ) oneSayLabel.string = response.hitokoto + ' -- ' +  response.from;
            }
        };
        xhr.open("get", url, true);
        xhr.send();
    },
    //授权登录显示关卡列表
    loginLevelList(){


        window.loginType = 'wechat';
        var CanvasNode = cc.find('Canvas');
        if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
        var onResourceLoaded = function(errorMessage, loadedResource )
        {
            if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
            var newMyPrefab = cc.instantiate( loadedResource );
            CanvasNode.addChild( newMyPrefab );
        };
        cc.loader.loadRes('levelLayout', onResourceLoaded );

        // let levelList = cc.instantiate(this.levelLayout);
        // this.node.addChild(levelList);
    },
    //不登录登录显示关卡列表
    visitorLevelList(){


        window.loginType = 'visitor';
        var CanvasNode = cc.find('Canvas');
        if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
        var onResourceLoaded = function(errorMessage, loadedResource )
        {
            if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
            var newMyPrefab = cc.instantiate( loadedResource );
            CanvasNode.addChild( newMyPrefab );
        };
        cc.loader.loadRes('levelLayout', onResourceLoaded );

        // let levelList = cc.instantiate(this.levelLayout);
        // this.node.addChild(levelList);
    },
    getUserInfo(){
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //获取缓存appId判断是否第一次进入游戏
            wx.getStorage({
                key: 'appId',
                success (res) {
                    window.userInfo.appId = res.data;
                },
                fail(err){

                    wx.cloud.callFunction({
                        name: 'login'
                    }).then(res => {
                        if(res && res.result){
                            wx.setStorage({
                                key: "appId",
                                data:res.result.appid
                            })
                            wx.setStorage({
                                key: "openId",
                                data:res.result.openid
                            })
                            window.userInfo.appId = res.result.appid;
                            window.userInfo.classicsLevelNum = 0
                            window.userInfo.netLevelNum = 0

                            //注册用户信息
                            wx.cloud.callFunction({
                                name: 'addUser',
                                data: {
                                    appId: res.result.appid,
                                    openId: res.result.openid
                                }
                            }).then(res => {
                                console.log(res)
                            }).catch(err => {
                                console.error(err)
                            })
                        }
                    }).catch(err => {
                        console.error(err)
                    })

                }
            })
        }
    },
    login(_success, _fail){
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //微信登陆
            const wx = window['wx'];//避开ts语法检测
            const info = systemInfo = wx.getSystemInfoSync();//立即获取系统信息
            const w = screenWidth = info.screenWidth;//屏幕宽
            const h = screenHeight = info.screenHeight;//屏幕高

            //获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
            wx.getSetting(
                {
                    success(res) {
                        console.log(res.authSetting);
                        if (res.authSetting["scope.userInfo"]) {
                            console.log("用户已授权");
                            wx.getUserInfo({
                                success(res) {
                                    //登陆操作
                                    userInfo = res.userInfo;
                                    _success && _success(res.userInfo);
                                }
                            });
                        } else {
                            console.log("用户未授权");

                            //创建全屏透明登陆按钮
                            let button = wx.createUserInfoButton({
                                type: 'text',
                                text: '',
                                style: {
                                    left: 0,
                                    top: 0,
                                    width: w,
                                    height: h,
                                    backgroundColor: '#00000000',//最后两位为透明度
                                    color: '#ffffff',
                                    fontSize: 20,
                                    textAlign: "center",
                                    lineHeight: h,
                                }
                            });

                            button.onTap((res) => {
                                if (res.userInfo) {
                                    console.log("用户授权:", res.userInfo);
                                    userInfo = res.userInfo;
                                    _success && _success(res.userInfo);
                                    button.destroy();
                                } else {
                                    console.log("用户拒绝授权:");
                                    _fail && _fail();
                                }
                            });
                        }

                    }

                }
            );
            return ;
        }
    }
});
