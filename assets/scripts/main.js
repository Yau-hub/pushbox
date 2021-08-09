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
window.classicsLevelNum = 0;
window.netLevelNum = 0;
window.levelIndex = 0;
window.bgUrlBase = '';



import levels from './level'
import {wxLogin,Toast} from "./common";

cc.Class({
    extends: cc.Component,

    properties: {
        oneSayLabel: {
            default: null,
            type: cc.Label
        },
        loginplay: cc.Button,
        visitorplay: cc.Button,
        levelLayout: cc.Prefab,
        buildLevel: cc.Button,
        setting: cc.Button,
        mainShare: cc.Button,

    },




    // LIFE-CYCL:E CALLBACKS:

     onLoad () {
        //加载一言
        //  this.oneSay();

         this.mainBindEvent();


     },

    start () {
        let that = this;


        if (cc.sys.platform === cc.sys.WECHAT_GAME){
            // wx.cloud.callFunction({
            //     name: 'addClassicsLevel',
            //     data:{
            //         content: levels[0],
            //         levelIndex: 1
            //     }
            // }).then(res => {
            //     console.log(res)
            // }).catch(err => {
            //     console.error(err)
            // })


            wx.cloud.callFunction({
                name: 'getClassicsLevelNum'
            }).then(res => {
                window.classicsLevelNum = res.result.total;
            }).catch(err => {
                console.error(err)
            })
        }





        // this.loadImg();
        //
        // setInterval(function () {
        //     that.oneSay();
        // },10000)

        this.getUserInfo();
        this.initSetting();


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
                    wx.cloud.callFunction({
                        name: 'queryUser',
                        data:{
                            appId: window.userInfo.appId
                        }
                    }).then(res => {
                        if(res && res.result.data.length>0){
                            window.userInfo.classicsLevelNum = res.result.data[0].classicsLevelNum;
                            window.userInfo.netLevelNum = res.result.data[0].netLevelNum;
                        }

                    }).catch(err => {
                        console.error(err)
                    })
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
    mainBindEvent(){
        let that = this;
        //添加授权按钮
        wxLogin(function (res) {
            window.loginInfo = {
                avatarUrl: res.avatarUrl,
                nickName: res.nickName
            }
        },function () {
            console.log('授权失败')
        },this.loginplay.node)
        //开始游戏按钮
        if(this.loginplay == null) this.loginplay = cc.find('Canvas/mainBg/loginplay').getComponent(cc.Button)
        this.loginplay.node.on('click', this.loginLevelList, this)
        if(this.visitorplay == null) this.visitorplay = cc.find('Canvas/mainBg/visitorplay').getComponent(cc.Button)
        this.visitorplay.node.on('click', this.visitorLevelList, this)

        if(this.mainShare == null) this.mainShare = cc.find('Canvas/mainBg/mainShare').getComponent(cc.Button);
        this.mainShare.node.on('click', function () {
            if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                var titString =  '快来挑战“益智推箱”小游戏吧！';
                wx.shareAppMessage({
                    title: titString,
                    // imageUrl: data.url,
                    query: '分享',
                })

            }
        }, this)


        if(this.setting == null) this.setting = cc.find('Canvas/mainBg/setting').getComponent(cc.Button);
        this.setting.node.on('click', function () {

            var CanvasNode = cc.find('Canvas');
            if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
            var onResourceLoaded = function(errorMessage, loadedResource )
            {
                if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
                if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
                var newMyPrefab = cc.instantiate( loadedResource );
                cc.find('settingContain/closeSetting',newMyPrefab).on('click',function () {
                    newMyPrefab.removeFromParent();
                    newMyPrefab.destroy();
                },this)

                let touchMove = cc.find('settingContain/touchMove/Background/Label',newMyPrefab).getComponent(cc.Label);
                let clickMove = cc.find('settingContain/clickMove/Background/Label',newMyPrefab).getComponent(cc.Label);

                if(window.setting.touchMove) touchMove.string = '关闭触摸移动';
                    else touchMove.string = '开启触摸移动';
                if(window.setting.clickMove) clickMove.string = '关闭按键移动';
                else clickMove.string = '开启按键移动';

                cc.find('settingContain/touchMove',newMyPrefab).on('click',function () {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        wx.getStorage({
                            key:'setting',
                            success(res){
                                //触摸&点击开启
                                if(res.data.touchMove && res.data.clickMove){
                                    window.setting.touchMove = false;
                                    touchMove.string = '开启触摸移动'
                                }
                                //触摸关闭 点击开启
                                else if(!res.data.touchMove && res.data.clickMove){
                                    window.setting.touchMove = true;
                                    touchMove.string = '关闭触摸移动'
                                }
                                else{
                                    //提示至少开启一种移动方式
                                    Toast('至少开启一种移动方式!',1500)
                                }
                                wx.setStorage({
                                    key:'setting',
                                    data:window.setting
                                })

                            }
                        })
                    }
                },this)

                cc.find('settingContain/clickMove',newMyPrefab).on('click',function () {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        wx.getStorage({
                            key:'setting',
                            success(res){
                                //触摸&点击开启
                                if(res.data.touchMove && res.data.clickMove){
                                    window.setting.clickMove = false;
                                    clickMove.string = '开启按键移动'
                                }
                                //触摸关闭 点击开启
                                else if(res.data.touchMove && !res.data.clickMove){
                                    window.setting.clickMove = true;
                                    clickMove.string = '关闭按键移动'
                                }
                                else{
                                    //提示至少开启一种移动方式
                                    Toast('至少开启一种移动方式!',1500)
                                }
                                wx.setStorage({
                                    key:'setting',
                                    data:window.setting
                                })
                            }
                        })
                    }
                },this)



                CanvasNode.addChild( newMyPrefab );
            };
            cc.loader.loadRes('settingDialog', onResourceLoaded );
        }, this)

    },
    initSetting(){
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.getStorage({
                key: 'setting',
                success(res) {
                    window.setting = res.data;
                },
                fail(err) {
                    window.setting = {
                        touchMove: true,
                        clickMove: true
                    };
                    wx.setStorage({
                        key: 'setting',
                        data: window.setting
                    })
                }
            })
        }
    }
});
