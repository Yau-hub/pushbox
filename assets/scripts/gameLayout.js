// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {formateRankTime, Loading, Toast} from "./common";
window.currentLevel = [];

window.eleSize = 35;
window.layout = new Array();
window.blockNum = 12;
window.uploadLevel = null;

cc.Class({
    extends: cc.Component,

    properties: {
        block: {
            default: null,
            type: cc.Prefab,
            displayName:'block'
        },
        wall: {
            default: null,
            type: cc.Prefab,
            displayName:'wall'
        },
        box: {
            default: null,
            type: cc.Prefab,
            displayName:'box'
        },
        ball: {
            default: null,
            type: cc.Prefab,
            displayName:'ball'
        },
        roleUp: {
            default: null,
            type: cc.Prefab,
            displayName:'roleUp'
        },
        roleRight: {
            default: null,
            type: cc.Prefab,
            displayName:'roleRight'
        },
        roleDown: {
            default: null,
            type: cc.Prefab,
            displayName:'roleDown'
        },
        roleLeft: {
            default: null,
            type: cc.Prefab,
            displayName:'roleLeft'
        },
        position:{
            default: null,
        },
        gameBn:cc.Sprite,
        boxNum:{
            default: null,
        },
        stepCounter:null,
        stepCounterValue: 0,
        timeCounter:null,
        timeCounterValue:0,
        timeCounterTimer:null,
        levelCounter: null,
        moveHistoryList:[],
        lastScore: null,
        lastStepNode: null,
        lastTimenode: null,
        rankItem:cc.Prefab,
        buildArea:null

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let that = this;
        this.initWinEle();
        this.renderBg();

        //初始化当前关卡
        this.initLevel();
        cc.find('gameBtns',this.node).height =  (cc.winSize.height - cc.winSize.width)/2;

    },

    start () {

        this.addTouchMove();
        this.pendantAddEvent();
    },
    // update (dt) {},

    initWinEle(){
        this.buildArea = cc.find('Canvas/mainBg/buildArea');
        let realSiz = cc.winSize.width/window.blockNum;
        window.eleSize = realSiz;
        for(var i = 0; i < window.blockNum; i++){
            window.layout[i] = new Array();
            for(var n = 0; n < window.blockNum; n++){
                window.layout[i][n] = {x:0,y:0,sign:0,cover:null}
            }
        }
    },
    initPosition(layout){
        this.position = {};
        this.boxNum = 0;
        for(var i = 0; i<layout.length; i++){
            for(var n = 0; n < layout[0].length; n++){
                //layout[i][n].sign -- 人物位置
                if(layout[i][n].sign == 4 || layout[i][n].sign == 5 || layout[i][n].sign == 6 || layout[i][n].sign == 7){
                    this.position.x = n;
                    this.position.y = i;
                }
                //箱子数量
                if(layout[i][n].sign == 2){
                    this.boxNum ++;
                }
            }
        }

    },
    renderBg(){
        let startX = -(cc.winSize.width/2);
        let startY = (window.eleSize*window.blockNum)/2;
        for(var i = 0; i < window.blockNum; i++){
            for(var n = 0; n < window.blockNum; n++){
                let x = n*window.eleSize + startX;
                let y = -i*window.eleSize + startY;
                window.layout[i][n] = {
                    x,
                    y,
                    sign:0,
                    cover:null
                }
                var newBlock = cc.instantiate(this.block);
                // 为设置位置
                newBlock.setPosition(x,y);
                // 将新增的节点添加到 Canvas 节点下面
                this.buildArea.addChild(newBlock);
            }
        }

    },

    renderBn(){
        if(this.gameBn == null) this.gameBn = cc.find('Canvas/mainBg/gameBn').getComponent(cc.Sprite)
        cc.assetManager.loadRemote(window.bgUrlBase+ '_400x240.jpg', function (err, texture) {
            var sprite  = new cc.SpriteFrame(texture, cc.rect(0,0,400,240));
            that.gameBn.spriteFrame = sprite; //设置精灵组件图片资源

        });
    },

    renderLayout(layout){
        this.buildArea.destroyAllChildren()
        this.renderBg();
        for(var i = 0; i < window.blockNum; i++){
            for(var n = 0; n < window.blockNum; n++){
                let x = window.layout[i][n].x;
                let y = window.layout[i][n].y;
                switch(layout[i][n].sign){
                    case 0:
                        var newBlock = cc.instantiate(this.block);
                        newBlock.setPosition(x,y);
                        this.buildArea.addChild(newBlock);
                        break;
                    case 1:
                        var newWall = cc.instantiate(this.wall);
                        newWall.setPosition(x,y);
                        this.buildArea.addChild(newWall);
                        break;
                    case 2:
                        var newBox = cc.instantiate(this.box);
                        newBox.setPosition(x,y);
                        this.buildArea.addChild(newBox);
                        break;
                    case 3:
                        var newBall = cc.instantiate(this.ball);
                        newBall.setPosition(x,y);
                        this.buildArea.addChild(newBall);
                        break;
                    case 4:
                        var newRoleUp = cc.instantiate(this.roleUp);
                        newRoleUp.setPosition(x,y);
                        this.buildArea.addChild(newRoleUp);
                        break;
                    case 5:
                        var newRoleRight = cc.instantiate(this.roleRight);
                        newRoleRight.setPosition(x,y);
                        this.buildArea.addChild(newRoleRight);
                        break;
                    case 6:
                        var newRoleDown = cc.instantiate(this.roleDown);
                        newRoleDown.setPosition(x,y);
                        this.buildArea.addChild(newRoleDown);
                        break;
                    case 7:
                        var newRoleLeft = cc.instantiate(this.roleLeft);
                        newRoleLeft.setPosition(x,y);
                        this.buildArea.addChild(newRoleLeft);
                        break;
                }
            }
        }
    },

    moveUp(layout){
        var that = this;
        var x = this.position.x;
        var y = this.position.y;

        //上一格为空
        if(layout[y-1][x].sign == 0){
            layout[y-1][x].sign = 4;
            layout[y][x].sign = 0;
            this.resetPosition('up');
        }
        //上一格为墙体
        else if(layout[y-1][x].sign == 1){
            layout[y][x].sign = 4;
        }
        //上一格为箱子
        else if(layout[y-1][x].sign == 2){
            //箱子上一格为空
            if(layout[y-2][x].sign == 0){
                layout[y][x].sign = 0;
                layout[y-2][x].sign = 2;
                layout[y-1][x].sign = 4;
                if(layout[y-1][x].cover) layout[y-1][x].cover = 4;
                this.resetPosition('up');
            }
            //箱子上一格球
            else if(layout[y-2][x].sign == 3){
                layout[y][x].sign = 0;
                layout[y-2][x].sign = 2;
                layout[y-2][x].cover = 2;
                layout[y-1][x].sign = 4;
                if(layout[y-1][x].cover) layout[y-1][x].cover = 4;
                this.resetPosition('up');
            }else{
                layout[y][x].sign = 4;
            }
        }
        //上一格为球
        else if(layout[y-1][x].sign == 3){
            layout[y][x].sign = 0;
            layout[y-1][x].sign = 4;
            layout[y-1][x].cover = 4;
            this.resetPosition('up');
        }

        //移动后回显球体
        if(layout[y][x].sign == 0 && layout[y][x].cover){
            layout[y][x].sign = 3;
            layout[y][x].cover = null;
        }
        that.renderLayout(layout)

    },
    moveDown(layout){
        var that = this;
        var x = this.position.x;
        var y = this.position.y;
        //下一格为空
        if(layout[y+1][x].sign == 0){
            layout[y+1][x].sign = 6;
            layout[y][x].sign = 0;
            this.resetPosition('down');
        }
        //下一格为墙体
        else if(layout[y+1][x].sign == 1){
            layout[y][x].sign = 6;

        }
        //下一格为箱子
        else if(layout[y+1][x].sign == 2){
            //箱子下一格为空
            if(layout[y+2][x].sign == 0){
                layout[y][x].sign = 0;
                layout[y+2][x].sign = 2;
                layout[y+1][x].sign = 6;
                if(layout[y+1][x].cover) layout[y+1][x].cover = 6;
                this.resetPosition('down');
            }
            //箱子下一格为球
            else if(layout[y+2][x].sign == 3){
                layout[y][x].sign = 0;
                layout[y+2][x].sign = 2;
                layout[y+2][x].cover = 2;
                layout[y+1][x].sign = 6;
                if(layout[y+1][x].cover) layout[y+1][x].cover = 6;
                this.resetPosition('down');
            }else{
                layout[y][x].sign = 6;
            }
        }
        //下一格为球
        else if(layout[y+1][x].sign == 3){
            layout[y][x].sign = 0;
            layout[y+1][x].sign = 6;
            layout[y+1][x].cover = 6;
            this.resetPosition('down');
        }

        //移动后回显球体
        if(layout[y][x].sign == 0 && layout[y][x].cover){
            layout[y][x].sign = 3;
            layout[y][x].cover = null;
        }
        that.renderLayout(layout)

    },
    moveLeft(layout){
        var that = this;
        var x = this.position.x;
        var y = this.position.y;
        //左一格为空
        if(layout[y][x-1].sign == 0){
            layout[y][x-1].sign = 7;
            layout[y][x].sign = 0;
            this.resetPosition('left');
        }
        //左一格为墙体
        else if(layout[y][x-1].sign == 1){
            layout[y][x].sign = 7;
        }
        //左一格为箱子
        else if(layout[y][x-1].sign == 2){
            //箱子左一格为空
            if(layout[y][x-2].sign == 0){
                layout[y][x].sign = 0;
                layout[y][x-2].sign = 2;
                layout[y][x-1].sign = 7;
                if(layout[y][x-1].cover) layout[y][x-1].cover = 7;
                this.resetPosition('left');
            }
            //箱子左一格为球
            else if(layout[y][x-2].sign == 3){
                layout[y][x].sign = 0;
                layout[y][x-2].sign = 2;
                layout[y][x-2].cover = 2;
                layout[y][x-1].sign = 7;
                if(layout[y][x-1].cover) layout[y][x-1].cover = 7;
                this.resetPosition('left');
            }else{
                layout[y][x].sign = 7;
            }
        }
        //左一格为球
        else if(layout[y][x-1].sign == 3){
            layout[y][x].sign = 0;
            layout[y][x-1].sign = 7;
            layout[y][x-1].cover = 7;
            this.resetPosition('left');
        }

        //移动后回显球体
        if(layout[y][x].sign == 0 && layout[y][x].cover && layout[y][x].cover != 2){
            layout[y][x].sign = 3;
            layout[y][x].cover = null;

        }
        that.renderLayout(layout)
    },
    moveRight(layout){
        var that = this;
        var x = this.position.x;
        var y = this.position.y;
        //右一格为空
        if(layout[y][x+1].sign == 0){
            layout[y][x+1].sign = 5;
            layout[y][x].sign = 0;
            this.resetPosition('right');
        }
        //右一格为墙体
        else if(layout[y][x+1].sign == 1){
            layout[y][x].sign = 5;
        }
        //右一格为箱子
        else if(layout[y][x+1].sign == 2){
            //箱子右一格为空
            if(layout[y][x+2].sign == 0){
                layout[y][x].sign = 0;
                layout[y][x+2].sign = 2;
                layout[y][x+1].sign = 5;
                if(layout[y][x+1].cover) layout[y][x+1].cover = 5;
                this.resetPosition('right');
            }
            //箱子右一格为球
            else if(layout[y][x+2].sign == 3){
                layout[y][x].sign = 0;
                layout[y][x+2].sign = 2;
                layout[y][x+2].cover = 2;
                layout[y][x+1].sign = 5;
                if(layout[y][x+1].cover) layout[y][x+1].cover = 5;
                this.resetPosition('right');
            }else{
                layout[y][x].sign = 5;
            }
        }
        //右一格为球
        else if(layout[y][x+1].sign == 3){
            layout[y][x].sign = 0;
            layout[y][x+1].sign = 5;
            layout[y][x+1].cover = 5;
            this.resetPosition('right');
        }

        //移动后回显球体
        if(layout[y][x].sign == 0 && layout[y][x].cover && layout[y][x].cover != 2){
            layout[y][x].sign = 3;
            layout[y][x].cover = null;

        }
        that.renderLayout(layout)
    },
    resetPosition(direction){
        let that = this;
        switch(direction){
            case 'up':
                this.position.y -= 1;
                break;
            case 'right':
                this.position.x += 1;
                break;

            case 'down':
                this.position.y += 1;
                break;

            case 'left':
                this.position.x -= 1;
                break;
        }
        //是否开启回退功能
        if (window.setting.relast && cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.setStorage({
                key: "lastLayout",
                data: window.currentLevel,
                success(result) {
                    wx.getStorage({
                        key: "lastLayout",
                        success(res) {
                            that.moveHistoryList.push(res.data)
                        }
                    })
                }
            })
        }

        this.stepCounterValue ++;
        // this.gameOver = true;
        this.stepCounter.string = "步数：" + this.stepCounterValue;
        let coverBoxNum = 0;
        for(var i = 0; i<window.currentLevel.length ; i++){
            for(var n = 0; n<window.currentLevel[0].length ; n++){
                if(window.currentLevel[i][n].cover && window.currentLevel[i][n].sign == 2){
                    // this.gameOver = false;
                    coverBoxNum ++;
                    if(this.boxNum == coverBoxNum){
                        // console.log('挑战成功')
                        this.showResult();
                        clearInterval(this.timeCounterTimer)
                        this.timeCounterTimer = null;
                    }
                }
            }
        }

        if(window.moveMusic && !window.moveMusic.paused) window.moveMusic.stop();
        if(window.moveMusic && !window.moveMusic.paused) window.moveMusic.pause();
        if(window.moveMusic) window.moveMusic.play();
    },

    addTouchMove(){
        if(!window.setting.touchMove) return;

        let that = this;
        let figureLocation = null;

        this.node.on('touchstart', function (event) {
            figureLocation = event.getLocation();
        }, this);

        this.node.on('touchend', function (event) {
            let endLocation = event.getLocation();
            if(Math.abs(figureLocation.x - endLocation.x) > Math.abs(figureLocation.y - endLocation.y)){
                if((figureLocation.x - endLocation.x) < -50){
                    // console.log("右滑")
                    that.moveRight(window.currentLevel);
                }
                else if((figureLocation.x - endLocation.x) > 50){
                    // console.log("左滑")
                    that.moveLeft(window.currentLevel);
                }
            }else{
                if((figureLocation.y - endLocation.y) < -50){
                    // console.log("上滑")
                    that.moveUp(window.currentLevel);
                }
                else if((figureLocation.y - endLocation.y) > 50){
                    // console.log("下滑")
                    that.moveDown(window.currentLevel);
                }
            }

        }, this);
    },
    showResult(){
        let that = this;


        if(window.from == "review"){
            Toast('挑战成功！',1500);
            return;
        }

        var CanvasNode = this.node;
        if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
        var onResourceLoaded = function(errorMessage, loadedResource )
        {
            if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
            var newMyPrefab = cc.instantiate( loadedResource );


            cc.find('contentBg/useTime',newMyPrefab).getComponent(cc.Label).string = "步数："+ that.stepCounterValue+'步';
            cc.find('contentBg/useStep',newMyPrefab).getComponent(cc.Label).string = "用时："+ that.timeCounterValue+'秒';
            if(window.from != 'build' && window.levelIndex >= window.classicsLevelNum){
                cc.find('contentBg/next',newMyPrefab).opacity = 0;
            }
            if(window.from == 'build'){
                cc.find('contentBg/next/Background/Label',newMyPrefab).getComponent(cc.Label).string = '上传关卡'
            }
            cc.find('contentBg/next',newMyPrefab).on('click',function () {
               if(window.from != 'build'){
                   if(window.levelIndex < window.classicsLevelNum){

                       newMyPrefab.removeFromParent();
                       newMyPrefab.destroy();
                       that.initPendant();
                       window.levelIndex++;
                       that.initLevel()
                   }
               }else{

                   Loading.show();
                   wx.cloud.callFunction({
                       name: 'getReviewLevelNum'
                   }).then(res => {

                       wx.cloud.callFunction({
                           name: 'addReviewLevel',
                           data:{
                               content: window.uploadLevel,
                               useStepNum: that.stepCounterValue,
                               levelIndex: res.result.total+1,
                               appId: window.user.appId,
                               nickName: window.loginInfo.nickName?window.loginInfo.nickName:'游客'+window.user.appId.substring(window.user.appId.length-5),
                               portrait: window.loginInfo.avatarUrl,
                           }
                       }).then(result => {
                            let levelUploadNum = parseInt(res.result.total)+1;
                           Toast('关卡上传成功待管理员审核，即将跳回主界面',1500);
                           setTimeout(function () {
                               Loading.hide();
                               window.from = 'game';
                               cc.director.loadScene('main');
                           },1500)
                       }).catch(err => {
                           Loading.hide();
                           Toast('上传失败',1500);
                           console.error(err)
                       })

                   }).catch(err => {
                       console.error(err)
                   })
               }

            },this)
            cc.find('contentBg/replay',newMyPrefab).on('click',function () {
                newMyPrefab.removeFromParent();
                newMyPrefab.destroy();
                that.replayLayout();
                that.initPendant();
            },this)
            cc.find('contentBg/rank',newMyPrefab).on('click',function () {
                if(window.from == 'build'){
                    Toast('测试关卡没有排行榜',1500);
                    return ;
                }
                that.showLevelRank();
            },this)
            cc.find('contentBg/share',newMyPrefab).on('click',function () {
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    var titString =  '益智推箱';
                    if(window.from != 'build'){
                        titString = titString + '第'+window.levelIndex+'关'+'-使用步数：'+ that.stepCounterValue +'-挑战成功！';
                    }
                    else{
                        titString = titString+'小游戏，快来挑战吧！'
                    }
                    wx.shareAppMessage({
                        title: titString,
                        // imageUrl: data.url,
                        query: '分享',
                    })

                }
            },this)
            CanvasNode.addChild( newMyPrefab );
        };
        setTimeout(function () {
            cc.loader.loadRes('gameOverAlert', onResourceLoaded );
        },0)

        if(window.from == "build") return;

        //上传分数
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            if (that.lastScore == null) {
                Loading.show();
                Toast('上传分数中...',1500);
                wx.cloud.callFunction({
                    name: 'addClassicsLevelScore',
                    data: {
                        levelIndex: window.levelIndex,
                        appId: window.user.appId,
                        useStep: that.stepCounterValue,
                        useTime: that.timeCounterValue,
                        portrait: window.loginInfo.avatarUrl,
                        nickName: window.loginInfo.nickName?window.loginInfo.nickName:'游客'+window.user.appId.substring(window.user.appId.length-5)
                    }
                }).then(res => {
                    Loading.hide();
                }).catch(err => {
                    Loading.hide();
                    console.error(err)
                })
                that.lastScore = {
                    levelIndex: window.levelIndex,
                    appId: window.user.appId,
                    useStep: that.stepCounterValue,
                    useTime: that.timeCounterValue
                }
                that.renderLastScore(that.lastScore.useStep,that.lastScore.useTime)
            } else {
            // || that.timeCounterValue < that.lastScore.useTime
                if (that.stepCounterValue < that.lastScore.useStep) {
                    that.lastScore = {
                        levelIndex: window.levelIndex,
                        appId: window.user.appId,
                        useStep: that.stepCounterValue,
                        useTime: that.timeCounterValue
                    }
                    that.renderLastScore(that.lastScore.useStep,that.lastScore.useTime);
                    Loading.show();
                    Toast('上传分数中...',1500);
                    wx.cloud.callFunction({
                        name: 'updateClassicsLevelScore',
                        data: {
                            levelIndex: window.levelIndex,
                            appId: window.user.appId,
                            useStep: that.stepCounterValue,
                            useTime: that.timeCounterValue,
                            portrait: window.loginInfo.avatarUrl,
                            nickName: window.loginInfo.nickName
                        }
                    }).then(res => {
                        Loading.hide();
                    }).catch(err => {
                        Loading.hide();
                        console.error(err)
                    })
                }
            }

            let curLevelNum = window.levelIndex;
            wx.cloud.callFunction({
                name: 'queryUser',
                data: {
                    appId: window.user.appId,
                }
            }).then(res => {
                if(res && res.result.data.length>0 && res.result.data[0].levelFinishNum < curLevelNum){
                    window.user.levelFinishNum = curLevelNum;
                    let data = {};
                    data.appId = window.user.appId;
                    data.levelFinishNum = curLevelNum;
                    if(window.loginInfo.nickName) data.nickName = window.loginInfo.nickName;
                    if(window.loginInfo.avatarUrl) data.portrait = window.loginInfo.avatarUrl;
                    wx.cloud.callFunction({
                        name: 'updateUser',
                        data: data
                    }).then(res => {

                    }).catch(err => {
                        console.error(err)
                    })

                }
            }).catch(err => {
                console.error(err)
            })


        }
    },
    replayLayout(){
        var that = this;
        wx.getStorage({
            key: 'initLevel',
            success (res) {
                window.currentLevel = res.data;
                that.renderLayout(window.currentLevel);
                that.initPosition(window.currentLevel);
            },
            fail(){

            }
        })



    },
    initPendant(){
        let that = this;
        //关卡
        if(this.levelCounter == null){
            var levelNode = new cc.Node('levelCounter');
            levelNode.setAnchorPoint(0.5, 0.5);
            levelNode.width =  756;
            levelNode.height = 240;
            levelNode.horizontalAlign = 'center'
            var levelCounter = levelNode.addComponent(cc.Label);
            levelCounter.node.setPosition(0,  (cc.winSize.height/2) - (cc.winSize.height*0.05))
            if(window.levelBy){
                levelCounter.string = '第 '+ window.levelIndex + ' 关 - '+window.levelBy;
            }
            else{
                levelCounter.string = '第 '+ window.levelIndex + ' 关';
            }
            levelCounter.fontSize = 60;
            levelCounter.enableBold = true;
            // levelCounter.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
            levelCounter.lineHeight = 60;
            levelCounter.horizontalAlign = 'center';
            this.levelCounter = levelNode.getComponent(cc.Label)
            this.node.addChild(levelNode);
        }else{


            if(window.levelBy){
                this.levelCounter.string = '第 '+ window.levelIndex + ' 关 - '+window.levelBy;
            }
            else{
                this.levelCounter.string = '第 '+ window.levelIndex + ' 关';
            }
        }
        if(window.from == 'build'){
            this.levelCounter.string = '测试关卡';
        }
        if(window.from == 'review'){
            this.levelCounter.string = '审核关卡';
        }

        //步数
        if(this.stepCounter == null){
            var node = new cc.Node('stepCounter');
            node.setAnchorPoint(0, 1);
            var stepCounter = node.addComponent(cc.Label);
            stepCounter.node.setPosition(-(cc.winSize.width/2) + (cc.winSize.width*0.05),  (cc.winSize.width/2) + 80);
            stepCounter.string = '步数： 0';
            this.stepCounter = node.getComponent(cc.Label)
            this.node.addChild(node);
        }else{
            this.stepCounterValue  = 0;
            this.stepCounter.string = "步数：" + this.stepCounterValue;
        }


        //用时
        if(this.timeCounter == null){
            var timeNode = new cc.Node('timeCounter');
            timeNode.setAnchorPoint(0, 1);
            var timeCounter = timeNode.addComponent(cc.Label);
            timeCounter.node.setPosition(0 , (cc.winSize.width/2) + 80)
            timeCounter.string = '用时： 0';
            this.timeCounter = timeNode.getComponent(cc.Label)
            this.node.addChild(timeNode);

            this.timeCounterTimer = setInterval(function () {
                this.timeCounterValue  ++;
                this.timeCounter.string = "用时：" + this.timeCounterValue;
            }.bind(this),1000)
        }else{
            this.timeCounterValue = 0;
            this.timeCounter.string = "用时：" + this.timeCounterValue;
            if(this.timeCounterTimer == null){
                this.timeCounterTimer = setInterval(function () {
                    this.timeCounterValue  ++;
                    this.timeCounter.string = "用时：" + this.timeCounterValue;
                }.bind(this),1000)
            }
        }

        // this.moveHistoryList = [];

        this.moveHistoryList.splice(0,this.moveHistoryList.length)
        wx.getStorage({
            key:"initLevel",
            success(res){
                that.moveHistoryList.push(res.data)
            }
        })


    },
    pendantAddEvent(){
        let that = this;
        cc.find('back',this.node).on('click',this.back, this)
        //开启点击移动
        if(window.setting.clickMove) {
            cc.find('gameBtns/up',this.node).on("click",function () {
                that.moveUp(window.currentLevel)
            },this)
            cc.find('gameBtns/right',this.node).on("click",function () {
                that.moveRight(window.currentLevel)
            },this)
            cc.find('gameBtns/down',this.node).on("click",function () {
                that.moveDown(window.currentLevel)
            },this)
            cc.find('gameBtns/left',this.node).on("click",function () {
                that.moveLeft(window.currentLevel)
            },this)
        }else{
            cc.find('gameBtns/up',this.node).opacity = 0;
            cc.find('gameBtns/right',this.node).opacity = 0;
            cc.find('gameBtns/down',this.node).opacity = 0;
            cc.find('gameBtns/left',this.node).opacity = 0;
        }


        if(window.from == 'review') cc.find('gameBtns/backStep/Background/Label',this.node).getComponent(cc.Label).string = '通过';
        else if(!window.setting.relast) cc.find('gameBtns/backStep/Background/Label',this.node).getComponent(cc.Label).string = '重玩';

        cc.find('gameBtns/backStep',this.node).on('click',function () {
            //审核关卡通过
            if(window.from == 'review'){

                var CanvasNode = cc.find('Canvas');
                if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
                var onResourceLoaded = function(errorMessage, loadedResource )
                {
                    if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
                    if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
                    var newMyPrefab = cc.instantiate( loadedResource );
                    cc.find('verifyContain/close',newMyPrefab).on('click',function () {
                        newMyPrefab.removeFromParent();
                        newMyPrefab.destroy();
                    },this)

                    var password =  cc.find('verifyContain/editbox',newMyPrefab).getComponent(cc.EditBox);

                    cc.find('verifyContain/confirm',newMyPrefab).on('click',function () {
                        if(password.textLabel.string == '19970720'){
                            Loading.show();
                            wx.cloud.callFunction({
                                name: 'getClassicsLevelNum'
                            }).then(res => {

                                wx.cloud.callFunction({
                                    name: 'addClassicsLevel',
                                    data:{
                                        content: window.uploadLevel,
                                        levelIndex: res.result.total+1,
                                        appId: window.user.appId,
                                        nickName: window.loginInfo.nickName?window.loginInfo.nickName:'游客'+window.user.appId.substring(window.user.appId.length-5),
                                        portrait: window.loginInfo.avatarUrl,
                                    }
                                }).then(result => {

                                    wx.cloud.callFunction({
                                        name: 'removeReviewLevel',
                                        data:{
                                            _id:window.reviewId
                                        }
                                    }).then(result => {
                                        let levelUploadNum = parseInt(res.result.total)+1;
                                        Toast('关卡'+levelUploadNum+'上传成功，即将跳回主界面',1500);
                                        setTimeout(function () {
                                            clearInterval(that.timeCounterTimer);
                                            that.timeCounterTimer = null;
                                            Loading.hide();
                                            window.from = 'game';
                                            cc.director.loadScene('main');
                                        },1500)
                                    });

                                }).catch(err => {
                                    Loading.hide();
                                    Toast('上传失败',1500);
                                    console.error(err)
                                })

                            }).catch(err => {
                                console.error(err)
                            })
                        }else{
                            Toast('密码错误！',1500);
                        }
                    },this)

                    CanvasNode.addChild( newMyPrefab );
                };
                cc.loader.loadRes('verifyAdmin', onResourceLoaded );



                return;
            }
            if(window.setting.relast){
                if(that.moveHistoryList.length > 1 && that.stepCounterValue >= 1){
                    that.moveHistoryList.pop();
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        wx.setStorage({
                            key: "lastLayout",
                            data: that.moveHistoryList[that.moveHistoryList.length-1],
                            success(result) {
                                wx.getStorage({
                                    key: "lastLayout",
                                    success(res) {
                                        that.stepCounterValue --;
                                        that.stepCounter.string = "步数：" + that.stepCounterValue;
                                        window.currentLevel = res.data;
                                        that.renderLayout(window.currentLevel);
                                        that.initPosition(window.currentLevel)
                                    }
                                })
                            }
                        })
                    }
                }
            }
            else{
                that.replayLayout();
                that.initPendant();
            }

        },this);

        if(window.from == 'review') cc.find('gameBtns/menu/Background/Label',this.node).getComponent(cc.Label).string = '驳回'
        cc.find('gameBtns/menu',this.node).on("click",function () {
            clearInterval(that.timeCounterTimer);
            that.timeCounterTimer = null;
            //审核关卡驳回
            if(window.from == 'review'){
                var CanvasNode = cc.find('Canvas');
                if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
                var onResourceLoaded = function(errorMessage, loadedResource )
                {
                    if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
                    if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
                    var newMyPrefab = cc.instantiate( loadedResource );
                    cc.find('verifyContain/close',newMyPrefab).on('click',function () {
                        newMyPrefab.removeFromParent();
                        newMyPrefab.destroy();
                    },this)

                    var password =  cc.find('verifyContain/editbox',newMyPrefab).getComponent(cc.EditBox);

                    cc.find('verifyContain/confirm',newMyPrefab).on('click',function () {
                        if(password.textLabel.string == '19970720'){
                            Loading.show();
                            wx.cloud.callFunction({
                                name: 'removeReviewLevel',
                                data:{
                                    _id:window.reviewId
                                }
                            }).then(result => {
                                Toast('关卡已驳回，即将跳回主界面',1500);
                                setTimeout(function () {
                                    Loading.hide();
                                    window.from = 'game';
                                    cc.director.loadScene('main');
                                },1500)
                            });
                        }else{
                            Toast('密码错误！',1500);
                        }
                    },this)

                    CanvasNode.addChild( newMyPrefab );
                };
                cc.loader.loadRes('verifyAdmin', onResourceLoaded );

                return;
            }
            var CanvasNode = that.node;
            if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
            var onResourceLoaded = function(errorMessage, loadedResource )
            {
                if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
                if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
                var newMyPrefab = cc.instantiate( loadedResource );

                cc.find('contain/continue',newMyPrefab).on('click',function () {
                    if(that.timeCounterTimer == null){
                        that.timeCounterTimer = setInterval(function () {
                            that.timeCounterValue  ++;
                            that.timeCounter.string = "用时：" + that.timeCounterValue;
                        }.bind(that),1000)
                    }
                    newMyPrefab.removeFromParent();
                    newMyPrefab.destroy();

                },this)
                cc.find('contain/replay',newMyPrefab).on('click',function () {
                    newMyPrefab.removeFromParent();
                    newMyPrefab.destroy();
                    that.replayLayout();
                    that.initPendant();
                },this)


                cc.find('contain/rank',newMyPrefab).on('click',function () {
                    if(window.from == 'build'){
                        Toast('测试关卡没有排行榜',1500);
                        return ;
                    }
                    that.showLevelRank();
                },this)

                cc.find('contain/share',newMyPrefab).on('click',function () {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        var titString =  '益智推箱';
                        if(window.from != 'build'){
                            titString = titString + '第'+window.levelIndex+'关-快来挑战吧!'
                        }
                        else{
                            titString = titString + '小游戏，快来挑战吧！'
                        }
                        // titString = titString + '-使用步数：'
                        wx.shareAppMessage({
                            title: titString,
                            // imageUrl: data.url,
                            query: '分享',
                        })

                    }
                },this)


                CanvasNode.addChild( newMyPrefab );
            };
            cc.loader.loadRes('gameMenu', onResourceLoaded );
        },this)
    },
    initLevel(){
        let that = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            Loading.show();
            if(window.from == 'build'){
                that.lastScore = null;
                that.renderLastScore('无','无')

                wx.getStorage({
                    key:'buildLevel',
                    success(res){
                        window.currentLevel = res.data;
                        that.renderLayout(window.currentLevel);
                        that.initPosition(window.currentLevel);
                        // 初始化挂件
                        that.initPendant();
                        wx.setStorage({
                            key: "initLevel",
                            data:window.currentLevel,
                            success(result){
                                wx.getStorage({
                                    key:"initLevel",
                                    success(res){
                                        that.moveHistoryList.push(res.data)
                                    }
                                })
                            }
                        })
                        Loading.hide();
                    }
                })

                wx.getStorage({
                    key:'buildLevel',
                    success(res){
                        window.uploadLevel = res.data;
                    }
                })

                return ;
            }
            if(window.from == 'review'){
                that.lastScore = null;
                that.renderLastScore('无','无')

                wx.getStorage({
                    key:'reviewLevel',
                    success(res){
                        window.uploadLevel = res.data;
                        window.currentLevel = res.data;
                        that.renderLayout(window.currentLevel);
                        that.initPosition(window.currentLevel);
                        // 初始化挂件
                        that.initPendant();
                        wx.setStorage({
                            key: "initLevel",
                            data:window.currentLevel,
                            success(result){
                                wx.getStorage({
                                    key:"initLevel",
                                    success(res){
                                        that.moveHistoryList.push(res.data)
                                    }
                                })
                            }
                        })
                        Loading.hide();
                    }
                })


                return ;
            }
            //经典关卡
            if(window.levelClassify == 'classicsLevel'){
                wx.cloud.callFunction({
                    name: 'queryClassicsLevel',
                    data: {
                        appId:window.user.appId,
                        levelIndex: window.levelIndex
                    }
                }).then(res => {
                    if(res && res.result.data.length>0){
                        window.currentLevel = res.result.data[0].content;
                        that.renderLayout(window.currentLevel);
                        that.initPosition(window.currentLevel);
                        window.levelBy = res.result.data[0].nickName;
                        // 初始化挂件
                        that.initPendant();
                        wx.setStorage({
                            key: "initLevel",
                            data:window.currentLevel,
                            success(result){
                              wx.getStorage({
                                  key:"initLevel",
                                  success(res){
                                      that.moveHistoryList.push(res.data)
                                  }
                              })
                            }
                        })
                    }
                    Loading.hide();
                }).catch(err => {
                    console.error(err)
                })

                wx.cloud.callFunction({
                    name: 'queryClassicsLevelScore',
                    data: {
                        levelIndex: window.levelIndex,
                        appId:window.user.appId
                    }
                }).then(res => {
                    if(res && res.result.data.length>0){
                        that.lastScore = res.result.data[0];
                        that.renderLastScore(that.lastScore.useStep,that.lastScore.useTime)
                    }else{
                        that.lastScore = null;
                        that.renderLastScore('无','无')
                        if(window.levelIndex == 1) Toast('Tip: 可滑动屏幕控制人物',3000);
                    }
                }).catch(err => {
                    console.error(err)
                })


            }
            //网络关卡
            else{

            }


        }
    },
    back(){
        this.initPendant();
        clearInterval(this.timeCounterTimer)
        this.timeCounterTimer = null;
        if(window.from == 'review'){
            cc.director.loadScene("main");
        }else if(window.from){
            cc.director.loadScene(window.from);
        }else{
            cc.director.loadScene("main");
        }
        window.from = 'game'
    },
    renderLastScore(step,time){
        if(window.from == 'build' || window.from == "review"){
            return ;
        }
        let that = this;
        //最佳步数
        if(that.lastStepNode == null){
            var lastStepNode = new cc.Node('lastStepNode');
            lastStepNode.setAnchorPoint(0, 1);
            var stepCounter = lastStepNode.addComponent(cc.Label);
            stepCounter.node.setPosition(-(cc.winSize.width/2) + (cc.winSize.width*0.05),  (cc.winSize.width/2) + 160)
            stepCounter.string = '最佳成绩：步数 '+ step+" - 用时 "+time;
            that.lastStepNode = lastStepNode.getComponent(cc.Label)
            that.node.addChild(lastStepNode);
        }else{
            that.lastStepNode.string = '最佳成绩：步数 '+ step+" - 用时 "+time;
        }


    },
    showLevelRank(){
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
                    that.renderLevelRankList(content,rankPage,rankPageSize);
                } );
            }else{
                that.renderLevelRankList(content,rankPage,rankPageSize);
            }
            cc.find('rankList',newMyPrefab).on('bounce-bottom', function(){
                rankPage++;
                that.renderLevelRankList(content,rankPage,rankPageSize);
            }, this);
            cc.find('thLevel',newMyPrefab).getComponent(cc.Label).string = '步 数'
            CanvasNode.addChild( newMyPrefab );
        };
        cc.loader.loadRes('rankLayout', onResourceLoaded );
    },
    renderLevelRankList(content,page,pageSize){
        let that = this;
        let currentItemNum = content.childrenCount;
        if (cc.sys.platform === cc.sys.WECHAT_GAME){
            Loading.show();
            wx.cloud.callFunction({
                name: 'queryClassicsLevelScore',
                data:{
                    levelIndex:window.levelIndex,
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
                        node.getChildByName('tdLevel').getComponent(cc.Label).string = data.useStep;
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

    }


});
