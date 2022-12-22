// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


cc.Class({
    extends: cc.Component,

    properties: {

        levelItem: cc.Prefab,
        levelList:null,
        levelListConten:null,
        levelSrollView:null,
        classicsLevelBtn:cc.Button,
        netLevelBtn:cc.Button,
        closeLevelBtn:cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {


    },

    start () {
        this.levelList = cc.find('levelList/levelScrollView/view/content/itemList',this.node)
        this.levelListConten = cc.find('levelList/levelScrollView/view/content',this.node)
        this.levelSrollView = cc.find('levelList/levelScrollView',this.node)


        if(this.classicsLevelBtn == null) this.classicsLevelBtn = cc.find('levelList/classify/classicsLevel',this.node).getComponent(cc.Button)
        if(this.netLevelBtn == null) this.netLevelBtn = cc.find('levelList/classify/netLevel',this.node).getComponent(cc.Button)
        if(this.closeLevelBtn == null) this.closeLevelBtn = cc.find('closeLevel',this.node).getComponent(cc.Button)
        this.classicsLevelBtn.node.on('click', this.loadClassicsLevelList, this)
        this.netLevelBtn.node.on('click', this.loadNetLevelList, this)
        this.closeLevelBtn.node.on('click',this.closeLevelLayout, this)

        this.loadClassicsLevelList();


    },
    loadClassicsLevelList(){
        // 设置切换关卡类型按钮选中
        let classiceBtnLabel = cc.find('Background/Label',this.classicsLevelBtn.node);
        classiceBtnLabel.color = cc.color(202,122,0);
        let netBtnLabel = cc.find('Background/Label',this.netLevelBtn.node);
        netBtnLabel.color = cc.color(255,255,255);
        netBtnLabel.opacity = 125;

        window.levelClassify = 'classicsLevel';

        //清空关卡裂变
        this.levelList.destroyAllChildren();
        let that = this;
        let levelH = 0;
        let levelRow = 10;
        let levelTotal = window.classicsLevelNum;

        for(let i=0; i<levelTotal ; i++){
            let node = cc.instantiate(this.levelItem);
            let indexLevel = i+1;
            if(indexLevel <=  window.user.levelFinishNum+1 || (window.user.roles && window.user.roles.includes('admin'))){
                node.getChildByName('levelNum').getComponent(cc.Label).string = indexLevel;
                node.getChildByName('levelLock').opacity = 0;
                node.on('touchend',
                    function(t){
                        window.levelIndex = indexLevel;
                        if(window.wxLoginBtn ) window.wxLoginBtn.destroy();
                        cc.director.loadScene("game");
                    },this)
            }
            this.levelList.addChild(node);


            if(indexLevel <= levelRow){
                levelRow = Math.floor(levelTotal / Math.floor(this.levelListConten.width / node.width) -1);
                levelH += node.height + 70;
            }
        }
        this.levelListConten.height = levelH+(cc.winSize.height*0.2);

    },

    loadNetLevelList(){
        // 设置切换关卡类型按钮选中
        let classiceBtnLabel = cc.find('Background/Label',this.classicsLevelBtn.node);
        classiceBtnLabel.color = cc.color(255,255,255);
        classiceBtnLabel.opacity = 125;
        let netBtnLabel = cc.find('Background/Label',this.netLevelBtn.node);
        netBtnLabel.color = cc.color(202,122,0);

        window.levelClassify = 'netLevel';

        //清空关卡裂变
        this.levelList.destroyAllChildren();
        let that = this;
        let levelH = 0;
        let levelRow = 10;
        let levelTotal = window.netLevelNum;

        for(let i=0; i<levelTotal ; i++){
            let node = cc.instantiate(this.levelItem);
            let indexLevel = i+1;
            if(indexLevel <= window.userInfo.classicsLevelNum){
                node.getChildByName('levelNum').getComponent(cc.Label).string = indexLevel;
                node.getChildByName('levelLock').opacity = 0;
            }
            this.levelList.addChild(node);

            node.on('touchend',
                function(t){
                    cc.log('level:' + indexLevel);
                },this)
            if(indexLevel <= levelRow){
                levelRow = Math.floor(levelTotal / Math.floor(this.levelListConten.width / node.width) -1);
                levelH += node.height + 70;
            }
        }
        this.levelListConten.height = levelH+(cc.winSize.height*0.2);
    },
    closeLevelLayout(){
        this.node.removeFromParent();
        this.node.destroy();
    }

    // update (dt) {},
});
