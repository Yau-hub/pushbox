
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsImNsb3VkIiwiaW5pdCIsInVzZXIiLCJjbGFzc2ljc0xldmVsTnVtIiwibmV0TGV2ZWxOdW0iLCJsZXZlbEluZGV4IiwiYmdVcmxCYXNlIiwibGV2ZWxGaW5pc2hOdW0iLCJsb2dpbkluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uZVNheUxhYmVsIiwidHlwZSIsIkxhYmVsIiwibG9naW5wbGF5IiwiQnV0dG9uIiwidmlzaXRvcnBsYXkiLCJtYWluUmFuayIsImxldmVsTGF5b3V0IiwiUHJlZmFiIiwiYnVpbGRMZXZlbCIsInNldHRpbmciLCJtYWluU2hhcmUiLCJyYW5rSXRlbSIsIm9uTG9hZCIsIm1haW5CaW5kRXZlbnQiLCJmcm9tIiwic3RhcnQiLCJ0aGF0IiwiTG9hZGluZyIsInNob3ciLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwidGhlbiIsInJlcyIsInJlc3VsdCIsInRvdGFsIiwiaGlkZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxvYWRJbWciLCJvbmVTYXkiLCJnZXRVc2VySW5mbyIsImluaXRTZXR0aW5nIiwiY29udGFpbmVyIiwiZmluZCIsImltZ1NlcnZlVXJsIiwiaW1nVXJsIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJpbWFnZXMiLCJ1cmxiYXNlIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsInRleHR1cmUiLCJzcHJpdGUiLCJTcHJpdGVGcmFtZSIsInNwcml0ZUZyYW1lIiwic3Rhck5vZGUiLCJOb2RlIiwic2V0UG9zaXRpb24iLCJzdGFyU3ByaXRlIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwic2l6ZU1vZGUiLCJub2RlIiwid2lkdGgiLCJ3aW5TaXplIiwiaGVpZ2h0Iiwib3BhY2l0eSIsImFkZENoaWxkIiwib3BhY2l0eVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib3BlbiIsInNlbmQiLCJ1cmwiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJoaXRva290byIsImxvZ2luTGV2ZWxMaXN0IiwibG9naW5UeXBlIiwiQ2FudmFzTm9kZSIsIm9uUmVzb3VyY2VMb2FkZWQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkZWRSZXNvdXJjZSIsImxvZyIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJsb2FkZXIiLCJsb2FkUmVzIiwidmlzaXRvckxldmVsTGlzdCIsInNob3dNYWluUmFuayIsInJhbmtQYWdlIiwicmFua1BhZ2VTaXplIiwiY29udGVudCIsIm9uIiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJyZXNvdXJjZSIsInJlbmRlck1haW5SYW5rTGlzdCIsInBhZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRJdGVtTnVtIiwiY2hpbGRyZW5Db3VudCIsImRhdGEiLCJsZW5ndGgiLCJpIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIiwicG9ydHJhaXQiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsImFwcElkIiwiZmFpbCIsInNldFN0b3JhZ2UiLCJvcGVuaWQiLCJzdWJzdHJpbmciLCJBcnJheSIsInd4TG9naW5CdG4iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInRpdFN0cmluZyIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicXVlcnkiLCJ0b3VjaE1vdmUiLCJjbGlja01vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOztBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxHQUFQLEdBQWEseUJBQWI7O0FBQ0EsSUFBSUMsRUFB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QyxRQUFBQSxPQUZVLG1CQUVGdkYsR0FGRSxFQUVHO0FBQ1Q1QyxVQUFBQSxNQUFNLENBQUMrQixPQUFQLEdBQWlCYSxHQUFHLENBQUMrRSxJQUFyQjtBQUNILFNBSlM7QUFLVlUsUUFBQUEsSUFMVSxnQkFLTHJGLEdBTEssRUFLQTtBQUNOaEQsVUFBQUEsTUFBTSxDQUFDK0IsT0FBUCxHQUFpQjtBQUNia0gsWUFBQUEsU0FBUyxFQUFFLElBREU7QUFFYkMsWUFBQUEsU0FBUyxFQUFFO0FBRkUsV0FBakI7QUFJQTVJLFVBQUFBLEVBQUUsQ0FBQ2dJLFVBQUgsQ0FBYztBQUNWSixZQUFBQSxHQUFHLEVBQUUsU0FESztBQUVWUCxZQUFBQSxJQUFJLEVBQUUzSCxNQUFNLENBQUMrQjtBQUZILFdBQWQ7QUFJSDtBQWRTLE9BQWQ7QUFnQkg7QUFDSjtBQXpjSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxud2luZG93LmVudiA9IFwiY2xvdWQxLTVndmJ1aXkzZGQ5OWY2M2NcIlxyXG5pZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgIHd4LmNsb3VkLmluaXQoe2Vudjogd2luZG93LmVudn0pXHJcbn1cclxud2luZG93LnVzZXIgPSB7fTtcclxud2luZG93LmNsYXNzaWNzTGV2ZWxOdW0gPSAwO1xyXG53aW5kb3cubmV0TGV2ZWxOdW0gPSAwO1xyXG53aW5kb3cubGV2ZWxJbmRleCA9IDA7XHJcbndpbmRvdy5iZ1VybEJhc2UgPSAnJztcclxud2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSAwO1xyXG53aW5kb3cubG9naW5JbmZvID0ge1xyXG4gICAgYXZhdGFyVXJsOiBudWxsLFxyXG4gICAgbmlja05hbWU6IG51bGxcclxufVxyXG5cclxuXHJcbmltcG9ydCB7d3hMb2dpbixUb2FzdCxMb2FkaW5nLGZvcm1hdGVSYW5rVGltZX0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG9uZVNheUxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpbnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICB2aXNpdG9ycGxheTogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5SYW5rOiBjYy5CdXR0b24sXHJcbiAgICAgICAgbGV2ZWxMYXlvdXQ6IGNjLlByZWZhYixcclxuICAgICAgICBidWlsZExldmVsOiBjYy5CdXR0b24sXHJcbiAgICAgICAgc2V0dGluZzogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5TaGFyZTogY2MuQnV0dG9uLFxyXG4gICAgICAgIHJhbmtJdGVtOmNjLlByZWZhYlxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMOkUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8v5Yqg6L295LiA6KiAXHJcbiAgICAgICAgLy8gIHRoaXMub25lU2F5KCk7XHJcbiAgICAgICAgIHRoaXMubWFpbkJpbmRFdmVudCgpO1xyXG4gICAgICAgICB3aW5kb3cuZnJvbSA9ICdtYWluJztcclxuXHJcblxyXG4gICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcblxyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdnZXRDbGFzc2ljc0xldmVsTnVtJ1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQudG90YWw7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkSW1nKCk7XHJcbiAgICAgICAgdGhpcy5vbmVTYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNldHRpbmcoKTtcclxuXHJcblxyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGxvYWRJbWc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2JpbmdCZycpOy8v5Zu+54mH5ZGI546w5L2N572uXHJcbiAgICAgICAgdmFyIGltZ1NlcnZlVXJsID0gJ2h0dHBzOi8vd3d3LmJpbmcuY29tL0hQSW1hZ2VBcmNoaXZlLmFzcHg/Zm9ybWF0PWpzJmlkeD0wJm49MSc7XHJcbiAgICAgICAgdmFyIGltZ1VybCA9ICcnO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgaW1nVXJsID0gJ2h0dHBzOi8vY24uYmluZy5jb20nICsgcmVzcG9uc2UuaW1hZ2VzWzBdLnVybGJhc2UgKyAnXzcyMHgxMjgwLmpwZydcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ1VybEJhc2UgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbScgKyByZXNwb25zZS5pbWFnZXNbMF0udXJsYmFzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShpbWdVcmwsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/liJvlu7rkuIDkuKrkvb/nlKjlm77niYfotYTmupDnmoTmlrDoioLngrnlr7nosaFcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3Rhck5vZGUgPSBuZXcgY2MuTm9kZSgpOyAvL+WIm+W7uuS4gOS4quaWsOiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLm5hbWUgPSBcInN0YXIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUuc2V0UG9zaXRpb24oMCwwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhclNwcml0ZSA9IHN0YXJOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpOyAvL+WinuWKoOeyvueBtee7hOS7tlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5zaXplTW9kZSA9ICdDVVNUT00nO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUubm9kZS53aWR0aCA9IGNjLndpblNpemUud2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLm5vZGUuaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoc3Rhck5vZGUpOyAvL+WcuuaZr+S4reWinuWKoOaWsOiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eVRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcGFjaXR5Pj0yNTUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChvcGFjaXR5VGltZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSw1KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiZ2V0XCIsIGltZ1NlcnZlVXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSxcclxuICAgIG9uZVNheSgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgdXJsID0gXCJodHRwczovL3YxLmhpdG9rb3RvLmNuL1wiO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBsZXQgb25lU2F5TGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL21haW5CZy9vbmVTYXlcIikuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgIGlmKHRoYXQub25lU2F5TGFiZWwgJiYgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCkgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICBlbHNlIGlmKG9uZVNheUxhYmVsICYmIG9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsICkgb25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSxcclxuICAgIC8v5o6I5p2D55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICBsb2dpbkxldmVsTGlzdCgpe1xyXG5cclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3dlY2hhdCc7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIC8v5LiN55m75b2V55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICB2aXNpdG9yTGV2ZWxMaXN0KCl7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2dpblR5cGUgPSAndmlzaXRvcic7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGV2ZWxMaXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbExheW91dCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTGlzdCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd01haW5SYW5rKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgdmFyIHJhbmtQYWdlID0gMSxyYW5rUGFnZVNpemUgPSA1MDtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGNjLmZpbmQoJ3JhbmtMaXN0L3ZpZXcvY29udGVudCcsbmV3TXlQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY2xvc2UnLG5ld015UHJlZmFiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGlmKHRoYXQucmFua0l0ZW0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0l0ZW0nLCBmdW5jdGlvbiAoZXJyLHJlc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yYW5rSXRlbSA9IGNjLmluc3RhbnRpYXRlKHJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgY2MuZmluZCgncmFua0xpc3QnLG5ld015UHJlZmFiKS5vbignYm91bmNlLWJvdHRvbScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgIHJhbmtQYWdlKys7XHJcbiAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIHJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHBhZ2UscGFnZVNpemUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY3VycmVudEl0ZW1OdW0gPSBjb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gIHJlcy5yZXN1bHQuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoYXQucmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5rSXRlbSA9PSBudWxsKSByYW5rSXRlbSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGREYXRlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRlUmFua1RpbWUoZGF0YS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS5sZXZlbEZpbmlzaE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShkYXRhLnBvcnRyYWl0Kyc/YWFhPWFhLmpwZycsICBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGROYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIitkYXRhLm5pY2tOYW1lK1wiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGdldFVzZXJJbmZvKCl7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIC8v6I635Y+W57yT5a2YYXBwSWTliKTmlq3mmK/lkKbnrKzkuIDmrKHov5vlhaXmuLjmiI9cclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdhcHBJZCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5hcHBJZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5jbGFzc2ljc0xldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubmV0TGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0ubmV0TGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGVycil7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYXBwSWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOnJlcy5yZXN1bHQub3BlbmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuYXBwSWQgPSByZXMucmVzdWx0Lm9wZW5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmNsYXNzaWNzTGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubmV0TGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+azqOWGjOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZFVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZT8gd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXNlci5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVzZXIuYXBwSWQubGVuZ3RoLTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtYWluQmluZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIC8v5re75Yqg5o6I5p2D5oyJ6ZKuXHJcbiAgICAgICAgd3hMb2dpbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IHJlcy5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogcmVzLm5pY2tOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aOiOadg+Wksei0pScpXHJcbiAgICAgICAgfSx0aGlzLmxvZ2lucGxheS5ub2RlKTtcclxuICAgICAgICAvL+W8gOWni+a4uOaIj+aMiemSrlxyXG4gICAgICAgIGlmKHRoaXMubG9naW5wbGF5ID09IG51bGwpIHRoaXMubG9naW5wbGF5ID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9sb2dpbnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMubG9naW5wbGF5Lm5vZGUub24oJ2NsaWNrJywgdGhpcy5sb2dpbkxldmVsTGlzdCwgdGhpcylcclxuICAgICAgICBpZih0aGlzLnZpc2l0b3JwbGF5ID09IG51bGwpIHRoaXMudmlzaXRvcnBsYXkgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL3Zpc2l0b3JwbGF5JykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLnZpc2l0b3JwbGF5Lm5vZGUub24oJ2NsaWNrJywgdGhpcy52aXNpdG9yTGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMubWFpblJhbmsgPT0gbnVsbCkgdGhpcy5tYWluUmFuayA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvbWFpblJhbmsnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMubWFpblJhbmsubm9kZS5vbignY2xpY2snLCB0aGlzLnNob3dNYWluUmFuaywgdGhpcylcclxuXHJcbiAgICAgICAgaWYodGhpcy5idWlsZExldmVsID09IG51bGwpIHRoaXMuYnVpbGRMZXZlbCA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYnVpbGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5idWlsZExldmVsLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYnVpbGRcIik7XHJcblxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG5cclxuICAgICAgICBpZih0aGlzLm1haW5TaGFyZSA9PSBudWxsKSB0aGlzLm1haW5TaGFyZSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvbWFpblNoYXJlJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5tYWluU2hhcmUubm9kZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdFN0cmluZyA9ICAn5b+r5p2l5oyR5oiY4oCc55uK5pm65o6o566x4oCd5bCP5ri45oiP5ZCn77yBJztcclxuICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICfliIbkuqsnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5zZXR0aW5nID09IG51bGwpIHRoaXMuc2V0dGluZyA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvc2V0dGluZycpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZy5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2Nsb3NlU2V0dGluZycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL3RvdWNoTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlja01vdmUgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9jbGlja01vdmUvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcudG91Y2hNb3ZlKSB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB0b3VjaE1vdmUuc3RyaW5nID0gJ+W8gOWQr+inpuaRuOenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5jbGlja01vdmUpIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJztcclxuICAgICAgICAgICAgICAgIGVsc2UgY2xpY2tNb3ZlLnN0cmluZyA9ICflvIDlkK/mjInplK7np7vliqgnO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL3RvdWNoTW92ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbgm54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmUuc3RyaW5nID0gJ+W8gOWQr+inpuaRuOenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbjlhbPpl60g54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZighcmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOekuuiHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPIScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xpY2tNb3ZlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuCbngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcuY2xpY2tNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5byA5ZCv5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuOWFs+mXrSDngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiAhcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcuY2xpY2tNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o+Q56S66Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfoh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI8hJywxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3NldHRpbmdEaWFsb2cnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdFNldHRpbmcoKXtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19