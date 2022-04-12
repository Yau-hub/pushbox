
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJiZ011c2ljIiwibW92ZU11c2ljIiwiY2MiLCJzeXMiLCJwbGF0Zm9ybSIsIldFQ0hBVF9HQU1FIiwid3giLCJjbG91ZCIsImluaXQiLCJ1c2VyIiwiY2xhc3NpY3NMZXZlbE51bSIsIm5ldExldmVsTnVtIiwibGV2ZWxJbmRleCIsImJnVXJsQmFzZSIsImxldmVsRmluaXNoTnVtIiwibG9naW5JbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbmVTYXlMYWJlbCIsInR5cGUiLCJMYWJlbCIsImxvZ2lucGxheSIsIkJ1dHRvbiIsInZpc2l0b3JwbGF5IiwibWFpblJhbmsiLCJsZXZlbExheW91dCIsIlByZWZhYiIsImJ1aWxkTGV2ZWwiLCJzZXR0aW5nIiwibWFpblNoYXJlIiwicmFua0l0ZW0iLCJvbkxvYWQiLCJtYWluQmluZEV2ZW50IiwiZnJvbSIsImdhbWUiLCJvbiIsIkVWRU5UX1NIT1ciLCJwYXVzZWQiLCJwYXVzZSIsInBsYXkiLCJzdGFydCIsInRoYXQiLCJMb2FkaW5nIiwic2hvdyIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJoaWRlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibG9hZEltZyIsIm9uZVNheSIsImdldFVzZXJJbmZvIiwiaW5pdFNldHRpbmciLCJjb250YWluZXIiLCJmaW5kIiwiaW1nU2VydmVVcmwiLCJpbWdVcmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImltYWdlcyIsInVybGJhc2UiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlRnJhbWUiLCJzdGFyTm9kZSIsIk5vZGUiLCJzZXRQb3NpdGlvbiIsInN0YXJTcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzaXplTW9kZSIsIm5vZGUiLCJ3aWR0aCIsIndpblNpemUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiYWRkQ2hpbGQiLCJvcGFjaXR5VGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJvcGVuIiwic2VuZCIsInVybCIsImdldENvbXBvbmVudCIsInN0cmluZyIsImhpdG9rb3RvIiwibmV3WEhSIiwibG9naW5MZXZlbExpc3QiLCJsb2dpblR5cGUiLCJDYW52YXNOb2RlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImxvYWRlciIsImxvYWRSZXMiLCJ2aXNpdG9yTGV2ZWxMaXN0Iiwic2hvd01haW5SYW5rIiwicmFua1BhZ2UiLCJyYW5rUGFnZVNpemUiLCJjb250ZW50IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJyZXNvdXJjZSIsInJlbmRlck1haW5SYW5rTGlzdCIsInBhZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRJdGVtTnVtIiwiY2hpbGRyZW5Db3VudCIsImRhdGEiLCJsZW5ndGgiLCJpIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIiwicG9ydHJhaXQiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsImFwcElkIiwiZmFpbCIsInNldFN0b3JhZ2UiLCJvcGVuaWQiLCJzdWJzdHJpbmciLCJBcnJheSIsInd4TG9naW5CdG4iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInRpdFN0cmluZyIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicXVlcnkiLCJ0b3VjaE1vdmUiLCJjbGlja01vdmUiLCJyZWxhc3QiLCJtdXNpYyIsImNvbXBsZXRlIiwic2V0TXVzaWMiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsInVzZVdlYkF1ZGlvSW1wbGVtZW50IiwicmVzb3VyY2VzIiwibG9hZCIsIkF1ZGlvQ2xpcCIsImNsaXAiLCJzcmMiLCJsb29wIiwicGxheWJhY2tSYXRlIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7O0FBdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLEdBQVAsR0FBYSx5QkFBYjtBQUNBRCxNQUFNLENBQUNFLE9BQVAsR0FBZSxJQUFmO0FBQ0FGLE1BQU0sQ0FBQ0csU0FBUCxHQUFpQixJQUFqQjs7QUFDQSxJQUFJQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQkYsRUFBRSxDQUFDQyxHQUFILENBQU9FLFdBQS9CLEVBQTRDO0FBQ3hDQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjO0FBQUNULElBQUFBLEdBQUcsRUFBRUQsTUFBTSxDQUFDQztBQUFiLEdBQWQ7QUFDSDs7QUFDREQsTUFBTSxDQUFDVyxJQUFQLEdBQWMsRUFBZDtBQUNBWCxNQUFNLENBQUNZLGdCQUFQLEdBQTBCLENBQTFCO0FBQ0FaLE1BQU0sQ0FBQ2EsV0FBUCxHQUFxQixDQUFyQjtBQUNBYixNQUFNLENBQUNjLFVBQVAsR0FBb0IsQ0FBcEI7QUFDQWQsTUFBTSxDQUFDZSxTQUFQLEdBQW1CLEVBQW5CO0FBQ0FmLE1BQU0sQ0FBQ1csSUFBUCxDQUFZSyxjQUFaLEdBQTZCLENBQTdCO0FBQ0FoQixNQUFNLENBQUNpQixTQUFQLEdBQW1CO0FBQ2ZDLEVBQUFBLFNBQVMsRUFBRSxJQURJO0FBRWZDLEVBQUFBLFFBQVEsRUFBRTtBQUZLLENBQW5CO0FBT0FmLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBUztBQUNMLGFBQVNoQixFQUFFLENBQUNpQixTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRDLE1BQUFBLElBQUks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QUFDSjtBQXRqQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbndpbmRvdy5lbnYgPSBcImNsb3VkMS01Z3ZidWl5M2RkOTlmNjNjXCJcclxud2luZG93LmJnTXVzaWM9bnVsbDtcclxud2luZG93Lm1vdmVNdXNpYz1udWxsO1xyXG5pZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgIHd4LmNsb3VkLmluaXQoe2Vudjogd2luZG93LmVudn0pXHJcbn1cclxud2luZG93LnVzZXIgPSB7fTtcclxud2luZG93LmNsYXNzaWNzTGV2ZWxOdW0gPSAwO1xyXG53aW5kb3cubmV0TGV2ZWxOdW0gPSAwO1xyXG53aW5kb3cubGV2ZWxJbmRleCA9IDA7XHJcbndpbmRvdy5iZ1VybEJhc2UgPSAnJztcclxud2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSAwO1xyXG53aW5kb3cubG9naW5JbmZvID0ge1xyXG4gICAgYXZhdGFyVXJsOiBudWxsLFxyXG4gICAgbmlja05hbWU6IG51bGxcclxufVxyXG5cclxuaW1wb3J0IHt3eExvZ2luLFRvYXN0LExvYWRpbmcsZm9ybWF0ZVJhbmtUaW1lfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgb25lU2F5TGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2lucGxheTogY2MuQnV0dG9uLFxyXG4gICAgICAgIHZpc2l0b3JwbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgbWFpblJhbms6IGNjLkJ1dHRvbixcclxuICAgICAgICBsZXZlbExheW91dDogY2MuUHJlZmFiLFxyXG4gICAgICAgIGJ1aWxkTGV2ZWw6IGNjLkJ1dHRvbixcclxuICAgICAgICBzZXR0aW5nOiBjYy5CdXR0b24sXHJcbiAgICAgICAgbWFpblNoYXJlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgcmFua0l0ZW06Y2MuUHJlZmFiLFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMOkUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8v5Yqg6L295LiA6KiAXHJcbiAgICAgICAgLy8gIHRoaXMub25lU2F5KCk7XHJcbiAgICAgICAgIHRoaXMubWFpbkJpbmRFdmVudCgpO1xyXG4gICAgICAgICB3aW5kb3cuZnJvbSA9ICdtYWluJztcclxuICAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumHjeaWsOi/lOWbnua4uOaIj1wiKTtcclxuICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmICF3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiB3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBsYXkoKTtcclxuICAgICAgICAgfSx0aGlzKTtcclxuICAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcblxyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdnZXRDbGFzc2ljc0xldmVsTnVtJ1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQudG90YWw7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkSW1nKCk7XHJcbiAgICAgICAgdGhpcy5vbmVTYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNldHRpbmcoKTtcclxuXHJcblxyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGxvYWRJbWc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2JpbmdCZycpOy8v5Zu+54mH5ZGI546w5L2N572uXHJcbiAgICAgICAgdmFyIGltZ1NlcnZlVXJsID0gJ2h0dHBzOi8vd3d3LmJpbmcuY29tL0hQSW1hZ2VBcmNoaXZlLmFzcHg/Zm9ybWF0PWpzJmlkeD0wJm49MSc7XHJcbiAgICAgICAgdmFyIGltZ1VybCA9ICcnO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgaW1nVXJsID0gJ2h0dHBzOi8vY24uYmluZy5jb20nICsgcmVzcG9uc2UuaW1hZ2VzWzBdLnVybGJhc2UgKyAnXzcyMHgxMjgwLmpwZydcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ1VybEJhc2UgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbScgKyByZXNwb25zZS5pbWFnZXNbMF0udXJsYmFzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShpbWdVcmwsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/liJvlu7rkuIDkuKrkvb/nlKjlm77niYfotYTmupDnmoTmlrDoioLngrnlr7nosaFcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3Rhck5vZGUgPSBuZXcgY2MuTm9kZSgpOyAvL+WIm+W7uuS4gOS4quaWsOiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLm5hbWUgPSBcInN0YXIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUuc2V0UG9zaXRpb24oMCwwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhclNwcml0ZSA9IHN0YXJOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpOyAvL+WinuWKoOeyvueBtee7hOS7tlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5zaXplTW9kZSA9ICdDVVNUT00nO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUubm9kZS53aWR0aCA9IGNjLndpblNpemUud2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLm5vZGUuaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoc3Rhck5vZGUpOyAvL+WcuuaZr+S4reWinuWKoOaWsOiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eVRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcGFjaXR5Pj0yNTUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChvcGFjaXR5VGltZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSw1KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiZ2V0XCIsIGltZ1NlcnZlVXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSxcclxuICAgIG9uZVNheSgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgdXJsID0gXCJodHRwczovL3YxLmhpdG9rb3RvLmNuL1wiO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBsZXQgb25lU2F5TGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL21haW5CZy9vbmVTYXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgaWYodGhhdC5vbmVTYXlMYWJlbCAmJiB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsKSB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYob25lU2F5TGFiZWwgJiYgb25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwgKSBvbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgdGhpcy5vbmVTYXlMYWJlbC5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBuZXdYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgbmV3WEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdYSFIucmVhZHlTdGF0ZSA9PSA0ICYmIChuZXdYSFIuc3RhdHVzID49IDIwMCAmJiBuZXdYSFIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICBKU09OLnBhcnNlKG5ld1hIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoYXQub25lU2F5TGFiZWwgJiYgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCkgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYob25lU2F5TGFiZWwgJiYgb25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwgKSBvbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBuZXdYSFIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBuZXdYSFIuc2VuZCgpO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICB9LFxyXG4gICAgLy/mjojmnYPnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIGxvZ2luTGV2ZWxMaXN0KCl7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2dpblR5cGUgPSAnd2VjaGF0JztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbGV2ZWxMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgLy/kuI3nmbvlvZXnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIHZpc2l0b3JMZXZlbExpc3QoKXtcclxuXHJcbiAgICAgICAgd2luZG93LmxvZ2luVHlwZSA9ICd2aXNpdG9yJztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbGV2ZWxMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG4gICAgICAgIC8vIGxldCBsZXZlbExpc3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxldmVsTGF5b3V0KTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobGV2ZWxMaXN0KTtcclxuICAgIH0sXHJcbiAgICBzaG93TWFpblJhbmsoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICB2YXIgcmFua1BhZ2UgPSAxLHJhbmtQYWdlU2l6ZSA9IDUwO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2MuZmluZCgncmFua0xpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBjYy5maW5kKCdyYW5rTGlzdCcsbmV3TXlQcmVmYWIpLm9uKCdib3VuY2UtYm90dG9tJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgcmFua1BhZ2UrKztcclxuICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCByYW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAxOyBpPD0gcmVzLnJlc3VsdC5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSAgcmVzLnJlc3VsdC5kYXRhW2ktMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhhdC5yYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmtJdGVtID09IG51bGwpIHJhbmtJdGVtID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRSYW5rJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpK2N1cnJlbnRJdGVtTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZERhdGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZvcm1hdGVSYW5rVGltZShkYXRhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnBvcnRyYWl0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGRhdGEucG9ydHJhaXQrJz9hYWE9YWEuanBnJywgIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdtYXNrL0ltYWdlJyxub2RlLmdldENoaWxkQnlOYW1lKCd0ZFBvcnRyYWl0JykpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5uaWNrTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZE5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiK2RhdGEubmlja05hbWUrXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5oZWlnaHQgPSBjb250ZW50LmNoaWxkcmVuQ291bnQgKiByYW5rSXRlbS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuayoeacieabtOWkmuaVsOaNruS6hlwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bnvJPlrZhhcHBJZOWIpOaWreaYr+WQpuesrOS4gOasoei/m+WFpea4uOaIj1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2FwcElkJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmFwcElkID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0ubGV2ZWxGaW5pc2hOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmNsYXNzaWNzTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5uZXRMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5uZXRMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKXtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbidcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhcHBJZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6cmVzLnJlc3VsdC5vcGVuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5hcHBJZCA9IHJlcy5yZXN1bHQub3BlbmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5uZXRMZXZlbE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aDw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5rOo5YaM55So5oi35L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lPyB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1haW5CaW5kRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy/mt7vliqDmjojmnYPmjInpkq5cclxuICAgICAgICB3eExvZ2luKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvZ2luSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybDogcmVzLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiByZXMubmlja05hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2D5aSx6LSlJylcclxuICAgICAgICB9LHRoaXMubG9naW5wbGF5Lm5vZGUpO1xyXG4gICAgICAgIC8v5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgaWYodGhpcy5sb2dpbnBsYXkgPT0gbnVsbCkgdGhpcy5sb2dpbnBsYXkgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2xvZ2lucGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5sb2dpbnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLmxvZ2luTGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMudmlzaXRvcnBsYXkgPT0gbnVsbCkgdGhpcy52aXNpdG9ycGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvdmlzaXRvcnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMudmlzaXRvcnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLnZpc2l0b3JMZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5tYWluUmFuayA9PSBudWxsKSB0aGlzLm1haW5SYW5rID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluUmFuaycpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5tYWluUmFuay5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2hvd01haW5SYW5rLCB0aGlzKVxyXG5cclxuICAgICAgICBpZih0aGlzLmJ1aWxkTGV2ZWwgPT0gbnVsbCkgdGhpcy5idWlsZExldmVsID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9idWlsZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmJ1aWxkTGV2ZWwubm9kZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy53eExvZ2luQnRuICkgd2luZG93Lnd4TG9naW5CdG4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJidWlsZFwiKTtcclxuXHJcbiAgICAgICAgfSwgdGhpcylcclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMubWFpblNoYXJlID09IG51bGwpIHRoaXMubWFpblNoYXJlID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluU2hhcmUnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLm1haW5TaGFyZS5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICflv6vmnaXmjJHmiJjigJznm4rmmbrmjqjnrrHigJ3lsI/muLjmiI/lkKfvvIEnO1xyXG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG5cclxuICAgICAgICBpZih0aGlzLnNldHRpbmcgPT0gbnVsbCkgdGhpcy5zZXR0aW5nID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9zZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xvc2VTZXR0aW5nJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2hNb3ZlID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCByZWxhc3QgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXVzaWMgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9tdXNpYy9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUpIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSkgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5yZWxhc3QpIHJlbGFzdC5zdHJpbmcgPSAn5YWz6Zet5Zue6YCA5Yqf6IO9JztcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVsYXN0LnN0cmluZyA9ICflvIDlkK/lm57pgIDlip/og70nO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcubXVzaWMpIG11c2ljLnN0cmluZyA9ICflhbPpl63pn7PmlYgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBtdXNpYy5zdHJpbmcgPSAn5byA5ZCv6Z+z5pWIJztcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi90b3VjaE1vdmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG4JueCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflvIDlkK/op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG45YWz6ZetIOeCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIXJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DnpLroh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8jyEnLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbgm54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbjlhbPpl60g54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgIXJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOekuuiHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPIScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbnumAgOWKn+iDvVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnJlbGFzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnJlbGFzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Quc3RyaW5nID0gJ+W8gOWQr+WbnumAgOWKn+iDvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcucmVsYXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXN0LnN0cmluZyA9ICflhbPpl63lm57pgIDlip/og70nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL211c2ljJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57pgIDlip/og71cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tdXNpYyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljLnN0cmluZyA9ICflvIDlkK/pn7PmlYgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVzaWMuc3RyaW5nID0gJ+WFs+mXremfs+aViCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdzZXR0aW5nRGlhbG9nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgfSxcclxuICAgIGluaXRTZXR0aW5nKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdXNpYzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogd2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRNdXNpYygpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLm11c2ljKXtcclxuICAgICAgICAgICAgaWYoIXdpbmRvdy5iZ011c2ljIHx8ICF3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCh7dXNlV2ViQXVkaW9JbXBsZW1lbnQ6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJtdXNpYy9iZ19tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYmdNdXNpYy5zcmMgPWNsaXAudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmICF3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwibXVzaWMvbW92ZV9tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLnNyYyA9Y2xpcC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5sb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5wbGF5YmFja1JhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmJnTXVzaWMgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=