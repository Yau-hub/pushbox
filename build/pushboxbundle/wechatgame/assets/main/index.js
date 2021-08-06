window.__require=function e(t,n,o){function i(l,s){if(!n[l]){if(!t[l]){var a=l.split("/");if(a=a[a.length-1],!t[a]){var r="function"==typeof __require&&__require;if(!s&&r)return r(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+l+"'")}l=a}var d=n[l]={exports:{}};t[l][0].call(d.exports,function(e){return i(t[l][1][e]||e)},d,d.exports,e,t,n,o)}return n[l].exports}for(var c="function"==typeof __require&&__require,l=0;l<o.length;l++)i(o[l]);return i}({common:[function(e,t){"use strict";cc._RF.push(t,"db8b31XBphC44pnJIdLHrEO","common"),cc._RF.pop()},{}],levelItem:[function(e,t){"use strict";cc._RF.push(t,"2cfd6DcvT5OTYgzh6qWc2QW","levelItem"),cc.Class({extends:cc.Component,properties:{levelNum:null,levelLock:null},start:function(){},init:function(){this.levelNum=cc.find("levelNum",this.node).getComponent(cc.Label),this.levelNum.string="1",this.levelLock=cc.find("levelLock",this.node),this.levelLock.opacity=0}}),cc._RF.pop()},{}],levelLayout:[function(e,t){"use strict";cc._RF.push(t,"fef7dUI0+VDDZg/zyXQW1yR","levelLayout"),cc.Class({extends:cc.Component,properties:{levelItem:cc.Prefab,levelList:null,levelListConten:null,levelSrollView:null,classicsLevelBtn:cc.Button,netLevelBtn:cc.Button,closeLevelBtn:cc.Button},onLoad:function(){},start:function(){this.levelList=cc.find("levelList/levelScrollView/view/content/itemList",this.node),this.levelListConten=cc.find("levelList/levelScrollView/view/content",this.node),this.levelSrollView=cc.find("levelList/levelScrollView",this.node),null==this.classicsLevelBtn&&(this.classicsLevelBtn=cc.find("levelList/classify/classicsLevel",this.node).getComponent(cc.Button)),null==this.netLevelBtn&&(this.netLevelBtn=cc.find("levelList/classify/netLevel",this.node).getComponent(cc.Button)),null==this.closeLevelBtn&&(this.closeLevelBtn=cc.find("closeLevel",this.node).getComponent(cc.Button)),this.classicsLevelBtn.node.on("click",this.loadClassicsLevelList,this),this.netLevelBtn.node.on("click",this.loadNetLevelList,this),this.closeLevelBtn.node.on("click",this.closeLevelLayout,this),this.loadClassicsLevelList()},loadClassicsLevelList:function(){var e=this;cc.find("Background/Label",this.classicsLevelBtn.node).color=cc.color(202,122,0);var t=cc.find("Background/Label",this.netLevelBtn.node);t.color=cc.color(255,255,255),t.opacity=125,this.levelList.destroyAllChildren();for(var n=0,o=10,i=function(t){var i=cc.instantiate(e.levelItem),c=t+1;1==c&&(i.getChildByName("levelNum").getComponent(cc.Label).string=c,i.getChildByName("levelLock").opacity=0),e.levelList.addChild(i),i.on("touchend",function(){cc.log("level:"+c)},e),c<=o&&(o=Math.floor(100/Math.floor(e.levelListConten.width/i.width)-1),n+=i.height+70)},c=0;c<100;c++)i(c);this.levelListConten.height=n},loadNetLevelList:function(){var e=this,t=cc.find("Background/Label",this.classicsLevelBtn.node);t.color=cc.color(255,255,255),t.opacity=125,cc.find("Background/Label",this.netLevelBtn.node).color=cc.color(202,122,0),this.levelList.destroyAllChildren();for(var n=0,o=10,i=function(t){var i=cc.instantiate(e.levelItem),c=t+1;1==c&&(i.getChildByName("levelNum").getComponent(cc.Label).string=c,i.getChildByName("levelLock").opacity=0),e.levelList.addChild(i),i.on("touchend",function(){cc.log("level:"+c)},e),c<=o&&(o=Math.floor(10/Math.floor(e.levelListConten.width/i.width)-1),n+=i.height+70)},c=0;c<10;c++)i(c);this.levelListConten.height=n},closeLevelLayout:function(){this.node.removeFromParent(),this.node.destroy()}}),cc._RF.pop()},{}],main:[function(e,t){"use strict";cc._RF.push(t,"2276c+jCHZBGYX+JxzXyKDF","main"),window.env="cloud1-5gvbuiy3dd99f63c",cc.sys.platform===cc.sys.WECHAT_GAME&&wx.cloud.init({env:window.env}),window.userInfo={},cc.Class({extends:cc.Component,properties:{oneSayLabel:{default:null,type:cc.Label},loginplay:cc.Button,visitorplay:cc.Button,levelLayout:cc.Prefab},onLoad:function(){null==this.loginplay&&(this.loginplay=cc.find("Canvas/mainBg/loginplay").getComponent(cc.Button)),this.loginplay.node.on("click",this.loginLevelList,this),null==this.visitorplay&&(this.visitorplay=cc.find("Canvas/mainBg/visitorplay").getComponent(cc.Button)),this.visitorplay.node.on("click",this.visitorLevelList,this)},start:function(){this.getUserInfo()},loadImg:function(){var e=cc.find("Canvas/mainBg/bingBg"),t="",n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&n.status>=200&&n.status<400){var o=JSON.parse(n.responseText);t="https://cn.bing.com"+o.images[0].urlbase+"_720x1280.jpg",window.bgUrlBase="https://cn.bing.com"+o.images[0].urlbase,cc.assetManager.loadRemote(t,function(t,n){var o=new cc.SpriteFrame(n);e.spriteFrame=o;var i=new cc.Node;i.name="star1",i.setPosition(0,0);var c=i.addComponent(cc.Sprite);c.spriteFrame=o,c.sizeMode="CUSTOM",c.node.width=cc.winSize.width,c.node.height=cc.winSize.height,e.addChild(i)})}},n.open("get","https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",!0),n.send()},oneSay:function(){var e=this,t=new XMLHttpRequest,n=cc.find("Canvas/mainBg/oneSay").getComponent(cc.Component);t.onreadystatechange=function(){if(4==t.readyState&&t.status>=200&&t.status<400){var o=JSON.parse(t.responseText);e.oneSayLabel&&null!=e.oneSayLabel.string?e.oneSayLabel.string=o.hitokoto+" -- "+o.from:n&&null!=n.string&&(n.string=o.hitokoto+" -- "+o.from)}},t.open("get","https://v1.hitokoto.cn/",!0),t.send()},loginLevelList:function(){window.loginType="wechat";var e=cc.find("Canvas");e?cc.loader.loadRes("levelLayout",function(t,n){if(t)console.log("Prefab error:"+t);else if(n instanceof cc.Prefab){var o=cc.instantiate(n);e.addChild(o)}else console.log("Prefab error")}):cc.console("find Canvas error")},visitorLevelList:function(){window.loginType="visitor";var e=cc.find("Canvas");e?cc.loader.loadRes("levelLayout",function(t,n){if(t)console.log("Prefab error:"+t);else if(n instanceof cc.Prefab){var o=cc.instantiate(n);e.addChild(o)}else console.log("Prefab error")}):cc.console("find Canvas error")},getUserInfo:function(){cc.sys.platform===cc.sys.WECHAT_GAME&&wx.getStorage({key:"appId",success:function(e){window.userInfo.appId=e.data},fail:function(){wx.cloud.callFunction({name:"login"}).then(function(e){e&&e.result&&(wx.setStorage({key:"appId",data:e.result.appid}),wx.setStorage({key:"openId",data:e.result.openid}),window.userInfo.appId=e.result.appid,window.userInfo.classicsLevelNum=0,window.userInfo.netLevelNum=0,wx.cloud.callFunction({name:"addUser",data:{appId:e.result.appid,openId:e.result.openid}}).then(function(e){console.log(e)}).catch(function(e){console.error(e)}))}).catch(function(e){console.error(e)})}})},login:function(e,t){if(cc.sys.platform!==cc.sys.WECHAT_GAME);else{var n=window.wx,o=systemInfo=n.getSystemInfoSync(),i=screenWidth=o.screenWidth,c=screenHeight=o.screenHeight;n.getSetting({success:function(o){if(console.log(o.authSetting),o.authSetting["scope.userInfo"])console.log("\u7528\u6237\u5df2\u6388\u6743"),n.getUserInfo({success:function(t){userInfo=t.userInfo,e&&e(t.userInfo)}});else{console.log("\u7528\u6237\u672a\u6388\u6743");var l=n.createUserInfoButton({type:"text",text:"",style:{left:0,top:0,width:i,height:c,backgroundColor:"#00000000",color:"#ffffff",fontSize:20,textAlign:"center",lineHeight:c}});l.onTap(function(n){n.userInfo?(console.log("\u7528\u6237\u6388\u6743:",n.userInfo),userInfo=n.userInfo,e&&e(n.userInfo),l.destroy()):(console.log("\u7528\u6237\u62d2\u7edd\u6388\u6743:"),t&&t())})}}})}}}),cc._RF.pop()},{}]},{},["common","levelItem","levelLayout","main"]);