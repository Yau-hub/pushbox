// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import {Loading, Toast} from "./common";
window.eleSize = 35;
window.layout = new Array();
window.blockNum = 12;

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
        selectEle: 1,
        wallEle:cc.Prefab,
        boxEle:cc.Prefab,
        ballEle:cc.Prefab,
        upEle:cc.Prefab,
        rightEle:cc.Prefab,
        downEle:cc.Prefab,
        leftEle:cc.Prefab,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let that = this;
        this.initWinEle();
        this.renderBg();
        // this.renderBn();
        if(window.from == 'game'){
            wx.getStorage({
                key:'buildLevel',
                success(res){
                    window.buildLevel = res.data
                    that.renderLayout(window.buildLevel);
                }
            })
        }
        cc.find('btns',this.node).height =  (cc.winSize.height - cc.winSize.width)/2;
    },

    start () {
        this.addEvent();
        this.renderSelectEle();
    },

    // update (dt) {},
    initWinEle(){
        let realSiz = cc.winSize.width/window.blockNum;
        window.eleSize = realSiz;

        for(var i = 0; i < window.blockNum; i++){
            window.layout[i] = new Array();
            window.buildLevel[i] = new Array();
            for(var n = 0; n < window.blockNum; n++){
                window.layout[i][n] = {x:0,y:0,sign:0,cover:null}
                window.buildLevel[i][n] = {x:0,y:0,sign:0,cover:null}
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
                this.node.addChild(newBlock);
            }
        }

    },
    renderBn(){
        let that = this;
        if(this.gameBn == null) this.gameBn = cc.find('Canvas/buildBg/gameBn').getComponent(cc.Sprite)
        cc.assetManager.loadRemote(window.bgUrlBase+ '_400x240.jpg', function (err, texture) {
            var sprite  = new cc.SpriteFrame(texture, cc.rect(0,0,400,240));
            that.gameBn.spriteFrame = sprite; //设置精灵组件图片资源

        });
    },

    addEvent(){
        let that = this;
        if(this.wallEle == null) this.wallEle =  cc.find('btns/wallWrap',this.node);
        if(this.boxEle == null) this.boxEle =  cc.find('btns/boxWrap',this.node)
        if(this.ballEle == null) this.ballEle =  cc.find('btns/ballWrap',this.node)
        if(this.upEle == null) this.upEle =  cc.find('btns/upWrap',this.node)
        if(this.rightEle == null) this.rightEle =  cc.find('btns/rightWrap',this.node)
        if(this.downEle == null) this.downEle =  cc.find('btns/downWrap',this.node)
        if(this.leftEle == null) this.leftEle =  cc.find('btns/leftWrap',this.node)

        cc.find('back',this.node).on('click',this.back, this)
        cc.find('btns/clear',this.node).on('click',function(){
            that.initWinEle();
            that.renderBg();
        }, this)

        cc.find('btns/play',this.node).on('click',function(){
            if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                var boxNum =0,ballNum = 0,roleNum = 0;

                for(var i = 0; i < window.blockNum; i++) {
                    for (var n = 0; n < window.blockNum; n++) {
                        if(window.buildLevel[i][n].sign == 2){
                            boxNum ++;
                        }
                        if(window.buildLevel[i][n].sign == 3 || window.buildLevel[i][n].cover != null){
                            ballNum ++;
                        }
                        if(window.buildLevel[i][n].sign >= 4){
                            roleNum ++;
                        }
                        if(i == window.blockNum-1 && n == window.blockNum-1){
                            if(roleNum<=0){
                                Toast('未添加人物',1500)
                                return;
                            }
                            if(boxNum != ballNum){
                                Toast('箱子和球体数量不一致',1500)
                                return;
                            }

                            if(boxNum < 3){
                                Toast('箱子数量不能少于三个',1500)
                                return;
                            }
                        }
                    }
                }

                wx.setStorage({
                    key: 'buildLevel',
                    data: window.buildLevel,
                    success(){
                        window.from = 'build';
                        cc.director.loadScene("game");
                    }
                })
            }
        }, this)

        this.node.on('touchend',function (event) {
            //世界坐标
            let location = event.getLocation()
            //本地坐标
            let touchPoint = cc.find('Canvas').convertToNodeSpaceAR(location);
            //点击放置区域
            for(var i = 0; i < window.blockNum; i++){
                for(var n = 0; n < window.blockNum; n++){
                    //删除前面添加的人物
                    if(window.layout[0][0].x <= touchPoint.x && touchPoint.x <= window.layout[0][window.blockNum-1].x + window.eleSize &&
                        window.layout[0][0].y >= touchPoint.y && touchPoint.y >= window.layout[window.blockNum-1][window.blockNum-1].y - window.eleSize
                    ) {
                        if (that.selectEle >= 4 && window.buildLevel[i][n].sign >= 4) {
                            window.buildLevel[i][n].sign = 0;
                            window.buildLevel[i][n].cover = null;
                        }
                    }
                    //放置元素
                 if(window.layout[i][n].x <= touchPoint.x && touchPoint.x <= window.layout[i][n].x + window.eleSize &&
                     window.layout[i][n].y >= touchPoint.y && touchPoint.y >= window.layout[i][n].y - window.eleSize
                 ){
                     if(!window.buildLevel[i][n].sign || window.buildLevel[i][n].sign == 0){
                         window.buildLevel[i][n].sign = that.selectEle;
                     }else if(window.buildLevel[i][n].sign == 3 && window.buildLevel[i][n].cover == null && (that.selectEle != 1 && that.selectEle != 3)){
                         window.buildLevel[i][n].sign = that.selectEle;
                         window.buildLevel[i][n].cover = that.selectEle;
                     }else{
                         window.buildLevel[i][n].sign = 0;
                         window.buildLevel[i][n].cover = null;
                     }

                 }
                }
            }

            that.renderLayout(window.buildLevel)

            //点击放置元素
            if(that.wallEle.getBoundingBoxToWorld().x <= location.x
                && location.x <=  that.wallEle.getBoundingBoxToWorld().x+that.wallEle.getBoundingBoxToWorld().width &&
                that.wallEle.getBoundingBoxToWorld().y <= location.y
                && location.y <=  that.wallEle.getBoundingBoxToWorld().y+that.wallEle.getBoundingBoxToWorld().height
            ){
                that.selectEle = 1;
                that.renderSelectEle();
            }
            else if(
                that.boxEle.getBoundingBoxToWorld().x <= location.x
                && location.x <=  that.boxEle.getBoundingBoxToWorld().x+that.boxEle.getBoundingBoxToWorld().width &&
                that.boxEle.getBoundingBoxToWorld().y <= location.y
                && location.y <=  that.boxEle.getBoundingBoxToWorld().y+that.boxEle.getBoundingBoxToWorld().height
            ){
                that.selectEle = 2;
                that.renderSelectEle();
            }
            else if(
                that.ballEle.getBoundingBoxToWorld().x <= location.x
                && location.x <=  that.ballEle.getBoundingBoxToWorld().x+that.ballEle.getBoundingBoxToWorld().width &&
                that.ballEle.getBoundingBoxToWorld().y <= location.y
                && location.y <=  that.ballEle.getBoundingBoxToWorld().y+that.ballEle.getBoundingBoxToWorld().height
            ){
                that.selectEle = 3;
                that.renderSelectEle();
            }
            else if(
                that.upEle.getBoundingBoxToWorld().x <= location.x
                && location.x <=  that.upEle.getBoundingBoxToWorld().x+that.upEle.getBoundingBoxToWorld().width &&
                that.upEle.getBoundingBoxToWorld().y <= location.y
                && location.y <=  that.upEle.getBoundingBoxToWorld().y+that.upEle.getBoundingBoxToWorld().height
            ){
                that.selectEle = 4;
                that.renderSelectEle();
            }
            else if(
                that.rightEle.getBoundingBoxToWorld().x <= location.x
                && location.x <=  that.rightEle.getBoundingBoxToWorld().x+that.rightEle.getBoundingBoxToWorld().width &&
                that.rightEle.getBoundingBoxToWorld().y <= location.y
                && location.y <=  that.rightEle.getBoundingBoxToWorld().y+that.rightEle.getBoundingBoxToWorld().height
            ){
                that.selectEle = 5;
                that.renderSelectEle();
            }
            else if(
                that.downEle.getBoundingBoxToWorld().x <= location.x
                && location.x <=  that.downEle.getBoundingBoxToWorld().x+that.downEle.getBoundingBoxToWorld().width &&
                that.downEle.getBoundingBoxToWorld().y <= location.y
                && location.y <=  that.downEle.getBoundingBoxToWorld().y+that.downEle.getBoundingBoxToWorld().height
            ){
                that.selectEle = 6;
                that.renderSelectEle();
            }
            else if(
                that.leftEle.getBoundingBoxToWorld().x <= location.x
                && location.x <=  that.leftEle.getBoundingBoxToWorld().x+that.leftEle.getBoundingBoxToWorld().width &&
                that.leftEle.getBoundingBoxToWorld().y <= location.y
                && location.y <=  that.leftEle.getBoundingBoxToWorld().y+that.leftEle.getBoundingBoxToWorld().height
            ){
                that.selectEle = 7;
                that.renderSelectEle();
            }


        },this)

    },
    renderSelectEle(){
        this.wallEle.color = new cc.Color().fromHEX("#95D52F");
        this.boxEle.color = new cc.Color().fromHEX("#95D52F");
        this.ballEle.color = new cc.Color().fromHEX("#95D52F");
        this.upEle.color = new cc.Color().fromHEX("#95D52F");
        this.rightEle.color = new cc.Color().fromHEX("#95D52F");
        this.downEle.color = new cc.Color().fromHEX("#95D52F");
        this.leftEle.color = new cc.Color().fromHEX("#95D52F");

        switch(this.selectEle){
            case 1:
                this.wallEle.color = new cc.Color().fromHEX("#FFFFFF");
                break;
            case 2:
                this.boxEle.color = new cc.Color().fromHEX("#FFFFFF");
                break;
            case 3:
                this.ballEle.color = new cc.Color().fromHEX("#FFFFFF");
                break;
            case 4:
                this.upEle.color = new cc.Color().fromHEX("#FFFFFF");
                break;
            case 5:
                this.rightEle.color = new cc.Color().fromHEX("#FFFFFF");
                break;
            case 6:
                this.downEle.color = new cc.Color().fromHEX("#FFFFFF");
                break;
            case 7:
                this.leftEle.color = new cc.Color().fromHEX("#FFFFFF");
                break;
        }
    },
    back(){
        window.from = 'build'
        cc.director.loadScene("main");
    },
    renderLayout(layout){
        this.renderBg();
        for(var i = 0; i < window.blockNum; i++){
            for(var n = 0; n < window.blockNum; n++){
                let x = window.layout[i][n].x;
                let y = window.layout[i][n].y;
                switch(layout[i][n].sign){
                    case 0:
                        var newBlock = cc.instantiate(this.block);
                        newBlock.setPosition(x,y);
                        this.node.addChild(newBlock);
                        break;
                    case 1:
                        var newWall = cc.instantiate(this.wall);
                        newWall.setPosition(x,y);
                        this.node.addChild(newWall);
                        break;
                    case 2:
                        var newBox = cc.instantiate(this.box);
                        newBox.setPosition(x,y);
                        this.node.addChild(newBox);
                        break;
                    case 3:
                        var newBall = cc.instantiate(this.ball);
                        newBall.setPosition(x,y);
                        this.node.addChild(newBall);
                        break;
                    case 4:
                        var newRoleUp = cc.instantiate(this.roleUp);
                        newRoleUp.setPosition(x,y);
                        this.node.addChild(newRoleUp);
                        break;
                    case 5:
                        var newRoleRight = cc.instantiate(this.roleRight);
                        newRoleRight.setPosition(x,y);
                        this.node.addChild(newRoleRight);
                        break;
                    case 6:
                        var newRoleDown = cc.instantiate(this.roleDown);
                        newRoleDown.setPosition(x,y);
                        this.node.addChild(newRoleDown);
                        break;
                    case 7:
                        var newRoleLeft = cc.instantiate(this.roleLeft);
                        newRoleLeft.setPosition(x,y);
                        this.node.addChild(newRoleLeft);
                        break;
                }
            }
        }

    },
    onDestroy(){


    }
});
