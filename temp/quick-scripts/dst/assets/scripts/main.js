
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
      //     wx.cloud.callFunction({
      //         name: 'addClassicsLevel',
      //         data:{
      //             content: levels[1],
      //             levelIndex: 2
      //         }
      //     }).then(res => {
      //         console.log(res)
      //     }).catch(err => {
      //         console.error(err)
      //     })
      // }).catch(err => {
      //     console.error(err)
      // })
      _common.Loading.show();

      wx.cloud.callFunction({
        name: 'getClassicsLevelNum'
      }).then(function (res) {
        window.classicsLevelNum = res.result.total;

        _common.Loading.hide();
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
                      nickName: window.loginInfo.nickName,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsImNsb3VkIiwiaW5pdCIsInVzZXIiLCJjbGFzc2ljc0xldmVsTnVtIiwibmV0TGV2ZWxOdW0iLCJsZXZlbEluZGV4IiwiYmdVcmxCYXNlIiwibGV2ZWxGaW5pc2hOdW0iLCJsb2dpbkluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uZVNheUxhYmVsIiwidHlwZSIsIkxhYmVsIiwibG9naW5wbGF5IiwiQnV0dG9uIiwidmlzaXRvcnBsYXkiLCJtYWluUmFuayIsImxldmVsTGF5b3V0IiwiUHJlZmFiIiwiYnVpbGRMZXZlbCIsInNldHRpbmciLCJtYWluU2hhcmUiLCJyYW5rSXRlbSIsIm9uTG9hZCIsIm1haW5CaW5kRXZlbnQiLCJzdGFydCIsInRoYXQiLCJMb2FkaW5nIiwic2hvdyIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJoaWRlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZ2V0VXNlckluZm8iLCJpbml0U2V0dGluZyIsImxvYWRJbWciLCJjb250YWluZXIiLCJmaW5kIiwiaW1nU2VydmVVcmwiLCJpbWdVcmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImltYWdlcyIsInVybGJhc2UiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlRnJhbWUiLCJzdGFyTm9kZSIsIk5vZGUiLCJzZXRQb3NpdGlvbiIsInN0YXJTcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzaXplTW9kZSIsIm5vZGUiLCJ3aWR0aCIsIndpblNpemUiLCJoZWlnaHQiLCJhZGRDaGlsZCIsIm9wZW4iLCJzZW5kIiwib25lU2F5IiwidXJsIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiaGl0b2tvdG8iLCJmcm9tIiwibG9naW5MZXZlbExpc3QiLCJsb2dpblR5cGUiLCJDYW52YXNOb2RlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImxvYWRlciIsImxvYWRSZXMiLCJ2aXNpdG9yTGV2ZWxMaXN0Iiwic2hvd01haW5SYW5rIiwicmFua1BhZ2UiLCJyYW5rUGFnZVNpemUiLCJjb250ZW50Iiwib24iLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsInJlc291cmNlIiwicmVuZGVyTWFpblJhbmtMaXN0IiwicGFnZSIsInBhZ2VTaXplIiwiY3VycmVudEl0ZW1OdW0iLCJjaGlsZHJlbkNvdW50IiwiZGF0YSIsImxlbmd0aCIsImkiLCJnZXRDaGlsZEJ5TmFtZSIsImNyZWF0ZVRpbWUiLCJwb3J0cmFpdCIsImdldFN0b3JhZ2UiLCJrZXkiLCJzdWNjZXNzIiwiYXBwSWQiLCJmYWlsIiwic2V0U3RvcmFnZSIsIm9wZW5pZCIsInRpdFN0cmluZyIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicXVlcnkiLCJ0b3VjaE1vdmUiLCJjbGlja01vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOztBQUNBOzs7O0FBdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLEdBQVAsR0FBYSx5QkFBYjs7QUFDQSxJQUFJQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQkYsRUFBRSxDQUFDQyxHQUFILENBQU9FLFdBQS9CLEVBQTRDO0FBQ3hDQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsSUFB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RSxTQURLO0FBRVZDLFFBQUFBLE9BRlUsbUJBRUZwRixHQUZFLEVBRUc7QUFDVDNDLFVBQUFBLE1BQU0sQ0FBQytCLE9BQVAsR0FBaUJZLEdBQUcsQ0FBQzRFLElBQXJCO0FBQ0gsU0FKUztBQUtWVSxRQUFBQSxJQUxVLGdCQUtMbEYsR0FMSyxFQUtBO0FBQ04vQyxVQUFBQSxNQUFNLENBQUMrQixPQUFQLEdBQWlCO0FBQ2J5RyxZQUFBQSxTQUFTLEVBQUUsSUFERTtBQUViQyxZQUFBQSxTQUFTLEVBQUU7QUFGRSxXQUFqQjtBQUlBbkksVUFBQUEsRUFBRSxDQUFDNEgsVUFBSCxDQUFjO0FBQ1ZKLFlBQUFBLEdBQUcsRUFBRSxTQURLO0FBRVZQLFlBQUFBLElBQUksRUFBRXZILE1BQU0sQ0FBQytCO0FBRkgsV0FBZDtBQUlIO0FBZFMsT0FBZDtBQWdCSDtBQUNKO0FBbmRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG53aW5kb3cuZW52ID0gXCJjbG91ZDEtNWd2YnVpeTNkZDk5ZjYzY1wiXHJcbmlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgd3guY2xvdWQuaW5pdCh7ZW52OiB3aW5kb3cuZW52fSlcclxufVxyXG53aW5kb3cudXNlciA9IHt9O1xyXG53aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5uZXRMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5sZXZlbEluZGV4ID0gMDtcclxud2luZG93LmJnVXJsQmFzZSA9ICcnO1xyXG53aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcbndpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICBhdmF0YXJVcmw6IG51bGwsXHJcbiAgICBuaWNrTmFtZTogbnVsbFxyXG59XHJcblxyXG5cclxuaW1wb3J0IGxldmVscyBmcm9tICcuL2xldmVsJ1xyXG5pbXBvcnQge3d4TG9naW4sVG9hc3QsTG9hZGluZyxmb3JtYXRlUmFua1RpbWV9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBvbmVTYXlMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5wbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgdmlzaXRvcnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICBtYWluUmFuazogY2MuQnV0dG9uLFxyXG4gICAgICAgIGxldmVsTGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgYnVpbGRMZXZlbDogY2MuQnV0dG9uLFxyXG4gICAgICAgIHNldHRpbmc6IGNjLkJ1dHRvbixcclxuICAgICAgICBtYWluU2hhcmU6IGNjLkJ1dHRvbixcclxuICAgICAgICByYW5rSXRlbTpjYy5QcmVmYWJcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTDpFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvL+WKoOi9veS4gOiogFxyXG4gICAgICAgIC8vICB0aGlzLm9uZVNheSgpO1xyXG4gICAgICAgICB0aGlzLm1haW5CaW5kRXZlbnQoKTtcclxuXHJcblxyXG4gICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIC8vIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIC8vICAgICBuYW1lOiAnYWRkQ2xhc3NpY3NMZXZlbCcsXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhOntcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb250ZW50OiBsZXZlbHNbMF0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxJbmRleDogMVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIC8vICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICdhZGRDbGFzc2ljc0xldmVsJyxcclxuICAgICAgICAgICAgLy8gICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29udGVudDogbGV2ZWxzWzFdLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXZlbEluZGV4OiAyXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgLy8gICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdnZXRDbGFzc2ljc0xldmVsTnVtJ1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQudG90YWw7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5sb2FkSW1nKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQub25lU2F5KCk7XHJcbiAgICAgICAgLy8gfSwxMDAwMClcclxuXHJcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNldHRpbmcoKTtcclxuXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG5cclxuXHJcbiAgICBsb2FkSW1nOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9iaW5nQmcnKTsvL+WbvueJh+WRiOeOsOS9jee9rlxyXG4gICAgICAgIHZhciBpbWdTZXJ2ZVVybCA9ICdodHRwczovL3d3dy5iaW5nLmNvbS9IUEltYWdlQXJjaGl2ZS5hc3B4P2Zvcm1hdD1qcyZpZHg9MCZuPTEnO1xyXG4gICAgICAgIHZhciBpbWdVcmwgPSAnJztcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGltZ1VybCA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlICsgJ183MjB4MTI4MC5qcGcnXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmdVcmxCYXNlID0gJ2h0dHBzOi8vY24uYmluZy5jb20nICsgcmVzcG9uc2UuaW1hZ2VzWzBdLnVybGJhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoaW1nVXJsLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yib5bu65LiA5Liq5L2/55So5Zu+54mH6LWE5rqQ55qE5paw6IqC54K55a+56LGhXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJOb2RlID0gbmV3IGNjLk5vZGUoKTsgLy/liJvlu7rkuIDkuKrmlrDoioLngrlcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5uYW1lID0gXCJzdGFyMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLnNldFBvc2l0aW9uKDAsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJTcHJpdGUgPSBzdGFyTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTsgLy/lop7liqDnsr7ngbXnu4Tku7ZcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlOyAvL+iuvue9rueyvueBtee7hOS7tuWbvueJh+i1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUuc2l6ZU1vZGUgPSAnQ1VTVE9NJztcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLm5vZGUud2lkdGggPSBjYy53aW5TaXplLndpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLmhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHN0YXJOb2RlKTsgLy/lnLrmma/kuK3lop7liqDmlrDoioLngrlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCBpbWdTZXJ2ZVVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0sXHJcbiAgICBvbmVTYXkoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly92MS5oaXRva290by5jbi9cIjtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgbGV0IG9uZVNheUxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9tYWluQmcvb25lU2F5XCIpLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG5cclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICBpZih0aGF0Lm9uZVNheUxhYmVsICYmIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwpIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgZWxzZSBpZihvbmVTYXlMYWJlbCAmJiBvbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCApIG9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiZ2V0XCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0sXHJcbiAgICAvL+aOiOadg+eZu+W9leaYvuekuuWFs+WNoeWIl+ihqFxyXG4gICAgbG9naW5MZXZlbExpc3QoKXtcclxuXHJcbiAgICAgICAgd2luZG93LmxvZ2luVHlwZSA9ICd3ZWNoYXQnO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsZXZlbExheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgIH0sXHJcbiAgICAvL+S4jeeZu+W9leeZu+W9leaYvuekuuWFs+WNoeWIl+ihqFxyXG4gICAgdmlzaXRvckxldmVsTGlzdCgpe1xyXG5cclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3Zpc2l0b3InO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsZXZlbExheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGxldmVsTGlzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxMYXlvdXQpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbExpc3QpO1xyXG4gICAgfSxcclxuICAgIHNob3dNYWluUmFuaygpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciByYW5rUGFnZSA9IDEscmFua1BhZ2VTaXplID0gNTA7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjYy5maW5kKCdyYW5rTGlzdC92aWV3L2NvbnRlbnQnLG5ld015UHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2Nsb3NlJyxuZXdNeVByZWZhYikub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBpZih0aGF0LnJhbmtJdGVtID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtJdGVtJywgZnVuY3Rpb24gKGVycixyZXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmFua0l0ZW0gPSBjYy5pbnN0YW50aWF0ZShyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGNjLmZpbmQoJ3JhbmtMaXN0JyxuZXdNeVByZWZhYikub24oJ2JvdW5jZS1ib3R0b20nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICByYW5rUGFnZSsrO1xyXG4gICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0xheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxwYWdlLHBhZ2VTaXplKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtTnVtID0gY29udGVudC5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGk8PSByZXMucmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMucmVzdWx0LmRhdGFbaS0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGF0LnJhbmtJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZFJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkrY3VycmVudEl0ZW1OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkRGF0ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0ZVJhbmtUaW1lKGRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEubGV2ZWxGaW5pc2hOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEucG9ydHJhaXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZGF0YS5wb3J0cmFpdCsnP2FhYT1hYS5qcGcnLCAgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ21hc2svSW1hZ2UnLG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUG9ydHJhaXQnKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLm5pY2tOYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIrZGF0YS5uaWNrTmFtZStcIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmhlaWdodCA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudCAqIHJhbmtJdGVtLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCIsMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRVc2VySW5mbygpe1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPlue8k+WtmGFwcElk5Yik5pat5piv5ZCm56ys5LiA5qyh6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnYXBwSWQnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuYXBwSWQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5sZXZlbEZpbmlzaE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmNsYXNzaWNzTGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0uY2xhc3NpY3NMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5ldExldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpe1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcElkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTpyZXMucmVzdWx0Lm9wZW5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmFwcElkID0gcmVzLnJlc3VsdC5vcGVuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ms6jlhoznlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1haW5CaW5kRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy/mt7vliqDmjojmnYPmjInpkq5cclxuICAgICAgICB3eExvZ2luKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvZ2luSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybDogcmVzLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiByZXMubmlja05hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2D5aSx6LSlJylcclxuICAgICAgICB9LHRoaXMubG9naW5wbGF5Lm5vZGUpO1xyXG4gICAgICAgIC8v5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgaWYodGhpcy5sb2dpbnBsYXkgPT0gbnVsbCkgdGhpcy5sb2dpbnBsYXkgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2xvZ2lucGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5sb2dpbnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLmxvZ2luTGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMudmlzaXRvcnBsYXkgPT0gbnVsbCkgdGhpcy52aXNpdG9ycGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvdmlzaXRvcnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMudmlzaXRvcnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLnZpc2l0b3JMZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5tYWluUmFuayA9PSBudWxsKSB0aGlzLm1haW5SYW5rID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluUmFuaycpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5tYWluUmFuay5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2hvd01haW5SYW5rLCB0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5tYWluU2hhcmUgPT0gbnVsbCkgdGhpcy5tYWluU2hhcmUgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL21haW5TaGFyZScpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMubWFpblNoYXJlLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRTdHJpbmcgPSAgJ+W/q+adpeaMkeaImOKAnOebiuaZuuaOqOeuseKAneWwj+a4uOaIj+WQp++8gSc7XHJcbiAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcylcclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2V0dGluZyA9PSBudWxsKSB0aGlzLnNldHRpbmcgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL3NldHRpbmcnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLnNldHRpbmcubm9kZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9jbG9zZVNldHRpbmcnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0b3VjaE1vdmUgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi90b3VjaE1vdmUvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpY2tNb3ZlID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xpY2tNb3ZlL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSkgdG91Y2hNb3ZlLnN0cmluZyA9ICflhbPpl63op6bmkbjnp7vliqgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgdG91Y2hNb3ZlLnN0cmluZyA9ICflvIDlkK/op6bmkbjnp7vliqgnO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcuY2xpY2tNb3ZlKSBjbGlja01vdmUuc3RyaW5nID0gJ+WFs+mXreaMiemUruenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGNsaWNrTW92ZS5zdHJpbmcgPSAn5byA5ZCv5oyJ6ZSu56e75YqoJztcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi90b3VjaE1vdmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG4JueCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflvIDlkK/op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG45YWz6ZetIOeCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIXJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DnpLroh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8jyEnLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbgm54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbjlhbPpl60g54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgIXJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOekuuiHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPIScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdzZXR0aW5nRGlhbG9nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgfSxcclxuICAgIGluaXRTZXR0aW5nKCl7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogd2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==