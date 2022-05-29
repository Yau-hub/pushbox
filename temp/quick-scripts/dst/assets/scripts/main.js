
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
if (window.auditLevelAd) window.auditLevelAd.destroy();

if (cc.sys.platform === cc.sys.WECHAT_GAME) {
  wx.cloud.init({
    env: window.env
  }); //广告初始化

  if (wx.createInterstitialAd) {
    window.skipLevelAd = wx.createRewardedVideoAd({
      adUnitId: 'adunit-d408eadf9ac9c0a9'
    });
    window.checkSolutionLevelAd = wx.createRewardedVideoAd({
      adUnitId: 'adunit-110d097df5bc8eb0'
    });
    window.skipLevelAd.onError(function (err) {});
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

      wx.cloud.callFunction({
        name: 'getClassicsLevelNum'
      }).then(function (res) {
        window.classicsLevelNum = res.result.total;

        _common.Loading.hide();
      })["catch"](function (err) {
        console.error(err);
      });
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

      wx.cloud.callFunction({
        name: 'queryReviewLevel',
        data: {
          page: page,
          pageSize: pageSize
        }
      }).then(function (res) {
        _common.Loading.hide();

        var rankItem = null;

        if (res && res.result.data.length > 0) {
          for (var i = 1; i <= res.result.data.length; i++) {
            (function (i) {
              var data = res.result.data[i - 1];
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
      })["catch"](function (err) {
        console.error(err);

        _common.Loading.hide();
      });
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

      wx.cloud.callFunction({
        name: 'queryUser',
        data: {
          page: page,
          pageSize: pageSize
        }
      }).then(function (res) {
        _common.Loading.hide();

        var rankItem = null;

        if (res && res.result.data.length > 0) {
          var _loop = function _loop() {
            data = res.result.data[i - 1];
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

          for (var i = 1; i <= res.result.data.length; i++) {
            var data;

            _loop();
          }

          content.height = content.childrenCount * rankItem.height;
        } else {
          (0, _common.Toast)("没有更多数据了", 1500);
        }
      })["catch"](function (err) {
        console.error(err);

        _common.Loading.hide();
      });
    }
  },
  getUserInfo: function getUserInfo() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      //获取缓存appId判断是否第一次进入游戏
      wx.getStorage({
        key: 'appId',
        success: function success(res) {
          window.user.appId = res.data;
          wx.cloud.callFunction({
            name: 'queryUser',
            data: {
              appId: window.user.appId
            }
          }).then(function (res) {
            if (res && res.result.data.length > 0) {
              window.user.levelFinishNum = res.result.data[0].levelFinishNum;
              window.user.classicsLevelNum = res.result.data[0].classicsLevelNum;
              window.user.netLevelNum = res.result.data[0].netLevelNum;
              window.user.roles = res.result.data[0].roles;
            }
          })["catch"](function (err) {
            console.error(err);
          });
        },
        fail: function fail(err) {
          wx.cloud.callFunction({
            name: 'login'
          }).then(function (res) {
            if (res && res.result) {
              wx.setStorage({
                key: "appId",
                data: res.result.openid
              });
              window.user.appId = res.result.openid;
              window.user.classicsLevelNum = 0;
              window.user.netLevelNum = 0;
              window.user.levelFinishNum = 0;
              window.user.roles = '';
              wx.cloud.callFunction({
                name: 'queryUser',
                data: {
                  appId: window.user.appId
                }
              }).then(function (res) {
                if (res && res.result.data.length <= 0) {
                  //注册用户信息
                  wx.cloud.callFunction({
                    name: 'addUser',
                    data: {
                      appId: window.user.appId,
                      nickName: window.loginInfo.nickName ? window.loginInfo.nickName : '游客' + window.user.appId.substring(window.user.appId.length - 5),
                      portrait: window.loginInfo.avatarUrl
                    }
                  }).then(function (res) {
                    console.log(res);
                  })["catch"](function (err) {
                    console.error(err);
                  });
                } else {
                  window.user.levelFinishNum = res.result.data[0].levelFinishNum;
                  window.user.classicsLevelNum = res.result.data[0].classicsLevelNum;
                  window.user.netLevelNum = res.result.data[0].netLevelNum;
                  window.user.roles = res.result.data[0].roles;
                }
              })["catch"](function (err) {
                console.error(err);
              });
            }
          })["catch"](function (err) {
            console.error(err);
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJiZ011c2ljIiwibW92ZU11c2ljIiwiY3JlYXRlU2NlbnNlVXBsb2FkQWQiLCJza2lwTGV2ZWxBZCIsImF1ZGl0TGV2ZWxBZCIsImNoZWNrU29sdXRpb25MZXZlbEFkIiwiZ2FtZUNpcmNsZSIsImRlc3Ryb3kiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsImNsb3VkIiwiaW5pdCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwiYWRVbml0SWQiLCJvbkVycm9yIiwiZXJyIiwidXNlciIsImNsYXNzaWNzTGV2ZWxOdW0iLCJuZXRMZXZlbE51bSIsImxldmVsSW5kZXgiLCJiZ1VybEJhc2UiLCJsZXZlbEZpbmlzaE51bSIsImxvZ2luSW5mbyIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25lU2F5TGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJsb2dpbnBsYXkiLCJCdXR0b24iLCJ2aXNpdG9ycGxheSIsIm1haW5SYW5rIiwibGV2ZWxMYXlvdXQiLCJQcmVmYWIiLCJyZXZpZXdMYXlvdXQiLCJyZXZpZXdMZXZlbCIsImJ1aWxkTGV2ZWwiLCJzZXR0aW5nIiwibWFpblNoYXJlIiwicmFua0l0ZW0iLCJvbkxvYWQiLCJtYWluQmluZEV2ZW50IiwiZnJvbSIsImdhbWUiLCJvbiIsIkVWRU5UX1NIT1ciLCJwYXVzZWQiLCJwYXVzZSIsInBsYXkiLCJzdGFydCIsInRoYXQiLCJMb2FkaW5nIiwic2hvdyIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJoaWRlIiwiY29uc29sZSIsImVycm9yIiwicmVtb3ZlU3RvcmFnZSIsImtleSIsImxvYWRJbWciLCJvbmVTYXkiLCJnZXRVc2VySW5mbyIsImluaXRTZXR0aW5nIiwiY29udGFpbmVyIiwiZmluZCIsImltZ1NlcnZlVXJsIiwiaW1nVXJsIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJpbWFnZXMiLCJ1cmxiYXNlIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsInRleHR1cmUiLCJzcHJpdGUiLCJTcHJpdGVGcmFtZSIsInNwcml0ZUZyYW1lIiwic3Rhck5vZGUiLCJOb2RlIiwic2V0UG9zaXRpb24iLCJzdGFyU3ByaXRlIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwic2l6ZU1vZGUiLCJub2RlIiwid2lkdGgiLCJ3aW5TaXplIiwiaGVpZ2h0Iiwib3BhY2l0eSIsImFkZENoaWxkIiwib3BhY2l0eVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib3BlbiIsInNlbmQiLCJ1cmwiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJoaXRva290byIsIm5ld1hIUiIsImxvZ2luTGV2ZWxMaXN0IiwibG9naW5UeXBlIiwiQ2FudmFzTm9kZSIsIm9uUmVzb3VyY2VMb2FkZWQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkZWRSZXNvdXJjZSIsImxvZyIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJsb2FkZXIiLCJsb2FkUmVzIiwidmlzaXRvckxldmVsTGlzdCIsInNob3dSZXZpZXdMZXZlbCIsInJldmlld1BhZ2UiLCJyZXZpZXdQYWdlU2l6ZSIsImNvbnRlbnQiLCJyZW1vdmVGcm9tUGFyZW50IiwicmVzb3VyY2UiLCJyZW5kZXJSZXZpZXdMZXZlbExpc3QiLCJwYWdlIiwicGFnZVNpemUiLCJjdXJyZW50SXRlbU51bSIsImNoaWxkcmVuQ291bnQiLCJkYXRhIiwibGVuZ3RoIiwiaSIsImdldENoaWxkQnlOYW1lIiwiY3JlYXRlVGltZSIsInVzZVN0ZXBOdW0iLCJwb3J0cmFpdCIsInQiLCJ3eExvZ2luQnRuIiwic2V0U3RvcmFnZSIsInN1Y2Nlc3MiLCJ1cGxvYWRJbmZvIiwicmV2aWV3SWQiLCJfaWQiLCJhcHBJZCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic2hvd01haW5SYW5rIiwicmFua1BhZ2UiLCJyYW5rUGFnZVNpemUiLCJyZW5kZXJNYWluUmFua0xpc3QiLCJnZXRTdG9yYWdlIiwicm9sZXMiLCJmYWlsIiwib3BlbmlkIiwic3Vic3RyaW5nIiwiQXJyYXkiLCJ0aXRTdHJpbmciLCJzaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInF1ZXJ5IiwidG91Y2hNb3ZlIiwiY2xpY2tNb3ZlIiwicmVsYXN0IiwibXVzaWMiLCJjb21wbGV0ZSIsInNldE11c2ljIiwic3lzSW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwiY3JlYXRlR2FtZUNsdWJCdXR0b24iLCJpY29uIiwic3R5bGUiLCJsZWZ0Iiwid2luZG93V2lkdGgiLCJ0b3AiLCJ3aW5kb3dIZWlnaHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsInVzZVdlYkF1ZGlvSW1wbGVtZW50IiwicmVzb3VyY2VzIiwibG9hZCIsIkF1ZGlvQ2xpcCIsImNsaXAiLCJzcmMiLCJsb29wIiwicGxheWJhY2tSYXRlIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7O0FBNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLEdBQVAsR0FBYSx5QkFBYjtBQUNBRCxNQUFNLENBQUNFLE9BQVAsR0FBZSxJQUFmO0FBQ0FGLE1BQU0sQ0FBQ0csU0FBUCxHQUFpQixJQUFqQjtBQUNBSCxNQUFNLENBQUNJLG9CQUFQLEdBQThCLElBQTlCO0FBQ0FKLE1BQU0sQ0FBQ0ssV0FBUCxHQUFxQixJQUFyQjtBQUNBTCxNQUFNLENBQUNNLFlBQVAsR0FBc0IsSUFBdEI7QUFDQU4sTUFBTSxDQUFDTyxvQkFBUCxHQUE4QixJQUE5QjtBQUNBUCxNQUFNLENBQUNRLFVBQVAsR0FBb0IsSUFBcEI7QUFD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ckJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG53aW5kb3cuZW52ID0gXCJjbG91ZDEtNWd2YnVpeTNkZDk5ZjYzY1wiXHJcbndpbmRvdy5iZ011c2ljPW51bGw7XHJcbndpbmRvdy5tb3ZlTXVzaWM9bnVsbDtcclxud2luZG93LmNyZWF0ZVNjZW5zZVVwbG9hZEFkID0gbnVsbDtcclxud2luZG93LnNraXBMZXZlbEFkID0gbnVsbDtcclxud2luZG93LmF1ZGl0TGV2ZWxBZCA9IG51bGw7XHJcbndpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZCA9IG51bGw7XHJcbndpbmRvdy5nYW1lQ2lyY2xlID0gbnVsbDtcclxuaWYod2luZG93LmF1ZGl0TGV2ZWxBZCkgd2luZG93LmF1ZGl0TGV2ZWxBZC5kZXN0cm95KCk7XHJcbmlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgd3guY2xvdWQuaW5pdCh7ZW52OiB3aW5kb3cuZW52fSlcclxuICAgIC8v5bm/5ZGK5Yid5aeL5YyWXHJcbiAgICBpZiAod3guY3JlYXRlSW50ZXJzdGl0aWFsQWQpe1xyXG4gICAgICAgIHdpbmRvdy5za2lwTGV2ZWxBZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWQ0MDhlYWRmOWFjOWMwYTknXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC0xMTBkMDk3ZGY1YmM4ZWIwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2luZG93LnNraXBMZXZlbEFkLm9uRXJyb3IoZXJyID0+IHt9KTtcclxuICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWU3ZjIzYjUyYzlkNTkzMTUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQub25FcnJvcihlcnIgPT4ge3dpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCA9bnVsbDt9KTtcclxuICAgIH1cclxufVxyXG53aW5kb3cudXNlciA9IHt9O1xyXG53aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5uZXRMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5sZXZlbEluZGV4ID0gMDtcclxud2luZG93LmJnVXJsQmFzZSA9ICcnO1xyXG53aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcbndpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICBhdmF0YXJVcmw6IG51bGwsXHJcbiAgICBuaWNrTmFtZTogbnVsbFxyXG59O1xyXG53aW5kb3cuZ2FtZUNpcmNsZSA9IG51bGw7XHJcblxyXG5pbXBvcnQge3d4TG9naW4sVG9hc3QsTG9hZGluZyxmb3JtYXRlUmFua1RpbWV9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBvbmVTYXlMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5wbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgdmlzaXRvcnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICBtYWluUmFuazogY2MuQnV0dG9uLFxyXG4gICAgICAgIGxldmVsTGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcmV2aWV3TGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcmV2aWV3TGV2ZWw6IGNjLkJ1dHRvbixcclxuICAgICAgICBidWlsZExldmVsOiBjYy5CdXR0b24sXHJcbiAgICAgICAgc2V0dGluZzogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5TaGFyZTogY2MuQnV0dG9uLFxyXG4gICAgICAgIHJhbmtJdGVtOmNjLlByZWZhYixcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTDpFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvL+WKoOi9veS4gOiogFxyXG4gICAgICAgIC8vICB0aGlzLm9uZVNheSgpO1xyXG4gICAgICAgICB0aGlzLm1haW5CaW5kRXZlbnQoKTtcclxuICAgICAgICAgd2luZG93LmZyb20gPSAnbWFpbic7XHJcbiAgICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLph43mlrDov5Tlm57muLjmiI9cIik7XHJcbiAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiAhd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgIH0sdGhpcyk7XHJcbiAgICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG5cclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ2V0Q2xhc3NpY3NMZXZlbE51bSdcclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0gPSByZXMucmVzdWx0LnRvdGFsO1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIlxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLmxvYWRJbWcoKTtcclxuICAgICAgICB0aGlzLm9uZVNheSgpO1xyXG5cclxuICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U2V0dGluZygpO1xyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgbG9hZEltZzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYmluZ0JnJyk7Ly/lm77niYflkYjnjrDkvY3nva5cclxuICAgICAgICB2YXIgaW1nU2VydmVVcmwgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vSFBJbWFnZUFyY2hpdmUuYXNweD9mb3JtYXQ9anMmaWR4PTAmbj0xJztcclxuICAgICAgICB2YXIgaW1nVXJsID0gJyc7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpbWdVcmwgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbScgKyByZXNwb25zZS5pbWFnZXNbMF0udXJsYmFzZSArICdfNzIweDEyODAuanBnJ1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnVXJsQmFzZSA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGltZ1VybCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIm+W7uuS4gOS4quS9v+eUqOWbvueJh+i1hOa6kOeahOaWsOiKgueCueWvueixoVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyTm9kZSA9IG5ldyBjYy5Ob2RlKCk7IC8v5Yib5bu65LiA5Liq5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUubmFtZSA9IFwic3RhcjFcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyU3ByaXRlID0gc3Rhck5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7IC8v5aKe5Yqg57K+54G157uE5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZTsgLy/orr7nva7nsr7ngbXnu4Tku7blm77niYfotYTmupBcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNpemVNb2RlID0gJ0NVU1RPTSc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLndpZHRoID0gY2Mud2luU2l6ZS53aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUubm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChzdGFyTm9kZSk7IC8v5Zy65pmv5Lit5aKe5Yqg5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGFjaXR5VGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wYWNpdHk+PTI1NSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG9wYWNpdHlUaW1lcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LDUpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgaW1nU2VydmVVcmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgb25lU2F5KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vdjEuaGl0b2tvdG8uY24vXCI7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGxldCBvbmVTYXlMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvbWFpbkJnL29uZVNheVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICBpZih0aGF0Lm9uZVNheUxhYmVsICYmIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwpIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgZWxzZSBpZihvbmVTYXlMYWJlbCAmJiBvbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCApIG9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiZ2V0XCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB0aGlzLm9uZVNheUxhYmVsLm5vZGUub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGV0IG5ld1hIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBuZXdYSFIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1hIUi5yZWFkeVN0YXRlID09IDQgJiYgKG5ld1hIUi5zdGF0dXMgPj0gMjAwICYmIG5ld1hIUi5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UobmV3WEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhhdC5vbmVTYXlMYWJlbCAmJiB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsKSB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvbmVTYXlMYWJlbCAmJiBvbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCApIG9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG5ld1hIUi5vcGVuKFwiZ2V0XCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIG5ld1hIUi5zZW5kKCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgIH0sXHJcbiAgICAvL+aOiOadg+eZu+W9leaYvuekuuWFs+WNoeWIl+ihqFxyXG4gICAgbG9naW5MZXZlbExpc3QoKXtcclxuXHJcbiAgICAgICAgd2luZG93LmxvZ2luVHlwZSA9ICd3ZWNoYXQnO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsZXZlbExheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgIH0sXHJcbiAgICAvL+S4jeeZu+W9leeZu+W9leaYvuekuuWFs+WNoeWIl+ihqFxyXG4gICAgdmlzaXRvckxldmVsTGlzdCgpe1xyXG5cclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3Zpc2l0b3InO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsZXZlbExheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGxldmVsTGlzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxMYXlvdXQpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbExpc3QpO1xyXG4gICAgfSxcclxuICAgIHNob3dSZXZpZXdMZXZlbCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciByZXZpZXdQYWdlID0gMSxyZXZpZXdQYWdlU2l6ZSA9IDUwO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2MuZmluZCgncmV2aWV3TGV2ZWxMaXN0L3ZpZXcvY29udGVudCcsbmV3TXlQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY2xvc2UnLG5ld015UHJlZmFiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGlmKHRoYXQucmFua0l0ZW0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0l0ZW0nLCBmdW5jdGlvbiAoZXJyLHJlc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yYW5rSXRlbSA9IGNjLmluc3RhbnRpYXRlKHJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclJldmlld0xldmVsTGlzdChjb250ZW50LHJldmlld1BhZ2UscmV2aWV3UGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscmV2aWV3UGFnZSxyZXZpZXdQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZmluZCgncmV2aWV3TGV2ZWxMaXN0JyxuZXdNeVByZWZhYikub24oJ2JvdW5jZS1ib3R0b20nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3UGFnZSsrO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJSZXZpZXdMZXZlbExpc3QoY29udGVudCxyZXZpZXdQYWdlLHJldmlld1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmV2aWV3TGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIHJlbmRlclJldmlld0xldmVsTGlzdChjb250ZW50LHBhZ2UscGFnZVNpemUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY3VycmVudEl0ZW1OdW0gPSBjb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlSZXZpZXdMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGk8PSByZXMucmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSAgcmVzLnJlc3VsdC5kYXRhW2ktMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoYXQucmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRSYW5rJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpK2N1cnJlbnRJdGVtTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGREYXRlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRlUmFua1RpbWUoZGF0YS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEudXNlU3RlcE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEucG9ydHJhaXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGRhdGEucG9ydHJhaXQrJz9hYWE9YWEuanBnJywgIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ21hc2svSW1hZ2UnLG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUG9ydHJhaXQnKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLm5pY2tOYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZE5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiK2RhdGEubmlja05hbWUrXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm9uKCd0b3VjaGVuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdyZXZpZXdMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZEluZm8gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdyZXZpZXcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXZpZXdJZCA9IGRhdGEuX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRJbmZvLmFwcElkID0gZGF0YS5hcHBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZSA9IGRhdGEubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZEluZm8ucG9ydHJhaXQgPSBkYXRhLnBvcnRyYWl0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KShpKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgc2hvd01haW5SYW5rKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgdmFyIHJhbmtQYWdlID0gMSxyYW5rUGFnZVNpemUgPSA1MDtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGNjLmZpbmQoJ3JhbmtMaXN0L3ZpZXcvY29udGVudCcsbmV3TXlQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY2xvc2UnLG5ld015UHJlZmFiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGlmKHRoYXQucmFua0l0ZW0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0l0ZW0nLCBmdW5jdGlvbiAoZXJyLHJlc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yYW5rSXRlbSA9IGNjLmluc3RhbnRpYXRlKHJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgY2MuZmluZCgncmFua0xpc3QnLG5ld015UHJlZmFiKS5vbignYm91bmNlLWJvdHRvbScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgIHJhbmtQYWdlKys7XHJcbiAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIHJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHBhZ2UscGFnZVNpemUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY3VycmVudEl0ZW1OdW0gPSBjb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gIHJlcy5yZXN1bHQuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoYXQucmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5rSXRlbSA9PSBudWxsKSByYW5rSXRlbSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGREYXRlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRlUmFua1RpbWUoZGF0YS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS5sZXZlbEZpbmlzaE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShkYXRhLnBvcnRyYWl0Kyc/YWFhPWFhLmpwZycsICBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGROYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIitkYXRhLm5pY2tOYW1lK1wiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGdldFVzZXJJbmZvKCl7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W57yT5a2YYXBwSWTliKTmlq3mmK/lkKbnrKzkuIDmrKHov5vlhaXmuLjmiI9cclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdhcHBJZCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuYXBwSWQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5sZXZlbEZpbmlzaE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmNsYXNzaWNzTGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0uY2xhc3NpY3NMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5ldExldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIucm9sZXMgPSByZXMucmVzdWx0LmRhdGFbMF0ucm9sZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpe1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcElkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTpyZXMucmVzdWx0Lm9wZW5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmFwcElkID0gcmVzLnJlc3VsdC5vcGVuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLnJvbGVzID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ms6jlhoznlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU/IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU6J+a4uOWuoicrd2luZG93LnVzZXIuYXBwSWQuc3Vic3RyaW5nKHdpbmRvdy51c2VyLmFwcElkLmxlbmd0aC01KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5sZXZlbEZpbmlzaE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5jbGFzc2ljc0xldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5uZXRMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5uZXRMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIucm9sZXMgPSByZXMucmVzdWx0LmRhdGFbMF0ucm9sZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtYWluQmluZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIC8v5re75Yqg5o6I5p2D5oyJ6ZKuXHJcbiAgICAgICAgd3hMb2dpbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IHJlcy5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogcmVzLm5pY2tOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aOiOadg+Wksei0pScpXHJcbiAgICAgICAgfSx0aGlzLmxvZ2lucGxheS5ub2RlKTtcclxuICAgICAgICAvL+W8gOWni+a4uOaIj+aMiemSrlxyXG4gICAgICAgIGlmKHRoaXMubG9naW5wbGF5ID09IG51bGwpIHRoaXMubG9naW5wbGF5ID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9sb2dpbnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMubG9naW5wbGF5Lm5vZGUub24oJ2NsaWNrJywgdGhpcy5sb2dpbkxldmVsTGlzdCwgdGhpcylcclxuICAgICAgICBpZih0aGlzLnZpc2l0b3JwbGF5ID09IG51bGwpIHRoaXMudmlzaXRvcnBsYXkgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL3Zpc2l0b3JwbGF5JykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLnZpc2l0b3JwbGF5Lm5vZGUub24oJ2NsaWNrJywgdGhpcy52aXNpdG9yTGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMubWFpblJhbmsgPT0gbnVsbCkgdGhpcy5tYWluUmFuayA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvbWFpblJhbmsnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMubWFpblJhbmsubm9kZS5vbignY2xpY2snLCB0aGlzLnNob3dNYWluUmFuaywgdGhpcylcclxuXHJcbiAgICAgICAgaWYodGhpcy5yZXZpZXdMZXZlbCA9PSBudWxsKSB0aGlzLnJldmlld0xldmVsID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9yZXZpZXdMZXZlbCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5yZXZpZXdMZXZlbC5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2hvd1Jldmlld0xldmVsLCB0aGlzKVxyXG5cclxuICAgICAgICBpZih0aGlzLmJ1aWxkTGV2ZWwgPT0gbnVsbCkgdGhpcy5idWlsZExldmVsID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9idWlsZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmJ1aWxkTGV2ZWwubm9kZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy53eExvZ2luQnRuICkgd2luZG93Lnd4TG9naW5CdG4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJidWlsZFwiKTtcclxuXHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBpZih0aGlzLm1haW5TaGFyZSA9PSBudWxsKSB0aGlzLm1haW5TaGFyZSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvbWFpblNoYXJlJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5tYWluU2hhcmUubm9kZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdFN0cmluZyA9ICAn5b+r5p2l5oyR5oiY4oCc55uK5pm65o6o566x4oCd5bCP5ri45oiP5ZCn77yBJztcclxuICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICfliIbkuqsnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZyA9PSBudWxsKSB0aGlzLnNldHRpbmcgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL3NldHRpbmcnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnNldHRpbmcubm9kZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9jbG9zZVNldHRpbmcnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0b3VjaE1vdmUgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi90b3VjaE1vdmUvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpY2tNb3ZlID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xpY2tNb3ZlL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlbGFzdCA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL3JlbGFzdC9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCBtdXNpYyA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL211c2ljL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSkgdG91Y2hNb3ZlLnN0cmluZyA9ICflhbPpl63op6bmkbjnp7vliqgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgdG91Y2hNb3ZlLnN0cmluZyA9ICflvIDlkK/op6bmkbjnp7vliqgnO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcuY2xpY2tNb3ZlKSBjbGlja01vdmUuc3RyaW5nID0gJ+WFs+mXreaMiemUruenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGNsaWNrTW92ZS5zdHJpbmcgPSAn5byA5ZCv5oyJ6ZSu56e75YqoJztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLnJlbGFzdCkgcmVsYXN0LnN0cmluZyA9ICflhbPpl63lm57pgIDlip/og70nO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZWxhc3Quc3RyaW5nID0gJ+W8gOWQr+WbnumAgOWKn+iDvSc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5tdXNpYykgbXVzaWMuc3RyaW5nID0gJ+WFs+mXremfs+aViCc7XHJcbiAgICAgICAgICAgICAgICBlbHNlIG11c2ljLnN0cmluZyA9ICflvIDlkK/pn7PmlYgnO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL3RvdWNoTW92ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbgm54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmUuc3RyaW5nID0gJ+W8gOWQr+inpuaRuOenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbjlhbPpl60g54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZighcmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOekuuiHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPIScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xpY2tNb3ZlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuCbngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcuY2xpY2tNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5byA5ZCv5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuOWFs+mXrSDngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiAhcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcuY2xpY2tNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o+Q56S66Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfoh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI8hJywxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL3JlbGFzdCcsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zue6YCA5Yqf6IO9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEucmVsYXN0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcucmVsYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGFzdC5zdHJpbmcgPSAn5byA5ZCv5Zue6YCA5Yqf6IO9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5yZWxhc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Quc3RyaW5nID0gJ+WFs+mXreWbnumAgOWKn+iDvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vbXVzaWMnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbnumAgOWKn+iDvVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLm11c2ljKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcubXVzaWMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVzaWMuc3RyaW5nID0gJ+W8gOWQr+mfs+aViCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcubXVzaWMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXNpYy5zdHJpbmcgPSAn5YWz6Zet6Z+z5pWIJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuc2V0dGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0TXVzaWMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3NldHRpbmdEaWFsb2cnLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG4gICAgICAgICAgICB9LCB0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FICYmICF3aW5kb3cuZ2FtZUNpcmNsZSl7XHJcbiAgICAgICAgICAgIGxldCBzeXNJbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICAgICAgLy/muLjmiI/lnIjmjInpkq5cclxuICAgICAgICAgICAgd2luZG93LmdhbWVDaXJjbGUgPSAgd3guY3JlYXRlR2FtZUNsdWJCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogKHN5c0luZm8ud2luZG93V2lkdGgqMC45KS0yMCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHN5c0luZm8ud2luZG93SGVpZ2h0KjAuMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBpbml0U2V0dGluZygpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVzaWM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHdpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0TXVzaWMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0TXVzaWMoKXtcclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gIT09IGNjLnN5cy5XRUNIQVRfR0FNRSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5tdXNpYyl7XHJcbiAgICAgICAgICAgIGlmKCF3aW5kb3cuYmdNdXNpYyB8fCAhd2luZG93Lm1vdmVNdXNpYyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmdNdXNpYyA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoe3VzZVdlYkF1ZGlvSW1wbGVtZW50OnRydWV9KTtcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwibXVzaWMvYmdfbXVzaWNcIiwgY2MuQXVkaW9DbGlwLCBudWxsLCBmdW5jdGlvbiAoZXJyLCBjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmJnTXVzaWMuc3JjID1jbGlwLnVybDtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYmdNdXNpYy5sb29wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiAhd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmIHdpbmRvdy5iZ011c2ljLnBhdXNlZCkgd2luZG93LmJnTXVzaWMucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcIm11c2ljL21vdmVfbXVzaWNcIiwgY2MuQXVkaW9DbGlwLCBudWxsLCBmdW5jdGlvbiAoZXJyLCBjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5zcmMgPWNsaXAudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMubG9vcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMucGxheWJhY2tSYXRlID0gMjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmdNdXNpYy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmdNdXNpYy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod2luZG93Lm1vdmVNdXNpYyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljID0gbnVsbDtcclxuICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19