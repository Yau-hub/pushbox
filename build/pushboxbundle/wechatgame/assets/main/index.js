window.__require=function e(n,t,i){function o(c,a){if(!t[c]){if(!n[c]){var l=c.split("/");if(l=l[l.length-1],!n[l]){var r="function"==typeof __require&&__require;if(!a&&r)return r(l,!0);if(s)return s(l,!0);throw new Error("Cannot find module '"+c+"'")}c=l}var d=t[c]={exports:{}};n[c][0].call(d.exports,function(e){return o(n[c][1][e]||e)},d,d.exports,e,n,t,i)}return t[c].exports}for(var s="function"==typeof __require&&__require,c=0;c<i.length;c++)o(i[c]);return o}({common:[function(e,n,t){"use strict";cc._RF.push(n,"db8b31XBphC44pnJIdLHrEO","common"),t.__esModule=!0,t.wxLogin=function(e,n,t){if(cc.sys.platform===cc.sys.WECHAT_GAME){var i=window.wx,o=i.getSystemInfoSync(),s=o.screenWidth,c=o.screenHeight,a=2*t.width/1080*s,l=2*t.height/2400*c,r=s/2-a/2,d=c/2-l/2-t.y/2400*c+t.y/2400*c*.25;i.getSetting({success:function(t){if(console.log(t.authSetting),t.authSetting["scope.userInfo"])console.log("\u7528\u6237\u5df2\u6388\u6743"),i.getUserInfo({success:function(n){e&&e(n.userInfo)}});else{console.log("\u7528\u6237\u672a\u6388\u6743");var o=i.createUserInfoButton({type:"text",text:"",style:{left:parseInt(r),top:parseInt(d),width:parseInt(a),height:parseInt(l),backgroundColor:"#00000000",color:"#ffffff",fontSize:20,textAlign:"center",lineHeight:parseInt(l)}});o.onTap(function(t){t.userInfo?(console.log("\u7528\u6237\u6388\u6743:",t.userInfo),e&&e(t.userInfo),o.destroy()):(console.log("\u7528\u6237\u62d2\u7edd\u6388\u6743:"),n&&n())})}}})}},t.Toast=function(e,n){var t=cc.find("Canvas");if(t){var i=window.wx.getSystemInfoSync();i.screenWidth,i.screenHeight,cc.loader.loadRes("toast",function(i,o){if(i)console.log("Prefab error:"+i);else if(o instanceof cc.Prefab){var s=cc.instantiate(o),c=cc.find("background",s).getComponent(cc.Graphics),a=cc.find("text",s);a.getComponent(cc.Label).string=e,t.addChild(s),c.roundRect(-(a.width+80)/2,-(a.height+40)/2,a.width+80,a.height+40,(a.height+40)/2),c.fillColor=cc.Color.BLACK,c.fill();var l=setTimeout(function(){s.removeFromParent(),s.destroy(),clearTimeout(l),l=null},n)}else console.log("Prefab error")})}else cc.console("find Canvas error")},t.formateRankTime=function(e){var n=new Date(e),t=n.getFullYear()+"-",i=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",o=n.getDate()+"\n",s=n.getHours()+":",c=n.getMinutes()+":",a=n.getSeconds();return s.length<=1&&(s="0"+s),c.length<=1&&(c="0"+c),a.length<=1&&(a="0"+a),t+i+o+s+c+a},t.Loading=void 0;var i={ele:null,hideFlage:!1,show:function(){i.hideFlage=!1;var e=cc.find("Canvas");e?cc.loader.loadRes("loading",function(n,t){if(n)console.log("Prefab error:"+n);else if(t instanceof cc.Prefab){var o=cc.instantiate(t);i.hideFlage?o.destroy():(e.addChild(o),i.ele=o)}else console.log("Prefab error")}):cc.console("find Canvas error")},hide:function(){i.ele&&(i.ele.removeFromParent(),i.ele.destroy(),i.ele=null),i.hideFlage=!0}};t.Loading=i,cc._RF.pop()},{}],eleSize:[function(e,n){"use strict";cc._RF.push(n,"492ddrnQNVDwqTjOokjYqHi","eleSize"),cc.Class({extends:cc.Component,properties:{},start:function(){this.node.width=this.node.height=window.eleSize}}),cc._RF.pop()},{}],gameLayout:[function(e,n){"use strict";cc._RF.push(n,"8bc72A5qvpI1ZnhM9AbJxE6","gameLayout"),(t=e("./level"))&&t.__esModule;var t,i=e("./common");window.currentLevel=[],window.eleSize=35,window.layout=new Array,window.blockNum=12,cc.Class({extends:cc.Component,properties:{block:{default:null,type:cc.Prefab,displayName:"block"},wall:{default:null,type:cc.Prefab,displayName:"wall"},box:{default:null,type:cc.Prefab,displayName:"box"},ball:{default:null,type:cc.Prefab,displayName:"ball"},roleUp:{default:null,type:cc.Prefab,displayName:"roleUp"},roleRight:{default:null,type:cc.Prefab,displayName:"roleRight"},roleDown:{default:null,type:cc.Prefab,displayName:"roleDown"},roleLeft:{default:null,type:cc.Prefab,displayName:"roleLeft"},position:{default:null},gameBn:cc.Sprite,boxNum:{default:null},stepCounter:null,stepCounterValue:0,timeCounter:null,timeCounterValue:0,timeCounterTimer:null,levelCounter:null,moveHistoryList:[],lastScore:null,lastStepNode:null,lastTimenode:null,rankItem:cc.Prefab},onLoad:function(){this.initWinEle(),this.renderBg(),this.initLevel(),cc.find("gameBtns",this.node).height=(cc.winSize.height-cc.winSize.width)/2},start:function(){console.log(window.user),this.addTouchMove(),this.pendantAddEvent()},initWinEle:function(){var e=cc.winSize.width/window.blockNum;window.eleSize=e;for(var n=0;n<window.blockNum;n++){window.layout[n]=new Array;for(var t=0;t<window.blockNum;t++)window.layout[n][t]={x:0,y:0,sign:0,cover:null}}},initPosition:function(e){this.position={},this.boxNum=0;for(var n=0;n<e.length;n++)for(var t=0;t<e[0].length;t++)4!=e[n][t].sign&&5!=e[n][t].sign&&6!=e[n][t].sign&&7!=e[n][t].sign||(this.position.x=t,this.position.y=n),2==e[n][t].sign&&this.boxNum++},renderBg:function(){for(var e=-cc.winSize.width/2,n=window.eleSize*window.blockNum/2,t=0;t<window.blockNum;t++)for(var i=0;i<window.blockNum;i++){var o=i*window.eleSize+e,s=-t*window.eleSize+n;window.layout[t][i]={x:o,y:s,sign:0,cover:null};var c=cc.instantiate(this.block);c.setPosition(o,s),this.node.addChild(c)}},renderBn:function(){null==this.gameBn&&(this.gameBn=cc.find("Canvas/mainBg/gameBn").getComponent(cc.Sprite)),cc.assetManager.loadRemote(window.bgUrlBase+"_400x240.jpg",function(e,n){var t=new cc.SpriteFrame(n,cc.rect(0,0,400,240));that.gameBn.spriteFrame=t})},renderLayout:function(e){this.renderBg();for(var n=0;n<window.blockNum;n++)for(var t=0;t<window.blockNum;t++){var i=window.layout[n][t].x,o=window.layout[n][t].y;switch(e[n][t].sign){case 0:var s=cc.instantiate(this.block);s.setPosition(i,o),this.node.addChild(s);break;case 1:var c=cc.instantiate(this.wall);c.setPosition(i,o),this.node.addChild(c);break;case 2:var a=cc.instantiate(this.box);a.setPosition(i,o),this.node.addChild(a);break;case 3:var l=cc.instantiate(this.ball);l.setPosition(i,o),this.node.addChild(l);break;case 4:var r=cc.instantiate(this.roleUp);r.setPosition(i,o),this.node.addChild(r);break;case 5:var d=cc.instantiate(this.roleRight);d.setPosition(i,o),this.node.addChild(d);break;case 6:var u=cc.instantiate(this.roleDown);u.setPosition(i,o),this.node.addChild(u);break;case 7:var g=cc.instantiate(this.roleLeft);g.setPosition(i,o),this.node.addChild(g)}}},moveUp:function(e){var n=this,t=this.position.x,i=this.position.y;0==e[i-1][t].sign?(e[i-1][t].sign=4,e[i][t].sign=0,this.resetPosition("up")):1==e[i-1][t].sign?e[i][t].sign=4:2==e[i-1][t].sign?0==e[i-2][t].sign?(e[i][t].sign=0,e[i-2][t].sign=2,e[i-1][t].sign=4,e[i-1][t].cover&&(e[i-1][t].cover=4),this.resetPosition("up")):3==e[i-2][t].sign?(e[i][t].sign=0,e[i-2][t].sign=2,e[i-2][t].cover=2,e[i-1][t].sign=4,e[i-1][t].cover&&(e[i-1][t].cover=4),this.resetPosition("up")):e[i][t].sign=4:3==e[i-1][t].sign&&(e[i][t].sign=0,e[i-1][t].sign=4,e[i-1][t].cover=4,this.resetPosition("up")),0==e[i][t].sign&&e[i][t].cover&&(e[i][t].sign=3,e[i][t].cover=null);var o=setTimeout(function(){n.renderLayout(e),clearTimeout(o)})},moveDown:function(e){var n=this,t=this.position.x,i=this.position.y;0==e[i+1][t].sign?(e[i+1][t].sign=6,e[i][t].sign=0,this.resetPosition("down")):1==e[i+1][t].sign?e[i][t].sign=6:2==e[i+1][t].sign?0==e[i+2][t].sign?(e[i][t].sign=0,e[i+2][t].sign=2,e[i+1][t].sign=6,e[i+1][t].cover&&(e[i+1][t].cover=6),this.resetPosition("down")):3==e[i+2][t].sign?(e[i][t].sign=0,e[i+2][t].sign=2,e[i+2][t].cover=2,e[i+1][t].sign=6,e[i+1][t].cover&&(e[i+1][t].cover=6),this.resetPosition("down")):e[i][t].sign=6:3==e[i+1][t].sign&&(e[i][t].sign=0,e[i+1][t].sign=6,e[i+1][t].cover=6,this.resetPosition("down")),0==e[i][t].sign&&e[i][t].cover&&(e[i][t].sign=3,e[i][t].cover=null);var o=setTimeout(function(){n.renderLayout(e),clearTimeout(o)})},moveLeft:function(e){var n=this,t=this.position.x,i=this.position.y;0==e[i][t-1].sign?(e[i][t-1].sign=7,e[i][t].sign=0,this.resetPosition("left")):1==e[i][t-1].sign?e[i][t].sign=7:2==e[i][t-1].sign?0==e[i][t-2].sign?(e[i][t].sign=0,e[i][t-2].sign=2,e[i][t-1].sign=7,e[i][t-1].cover&&(e[i][t-1].cover=7),this.resetPosition("left")):3==e[i][t-2].sign?(e[i][t].sign=0,e[i][t-2].sign=2,e[i][t-2].cover=2,e[i][t-1].sign=7,e[i][t-1].cover&&(e[i][t-1].cover=7),this.resetPosition("left")):e[i][t].sign=7:3==e[i][t-1].sign&&(e[i][t].sign=0,e[i][t-1].sign=7,e[i][t-1].cover=7,this.resetPosition("left")),0==e[i][t].sign&&e[i][t].cover&&2!=e[i][t].cover&&(e[i][t].sign=3,e[i][t].cover=null);var o=setTimeout(function(){n.renderLayout(e),clearTimeout(o)})},moveRight:function(e){var n=this,t=this.position.x,i=this.position.y;0==e[i][t+1].sign?(e[i][t+1].sign=5,e[i][t].sign=0,this.resetPosition("right")):1==e[i][t+1].sign?e[i][t].sign=5:2==e[i][t+1].sign?0==e[i][t+2].sign?(e[i][t].sign=0,e[i][t+2].sign=2,e[i][t+1].sign=5,e[i][t+1].cover&&(e[i][t+1].cover=5),this.resetPosition("right")):3==e[i][t+2].sign?(e[i][t].sign=0,e[i][t+2].sign=2,e[i][t+2].cover=2,e[i][t+1].sign=5,e[i][t+1].cover&&(e[i][t+1].cover=5),this.resetPosition("right")):e[i][t].sign=5:3==e[i][t+1].sign&&(e[i][t].sign=0,e[i][t+1].sign=5,e[i][t+1].cover=5,this.resetPosition("right")),0==e[i][t].sign&&e[i][t].cover&&2!=e[i][t].cover&&(e[i][t].sign=3,e[i][t].cover=null);var o=setTimeout(function(){n.renderLayout(e),clearTimeout(o)})},resetPosition:function(e){var n=this;switch(e){case"up":this.position.y-=1;break;case"right":this.position.x+=1;break;case"down":this.position.y+=1;break;case"left":this.position.x-=1}cc.sys.platform===cc.sys.WECHAT_GAME&&wx.setStorage({key:"lastLayout",data:window.currentLevel,success:function(){wx.getStorage({key:"lastLayout",success:function(e){n.moveHistoryList.push(e.data)}})}}),this.stepCounterValue++,this.stepCounter.string="\u6b65\u6570\uff1a"+this.stepCounterValue;for(var t=0,i=0;i<window.currentLevel.length;i++)for(var o=0;o<window.currentLevel[0].length;o++)window.currentLevel[i][o].cover&&2==window.currentLevel[i][o].sign&&(t++,this.boxNum==t&&(this.showResult(),clearInterval(this.timeCounterTimer),this.timeCounterTimer=null))},addTouchMove:function(){if(window.setting.touchMove){var e=this,n=null;this.node.on("touchstart",function(e){n=e.getLocation()},this),this.node.on("touchend",function(t){var i=t.getLocation();Math.abs(n.x-i.x)>Math.abs(n.y-i.y)?n.x-i.x<-50?e.moveRight(window.currentLevel):n.x-i.x>50&&e.moveLeft(window.currentLevel):n.y-i.y<-50?e.moveUp(window.currentLevel):n.y-i.y>50&&e.moveDown(window.currentLevel)},this)}},showResult:function(){var e=this,n=this.node;if(n){var t=function(t,i){if(t)console.log("Prefab error:"+t);else if(i instanceof cc.Prefab){var o=cc.instantiate(i);cc.find("contentBg/useTime",o).getComponent(cc.Label).string="\u6b65\u6570\uff1a"+e.stepCounterValue+"\u6b65",cc.find("contentBg/useStep",o).getComponent(cc.Label).string="\u7528\u65f6\uff1a"+e.timeCounterValue+"\u79d2",window.levelIndex>=window.classicsLevelNum&&(cc.find("contentBg/next",o).opacity=0),cc.find("contentBg/next",o).on("click",function(){"classicsLevel"==window.levelClassify&&window.levelIndex<window.classicsLevelNum&&(o.removeFromParent(),o.destroy(),e.initPendant(),window.levelIndex++,e.initLevel())},this),cc.find("contentBg/replay",o).on("click",function(){o.removeFromParent(),o.destroy(),e.replayLayout(),e.initPendant()},this),cc.find("contentBg/share",o).on("click",function(){if(cc.sys.platform===cc.sys.WECHAT_GAME){var n="\u76ca\u667a\u63a8\u7bb1";"classicsLevel"==window.levelClassify?n+="-\u7ecf\u5178\u5173\u5361":"netLevel"==window.levelClassify&&(n+="-\u7f51\u53cb\u81ea\u5236\u5173\u5361"),n=n+"\u7b2c"+window.levelIndex+"\u5173-\u4f7f\u7528\u6b65\u6570\uff1a"+e.stepCounterValue+"-\u6311\u6218\u6210\u529f\uff01",wx.shareAppMessage({title:n,query:"\u5206\u4eab"})}},this),n.addChild(o)}else console.log("Prefab error")};if(setTimeout(function(){cc.loader.loadRes("gameOverAlert",t)},0),cc.sys.platform===cc.sys.WECHAT_GAME){null==e.lastScore?(wx.cloud.callFunction({name:"addClassicsLevelScore",data:{levelIndex:window.levelIndex,appId:window.user.appId,useStep:e.stepCounterValue,useTime:e.timeCounterValue,portrait:window.loginInfo.avatarUrl,nickName:window.loginInfo.nickName}}).then(function(){}).catch(function(e){console.error(e)}),e.lastScore={levelIndex:window.levelIndex,appId:window.user.appId,useStep:e.stepCounterValue,useTime:e.timeCounterValue},e.renderLastScore(e.lastScore.useStep,e.lastScore.useTime)):(e.stepCounterValue<e.lastScore.useStep||e.timeCounterValue<e.lastScore.useTime)&&(e.lastScore={levelIndex:window.levelIndex,appId:window.user.appId,useStep:e.stepCounterValue,useTime:e.timeCounterValue},e.renderLastScore(e.lastScore.useStep,e.lastScore.useTime),wx.cloud.callFunction({name:"updateClassicsLevelScore",data:{levelIndex:window.levelIndex,appId:window.user.appId,useStep:e.stepCounterValue,useTime:e.timeCounterValue,portrait:window.loginInfo.avatarUrl,nickName:window.loginInfo.nickName}}).then(function(){}).catch(function(e){console.error(e)}));var i=window.levelIndex;wx.cloud.callFunction({name:"queryUser",data:{appId:window.user.appId}}).then(function(e){if(e&&e.result.data.length>0&&e.result.data[0].levelFinishNum<i){window.user.levelFinishNum=i;var n={};n.appId=window.user.appId,n.levelFinishNum=i,window.loginInfo.nickName&&(n.nickName=window.loginInfo.nickName),window.loginInfo.avatarUrl&&(n.portrait=window.loginInfo.avatarUrl),wx.cloud.callFunction({name:"updateUser",data:n}).then(function(){}).catch(function(e){console.error(e)})}}).catch(function(e){console.error(e)})}}else cc.console("find Canvas error")},replayLayout:function(){var e=this;wx.getStorage({key:"initLevel",success:function(n){window.currentLevel=n.data,e.renderLayout(window.currentLevel),e.initPosition(window.currentLevel)},fail:function(){}})},initPendant:function(){if(null==this.levelCounter){var e=new cc.Node("levelCounter");e.setAnchorPoint(.5,.5),e.width=300,e.height=100;var n=e.addComponent(cc.Label);n.node.setPosition(55,cc.winSize.height/2-.05*cc.winSize.height),n.string="\u7b2c "+window.levelIndex+" \u5173",n.fontSize=60,n.enableBold=!0,n.overflow=cc.Label.Overflow.RESIZE_HEIGHT,n.lineHeight=60,n.horizontalAlign="center",this.levelCounter=e.getComponent(cc.Label),this.node.addChild(e)}else this.levelCounter.string="\u7b2c "+window.levelIndex+" \u5173";if(null==this.stepCounter){var t=new cc.Node("stepCounter");t.setAnchorPoint(0,1);var i=t.addComponent(cc.Label);i.node.setPosition(-cc.winSize.width/2+.05*cc.winSize.width,cc.winSize.width/2+80),i.string="\u6b65\u6570\uff1a 0",this.stepCounter=t.getComponent(cc.Label),this.node.addChild(t)}else this.stepCounterValue=0,this.stepCounter.string="\u6b65\u6570\uff1a"+this.stepCounterValue;if(null==this.timeCounter){var o=new cc.Node("timeCounter");o.setAnchorPoint(0,1);var s=o.addComponent(cc.Label);s.node.setPosition(0,cc.winSize.width/2+80),s.string="\u7528\u65f6\uff1a 0",this.timeCounter=o.getComponent(cc.Label),this.node.addChild(o),this.timeCounterTimer=setInterval(function(){this.timeCounterValue++,this.timeCounter.string="\u7528\u65f6\uff1a"+this.timeCounterValue}.bind(this),1e3)}else this.timeCounterValue=0,this.timeCounter.string="\u7528\u65f6\uff1a"+this.timeCounterValue,null==this.timeCounterTimer&&(this.timeCounterTimer=setInterval(function(){this.timeCounterValue++,this.timeCounter.string="\u7528\u65f6\uff1a"+this.timeCounterValue}.bind(this),1e3));this.moveHistoryList=[]},pendantAddEvent:function(){var e=this;cc.find("back",this.node).on("click",this.back,this),window.setting.clickMove?(cc.find("gameBtns/up",this.node).on("click",function(){e.moveUp(window.currentLevel)},this),cc.find("gameBtns/right",this.node).on("click",function(){e.moveRight(window.currentLevel)},this),cc.find("gameBtns/down",this.node).on("click",function(){e.moveDown(window.currentLevel)},this),cc.find("gameBtns/left",this.node).on("click",function(){e.moveLeft(window.currentLevel)},this)):(cc.find("gameBtns/up",this.node).opacity=0,cc.find("gameBtns/right",this.node).opacity=0,cc.find("gameBtns/down",this.node).opacity=0,cc.find("gameBtns/left",this.node).opacity=0),cc.find("gameBtns/backStep",this.node).on("click",function(){e.moveHistoryList.length>1&&e.stepCounterValue>=1&&(e.moveHistoryList.pop(),cc.sys.platform===cc.sys.WECHAT_GAME&&wx.setStorage({key:"lastLayout",data:e.moveHistoryList[e.moveHistoryList.length-1],success:function(){wx.getStorage({key:"lastLayout",success:function(n){e.stepCounterValue--,e.stepCounter.string="\u6b65\u6570\uff1a"+e.stepCounterValue,window.currentLevel=n.data,e.renderLayout(window.currentLevel),e.initPosition(window.currentLevel)}})}}))},this),cc.find("gameBtns/menu",this.node).on("click",function(){clearInterval(e.timeCounterTimer),e.timeCounterTimer=null;var n=e.node;n?cc.loader.loadRes("gameMenu",function(t,i){if(t)console.log("Prefab error:"+t);else if(i instanceof cc.Prefab){var o=cc.instantiate(i);cc.find("contain/continue",o).on("click",function(){null==e.timeCounterTimer&&(e.timeCounterTimer=setInterval(function(){e.timeCounterValue++,e.timeCounter.string="\u7528\u65f6\uff1a"+e.timeCounterValue}.bind(e),1e3)),o.removeFromParent(),o.destroy()},this),cc.find("contain/replay",o).on("click",function(){o.removeFromParent(),o.destroy(),e.replayLayout(),e.initPendant()},this),cc.find("contain/rank",o).on("click",function(){e.showLevelRank()},this),cc.find("contain/share",o).on("click",function(){if(cc.sys.platform===cc.sys.WECHAT_GAME){var e="\u76ca\u667a\u63a8\u7bb1";"classicsLevel"==window.levelClassify?e+="-\u7ecf\u5178\u5173\u5361":"netLevel"==window.levelClassify&&(e+="-\u7f51\u53cb\u81ea\u5236\u5173\u5361"),e=e+"\u7b2c"+window.levelIndex+"\u5173-\u5feb\u6765\u6311\u6218\u5427!",wx.shareAppMessage({title:e,query:"\u5206\u4eab"})}},this),n.addChild(o)}else console.log("Prefab error")}):cc.console("find Canvas error")},this)},initLevel:function(){var e=this;cc.sys.platform===cc.sys.WECHAT_GAME&&(i.Loading.show(),"classicsLevel"==window.levelClassify&&(wx.cloud.callFunction({name:"queryClassicsLevel",data:{levelIndex:window.levelIndex}}).then(function(n){n&&n.result.data.length>0&&(window.currentLevel=n.result.data[0].content,e.renderLayout(window.currentLevel),e.initPosition(window.currentLevel),e.initPendant(),wx.setStorage({key:"initLevel",data:window.currentLevel,success:function(){wx.getStorage({key:"initLevel",success:function(n){e.moveHistoryList.push(n.data)}})}})),i.Loading.hide()}).catch(function(e){console.error(e)}),wx.cloud.callFunction({name:"queryClassicsLevelScore",data:{levelIndex:window.levelIndex,appId:window.user.appId}}).then(function(n){console.log(n),n&&n.result.data.length>0?(e.lastScore=n.result.data[0],e.renderLastScore(e.lastScore.useStep,e.lastScore.useTime)):(e.lastScore=null,e.renderLastScore("\u65e0","\u65e0"))}).catch(function(e){console.error(e)})))},back:function(){this.initPendant(),clearInterval(this.timeCounterTimer),this.timeCounterTimer=null,cc.director.loadScene("main")},renderLastScore:function(e,n){if(null==this.lastStepNode){var t=new cc.Node("lastStepNode");t.setAnchorPoint(0,1);var i=t.addComponent(cc.Label);i.node.setPosition(-cc.winSize.width/2+.05*cc.winSize.width,cc.winSize.width/2+160),i.string="\u6700\u4f73\u6210\u7ee9\uff1a\u6b65\u6570 "+e+" - \u7528\u65f6 "+n,this.lastStepNode=t.getComponent(cc.Label),this.node.addChild(t)}else this.lastStepNode.string="\u6700\u4f73\u6210\u7ee9\uff1a\u6b65\u6570 "+e+" - \u7528\u65f6 "+n},showLevelRank:function(){var e=this,n=cc.find("Canvas"),t=1;n?cc.loader.loadRes("rankLayout",function(i,o){if(i)console.log("Prefab error:"+i);else if(o instanceof cc.Prefab){var s=cc.instantiate(o),c=cc.find("rankList/view/content",s);cc.find("close",s).on("click",function(){s.removeFromParent(),s.destroy()},this),null==e.rankItem?cc.loader.loadRes("rankItem",function(n,i){e.rankItem=cc.instantiate(i),e.renderLevelRankList(c,t,50)}):e.renderLevelRankList(c,t,50),cc.find("rankList",s).on("bounce-bottom",function(){t++,e.renderLevelRankList(c,t,50)},this),cc.find("thLevel",s).getComponent(cc.Label).string="\u6b65 \u6570",n.addChild(s)}else console.log("Prefab error")}):cc.console("find Canvas error")},renderLevelRankList:function(e,n,t){var o=this,s=e.childrenCount;cc.sys.platform===cc.sys.WECHAT_GAME&&(i.Loading.show(),wx.cloud.callFunction({name:"queryClassicsLevelScore",data:{page:n,pageSize:t}}).then(function(n){i.Loading.hide();var t=null;if(n&&n.result.data.length>0){for(var c=function(){l=n.result.data[a-1];var c=cc.instantiate(o.rankItem);null==t&&(t=c),c.getChildByName("tdRank").getComponent(cc.Label).string=a+s,c.getChildByName("tdDate").getComponent(cc.Label).string=(0,i.formateRankTime)(l.createTime),c.getChildByName("tdLevel").getComponent(cc.Label).string=l.useStep,l.portrait&&cc.assetManager.loadRemote(l.portrait+"?aaa=aa.jpg",function(e,n){var t=new cc.SpriteFrame(n);cc.find("mask/Image",c.getChildByName("tdPortrait")).getComponent(cc.Sprite).spriteFrame=t}),l.nickName&&(c.getChildByName("tdName").getComponent(cc.Label).string=" "+l.nickName+" "),e.addChild(c)},a=1;a<=n.result.data.length;a++){var l;c()}e.height=e.childrenCount*t.height}else(0,i.Toast)("\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86",1500)}).catch(function(e){console.error(e),i.Loading.hide()}))}}),cc._RF.pop()},{"./common":"common","./level":"level"}],levelItem:[function(e,n){"use strict";cc._RF.push(n,"2cfd6DcvT5OTYgzh6qWc2QW","levelItem"),cc.Class({extends:cc.Component,properties:{levelNum:null,levelLock:null},start:function(){},init:function(){this.levelNum=cc.find("levelNum",this.node).getComponent(cc.Label),this.levelNum.string="1",this.levelLock=cc.find("levelLock",this.node),this.levelLock.opacity=0}}),cc._RF.pop()},{}],levelLayout:[function(e,n){"use strict";cc._RF.push(n,"fef7dUI0+VDDZg/zyXQW1yR","levelLayout"),cc.Class({extends:cc.Component,properties:{levelItem:cc.Prefab,levelList:null,levelListConten:null,levelSrollView:null,classicsLevelBtn:cc.Button,netLevelBtn:cc.Button,closeLevelBtn:cc.Button},onLoad:function(){},start:function(){this.levelList=cc.find("levelList/levelScrollView/view/content/itemList",this.node),this.levelListConten=cc.find("levelList/levelScrollView/view/content",this.node),this.levelSrollView=cc.find("levelList/levelScrollView",this.node),null==this.classicsLevelBtn&&(this.classicsLevelBtn=cc.find("levelList/classify/classicsLevel",this.node).getComponent(cc.Button)),null==this.netLevelBtn&&(this.netLevelBtn=cc.find("levelList/classify/netLevel",this.node).getComponent(cc.Button)),null==this.closeLevelBtn&&(this.closeLevelBtn=cc.find("closeLevel",this.node).getComponent(cc.Button)),this.classicsLevelBtn.node.on("click",this.loadClassicsLevelList,this),this.netLevelBtn.node.on("click",this.loadNetLevelList,this),this.closeLevelBtn.node.on("click",this.closeLevelLayout,this),this.loadClassicsLevelList()},loadClassicsLevelList:function(){var e=this;cc.find("Background/Label",this.classicsLevelBtn.node).color=cc.color(202,122,0);var n=cc.find("Background/Label",this.netLevelBtn.node);n.color=cc.color(255,255,255),n.opacity=125,window.levelClassify="classicsLevel",this.levelList.destroyAllChildren();for(var t=0,i=10,o=window.classicsLevelNum,s=function(n){var s=cc.instantiate(e.levelItem),c=n+1;c<=window.user.levelFinishNum+1&&(s.getChildByName("levelNum").getComponent(cc.Label).string=c,s.getChildByName("levelLock").opacity=0,s.on("touchend",function(){window.levelIndex=c,cc.director.loadScene("game")},e)),e.levelList.addChild(s),c<=i&&(i=Math.floor(o/Math.floor(e.levelListConten.width/s.width)-1),t+=s.height+70)},c=0;c<o;c++)s(c);this.levelListConten.height=t},loadNetLevelList:function(){var e=this,n=cc.find("Background/Label",this.classicsLevelBtn.node);n.color=cc.color(255,255,255),n.opacity=125,cc.find("Background/Label",this.netLevelBtn.node).color=cc.color(202,122,0),window.levelClassify="netLevel",this.levelList.destroyAllChildren();for(var t=0,i=10,o=window.netLevelNum,s=function(n){var s=cc.instantiate(e.levelItem),c=n+1;c<=window.userInfo.classicsLevelNum&&(s.getChildByName("levelNum").getComponent(cc.Label).string=c,s.getChildByName("levelLock").opacity=0),e.levelList.addChild(s),s.on("touchend",function(){cc.log("level:"+c)},e),c<=i&&(i=Math.floor(o/Math.floor(e.levelListConten.width/s.width)-1),t+=s.height+70)},c=0;c<o;c++)s(c);this.levelListConten.height=t},closeLevelLayout:function(){this.node.removeFromParent(),this.node.destroy()}}),cc._RF.pop()},{}],level:[function(e,n,t){"use strict";cc._RF.push(n,"8303276hNVKza2rc2TmzBRT","level"),t.__esModule=!0,t.default=void 0;for(var i=new Array,o=new Array,s=new Array,c=0;c<12;c++){o[c]=new Array,s[c]=new Array;for(var a=0;a<12;a++)o[c][a]={sign:0},s[c][a]={sign:0}}o[1][3].sign=1,o[1][4].sign=1,o[1][5].sign=1,o[2][3].sign=1,o[2][4].sign=3,o[2][5].sign=1,o[3][3].sign=1,o[3][4].sign=0,o[3][5].sign=1,o[3][6].sign=1,o[3][7].sign=1,o[3][8].sign=1,o[4][1].sign=1,o[4][2].sign=1,o[4][3].sign=1,o[4][4].sign=2,o[4][5].sign=0,o[4][6].sign=2,o[4][7].sign=3,o[4][8].sign=1,o[5][1].sign=1,o[5][2].sign=3,o[5][3].sign=0,o[5][4].sign=2,o[5][5].sign=6,o[5][6].sign=1,o[5][7].sign=1,o[5][8].sign=1,o[6][1].sign=1,o[6][2].sign=1,o[6][3].sign=1,o[6][4].sign=1,o[6][5].sign=2,o[6][6].sign=1,o[7][4].sign=1,o[7][5].sign=3,o[7][6].sign=1,o[8][4].sign=1,o[8][5].sign=1,o[8][6].sign=1,s[1][1].sign=1,s[1][2].sign=1,s[1][3].sign=1,s[1][4].sign=1,s[1][5].sign=1,s[2][1].sign=1,s[2][2].sign=6,s[2][5].sign=1,s[3][1].sign=1,s[3][3].sign=2,s[3][4].sign=2,s[3][5].sign=1,s[3][7].sign=1,s[3][8].sign=1,s[3][9].sign=1,s[4][1].sign=1,s[4][3].sign=2,s[4][5].sign=1,s[4][7].sign=1,s[4][8].sign=3,s[4][9].sign=1,s[5][1].sign=1,s[5][2].sign=1,s[5][3].sign=1,s[5][5].sign=1,s[5][6].sign=1,s[5][7].sign=1,s[5][8].sign=3,s[5][9].sign=1,s[6][2].sign=1,s[6][3].sign=1,s[6][8].sign=3,s[6][9].sign=1,s[7][2].sign=1,s[7][6].sign=1,s[7][9].sign=1,s[8][2].sign=1,s[8][6].sign=1,s[8][7].sign=1,s[8][8].sign=1,s[8][9].sign=1,s[9][2].sign=1,s[9][3].sign=1,s[9][4].sign=1,s[9][5].sign=1,s[9][6].sign=1,i.push(o,s);var l=i;t.default=l,n.exports=t.default,cc._RF.pop()},{}],main:[function(e,n){"use strict";cc._RF.push(n,"2276c+jCHZBGYX+JxzXyKDF","main"),(t=e("./level"))&&t.__esModule;var t,i=e("./common");window.env="cloud1-5gvbuiy3dd99f63c",cc.sys.platform===cc.sys.WECHAT_GAME&&wx.cloud.init({env:window.env}),window.user={},window.classicsLevelNum=0,window.netLevelNum=0,window.levelIndex=0,window.bgUrlBase="",window.user.levelFinishNum=0,window.loginInfo={avatarUrl:null,nickName:null},cc.Class({extends:cc.Component,properties:{oneSayLabel:{default:null,type:cc.Label},loginplay:cc.Button,visitorplay:cc.Button,mainRank:cc.Button,levelLayout:cc.Prefab,buildLevel:cc.Button,setting:cc.Button,mainShare:cc.Button,rankItem:cc.Prefab},onLoad:function(){this.mainBindEvent()},start:function(){cc.sys.platform===cc.sys.WECHAT_GAME&&(i.Loading.show(),wx.cloud.callFunction({name:"getClassicsLevelNum"}).then(function(e){window.classicsLevelNum=e.result.total,i.Loading.hide()}).catch(function(e){console.error(e)})),this.getUserInfo(),this.initSetting()},loadImg:function(){var e=cc.find("Canvas/mainBg/bingBg"),n="",t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==t.readyState&&t.status>=200&&t.status<400){var i=JSON.parse(t.responseText);n="https://cn.bing.com"+i.images[0].urlbase+"_720x1280.jpg",window.bgUrlBase="https://cn.bing.com"+i.images[0].urlbase,cc.assetManager.loadRemote(n,function(n,t){var i=new cc.SpriteFrame(t);e.spriteFrame=i;var o=new cc.Node;o.name="star1",o.setPosition(0,0);var s=o.addComponent(cc.Sprite);s.spriteFrame=i,s.sizeMode="CUSTOM",s.node.width=cc.winSize.width,s.node.height=cc.winSize.height,e.addChild(o)})}},t.open("get","https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1",!0),t.send()},oneSay:function(){var e=this,n=new XMLHttpRequest,t=cc.find("Canvas/mainBg/oneSay").getComponent(cc.Component);n.onreadystatechange=function(){if(4==n.readyState&&n.status>=200&&n.status<400){var i=JSON.parse(n.responseText);e.oneSayLabel&&null!=e.oneSayLabel.string?e.oneSayLabel.string=i.hitokoto+" -- "+i.from:t&&null!=t.string&&(t.string=i.hitokoto+" -- "+i.from)}},n.open("get","https://v1.hitokoto.cn/",!0),n.send()},loginLevelList:function(){window.loginType="wechat";var e=cc.find("Canvas");e?cc.loader.loadRes("levelLayout",function(n,t){if(n)console.log("Prefab error:"+n);else if(t instanceof cc.Prefab){var i=cc.instantiate(t);e.addChild(i)}else console.log("Prefab error")}):cc.console("find Canvas error")},visitorLevelList:function(){window.loginType="visitor";var e=cc.find("Canvas");e?cc.loader.loadRes("levelLayout",function(n,t){if(n)console.log("Prefab error:"+n);else if(t instanceof cc.Prefab){var i=cc.instantiate(t);e.addChild(i)}else console.log("Prefab error")}):cc.console("find Canvas error")},showMainRank:function(){var e=this,n=cc.find("Canvas"),t=1;n?cc.loader.loadRes("rankLayout",function(i,o){if(i)console.log("Prefab error:"+i);else if(o instanceof cc.Prefab){var s=cc.instantiate(o),c=cc.find("rankList/view/content",s);cc.find("close",s).on("click",function(){s.removeFromParent(),s.destroy()},this),null==e.rankItem?cc.loader.loadRes("rankItem",function(n,i){e.rankItem=cc.instantiate(i),e.renderMainRankList(c,t,50)}):e.renderMainRankList(c,t,50),cc.find("rankList",s).on("bounce-bottom",function(){t++,e.renderMainRankList(c,t,50)},this),n.addChild(s)}else console.log("Prefab error")}):cc.console("find Canvas error")},renderMainRankList:function(e,n,t){var o=this,s=e.childrenCount;cc.sys.platform===cc.sys.WECHAT_GAME&&(i.Loading.show(),wx.cloud.callFunction({name:"queryUser",data:{page:n,pageSize:t}}).then(function(n){i.Loading.hide();var t=null;if(n&&n.result.data.length>0){for(var c=function(){l=n.result.data[a-1];var c=cc.instantiate(o.rankItem);null==t&&(t=c),c.getChildByName("tdRank").getComponent(cc.Label).string=a+s,c.getChildByName("tdDate").getComponent(cc.Label).string=(0,i.formateRankTime)(l.createTime),c.getChildByName("tdLevel").getComponent(cc.Label).string=l.levelFinishNum,l.portrait&&cc.assetManager.loadRemote(l.portrait+"?aaa=aa.jpg",function(e,n){var t=new cc.SpriteFrame(n);cc.find("mask/Image",c.getChildByName("tdPortrait")).getComponent(cc.Sprite).spriteFrame=t}),l.nickName&&(c.getChildByName("tdName").getComponent(cc.Label).string=" "+l.nickName+" "),e.addChild(c)},a=1;a<=n.result.data.length;a++){var l;c()}e.height=e.childrenCount*t.height}else(0,i.Toast)("\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86",1500)}).catch(function(e){console.error(e),i.Loading.hide()}))},getUserInfo:function(){cc.sys.platform===cc.sys.WECHAT_GAME&&wx.getStorage({key:"appId",success:function(e){window.user.appId=e.data,wx.cloud.callFunction({name:"queryUser",data:{appId:window.user.appId}}).then(function(e){e&&e.result.data.length>0&&(window.user.levelFinishNum=e.result.data[0].levelFinishNum,window.user.classicsLevelNum=e.result.data[0].classicsLevelNum,window.user.netLevelNum=e.result.data[0].netLevelNum)}).catch(function(e){console.error(e)})},fail:function(){wx.cloud.callFunction({name:"login"}).then(function(e){e&&e.result&&(wx.setStorage({key:"appId",data:e.result.openid}),window.user.appId=e.result.openid,window.user.classicsLevelNum=0,window.user.netLevelNum=0,window.user.levelFinishNum=0,wx.cloud.callFunction({name:"queryUser",data:{appId:window.user.appId}}).then(function(e){e&&e.result.data.length<=0&&wx.cloud.callFunction({name:"addUser",data:{appId:window.user.appId,nickName:window.loginInfo.nickName,portrait:window.loginInfo.avatarUrl}}).then(function(e){console.log(e)}).catch(function(e){console.error(e)})}).catch(function(e){console.error(e)}))}).catch(function(e){console.error(e)})}})},mainBindEvent:function(){(0,i.wxLogin)(function(e){window.loginInfo={avatarUrl:e.avatarUrl,nickName:e.nickName}},function(){console.log("\u6388\u6743\u5931\u8d25")},this.loginplay.node),null==this.loginplay&&(this.loginplay=cc.find("Canvas/mainBg/loginplay").getComponent(cc.Button)),this.loginplay.node.on("click",this.loginLevelList,this),null==this.visitorplay&&(this.visitorplay=cc.find("Canvas/mainBg/visitorplay").getComponent(cc.Button)),this.visitorplay.node.on("click",this.visitorLevelList,this),null==this.mainRank&&(this.mainRank=cc.find("Canvas/mainBg/mainRank").getComponent(cc.Button)),this.mainRank.node.on("click",this.showMainRank,this),null==this.mainShare&&(this.mainShare=cc.find("Canvas/mainBg/mainShare").getComponent(cc.Button)),this.mainShare.node.on("click",function(){cc.sys.platform===cc.sys.WECHAT_GAME&&wx.shareAppMessage({title:"\u5feb\u6765\u6311\u6218\u201c\u76ca\u667a\u63a8\u7bb1\u201d\u5c0f\u6e38\u620f\u5427\uff01",query:"\u5206\u4eab"})},this),null==this.setting&&(this.setting=cc.find("Canvas/mainBg/setting").getComponent(cc.Button)),this.setting.node.on("click",function(){var e=cc.find("Canvas");e?cc.loader.loadRes("settingDialog",function(n,t){if(n)console.log("Prefab error:"+n);else if(t instanceof cc.Prefab){var o=cc.instantiate(t);cc.find("settingContain/closeSetting",o).on("click",function(){o.removeFromParent(),o.destroy()},this);var s=cc.find("settingContain/touchMove/Background/Label",o).getComponent(cc.Label),c=cc.find("settingContain/clickMove/Background/Label",o).getComponent(cc.Label);window.setting.touchMove?s.string="\u5173\u95ed\u89e6\u6478\u79fb\u52a8":s.string="\u5f00\u542f\u89e6\u6478\u79fb\u52a8",window.setting.clickMove?c.string="\u5173\u95ed\u6309\u952e\u79fb\u52a8":c.string="\u5f00\u542f\u6309\u952e\u79fb\u52a8",cc.find("settingContain/touchMove",o).on("click",function(){cc.sys.platform===cc.sys.WECHAT_GAME&&wx.getStorage({key:"setting",success:function(e){e.data.touchMove&&e.data.clickMove?(window.setting.touchMove=!1,s.string="\u5f00\u542f\u89e6\u6478\u79fb\u52a8"):!e.data.touchMove&&e.data.clickMove?(window.setting.touchMove=!0,s.string="\u5173\u95ed\u89e6\u6478\u79fb\u52a8"):(0,i.Toast)("\u81f3\u5c11\u5f00\u542f\u4e00\u79cd\u79fb\u52a8\u65b9\u5f0f!",1500),wx.setStorage({key:"setting",data:window.setting})}})},this),cc.find("settingContain/clickMove",o).on("click",function(){cc.sys.platform===cc.sys.WECHAT_GAME&&wx.getStorage({key:"setting",success:function(e){e.data.touchMove&&e.data.clickMove?(window.setting.clickMove=!1,c.string="\u5f00\u542f\u6309\u952e\u79fb\u52a8"):e.data.touchMove&&!e.data.clickMove?(window.setting.clickMove=!0,c.string="\u5173\u95ed\u6309\u952e\u79fb\u52a8"):(0,i.Toast)("\u81f3\u5c11\u5f00\u542f\u4e00\u79cd\u79fb\u52a8\u65b9\u5f0f!",1500),wx.setStorage({key:"setting",data:window.setting})}})},this),e.addChild(o)}else console.log("Prefab error")}):cc.console("find Canvas error")},this)},initSetting:function(){cc.sys.platform===cc.sys.WECHAT_GAME&&wx.getStorage({key:"setting",success:function(e){window.setting=e.data},fail:function(){window.setting={touchMove:!0,clickMove:!0},wx.setStorage({key:"setting",data:window.setting})}})}}),cc._RF.pop()},{"./common":"common","./level":"level"}]},{},["common","eleSize","gameLayout","level","levelItem","levelLayout","main"]);