
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

var _level = _interopRequireDefault(require("./level"));

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.env = "cloud1-5gvbuiy3dd99f63c";

if (cc.sys.platform === cc.sys.WECHAT_GAME) {
  wx.cloud.init({
    env: window.env
  });
}

window.userInfo = {};
window.classicsLevelNum = 0;
window.netLevelNum = 0;
window.levelIndex = 0;
window.bgUrlBase = '';
cc.Class({
  "extends": cc.Component,
  properties: {
    oneSayLabel: {
      "default": null,
      type: cc.Label
    },
    loginplay: cc.Button,
    visitorplay: cc.Button,
    levelLayout: cc.Prefab,
    buildLevel: cc.Button,
    setting: cc.Button,
    mainShare: cc.Button
  },
  // LIFE-CYCL:E CALLBACKS:
  onLoad: function onLoad() {
    //加载一言
    //  this.oneSay();
    this.mainBindEvent();
  },
  start: function start() {
    var that = this;

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      // wx.cloud.callFunction({
      //     name: 'addClassicsLevel',
      //     data:{
      //         content: levels[0],
      //         levelIndex: 1
      //     }
      // }).then(res => {
      //     console.log(res)
      // }).catch(err => {
      //     console.error(err)
      // })
      wx.cloud.callFunction({
        name: 'getClassicsLevelNum'
      }).then(function (res) {
        window.classicsLevelNum = res.result.total;
      })["catch"](function (err) {
        console.error(err);
      });
    } // this.loadImg();
    //
    // setInterval(function () {
    //     that.oneSay();
    // },10000)


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
          container.addChild(starNode); //场景中增加新节点
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
    var oneSayLabel = cc.find("Canvas/mainBg/oneSay").getComponent(cc.Component);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        var response = JSON.parse(xhr.responseText);
        if (that.oneSayLabel && that.oneSayLabel.string != null) that.oneSayLabel.string = response.hitokoto + ' -- ' + response.from;else if (oneSayLabel && oneSayLabel.string != null) oneSayLabel.string = response.hitokoto + ' -- ' + response.from;
      }
    };

    xhr.open("get", url, true);
    xhr.send();
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

    cc.loader.loadRes('levelLayout', onResourceLoaded); // let levelList = cc.instantiate(this.levelLayout);
    // this.node.addChild(levelList);
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
  getUserInfo: function getUserInfo() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      //获取缓存appId判断是否第一次进入游戏
      wx.getStorage({
        key: 'appId',
        success: function success(res) {
          window.userInfo.appId = res.data;
          wx.cloud.callFunction({
            name: 'queryUser',
            data: {
              appId: window.userInfo.appId
            }
          }).then(function (res) {
            if (res && res.result.data.length > 0) {
              window.userInfo.classicsLevelNum = res.result.data[0].classicsLevelNum;
              window.userInfo.netLevelNum = res.result.data[0].netLevelNum;
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
                data: res.result.appid
              });
              wx.setStorage({
                key: "openId",
                data: res.result.openid
              });
              window.userInfo.appId = res.result.appid;
              window.userInfo.classicsLevelNum = 0;
              window.userInfo.netLevelNum = 0; //注册用户信息

              wx.cloud.callFunction({
                name: 'addUser',
                data: {
                  appId: res.result.appid,
                  openId: res.result.openid
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
        if (window.setting.touchMove) touchMove.string = '关闭触摸移动';else touchMove.string = '开启触摸移动';
        if (window.setting.clickMove) clickMove.string = '关闭按键移动';else clickMove.string = '开启按键移动';
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
        CanvasNode.addChild(newMyPrefab);
      };

      cc.loader.loadRes('settingDialog', onResourceLoaded);
    }, this);
  },
  initSetting: function initSetting() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.getStorage({
        key: 'setting',
        success: function success(res) {
          window.setting = res.data;
        },
        fail: function fail(err) {
          window.setting = {
            touchMove: true,
            clickMove: true
          };
          wx.setStorage({
            key: 'setting',
            data: window.setting
          });
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsImNsb3VkIiwiaW5pdCIsInVzZXJJbmZvIiwiY2xhc3NpY3NMZXZlbE51bSIsIm5ldExldmVsTnVtIiwibGV2ZWxJbmRleCIsImJnVXJsQmFzZSIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uZVNheUxhYmVsIiwidHlwZSIsIkxhYmVsIiwibG9naW5wbGF5IiwiQnV0dG9uIiwidmlzaXRvcnBsYXkiLCJsZXZlbExheW91dCIsIlByZWZhYiIsImJ1aWxkTGV2ZWwiLCJzZXR0aW5nIiwibWFpblNoYXJlIiwib25Mb2FkIiwibWFpbkJpbmRFdmVudCIsInN0YXJ0IiwidGhhdCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRVc2VySW5mbyIsImluaXRTZXR0aW5nIiwibG9hZEltZyIsImNvbnRhaW5lciIsImZpbmQiLCJpbWdTZXJ2ZVVybCIsImltZ1VybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaW1hZ2VzIiwidXJsYmFzZSIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJ0ZXh0dXJlIiwic3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSIsInN0YXJOb2RlIiwiTm9kZSIsInNldFBvc2l0aW9uIiwic3RhclNwcml0ZSIsImFkZENvbXBvbmVudCIsIlNwcml0ZSIsInNpemVNb2RlIiwibm9kZSIsIndpZHRoIiwid2luU2l6ZSIsImhlaWdodCIsImFkZENoaWxkIiwib3BlbiIsInNlbmQiLCJvbmVTYXkiLCJ1cmwiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJoaXRva290byIsImZyb20iLCJsb2dpbkxldmVsTGlzdCIsImxvZ2luVHlwZSIsIkNhbnZhc05vZGUiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwibG9hZGVyIiwibG9hZFJlcyIsInZpc2l0b3JMZXZlbExpc3QiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsImFwcElkIiwiZGF0YSIsImxlbmd0aCIsImZhaWwiLCJzZXRTdG9yYWdlIiwiYXBwaWQiLCJvcGVuaWQiLCJvcGVuSWQiLCJsb2dpbkluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIm9uIiwidGl0U3RyaW5nIiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJxdWVyeSIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwidG91Y2hNb3ZlIiwiY2xpY2tNb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7OztBQW5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxHQUFQLEdBQWEseUJBQWI7O0FBQ0EsSUFBSUMsRUFBRSxDQUFDQyxHQUFILENBQU9DLFFBQVAsS0FBb0JGLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRSxXQUEvQixFQUE0QztBQUN4Q0MsRUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNDLElBQVQsQ0FBYztBQUFDUCxJQUFBQSxHQUFHLEVBQUVELE1BQU0sQ0FBQ0M7QUFBYixHQUFkO0FBQ0g7O0FBQ0RELE1BQU0sQ0FBQ1MsUUFBUCxHQUFrQixFQUFsQjtBQUNBVCxNQUFNLENBQUNVLGdCQUFQLEdBQTBCLENBQTFCO0FBQ0FWLE1BQU0sQ0FBQ1csV0FBUCxHQUFxQixDQUFyQjtBQUNBWCxNQUFNLENBQUNZLFVBQVAsR0FBb0IsQ0FBcEI7QUFDQVosTUFBTSxDQUFDYSxTQUFQLEdBQW1C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QWQ7QUFnQkg7QUFDSjtBQTNXSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxud2luZG93LmVudiA9IFwiY2xvdWQxLTVndmJ1aXkzZGQ5OWY2M2NcIlxyXG5pZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgIHd4LmNsb3VkLmluaXQoe2Vudjogd2luZG93LmVudn0pXHJcbn1cclxud2luZG93LnVzZXJJbmZvID0ge307XHJcbndpbmRvdy5jbGFzc2ljc0xldmVsTnVtID0gMDtcclxud2luZG93Lm5ldExldmVsTnVtID0gMDtcclxud2luZG93LmxldmVsSW5kZXggPSAwO1xyXG53aW5kb3cuYmdVcmxCYXNlID0gJyc7XHJcblxyXG5cclxuXHJcbmltcG9ydCBsZXZlbHMgZnJvbSAnLi9sZXZlbCdcclxuaW1wb3J0IHt3eExvZ2luLFRvYXN0fSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgb25lU2F5TGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2lucGxheTogY2MuQnV0dG9uLFxyXG4gICAgICAgIHZpc2l0b3JwbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgbGV2ZWxMYXlvdXQ6IGNjLlByZWZhYixcclxuICAgICAgICBidWlsZExldmVsOiBjYy5CdXR0b24sXHJcbiAgICAgICAgc2V0dGluZzogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5TaGFyZTogY2MuQnV0dG9uLFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMOkUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8v5Yqg6L295LiA6KiAXHJcbiAgICAgICAgLy8gIHRoaXMub25lU2F5KCk7XHJcblxyXG4gICAgICAgICB0aGlzLm1haW5CaW5kRXZlbnQoKTtcclxuXHJcblxyXG4gICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIC8vIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIC8vICAgICBuYW1lOiAnYWRkQ2xhc3NpY3NMZXZlbCcsXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhOntcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb250ZW50OiBsZXZlbHNbMF0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxJbmRleDogMVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgLy8gfSlcclxuXHJcblxyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dldENsYXNzaWNzTGV2ZWxOdW0nXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGFzc2ljc0xldmVsTnVtID0gcmVzLnJlc3VsdC50b3RhbDtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9hZEltZygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICB0aGF0Lm9uZVNheSgpO1xyXG4gICAgICAgIC8vIH0sMTAwMDApXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB0aGlzLmluaXRTZXR0aW5nKCk7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuXHJcblxyXG4gICAgbG9hZEltZzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYmluZ0JnJyk7Ly/lm77niYflkYjnjrDkvY3nva5cclxuICAgICAgICB2YXIgaW1nU2VydmVVcmwgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vSFBJbWFnZUFyY2hpdmUuYXNweD9mb3JtYXQ9anMmaWR4PTAmbj0xJztcclxuICAgICAgICB2YXIgaW1nVXJsID0gJyc7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpbWdVcmwgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbScgKyByZXNwb25zZS5pbWFnZXNbMF0udXJsYmFzZSArICdfNzIweDEyODAuanBnJ1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnVXJsQmFzZSA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGltZ1VybCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIm+W7uuS4gOS4quS9v+eUqOWbvueJh+i1hOa6kOeahOaWsOiKgueCueWvueixoVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyTm9kZSA9IG5ldyBjYy5Ob2RlKCk7IC8v5Yib5bu65LiA5Liq5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUubmFtZSA9IFwic3RhcjFcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyU3ByaXRlID0gc3Rhck5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7IC8v5aKe5Yqg57K+54G157uE5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZTsgLy/orr7nva7nsr7ngbXnu4Tku7blm77niYfotYTmupBcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNpemVNb2RlID0gJ0NVU1RPTSc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLndpZHRoID0gY2Mud2luU2l6ZS53aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUubm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChzdGFyTm9kZSk7IC8v5Zy65pmv5Lit5aKe5Yqg5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgaW1nU2VydmVVcmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgb25lU2F5KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vdjEuaGl0b2tvdG8uY24vXCI7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGxldCBvbmVTYXlMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvbWFpbkJnL29uZVNheVwiKS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgaWYodGhhdC5vbmVTYXlMYWJlbCAmJiB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsKSB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYob25lU2F5TGFiZWwgJiYgb25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwgKSBvbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgLy/mjojmnYPnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIGxvZ2luTGV2ZWxMaXN0KCl7XHJcblxyXG5cclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3dlY2hhdCc7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGV2ZWxMaXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbExheW91dCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTGlzdCk7XHJcbiAgICB9LFxyXG4gICAgLy/kuI3nmbvlvZXnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIHZpc2l0b3JMZXZlbExpc3QoKXtcclxuXHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2dpblR5cGUgPSAndmlzaXRvcic7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGV2ZWxMaXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbExheW91dCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTGlzdCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bnvJPlrZhhcHBJZOWIpOaWreaYr+WQpuesrOS4gOasoei/m+WFpea4uOaIj1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2FwcElkJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VySW5mby5hcHBJZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlckluZm8uYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlckluZm8uY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5jbGFzc2ljc0xldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXJJbmZvLm5ldExldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5ldExldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYXBwSWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOnJlcy5yZXN1bHQuYXBwaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwib3BlbklkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTpyZXMucmVzdWx0Lm9wZW5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VySW5mby5hcHBJZCA9IHJlcy5yZXN1bHQuYXBwaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlckluZm8uY2xhc3NpY3NMZXZlbE51bSA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VySW5mby5uZXRMZXZlbE51bSA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+azqOWGjOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogcmVzLnJlc3VsdC5hcHBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbklkOiByZXMucmVzdWx0Lm9wZW5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtYWluQmluZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIC8v5re75Yqg5o6I5p2D5oyJ6ZKuXHJcbiAgICAgICAgd3hMb2dpbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IHJlcy5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogcmVzLm5pY2tOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aOiOadg+Wksei0pScpXHJcbiAgICAgICAgfSx0aGlzLmxvZ2lucGxheS5ub2RlKVxyXG4gICAgICAgIC8v5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgaWYodGhpcy5sb2dpbnBsYXkgPT0gbnVsbCkgdGhpcy5sb2dpbnBsYXkgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2xvZ2lucGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5sb2dpbnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLmxvZ2luTGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMudmlzaXRvcnBsYXkgPT0gbnVsbCkgdGhpcy52aXNpdG9ycGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvdmlzaXRvcnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMudmlzaXRvcnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLnZpc2l0b3JMZXZlbExpc3QsIHRoaXMpXHJcblxyXG4gICAgICAgIGlmKHRoaXMubWFpblNoYXJlID09IG51bGwpIHRoaXMubWFpblNoYXJlID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluU2hhcmUnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLm1haW5TaGFyZS5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICflv6vmnaXmjJHmiJjigJznm4rmmbrmjqjnrrHigJ3lsI/muLjmiI/lkKfvvIEnO1xyXG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG5cclxuICAgICAgICBpZih0aGlzLnNldHRpbmcgPT0gbnVsbCkgdGhpcy5zZXR0aW5nID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9zZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xvc2VTZXR0aW5nJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2hNb3ZlID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUpIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSkgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCc7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuCbngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcudG91Y2hNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuOWFs+mXrSDngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCFyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcudG91Y2hNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflhbPpl63op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o+Q56S66Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfoh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI8hJywxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9jbGlja01vdmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG4JueCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5jbGlja01vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlLnN0cmluZyA9ICflvIDlkK/mjInplK7np7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG45YWz6ZetIOeCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmICFyZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5jbGlja01vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmUuc3RyaW5nID0gJ+WFs+mXreaMiemUruenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DnpLroh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8jyEnLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnc2V0dGluZ0RpYWxvZycsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuICAgIH0sXHJcbiAgICBpbml0U2V0dGluZygpe1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHdpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=