
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/build');
require('./assets/scripts/common');
require('./assets/scripts/eleSize');
require('./assets/scripts/gameLayout');
require('./assets/scripts/level');
require('./assets/scripts/levelItem');
require('./assets/scripts/levelLayout');
require('./assets/scripts/main');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8bc72A5qvpI1ZnhM9AbJxE6', 'gameLayout');
// scripts/gameLayout.js

"use strict";

var _common = require("./common");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.currentLevel = [];
window.eleSize = 35;
window.layout = new Array();
window.blockNum = 12;
window.uploadLevel = null;
cc.Class({
  "extends": cc.Component,
  properties: {
    block: {
      "default": null,
      type: cc.Prefab,
      displayName: 'block'
    },
    wall: {
      "default": null,
      type: cc.Prefab,
      displayName: 'wall'
    },
    box: {
      "default": null,
      type: cc.Prefab,
      displayName: 'box'
    },
    ball: {
      "default": null,
      type: cc.Prefab,
      displayName: 'ball'
    },
    roleUp: {
      "default": null,
      type: cc.Prefab,
      displayName: 'roleUp'
    },
    roleRight: {
      "default": null,
      type: cc.Prefab,
      displayName: 'roleRight'
    },
    roleDown: {
      "default": null,
      type: cc.Prefab,
      displayName: 'roleDown'
    },
    roleLeft: {
      "default": null,
      type: cc.Prefab,
      displayName: 'roleLeft'
    },
    position: {
      "default": null
    },
    gameBn: cc.Sprite,
    boxNum: {
      "default": null
    },
    stepCounter: null,
    stepCounterValue: 0,
    timeCounter: null,
    timeCounterValue: 0,
    timeCounterTimer: null,
    levelCounter: null,
    moveHistoryList: [],
    lastScore: null,
    lastStepNode: null,
    lastTimenode: null,
    rankItem: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var that = this;
    this.initWinEle();
    this.renderBg(); //初始化当前关卡

    this.initLevel();
    cc.find('gameBtns', this.node).height = (cc.winSize.height - cc.winSize.width) / 2;
  },
  start: function start() {
    this.addTouchMove();
    this.pendantAddEvent();
  },
  // update (dt) {},
  initWinEle: function initWinEle() {
    var realSiz = cc.winSize.width / window.blockNum;
    window.eleSize = realSiz;

    for (var i = 0; i < window.blockNum; i++) {
      window.layout[i] = new Array();

      for (var n = 0; n < window.blockNum; n++) {
        window.layout[i][n] = {
          x: 0,
          y: 0,
          sign: 0,
          cover: null
        };
      }
    }
  },
  initPosition: function initPosition(layout) {
    this.position = {};
    this.boxNum = 0;

    for (var i = 0; i < layout.length; i++) {
      for (var n = 0; n < layout[0].length; n++) {
        //layout[i][n].sign -- 人物位置
        if (layout[i][n].sign == 4 || layout[i][n].sign == 5 || layout[i][n].sign == 6 || layout[i][n].sign == 7) {
          this.position.x = n;
          this.position.y = i;
        } //箱子数量


        if (layout[i][n].sign == 2) {
          this.boxNum++;
        }
      }
    }
  },
  renderBg: function renderBg() {
    var startX = -(cc.winSize.width / 2);
    var startY = window.eleSize * window.blockNum / 2;

    for (var i = 0; i < window.blockNum; i++) {
      for (var n = 0; n < window.blockNum; n++) {
        var x = n * window.eleSize + startX;
        var y = -i * window.eleSize + startY;
        window.layout[i][n] = {
          x: x,
          y: y,
          sign: 0,
          cover: null
        };
        var newBlock = cc.instantiate(this.block); // 为设置位置

        newBlock.setPosition(x, y); // 将新增的节点添加到 Canvas 节点下面

        this.node.addChild(newBlock);
      }
    }
  },
  renderBn: function renderBn() {
    if (this.gameBn == null) this.gameBn = cc.find('Canvas/mainBg/gameBn').getComponent(cc.Sprite);
    cc.assetManager.loadRemote(window.bgUrlBase + '_400x240.jpg', function (err, texture) {
      var sprite = new cc.SpriteFrame(texture, cc.rect(0, 0, 400, 240));
      that.gameBn.spriteFrame = sprite; //设置精灵组件图片资源
    });
  },
  renderLayout: function renderLayout(layout) {
    this.renderBg();

    for (var i = 0; i < window.blockNum; i++) {
      for (var n = 0; n < window.blockNum; n++) {
        var x = window.layout[i][n].x;
        var y = window.layout[i][n].y;

        switch (layout[i][n].sign) {
          case 0:
            var newBlock = cc.instantiate(this.block);
            newBlock.setPosition(x, y);
            this.node.addChild(newBlock);
            break;

          case 1:
            var newWall = cc.instantiate(this.wall);
            newWall.setPosition(x, y);
            this.node.addChild(newWall);
            break;

          case 2:
            var newBox = cc.instantiate(this.box);
            newBox.setPosition(x, y);
            this.node.addChild(newBox);
            break;

          case 3:
            var newBall = cc.instantiate(this.ball);
            newBall.setPosition(x, y);
            this.node.addChild(newBall);
            break;

          case 4:
            var newRoleUp = cc.instantiate(this.roleUp);
            newRoleUp.setPosition(x, y);
            this.node.addChild(newRoleUp);
            break;

          case 5:
            var newRoleRight = cc.instantiate(this.roleRight);
            newRoleRight.setPosition(x, y);
            this.node.addChild(newRoleRight);
            break;

          case 6:
            var newRoleDown = cc.instantiate(this.roleDown);
            newRoleDown.setPosition(x, y);
            this.node.addChild(newRoleDown);
            break;

          case 7:
            var newRoleLeft = cc.instantiate(this.roleLeft);
            newRoleLeft.setPosition(x, y);
            this.node.addChild(newRoleLeft);
            break;
        }
      }
    }
  },
  moveUp: function moveUp(layout) {
    var that = this;
    var x = this.position.x;
    var y = this.position.y; //上一格为空

    if (layout[y - 1][x].sign == 0) {
      layout[y - 1][x].sign = 4;
      layout[y][x].sign = 0;
      this.resetPosition('up');
    } //上一格为墙体
    else if (layout[y - 1][x].sign == 1) {
        layout[y][x].sign = 4;
      } //上一格为箱子
      else if (layout[y - 1][x].sign == 2) {
          //箱子上一格为空
          if (layout[y - 2][x].sign == 0) {
            layout[y][x].sign = 0;
            layout[y - 2][x].sign = 2;
            layout[y - 1][x].sign = 4;
            if (layout[y - 1][x].cover) layout[y - 1][x].cover = 4;
            this.resetPosition('up');
          } //箱子上一格球
          else if (layout[y - 2][x].sign == 3) {
              layout[y][x].sign = 0;
              layout[y - 2][x].sign = 2;
              layout[y - 2][x].cover = 2;
              layout[y - 1][x].sign = 4;
              if (layout[y - 1][x].cover) layout[y - 1][x].cover = 4;
              this.resetPosition('up');
            } else {
              layout[y][x].sign = 4;
            }
        } //上一格为球
        else if (layout[y - 1][x].sign == 3) {
            layout[y][x].sign = 0;
            layout[y - 1][x].sign = 4;
            layout[y - 1][x].cover = 4;
            this.resetPosition('up');
          } //移动后回显球体


    if (layout[y][x].sign == 0 && layout[y][x].cover) {
      layout[y][x].sign = 3;
      layout[y][x].cover = null;
    }

    var movetimer = setTimeout(function () {
      that.renderLayout(layout);
      clearTimeout(movetimer);
    });
  },
  moveDown: function moveDown(layout) {
    var that = this;
    var x = this.position.x;
    var y = this.position.y; //下一格为空

    if (layout[y + 1][x].sign == 0) {
      layout[y + 1][x].sign = 6;
      layout[y][x].sign = 0;
      this.resetPosition('down');
    } //下一格为墙体
    else if (layout[y + 1][x].sign == 1) {
        layout[y][x].sign = 6;
      } //下一格为箱子
      else if (layout[y + 1][x].sign == 2) {
          //箱子下一格为空
          if (layout[y + 2][x].sign == 0) {
            layout[y][x].sign = 0;
            layout[y + 2][x].sign = 2;
            layout[y + 1][x].sign = 6;
            if (layout[y + 1][x].cover) layout[y + 1][x].cover = 6;
            this.resetPosition('down');
          } //箱子下一格为球
          else if (layout[y + 2][x].sign == 3) {
              layout[y][x].sign = 0;
              layout[y + 2][x].sign = 2;
              layout[y + 2][x].cover = 2;
              layout[y + 1][x].sign = 6;
              if (layout[y + 1][x].cover) layout[y + 1][x].cover = 6;
              this.resetPosition('down');
            } else {
              layout[y][x].sign = 6;
            }
        } //下一格为球
        else if (layout[y + 1][x].sign == 3) {
            layout[y][x].sign = 0;
            layout[y + 1][x].sign = 6;
            layout[y + 1][x].cover = 6;
            this.resetPosition('down');
          } //移动后回显球体


    if (layout[y][x].sign == 0 && layout[y][x].cover) {
      layout[y][x].sign = 3;
      layout[y][x].cover = null;
    }

    var movetimer = setTimeout(function () {
      that.renderLayout(layout);
      clearTimeout(movetimer);
    });
  },
  moveLeft: function moveLeft(layout) {
    var that = this;
    var x = this.position.x;
    var y = this.position.y; //左一格为空

    if (layout[y][x - 1].sign == 0) {
      layout[y][x - 1].sign = 7;
      layout[y][x].sign = 0;
      this.resetPosition('left');
    } //左一格为墙体
    else if (layout[y][x - 1].sign == 1) {
        layout[y][x].sign = 7;
      } //左一格为箱子
      else if (layout[y][x - 1].sign == 2) {
          //箱子左一格为空
          if (layout[y][x - 2].sign == 0) {
            layout[y][x].sign = 0;
            layout[y][x - 2].sign = 2;
            layout[y][x - 1].sign = 7;
            if (layout[y][x - 1].cover) layout[y][x - 1].cover = 7;
            this.resetPosition('left');
          } //箱子左一格为球
          else if (layout[y][x - 2].sign == 3) {
              layout[y][x].sign = 0;
              layout[y][x - 2].sign = 2;
              layout[y][x - 2].cover = 2;
              layout[y][x - 1].sign = 7;
              if (layout[y][x - 1].cover) layout[y][x - 1].cover = 7;
              this.resetPosition('left');
            } else {
              layout[y][x].sign = 7;
            }
        } //左一格为球
        else if (layout[y][x - 1].sign == 3) {
            layout[y][x].sign = 0;
            layout[y][x - 1].sign = 7;
            layout[y][x - 1].cover = 7;
            this.resetPosition('left');
          } //移动后回显球体


    if (layout[y][x].sign == 0 && layout[y][x].cover && layout[y][x].cover != 2) {
      layout[y][x].sign = 3;
      layout[y][x].cover = null;
    }

    var movetimer = setTimeout(function () {
      that.renderLayout(layout);
      clearTimeout(movetimer);
    });
  },
  moveRight: function moveRight(layout) {
    var that = this;
    var x = this.position.x;
    var y = this.position.y; //右一格为空

    if (layout[y][x + 1].sign == 0) {
      layout[y][x + 1].sign = 5;
      layout[y][x].sign = 0;
      this.resetPosition('right');
    } //右一格为墙体
    else if (layout[y][x + 1].sign == 1) {
        layout[y][x].sign = 5;
      } //右一格为箱子
      else if (layout[y][x + 1].sign == 2) {
          //箱子右一格为空
          if (layout[y][x + 2].sign == 0) {
            layout[y][x].sign = 0;
            layout[y][x + 2].sign = 2;
            layout[y][x + 1].sign = 5;
            if (layout[y][x + 1].cover) layout[y][x + 1].cover = 5;
            this.resetPosition('right');
          } //箱子右一格为球
          else if (layout[y][x + 2].sign == 3) {
              layout[y][x].sign = 0;
              layout[y][x + 2].sign = 2;
              layout[y][x + 2].cover = 2;
              layout[y][x + 1].sign = 5;
              if (layout[y][x + 1].cover) layout[y][x + 1].cover = 5;
              this.resetPosition('right');
            } else {
              layout[y][x].sign = 5;
            }
        } //右一格为球
        else if (layout[y][x + 1].sign == 3) {
            layout[y][x].sign = 0;
            layout[y][x + 1].sign = 5;
            layout[y][x + 1].cover = 5;
            this.resetPosition('right');
          } //移动后回显球体


    if (layout[y][x].sign == 0 && layout[y][x].cover && layout[y][x].cover != 2) {
      layout[y][x].sign = 3;
      layout[y][x].cover = null;
    }

    var movetimer = setTimeout(function () {
      that.renderLayout(layout);
      clearTimeout(movetimer);
    });
  },
  resetPosition: function resetPosition(direction) {
    var that = this;

    switch (direction) {
      case 'up':
        this.position.y -= 1;
        break;

      case 'right':
        this.position.x += 1;
        break;

      case 'down':
        this.position.y += 1;
        break;

      case 'left':
        this.position.x -= 1;
        break;
    }

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.setStorage({
        key: "lastLayout",
        data: window.currentLevel,
        success: function success(result) {
          wx.getStorage({
            key: "lastLayout",
            success: function success(res) {
              that.moveHistoryList.push(res.data);
            }
          });
        }
      });
    }

    this.stepCounterValue++; // this.gameOver = true;

    this.stepCounter.string = "步数：" + this.stepCounterValue;
    var coverBoxNum = 0;

    for (var i = 0; i < window.currentLevel.length; i++) {
      for (var n = 0; n < window.currentLevel[0].length; n++) {
        if (window.currentLevel[i][n].cover && window.currentLevel[i][n].sign == 2) {
          // this.gameOver = false;
          coverBoxNum++;

          if (this.boxNum == coverBoxNum) {
            // console.log('挑战成功')
            this.showResult();
            clearInterval(this.timeCounterTimer);
            this.timeCounterTimer = null;
          }
        }
      }
    }
  },
  addTouchMove: function addTouchMove() {
    if (!window.setting.touchMove) return;
    var that = this;
    var figureLocation = null;
    this.node.on('touchstart', function (event) {
      figureLocation = event.getLocation();
    }, this);
    this.node.on('touchend', function (event) {
      var endLocation = event.getLocation();

      if (Math.abs(figureLocation.x - endLocation.x) > Math.abs(figureLocation.y - endLocation.y)) {
        if (figureLocation.x - endLocation.x < -50) {
          // console.log("右滑")
          that.moveRight(window.currentLevel);
        } else if (figureLocation.x - endLocation.x > 50) {
          // console.log("左滑")
          that.moveLeft(window.currentLevel);
        }
      } else {
        if (figureLocation.y - endLocation.y < -50) {
          // console.log("上滑")
          that.moveUp(window.currentLevel);
        } else if (figureLocation.y - endLocation.y > 50) {
          // console.log("下滑")
          that.moveDown(window.currentLevel);
        }
      }
    }, this);
  },
  showResult: function showResult() {
    var that = this;
    var CanvasNode = this.node;

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
      cc.find('contentBg/useTime', newMyPrefab).getComponent(cc.Label).string = "步数：" + that.stepCounterValue + '步';
      cc.find('contentBg/useStep', newMyPrefab).getComponent(cc.Label).string = "用时：" + that.timeCounterValue + '秒';

      if (window.from != 'build' && window.levelIndex >= window.classicsLevelNum) {
        cc.find('contentBg/next', newMyPrefab).opacity = 0;
      }

      if (window.from == 'build') {
        cc.find('contentBg/next/Background/Label', newMyPrefab).getComponent(cc.Label).string = '上传关卡';
      }

      cc.find('contentBg/next', newMyPrefab).on('click', function () {
        if (window.from != 'build') {
          if (window.levelIndex < window.classicsLevelNum) {
            newMyPrefab.removeFromParent();
            newMyPrefab.destroy();
            that.initPendant();
            window.levelIndex++;
            that.initLevel();
          }
        } else {
          _common.Loading.show();

          wx.cloud.callFunction({
            name: 'getClassicsLevelNum'
          }).then(function (res) {
            wx.cloud.callFunction({
              name: 'addClassicsLevel',
              data: {
                content: window.uploadLevel,
                levelIndex: res.result.total + 1,
                appId: window.user.appId,
                nickName: window.loginInfo.nickName ? window.loginInfo.nickName : '游客' + window.user.appId.substring(window.user.appId.length - 5),
                portrait: window.loginInfo.avatarUrl
              }
            }).then(function (res) {
              (0, _common.Toast)('上传成功，即将跳回主界面', 1500);
              setTimeout(function () {
                _common.Loading.hide();

                cc.director.loadScene('main');
              }, 1500);
            })["catch"](function (err) {
              _common.Loading.hide();

              (0, _common.Toast)('上传失败', 1500);
              console.error(err);
            });
          })["catch"](function (err) {
            console.error(err);
          });
        }
      }, this);
      cc.find('contentBg/replay', newMyPrefab).on('click', function () {
        newMyPrefab.removeFromParent();
        newMyPrefab.destroy();
        that.replayLayout();
        that.initPendant();
      }, this);
      cc.find('contentBg/rank', newMyPrefab).on('click', function () {
        if (window.from == 'build') {
          (0, _common.Toast)('测试关卡没有排行榜', 1500);
          return;
        }

        that.showLevelRank();
      }, this);
      cc.find('contentBg/share', newMyPrefab).on('click', function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
          var titString = '益智推箱';

          if (window.from != 'build') {
            titString = titString + '第' + window.levelIndex + '关' + '-使用步数：' + that.stepCounterValue + '-挑战成功！';
          } else {
            titString = titString + '小游戏，快来挑战吧！';
          }

          wx.shareAppMessage({
            title: titString,
            // imageUrl: data.url,
            query: '分享'
          });
        }
      }, this);
      CanvasNode.addChild(newMyPrefab);
    };

    setTimeout(function () {
      cc.loader.loadRes('gameOverAlert', onResourceLoaded);
    }, 0);
    if (window.from == "build") return; //上传分数

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      if (that.lastScore == null) {
        _common.Loading.show();

        (0, _common.Toast)('上传分数中...', 1500);
        wx.cloud.callFunction({
          name: 'addClassicsLevelScore',
          data: {
            levelIndex: window.levelIndex,
            appId: window.user.appId,
            useStep: that.stepCounterValue,
            useTime: that.timeCounterValue,
            portrait: window.loginInfo.avatarUrl,
            nickName: window.loginInfo.nickName ? window.loginInfo.nickName : '游客' + window.user.appId.substring(window.user.appId.length - 5)
          }
        }).then(function (res) {
          _common.Loading.hide();
        })["catch"](function (err) {
          _common.Loading.hide();

          console.error(err);
        });
        that.lastScore = {
          levelIndex: window.levelIndex,
          appId: window.user.appId,
          useStep: that.stepCounterValue,
          useTime: that.timeCounterValue
        };
        that.renderLastScore(that.lastScore.useStep, that.lastScore.useTime);
      } else {
        // || that.timeCounterValue < that.lastScore.useTime
        if (that.stepCounterValue < that.lastScore.useStep) {
          that.lastScore = {
            levelIndex: window.levelIndex,
            appId: window.user.appId,
            useStep: that.stepCounterValue,
            useTime: that.timeCounterValue
          };
          that.renderLastScore(that.lastScore.useStep, that.lastScore.useTime);

          _common.Loading.show();

          (0, _common.Toast)('上传分数中...', 1500);
          wx.cloud.callFunction({
            name: 'updateClassicsLevelScore',
            data: {
              levelIndex: window.levelIndex,
              appId: window.user.appId,
              useStep: that.stepCounterValue,
              useTime: that.timeCounterValue,
              portrait: window.loginInfo.avatarUrl,
              nickName: window.loginInfo.nickName
            }
          }).then(function (res) {
            _common.Loading.hide();
          })["catch"](function (err) {
            _common.Loading.hide();

            console.error(err);
          });
        }
      }

      var curLevelNum = window.levelIndex;
      wx.cloud.callFunction({
        name: 'queryUser',
        data: {
          appId: window.user.appId
        }
      }).then(function (res) {
        if (res && res.result.data.length > 0 && res.result.data[0].levelFinishNum < curLevelNum) {
          window.user.levelFinishNum = curLevelNum;
          var data = {};
          data.appId = window.user.appId;
          data.levelFinishNum = curLevelNum;
          if (window.loginInfo.nickName) data.nickName = window.loginInfo.nickName;
          if (window.loginInfo.avatarUrl) data.portrait = window.loginInfo.avatarUrl;
          wx.cloud.callFunction({
            name: 'updateUser',
            data: data
          }).then(function (res) {})["catch"](function (err) {
            console.error(err);
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    }
  },
  replayLayout: function replayLayout() {
    var that = this;
    wx.getStorage({
      key: 'initLevel',
      success: function success(res) {
        window.currentLevel = res.data;
        that.renderLayout(window.currentLevel);
        that.initPosition(window.currentLevel);
      },
      fail: function fail() {}
    });
  },
  initPendant: function initPendant() {
    var that = this; //关卡

    if (this.levelCounter == null) {
      var levelNode = new cc.Node('levelCounter');
      levelNode.setAnchorPoint(0.5, 0.5);
      levelNode.width = 756;
      levelNode.height = 240;
      levelNode.horizontalAlign = 'center';
      var levelCounter = levelNode.addComponent(cc.Label);
      levelCounter.node.setPosition(0, cc.winSize.height / 2 - cc.winSize.height * 0.05);

      if (window.levelBy) {
        levelCounter.string = '第 ' + window.levelIndex + ' 关 - ' + window.levelBy;
      } else {
        levelCounter.string = '第 ' + window.levelIndex + ' 关';
      }

      levelCounter.fontSize = 60;
      levelCounter.enableBold = true; // levelCounter.overflow = cc.Label.Overflow.RESIZE_HEIGHT;

      levelCounter.lineHeight = 60;
      levelCounter.horizontalAlign = 'center';
      this.levelCounter = levelNode.getComponent(cc.Label);
      this.node.addChild(levelNode);
    } else {
      if (window.levelBy) {
        this.levelCounter.string = '第 ' + window.levelIndex + ' 关 - ' + window.levelBy;
      } else {
        this.levelCounter.string = '第 ' + window.levelIndex + ' 关';
      }
    }

    if (window.from == 'build') {
      this.levelCounter.string = '测试关卡';
    } //步数


    if (this.stepCounter == null) {
      var node = new cc.Node('stepCounter');
      node.setAnchorPoint(0, 1);
      var stepCounter = node.addComponent(cc.Label);
      stepCounter.node.setPosition(-(cc.winSize.width / 2) + cc.winSize.width * 0.05, cc.winSize.width / 2 + 80);
      stepCounter.string = '步数： 0';
      this.stepCounter = node.getComponent(cc.Label);
      this.node.addChild(node);
    } else {
      this.stepCounterValue = 0;
      this.stepCounter.string = "步数：" + this.stepCounterValue;
    } //用时


    if (this.timeCounter == null) {
      var timeNode = new cc.Node('timeCounter');
      timeNode.setAnchorPoint(0, 1);
      var timeCounter = timeNode.addComponent(cc.Label);
      timeCounter.node.setPosition(0, cc.winSize.width / 2 + 80);
      timeCounter.string = '用时： 0';
      this.timeCounter = timeNode.getComponent(cc.Label);
      this.node.addChild(timeNode);
      this.timeCounterTimer = setInterval(function () {
        this.timeCounterValue++;
        this.timeCounter.string = "用时：" + this.timeCounterValue;
      }.bind(this), 1000);
    } else {
      this.timeCounterValue = 0;
      this.timeCounter.string = "用时：" + this.timeCounterValue;

      if (this.timeCounterTimer == null) {
        this.timeCounterTimer = setInterval(function () {
          this.timeCounterValue++;
          this.timeCounter.string = "用时：" + this.timeCounterValue;
        }.bind(this), 1000);
      }
    } // this.moveHistoryList = [];


    this.moveHistoryList.splice(0, this.moveHistoryList.length);
    wx.getStorage({
      key: "initLevel",
      success: function success(res) {
        that.moveHistoryList.push(res.data);
      }
    });
  },
  pendantAddEvent: function pendantAddEvent() {
    var that = this;
    cc.find('back', this.node).on('click', this.back, this); //开启点击移动

    if (window.setting.clickMove) {
      cc.find('gameBtns/up', this.node).on("click", function () {
        that.moveUp(window.currentLevel);
      }, this);
      cc.find('gameBtns/right', this.node).on("click", function () {
        that.moveRight(window.currentLevel);
      }, this);
      cc.find('gameBtns/down', this.node).on("click", function () {
        that.moveDown(window.currentLevel);
      }, this);
      cc.find('gameBtns/left', this.node).on("click", function () {
        that.moveLeft(window.currentLevel);
      }, this);
    } else {
      cc.find('gameBtns/up', this.node).opacity = 0;
      cc.find('gameBtns/right', this.node).opacity = 0;
      cc.find('gameBtns/down', this.node).opacity = 0;
      cc.find('gameBtns/left', this.node).opacity = 0;
    }

    cc.find('gameBtns/backStep', this.node).on('click', function () {
      if (that.moveHistoryList.length > 1 && that.stepCounterValue >= 1) {
        that.moveHistoryList.pop();

        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
          wx.setStorage({
            key: "lastLayout",
            data: that.moveHistoryList[that.moveHistoryList.length - 1],
            success: function success(result) {
              wx.getStorage({
                key: "lastLayout",
                success: function success(res) {
                  that.stepCounterValue--;
                  that.stepCounter.string = "步数：" + that.stepCounterValue;
                  window.currentLevel = res.data;
                  that.renderLayout(window.currentLevel);
                  that.initPosition(window.currentLevel);
                }
              });
            }
          });
        }
      }
    }, this);
    cc.find('gameBtns/menu', this.node).on("click", function () {
      clearInterval(that.timeCounterTimer);
      that.timeCounterTimer = null;
      var CanvasNode = that.node;

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
        cc.find('contain/continue', newMyPrefab).on('click', function () {
          if (that.timeCounterTimer == null) {
            that.timeCounterTimer = setInterval(function () {
              that.timeCounterValue++;
              that.timeCounter.string = "用时：" + that.timeCounterValue;
            }.bind(that), 1000);
          }

          newMyPrefab.removeFromParent();
          newMyPrefab.destroy();
        }, this);
        cc.find('contain/replay', newMyPrefab).on('click', function () {
          newMyPrefab.removeFromParent();
          newMyPrefab.destroy();
          that.replayLayout();
          that.initPendant();
        }, this);
        cc.find('contain/rank', newMyPrefab).on('click', function () {
          if (window.from == 'build') {
            (0, _common.Toast)('测试关卡没有排行榜', 1500);
            return;
          }

          that.showLevelRank();
        }, this);
        cc.find('contain/share', newMyPrefab).on('click', function () {
          if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            var titString = '益智推箱';

            if (window.from != 'build') {
              titString = titString + '第' + window.levelIndex + '关-快来挑战吧!';
            } else {
              titString = titString + '小游戏，快来挑战吧！';
            } // titString = titString + '-使用步数：'


            wx.shareAppMessage({
              title: titString,
              // imageUrl: data.url,
              query: '分享'
            });
          }
        }, this);
        CanvasNode.addChild(newMyPrefab);
      };

      cc.loader.loadRes('gameMenu', onResourceLoaded);
    }, this);
  },
  initLevel: function initLevel() {
    var that = this;

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      _common.Loading.show();

      if (window.from == 'build') {
        that.lastScore = null;
        that.renderLastScore('无', '无');
        wx.getStorage({
          key: 'buildLevel',
          success: function success(res) {
            window.currentLevel = res.data;
            that.renderLayout(window.currentLevel);
            that.initPosition(window.currentLevel); // 初始化挂件

            that.initPendant();
            wx.setStorage({
              key: "initLevel",
              data: window.currentLevel,
              success: function success(result) {
                wx.getStorage({
                  key: "initLevel",
                  success: function success(res) {
                    that.moveHistoryList.push(res.data);
                  }
                });
              }
            });

            _common.Loading.hide();
          }
        });
        wx.getStorage({
          key: 'buildLevel',
          success: function success(res) {
            window.uploadLevel = res.data;
          }
        });
        return;
      } //经典关卡


      if (window.levelClassify == 'classicsLevel') {
        wx.cloud.callFunction({
          name: 'queryClassicsLevel',
          data: {
            appId: window.user.appId,
            levelIndex: window.levelIndex
          }
        }).then(function (res) {
          if (res && res.result.data.length > 0) {
            window.currentLevel = res.result.data[0].content;
            that.renderLayout(window.currentLevel);
            that.initPosition(window.currentLevel);
            window.levelBy = res.result.data[0].nickName; // 初始化挂件

            that.initPendant();
            wx.setStorage({
              key: "initLevel",
              data: window.currentLevel,
              success: function success(result) {
                wx.getStorage({
                  key: "initLevel",
                  success: function success(res) {
                    that.moveHistoryList.push(res.data);
                  }
                });
              }
            });
          }

          _common.Loading.hide();
        })["catch"](function (err) {
          console.error(err);
        });
        wx.cloud.callFunction({
          name: 'queryClassicsLevelScore',
          data: {
            levelIndex: window.levelIndex,
            appId: window.user.appId
          }
        }).then(function (res) {
          if (res && res.result.data.length > 0) {
            that.lastScore = res.result.data[0];
            that.renderLastScore(that.lastScore.useStep, that.lastScore.useTime);
          } else {
            that.lastScore = null;
            that.renderLastScore('无', '无');
            if (window.levelIndex == 1) (0, _common.Toast)('Tip: 可滑动屏幕控制人物', 3000);
          }
        })["catch"](function (err) {
          console.error(err);
        });
      } //网络关卡
      else {}
    }
  },
  back: function back() {
    this.initPendant();
    clearInterval(this.timeCounterTimer);
    this.timeCounterTimer = null;

    if (window.from) {
      cc.director.loadScene(window.from);
    } else {
      cc.director.loadScene("main");
    }

    window.from = 'game';
  },
  renderLastScore: function renderLastScore(step, time) {
    if (window.from == 'build') {
      return;
    }

    var that = this; //最佳步数

    if (that.lastStepNode == null) {
      var lastStepNode = new cc.Node('lastStepNode');
      lastStepNode.setAnchorPoint(0, 1);
      var stepCounter = lastStepNode.addComponent(cc.Label);
      stepCounter.node.setPosition(-(cc.winSize.width / 2) + cc.winSize.width * 0.05, cc.winSize.width / 2 + 160);
      stepCounter.string = '最佳成绩：步数 ' + step + " - 用时 " + time;
      that.lastStepNode = lastStepNode.getComponent(cc.Label);
      that.node.addChild(lastStepNode);
    } else {
      that.lastStepNode.string = '最佳成绩：步数 ' + step + " - 用时 " + time;
    }
  },
  showLevelRank: function showLevelRank() {
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
          that.renderLevelRankList(content, rankPage, rankPageSize);
        });
      } else {
        that.renderLevelRankList(content, rankPage, rankPageSize);
      }

      cc.find('rankList', newMyPrefab).on('bounce-bottom', function () {
        rankPage++;
        that.renderLevelRankList(content, rankPage, rankPageSize);
      }, this);
      cc.find('thLevel', newMyPrefab).getComponent(cc.Label).string = '步 数';
      CanvasNode.addChild(newMyPrefab);
    };

    cc.loader.loadRes('rankLayout', onResourceLoaded);
  },
  renderLevelRankList: function renderLevelRankList(content, page, pageSize) {
    var that = this;
    var currentItemNum = content.childrenCount;

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      _common.Loading.show();

      wx.cloud.callFunction({
        name: 'queryClassicsLevelScore',
        data: {
          levelIndex: window.levelIndex,
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
            node.getChildByName('tdLevel').getComponent(cc.Label).string = data.useStep;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZUxheW91dC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXJyZW50TGV2ZWwiLCJlbGVTaXplIiwibGF5b3V0IiwiQXJyYXkiLCJibG9ja051bSIsInVwbG9hZExldmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibG9jayIsInR5cGUiLCJQcmVmYWIiLCJkaXNwbGF5TmFtZSIsIndhbGwiLCJib3giLCJiYWxsIiwicm9sZVVwIiwicm9sZVJpZ2h0Iiwicm9sZURvd24iLCJyb2xlTGVmdCIsInBvc2l0aW9uIiwiZ2FtZUJuIiwiU3ByaXRlIiwiYm94TnVtIiwic3RlcENvdW50ZXIiLCJzdGVwQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXIiLCJ0aW1lQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXJUaW1lciIsImxldmVsQ291bnRlciIsIm1vdmVIaXN0b3J5TGlzdCIsImxhc3RTY29yZSIsImxhc3RTdGVwTm9kZSIsImxhc3RUaW1lbm9kZSIsInJhbmtJdGVtIiwib25Mb2FkIiwidGhhdCIsImluaXRXaW5FbGUiLCJyZW5kZXJCZyIsImluaXRMZXZlbCIsImZpbmQiLCJub2RlIiwiaGVpZ2h0Iiwid2luU2l6ZSIsIndpZHRoIiwic3RhcnQiLCJhZGRUb3VjaE1vdmUiLCJwZW5kYW50QWRkRXZlbnQiLCJyZWFsU2l6IiwiaSIsIm4iLCJ4IiwieSIsInNpZ24iLCJjb3ZlciIsImluaXRQb3NpdGlvbiIsImxlbmd0aCIsInN0YXJ0WCIsInN0YXJ0WSIsIm5ld0Jsb2NrIiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsImFkZENoaWxkIiwicmVuZGVyQm4iLCJnZXRDb21wb25lbnQiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiYmdVcmxCYXNlIiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwicmVjdCIsInNwcml0ZUZyYW1lIiwicmVuZGVyTGF5b3V0IiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0IiwibW92ZVVwIiwicmVzZXRQb3NpdGlvbiIsIm1vdmV0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtb3ZlRG93biIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiZGlyZWN0aW9uIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJzdWNjZXNzIiwicmVzdWx0IiwiZ2V0U3RvcmFnZSIsInJlcyIsInB1c2giLCJzdHJpbmciLCJjb3ZlckJveE51bSIsInNob3dSZXN1bHQiLCJjbGVhckludGVydmFsIiwic2V0dGluZyIsInRvdWNoTW92ZSIsImZpZ3VyZUxvY2F0aW9uIiwib24iLCJldmVudCIsImdldExvY2F0aW9uIiwiZW5kTG9jYXRpb24iLCJNYXRoIiwiYWJzIiwiQ2FudmFzTm9kZSIsImNvbnNvbGUiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJuZXdNeVByZWZhYiIsIkxhYmVsIiwiZnJvbSIsImxldmVsSW5kZXgiLCJjbGFzc2ljc0xldmVsTnVtIiwib3BhY2l0eSIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwiaW5pdFBlbmRhbnQiLCJMb2FkaW5nIiwic2hvdyIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInRoZW4iLCJjb250ZW50IiwidG90YWwiLCJhcHBJZCIsInVzZXIiLCJuaWNrTmFtZSIsImxvZ2luSW5mbyIsInN1YnN0cmluZyIsInBvcnRyYWl0IiwiYXZhdGFyVXJsIiwiaGlkZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiZXJyb3IiLCJyZXBsYXlMYXlvdXQiLCJzaG93TGV2ZWxSYW5rIiwidGl0U3RyaW5nIiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJxdWVyeSIsImxvYWRlciIsImxvYWRSZXMiLCJ1c2VTdGVwIiwidXNlVGltZSIsInJlbmRlckxhc3RTY29yZSIsImN1ckxldmVsTnVtIiwibGV2ZWxGaW5pc2hOdW0iLCJmYWlsIiwibGV2ZWxOb2RlIiwiTm9kZSIsInNldEFuY2hvclBvaW50IiwiaG9yaXpvbnRhbEFsaWduIiwiYWRkQ29tcG9uZW50IiwibGV2ZWxCeSIsImZvbnRTaXplIiwiZW5hYmxlQm9sZCIsImxpbmVIZWlnaHQiLCJ0aW1lTm9kZSIsInNldEludGVydmFsIiwiYmluZCIsInNwbGljZSIsImJhY2siLCJjbGlja01vdmUiLCJwb3AiLCJsZXZlbENsYXNzaWZ5Iiwic3RlcCIsInRpbWUiLCJyYW5rUGFnZSIsInJhbmtQYWdlU2l6ZSIsInJlc291cmNlIiwicmVuZGVyTGV2ZWxSYW5rTGlzdCIsInBhZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRJdGVtTnVtIiwiY2hpbGRyZW5Db3VudCIsImdldENoaWxkQnlOYW1lIiwiY3JlYXRlVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsTUFBTSxDQUFDQyxZQUFQLEdBQXNCLEVBQXRCO0FBRUFELE1BQU0sQ0FBQ0UsT0FBUCxHQUFpQixFQUFqQjtBQUNBRixNQUFNLENBQUNHLE1BQVAsR0FBZ0IsSUFBSUMsS0FBSixFQUFoQjtBQUNBSixNQUFNLENBQUNLLFFBQVAsR0FBa0IsRUFBbEI7QUFDQUwsTUFBTSxDQUFDTSxXQUFQLEdBQXFCLElBQXJCO0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZOO0FBR0hDLE1BQUFBLFdBQVcsRUFBQztBQUhULEtBREM7QUFNUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUDtBQUdGQyxNQUFBQSxXQUFXLEVBQUM7QUFIVixLQU5FO0FBV1JFLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRlI7QUFHREMsTUFBQUEsV0FBVyxFQUFDO0FBSFgsS0FYRztBQWdCUkcsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGTCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUDtBQUdGQyxNQUFBQSxXQUFXLEVBQUM7QUFIVixLQWhCRTtBQXFCUkksSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKTixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGTDtBQUdKQyxNQUFBQSxXQUFXLEVBQUM7QUFIUixLQXJCQTtBQTBCUkssSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsSUFERjtBQUVQUCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGRjtBQUdQQyxNQUFBQSxXQUFXLEVBQUM7QUFITCxLQTFCSDtBQStCUk0sSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOUixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGSDtBQUdOQyxNQUFBQSxXQUFXLEVBQUM7QUFITixLQS9CRjtBQW9DUk8sSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOVCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGSDtBQUdOQyxNQUFBQSxXQUFXLEVBQUM7QUFITixLQXBDRjtBQXlDUlEsSUFBQUEsUUFBUSxFQUFDO0FBQ0wsaUJBQVM7QUFESixLQXpDRDtBQTRDUkMsSUFBQUEsTUFBTSxFQUFDaEIsRUFBRSxDQUFDaUIsTUE1Q0Y7QUE2Q1JDLElBQUFBLE1BQU0sRUFBQztBQUNILGlCQUFTO0FBRE4sS0E3Q0M7QUFnRFJDLElBQUFBLFdBQVcsRUFBQyxJQWhESjtBQWlEUkMsSUFBQUEsZ0JBQWdCLEVBQUUsQ0FqRFY7QUFrRFJDLElBQUFBLFdBQVcsRUFBQyxJQWxESjtBQW1EUkMsSUFBQUEsZ0JBQWdCLEVBQUMsQ0FuRFQ7QUFvRFJDLElBQUFBLGdCQUFnQixFQUFDLElBcERUO0FBcURSQyxJQUFBQSxZQUFZLEVBQUUsSUFyRE47QUFzRFJDLElBQUFBLGVBQWUsRUFBQyxFQXREUjtBQXVEUkMsSUFBQUEsU0FBUyxFQUFFLElBdkRIO0FBd0RSQyxJQUFBQSxZQUFZLEVBQUUsSUF4RE47QUF5RFJDLElBQUFBLFlBQVksRUFBRSxJQXpETjtBQTBEUkMsSUFBQUEsUUFBUSxFQUFDN0IsRUFBRSxDQUFDTTtBQTFESixHQUhQO0FBaUVMO0FBRUF3QixFQUFBQSxNQW5FSyxvQkFtRUs7QUFDTixRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFNBQUtDLFVBQUw7QUFDQSxTQUFLQyxRQUFMLEdBSE0sQ0FLTjs7QUFDQSxTQUFLQyxTQUFMO0FBR0FsQyxJQUFBQSxFQUFFLENBQUNtQyxJQUFILENBQVEsVUFBUixFQUFtQixLQUFLQyxJQUF4QixFQUE4QkMsTUFBOUIsR0FBd0MsQ0FBQ3JDLEVBQUUsQ0FBQ3NDLE9BQUgsQ0FBV0QsTUFBWCxHQUFvQnJDLEVBQUUsQ0FBQ3NDLE9BQUgsQ0FBV0MsS0FBaEMsSUFBdUMsQ0FBL0U7QUFFSCxHQTlFSTtBQWdGTEMsRUFBQUEsS0FoRkssbUJBZ0ZJO0FBRUwsU0FBS0MsWUFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDSCxHQXBGSTtBQXFGTDtBQUVBVixFQUFBQSxVQXZGSyx3QkF1Rk87QUFDUixRQUFJVyxPQUFPLEdBQUczQyxFQUFFLENBQUNzQyxPQUFILENBQVdDLEtBQVgsR0FBaUI5QyxNQUFNLENBQUNLLFFBQXRDO0FBQ0FMLElBQUFBLE1BQU0sQ0FBQ0UsT0FBUCxHQUFpQmdELE9BQWpCOztBQUVBLFNBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHbkQsTUFBTSxDQUFDSyxRQUExQixFQUFvQzhDLENBQUMsRUFBckMsRUFBd0M7QUFDcENuRCxNQUFBQSxNQUFNLENBQUNHLE1BQVAsQ0FBY2dELENBQWQsSUFBbUIsSUFBSS9DLEtBQUosRUFBbkI7O0FBQ0EsV0FBSSxJQUFJZ0QsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHcEQsTUFBTSxDQUFDSyxRQUExQixFQUFvQytDLENBQUMsRUFBckMsRUFBd0M7QUFDcENwRCxRQUFBQSxNQUFNLENBQUNHLE1BQVAsQ0FBY2dELENBQWQsRUFBaUJDLENBQWpCLElBQXNCO0FBQUNDLFVBQUFBLENBQUMsRUFBQyxDQUFIO0FBQUtDLFVBQUFBLENBQUMsRUFBQyxDQUFQO0FBQVNDLFVBQUFBLElBQUksRUFBQyxDQUFkO0FBQWdCQyxVQUFBQSxLQUFLLEVBQUM7QUFBdEIsU0FBdEI7QUFDSDtBQUNKO0FBQ0osR0FqR0k7QUFrR0xDLEVBQUFBLFlBbEdLLHdCQWtHUXRELE1BbEdSLEVBa0dlO0FBQ2hCLFNBQUttQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0csTUFBTCxHQUFjLENBQWQ7O0FBQ0EsU0FBSSxJQUFJMEIsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFDaEQsTUFBTSxDQUFDdUQsTUFBeEIsRUFBZ0NQLENBQUMsRUFBakMsRUFBb0M7QUFDaEMsV0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdqRCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVV1RCxNQUE3QixFQUFxQ04sQ0FBQyxFQUF0QyxFQUF5QztBQUNyQztBQUNBLFlBQUdqRCxNQUFNLENBQUNnRCxDQUFELENBQU4sQ0FBVUMsQ0FBVixFQUFhRyxJQUFiLElBQXFCLENBQXJCLElBQTBCcEQsTUFBTSxDQUFDZ0QsQ0FBRCxDQUFOLENBQVVDLENBQVYsRUFBYUcsSUFBYixJQUFxQixDQUEvQyxJQUFvRHBELE1BQU0sQ0FBQ2dELENBQUQsQ0FBTixDQUFVQyxDQUFWLEVBQWFHLElBQWIsSUFBcUIsQ0FBekUsSUFBOEVwRCxNQUFNLENBQUNnRCxDQUFELENBQU4sQ0FBVUMsQ0FBVixFQUFhRyxJQUFiLElBQXFCLENBQXRHLEVBQXdHO0FBQ3BHLGVBQUtqQyxRQUFMLENBQWMrQixDQUFkLEdBQWtCRCxDQUFsQjtBQUNBLGVBQUs5QixRQUFMLENBQWNnQyxDQUFkLEdBQWtCSCxDQUFsQjtBQUNILFNBTG9DLENBTXJDOzs7QUFDQSxZQUFHaEQsTUFBTSxDQUFDZ0QsQ0FBRCxDQUFOLENBQVVDLENBQVYsRUFBYUcsSUFBYixJQUFxQixDQUF4QixFQUEwQjtBQUN0QixlQUFLOUIsTUFBTDtBQUNIO0FBQ0o7QUFDSjtBQUVKLEdBbkhJO0FBb0hMZSxFQUFBQSxRQXBISyxzQkFvSEs7QUFDTixRQUFJbUIsTUFBTSxHQUFHLEVBQUVwRCxFQUFFLENBQUNzQyxPQUFILENBQVdDLEtBQVgsR0FBaUIsQ0FBbkIsQ0FBYjtBQUNBLFFBQUljLE1BQU0sR0FBSTVELE1BQU0sQ0FBQ0UsT0FBUCxHQUFlRixNQUFNLENBQUNLLFFBQXZCLEdBQWlDLENBQTlDOztBQUNBLFNBQUksSUFBSThDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR25ELE1BQU0sQ0FBQ0ssUUFBMUIsRUFBb0M4QyxDQUFDLEVBQXJDLEVBQXdDO0FBQ3BDLFdBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHcEQsTUFBTSxDQUFDSyxRQUExQixFQUFvQytDLENBQUMsRUFBckMsRUFBd0M7QUFDcEMsWUFBSUMsQ0FBQyxHQUFHRCxDQUFDLEdBQUNwRCxNQUFNLENBQUNFLE9BQVQsR0FBbUJ5RCxNQUEzQjtBQUNBLFlBQUlMLENBQUMsR0FBRyxDQUFDSCxDQUFELEdBQUduRCxNQUFNLENBQUNFLE9BQVYsR0FBb0IwRCxNQUE1QjtBQUNBNUQsUUFBQUEsTUFBTSxDQUFDRyxNQUFQLENBQWNnRCxDQUFkLEVBQWlCQyxDQUFqQixJQUFzQjtBQUNsQkMsVUFBQUEsQ0FBQyxFQUFEQSxDQURrQjtBQUVsQkMsVUFBQUEsQ0FBQyxFQUFEQSxDQUZrQjtBQUdsQkMsVUFBQUEsSUFBSSxFQUFDLENBSGE7QUFJbEJDLFVBQUFBLEtBQUssRUFBQztBQUpZLFNBQXRCO0FBTUEsWUFBSUssUUFBUSxHQUFHdEQsRUFBRSxDQUFDdUQsV0FBSCxDQUFlLEtBQUtuRCxLQUFwQixDQUFmLENBVG9DLENBVXBDOztBQUNBa0QsUUFBQUEsUUFBUSxDQUFDRSxXQUFULENBQXFCVixDQUFyQixFQUF1QkMsQ0FBdkIsRUFYb0MsQ0FZcEM7O0FBQ0EsYUFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQkgsUUFBbkI7QUFDSDtBQUNKO0FBRUosR0F6SUk7QUEySUxJLEVBQUFBLFFBM0lLLHNCQTJJSztBQUNOLFFBQUcsS0FBSzFDLE1BQUwsSUFBZSxJQUFsQixFQUF3QixLQUFLQSxNQUFMLEdBQWNoQixFQUFFLENBQUNtQyxJQUFILENBQVEsc0JBQVIsRUFBZ0N3QixZQUFoQyxDQUE2QzNELEVBQUUsQ0FBQ2lCLE1BQWhELENBQWQ7QUFDeEJqQixJQUFBQSxFQUFFLENBQUM0RCxZQUFILENBQWdCQyxVQUFoQixDQUEyQnBFLE1BQU0sQ0FBQ3FFLFNBQVAsR0FBa0IsY0FBN0MsRUFBNkQsVUFBVUMsR0FBVixFQUFlQyxPQUFmLEVBQXdCO0FBQ2pGLFVBQUlDLE1BQU0sR0FBSSxJQUFJakUsRUFBRSxDQUFDa0UsV0FBUCxDQUFtQkYsT0FBbkIsRUFBNEJoRSxFQUFFLENBQUNtRSxJQUFILENBQVEsQ0FBUixFQUFVLENBQVYsRUFBWSxHQUFaLEVBQWdCLEdBQWhCLENBQTVCLENBQWQ7QUFDQXBDLE1BQUFBLElBQUksQ0FBQ2YsTUFBTCxDQUFZb0QsV0FBWixHQUEwQkgsTUFBMUIsQ0FGaUYsQ0FFL0M7QUFFckMsS0FKRDtBQUtILEdBbEpJO0FBb0pMSSxFQUFBQSxZQXBKSyx3QkFvSlF6RSxNQXBKUixFQW9KZTtBQUNoQixTQUFLcUMsUUFBTDs7QUFDQSxTQUFJLElBQUlXLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR25ELE1BQU0sQ0FBQ0ssUUFBMUIsRUFBb0M4QyxDQUFDLEVBQXJDLEVBQXdDO0FBQ3BDLFdBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHcEQsTUFBTSxDQUFDSyxRQUExQixFQUFvQytDLENBQUMsRUFBckMsRUFBd0M7QUFDcEMsWUFBSUMsQ0FBQyxHQUFHckQsTUFBTSxDQUFDRyxNQUFQLENBQWNnRCxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBNUI7QUFDQSxZQUFJQyxDQUFDLEdBQUd0RCxNQUFNLENBQUNHLE1BQVAsQ0FBY2dELENBQWQsRUFBaUJDLENBQWpCLEVBQW9CRSxDQUE1Qjs7QUFDQSxnQkFBT25ELE1BQU0sQ0FBQ2dELENBQUQsQ0FBTixDQUFVQyxDQUFWLEVBQWFHLElBQXBCO0FBQ0ksZUFBSyxDQUFMO0FBQ0ksZ0JBQUlNLFFBQVEsR0FBR3RELEVBQUUsQ0FBQ3VELFdBQUgsQ0FBZSxLQUFLbkQsS0FBcEIsQ0FBZjtBQUNBa0QsWUFBQUEsUUFBUSxDQUFDRSxXQUFULENBQXFCVixDQUFyQixFQUF1QkMsQ0FBdkI7QUFDQSxpQkFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQkgsUUFBbkI7QUFDQTs7QUFDSixlQUFLLENBQUw7QUFDSSxnQkFBSWdCLE9BQU8sR0FBR3RFLEVBQUUsQ0FBQ3VELFdBQUgsQ0FBZSxLQUFLL0MsSUFBcEIsQ0FBZDtBQUNBOEQsWUFBQUEsT0FBTyxDQUFDZCxXQUFSLENBQW9CVixDQUFwQixFQUFzQkMsQ0FBdEI7QUFDQSxpQkFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQmEsT0FBbkI7QUFDQTs7QUFDSixlQUFLLENBQUw7QUFDSSxnQkFBSUMsTUFBTSxHQUFHdkUsRUFBRSxDQUFDdUQsV0FBSCxDQUFlLEtBQUs5QyxHQUFwQixDQUFiO0FBQ0E4RCxZQUFBQSxNQUFNLENBQUNmLFdBQVAsQ0FBbUJWLENBQW5CLEVBQXFCQyxDQUFyQjtBQUNBLGlCQUFLWCxJQUFMLENBQVVxQixRQUFWLENBQW1CYyxNQUFuQjtBQUNBOztBQUNKLGVBQUssQ0FBTDtBQUNJLGdCQUFJQyxPQUFPLEdBQUd4RSxFQUFFLENBQUN1RCxXQUFILENBQWUsS0FBSzdDLElBQXBCLENBQWQ7QUFDQThELFlBQUFBLE9BQU8sQ0FBQ2hCLFdBQVIsQ0FBb0JWLENBQXBCLEVBQXNCQyxDQUF0QjtBQUNBLGlCQUFLWCxJQUFMLENBQVVxQixRQUFWLENBQW1CZSxPQUFuQjtBQUNBOztBQUNKLGVBQUssQ0FBTDtBQUNJLGdCQUFJQyxTQUFTLEdBQUd6RSxFQUFFLENBQUN1RCxXQUFILENBQWUsS0FBSzVDLE1BQXBCLENBQWhCO0FBQ0E4RCxZQUFBQSxTQUFTLENBQUNqQixXQUFWLENBQXNCVixDQUF0QixFQUF3QkMsQ0FBeEI7QUFDQSxpQkFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQmdCLFNBQW5CO0FBQ0E7O0FBQ0osZUFBSyxDQUFMO0FBQ0ksZ0JBQUlDLFlBQVksR0FBRzFFLEVBQUUsQ0FBQ3VELFdBQUgsQ0FBZSxLQUFLM0MsU0FBcEIsQ0FBbkI7QUFDQThELFlBQUFBLFlBQVksQ0FBQ2xCLFdBQWIsQ0FBeUJWLENBQXpCLEVBQTJCQyxDQUEzQjtBQUNBLGlCQUFLWCxJQUFMLENBQVVxQixRQUFWLENBQW1CaUIsWUFBbkI7QUFDQTs7QUFDSixlQUFLLENBQUw7QUFDSSxnQkFBSUMsV0FBVyxHQUFHM0UsRUFBRSxDQUFDdUQsV0FBSCxDQUFlLEtBQUsxQyxRQUFwQixDQUFsQjtBQUNBOEQsWUFBQUEsV0FBVyxDQUFDbkIsV0FBWixDQUF3QlYsQ0FBeEIsRUFBMEJDLENBQTFCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVXFCLFFBQVYsQ0FBbUJrQixXQUFuQjtBQUNBOztBQUNKLGVBQUssQ0FBTDtBQUNJLGdCQUFJQyxXQUFXLEdBQUc1RSxFQUFFLENBQUN1RCxXQUFILENBQWUsS0FBS3pDLFFBQXBCLENBQWxCO0FBQ0E4RCxZQUFBQSxXQUFXLENBQUNwQixXQUFaLENBQXdCVixDQUF4QixFQUEwQkMsQ0FBMUI7QUFDQSxpQkFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQm1CLFdBQW5CO0FBQ0E7QUF4Q1I7QUEwQ0g7QUFDSjtBQUVKLEdBdk1JO0FBeU1MQyxFQUFBQSxNQXpNSyxrQkF5TUVqRixNQXpNRixFQXlNUztBQUNWLFFBQUltQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUllLENBQUMsR0FBRyxLQUFLL0IsUUFBTCxDQUFjK0IsQ0FBdEI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsS0FBS2hDLFFBQUwsQ0FBY2dDLENBQXRCLENBSFUsQ0FLVjs7QUFDQSxRQUFHbkQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDeEJwRCxNQUFBQSxNQUFNLENBQUNtRCxDQUFDLEdBQUMsQ0FBSCxDQUFOLENBQVlELENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBcEQsTUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNBLFdBQUs4QixhQUFMLENBQW1CLElBQW5CO0FBQ0gsS0FKRCxDQUtBO0FBTEEsU0FNSyxJQUFHbEYsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDN0JwRCxRQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0gsT0FGSSxDQUdMO0FBSEssV0FJQSxJQUFHcEQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDN0I7QUFDQSxjQUFHcEQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDeEJwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFDLEdBQUMsQ0FBSCxDQUFOLENBQVlELENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBcEQsWUFBQUEsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsR0FBc0IsQ0FBdEI7QUFDQSxnQkFBR3BELE1BQU0sQ0FBQ21ELENBQUMsR0FBQyxDQUFILENBQU4sQ0FBWUQsQ0FBWixFQUFlRyxLQUFsQixFQUF5QnJELE1BQU0sQ0FBQ21ELENBQUMsR0FBQyxDQUFILENBQU4sQ0FBWUQsQ0FBWixFQUFlRyxLQUFmLEdBQXVCLENBQXZCO0FBQ3pCLGlCQUFLNkIsYUFBTCxDQUFtQixJQUFuQjtBQUNILFdBTkQsQ0FPQTtBQVBBLGVBUUssSUFBR2xGLE1BQU0sQ0FBQ21ELENBQUMsR0FBQyxDQUFILENBQU4sQ0FBWUQsQ0FBWixFQUFlRSxJQUFmLElBQXVCLENBQTFCLEVBQTRCO0FBQzdCcEQsY0FBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNBcEQsY0FBQUEsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsR0FBc0IsQ0FBdEI7QUFDQXBELGNBQUFBLE1BQU0sQ0FBQ21ELENBQUMsR0FBQyxDQUFILENBQU4sQ0FBWUQsQ0FBWixFQUFlRyxLQUFmLEdBQXVCLENBQXZCO0FBQ0FyRCxjQUFBQSxNQUFNLENBQUNtRCxDQUFDLEdBQUMsQ0FBSCxDQUFOLENBQVlELENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBLGtCQUFHcEQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVHLEtBQWxCLEVBQXlCckQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVHLEtBQWYsR0FBdUIsQ0FBdkI7QUFDekIsbUJBQUs2QixhQUFMLENBQW1CLElBQW5CO0FBQ0gsYUFQSSxNQU9BO0FBQ0RsRixjQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0g7QUFDSixTQXBCSSxDQXFCTDtBQXJCSyxhQXNCQSxJQUFHcEQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDN0JwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFDLEdBQUMsQ0FBSCxDQUFOLENBQVlELENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBcEQsWUFBQUEsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVHLEtBQWYsR0FBdUIsQ0FBdkI7QUFDQSxpQkFBSzZCLGFBQUwsQ0FBbUIsSUFBbkI7QUFDSCxXQTNDUyxDQTZDVjs7O0FBQ0EsUUFBR2xGLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFWLEVBQWFFLElBQWIsSUFBcUIsQ0FBckIsSUFBMEJwRCxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRyxLQUExQyxFQUFnRDtBQUM1Q3JELE1BQUFBLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFWLEVBQWFFLElBQWIsR0FBb0IsQ0FBcEI7QUFDQXBELE1BQUFBLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFWLEVBQWFHLEtBQWIsR0FBcUIsSUFBckI7QUFDSDs7QUFDRCxRQUFJOEIsU0FBUyxHQUFHQyxVQUFVLENBQUMsWUFBWTtBQUNuQ2pELE1BQUFBLElBQUksQ0FBQ3NDLFlBQUwsQ0FBa0J6RSxNQUFsQjtBQUNBcUYsTUFBQUEsWUFBWSxDQUFDRixTQUFELENBQVo7QUFDSCxLQUh5QixDQUExQjtBQUlILEdBL1BJO0FBZ1FMRyxFQUFBQSxRQWhRSyxvQkFnUUl0RixNQWhRSixFQWdRVztBQUNaLFFBQUltQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUllLENBQUMsR0FBRyxLQUFLL0IsUUFBTCxDQUFjK0IsQ0FBdEI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsS0FBS2hDLFFBQUwsQ0FBY2dDLENBQXRCLENBSFksQ0FJWjs7QUFDQSxRQUFHbkQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDeEJwRCxNQUFBQSxNQUFNLENBQUNtRCxDQUFDLEdBQUMsQ0FBSCxDQUFOLENBQVlELENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBcEQsTUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNBLFdBQUs4QixhQUFMLENBQW1CLE1BQW5CO0FBQ0gsS0FKRCxDQUtBO0FBTEEsU0FNSyxJQUFHbEYsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDN0JwRCxRQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBRUgsT0FISSxDQUlMO0FBSkssV0FLQSxJQUFHcEQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDN0I7QUFDQSxjQUFHcEQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDeEJwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFDLEdBQUMsQ0FBSCxDQUFOLENBQVlELENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBcEQsWUFBQUEsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsR0FBc0IsQ0FBdEI7QUFDQSxnQkFBR3BELE1BQU0sQ0FBQ21ELENBQUMsR0FBQyxDQUFILENBQU4sQ0FBWUQsQ0FBWixFQUFlRyxLQUFsQixFQUF5QnJELE1BQU0sQ0FBQ21ELENBQUMsR0FBQyxDQUFILENBQU4sQ0FBWUQsQ0FBWixFQUFlRyxLQUFmLEdBQXVCLENBQXZCO0FBQ3pCLGlCQUFLNkIsYUFBTCxDQUFtQixNQUFuQjtBQUNILFdBTkQsQ0FPQTtBQVBBLGVBUUssSUFBR2xGLE1BQU0sQ0FBQ21ELENBQUMsR0FBQyxDQUFILENBQU4sQ0FBWUQsQ0FBWixFQUFlRSxJQUFmLElBQXVCLENBQTFCLEVBQTRCO0FBQzdCcEQsY0FBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNBcEQsY0FBQUEsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsR0FBc0IsQ0FBdEI7QUFDQXBELGNBQUFBLE1BQU0sQ0FBQ21ELENBQUMsR0FBQyxDQUFILENBQU4sQ0FBWUQsQ0FBWixFQUFlRyxLQUFmLEdBQXVCLENBQXZCO0FBQ0FyRCxjQUFBQSxNQUFNLENBQUNtRCxDQUFDLEdBQUMsQ0FBSCxDQUFOLENBQVlELENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBLGtCQUFHcEQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVHLEtBQWxCLEVBQXlCckQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVHLEtBQWYsR0FBdUIsQ0FBdkI7QUFDekIsbUJBQUs2QixhQUFMLENBQW1CLE1BQW5CO0FBQ0gsYUFQSSxNQU9BO0FBQ0RsRixjQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0g7QUFDSixTQXBCSSxDQXFCTDtBQXJCSyxhQXNCQSxJQUFHcEQsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDN0JwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFDLEdBQUMsQ0FBSCxDQUFOLENBQVlELENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBcEQsWUFBQUEsTUFBTSxDQUFDbUQsQ0FBQyxHQUFDLENBQUgsQ0FBTixDQUFZRCxDQUFaLEVBQWVHLEtBQWYsR0FBdUIsQ0FBdkI7QUFDQSxpQkFBSzZCLGFBQUwsQ0FBbUIsTUFBbkI7QUFDSCxXQTNDVyxDQTZDWjs7O0FBQ0EsUUFBR2xGLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFWLEVBQWFFLElBQWIsSUFBcUIsQ0FBckIsSUFBMEJwRCxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRyxLQUExQyxFQUFnRDtBQUM1Q3JELE1BQUFBLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFWLEVBQWFFLElBQWIsR0FBb0IsQ0FBcEI7QUFDQXBELE1BQUFBLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFWLEVBQWFHLEtBQWIsR0FBcUIsSUFBckI7QUFDSDs7QUFFRCxRQUFJOEIsU0FBUyxHQUFHQyxVQUFVLENBQUMsWUFBWTtBQUNuQ2pELE1BQUFBLElBQUksQ0FBQ3NDLFlBQUwsQ0FBa0J6RSxNQUFsQjtBQUNBcUYsTUFBQUEsWUFBWSxDQUFDRixTQUFELENBQVo7QUFDSCxLQUh5QixDQUExQjtBQUlILEdBdlRJO0FBd1RMSSxFQUFBQSxRQXhUSyxvQkF3VEl2RixNQXhUSixFQXdUVztBQUNaLFFBQUltQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUllLENBQUMsR0FBRyxLQUFLL0IsUUFBTCxDQUFjK0IsQ0FBdEI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsS0FBS2hDLFFBQUwsQ0FBY2dDLENBQXRCLENBSFksQ0FJWjs7QUFDQSxRQUFHbkQsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDeEJwRCxNQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBQyxHQUFDLENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBcEQsTUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNBLFdBQUs4QixhQUFMLENBQW1CLE1BQW5CO0FBQ0gsS0FKRCxDQUtBO0FBTEEsU0FNSyxJQUFHbEYsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDN0JwRCxRQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0gsT0FGSSxDQUdMO0FBSEssV0FJQSxJQUFHcEQsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDN0I7QUFDQSxjQUFHcEQsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDeEJwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBQyxHQUFDLENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBcEQsWUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsR0FBc0IsQ0FBdEI7QUFDQSxnQkFBR3BELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRyxLQUFsQixFQUF5QnJELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRyxLQUFmLEdBQXVCLENBQXZCO0FBQ3pCLGlCQUFLNkIsYUFBTCxDQUFtQixNQUFuQjtBQUNILFdBTkQsQ0FPQTtBQVBBLGVBUUssSUFBR2xGLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRSxJQUFmLElBQXVCLENBQTFCLEVBQTRCO0FBQzdCcEQsY0FBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNBcEQsY0FBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsR0FBc0IsQ0FBdEI7QUFDQXBELGNBQUFBLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRyxLQUFmLEdBQXVCLENBQXZCO0FBQ0FyRCxjQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBQyxHQUFDLENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBLGtCQUFHcEQsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVHLEtBQWxCLEVBQXlCckQsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVHLEtBQWYsR0FBdUIsQ0FBdkI7QUFDekIsbUJBQUs2QixhQUFMLENBQW1CLE1BQW5CO0FBQ0gsYUFQSSxNQU9BO0FBQ0RsRixjQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0g7QUFDSixTQXBCSSxDQXFCTDtBQXJCSyxhQXNCQSxJQUFHcEQsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDN0JwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FwRCxZQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBQyxHQUFDLENBQVosRUFBZUUsSUFBZixHQUFzQixDQUF0QjtBQUNBcEQsWUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVHLEtBQWYsR0FBdUIsQ0FBdkI7QUFDQSxpQkFBSzZCLGFBQUwsQ0FBbUIsTUFBbkI7QUFDSCxXQTFDVyxDQTRDWjs7O0FBQ0EsUUFBR2xGLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFWLEVBQWFFLElBQWIsSUFBcUIsQ0FBckIsSUFBMEJwRCxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRyxLQUF2QyxJQUFnRHJELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFWLEVBQWFHLEtBQWIsSUFBc0IsQ0FBekUsRUFBMkU7QUFDdkVyRCxNQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FwRCxNQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRyxLQUFiLEdBQXFCLElBQXJCO0FBRUg7O0FBQ0QsUUFBSThCLFNBQVMsR0FBR0MsVUFBVSxDQUFDLFlBQVk7QUFDbkNqRCxNQUFBQSxJQUFJLENBQUNzQyxZQUFMLENBQWtCekUsTUFBbEI7QUFDQXFGLE1BQUFBLFlBQVksQ0FBQ0YsU0FBRCxDQUFaO0FBQ0gsS0FIeUIsQ0FBMUI7QUFJSCxHQTlXSTtBQStXTEssRUFBQUEsU0EvV0sscUJBK1dLeEYsTUEvV0wsRUErV1k7QUFDYixRQUFJbUMsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFJZSxDQUFDLEdBQUcsS0FBSy9CLFFBQUwsQ0FBYytCLENBQXRCO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLEtBQUtoQyxRQUFMLENBQWNnQyxDQUF0QixDQUhhLENBSWI7O0FBQ0EsUUFBR25ELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRSxJQUFmLElBQXVCLENBQTFCLEVBQTRCO0FBQ3hCcEQsTUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsR0FBc0IsQ0FBdEI7QUFDQXBELE1BQUFBLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFWLEVBQWFFLElBQWIsR0FBb0IsQ0FBcEI7QUFDQSxXQUFLOEIsYUFBTCxDQUFtQixPQUFuQjtBQUNILEtBSkQsQ0FLQTtBQUxBLFNBTUssSUFBR2xGLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRSxJQUFmLElBQXVCLENBQTFCLEVBQTRCO0FBQzdCcEQsUUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNILE9BRkksQ0FHTDtBQUhLLFdBSUEsSUFBR3BELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRSxJQUFmLElBQXVCLENBQTFCLEVBQTRCO0FBQzdCO0FBQ0EsY0FBR3BELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRSxJQUFmLElBQXVCLENBQTFCLEVBQTRCO0FBQ3hCcEQsWUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNBcEQsWUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsR0FBc0IsQ0FBdEI7QUFDQXBELFlBQUFBLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRSxJQUFmLEdBQXNCLENBQXRCO0FBQ0EsZ0JBQUdwRCxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBQyxHQUFDLENBQVosRUFBZUcsS0FBbEIsRUFBeUJyRCxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBQyxHQUFDLENBQVosRUFBZUcsS0FBZixHQUF1QixDQUF2QjtBQUN6QixpQkFBSzZCLGFBQUwsQ0FBbUIsT0FBbkI7QUFDSCxXQU5ELENBT0E7QUFQQSxlQVFLLElBQUdsRixNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBQyxHQUFDLENBQVosRUFBZUUsSUFBZixJQUF1QixDQUExQixFQUE0QjtBQUM3QnBELGNBQUFBLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFWLEVBQWFFLElBQWIsR0FBb0IsQ0FBcEI7QUFDQXBELGNBQUFBLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRSxJQUFmLEdBQXNCLENBQXRCO0FBQ0FwRCxjQUFBQSxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBQyxHQUFDLENBQVosRUFBZUcsS0FBZixHQUF1QixDQUF2QjtBQUNBckQsY0FBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsR0FBc0IsQ0FBdEI7QUFDQSxrQkFBR3BELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRyxLQUFsQixFQUF5QnJELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRyxLQUFmLEdBQXVCLENBQXZCO0FBQ3pCLG1CQUFLNkIsYUFBTCxDQUFtQixPQUFuQjtBQUNILGFBUEksTUFPQTtBQUNEbEYsY0FBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNIO0FBQ0osU0FwQkksQ0FxQkw7QUFyQkssYUFzQkEsSUFBR3BELE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRSxJQUFmLElBQXVCLENBQTFCLEVBQTRCO0FBQzdCcEQsWUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNBcEQsWUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQUMsR0FBQyxDQUFaLEVBQWVFLElBQWYsR0FBc0IsQ0FBdEI7QUFDQXBELFlBQUFBLE1BQU0sQ0FBQ21ELENBQUQsQ0FBTixDQUFVRCxDQUFDLEdBQUMsQ0FBWixFQUFlRyxLQUFmLEdBQXVCLENBQXZCO0FBQ0EsaUJBQUs2QixhQUFMLENBQW1CLE9BQW5CO0FBQ0gsV0ExQ1ksQ0E0Q2I7OztBQUNBLFFBQUdsRixNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRSxJQUFiLElBQXFCLENBQXJCLElBQTBCcEQsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUcsS0FBdkMsSUFBZ0RyRCxNQUFNLENBQUNtRCxDQUFELENBQU4sQ0FBVUQsQ0FBVixFQUFhRyxLQUFiLElBQXNCLENBQXpFLEVBQTJFO0FBQ3ZFckQsTUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUUsSUFBYixHQUFvQixDQUFwQjtBQUNBcEQsTUFBQUEsTUFBTSxDQUFDbUQsQ0FBRCxDQUFOLENBQVVELENBQVYsRUFBYUcsS0FBYixHQUFxQixJQUFyQjtBQUVIOztBQUNELFFBQUk4QixTQUFTLEdBQUdDLFVBQVUsQ0FBQyxZQUFZO0FBQ25DakQsTUFBQUEsSUFBSSxDQUFDc0MsWUFBTCxDQUFrQnpFLE1BQWxCO0FBQ0FxRixNQUFBQSxZQUFZLENBQUNGLFNBQUQsQ0FBWjtBQUNILEtBSHlCLENBQTFCO0FBSUgsR0FyYUk7QUFzYUxELEVBQUFBLGFBdGFLLHlCQXNhU08sU0F0YVQsRUFzYW1CO0FBQ3BCLFFBQUl0RCxJQUFJLEdBQUcsSUFBWDs7QUFDQSxZQUFPc0QsU0FBUDtBQUNJLFdBQUssSUFBTDtBQUNJLGFBQUt0RSxRQUFMLENBQWNnQyxDQUFkLElBQW1CLENBQW5CO0FBQ0E7O0FBQ0osV0FBSyxPQUFMO0FBQ0ksYUFBS2hDLFFBQUwsQ0FBYytCLENBQWQsSUFBbUIsQ0FBbkI7QUFDQTs7QUFFSixXQUFLLE1BQUw7QUFDSSxhQUFLL0IsUUFBTCxDQUFjZ0MsQ0FBZCxJQUFtQixDQUFuQjtBQUNBOztBQUVKLFdBQUssTUFBTDtBQUNJLGFBQUtoQyxRQUFMLENBQWMrQixDQUFkLElBQW1CLENBQW5CO0FBQ0E7QUFkUjs7QUFpQkEsUUFBSTlDLEVBQUUsQ0FBQ3NGLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQnZGLEVBQUUsQ0FBQ3NGLEdBQUgsQ0FBT0UsV0FBL0IsRUFBNEM7QUFDeENDLE1BQUFBLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjO0FBQ1ZDLFFBQUFBLEdBQUcsRUFBRSxZQURLO0FBRVZDLFFBQUFBLElBQUksRUFBRW5HLE1BQU0sQ0FBQ0MsWUFGSDtBQUdWbUcsUUFBQUEsT0FIVSxtQkFHRkMsTUFIRSxFQUdNO0FBQ1pMLFVBQUFBLEVBQUUsQ0FBQ00sVUFBSCxDQUFjO0FBQ1ZKLFlBQUFBLEdBQUcsRUFBRSxZQURLO0FBRVZFLFlBQUFBLE9BRlUsbUJBRUZHLEdBRkUsRUFFRztBQUNUakUsY0FBQUEsSUFBSSxDQUFDTixlQUFMLENBQXFCd0UsSUFBckIsQ0FBMEJELEdBQUcsQ0FBQ0osSUFBOUI7QUFDSDtBQUpTLFdBQWQ7QUFNSDtBQVZTLE9BQWQ7QUFZSDs7QUFFRCxTQUFLeEUsZ0JBQUwsR0FsQ29CLENBbUNwQjs7QUFDQSxTQUFLRCxXQUFMLENBQWlCK0UsTUFBakIsR0FBMEIsUUFBUSxLQUFLOUUsZ0JBQXZDO0FBQ0EsUUFBSStFLFdBQVcsR0FBRyxDQUFsQjs7QUFDQSxTQUFJLElBQUl2RCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUNuRCxNQUFNLENBQUNDLFlBQVAsQ0FBb0J5RCxNQUFyQyxFQUE4Q1AsQ0FBQyxFQUEvQyxFQUFrRDtBQUM5QyxXQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBQ3BELE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQixDQUFwQixFQUF1QnlELE1BQXhDLEVBQWlETixDQUFDLEVBQWxELEVBQXFEO0FBQ2pELFlBQUdwRCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JrRCxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJJLEtBQTFCLElBQW1DeEQsTUFBTSxDQUFDQyxZQUFQLENBQW9Ca0QsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCRyxJQUExQixJQUFrQyxDQUF4RSxFQUEwRTtBQUN0RTtBQUNBbUQsVUFBQUEsV0FBVzs7QUFDWCxjQUFHLEtBQUtqRixNQUFMLElBQWVpRixXQUFsQixFQUE4QjtBQUMxQjtBQUNBLGlCQUFLQyxVQUFMO0FBQ0FDLFlBQUFBLGFBQWEsQ0FBQyxLQUFLOUUsZ0JBQU4sQ0FBYjtBQUNBLGlCQUFLQSxnQkFBTCxHQUF3QixJQUF4QjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBSUosR0E3ZEk7QUErZExrQixFQUFBQSxZQS9kSywwQkErZFM7QUFDVixRQUFHLENBQUNoRCxNQUFNLENBQUM2RyxPQUFQLENBQWVDLFNBQW5CLEVBQThCO0FBRTlCLFFBQUl4RSxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUl5RSxjQUFjLEdBQUcsSUFBckI7QUFFQSxTQUFLcEUsSUFBTCxDQUFVcUUsRUFBVixDQUFhLFlBQWIsRUFBMkIsVUFBVUMsS0FBVixFQUFpQjtBQUN4Q0YsTUFBQUEsY0FBYyxHQUFHRSxLQUFLLENBQUNDLFdBQU4sRUFBakI7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUlBLFNBQUt2RSxJQUFMLENBQVVxRSxFQUFWLENBQWEsVUFBYixFQUF5QixVQUFVQyxLQUFWLEVBQWlCO0FBQ3RDLFVBQUlFLFdBQVcsR0FBR0YsS0FBSyxDQUFDQyxXQUFOLEVBQWxCOztBQUNBLFVBQUdFLElBQUksQ0FBQ0MsR0FBTCxDQUFTTixjQUFjLENBQUMxRCxDQUFmLEdBQW1COEQsV0FBVyxDQUFDOUQsQ0FBeEMsSUFBNkMrRCxJQUFJLENBQUNDLEdBQUwsQ0FBU04sY0FBYyxDQUFDekQsQ0FBZixHQUFtQjZELFdBQVcsQ0FBQzdELENBQXhDLENBQWhELEVBQTJGO0FBQ3ZGLFlBQUl5RCxjQUFjLENBQUMxRCxDQUFmLEdBQW1COEQsV0FBVyxDQUFDOUQsQ0FBaEMsR0FBcUMsQ0FBQyxFQUF6QyxFQUE0QztBQUN4QztBQUNBZixVQUFBQSxJQUFJLENBQUNxRCxTQUFMLENBQWUzRixNQUFNLENBQUNDLFlBQXRCO0FBQ0gsU0FIRCxNQUlLLElBQUk4RyxjQUFjLENBQUMxRCxDQUFmLEdBQW1COEQsV0FBVyxDQUFDOUQsQ0FBaEMsR0FBcUMsRUFBeEMsRUFBMkM7QUFDNUM7QUFDQWYsVUFBQUEsSUFBSSxDQUFDb0QsUUFBTCxDQUFjMUYsTUFBTSxDQUFDQyxZQUFyQjtBQUNIO0FBQ0osT0FURCxNQVNLO0FBQ0QsWUFBSThHLGNBQWMsQ0FBQ3pELENBQWYsR0FBbUI2RCxXQUFXLENBQUM3RCxDQUFoQyxHQUFxQyxDQUFDLEVBQXpDLEVBQTRDO0FBQ3hDO0FBQ0FoQixVQUFBQSxJQUFJLENBQUM4QyxNQUFMLENBQVlwRixNQUFNLENBQUNDLFlBQW5CO0FBQ0gsU0FIRCxNQUlLLElBQUk4RyxjQUFjLENBQUN6RCxDQUFmLEdBQW1CNkQsV0FBVyxDQUFDN0QsQ0FBaEMsR0FBcUMsRUFBeEMsRUFBMkM7QUFDNUM7QUFDQWhCLFVBQUFBLElBQUksQ0FBQ21ELFFBQUwsQ0FBY3pGLE1BQU0sQ0FBQ0MsWUFBckI7QUFDSDtBQUNKO0FBRUosS0F0QkQsRUFzQkcsSUF0Qkg7QUF1QkgsR0FoZ0JJO0FBaWdCTDBHLEVBQUFBLFVBamdCSyx3QkFpZ0JPO0FBQ1IsUUFBSXJFLElBQUksR0FBRyxJQUFYO0FBQ0EsUUFBSWdGLFVBQVUsR0FBRyxLQUFLM0UsSUFBdEI7O0FBQ0EsUUFBSSxDQUFDMkUsVUFBTCxFQUFrQjtBQUFFL0csTUFBQUEsRUFBRSxDQUFDZ0gsT0FBSCxDQUFZLG1CQUFaO0FBQW1DO0FBQVM7O0FBQ2hFLFFBQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBU0MsWUFBVCxFQUF1QkMsY0FBdkIsRUFDdkI7QUFDSSxVQUFJRCxZQUFKLEVBQW1CO0FBQUVGLFFBQUFBLE9BQU8sQ0FBQ0ksR0FBUixDQUFhLGtCQUFrQkYsWUFBL0I7QUFBK0M7QUFBUzs7QUFDN0UsVUFBSSxFQUFHQyxjQUFjLFlBQVluSCxFQUFFLENBQUNNLE1BQWhDLENBQUosRUFBK0M7QUFBRTBHLFFBQUFBLE9BQU8sQ0FBQ0ksR0FBUixDQUFhLGNBQWI7QUFBK0I7QUFBUzs7QUFDekYsVUFBSUMsV0FBVyxHQUFHckgsRUFBRSxDQUFDdUQsV0FBSCxDQUFnQjRELGNBQWhCLENBQWxCO0FBR0FuSCxNQUFBQSxFQUFFLENBQUNtQyxJQUFILENBQVEsbUJBQVIsRUFBNEJrRixXQUE1QixFQUF5QzFELFlBQXpDLENBQXNEM0QsRUFBRSxDQUFDc0gsS0FBekQsRUFBZ0VwQixNQUFoRSxHQUF5RSxRQUFPbkUsSUFBSSxDQUFDWCxnQkFBWixHQUE2QixHQUF0RztBQUNBcEIsTUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLG1CQUFSLEVBQTRCa0YsV0FBNUIsRUFBeUMxRCxZQUF6QyxDQUFzRDNELEVBQUUsQ0FBQ3NILEtBQXpELEVBQWdFcEIsTUFBaEUsR0FBeUUsUUFBT25FLElBQUksQ0FBQ1QsZ0JBQVosR0FBNkIsR0FBdEc7O0FBQ0EsVUFBRzdCLE1BQU0sQ0FBQzhILElBQVAsSUFBZSxPQUFmLElBQTBCOUgsTUFBTSxDQUFDK0gsVUFBUCxJQUFxQi9ILE1BQU0sQ0FBQ2dJLGdCQUF6RCxFQUEwRTtBQUN0RXpILFFBQUFBLEVBQUUsQ0FBQ21DLElBQUgsQ0FBUSxnQkFBUixFQUF5QmtGLFdBQXpCLEVBQXNDSyxPQUF0QyxHQUFnRCxDQUFoRDtBQUNIOztBQUNELFVBQUdqSSxNQUFNLENBQUM4SCxJQUFQLElBQWUsT0FBbEIsRUFBMEI7QUFDdEJ2SCxRQUFBQSxFQUFFLENBQUNtQyxJQUFILENBQVEsaUNBQVIsRUFBMENrRixXQUExQyxFQUF1RDFELFlBQXZELENBQW9FM0QsRUFBRSxDQUFDc0gsS0FBdkUsRUFBOEVwQixNQUE5RSxHQUF1RixNQUF2RjtBQUNIOztBQUNEbEcsTUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLGdCQUFSLEVBQXlCa0YsV0FBekIsRUFBc0NaLEVBQXRDLENBQXlDLE9BQXpDLEVBQWlELFlBQVk7QUFDMUQsWUFBR2hILE1BQU0sQ0FBQzhILElBQVAsSUFBZSxPQUFsQixFQUEwQjtBQUN0QixjQUFHOUgsTUFBTSxDQUFDK0gsVUFBUCxHQUFvQi9ILE1BQU0sQ0FBQ2dJLGdCQUE5QixFQUErQztBQUUzQ0osWUFBQUEsV0FBVyxDQUFDTSxnQkFBWjtBQUNBTixZQUFBQSxXQUFXLENBQUNPLE9BQVo7QUFDQTdGLFlBQUFBLElBQUksQ0FBQzhGLFdBQUw7QUFDQXBJLFlBQUFBLE1BQU0sQ0FBQytILFVBQVA7QUFDQXpGLFlBQUFBLElBQUksQ0FBQ0csU0FBTDtBQUNIO0FBQ0osU0FURCxNQVNLO0FBRUQ0RiwwQkFBUUMsSUFBUjs7QUFDQXRDLFVBQUFBLEVBQUUsQ0FBQ3VDLEtBQUgsQ0FBU0MsWUFBVCxDQUFzQjtBQUNsQkMsWUFBQUEsSUFBSSxFQUFFO0FBRFksV0FBdEIsRUFFR0MsSUFGSCxDQUVRLFVBQUFuQyxHQUFHLEVBQUk7QUFFWFAsWUFBQUEsRUFBRSxDQUFDdUMsS0FBSCxDQUFTQyxZQUFULENBQXNCO0FBQ2xCQyxjQUFBQSxJQUFJLEVBQUUsa0JBRFk7QUFFbEJ0QyxjQUFBQSxJQUFJLEVBQUM7QUFDRHdDLGdCQUFBQSxPQUFPLEVBQUUzSSxNQUFNLENBQUNNLFdBRGY7QUFFRHlILGdCQUFBQSxVQUFVLEVBQUV4QixHQUFHLENBQUNGLE1BQUosQ0FBV3VDLEtBQVgsR0FBaUIsQ0FGNUI7QUFHREMsZ0JBQUFBLEtBQUssRUFBRTdJLE1BQU0sQ0FBQzhJLElBQVAsQ0FBWUQsS0FIbEI7QUFJREUsZ0JBQUFBLFFBQVEsRUFBRS9JLE1BQU0sQ0FBQ2dKLFNBQVAsQ0FBaUJELFFBQWpCLEdBQTBCL0ksTUFBTSxDQUFDZ0osU0FBUCxDQUFpQkQsUUFBM0MsR0FBb0QsT0FBSy9JLE1BQU0sQ0FBQzhJLElBQVAsQ0FBWUQsS0FBWixDQUFrQkksU0FBbEIsQ0FBNEJqSixNQUFNLENBQUM4SSxJQUFQLENBQVlELEtBQVosQ0FBa0JuRixNQUFsQixHQUF5QixDQUFyRCxDQUpsRTtBQUtEd0YsZ0JBQUFBLFFBQVEsRUFBRWxKLE1BQU0sQ0FBQ2dKLFNBQVAsQ0FBaUJHO0FBTDFCO0FBRmEsYUFBdEIsRUFTR1QsSUFUSCxDQVNRLFVBQUFuQyxHQUFHLEVBQUk7QUFFWCxpQ0FBTSxjQUFOLEVBQXFCLElBQXJCO0FBQ0FoQixjQUFBQSxVQUFVLENBQUMsWUFBWTtBQUNuQjhDLGdDQUFRZSxJQUFSOztBQUNBN0ksZ0JBQUFBLEVBQUUsQ0FBQzhJLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNILGVBSFMsRUFHUixJQUhRLENBQVY7QUFJSCxhQWhCRCxXQWdCUyxVQUFBaEYsR0FBRyxFQUFJO0FBQ1orRCw4QkFBUWUsSUFBUjs7QUFDQSxpQ0FBTSxNQUFOLEVBQWEsSUFBYjtBQUNBN0IsY0FBQUEsT0FBTyxDQUFDZ0MsS0FBUixDQUFjakYsR0FBZDtBQUNILGFBcEJEO0FBc0JILFdBMUJELFdBMEJTLFVBQUFBLEdBQUcsRUFBSTtBQUNaaUQsWUFBQUEsT0FBTyxDQUFDZ0MsS0FBUixDQUFjakYsR0FBZDtBQUNILFdBNUJEO0FBNkJIO0FBRUgsT0E1Q0QsRUE0Q0UsSUE1Q0Y7QUE2Q0EvRCxNQUFBQSxFQUFFLENBQUNtQyxJQUFILENBQVEsa0JBQVIsRUFBMkJrRixXQUEzQixFQUF3Q1osRUFBeEMsQ0FBMkMsT0FBM0MsRUFBbUQsWUFBWTtBQUMzRFksUUFBQUEsV0FBVyxDQUFDTSxnQkFBWjtBQUNBTixRQUFBQSxXQUFXLENBQUNPLE9BQVo7QUFDQTdGLFFBQUFBLElBQUksQ0FBQ2tILFlBQUw7QUFDQWxILFFBQUFBLElBQUksQ0FBQzhGLFdBQUw7QUFDSCxPQUxELEVBS0UsSUFMRjtBQU1BN0gsTUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLGdCQUFSLEVBQXlCa0YsV0FBekIsRUFBc0NaLEVBQXRDLENBQXlDLE9BQXpDLEVBQWlELFlBQVk7QUFDekQsWUFBR2hILE1BQU0sQ0FBQzhILElBQVAsSUFBZSxPQUFsQixFQUEwQjtBQUN0Qiw2QkFBTSxXQUFOLEVBQWtCLElBQWxCO0FBQ0E7QUFDSDs7QUFDRHhGLFFBQUFBLElBQUksQ0FBQ21ILGFBQUw7QUFDSCxPQU5ELEVBTUUsSUFORjtBQU9BbEosTUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLGlCQUFSLEVBQTBCa0YsV0FBMUIsRUFBdUNaLEVBQXZDLENBQTBDLE9BQTFDLEVBQWtELFlBQVk7QUFDMUQsWUFBSXpHLEVBQUUsQ0FBQ3NGLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQnZGLEVBQUUsQ0FBQ3NGLEdBQUgsQ0FBT0UsV0FBL0IsRUFBNEM7QUFDeEMsY0FBSTJELFNBQVMsR0FBSSxNQUFqQjs7QUFDQSxjQUFHMUosTUFBTSxDQUFDOEgsSUFBUCxJQUFlLE9BQWxCLEVBQTBCO0FBQ3RCNEIsWUFBQUEsU0FBUyxHQUFHQSxTQUFTLEdBQUcsR0FBWixHQUFnQjFKLE1BQU0sQ0FBQytILFVBQXZCLEdBQWtDLEdBQWxDLEdBQXNDLFFBQXRDLEdBQWdEekYsSUFBSSxDQUFDWCxnQkFBckQsR0FBdUUsUUFBbkY7QUFDSCxXQUZELE1BR0k7QUFDQStILFlBQUFBLFNBQVMsR0FBR0EsU0FBUyxHQUFDLFlBQXRCO0FBQ0g7O0FBQ0QxRCxVQUFBQSxFQUFFLENBQUMyRCxlQUFILENBQW1CO0FBQ2ZDLFlBQUFBLEtBQUssRUFBRUYsU0FEUTtBQUVmO0FBQ0FHLFlBQUFBLEtBQUssRUFBRTtBQUhRLFdBQW5CO0FBTUg7QUFDSixPQWhCRCxFQWdCRSxJQWhCRjtBQWlCQXZDLE1BQUFBLFVBQVUsQ0FBQ3RELFFBQVgsQ0FBcUI0RCxXQUFyQjtBQUNILEtBM0ZEOztBQTRGQXJDLElBQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CaEYsTUFBQUEsRUFBRSxDQUFDdUosTUFBSCxDQUFVQyxPQUFWLENBQWtCLGVBQWxCLEVBQW1DdkMsZ0JBQW5DO0FBQ0gsS0FGUyxFQUVSLENBRlEsQ0FBVjtBQUlBLFFBQUd4SCxNQUFNLENBQUM4SCxJQUFQLElBQWUsT0FBbEIsRUFBMkIsT0FwR25CLENBc0dSOztBQUNBLFFBQUl2SCxFQUFFLENBQUNzRixHQUFILENBQU9DLFFBQVAsS0FBb0J2RixFQUFFLENBQUNzRixHQUFILENBQU9FLFdBQS9CLEVBQTRDO0FBQ3hDLFVBQUl6RCxJQUFJLENBQUNMLFNBQUwsSUFBa0IsSUFBdEIsRUFBNEI7QUFDeEJvRyx3QkFBUUMsSUFBUjs7QUFDQSwyQkFBTSxVQUFOLEVBQWlCLElBQWpCO0FBQ0F0QyxRQUFBQSxFQUFFLENBQUN1QyxLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDbEJDLFVBQUFBLElBQUksRUFBRSx1QkFEWTtBQUVsQnRDLFVBQUFBLElBQUksRUFBRTtBQUNGNEIsWUFBQUEsVUFBVSxFQUFFL0gsTUFBTSxDQUFDK0gsVUFEakI7QUFFRmMsWUFBQUEsS0FBSyxFQUFFN0ksTUFBTSxDQUFDOEksSUFBUCxDQUFZRCxLQUZqQjtBQUdGbUIsWUFBQUEsT0FBTyxFQUFFMUgsSUFBSSxDQUFDWCxnQkFIWjtBQUlGc0ksWUFBQUEsT0FBTyxFQUFFM0gsSUFBSSxDQUFDVCxnQkFKWjtBQUtGcUgsWUFBQUEsUUFBUSxFQUFFbEosTUFBTSxDQUFDZ0osU0FBUCxDQUFpQkcsU0FMekI7QUFNRkosWUFBQUEsUUFBUSxFQUFFL0ksTUFBTSxDQUFDZ0osU0FBUCxDQUFpQkQsUUFBakIsR0FBMEIvSSxNQUFNLENBQUNnSixTQUFQLENBQWlCRCxRQUEzQyxHQUFvRCxPQUFLL0ksTUFBTSxDQUFDOEksSUFBUCxDQUFZRCxLQUFaLENBQWtCSSxTQUFsQixDQUE0QmpKLE1BQU0sQ0FBQzhJLElBQVAsQ0FBWUQsS0FBWixDQUFrQm5GLE1BQWxCLEdBQXlCLENBQXJEO0FBTmpFO0FBRlksU0FBdEIsRUFVR2dGLElBVkgsQ0FVUSxVQUFBbkMsR0FBRyxFQUFJO0FBQ1g4QiwwQkFBUWUsSUFBUjtBQUNILFNBWkQsV0FZUyxVQUFBOUUsR0FBRyxFQUFJO0FBQ1orRCwwQkFBUWUsSUFBUjs7QUFDQTdCLFVBQUFBLE9BQU8sQ0FBQ2dDLEtBQVIsQ0FBY2pGLEdBQWQ7QUFDSCxTQWZEO0FBZ0JBaEMsUUFBQUEsSUFBSSxDQUFDTCxTQUFMLEdBQWlCO0FBQ2I4RixVQUFBQSxVQUFVLEVBQUUvSCxNQUFNLENBQUMrSCxVQUROO0FBRWJjLFVBQUFBLEtBQUssRUFBRTdJLE1BQU0sQ0FBQzhJLElBQVAsQ0FBWUQsS0FGTjtBQUdibUIsVUFBQUEsT0FBTyxFQUFFMUgsSUFBSSxDQUFDWCxnQkFIRDtBQUlic0ksVUFBQUEsT0FBTyxFQUFFM0gsSUFBSSxDQUFDVDtBQUpELFNBQWpCO0FBTUFTLFFBQUFBLElBQUksQ0FBQzRILGVBQUwsQ0FBcUI1SCxJQUFJLENBQUNMLFNBQUwsQ0FBZStILE9BQXBDLEVBQTRDMUgsSUFBSSxDQUFDTCxTQUFMLENBQWVnSSxPQUEzRDtBQUNILE9BMUJELE1BMEJPO0FBQ1A7QUFDSSxZQUFJM0gsSUFBSSxDQUFDWCxnQkFBTCxHQUF3QlcsSUFBSSxDQUFDTCxTQUFMLENBQWUrSCxPQUEzQyxFQUFvRDtBQUNoRDFILFVBQUFBLElBQUksQ0FBQ0wsU0FBTCxHQUFpQjtBQUNiOEYsWUFBQUEsVUFBVSxFQUFFL0gsTUFBTSxDQUFDK0gsVUFETjtBQUViYyxZQUFBQSxLQUFLLEVBQUU3SSxNQUFNLENBQUM4SSxJQUFQLENBQVlELEtBRk47QUFHYm1CLFlBQUFBLE9BQU8sRUFBRTFILElBQUksQ0FBQ1gsZ0JBSEQ7QUFJYnNJLFlBQUFBLE9BQU8sRUFBRTNILElBQUksQ0FBQ1Q7QUFKRCxXQUFqQjtBQU1BUyxVQUFBQSxJQUFJLENBQUM0SCxlQUFMLENBQXFCNUgsSUFBSSxDQUFDTCxTQUFMLENBQWUrSCxPQUFwQyxFQUE0QzFILElBQUksQ0FBQ0wsU0FBTCxDQUFlZ0ksT0FBM0Q7O0FBQ0E1QiwwQkFBUUMsSUFBUjs7QUFDQSw2QkFBTSxVQUFOLEVBQWlCLElBQWpCO0FBQ0F0QyxVQUFBQSxFQUFFLENBQUN1QyxLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDbEJDLFlBQUFBLElBQUksRUFBRSwwQkFEWTtBQUVsQnRDLFlBQUFBLElBQUksRUFBRTtBQUNGNEIsY0FBQUEsVUFBVSxFQUFFL0gsTUFBTSxDQUFDK0gsVUFEakI7QUFFRmMsY0FBQUEsS0FBSyxFQUFFN0ksTUFBTSxDQUFDOEksSUFBUCxDQUFZRCxLQUZqQjtBQUdGbUIsY0FBQUEsT0FBTyxFQUFFMUgsSUFBSSxDQUFDWCxnQkFIWjtBQUlGc0ksY0FBQUEsT0FBTyxFQUFFM0gsSUFBSSxDQUFDVCxnQkFKWjtBQUtGcUgsY0FBQUEsUUFBUSxFQUFFbEosTUFBTSxDQUFDZ0osU0FBUCxDQUFpQkcsU0FMekI7QUFNRkosY0FBQUEsUUFBUSxFQUFFL0ksTUFBTSxDQUFDZ0osU0FBUCxDQUFpQkQ7QUFOekI7QUFGWSxXQUF0QixFQVVHTCxJQVZILENBVVEsVUFBQW5DLEdBQUcsRUFBSTtBQUNYOEIsNEJBQVFlLElBQVI7QUFDSCxXQVpELFdBWVMsVUFBQTlFLEdBQUcsRUFBSTtBQUNaK0QsNEJBQVFlLElBQVI7O0FBQ0E3QixZQUFBQSxPQUFPLENBQUNnQyxLQUFSLENBQWNqRixHQUFkO0FBQ0gsV0FmRDtBQWdCSDtBQUNKOztBQUVELFVBQUk2RixXQUFXLEdBQUduSyxNQUFNLENBQUMrSCxVQUF6QjtBQUNBL0IsTUFBQUEsRUFBRSxDQUFDdUMsS0FBSCxDQUFTQyxZQUFULENBQXNCO0FBQ2xCQyxRQUFBQSxJQUFJLEVBQUUsV0FEWTtBQUVsQnRDLFFBQUFBLElBQUksRUFBRTtBQUNGMEMsVUFBQUEsS0FBSyxFQUFFN0ksTUFBTSxDQUFDOEksSUFBUCxDQUFZRDtBQURqQjtBQUZZLE9BQXRCLEVBS0dILElBTEgsQ0FLUSxVQUFBbkMsR0FBRyxFQUFJO0FBQ1gsWUFBR0EsR0FBRyxJQUFJQSxHQUFHLENBQUNGLE1BQUosQ0FBV0YsSUFBWCxDQUFnQnpDLE1BQWhCLEdBQXVCLENBQTlCLElBQW1DNkMsR0FBRyxDQUFDRixNQUFKLENBQVdGLElBQVgsQ0FBZ0IsQ0FBaEIsRUFBbUJpRSxjQUFuQixHQUFvQ0QsV0FBMUUsRUFBc0Y7QUFDbEZuSyxVQUFBQSxNQUFNLENBQUM4SSxJQUFQLENBQVlzQixjQUFaLEdBQTZCRCxXQUE3QjtBQUNBLGNBQUloRSxJQUFJLEdBQUcsRUFBWDtBQUNBQSxVQUFBQSxJQUFJLENBQUMwQyxLQUFMLEdBQWE3SSxNQUFNLENBQUM4SSxJQUFQLENBQVlELEtBQXpCO0FBQ0ExQyxVQUFBQSxJQUFJLENBQUNpRSxjQUFMLEdBQXNCRCxXQUF0QjtBQUNBLGNBQUduSyxNQUFNLENBQUNnSixTQUFQLENBQWlCRCxRQUFwQixFQUE4QjVDLElBQUksQ0FBQzRDLFFBQUwsR0FBZ0IvSSxNQUFNLENBQUNnSixTQUFQLENBQWlCRCxRQUFqQztBQUM5QixjQUFHL0ksTUFBTSxDQUFDZ0osU0FBUCxDQUFpQkcsU0FBcEIsRUFBK0JoRCxJQUFJLENBQUMrQyxRQUFMLEdBQWdCbEosTUFBTSxDQUFDZ0osU0FBUCxDQUFpQkcsU0FBakM7QUFDL0JuRCxVQUFBQSxFQUFFLENBQUN1QyxLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDbEJDLFlBQUFBLElBQUksRUFBRSxZQURZO0FBRWxCdEMsWUFBQUEsSUFBSSxFQUFFQTtBQUZZLFdBQXRCLEVBR0d1QyxJQUhILENBR1EsVUFBQW5DLEdBQUcsRUFBSSxDQUVkLENBTEQsV0FLUyxVQUFBakMsR0FBRyxFQUFJO0FBQ1ppRCxZQUFBQSxPQUFPLENBQUNnQyxLQUFSLENBQWNqRixHQUFkO0FBQ0gsV0FQRDtBQVNIO0FBQ0osT0F2QkQsV0F1QlMsVUFBQUEsR0FBRyxFQUFJO0FBQ1ppRCxRQUFBQSxPQUFPLENBQUNnQyxLQUFSLENBQWNqRixHQUFkO0FBQ0gsT0F6QkQ7QUE0Qkg7QUFDSixHQWhzQkk7QUFpc0JMa0YsRUFBQUEsWUFqc0JLLDBCQWlzQlM7QUFDVixRQUFJbEgsSUFBSSxHQUFHLElBQVg7QUFDQTBELElBQUFBLEVBQUUsQ0FBQ00sVUFBSCxDQUFjO0FBQ1ZKLE1BQUFBLEdBQUcsRUFBRSxXQURLO0FBRVZFLE1BQUFBLE9BRlUsbUJBRURHLEdBRkMsRUFFSTtBQUNWdkcsUUFBQUEsTUFBTSxDQUFDQyxZQUFQLEdBQXNCc0csR0FBRyxDQUFDSixJQUExQjtBQUNBN0QsUUFBQUEsSUFBSSxDQUFDc0MsWUFBTCxDQUFrQjVFLE1BQU0sQ0FBQ0MsWUFBekI7QUFDQXFDLFFBQUFBLElBQUksQ0FBQ21CLFlBQUwsQ0FBa0J6RCxNQUFNLENBQUNDLFlBQXpCO0FBR0gsT0FSUztBQVNWb0ssTUFBQUEsSUFUVSxrQkFTSixDQUVMO0FBWFMsS0FBZDtBQWdCSCxHQW50Qkk7QUFvdEJMakMsRUFBQUEsV0FwdEJLLHlCQW90QlE7QUFDVCxRQUFJOUYsSUFBSSxHQUFHLElBQVgsQ0FEUyxDQUVUOztBQUNBLFFBQUcsS0FBS1AsWUFBTCxJQUFxQixJQUF4QixFQUE2QjtBQUN6QixVQUFJdUksU0FBUyxHQUFHLElBQUkvSixFQUFFLENBQUNnSyxJQUFQLENBQVksY0FBWixDQUFoQjtBQUNBRCxNQUFBQSxTQUFTLENBQUNFLGNBQVYsQ0FBeUIsR0FBekIsRUFBOEIsR0FBOUI7QUFDQUYsTUFBQUEsU0FBUyxDQUFDeEgsS0FBVixHQUFtQixHQUFuQjtBQUNBd0gsTUFBQUEsU0FBUyxDQUFDMUgsTUFBVixHQUFtQixHQUFuQjtBQUNBMEgsTUFBQUEsU0FBUyxDQUFDRyxlQUFWLEdBQTRCLFFBQTVCO0FBQ0EsVUFBSTFJLFlBQVksR0FBR3VJLFNBQVMsQ0FBQ0ksWUFBVixDQUF1Qm5LLEVBQUUsQ0FBQ3NILEtBQTFCLENBQW5CO0FBQ0E5RixNQUFBQSxZQUFZLENBQUNZLElBQWIsQ0FBa0JvQixXQUFsQixDQUE4QixDQUE5QixFQUFtQ3hELEVBQUUsQ0FBQ3NDLE9BQUgsQ0FBV0QsTUFBWCxHQUFrQixDQUFuQixHQUF5QnJDLEVBQUUsQ0FBQ3NDLE9BQUgsQ0FBV0QsTUFBWCxHQUFrQixJQUE3RTs7QUFDQSxVQUFHNUMsTUFBTSxDQUFDMkssT0FBVixFQUFrQjtBQUNkNUksUUFBQUEsWUFBWSxDQUFDMEUsTUFBYixHQUFzQixPQUFNekcsTUFBTSxDQUFDK0gsVUFBYixHQUEwQixPQUExQixHQUFrQy9ILE1BQU0sQ0FBQzJLLE9BQS9EO0FBQ0gsT0FGRCxNQUdJO0FBQ0E1SSxRQUFBQSxZQUFZLENBQUMwRSxNQUFiLEdBQXNCLE9BQU16RyxNQUFNLENBQUMrSCxVQUFiLEdBQTBCLElBQWhEO0FBQ0g7O0FBQ0RoRyxNQUFBQSxZQUFZLENBQUM2SSxRQUFiLEdBQXdCLEVBQXhCO0FBQ0E3SSxNQUFBQSxZQUFZLENBQUM4SSxVQUFiLEdBQTBCLElBQTFCLENBZnlCLENBZ0J6Qjs7QUFDQTlJLE1BQUFBLFlBQVksQ0FBQytJLFVBQWIsR0FBMEIsRUFBMUI7QUFDQS9JLE1BQUFBLFlBQVksQ0FBQzBJLGVBQWIsR0FBK0IsUUFBL0I7QUFDQSxXQUFLMUksWUFBTCxHQUFvQnVJLFNBQVMsQ0FBQ3BHLFlBQVYsQ0FBdUIzRCxFQUFFLENBQUNzSCxLQUExQixDQUFwQjtBQUNBLFdBQUtsRixJQUFMLENBQVVxQixRQUFWLENBQW1Cc0csU0FBbkI7QUFDSCxLQXJCRCxNQXFCSztBQUdELFVBQUd0SyxNQUFNLENBQUMySyxPQUFWLEVBQWtCO0FBQ2QsYUFBSzVJLFlBQUwsQ0FBa0IwRSxNQUFsQixHQUEyQixPQUFNekcsTUFBTSxDQUFDK0gsVUFBYixHQUEwQixPQUExQixHQUFrQy9ILE1BQU0sQ0FBQzJLLE9BQXBFO0FBQ0gsT0FGRCxNQUdJO0FBQ0EsYUFBSzVJLFlBQUwsQ0FBa0IwRSxNQUFsQixHQUEyQixPQUFNekcsTUFBTSxDQUFDK0gsVUFBYixHQUEwQixJQUFyRDtBQUNIO0FBQ0o7O0FBQ0QsUUFBRy9ILE1BQU0sQ0FBQzhILElBQVAsSUFBZSxPQUFsQixFQUEwQjtBQUN0QixXQUFLL0YsWUFBTCxDQUFrQjBFLE1BQWxCLEdBQTJCLE1BQTNCO0FBQ0gsS0FwQ1EsQ0FzQ1Q7OztBQUNBLFFBQUcsS0FBSy9FLFdBQUwsSUFBb0IsSUFBdkIsRUFBNEI7QUFDeEIsVUFBSWlCLElBQUksR0FBRyxJQUFJcEMsRUFBRSxDQUFDZ0ssSUFBUCxDQUFZLGFBQVosQ0FBWDtBQUNBNUgsTUFBQUEsSUFBSSxDQUFDNkgsY0FBTCxDQUFvQixDQUFwQixFQUF1QixDQUF2QjtBQUNBLFVBQUk5SSxXQUFXLEdBQUdpQixJQUFJLENBQUMrSCxZQUFMLENBQWtCbkssRUFBRSxDQUFDc0gsS0FBckIsQ0FBbEI7QUFDQW5HLE1BQUFBLFdBQVcsQ0FBQ2lCLElBQVosQ0FBaUJvQixXQUFqQixDQUE2QixFQUFFeEQsRUFBRSxDQUFDc0MsT0FBSCxDQUFXQyxLQUFYLEdBQWlCLENBQW5CLElBQXlCdkMsRUFBRSxDQUFDc0MsT0FBSCxDQUFXQyxLQUFYLEdBQWlCLElBQXZFLEVBQWdGdkMsRUFBRSxDQUFDc0MsT0FBSCxDQUFXQyxLQUFYLEdBQWlCLENBQWxCLEdBQXVCLEVBQXRHO0FBQ0FwQixNQUFBQSxXQUFXLENBQUMrRSxNQUFaLEdBQXFCLE9BQXJCO0FBQ0EsV0FBSy9FLFdBQUwsR0FBbUJpQixJQUFJLENBQUN1QixZQUFMLENBQWtCM0QsRUFBRSxDQUFDc0gsS0FBckIsQ0FBbkI7QUFDQSxXQUFLbEYsSUFBTCxDQUFVcUIsUUFBVixDQUFtQnJCLElBQW5CO0FBQ0gsS0FSRCxNQVFLO0FBQ0QsV0FBS2hCLGdCQUFMLEdBQXlCLENBQXpCO0FBQ0EsV0FBS0QsV0FBTCxDQUFpQitFLE1BQWpCLEdBQTBCLFFBQVEsS0FBSzlFLGdCQUF2QztBQUNILEtBbERRLENBcURUOzs7QUFDQSxRQUFHLEtBQUtDLFdBQUwsSUFBb0IsSUFBdkIsRUFBNEI7QUFDeEIsVUFBSW1KLFFBQVEsR0FBRyxJQUFJeEssRUFBRSxDQUFDZ0ssSUFBUCxDQUFZLGFBQVosQ0FBZjtBQUNBUSxNQUFBQSxRQUFRLENBQUNQLGNBQVQsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0I7QUFDQSxVQUFJNUksV0FBVyxHQUFHbUosUUFBUSxDQUFDTCxZQUFULENBQXNCbkssRUFBRSxDQUFDc0gsS0FBekIsQ0FBbEI7QUFDQWpHLE1BQUFBLFdBQVcsQ0FBQ2UsSUFBWixDQUFpQm9CLFdBQWpCLENBQTZCLENBQTdCLEVBQWtDeEQsRUFBRSxDQUFDc0MsT0FBSCxDQUFXQyxLQUFYLEdBQWlCLENBQWxCLEdBQXVCLEVBQXhEO0FBQ0FsQixNQUFBQSxXQUFXLENBQUM2RSxNQUFaLEdBQXFCLE9BQXJCO0FBQ0EsV0FBSzdFLFdBQUwsR0FBbUJtSixRQUFRLENBQUM3RyxZQUFULENBQXNCM0QsRUFBRSxDQUFDc0gsS0FBekIsQ0FBbkI7QUFDQSxXQUFLbEYsSUFBTCxDQUFVcUIsUUFBVixDQUFtQitHLFFBQW5CO0FBRUEsV0FBS2pKLGdCQUFMLEdBQXdCa0osV0FBVyxDQUFDLFlBQVk7QUFDNUMsYUFBS25KLGdCQUFMO0FBQ0EsYUFBS0QsV0FBTCxDQUFpQjZFLE1BQWpCLEdBQTBCLFFBQVEsS0FBSzVFLGdCQUF2QztBQUNILE9BSG1DLENBR2xDb0osSUFIa0MsQ0FHN0IsSUFINkIsQ0FBRCxFQUd0QixJQUhzQixDQUFuQztBQUlILEtBYkQsTUFhSztBQUNELFdBQUtwSixnQkFBTCxHQUF3QixDQUF4QjtBQUNBLFdBQUtELFdBQUwsQ0FBaUI2RSxNQUFqQixHQUEwQixRQUFRLEtBQUs1RSxnQkFBdkM7O0FBQ0EsVUFBRyxLQUFLQyxnQkFBTCxJQUF5QixJQUE1QixFQUFpQztBQUM3QixhQUFLQSxnQkFBTCxHQUF3QmtKLFdBQVcsQ0FBQyxZQUFZO0FBQzVDLGVBQUtuSixnQkFBTDtBQUNBLGVBQUtELFdBQUwsQ0FBaUI2RSxNQUFqQixHQUEwQixRQUFRLEtBQUs1RSxnQkFBdkM7QUFDSCxTQUhtQyxDQUdsQ29KLElBSGtDLENBRzdCLElBSDZCLENBQUQsRUFHdEIsSUFIc0IsQ0FBbkM7QUFJSDtBQUNKLEtBNUVRLENBOEVUOzs7QUFFQSxTQUFLakosZUFBTCxDQUFxQmtKLE1BQXJCLENBQTRCLENBQTVCLEVBQThCLEtBQUtsSixlQUFMLENBQXFCMEIsTUFBbkQ7QUFDQXNDLElBQUFBLEVBQUUsQ0FBQ00sVUFBSCxDQUFjO0FBQ1ZKLE1BQUFBLEdBQUcsRUFBQyxXQURNO0FBRVZFLE1BQUFBLE9BRlUsbUJBRUZHLEdBRkUsRUFFRTtBQUNSakUsUUFBQUEsSUFBSSxDQUFDTixlQUFMLENBQXFCd0UsSUFBckIsQ0FBMEJELEdBQUcsQ0FBQ0osSUFBOUI7QUFDSDtBQUpTLEtBQWQ7QUFRSCxHQTd5Qkk7QUE4eUJMbEQsRUFBQUEsZUE5eUJLLDZCQTh5Qlk7QUFDYixRQUFJWCxJQUFJLEdBQUcsSUFBWDtBQUNBL0IsSUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLE1BQVIsRUFBZSxLQUFLQyxJQUFwQixFQUEwQnFFLEVBQTFCLENBQTZCLE9BQTdCLEVBQXFDLEtBQUttRSxJQUExQyxFQUFnRCxJQUFoRCxFQUZhLENBR2I7O0FBQ0EsUUFBR25MLE1BQU0sQ0FBQzZHLE9BQVAsQ0FBZXVFLFNBQWxCLEVBQTZCO0FBQ3pCN0ssTUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLGFBQVIsRUFBc0IsS0FBS0MsSUFBM0IsRUFBaUNxRSxFQUFqQyxDQUFvQyxPQUFwQyxFQUE0QyxZQUFZO0FBQ3BEMUUsUUFBQUEsSUFBSSxDQUFDOEMsTUFBTCxDQUFZcEYsTUFBTSxDQUFDQyxZQUFuQjtBQUNILE9BRkQsRUFFRSxJQUZGO0FBR0FNLE1BQUFBLEVBQUUsQ0FBQ21DLElBQUgsQ0FBUSxnQkFBUixFQUF5QixLQUFLQyxJQUE5QixFQUFvQ3FFLEVBQXBDLENBQXVDLE9BQXZDLEVBQStDLFlBQVk7QUFDdkQxRSxRQUFBQSxJQUFJLENBQUNxRCxTQUFMLENBQWUzRixNQUFNLENBQUNDLFlBQXRCO0FBQ0gsT0FGRCxFQUVFLElBRkY7QUFHQU0sTUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLGVBQVIsRUFBd0IsS0FBS0MsSUFBN0IsRUFBbUNxRSxFQUFuQyxDQUFzQyxPQUF0QyxFQUE4QyxZQUFZO0FBQ3REMUUsUUFBQUEsSUFBSSxDQUFDbUQsUUFBTCxDQUFjekYsTUFBTSxDQUFDQyxZQUFyQjtBQUNILE9BRkQsRUFFRSxJQUZGO0FBR0FNLE1BQUFBLEVBQUUsQ0FBQ21DLElBQUgsQ0FBUSxlQUFSLEVBQXdCLEtBQUtDLElBQTdCLEVBQW1DcUUsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBOEMsWUFBWTtBQUN0RDFFLFFBQUFBLElBQUksQ0FBQ29ELFFBQUwsQ0FBYzFGLE1BQU0sQ0FBQ0MsWUFBckI7QUFDSCxPQUZELEVBRUUsSUFGRjtBQUdILEtBYkQsTUFhSztBQUNETSxNQUFBQSxFQUFFLENBQUNtQyxJQUFILENBQVEsYUFBUixFQUFzQixLQUFLQyxJQUEzQixFQUFpQ3NGLE9BQWpDLEdBQTJDLENBQTNDO0FBQ0ExSCxNQUFBQSxFQUFFLENBQUNtQyxJQUFILENBQVEsZ0JBQVIsRUFBeUIsS0FBS0MsSUFBOUIsRUFBb0NzRixPQUFwQyxHQUE4QyxDQUE5QztBQUNBMUgsTUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLGVBQVIsRUFBd0IsS0FBS0MsSUFBN0IsRUFBbUNzRixPQUFuQyxHQUE2QyxDQUE3QztBQUNBMUgsTUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLGVBQVIsRUFBd0IsS0FBS0MsSUFBN0IsRUFBbUNzRixPQUFuQyxHQUE2QyxDQUE3QztBQUNIOztBQUNEMUgsSUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLG1CQUFSLEVBQTRCLEtBQUtDLElBQWpDLEVBQXVDcUUsRUFBdkMsQ0FBMEMsT0FBMUMsRUFBa0QsWUFBWTtBQUMxRCxVQUFHMUUsSUFBSSxDQUFDTixlQUFMLENBQXFCMEIsTUFBckIsR0FBOEIsQ0FBOUIsSUFBbUNwQixJQUFJLENBQUNYLGdCQUFMLElBQXlCLENBQS9ELEVBQWlFO0FBQzdEVyxRQUFBQSxJQUFJLENBQUNOLGVBQUwsQ0FBcUJxSixHQUFyQjs7QUFDQSxZQUFJOUssRUFBRSxDQUFDc0YsR0FBSCxDQUFPQyxRQUFQLEtBQW9CdkYsRUFBRSxDQUFDc0YsR0FBSCxDQUFPRSxXQUEvQixFQUE0QztBQUN4Q0MsVUFBQUEsRUFBRSxDQUFDQyxVQUFILENBQWM7QUFDVkMsWUFBQUEsR0FBRyxFQUFFLFlBREs7QUFFVkMsWUFBQUEsSUFBSSxFQUFFN0QsSUFBSSxDQUFDTixlQUFMLENBQXFCTSxJQUFJLENBQUNOLGVBQUwsQ0FBcUIwQixNQUFyQixHQUE0QixDQUFqRCxDQUZJO0FBR1YwQyxZQUFBQSxPQUhVLG1CQUdGQyxNQUhFLEVBR007QUFDWkwsY0FBQUEsRUFBRSxDQUFDTSxVQUFILENBQWM7QUFDVkosZ0JBQUFBLEdBQUcsRUFBRSxZQURLO0FBRVZFLGdCQUFBQSxPQUZVLG1CQUVGRyxHQUZFLEVBRUc7QUFDVGpFLGtCQUFBQSxJQUFJLENBQUNYLGdCQUFMO0FBQ0FXLGtCQUFBQSxJQUFJLENBQUNaLFdBQUwsQ0FBaUIrRSxNQUFqQixHQUEwQixRQUFRbkUsSUFBSSxDQUFDWCxnQkFBdkM7QUFDQTNCLGtCQUFBQSxNQUFNLENBQUNDLFlBQVAsR0FBc0JzRyxHQUFHLENBQUNKLElBQTFCO0FBQ0E3RCxrQkFBQUEsSUFBSSxDQUFDc0MsWUFBTCxDQUFrQjVFLE1BQU0sQ0FBQ0MsWUFBekI7QUFDQXFDLGtCQUFBQSxJQUFJLENBQUNtQixZQUFMLENBQWtCekQsTUFBTSxDQUFDQyxZQUF6QjtBQUNIO0FBUlMsZUFBZDtBQVVIO0FBZFMsV0FBZDtBQWdCSDtBQUNKO0FBRUosS0F2QkQsRUF1QkUsSUF2QkY7QUF5QkFNLElBQUFBLEVBQUUsQ0FBQ21DLElBQUgsQ0FBUSxlQUFSLEVBQXdCLEtBQUtDLElBQTdCLEVBQW1DcUUsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBOEMsWUFBWTtBQUN0REosTUFBQUEsYUFBYSxDQUFDdEUsSUFBSSxDQUFDUixnQkFBTixDQUFiO0FBQ0FRLE1BQUFBLElBQUksQ0FBQ1IsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDQSxVQUFJd0YsVUFBVSxHQUFHaEYsSUFBSSxDQUFDSyxJQUF0Qjs7QUFDQSxVQUFJLENBQUMyRSxVQUFMLEVBQWtCO0FBQUUvRyxRQUFBQSxFQUFFLENBQUNnSCxPQUFILENBQVksbUJBQVo7QUFBbUM7QUFBUzs7QUFDaEUsVUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFTQyxZQUFULEVBQXVCQyxjQUF2QixFQUN2QjtBQUNJLFlBQUlELFlBQUosRUFBbUI7QUFBRUYsVUFBQUEsT0FBTyxDQUFDSSxHQUFSLENBQWEsa0JBQWtCRixZQUEvQjtBQUErQztBQUFTOztBQUM3RSxZQUFJLEVBQUdDLGNBQWMsWUFBWW5ILEVBQUUsQ0FBQ00sTUFBaEMsQ0FBSixFQUErQztBQUFFMEcsVUFBQUEsT0FBTyxDQUFDSSxHQUFSLENBQWEsY0FBYjtBQUErQjtBQUFTOztBQUN6RixZQUFJQyxXQUFXLEdBQUdySCxFQUFFLENBQUN1RCxXQUFILENBQWdCNEQsY0FBaEIsQ0FBbEI7QUFFQW5ILFFBQUFBLEVBQUUsQ0FBQ21DLElBQUgsQ0FBUSxrQkFBUixFQUEyQmtGLFdBQTNCLEVBQXdDWixFQUF4QyxDQUEyQyxPQUEzQyxFQUFtRCxZQUFZO0FBQzNELGNBQUcxRSxJQUFJLENBQUNSLGdCQUFMLElBQXlCLElBQTVCLEVBQWlDO0FBQzdCUSxZQUFBQSxJQUFJLENBQUNSLGdCQUFMLEdBQXdCa0osV0FBVyxDQUFDLFlBQVk7QUFDNUMxSSxjQUFBQSxJQUFJLENBQUNULGdCQUFMO0FBQ0FTLGNBQUFBLElBQUksQ0FBQ1YsV0FBTCxDQUFpQjZFLE1BQWpCLEdBQTBCLFFBQVFuRSxJQUFJLENBQUNULGdCQUF2QztBQUNILGFBSG1DLENBR2xDb0osSUFIa0MsQ0FHN0IzSSxJQUg2QixDQUFELEVBR3RCLElBSHNCLENBQW5DO0FBSUg7O0FBQ0RzRixVQUFBQSxXQUFXLENBQUNNLGdCQUFaO0FBQ0FOLFVBQUFBLFdBQVcsQ0FBQ08sT0FBWjtBQUVILFNBVkQsRUFVRSxJQVZGO0FBV0E1SCxRQUFBQSxFQUFFLENBQUNtQyxJQUFILENBQVEsZ0JBQVIsRUFBeUJrRixXQUF6QixFQUFzQ1osRUFBdEMsQ0FBeUMsT0FBekMsRUFBaUQsWUFBWTtBQUN6RFksVUFBQUEsV0FBVyxDQUFDTSxnQkFBWjtBQUNBTixVQUFBQSxXQUFXLENBQUNPLE9BQVo7QUFDQTdGLFVBQUFBLElBQUksQ0FBQ2tILFlBQUw7QUFDQWxILFVBQUFBLElBQUksQ0FBQzhGLFdBQUw7QUFDSCxTQUxELEVBS0UsSUFMRjtBQVFBN0gsUUFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLGNBQVIsRUFBdUJrRixXQUF2QixFQUFvQ1osRUFBcEMsQ0FBdUMsT0FBdkMsRUFBK0MsWUFBWTtBQUN2RCxjQUFHaEgsTUFBTSxDQUFDOEgsSUFBUCxJQUFlLE9BQWxCLEVBQTBCO0FBQ3RCLCtCQUFNLFdBQU4sRUFBa0IsSUFBbEI7QUFDQTtBQUNIOztBQUNEeEYsVUFBQUEsSUFBSSxDQUFDbUgsYUFBTDtBQUNILFNBTkQsRUFNRSxJQU5GO0FBUUFsSixRQUFBQSxFQUFFLENBQUNtQyxJQUFILENBQVEsZUFBUixFQUF3QmtGLFdBQXhCLEVBQXFDWixFQUFyQyxDQUF3QyxPQUF4QyxFQUFnRCxZQUFZO0FBQ3hELGNBQUl6RyxFQUFFLENBQUNzRixHQUFILENBQU9DLFFBQVAsS0FBb0J2RixFQUFFLENBQUNzRixHQUFILENBQU9FLFdBQS9CLEVBQTRDO0FBQ3hDLGdCQUFJMkQsU0FBUyxHQUFJLE1BQWpCOztBQUNBLGdCQUFHMUosTUFBTSxDQUFDOEgsSUFBUCxJQUFlLE9BQWxCLEVBQTBCO0FBQ3RCNEIsY0FBQUEsU0FBUyxHQUFHQSxTQUFTLEdBQUcsR0FBWixHQUFnQjFKLE1BQU0sQ0FBQytILFVBQXZCLEdBQWtDLFVBQTlDO0FBQ0gsYUFGRCxNQUdJO0FBQ0EyQixjQUFBQSxTQUFTLEdBQUdBLFNBQVMsR0FBRyxZQUF4QjtBQUNILGFBUHVDLENBUXhDOzs7QUFDQTFELFlBQUFBLEVBQUUsQ0FBQzJELGVBQUgsQ0FBbUI7QUFDZkMsY0FBQUEsS0FBSyxFQUFFRixTQURRO0FBRWY7QUFDQUcsY0FBQUEsS0FBSyxFQUFFO0FBSFEsYUFBbkI7QUFNSDtBQUNKLFNBakJELEVBaUJFLElBakJGO0FBb0JBdkMsUUFBQUEsVUFBVSxDQUFDdEQsUUFBWCxDQUFxQjRELFdBQXJCO0FBQ0gsT0F0REQ7O0FBdURBckgsTUFBQUEsRUFBRSxDQUFDdUosTUFBSCxDQUFVQyxPQUFWLENBQWtCLFVBQWxCLEVBQThCdkMsZ0JBQTlCO0FBQ0gsS0E3REQsRUE2REUsSUE3REY7QUE4REgsR0E1NUJJO0FBNjVCTC9FLEVBQUFBLFNBNzVCSyx1QkE2NUJNO0FBQ1AsUUFBSUgsSUFBSSxHQUFHLElBQVg7O0FBQ0EsUUFBSS9CLEVBQUUsQ0FBQ3NGLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQnZGLEVBQUUsQ0FBQ3NGLEdBQUgsQ0FBT0UsV0FBL0IsRUFBNEM7QUFDeENzQyxzQkFBUUMsSUFBUjs7QUFDQSxVQUFHdEksTUFBTSxDQUFDOEgsSUFBUCxJQUFlLE9BQWxCLEVBQTBCO0FBQ3RCeEYsUUFBQUEsSUFBSSxDQUFDTCxTQUFMLEdBQWlCLElBQWpCO0FBQ0FLLFFBQUFBLElBQUksQ0FBQzRILGVBQUwsQ0FBcUIsR0FBckIsRUFBeUIsR0FBekI7QUFFQWxFLFFBQUFBLEVBQUUsQ0FBQ00sVUFBSCxDQUFjO0FBQ1ZKLFVBQUFBLEdBQUcsRUFBQyxZQURNO0FBRVZFLFVBQUFBLE9BRlUsbUJBRUZHLEdBRkUsRUFFRTtBQUNSdkcsWUFBQUEsTUFBTSxDQUFDQyxZQUFQLEdBQXNCc0csR0FBRyxDQUFDSixJQUExQjtBQUNBN0QsWUFBQUEsSUFBSSxDQUFDc0MsWUFBTCxDQUFrQjVFLE1BQU0sQ0FBQ0MsWUFBekI7QUFDQXFDLFlBQUFBLElBQUksQ0FBQ21CLFlBQUwsQ0FBa0J6RCxNQUFNLENBQUNDLFlBQXpCLEVBSFEsQ0FJUjs7QUFDQXFDLFlBQUFBLElBQUksQ0FBQzhGLFdBQUw7QUFDQXBDLFlBQUFBLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjO0FBQ1ZDLGNBQUFBLEdBQUcsRUFBRSxXQURLO0FBRVZDLGNBQUFBLElBQUksRUFBQ25HLE1BQU0sQ0FBQ0MsWUFGRjtBQUdWbUcsY0FBQUEsT0FIVSxtQkFHRkMsTUFIRSxFQUdLO0FBQ1hMLGdCQUFBQSxFQUFFLENBQUNNLFVBQUgsQ0FBYztBQUNWSixrQkFBQUEsR0FBRyxFQUFDLFdBRE07QUFFVkUsa0JBQUFBLE9BRlUsbUJBRUZHLEdBRkUsRUFFRTtBQUNSakUsb0JBQUFBLElBQUksQ0FBQ04sZUFBTCxDQUFxQndFLElBQXJCLENBQTBCRCxHQUFHLENBQUNKLElBQTlCO0FBQ0g7QUFKUyxpQkFBZDtBQU1IO0FBVlMsYUFBZDs7QUFZQWtDLDRCQUFRZSxJQUFSO0FBQ0g7QUFyQlMsU0FBZDtBQXdCQXBELFFBQUFBLEVBQUUsQ0FBQ00sVUFBSCxDQUFjO0FBQ1ZKLFVBQUFBLEdBQUcsRUFBQyxZQURNO0FBRVZFLFVBQUFBLE9BRlUsbUJBRUZHLEdBRkUsRUFFRTtBQUNSdkcsWUFBQUEsTUFBTSxDQUFDTSxXQUFQLEdBQXFCaUcsR0FBRyxDQUFDSixJQUF6QjtBQUNIO0FBSlMsU0FBZDtBQU9BO0FBQ0gsT0F0Q3VDLENBd0N4Qzs7O0FBQ0EsVUFBR25HLE1BQU0sQ0FBQ3NMLGFBQVAsSUFBd0IsZUFBM0IsRUFBMkM7QUFDdkN0RixRQUFBQSxFQUFFLENBQUN1QyxLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDbEJDLFVBQUFBLElBQUksRUFBRSxvQkFEWTtBQUVsQnRDLFVBQUFBLElBQUksRUFBRTtBQUNGMEMsWUFBQUEsS0FBSyxFQUFDN0ksTUFBTSxDQUFDOEksSUFBUCxDQUFZRCxLQURoQjtBQUVGZCxZQUFBQSxVQUFVLEVBQUUvSCxNQUFNLENBQUMrSDtBQUZqQjtBQUZZLFNBQXRCLEVBTUdXLElBTkgsQ0FNUSxVQUFBbkMsR0FBRyxFQUFJO0FBQ1gsY0FBR0EsR0FBRyxJQUFJQSxHQUFHLENBQUNGLE1BQUosQ0FBV0YsSUFBWCxDQUFnQnpDLE1BQWhCLEdBQXVCLENBQWpDLEVBQW1DO0FBQy9CMUQsWUFBQUEsTUFBTSxDQUFDQyxZQUFQLEdBQXNCc0csR0FBRyxDQUFDRixNQUFKLENBQVdGLElBQVgsQ0FBZ0IsQ0FBaEIsRUFBbUJ3QyxPQUF6QztBQUNBckcsWUFBQUEsSUFBSSxDQUFDc0MsWUFBTCxDQUFrQjVFLE1BQU0sQ0FBQ0MsWUFBekI7QUFDQXFDLFlBQUFBLElBQUksQ0FBQ21CLFlBQUwsQ0FBa0J6RCxNQUFNLENBQUNDLFlBQXpCO0FBQ0FELFlBQUFBLE1BQU0sQ0FBQzJLLE9BQVAsR0FBaUJwRSxHQUFHLENBQUNGLE1BQUosQ0FBV0YsSUFBWCxDQUFnQixDQUFoQixFQUFtQjRDLFFBQXBDLENBSitCLENBSy9COztBQUNBekcsWUFBQUEsSUFBSSxDQUFDOEYsV0FBTDtBQUNBcEMsWUFBQUEsRUFBRSxDQUFDQyxVQUFILENBQWM7QUFDVkMsY0FBQUEsR0FBRyxFQUFFLFdBREs7QUFFVkMsY0FBQUEsSUFBSSxFQUFDbkcsTUFBTSxDQUFDQyxZQUZGO0FBR1ZtRyxjQUFBQSxPQUhVLG1CQUdGQyxNQUhFLEVBR0s7QUFDYkwsZ0JBQUFBLEVBQUUsQ0FBQ00sVUFBSCxDQUFjO0FBQ1ZKLGtCQUFBQSxHQUFHLEVBQUMsV0FETTtBQUVWRSxrQkFBQUEsT0FGVSxtQkFFRkcsR0FGRSxFQUVFO0FBQ1JqRSxvQkFBQUEsSUFBSSxDQUFDTixlQUFMLENBQXFCd0UsSUFBckIsQ0FBMEJELEdBQUcsQ0FBQ0osSUFBOUI7QUFDSDtBQUpTLGlCQUFkO0FBTUQ7QUFWUyxhQUFkO0FBWUg7O0FBQ0RrQywwQkFBUWUsSUFBUjtBQUNILFNBNUJELFdBNEJTLFVBQUE5RSxHQUFHLEVBQUk7QUFDWmlELFVBQUFBLE9BQU8sQ0FBQ2dDLEtBQVIsQ0FBY2pGLEdBQWQ7QUFDSCxTQTlCRDtBQWdDQTBCLFFBQUFBLEVBQUUsQ0FBQ3VDLEtBQUgsQ0FBU0MsWUFBVCxDQUFzQjtBQUNsQkMsVUFBQUEsSUFBSSxFQUFFLHlCQURZO0FBRWxCdEMsVUFBQUEsSUFBSSxFQUFFO0FBQ0Y0QixZQUFBQSxVQUFVLEVBQUUvSCxNQUFNLENBQUMrSCxVQURqQjtBQUVGYyxZQUFBQSxLQUFLLEVBQUM3SSxNQUFNLENBQUM4SSxJQUFQLENBQVlEO0FBRmhCO0FBRlksU0FBdEIsRUFNR0gsSUFOSCxDQU1RLFVBQUFuQyxHQUFHLEVBQUk7QUFDWCxjQUFHQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0YsTUFBSixDQUFXRixJQUFYLENBQWdCekMsTUFBaEIsR0FBdUIsQ0FBakMsRUFBbUM7QUFDL0JwQixZQUFBQSxJQUFJLENBQUNMLFNBQUwsR0FBaUJzRSxHQUFHLENBQUNGLE1BQUosQ0FBV0YsSUFBWCxDQUFnQixDQUFoQixDQUFqQjtBQUNBN0QsWUFBQUEsSUFBSSxDQUFDNEgsZUFBTCxDQUFxQjVILElBQUksQ0FBQ0wsU0FBTCxDQUFlK0gsT0FBcEMsRUFBNEMxSCxJQUFJLENBQUNMLFNBQUwsQ0FBZWdJLE9BQTNEO0FBQ0gsV0FIRCxNQUdLO0FBQ0QzSCxZQUFBQSxJQUFJLENBQUNMLFNBQUwsR0FBaUIsSUFBakI7QUFDQUssWUFBQUEsSUFBSSxDQUFDNEgsZUFBTCxDQUFxQixHQUFyQixFQUF5QixHQUF6QjtBQUNBLGdCQUFHbEssTUFBTSxDQUFDK0gsVUFBUCxJQUFxQixDQUF4QixFQUEyQixtQkFBTSxnQkFBTixFQUF1QixJQUF2QjtBQUM5QjtBQUNKLFNBZkQsV0FlUyxVQUFBekQsR0FBRyxFQUFJO0FBQ1ppRCxVQUFBQSxPQUFPLENBQUNnQyxLQUFSLENBQWNqRixHQUFkO0FBQ0gsU0FqQkQ7QUFvQkgsT0FyREQsQ0FzREE7QUF0REEsV0F1REksQ0FFSDtBQUdKO0FBQ0osR0FyZ0NJO0FBc2dDTDZHLEVBQUFBLElBdGdDSyxrQkFzZ0NDO0FBQ0YsU0FBSy9DLFdBQUw7QUFDQXhCLElBQUFBLGFBQWEsQ0FBQyxLQUFLOUUsZ0JBQU4sQ0FBYjtBQUNBLFNBQUtBLGdCQUFMLEdBQXdCLElBQXhCOztBQUNBLFFBQUc5QixNQUFNLENBQUM4SCxJQUFWLEVBQWU7QUFDWHZILE1BQUFBLEVBQUUsQ0FBQzhJLFFBQUgsQ0FBWUMsU0FBWixDQUFzQnRKLE1BQU0sQ0FBQzhILElBQTdCO0FBQ0gsS0FGRCxNQUVLO0FBQ0R2SCxNQUFBQSxFQUFFLENBQUM4SSxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSDs7QUFDRHRKLElBQUFBLE1BQU0sQ0FBQzhILElBQVAsR0FBYyxNQUFkO0FBQ0gsR0FoaENJO0FBaWhDTG9DLEVBQUFBLGVBamhDSywyQkFpaENXcUIsSUFqaENYLEVBaWhDZ0JDLElBamhDaEIsRUFpaENxQjtBQUN0QixRQUFHeEwsTUFBTSxDQUFDOEgsSUFBUCxJQUFlLE9BQWxCLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBQ0QsUUFBSXhGLElBQUksR0FBRyxJQUFYLENBSnNCLENBS3RCOztBQUNBLFFBQUdBLElBQUksQ0FBQ0osWUFBTCxJQUFxQixJQUF4QixFQUE2QjtBQUN6QixVQUFJQSxZQUFZLEdBQUcsSUFBSTNCLEVBQUUsQ0FBQ2dLLElBQVAsQ0FBWSxjQUFaLENBQW5CO0FBQ0FySSxNQUFBQSxZQUFZLENBQUNzSSxjQUFiLENBQTRCLENBQTVCLEVBQStCLENBQS9CO0FBQ0EsVUFBSTlJLFdBQVcsR0FBR1EsWUFBWSxDQUFDd0ksWUFBYixDQUEwQm5LLEVBQUUsQ0FBQ3NILEtBQTdCLENBQWxCO0FBQ0FuRyxNQUFBQSxXQUFXLENBQUNpQixJQUFaLENBQWlCb0IsV0FBakIsQ0FBNkIsRUFBRXhELEVBQUUsQ0FBQ3NDLE9BQUgsQ0FBV0MsS0FBWCxHQUFpQixDQUFuQixJQUF5QnZDLEVBQUUsQ0FBQ3NDLE9BQUgsQ0FBV0MsS0FBWCxHQUFpQixJQUF2RSxFQUFnRnZDLEVBQUUsQ0FBQ3NDLE9BQUgsQ0FBV0MsS0FBWCxHQUFpQixDQUFsQixHQUF1QixHQUF0RztBQUNBcEIsTUFBQUEsV0FBVyxDQUFDK0UsTUFBWixHQUFxQixhQUFZOEUsSUFBWixHQUFpQixRQUFqQixHQUEwQkMsSUFBL0M7QUFDQWxKLE1BQUFBLElBQUksQ0FBQ0osWUFBTCxHQUFvQkEsWUFBWSxDQUFDZ0MsWUFBYixDQUEwQjNELEVBQUUsQ0FBQ3NILEtBQTdCLENBQXBCO0FBQ0F2RixNQUFBQSxJQUFJLENBQUNLLElBQUwsQ0FBVXFCLFFBQVYsQ0FBbUI5QixZQUFuQjtBQUNILEtBUkQsTUFRSztBQUNESSxNQUFBQSxJQUFJLENBQUNKLFlBQUwsQ0FBa0J1RSxNQUFsQixHQUEyQixhQUFZOEUsSUFBWixHQUFpQixRQUFqQixHQUEwQkMsSUFBckQ7QUFDSDtBQUdKLEdBcGlDSTtBQXFpQ0wvQixFQUFBQSxhQXJpQ0ssMkJBcWlDVTtBQUNYLFFBQUluSCxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUlnRixVQUFVLEdBQUcvRyxFQUFFLENBQUNtQyxJQUFILENBQVEsUUFBUixDQUFqQjtBQUNBLFFBQUkrSSxRQUFRLEdBQUcsQ0FBZjtBQUFBLFFBQWlCQyxZQUFZLEdBQUcsRUFBaEM7O0FBQ0EsUUFBSSxDQUFDcEUsVUFBTCxFQUFrQjtBQUFFL0csTUFBQUEsRUFBRSxDQUFDZ0gsT0FBSCxDQUFZLG1CQUFaO0FBQW1DO0FBQVM7O0FBQ2hFLFFBQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBU0MsWUFBVCxFQUF1QkMsY0FBdkIsRUFDdkI7QUFDSSxVQUFJRCxZQUFKLEVBQW1CO0FBQUVGLFFBQUFBLE9BQU8sQ0FBQ0ksR0FBUixDQUFhLGtCQUFrQkYsWUFBL0I7QUFBK0M7QUFBUzs7QUFDN0UsVUFBSSxFQUFHQyxjQUFjLFlBQVluSCxFQUFFLENBQUNNLE1BQWhDLENBQUosRUFBK0M7QUFBRTBHLFFBQUFBLE9BQU8sQ0FBQ0ksR0FBUixDQUFhLGNBQWI7QUFBK0I7QUFBUzs7QUFDekYsVUFBSUMsV0FBVyxHQUFHckgsRUFBRSxDQUFDdUQsV0FBSCxDQUFnQjRELGNBQWhCLENBQWxCO0FBQ0EsVUFBSWlCLE9BQU8sR0FBR3BJLEVBQUUsQ0FBQ21DLElBQUgsQ0FBUSx1QkFBUixFQUFnQ2tGLFdBQWhDLENBQWQ7QUFFQXJILE1BQUFBLEVBQUUsQ0FBQ21DLElBQUgsQ0FBUSxPQUFSLEVBQWdCa0YsV0FBaEIsRUFBNkJaLEVBQTdCLENBQWdDLE9BQWhDLEVBQXdDLFlBQVk7QUFDaERZLFFBQUFBLFdBQVcsQ0FBQ00sZ0JBQVo7QUFDQU4sUUFBQUEsV0FBVyxDQUFDTyxPQUFaO0FBQ0gsT0FIRCxFQUdFLElBSEY7O0FBSUEsVUFBRzdGLElBQUksQ0FBQ0YsUUFBTCxJQUFpQixJQUFwQixFQUF5QjtBQUNyQjdCLFFBQUFBLEVBQUUsQ0FBQ3VKLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixVQUFsQixFQUE4QixVQUFVekYsR0FBVixFQUFjcUgsUUFBZCxFQUF3QjtBQUNsRHJKLFVBQUFBLElBQUksQ0FBQ0YsUUFBTCxHQUFnQjdCLEVBQUUsQ0FBQ3VELFdBQUgsQ0FBZTZILFFBQWYsQ0FBaEI7QUFDQXJKLFVBQUFBLElBQUksQ0FBQ3NKLG1CQUFMLENBQXlCakQsT0FBekIsRUFBaUM4QyxRQUFqQyxFQUEwQ0MsWUFBMUM7QUFDSCxTQUhEO0FBSUgsT0FMRCxNQUtLO0FBQ0RwSixRQUFBQSxJQUFJLENBQUNzSixtQkFBTCxDQUF5QmpELE9BQXpCLEVBQWlDOEMsUUFBakMsRUFBMENDLFlBQTFDO0FBQ0g7O0FBQ0RuTCxNQUFBQSxFQUFFLENBQUNtQyxJQUFILENBQVEsVUFBUixFQUFtQmtGLFdBQW5CLEVBQWdDWixFQUFoQyxDQUFtQyxlQUFuQyxFQUFvRCxZQUFVO0FBQzFEeUUsUUFBQUEsUUFBUTtBQUNSbkosUUFBQUEsSUFBSSxDQUFDc0osbUJBQUwsQ0FBeUJqRCxPQUF6QixFQUFpQzhDLFFBQWpDLEVBQTBDQyxZQUExQztBQUNILE9BSEQsRUFHRyxJQUhIO0FBSUFuTCxNQUFBQSxFQUFFLENBQUNtQyxJQUFILENBQVEsU0FBUixFQUFrQmtGLFdBQWxCLEVBQStCMUQsWUFBL0IsQ0FBNEMzRCxFQUFFLENBQUNzSCxLQUEvQyxFQUFzRHBCLE1BQXRELEdBQStELEtBQS9EO0FBQ0FhLE1BQUFBLFVBQVUsQ0FBQ3RELFFBQVgsQ0FBcUI0RCxXQUFyQjtBQUNILEtBekJEOztBQTBCQXJILElBQUFBLEVBQUUsQ0FBQ3VKLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixZQUFsQixFQUFnQ3ZDLGdCQUFoQztBQUNILEdBcmtDSTtBQXNrQ0xvRSxFQUFBQSxtQkF0a0NLLCtCQXNrQ2VqRCxPQXRrQ2YsRUFza0N1QmtELElBdGtDdkIsRUFza0M0QkMsUUF0a0M1QixFQXNrQ3FDO0FBQ3RDLFFBQUl4SixJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUl5SixjQUFjLEdBQUdwRCxPQUFPLENBQUNxRCxhQUE3Qjs7QUFDQSxRQUFJekwsRUFBRSxDQUFDc0YsR0FBSCxDQUFPQyxRQUFQLEtBQW9CdkYsRUFBRSxDQUFDc0YsR0FBSCxDQUFPRSxXQUEvQixFQUEyQztBQUN2Q3NDLHNCQUFRQyxJQUFSOztBQUNBdEMsTUFBQUEsRUFBRSxDQUFDdUMsS0FBSCxDQUFTQyxZQUFULENBQXNCO0FBQ2xCQyxRQUFBQSxJQUFJLEVBQUUseUJBRFk7QUFFbEJ0QyxRQUFBQSxJQUFJLEVBQUM7QUFDRDRCLFVBQUFBLFVBQVUsRUFBQy9ILE1BQU0sQ0FBQytILFVBRGpCO0FBRUQ4RCxVQUFBQSxJQUFJLEVBQUpBLElBRkM7QUFHREMsVUFBQUEsUUFBUSxFQUFSQTtBQUhDO0FBRmEsT0FBdEIsRUFPR3BELElBUEgsQ0FPUSxVQUFBbkMsR0FBRyxFQUFJO0FBQ1g4Qix3QkFBUWUsSUFBUjs7QUFDQSxZQUFJaEgsUUFBUSxHQUFHLElBQWY7O0FBQ0EsWUFBR21FLEdBQUcsSUFBSUEsR0FBRyxDQUFDRixNQUFKLENBQVdGLElBQVgsQ0FBZ0J6QyxNQUFoQixHQUF1QixDQUFqQyxFQUFtQztBQUFBO0FBRXZCeUMsWUFBQUEsSUFBSSxHQUFJSSxHQUFHLENBQUNGLE1BQUosQ0FBV0YsSUFBWCxDQUFnQmhELENBQUMsR0FBQyxDQUFsQixDQUZlO0FBRzNCLGdCQUFJUixJQUFJLEdBQUdwQyxFQUFFLENBQUN1RCxXQUFILENBQWV4QixJQUFJLENBQUNGLFFBQXBCLENBQVg7QUFDQSxnQkFBR0EsUUFBUSxJQUFJLElBQWYsRUFBcUJBLFFBQVEsR0FBR08sSUFBWDtBQUNyQkEsWUFBQUEsSUFBSSxDQUFDc0osY0FBTCxDQUFvQixRQUFwQixFQUE4Qi9ILFlBQTlCLENBQTJDM0QsRUFBRSxDQUFDc0gsS0FBOUMsRUFBcURwQixNQUFyRCxHQUE4RHRELENBQUMsR0FBQzRJLGNBQWhFO0FBQ0FwSixZQUFBQSxJQUFJLENBQUNzSixjQUFMLENBQW9CLFFBQXBCLEVBQThCL0gsWUFBOUIsQ0FBMkMzRCxFQUFFLENBQUNzSCxLQUE5QyxFQUFxRHBCLE1BQXJELEdBQThELDZCQUFnQk4sSUFBSSxDQUFDK0YsVUFBckIsQ0FBOUQ7QUFDQXZKLFlBQUFBLElBQUksQ0FBQ3NKLGNBQUwsQ0FBb0IsU0FBcEIsRUFBK0IvSCxZQUEvQixDQUE0QzNELEVBQUUsQ0FBQ3NILEtBQS9DLEVBQXNEcEIsTUFBdEQsR0FBK0ROLElBQUksQ0FBQzZELE9BQXBFOztBQUNBLGdCQUFHN0QsSUFBSSxDQUFDK0MsUUFBUixFQUFpQjtBQUNiM0ksY0FBQUEsRUFBRSxDQUFDNEQsWUFBSCxDQUFnQkMsVUFBaEIsQ0FBMkIrQixJQUFJLENBQUMrQyxRQUFMLEdBQWMsYUFBekMsRUFBeUQsVUFBVTVFLEdBQVYsRUFBZUMsT0FBZixFQUF3QjtBQUM3RSxvQkFBSUMsTUFBTSxHQUFJLElBQUlqRSxFQUFFLENBQUNrRSxXQUFQLENBQW1CRixPQUFuQixDQUFkO0FBQ0FoRSxnQkFBQUEsRUFBRSxDQUFDbUMsSUFBSCxDQUFRLFlBQVIsRUFBcUJDLElBQUksQ0FBQ3NKLGNBQUwsQ0FBb0IsWUFBcEIsQ0FBckIsRUFBd0QvSCxZQUF4RCxDQUFxRTNELEVBQUUsQ0FBQ2lCLE1BQXhFLEVBQWdGbUQsV0FBaEYsR0FBOEZILE1BQTlGO0FBQ0gsZUFIRDtBQUlIOztBQUNELGdCQUFHMkIsSUFBSSxDQUFDNEMsUUFBUixFQUFpQjtBQUNicEcsY0FBQUEsSUFBSSxDQUFDc0osY0FBTCxDQUFvQixRQUFwQixFQUE4Qi9ILFlBQTlCLENBQTJDM0QsRUFBRSxDQUFDc0gsS0FBOUMsRUFBcURwQixNQUFyRCxHQUE4RCxNQUFJTixJQUFJLENBQUM0QyxRQUFULEdBQWtCLEdBQWhGO0FBQ0g7O0FBQ0RKLFlBQUFBLE9BQU8sQ0FBQzNFLFFBQVIsQ0FBaUJyQixJQUFqQjtBQWpCMkI7O0FBQy9CLGVBQUksSUFBSVEsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxJQUFHb0QsR0FBRyxDQUFDRixNQUFKLENBQVdGLElBQVgsQ0FBZ0J6QyxNQUFuQyxFQUEyQ1AsQ0FBQyxFQUE1QyxFQUErQztBQUFBLGdCQUN2Q2dELElBRHVDOztBQUFBO0FBaUI5Qzs7QUFDRHdDLFVBQUFBLE9BQU8sQ0FBQy9GLE1BQVIsR0FBaUIrRixPQUFPLENBQUNxRCxhQUFSLEdBQXdCNUosUUFBUSxDQUFDUSxNQUFsRDtBQUNILFNBcEJELE1Bb0JLO0FBQ0QsNkJBQU0sU0FBTixFQUFnQixJQUFoQjtBQUNIO0FBR0osT0FuQ0QsV0FtQ1MsVUFBQTBCLEdBQUcsRUFBSTtBQUNaaUQsUUFBQUEsT0FBTyxDQUFDZ0MsS0FBUixDQUFjakYsR0FBZDs7QUFDQStELHdCQUFRZSxJQUFSO0FBQ0gsT0F0Q0Q7QUF1Q0g7QUFFSjtBQXBuQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQge2Zvcm1hdGVSYW5rVGltZSwgTG9hZGluZywgVG9hc3R9IGZyb20gXCIuL2NvbW1vblwiO1xyXG53aW5kb3cuY3VycmVudExldmVsID0gW107XHJcblxyXG53aW5kb3cuZWxlU2l6ZSA9IDM1O1xyXG53aW5kb3cubGF5b3V0ID0gbmV3IEFycmF5KCk7XHJcbndpbmRvdy5ibG9ja051bSA9IDEyO1xyXG53aW5kb3cudXBsb2FkTGV2ZWwgPSBudWxsO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBibG9jazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidibG9jaydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTond2FsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidib3gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWxsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JhbGwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlVXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVVwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZVJpZ2h0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVSaWdodCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVEb3duOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVEb3duJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZUxlZnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZUxlZnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnYW1lQm46Y2MuU3ByaXRlLFxyXG4gICAgICAgIGJveE51bTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwQ291bnRlcjpudWxsLFxyXG4gICAgICAgIHN0ZXBDb3VudGVyVmFsdWU6IDAsXHJcbiAgICAgICAgdGltZUNvdW50ZXI6bnVsbCxcclxuICAgICAgICB0aW1lQ291bnRlclZhbHVlOjAsXHJcbiAgICAgICAgdGltZUNvdW50ZXJUaW1lcjpudWxsLFxyXG4gICAgICAgIGxldmVsQ291bnRlcjogbnVsbCxcclxuICAgICAgICBtb3ZlSGlzdG9yeUxpc3Q6W10sXHJcbiAgICAgICAgbGFzdFNjb3JlOiBudWxsLFxyXG4gICAgICAgIGxhc3RTdGVwTm9kZTogbnVsbCxcclxuICAgICAgICBsYXN0VGltZW5vZGU6IG51bGwsXHJcbiAgICAgICAgcmFua0l0ZW06Y2MuUHJlZmFiXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmluaXRXaW5FbGUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlckJnKCk7XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyW5b2T5YmN5YWz5Y2hXHJcbiAgICAgICAgdGhpcy5pbml0TGV2ZWwoKTtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zJyx0aGlzLm5vZGUpLmhlaWdodCA9ICAoY2Mud2luU2l6ZS5oZWlnaHQgLSBjYy53aW5TaXplLndpZHRoKS8yO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLmFkZFRvdWNoTW92ZSgpO1xyXG4gICAgICAgIHRoaXMucGVuZGFudEFkZEV2ZW50KCk7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgaW5pdFdpbkVsZSgpe1xyXG4gICAgICAgIGxldCByZWFsU2l6ID0gY2Mud2luU2l6ZS53aWR0aC93aW5kb3cuYmxvY2tOdW07XHJcbiAgICAgICAgd2luZG93LmVsZVNpemUgPSByZWFsU2l6O1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCB3aW5kb3cuYmxvY2tOdW07IG4rKyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldW25dID0ge3g6MCx5OjAsc2lnbjowLGNvdmVyOm51bGx9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdFBvc2l0aW9uKGxheW91dCl7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt9O1xyXG4gICAgICAgIHRoaXMuYm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGxheW91dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCBsYXlvdXRbMF0ubGVuZ3RoOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgLy9sYXlvdXRbaV1bbl0uc2lnbiAtLSDkurrniankvY3nva5cclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFtpXVtuXS5zaWduID09IDQgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNSB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA2IHx8IGxheW91dFtpXVtuXS5zaWduID09IDcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v566x5a2Q5pWw6YePXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveE51bSArKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyQmcoKXtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLShjYy53aW5TaXplLndpZHRoLzIpO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSAod2luZG93LmVsZVNpemUqd2luZG93LmJsb2NrTnVtKS8yO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCB3aW5kb3cuYmxvY2tOdW07IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IG4qd2luZG93LmVsZVNpemUgKyBzdGFydFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IC1pKndpbmRvdy5lbGVTaXplICsgc3RhcnRZO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbjowLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgLy8g5Li66K6+572u5L2N572uXHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJCbigpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZUJuID09IG51bGwpIHRoaXMuZ2FtZUJuID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9nYW1lQm4nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHdpbmRvdy5iZ1VybEJhc2UrICdfNDAweDI0MC5qcGcnLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUsIGNjLnJlY3QoMCwwLDQwMCwyNDApKTtcclxuICAgICAgICAgICAgdGhhdC5nYW1lQm4uc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJMYXlvdXQobGF5b3V0KXtcclxuICAgICAgICB0aGlzLnJlbmRlckJnKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gd2luZG93LmxheW91dFtpXVtuXS54O1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSB3aW5kb3cubGF5b3V0W2ldW25dLnk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gobGF5b3V0W2ldW25dLnNpZ24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1dhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdXYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdXYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCb3guc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0JveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0JhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZVVwID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlVXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlVXAuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1JvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVSaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVJpZ2h0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlRG93biA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlRG93bi5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlTGVmdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlTGVmdC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVVcChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuXHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnqbpcclxuICAgICAgICBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDApe1xyXG4gICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li65aKZ5L2TXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDEpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li6566x5a2QXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAvL+euseWtkOS4iuS4gOagvOS4uuepulxyXG4gICAgICAgICAgICBpZihsYXlvdXRbeS0yXVt4XS5zaWduID09IDApe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5LTFdW3hdLmNvdmVyKSBsYXlvdXRbeS0xXVt4XS5jb3ZlciA9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDkuIrkuIDmoLznkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0yXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5LTFdW3hdLmNvdmVyKSBsYXlvdXRbeS0xXVt4XS5jb3ZlciA9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5jb3ZlciA9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v56e75Yqo5ZCO5Zue5pi+55CD5L2TXHJcbiAgICAgICAgaWYobGF5b3V0W3ldW3hdLnNpZ24gPT0gMCAmJiBsYXlvdXRbeV1beF0uY292ZXIpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDM7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtb3ZldGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW92ZXRpbWVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG1vdmVEb3duKGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgICAgIC8v5LiL5LiA5qC85Li656m6XHJcbiAgICAgICAgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qC85Li65aKZ5L2TXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDEpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDY7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4i+S4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDkuIvkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3krMl1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeSsxXVt4XS5jb3ZlcikgbGF5b3V0W3krMV1beF0uY292ZXIgPSA2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDkuIvkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsyXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsyXVt4XS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5KzFdW3hdLmNvdmVyKSBsYXlvdXRbeSsxXVt4XS5jb3ZlciA9IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2Rvd24nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLmNvdmVyID0gNjtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1vdmV0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb3ZldGltZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgbW92ZUxlZnQobGF5b3V0KXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnqbpcclxuICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5zaWduID09IDApe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5bem5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5XVt4LTJdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0yXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3gtMV0uY292ZXIpIGxheW91dFt5XVt4LTFdLmNvdmVyID0gNztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5bem5LiA5qC85Li655CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMl0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMl0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5jb3ZlcikgbGF5b3V0W3ldW3gtMV0uY292ZXIgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5bem5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0xXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5jb3ZlciA9IDc7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3ZlciAmJiBsYXlvdXRbeV1beF0uY292ZXIgIT0gMil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtb3ZldGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW92ZXRpbWVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG1vdmVSaWdodChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+WPs+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5Y+z5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOWPs+S4gOagvOS4uueQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3ZlciAmJiBsYXlvdXRbeV1beF0uY292ZXIgIT0gMil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtb3ZldGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW92ZXRpbWVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHJlc2V0UG9zaXRpb24oZGlyZWN0aW9uKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogd2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RlcENvdW50ZXJWYWx1ZSArKztcclxuICAgICAgICAvLyB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgbGV0IGNvdmVyQm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHdpbmRvdy5jdXJyZW50TGV2ZWwubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbjx3aW5kb3cuY3VycmVudExldmVsWzBdLmxlbmd0aCA7IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuY3VycmVudExldmVsW2ldW25dLmNvdmVyICYmIHdpbmRvdy5jdXJyZW50TGV2ZWxbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJCb3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib3hOdW0gPT0gY292ZXJCb3hOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5oyR5oiY5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lQ291bnRlclRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYWRkVG91Y2hNb3ZlKCl7XHJcbiAgICAgICAgaWYoIXdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGZpZ3VyZUxvY2F0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGZpZ3VyZUxvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZW5kTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi54IC0gZW5kTG9jYXRpb24ueCkgPiBNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi55IC0gZW5kTG9jYXRpb24ueSkpe1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlj7Pmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW3pua7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUxlZnQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIrmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVVcCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4i+a7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZURvd24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jlc3VsdCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy91c2VUaW1lJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuatpeaVsO+8mlwiKyB0aGF0LnN0ZXBDb3VudGVyVmFsdWUrJ+atpSc7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy91c2VTdGVwJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIueUqOaXtu+8mlwiKyB0aGF0LnRpbWVDb3VudGVyVmFsdWUrJ+enkic7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tICE9ICdidWlsZCcgJiYgd2luZG93LmxldmVsSW5kZXggPj0gd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0L0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfkuIrkvKDlhbPljaEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gIT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxJbmRleCA8IHdpbmRvdy5jbGFzc2ljc0xldmVsTnVtKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRMZXZlbCgpXHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZ2V0Q2xhc3NpY3NMZXZlbE51bSdcclxuICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZENsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHdpbmRvdy51cGxvYWRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHJlcy5yZXN1bHQudG90YWwrMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lP3dpbmRvdy5sb2dpbkluZm8ubmlja05hbWU6J+a4uOWuoicrd2luZG93LnVzZXIuYXBwSWQuc3Vic3RyaW5nKHdpbmRvdy51c2VyLmFwcElkLmxlbmd0aC01KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDmiJDlip/vvIzljbPlsIbot7Plm57kuLvnlYzpnaInLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWksei0pScsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3JlcGxheScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvcmFuaycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+a1i+ivleWFs+WNoeayoeacieaOkuihjOamnCcsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoYXQuc2hvd0xldmVsUmFuaygpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9zaGFyZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpdFN0cmluZyA9ICAn55uK5pm65o6o566xJztcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSAhPSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJ+esrCcrd2luZG93LmxldmVsSW5kZXgrJ+WFsycrJy3kvb/nlKjmraXmlbDvvJonKyB0aGF0LnN0ZXBDb3VudGVyVmFsdWUgKyct5oyR5oiY5oiQ5Yqf77yBJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nKyflsI/muLjmiI/vvIzlv6vmnaXmjJHmiJjlkKfvvIEnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICfliIbkuqsnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2dhbWVPdmVyQWxlcnQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICAgICAgfSwwKVxyXG5cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSBcImJ1aWxkXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy/kuIrkvKDliIbmlbBcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgaWYgKHRoYXQubGFzdFNjb3JlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWIhuaVsOS4rS4uLicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU/d2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXNlci5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVzZXIuYXBwSWQubGVuZ3RoLTUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUodGhhdC5sYXN0U2NvcmUudXNlU3RlcCx0aGF0Lmxhc3RTY29yZS51c2VUaW1lKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB8fCB0aGF0LnRpbWVDb3VudGVyVmFsdWUgPCB0aGF0Lmxhc3RTY29yZS51c2VUaW1lXHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5zdGVwQ291bnRlclZhbHVlIDwgdGhhdC5sYXN0U2NvcmUudXNlU3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSh0aGF0Lmxhc3RTY29yZS51c2VTdGVwLHRoYXQubGFzdFNjb3JlLnVzZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDliIbmlbDkuK0uLi4nLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGVDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY3VyTGV2ZWxOdW0gPSB3aW5kb3cubGV2ZWxJbmRleDtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCAmJiByZXMucmVzdWx0LmRhdGFbMF0ubGV2ZWxGaW5pc2hOdW0gPCBjdXJMZXZlbE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSBjdXJMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwSWQgPSB3aW5kb3cudXNlci5hcHBJZDtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmxldmVsRmluaXNoTnVtID0gY3VyTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxvZ2luSW5mby5uaWNrTmFtZSkgZGF0YS5uaWNrTmFtZSA9IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwpIGRhdGEucG9ydHJhaXQgPSB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVwbGF5TGF5b3V0KCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdpbml0TGV2ZWwnLFxyXG4gICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKCl7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBpbml0UGVuZGFudCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAvL+WFs+WNoVxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbGV2ZWxOb2RlID0gbmV3IGNjLk5vZGUoJ2xldmVsQ291bnRlcicpO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUud2lkdGggPSAgNzU2O1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuaGVpZ2h0ID0gMjQwO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuaG9yaXpvbnRhbEFsaWduID0gJ2NlbnRlcidcclxuICAgICAgICAgICAgdmFyIGxldmVsQ291bnRlciA9IGxldmVsTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigwLCAgKGNjLndpblNpemUuaGVpZ2h0LzIpIC0gKGNjLndpblNpemUuaGVpZ2h0KjAuMDUpKVxyXG4gICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxCeSl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzIC0gJyt3aW5kb3cubGV2ZWxCeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmZvbnRTaXplID0gNjA7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5lbmFibGVCb2xkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gbGV2ZWxDb3VudGVyLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmxpbmVIZWlnaHQgPSA2MDtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmhvcml6b250YWxBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlciA9IGxldmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbE5vZGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEJ5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyAtICcrd2luZG93LmxldmVsQnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfmtYvor5XlhbPljaEnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mraXmlbBcclxuICAgICAgICBpZih0aGlzLnN0ZXBDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdzdGVwQ291bnRlcicpO1xyXG4gICAgICAgICAgICBub2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDgwKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gJ+atpeaVsO+8miAwJztcclxuICAgICAgICAgICAgdGhpcy5zdGVwQ291bnRlciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcENvdW50ZXJWYWx1ZSAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/nlKjml7ZcclxuICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgdGltZU5vZGUgPSBuZXcgY2MuTm9kZSgndGltZUNvdW50ZXInKTtcclxuICAgICAgICAgICAgdGltZU5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lQ291bnRlciA9IHRpbWVOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oMCAsIChjYy53aW5TaXplLndpZHRoLzIpICsgODApXHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLnN0cmluZyA9ICfnlKjml7bvvJogMCc7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXIgPSB0aW1lTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aW1lTm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGlzLnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5tb3ZlSGlzdG9yeUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlSGlzdG9yeUxpc3Quc3BsaWNlKDAsdGhpcy5tb3ZlSGlzdG9yeUxpc3QubGVuZ3RoKVxyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6XCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBwZW5kYW50QWRkRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgY2MuZmluZCgnYmFjaycsdGhpcy5ub2RlKS5vbignY2xpY2snLHRoaXMuYmFjaywgdGhpcylcclxuICAgICAgICAvL+W8gOWQr+eCueWHu+enu+WKqFxyXG4gICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSkge1xyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy91cCcsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlVXAod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9yaWdodCcsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlUmlnaHQod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9kb3duJyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVEb3duKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbGVmdCcsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlTGVmdCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3VwJyx0aGlzLm5vZGUpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9yaWdodCcsdGhpcy5ub2RlKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvZG93bicsdGhpcy5ub2RlKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbGVmdCcsdGhpcy5ub2RlKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvYmFja1N0ZXAnLHRoaXMubm9kZSkub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKHRoYXQubW92ZUhpc3RvcnlMaXN0Lmxlbmd0aCA+IDEgJiYgdGhhdC5zdGVwQ291bnRlclZhbHVlID49IDEpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhhdC5tb3ZlSGlzdG9yeUxpc3RbdGhhdC5tb3ZlSGlzdG9yeUxpc3QubGVuZ3RoLTFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN0ZXBDb3VudGVyVmFsdWUgLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RlcENvdW50ZXIuc3RyaW5nID0gXCLmraXmlbDvvJpcIiArIHRoYXQuc3RlcENvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL21lbnUnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGF0LnRpbWVDb3VudGVyVGltZXIpO1xyXG4gICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IHRoYXQubm9kZTtcclxuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vY29udGludWUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGF0LnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJWYWx1ZSAgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGF0LnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGF0KSwxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vcmVwbGF5JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlcGxheUxheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9yYW5rJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfmtYvor5XlhbPljaHmsqHmnInmjpLooYzmppwnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dMZXZlbFJhbmsoKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL3NoYXJlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aXRTdHJpbmcgPSAgJ+ebiuaZuuaOqOeusSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tICE9ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJ+esrCcrd2luZG93LmxldmVsSW5kZXgrJ+WFsy3lv6vmnaXmjJHmiJjlkKchJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAn5bCP5ri45oiP77yM5b+r5p2l5oyR5oiY5ZCn77yBJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICct5L2/55So5q2l5pWw77yaJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZU1lbnUnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICAgICAgfSx0aGlzKVxyXG4gICAgfSxcclxuICAgIGluaXRMZXZlbCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUoJ+aXoCcsJ+aXoCcpXHJcblxyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OididWlsZExldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbmjILku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTonYnVpbGRMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkTGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v57uP5YW45YWz5Y2hXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbENsYXNzaWZ5ID09ICdjbGFzc2ljc0xldmVsJyl7XHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6d2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLnJlc3VsdC5kYXRhWzBdLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsQnkgPSByZXMucmVzdWx0LmRhdGFbMF0ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluaMguS7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOndpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IHJlcy5yZXN1bHQuZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUodGhhdC5sYXN0U2NvcmUudXNlU3RlcCx0aGF0Lmxhc3RTY29yZS51c2VUaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKCfml6AnLCfml6AnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxJbmRleCA9PSAxKSBUb2FzdCgnVGlwOiDlj6/mu5HliqjlsY/luZXmjqfliLbkurrniaknLDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nvZHnu5zlhbPljaFcclxuICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrKCl7XHJcbiAgICAgICAgdGhpcy5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lQ291bnRlclRpbWVyKVxyXG4gICAgICAgIHRoaXMudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgaWYod2luZG93LmZyb20pe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUod2luZG93LmZyb20pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJ1xyXG4gICAgfSxcclxuICAgIHJlbmRlckxhc3RTY29yZShzdGVwLHRpbWUpe1xyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy/mnIDkvbPmraXmlbBcclxuICAgICAgICBpZih0aGF0Lmxhc3RTdGVwTm9kZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIGxhc3RTdGVwTm9kZSA9IG5ldyBjYy5Ob2RlKCdsYXN0U3RlcE5vZGUnKTtcclxuICAgICAgICAgICAgbGFzdFN0ZXBOb2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBsYXN0U3RlcE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigtKGNjLndpblNpemUud2lkdGgvMikgKyAoY2Mud2luU2l6ZS53aWR0aCowLjA1KSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgMTYwKVxyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5zdHJpbmcgPSAn5pyA5L2z5oiQ57up77ya5q2l5pWwICcrIHN0ZXArXCIgLSDnlKjml7YgXCIrdGltZTtcclxuICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUgPSBsYXN0U3RlcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGF0Lm5vZGUuYWRkQ2hpbGQobGFzdFN0ZXBOb2RlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUuc3RyaW5nID0gJ+acgOS9s+aIkOe7qe+8muatpeaVsCAnKyBzdGVwK1wiIC0g55So5pe2IFwiK3RpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgc2hvd0xldmVsUmFuaygpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciByYW5rUGFnZSA9IDEscmFua1BhZ2VTaXplID0gNTA7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjYy5maW5kKCdyYW5rTGlzdC92aWV3L2NvbnRlbnQnLG5ld015UHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2Nsb3NlJyxuZXdNeVByZWZhYikub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBpZih0aGF0LnJhbmtJdGVtID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtJdGVtJywgZnVuY3Rpb24gKGVycixyZXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmFua0l0ZW0gPSBjYy5pbnN0YW50aWF0ZShyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMZXZlbFJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3JhbmtMaXN0JyxuZXdNeVByZWZhYikub24oJ2JvdW5jZS1ib3R0b20nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmFua1BhZ2UrKztcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCd0aExldmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAn5q2lIOaVsCdcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIHJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxwYWdlLHBhZ2VTaXplKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtTnVtID0gY29udGVudC5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbFNjb3JlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6d2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCByYW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAxOyBpPD0gcmVzLnJlc3VsdC5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSAgcmVzLnJlc3VsdC5kYXRhW2ktMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhhdC5yYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmtJdGVtID09IG51bGwpIHJhbmtJdGVtID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRSYW5rJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpK2N1cnJlbnRJdGVtTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZERhdGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZvcm1hdGVSYW5rVGltZShkYXRhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhLnVzZVN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEucG9ydHJhaXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZGF0YS5wb3J0cmFpdCsnP2FhYT1hYS5qcGcnLCAgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ21hc2svSW1hZ2UnLG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUG9ydHJhaXQnKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLm5pY2tOYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIrZGF0YS5uaWNrTmFtZStcIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmhlaWdodCA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudCAqIHJhbmtJdGVtLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCIsMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/level.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8303276hNVKza2rc2TmzBRT', 'level');
// scripts/level.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
//背景 case 0:
//墙 case 1:
//箱子 case 2:
//球 case 3:
//上 case 4:
//右 case 5:
//下 case 6:
//左 case 7:
var level = new Array();
var level1 = new Array(),
    level2 = new Array();
var blockRow = 12,
    blockNum = 12;

for (var n = 0; n < blockRow; n++) {
  level1[n] = new Array();
  level2[n] = new Array();

  for (var i = 0; i < blockNum; i++) {
    level1[n][i] = {
      x: null,
      y: null,
      sign: 0,
      cover: null
    };
    level2[n][i] = {
      x: null,
      y: null,
      sign: 0,
      cover: null
    };
  }
}

level1[1][3].sign = 1;
level1[1][4].sign = 1;
level1[1][5].sign = 1;
level1[2][3].sign = 1;
level1[2][4].sign = 3;
level1[2][5].sign = 1;
level1[3][3].sign = 1;
level1[3][4].sign = 0;
level1[3][5].sign = 1;
level1[3][6].sign = 1;
level1[3][7].sign = 1;
level1[3][8].sign = 1;
level1[4][1].sign = 1;
level1[4][2].sign = 1;
level1[4][3].sign = 1;
level1[4][4].sign = 2;
level1[4][5].sign = 0;
level1[4][6].sign = 2;
level1[4][7].sign = 3;
level1[4][8].sign = 1;
level1[5][1].sign = 1;
level1[5][2].sign = 3;
level1[5][3].sign = 0; // level1[5][2].sign = 3;
// level1[5][3].sign = 3;

level1[5][4].sign = 2;
level1[5][5].sign = 6;
level1[5][6].sign = 1;
level1[5][7].sign = 1;
level1[5][8].sign = 1;
level1[6][1].sign = 1;
level1[6][2].sign = 1;
level1[6][3].sign = 1;
level1[6][4].sign = 1;
level1[6][5].sign = 2;
level1[6][6].sign = 1;
level1[7][4].sign = 1;
level1[7][5].sign = 3;
level1[7][6].sign = 1;
level1[8][4].sign = 1;
level1[8][5].sign = 1;
level1[8][6].sign = 1;
level2[1][1].sign = 1;
level2[1][2].sign = 1;
level2[1][3].sign = 1;
level2[1][4].sign = 1;
level2[1][5].sign = 1;
level2[2][1].sign = 1;
level2[2][2].sign = 6;
level2[2][5].sign = 1;
level2[3][1].sign = 1;
level2[3][3].sign = 2;
level2[3][4].sign = 2;
level2[3][5].sign = 1;
level2[3][7].sign = 1;
level2[3][8].sign = 1;
level2[3][9].sign = 1;
level2[4][1].sign = 1;
level2[4][3].sign = 2;
level2[4][5].sign = 1;
level2[4][7].sign = 1;
level2[4][8].sign = 3;
level2[4][9].sign = 1;
level2[5][1].sign = 1;
level2[5][2].sign = 1;
level2[5][3].sign = 1;
level2[5][5].sign = 1;
level2[5][6].sign = 1;
level2[5][7].sign = 1;
level2[5][8].sign = 3;
level2[5][9].sign = 1;
level2[6][2].sign = 1;
level2[6][3].sign = 1;
level2[6][8].sign = 3;
level2[6][9].sign = 1;
level2[7][2].sign = 1;
level2[7][6].sign = 1;
level2[7][9].sign = 1;
level2[8][2].sign = 1;
level2[8][6].sign = 1;
level2[8][7].sign = 1;
level2[8][8].sign = 1;
level2[8][9].sign = 1;
level2[9][2].sign = 1;
level2[9][3].sign = 1;
level2[9][4].sign = 1;
level2[9][5].sign = 1;
level2[9][6].sign = 1;
level.push(level1, level2);
var _default = level;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWwuanMiXSwibmFtZXMiOlsibGV2ZWwiLCJBcnJheSIsImxldmVsMSIsImxldmVsMiIsImJsb2NrUm93IiwiYmxvY2tOdW0iLCJuIiwiaSIsIngiLCJ5Iiwic2lnbiIsImNvdmVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFkO0FBRUEsSUFBTUMsTUFBTSxHQUFHLElBQUlELEtBQUosRUFBZjtBQUFBLElBQ0lFLE1BQU0sR0FBRyxJQUFJRixLQUFKLEVBRGI7QUFFQSxJQUFJRyxRQUFRLEdBQUUsRUFBZDtBQUFBLElBQWtCQyxRQUFRLEdBQUcsRUFBN0I7O0FBRUEsS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUNGLFFBQWpCLEVBQTJCRSxDQUFDLEVBQTVCLEVBQStCO0FBQzNCSixFQUFBQSxNQUFNLENBQUNJLENBQUQsQ0FBTixHQUFZLElBQUlMLEtBQUosRUFBWjtBQUNBRSxFQUFBQSxNQUFNLENBQUNHLENBQUQsQ0FBTixHQUFZLElBQUlMLEtBQUosRUFBWjs7QUFDQSxPQUFJLElBQUlNLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBQ0YsUUFBakIsRUFBNEJFLENBQUMsRUFBN0IsRUFBZ0M7QUFDNUJMLElBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOLENBQVVDLENBQVYsSUFBZTtBQUFDQyxNQUFBQSxDQUFDLEVBQUMsSUFBSDtBQUFRQyxNQUFBQSxDQUFDLEVBQUMsSUFBVjtBQUFlQyxNQUFBQSxJQUFJLEVBQUMsQ0FBcEI7QUFBc0JDLE1BQUFBLEtBQUssRUFBQztBQUE1QixLQUFmO0FBQ0FSLElBQUFBLE1BQU0sQ0FBQ0csQ0FBRCxDQUFOLENBQVVDLENBQVYsSUFBZTtBQUFDQyxNQUFBQSxDQUFDLEVBQUMsSUFBSDtBQUFRQyxNQUFBQSxDQUFDLEVBQUMsSUFBVjtBQUFlQyxNQUFBQSxJQUFJLEVBQUMsQ0FBcEI7QUFBc0JDLE1BQUFBLEtBQUssRUFBQztBQUE1QixLQUFmO0FBQ0g7QUFDSjs7QUFDRFQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYVEsSUFBYixHQUFvQixDQUFwQjtBQUNBUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhUSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFRLElBQWIsR0FBb0IsQ0FBcEI7QUFFQVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYVEsSUFBYixHQUFvQixDQUFwQjtBQUNBUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhUSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFRLElBQWIsR0FBb0IsQ0FBcEI7QUFFQVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYVEsSUFBYixHQUFvQixDQUFwQjtBQUNBUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhUSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFRLElBQWIsR0FBb0IsQ0FBcEI7QUFDQVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYVEsSUFBYixHQUFvQixDQUFwQjtBQUNBUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhUSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFRLElBQWIsR0FBb0IsQ0FBcEI7QUFFQVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYVEsSUFBYixHQUFvQixDQUFwQjtBQUNBUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhUSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFRLElBQWIsR0FBb0IsQ0FBcEI7QUFDQVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYVEsSUFBYixHQUFvQixDQUFwQjtBQUNBUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhUSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFRLElBQWIsR0FBb0IsQ0FBcEI7QUFDQVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYVEsSUFBYixHQUFvQixDQUFwQjtBQUNBUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhUSxJQUFiLEdBQW9CLENBQXBCO0FBRUFSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFRLElBQWIsR0FBb0IsQ0FBcEI7QUFDQVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYVEsSUFBYixHQUFvQixDQUFwQjtBQUNBUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhUSxJQUFiLEdBQW9CLENBQXBCLEVBRUE7QUFDQTs7QUFFQVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYVEsSUFBYixHQUFvQixDQUFwQjtBQUVBUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhUSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFRLElBQWIsR0FBb0IsQ0FBcEI7QUFDQVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYVEsSUFBYixHQUFvQixDQUFwQjtBQUNBUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhUSxJQUFiLEdBQW9CLENBQXBCO0FBRUFSLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFW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Q0FBTixDQUFVLENBQVYsRUFBYU8sSUFBYixHQUFvQixDQUFwQjtBQUNBUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTyxJQUFiLEdBQW9CLENBQXBCO0FBR0FQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFPLElBQWIsR0FBb0IsQ0FBcEI7QUFDQVAsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU8sSUFBYixHQUFvQixDQUFwQjtBQUNBUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFPLElBQWIsR0FBb0IsQ0FBcEI7QUFDQVAsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU8sSUFBYixHQUFvQixDQUFwQjtBQUdBUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFPLElBQWIsR0FBb0IsQ0FBcEI7QUFDQVAsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU8sSUFBYixHQUFvQixDQUFwQjtBQUNBUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFPLElBQWIsR0FBb0IsQ0FBcEI7QUFRQVYsS0FBSyxDQUFDWSxJQUFOLENBQVdWLE1BQVgsRUFBa0JDLE1BQWxCO2VBRWVIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+iDjOaZryBjYXNlIDA6XHJcbi8v5aKZIGNhc2UgMTpcclxuLy/nrrHlrZAgY2FzZSAyOlxyXG4vL+eQgyBjYXNlIDM6XHJcbi8v5LiKIGNhc2UgNDpcclxuLy/lj7MgY2FzZSA1OlxyXG4vL+S4iyBjYXNlIDY6XHJcbi8v5bemIGNhc2UgNzpcclxuXHJcbmNvbnN0IGxldmVsID0gbmV3IEFycmF5KCk7XHJcblxyXG5jb25zdCBsZXZlbDEgPSBuZXcgQXJyYXkoKSxcclxuICAgIGxldmVsMiA9IG5ldyBBcnJheSgpO1xyXG52YXIgYmxvY2tSb3cgPTEyLCBibG9ja051bSA9IDEyO1xyXG5cclxuZm9yKHZhciBuID0gMDsgbjxibG9ja1JvdzsgbisrKXtcclxuICAgIGxldmVsMVtuXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbGV2ZWwyW25dID0gbmV3IEFycmF5KCk7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpPGJsb2NrTnVtIDsgaSsrKXtcclxuICAgICAgICBsZXZlbDFbbl1baV0gPSB7eDpudWxsLHk6bnVsbCxzaWduOjAsY292ZXI6bnVsbH1cclxuICAgICAgICBsZXZlbDJbbl1baV0gPSB7eDpudWxsLHk6bnVsbCxzaWduOjAsY292ZXI6bnVsbH1cclxuICAgIH1cclxufVxyXG5sZXZlbDFbMV1bM10uc2lnbiA9IDE7XHJcbmxldmVsMVsxXVs0XS5zaWduID0gMTtcclxubGV2ZWwxWzFdWzVdLnNpZ24gPSAxO1xyXG5cclxubGV2ZWwxWzJdWzNdLnNpZ24gPSAxO1xyXG5sZXZlbDFbMl1bNF0uc2lnbiA9IDM7XHJcbmxldmVsMVsyXVs1XS5zaWduID0gMTtcclxuXHJcbmxldmVsMVszXVszXS5zaWduID0gMTtcclxubGV2ZWwxWzNdWzRdLnNpZ24gPSAwO1xyXG5sZXZlbDFbM11bNV0uc2lnbiA9IDE7XHJcbmxldmVsMVszXVs2XS5zaWduID0gMTtcclxubGV2ZWwxWzNdWzddLnNpZ24gPSAxO1xyXG5sZXZlbDFbM11bOF0uc2lnbiA9IDE7XHJcblxyXG5sZXZlbDFbNF1bMV0uc2lnbiA9IDE7XHJcbmxldmVsMVs0XVsyXS5zaWduID0gMTtcclxubGV2ZWwxWzRdWzNdLnNpZ24gPSAxO1xyXG5sZXZlbDFbNF1bNF0uc2lnbiA9IDI7XHJcbmxldmVsMVs0XVs1XS5zaWduID0gMDtcclxubGV2ZWwxWzRdWzZdLnNpZ24gPSAyO1xyXG5sZXZlbDFbNF1bN10uc2lnbiA9IDM7XHJcbmxldmVsMVs0XVs4XS5zaWduID0gMTtcclxuXHJcbmxldmVsMVs1XVsxXS5zaWduID0gMTtcclxubGV2ZWwxWzVdWzJdLnNpZ24gPSAzO1xyXG5sZXZlbDFbNV1bM10uc2lnbiA9IDA7XHJcblxyXG4vLyBsZXZlbDFbNV1bMl0uc2lnbiA9IDM7XHJcbi8vIGxldmVsMVs1XVszXS5zaWduID0gMztcclxuXHJcbmxldmVsMVs1XVs0XS5zaWduID0gMjtcclxuXHJcbmxldmVsMVs1XVs1XS5zaWduID0gNjtcclxubGV2ZWwxWzVdWzZdLnNpZ24gPSAxO1xyXG5sZXZlbDFbNV1bN10uc2lnbiA9IDE7XHJcbmxldmVsMVs1XVs4XS5zaWduID0gMTtcclxuXHJcbmxldmVsMVs2XVsxXS5zaWduID0gMTtcclxubGV2ZWwxWzZdWzJdLnNpZ24gPSAxO1xyXG5sZXZlbDFbNl1bM10uc2lnbiA9IDE7XHJcbmxldmVsMVs2XVs0XS5zaWduID0gMTtcclxubGV2ZWwxWzZdWzVdLnNpZ24gPSAyO1xyXG5sZXZlbDFbNl1bNl0uc2lnbiA9IDE7XHJcblxyXG5sZXZlbDFbN11bNF0uc2lnbiA9IDE7XHJcbmxldmVsMVs3XVs1XS5zaWduID0gMztcclxubGV2ZWwxWzddWzZdLnNpZ24gPSAxO1xyXG5cclxubGV2ZWwxWzhdWzRdLnNpZ24gPSAxO1xyXG5sZXZlbDFbOF1bNV0uc2lnbiA9IDE7XHJcbmxldmVsMVs4XVs2XS5zaWduID0gMTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5sZXZlbDJbMV1bMV0uc2lnbiA9IDE7XHJcbmxldmVsMlsxXVsyXS5zaWduID0gMTtcclxubGV2ZWwyWzFdWzNdLnNpZ24gPSAxO1xyXG5sZXZlbDJbMV1bNF0uc2lnbiA9IDE7XHJcbmxldmVsMlsxXVs1XS5zaWduID0gMTtcclxuXHJcbmxldmVsMlsyXVsxXS5zaWduID0gMTtcclxubGV2ZWwyWzJdWzJdLnNpZ24gPSA2O1xyXG5sZXZlbDJbMl1bNV0uc2lnbiA9IDE7XHJcblxyXG5sZXZlbDJbM11bMV0uc2lnbiA9IDE7XHJcbmxldmVsMlszXVszXS5zaWduID0gMjtcclxubGV2ZWwyWzNdWzRdLnNpZ24gPSAyO1xyXG5sZXZlbDJbM11bNV0uc2lnbiA9IDE7XHJcbmxldmVsMlszXVs3XS5zaWduID0gMTtcclxubGV2ZWwyWzNdWzhdLnNpZ24gPSAxO1xyXG5sZXZlbDJbM11bOV0uc2lnbiA9IDE7XHJcblxyXG5sZXZlbDJbNF1bMV0uc2lnbiA9IDE7XHJcbmxldmVsMls0XVszXS5zaWduID0gMjtcclxubGV2ZWwyWzRdWzVdLnNpZ24gPSAxO1xyXG5sZXZlbDJbNF1bN10uc2lnbiA9IDE7XHJcbmxldmVsMls0XVs4XS5zaWduID0gMztcclxubGV2ZWwyWzRdWzldLnNpZ24gPSAxO1xyXG5cclxubGV2ZWwyWzVdWzFdLnNpZ24gPSAxO1xyXG5sZXZlbDJbNV1bMl0uc2lnbiA9IDE7XHJcbmxldmVsMls1XVszXS5zaWduID0gMTtcclxubGV2ZWwyWzVdWzVdLnNpZ24gPSAxO1xyXG5sZXZlbDJbNV1bNl0uc2lnbiA9IDE7XHJcbmxldmVsMls1XVs3XS5zaWduID0gMTtcclxubGV2ZWwyWzVdWzhdLnNpZ24gPSAzO1xyXG5sZXZlbDJbNV1bOV0uc2lnbiA9IDE7XHJcblxyXG5sZXZlbDJbNl1bMl0uc2lnbiA9IDE7XHJcbmxldmVsMls2XVszXS5zaWduID0gMTtcclxubGV2ZWwyWzZdWzhdLnNpZ24gPSAzO1xyXG5sZXZlbDJbNl1bOV0uc2lnbiA9IDE7XHJcblxyXG5cclxubGV2ZWwyWzddWzJdLnNpZ24gPSAxO1xyXG5sZXZlbDJbN11bNl0uc2lnbiA9IDE7XHJcbmxldmVsMls3XVs5XS5zaWduID0gMTtcclxuXHJcblxyXG5sZXZlbDJbOF1bMl0uc2lnbiA9IDE7XHJcbmxldmVsMls4XVs2XS5zaWduID0gMTtcclxubGV2ZWwyWzhdWzddLnNpZ24gPSAxO1xyXG5sZXZlbDJbOF1bOF0uc2lnbiA9IDE7XHJcbmxldmVsMls4XVs5XS5zaWduID0gMTtcclxuXHJcblxyXG5sZXZlbDJbOV1bMl0uc2lnbiA9IDE7XHJcbmxldmVsMls5XVszXS5zaWduID0gMTtcclxubGV2ZWwyWzldWzRdLnNpZ24gPSAxO1xyXG5sZXZlbDJbOV1bNV0uc2lnbiA9IDE7XHJcbmxldmVsMls5XVs2XS5zaWduID0gMTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmxldmVsLnB1c2gobGV2ZWwxLGxldmVsMilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxldmVsXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levelLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fef7dUI0+VDDZg/zyXQW1yR', 'levelLayout');
// scripts/levelLayout.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    levelItem: cc.Prefab,
    levelList: null,
    levelListConten: null,
    levelSrollView: null,
    classicsLevelBtn: cc.Button,
    netLevelBtn: cc.Button,
    closeLevelBtn: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {
    this.levelList = cc.find('levelList/levelScrollView/view/content/itemList', this.node);
    this.levelListConten = cc.find('levelList/levelScrollView/view/content', this.node);
    this.levelSrollView = cc.find('levelList/levelScrollView', this.node);
    if (this.classicsLevelBtn == null) this.classicsLevelBtn = cc.find('levelList/classify/classicsLevel', this.node).getComponent(cc.Button);
    if (this.netLevelBtn == null) this.netLevelBtn = cc.find('levelList/classify/netLevel', this.node).getComponent(cc.Button);
    if (this.closeLevelBtn == null) this.closeLevelBtn = cc.find('closeLevel', this.node).getComponent(cc.Button);
    this.classicsLevelBtn.node.on('click', this.loadClassicsLevelList, this);
    this.netLevelBtn.node.on('click', this.loadNetLevelList, this);
    this.closeLevelBtn.node.on('click', this.closeLevelLayout, this);
    this.loadClassicsLevelList();
  },
  loadClassicsLevelList: function loadClassicsLevelList() {
    var _this = this;

    // 设置切换关卡类型按钮选中
    var classiceBtnLabel = cc.find('Background/Label', this.classicsLevelBtn.node);
    classiceBtnLabel.color = cc.color(202, 122, 0);
    var netBtnLabel = cc.find('Background/Label', this.netLevelBtn.node);
    netBtnLabel.color = cc.color(255, 255, 255);
    netBtnLabel.opacity = 125;
    window.levelClassify = 'classicsLevel'; //清空关卡裂变

    this.levelList.destroyAllChildren();
    var that = this;
    var levelH = 0;
    var levelRow = 10;
    var levelTotal = window.classicsLevelNum;

    var _loop = function _loop(i) {
      var node = cc.instantiate(_this.levelItem);
      var indexLevel = i + 1;

      if (indexLevel <= window.user.levelFinishNum + 1) {
        node.getChildByName('levelNum').getComponent(cc.Label).string = indexLevel;
        node.getChildByName('levelLock').opacity = 0;
        node.on('touchend', function (t) {
          window.levelIndex = indexLevel;
          if (window.wxLoginBtn) window.wxLoginBtn.destroy();
          cc.director.loadScene("game");
        }, _this);
      }

      _this.levelList.addChild(node);

      if (indexLevel <= levelRow) {
        levelRow = Math.floor(levelTotal / Math.floor(_this.levelListConten.width / node.width) - 1);
        levelH += node.height + 70;
      }
    };

    for (var i = 0; i < levelTotal; i++) {
      _loop(i);
    }

    this.levelListConten.height = levelH;
  },
  loadNetLevelList: function loadNetLevelList() {
    var _this2 = this;

    // 设置切换关卡类型按钮选中
    var classiceBtnLabel = cc.find('Background/Label', this.classicsLevelBtn.node);
    classiceBtnLabel.color = cc.color(255, 255, 255);
    classiceBtnLabel.opacity = 125;
    var netBtnLabel = cc.find('Background/Label', this.netLevelBtn.node);
    netBtnLabel.color = cc.color(202, 122, 0);
    window.levelClassify = 'netLevel'; //清空关卡裂变

    this.levelList.destroyAllChildren();
    var that = this;
    var levelH = 0;
    var levelRow = 10;
    var levelTotal = window.netLevelNum;

    var _loop2 = function _loop2(i) {
      var node = cc.instantiate(_this2.levelItem);
      var indexLevel = i + 1;

      if (indexLevel <= window.userInfo.classicsLevelNum) {
        node.getChildByName('levelNum').getComponent(cc.Label).string = indexLevel;
        node.getChildByName('levelLock').opacity = 0;
      }

      _this2.levelList.addChild(node);

      node.on('touchend', function (t) {
        cc.log('level:' + indexLevel);
      }, _this2);

      if (indexLevel <= levelRow) {
        levelRow = Math.floor(levelTotal / Math.floor(_this2.levelListConten.width / node.width) - 1);
        levelH += node.height + 70;
      }
    };

    for (var i = 0; i < levelTotal; i++) {
      _loop2(i);
    }

    this.levelListConten.height = levelH;
  },
  closeLevelLayout: function closeLevelLayout() {
    this.node.removeFromParent();
    this.node.destroy();
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxMYXlvdXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsZXZlbEl0ZW0iLCJQcmVmYWIiLCJsZXZlbExpc3QiLCJsZXZlbExpc3RDb250ZW4iLCJsZXZlbFNyb2xsVmlldyIsImNsYXNzaWNzTGV2ZWxCdG4iLCJCdXR0b24iLCJuZXRMZXZlbEJ0biIsImNsb3NlTGV2ZWxCdG4iLCJvbkxvYWQiLCJzdGFydCIsImZpbmQiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJsb2FkQ2xhc3NpY3NMZXZlbExpc3QiLCJsb2FkTmV0TGV2ZWxMaXN0IiwiY2xvc2VMZXZlbExheW91dCIsImNsYXNzaWNlQnRuTGFiZWwiLCJjb2xvciIsIm5ldEJ0bkxhYmVsIiwib3BhY2l0eSIsIndpbmRvdyIsImxldmVsQ2xhc3NpZnkiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJ0aGF0IiwibGV2ZWxIIiwibGV2ZWxSb3ciLCJsZXZlbFRvdGFsIiwiY2xhc3NpY3NMZXZlbE51bSIsImkiLCJpbnN0YW50aWF0ZSIsImluZGV4TGV2ZWwiLCJ1c2VyIiwibGV2ZWxGaW5pc2hOdW0iLCJnZXRDaGlsZEJ5TmFtZSIsIkxhYmVsIiwic3RyaW5nIiwidCIsImxldmVsSW5kZXgiLCJ3eExvZ2luQnRuIiwiZGVzdHJveSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYWRkQ2hpbGQiLCJNYXRoIiwiZmxvb3IiLCJ3aWR0aCIsImhlaWdodCIsIm5ldExldmVsTnVtIiwidXNlckluZm8iLCJsb2ciLCJyZW1vdmVGcm9tUGFyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsU0FBUyxF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LEVBQTdCLEVBQWdDO0FBQUEsYUFBeEJBLENBQXdCO0FBaUIvQjs7QUFDRCxTQUFLM0IsZUFBTCxDQUFxQjZDLE1BQXJCLEdBQThCdEIsTUFBOUI7QUFDSCxHQXBISTtBQXFITFQsRUFBQUEsZ0JBckhLLDhCQXFIYTtBQUNkLFNBQUtMLElBQUwsQ0FBVXdDLGdCQUFWO0FBQ0EsU0FBS3hDLElBQUwsQ0FBVTZCLE9BQVY7QUFDSCxHQXhISSxDQTBITDs7QUExSEssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgbGV2ZWxJdGVtOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgbGV2ZWxMaXN0Om51bGwsXHJcbiAgICAgICAgbGV2ZWxMaXN0Q29udGVuOm51bGwsXHJcbiAgICAgICAgbGV2ZWxTcm9sbFZpZXc6bnVsbCxcclxuICAgICAgICBjbGFzc2ljc0xldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgICAgICBuZXRMZXZlbEJ0bjpjYy5CdXR0b24sXHJcbiAgICAgICAgY2xvc2VMZXZlbEJ0bjpjYy5CdXR0b24sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0ID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldy92aWV3L2NvbnRlbnQvaXRlbUxpc3QnLHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmxldmVsTGlzdENvbnRlbiA9IGNjLmZpbmQoJ2xldmVsTGlzdC9sZXZlbFNjcm9sbFZpZXcvdmlldy9jb250ZW50Jyx0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5sZXZlbFNyb2xsVmlldyA9IGNjLmZpbmQoJ2xldmVsTGlzdC9sZXZlbFNjcm9sbFZpZXcnLHRoaXMubm9kZSlcclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMuY2xhc3NpY3NMZXZlbEJ0biA9PSBudWxsKSB0aGlzLmNsYXNzaWNzTGV2ZWxCdG4gPSBjYy5maW5kKCdsZXZlbExpc3QvY2xhc3NpZnkvY2xhc3NpY3NMZXZlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmKHRoaXMubmV0TGV2ZWxCdG4gPT0gbnVsbCkgdGhpcy5uZXRMZXZlbEJ0biA9IGNjLmZpbmQoJ2xldmVsTGlzdC9jbGFzc2lmeS9uZXRMZXZlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmKHRoaXMuY2xvc2VMZXZlbEJ0biA9PSBudWxsKSB0aGlzLmNsb3NlTGV2ZWxCdG4gPSBjYy5maW5kKCdjbG9zZUxldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5jbGFzc2ljc0xldmVsQnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5sb2FkQ2xhc3NpY3NMZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZXRMZXZlbEJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMubG9hZE5ldExldmVsTGlzdCwgdGhpcylcclxuICAgICAgICB0aGlzLmNsb3NlTGV2ZWxCdG4ubm9kZS5vbignY2xpY2snLHRoaXMuY2xvc2VMZXZlbExheW91dCwgdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkQ2xhc3NpY3NMZXZlbExpc3QoKTtcclxuXHJcblxyXG4gICAgfSxcclxuICAgIGxvYWRDbGFzc2ljc0xldmVsTGlzdCgpe1xyXG4gICAgICAgIC8vIOiuvue9ruWIh+aNouWFs+WNoeexu+Wei+aMiemSrumAieS4rVxyXG4gICAgICAgIGxldCBjbGFzc2ljZUJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5jbGFzc2ljc0xldmVsQnRuLm5vZGUpO1xyXG4gICAgICAgIGNsYXNzaWNlQnRuTGFiZWwuY29sb3IgPSBjYy5jb2xvcigyMDIsMTIyLDApO1xyXG4gICAgICAgIGxldCBuZXRCdG5MYWJlbCA9IGNjLmZpbmQoJ0JhY2tncm91bmQvTGFiZWwnLHRoaXMubmV0TGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgbmV0QnRuTGFiZWwuY29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgbmV0QnRuTGFiZWwub3BhY2l0eSA9IDEyNTtcclxuXHJcbiAgICAgICAgd2luZG93LmxldmVsQ2xhc3NpZnkgPSAnY2xhc3NpY3NMZXZlbCc7XHJcblxyXG4gICAgICAgIC8v5riF56m65YWz5Y2h6KOC5Y+YXHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3QuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBsZXZlbEggPSAwO1xyXG4gICAgICAgIGxldCBsZXZlbFJvdyA9IDEwO1xyXG4gICAgICAgIGxldCBsZXZlbFRvdGFsID0gd2luZG93LmNsYXNzaWNzTGV2ZWxOdW07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGxldmVsVG90YWwgOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxJdGVtKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4TGV2ZWwgPSBpKzE7XHJcbiAgICAgICAgICAgIGlmKGluZGV4TGV2ZWwgPD0gIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtKzEpe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxOdW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGluZGV4TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdsZXZlbExvY2snKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsSW5kZXggPSBpbmRleExldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sZXZlbExpc3QuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA8PSBsZXZlbFJvdyl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbFJvdyA9IE1hdGguZmxvb3IobGV2ZWxUb3RhbCAvIE1hdGguZmxvb3IodGhpcy5sZXZlbExpc3RDb250ZW4ud2lkdGggLyBub2RlLndpZHRoKSAtMSk7XHJcbiAgICAgICAgICAgICAgICBsZXZlbEggKz0gbm9kZS5oZWlnaHQgKyA3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxldmVsTGlzdENvbnRlbi5oZWlnaHQgPSBsZXZlbEg7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkTmV0TGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgLy8g6K6+572u5YiH5o2i5YWz5Y2h57G75Z6L5oyJ6ZKu6YCJ5LitXHJcbiAgICAgICAgbGV0IGNsYXNzaWNlQnRuTGFiZWwgPSBjYy5maW5kKCdCYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgY2xhc3NpY2VCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICBjbGFzc2ljZUJ0bkxhYmVsLm9wYWNpdHkgPSAxMjU7XHJcbiAgICAgICAgbGV0IG5ldEJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5uZXRMZXZlbEJ0bi5ub2RlKTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDIwMiwxMjIsMCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sZXZlbENsYXNzaWZ5ID0gJ25ldExldmVsJztcclxuXHJcbiAgICAgICAgLy/muIXnqbrlhbPljaHoo4Llj5hcclxuICAgICAgICB0aGlzLmxldmVsTGlzdC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxldmVsSCA9IDA7XHJcbiAgICAgICAgbGV0IGxldmVsUm93ID0gMTA7XHJcbiAgICAgICAgbGV0IGxldmVsVG90YWwgPSB3aW5kb3cubmV0TGV2ZWxOdW07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGxldmVsVG90YWwgOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxJdGVtKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4TGV2ZWwgPSBpKzE7XHJcbiAgICAgICAgICAgIGlmKGluZGV4TGV2ZWwgPD0gd2luZG93LnVzZXJJbmZvLmNsYXNzaWNzTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxOdW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGluZGV4TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdsZXZlbExvY2snKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxldmVsTGlzdC5hZGRDaGlsZChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygnbGV2ZWw6JyArIGluZGV4TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBpZihpbmRleExldmVsIDw9IGxldmVsUm93KXtcclxuICAgICAgICAgICAgICAgIGxldmVsUm93ID0gTWF0aC5mbG9vcihsZXZlbFRvdGFsIC8gTWF0aC5mbG9vcih0aGlzLmxldmVsTGlzdENvbnRlbi53aWR0aCAvIG5vZGUud2lkdGgpIC0xKTtcclxuICAgICAgICAgICAgICAgIGxldmVsSCArPSBub2RlLmhlaWdodCArIDcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0Q29udGVuLmhlaWdodCA9IGxldmVsSDtcclxuICAgIH0sXHJcbiAgICBjbG9zZUxldmVsTGF5b3V0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/build.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e870b8Vuf9L7IAU2PwLTbJH', 'build');
// scripts/build.js

"use strict";

var _common = require("./common");

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
window.eleSize = 35;
window.layout = new Array();
window.blockNum = 12;
cc.Class({
  "extends": cc.Component,
  properties: {
    block: {
      "default": null,
      type: cc.Prefab,
      displayName: 'block'
    },
    wall: {
      "default": null,
      type: cc.Prefab,
      displayName: 'wall'
    },
    box: {
      "default": null,
      type: cc.Prefab,
      displayName: 'box'
    },
    ball: {
      "default": null,
      type: cc.Prefab,
      displayName: 'ball'
    },
    roleUp: {
      "default": null,
      type: cc.Prefab,
      displayName: 'roleUp'
    },
    roleRight: {
      "default": null,
      type: cc.Prefab,
      displayName: 'roleRight'
    },
    roleDown: {
      "default": null,
      type: cc.Prefab,
      displayName: 'roleDown'
    },
    roleLeft: {
      "default": null,
      type: cc.Prefab,
      displayName: 'roleLeft'
    },
    position: {
      "default": null
    },
    gameBn: cc.Sprite,
    boxNum: {
      "default": null
    },
    selectEle: 1,
    wallEle: cc.Prefab,
    boxEle: cc.Prefab,
    ballEle: cc.Prefab,
    upEle: cc.Prefab,
    rightEle: cc.Prefab,
    downEle: cc.Prefab,
    leftEle: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var that = this;
    this.initWinEle();
    this.renderBg(); // this.renderBn();

    if (window.from == 'game') {
      wx.getStorage({
        key: 'buildLevel',
        success: function success(res) {
          window.buildLevel = res.data;
          that.renderLayout(window.buildLevel);
        }
      });
    }

    cc.find('btns', this.node).height = (cc.winSize.height - cc.winSize.width) / 2;
  },
  start: function start() {
    this.addEvent();
    this.renderSelectEle();
  },
  // update (dt) {},
  initWinEle: function initWinEle() {
    var realSiz = cc.winSize.width / window.blockNum;
    window.eleSize = realSiz;

    for (var i = 0; i < window.blockNum; i++) {
      window.layout[i] = new Array();
      window.buildLevel[i] = new Array();

      for (var n = 0; n < window.blockNum; n++) {
        window.layout[i][n] = {
          x: 0,
          y: 0,
          sign: 0,
          cover: null
        };
        window.buildLevel[i][n] = {
          x: 0,
          y: 0,
          sign: 0,
          cover: null
        };
      }
    }
  },
  initPosition: function initPosition(layout) {
    this.position = {};
    this.boxNum = 0;

    for (var i = 0; i < layout.length; i++) {
      for (var n = 0; n < layout[0].length; n++) {
        //layout[i][n].sign -- 人物位置
        if (layout[i][n].sign == 4 || layout[i][n].sign == 5 || layout[i][n].sign == 6 || layout[i][n].sign == 7) {
          this.position.x = n;
          this.position.y = i;
        } //箱子数量


        if (layout[i][n].sign == 2) {
          this.boxNum++;
        }
      }
    }
  },
  renderBg: function renderBg() {
    var startX = -(cc.winSize.width / 2);
    var startY = window.eleSize * window.blockNum / 2;

    for (var i = 0; i < window.blockNum; i++) {
      for (var n = 0; n < window.blockNum; n++) {
        var x = n * window.eleSize + startX;
        var y = -i * window.eleSize + startY;
        window.layout[i][n] = {
          x: x,
          y: y,
          sign: 0,
          cover: null
        };
        var newBlock = cc.instantiate(this.block); // 为设置位置

        newBlock.setPosition(x, y); // 将新增的节点添加到 Canvas 节点下面

        this.node.addChild(newBlock);
      }
    }
  },
  renderBn: function renderBn() {
    var that = this;
    if (this.gameBn == null) this.gameBn = cc.find('Canvas/buildBg/gameBn').getComponent(cc.Sprite);
    cc.assetManager.loadRemote(window.bgUrlBase + '_400x240.jpg', function (err, texture) {
      var sprite = new cc.SpriteFrame(texture, cc.rect(0, 0, 400, 240));
      that.gameBn.spriteFrame = sprite; //设置精灵组件图片资源
    });
  },
  addEvent: function addEvent() {
    var that = this;
    if (this.wallEle == null) this.wallEle = cc.find('btns/wallWrap', this.node);
    if (this.boxEle == null) this.boxEle = cc.find('btns/boxWrap', this.node);
    if (this.ballEle == null) this.ballEle = cc.find('btns/ballWrap', this.node);
    if (this.upEle == null) this.upEle = cc.find('btns/upWrap', this.node);
    if (this.rightEle == null) this.rightEle = cc.find('btns/rightWrap', this.node);
    if (this.downEle == null) this.downEle = cc.find('btns/downWrap', this.node);
    if (this.leftEle == null) this.leftEle = cc.find('btns/leftWrap', this.node);
    cc.find('back', this.node).on('click', this.back, this);
    cc.find('btns/clear', this.node).on('click', function () {
      that.initWinEle();
      that.renderBg();
    }, this);
    cc.find('btns/play', this.node).on('click', function () {
      if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        var boxNum = 0,
            ballNum = 0,
            roleNum = 0;

        for (var i = 0; i < window.blockNum; i++) {
          for (var n = 0; n < window.blockNum; n++) {
            if (window.buildLevel[i][n].sign == 2) {
              boxNum++;
            }

            if (window.buildLevel[i][n].sign == 3 || window.buildLevel[i][n].cover != null) {
              ballNum++;
            }

            if (window.buildLevel[i][n].sign >= 4) {
              roleNum++;
            }

            if (i == window.blockNum - 1 && n == window.blockNum - 1) {
              if (roleNum <= 0) {
                (0, _common.Toast)('未添加人物', 1500);
                return;
              }

              if (boxNum != ballNum) {
                (0, _common.Toast)('箱子和球体数量不一致', 1500);
                return;
              }

              if (boxNum < 3) {
                (0, _common.Toast)('箱子数量不能少于三个', 1500);
                return;
              }
            }
          }
        }

        wx.setStorage({
          key: 'buildLevel',
          data: window.buildLevel,
          success: function success() {
            window.from = 'build';
            cc.director.loadScene("game");
          }
        });
      }
    }, this);
    this.node.on('touchend', function (event) {
      //世界坐标
      var location = event.getLocation(); //本地坐标

      var touchPoint = cc.find('Canvas').convertToNodeSpaceAR(location); //点击放置区域

      for (var i = 0; i < window.blockNum; i++) {
        for (var n = 0; n < window.blockNum; n++) {
          //删除前面添加的人物
          if (window.layout[0][0].x <= touchPoint.x && touchPoint.x <= window.layout[0][window.blockNum - 1].x + window.eleSize && window.layout[0][0].y >= touchPoint.y && touchPoint.y >= window.layout[window.blockNum - 1][window.blockNum - 1].y - window.eleSize) {
            if (that.selectEle >= 4 && window.buildLevel[i][n].sign >= 4) {
              window.buildLevel[i][n].sign = 0;
              window.buildLevel[i][n].cover = null;
            }
          } //放置元素


          if (window.layout[i][n].x <= touchPoint.x && touchPoint.x <= window.layout[i][n].x + window.eleSize && window.layout[i][n].y >= touchPoint.y && touchPoint.y >= window.layout[i][n].y - window.eleSize) {
            if (!window.buildLevel[i][n].sign || window.buildLevel[i][n].sign == 0) {
              window.buildLevel[i][n].sign = that.selectEle;
            } else if (window.buildLevel[i][n].sign == 3 && window.buildLevel[i][n].cover == null && that.selectEle != 1 && that.selectEle != 3) {
              window.buildLevel[i][n].sign = that.selectEle;
              window.buildLevel[i][n].cover = that.selectEle;
            } else {
              window.buildLevel[i][n].sign = 0;
              window.buildLevel[i][n].cover = null;
            }
          }
        }
      }

      that.renderLayout(window.buildLevel); //点击放置元素

      if (that.wallEle.getBoundingBoxToWorld().x <= location.x && location.x <= that.wallEle.getBoundingBoxToWorld().x + that.wallEle.getBoundingBoxToWorld().width && that.wallEle.getBoundingBoxToWorld().y <= location.y && location.y <= that.wallEle.getBoundingBoxToWorld().y + that.wallEle.getBoundingBoxToWorld().height) {
        that.selectEle = 1;
        that.renderSelectEle();
      } else if (that.boxEle.getBoundingBoxToWorld().x <= location.x && location.x <= that.boxEle.getBoundingBoxToWorld().x + that.boxEle.getBoundingBoxToWorld().width && that.boxEle.getBoundingBoxToWorld().y <= location.y && location.y <= that.boxEle.getBoundingBoxToWorld().y + that.boxEle.getBoundingBoxToWorld().height) {
        that.selectEle = 2;
        that.renderSelectEle();
      } else if (that.ballEle.getBoundingBoxToWorld().x <= location.x && location.x <= that.ballEle.getBoundingBoxToWorld().x + that.ballEle.getBoundingBoxToWorld().width && that.ballEle.getBoundingBoxToWorld().y <= location.y && location.y <= that.ballEle.getBoundingBoxToWorld().y + that.ballEle.getBoundingBoxToWorld().height) {
        that.selectEle = 3;
        that.renderSelectEle();
      } else if (that.upEle.getBoundingBoxToWorld().x <= location.x && location.x <= that.upEle.getBoundingBoxToWorld().x + that.upEle.getBoundingBoxToWorld().width && that.upEle.getBoundingBoxToWorld().y <= location.y && location.y <= that.upEle.getBoundingBoxToWorld().y + that.upEle.getBoundingBoxToWorld().height) {
        that.selectEle = 4;
        that.renderSelectEle();
      } else if (that.rightEle.getBoundingBoxToWorld().x <= location.x && location.x <= that.rightEle.getBoundingBoxToWorld().x + that.rightEle.getBoundingBoxToWorld().width && that.rightEle.getBoundingBoxToWorld().y <= location.y && location.y <= that.rightEle.getBoundingBoxToWorld().y + that.rightEle.getBoundingBoxToWorld().height) {
        that.selectEle = 5;
        that.renderSelectEle();
      } else if (that.downEle.getBoundingBoxToWorld().x <= location.x && location.x <= that.downEle.getBoundingBoxToWorld().x + that.downEle.getBoundingBoxToWorld().width && that.downEle.getBoundingBoxToWorld().y <= location.y && location.y <= that.downEle.getBoundingBoxToWorld().y + that.downEle.getBoundingBoxToWorld().height) {
        that.selectEle = 6;
        that.renderSelectEle();
      } else if (that.leftEle.getBoundingBoxToWorld().x <= location.x && location.x <= that.leftEle.getBoundingBoxToWorld().x + that.leftEle.getBoundingBoxToWorld().width && that.leftEle.getBoundingBoxToWorld().y <= location.y && location.y <= that.leftEle.getBoundingBoxToWorld().y + that.leftEle.getBoundingBoxToWorld().height) {
        that.selectEle = 7;
        that.renderSelectEle();
      }
    }, this);
  },
  renderSelectEle: function renderSelectEle() {
    this.wallEle.color = new cc.Color().fromHEX("#95D52F");
    this.boxEle.color = new cc.Color().fromHEX("#95D52F");
    this.ballEle.color = new cc.Color().fromHEX("#95D52F");
    this.upEle.color = new cc.Color().fromHEX("#95D52F");
    this.rightEle.color = new cc.Color().fromHEX("#95D52F");
    this.downEle.color = new cc.Color().fromHEX("#95D52F");
    this.leftEle.color = new cc.Color().fromHEX("#95D52F");

    switch (this.selectEle) {
      case 1:
        this.wallEle.color = new cc.Color().fromHEX("#FFFFFF");
        break;

      case 2:
        this.boxEle.color = new cc.Color().fromHEX("#FFFFFF");
        break;

      case 3:
        this.ballEle.color = new cc.Color().fromHEX("#FFFFFF");
        break;

      case 4:
        this.upEle.color = new cc.Color().fromHEX("#FFFFFF");
        break;

      case 5:
        this.rightEle.color = new cc.Color().fromHEX("#FFFFFF");
        break;

      case 6:
        this.downEle.color = new cc.Color().fromHEX("#FFFFFF");
        break;

      case 7:
        this.leftEle.color = new cc.Color().fromHEX("#FFFFFF");
        break;
    }
  },
  back: function back() {
    window.from = 'build';
    cc.director.loadScene("main");
  },
  renderLayout: function renderLayout(layout) {
    this.renderBg();

    for (var i = 0; i < window.blockNum; i++) {
      for (var n = 0; n < window.blockNum; n++) {
        var x = window.layout[i][n].x;
        var y = window.layout[i][n].y;

        switch (layout[i][n].sign) {
          case 0:
            var newBlock = cc.instantiate(this.block);
            newBlock.setPosition(x, y);
            this.node.addChild(newBlock);
            break;

          case 1:
            var newWall = cc.instantiate(this.wall);
            newWall.setPosition(x, y);
            this.node.addChild(newWall);
            break;

          case 2:
            var newBox = cc.instantiate(this.box);
            newBox.setPosition(x, y);
            this.node.addChild(newBox);
            break;

          case 3:
            var newBall = cc.instantiate(this.ball);
            newBall.setPosition(x, y);
            this.node.addChild(newBall);
            break;

          case 4:
            var newRoleUp = cc.instantiate(this.roleUp);
            newRoleUp.setPosition(x, y);
            this.node.addChild(newRoleUp);
            break;

          case 5:
            var newRoleRight = cc.instantiate(this.roleRight);
            newRoleRight.setPosition(x, y);
            this.node.addChild(newRoleRight);
            break;

          case 6:
            var newRoleDown = cc.instantiate(this.roleDown);
            newRoleDown.setPosition(x, y);
            this.node.addChild(newRoleDown);
            break;

          case 7:
            var newRoleLeft = cc.instantiate(this.roleLeft);
            newRoleLeft.setPosition(x, y);
            this.node.addChild(newRoleLeft);
            break;
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnVpbGQuanMiXSwibmFtZXMiOlsid2luZG93IiwiZWxlU2l6ZSIsImxheW91dCIsIkFycmF5IiwiYmxvY2tOdW0iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJsb2NrIiwidHlwZSIsIlByZWZhYiIsImRpc3BsYXlOYW1lIiwid2FsbCIsImJveCIsImJhbGwiLCJyb2xlVXAiLCJyb2xlUmlnaHQiLCJyb2xlRG93biIsInJvbGVMZWZ0IiwicG9zaXRpb24iLCJnYW1lQm4iLCJTcHJpdGUiLCJib3hOdW0iLCJzZWxlY3RFbGUiLCJ3YWxsRWxlIiwiYm94RWxlIiwiYmFsbEVsZSIsInVwRWxlIiwicmlnaHRFbGUiLCJkb3duRWxlIiwibGVmdEVsZSIsIm9uTG9hZCIsInRoYXQiLCJpbml0V2luRWxlIiwicmVuZGVyQmciLCJmcm9tIiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsImJ1aWxkTGV2ZWwiLCJkYXRhIiwicmVuZGVyTGF5b3V0IiwiZmluZCIsIm5vZGUiLCJoZWlnaHQiLCJ3aW5TaXplIiwid2lkdGgiLCJzdGFydCIsImFkZEV2ZW50IiwicmVuZGVyU2VsZWN0RWxlIiwicmVhbFNpeiIsImkiLCJuIiwieCIsInkiLCJzaWduIiwiY292ZXIiLCJpbml0UG9zaXRpb24iLCJsZW5ndGgiLCJzdGFydFgiLCJzdGFydFkiLCJuZXdCbG9jayIsImluc3RhbnRpYXRlIiwic2V0UG9zaXRpb24iLCJhZGRDaGlsZCIsInJlbmRlckJuIiwiZ2V0Q29tcG9uZW50IiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImJnVXJsQmFzZSIsImVyciIsInRleHR1cmUiLCJzcHJpdGUiLCJTcHJpdGVGcmFtZSIsInJlY3QiLCJzcHJpdGVGcmFtZSIsIm9uIiwiYmFjayIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJiYWxsTnVtIiwicm9sZU51bSIsInNldFN0b3JhZ2UiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImV2ZW50IiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsInRvdWNoUG9pbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsImNvbG9yIiwiQ29sb3IiLCJmcm9tSEVYIiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBakI7QUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLElBQUlDLEtBQUosRUFBaEI7QUFDQUgsTUFBTSxDQUFDSSxRQUFQLEdBQWtCLEVBQWxCO0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZOO0FBR0hDLE1BQUFBLFdBQVcsRUFBQztBQUhULEtBREM7QUFNUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUDtBQUdGQyxNQUFBQSxXQUFXLEVBQUM7QUFIVixLQU5FO0FBV1JFLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRlI7QUFHREMsTUFBQUEsV0FBVyxFQUFDO0FBSFgsS0FYRztBQWdCUkcsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGTCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUDtBQUdGQyxNQUFBQSxX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QUFDQXFGLFlBQUFBLFlBQVksQ0FBQ3BDLFdBQWIsQ0FBeUJWLENBQXpCLEVBQTJCQyxDQUEzQjtBQUNBLGlCQUFLWCxJQUFMLENBQVVxQixRQUFWLENBQW1CbUMsWUFBbkI7QUFDQTs7QUFDSixlQUFLLENBQUw7QUFDSSxnQkFBSUMsV0FBVyxHQUFHbEcsRUFBRSxDQUFDNEQsV0FBSCxDQUFlLEtBQUsvQyxRQUFwQixDQUFsQjtBQUNBcUYsWUFBQUEsV0FBVyxDQUFDckMsV0FBWixDQUF3QlYsQ0FBeEIsRUFBMEJDLENBQTFCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVXFCLFFBQVYsQ0FBbUJvQyxXQUFuQjtBQUNBOztBQUNKLGVBQUssQ0FBTDtBQUNJLGdCQUFJQyxXQUFXLEdBQUduRyxFQUFFLENBQUM0RCxXQUFILENBQWUsS0FBSzlDLFFBQXBCLENBQWxCO0FBQ0FxRixZQUFBQSxXQUFXLENBQUN0QyxXQUFaLENBQXdCVixDQUF4QixFQUEwQkMsQ0FBMUI7QUFDQSxpQkFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQnFDLFdBQW5CO0FBQ0E7QUF4Q1I7QUEwQ0g7QUFDSjtBQUVKO0FBblpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQge0xvYWRpbmcsIFRvYXN0fSBmcm9tIFwiLi9jb21tb25cIjtcclxud2luZG93LmVsZVNpemUgPSAzNTtcclxud2luZG93LmxheW91dCA9IG5ldyBBcnJheSgpO1xyXG53aW5kb3cuYmxvY2tOdW0gPSAxMjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBibG9jazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidibG9jaydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTond2FsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidib3gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWxsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JhbGwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlVXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVVwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZVJpZ2h0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVSaWdodCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVEb3duOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVEb3duJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZUxlZnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZUxlZnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnYW1lQm46Y2MuU3ByaXRlLFxyXG4gICAgICAgIGJveE51bTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RFbGU6IDEsXHJcbiAgICAgICAgd2FsbEVsZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgYm94RWxlOmNjLlByZWZhYixcclxuICAgICAgICBiYWxsRWxlOmNjLlByZWZhYixcclxuICAgICAgICB1cEVsZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmlnaHRFbGU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIGRvd25FbGU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIGxlZnRFbGU6Y2MuUHJlZmFiLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0V2luRWxlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJCZygpO1xyXG4gICAgICAgIC8vIHRoaXMucmVuZGVyQm4oKTtcclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnZ2FtZScpe1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTonYnVpbGRMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWwgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5idWlsZExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ2J0bnMnLHRoaXMubm9kZSkuaGVpZ2h0ID0gIChjYy53aW5TaXplLmhlaWdodCAtIGNjLndpblNpemUud2lkdGgpLzI7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICBpbml0V2luRWxlKCl7XHJcbiAgICAgICAgbGV0IHJlYWxTaXogPSBjYy53aW5TaXplLndpZHRoL3dpbmRvdy5ibG9ja051bTtcclxuICAgICAgICB3aW5kb3cuZWxlU2l6ZSA9IHJlYWxTaXo7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0gPSB7eDowLHk6MCxzaWduOjAsY292ZXI6bnVsbH1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dID0ge3g6MCx5OjAsc2lnbjowLGNvdmVyOm51bGx9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdFBvc2l0aW9uKGxheW91dCl7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt9O1xyXG4gICAgICAgIHRoaXMuYm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGxheW91dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCBsYXlvdXRbMF0ubGVuZ3RoOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgLy9sYXlvdXRbaV1bbl0uc2lnbiAtLSDkurrniankvY3nva5cclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFtpXVtuXS5zaWduID09IDQgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNSB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA2IHx8IGxheW91dFtpXVtuXS5zaWduID09IDcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v566x5a2Q5pWw6YePXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveE51bSArKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyQmcoKXtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLShjYy53aW5TaXplLndpZHRoLzIpO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSAod2luZG93LmVsZVNpemUqd2luZG93LmJsb2NrTnVtKS8yO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCB3aW5kb3cuYmxvY2tOdW07IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IG4qd2luZG93LmVsZVNpemUgKyBzdGFydFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IC1pKndpbmRvdy5lbGVTaXplICsgc3RhcnRZO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbjowLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgLy8g5Li66K6+572u5L2N572uXHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHJlbmRlckJuKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZUJuID09IG51bGwpIHRoaXMuZ2FtZUJuID0gY2MuZmluZCgnQ2FudmFzL2J1aWxkQmcvZ2FtZUJuJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh3aW5kb3cuYmdVcmxCYXNlKyAnXzQwMHgyNDAuanBnJywgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlLCBjYy5yZWN0KDAsMCw0MDAsMjQwKSk7XHJcbiAgICAgICAgICAgIHRoYXQuZ2FtZUJuLnNwcml0ZUZyYW1lID0gc3ByaXRlOyAvL+iuvue9rueyvueBtee7hOS7tuWbvueJh+i1hOa6kFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYodGhpcy53YWxsRWxlID09IG51bGwpIHRoaXMud2FsbEVsZSA9ICBjYy5maW5kKCdidG5zL3dhbGxXcmFwJyx0aGlzLm5vZGUpO1xyXG4gICAgICAgIGlmKHRoaXMuYm94RWxlID09IG51bGwpIHRoaXMuYm94RWxlID0gIGNjLmZpbmQoJ2J0bnMvYm94V3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMuYmFsbEVsZSA9PSBudWxsKSB0aGlzLmJhbGxFbGUgPSAgY2MuZmluZCgnYnRucy9iYWxsV3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMudXBFbGUgPT0gbnVsbCkgdGhpcy51cEVsZSA9ICBjYy5maW5kKCdidG5zL3VwV3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMucmlnaHRFbGUgPT0gbnVsbCkgdGhpcy5yaWdodEVsZSA9ICBjYy5maW5kKCdidG5zL3JpZ2h0V3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMuZG93bkVsZSA9PSBudWxsKSB0aGlzLmRvd25FbGUgPSAgY2MuZmluZCgnYnRucy9kb3duV3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMubGVmdEVsZSA9PSBudWxsKSB0aGlzLmxlZnRFbGUgPSAgY2MuZmluZCgnYnRucy9sZWZ0V3JhcCcsdGhpcy5ub2RlKVxyXG5cclxuICAgICAgICBjYy5maW5kKCdiYWNrJyx0aGlzLm5vZGUpLm9uKCdjbGljaycsdGhpcy5iYWNrLCB0aGlzKVxyXG4gICAgICAgIGNjLmZpbmQoJ2J0bnMvY2xlYXInLHRoaXMubm9kZSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGF0LmluaXRXaW5FbGUoKTtcclxuICAgICAgICAgICAgdGhhdC5yZW5kZXJCZygpO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ2J0bnMvcGxheScsdGhpcy5ub2RlKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJveE51bSA9MCxiYWxsTnVtID0gMCxyb2xlTnVtID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9PSAzIHx8IHdpbmRvdy5idWlsZExldmVsW2ldW25dLmNvdmVyICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbE51bSArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduID49IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU51bSArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpID09IHdpbmRvdy5ibG9ja051bS0xICYmIG4gPT0gd2luZG93LmJsb2NrTnVtLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocm9sZU51bTw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+acqua3u+WKoOS6uueJqScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihib3hOdW0gIT0gYmFsbE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+euseWtkOWSjOeQg+S9k+aVsOmHj+S4jeS4gOiHtCcsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYm94TnVtIDwgMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+euseWtkOaVsOmHj+S4jeiDveWwkeS6juS4ieS4qicsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnYnVpbGRMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogd2luZG93LmJ1aWxkTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdidWlsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hlbmQnLGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAvL+S4lueVjOWdkOagh1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgICAgIC8v5pys5Zyw5Z2Q5qCHXHJcbiAgICAgICAgICAgIGxldCB0b3VjaFBvaW50ID0gY2MuZmluZCgnQ2FudmFzJykuY29udmVydFRvTm9kZVNwYWNlQVIobG9jYXRpb24pO1xyXG4gICAgICAgICAgICAvL+eCueWHu+aUvue9ruWMuuWfn1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIoOmZpOWJjemdoua3u+WKoOeahOS6uueJqVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sYXlvdXRbMF1bMF0ueCA8PSB0b3VjaFBvaW50LnggJiYgdG91Y2hQb2ludC54IDw9IHdpbmRvdy5sYXlvdXRbMF1bd2luZG93LmJsb2NrTnVtLTFdLnggKyB3aW5kb3cuZWxlU2l6ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0WzBdWzBdLnkgPj0gdG91Y2hQb2ludC55ICYmIHRvdWNoUG9pbnQueSA+PSB3aW5kb3cubGF5b3V0W3dpbmRvdy5ibG9ja051bS0xXVt3aW5kb3cuYmxvY2tOdW0tMV0ueSAtIHdpbmRvdy5lbGVTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LnNlbGVjdEVsZSA+PSA0ICYmIHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPj0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mlL7nva7lhYPntKBcclxuICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGF5b3V0W2ldW25dLnggPD0gdG91Y2hQb2ludC54ICYmIHRvdWNoUG9pbnQueCA8PSB3aW5kb3cubGF5b3V0W2ldW25dLnggKyB3aW5kb3cuZWxlU2l6ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldW25dLnkgPj0gdG91Y2hQb2ludC55ICYmIHRvdWNoUG9pbnQueSA+PSB3aW5kb3cubGF5b3V0W2ldW25dLnkgLSB3aW5kb3cuZWxlU2l6ZVxyXG4gICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKCF3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduIHx8IHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduID0gdGhhdC5zZWxlY3RFbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPT0gMyAmJiB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5jb3ZlciA9PSBudWxsICYmICh0aGF0LnNlbGVjdEVsZSAhPSAxICYmIHRoYXQuc2VsZWN0RWxlICE9IDMpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPSB0aGF0LnNlbGVjdEVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dLmNvdmVyID0gdGhhdC5zZWxlY3RFbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuYnVpbGRMZXZlbClcclxuXHJcbiAgICAgICAgICAgIC8v54K55Ye75pS+572u5YWD57SgXHJcbiAgICAgICAgICAgIGlmKHRoYXQud2FsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQud2FsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQud2FsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKFxyXG4gICAgICAgICAgICAgICAgdGhhdC5ib3hFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LmJveEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQuYm94RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICB0aGF0LmJveEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQuYm94RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC5ib3hFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuaGVpZ2h0XHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdEVsZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclNlbGVjdEVsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoXHJcbiAgICAgICAgICAgICAgICB0aGF0LmJhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LmJhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCt0aGF0LmJhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHRoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55K3RoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5oZWlnaHRcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0RWxlID0gMztcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyU2VsZWN0RWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihcclxuICAgICAgICAgICAgICAgIHRoYXQudXBFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LnVwRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLngrdGhhdC51cEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC51cEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQudXBFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueSt0aGF0LnVwRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKFxyXG4gICAgICAgICAgICAgICAgdGhhdC5yaWdodEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQucmlnaHRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCt0aGF0LnJpZ2h0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICB0aGF0LnJpZ2h0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC5yaWdodEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55K3RoYXQucmlnaHRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuaGVpZ2h0XHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdEVsZSA9IDU7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclNlbGVjdEVsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoXHJcbiAgICAgICAgICAgICAgICB0aGF0LmRvd25FbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LmRvd25FbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCt0aGF0LmRvd25FbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHRoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55K3RoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5oZWlnaHRcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0RWxlID0gNjtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyU2VsZWN0RWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihcclxuICAgICAgICAgICAgICAgIHRoYXQubGVmdEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQubGVmdEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQubGVmdEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgIH0sXHJcbiAgICByZW5kZXJTZWxlY3RFbGUoKXtcclxuICAgICAgICB0aGlzLndhbGxFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzk1RDUyRlwiKTtcclxuICAgICAgICB0aGlzLmJveEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjOTVENTJGXCIpO1xyXG4gICAgICAgIHRoaXMuYmFsbEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjOTVENTJGXCIpO1xyXG4gICAgICAgIHRoaXMudXBFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzk1RDUyRlwiKTtcclxuICAgICAgICB0aGlzLnJpZ2h0RWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcbiAgICAgICAgdGhpcy5kb3duRWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcbiAgICAgICAgdGhpcy5sZWZ0RWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnNlbGVjdEVsZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMud2FsbEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYm94RWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsRWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd25FbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrKCl7XHJcbiAgICAgICAgd2luZG93LmZyb20gPSAnYnVpbGQnXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXJMYXlvdXQobGF5b3V0KXtcclxuICAgICAgICB0aGlzLnJlbmRlckJnKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gd2luZG93LmxheW91dFtpXVtuXS54O1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSB3aW5kb3cubGF5b3V0W2ldW25dLnk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gobGF5b3V0W2ldW25dLnNpZ24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1dhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdXYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdXYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCb3guc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0JveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0JhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZVVwID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlVXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlVXAuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1JvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVSaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVJpZ2h0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlRG93biA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlRG93bi5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlTGVmdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlTGVmdC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levelItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2cfd6DcvT5OTYgzh6qWc2QW', 'levelItem');
// scripts/levelItem.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    levelNum: null,
    levelLock: null
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  init: function init() {
    this.levelNum = cc.find("levelNum", this.node).getComponent(cc.Label);
    this.levelNum.string = '1';
    this.levelLock = cc.find("levelLock", this.node);
    this.levelLock.opacity = 0;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGV2ZWxOdW0iLCJsZXZlbExvY2siLCJzdGFydCIsImluaXQiLCJmaW5kIiwibm9kZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBQyxJQUREO0FBRVJDLElBQUFBLFNBQVMsRUFBQztBQUZGLEdBSFA7QUFRTDtBQUNBO0FBQ0FDLEVBQUFBLEtBVkssbUJBVUksQ0FDUixDQVhJO0FBWUxDLEVBQUFBLElBWkssa0JBWUM7QUFDSCxTQUFLSCxRQUFMLEdBQWdCSixFQUFFLENBQUNRLElBQUgsQ0FBUSxVQUFSLEVBQW1CLEtBQUtDLElBQXhCLEVBQThCQyxZQUE5QixDQUEyQ1YsRUFBRSxDQUFDVyxLQUE5QyxDQUFoQjtBQUNBLFNBQUtQLFFBQUwsQ0FBY1EsTUFBZCxHQUF1QixHQUF2QjtBQUNBLFNBQUtQLFNBQUwsR0FBaUJMLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRLFdBQVIsRUFBb0IsS0FBS0MsSUFBekIsQ0FBakI7QUFDQSxTQUFLSixTQUFMLENBQWVRLE9BQWYsR0FBeUIsQ0FBekI7QUFDRixHQWpCSSxDQWtCTDs7QUFsQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxldmVsTnVtOm51bGwsXHJcbiAgICAgICAgbGV2ZWxMb2NrOm51bGxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9LFxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgdGhpcy5sZXZlbE51bSA9IGNjLmZpbmQoXCJsZXZlbE51bVwiLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgIHRoaXMubGV2ZWxOdW0uc3RyaW5nID0gJzEnO1xyXG4gICAgICAgdGhpcy5sZXZlbExvY2sgPSBjYy5maW5kKFwibGV2ZWxMb2NrXCIsdGhpcy5ub2RlKTtcclxuICAgICAgIHRoaXMubGV2ZWxMb2NrLm9wYWNpdHkgPSAwO1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/eleSize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '492ddrnQNVDwqTjOokjYqHi', 'eleSize');
// scripts/eleSize.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.node.width = this.node.height = window.eleSize;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZWxlU2l6ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwibm9kZSIsIndpZHRoIiwiaGVpZ2h0Iiwid2luZG93IiwiZWxlU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFNTDtBQUVBO0FBRUFDLEVBQUFBLEtBVkssbUJBVUk7QUFDTCxTQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBa0IsS0FBS0QsSUFBTCxDQUFVRSxNQUFWLEdBQW1CQyxNQUFNLENBQUNDLE9BQTVDO0FBQ0gsR0FaSSxDQWVMOztBQWZLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gdGhpcy5ub2RlLmhlaWdodCA9IHdpbmRvdy5lbGVTaXplO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db8b31XBphC44pnJIdLHrEO', 'common');
// scripts/common.js

"use strict";

exports.__esModule = true;
exports.wxLogin = wxLogin;
exports.Toast = Toast;
exports.formateRankTime = formateRankTime;
exports.Loading = void 0;

/**
 * wx授权登陆
 * @param _success 登陆成功返回回调 第一个参数是wx用户信息
 * @param _fail 拒绝授权返回
 */
function wxLogin(_success, _fail, node) {
  if (cc.sys.platform !== cc.sys.WECHAT_GAME) return; //微信登陆

  var wx = window['wx']; //避开ts语法检测

  var info = wx.getSystemInfoSync(); //立即获取系统信息

  var w = info.screenWidth; //屏幕宽

  var h = info.screenHeight; //屏幕高

  var eleW = node.width * 2 / 1080 * w;
  var eleH = node.height * 2 / 2400 * h;
  var left = w / 2 - eleW / 2;
  var top = h / 2 - eleH / 2 - node.y / 2400 * h + node.y / 2400 * h * 0.25; //获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。

  wx.getSetting({
    success: function success(res) {
      if (res.authSetting["scope.userInfo"]) {
        wx.getUserInfo({
          success: function success(res) {
            //登陆操作
            // userInfo = res.userInfo;
            _success && _success(res.userInfo);
          }
        });
        return false;
      } else {
        //创建全屏透明登陆按钮
        var button = wx.createUserInfoButton({
          type: 'text',
          text: '',
          style: {
            left: parseInt(left),
            top: parseInt(top),
            width: parseInt(eleW),
            height: parseInt(eleH),
            backgroundColor: '#00000000',
            //最后两位为透明度
            color: '#ffffff',
            fontSize: 20,
            textAlign: "center",
            lineHeight: parseInt(eleH)
          }
        });
        button.onTap(function (res) {
          if (res.userInfo) {
            _success && _success(res.userInfo);
            button.destroy();
          } else {
            _fail && _fail();
          }
        });
        window.wxLoginBtn = button;
      }
    }
  });
}

function Toast(text, time) {
  var CanvasNode = cc.find('Canvas');

  if (!CanvasNode) {
    cc.console('find Canvas error');
    return;
  }

  var wx = window['wx']; //避开ts语法检测

  var info = wx.getSystemInfoSync(); //立即获取系统信息

  var w = info.screenWidth; //屏幕宽

  var h = info.screenHeight; //屏幕高

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
    var toastBg = cc.find('background', newMyPrefab).getComponent(cc.Graphics);
    var toastText = cc.find("text", newMyPrefab);
    toastText.getComponent(cc.Label).string = text;
    CanvasNode.addChild(newMyPrefab);
    toastBg.roundRect(-(toastText.width + 80) / 2, -(toastText.height + 40) / 2, toastText.width + 80, toastText.height + 40, (toastText.height + 40) / 2);
    toastBg.fillColor = cc.Color.BLACK;
    toastBg.fill();
    var timer = setTimeout(function () {
      newMyPrefab.removeFromParent();
      newMyPrefab.destroy();
      clearTimeout(timer);
      timer = null;
    }, time);
  };

  cc.loader.loadRes('toast', onResourceLoaded);
}

var Loading = {
  ele: null,
  hideFlage: false,
  show: function show() {
    Loading.hideFlage = false;
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

      if (!Loading.hideFlage) {
        CanvasNode.addChild(newMyPrefab);
        Loading.ele = newMyPrefab;
      } else {
        newMyPrefab.destroy();
      }
    };

    cc.loader.loadRes('loading', onResourceLoaded);
  },
  hide: function hide() {
    if (Loading.ele) {
      Loading.ele.removeFromParent();
      Loading.ele.destroy();
      Loading.ele = null;
    }

    Loading.hideFlage = true;
  }
};
exports.Loading = Loading;

function formateRankTime(timestamp) {
  var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000

  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() + '\n';
  var h = date.getHours() + ':';
  var m = date.getMinutes() + ':';
  var s = date.getSeconds();
  if (h.length <= 1) h = '0' + h;
  if (m.length <= 1) m = '0' + m;
  if (s.length <= 1) s = '0' + s;
  return Y + M + D + h + m + s;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uLmpzIl0sIm5hbWVzIjpbInd4TG9naW4iLCJfc3VjY2VzcyIsIl9mYWlsIiwibm9kZSIsImNjIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwid2luZG93IiwiaW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwidyIsInNjcmVlbldpZHRoIiwiaCIsInNjcmVlbkhlaWdodCIsImVsZVciLCJ3aWR0aCIsImVsZUgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwieSIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiYnV0dG9uIiwiY3JlYXRlVXNlckluZm9CdXR0b24iLCJ0eXBlIiwidGV4dCIsInN0eWxlIiwicGFyc2VJbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsIm9uVGFwIiwiZGVzdHJveSIsInd4TG9naW5CdG4iLCJUb2FzdCIsInRpbWUiLCJDYW52YXNOb2RlIiwiZmluZCIsImNvbnNvbGUiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJQcmVmYWIiLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwidG9hc3RCZyIsImdldENvbXBvbmVudCIsIkdyYXBoaWNzIiwidG9hc3RUZXh0IiwiTGFiZWwiLCJzdHJpbmciLCJhZGRDaGlsZCIsInJvdW5kUmVjdCIsImZpbGxDb2xvciIsIkNvbG9yIiwiQkxBQ0siLCJmaWxsIiwidGltZXIiLCJzZXRUaW1lb3V0IiwicmVtb3ZlRnJvbVBhcmVudCIsImNsZWFyVGltZW91dCIsImxvYWRlciIsImxvYWRSZXMiLCJMb2FkaW5nIiwiZWxlIiwiaGlkZUZsYWdlIiwic2hvdyIsImhpZGUiLCJmb3JtYXRlUmFua1RpbWUiLCJ0aW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIlkiLCJnZXRGdWxsWWVhciIsIk0iLCJnZXRNb250aCIsIkQiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxPQUFULENBQWlCQyxRQUFqQixFQUEyQkMsS0FBM0IsRUFBaUNDLElBQWpDLEVBQXVDO0FBQzFDLE1BQUlDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxRQUFQLEtBQW9CRixFQUFFLENBQUNDLEdBQUgsQ0FBT0UsV0FBL0IsRUFBNEMsT0FERixDQUUxQzs7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQyxJQUFELENBQWpCLENBSDBDLENBR2xCOztBQUN4QixNQUFNQyxJQUFJLEdBQUlGLEVBQUUsQ0FBQ0csaUJBQUgsRUFBZCxDQUowQyxDQUlMOztBQUNyQyxNQUFNQyxDQUFDLEdBQUlGLElBQUksQ0FBQ0csV0FBaEIsQ0FMMEMsQ0FLZDs7QUFDNUIsTUFBTUMsQ0FBQyxHQUFJSixJQUFJLENBQUNLLFlBQWhCLENBTjBDLENBTWI7O0FBQzdCLE1BQU1DLElBQUksR0FBSWIsSUFBSSxDQUFDYyxLQUFMLEdBQVcsQ0FBWCxHQUFhLElBQWQsR0FBc0JMLENBQW5DO0FBQ0EsTUFBTU0sSUFBSSxHQUFJZixJQUFJLENBQUNnQixNQUFMLEdBQVksQ0FBWixHQUFjLElBQWYsR0FBdUJMLENBQXBDO0FBQ0EsTUFBTU0sSUFBSSxHQUFHUixDQUFDLEdBQUMsQ0FBRixHQUFNSSxJQUFJLEdBQUMsQ0FBeEI7QUFDQSxNQUFNSyxHQUFHLEdBQUdQLENBQUMsR0FBQyxDQUFGLEdBQU1JLElBQUksR0FBQyxDQUFYLEdBQWdCZixJQUFJLENBQUNtQixDQUFMLEdBQU8sSUFBUixHQUFjUixDQUE3QixHQUFpQ1gsSUFBSSxDQUFDbUIsQ0FBTCxHQUFPLElBQVIsR0FBY1IsQ0FBZixHQUFrQixJ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aEIsTUFBR0UsQ0FBQyxDQUFDRSxNQUFGLElBQVUsQ0FBYixFQUFnQkYsQ0FBQyxHQUFHLE1BQUlBLENBQVI7QUFFaEIsU0FBT1QsQ0FBQyxHQUFDRSxDQUFGLEdBQUlFLENBQUosR0FBTXhFLENBQU4sR0FBUTJFLENBQVIsR0FBVUUsQ0FBakI7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIHd45o6I5p2D55m76ZmGXHJcbiAqIEBwYXJhbSBfc3VjY2VzcyDnmbvpmYbmiJDlip/ov5Tlm57lm57osIMg56ys5LiA5Liq5Y+C5pWw5pivd3jnlKjmiLfkv6Hmga9cclxuICogQHBhcmFtIF9mYWlsIOaLkue7neaOiOadg+i/lOWbnlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHd4TG9naW4oX3N1Y2Nlc3MsIF9mYWlsLG5vZGUpIHtcclxuICAgIGlmIChjYy5zeXMucGxhdGZvcm0gIT09IGNjLnN5cy5XRUNIQVRfR0FNRSkgcmV0dXJuO1xyXG4gICAgLy/lvq7kv6HnmbvpmYZcclxuICAgIGNvbnN0IHd4ID0gd2luZG93Wyd3eCddOy8v6YG/5byAdHPor63ms5Xmo4DmtYtcclxuICAgIGNvbnN0IGluZm8gID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTsvL+eri+WNs+iOt+WPluezu+e7n+S/oeaBr1xyXG4gICAgY29uc3QgdyAgPSBpbmZvLnNjcmVlbldpZHRoOy8v5bGP5bmV5a69XHJcbiAgICBjb25zdCBoICA9IGluZm8uc2NyZWVuSGVpZ2h0Oy8v5bGP5bmV6auYXHJcbiAgICBjb25zdCBlbGVXID0gKG5vZGUud2lkdGgqMi8xMDgwKSAqIHc7XHJcbiAgICBjb25zdCBlbGVIID0gKG5vZGUuaGVpZ2h0KjIvMjQwMCkgKiBoO1xyXG4gICAgY29uc3QgbGVmdCA9IHcvMiAtIGVsZVcvMjtcclxuICAgIGNvbnN0IHRvcCA9IGgvMiAtIGVsZUgvMiAtIChub2RlLnkvMjQwMCkqaCsoKG5vZGUueS8yNDAwKSpoKSowLjI1O1xyXG5cclxuICAgIC8v6I635Y+W55So5oi355qE5b2T5YmN6K6+572u44CC6L+U5Zue5YC85Lit5Y+q5Lya5Ye6546w5bCP56iL5bqP5bey57uP5ZCR55So5oi36K+35rGC6L+H55qE5p2D6ZmQ44CCXHJcbiAgICB3eC5nZXRTZXR0aW5nKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55m76ZmG5pON5L2cXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdWNjZXNzICYmIF9zdWNjZXNzKHJlcy51c2VySW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WIm+W7uuWFqOWxj+mAj+aYjueZu+mZhuaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSB3eC5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwYXJzZUludChsZWZ0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcGFyc2VJbnQodG9wKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludChlbGVXKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGFyc2VJbnQoZWxlSCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwMDAnLC8v5pyA5ZCO5Lik5L2N5Li66YCP5piO5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogcGFyc2VJbnQoZWxlSCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLm9uVGFwKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VySW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3N1Y2Nlc3MgJiYgX3N1Y2Nlc3MocmVzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZmFpbCAmJiBfZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lnd4TG9naW5CdG4gPSBidXR0b247XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb2FzdCh0ZXh0LHRpbWUpIHtcclxuICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCB3eCA9IHdpbmRvd1snd3gnXTsvL+mBv+W8gHRz6K+t5rOV5qOA5rWLXHJcbiAgICBjb25zdCBpbmZvICA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7Ly/nq4vljbPojrflj5bns7vnu5/kv6Hmga9cclxuICAgIGNvbnN0IHcgID0gaW5mby5zY3JlZW5XaWR0aDsvL+Wxj+W5leWuvVxyXG4gICAgY29uc3QgaCAgPSBpbmZvLnNjcmVlbkhlaWdodDsvL+Wxj+W5lemrmFxyXG4gICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgIHtcclxuICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgbGV0IHRvYXN0QmcgPSBjYy5maW5kKCdiYWNrZ3JvdW5kJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBsZXQgdG9hc3RUZXh0ID0gIGNjLmZpbmQoXCJ0ZXh0XCIsbmV3TXlQcmVmYWIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRvYXN0VGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRleHQ7XHJcbiAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB0b2FzdEJnLnJvdW5kUmVjdChcclxuICAgICAgICAgICAgLSggdG9hc3RUZXh0LndpZHRoICsgODApLzIsXHJcbiAgICAgICAgICAgIC0odG9hc3RUZXh0LmhlaWdodCs0MCkvMixcclxuICAgICAgICAgICAgdG9hc3RUZXh0LndpZHRoICsgODAsXHJcbiAgICAgICAgICAgIHRvYXN0VGV4dC5oZWlnaHQrNDAsXHJcbiAgICAgICAgICAgICh0b2FzdFRleHQuaGVpZ2h0KzQwKS8yXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0b2FzdEJnLmZpbGxDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgIHRvYXN0QmcuZmlsbCgpXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB0aW1lciA9IG51bGw7XHJcbiAgICAgICAgfSx0aW1lKVxyXG4gICAgfTtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKCd0b2FzdCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxufVxyXG5sZXQgTG9hZGluZyA9e1xyXG4gICAgZWxlOm51bGwsXHJcbiAgICBoaWRlRmxhZ2U6ZmFsc2UsXHJcbiAgICBzaG93KCl7XHJcbiAgICAgICAgTG9hZGluZy5oaWRlRmxhZ2UgPSBmYWxzZTtcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcblxyXG4gICAgICAgICAgICBpZighTG9hZGluZy5oaWRlRmxhZ2Upe1xyXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuZWxlID0gbmV3TXlQcmVmYWI7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsb2FkaW5nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIGhpZGUoKXtcclxuICAgICAgICBpZihMb2FkaW5nLmVsZSl7XHJcbiAgICAgICAgICAgIExvYWRpbmcuZWxlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgTG9hZGluZy5lbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBMb2FkaW5nLmVsZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIExvYWRpbmcuaGlkZUZsYWdlID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQge0xvYWRpbmd9O1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ZVJhbmtUaW1lKHRpbWVzdGFtcCl7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7Ly/ml7bpl7TmiLPkuLoxMOS9jemcgCoxMDAw77yM5pe26Ze05oiz5Li6MTPkvY3nmoTor53kuI3pnIDkuZgxMDAwXHJcbiAgICB2YXIgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJztcclxuICAgIHZhciBNID0gKGRhdGUuZ2V0TW9udGgoKSsxIDwgMTAgPyAnMCcrKGRhdGUuZ2V0TW9udGgoKSsxKSA6IGRhdGUuZ2V0TW9udGgoKSsxKSArICctJztcclxuICAgIHZhciBEID0gZGF0ZS5nZXREYXRlKCkgKyAnXFxuJztcclxuICAgIHZhciBoID0gZGF0ZS5nZXRIb3VycygpICsgJzonO1xyXG4gICAgdmFyIG0gPSBkYXRlLmdldE1pbnV0ZXMoKSArICc6JztcclxuICAgIHZhciBzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICBpZihoLmxlbmd0aDw9MSkgaCA9ICcwJytoO1xyXG4gICAgaWYobS5sZW5ndGg8PTEpIG0gPSAnMCcrbTtcclxuICAgIGlmKHMubGVuZ3RoPD0xKSBzID0gJzAnK3M7XHJcblxyXG4gICAgcmV0dXJuIFkrTStEK2grbStzO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
