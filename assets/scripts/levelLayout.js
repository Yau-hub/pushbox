// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        levelItem: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let levelList = cc.find('levelList/levelScrollView/view/content/itemList',this.node)
        var node = cc.instantiate(this.levelItem);
        node.getChildByName('levelNum').getComponent(cc.Label).string = 1;
        node.getChildByName('levelLock').opacity = 0;
        levelList.addChild(node);
        

        node.on('touchstart',
            function(t){
            console.log("cc.Node.EventType.TOUCH_START ")
            },this)


        var node1 = cc.instantiate(this.levelItem);
        // node1.getChildByName('levelNum').getComponent(cc.Label).string = 1;
        // node1.getChildByName('levelLock').opacity = 0;
        levelList.addChild(node1);

        // setTimeout(function () {
        //     levelList.destroyAllChildren()
        // },3000)


    },

    // update (dt) {},
});
