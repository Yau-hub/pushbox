
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

if (cc.sys.platform === cc.sys.WECHAT_GAME) {
  wx.cloud.init({
    env: window.env
  });
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
                  window.from = 'review';
                  window.reviewId = data._id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJiZ011c2ljIiwibW92ZU11c2ljIiwiY2MiLCJzeXMiLCJwbGF0Zm9ybSIsIldFQ0hBVF9HQU1FIiwid3giLCJjbG91ZCIsImluaXQiLCJ1c2VyIiwiY2xhc3NpY3NMZXZlbE51bSIsIm5ldExldmVsTnVtIiwibGV2ZWxJbmRleCIsImJnVXJsQmFzZSIsImxldmVsRmluaXNoTnVtIiwibG9naW5JbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbmVTYXlMYWJlbCIsInR5cGUiLCJMYWJlbCIsImxvZ2lucGxheSIsIkJ1dHRvbiIsInZpc2l0b3JwbGF5IiwibWFpblJhbmsiLCJsZXZlbExheW91dCIsIlByZWZhYiIsInJldmlld0xheW91dCIsInJldmlld0xldmVsIiwiYnVpbGRMZXZlbCIsInNldHRpbmciLCJtYWluU2hhcmUiLCJyYW5rSXRlbSIsIm9uTG9hZCIsIm1haW5CaW5kRXZlbnQiLCJmcm9tIiwiZ2FtZSIsIm9uIiwiRVZFTlRfU0hPVyIsInBhdXNlZCIsInBhdXNlIiwicGxheSIsInN0YXJ0IiwidGhhdCIsIkxvYWRpbmciLCJzaG93IiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInRoZW4iLCJyZXMiLCJyZXN1bHQiLCJ0b3RhbCIsImhpZGUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2FkSW1nIiwib25lU2F5IiwiZ2V0VXNlckluZm8iLCJpbml0U2V0dGluZyIsImNvbnRhaW5lciIsImZpbmQiLCJpbWdTZXJ2ZVVybCIsImltZ1VybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaW1hZ2VzIiwidXJsYmFzZSIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJ0ZXh0dXJlIiwic3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSIsInN0YXJOb2RlIiwiTm9kZSIsInNldFBvc2l0aW9uIiwic3RhclNwcml0ZSIsImFkZENvbXBvbmVudCIsIlNwcml0ZSIsInNpemVNb2RlIiwibm9kZSIsIndpZHRoIiwid2luU2l6ZSIsImhlaWdodCIsIm9wYWNpdHkiLCJhZGRDaGlsZCIsIm9wYWNpdHlUaW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9wZW4iLCJzZW5kIiwidXJsIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiaGl0b2tvdG8iLCJuZXdYSFIiLCJsb2dpbkxldmVsTGlzdCIsImxvZ2luVHlwZSIsIkNhbnZhc05vZGUiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwibG9hZGVyIiwibG9hZFJlcyIsInZpc2l0b3JMZXZlbExpc3QiLCJzaG93UmV2aWV3TGV2ZWwiLCJyZXZpZXdQYWdlIiwicmV2aWV3UGFnZVNpemUiLCJjb250ZW50IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJyZXNvdXJjZSIsInJlbmRlclJldmlld0xldmVsTGlzdCIsInBhZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRJdGVtTnVtIiwiY2hpbGRyZW5Db3VudCIsImRhdGEiLCJsZW5ndGgiLCJpIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIiwidXNlU3RlcE51bSIsInBvcnRyYWl0IiwidCIsInd4TG9naW5CdG4iLCJzZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJldmlld0lkIiwiX2lkIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzaG93TWFpblJhbmsiLCJyYW5rUGFnZSIsInJhbmtQYWdlU2l6ZSIsInJlbmRlck1haW5SYW5rTGlzdCIsImdldFN0b3JhZ2UiLCJhcHBJZCIsImZhaWwiLCJvcGVuaWQiLCJzdWJzdHJpbmciLCJBcnJheSIsInRpdFN0cmluZyIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicXVlcnkiLCJ0b3VjaE1vdmUiLCJjbGlja01vdmUiLCJyZWxhc3QiLCJtdXNpYyIsImNvbXBsZXRlIiwic2V0TXVzaWMiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsInVzZVdlYkF1ZGlvSW1wbGVtZW50IiwicmVzb3VyY2VzIiwibG9hZCIsIkF1ZGlvQ2xpcCIsImNsaXAiLCJzcmMiLCJsb29wIiwicGxheWJhY2tSYXRlIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7O0FBdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLEdBQVAsR0FBYSx5QkFBYjtBQUNBRCxNQUFNLENBQUNFLE9BQVAsR0FBZSxJQUFmO0FBQ0FGLE1BQU0sQ0FBQ0csU0FBUCxHQUFpQixJQUFqQjs7QUFDQSxJQUFJQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQkYsRUFBRSxDQUFDQyxHQUFILENBQU9FLFdBQS9CLEVBQTRDO0FBQ3hDQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjO0FBQUNULElBQUFBLEdBQUcsRUFBRUQsTUFBTSxDQUFDQztBQUFiLEdBQWQ7QUFDSDs7QUFDREQsTUFBTSxDQUFDVyxJQUFQLEdBQWMsRUFBZDtBQUNBWCxNQUFNLENBQUNZLGdCQUFQLEdBQTBCLENBQTFCO0FBQ0FaLE1BQU0sQ0FBQ2EsV0FBUCxHQUFxQixDQUFyQjtBQUNBYixNQUFNLENBQUNjLFVBQVAsR0FBb0IsQ0FBcEI7QUFDQWQsTUFBTSxDQUFDZSxTQUFQLEdBQW1CLEVBQW5CO0FBQ0FmLE1BQU0sQ0FBQ1csSUFBUCxDQUFZSyxjQUFaLEdBQTZCLENBQTdCO0FBQ0FoQixNQUFNLENBQUNpQixTQUFQLEdBQW1CO0FBQ2ZDLEVBQUFBLFNBQVMsRUFBRSxJQURJO0FBRWZDLEVBQUFBLFFBQVEsRUFBRTtBQUZLLENBQW5C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T0FBakI7QUFDSDs7QUFDRDlILE1BQUFBLE1BQU0sQ0FBQ0UsT0FBUCxHQUFpQixJQUFqQjtBQUNBRixNQUFBQSxNQUFNLENBQUNHLFNBQVAsR0FBbUIsSUFBbkI7QUFDSDtBQUNKO0FBcHBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxud2luZG93LmVudiA9IFwiY2xvdWQxLTVndmJ1aXkzZGQ5OWY2M2NcIlxyXG53aW5kb3cuYmdNdXNpYz1udWxsO1xyXG53aW5kb3cubW92ZU11c2ljPW51bGw7XHJcbmlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgd3guY2xvdWQuaW5pdCh7ZW52OiB3aW5kb3cuZW52fSlcclxufVxyXG53aW5kb3cudXNlciA9IHt9O1xyXG53aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5uZXRMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5sZXZlbEluZGV4ID0gMDtcclxud2luZG93LmJnVXJsQmFzZSA9ICcnO1xyXG53aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcbndpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICBhdmF0YXJVcmw6IG51bGwsXHJcbiAgICBuaWNrTmFtZTogbnVsbFxyXG59XHJcblxyXG5pbXBvcnQge3d4TG9naW4sVG9hc3QsTG9hZGluZyxmb3JtYXRlUmFua1RpbWV9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBvbmVTYXlMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5wbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgdmlzaXRvcnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICBtYWluUmFuazogY2MuQnV0dG9uLFxyXG4gICAgICAgIGxldmVsTGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcmV2aWV3TGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcmV2aWV3TGV2ZWw6IGNjLkJ1dHRvbixcclxuICAgICAgICBidWlsZExldmVsOiBjYy5CdXR0b24sXHJcbiAgICAgICAgc2V0dGluZzogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5TaGFyZTogY2MuQnV0dG9uLFxyXG4gICAgICAgIHJhbmtJdGVtOmNjLlByZWZhYixcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTDpFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvL+WKoOi9veS4gOiogFxyXG4gICAgICAgIC8vICB0aGlzLm9uZVNheSgpO1xyXG4gICAgICAgICB0aGlzLm1haW5CaW5kRXZlbnQoKTtcclxuICAgICAgICAgd2luZG93LmZyb20gPSAnbWFpbic7XHJcbiAgICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLph43mlrDov5Tlm57muLjmiI9cIik7XHJcbiAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiAhd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgIH0sdGhpcyk7XHJcbiAgICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG5cclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ2V0Q2xhc3NpY3NMZXZlbE51bSdcclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0gPSByZXMucmVzdWx0LnRvdGFsO1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMubG9hZEltZygpO1xyXG4gICAgICAgIHRoaXMub25lU2F5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB0aGlzLmluaXRTZXR0aW5nKCk7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBsb2FkSW1nOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9iaW5nQmcnKTsvL+WbvueJh+WRiOeOsOS9jee9rlxyXG4gICAgICAgIHZhciBpbWdTZXJ2ZVVybCA9ICdodHRwczovL3d3dy5iaW5nLmNvbS9IUEltYWdlQXJjaGl2ZS5hc3B4P2Zvcm1hdD1qcyZpZHg9MCZuPTEnO1xyXG4gICAgICAgIHZhciBpbWdVcmwgPSAnJztcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGltZ1VybCA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlICsgJ183MjB4MTI4MC5qcGcnXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmdVcmxCYXNlID0gJ2h0dHBzOi8vY24uYmluZy5jb20nICsgcmVzcG9uc2UuaW1hZ2VzWzBdLnVybGJhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoaW1nVXJsLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yib5bu65LiA5Liq5L2/55So5Zu+54mH6LWE5rqQ55qE5paw6IqC54K55a+56LGhXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJOb2RlID0gbmV3IGNjLk5vZGUoKTsgLy/liJvlu7rkuIDkuKrmlrDoioLngrlcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5uYW1lID0gXCJzdGFyMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLnNldFBvc2l0aW9uKDAsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJTcHJpdGUgPSBzdGFyTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTsgLy/lop7liqDnsr7ngbXnu4Tku7ZcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlOyAvL+iuvue9rueyvueBtee7hOS7tuWbvueJh+i1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUuc2l6ZU1vZGUgPSAnQ1VTVE9NJztcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLm5vZGUud2lkdGggPSBjYy53aW5TaXplLndpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLmhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHN0YXJOb2RlKTsgLy/lnLrmma/kuK3lop7liqDmlrDoioLngrlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wYWNpdHlUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3BhY2l0eT49MjU1KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwob3BhY2l0eVRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sNSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCBpbWdTZXJ2ZVVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0sXHJcbiAgICBvbmVTYXkoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly92MS5oaXRva290by5jbi9cIjtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgbGV0IG9uZVNheUxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9tYWluQmcvb25lU2F5XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgIGlmKHRoYXQub25lU2F5TGFiZWwgJiYgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCkgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICBlbHNlIGlmKG9uZVNheUxhYmVsICYmIG9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsICkgb25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIHRoaXMub25lU2F5TGFiZWwubm9kZS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgbmV3WEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIG5ld1hIUi5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3WEhSLnJlYWR5U3RhdGUgPT0gNCAmJiAobmV3WEhSLnN0YXR1cyA+PSAyMDAgJiYgbmV3WEhSLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZShuZXdYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGF0Lm9uZVNheUxhYmVsICYmIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwpIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9uZVNheUxhYmVsICYmIG9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsICkgb25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbmV3WEhSLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgbmV3WEhSLnNlbmQoKTtcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgfSxcclxuICAgIC8v5o6I5p2D55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICBsb2dpbkxldmVsTGlzdCgpe1xyXG5cclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3dlY2hhdCc7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIC8v5LiN55m75b2V55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICB2aXNpdG9yTGV2ZWxMaXN0KCl7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2dpblR5cGUgPSAndmlzaXRvcic7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGV2ZWxMaXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbExheW91dCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTGlzdCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jldmlld0xldmVsKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgdmFyIHJldmlld1BhZ2UgPSAxLHJldmlld1BhZ2VTaXplID0gNTA7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjYy5maW5kKCdyZXZpZXdMZXZlbExpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscmV2aWV3UGFnZSxyZXZpZXdQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJSZXZpZXdMZXZlbExpc3QoY29udGVudCxyZXZpZXdQYWdlLHJldmlld1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5maW5kKCdyZXZpZXdMZXZlbExpc3QnLG5ld015UHJlZmFiKS5vbignYm91bmNlLWJvdHRvbScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXZpZXdQYWdlKys7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclJldmlld0xldmVsTGlzdChjb250ZW50LHJldmlld1BhZ2UscmV2aWV3UGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyZXZpZXdMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gIHJlcy5yZXN1bHQuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoYXQucmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5rSXRlbSA9PSBudWxsKSByYW5rSXRlbSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGREYXRlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRlUmFua1RpbWUoZGF0YS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS51c2VTdGVwTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnBvcnRyYWl0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGRhdGEucG9ydHJhaXQrJz9hYWE9YWEuanBnJywgIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdtYXNrL0ltYWdlJyxub2RlLmdldENoaWxkQnlOYW1lKCd0ZFBvcnRyYWl0JykpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5uaWNrTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZE5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiK2RhdGEubmlja05hbWUrXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5vbigndG91Y2hlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy53eExvZ2luQnRuICkgd2luZG93Lnd4TG9naW5CdG4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdyZXZpZXdMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZyb20gPSAncmV2aWV3JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXZpZXdJZCA9IGRhdGEuX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmhlaWdodCA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudCAqIHJhbmtJdGVtLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCIsMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHNob3dNYWluUmFuaygpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciByYW5rUGFnZSA9IDEscmFua1BhZ2VTaXplID0gNTA7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjYy5maW5kKCdyYW5rTGlzdC92aWV3L2NvbnRlbnQnLG5ld015UHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2Nsb3NlJyxuZXdNeVByZWZhYikub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBpZih0aGF0LnJhbmtJdGVtID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtJdGVtJywgZnVuY3Rpb24gKGVycixyZXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmFua0l0ZW0gPSBjYy5pbnN0YW50aWF0ZShyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGNjLmZpbmQoJ3JhbmtMaXN0JyxuZXdNeVByZWZhYikub24oJ2JvdW5jZS1ib3R0b20nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICByYW5rUGFnZSsrO1xyXG4gICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0xheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxwYWdlLHBhZ2VTaXplKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtTnVtID0gY29udGVudC5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGk8PSByZXMucmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMucmVzdWx0LmRhdGFbaS0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGF0LnJhbmtJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZFJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkrY3VycmVudEl0ZW1OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkRGF0ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0ZVJhbmtUaW1lKGRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEubGV2ZWxGaW5pc2hOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEucG9ydHJhaXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZGF0YS5wb3J0cmFpdCsnP2FhYT1hYS5qcGcnLCAgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ21hc2svSW1hZ2UnLG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUG9ydHJhaXQnKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLm5pY2tOYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIrZGF0YS5uaWNrTmFtZStcIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmhlaWdodCA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudCAqIHJhbmtJdGVtLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCIsMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRVc2VySW5mbygpe1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPlue8k+WtmGFwcElk5Yik5pat5piv5ZCm56ys5LiA5qyh6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnYXBwSWQnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuYXBwSWQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5sZXZlbEZpbmlzaE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmNsYXNzaWNzTGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0uY2xhc3NpY3NMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5ldExldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpe1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcElkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTpyZXMucmVzdWx0Lm9wZW5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmFwcElkID0gcmVzLnJlc3VsdC5vcGVuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ms6jlhoznlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU/IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU6J+a4uOWuoicrd2luZG93LnVzZXIuYXBwSWQuc3Vic3RyaW5nKHdpbmRvdy51c2VyLmFwcElkLmxlbmd0aC01KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWFpbkJpbmRFdmVudCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAvL+a3u+WKoOaOiOadg+aMiemSrlxyXG4gICAgICAgIHd4TG9naW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9naW5JbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsOiByZXMuYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgbmlja05hbWU6IHJlcy5uaWNrTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmjojmnYPlpLHotKUnKVxyXG4gICAgICAgIH0sdGhpcy5sb2dpbnBsYXkubm9kZSk7XHJcbiAgICAgICAgLy/lvIDlp4vmuLjmiI/mjInpkq5cclxuICAgICAgICBpZih0aGlzLmxvZ2lucGxheSA9PSBudWxsKSB0aGlzLmxvZ2lucGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvbG9naW5wbGF5JykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmxvZ2lucGxheS5ub2RlLm9uKCdjbGljaycsIHRoaXMubG9naW5MZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy52aXNpdG9ycGxheSA9PSBudWxsKSB0aGlzLnZpc2l0b3JwbGF5ID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy92aXNpdG9ycGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy52aXNpdG9ycGxheS5ub2RlLm9uKCdjbGljaycsIHRoaXMudmlzaXRvckxldmVsTGlzdCwgdGhpcylcclxuICAgICAgICBpZih0aGlzLm1haW5SYW5rID09IG51bGwpIHRoaXMubWFpblJhbmsgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL21haW5SYW5rJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLm1haW5SYW5rLm5vZGUub24oJ2NsaWNrJywgdGhpcy5zaG93TWFpblJhbmssIHRoaXMpXHJcblxyXG4gICAgICAgIGlmKHRoaXMucmV2aWV3TGV2ZWwgPT0gbnVsbCkgdGhpcy5yZXZpZXdMZXZlbCA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvcmV2aWV3TGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMucmV2aWV3TGV2ZWwubm9kZS5vbignY2xpY2snLCB0aGlzLnNob3dSZXZpZXdMZXZlbCwgdGhpcylcclxuXHJcbiAgICAgICAgaWYodGhpcy5idWlsZExldmVsID09IG51bGwpIHRoaXMuYnVpbGRMZXZlbCA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYnVpbGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5idWlsZExldmVsLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYnVpbGRcIik7XHJcblxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5tYWluU2hhcmUgPT0gbnVsbCkgdGhpcy5tYWluU2hhcmUgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL21haW5TaGFyZScpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMubWFpblNoYXJlLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRTdHJpbmcgPSAgJ+W/q+adpeaMkeaImOKAnOebiuaZuuaOqOeuseKAneWwj+a4uOaIj+WQp++8gSc7XHJcbiAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBpZih0aGlzLnNldHRpbmcgPT0gbnVsbCkgdGhpcy5zZXR0aW5nID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9zZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xvc2VTZXR0aW5nJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2hNb3ZlID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCByZWxhc3QgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXVzaWMgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9tdXNpYy9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUpIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSkgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5yZWxhc3QpIHJlbGFzdC5zdHJpbmcgPSAn5YWz6Zet5Zue6YCA5Yqf6IO9JztcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVsYXN0LnN0cmluZyA9ICflvIDlkK/lm57pgIDlip/og70nO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcubXVzaWMpIG11c2ljLnN0cmluZyA9ICflhbPpl63pn7PmlYgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBtdXNpYy5zdHJpbmcgPSAn5byA5ZCv6Z+z5pWIJztcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi90b3VjaE1vdmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG4JueCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflvIDlkK/op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG45YWz6ZetIOeCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIXJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DnpLroh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8jyEnLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbgm54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbjlhbPpl60g54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgIXJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOekuuiHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPIScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbnumAgOWKn+iDvVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnJlbGFzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnJlbGFzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Quc3RyaW5nID0gJ+W8gOWQr+WbnumAgOWKn+iDvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcucmVsYXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXN0LnN0cmluZyA9ICflhbPpl63lm57pgIDlip/og70nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL211c2ljJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57pgIDlip/og71cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tdXNpYyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljLnN0cmluZyA9ICflvIDlkK/pn7PmlYgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVzaWMuc3RyaW5nID0gJ+WFs+mXremfs+aViCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdzZXR0aW5nRGlhbG9nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgfSxcclxuICAgIGluaXRTZXR0aW5nKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdXNpYzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogd2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRNdXNpYygpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLm11c2ljKXtcclxuICAgICAgICAgICAgaWYoIXdpbmRvdy5iZ011c2ljIHx8ICF3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCh7dXNlV2ViQXVkaW9JbXBsZW1lbnQ6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJtdXNpYy9iZ19tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYmdNdXNpYy5zcmMgPWNsaXAudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmICF3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwibXVzaWMvbW92ZV9tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLnNyYyA9Y2xpcC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5sb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5wbGF5YmFja1JhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmJnTXVzaWMgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=