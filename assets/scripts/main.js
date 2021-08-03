// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        oneSayLabel: {
            default: null,
            type: cc.Label
        }
    },




    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.oneSay();
     },

    start () {
        let that = this;

        this.loadImg();




        setInterval(function () {
            that.oneSay();
        },10000)
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
    }
});
