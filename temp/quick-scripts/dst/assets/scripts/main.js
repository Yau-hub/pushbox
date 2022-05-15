
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

if (cc.sys.platform === cc.sys.WECHAT_GAME) {
  wx.cloud.init({
    env: window.env
  }); //广告初始化

  if (wx.createInterstitialAd) {
    window.skipLevelAd = wx.createRewardedVideoAd({
      adUnitId: 'adunit-d408eadf9ac9c0a9'
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
    var _this = this;

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
          var _loop = function _loop() {
            data = res.result.data[i - 1];
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
            }, _this);
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
          var _loop2 = function _loop2() {
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

            _loop2();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJiZ011c2ljIiwibW92ZU11c2ljIiwiY3JlYXRlU2NlbnNlVXBsb2FkQWQiLCJza2lwTGV2ZWxBZCIsImNjIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4IiwiY2xvdWQiLCJpbml0IiwiY3JlYXRlSW50ZXJzdGl0aWFsQWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJhZFVuaXRJZCIsIm9uRXJyb3IiLCJlcnIiLCJ1c2VyIiwiY2xhc3NpY3NMZXZlbE51bSIsIm5ldExldmVsTnVtIiwibGV2ZWxJbmRleCIsImJnVXJsQmFzZSIsImxldmVsRmluaXNoTnVtIiwibG9naW5JbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbmVTYXlMYWJlbCIsInR5cGUiLCJMYWJlbCIsImxvZ2lucGxheSIsIkJ1dHRvbiIsInZpc2l0b3JwbGF5IiwibWFpblJhbmsiLCJsZXZlbExheW91dCIsIlByZWZhYiIsInJldmlld0xheW91dCIsInJldmlld0xldmVsIiwiYnVpbGRMZXZlbCIsInNldHRpbmciLCJtYWluU2hhcmUiLCJyYW5rSXRlbSIsIm9uTG9hZCIsIm1haW5CaW5kRXZlbnQiLCJmcm9tIiwiZ2FtZSIsIm9uIiwiRVZFTlRfU0hPVyIsInBhdXNlZCIsInBhdXNlIiwicGxheSIsInN0YXJ0IiwidGhhdCIsIkxvYWRpbmciLCJzaG93IiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInRoZW4iLCJyZXMiLCJyZXN1bHQiLCJ0b3RhbCIsImhpZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2FkSW1nIiwib25lU2F5IiwiZ2V0VXNlckluZm8iLCJpbml0U2V0dGluZyIsImNvbnRhaW5lciIsImZpbmQiLCJpbWdTZXJ2ZVVybCIsImltZ1VybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaW1hZ2VzIiwidXJsYmFzZSIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJ0ZXh0dXJlIiwic3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSIsInN0YXJOb2RlIiwiTm9kZSIsInNldFBvc2l0aW9uIiwic3RhclNwcml0ZSIsImFkZENvbXBvbmVudCIsIlNwcml0ZSIsInNpemVNb2RlIiwibm9kZSIsIndpZHRoIiwid2luU2l6ZSIsImhlaWdodCIsIm9wYWNpdHkiLCJhZGRDaGlsZCIsIm9wYWNpdHlUaW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9wZW4iLCJzZW5kIiwidXJsIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiaGl0b2tvdG8iLCJuZXdYSFIiLCJsb2dpbkxldmVsTGlzdCIsImxvZ2luVHlwZSIsIkNhbnZhc05vZGUiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwibG9hZGVyIiwibG9hZFJlcyIsInZpc2l0b3JMZXZlbExpc3QiLCJzaG93UmV2aWV3TGV2ZWwiLCJyZXZpZXdQYWdlIiwicmV2aWV3UGFnZVNpemUiLCJjb250ZW50IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJyZXNvdXJjZSIsInJlbmRlclJldmlld0xldmVsTGlzdCIsInBhZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRJdGVtTnVtIiwiY2hpbGRyZW5Db3VudCIsImRhdGEiLCJsZW5ndGgiLCJpIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIiwidXNlU3RlcE51bSIsInBvcnRyYWl0IiwidCIsInd4TG9naW5CdG4iLCJzZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInVwbG9hZEluZm8iLCJyZXZpZXdJZCIsIl9pZCIsImFwcElkIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzaG93TWFpblJhbmsiLCJyYW5rUGFnZSIsInJhbmtQYWdlU2l6ZSIsInJlbmRlck1haW5SYW5rTGlzdCIsImdldFN0b3JhZ2UiLCJyb2xlcyIsImZhaWwiLCJvcGVuaWQiLCJzdWJzdHJpbmciLCJBcnJheSIsInRpdFN0cmluZyIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicXVlcnkiLCJ0b3VjaE1vdmUiLCJjbGlja01vdmUiLCJyZWxhc3QiLCJtdXNpYyIsImNvbXBsZXRlIiwic2V0TXVzaWMiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsInVzZVdlYkF1ZGlvSW1wbGVtZW50IiwicmVzb3VyY2VzIiwibG9hZCIsIkF1ZGlvQ2xpcCIsImNsaXAiLCJzcmMiLCJsb29wIiwicGxheWJhY2tSYXRlIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7O0FBcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLEdBQVAsR0FBYSx5QkFBYjtBQUNBRCxNQUFNLENBQUNFLE9BQVAsR0FBZSxJQUFmO0FBQ0FGLE1BQU0sQ0FBQ0csU0FBUCxHQUFpQixJQUFqQjtBQUNBSCxNQUFNLENBQUNJLG9CQUFQLEdBQThCLElBQTlCO0FBQ0FKLE1BQU0sQ0FBQ0ssV0FBUCxHQUFxQixJQUFyQjs7QUFDQSxJQUFJQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQkYsRUFBRSxDQUFDQyxHQUFILENBQU9FLFdBQS9CLEVBQTRDO0FBQ3hDQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjO0FBQUNYLElBQUFBLEdBQUcsRUFBRUQsTUFBTSxDQUFDQztBQUFiLEdBQWQsRUFEd0MsQ0FFeEM7O0FBQ0EsTUFBSVMsRUFBRSxDQUFDRyxvQkFBUCxFQUE0QjtBQUN4QmIsSUFBQUEsTUFBTSxDQUFDSyxXQUFQLEdBQXFCSyxFQUFFLENBQUNJLHFCQUFILENBQXlCO0FBQzFDQyxN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Q2RGLFFBQUFBLE1BQU0sQ0FBQ0UsT0FBUCxDQUFld0wsSUFBZjtBQUNBMUwsUUFBQUEsTUFBTSxDQUFDRSxPQUFQLENBQWVrSSxPQUFmO0FBQ0g7O0FBQ0QsVUFBR3BJLE1BQU0sQ0FBQ0csU0FBVixFQUFvQjtBQUNoQkgsUUFBQUEsTUFBTSxDQUFDRyxTQUFQLENBQWlCdUwsSUFBakI7QUFDQTFMLFFBQUFBLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQmlJLE9BQWpCO0FBQ0g7O0FBQ0RwSSxNQUFBQSxNQUFNLENBQUNFLE9BQVAsR0FBaUIsSUFBakI7QUFDQUYsTUFBQUEsTUFBTSxDQUFDRyxTQUFQLEdBQW1CLElBQW5CO0FBQ0g7QUFDSjtBQTVwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbndpbmRvdy5lbnYgPSBcImNsb3VkMS01Z3ZidWl5M2RkOTlmNjNjXCJcclxud2luZG93LmJnTXVzaWM9bnVsbDtcclxud2luZG93Lm1vdmVNdXNpYz1udWxsO1xyXG53aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQgPSBudWxsO1xyXG53aW5kb3cuc2tpcExldmVsQWQgPSBudWxsO1xyXG5pZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgIHd4LmNsb3VkLmluaXQoe2Vudjogd2luZG93LmVudn0pXHJcbiAgICAvL+W5v+WRiuWIneWni+WMllxyXG4gICAgaWYgKHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKXtcclxuICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC1kNDA4ZWFkZjlhYzljMGE5J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2luZG93LnNraXBMZXZlbEFkLm9uRXJyb3IoZXJyID0+IHt9KTtcclxuICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWU3ZjIzYjUyYzlkNTkzMTUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQub25FcnJvcihlcnIgPT4ge3dpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCA9bnVsbDt9KTtcclxuICAgIH1cclxufVxyXG53aW5kb3cudXNlciA9IHt9O1xyXG53aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5uZXRMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5sZXZlbEluZGV4ID0gMDtcclxud2luZG93LmJnVXJsQmFzZSA9ICcnO1xyXG53aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcbndpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICBhdmF0YXJVcmw6IG51bGwsXHJcbiAgICBuaWNrTmFtZTogbnVsbFxyXG59XHJcblxyXG5pbXBvcnQge3d4TG9naW4sVG9hc3QsTG9hZGluZyxmb3JtYXRlUmFua1RpbWV9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBvbmVTYXlMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5wbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgdmlzaXRvcnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICBtYWluUmFuazogY2MuQnV0dG9uLFxyXG4gICAgICAgIGxldmVsTGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcmV2aWV3TGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcmV2aWV3TGV2ZWw6IGNjLkJ1dHRvbixcclxuICAgICAgICBidWlsZExldmVsOiBjYy5CdXR0b24sXHJcbiAgICAgICAgc2V0dGluZzogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5TaGFyZTogY2MuQnV0dG9uLFxyXG4gICAgICAgIHJhbmtJdGVtOmNjLlByZWZhYixcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTDpFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvL+WKoOi9veS4gOiogFxyXG4gICAgICAgIC8vICB0aGlzLm9uZVNheSgpO1xyXG4gICAgICAgICB0aGlzLm1haW5CaW5kRXZlbnQoKTtcclxuICAgICAgICAgd2luZG93LmZyb20gPSAnbWFpbic7XHJcbiAgICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLph43mlrDov5Tlm57muLjmiI9cIik7XHJcbiAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiAhd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgIH0sdGhpcyk7XHJcbiAgICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG5cclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ2V0Q2xhc3NpY3NMZXZlbE51bSdcclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0gPSByZXMucmVzdWx0LnRvdGFsO1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMubG9hZEltZygpO1xyXG4gICAgICAgIHRoaXMub25lU2F5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB0aGlzLmluaXRTZXR0aW5nKCk7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBsb2FkSW1nOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9iaW5nQmcnKTsvL+WbvueJh+WRiOeOsOS9jee9rlxyXG4gICAgICAgIHZhciBpbWdTZXJ2ZVVybCA9ICdodHRwczovL3d3dy5iaW5nLmNvbS9IUEltYWdlQXJjaGl2ZS5hc3B4P2Zvcm1hdD1qcyZpZHg9MCZuPTEnO1xyXG4gICAgICAgIHZhciBpbWdVcmwgPSAnJztcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGltZ1VybCA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlICsgJ183MjB4MTI4MC5qcGcnXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmdVcmxCYXNlID0gJ2h0dHBzOi8vY24uYmluZy5jb20nICsgcmVzcG9uc2UuaW1hZ2VzWzBdLnVybGJhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoaW1nVXJsLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yib5bu65LiA5Liq5L2/55So5Zu+54mH6LWE5rqQ55qE5paw6IqC54K55a+56LGhXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJOb2RlID0gbmV3IGNjLk5vZGUoKTsgLy/liJvlu7rkuIDkuKrmlrDoioLngrlcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5uYW1lID0gXCJzdGFyMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLnNldFBvc2l0aW9uKDAsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJTcHJpdGUgPSBzdGFyTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTsgLy/lop7liqDnsr7ngbXnu4Tku7ZcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlOyAvL+iuvue9rueyvueBtee7hOS7tuWbvueJh+i1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUuc2l6ZU1vZGUgPSAnQ1VTVE9NJztcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLm5vZGUud2lkdGggPSBjYy53aW5TaXplLndpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLmhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHN0YXJOb2RlKTsgLy/lnLrmma/kuK3lop7liqDmlrDoioLngrlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wYWNpdHlUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3BhY2l0eT49MjU1KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwob3BhY2l0eVRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sNSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCBpbWdTZXJ2ZVVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0sXHJcbiAgICBvbmVTYXkoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly92MS5oaXRva290by5jbi9cIjtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgbGV0IG9uZVNheUxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9tYWluQmcvb25lU2F5XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgIGlmKHRoYXQub25lU2F5TGFiZWwgJiYgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCkgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICBlbHNlIGlmKG9uZVNheUxhYmVsICYmIG9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsICkgb25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIHRoaXMub25lU2F5TGFiZWwubm9kZS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgbmV3WEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIG5ld1hIUi5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3WEhSLnJlYWR5U3RhdGUgPT0gNCAmJiAobmV3WEhSLnN0YXR1cyA+PSAyMDAgJiYgbmV3WEhSLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZShuZXdYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGF0Lm9uZVNheUxhYmVsICYmIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwpIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9uZVNheUxhYmVsICYmIG9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsICkgb25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbmV3WEhSLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgbmV3WEhSLnNlbmQoKTtcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgfSxcclxuICAgIC8v5o6I5p2D55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICBsb2dpbkxldmVsTGlzdCgpe1xyXG5cclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3dlY2hhdCc7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIC8v5LiN55m75b2V55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICB2aXNpdG9yTGV2ZWxMaXN0KCl7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2dpblR5cGUgPSAndmlzaXRvcic7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGV2ZWxMaXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbExheW91dCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTGlzdCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jldmlld0xldmVsKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgdmFyIHJldmlld1BhZ2UgPSAxLHJldmlld1BhZ2VTaXplID0gNTA7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjYy5maW5kKCdyZXZpZXdMZXZlbExpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscmV2aWV3UGFnZSxyZXZpZXdQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJSZXZpZXdMZXZlbExpc3QoY29udGVudCxyZXZpZXdQYWdlLHJldmlld1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5maW5kKCdyZXZpZXdMZXZlbExpc3QnLG5ld015UHJlZmFiKS5vbignYm91bmNlLWJvdHRvbScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXZpZXdQYWdlKys7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclJldmlld0xldmVsTGlzdChjb250ZW50LHJldmlld1BhZ2UscmV2aWV3UGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyZXZpZXdMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gIHJlcy5yZXN1bHQuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoYXQucmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5rSXRlbSA9PSBudWxsKSByYW5rSXRlbSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGREYXRlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRlUmFua1RpbWUoZGF0YS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS51c2VTdGVwTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnBvcnRyYWl0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGRhdGEucG9ydHJhaXQrJz9hYWE9YWEuanBnJywgIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdtYXNrL0ltYWdlJyxub2RlLmdldENoaWxkQnlOYW1lKCd0ZFBvcnRyYWl0JykpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5uaWNrTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZE5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiK2RhdGEubmlja05hbWUrXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5vbigndG91Y2hlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy53eExvZ2luQnRuICkgd2luZG93Lnd4TG9naW5CdG4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdyZXZpZXdMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZEluZm8gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ3Jldmlldyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmV2aWV3SWQgPSBkYXRhLl9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRJbmZvLmFwcElkID0gZGF0YS5hcHBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRJbmZvLm5pY2tOYW1lID0gZGF0YS5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRJbmZvLnBvcnRyYWl0ID0gZGF0YS5wb3J0cmFpdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgc2hvd01haW5SYW5rKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgdmFyIHJhbmtQYWdlID0gMSxyYW5rUGFnZVNpemUgPSA1MDtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGNjLmZpbmQoJ3JhbmtMaXN0L3ZpZXcvY29udGVudCcsbmV3TXlQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY2xvc2UnLG5ld015UHJlZmFiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGlmKHRoYXQucmFua0l0ZW0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0l0ZW0nLCBmdW5jdGlvbiAoZXJyLHJlc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yYW5rSXRlbSA9IGNjLmluc3RhbnRpYXRlKHJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgY2MuZmluZCgncmFua0xpc3QnLG5ld015UHJlZmFiKS5vbignYm91bmNlLWJvdHRvbScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgIHJhbmtQYWdlKys7XHJcbiAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIHJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHBhZ2UscGFnZVNpemUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY3VycmVudEl0ZW1OdW0gPSBjb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gIHJlcy5yZXN1bHQuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoYXQucmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5rSXRlbSA9PSBudWxsKSByYW5rSXRlbSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGREYXRlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRlUmFua1RpbWUoZGF0YS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS5sZXZlbEZpbmlzaE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShkYXRhLnBvcnRyYWl0Kyc/YWFhPWFhLmpwZycsICBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGROYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIitkYXRhLm5pY2tOYW1lK1wiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGdldFVzZXJJbmZvKCl7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W57yT5a2YYXBwSWTliKTmlq3mmK/lkKbnrKzkuIDmrKHov5vlhaXmuLjmiI9cclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdhcHBJZCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5hcHBJZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5jbGFzc2ljc0xldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubmV0TGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0ubmV0TGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5yb2xlcyA9IHJlcy5yZXN1bHQuZGF0YVswXS5yb2xlcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGVycil7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYXBwSWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOnJlcy5yZXN1bHQub3BlbmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuYXBwSWQgPSByZXMucmVzdWx0Lm9wZW5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmNsYXNzaWNzTGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubmV0TGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIucm9sZXMgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ms6jlhoznlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU/IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU6J+a4uOWuoicrd2luZG93LnVzZXIuYXBwSWQuc3Vic3RyaW5nKHdpbmRvdy51c2VyLmFwcElkLmxlbmd0aC01KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWFpbkJpbmRFdmVudCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAvL+a3u+WKoOaOiOadg+aMiemSrlxyXG4gICAgICAgIHd4TG9naW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9naW5JbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsOiByZXMuYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgbmlja05hbWU6IHJlcy5uaWNrTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmjojmnYPlpLHotKUnKVxyXG4gICAgICAgIH0sdGhpcy5sb2dpbnBsYXkubm9kZSk7XHJcbiAgICAgICAgLy/lvIDlp4vmuLjmiI/mjInpkq5cclxuICAgICAgICBpZih0aGlzLmxvZ2lucGxheSA9PSBudWxsKSB0aGlzLmxvZ2lucGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvbG9naW5wbGF5JykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmxvZ2lucGxheS5ub2RlLm9uKCdjbGljaycsIHRoaXMubG9naW5MZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy52aXNpdG9ycGxheSA9PSBudWxsKSB0aGlzLnZpc2l0b3JwbGF5ID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy92aXNpdG9ycGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy52aXNpdG9ycGxheS5ub2RlLm9uKCdjbGljaycsIHRoaXMudmlzaXRvckxldmVsTGlzdCwgdGhpcylcclxuICAgICAgICBpZih0aGlzLm1haW5SYW5rID09IG51bGwpIHRoaXMubWFpblJhbmsgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL21haW5SYW5rJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLm1haW5SYW5rLm5vZGUub24oJ2NsaWNrJywgdGhpcy5zaG93TWFpblJhbmssIHRoaXMpXHJcblxyXG4gICAgICAgIGlmKHRoaXMucmV2aWV3TGV2ZWwgPT0gbnVsbCkgdGhpcy5yZXZpZXdMZXZlbCA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvcmV2aWV3TGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMucmV2aWV3TGV2ZWwubm9kZS5vbignY2xpY2snLCB0aGlzLnNob3dSZXZpZXdMZXZlbCwgdGhpcylcclxuXHJcbiAgICAgICAgaWYodGhpcy5idWlsZExldmVsID09IG51bGwpIHRoaXMuYnVpbGRMZXZlbCA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYnVpbGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5idWlsZExldmVsLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYnVpbGRcIik7XHJcblxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5tYWluU2hhcmUgPT0gbnVsbCkgdGhpcy5tYWluU2hhcmUgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL21haW5TaGFyZScpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMubWFpblNoYXJlLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRTdHJpbmcgPSAgJ+W/q+adpeaMkeaImOKAnOebiuaZuuaOqOeuseKAneWwj+a4uOaIj+WQp++8gSc7XHJcbiAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBpZih0aGlzLnNldHRpbmcgPT0gbnVsbCkgdGhpcy5zZXR0aW5nID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9zZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xvc2VTZXR0aW5nJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2hNb3ZlID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCByZWxhc3QgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXVzaWMgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9tdXNpYy9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUpIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSkgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5yZWxhc3QpIHJlbGFzdC5zdHJpbmcgPSAn5YWz6Zet5Zue6YCA5Yqf6IO9JztcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVsYXN0LnN0cmluZyA9ICflvIDlkK/lm57pgIDlip/og70nO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcubXVzaWMpIG11c2ljLnN0cmluZyA9ICflhbPpl63pn7PmlYgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBtdXNpYy5zdHJpbmcgPSAn5byA5ZCv6Z+z5pWIJztcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi90b3VjaE1vdmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG4JueCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflvIDlkK/op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG45YWz6ZetIOeCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIXJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DnpLroh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8jyEnLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbgm54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbjlhbPpl60g54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgIXJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOekuuiHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPIScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbnumAgOWKn+iDvVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnJlbGFzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnJlbGFzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Quc3RyaW5nID0gJ+W8gOWQr+WbnumAgOWKn+iDvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcucmVsYXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXN0LnN0cmluZyA9ICflhbPpl63lm57pgIDlip/og70nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL211c2ljJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57pgIDlip/og71cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tdXNpYyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljLnN0cmluZyA9ICflvIDlkK/pn7PmlYgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVzaWMuc3RyaW5nID0gJ+WFs+mXremfs+aViCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdzZXR0aW5nRGlhbG9nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgfSxcclxuICAgIGluaXRTZXR0aW5nKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdXNpYzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogd2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRNdXNpYygpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLm11c2ljKXtcclxuICAgICAgICAgICAgaWYoIXdpbmRvdy5iZ011c2ljIHx8ICF3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCh7dXNlV2ViQXVkaW9JbXBsZW1lbnQ6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJtdXNpYy9iZ19tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYmdNdXNpYy5zcmMgPWNsaXAudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmICF3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwibXVzaWMvbW92ZV9tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLnNyYyA9Y2xpcC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5sb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5wbGF5YmFja1JhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmJnTXVzaWMgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=