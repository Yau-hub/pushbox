
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2276c+jCHZBGYX+JxzXyKDF', 'main');
// scripts/main.js

"use strict";

var _common = require("./common");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.env = "cloud1-5gvbuiy3dd99f63c";
window.bgMusic = null;
window.moveMusic = null;
window.createScenseUploadAd = null;
window.skipLevelAd = null;
window.auditLevelAd = null;
window.checkSolutionLevelAd = null;
window.gameCircle = null;
window.cloudFunctionBaseUrl = 'https://ac327917-ed0d-4195-8290-65fac58e2bf9.bspapp.com';
if (window.auditLevelAd) window.auditLevelAd.destroy();

if (cc.sys.platform === cc.sys.WECHAT_GAME) {
  wx.cloud.init({
    env: window.env
  }); //广告初始化

  if (wx.createInterstitialAd) {
    window.skipLevelAd = wx.createRewardedVideoAd({
      adUnitId: 'adunit-d408eadf9ac9c0a9',
      multiton: true
    });
    window.skipLevelAd.onError(function (err) {});
    window.checkSolutionLevelAd = wx.createRewardedVideoAd({
      adUnitId: 'adunit-110d097df5bc8eb0',
      multiton: true
    });
    window.checkSolutionLevelAd.onError(function (err) {});
    window.createScenseUploadAd = wx.createInterstitialAd({
      adUnitId: 'adunit-e7f23b52c9d59315'
    });
    window.createScenseUploadAd.onError(function (err) {
      window.createScenseUploadAd = null;
    });
  }
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
};
window.gameCircle = null;
cc.Class({
  "extends": cc.Component,
  properties: {
    oneSayLabel: {
      "default": null,
      type: cc.Label
    },
    loginplay: cc.Button,
    visitorplay: cc.Button,
    mainRank: cc.Button,
    levelLayout: cc.Prefab,
    reviewLayout: cc.Prefab,
    reviewLevel: cc.Button,
    buildLevel: cc.Button,
    setting: cc.Button,
    mainShare: cc.Button,
    rankItem: cc.Prefab
  },
  // LIFE-CYCL:E CALLBACKS:
  onLoad: function onLoad() {
    //加载一言
    //  this.oneSay();
    this.mainBindEvent();
    window.from = 'main';
    cc.game.on(cc.game.EVENT_SHOW, function () {
      // console.log("重新返回游戏");
      if (window.bgMusic && !window.bgMusic.paused) window.bgMusic.pause();
      if (window.bgMusic && window.bgMusic.paused) window.bgMusic.play();
    }, this);
  },
  start: function start() {
    var that = this;

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      _common.Loading.show();

      wx.request({
        url: cloudFunctionBaseUrl + "/getClassicsLevelNum",
        method: 'POST',
        data: {},
        success: function success(res) {
          window.classicsLevelNum = res.data.total;

          _common.Loading.hide();
        },
        error: function error(err) {
          _common.Loading.hide();
        }
      }); // wx.cloud.callFunction({
      //     name: 'getClassicsLevelNum'
      // }).then(res => {
      //     window.classicsLevelNum = res.result.total;
      //     Loading.hide();
      //
      // }).catch(err => {
      //     console.error(err)
      // })

      wx.removeStorage({
        key: "initLevel"
      });
    }

    this.loadImg();
    this.oneSay();
    this.getUserInfo();
    this.initSetting();
  },
  // update (dt) {},
  loadImg: function loadImg() {
    var that = this;
    var container = cc.find('Canvas/mainBg/bingBg'); //图片呈现位置

    var imgServeUrl = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1';
    var imgUrl = '';
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        var response = JSON.parse(xhr.responseText);
        imgUrl = 'https://cn.bing.com' + response.images[0].urlbase + '_720x1280.jpg';
        window.bgUrlBase = 'https://cn.bing.com' + response.images[0].urlbase;
        cc.assetManager.loadRemote(imgUrl, function (err, texture) {
          var sprite = new cc.SpriteFrame(texture);
          container.spriteFrame = sprite; //创建一个使用图片资源的新节点对象

          var starNode = new cc.Node(); //创建一个新节点

          starNode.name = "star1";
          starNode.setPosition(0, 0);
          var starSprite = starNode.addComponent(cc.Sprite); //增加精灵组件

          starSprite.spriteFrame = sprite; //设置精灵组件图片资源

          starSprite.sizeMode = 'CUSTOM';
          starSprite.node.width = cc.winSize.width;
          starSprite.node.height = cc.winSize.height;
          starNode.opacity = 0;
          container.addChild(starNode); //场景中增加新节点

          var opacity = 0;
          var opacityTimer = setInterval(function () {
            opacity += 1;
            starNode.opacity = opacity;

            if (opacity >= 255) {
              clearInterval(opacityTimer);
              opacityTimer = null;
            }
          }, 5);
        });
      }
    };

    xhr.open("get", imgServeUrl, true);
    xhr.send();
  },
  oneSay: function oneSay() {
    var that = this;
    var url = "https://v1.hitokoto.cn/";
    var xhr = new XMLHttpRequest();
    var oneSayLabel = cc.find("Canvas/mainBg/oneSay").getComponent(cc.Label);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        var response = JSON.parse(xhr.responseText);
        if (that.oneSayLabel && that.oneSayLabel.string != null) that.oneSayLabel.string = response.hitokoto + ' -- ' + response.from;else if (oneSayLabel && oneSayLabel.string != null) oneSayLabel.string = response.hitokoto + ' -- ' + response.from;
      }
    };

    xhr.open("get", url, true);
    xhr.send();
    this.oneSayLabel.node.on('touchend', function () {
      var newXHR = new XMLHttpRequest();

      newXHR.onreadystatechange = function () {
        if (newXHR.readyState == 4 && newXHR.status >= 200 && newXHR.status < 400) {
          var response = JSON.parse(newXHR.responseText);
          if (that.oneSayLabel && that.oneSayLabel.string != null) that.oneSayLabel.string = response.hitokoto + ' -- ' + response.from;else if (oneSayLabel && oneSayLabel.string != null) oneSayLabel.string = response.hitokoto + ' -- ' + response.from;
        }
      };

      newXHR.open("get", url, true);
      newXHR.send();
    }, this);
  },
  //授权登录显示关卡列表
  loginLevelList: function loginLevelList() {
    window.loginType = 'wechat';
    var CanvasNode = cc.find('Canvas');

    if (!CanvasNode) {
      cc.console('find Canvas error');
      return;
    }

    var onResourceLoaded = function onResourceLoaded(errorMessage, loadedResource) {
      if (errorMessage) {
        console.log('Prefab error:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        console.log('Prefab error');
        return;
      }

      var newMyPrefab = cc.instantiate(loadedResource);
      CanvasNode.addChild(newMyPrefab);
    };

    cc.loader.loadRes('levelLayout', onResourceLoaded);
  },
  //不登录登录显示关卡列表
  visitorLevelList: function visitorLevelList() {
    window.loginType = 'visitor';
    var CanvasNode = cc.find('Canvas');

    if (!CanvasNode) {
      cc.console('find Canvas error');
      return;
    }

    var onResourceLoaded = function onResourceLoaded(errorMessage, loadedResource) {
      if (errorMessage) {
        console.log('Prefab error:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        console.log('Prefab error');
        return;
      }

      var newMyPrefab = cc.instantiate(loadedResource);
      CanvasNode.addChild(newMyPrefab);
    };

    cc.loader.loadRes('levelLayout', onResourceLoaded); // let levelList = cc.instantiate(this.levelLayout);
    // this.node.addChild(levelList);
  },
  showReviewLevel: function showReviewLevel() {
    var that = this;
    var CanvasNode = cc.find('Canvas');
    var reviewPage = 1,
        reviewPageSize = 50;

    if (!CanvasNode) {
      cc.console('find Canvas error');
      return;
    }

    var onResourceLoaded = function onResourceLoaded(errorMessage, loadedResource) {
      if (errorMessage) {
        console.log('Prefab error:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        console.log('Prefab error');
        return;
      }

      var newMyPrefab = cc.instantiate(loadedResource);
      var content = cc.find('reviewLevelList/view/content', newMyPrefab);
      cc.find('close', newMyPrefab).on("click", function () {
        newMyPrefab.removeFromParent();
        newMyPrefab.destroy();
      }, this);

      if (that.rankItem == null) {
        cc.loader.loadRes('rankItem', function (err, resource) {
          that.rankItem = cc.instantiate(resource);
          that.renderReviewLevelList(content, reviewPage, reviewPageSize);
        });
      } else {
        that.renderReviewLevelList(content, reviewPage, reviewPageSize);
      }

      cc.find('reviewLevelList', newMyPrefab).on('bounce-bottom', function () {
        reviewPage++;
        that.renderReviewLevelList(content, reviewPage, reviewPageSize);
      }, this);
      CanvasNode.addChild(newMyPrefab);
    };

    cc.loader.loadRes('reviewLayout', onResourceLoaded);
  },
  renderReviewLevelList: function renderReviewLevelList(content, page, pageSize) {
    var that = this;
    var currentItemNum = content.childrenCount;

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      _common.Loading.show();

      wx.request({
        url: cloudFunctionBaseUrl + "/queryReviewLevel",
        method: 'POST',
        data: {
          page: page,
          pageSize: pageSize
        },
        success: function success(res) {
          _common.Loading.hide();

          var rankItem = null;

          if (res && res.data.data.length > 0) {
            for (var i = 1; i <= res.data.data.length; i++) {
              (function (i) {
                var data = res.data.data[i - 1];
                var node = cc.instantiate(that.rankItem);
                if (rankItem == null) rankItem = node;
                node.getChildByName('tdRank').getComponent(cc.Label).string = i + currentItemNum;
                node.getChildByName('tdDate').getComponent(cc.Label).string = (0, _common.formateRankTime)(data.createTime);
                node.getChildByName('tdLevel').getComponent(cc.Label).string = data.useStepNum;

                if (data.portrait) {
                  cc.assetManager.loadRemote(data.portrait + '?aaa=aa.jpg', function (err, texture) {
                    var sprite = new cc.SpriteFrame(texture);
                    cc.find('mask/Image', node.getChildByName('tdPortrait')).getComponent(cc.Sprite).spriteFrame = sprite;
                  });
                }

                if (data.nickName) {
                  node.getChildByName('tdName').getComponent(cc.Label).string = " " + data.nickName + " ";
                }

                node.on('touchend', function (t) {
                  if (window.wxLoginBtn) window.wxLoginBtn.destroy();
                  wx.setStorage({
                    key: 'reviewLevel',
                    data: data.content,
                    success: function success() {
                      window.uploadInfo = {};
                      window.from = 'review';
                      window.reviewId = data._id;
                      window.uploadInfo.appId = data.appId;
                      window.uploadInfo.nickName = data.nickName;
                      window.uploadInfo.portrait = data.portrait;
                      window.uploadInfo.createTime = data.createTime;
                      cc.director.loadScene("game");
                    }
                  });
                }, this);
                content.addChild(node);
              })(i);
            }

            content.height = content.childrenCount * rankItem.height;
          } else {
            (0, _common.Toast)("没有更多数据了", 1500);
          }
        },
        error: function error() {
          _common.Loading.hide();
        }
      }); // wx.cloud.callFunction({
      //     name: 'queryReviewLevel',
      //     data:{
      //         page,
      //         pageSize
      //     }
      // }).then(res => {
      //     Loading.hide();
      //     let rankItem = null;
      //     if(res && res.result.data.length>0){
      //         for(var i = 1; i<= res.result.data.length; i++){
      //
      //             (function(i){
      //                 var data =  res.result.data[i-1];
      //                 let node = cc.instantiate(that.rankItem);
      //                 if(rankItem == null) rankItem = node;
      //                 node.getChildByName('tdRank').getComponent(cc.Label).string = i+currentItemNum;
      //                 node.getChildByName('tdDate').getComponent(cc.Label).string = formateRankTime(data.createTime);
      //                 node.getChildByName('tdLevel').getComponent(cc.Label).string = data.useStepNum;
      //                 if(data.portrait){
      //                     cc.assetManager.loadRemote(data.portrait+'?aaa=aa.jpg',  function (err, texture) {
      //                         var sprite  = new cc.SpriteFrame(texture);
      //                         cc.find('mask/Image',node.getChildByName('tdPortrait')).getComponent(cc.Sprite).spriteFrame = sprite;
      //                     });
      //                 }
      //                 if(data.nickName){
      //                     node.getChildByName('tdName').getComponent(cc.Label).string = " "+data.nickName+" ";
      //                 }
      //                 node.on('touchend',
      //                     function(t){
      //
      //                         if(window.wxLoginBtn ) window.wxLoginBtn.destroy();
      //                         wx.setStorage({
      //                             key: 'reviewLevel',
      //                             data: data.content,
      //                             success(){
      //                                 window.uploadInfo = {};
      //                                 window.from = 'review';
      //                                 window.reviewId = data._id;
      //                                 window.uploadInfo.appId = data.appId;
      //                                 window.uploadInfo.nickName = data.nickName;
      //                                 window.uploadInfo.portrait = data.portrait;
      //                                 window.uploadInfo.createTime = data.createTime;
      //
      //                                 cc.director.loadScene("game");
      //                             }
      //                         })
      //
      //                     },this)
      //                 content.addChild(node);
      //             })(i)
      //
      //
      //         }
      //         content.height = content.childrenCount * rankItem.height;
      //     }else{
      //         Toast("没有更多数据了",1500)
      //     }
      //
      //
      // }).catch(err => {
      //     console.error(err)
      //     Loading.hide();
      // })
    }
  },
  showMainRank: function showMainRank() {
    var that = this;
    var CanvasNode = cc.find('Canvas');
    var rankPage = 1,
        rankPageSize = 50;

    if (!CanvasNode) {
      cc.console('find Canvas error');
      return;
    }

    var onResourceLoaded = function onResourceLoaded(errorMessage, loadedResource) {
      if (errorMessage) {
        console.log('Prefab error:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        console.log('Prefab error');
        return;
      }

      var newMyPrefab = cc.instantiate(loadedResource);
      var content = cc.find('rankList/view/content', newMyPrefab);
      cc.find('close', newMyPrefab).on("click", function () {
        newMyPrefab.removeFromParent();
        newMyPrefab.destroy();
      }, this);

      if (that.rankItem == null) {
        cc.loader.loadRes('rankItem', function (err, resource) {
          that.rankItem = cc.instantiate(resource);
          that.renderMainRankList(content, rankPage, rankPageSize);
        });
      } else {
        that.renderMainRankList(content, rankPage, rankPageSize);
      }

      cc.find('rankList', newMyPrefab).on('bounce-bottom', function () {
        rankPage++;
        that.renderMainRankList(content, rankPage, rankPageSize);
      }, this);
      CanvasNode.addChild(newMyPrefab);
    };

    cc.loader.loadRes('rankLayout', onResourceLoaded);
  },
  renderMainRankList: function renderMainRankList(content, page, pageSize) {
    var that = this;
    var currentItemNum = content.childrenCount;

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      _common.Loading.show();

      wx.request({
        url: cloudFunctionBaseUrl + "/queryUser",
        method: 'POST',
        data: {
          page: page,
          pageSize: pageSize
        },
        success: function success(res) {
          _common.Loading.hide();

          var rankItem = null;

          if (res && res.data.data.length > 0) {
            var _loop = function _loop() {
              data = res.data.data[i - 1];
              var node = cc.instantiate(that.rankItem);
              if (rankItem == null) rankItem = node;
              node.getChildByName('tdRank').getComponent(cc.Label).string = i + currentItemNum;
              node.getChildByName('tdDate').getComponent(cc.Label).string = (0, _common.formateRankTime)(data.createTime);
              node.getChildByName('tdLevel').getComponent(cc.Label).string = data.levelFinishNum;

              if (data.portrait) {
                cc.assetManager.loadRemote(data.portrait + '?aaa=aa.jpg', function (err, texture) {
                  var sprite = new cc.SpriteFrame(texture);
                  cc.find('mask/Image', node.getChildByName('tdPortrait')).getComponent(cc.Sprite).spriteFrame = sprite;
                });
              }

              if (data.nickName) {
                node.getChildByName('tdName').getComponent(cc.Label).string = " " + data.nickName + " ";
              }

              content.addChild(node);
            };

            for (var i = 1; i <= res.data.data.length; i++) {
              var data;

              _loop();
            }

            content.height = content.childrenCount * rankItem.height;
          } else {
            (0, _common.Toast)("没有更多数据了", 1500);
          }
        },
        error: function error() {
          _common.Loading.hide();
        }
      }); // wx.cloud.callFunction({
      //     name: 'queryUser',
      //     data:{
      //         page,
      //         pageSize
      //     }
      // }).then(res => {
      //     Loading.hide();
      //     let rankItem = null;
      //     if(res && res.result.data.length>0){
      //         for(var i = 1; i<= res.result.data.length; i++){
      //             var data =  res.result.data[i-1];
      //             let node = cc.instantiate(that.rankItem);
      //             if(rankItem == null) rankItem = node;
      //             node.getChildByName('tdRank').getComponent(cc.Label).string = i+currentItemNum;
      //             node.getChildByName('tdDate').getComponent(cc.Label).string = formateRankTime(data.createTime);
      //             node.getChildByName('tdLevel').getComponent(cc.Label).string = data.levelFinishNum;
      //             if(data.portrait){
      //                 cc.assetManager.loadRemote(data.portrait+'?aaa=aa.jpg',  function (err, texture) {
      //                     var sprite  = new cc.SpriteFrame(texture);
      //                     cc.find('mask/Image',node.getChildByName('tdPortrait')).getComponent(cc.Sprite).spriteFrame = sprite;
      //                 });
      //             }
      //             if(data.nickName){
      //                 node.getChildByName('tdName').getComponent(cc.Label).string = " "+data.nickName+" ";
      //             }
      //             content.addChild(node);
      //         }
      //         content.height = content.childrenCount * rankItem.height;
      //     }else{
      //         Toast("没有更多数据了",1500)
      //     }
      //
      //
      // }).catch(err => {
      //     console.error(err)
      //     Loading.hide();
      // })
    }
  },
  getUserInfo: function getUserInfo() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      //获取缓存appId判断是否第一次进入游戏
      wx.getStorage({
        key: 'appId',
        success: function success(res) {
          window.user.appId = res.data;
          wx.request({
            url: cloudFunctionBaseUrl + "/queryUser",
            method: 'POST',
            data: {
              appId: window.user.appId
            },
            success: function success(res) {
              if (res && res.data.data.length > 0) {
                window.user.levelFinishNum = res.data.data[0].levelFinishNum;
                window.user.classicsLevelNum = res.data.data[0].classicsLevelNum;
                window.user.netLevelNum = res.data.data[0].netLevelNum;
                window.user.roles = res.data.data[0].roles;
              }
            }
          }); // wx.cloud.callFunction({
          //     name: 'queryUser',
          //     data:{
          //         appId: window.user.appId
          //     }
          // }).then(res => {
          //     console.log('wxcloud-success')
          //     console.log(res)
          //     if(res && res.result.data.length>0){
          //         window.user.levelFinishNum = res.result.data[0].levelFinishNum;
          //         window.user.classicsLevelNum = res.result.data[0].classicsLevelNum;
          //         window.user.netLevelNum = res.result.data[0].netLevelNum;
          //         window.user.roles = res.result.data[0].roles;
          //
          //     }
          //
          // }).catch(err => {
          //     console.error(err)
          // })
        },
        fail: function fail(err) {
          wx.login({
            success: function success(res) {
              if (res.code) {
                wx.request({
                  url: cloudFunctionBaseUrl + "/login",
                  method: 'POST',
                  data: {
                    code: res.code
                  },
                  success: function success(res) {
                    console.log(res);

                    if (res && res.data) {
                      wx.setStorage({
                        key: "appId",
                        data: res.data
                      });
                      window.user.appId = res.data;
                      window.user.classicsLevelNum = 0;
                      window.user.netLevelNum = 0;
                      window.user.levelFinishNum = 0;
                      window.user.roles = '';
                      wx.request({
                        url: cloudFunctionBaseUrl + "/queryUser",
                        method: 'POST',
                        data: {
                          appId: window.user.appId
                        },
                        success: function success(res) {
                          if (res && res.data.data.length <= 0) {
                            //注册用户信息
                            wx.request({
                              url: cloudFunctionBaseUrl + "/addUser",
                              method: 'POST',
                              data: {
                                appId: window.user.appId,
                                nickName: window.loginInfo.nickName ? window.loginInfo.nickName : '游客' + window.user.appId.substring(window.user.appId.length - 5),
                                portrait: window.loginInfo.avatarUrl
                              },
                              success: function success(res) {}
                            });
                          } else {
                            window.user.levelFinishNum = res.data.data[0].levelFinishNum;
                            window.user.classicsLevelNum = res.data.data[0].classicsLevelNum;
                            window.user.netLevelNum = res.data.data[0].netLevelNum;
                            window.user.roles = res.data.data[0].roles;
                          }
                        }
                      });
                    }
                  }
                });
              }
            }
          }); // wx.cloud.callFunction({
          //     name: 'login'
          // }).then(res => {
          //
          //     if(res && res.result){
          //         wx.setStorage({
          //             key: "appId",
          //             data:res.result.openid
          //         })
          //         window.user.appId = res.result.openid;
          //         window.user.classicsLevelNum = 0;
          //         window.user.netLevelNum = 0;
          //         window.user.levelFinishNum = 0;
          //         window.user.roles = '';
          //         // wx.request({
          //         //     url: cloudFunctionBaseUrl+"/queryUser",
          //         //     method: 'POST',
          //         //     data:{
          //         //
          //         //     },
          //         //     success: (res) => {
          //         //
          //         //     }
          //         // });
          //         wx.cloud.callFunction({
          //             name: 'queryUser',
          //             data:{
          //                 appId: window.user.appId
          //             }
          //         }).then(res => {
          //
          //             if(res && res.result.data.length<=0){
          //                 //注册用户信息
          //                 // wx.request({
          //                 //     url: cloudFunctionBaseUrl+"/queryUser",
          //                 //     method: 'POST',
          //                 //     data:{
          //                 //
          //                 //     },
          //                 //     success: (res) => {
          //                 //
          //                 //     }
          //                 // });
          //                 wx.cloud.callFunction({
          //                     name: 'addUser',
          //                     data: {
          //                         appId: window.user.appId,
          //                         nickName: window.loginInfo.nickName? window.loginInfo.nickName:'游客'+window.user.appId.substring(window.user.appId.length-5),
          //                         portrait: window.loginInfo.avatarUrl
          //                     }
          //
          //                 }).then(res => {
          //                     console.log(res)
          //                 }).catch(err => {
          //                     console.error(err)
          //                 })
          //             }else{
          //                 window.user.levelFinishNum = res.result.data[0].levelFinishNum;
          //                 window.user.classicsLevelNum = res.result.data[0].classicsLevelNum;
          //                 window.user.netLevelNum = res.result.data[0].netLevelNum;
          //                 window.user.roles = res.result.data[0].roles;
          //             }
          //
          //         }).catch(err => {
          //             console.error(err)
          //         })
          //
          //     }
          // }).catch(err => {
          //     console.error(err)
          // })
        }
      });
    }
  },
  mainBindEvent: function mainBindEvent() {
    var that = this; //添加授权按钮

    (0, _common.wxLogin)(function (res) {
      window.loginInfo = {
        avatarUrl: res.avatarUrl,
        nickName: res.nickName
      };
    }, function () {
      console.log('授权失败');
    }, this.loginplay.node); //开始游戏按钮

    if (this.loginplay == null) this.loginplay = cc.find('Canvas/mainBg/loginplay').getComponent(cc.Button);
    this.loginplay.node.on('click', this.loginLevelList, this);
    if (this.visitorplay == null) this.visitorplay = cc.find('Canvas/mainBg/visitorplay').getComponent(cc.Button);
    this.visitorplay.node.on('click', this.visitorLevelList, this);
    if (this.mainRank == null) this.mainRank = cc.find('Canvas/mainBg/mainRank').getComponent(cc.Button);
    this.mainRank.node.on('click', this.showMainRank, this);
    if (this.reviewLevel == null) this.reviewLevel = cc.find('Canvas/mainBg/reviewLevel').getComponent(cc.Button);
    this.reviewLevel.node.on('click', this.showReviewLevel, this);
    if (this.buildLevel == null) this.buildLevel = cc.find('Canvas/mainBg/buildLevel').getComponent(cc.Button);
    this.buildLevel.node.on('click', function () {
      window.buildLevel = new Array();
      if (window.wxLoginBtn) window.wxLoginBtn.destroy();
      cc.director.loadScene("build");
    }, this);
    if (this.mainShare == null) this.mainShare = cc.find('Canvas/mainBg/mainShare').getComponent(cc.Button);
    this.mainShare.node.on('click', function () {
      if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        var titString = '快来挑战“益智推箱”小游戏吧！';
        wx.shareAppMessage({
          title: titString,
          // imageUrl: data.url,
          query: '分享'
        });
      }
    }, this);
    if (this.setting == null) this.setting = cc.find('Canvas/mainBg/setting').getComponent(cc.Button);
    this.setting.node.on('click', function () {
      var CanvasNode = cc.find('Canvas');

      if (!CanvasNode) {
        cc.console('find Canvas error');
        return;
      }

      var onResourceLoaded = function onResourceLoaded(errorMessage, loadedResource) {
        if (errorMessage) {
          console.log('Prefab error:' + errorMessage);
          return;
        }

        if (!(loadedResource instanceof cc.Prefab)) {
          console.log('Prefab error');
          return;
        }

        var newMyPrefab = cc.instantiate(loadedResource);
        cc.find('settingContain/closeSetting', newMyPrefab).on('click', function () {
          newMyPrefab.removeFromParent();
          newMyPrefab.destroy();
        }, this);
        var touchMove = cc.find('settingContain/touchMove/Background/Label', newMyPrefab).getComponent(cc.Label);
        var clickMove = cc.find('settingContain/clickMove/Background/Label', newMyPrefab).getComponent(cc.Label);
        var relast = cc.find('settingContain/relast/Background/Label', newMyPrefab).getComponent(cc.Label);
        var music = cc.find('settingContain/music/Background/Label', newMyPrefab).getComponent(cc.Label);
        if (window.setting.touchMove) touchMove.string = '关闭触摸移动';else touchMove.string = '开启触摸移动';
        if (window.setting.clickMove) clickMove.string = '关闭按键移动';else clickMove.string = '开启按键移动';
        if (window.setting.relast) relast.string = '关闭回退功能';else relast.string = '开启回退功能';
        if (window.setting.music) music.string = '关闭音效';else music.string = '开启音效';
        cc.find('settingContain/touchMove', newMyPrefab).on('click', function () {
          if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.getStorage({
              key: 'setting',
              success: function success(res) {
                //触摸&点击开启
                if (res.data.touchMove && res.data.clickMove) {
                  window.setting.touchMove = false;
                  touchMove.string = '开启触摸移动';
                } //触摸关闭 点击开启
                else if (!res.data.touchMove && res.data.clickMove) {
                    window.setting.touchMove = true;
                    touchMove.string = '关闭触摸移动';
                  } else {
                    //提示至少开启一种移动方式
                    (0, _common.Toast)('至少开启一种移动方式!', 1500);
                  }

                wx.setStorage({
                  key: 'setting',
                  data: window.setting
                });
              }
            });
          }
        }, this);
        cc.find('settingContain/clickMove', newMyPrefab).on('click', function () {
          if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.getStorage({
              key: 'setting',
              success: function success(res) {
                //触摸&点击开启
                if (res.data.touchMove && res.data.clickMove) {
                  window.setting.clickMove = false;
                  clickMove.string = '开启按键移动';
                } //触摸关闭 点击开启
                else if (res.data.touchMove && !res.data.clickMove) {
                    window.setting.clickMove = true;
                    clickMove.string = '关闭按键移动';
                  } else {
                    //提示至少开启一种移动方式
                    (0, _common.Toast)('至少开启一种移动方式!', 1500);
                  }

                wx.setStorage({
                  key: 'setting',
                  data: window.setting
                });
              }
            });
          }
        }, this);
        cc.find('settingContain/relast', newMyPrefab).on('click', function () {
          if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.getStorage({
              key: 'setting',
              success: function success(res) {
                //回退功能
                if (res.data.relast) {
                  window.setting.relast = false;
                  relast.string = '开启回退功能';
                } else {
                  window.setting.relast = true;
                  relast.string = '关闭回退功能';
                }

                wx.setStorage({
                  key: 'setting',
                  data: window.setting
                });
              }
            });
          }
        }, this);
        cc.find('settingContain/music', newMyPrefab).on('click', function () {
          if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.getStorage({
              key: 'setting',
              success: function success(res) {
                //回退功能
                if (res.data.music) {
                  window.setting.music = false;
                  music.string = '开启音效';
                } else {
                  window.setting.music = true;
                  music.string = '关闭音效';
                }

                wx.setStorage({
                  key: 'setting',
                  data: window.setting,
                  complete: function complete() {
                    that.setMusic();
                  }
                });
              }
            });
          }
        }, this);
        CanvasNode.addChild(newMyPrefab);
      };

      cc.loader.loadRes('settingDialog', onResourceLoaded);
    }, this);

    if (cc.sys.platform === cc.sys.WECHAT_GAME && !window.gameCircle) {
      var sysInfo = wx.getSystemInfoSync(); //游戏圈按钮

      window.gameCircle = wx.createGameClubButton({
        icon: 'white',
        style: {
          left: sysInfo.windowWidth * 0.9 - 20,
          top: sysInfo.windowHeight * 0.12,
          width: 40,
          height: 40
        }
      });
    }
  },
  initSetting: function initSetting() {
    var that = this;

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.getStorage({
        key: 'setting',
        success: function success(res) {
          window.setting = res.data;
        },
        fail: function fail(err) {
          window.setting = {
            touchMove: true,
            clickMove: true,
            relast: false,
            music: false
          };
          wx.setStorage({
            key: 'setting',
            data: window.setting
          });
        },
        complete: function complete() {
          that.setMusic();
        }
      });
    }
  },
  setMusic: function setMusic() {
    if (cc.sys.platform !== cc.sys.WECHAT_GAME) return;

    if (window.setting.music) {
      if (!window.bgMusic || !window.moveMusic) {
        window.bgMusic = wx.createInnerAudioContext();
        window.moveMusic = wx.createInnerAudioContext({
          useWebAudioImplement: true
        });
        cc.resources.load("music/bg_music", cc.AudioClip, null, function (err, clip) {
          window.bgMusic.src = clip.url;
          window.bgMusic.loop = true;
          if (window.bgMusic && !window.bgMusic.paused) window.bgMusic.pause();
          if (window.bgMusic && window.bgMusic.paused) window.bgMusic.play();
        });
        cc.resources.load("music/move_music", cc.AudioClip, null, function (err, clip) {
          window.moveMusic.src = clip.url;
          window.moveMusic.loop = false;
          window.moveMusic.playbackRate = 2;
        });
      }
    } else {
      if (window.bgMusic) {
        window.bgMusic.stop();
        window.bgMusic.destroy();
      }

      if (window.moveMusic) {
        window.moveMusic.stop();
        window.moveMusic.destroy();
      }

      window.bgMusic = null;
      window.moveMusic = null;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJiZ011c2ljIiwibW92ZU11c2ljIiwiY3JlYXRlU2NlbnNlVXBsb2FkQWQiLCJza2lwTGV2ZWxBZCIsImF1ZGl0TGV2ZWxBZCIsImNoZWNrU29sdXRpb25MZXZlbEFkIiwiZ2FtZUNpcmNsZSIsImNsb3VkRnVuY3Rpb25CYXNlVXJsIiwiZGVzdHJveSIsImNjIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4IiwiY2xvdWQiLCJpbml0IiwiY3JlYXRlSW50ZXJzdGl0aWFsQWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJhZFVuaXRJZCIsIm11bHRpdG9uIiwib25FcnJvciIsImVyciIsInVzZXIiLCJjbGFzc2ljc0xldmVsTnVtIiwibmV0TGV2ZWxOdW0iLCJsZXZlbEluZGV4IiwiYmdVcmxCYXNlIiwibGV2ZWxGaW5pc2hOdW0iLCJsb2dpbkluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uZVNheUxhYmVsIiwidHlwZSIsIkxhYmVsIiwibG9naW5wbGF5IiwiQnV0dG9uIiwidmlzaXRvcnBsYXkiLCJtYWluUmFuayIsImxldmVsTGF5b3V0IiwiUHJlZmFiIiwicmV2aWV3TGF5b3V0IiwicmV2aWV3TGV2ZWwiLCJidWlsZExldmVsIiwic2V0dGluZyIsIm1haW5TaGFyZSIsInJhbmtJdGVtIiwib25Mb2FkIiwibWFpbkJpbmRFdmVudCIsImZyb20iLCJnYW1lIiwib24iLCJFVkVOVF9TSE9XIiwicGF1c2VkIiwicGF1c2UiLCJwbGF5Iiwic3RhcnQiLCJ0aGF0IiwiTG9hZGluZyIsInNob3ciLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJ0b3RhbCIsImhpZGUiLCJlcnJvciIsInJlbW92ZVN0b3JhZ2UiLCJrZXkiLCJsb2FkSW1nIiwib25lU2F5IiwiZ2V0VXNlckluZm8iLCJpbml0U2V0dGluZyIsImNvbnRhaW5lciIsImZpbmQiLCJpbWdTZXJ2ZVVybCIsImltZ1VybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaW1hZ2VzIiwidXJsYmFzZSIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJ0ZXh0dXJlIiwic3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSIsInN0YXJOb2RlIiwiTm9kZSIsIm5hbWUiLCJzZXRQb3NpdGlvbiIsInN0YXJTcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzaXplTW9kZSIsIm5vZGUiLCJ3aWR0aCIsIndpblNpemUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiYWRkQ2hpbGQiLCJvcGFjaXR5VGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJvcGVuIiwic2VuZCIsImdldENvbXBvbmVudCIsInN0cmluZyIsImhpdG9rb3RvIiwibmV3WEhSIiwibG9naW5MZXZlbExpc3QiLCJsb2dpblR5cGUiLCJDYW52YXNOb2RlIiwiY29uc29sZSIsIm9uUmVzb3VyY2VMb2FkZWQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkZWRSZXNvdXJjZSIsImxvZyIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJsb2FkZXIiLCJsb2FkUmVzIiwidmlzaXRvckxldmVsTGlzdCIsInNob3dSZXZpZXdMZXZlbCIsInJldmlld1BhZ2UiLCJyZXZpZXdQYWdlU2l6ZSIsImNvbnRlbnQiLCJyZW1vdmVGcm9tUGFyZW50IiwicmVzb3VyY2UiLCJyZW5kZXJSZXZpZXdMZXZlbExpc3QiLCJwYWdlIiwicGFnZVNpemUiLCJjdXJyZW50SXRlbU51bSIsImNoaWxkcmVuQ291bnQiLCJsZW5ndGgiLCJpIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIiwidXNlU3RlcE51bSIsInBvcnRyYWl0IiwidCIsInd4TG9naW5CdG4iLCJzZXRTdG9yYWdlIiwidXBsb2FkSW5mbyIsInJldmlld0lkIiwiX2lkIiwiYXBwSWQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInNob3dNYWluUmFuayIsInJhbmtQYWdlIiwicmFua1BhZ2VTaXplIiwicmVuZGVyTWFpblJhbmtMaXN0IiwiZ2V0U3RvcmFnZSIsInJvbGVzIiwiZmFpbCIsImxvZ2luIiwiY29kZSIsInN1YnN0cmluZyIsIkFycmF5IiwidGl0U3RyaW5nIiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJxdWVyeSIsInRvdWNoTW92ZSIsImNsaWNrTW92ZSIsInJlbGFzdCIsIm11c2ljIiwiY29tcGxldGUiLCJzZXRNdXNpYyIsInN5c0luZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsImNyZWF0ZUdhbWVDbHViQnV0dG9uIiwiaWNvbiIsInN0eWxlIiwibGVmdCIsIndpbmRvd1dpZHRoIiwidG9wIiwid2luZG93SGVpZ2h0IiwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQiLCJ1c2VXZWJBdWRpb0ltcGxlbWVudCIsInJlc291cmNlcyIsImxvYWQiLCJBdWRpb0NsaXAiLCJjbGlwIiwic3JjIiwibG9vcCIsInBsYXliYWNrUmF0ZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RBOztBQWhEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxHQUFQLEdBQWEseUJBQWI7QUFDQUQsTUFBTSxDQUFDRSxPQUFQLEdBQWUsSUFBZjtBQUNBRixNQUFNLENBQUNHLFNBQVAsR0FBaUIsSUFBakI7QUFDQUgsTUFBTSxDQUFDSSxvQkFBUCxHQUE4QixJQUE5QjtBQUNBSixNQUFNLENBQUNLLFdBQVAsR0FBcUIsSUFBckI7QUFDQUwsTUFBTSxDQUFDTSxZQUFQLEdBQXNCLElBQXRCO0FBQ0FOLE1BQU0sQ0FBQ08sb0JBQVAsR0FBOEIsSUFBOUI7QUFDQVAsTUFB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LFNBQVAsQ0FBaUJvTSxJQUFqQixHQUF3QixLQUF4QjtBQUNBdk0sVUFBQUEsTUFBTSxDQUFDRyxTQUFQLENBQWlCcU0sWUFBakIsR0FBZ0MsQ0FBaEM7QUFDSCxTQUpEO0FBS0g7QUFFSixLQWpCRCxNQWlCSztBQUNELFVBQUd4TSxNQUFNLENBQUNFLE9BQVYsRUFBa0I7QUFDZEYsUUFBQUEsTUFBTSxDQUFDRSxPQUFQLENBQWV1TSxJQUFmO0FBQ0F6TSxRQUFBQSxNQUFNLENBQUNFLE9BQVAsQ0FBZVEsT0FBZjtBQUNIOztBQUNELFVBQUdWLE1BQU0sQ0FBQ0csU0FBVixFQUFvQjtBQUNoQkgsUUFBQUEsTUFBTSxDQUFDRyxTQUFQLENBQWlCc00sSUFBakI7QUFDQXpNLFFBQUFBLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQk8sT0FBakI7QUFDSDs7QUFDRFYsTUFBQUEsTUFBTSxDQUFDRSxPQUFQLEdBQWlCLElBQWpCO0FBQ0FGLE1BQUFBLE1BQU0sQ0FBQ0csU0FBUCxHQUFtQixJQUFuQjtBQUNIO0FBQ0o7QUFyNUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG53aW5kb3cuZW52ID0gXCJjbG91ZDEtNWd2YnVpeTNkZDk5ZjYzY1wiXHJcbndpbmRvdy5iZ011c2ljPW51bGw7XHJcbndpbmRvdy5tb3ZlTXVzaWM9bnVsbDtcclxud2luZG93LmNyZWF0ZVNjZW5zZVVwbG9hZEFkID0gbnVsbDtcclxud2luZG93LnNraXBMZXZlbEFkID0gbnVsbDtcclxud2luZG93LmF1ZGl0TGV2ZWxBZCA9IG51bGw7XHJcbndpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZCA9IG51bGw7XHJcbndpbmRvdy5nYW1lQ2lyY2xlID0gbnVsbDtcclxud2luZG93LmNsb3VkRnVuY3Rpb25CYXNlVXJsID0gJ2h0dHBzOi8vYWMzMjc5MTctZWQwZC00MTk1LTgyOTAtNjVmYWM1OGUyYmY5LmJzcGFwcC5jb20nO1xyXG5pZih3aW5kb3cuYXVkaXRMZXZlbEFkKSB3aW5kb3cuYXVkaXRMZXZlbEFkLmRlc3Ryb3koKTtcclxuaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICB3eC5jbG91ZC5pbml0KHtlbnY6IHdpbmRvdy5lbnZ9KVxyXG4gICAgLy/lub/lkYrliJ3lp4vljJZcclxuICAgIGlmICh3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCl7XHJcbiAgICAgICAgd2luZG93LnNraXBMZXZlbEFkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtZDQwOGVhZGY5YWM5YzBhOScsXHJcbiAgICAgICAgICAgIG11bHRpdG9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQub25FcnJvcihlcnIgPT4ge30pO1xyXG4gICAgICAgIHdpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LTExMGQwOTdkZjViYzhlYjAnLFxyXG4gICAgICAgICAgICBtdWx0aXRvbjogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkLm9uRXJyb3IoZXJyID0+IHt9KTtcclxuICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWU3ZjIzYjUyYzlkNTkzMTUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQub25FcnJvcihlcnIgPT4ge3dpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCA9bnVsbDt9KTtcclxuICAgIH1cclxufVxyXG53aW5kb3cudXNlciA9IHt9O1xyXG53aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5uZXRMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5sZXZlbEluZGV4ID0gMDtcclxud2luZG93LmJnVXJsQmFzZSA9ICcnO1xyXG53aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcbndpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICBhdmF0YXJVcmw6IG51bGwsXHJcbiAgICBuaWNrTmFtZTogbnVsbFxyXG59O1xyXG53aW5kb3cuZ2FtZUNpcmNsZSA9IG51bGw7XHJcblxyXG5pbXBvcnQge3d4TG9naW4sVG9hc3QsTG9hZGluZyxmb3JtYXRlUmFua1RpbWV9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBvbmVTYXlMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5wbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgdmlzaXRvcnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICBtYWluUmFuazogY2MuQnV0dG9uLFxyXG4gICAgICAgIGxldmVsTGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcmV2aWV3TGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcmV2aWV3TGV2ZWw6IGNjLkJ1dHRvbixcclxuICAgICAgICBidWlsZExldmVsOiBjYy5CdXR0b24sXHJcbiAgICAgICAgc2V0dGluZzogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5TaGFyZTogY2MuQnV0dG9uLFxyXG4gICAgICAgIHJhbmtJdGVtOmNjLlByZWZhYixcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTDpFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvL+WKoOi9veS4gOiogFxyXG4gICAgICAgIC8vICB0aGlzLm9uZVNheSgpO1xyXG4gICAgICAgICB0aGlzLm1haW5CaW5kRXZlbnQoKTtcclxuICAgICAgICAgd2luZG93LmZyb20gPSAnbWFpbic7XHJcbiAgICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLph43mlrDov5Tlm57muLjmiI9cIik7XHJcbiAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiAhd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgIH0sdGhpcyk7XHJcblx0XHQgXHJcblx0XHQgXHJcblx0XHQgXHJcblx0XHQgXHJcbiAgICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG5cclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9nZXRDbGFzc2ljc0xldmVsTnVtXCIsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e30sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0gPSByZXMuZGF0YS50b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0sZXJyb3I6KGVycik9PntcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAvLyAgICAgbmFtZTogJ2dldENsYXNzaWNzTGV2ZWxOdW0nXHJcbiAgICAgICAgICAgIC8vIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5jbGFzc2ljc0xldmVsTnVtID0gcmVzLnJlc3VsdC50b3RhbDtcclxuICAgICAgICAgICAgLy8gICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIlxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLmxvYWRJbWcoKTtcclxuICAgICAgICB0aGlzLm9uZVNheSgpO1xyXG5cclxuICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U2V0dGluZygpO1xyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGxvYWRJbWc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2JpbmdCZycpOy8v5Zu+54mH5ZGI546w5L2N572uXHJcbiAgICAgICAgdmFyIGltZ1NlcnZlVXJsID0gJ2h0dHBzOi8vd3d3LmJpbmcuY29tL0hQSW1hZ2VBcmNoaXZlLmFzcHg/Zm9ybWF0PWpzJmlkeD0wJm49MSc7XHJcbiAgICAgICAgdmFyIGltZ1VybCA9ICcnO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgaW1nVXJsID0gJ2h0dHBzOi8vY24uYmluZy5jb20nICsgcmVzcG9uc2UuaW1hZ2VzWzBdLnVybGJhc2UgKyAnXzcyMHgxMjgwLmpwZydcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ1VybEJhc2UgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbScgKyByZXNwb25zZS5pbWFnZXNbMF0udXJsYmFzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShpbWdVcmwsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/liJvlu7rkuIDkuKrkvb/nlKjlm77niYfotYTmupDnmoTmlrDoioLngrnlr7nosaFcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3Rhck5vZGUgPSBuZXcgY2MuTm9kZSgpOyAvL+WIm+W7uuS4gOS4quaWsOiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLm5hbWUgPSBcInN0YXIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUuc2V0UG9zaXRpb24oMCwwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhclNwcml0ZSA9IHN0YXJOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpOyAvL+WinuWKoOeyvueBtee7hOS7tlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5zaXplTW9kZSA9ICdDVVNUT00nO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUubm9kZS53aWR0aCA9IGNjLndpblNpemUud2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLm5vZGUuaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoc3Rhck5vZGUpOyAvL+WcuuaZr+S4reWinuWKoOaWsOiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eVRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcGFjaXR5Pj0yNTUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChvcGFjaXR5VGltZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSw1KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiZ2V0XCIsIGltZ1NlcnZlVXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSxcclxuICAgIG9uZVNheSgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgdXJsID0gXCJodHRwczovL3YxLmhpdG9rb3RvLmNuL1wiO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBsZXQgb25lU2F5TGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL21haW5CZy9vbmVTYXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgaWYodGhhdC5vbmVTYXlMYWJlbCAmJiB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsKSB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYob25lU2F5TGFiZWwgJiYgb25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwgKSBvbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgdGhpcy5vbmVTYXlMYWJlbC5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBuZXdYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgbmV3WEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdYSFIucmVhZHlTdGF0ZSA9PSA0ICYmIChuZXdYSFIuc3RhdHVzID49IDIwMCAmJiBuZXdYSFIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICBKU09OLnBhcnNlKG5ld1hIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoYXQub25lU2F5TGFiZWwgJiYgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCkgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYob25lU2F5TGFiZWwgJiYgb25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwgKSBvbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBuZXdYSFIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBuZXdYSFIuc2VuZCgpO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICB9LFxyXG4gICAgLy/mjojmnYPnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIGxvZ2luTGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgd2luZG93LmxvZ2luVHlwZSA9ICd3ZWNoYXQnO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsZXZlbExheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/kuI3nmbvlvZXnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIHZpc2l0b3JMZXZlbExpc3QoKXtcclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3Zpc2l0b3InO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsZXZlbExheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGxldmVsTGlzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxMYXlvdXQpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbExpc3QpO1xyXG4gICAgfSxcclxuICAgIHNob3dSZXZpZXdMZXZlbCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciByZXZpZXdQYWdlID0gMSxyZXZpZXdQYWdlU2l6ZSA9IDUwO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2MuZmluZCgncmV2aWV3TGV2ZWxMaXN0L3ZpZXcvY29udGVudCcsbmV3TXlQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY2xvc2UnLG5ld015UHJlZmFiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGlmKHRoYXQucmFua0l0ZW0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0l0ZW0nLCBmdW5jdGlvbiAoZXJyLHJlc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yYW5rSXRlbSA9IGNjLmluc3RhbnRpYXRlKHJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclJldmlld0xldmVsTGlzdChjb250ZW50LHJldmlld1BhZ2UscmV2aWV3UGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscmV2aWV3UGFnZSxyZXZpZXdQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZmluZCgncmV2aWV3TGV2ZWxMaXN0JyxuZXdNeVByZWZhYikub24oJ2JvdW5jZS1ib3R0b20nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3UGFnZSsrO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJSZXZpZXdMZXZlbExpc3QoY29udGVudCxyZXZpZXdQYWdlLHJldmlld1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmV2aWV3TGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIHJlbmRlclJldmlld0xldmVsTGlzdChjb250ZW50LHBhZ2UscGFnZVNpemUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY3VycmVudEl0ZW1OdW0gPSBjb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9xdWVyeVJldmlld0xldmVsXCIsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLmRhdGEuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGk8PSByZXMuZGF0YS5kYXRhLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSAgcmVzLmRhdGEuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhhdC5yYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZERhdGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZvcm1hdGVSYW5rVGltZShkYXRhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEudXNlU3RlcE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnBvcnRyYWl0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZGF0YS5wb3J0cmFpdCsnP2FhYT1hYS5qcGcnLCAgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdtYXNrL0ltYWdlJyxub2RlLmdldENoaWxkQnlOYW1lKCd0ZFBvcnRyYWl0JykpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5uaWNrTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIrZGF0YS5uaWNrTmFtZStcIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5vbigndG91Y2hlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih0KXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3Jldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mbyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdyZXZpZXcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmV2aWV3SWQgPSBkYXRhLl9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZEluZm8uYXBwSWQgPSBkYXRhLmFwcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZSA9IGRhdGEubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRJbmZvLnBvcnRyYWl0ID0gZGF0YS5wb3J0cmFpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZEluZm8uY3JlYXRlVGltZSA9IGRhdGEuY3JlYXRlVGltZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoaSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuayoeacieabtOWkmuaVsOaNruS6hlwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdxdWVyeVJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgLy8gICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIChmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciBkYXRhID0gIHJlcy5yZXN1bHQuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGF0LnJhbmtJdGVtKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKHJhbmtJdGVtID09IG51bGwpIHJhbmtJdGVtID0gbm9kZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkRGF0ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0ZVJhbmtUaW1lKGRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhLnVzZVN0ZXBOdW07XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZihkYXRhLnBvcnRyYWl0KXtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShkYXRhLnBvcnRyYWl0Kyc/YWFhPWFhLmpwZycsICBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdtYXNrL0ltYWdlJyxub2RlLmdldENoaWxkQnlOYW1lKCd0ZFBvcnRyYWl0JykpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYoZGF0YS5uaWNrTmFtZSl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGROYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIitkYXRhLm5pY2tOYW1lK1wiIFwiO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbm9kZS5vbigndG91Y2hlbmQnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdyZXZpZXdMZXZlbCcsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZEluZm8gPSB7fTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdyZXZpZXcnO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXZpZXdJZCA9IGRhdGEuX2lkO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRJbmZvLmFwcElkID0gZGF0YS5hcHBJZDtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZSA9IGRhdGEubmlja05hbWU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZEluZm8ucG9ydHJhaXQgPSBkYXRhLnBvcnRyYWl0O1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRJbmZvLmNyZWF0ZVRpbWUgPSBkYXRhLmNyZWF0ZVRpbWU7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9KShpKVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICBjb250ZW50LmhlaWdodCA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudCAqIHJhbmtJdGVtLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIFRvYXN0KFwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCIsMTUwMClcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAvLyAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBzaG93TWFpblJhbmsoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICB2YXIgcmFua1BhZ2UgPSAxLHJhbmtQYWdlU2l6ZSA9IDUwO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2MuZmluZCgncmFua0xpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBjYy5maW5kKCdyYW5rTGlzdCcsbmV3TXlQcmVmYWIpLm9uKCdib3VuY2UtYm90dG9tJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgcmFua1BhZ2UrKztcclxuICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG5cclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9xdWVyeVVzZXJcIixcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuZGF0YS5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5kYXRhLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSAgcmVzLmRhdGEuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGF0LnJhbmtJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmtJdGVtID09IG51bGwpIHJhbmtJdGVtID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkRGF0ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0ZVJhbmtUaW1lKGRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZGF0YS5wb3J0cmFpdCsnP2FhYT1hYS5qcGcnLCAgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIrZGF0YS5uaWNrTmFtZStcIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5oZWlnaHQgPSBjb250ZW50LmNoaWxkcmVuQ291bnQgKiByYW5rSXRlbS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCIsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IoKXtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIC8vICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgLy8gICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhciBkYXRhID0gIHJlcy5yZXN1bHQuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoYXQucmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZihyYW5rSXRlbSA9PSBudWxsKSByYW5rSXRlbSA9IG5vZGU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGREYXRlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRlUmFua1RpbWUoZGF0YS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS5sZXZlbEZpbmlzaE51bTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShkYXRhLnBvcnRyYWl0Kyc/YWFhPWFhLmpwZycsICBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGROYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIitkYXRhLm5pY2tOYW1lK1wiIFwiO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgVG9hc3QoXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIiwxNTAwKVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIC8vICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRVc2VySW5mbygpe1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPlue8k+WtmGFwcElk5Yik5pat5piv5ZCm56ys5LiA5qyh6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnYXBwSWQnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuYXBwSWQgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdHd4LnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0ICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9xdWVyeVVzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdFx0ICBkYXRhOntcclxuXHRcdFx0XHRcdFx0ICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkXHJcblx0XHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdCAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5kYXRhLmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSByZXMuZGF0YS5kYXRhWzBdLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5kYXRhLmRhdGFbMF0uY2xhc3NpY3NMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gcmVzLmRhdGEuZGF0YVswXS5uZXRMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLnJvbGVzID0gcmVzLmRhdGEuZGF0YVswXS5yb2xlcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdCAgICAgIH1cclxuXHRcdFx0XHRcdCAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnd3hjbG91ZC1zdWNjZXNzJylcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5jbGFzc2ljc0xldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93LnVzZXIubmV0TGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0ubmV0TGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3cudXNlci5yb2xlcyA9IHJlcy5yZXN1bHQuZGF0YVswXS5yb2xlcztcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKXtcclxuICAgICAgICAgICAgICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9sb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOnJlcy5jb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhcHBJZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOnJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5hcHBJZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmNsYXNzaWNzTGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIucm9sZXMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9xdWVyeVVzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuZGF0YS5kYXRhLmxlbmd0aDw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ms6jlhoznlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9hZGRVc2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lPyB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gcmVzLmRhdGEuZGF0YVswXS5sZXZlbEZpbmlzaE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gcmVzLmRhdGEuZGF0YVswXS5jbGFzc2ljc0xldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gcmVzLmRhdGEuZGF0YVswXS5uZXRMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5yb2xlcyA9IHJlcy5kYXRhLmRhdGFbMF0ucm9sZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOiAnbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKHJlcyAmJiByZXMucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGtleTogXCJhcHBJZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRhdGE6cmVzLnJlc3VsdC5vcGVuaWRcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3cudXNlci5hcHBJZCA9IHJlcy5yZXN1bHQub3BlbmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3cudXNlci5uZXRMZXZlbE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3cudXNlci5yb2xlcyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9xdWVyeVVzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvL+azqOWGjOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gICAgIHVybDogY2xvdWRGdW5jdGlvbkJhc2VVcmwrXCIvcXVlcnlVc2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lPyB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmNsYXNzaWNzTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5ldExldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5yb2xlcyA9IHJlcy5yZXN1bHQuZGF0YVswXS5yb2xlcztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWFpbkJpbmRFdmVudCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAvL+a3u+WKoOaOiOadg+aMiemSrlxyXG4gICAgICAgIHd4TG9naW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9naW5JbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsOiByZXMuYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgbmlja05hbWU6IHJlcy5uaWNrTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmjojmnYPlpLHotKUnKVxyXG4gICAgICAgIH0sdGhpcy5sb2dpbnBsYXkubm9kZSk7XHJcbiAgICAgICAgLy/lvIDlp4vmuLjmiI/mjInpkq5cclxuICAgICAgICBpZih0aGlzLmxvZ2lucGxheSA9PSBudWxsKSB0aGlzLmxvZ2lucGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvbG9naW5wbGF5JykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmxvZ2lucGxheS5ub2RlLm9uKCdjbGljaycsIHRoaXMubG9naW5MZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy52aXNpdG9ycGxheSA9PSBudWxsKSB0aGlzLnZpc2l0b3JwbGF5ID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy92aXNpdG9ycGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy52aXNpdG9ycGxheS5ub2RlLm9uKCdjbGljaycsIHRoaXMudmlzaXRvckxldmVsTGlzdCwgdGhpcylcclxuICAgICAgICBpZih0aGlzLm1haW5SYW5rID09IG51bGwpIHRoaXMubWFpblJhbmsgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL21haW5SYW5rJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLm1haW5SYW5rLm5vZGUub24oJ2NsaWNrJywgdGhpcy5zaG93TWFpblJhbmssIHRoaXMpXHJcblxyXG4gICAgICAgIGlmKHRoaXMucmV2aWV3TGV2ZWwgPT0gbnVsbCkgdGhpcy5yZXZpZXdMZXZlbCA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvcmV2aWV3TGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMucmV2aWV3TGV2ZWwubm9kZS5vbignY2xpY2snLCB0aGlzLnNob3dSZXZpZXdMZXZlbCwgdGhpcylcclxuXHJcbiAgICAgICAgaWYodGhpcy5idWlsZExldmVsID09IG51bGwpIHRoaXMuYnVpbGRMZXZlbCA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYnVpbGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5idWlsZExldmVsLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYnVpbGRcIik7XHJcblxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5tYWluU2hhcmUgPT0gbnVsbCkgdGhpcy5tYWluU2hhcmUgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL21haW5TaGFyZScpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMubWFpblNoYXJlLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRTdHJpbmcgPSAgJ+W/q+adpeaMkeaImOKAnOebiuaZuuaOqOeuseKAneWwj+a4uOaIj+WQp++8gSc7XHJcbiAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBpZih0aGlzLnNldHRpbmcgPT0gbnVsbCkgdGhpcy5zZXR0aW5nID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9zZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xvc2VTZXR0aW5nJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2hNb3ZlID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCByZWxhc3QgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXVzaWMgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9tdXNpYy9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUpIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSkgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5yZWxhc3QpIHJlbGFzdC5zdHJpbmcgPSAn5YWz6Zet5Zue6YCA5Yqf6IO9JztcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVsYXN0LnN0cmluZyA9ICflvIDlkK/lm57pgIDlip/og70nO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcubXVzaWMpIG11c2ljLnN0cmluZyA9ICflhbPpl63pn7PmlYgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBtdXNpYy5zdHJpbmcgPSAn5byA5ZCv6Z+z5pWIJztcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi90b3VjaE1vdmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG4JueCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflvIDlkK/op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG45YWz6ZetIOeCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIXJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DnpLroh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8jyEnLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbgm54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbjlhbPpl60g54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgIXJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOekuuiHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPIScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbnumAgOWKn+iDvVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnJlbGFzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnJlbGFzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Quc3RyaW5nID0gJ+W8gOWQr+WbnumAgOWKn+iDvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcucmVsYXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXN0LnN0cmluZyA9ICflhbPpl63lm57pgIDlip/og70nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL211c2ljJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57pgIDlip/og71cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tdXNpYyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljLnN0cmluZyA9ICflvIDlkK/pn7PmlYgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVzaWMuc3RyaW5nID0gJ+WFs+mXremfs+aViCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdzZXR0aW5nRGlhbG9nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAgICAgfSwgdGhpcylcclxuXHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiAhd2luZG93LmdhbWVDaXJjbGUpe1xyXG4gICAgICAgICAgICBsZXQgc3lzSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgICAgIC8v5ri45oiP5ZyI5oyJ6ZKuXHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lQ2lyY2xlID0gIHd4LmNyZWF0ZUdhbWVDbHViQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGljb246ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IChzeXNJbmZvLndpbmRvd1dpZHRoKjAuOSktMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzeXNJbmZvLndpbmRvd0hlaWdodCowLjEyLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdFNldHRpbmcoKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGFzdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGUoKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNldE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldE11c2ljKCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtICE9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYod2luZG93LnNldHRpbmcubXVzaWMpe1xyXG4gICAgICAgICAgICBpZighd2luZG93LmJnTXVzaWMgfHwgIXdpbmRvdy5tb3ZlTXVzaWMpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnTXVzaWMgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYyA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KHt1c2VXZWJBdWRpb0ltcGxlbWVudDp0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcIm11c2ljL2JnX211c2ljXCIsIGNjLkF1ZGlvQ2xpcCwgbnVsbCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLnNyYyA9Y2xpcC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmJnTXVzaWMubG9vcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgIXdpbmRvdy5iZ011c2ljLnBhdXNlZCkgd2luZG93LmJnTXVzaWMucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiB3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJtdXNpYy9tb3ZlX211c2ljXCIsIGNjLkF1ZGlvQ2xpcCwgbnVsbCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMuc3JjID1jbGlwLnVybDtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLmxvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLnBsYXliYWNrUmF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnTXVzaWMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5tb3ZlTXVzaWMpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cuYmdNdXNpYyA9IG51bGw7XHJcbiAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==