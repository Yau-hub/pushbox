
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
    rankItem: cc.Prefab,
    buildArea: null,
    solutionBtn: null,
    noneSkipChange: false,
    solutionStepIndex: -1,
    recordSolutionStep: []
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
    this.buildArea = cc.find('Canvas/mainBg/buildArea');
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

        this.buildArea.addChild(newBlock);
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
    this.buildArea.destroyAllChildren();
    this.renderBg();

    for (var i = 0; i < window.blockNum; i++) {
      for (var n = 0; n < window.blockNum; n++) {
        var x = window.layout[i][n].x;
        var y = window.layout[i][n].y;

        switch (layout[i][n].sign) {
          case 0:
            var newBlock = cc.instantiate(this.block);
            newBlock.setPosition(x, y);
            this.buildArea.addChild(newBlock);
            break;

          case 1:
            var newWall = cc.instantiate(this.wall);
            newWall.setPosition(x, y);
            this.buildArea.addChild(newWall);
            break;

          case 2:
            var newBox = cc.instantiate(this.box);
            newBox.setPosition(x, y);
            this.buildArea.addChild(newBox);
            break;

          case 3:
            var newBall = cc.instantiate(this.ball);
            newBall.setPosition(x, y);
            this.buildArea.addChild(newBall);
            break;

          case 4:
            var newRoleUp = cc.instantiate(this.roleUp);
            newRoleUp.setPosition(x, y);
            this.buildArea.addChild(newRoleUp);
            break;

          case 5:
            var newRoleRight = cc.instantiate(this.roleRight);
            newRoleRight.setPosition(x, y);
            this.buildArea.addChild(newRoleRight);
            break;

          case 6:
            var newRoleDown = cc.instantiate(this.roleDown);
            newRoleDown.setPosition(x, y);
            this.buildArea.addChild(newRoleDown);
            break;

          case 7:
            var newRoleLeft = cc.instantiate(this.roleLeft);
            newRoleLeft.setPosition(x, y);
            this.buildArea.addChild(newRoleLeft);
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

    that.renderLayout(layout);
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

    that.renderLayout(layout);
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

    that.renderLayout(layout);
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

    that.renderLayout(layout);
  },
  resetPosition: function resetPosition(direction) {
    var that = this;

    switch (direction) {
      case 'up':
        this.position.y -= 1;
        if (window.from == "uploadSolution") that.recordSolutionStep.push('U');
        break;

      case 'right':
        this.position.x += 1;
        if (window.from == "uploadSolution") that.recordSolutionStep.push('R');
        break;

      case 'down':
        this.position.y += 1;
        if (window.from == "uploadSolution") that.recordSolutionStep.push('D');
        break;

      case 'left':
        this.position.x -= 1;
        if (window.from == "uploadSolution") that.recordSolutionStep.push('L');
        break;
    } //是否开启回退功能


    if (window.from == "uploadSolution" || window.setting.relast && cc.sys.platform === cc.sys.WECHAT_GAME) {
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

    if (this.stepCounter) this.stepCounter.string = "步数：" + this.stepCounterValue;
    var coverBoxNum = 0;

    for (var i = 0; i < window.currentLevel.length; i++) {
      for (var n = 0; n < window.currentLevel[0].length; n++) {
        if (window.currentLevel[i][n].cover && window.currentLevel[i][n].sign == 2) {
          // this.gameOver = false;
          coverBoxNum++;

          if (this.boxNum == coverBoxNum) {
            // console.log('挑战成功')
            this.showResult();
          }
        }
      }
    }

    if (window.moveMusic && !window.moveMusic.paused) window.moveMusic.stop();
    if (window.moveMusic && !window.moveMusic.paused) window.moveMusic.pause();
    if (window.moveMusic) window.moveMusic.play();
  },
  addTouchMove: function addTouchMove() {
    if (!window.setting.touchMove || window.from == "checkSolution") return;
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
  showResult: function showResult(type) {
    var that = this;

    if (that.timeCounterTimer) {
      clearInterval(that.timeCounterTimer);
      that.timeCounterTimer = null;
    }

    if (window.from == "review" || window.from == "checkSolution") {
      (0, _common.Toast)('挑战成功！', 1500);
      return;
    }

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

      if (window.from == 'build') {
        cc.find('contentBg/next/Background/Label', newMyPrefab).getComponent(cc.Label).string = '上传关卡';
        cc.find('contentBg/next', newMyPrefab).on('click', function () {
          // wx.requestSubscribeMessage({
          //     tmplIds: ['bQJbF0VLKfsMdYOaIplnfY0sErvIbZcK8sCzLgshILA'],
          //     success (res) {
          //
          //     }
          // });
          _common.Loading.show();

          wx.request({
            url: cloudFunctionBaseUrl + "/getReviewLevelNum",
            method: 'POST',
            data: {},
            success: function success(res) {
              wx.request({
                url: cloudFunctionBaseUrl + "/addReviewLevel",
                method: 'POST',
                data: {
                  content: window.uploadLevel,
                  useStepNum: that.stepCounterValue,
                  levelIndex: res.data.total + 1,
                  appId: window.user.appId,
                  nickName: window.loginInfo.nickName ? window.loginInfo.nickName : '游客' + window.user.appId.substring(window.user.appId.length - 5),
                  portrait: window.loginInfo.avatarUrl
                },
                success: function success(result) {
                  var levelUploadNum = parseInt(res.data.total) + 1;
                  window.from = 'game';

                  _common.Loading.hide();

                  if (window.createScenseUploadAd) {
                    (0, _common.Toast)('关卡上传成功待审核，关闭广告后跳回主界面', 2000);
                    setTimeout(function () {
                      window.createScenseUploadAd.show()["catch"](function () {
                        cc.director.loadScene('main');
                      });
                      window.createScenseUploadAd.onClose(function (res) {
                        cc.director.loadScene('main');
                      });
                    }, 1500);
                  } else {
                    (0, _common.Toast)('关卡上传成功待管理员审核，即将跳回主界面', 1500);
                    setTimeout(function () {
                      cc.director.loadScene('main');
                    }, 1500);
                  }
                },
                error: function error(err) {
                  _common.Loading.hide();

                  (0, _common.Toast)('上传失败', 1500);
                  console.error(err);
                }
              });
            }
          }); // wx.cloud.callFunction({
          //     name: 'getReviewLevelNum'
          // }).then(res => {
          //
          //     wx.cloud.callFunction({
          //         name: 'addReviewLevel',
          //         data:{
          //             content: window.uploadLevel,
          //             useStepNum: that.stepCounterValue,
          //             levelIndex: res.result.total+1,
          //             appId: window.user.appId,
          //             nickName: window.loginInfo.nickName?window.loginInfo.nickName:'游客'+window.user.appId.substring(window.user.appId.length-5),
          //             portrait: window.loginInfo.avatarUrl,
          //         }
          //     }).then(result => {
          //         let levelUploadNum = parseInt(res.result.total)+1;
          //         window.from = 'game';
          //         Loading.hide();
          //         if (window.createScenseUploadAd) {
          //             Toast('关卡上传成功待审核，关闭广告后跳回主界面',2000);
          //             setTimeout(function () {
          //                 window.createScenseUploadAd.show().catch(()=>{
          //                     cc.director.loadScene('main');
          //                 });
          //                 window.createScenseUploadAd.onClose(res => {
          //                     cc.director.loadScene('main');
          //                 })
          //             },1500)
          //         }else{
          //             Toast('关卡上传成功待管理员审核，即将跳回主界面',1500);
          //             setTimeout(function () {
          //                 cc.director.loadScene('main');
          //             },1500)
          //         }
          //     }).catch(err => {
          //         Loading.hide();
          //         Toast('上传失败',1500);
          //         console.error(err)
          //     })
          //
          // }).catch(err => {
          //     console.error(err)
          // })
        }, this);
      } else if (window.from == "uploadSolution") {
        cc.find('contentBg/next/Background/Label', newMyPrefab).getComponent(cc.Label).string = '上传攻略';
        cc.find('contentBg/next', newMyPrefab).on('click', function () {
          _common.Loading.show();

          if (window.lastSolutionStep != null) {
            //更新攻略
            if (window.lastSolutionStep > that.stepCounterValue) {
              wx.request({
                url: cloudFunctionBaseUrl + "/updateClassicsLevelSolution",
                method: 'POST',
                data: {
                  levelIndex: window.levelIndex,
                  appId: window.user.appId,
                  useStep: that.stepCounterValue,
                  useTime: that.timeCounterValue,
                  portrait: window.loginInfo.avatarUrl,
                  nickName: window.loginInfo.nickName,
                  content: that.recordSolutionStep.join()
                },
                success: function success(res) {
                  (0, _common.Toast)('攻略上传成功', 1500);

                  _common.Loading.hide();

                  setTimeout(function () {
                    cc.director.loadScene("game");
                  }, 1000);
                },
                error: function error(err) {
                  (0, _common.Toast)('上传失败,请稍后再试', 3000);

                  _common.Loading.hide();
                }
              }); // wx.cloud.callFunction({
              //     name: 'updateClassicsLevelSolution',
              //     data: {
              //         levelIndex: window.levelIndex,
              //         appId: window.user.appId,
              //         useStep: that.stepCounterValue,
              //         useTime: that.timeCounterValue,
              //         portrait: window.loginInfo.avatarUrl,
              //         nickName: window.loginInfo.nickName,
              //         content: that.recordSolutionStep.join()
              //     }
              // }).then(res => {
              //     Toast('攻略上传成功',1500);
              //     Loading.hide();
              //     setTimeout(function () {
              //         cc.director.loadScene("game");
              //     },1000)
              //
              // }).catch(err=>{
              //     Toast('上传失败,请稍后再试',3000);
              //     Loading.hide();
              //     console.log(err)
              // });
            } else {
              _common.Loading.hide();

              (0, _common.Toast)('原有攻略步数更少，上传失败', 3000);
            }
          } else {
            //上传攻略
            wx.request({
              url: cloudFunctionBaseUrl + "/addClassicsLevelSolution",
              method: 'POST',
              data: {
                levelIndex: window.levelIndex,
                appId: window.user.appId,
                useStep: that.stepCounterValue,
                useTime: that.timeCounterValue,
                portrait: window.loginInfo.avatarUrl,
                nickName: window.loginInfo.nickName,
                content: that.recordSolutionStep.join()
              },
              success: function success(res) {
                (0, _common.Toast)('攻略上传成功', 1500);

                _common.Loading.hide();

                setTimeout(function () {
                  cc.director.loadScene("game");
                }, 1000);
              },
              error: function error(err) {
                (0, _common.Toast)('上传失败,请稍后再试', 3000);

                _common.Loading.hide();
              }
            }); // wx.cloud.callFunction({
            //     name: 'addClassicsLevelSolution',
            //     data: {
            //         levelIndex: window.levelIndex,
            //         appId: window.user.appId,
            //         useStep: that.stepCounterValue,
            //         useTime: that.timeCounterValue,
            //         portrait: window.loginInfo.avatarUrl,
            //         nickName: window.loginInfo.nickName,
            //         content: that.recordSolutionStep.join()
            //     }
            // }).then(res => {
            //     Toast('攻略上传成功',1500);
            //     Loading.hide();
            //     setTimeout(function () {
            //         cc.director.loadScene("game");
            //     },1000)
            // }).catch(err=>{
            //     Toast('上传失败,请稍后再试',3000);
            //     Loading.hide();
            //     console.log(err)
            // });
          }
        }, this);
      } else if (window.from != 'build') {
        if (window.levelIndex >= window.classicsLevelNum) {
          cc.find('contentBg/next/Background/Label', newMyPrefab).getComponent(cc.Label).string = '回主界面';
          cc.find('contentBg/next', newMyPrefab).on('click', function () {
            clearInterval(that.timeCounterTimer);
            that.timeCounterTimer = null;
            cc.director.loadScene("main");
            window.from = 'game';
          }, this);
        } else {
          //下一关
          cc.find('contentBg/next', newMyPrefab).on('click', function () {
            newMyPrefab.removeFromParent();
            newMyPrefab.destroy();
            that.initPendant();
            window.levelIndex++;
            that.initLevel();
          }, this);
        } // cc.find('contentBg/next',newMyPrefab).opacity = 0;

      }

      cc.find('contentBg/replay', newMyPrefab).on('click', function () {
        if (window.from == "uploadSolution") {
          cc.director.loadScene("game");
          return;
        }

        newMyPrefab.removeFromParent();
        newMyPrefab.destroy();
        that.replayLayout();
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
    if (window.from == "build") return;

    if (type == 'skip') {
      that.stepCounterValue = '9999';
      that.timeCounterValue = '9999';
    } //上传分数


    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      if (that.lastScore == null) {
        _common.Loading.show();

        (0, _common.Toast)('上传分数中...', 1500);
        wx.request({
          url: cloudFunctionBaseUrl + "/addClassicsLevelScore",
          method: 'POST',
          data: {
            levelIndex: window.levelIndex,
            appId: window.user.appId,
            useStep: that.stepCounterValue,
            useTime: that.timeCounterValue,
            portrait: window.loginInfo.avatarUrl,
            nickName: window.loginInfo.nickName ? window.loginInfo.nickName : '游客' + window.user.appId.substring(window.user.appId.length - 5)
          },
          success: function success(res) {
            _common.Loading.hide();
          },
          error: function error(err) {
            _common.Loading.hide();
          }
        }); // wx.cloud.callFunction({
        //     name: 'addClassicsLevelScore',
        //     data: {
        //         levelIndex: window.levelIndex,
        //         appId: window.user.appId,
        //         useStep: that.stepCounterValue,
        //         useTime: that.timeCounterValue,
        //         portrait: window.loginInfo.avatarUrl,
        //         nickName: window.loginInfo.nickName?window.loginInfo.nickName:'游客'+window.user.appId.substring(window.user.appId.length-5)
        //     }
        // }).then(res => {
        //     Loading.hide();
        // }).catch(err => {
        //     Loading.hide();
        //     console.error(err)
        // })

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
          wx.request({
            url: cloudFunctionBaseUrl + "/updateClassicsLevelScore",
            method: 'POST',
            data: {
              levelIndex: window.levelIndex,
              appId: window.user.appId,
              useStep: that.stepCounterValue,
              useTime: that.timeCounterValue,
              portrait: window.loginInfo.avatarUrl,
              nickName: window.loginInfo.nickName
            },
            success: function success(res) {
              _common.Loading.hide();
            },
            error: function error(err) {
              _common.Loading.hide();
            }
          }); // wx.cloud.callFunction({
          //     name: 'updateClassicsLevelScore',
          //     data: {
          //         levelIndex: window.levelIndex,
          //         appId: window.user.appId,
          //         useStep: that.stepCounterValue,
          //         useTime: that.timeCounterValue,
          //         portrait: window.loginInfo.avatarUrl,
          //         nickName: window.loginInfo.nickName
          //     }
          // }).then(res => {
          //     Loading.hide();
          // }).catch(err => {
          //     Loading.hide();
          //     console.error(err)
          // })
        }
      }

      var curLevelNum = window.levelIndex;
      wx.request({
        url: cloudFunctionBaseUrl + "/queryUser",
        method: 'POST',
        data: {
          appId: window.user.appId
        },
        success: function success(res) {
          if (res && res.data.data.length > 0 && res.data.data[0].levelFinishNum < curLevelNum) {
            window.user.levelFinishNum = curLevelNum;
            var data = {};
            data.appId = window.user.appId;
            data.levelFinishNum = curLevelNum;
            if (window.loginInfo.nickName) data.nickName = window.loginInfo.nickName;
            if (window.loginInfo.avatarUrl) data.portrait = window.loginInfo.avatarUrl;
            wx.request({
              url: cloudFunctionBaseUrl + "/updateUser",
              method: 'POST',
              data: data,
              success: function success(res) {},
              error: function error(err) {}
            });
          }
        },
        error: function error(err) {}
      }); // wx.cloud.callFunction({
      //     name: 'queryUser',
      //     data: {
      //         appId: window.user.appId,
      //     }
      // }).then(res => {
      //     if(res && res.result.data.length>0 && res.result.data[0].levelFinishNum < curLevelNum){
      //         window.user.levelFinishNum = curLevelNum;
      //         let data = {};
      //         data.appId = window.user.appId;
      //         data.levelFinishNum = curLevelNum;
      //         if(window.loginInfo.nickName) data.nickName = window.loginInfo.nickName;
      //         if(window.loginInfo.avatarUrl) data.portrait = window.loginInfo.avatarUrl;
      //         wx.cloud.callFunction({
      //             name: 'updateUser',
      //             data: data
      //         }).then(res => {
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
  },
  replayLayout: function replayLayout() {
    var that = this;
    wx.getStorage({
      key: "initLevel",
      success: function success(res) {
        if (window.from == "uploadSolution") that.recordSolutionStep = [];
        window.currentLevel = res.data;
        that.renderLayout(window.currentLevel);
        that.initPosition(window.currentLevel);
        that.initPendant();
      },
      fail: function fail() {}
    });
  },
  initPendant: function initPendant() {
    var that = this; //关卡

    if (this.levelCounter == null) {
      var levelNode = new cc.Node('levelCounter');
      levelNode.setAnchorPoint(0.5, 0.5);
      levelNode.width = cc.winSize.width * 0.7;
      levelNode.height = 180; // levelNode.horizontalAlign = 'CENTER'

      var levelCounter = levelNode.addComponent(cc.Label);
      levelCounter.node.setPosition(0, cc.winSize.height / 2 - cc.winSize.height * 0.05);
      levelCounter.fontSize = 60;
      levelCounter.enableBold = true; // levelCounter.overflow = cc.Label.Overflow.CLAMP;

      levelCounter.lineHeight = 60;

      if (window.levelBy) {
        levelCounter.string = ('第 ' + window.levelIndex + ' 关 - ' + window.levelBy).substring(0, 16);
      } else {
        levelCounter.string = '第 ' + window.levelIndex + ' 关';
      }

      this.levelCounter = levelNode.getComponent(cc.Label);
      this.node.addChild(levelNode);
    } else {
      if (window.levelBy) {
        this.levelCounter.string = ('第 ' + window.levelIndex + ' 关 - ' + window.levelBy).substring(0, 16);
      } else {
        this.levelCounter.string = '第 ' + window.levelIndex + ' 关';
      }
    }

    if (window.from == 'build') {
      this.levelCounter.string = '测试关卡';
    }

    if (window.from == 'review') {
      this.levelCounter.string = '审核关卡';

      if (window.gameCircle) {
        window.gameCircle.destroy();
        window.gameCircle = null;
      }

      if (window.auditLevelAd) window.auditLevelAd.destroy();

      if (cc.sys.platform === cc.sys.WECHAT_GAME && !window.gameCircle) {
        var sysInfo = wx.getSystemInfoSync();
        var auditLevelAdWidth = sysInfo.windowWidth * 0.6;
        var auditLevelAdLeft = sysInfo.windowWidth * 0.4 / 2;
        if (auditLevelAdWidth <= 300) auditLevelAdLeft = (sysInfo.windowWidth - 300) / 2; //审核页面bnAd

        window.auditLevelAd = wx.createBannerAd({
          adUnitId: 'adunit-a1670c225334da27',
          style: {
            left: auditLevelAdLeft,
            top: sysInfo.windowHeight * 0.08,
            width: auditLevelAdWidth
          }
        });
        window.auditLevelAd.onError(function (err) {});
        window.auditLevelAd.onLoad(function () {
          window.auditLevelAd.show()["catch"](function () {});
        });
      }
    }

    if (window.from == 'uploadSolution') {
      this.levelCounter.string = '第 ' + window.levelIndex + ' 关' + ' - 上传攻略';
    }

    if (window.from == 'checkSolution') {
      this.levelCounter.string = '第 ' + window.levelIndex + ' 关' + ' - 攻略';
      return;
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
      if (this.stepCounter) this.stepCounter.string = "步数：" + this.stepCounterValue;
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
        if (this.timeCounter) this.timeCounter.string = "用时：" + this.timeCounterValue;
      }.bind(this), 1000);
    } else {
      this.timeCounterValue = 0;
      this.timeCounter.string = "用时：" + this.timeCounterValue;

      if (this.timeCounterTimer == null) {
        this.timeCounterTimer = setInterval(function () {
          this.timeCounterValue++;
          if (this.timeCounter) this.timeCounter.string = "用时：" + this.timeCounterValue;
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

    if (window.setting.clickMove && window.from != "checkSolution") {
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
      cc.find('gameBtns/up', this.node).removeFromParent();
      cc.find('gameBtns/right', this.node).removeFromParent();
      cc.find('gameBtns/down', this.node).removeFromParent();
      cc.find('gameBtns/left', this.node).removeFromParent();
    }

    var leftBtn = cc.find('gameBtns/backStep/Background/Label', this.node).getComponent(cc.Label);
    if (window.from == 'review') leftBtn.string = '通过';else if (window.from == 'checkSolution') leftBtn.string = 'Again';else if (!window.setting.relast) leftBtn.string = '重玩';
    cc.find('gameBtns/backStep', this.node).on('click', function () {
      var that = this; //攻略播放

      if (window.from == 'checkSolution') {
        that.solutionStepIndex = -1;
        that.replayLayout();
        return;
      } //审核关卡通过


      if (window.from == 'review') {
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
          cc.find('verifyContain/close', newMyPrefab).on('click', function () {
            newMyPrefab.removeFromParent();
            newMyPrefab.destroy();
          }, this);
          var password = cc.find('verifyContain/editbox', newMyPrefab).getComponent(cc.EditBox);
          cc.find('verifyContain/confirm', newMyPrefab).on('click', function () {
            if (password.textLabel.string == '19970720') {
              _common.Loading.show();

              wx.request({
                url: cloudFunctionBaseUrl + "/getClassicsLevelNum",
                method: 'POST',
                data: {},
                success: function success(res) {
                  wx.getStorage({
                    key: "initLevel",
                    success: function success(result) {
                      wx.request({
                        url: cloudFunctionBaseUrl + "/addClassicsLevel",
                        method: 'POST',
                        data: {
                          content: result.data,
                          levelIndex: res.data.total + 1,
                          appId: window.uploadInfo.appId,
                          nickName: window.uploadInfo.nickName ? window.uploadInfo.nickName : '游客' + window.uploadInfo.appId.substring(window.uploadInfo.appId.length - 5),
                          portrait: window.uploadInfo.avatarUrl
                        },
                        success: function success(result) {
                          wx.request({
                            url: cloudFunctionBaseUrl + "/removeReviewLevel",
                            method: 'POST',
                            data: {
                              _id: window.reviewId
                            },
                            success: function success(result) {
                              var levelUploadNum = parseInt(res.data.total) + 1;
                              (0, _common.Toast)('关卡' + levelUploadNum + '上传成功，即将跳回主界面', 1500);
                              setTimeout(function () {
                                clearInterval(that.timeCounterTimer);
                                that.timeCounterTimer = null;

                                _common.Loading.hide();

                                window.from = 'game';
                                cc.director.loadScene('main');
                              }, 1500); //获取系统通知订阅情况
                              // wx.getSetting({
                              //     withSubscriptions: true,
                              //     success (res) {
                              //         //接收审核通知
                              //         if(res.subscriptionsSetting.mainSwitch && (!res.subscriptionsSetting.itemSettings || res.subscriptionsSetting.itemSettings['bQJbF0VLKfsMdYOaIplnfY0sErvIbZcK8sCzLgshILA']=='accept')){
                              //             //下发审核通过通知
                              //             wx.request({
                              //                 url: cloudFunctionBaseUrl+"/sendAuditMsg",
                              //                 method: 'POST',
                              //                 data:{
                              //                     openId: window.uploadInfo.appId,
                              //                     msgTitle:'您所上传的关卡已审核通过',
                              //                     msgContent:'您上传的关卡为第'+levelUploadNum+'关',
                              //                     uploadDate: that.timestampToTime(window.uploadInfo.createTime)
                              //                 },
                              //                 success: (res) => {
                              //
                              //                 }
                              //             });
                              //
                              //
                              //         }
                              //     }
                              // })
                            },
                            error: function error(err) {}
                          });
                        },
                        error: function error(err) {
                          _common.Loading.hide();

                          (0, _common.Toast)('上传失败', 1500);
                        }
                      });
                    }
                  });
                }
              }); // wx.cloud.callFunction({
              //     name: 'getClassicsLevelNum'
              // }).then(res => {
              //
              //     wx.getStorage({
              //         key: "initLevel",
              //         success (result) {
              //
              //             wx.cloud.callFunction({
              //                 name: 'addClassicsLevel',
              //                 data:{
              //                     content: result.data,
              //                     levelIndex: res.result.total+1,
              //                     appId: window.uploadInfo.appId,
              //                     nickName: window.uploadInfo.nickName?window.uploadInfo.nickName:'游客'+window.uploadInfo.appId.substring(window.uploadInfo.appId.length-5),
              //                     portrait: window.uploadInfo.avatarUrl,
              //                 }
              //             }).then(result => {
              //
              //                 wx.cloud.callFunction({
              //                     name: 'removeReviewLevel',
              //                     data:{
              //                         _id:window.reviewId
              //                     }
              //                 }).then(result => {
              //                     let levelUploadNum = parseInt(res.result.total)+1;
              //                     Toast('关卡'+levelUploadNum+'上传成功，即将跳回主界面',1500);
              //                     setTimeout(function () {
              //                         clearInterval(that.timeCounterTimer);
              //                         that.timeCounterTimer = null;
              //                         Loading.hide();
              //                         window.from = 'game';
              //                         cc.director.loadScene('main');
              //                     },1500)
              //
              //                     //获取系统通知订阅情况
              //                     wx.getSetting({
              //                         withSubscriptions: true,
              //                         success (res) {
              //                             //接收审核通知
              //                             if(res.subscriptionsSetting.mainSwitch && (!res.subscriptionsSetting.itemSettings || res.subscriptionsSetting.itemSettings['bQJbF0VLKfsMdYOaIplnfY0sErvIbZcK8sCzLgshILA']=='accept')){
              //                                 //下发审核通过通知
              //                                 wx.cloud.callFunction({
              //                                     name: 'sendAuditMsg',
              //                                     data:{
              //                                         openId: window.uploadInfo.appId,
              //                                         msgTitle:'您所上传的关卡已审核通过',
              //                                         msgContent:'您上传的关卡为第'+levelUploadNum+'关',
              //                                         uploadDate: that.timestampToTime(window.uploadInfo.createTime)
              //                                     }
              //                                 }).then(res => {
              //
              //                                 })
              //                             }
              //                         }
              //                     })
              //
              //
              //                 });
              //
              //             }).catch(err => {
              //                 Loading.hide();
              //                 Toast('上传失败',1500);
              //                 console.error(err)
              //             })
              //
              //
              //         }
              //     });
              //
              //
              // }).catch(err => {
              //     console.error(err)
              // })
            } else {
              (0, _common.Toast)('密码错误！', 1500);
            }
          }, this);
          CanvasNode.addChild(newMyPrefab);
        };

        cc.loader.loadRes('verifyAdmin', onResourceLoaded);
        return;
      }

      if (window.setting.relast) {
        if (that.moveHistoryList.length > 1 && that.stepCounterValue >= 1) {
          that.moveHistoryList.pop();
          if (window.from == "uploadSolution") that.recordSolutionStep.pop();

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
      } else {
        that.replayLayout();
      }
    }, this);
    if (window.from == 'review') cc.find('gameBtns/menu/Background/Label', this.node).getComponent(cc.Label).string = '驳回';else if (window.from == "checkSolution") cc.find('gameBtns/menu/Background/Label', this.node).getComponent(cc.Label).string = 'Next';
    cc.find('gameBtns/menu', this.node).on("click", function () {
      clearInterval(that.timeCounterTimer);
      that.timeCounterTimer = null; //攻略播放

      if (window.from == 'checkSolution') {
        that.solutionStepIndex++;
        if (that.solutionStepIndex >= window.levelSolution.content.length) that.solutionStepIndex = -1;

        if (that.solutionStepIndex <= -1) {
          that.replayLayout();
          return;
        }

        switch (window.levelSolution.content[that.solutionStepIndex]) {
          case 'U':
            that.moveUp(window.currentLevel);
            break;

          case 'R':
            that.moveRight(window.currentLevel);
            break;

          case 'D':
            that.moveDown(window.currentLevel);
            break;

          case 'L':
            that.moveLeft(window.currentLevel);
            break;
        }

        return;
      } //审核关卡驳回


      if (window.from == 'review') {
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
          cc.find('verifyContain/close', newMyPrefab).on('click', function () {
            newMyPrefab.removeFromParent();
            newMyPrefab.destroy();
          }, this);
          var password = cc.find('verifyContain/editbox', newMyPrefab).getComponent(cc.EditBox);
          cc.find('verifyContain/confirm', newMyPrefab).on('click', function () {
            if (password.textLabel.string == '19970720') {
              _common.Loading.show();

              wx.request({
                url: cloudFunctionBaseUrl + "/removeReviewLevel",
                method: 'POST',
                data: {
                  _id: window.reviewId
                },
                success: function success(result) {
                  (0, _common.Toast)('关卡已驳回，即将跳回主界面', 1500);
                  setTimeout(function () {
                    _common.Loading.hide();

                    window.from = 'game';
                    cc.director.loadScene('main');
                  }, 1500); //获取系统通知订阅情况
                  // wx.getSetting({
                  //     withSubscriptions: true,
                  //     success (res) {
                  //         //接收审核通知
                  //         if(res.subscriptionsSetting.mainSwitch && (!res.subscriptionsSetting.itemSettings || res.subscriptionsSetting.itemSettings['bQJbF0VLKfsMdYOaIplnfY0sErvIbZcK8sCzLgshILA']=='accept')){
                  //             //下发审核通过通知
                  //             wx.request({
                  //                 url: cloudFunctionBaseUrl+"/sendAuditMsg",
                  //                 method: 'POST',
                  //                 data:{
                  //                     openId: window.uploadInfo.appId,
                  //                     msgTitle:'您所上传的关卡已审核驳回',
                  //                     msgContent:'驳回原因：关卡过于简单',
                  //                     uploadDate: that.timestampToTime(window.uploadInfo.createTime)
                  //                 },
                  //                 success: (res) => {
                  //
                  //                 }
                  //             });
                  //             // wx.cloud.callFunction({
                  //             //     name: 'sendAuditMsg',
                  //             //     data:{
                  //             //         openId: window.uploadInfo.appId,
                  //             //         msgTitle:'您所上传的关卡已审核驳回',
                  //             //         msgContent:'驳回原因：关卡过于简单',
                  //             //         uploadDate: that.timestampToTime(window.uploadInfo.createTime)
                  //             //     }
                  //             // }).then(res => {
                  //             //
                  //             // })
                  //         }
                  //     }
                  // })
                },
                error: function error(err) {}
              }); // wx.cloud.callFunction({
              //     name: 'removeReviewLevel',
              //     data:{
              //         _id:window.reviewId
              //     }
              // }).then(result => {
              //     Toast('关卡已驳回，即将跳回主界面',1500);
              //     setTimeout(function () {
              //         Loading.hide();
              //         window.from = 'game';
              //         cc.director.loadScene('main');
              //     },1500)
              //
              //     //获取系统通知订阅情况
              //     wx.getSetting({
              //         withSubscriptions: true,
              //         success (res) {
              //             //接收审核通知
              //             if(res.subscriptionsSetting.mainSwitch && (!res.subscriptionsSetting.itemSettings || res.subscriptionsSetting.itemSettings['bQJbF0VLKfsMdYOaIplnfY0sErvIbZcK8sCzLgshILA']=='accept')){
              //                 //下发审核通过通知
              //                 wx.cloud.callFunction({
              //                     name: 'sendAuditMsg',
              //                     data:{
              //                         openId: window.uploadInfo.appId,
              //                         msgTitle:'您所上传的关卡已审核驳回',
              //                         msgContent:'驳回原因：关卡过于简单',
              //                         uploadDate: that.timestampToTime(window.uploadInfo.createTime)
              //                     }
              //                 }).then(res => {
              //
              //                 })
              //             }
              //         }
              //     })
              // });
            } else {
              (0, _common.Toast)('密码错误！', 1500);
            }
          }, this);
          CanvasNode.addChild(newMyPrefab);
        };

        cc.loader.loadRes('verifyAdmin', onResourceLoaded);
        return;
      }

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
        }, this);
        cc.find('contain/levels', newMyPrefab).on('click', function () {
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
      }

      if (window.from == 'review') {
        that.lastScore = null;
        that.renderLastScore('无', '无');
        wx.getStorage({
          key: 'reviewLevel',
          success: function success(res) {
            window.uploadLevel = res.data;
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
        return;
      } //经典关卡


      if (window.levelClassify == 'classicsLevel') {
        wx.request({
          url: cloudFunctionBaseUrl + "/queryClassicsLevel",
          method: 'POST',
          data: {
            appId: window.user.appId,
            levelIndex: window.levelIndex
          },
          success: function success(res) {
            if (res && res.data.data.length > 0) {
              window.currentLevel = res.data.data[0].content;
              that.renderLayout(window.currentLevel);
              that.initPosition(window.currentLevel);
              window.levelBy = res.data.data[0].nickName; // 初始化挂件

              that.initPendant();
              wx.setStorage({
                key: "initLevel",
                data: window.currentLevel,
                success: function success(result) {
                  that.moveHistoryList.push(window.currentLevel);
                  that.replayLayout();
                }
              });
            }

            _common.Loading.hide();
          },
          error: function error(err) {}
        }); // wx.cloud.callFunction({
        //     name: 'queryClassicsLevel',
        //     data: {
        //         appId:window.user.appId,
        //         levelIndex: window.levelIndex
        //     }
        // }).then(res => {
        //     if(res && res.result.data.length>0){
        //         window.currentLevel = res.result.data[0].content;
        //         that.renderLayout(window.currentLevel);
        //         that.initPosition(window.currentLevel);
        //         window.levelBy = res.result.data[0].nickName;
        //         // 初始化挂件
        //         that.initPendant();
        //         wx.setStorage({
        //             key: "initLevel",
        //             data:window.currentLevel,
        //             success(result){
        //                 that.moveHistoryList.push(window.currentLevel);
        //                 that.replayLayout();
        //             }
        //         })
        //
        //     }
        //     Loading.hide();
        // }).catch(err => {
        //     console.error(err)
        // })

        wx.request({
          url: cloudFunctionBaseUrl + "/queryClassicsLevelScore",
          method: 'POST',
          data: {
            levelIndex: window.levelIndex,
            appId: window.user.appId
          },
          success: function success(res) {
            if (res && res.data.data.length > 0) {
              that.lastScore = res.data.data[0];
              that.renderLastScore(that.lastScore.useStep, that.lastScore.useTime);
            } else {
              that.lastScore = null;
              that.renderLastScore('无', '无');
              if (window.levelIndex == 1) (0, _common.Toast)('Tip: 可滑动屏幕控制人物', 5000);
            }
          },
          error: function error(err) {}
        }); // wx.cloud.callFunction({
        //     name: 'queryClassicsLevelScore',
        //     data: {
        //         levelIndex: window.levelIndex,
        //         appId:window.user.appId
        //     }
        // }).then(res => {
        //     if(res && res.result.data.length>0){
        //         that.lastScore = res.result.data[0];
        //         that.renderLastScore(that.lastScore.useStep,that.lastScore.useTime)
        //
        //     }else{
        //         that.lastScore = null;
        //         that.renderLastScore('无','无')
        //         if(window.levelIndex == 1) Toast('Tip: 可滑动屏幕控制人物',5000);
        //
        //     }
        // }).catch(err => {
        //     console.error(err)
        // })
      } //网络关卡
      else {} //攻略


      if (window.from != "uploadSolution" && window.from != "checkSolution") {
        var date = new Date();
        var today = date.toLocaleDateString();
        var solutionBtnNode = new cc.Node('skipNode');
        solutionBtnNode.setAnchorPoint(0, 1);
        var solutionBtnLabel = solutionBtnNode.addComponent(cc.Label);
        solutionBtnLabel.node.setPosition(cc.winSize.width / 2 - cc.winSize.width * 0.2, cc.winSize.width / 2 + 80);
        solutionBtnLabel.string = '相关攻略';
        that.solutionBtn = solutionBtnNode.getComponent(cc.Label);
        that.node.addChild(solutionBtnNode);
        var enableSkip = true;
        wx.getStorage({
          key: 'skipAdInfo',
          success: function success(res) {
            if (res.data.num >= 5) that.noneSkipChange = true;
          }
        });
        that.solutionBtn.node.on('touchend', function () {
          if (!enableSkip) return;
          enableSkip = false;
          if (that.timeCounterTimer) clearInterval(that.timeCounterTimer);
          that.timeCounterTimer = null;
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
            cc.find('solutionContain/close', newMyPrefab).on('click', function () {
              if (that.timeCounterTimer == null) {
                that.timeCounterTimer = setInterval(function () {
                  that.timeCounterValue++;
                  if (that.timeCounter) that.timeCounter.string = "用时：" + that.timeCounterValue;
                }.bind(that), 1000);
              }

              newMyPrefab.removeFromParent();
              newMyPrefab.destroy();
            }, this);
            cc.find('solutionContain/skipLevel', newMyPrefab).on('click', function () {
              if (that.lastScore) {
                (0, _common.Toast)("当前关卡已通过无需再跳过", 1500);
                return;
              }

              if (that.noneSkipChange) {
                (0, _common.Toast)("每天最多跳过5个关卡", 1500);
                return;
              }

              (0, _common.Toast)("广告拉取中...", 1500);

              if (!window.skipLevelAd) {
                (0, _common.Toast)("广告拉取失败", 1500);
                return;
              }

              window.skipLevelAd.show()["catch"](function (err) {
                window.skipLevelAd.load().then(function () {
                  return window.skipLevelAd.show();
                })["catch"](function () {
                  (0, _common.Toast)("广告拉取失败", 1500);
                });
              });
              window.skipLevelAd.offClose();
              window.skipLevelAd.onClose(function (res) {
                // 用户点击了【关闭广告】按钮
                // 小于 2.1.0 的基础库版本，res 是一个 undefined
                if (res && res.isEnded || res === undefined) {
                  // 正常播放结束，可以下发游戏奖励
                  if (that.timeCounterTimer == null) {
                    that.timeCounterTimer = setInterval(function () {
                      that.timeCounterValue++;
                      if (that.timeCounter) that.timeCounter.string = "用时：" + that.timeCounterValue;
                    }.bind(that), 1000);
                  }

                  newMyPrefab.removeFromParent();
                  newMyPrefab.destroy();
                  that.showResult('skip'); //限制跳过次数

                  wx.getStorage({
                    key: 'skipAdInfo',
                    success: function success(res) {
                      if (res.data.date == today) {
                        if (res.data.num >= 5) that.noneSkipChange = true;
                        wx.setStorage({
                          key: 'skipAdInfo',
                          data: {
                            date: today,
                            num: res.data.num + 1
                          }
                        });
                      } else {
                        wx.setStorage({
                          key: 'skipAdInfo',
                          data: {
                            date: today,
                            num: 1
                          }
                        });
                      }
                    },
                    fail: function fail(err) {
                      wx.setStorage({
                        key: 'skipAdInfo',
                        data: {
                          date: today,
                          num: 1
                        }
                      });
                    }
                  });
                } else {// 播放中途退出，不下发游戏奖励
                }
              });
            }, this);
            cc.find('solutionContain/checkSolution', newMyPrefab).on('click', function () {
              wx.request({
                url: cloudFunctionBaseUrl + "/queryClassicsLevelSolution",
                method: 'POST',
                data: {
                  levelIndex: window.levelIndex
                },
                success: function success(res) {
                  window.levelSolution = null;

                  if (res && res.data.data.length > 0) {
                    (0, _common.Toast)("广告拉取中...", 1500);

                    if (!window.checkSolutionLevelAd) {
                      (0, _common.Toast)("广告拉取失败", 1500);
                      return;
                    }

                    window.checkSolutionLevelAd.show()["catch"](function (err) {
                      window.checkSolutionLevelAd.load().then(function () {
                        return window.checkSolutionLevelAd.show();
                      })["catch"](function () {
                        (0, _common.Toast)("广告拉取失败", 1500);
                      });
                    });
                    window.checkSolutionLevelAd.offClose();
                    window.checkSolutionLevelAd.onClose(function (result) {
                      // 用户点击了【关闭广告】按钮
                      // 小于 2.1.0 的基础库版本，result 是一个 undefined
                      if (result && result.isEnded || result === undefined) {
                        // 正常播放结束，可以下发游戏奖励
                        window.from = "checkSolution";
                        window.levelSolution = res.data.data[0];
                        window.levelSolution.content = res.data.data[0].content.split(',');
                        cc.director.loadScene("game");
                      } else {// 播放中途退出，不下发游戏奖励
                      }
                    });
                  } else {
                    (0, _common.Toast)('当前关卡暂无攻略', 3000);
                  }
                },
                error: function error(err) {}
              }); // wx.cloud.callFunction({
              //     name: 'queryClassicsLevelSolution',
              //     data: {
              //         levelIndex: window.levelIndex
              //     }
              // }).then(res => {
              //     window.levelSolution = null;
              //     if(res && res.result.data.length>0){
              //         Toast("广告拉取中...",1500);
              //         if(!window.checkSolutionLevelAd){Toast("广告拉取失败",1500);return;}
              //         window.checkSolutionLevelAd.show()
              //             .catch(err => {
              //                 window.checkSolutionLevelAd.load()
              //                     .then(() => window.checkSolutionLevelAd.show()).catch(()=>{
              //                     Toast("广告拉取失败",1500)
              //                 })
              //             })
              //         window.checkSolutionLevelAd.offClose();
              //         window.checkSolutionLevelAd.onClose(result => {
              //             // 用户点击了【关闭广告】按钮
              //             // 小于 2.1.0 的基础库版本，result 是一个 undefined
              //             if (result && result.isEnded || result === undefined) {
              //                 // 正常播放结束，可以下发游戏奖励
              //                 window.from = "checkSolution";
              //                 window.levelSolution = res.result.data[0];
              //                 window.levelSolution.content = res.result.data[0].content.split(',');
              //                 cc.director.loadScene("game");
              //             }
              //             else {
              //                 // 播放中途退出，不下发游戏奖励
              //             }
              //         })
              //
              //
              //     }else{
              //         Toast('当前关卡暂无攻略',3000);
              //     }
              // }).catch(err => {
              //     console.error(err)
              // })
            }, this);
            cc.find('solutionContain/uploadSolution', newMyPrefab).on('click', function () {
              window.from = 'uploadSolution';
              cc.director.loadScene("game");
            }, this);
            CanvasNode.addChild(newMyPrefab);
          };

          cc.loader.loadRes('solutionDialog', onResourceLoaded);
          setTimeout(function () {
            enableSkip = true;
          }, 1500);
        }, that);
      }
    }
  },
  back: function back() {
    this.initPendant();
    clearInterval(this.timeCounterTimer);
    this.timeCounterTimer = null;

    if (window.from == 'review') {
      cc.director.loadScene("main");
    } else if (window.from == 'uploadSolution') {
      window.from = 'game';
      cc.director.loadScene("game");
    } else if (window.from == 'checkSolution') {
      window.from = 'game';
      cc.director.loadScene("game");
    } else if (window.from == 'build') {
      window.from = 'game';
      cc.director.loadScene('build');
    } else {
      window.from = 'game';
      cc.director.loadScene("main");
    }
  },
  renderLastScore: function renderLastScore(step, time) {
    var that = this;

    if (window.from == 'build' || window.from == "review") {
      return;
    }

    if (window.from == 'uploadSolution') {
      wx.request({
        url: cloudFunctionBaseUrl + "/queryClassicsLevelSolution",
        method: 'POST',
        data: {
          levelIndex: window.levelIndex
        },
        success: function success(res) {
          var lastBestScore = '当前攻略：暂无';
          window.lastSolutionStep = null;

          if (res && res.data.data.length > 0) {
            window.lastSolutionStep = res.data.data[0].useStep;
            lastBestScore = '当前攻略：步数' + res.data.data[0].useStep + ' - 贡献者：' + res.data.data[0].nickName.substring(0, 16);
          }

          if (that.lastStepNode == null) {
            var lastStepNode = new cc.Node('lastStepNode');
            lastStepNode.setAnchorPoint(0, 1);
            var stepCounter = lastStepNode.addComponent(cc.Label);
            stepCounter.node.setPosition(-(cc.winSize.width / 2) + cc.winSize.width * 0.05, cc.winSize.width / 2 + 160);
            stepCounter.string = lastBestScore;
            that.lastStepNode = lastStepNode.getComponent(cc.Label);
            that.node.addChild(lastStepNode);
          } else {
            that.lastStepNode.string = lastBestScore;
          }
        },
        error: function error(err) {}
      }); // wx.cloud.callFunction({
      //     name: 'queryClassicsLevelSolution',
      //     data: {
      //         levelIndex: window.levelIndex
      //     }
      // }).then(res => {
      //     let lastBestScore = '当前攻略：暂无';
      //     window.lastSolutionStep = null;
      //     if(res && res.result.data.length>0){
      //         window.lastSolutionStep = res.result.data[0].useStep;
      //         lastBestScore = '当前攻略：步数' + res.result.data[0].useStep + ' - 贡献者：'+ res.result.data[0].nickName.substring(0,16)
      //     }
      //
      //     if(that.lastStepNode == null){
      //         var lastStepNode = new cc.Node('lastStepNode');
      //         lastStepNode.setAnchorPoint(0, 1);
      //         var stepCounter = lastStepNode.addComponent(cc.Label);
      //         stepCounter.node.setPosition(-(cc.winSize.width/2) + (cc.winSize.width*0.05),  (cc.winSize.width/2) + 160)
      //         stepCounter.string = lastBestScore;
      //         that.lastStepNode = lastStepNode.getComponent(cc.Label)
      //         that.node.addChild(lastStepNode);
      //     }else{
      //         that.lastStepNode.string = lastBestScore;
      //     }
      //
      //
      // }).catch(err => {
      //     console.error(err)
      // })

      return;
    }

    if (window.from == 'checkSolution') {
      if (that.lastStepNode == null) {
        var lastStepNode = new cc.Node('lastStepNode');
        lastStepNode.setAnchorPoint(0, 1);
        var stepCounter = lastStepNode.addComponent(cc.Label);
        stepCounter.node.setPosition(-(cc.winSize.width / 2) + cc.winSize.width * 0.05, cc.winSize.width / 2 + 160);
        stepCounter.string = '当前攻略：步数' + window.levelSolution.useStep + ' - 贡献者：' + window.levelSolution.nickName.substring(0, 16);
        that.lastStepNode = lastStepNode.getComponent(cc.Label);
        that.node.addChild(lastStepNode);
      } else {
        that.lastStepNode.string = '当前攻略：步数' + window.levelSolution.useStep + ' - 贡献者：' + window.levelSolution.nickName.substring(0, 16);
      }

      return;
    } //最佳步数


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

      wx.request({
        url: cloudFunctionBaseUrl + "/queryClassicsLevelScore",
        method: 'POST',
        data: {
          levelIndex: window.levelIndex,
          page: page,
          pageSize: pageSize,
          appId: window.user.appId
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

            for (var i = 1; i <= res.data.data.length; i++) {
              var data;

              _loop();
            }

            content.height = content.childrenCount * rankItem.height;
          } else {
            (0, _common.Toast)("没有更多数据了", 1500);
          }
        },
        error: function error(err) {
          _common.Loading.hide();
        }
      }); // wx.cloud.callFunction({
      //     name: 'queryClassicsLevelScore',
      //     data:{
      //         levelIndex:window.levelIndex,
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
      //             node.getChildByName('tdLevel').getComponent(cc.Label).string = data.useStep;
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
  timestampToTime: function timestampToTime(timestamp) {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000

    var Y = date.getFullYear() + '年';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '日 ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    var strDate = Y + M + D + h + m + s;
    return strDate;
  },
  onDestroy: function onDestroy() {
    if (window.auditLevelAd) window.auditLevelAd.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZUxheW91dC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXJyZW50TGV2ZWwiLCJlbGVTaXplIiwibGF5b3V0IiwiQXJyYXkiLCJibG9ja051bSIsInVwbG9hZExldmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibG9jayIsInR5cGUiLCJQcmVmYWIiLCJkaXNwbGF5TmFtZSIsIndhbGwiLCJib3giLCJiYWxsIiwicm9sZVVwIiwicm9sZVJpZ2h0Iiwicm9sZURvd24iLCJyb2xlTGVmdCIsInBvc2l0aW9uIiwiZ2FtZUJuIiwiU3ByaXRlIiwiYm94TnVtIiwic3RlcENvdW50ZXIiLCJzdGVwQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXIiLCJ0aW1lQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXJUaW1lciIsImxldmVsQ291bnRlciIsIm1vdmVIaXN0b3J5TGlzdCIsImxhc3RTY29yZSIsImxhc3RTdGVwTm9kZSIsImxhc3RUaW1lbm9kZSIsInJhbmtJdGVtIiwiYnVpbGRBcmVhIiwic29sdXRpb25CdG4iLCJub25lU2tpcENoYW5nZSIsInNvbHV0aW9uU3RlcEluZGV4IiwicmVjb3JkU29sdXRpb25TdGVwIiwib25Mb2FkIiwidGhhdCIsImluaXRXaW5FbGUiLCJyZW5kZXJCZyIsImluaXRMZXZlbCIsImZpbmQiLCJub2RlIiwiaGVpZ2h0Iiwid2luU2l6ZSIsIndpZHRoIiwic3RhcnQiLCJhZGRUb3VjaE1vdmUiLCJwZW5kYW50QWRkRXZlbnQiLCJyZWFsU2l6IiwiaSIsIm4iLCJ4IiwieSIsInNpZ24iLCJjb3ZlciIsImluaXRQb3NpdGlvbiIsImxlbmd0aCIsInN0YXJ0WCIsInN0YXJ0WSIsIm5ld0Jsb2NrIiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsImFkZENoaWxkIiwicmVuZGVyQm4iLCJnZXRDb21wb25lbnQiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiYmdVcmxCYXNlIiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwicmVjdCIsInNwcml0ZUZyYW1lIiwicmVuZGVyTGF5b3V0IiwiZGVzdHJveUFsbENoaWxkcmVuIiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0IiwibW92ZVVwIiwicmVzZXRQb3NpdGlvbiIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJkaXJlY3Rpb24iLCJmcm9tIiwicHVzaCIsInNldHRpbmciLCJyZWxhc3QiLCJzeXMiLCJwbGF0Zm9ybSIsIldFQ0hBVF9HQU1FIiwid3giLCJzZXRTdG9yYWdlIiwia2V5IiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJnZXRTdG9yYWdlIiwicmVzIiwic3RyaW5nIiwiY292ZXJCb3hOdW0iLCJzaG93UmVzdWx0IiwibW92ZU11c2ljIiwicGF1c2VkIiwic3RvcCIsInBhdXNlIiwicGxheSIsInRvdWNoTW92ZSIsImZpZ3VyZUxvY2F0aW9uIiwib24iLCJldmVudCIsImdldExvY2F0aW9uIiwiZW5kTG9jYXRpb24iLCJNYXRoIiwiYWJzIiwiY2xlYXJJbnRlcnZhbCIsIkNhbnZhc05vZGUiLCJjb25zb2xlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJMYWJlbCIsIkxvYWRpbmciLCJzaG93IiwicmVxdWVzdCIsInVybCIsImNsb3VkRnVuY3Rpb25CYXNlVXJsIiwibWV0aG9kIiwiY29udGVudCIsInVzZVN0ZXBOdW0iLCJsZXZlbEluZGV4IiwidG90YWwiLCJhcHBJZCIsInVzZXIiLCJuaWNrTmFtZSIsImxvZ2luSW5mbyIsInN1YnN0cmluZyIsInBvcnRyYWl0IiwiYXZhdGFyVXJsIiwibGV2ZWxVcGxvYWROdW0iLCJwYXJzZUludCIsImhpZGUiLCJjcmVhdGVTY2Vuc2VVcGxvYWRBZCIsInNldFRpbWVvdXQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uQ2xvc2UiLCJlcnJvciIsImxhc3RTb2x1dGlvblN0ZXAiLCJ1c2VTdGVwIiwidXNlVGltZSIsImpvaW4iLCJjbGFzc2ljc0xldmVsTnVtIiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJpbml0UGVuZGFudCIsInJlcGxheUxheW91dCIsInNob3dMZXZlbFJhbmsiLCJ0aXRTdHJpbmciLCJzaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInF1ZXJ5IiwibG9hZGVyIiwibG9hZFJlcyIsInJlbmRlckxhc3RTY29yZSIsImN1ckxldmVsTnVtIiwibGV2ZWxGaW5pc2hOdW0iLCJmYWlsIiwibGV2ZWxOb2RlIiwiTm9kZSIsInNldEFuY2hvclBvaW50IiwiYWRkQ29tcG9uZW50IiwiZm9udFNpemUiLCJlbmFibGVCb2xkIiwibGluZUhlaWdodCIsImxldmVsQnkiLCJnYW1lQ2lyY2xlIiwiYXVkaXRMZXZlbEFkIiwic3lzSW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwiYXVkaXRMZXZlbEFkV2lkdGgiLCJ3aW5kb3dXaWR0aCIsImF1ZGl0TGV2ZWxBZExlZnQiLCJjcmVhdGVCYW5uZXJBZCIsImFkVW5pdElkIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwid2luZG93SGVpZ2h0Iiwib25FcnJvciIsInRpbWVOb2RlIiwic2V0SW50ZXJ2YWwiLCJiaW5kIiwic3BsaWNlIiwiYmFjayIsImNsaWNrTW92ZSIsImxlZnRCdG4iLCJwYXNzd29yZCIsIkVkaXRCb3giLCJ0ZXh0TGFiZWwiLCJ1cGxvYWRJbmZvIiwiX2lkIiwicmV2aWV3SWQiLCJwb3AiLCJsZXZlbFNvbHV0aW9uIiwibGV2ZWxDbGFzc2lmeSIsImRhdGUiLCJEYXRlIiwidG9kYXkiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzb2x1dGlvbkJ0bk5vZGUiLCJzb2x1dGlvbkJ0bkxhYmVsIiwiZW5hYmxlU2tpcCIsIm51bSIsInNraXBMZXZlbEFkIiwibG9hZCIsInRoZW4iLCJvZmZDbG9zZSIsImlzRW5kZWQiLCJ1bmRlZmluZWQiLCJjaGVja1NvbHV0aW9uTGV2ZWxBZCIsInNwbGl0Iiwic3RlcCIsInRpbWUiLCJsYXN0QmVzdFNjb3JlIiwicmFua1BhZ2UiLCJyYW5rUGFnZVNpemUiLCJyZXNvdXJjZSIsInJlbmRlckxldmVsUmFua0xpc3QiLCJwYWdlIiwicGFnZVNpemUiLCJjdXJyZW50SXRlbU51bSIsImNoaWxkcmVuQ291bnQiLCJnZXRDaGlsZEJ5TmFtZSIsImNyZWF0ZVRpbWUiLCJ0aW1lc3RhbXBUb1RpbWUiLCJ0aW1lc3RhbXAiLCJZIiwiZ2V0RnVsbFllYXIiLCJNIiwiZ2V0TW9udGgiLCJEIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJzdHJEYXRlIiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9BOztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxNQUFNLENBQUNDLFlBQVAsR0FBc0IsRUFBdEI7QUFFQUQsTUFBTSxDQUFDRSxPQUFQLEdBQWlCLEVBQWpCO0FBQ0FGLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixJQUFJQyxLQUFKLEVBQWhCO0FBQ0FKLE1BQU0sQ0FBQ0ssUUFBUCxHQUFrQixFQUFsQjtBQUNBTCxNQUFNLENBQUNNLFdBQVAsR0FBcUIsSUFBckI7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRk47QUFHSEMsTUFBQUEsV0FBVyxFQUFDO0FBSFQsS0FEQztBQU1SQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxJQURQO0FBRUZILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZQO0FB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QyxRQUFMLEtBQWdCLENBQXBFLElBQXlFLEdBQWpGO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLENBQUNuQyxJQUFJLENBQUNvQyxPQUFMLEtBQWlCLEVBQWpCLEdBQXNCLE1BQUlwQyxJQUFJLENBQUNvQyxPQUFMLEVBQTFCLEdBQTJDcEMsSUFBSSxDQUFDb0MsT0FBTCxFQUE1QyxJQUE4RCxJQUF0RTtBQUNBLFFBQUlDLENBQUMsR0FBRyxDQUFDckMsSUFBSSxDQUFDc0MsUUFBTCxLQUFrQixFQUFsQixHQUF1QixNQUFJdEMsSUFBSSxDQUFDc0MsUUFBTCxFQUEzQixHQUE2Q3RDLElBQUksQ0FBQ3NDLFFBQUwsRUFBOUMsSUFBaUUsR0FBekU7QUFDQSxRQUFJQyxDQUFDLEdBQUcsQ0FBQ3ZDLElBQUksQ0FBQ3dDLFVBQUwsS0FBb0IsRUFBcEIsR0FBeUIsTUFBSXhDLElBQUksQ0FBQ3dDLFVBQUwsRUFBN0IsR0FBaUR4QyxJQUFJLENBQUN3QyxVQUFMLEVBQWxELElBQXVFLEdBQS9FO0FBQ0EsUUFBSUMsQ0FBQyxHQUFJekMsSUFBSSxDQUFDMEMsVUFBTCxLQUFvQixFQUFwQixHQUF5QixNQUFJMUMsSUFBSSxDQUFDMEMsVUFBTCxFQUE3QixHQUFpRDFDLElBQUksQ0FBQzBDLFVBQUwsRUFBMUQ7QUFDQSxRQUFJQyxPQUFPLEdBQUdaLENBQUMsR0FBQ0UsQ0FBRixHQUFJRSxDQUFKLEdBQU1FLENBQU4sR0FBUUUsQ0FBUixHQUFVRSxDQUF4QjtBQUNBLFdBQU9FLE9BQVA7QUFDSCxHQWx2RUk7QUFtdkVMQyxFQUFBQSxTQW52RUssdUJBbXZFTTtBQUVQLFFBQUd4USxNQUFNLENBQUMrTCxZQUFWLEVBQXdCL0wsTUFBTSxDQUFDK0wsWUFBUCxDQUFvQnZCLE9BQXBCO0FBRTNCO0FBdnZFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7Zm9ybWF0ZVJhbmtUaW1lLCBMb2FkaW5nLCBUb2FzdH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbndpbmRvdy5jdXJyZW50TGV2ZWwgPSBbXTtcclxuXHJcbndpbmRvdy5lbGVTaXplID0gMzU7XHJcbndpbmRvdy5sYXlvdXQgPSBuZXcgQXJyYXkoKTtcclxud2luZG93LmJsb2NrTnVtID0gMTI7XHJcbndpbmRvdy51cGxvYWRMZXZlbCA9IG51bGw7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJsb2NrOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2Jsb2NrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2FsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOid3YWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JveCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYmFsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVVcDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlVXAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlUmlnaHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVJpZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZURvd246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZURvd24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlTGVmdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlTGVmdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdhbWVCbjpjYy5TcHJpdGUsXHJcbiAgICAgICAgYm94TnVtOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBDb3VudGVyOm51bGwsXHJcbiAgICAgICAgc3RlcENvdW50ZXJWYWx1ZTogMCxcclxuICAgICAgICB0aW1lQ291bnRlcjpudWxsLFxyXG4gICAgICAgIHRpbWVDb3VudGVyVmFsdWU6MCxcclxuICAgICAgICB0aW1lQ291bnRlclRpbWVyOm51bGwsXHJcbiAgICAgICAgbGV2ZWxDb3VudGVyOiBudWxsLFxyXG4gICAgICAgIG1vdmVIaXN0b3J5TGlzdDpbXSxcclxuICAgICAgICBsYXN0U2NvcmU6IG51bGwsXHJcbiAgICAgICAgbGFzdFN0ZXBOb2RlOiBudWxsLFxyXG4gICAgICAgIGxhc3RUaW1lbm9kZTogbnVsbCxcclxuICAgICAgICByYW5rSXRlbTpjYy5QcmVmYWIsXHJcbiAgICAgICAgYnVpbGRBcmVhOm51bGwsXHJcbiAgICAgICAgc29sdXRpb25CdG46bnVsbCxcclxuICAgICAgICBub25lU2tpcENoYW5nZTpmYWxzZSxcclxuICAgICAgICBzb2x1dGlvblN0ZXBJbmRleDogLTEsXHJcbiAgICAgICAgcmVjb3JkU29sdXRpb25TdGVwOltdXHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0V2luRWxlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJCZygpO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluW9k+WJjeWFs+WNoVxyXG4gICAgICAgIHRoaXMuaW5pdExldmVsKCk7XHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMnLHRoaXMubm9kZSkuaGVpZ2h0ID0gIChjYy53aW5TaXplLmhlaWdodCAtIGNjLndpblNpemUud2lkdGgpLzI7XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRUb3VjaE1vdmUoKTtcclxuICAgICAgICB0aGlzLnBlbmRhbnRBZGRFdmVudCgpO1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGluaXRXaW5FbGUoKXtcclxuICAgICAgICB0aGlzLmJ1aWxkQXJlYSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYnVpbGRBcmVhJyk7XHJcbiAgICAgICAgbGV0IHJlYWxTaXogPSBjYy53aW5TaXplLndpZHRoL3dpbmRvdy5ibG9ja051bTtcclxuICAgICAgICB3aW5kb3cuZWxlU2l6ZSA9IHJlYWxTaXo7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgd2luZG93LmxheW91dFtpXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHt4OjAseTowLHNpZ246MCxjb3ZlcjpudWxsfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRQb3NpdGlvbihsYXlvdXQpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7fTtcclxuICAgICAgICB0aGlzLmJveE51bSA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxsYXlvdXQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgbGF5b3V0WzBdLmxlbmd0aDsgbisrKXtcclxuICAgICAgICAgICAgICAgIC8vbGF5b3V0W2ldW25dLnNpZ24gLS0g5Lq654mp5L2N572uXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbaV1bbl0uc2lnbiA9PSA0IHx8IGxheW91dFtpXVtuXS5zaWduID09IDUgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNiB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA3KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+euseWtkOaVsOmHj1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W2ldW25dLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHJlbmRlckJnKCl7XHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC0oY2Mud2luU2l6ZS53aWR0aC8yKTtcclxuICAgICAgICBsZXQgc3RhcnRZID0gKHdpbmRvdy5lbGVTaXplKndpbmRvdy5ibG9ja051bSkvMjtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBuKndpbmRvdy5lbGVTaXplICsgc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSAtaSp3aW5kb3cuZWxlU2l6ZSArIHN0YXJ0WTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ246MCxcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjpudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgIC8vIOS4uuiuvue9ruS9jee9rlxyXG4gICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJCbigpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZUJuID09IG51bGwpIHRoaXMuZ2FtZUJuID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9nYW1lQm4nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHdpbmRvdy5iZ1VybEJhc2UrICdfNDAweDI0MC5qcGcnLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUsIGNjLnJlY3QoMCwwLDQwMCwyNDApKTtcclxuICAgICAgICAgICAgdGhhdC5nYW1lQm4uc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJMYXlvdXQobGF5b3V0KXtcclxuICAgICAgICB0aGlzLmJ1aWxkQXJlYS5kZXN0cm95QWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSB3aW5kb3cubGF5b3V0W2ldW25dLng7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHdpbmRvdy5sYXlvdXRbaV1bbl0ueTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChsYXlvdXRbaV1bbl0uc2lnbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3QmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdXYWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy53YWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3V2FsbC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdXYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCb3guc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Qm94KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3QmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVVcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVVwLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVSaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVJpZ2h0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVSaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVEb3duID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVEb3duLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVEb3duKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZUxlZnQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvbGVMZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZUxlZnQuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Um9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVVwKGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG5cclxuICAgICAgICAvL+S4iuS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiK5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5LTJdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uY292ZXIpIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOS4iuS4gOagvOeQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5LTJdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTJdW3hdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uY292ZXIpIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3Zlcil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3ZlRG93bihsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+S4i+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4i+S4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA2O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiL5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5KzJdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsyXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3krMV1beF0uY292ZXIpIGxheW91dFt5KzFdW3hdLmNvdmVyID0gNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiL5LiA5qC85Li655CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3krMl1beF0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMl1beF0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeSsxXVt4XS5jb3ZlcikgbGF5b3V0W3krMV1beF0uY292ZXIgPSA2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5jb3ZlciA9IDY7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3Zlcil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3ZlTGVmdChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+W3puS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3ldW3gtMl0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5jb3ZlcikgbGF5b3V0W3ldW3gtMV0uY292ZXIgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0yXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMl0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0yXS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5XVt4LTFdLmNvdmVyKSBsYXlvdXRbeV1beC0xXS5jb3ZlciA9IDc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLmNvdmVyID0gNztcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyICYmIGxheW91dFt5XVt4XS5jb3ZlciAhPSAyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgfSxcclxuICAgIG1vdmVSaWdodChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+WPs+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5Y+z5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOWPs+S4gOagvOS4uueQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3ZlciAmJiBsYXlvdXRbeV1beF0uY292ZXIgIT0gMil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KGxheW91dClcclxuICAgIH0sXHJcbiAgICByZXNldFBvc2l0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIikgdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAucHVzaCgnVScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJ1cGxvYWRTb2x1dGlvblwiKSB0aGF0LnJlY29yZFNvbHV0aW9uU3RlcC5wdXNoKCdSJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSBcInVwbG9hZFNvbHV0aW9uXCIpIHRoYXQucmVjb3JkU29sdXRpb25TdGVwLnB1c2goJ0QnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIikgdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAucHVzaCgnTCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5piv5ZCm5byA5ZCv5Zue6YCA5Yqf6IO9XHJcbiAgICAgICAgaWYgKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIiAgfHwgKHdpbmRvdy5zZXR0aW5nLnJlbGFzdCAmJiBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkpIHtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogd2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0ZXBDb3VudGVyVmFsdWUgKys7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy5zdGVwQ291bnRlcil0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgbGV0IGNvdmVyQm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHdpbmRvdy5jdXJyZW50TGV2ZWwubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbjx3aW5kb3cuY3VycmVudExldmVsWzBdLmxlbmd0aCA7IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuY3VycmVudExldmVsW2ldW25dLmNvdmVyICYmIHdpbmRvdy5jdXJyZW50TGV2ZWxbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJCb3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib3hOdW0gPT0gY292ZXJCb3hOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5oyR5oiY5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93Lm1vdmVNdXNpYyAmJiAhd2luZG93Lm1vdmVNdXNpYy5wYXVzZWQpIHdpbmRvdy5tb3ZlTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgIGlmKHdpbmRvdy5tb3ZlTXVzaWMgJiYgIXdpbmRvdy5tb3ZlTXVzaWMucGF1c2VkKSB3aW5kb3cubW92ZU11c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgaWYod2luZG93Lm1vdmVNdXNpYykgd2luZG93Lm1vdmVNdXNpYy5wbGF5KCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUb3VjaE1vdmUoKXtcclxuICAgICAgICBpZighd2luZG93LnNldHRpbmcudG91Y2hNb3ZlIHx8IHdpbmRvdy5mcm9tID09IFwiY2hlY2tTb2x1dGlvblwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgZmlndXJlTG9jYXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZmlndXJlTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBlbmRMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmKE1hdGguYWJzKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA+IE1hdGguYWJzKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSl7XHJcbiAgICAgICAgICAgICAgICBpZigoZmlndXJlTG9jYXRpb24ueCAtIGVuZExvY2F0aW9uLngpIDwgLTUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWPs+a7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZVJpZ2h0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZigoZmlndXJlTG9jYXRpb24ueCAtIGVuZExvY2F0aW9uLngpID4gNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5bem5ruRXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlTGVmdCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZigoZmlndXJlTG9jYXRpb24ueSAtIGVuZExvY2F0aW9uLnkpIDwgLTUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4iua7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZVVwKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZigoZmlndXJlTG9jYXRpb24ueSAtIGVuZExvY2F0aW9uLnkpID4gNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5LiL5ruRXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlRG93bih3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBzaG93UmVzdWx0KHR5cGUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZih0aGF0LnRpbWVDb3VudGVyVGltZXIpe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcilcclxuICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJyZXZpZXdcIiB8fCB3aW5kb3cuZnJvbSA9PSBcImNoZWNrU29sdXRpb25cIil7XHJcbiAgICAgICAgICAgIFRvYXN0KCfmjJHmiJjmiJDlip/vvIEnLDE1MDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvdXNlVGltZScsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmraXmlbDvvJpcIisgdGhhdC5zdGVwQ291bnRlclZhbHVlKyfmraUnO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvdXNlU3RlcCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLnlKjml7bvvJpcIisgdGhhdC50aW1lQ291bnRlclZhbHVlKyfnp5InO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0L0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfkuIrkvKDlhbPljaEnO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHd4LnJlcXVlc3RTdWJzY3JpYmVNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdG1wbElkczogWydiUUpiRjBWTEtmc01kWU9hSXBsbmZZMHNFcnZJYlpjSzhzQ3pMZ3NoSUxBJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNsb3VkRnVuY3Rpb25CYXNlVXJsK1wiL2dldFJldmlld0xldmVsTnVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOnt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9hZGRSZXZpZXdMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB3aW5kb3cudXBsb2FkTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXBOdW06IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogcmVzLmRhdGEudG90YWwrMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZT93aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldmVsVXBsb2FkTnVtID0gcGFyc2VJbnQocmVzLmRhdGEudG90YWwpKzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+WFs+WNoeS4iuS8oOaIkOWKn+W+heWuoeaguO+8jOWFs+mXreW5v+WRiuWQjui3s+WbnuS4u+eVjOmdoicsMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQuc2hvdygpLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+WFs+WNoeS4iuS8oOaIkOWKn+W+heeuoeeQhuWRmOWuoeaguO+8jOWNs+Wwhui3s+WbnuS4u+eVjOmdoicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6KGVycik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDlpLHotKUnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogJ2dldFJldmlld0xldmVsTnVtJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmFtZTogJ2FkZFJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnRlbnQ6IHdpbmRvdy51cGxvYWRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB1c2VTdGVwTnVtOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV2ZWxJbmRleDogcmVzLnJlc3VsdC50b3RhbCsxLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZT93aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgbGV2ZWxVcGxvYWROdW0gPSBwYXJzZUludChyZXMucmVzdWx0LnRvdGFsKSsxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmICh3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBUb2FzdCgn5YWz5Y2h5LiK5Lyg5oiQ5Yqf5b6F5a6h5qC477yM5YWz6Zet5bm/5ZGK5ZCO6Lez5Zue5Li755WM6Z2iJywyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgd2luZG93LmNyZWF0ZVNjZW5zZVVwbG9hZEFkLnNob3coKS5jYXRjaCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQub25DbG9zZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgVG9hc3QoJ+WFs+WNoeS4iuS8oOaIkOWKn+W+heeuoeeQhuWRmOWuoeaguO+8jOWNs+Wwhui3s+WbnuS4u+eVjOmdoicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgVG9hc3QoJ+S4iuS8oOWksei0pScsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICB9ZWxzZSBpZih3aW5kb3cuZnJvbSA9PSBcInVwbG9hZFNvbHV0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+S4iuS8oOaUu+eVpSc7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvbmV4dCcsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93Lmxhc3RTb2x1dGlvblN0ZXAgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5pu05paw5pS755WlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sYXN0U29sdXRpb25TdGVwPnRoYXQuc3RlcENvdW50ZXJWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNsb3VkRnVuY3Rpb25CYXNlVXJsK1wiL3VwZGF0ZUNsYXNzaWNzTGV2ZWxTb2x1dGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAuam9pbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfmlLvnlaXkuIrkvKDmiJDlip8nLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxlcnJvcjooZXJyKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5aSx6LSlLOivt+eojeWQjuWGjeivlScsMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogJ3VwZGF0ZUNsYXNzaWNzTGV2ZWxTb2x1dGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29udGVudDogdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAuam9pbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFRvYXN0KCfmlLvnlaXkuIrkvKDmiJDlip8nLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBUb2FzdCgn5LiK5Lyg5aSx6LSlLOivt+eojeWQjuWGjeivlScsMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+WOn+acieaUu+eVpeatpeaVsOabtOWwke+8jOS4iuS8oOWksei0pScsMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/kuIrkvKDmlLvnlaVcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNsb3VkRnVuY3Rpb25CYXNlVXJsK1wiL2FkZENsYXNzaWNzTGV2ZWxTb2x1dGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAuam9pbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfmlLvnlaXkuIrkvKDmiJDlip8nLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sZXJyb3I6KGVycik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5aSx6LSlLOivt+eojeWQjuWGjeivlScsMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogJ2FkZENsYXNzaWNzTGV2ZWxTb2x1dGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6IHRoYXQucmVjb3JkU29sdXRpb25TdGVwLmpvaW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBUb2FzdCgn5pS755Wl5LiK5Lyg5oiQ5YqfJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBUb2FzdCgn5LiK5Lyg5aSx6LSlLOivt+eojeWQjuWGjeivlScsMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih3aW5kb3cuZnJvbSAhPSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEluZGV4ID49IHdpbmRvdy5jbGFzc2ljc0xldmVsTnVtKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvbmV4dC9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAn5Zue5Li755WM6Z2iJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSdcclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvL+S4i+S4gOWFs1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdExldmVsKClcclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5maW5kKCdjb250ZW50QmcvbmV4dCcsbmV3TXlQcmVmYWIpLm9wYWNpdHkgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9yZXBsYXknLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcblxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9yYW5rJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5rWL6K+V5YWz5Y2h5rKh5pyJ5o6S6KGM5qacJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhhdC5zaG93TGV2ZWxSYW5rKCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3NoYXJlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICfnm4rmmbrmjqjnrrEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tICE9ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAn56ysJyt3aW5kb3cubGV2ZWxJbmRleCsn5YWzJysnLeS9v+eUqOatpeaVsO+8micrIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSArJy3mjJHmiJjmiJDlip/vvIEnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcrJ+Wwj+a4uOaIj++8jOW/q+adpeaMkeaImOWQp++8gSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZU92ZXJBbGVydCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICB9LDApXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwiYnVpbGRcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0eXBlPT0nc2tpcCcpe1xyXG4gICAgICAgICAgICB0aGF0LnN0ZXBDb3VudGVyVmFsdWUgPSAnOTk5OSc7XHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJWYWx1ZSA9ICc5OTk5JztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkvKDliIbmlbBcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgaWYgKHRoYXQubGFzdFNjb3JlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWIhuaVsOS4rS4uLicsMTUwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9hZGRDbGFzc2ljc0xldmVsU2NvcmVcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU/d2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXNlci5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVzZXIuYXBwSWQubGVuZ3RoLTUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sZXJyb3I6KGVycik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdhZGRDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU/d2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXNlci5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVzZXIuYXBwSWQubGVuZ3RoLTUpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUodGhhdC5sYXN0U2NvcmUudXNlU3RlcCx0aGF0Lmxhc3RTY29yZS51c2VUaW1lKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB8fCB0aGF0LnRpbWVDb3VudGVyVmFsdWUgPCB0aGF0Lmxhc3RTY29yZS51c2VUaW1lXHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5zdGVwQ291bnRlclZhbHVlIDwgdGhhdC5sYXN0U2NvcmUudXNlU3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSh0aGF0Lmxhc3RTY29yZS51c2VTdGVwLHRoYXQubGFzdFNjb3JlLnVzZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDliIbmlbDkuK0uLi4nLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNsb3VkRnVuY3Rpb25CYXNlVXJsK1wiL3VwZGF0ZUNsYXNzaWNzTGV2ZWxTY29yZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LGVycm9yOihlcnIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6ICd1cGRhdGVDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY3VyTGV2ZWxOdW0gPSB3aW5kb3cubGV2ZWxJbmRleDtcclxuICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGNsb3VkRnVuY3Rpb25CYXNlVXJsK1wiL3F1ZXJ5VXNlclwiLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOnthcHBJZDogd2luZG93LnVzZXIuYXBwSWR9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuZGF0YS5kYXRhLmxlbmd0aD4wICYmIHJlcy5kYXRhLmRhdGFbMF0ubGV2ZWxGaW5pc2hOdW0gPCBjdXJMZXZlbE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gY3VyTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwSWQgPSB3aW5kb3cudXNlci5hcHBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5sZXZlbEZpbmlzaE51bSA9IGN1ckxldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lKSBkYXRhLm5pY2tOYW1lID0gd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwpIGRhdGEucG9ydHJhaXQgPSB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNsb3VkRnVuY3Rpb25CYXNlVXJsK1wiL3VwZGF0ZVVzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTpkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sZXJyb3I6KGVycik9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LGVycm9yOihlcnIpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAvLyAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCAmJiByZXMucmVzdWx0LmRhdGFbMF0ubGV2ZWxGaW5pc2hOdW0gPCBjdXJMZXZlbE51bSl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSBjdXJMZXZlbE51bTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGRhdGEuYXBwSWQgPSB3aW5kb3cudXNlci5hcHBJZDtcclxuICAgICAgICAgICAgLy8gICAgICAgICBkYXRhLmxldmVsRmluaXNoTnVtID0gY3VyTGV2ZWxOdW07XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYod2luZG93LmxvZ2luSW5mby5uaWNrTmFtZSkgZGF0YS5uaWNrTmFtZSA9IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYod2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwpIGRhdGEucG9ydHJhaXQgPSB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgLy8gICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBuYW1lOiAndXBkYXRlVXNlcicsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgLy8gICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlcGxheUxheW91dCgpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIikgdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAgPSBbXTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwoKXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBpbml0UGVuZGFudCgpe1xyXG5cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy/lhbPljaFcclxuICAgICAgICBpZih0aGlzLmxldmVsQ291bnRlciA9PSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIGxldmVsTm9kZSA9IG5ldyBjYy5Ob2RlKCdsZXZlbENvdW50ZXInKTtcclxuICAgICAgICAgICAgbGV2ZWxOb2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcclxuICAgICAgICAgICAgbGV2ZWxOb2RlLndpZHRoID0gIGNjLndpblNpemUud2lkdGgqMC43O1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuaGVpZ2h0ID0gMTgwO1xyXG4gICAgICAgICAgICAvLyBsZXZlbE5vZGUuaG9yaXpvbnRhbEFsaWduID0gJ0NFTlRFUidcclxuICAgICAgICAgICAgdmFyIGxldmVsQ291bnRlciA9IGxldmVsTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigwLCAgKGNjLndpblNpemUuaGVpZ2h0LzIpIC0gKGNjLndpblNpemUuaGVpZ2h0KjAuMDUpKTtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmZvbnRTaXplID0gNjA7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5lbmFibGVCb2xkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gbGV2ZWxDb3VudGVyLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuQ0xBTVA7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5saW5lSGVpZ2h0ID0gNjA7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEJ5KXtcclxuICAgICAgICAgICAgICAgIGxldmVsQ291bnRlci5zdHJpbmcgPSAoJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzIC0gJyt3aW5kb3cubGV2ZWxCeSkuc3Vic3RyaW5nKDAsMTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBsZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIgPSBsZXZlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobGV2ZWxOb2RlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYod2luZG93LmxldmVsQnkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gKCfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyAtICcrd2luZG93LmxldmVsQnkpLnN1YnN0cmluZygwLDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+a1i+ivleWFs+WNoSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdyZXZpZXcnKXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+WuoeaguOWFs+WNoSc7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYod2luZG93LmdhbWVDaXJjbGUpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nYW1lQ2lyY2xlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5nYW1lQ2lyY2xlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cuYXVkaXRMZXZlbEFkKSB3aW5kb3cuYXVkaXRMZXZlbEFkLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiAhd2luZG93LmdhbWVDaXJjbGUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHN5c0luZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGl0TGV2ZWxBZFdpZHRoID0gc3lzSW5mby53aW5kb3dXaWR0aCowLjY7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaXRMZXZlbEFkTGVmdCA9IChzeXNJbmZvLndpbmRvd1dpZHRoKjAuNCkvMjtcclxuICAgICAgICAgICAgICAgIGlmKGF1ZGl0TGV2ZWxBZFdpZHRoPD0zMDApIGF1ZGl0TGV2ZWxBZExlZnQgPSAoc3lzSW5mby53aW5kb3dXaWR0aC0zMDApLzI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lrqHmoLjpobXpnaJibkFkXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXVkaXRMZXZlbEFkID0gIHd4LmNyZWF0ZUJhbm5lckFkKHtcclxuICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC1hMTY3MGMyMjUzMzRkYTI3JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdWRpdExldmVsQWRMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHN5c0luZm8ud2luZG93SGVpZ2h0KjAuMDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdWRpdExldmVsQWRXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmF1ZGl0TGV2ZWxBZC5vbkVycm9yKGVyciA9PiB7fSlcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hdWRpdExldmVsQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXVkaXRMZXZlbEFkLnNob3coKS5jYXRjaCgoKT0+e30pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICd1cGxvYWRTb2x1dGlvbicpe1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlci5zdHJpbmcgPSAn56ysICcrIHdpbmRvdy5sZXZlbEluZGV4ICsgJyDlhbMnKycgLSDkuIrkvKDmlLvnlaUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnY2hlY2tTb2x1dGlvbicpe1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlci5zdHJpbmcgPSAn56ysICcrIHdpbmRvdy5sZXZlbEluZGV4ICsgJyDlhbMnKycgLSDmlLvnlaUnO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+atpeaVsFxyXG4gICAgICAgIGlmKHRoaXMuc3RlcENvdW50ZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ3N0ZXBDb3VudGVyJyk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciBzdGVwQ291bnRlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigtKGNjLndpblNpemUud2lkdGgvMikgKyAoY2Mud2luU2l6ZS53aWR0aCowLjA1KSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgODApO1xyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5zdHJpbmcgPSAn5q2l5pWw77yaIDAnO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBDb3VudGVyID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zdGVwQ291bnRlclZhbHVlICA9IDA7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RlcENvdW50ZXIpIHRoaXMuc3RlcENvdW50ZXIuc3RyaW5nID0gXCLmraXmlbDvvJpcIiArIHRoaXMuc3RlcENvdW50ZXJWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+eUqOaXtlxyXG4gICAgICAgIGlmKHRoaXMudGltZUNvdW50ZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciB0aW1lTm9kZSA9IG5ldyBjYy5Ob2RlKCd0aW1lQ291bnRlcicpO1xyXG4gICAgICAgICAgICB0aW1lTm9kZS5zZXRBbmNob3JQb2ludCgwLCAxKTtcclxuICAgICAgICAgICAgdmFyIHRpbWVDb3VudGVyID0gdGltZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgdGltZUNvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigwICwgKGNjLndpblNpemUud2lkdGgvMikgKyA4MClcclxuICAgICAgICAgICAgdGltZUNvdW50ZXIuc3RyaW5nID0gJ+eUqOaXtu+8miAwJztcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlciA9IHRpbWVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRpbWVOb2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXJUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXJWYWx1ZSAgKys7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyKSB0aGlzLnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGlzLnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwxMDAwKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGlzLnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZUNvdW50ZXJUaW1lciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXJUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudGltZUNvdW50ZXIpdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLDEwMDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMubW92ZUhpc3RvcnlMaXN0ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMubW92ZUhpc3RvcnlMaXN0LnNwbGljZSgwLHRoaXMubW92ZUhpc3RvcnlMaXN0Lmxlbmd0aClcclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OlwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgcGVuZGFudEFkZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGNjLmZpbmQoJ2JhY2snLHRoaXMubm9kZSkub24oJ2NsaWNrJyx0aGlzLmJhY2ssIHRoaXMpXHJcbiAgICAgICAgLy/lvIDlkK/ngrnlh7vnp7vliqhcclxuICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5jbGlja01vdmUgJiYgd2luZG93LmZyb20gIT0gXCJjaGVja1NvbHV0aW9uXCIpIHtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvdXAnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZVVwKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvcmlnaHQnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZVJpZ2h0KHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvZG93bicsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlRG93bih3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2xlZnQnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZUxlZnQod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy91cCcsdGhpcy5ub2RlKS5yZW1vdmVGcm9tUGFyZW50KClcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvcmlnaHQnLHRoaXMubm9kZSkucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2Rvd24nLHRoaXMubm9kZSkucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2xlZnQnLHRoaXMubm9kZSkucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbGVmdEJ0biA9IGNjLmZpbmQoJ2dhbWVCdG5zL2JhY2tTdGVwL0JhY2tncm91bmQvTGFiZWwnLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3JykgbGVmdEJ0bi5zdHJpbmcgPSAn6YCa6L+HJztcclxuICAgICAgICBlbHNlIGlmKHdpbmRvdy5mcm9tID09ICdjaGVja1NvbHV0aW9uJykgbGVmdEJ0bi5zdHJpbmcgPSAnQWdhaW4nO1xyXG4gICAgICAgIGVsc2UgaWYoIXdpbmRvdy5zZXR0aW5nLnJlbGFzdCkgbGVmdEJ0bi5zdHJpbmcgPSAn6YeN546pJztcclxuICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9iYWNrU3RlcCcsdGhpcy5ub2RlKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAvL+aUu+eVpeaSreaUvlxyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnY2hlY2tTb2x1dGlvbicpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zb2x1dGlvblN0ZXBJbmRleD0tMVxyXG4gICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WuoeaguOWFs+WNoemAmui/h1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgndmVyaWZ5Q29udGFpbi9jbG9zZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXNzd29yZCA9ICBjYy5maW5kKCd2ZXJpZnlDb250YWluL2VkaXRib3gnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3ZlcmlmeUNvbnRhaW4vY29uZmlybScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwYXNzd29yZC50ZXh0TGFiZWwuc3RyaW5nID09ICcxOTk3MDcyMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGNsb3VkRnVuY3Rpb25CYXNlVXJsK1wiL2dldENsYXNzaWNzTGV2ZWxOdW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOnt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9hZGRDbGFzc2ljc0xldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogcmVzLmRhdGEudG90YWwrMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXBsb2FkSW5mby5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZT93aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXBsb2FkSW5mby5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVwbG9hZEluZm8uYXBwSWQubGVuZ3RoLTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy51cGxvYWRJbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2xvdWRGdW5jdGlvbkJhc2VVcmwrXCIvcmVtb3ZlUmV2aWV3TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntfaWQ6d2luZG93LnJldmlld0lkfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXZlbFVwbG9hZE51bSA9IHBhcnNlSW50KHJlcy5kYXRhLnRvdGFsKSsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5YWz5Y2hJytsZXZlbFVwbG9hZE51bSsn5LiK5Lyg5oiQ5Yqf77yM5Y2z5bCG6Lez5Zue5Li755WM6Z2iJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+iOt+WPluezu+e7n+mAmuefpeiuoumYheaDheWGtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpdGhTdWJzY3JpcHRpb25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy/mjqXmlLblrqHmoLjpgJrnn6VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZihyZXMuc3Vic2NyaXB0aW9uc1NldHRpbmcubWFpblN3aXRjaCAmJiAoIXJlcy5zdWJzY3JpcHRpb25zU2V0dGluZy5pdGVtU2V0dGluZ3MgfHwgcmVzLnN1YnNjcmlwdGlvbnNTZXR0aW5nLml0ZW1TZXR0aW5nc1snYlFKYkYwVkxLZnNNZFlPYUlwbG5mWTBzRXJ2SWJaY0s4c0N6TGdzaElMQSddPT0nYWNjZXB0Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvL+S4i+WPkeWuoeaguOmAmui/h+mAmuefpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHVybDogY2xvdWRGdW5jdGlvbkJhc2VVcmwrXCIvc2VuZEF1ZGl0TXNnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG9wZW5JZDogd2luZG93LnVwbG9hZEluZm8uYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbXNnVGl0bGU6J+aCqOaJgOS4iuS8oOeahOWFs+WNoeW3suWuoeaguOmAmui/hycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbXNnQ29udGVudDon5oKo5LiK5Lyg55qE5YWz5Y2h5Li656ysJytsZXZlbFVwbG9hZE51bSsn5YWzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB1cGxvYWREYXRlOiB0aGF0LnRpbWVzdGFtcFRvVGltZSh3aW5kb3cudXBsb2FkSW5mby5jcmVhdGVUaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LGVycm9yOihlcnIpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sZXJyb3I6KGVycik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWksei0pScsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOiAnZ2V0Q2xhc3NpY3NMZXZlbE51bSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgc3VjY2VzcyAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkQ2xhc3NpY3NMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiByZXMucmVzdWx0LnRvdGFsKzEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXBsb2FkSW5mby5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy51cGxvYWRJbmZvLm5pY2tOYW1lP3dpbmRvdy51cGxvYWRJbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51cGxvYWRJbmZvLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXBsb2FkSW5mby5hcHBJZC5sZW5ndGgtNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cudXBsb2FkSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlUmV2aWV3TGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDp3aW5kb3cucmV2aWV3SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbGV0IGxldmVsVXBsb2FkTnVtID0gcGFyc2VJbnQocmVzLnJlc3VsdC50b3RhbCkrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+WFs+WNoScrbGV2ZWxVcGxvYWROdW0rJ+S4iuS8oOaIkOWKn++8jOWNs+Wwhui3s+WbnuS4u+eVjOmdoicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGF0LnRpbWVDb3VudGVyVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy/ojrflj5bns7vnu5/pgJrnn6XorqLpmIXmg4XlhrVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoU3Vic2NyaXB0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o6l5pS25a6h5qC46YCa55+lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN1YnNjcmlwdGlvbnNTZXR0aW5nLm1haW5Td2l0Y2ggJiYgKCFyZXMuc3Vic2NyaXB0aW9uc1NldHRpbmcuaXRlbVNldHRpbmdzIHx8IHJlcy5zdWJzY3JpcHRpb25zU2V0dGluZy5pdGVtU2V0dGluZ3NbJ2JRSmJGMFZMS2ZzTWRZT2FJcGxuZlkwc0VydkliWmNLOHNDekxnc2hJTEEnXT09J2FjY2VwdCcpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/kuIvlj5HlrqHmoLjpgJrov4fpgJrnn6VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZW5kQXVkaXRNc2cnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbklkOiB3aW5kb3cudXBsb2FkSW5mby5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dUaXRsZTon5oKo5omA5LiK5Lyg55qE5YWz5Y2h5bey5a6h5qC46YCa6L+HJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50OifmgqjkuIrkvKDnmoTlhbPljaHkuLrnrKwnK2xldmVsVXBsb2FkTnVtKyflhbMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZERhdGU6IHRoYXQudGltZXN0YW1wVG9UaW1lKHdpbmRvdy51cGxvYWRJbmZvLmNyZWF0ZVRpbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5aSx6LSlJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5a+G56CB6ZSZ6K+v77yBJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygndmVyaWZ5QWRtaW4nLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcucmVsYXN0KXtcclxuICAgICAgICAgICAgICAgIGlmKHRoYXQubW92ZUhpc3RvcnlMaXN0Lmxlbmd0aCA+IDEgJiYgdGhhdC5zdGVwQ291bnRlclZhbHVlID49IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIikgdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoYXQubW92ZUhpc3RvcnlMaXN0W3RoYXQubW92ZUhpc3RvcnlMaXN0Lmxlbmd0aC0xXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN0ZXBDb3VudGVyVmFsdWUgLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGF0LnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3JldmlldycpIGNjLmZpbmQoJ2dhbWVCdG5zL21lbnUvQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfpqbPlm54nXHJcbiAgICAgICAgZWxzZSBpZih3aW5kb3cuZnJvbSA9PSBcImNoZWNrU29sdXRpb25cIikgY2MuZmluZCgnZ2FtZUJ0bnMvbWVudS9CYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ05leHQnXHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbWVudScsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcik7XHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgIC8v5pS755Wl5pKt5pS+XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdjaGVja1NvbHV0aW9uJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5zb2x1dGlvblN0ZXBJbmRleCArKyA7XHJcbiAgICAgICAgICAgICAgICBpZih0aGF0LnNvbHV0aW9uU3RlcEluZGV4Pj13aW5kb3cubGV2ZWxTb2x1dGlvbi5jb250ZW50Lmxlbmd0aCkgdGhhdC5zb2x1dGlvblN0ZXBJbmRleD0tMTtcclxuICAgICAgICAgICAgICAgIGlmKHRoYXQuc29sdXRpb25TdGVwSW5kZXggPD0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh3aW5kb3cubGV2ZWxTb2x1dGlvbi5jb250ZW50W3RoYXQuc29sdXRpb25TdGVwSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZVVwKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdEJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlRG93bih3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdMJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlTGVmdCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lrqHmoLjlhbPljaHpqbPlm55cclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3Jldmlldycpe1xyXG4gICAgICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3ZlcmlmeUNvbnRhaW4vY2xvc2UnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc3dvcmQgPSAgY2MuZmluZCgndmVyaWZ5Q29udGFpbi9lZGl0Ym94JyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCd2ZXJpZnlDb250YWluL2NvbmZpcm0nLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFzc3dvcmQudGV4dExhYmVsLnN0cmluZyA9PSAnMTk5NzA3MjAnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2xvdWRGdW5jdGlvbkJhc2VVcmwrXCIvcmVtb3ZlUmV2aWV3TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntfaWQ6d2luZG93LnJldmlld0lkfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCflhbPljaHlt7LpqbPlm57vvIzljbPlsIbot7Plm57kuLvnlYzpnaInLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ojrflj5bns7vnu5/pgJrnn6XorqLpmIXmg4XlhrVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB3aXRoU3Vic2NyaXB0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8v5o6l5pS25a6h5qC46YCa55+lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYocmVzLnN1YnNjcmlwdGlvbnNTZXR0aW5nLm1haW5Td2l0Y2ggJiYgKCFyZXMuc3Vic2NyaXB0aW9uc1NldHRpbmcuaXRlbVNldHRpbmdzIHx8IHJlcy5zdWJzY3JpcHRpb25zU2V0dGluZy5pdGVtU2V0dGluZ3NbJ2JRSmJGMFZMS2ZzTWRZT2FJcGxuZlkwc0VydkliWmNLOHNDekxnc2hJTEEnXT09J2FjY2VwdCcpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy/kuIvlj5HlrqHmoLjpgJrov4fpgJrnn6VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB1cmw6IGNsb3VkRnVuY3Rpb25CYXNlVXJsK1wiL3NlbmRBdWRpdE1zZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBvcGVuSWQ6IHdpbmRvdy51cGxvYWRJbmZvLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1zZ1RpdGxlOifmgqjmiYDkuIrkvKDnmoTlhbPljaHlt7LlrqHmoLjpqbPlm54nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1zZ0NvbnRlbnQ6J+mps+WbnuWOn+WboO+8muWFs+WNoei/h+S6jueugOWNlScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdXBsb2FkRGF0ZTogdGhhdC50aW1lc3RhbXBUb1RpbWUod2luZG93LnVwbG9hZEluZm8uY3JlYXRlVGltZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgbmFtZTogJ3NlbmRBdWRpdE1zZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICBvcGVuSWQ6IHdpbmRvdy51cGxvYWRJbmZvLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIG1zZ1RpdGxlOifmgqjmiYDkuIrkvKDnmoTlhbPljaHlt7LlrqHmoLjpqbPlm54nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIG1zZ0NvbnRlbnQ6J+mps+WbnuWOn+WboO+8muWFs+WNoei/h+S6jueugOWNlScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgdXBsb2FkRGF0ZTogdGhhdC50aW1lc3RhbXBUb1RpbWUod2luZG93LnVwbG9hZEluZm8uY3JlYXRlVGltZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LGVycm9yOihlcnIpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOiAncmVtb3ZlUmV2aWV3TGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBfaWQ6d2luZG93LnJldmlld0lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFRvYXN0KCflhbPljaHlt7LpqbPlm57vvIzljbPlsIbot7Plm57kuLvnlYzpnaInLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy/ojrflj5bns7vnu5/pgJrnn6XorqLpmIXmg4XlhrVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2l0aFN1YnNjcmlwdGlvbnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy/mjqXmlLblrqHmoLjpgJrnn6VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmKHJlcy5zdWJzY3JpcHRpb25zU2V0dGluZy5tYWluU3dpdGNoICYmICghcmVzLnN1YnNjcmlwdGlvbnNTZXR0aW5nLml0ZW1TZXR0aW5ncyB8fCByZXMuc3Vic2NyaXB0aW9uc1NldHRpbmcuaXRlbVNldHRpbmdzWydiUUpiRjBWTEtmc01kWU9hSXBsbmZZMHNFcnZJYlpjSzhzQ3pMZ3NoSUxBJ109PSdhY2NlcHQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy/kuIvlj5HlrqHmoLjpgJrov4fpgJrnn6VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VuZEF1ZGl0TXNnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuSWQ6IHdpbmRvdy51cGxvYWRJbmZvLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbXNnVGl0bGU6J+aCqOaJgOS4iuS8oOeahOWFs+WNoeW3suWuoeaguOmps+WbnicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBtc2dDb250ZW50OifpqbPlm57ljp/lm6DvvJrlhbPljaHov4fkuo7nroDljZUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkRGF0ZTogdGhhdC50aW1lc3RhbXBUb1RpbWUod2luZG93LnVwbG9hZEluZm8uY3JlYXRlVGltZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5a+G56CB6ZSZ6K+v77yBJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygndmVyaWZ5QWRtaW4nLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gdGhhdC5ub2RlO1xyXG4gICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9jb250aW51ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoYXQudGltZUNvdW50ZXJUaW1lciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoYXQudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoYXQpLDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9yZXBsYXknLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vbGV2ZWxzJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vcmFuaycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5rWL6K+V5YWz5Y2h5rKh5pyJ5o6S6KGM5qacJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93TGV2ZWxSYW5rKCk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9zaGFyZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICfnm4rmmbrmjqjnrrEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSAhPSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICfnrKwnK3dpbmRvdy5sZXZlbEluZGV4KyflhbMt5b+r5p2l5oyR5oiY5ZCnISdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJ+Wwj+a4uOaIj++8jOW/q+adpeaMkeaImOWQp++8gSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAnLeS9v+eUqOatpeaVsO+8midcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2dhbWVNZW51Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sdGhpcylcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdExldmVsKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSgn5pegJywn5pegJylcclxuXHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6J2J1aWxkTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluaMguS7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OididWlsZExldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSgn5pegJywn5pegJylcclxuXHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6J3Jldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW5oyC5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvL+e7j+WFuOWFs+WNoVxyXG4gICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxDbGFzc2lmeSA9PSAnY2xhc3NpY3NMZXZlbCcpe1xyXG4gICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9xdWVyeUNsYXNzaWNzTGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6d2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuZGF0YS5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YS5kYXRhWzBdLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsQnkgPSByZXMuZGF0YS5kYXRhWzBdLm5pY2tOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW5oyC5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LGVycm9yOihlcnIpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFwcElkOndpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5yZXN1bHQuZGF0YVswXS5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvdy5sZXZlbEJ5ID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5pY2tOYW1lO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyDliJ3lp4vljJbmjILku7ZcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRhdGE6d2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjbG91ZEZ1bmN0aW9uQmFzZVVybCtcIi9xdWVyeUNsYXNzaWNzTGV2ZWxTY29yZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6d2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5kYXRhLmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSByZXMuZGF0YS5kYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUodGhhdC5sYXN0U2NvcmUudXNlU3RlcCx0aGF0Lmxhc3RTY29yZS51c2VUaW1lKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSgn5pegJywn5pegJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEluZGV4ID09IDEpIFRvYXN0KCdUaXA6IOWPr+a7keWKqOWxj+W5leaOp+WItuS6uueJqScsNTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxlcnJvcjooZXJyKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbFNjb3JlJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBhcHBJZDp3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSByZXMucmVzdWx0LmRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKHRoYXQubGFzdFNjb3JlLnVzZVN0ZXAsdGhhdC5sYXN0U2NvcmUudXNlVGltZSlcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoYXQubGFzdFNjb3JlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUoJ+aXoCcsJ+aXoCcpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEluZGV4ID09IDEpIFRvYXN0KCdUaXA6IOWPr+a7keWKqOWxj+W5leaOp+WItuS6uueJqScsNTAwMCk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nvZHnu5zlhbPljaFcclxuICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy/mlLvnlaVcclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gIT0gXCJ1cGxvYWRTb2x1dGlvblwiICYmIHdpbmRvdy5mcm9tICE9IFwiY2hlY2tTb2x1dGlvblwiKXtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RheSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc29sdXRpb25CdG5Ob2RlID0gbmV3IGNjLk5vZGUoJ3NraXBOb2RlJyk7XHJcbiAgICAgICAgICAgICAgICBzb2x1dGlvbkJ0bk5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc29sdXRpb25CdG5MYWJlbCA9IHNvbHV0aW9uQnRuTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgc29sdXRpb25CdG5MYWJlbC5ub2RlLnNldFBvc2l0aW9uKChjYy53aW5TaXplLndpZHRoLzIpIC0gKGNjLndpblNpemUud2lkdGgqMC4yKSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgODApO1xyXG4gICAgICAgICAgICAgICAgc29sdXRpb25CdG5MYWJlbC5zdHJpbmcgPSAn55u45YWz5pS755WlJztcclxuICAgICAgICAgICAgICAgIHRoYXQuc29sdXRpb25CdG4gPSBzb2x1dGlvbkJ0bk5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICAgICAgdGhhdC5ub2RlLmFkZENoaWxkKHNvbHV0aW9uQnRuTm9kZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5hYmxlU2tpcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdza2lwQWRJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5udW0+PTUpIHRoYXQubm9uZVNraXBDaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGF0LnNvbHV0aW9uQnRuLm5vZGUub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWVuYWJsZVNraXApIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVTa2lwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyKSBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnc29sdXRpb25Db250YWluL2Nsb3NlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlcikgdGhhdC50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhhdC50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGF0KSwxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnc29sdXRpb25Db250YWluL3NraXBMZXZlbCcsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC5sYXN0U2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5b2T5YmN5YWz5Y2h5bey6YCa6L+H5peg6ZyA5YaN6Lez6L+HXCIsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC5ub25lU2tpcENoYW5nZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLmr4/lpKnmnIDlpJrot7Pov4c15Liq5YWz5Y2hXCIsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuW5v+WRiuaLieWPluS4rS4uLlwiLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXdpbmRvdy5za2lwTGV2ZWxBZCl7VG9hc3QoXCLlub/lkYrmi4nlj5blpLHotKVcIiwxNTAwKTtyZXR1cm47fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNraXBMZXZlbEFkLnNob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQubG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cuc2tpcExldmVsQWQuc2hvdygpKS5jYXRjaCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLlub/lkYrmi4nlj5blpLHotKVcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQub2ZmQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5za2lwTGV2ZWxBZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bCP5LqOIDIuMS4wIOeahOWfuuehgOW6k+eJiOacrO+8jHJlcyDmmK/kuIDkuKogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJWYWx1ZSAgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlcikgdGhhdC50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhhdC50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoYXQpLDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dSZXN1bHQoJ3NraXAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6ZmQ5Yi26Lez6L+H5qyh5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc2tpcEFkSW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmRhdGUgPT0gdG9kYXkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5udW0+PTUpIHRoYXQubm9uZVNraXBDaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3NraXBBZEluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6dG9kYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOnJlcy5kYXRhLm51bSsxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc2tpcEFkSW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTp0b2RheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdza2lwQWRJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTp0b2RheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bToxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnc29sdXRpb25Db250YWluL2NoZWNrU29sdXRpb24nLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogY2xvdWRGdW5jdGlvbkJhc2VVcmwrXCIvcXVlcnlDbGFzc2ljc0xldmVsU29sdXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxTb2x1dGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuZGF0YS5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5bm/5ZGK5ouJ5Y+W5LitLi4uXCIsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkKXtUb2FzdChcIuW5v+WRiuaLieWPluWksei0pVwiLDE1MDApO3JldHVybjt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQuc2hvdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZC5sb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZC5zaG93KCkpLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuW5v+WRiuaLieWPluWksei0pVwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZC5vZmZDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkLm9uQ2xvc2UocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobjgJDlhbPpl63lub/lkYrjgJHmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI/kuo4gMi4xLjAg55qE5Z+656GA5bqT54mI5pys77yMcmVzdWx0IOaYr+S4gOS4qiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5pc0VuZGVkIHx8IHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9IFwiY2hlY2tTb2x1dGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxTb2x1dGlvbiA9IHJlcy5kYXRhLmRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbFNvbHV0aW9uLmNvbnRlbnQgPSByZXMuZGF0YS5kYXRhWzBdLmNvbnRlbnQuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5b2T5YmN5YWz5Y2h5pqC5peg5pS755WlJywzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sZXJyb3I6KGVycik9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWxTb2x1dGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubGV2ZWxTb2x1dGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFRvYXN0KFwi5bm/5ZGK5ouJ5Y+W5LitLi4uXCIsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmKCF3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQpe1RvYXN0KFwi5bm/5ZGK5ouJ5Y+W5aSx6LSlXCIsMTUwMCk7cmV0dXJuO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkLnNob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkLmxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQuc2hvdygpKS5jYXRjaCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuW5v+WRiuaLieWPluWksei0pVwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZC5vZmZDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQub25DbG9zZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyDlsI/kuo4gMi4xLjAg55qE5Z+656GA5bqT54mI5pys77yMcmVzdWx0IOaYr+S4gOS4qiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmlzRW5kZWQgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9IFwiY2hlY2tTb2x1dGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbFNvbHV0aW9uID0gcmVzLnJlc3VsdC5kYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbFNvbHV0aW9uLmNvbnRlbnQgPSByZXMucmVzdWx0LmRhdGFbMF0uY29udGVudC5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyDmkq3mlL7kuK3pgJTpgIDlh7rvvIzkuI3kuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBUb2FzdCgn5b2T5YmN5YWz5Y2h5pqC5peg5pS755WlJywzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdzb2x1dGlvbkNvbnRhaW4vdXBsb2FkU29sdXRpb24nLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ3VwbG9hZFNvbHV0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3NvbHV0aW9uRGlhbG9nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVNraXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgIH0sIHRoYXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmFjaygpe1xyXG4gICAgICAgIHRoaXMuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZUNvdW50ZXJUaW1lcilcclxuICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICAgICAgfWVsc2UgaWYod2luZG93LmZyb20gPT0gJ3VwbG9hZFNvbHV0aW9uJyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgfWVsc2UgaWYod2luZG93LmZyb20gPT0gJ2NoZWNrU29sdXRpb24nKXtcclxuICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSdcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICB9ZWxzZSBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSdcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdidWlsZCcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJ1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTGFzdFNjb3JlKHN0ZXAsdGltZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcgfHwgd2luZG93LmZyb20gPT0gXCJyZXZpZXdcIil7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAndXBsb2FkU29sdXRpb24nKXtcclxuICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGNsb3VkRnVuY3Rpb25CYXNlVXJsK1wiL3F1ZXJ5Q2xhc3NpY3NMZXZlbFNvbHV0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6eyBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0QmVzdFNjb3JlID0gJ+W9k+WJjeaUu+eVpe+8muaaguaXoCc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmxhc3RTb2x1dGlvblN0ZXAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuZGF0YS5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lmxhc3RTb2x1dGlvblN0ZXAgPSByZXMuZGF0YS5kYXRhWzBdLnVzZVN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCZXN0U2NvcmUgPSAn5b2T5YmN5pS755Wl77ya5q2l5pWwJyArIHJlcy5kYXRhLmRhdGFbMF0udXNlU3RlcCArICcgLSDotKHnjK7ogIXvvJonKyByZXMuZGF0YS5kYXRhWzBdLm5pY2tOYW1lLnN1YnN0cmluZygwLDE2KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhhdC5sYXN0U3RlcE5vZGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0U3RlcE5vZGUgPSBuZXcgY2MuTm9kZSgnbGFzdFN0ZXBOb2RlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTdGVwTm9kZS5zZXRBbmNob3JQb2ludCgwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ZXBDb3VudGVyID0gbGFzdFN0ZXBOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDE2MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gbGFzdEJlc3RTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUgPSBsYXN0U3RlcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm5vZGUuYWRkQ2hpbGQobGFzdFN0ZXBOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUuc3RyaW5nID0gbGFzdEJlc3RTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LGVycm9yOihlcnIpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWxTb2x1dGlvbicsXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXhcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGxhc3RCZXN0U2NvcmUgPSAn5b2T5YmN5pS755Wl77ya5pqC5pegJztcclxuICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sYXN0U29sdXRpb25TdGVwID0gbnVsbDtcclxuICAgICAgICAgICAgLy8gICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvdy5sYXN0U29sdXRpb25TdGVwID0gcmVzLnJlc3VsdC5kYXRhWzBdLnVzZVN0ZXA7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGFzdEJlc3RTY29yZSA9ICflvZPliY3mlLvnlaXvvJrmraXmlbAnICsgcmVzLnJlc3VsdC5kYXRhWzBdLnVzZVN0ZXAgKyAnIC0g6LSh54yu6ICF77yaJysgcmVzLnJlc3VsdC5kYXRhWzBdLm5pY2tOYW1lLnN1YnN0cmluZygwLDE2KVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgaWYodGhhdC5sYXN0U3RlcE5vZGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdmFyIGxhc3RTdGVwTm9kZSA9IG5ldyBjYy5Ob2RlKCdsYXN0U3RlcE5vZGUnKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBsYXN0U3RlcE5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdmFyIHN0ZXBDb3VudGVyID0gbGFzdFN0ZXBOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc3RlcENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigtKGNjLndpblNpemUud2lkdGgvMikgKyAoY2Mud2luU2l6ZS53aWR0aCowLjA1KSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgMTYwKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHN0ZXBDb3VudGVyLnN0cmluZyA9IGxhc3RCZXN0U2NvcmU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUgPSBsYXN0U3RlcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoYXQubm9kZS5hZGRDaGlsZChsYXN0U3RlcE5vZGUpO1xyXG4gICAgICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUuc3RyaW5nID0gbGFzdEJlc3RTY29yZTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2NoZWNrU29sdXRpb24nKXtcclxuICAgICAgICAgICAgaWYodGhhdC5sYXN0U3RlcE5vZGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFzdFN0ZXBOb2RlID0gbmV3IGNjLk5vZGUoJ2xhc3RTdGVwTm9kZScpO1xyXG4gICAgICAgICAgICAgICAgbGFzdFN0ZXBOb2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBDb3VudGVyID0gbGFzdFN0ZXBOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBzdGVwQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKC0oY2Mud2luU2l6ZS53aWR0aC8yKSArIChjYy53aW5TaXplLndpZHRoKjAuMDUpLCAgKGNjLndpblNpemUud2lkdGgvMikgKyAxNjApXHJcbiAgICAgICAgICAgICAgICBzdGVwQ291bnRlci5zdHJpbmcgPSAn5b2T5YmN5pS755Wl77ya5q2l5pWwJyArIHdpbmRvdy5sZXZlbFNvbHV0aW9uLnVzZVN0ZXAgKyAnIC0g6LSh54yu6ICF77yaJysgd2luZG93LmxldmVsU29sdXRpb24ubmlja05hbWUuc3Vic3RyaW5nKDAsMTYpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUgPSBsYXN0U3RlcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICAgICAgdGhhdC5ub2RlLmFkZENoaWxkKGxhc3RTdGVwTm9kZSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUuc3RyaW5nID0gJ+W9k+WJjeaUu+eVpe+8muatpeaVsCcgKyB3aW5kb3cubGV2ZWxTb2x1dGlvbi51c2VTdGVwICsgJyAtIOi0oeeMruiAhe+8micrIHdpbmRvdy5sZXZlbFNvbHV0aW9uLm5pY2tOYW1lLnN1YnN0cmluZygwLDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/mnIDkvbPmraXmlbBcclxuICAgICAgICBpZih0aGF0Lmxhc3RTdGVwTm9kZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIGxhc3RTdGVwTm9kZSA9IG5ldyBjYy5Ob2RlKCdsYXN0U3RlcE5vZGUnKTtcclxuICAgICAgICAgICAgbGFzdFN0ZXBOb2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBsYXN0U3RlcE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigtKGNjLndpblNpemUud2lkdGgvMikgKyAoY2Mud2luU2l6ZS53aWR0aCowLjA1KSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgMTYwKVxyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5zdHJpbmcgPSAn5pyA5L2z5oiQ57up77ya5q2l5pWwICcrIHN0ZXArXCIgLSDnlKjml7YgXCIrdGltZTtcclxuICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUgPSBsYXN0U3RlcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGF0Lm5vZGUuYWRkQ2hpbGQobGFzdFN0ZXBOb2RlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUuc3RyaW5nID0gJ+acgOS9s+aIkOe7qe+8muatpeaVsCAnKyBzdGVwK1wiIC0g55So5pe2IFwiK3RpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgc2hvd0xldmVsUmFuaygpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciByYW5rUGFnZSA9IDEscmFua1BhZ2VTaXplID0gNTA7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjYy5maW5kKCdyYW5rTGlzdC92aWV3L2NvbnRlbnQnLG5ld015UHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2Nsb3NlJyxuZXdNeVByZWZhYikub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBpZih0aGF0LnJhbmtJdGVtID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtJdGVtJywgZnVuY3Rpb24gKGVycixyZXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmFua0l0ZW0gPSBjYy5pbnN0YW50aWF0ZShyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMZXZlbFJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3JhbmtMaXN0JyxuZXdNeVByZWZhYikub24oJ2JvdW5jZS1ib3R0b20nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmFua1BhZ2UrKztcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCd0aExldmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAn5q2lIOaVsCdcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIHJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxwYWdlLHBhZ2VTaXplKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtTnVtID0gY29udGVudC5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogY2xvdWRGdW5jdGlvbkJhc2VVcmwrXCIvcXVlcnlDbGFzc2ljc0xldmVsU2NvcmVcIixcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDp3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOndpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5kYXRhLmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAxOyBpPD0gcmVzLmRhdGEuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMuZGF0YS5kYXRhW2ktMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoYXQucmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRSYW5rJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpK2N1cnJlbnRJdGVtTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGREYXRlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRlUmFua1RpbWUoZGF0YS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEudXNlU3RlcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEucG9ydHJhaXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGRhdGEucG9ydHJhaXQrJz9hYWE9YWEuanBnJywgIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ21hc2svSW1hZ2UnLG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUG9ydHJhaXQnKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLm5pY2tOYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZE5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiK2RhdGEubmlja05hbWUrXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuayoeacieabtOWkmuaVsOaNruS6hlwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxlcnJvcjooZXJyKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWxTY29yZScsXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhOntcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXZlbEluZGV4OndpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhciBkYXRhID0gIHJlcy5yZXN1bHQuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoYXQucmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZihyYW5rSXRlbSA9PSBudWxsKSByYW5rSXRlbSA9IG5vZGU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGREYXRlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRlUmFua1RpbWUoZGF0YS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS51c2VTdGVwO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZihkYXRhLnBvcnRyYWl0KXtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGRhdGEucG9ydHJhaXQrJz9hYWE9YWEuanBnJywgIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdtYXNrL0ltYWdlJyxub2RlLmdldENoaWxkQnlOYW1lKCd0ZFBvcnRyYWl0JykpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYoZGF0YS5uaWNrTmFtZSl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZE5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiK2RhdGEubmlja05hbWUrXCIgXCI7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29udGVudC5oZWlnaHQgPSBjb250ZW50LmNoaWxkcmVuQ291bnQgKiByYW5rSXRlbS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gICAgICAgICBUb2FzdChcIuayoeacieabtOWkmuaVsOaNruS6hlwiLDE1MDApXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgLy8gICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgdGltZXN0YW1wVG9UaW1lKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTsvL+aXtumXtOaIs+S4ujEw5L2N6ZyAKjEwMDDvvIzml7bpl7TmiLPkuLoxM+S9jeeahOivneS4jemcgOS5mDEwMDBcclxuICAgICAgICB2YXIgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICflubQnO1xyXG4gICAgICAgIHZhciBNID0gKGRhdGUuZ2V0TW9udGgoKSsxIDwgMTAgPyAnMCcrKGRhdGUuZ2V0TW9udGgoKSsxKSA6IGRhdGUuZ2V0TW9udGgoKSsxKSArICfmnIgnO1xyXG4gICAgICAgIHZhciBEID0gKGRhdGUuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcrZGF0ZS5nZXREYXRlKCkgOiBkYXRlLmdldERhdGUoKSkgKyAn5pelICc7XHJcbiAgICAgICAgdmFyIGggPSAoZGF0ZS5nZXRIb3VycygpIDwgMTAgPyAnMCcrZGF0ZS5nZXRIb3VycygpIDogZGF0ZS5nZXRIb3VycygpKSArICc6JztcclxuICAgICAgICB2YXIgbSA9IChkYXRlLmdldE1pbnV0ZXMoKSA8IDEwID8gJzAnK2RhdGUuZ2V0TWludXRlcygpIDogZGF0ZS5nZXRNaW51dGVzKCkpICsgJzonO1xyXG4gICAgICAgIHZhciBzID0gKGRhdGUuZ2V0U2Vjb25kcygpIDwgMTAgPyAnMCcrZGF0ZS5nZXRTZWNvbmRzKCkgOiBkYXRlLmdldFNlY29uZHMoKSk7XHJcbiAgICAgICAgbGV0IHN0ckRhdGUgPSBZK00rRCtoK20rcztcclxuICAgICAgICByZXR1cm4gc3RyRGF0ZTtcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuXHJcbiAgICAgICAgaWYod2luZG93LmF1ZGl0TGV2ZWxBZCkgd2luZG93LmF1ZGl0TGV2ZWxBZC5kZXN0cm95KCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
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
  },
  onDestroy: function onDestroy() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnVpbGQuanMiXSwibmFtZXMiOlsid2luZG93IiwiZWxlU2l6ZSIsImxheW91dCIsIkFycmF5IiwiYmxvY2tOdW0iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJsb2NrIiwidHlwZSIsIlByZWZhYiIsImRpc3BsYXlOYW1lIiwid2FsbCIsImJveCIsImJhbGwiLCJyb2xlVXAiLCJyb2xlUmlnaHQiLCJyb2xlRG93biIsInJvbGVMZWZ0IiwicG9zaXRpb24iLCJnYW1lQm4iLCJTcHJpdGUiLCJib3hOdW0iLCJzZWxlY3RFbGUiLCJ3YWxsRWxlIiwiYm94RWxlIiwiYmFsbEVsZSIsInVwRWxlIiwicmlnaHRFbGUiLCJkb3duRWxlIiwibGVmdEVsZSIsIm9uTG9hZCIsInRoYXQiLCJpbml0V2luRWxlIiwicmVuZGVyQmciLCJmcm9tIiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsImJ1aWxkTGV2ZWwiLCJkYXRhIiwicmVuZGVyTGF5b3V0IiwiZmluZCIsIm5vZGUiLCJoZWlnaHQiLCJ3aW5TaXplIiwid2lkdGgiLCJzdGFydCIsImFkZEV2ZW50IiwicmVuZGVyU2VsZWN0RWxlIiwicmVhbFNpeiIsImkiLCJuIiwieCIsInkiLCJzaWduIiwiY292ZXIiLCJpbml0UG9zaXRpb24iLCJsZW5ndGgiLCJzdGFydFgiLCJzdGFydFkiLCJuZXdCbG9jayIsImluc3RhbnRpYXRlIiwic2V0UG9zaXRpb24iLCJhZGRDaGlsZCIsInJlbmRlckJuIiwiZ2V0Q29tcG9uZW50IiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImJnVXJsQmFzZSIsImVyciIsInRleHR1cmUiLCJzcHJpdGUiLCJTcHJpdGVGcmFtZSIsInJlY3QiLCJzcHJpdGVGcmFtZSIsIm9uIiwiYmFjayIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJiYWxsTnVtIiwicm9sZU51bSIsInNldFN0b3JhZ2UiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImV2ZW50IiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsInRvdWNoUG9pbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsImNvbG9yIiwiQ29sb3IiLCJmcm9tSEVYIiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0Iiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBakI7QUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLElBQUlDLEtBQUosRUFBaEI7QUFDQUgsTUFBTSxDQUFDSSxRQUFQLEdBQWtCLEVBQWxCO0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZOO0FBR0hDLE1BQUFBLFdBQVcsRUFBQztBQUhULEtBREM7QUFNUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUDtBQUdGQyxNQUFBQSxXQUFXLEVBQUM7QUFIVixLQU5FO0FBV1JFLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRlI7QUFHREMsTUFBQUEsV0FBVyxFQUFDO0FBSFgsS0FYRztBQWdCUkcsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGTCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUDtB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U0FBcEIsQ0FBbkI7QUFDQXFGLFlBQUFBLFlBQVksQ0FBQ3BDLFdBQWIsQ0FBeUJWLENBQXpCLEVBQTJCQyxDQUEzQjtBQUNBLGlCQUFLWCxJQUFMLENBQVVxQixRQUFWLENBQW1CbUMsWUFBbkI7QUFDQTs7QUFDSixlQUFLLENBQUw7QUFDSSxnQkFBSUMsV0FBVyxHQUFHbEcsRUFBRSxDQUFDNEQsV0FBSCxDQUFlLEtBQUsvQyxRQUFwQixDQUFsQjtBQUNBcUYsWUFBQUEsV0FBVyxDQUFDckMsV0FBWixDQUF3QlYsQ0FBeEIsRUFBMEJDLENBQTFCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVXFCLFFBQVYsQ0FBbUJvQyxXQUFuQjtBQUNBOztBQUNKLGVBQUssQ0FBTDtBQUNJLGdCQUFJQyxXQUFXLEdBQUduRyxFQUFFLENBQUM0RCxXQUFILENBQWUsS0FBSzlDLFFBQXBCLENBQWxCO0FBQ0FxRixZQUFBQSxXQUFXLENBQUN0QyxXQUFaLENBQXdCVixDQUF4QixFQUEwQkMsQ0FBMUI7QUFDQSxpQkFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQnFDLFdBQW5CO0FBQ0E7QUF4Q1I7QUEwQ0g7QUFDSjtBQUVKLEdBbFpJO0FBbVpMQyxFQUFBQSxTQW5aSyx1QkFtWk0sQ0FHVjtBQXRaSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0IHtMb2FkaW5nLCBUb2FzdH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbndpbmRvdy5lbGVTaXplID0gMzU7XHJcbndpbmRvdy5sYXlvdXQgPSBuZXcgQXJyYXkoKTtcclxud2luZG93LmJsb2NrTnVtID0gMTI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmxvY2s6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYmxvY2snXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YWxsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3dhbGwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib3g6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYm94J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidiYWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZVVwOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVVcCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVSaWdodDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlUmlnaHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlRG93bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlRG93bidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVMZWZ0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVMZWZ0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2FtZUJuOmNjLlNwcml0ZSxcclxuICAgICAgICBib3hOdW06e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0RWxlOiAxLFxyXG4gICAgICAgIHdhbGxFbGU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIGJveEVsZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgYmFsbEVsZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgdXBFbGU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJpZ2h0RWxlOmNjLlByZWZhYixcclxuICAgICAgICBkb3duRWxlOmNjLlByZWZhYixcclxuICAgICAgICBsZWZ0RWxlOmNjLlByZWZhYixcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdFdpbkVsZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuICAgICAgICAvLyB0aGlzLnJlbmRlckJuKCk7XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2dhbWUnKXtcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6J2J1aWxkTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuYnVpbGRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoJ2J0bnMnLHRoaXMubm9kZSkuaGVpZ2h0ID0gIChjYy53aW5TaXplLmhlaWdodCAtIGNjLndpblNpemUud2lkdGgpLzI7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICBpbml0V2luRWxlKCl7XHJcbiAgICAgICAgbGV0IHJlYWxTaXogPSBjYy53aW5TaXplLndpZHRoL3dpbmRvdy5ibG9ja051bTtcclxuICAgICAgICB3aW5kb3cuZWxlU2l6ZSA9IHJlYWxTaXo7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0gPSB7eDowLHk6MCxzaWduOjAsY292ZXI6bnVsbH1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dID0ge3g6MCx5OjAsc2lnbjowLGNvdmVyOm51bGx9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdFBvc2l0aW9uKGxheW91dCl7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt9O1xyXG4gICAgICAgIHRoaXMuYm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGxheW91dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCBsYXlvdXRbMF0ubGVuZ3RoOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgLy9sYXlvdXRbaV1bbl0uc2lnbiAtLSDkurrniankvY3nva5cclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFtpXVtuXS5zaWduID09IDQgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNSB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA2IHx8IGxheW91dFtpXVtuXS5zaWduID09IDcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v566x5a2Q5pWw6YePXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveE51bSArKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyQmcoKXtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLShjYy53aW5TaXplLndpZHRoLzIpO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSAod2luZG93LmVsZVNpemUqd2luZG93LmJsb2NrTnVtKS8yO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCB3aW5kb3cuYmxvY2tOdW07IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IG4qd2luZG93LmVsZVNpemUgKyBzdGFydFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IC1pKndpbmRvdy5lbGVTaXplICsgc3RhcnRZO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbjowLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgLy8g5Li66K6+572u5L2N572uXHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHJlbmRlckJuKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZUJuID09IG51bGwpIHRoaXMuZ2FtZUJuID0gY2MuZmluZCgnQ2FudmFzL2J1aWxkQmcvZ2FtZUJuJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh3aW5kb3cuYmdVcmxCYXNlKyAnXzQwMHgyNDAuanBnJywgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlLCBjYy5yZWN0KDAsMCw0MDAsMjQwKSk7XHJcbiAgICAgICAgICAgIHRoYXQuZ2FtZUJuLnNwcml0ZUZyYW1lID0gc3ByaXRlOyAvL+iuvue9rueyvueBtee7hOS7tuWbvueJh+i1hOa6kFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYodGhpcy53YWxsRWxlID09IG51bGwpIHRoaXMud2FsbEVsZSA9ICBjYy5maW5kKCdidG5zL3dhbGxXcmFwJyx0aGlzLm5vZGUpO1xyXG4gICAgICAgIGlmKHRoaXMuYm94RWxlID09IG51bGwpIHRoaXMuYm94RWxlID0gIGNjLmZpbmQoJ2J0bnMvYm94V3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMuYmFsbEVsZSA9PSBudWxsKSB0aGlzLmJhbGxFbGUgPSAgY2MuZmluZCgnYnRucy9iYWxsV3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMudXBFbGUgPT0gbnVsbCkgdGhpcy51cEVsZSA9ICBjYy5maW5kKCdidG5zL3VwV3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMucmlnaHRFbGUgPT0gbnVsbCkgdGhpcy5yaWdodEVsZSA9ICBjYy5maW5kKCdidG5zL3JpZ2h0V3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMuZG93bkVsZSA9PSBudWxsKSB0aGlzLmRvd25FbGUgPSAgY2MuZmluZCgnYnRucy9kb3duV3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMubGVmdEVsZSA9PSBudWxsKSB0aGlzLmxlZnRFbGUgPSAgY2MuZmluZCgnYnRucy9sZWZ0V3JhcCcsdGhpcy5ub2RlKVxyXG5cclxuICAgICAgICBjYy5maW5kKCdiYWNrJyx0aGlzLm5vZGUpLm9uKCdjbGljaycsdGhpcy5iYWNrLCB0aGlzKVxyXG4gICAgICAgIGNjLmZpbmQoJ2J0bnMvY2xlYXInLHRoaXMubm9kZSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGF0LmluaXRXaW5FbGUoKTtcclxuICAgICAgICAgICAgdGhhdC5yZW5kZXJCZygpO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ2J0bnMvcGxheScsdGhpcy5ub2RlKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJveE51bSA9MCxiYWxsTnVtID0gMCxyb2xlTnVtID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9PSAzIHx8IHdpbmRvdy5idWlsZExldmVsW2ldW25dLmNvdmVyICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbE51bSArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduID49IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU51bSArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpID09IHdpbmRvdy5ibG9ja051bS0xICYmIG4gPT0gd2luZG93LmJsb2NrTnVtLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocm9sZU51bTw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+acqua3u+WKoOS6uueJqScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihib3hOdW0gIT0gYmFsbE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+euseWtkOWSjOeQg+S9k+aVsOmHj+S4jeS4gOiHtCcsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYm94TnVtIDwgMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+euseWtkOaVsOmHj+S4jeiDveWwkeS6juS4ieS4qicsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnYnVpbGRMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogd2luZG93LmJ1aWxkTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdidWlsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hlbmQnLGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAvL+S4lueVjOWdkOagh1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgICAgIC8v5pys5Zyw5Z2Q5qCHXHJcbiAgICAgICAgICAgIGxldCB0b3VjaFBvaW50ID0gY2MuZmluZCgnQ2FudmFzJykuY29udmVydFRvTm9kZVNwYWNlQVIobG9jYXRpb24pO1xyXG4gICAgICAgICAgICAvL+eCueWHu+aUvue9ruWMuuWfn1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIoOmZpOWJjemdoua3u+WKoOeahOS6uueJqVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sYXlvdXRbMF1bMF0ueCA8PSB0b3VjaFBvaW50LnggJiYgdG91Y2hQb2ludC54IDw9IHdpbmRvdy5sYXlvdXRbMF1bd2luZG93LmJsb2NrTnVtLTFdLnggKyB3aW5kb3cuZWxlU2l6ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0WzBdWzBdLnkgPj0gdG91Y2hQb2ludC55ICYmIHRvdWNoUG9pbnQueSA+PSB3aW5kb3cubGF5b3V0W3dpbmRvdy5ibG9ja051bS0xXVt3aW5kb3cuYmxvY2tOdW0tMV0ueSAtIHdpbmRvdy5lbGVTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LnNlbGVjdEVsZSA+PSA0ICYmIHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPj0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mlL7nva7lhYPntKBcclxuICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGF5b3V0W2ldW25dLnggPD0gdG91Y2hQb2ludC54ICYmIHRvdWNoUG9pbnQueCA8PSB3aW5kb3cubGF5b3V0W2ldW25dLnggKyB3aW5kb3cuZWxlU2l6ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldW25dLnkgPj0gdG91Y2hQb2ludC55ICYmIHRvdWNoUG9pbnQueSA+PSB3aW5kb3cubGF5b3V0W2ldW25dLnkgLSB3aW5kb3cuZWxlU2l6ZVxyXG4gICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKCF3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduIHx8IHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduID0gdGhhdC5zZWxlY3RFbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPT0gMyAmJiB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5jb3ZlciA9PSBudWxsICYmICh0aGF0LnNlbGVjdEVsZSAhPSAxICYmIHRoYXQuc2VsZWN0RWxlICE9IDMpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPSB0aGF0LnNlbGVjdEVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dLmNvdmVyID0gdGhhdC5zZWxlY3RFbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuYnVpbGRMZXZlbClcclxuXHJcbiAgICAgICAgICAgIC8v54K55Ye75pS+572u5YWD57SgXHJcbiAgICAgICAgICAgIGlmKHRoYXQud2FsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQud2FsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQud2FsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKFxyXG4gICAgICAgICAgICAgICAgdGhhdC5ib3hFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LmJveEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQuYm94RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICB0aGF0LmJveEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQuYm94RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC5ib3hFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuaGVpZ2h0XHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdEVsZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclNlbGVjdEVsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoXHJcbiAgICAgICAgICAgICAgICB0aGF0LmJhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LmJhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCt0aGF0LmJhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHRoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55K3RoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5oZWlnaHRcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0RWxlID0gMztcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyU2VsZWN0RWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihcclxuICAgICAgICAgICAgICAgIHRoYXQudXBFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LnVwRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLngrdGhhdC51cEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC51cEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQudXBFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueSt0aGF0LnVwRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKFxyXG4gICAgICAgICAgICAgICAgdGhhdC5yaWdodEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQucmlnaHRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCt0aGF0LnJpZ2h0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICB0aGF0LnJpZ2h0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC5yaWdodEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55K3RoYXQucmlnaHRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuaGVpZ2h0XHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdEVsZSA9IDU7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclNlbGVjdEVsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoXHJcbiAgICAgICAgICAgICAgICB0aGF0LmRvd25FbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LmRvd25FbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCt0aGF0LmRvd25FbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHRoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55K3RoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5oZWlnaHRcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0RWxlID0gNjtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyU2VsZWN0RWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihcclxuICAgICAgICAgICAgICAgIHRoYXQubGVmdEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQubGVmdEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQubGVmdEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgIH0sXHJcbiAgICByZW5kZXJTZWxlY3RFbGUoKXtcclxuICAgICAgICB0aGlzLndhbGxFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzk1RDUyRlwiKTtcclxuICAgICAgICB0aGlzLmJveEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjOTVENTJGXCIpO1xyXG4gICAgICAgIHRoaXMuYmFsbEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjOTVENTJGXCIpO1xyXG4gICAgICAgIHRoaXMudXBFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzk1RDUyRlwiKTtcclxuICAgICAgICB0aGlzLnJpZ2h0RWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcbiAgICAgICAgdGhpcy5kb3duRWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcbiAgICAgICAgdGhpcy5sZWZ0RWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnNlbGVjdEVsZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMud2FsbEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYm94RWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsRWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd25FbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrKCl7XHJcbiAgICAgICAgd2luZG93LmZyb20gPSAnYnVpbGQnXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXJMYXlvdXQobGF5b3V0KXtcclxuICAgICAgICB0aGlzLnJlbmRlckJnKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gd2luZG93LmxheW91dFtpXVtuXS54O1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSB3aW5kb3cubGF5b3V0W2ldW25dLnk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gobGF5b3V0W2ldW25dLnNpZ24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1dhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdXYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdXYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCb3guc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0JveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0JhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZVVwID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlVXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlVXAuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1JvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVSaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVJpZ2h0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlRG93biA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlRG93bi5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlTGVmdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlTGVmdC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcblxyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
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

      if (indexLevel <= window.user.levelFinishNum + 1 || window.user.roles && window.user.roles.includes('admin')) {
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

    this.levelListConten.height = levelH + cc.winSize.height * 0.2;
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

    this.levelListConten.height = levelH + cc.winSize.height * 0.2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxMYXlvdXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsZXZlbEl0ZW0iLCJQcmVmYWIiLCJsZXZlbExpc3QiLCJsZXZlbExpc3RDb250ZW4iLCJsZXZlbFNyb2xsVmlldyIsImNsYXNzaWNzTGV2ZWxCdG4iLCJCdXR0b24iLCJuZXRMZXZlbEJ0biIsImNsb3NlTGV2ZWxCdG4iLCJvbkxvYWQiLCJzdGFydCIsImZpbmQiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJsb2FkQ2xhc3NpY3NMZXZlbExpc3QiLCJsb2FkTmV0TGV2ZWxMaXN0IiwiY2xvc2VMZXZlbExheW91dCIsImNsYXNzaWNlQnRuTGFiZWwiLCJjb2xvciIsIm5ldEJ0bkxhYmVsIiwib3BhY2l0eSIsIndpbmRvdyIsImxldmVsQ2xhc3NpZnkiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJ0aGF0IiwibGV2ZWxIIiwibGV2ZWxSb3ciLCJsZXZlbFRvdGFsIiwiY2xhc3NpY3NMZXZlbE51bSIsImkiLCJpbnN0YW50aWF0ZSIsImluZGV4TGV2ZWwiLCJ1c2VyIiwibGV2ZWxGaW5pc2hOdW0iLCJyb2xlcyIsImluY2x1ZGVzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJMYWJlbCIsInN0cmluZyIsInQiLCJsZXZlbEluZGV4Iiwid3hMb2dpbkJ0biIsImRlc3Ryb3kiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImFkZENoaWxkIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJoZWlnaHQiLCJ3aW5TaXplIiwibmV0TGV2ZWxOdW0iLCJ1c2VySW5mbyIsImxvZyIsInJlbW92ZUZyb21QYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFB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QUE2QnJDLElBQUksQ0FBQ3FDLEtBQTdDLENBQWIsR0FBa0UsQ0FBN0UsQ0FBWDtBQUNBdkIsUUFBQUEsTUFBTSxJQUFJZCxJQUFJLENBQUNzQyxNQUFMLEdBQWMsRUFBeEI7QUFDSDtBQWpDUzs7QUFpQmQsU0FBSSxJQUFJcEIsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDRixVQUFmLEVBQTRCRSxDQUFDLEVBQTdCLEVBQWdDO0FBQUEsYUFBeEJBLENBQXdCO0FBaUIvQjs7QUFDRCxTQUFLM0IsZUFBTCxDQUFxQitDLE1BQXJCLEdBQThCeEIsTUFBTSxHQUFFOUIsRUFBRSxDQUFDdUQsT0FBSCxDQUFXRCxNQUFYLEdBQWtCLEdBQXhEO0FBQ0gsR0FwSEk7QUFxSExqQyxFQUFBQSxnQkFySEssOEJBcUhhO0FBQ2QsU0FBS0wsSUFBTCxDQUFVMkMsZ0JBQVY7QUFDQSxTQUFLM0MsSUFBTCxDQUFVK0IsT0FBVjtBQUNILEdBeEhJLENBMEhMOztBQTFISyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBsZXZlbEl0ZW06IGNjLlByZWZhYixcclxuICAgICAgICBsZXZlbExpc3Q6bnVsbCxcclxuICAgICAgICBsZXZlbExpc3RDb250ZW46bnVsbCxcclxuICAgICAgICBsZXZlbFNyb2xsVmlldzpudWxsLFxyXG4gICAgICAgIGNsYXNzaWNzTGV2ZWxCdG46Y2MuQnV0dG9uLFxyXG4gICAgICAgIG5ldExldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgICAgICBjbG9zZUxldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3QgPSBjYy5maW5kKCdsZXZlbExpc3QvbGV2ZWxTY3JvbGxWaWV3L3ZpZXcvY29udGVudC9pdGVtTGlzdCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0Q29udGVuID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldy92aWV3L2NvbnRlbnQnLHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmxldmVsU3JvbGxWaWV3ID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldycsdGhpcy5ub2RlKVxyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5jbGFzc2ljc0xldmVsQnRuID09IG51bGwpIHRoaXMuY2xhc3NpY3NMZXZlbEJ0biA9IGNjLmZpbmQoJ2xldmVsTGlzdC9jbGFzc2lmeS9jbGFzc2ljc0xldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYodGhpcy5uZXRMZXZlbEJ0biA9PSBudWxsKSB0aGlzLm5ldExldmVsQnRuID0gY2MuZmluZCgnbGV2ZWxMaXN0L2NsYXNzaWZ5L25ldExldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYodGhpcy5jbG9zZUxldmVsQnRuID09IG51bGwpIHRoaXMuY2xvc2VMZXZlbEJ0biA9IGNjLmZpbmQoJ2Nsb3NlTGV2ZWwnLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLmxvYWRDbGFzc2ljc0xldmVsTGlzdCwgdGhpcylcclxuICAgICAgICB0aGlzLm5ldExldmVsQnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5sb2FkTmV0TGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMuY2xvc2VMZXZlbEJ0bi5ub2RlLm9uKCdjbGljaycsdGhpcy5jbG9zZUxldmVsTGF5b3V0LCB0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRDbGFzc2ljc0xldmVsTGlzdCgpO1xyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgbG9hZENsYXNzaWNzTGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgLy8g6K6+572u5YiH5o2i5YWz5Y2h57G75Z6L5oyJ6ZKu6YCJ5LitXHJcbiAgICAgICAgbGV0IGNsYXNzaWNlQnRuTGFiZWwgPSBjYy5maW5kKCdCYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgY2xhc3NpY2VCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDIwMiwxMjIsMCk7XHJcbiAgICAgICAgbGV0IG5ldEJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5uZXRMZXZlbEJ0bi5ub2RlKTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5vcGFjaXR5ID0gMTI1O1xyXG5cclxuICAgICAgICB3aW5kb3cubGV2ZWxDbGFzc2lmeSA9ICdjbGFzc2ljc0xldmVsJztcclxuXHJcbiAgICAgICAgLy/muIXnqbrlhbPljaHoo4Llj5hcclxuICAgICAgICB0aGlzLmxldmVsTGlzdC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxldmVsSCA9IDA7XHJcbiAgICAgICAgbGV0IGxldmVsUm93ID0gMTA7XHJcbiAgICAgICAgbGV0IGxldmVsVG90YWwgPSB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGV2ZWxUb3RhbCA7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbEl0ZW0pO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXhMZXZlbCA9IGkrMTtcclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA8PSAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0rMSB8fCAod2luZG93LnVzZXIucm9sZXMgJiYgd2luZG93LnVzZXIucm9sZXMuaW5jbHVkZXMoJ2FkbWluJykpKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xldmVsTnVtJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbmRleExldmVsO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxMb2NrJykub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9uKCd0b3VjaGVuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbEluZGV4ID0gaW5kZXhMZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93Lnd4TG9naW5CdG4gKSB3aW5kb3cud3hMb2dpbkJ0bi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxMaXN0LmFkZENoaWxkKG5vZGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKGluZGV4TGV2ZWwgPD0gbGV2ZWxSb3cpe1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxSb3cgPSBNYXRoLmZsb29yKGxldmVsVG90YWwgLyBNYXRoLmZsb29yKHRoaXMubGV2ZWxMaXN0Q29udGVuLndpZHRoIC8gbm9kZS53aWR0aCkgLTEpO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxIICs9IG5vZGUuaGVpZ2h0ICsgNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3RDb250ZW4uaGVpZ2h0ID0gbGV2ZWxIKyhjYy53aW5TaXplLmhlaWdodCowLjIpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgbG9hZE5ldExldmVsTGlzdCgpe1xyXG4gICAgICAgIC8vIOiuvue9ruWIh+aNouWFs+WNoeexu+Wei+aMiemSrumAieS4rVxyXG4gICAgICAgIGxldCBjbGFzc2ljZUJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5jbGFzc2ljc0xldmVsQnRuLm5vZGUpO1xyXG4gICAgICAgIGNsYXNzaWNlQnRuTGFiZWwuY29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgY2xhc3NpY2VCdG5MYWJlbC5vcGFjaXR5ID0gMTI1O1xyXG4gICAgICAgIGxldCBuZXRCdG5MYWJlbCA9IGNjLmZpbmQoJ0JhY2tncm91bmQvTGFiZWwnLHRoaXMubmV0TGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgbmV0QnRuTGFiZWwuY29sb3IgPSBjYy5jb2xvcigyMDIsMTIyLDApO1xyXG5cclxuICAgICAgICB3aW5kb3cubGV2ZWxDbGFzc2lmeSA9ICduZXRMZXZlbCc7XHJcblxyXG4gICAgICAgIC8v5riF56m65YWz5Y2h6KOC5Y+YXHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3QuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBsZXZlbEggPSAwO1xyXG4gICAgICAgIGxldCBsZXZlbFJvdyA9IDEwO1xyXG4gICAgICAgIGxldCBsZXZlbFRvdGFsID0gd2luZG93Lm5ldExldmVsTnVtO1xyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxsZXZlbFRvdGFsIDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxldmVsSXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleExldmVsID0gaSsxO1xyXG4gICAgICAgICAgICBpZihpbmRleExldmVsIDw9IHdpbmRvdy51c2VySW5mby5jbGFzc2ljc0xldmVsTnVtKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xldmVsTnVtJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbmRleExldmVsO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxMb2NrJykub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sZXZlbExpc3QuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKCd0b3VjaGVuZCcsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbih0KXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ2xldmVsOicgKyBpbmRleExldmVsKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA8PSBsZXZlbFJvdyl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbFJvdyA9IE1hdGguZmxvb3IobGV2ZWxUb3RhbCAvIE1hdGguZmxvb3IodGhpcy5sZXZlbExpc3RDb250ZW4ud2lkdGggLyBub2RlLndpZHRoKSAtMSk7XHJcbiAgICAgICAgICAgICAgICBsZXZlbEggKz0gbm9kZS5oZWlnaHQgKyA3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxldmVsTGlzdENvbnRlbi5oZWlnaHQgPSBsZXZlbEgrKGNjLndpblNpemUuaGVpZ2h0KjAuMik7XHJcbiAgICB9LFxyXG4gICAgY2xvc2VMZXZlbExheW91dCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
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
//------QC-SOURCE-SPLIT------
