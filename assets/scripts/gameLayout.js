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
        buildArea:null,
        solutionBtn:null,
        noneSkipChange:false,
        solutionStepIndex: -1,
        recordSolutionStep:[]


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let that = this;
        this.initWinEle();
        this.renderBg();

        //?????????????????????
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
                //layout[i][n].sign -- ????????????
                if(layout[i][n].sign == 4 || layout[i][n].sign == 5 || layout[i][n].sign == 6 || layout[i][n].sign == 7){
                    this.position.x = n;
                    this.position.y = i;
                }
                //????????????
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
                // ???????????????
                newBlock.setPosition(x,y);
                // ??????????????????????????? Canvas ????????????
                this.buildArea.addChild(newBlock);
            }
        }

    },

    renderBn(){
        if(this.gameBn == null) this.gameBn = cc.find('Canvas/mainBg/gameBn').getComponent(cc.Sprite)
        cc.assetManager.loadRemote(window.bgUrlBase+ '_400x240.jpg', function (err, texture) {
            var sprite  = new cc.SpriteFrame(texture, cc.rect(0,0,400,240));
            that.gameBn.spriteFrame = sprite; //??????????????????????????????

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

        //???????????????
        if(layout[y-1][x].sign == 0){
            layout[y-1][x].sign = 4;
            layout[y][x].sign = 0;
            this.resetPosition('up');
        }
        //??????????????????
        else if(layout[y-1][x].sign == 1){
            layout[y][x].sign = 4;
        }
        //??????????????????
        else if(layout[y-1][x].sign == 2){
            //?????????????????????
            if(layout[y-2][x].sign == 0){
                layout[y][x].sign = 0;
                layout[y-2][x].sign = 2;
                layout[y-1][x].sign = 4;
                if(layout[y-1][x].cover) layout[y-1][x].cover = 4;
                this.resetPosition('up');
            }
            //??????????????????
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
        //???????????????
        else if(layout[y-1][x].sign == 3){
            layout[y][x].sign = 0;
            layout[y-1][x].sign = 4;
            layout[y-1][x].cover = 4;
            this.resetPosition('up');
        }

        //?????????????????????
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
        //???????????????
        if(layout[y+1][x].sign == 0){
            layout[y+1][x].sign = 6;
            layout[y][x].sign = 0;
            this.resetPosition('down');
        }
        //??????????????????
        else if(layout[y+1][x].sign == 1){
            layout[y][x].sign = 6;

        }
        //??????????????????
        else if(layout[y+1][x].sign == 2){
            //?????????????????????
            if(layout[y+2][x].sign == 0){
                layout[y][x].sign = 0;
                layout[y+2][x].sign = 2;
                layout[y+1][x].sign = 6;
                if(layout[y+1][x].cover) layout[y+1][x].cover = 6;
                this.resetPosition('down');
            }
            //?????????????????????
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
        //???????????????
        else if(layout[y+1][x].sign == 3){
            layout[y][x].sign = 0;
            layout[y+1][x].sign = 6;
            layout[y+1][x].cover = 6;
            this.resetPosition('down');
        }

        //?????????????????????
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
        //???????????????
        if(layout[y][x-1].sign == 0){
            layout[y][x-1].sign = 7;
            layout[y][x].sign = 0;
            this.resetPosition('left');
        }
        //??????????????????
        else if(layout[y][x-1].sign == 1){
            layout[y][x].sign = 7;
        }
        //??????????????????
        else if(layout[y][x-1].sign == 2){
            //?????????????????????
            if(layout[y][x-2].sign == 0){
                layout[y][x].sign = 0;
                layout[y][x-2].sign = 2;
                layout[y][x-1].sign = 7;
                if(layout[y][x-1].cover) layout[y][x-1].cover = 7;
                this.resetPosition('left');
            }
            //?????????????????????
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
        //???????????????
        else if(layout[y][x-1].sign == 3){
            layout[y][x].sign = 0;
            layout[y][x-1].sign = 7;
            layout[y][x-1].cover = 7;
            this.resetPosition('left');
        }

        //?????????????????????
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
        //???????????????
        if(layout[y][x+1].sign == 0){
            layout[y][x+1].sign = 5;
            layout[y][x].sign = 0;
            this.resetPosition('right');
        }
        //??????????????????
        else if(layout[y][x+1].sign == 1){
            layout[y][x].sign = 5;
        }
        //??????????????????
        else if(layout[y][x+1].sign == 2){
            //?????????????????????
            if(layout[y][x+2].sign == 0){
                layout[y][x].sign = 0;
                layout[y][x+2].sign = 2;
                layout[y][x+1].sign = 5;
                if(layout[y][x+1].cover) layout[y][x+1].cover = 5;
                this.resetPosition('right');
            }
            //?????????????????????
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
        //???????????????
        else if(layout[y][x+1].sign == 3){
            layout[y][x].sign = 0;
            layout[y][x+1].sign = 5;
            layout[y][x+1].cover = 5;
            this.resetPosition('right');
        }

        //?????????????????????
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
                if(window.from == "uploadSolution") that.recordSolutionStep.push('U');
                break;
            case 'right':
                this.position.x += 1;
                if(window.from == "uploadSolution") that.recordSolutionStep.push('R');
                break;

            case 'down':
                this.position.y += 1;
                if(window.from == "uploadSolution") that.recordSolutionStep.push('D');
                break;

            case 'left':
                this.position.x -= 1;
                if(window.from == "uploadSolution") that.recordSolutionStep.push('L');
                break;
        }
        //????????????????????????
        if (window.from == "uploadSolution"  || (window.setting.relast && cc.sys.platform === cc.sys.WECHAT_GAME)) {
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
        if(this.stepCounter)this.stepCounter.string = "?????????" + this.stepCounterValue;
        let coverBoxNum = 0;
        for(var i = 0; i<window.currentLevel.length ; i++){
            for(var n = 0; n<window.currentLevel[0].length ; n++){
                if(window.currentLevel[i][n].cover && window.currentLevel[i][n].sign == 2){
                    // this.gameOver = false;
                    coverBoxNum ++;
                    if(this.boxNum == coverBoxNum){
                        // console.log('????????????')
                        this.showResult();

                    }
                }
            }
        }

        if(window.moveMusic && !window.moveMusic.paused) window.moveMusic.stop();
        if(window.moveMusic && !window.moveMusic.paused) window.moveMusic.pause();
        if(window.moveMusic) window.moveMusic.play();

    },

    addTouchMove(){
        if(!window.setting.touchMove || window.from == "checkSolution") return;

        let that = this;
        let figureLocation = null;

        this.node.on('touchstart', function (event) {
            figureLocation = event.getLocation();
        }, this);

        this.node.on('touchend', function (event) {
            let endLocation = event.getLocation();
            if(Math.abs(figureLocation.x - endLocation.x) > Math.abs(figureLocation.y - endLocation.y)){
                if((figureLocation.x - endLocation.x) < -50){
                    // console.log("??????")
                    that.moveRight(window.currentLevel);
                }
                else if((figureLocation.x - endLocation.x) > 50){
                    // console.log("??????")
                    that.moveLeft(window.currentLevel);
                }
            }else{
                if((figureLocation.y - endLocation.y) < -50){
                    // console.log("??????")
                    that.moveUp(window.currentLevel);
                }
                else if((figureLocation.y - endLocation.y) > 50){
                    // console.log("??????")
                    that.moveDown(window.currentLevel);
                }
            }

        }, this);
    },
    showResult(type){
        let that = this;
        if(that.timeCounterTimer){
            clearInterval(that.timeCounterTimer)
            that.timeCounterTimer = null;
        }



        if(window.from == "review" || window.from == "checkSolution"){
            Toast('???????????????',1500);
            return;
        }


        var CanvasNode = this.node;
        if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
        var onResourceLoaded = function(errorMessage, loadedResource )
        {
            if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
            var newMyPrefab = cc.instantiate( loadedResource );


            cc.find('contentBg/useTime',newMyPrefab).getComponent(cc.Label).string = "?????????"+ that.stepCounterValue+'???';
            cc.find('contentBg/useStep',newMyPrefab).getComponent(cc.Label).string = "?????????"+ that.timeCounterValue+'???';
            if(window.from == 'build'){
                cc.find('contentBg/next/Background/Label',newMyPrefab).getComponent(cc.Label).string = '????????????';
                cc.find('contentBg/next',newMyPrefab).on('click',function () {
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
                                nickName: window.loginInfo.nickName?window.loginInfo.nickName:'??????'+window.user.appId.substring(window.user.appId.length-5),
                                portrait: window.loginInfo.avatarUrl,
                            }
                        }).then(result => {
                            let levelUploadNum = parseInt(res.result.total)+1;
                            window.from = 'game';
                            Loading.hide();
                            if (window.createScenseUploadAd) {
                                Toast('????????????????????????????????????????????????????????????',2000);
                                setTimeout(function () {
                                    window.createScenseUploadAd.show().catch(()=>{
                                        cc.director.loadScene('main');
                                    });
                                    window.createScenseUploadAd.onClose(res => {
                                        cc.director.loadScene('main');
                                    })
                                },1500)
                            }else{
                                Toast('????????????????????????????????????????????????????????????',1500);
                                setTimeout(function () {
                                    cc.director.loadScene('main');
                                },1500)
                            }
                        }).catch(err => {
                            Loading.hide();
                            Toast('????????????',1500);
                            console.error(err)
                        })

                    }).catch(err => {
                        console.error(err)
                    })
                },this)

            }else if(window.from == "uploadSolution"){
                cc.find('contentBg/next/Background/Label',newMyPrefab).getComponent(cc.Label).string = '????????????';
                cc.find('contentBg/next',newMyPrefab).on('click',function () {


                    Loading.show();
                    if(window.lastSolutionStep != null){
                        //????????????
                        if(window.lastSolutionStep>that.stepCounterValue){
                            wx.cloud.callFunction({
                                name: 'updateClassicsLevelSolution',
                                data: {
                                    levelIndex: window.levelIndex,
                                    appId: window.user.appId,
                                    useStep: that.stepCounterValue,
                                    useTime: that.timeCounterValue,
                                    portrait: window.loginInfo.avatarUrl,
                                    nickName: window.loginInfo.nickName,
                                    content: that.recordSolutionStep.join()
                                }
                            }).then(res => {
                                Toast('??????????????????',1500);
                                Loading.hide();
                                setTimeout(function () {
                                    cc.director.loadScene("game");
                                },1000)

                            }).catch(err=>{
                                Toast('????????????,???????????????',3000);
                                Loading.hide();
                                console.log(err)
                            });

                        }else{
                            Loading.hide();
                            Toast('???????????????????????????????????????',3000);
                        }
                    }else{
                        //????????????
                        wx.cloud.callFunction({
                            name: 'addClassicsLevelSolution',
                            data: {
                                levelIndex: window.levelIndex,
                                appId: window.user.appId,
                                useStep: that.stepCounterValue,
                                useTime: that.timeCounterValue,
                                portrait: window.loginInfo.avatarUrl,
                                nickName: window.loginInfo.nickName,
                                content: that.recordSolutionStep.join()
                            }
                        }).then(res => {
                            Toast('??????????????????',1500);
                            Loading.hide();
                            setTimeout(function () {
                                cc.director.loadScene("game");
                            },1000)
                        }).catch(err=>{
                            Toast('????????????,???????????????',3000);
                            Loading.hide();
                            console.log(err)
                        });

                    }


                },this)
            }else if(window.from != 'build'){
                if(window.levelIndex >= window.classicsLevelNum){
                    cc.find('contentBg/next/Background/Label',newMyPrefab).getComponent(cc.Label).string = '????????????'
                    cc.find('contentBg/next',newMyPrefab).on('click',function(){
                        clearInterval(that.timeCounterTimer)
                        that.timeCounterTimer = null;
                        cc.director.loadScene("main");
                        window.from = 'game'
                    },this)
                }else{
                    //?????????
                    cc.find('contentBg/next',newMyPrefab).on('click',function () {
                        newMyPrefab.removeFromParent();
                        newMyPrefab.destroy();
                        that.initPendant();
                        window.levelIndex++;
                        that.initLevel()
                    },this)
                }
                // cc.find('contentBg/next',newMyPrefab).opacity = 0;


            }




            cc.find('contentBg/replay',newMyPrefab).on('click',function () {
                if(window.from == "uploadSolution"){
                    cc.director.loadScene("game");
                    return
                }
                newMyPrefab.removeFromParent();
                newMyPrefab.destroy();
                that.replayLayout();

            },this)
            cc.find('contentBg/rank',newMyPrefab).on('click',function () {
                if(window.from == 'build'){
                    Toast('???????????????????????????',1500);
                    return ;
                }
                that.showLevelRank();
            },this)
            cc.find('contentBg/share',newMyPrefab).on('click',function () {
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    var titString =  '????????????';
                    if(window.from != 'build'){
                        titString = titString + '???'+window.levelIndex+'???'+'-???????????????'+ that.stepCounterValue +'-???????????????';
                    }
                    else{
                        titString = titString+'??????????????????????????????'
                    }
                    wx.shareAppMessage({
                        title: titString,
                        // imageUrl: data.url,
                        query: '??????',
                    })

                }
            },this)
            CanvasNode.addChild( newMyPrefab );
        };
        setTimeout(function () {
            cc.loader.loadRes('gameOverAlert', onResourceLoaded );
        },0)

        if(window.from == "build") return;

        if(type=='skip'){
            that.stepCounterValue = '9999';
            that.timeCounterValue = '9999';
        }
        //????????????
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            if (that.lastScore == null) {
                Loading.show();
                Toast('???????????????...',1500);
                wx.cloud.callFunction({
                    name: 'addClassicsLevelScore',
                    data: {
                        levelIndex: window.levelIndex,
                        appId: window.user.appId,
                        useStep: that.stepCounterValue,
                        useTime: that.timeCounterValue,
                        portrait: window.loginInfo.avatarUrl,
                        nickName: window.loginInfo.nickName?window.loginInfo.nickName:'??????'+window.user.appId.substring(window.user.appId.length-5)
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
                    Toast('???????????????...',1500);
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
            key: "initLevel",
            success (res) {
                if(window.from == "uploadSolution") that.recordSolutionStep = [];
                window.currentLevel = res.data;
                that.renderLayout(window.currentLevel);
                that.initPosition(window.currentLevel);
                that.initPendant();
            },
            fail(){

            }
        })

    },
    initPendant(){

        let that = this;



        //??????
        if(this.levelCounter == null){
            var levelNode = new cc.Node('levelCounter');
            levelNode.setAnchorPoint(0.5, 0.5);
            levelNode.width =  cc.winSize.width*0.7;
            levelNode.height = 180;
            // levelNode.horizontalAlign = 'CENTER'
            var levelCounter = levelNode.addComponent(cc.Label);
            levelCounter.node.setPosition(0,  (cc.winSize.height/2) - (cc.winSize.height*0.05));
            levelCounter.fontSize = 60;
            levelCounter.enableBold = true;
            // levelCounter.overflow = cc.Label.Overflow.CLAMP;
            levelCounter.lineHeight = 60;
            if(window.levelBy){
                levelCounter.string = ('??? '+ window.levelIndex + ' ??? - '+window.levelBy).substring(0,16);
            }
            else{
                levelCounter.string = '??? '+ window.levelIndex + ' ???';
            }

            this.levelCounter = levelNode.getComponent(cc.Label)
            this.node.addChild(levelNode);
        }else{
            if(window.levelBy){
                this.levelCounter.string = ('??? '+ window.levelIndex + ' ??? - '+window.levelBy).substring(0,16);
            }
            else{
                this.levelCounter.string = '??? '+ window.levelIndex + ' ???';
            }
        }
        if(window.from == 'build'){
            this.levelCounter.string = '????????????';
        }
        if(window.from == 'review'){
            this.levelCounter.string = '????????????';


            if(window.gameCircle) {
                window.gameCircle.destroy();
                window.gameCircle = null;
            }
            if(window.auditLevelAd) window.auditLevelAd.destroy();

            if (cc.sys.platform === cc.sys.WECHAT_GAME && !window.gameCircle){
                let sysInfo = wx.getSystemInfoSync();
                let auditLevelAdWidth = sysInfo.windowWidth*0.6;
                let auditLevelAdLeft = (sysInfo.windowWidth*0.4)/2;
                if(auditLevelAdWidth<=300) auditLevelAdLeft = (sysInfo.windowWidth-300)/2;

                //????????????bnAd
                window.auditLevelAd =  wx.createBannerAd({
                    adUnitId: 'adunit-a1670c225334da27',
                    style: {
                        left: auditLevelAdLeft,
                        top: sysInfo.windowHeight*0.08,
                        width: auditLevelAdWidth
                    }
                });
                window.auditLevelAd.onError(err => {})
                window.auditLevelAd.onLoad(() => {
                    window.auditLevelAd.show().catch(()=>{})
                })

            }

        }

        if(window.from == 'uploadSolution'){
            this.levelCounter.string = '??? '+ window.levelIndex + ' ???'+' - ????????????';
        }
        if(window.from == 'checkSolution'){
            this.levelCounter.string = '??? '+ window.levelIndex + ' ???'+' - ??????';
            return
        }


        //??????
        if(this.stepCounter == null){
            var node = new cc.Node('stepCounter');
            node.setAnchorPoint(0, 1);
            var stepCounter = node.addComponent(cc.Label);
            stepCounter.node.setPosition(-(cc.winSize.width/2) + (cc.winSize.width*0.05),  (cc.winSize.width/2) + 80);
            stepCounter.string = '????????? 0';
            this.stepCounter = node.getComponent(cc.Label)
            this.node.addChild(node);
        }else{
            this.stepCounterValue  = 0;
            if(this.stepCounter) this.stepCounter.string = "?????????" + this.stepCounterValue;
        }


        //??????
        if(this.timeCounter == null){
            var timeNode = new cc.Node('timeCounter');
            timeNode.setAnchorPoint(0, 1);
            var timeCounter = timeNode.addComponent(cc.Label);
            timeCounter.node.setPosition(0 , (cc.winSize.width/2) + 80)
            timeCounter.string = '????????? 0';
            this.timeCounter = timeNode.getComponent(cc.Label)
            this.node.addChild(timeNode);

            this.timeCounterTimer = setInterval(function () {
                this.timeCounterValue  ++;
                if(this.timeCounter) this.timeCounter.string = "?????????" + this.timeCounterValue;
            }.bind(this),1000)
        }else{
            this.timeCounterValue = 0;
            this.timeCounter.string = "?????????" + this.timeCounterValue;
            if(this.timeCounterTimer == null){
                this.timeCounterTimer = setInterval(function () {
                    this.timeCounterValue  ++;
                    if(this.timeCounter)this.timeCounter.string = "?????????" + this.timeCounterValue;
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
        //??????????????????
        if(window.setting.clickMove && window.from != "checkSolution") {
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
            cc.find('gameBtns/up',this.node).removeFromParent()
            cc.find('gameBtns/right',this.node).removeFromParent()
            cc.find('gameBtns/down',this.node).removeFromParent()
            cc.find('gameBtns/left',this.node).removeFromParent()
        }

        var leftBtn = cc.find('gameBtns/backStep/Background/Label',this.node).getComponent(cc.Label);
        if(window.from == 'review') leftBtn.string = '??????';
        else if(window.from == 'checkSolution') leftBtn.string = 'Again';
        else if(!window.setting.relast) leftBtn.string = '??????';
        cc.find('gameBtns/backStep',this.node).on('click',function () {

            //????????????
            if(window.from == 'checkSolution'){
                that.solutionStepIndex=-1
                that.replayLayout();
                return;
            }
            //??????????????????
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
                                        appId: window.uploadInfo.appId,
                                        nickName: window.uploadInfo.nickName?window.uploadInfo.nickName:'??????'+window.uploadInfo.appId.substring(window.uploadInfo.appId.length-5),
                                        portrait: window.uploadInfo.avatarUrl,
                                    }
                                }).then(result => {

                                    wx.cloud.callFunction({
                                        name: 'removeReviewLevel',
                                        data:{
                                            _id:window.reviewId
                                        }
                                    }).then(result => {
                                        let levelUploadNum = parseInt(res.result.total)+1;
                                        Toast('??????'+levelUploadNum+'????????????????????????????????????',1500);
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
                                    Toast('????????????',1500);
                                    console.error(err)
                                })

                            }).catch(err => {
                                console.error(err)
                            })
                        }else{
                            Toast('???????????????',1500);
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
                    if(window.from == "uploadSolution") that.recordSolutionStep.pop();
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        wx.setStorage({
                            key: "lastLayout",
                            data: that.moveHistoryList[that.moveHistoryList.length-1],
                            success(result) {
                                wx.getStorage({
                                    key: "lastLayout",
                                    success(res) {
                                        that.stepCounterValue --;
                                        that.stepCounter.string = "?????????" + that.stepCounterValue;
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

            }

        },this);

        if(window.from == 'review') cc.find('gameBtns/menu/Background/Label',this.node).getComponent(cc.Label).string = '??????'
        else if(window.from == "checkSolution") cc.find('gameBtns/menu/Background/Label',this.node).getComponent(cc.Label).string = 'Next'
        cc.find('gameBtns/menu',this.node).on("click",function () {
            clearInterval(that.timeCounterTimer);
            that.timeCounterTimer = null;
            //????????????
            if(window.from == 'checkSolution'){

                that.solutionStepIndex ++ ;
                if(that.solutionStepIndex>=window.levelSolution.content.length) that.solutionStepIndex=-1;
                if(that.solutionStepIndex <= -1){
                    that.replayLayout();
                    return;
                }
                switch (window.levelSolution.content[that.solutionStepIndex]) {
                    case 'U':
                        that.moveUp(window.currentLevel)
                        break;
                    case 'R':
                        that.moveRight(window.currentLevel)
                        break;
                    case 'D':
                        that.moveDown(window.currentLevel)
                        break;
                    case 'L':
                        that.moveLeft(window.currentLevel)
                        break;
                }
                return;
            }

            //??????????????????
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
                                Toast('???????????????????????????????????????',1500);
                                setTimeout(function () {
                                    Loading.hide();
                                    window.from = 'game';
                                    cc.director.loadScene('main');
                                },1500)
                            });
                        }else{
                            Toast('???????????????',1500);
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
                            that.timeCounter.string = "?????????" + that.timeCounterValue;
                        }.bind(that),1000)
                    }
                    newMyPrefab.removeFromParent();
                    newMyPrefab.destroy();

                },this)
                cc.find('contain/replay',newMyPrefab).on('click',function () {
                    newMyPrefab.removeFromParent();
                    newMyPrefab.destroy();
                    that.replayLayout();

                },this)

                cc.find('contain/levels',newMyPrefab).on('click',function () {
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
                },this)




                cc.find('contain/rank',newMyPrefab).on('click',function () {
                    if(window.from == 'build'){
                        Toast('???????????????????????????',1500);
                        return ;
                    }
                    that.showLevelRank();
                },this)

                cc.find('contain/share',newMyPrefab).on('click',function () {
                    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                        var titString =  '????????????';
                        if(window.from != 'build'){
                            titString = titString + '???'+window.levelIndex+'???-???????????????!'
                        }
                        else{
                            titString = titString + '??????????????????????????????'
                        }
                        // titString = titString + '-???????????????'
                        wx.shareAppMessage({
                            title: titString,
                            // imageUrl: data.url,
                            query: '??????',
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
                that.renderLastScore('???','???')

                wx.getStorage({
                    key:'buildLevel',
                    success(res){
                        window.currentLevel = res.data;
                        that.renderLayout(window.currentLevel);
                        that.initPosition(window.currentLevel);
                        // ???????????????
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
                that.renderLastScore('???','???')

                wx.getStorage({
                    key:'reviewLevel',
                    success(res){
                        window.uploadLevel = res.data;
                        window.currentLevel = res.data;
                        that.renderLayout(window.currentLevel);
                        that.initPosition(window.currentLevel);
                        // ???????????????
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



            //????????????
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
                        // ???????????????
                        that.initPendant();
                        wx.setStorage({
                            key: "initLevel",
                            data:window.currentLevel,
                            success(result){
                                that.moveHistoryList.push(window.currentLevel);
                                that.replayLayout();
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
                        that.renderLastScore('???','???')
                        if(window.levelIndex == 1) Toast('Tip: ???????????????????????????',5000);

                    }
                }).catch(err => {
                    console.error(err)
                })


            }
            //????????????
            else{

            }



            //??????
            if(window.from != "uploadSolution" && window.from != "checkSolution"){
                let date = new Date();
                let today = date.toLocaleDateString();
                var solutionBtnNode = new cc.Node('skipNode');
                solutionBtnNode.setAnchorPoint(0, 1);
                var solutionBtnLabel = solutionBtnNode.addComponent(cc.Label);
                solutionBtnLabel.node.setPosition((cc.winSize.width/2) - (cc.winSize.width*0.2),  (cc.winSize.width/2) + 80);
                solutionBtnLabel.string = '????????????';
                that.solutionBtn = solutionBtnNode.getComponent(cc.Label)
                that.node.addChild(solutionBtnNode);
                let enableSkip = true;
                wx.getStorage({
                    key: 'skipAdInfo',
                    success(res) {
                        if(res.data.num>=5) that.noneSkipChange = true;
                    }
                })
                that.solutionBtn.node.on('touchend', function(){

                    if(!enableSkip) return;
                    enableSkip = false;
                    if(that.timeCounterTimer) clearInterval(that.timeCounterTimer);
                    that.timeCounterTimer = null;


                    var CanvasNode = cc.find('Canvas');
                    if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
                    var onResourceLoaded = function(errorMessage, loadedResource )
                    {
                        if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
                        if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
                        var newMyPrefab = cc.instantiate( loadedResource );
                        cc.find('solutionContain/close',newMyPrefab).on('click',function () {

                            if(that.timeCounterTimer == null){
                                that.timeCounterTimer = setInterval(function () {
                                    that.timeCounterValue  ++;
                                    if(that.timeCounter) that.timeCounter.string = "?????????" + that.timeCounterValue;
                                }.bind(that),1000)
                            }
                            newMyPrefab.removeFromParent();
                            newMyPrefab.destroy();
                        },this)


                        cc.find('solutionContain/skipLevel',newMyPrefab).on('click',function () {
                            if(that.lastScore){
                                Toast("????????????????????????????????????",1500);
                                return;
                            }
                            if(that.noneSkipChange){
                                Toast("??????????????????5?????????",1500);
                                return
                            }
                            Toast("???????????????...",1500);
                            if(!window.skipLevelAd){Toast("??????????????????",1500);return;}
                            window.skipLevelAd.show()
                                .catch(err => {
                                    window.skipLevelAd.load()
                                        .then(() => window.skipLevelAd.show()).catch(()=>{
                                        Toast("??????????????????",1500)
                                    })
                                })
                            window.skipLevelAd.offClose();
                            window.skipLevelAd.onClose(res => {
                                // ???????????????????????????????????????
                                // ?????? 2.1.0 ?????????????????????res ????????? undefined
                                if (res && res.isEnded || res === undefined) {
                                    // ?????????????????????????????????????????????
                                    if(that.timeCounterTimer == null){
                                        that.timeCounterTimer = setInterval(function () {
                                            that.timeCounterValue  ++;
                                            if(that.timeCounter) that.timeCounter.string = "?????????" + that.timeCounterValue;
                                        }.bind(that),1000)
                                    }
                                    newMyPrefab.removeFromParent();
                                    newMyPrefab.destroy();

                                    that.showResult('skip');

                                    //??????????????????
                                    wx.getStorage({
                                        key: 'skipAdInfo',
                                        success(res) {
                                            if(res.data.date == today){
                                                if(res.data.num>=5) that.noneSkipChange = true;
                                                wx.setStorage({
                                                    key: 'skipAdInfo',
                                                    data: {
                                                        date:today,
                                                        num:res.data.num+1
                                                    }
                                                })
                                            }else{
                                                wx.setStorage({
                                                    key: 'skipAdInfo',
                                                    data: {
                                                        date:today,
                                                        num:1
                                                    }
                                                })
                                            }
                                        },
                                        fail(err) {
                                            wx.setStorage({
                                                key: 'skipAdInfo',
                                                data: {
                                                    date:today,
                                                    num:1
                                                }
                                            })
                                        },

                                    })

                                }
                                else {
                                    // ??????????????????????????????????????????
                                }
                            })

                        },this);


                        cc.find('solutionContain/checkSolution',newMyPrefab).on('click',function () {
                            wx.cloud.callFunction({
                                name: 'queryClassicsLevelSolution',
                                data: {
                                    levelIndex: window.levelIndex
                                }
                            }).then(res => {
                                window.levelSolution = null;
                                if(res && res.result.data.length>0){
                                    Toast("???????????????...",1500);
                                    if(!window.checkSolutionLevelAd){Toast("??????????????????",1500);return;}
                                    window.checkSolutionLevelAd.show()
                                        .catch(err => {
                                            window.checkSolutionLevelAd.load()
                                                .then(() => window.checkSolutionLevelAd.show()).catch(()=>{
                                                Toast("??????????????????",1500)
                                            })
                                        })
                                    window.checkSolutionLevelAd.offClose();
                                    window.checkSolutionLevelAd.onClose(result => {
                                        // ???????????????????????????????????????
                                        // ?????? 2.1.0 ?????????????????????result ????????? undefined
                                        if (result && result.isEnded || result === undefined) {
                                            // ?????????????????????????????????????????????
                                            window.from = "checkSolution";
                                            window.levelSolution = res.result.data[0];
                                            window.levelSolution.content = res.result.data[0].content.split(',');
                                            cc.director.loadScene("game");
                                        }
                                        else {
                                            // ??????????????????????????????????????????
                                        }
                                    })


                                }else{
                                    Toast('????????????????????????',3000);
                                }
                            }).catch(err => {
                                console.error(err)
                            })

                        },this);

                        cc.find('solutionContain/uploadSolution',newMyPrefab).on('click',function () {
                            window.from = 'uploadSolution';
                            cc.director.loadScene("game");
                        },this);

                        CanvasNode.addChild( newMyPrefab );
                    };
                    cc.loader.loadRes('solutionDialog', onResourceLoaded );

                    setTimeout(function(){
                        enableSkip = true;
                    },1500)
                }, that);
            }


        }
    },
    back(){
        this.initPendant();
        clearInterval(this.timeCounterTimer)
        this.timeCounterTimer = null;

        if(window.from == 'review'){
            cc.director.loadScene("main");
        }else if(window.from == 'uploadSolution'){
            window.from = 'game'
            cc.director.loadScene("game");
        }else if(window.from == 'checkSolution'){
            window.from = 'game'
            cc.director.loadScene("game");
        }else if(window.from == 'build'){
            window.from = 'game'
            cc.director.loadScene('build');
        }else{
            window.from = 'game'
            cc.director.loadScene("main");
        }

    },
    renderLastScore(step,time){
        let that = this;
        if(window.from == 'build' || window.from == "review"){
            return ;
        }

        if(window.from == 'uploadSolution'){

            wx.cloud.callFunction({
                name: 'queryClassicsLevelSolution',
                data: {
                    levelIndex: window.levelIndex
                }
            }).then(res => {
                let lastBestScore = '?????????????????????';
                window.lastSolutionStep = null;
                if(res && res.result.data.length>0){
                    window.lastSolutionStep = res.result.data[0].useStep;
                    lastBestScore = '?????????????????????' + res.result.data[0].useStep + ' - ????????????'+ res.result.data[0].nickName.substring(0,16)
                }

                if(that.lastStepNode == null){
                    var lastStepNode = new cc.Node('lastStepNode');
                    lastStepNode.setAnchorPoint(0, 1);
                    var stepCounter = lastStepNode.addComponent(cc.Label);
                    stepCounter.node.setPosition(-(cc.winSize.width/2) + (cc.winSize.width*0.05),  (cc.winSize.width/2) + 160)
                    stepCounter.string = lastBestScore;
                    that.lastStepNode = lastStepNode.getComponent(cc.Label)
                    that.node.addChild(lastStepNode);
                }else{
                    that.lastStepNode.string = lastBestScore;
                }


            }).catch(err => {
                console.error(err)
            })


            return;
        }
        if(window.from == 'checkSolution'){
            if(that.lastStepNode == null){
                var lastStepNode = new cc.Node('lastStepNode');
                lastStepNode.setAnchorPoint(0, 1);
                var stepCounter = lastStepNode.addComponent(cc.Label);
                stepCounter.node.setPosition(-(cc.winSize.width/2) + (cc.winSize.width*0.05),  (cc.winSize.width/2) + 160)
                stepCounter.string = '?????????????????????' + window.levelSolution.useStep + ' - ????????????'+ window.levelSolution.nickName.substring(0,16);
                that.lastStepNode = lastStepNode.getComponent(cc.Label)
                that.node.addChild(lastStepNode);
            }else{
                that.lastStepNode.string = '?????????????????????' + window.levelSolution.useStep + ' - ????????????'+ window.levelSolution.nickName.substring(0,16);
            }
            return;
        }


        //????????????
        if(that.lastStepNode == null){
            var lastStepNode = new cc.Node('lastStepNode');
            lastStepNode.setAnchorPoint(0, 1);
            var stepCounter = lastStepNode.addComponent(cc.Label);
            stepCounter.node.setPosition(-(cc.winSize.width/2) + (cc.winSize.width*0.05),  (cc.winSize.width/2) + 160)
            stepCounter.string = '????????????????????? '+ step+" - ?????? "+time;
            that.lastStepNode = lastStepNode.getComponent(cc.Label)
            that.node.addChild(lastStepNode);
        }else{
            that.lastStepNode.string = '????????????????????? '+ step+" - ?????? "+time;
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
            cc.find('thLevel',newMyPrefab).getComponent(cc.Label).string = '??? ???'
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
                    Toast("?????????????????????",1500)
                }


            }).catch(err => {
                console.error(err)
                Loading.hide();
            })
        }

    },
    onDestroy(){

        if(window.auditLevelAd) window.auditLevelAd.destroy();

    }


});
