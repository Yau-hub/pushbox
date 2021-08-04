// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        levelNum:null,
        levelLock:null
    },

    // LIFE-CYCLE CALLBACKS:
    // onLoad () {},
    start () {
    },
    init(){
       this.levelNum = cc.find("levelNum",this.node).getComponent(cc.Label);
       this.levelNum.string = '1';
       this.levelLock = cc.find("levelLock",this.node);
       this.levelLock.opacity = 0;
    },
    // update (dt) {},
});
