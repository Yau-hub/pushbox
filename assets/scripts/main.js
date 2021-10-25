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
window.user = {};
window.classicsLevelNum = 0;
window.netLevelNum = 0;
window.levelIndex = 0;
window.bgUrlBase = '';
window.user.levelFinishNum = 0;
window.loginInfo = {
    avatarUrl: null,
    nickName: null
}


import {wxLogin,Toast,Loading,formateRankTime} from "./common";

cc.Class({
    extends: cc.Component,

    properties: {
        oneSayLabel: {
            default: null,
            type: cc.Label
        },
        loginplay: cc.Button,
        visitorplay: cc.Button,
        mainRank: cc.Button,
        levelLayout: cc.Prefab,
        buildLevel: cc.Button,
        setting: cc.Button,
        mainShare: cc.Button,
        rankItem:cc.Prefab

    },




    // LIFE-CYCL:E CALLBACKS:

     onLoad () {
        //加载一言
        //  this.oneSay();
         this.mainBindEvent();
         window.from = 'main';


     },

    start () {
        let that = this;


        if (cc.sys.platform === cc.sys.WECHAT_GAME){

            Loading.show();
            wx.cloud.callFunction({
                name: 'getClassicsLevelNum'
            }).then(res => {
                window.classicsLevelNum = res.result.total;
                Loading.hide();

            }).catch(err => {
                console.error(err)
            })

        }


        this.loadImg();
        this.oneSay();

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
                    starNode.opacity = 0;
                    container.addChild(starNode); //场景中增加新节点
                    var opacity = 0;
                    var opacityTimer = setInterval(function () {
                        opacity += 1;
                        starNode.opacity = opacity;
                        if(opacity>=255){
                            clearInterval(opacityTimer)
                            opacityTimer = null;
                        }
                    },5)
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
    showMainRank(){
        let that = this;
        var CanvasNode = cc.find('Canvas');
        var rankPage = 1,rankPageSize = 50;
        if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
        var onResourceLoaded = function(errorMessage, loadedResource )
        {
            if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
            var newMyPrefab = cc.instantiate( loadedResource );
            var content = cc.find('rankList/view/content',newMyPrefab);

            cc.find('close',newMyPrefab).on("click",function () {
                newMyPrefab.removeFromParent();
                newMyPrefab.destroy();
            },this)
            if(that.rankItem == null){
                cc.loader.loadRes('rankItem', function (err,resource) {
                    that.rankItem = cc.instantiate(resource);
                    that.renderMainRankList(content,rankPage,rankPageSize);
                } );
            }else{
                that.renderMainRankList(content,rankPage,rankPageSize);
            }
           cc.find('rankList',newMyPrefab).on('bounce-bottom', function(){
               rankPage++;
               that.renderMainRankList(content,rankPage,rankPageSize);
           }, this);
            CanvasNode.addChild( newMyPrefab );
        };
        cc.loader.loadRes('rankLayout', onResourceLoaded );
    },
    renderMainRankList(content,page,pageSize){
        let that = this;
        let currentItemNum = content.childrenCount;
        if (cc.sys.platform === cc.sys.WECHAT_GAME){
            Loading.show();
            wx.cloud.callFunction({
                name: 'queryUser',
                data:{
                    page,
                    pageSize
                }
            }).then(res => {
                Loading.hide();
                let rankItem = null;
                if(res && res.result.data.length>0){
                    for(var i = 1; i<= res.result.data.length; i++){
                        var data =  res.result.data[i-1];
                        let node = cc.instantiate(that.rankItem);
                        if(rankItem == null) rankItem = node;
                        node.getChildByName('tdRank').getComponent(cc.Label).string = i+currentItemNum;
                        node.getChildByName('tdDate').getComponent(cc.Label).string = formateRankTime(data.createTime);
                        node.getChildByName('tdLevel').getComponent(cc.Label).string = data.levelFinishNum;
                        if(data.portrait){
                            cc.assetManager.loadRemote(data.portrait+'?aaa=aa.jpg',  function (err, texture) {
                                var sprite  = new cc.SpriteFrame(texture);
                                cc.find('mask/Image',node.getChildByName('tdPortrait')).getComponent(cc.Sprite).spriteFrame = sprite;
                            });
                        }
                        if(data.nickName){
                            node.getChildByName('tdName').getComponent(cc.Label).string = " "+data.nickName+" ";
                        }
                        content.addChild(node);
                    }
                    content.height = content.childrenCount * rankItem.height;
                }else{
                    Toast("没有更多数据了",1500)
                }


            }).catch(err => {
                console.error(err)
                Loading.hide();
            })
        }

    },

    getUserInfo(){
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            //获取缓存appId判断是否第一次进入游戏
            wx.getStorage({
                key: 'appId',
                success (res) {
                    window.user.appId = res.data;
                    wx.cloud.callFunction({
                        name: 'queryUser',
                        data:{
                            appId: window.user.appId
                        }
                    }).then(res => {
                        if(res && res.result.data.length>0){
                            window.user.levelFinishNum = res.result.data[0].levelFinishNum;
                            window.user.classicsLevelNum = res.result.data[0].classicsLevelNum;
                            window.user.netLevelNum = res.result.data[0].netLevelNum;
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
                                data:res.result.openid
                            })
                            window.user.appId = res.result.openid;
                            window.user.classicsLevelNum = 0;
                            window.user.netLevelNum = 0;
                            window.user.levelFinishNum = 0;

                            wx.cloud.callFunction({
                                name: 'queryUser',
                                data:{
                                    appId: window.user.appId
                                }
                            }).then(res => {

                                if(res && res.result.data.length<=0){
                                    //注册用户信息
                                    wx.cloud.callFunction({
                                        name: 'addUser',
                                        data: {
                                            appId: window.user.appId,
                                            nickName: window.loginInfo.nickName? window.loginInfo.nickName:'游客'+window.user.appId.substring(window.user.appId.length-5),
                                            portrait: window.loginInfo.avatarUrl
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
        },this.loginplay.node);
        //开始游戏按钮
        if(this.loginplay == null) this.loginplay = cc.find('Canvas/mainBg/loginplay').getComponent(cc.Button)
        this.loginplay.node.on('click', this.loginLevelList, this)
        if(this.visitorplay == null) this.visitorplay = cc.find('Canvas/mainBg/visitorplay').getComponent(cc.Button)
        this.visitorplay.node.on('click', this.visitorLevelList, this)
        if(this.mainRank == null) this.mainRank = cc.find('Canvas/mainBg/mainRank').getComponent(cc.Button)
        this.mainRank.node.on('click', this.showMainRank, this)

        if(this.buildLevel == null) this.buildLevel = cc.find('Canvas/mainBg/buildLevel').getComponent(cc.Button)
        this.buildLevel.node.on('click', function () {
            window.buildLevel = new Array();
            if(window.wxLoginBtn ) window.wxLoginBtn.destroy();
            cc.director.loadScene("build");

        }, this)


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
                let relast = cc.find('settingContain/relast/Background/Label',newMyPrefab).getComponent(cc.Label);

                if(window.setting.touchMove) touchMove.string = '关闭触摸移动';
                    else touchMove.string = '开启触摸移动';
                if(window.setting.clickMove) clickMove.string = '关闭按键移动';
                else clickMove.string = '开启按键移动';

                if(window.setting.relast) relast.string = '关闭回退功能';
                else relast.string = '开启回退功能';

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

                cc.find('settingContain/relast',newMyPrefab).on('click',function () {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        wx.getStorage({
                            key:'setting',
                            success(res){

                                //回退功能
                                if(res.data.relast){
                                    window.setting.relast = false;
                                    relast.string = '开启回退功能'
                                }else{
                                    window.setting.relast = true;
                                    relast.string = '关闭回退功能'
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
                        clickMove: true,
                        relast: false
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
