
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

var _level = _interopRequireDefault(require("./level"));

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    console.log(window.user); // var newBlock = cc.instantiate(this.block);
    // // 为设置位置
    // newBlock.setPosition(-375,50);
    // // 将新增的节点添加到 Canvas 节点下面
    // this.node.addChild(newBlock);
    // cc.log(window.eleSize)
    // this.renderLayout(levels[0])
    // this.init(levels[0]);
    // setTimeout(function () {
    //     that.moveLeft(levels[0]);
    // },1000)
    // setTimeout(function () {
    //     that.moveLeft(levels[0]);
    // },2000)
    // setTimeout(function () {
    //     that.moveLeft(levels[0]);
    // },3000)
    // setTimeout(function () {
    //     that.moveRight(levels[0]);
    //     cc.log(levels[0])
    //
    // },4000)
    // setTimeout(function () {
    //     that.moveDown(levels[0]);
    // },5000)

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

      if (window.levelIndex >= window.classicsLevelNum) {
        cc.find('contentBg/next', newMyPrefab).opacity = 0;
      }

      cc.find('contentBg/next', newMyPrefab).on('click', function () {
        if (window.levelClassify == 'classicsLevel') {
          if (window.levelIndex < window.classicsLevelNum) {
            newMyPrefab.removeFromParent();
            newMyPrefab.destroy();
            that.initPendant();
            window.levelIndex++;
            that.initLevel();
          }
        }
      }, this);
      cc.find('contentBg/replay', newMyPrefab).on('click', function () {
        newMyPrefab.removeFromParent();
        newMyPrefab.destroy();
        that.replayLayout();
        that.initPendant();
      }, this);
      cc.find('contentBg/share', newMyPrefab).on('click', function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
          var titString = '益智推箱';

          if (window.levelClassify == 'classicsLevel') {
            titString = titString + '-经典关卡';
          } else if (window.levelClassify == 'netLevel') {
            titString = titString + '-网友自制关卡';
          }

          titString = titString + '第' + window.levelIndex + '关' + '-使用步数：' + that.stepCounterValue + '-挑战成功！';
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
    }, 0); //上传分数

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      if (that.lastScore == null) {
        wx.cloud.callFunction({
          name: 'addClassicsLevelScore',
          data: {
            levelIndex: window.levelIndex,
            appId: window.user.appId,
            useStep: that.stepCounterValue,
            useTime: that.timeCounterValue,
            portrait: window.loginInfo.avatarUrl,
            nickName: window.loginInfo.nickName
          }
        }).then(function (res) {})["catch"](function (err) {
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
        if (that.stepCounterValue < that.lastScore.useStep || that.timeCounterValue < that.lastScore.useTime) {
          that.lastScore = {
            levelIndex: window.levelIndex,
            appId: window.user.appId,
            useStep: that.stepCounterValue,
            useTime: that.timeCounterValue
          };
          that.renderLastScore(that.lastScore.useStep, that.lastScore.useTime);
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
          }).then(function (res) {})["catch"](function (err) {
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
        that.initPosition(window.currentLevel); // that.moveHistoryList = [];
        // that.moveHistoryList.push(res.data)
        // console.log(that.moveHistoryList)
      },
      fail: function fail() {}
    });
  },
  initPendant: function initPendant() {
    //关卡
    if (this.levelCounter == null) {
      var levelNode = new cc.Node('levelCounter');
      levelNode.setAnchorPoint(0.5, 0.5);
      levelNode.width = 300;
      levelNode.height = 100;
      var levelCounter = levelNode.addComponent(cc.Label);
      levelCounter.node.setPosition(55, cc.winSize.height / 2 - cc.winSize.height * 0.05);
      levelCounter.string = '第 ' + window.levelIndex + ' 关';
      levelCounter.fontSize = 60;
      levelCounter.enableBold = true;
      levelCounter.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
      levelCounter.lineHeight = 60;
      levelCounter.horizontalAlign = 'center';
      this.levelCounter = levelNode.getComponent(cc.Label);
      this.node.addChild(levelNode);
    } else {
      this.levelCounter.string = '第 ' + window.levelIndex + ' 关';
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
    }

    this.moveHistoryList = [];
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
          that.showLevelRank();
        }, this);
        cc.find('contain/share', newMyPrefab).on('click', function () {
          if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            var titString = '益智推箱';

            if (window.levelClassify == 'classicsLevel') {
              titString = titString + '-经典关卡';
            } else if (window.levelClassify == 'netLevel') {
              titString = titString + '-网友自制关卡';
            }

            titString = titString + '第' + window.levelIndex + '关-快来挑战吧!'; // titString = titString + '-使用步数：'

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
      _common.Loading.show(); //经典关卡


      if (window.levelClassify == 'classicsLevel') {
        wx.cloud.callFunction({
          name: 'queryClassicsLevel',
          data: {
            levelIndex: window.levelIndex
          }
        }).then(function (res) {
          if (res && res.result.data.length > 0) {
            window.currentLevel = res.result.data[0].content;
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
          console.log(res);

          if (res && res.result.data.length > 0) {
            that.lastScore = res.result.data[0];
            that.renderLastScore(that.lastScore.useStep, that.lastScore.useTime);
          } else {
            that.lastScore = null;
            that.renderLastScore('无', '无');
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
    cc.director.loadScene("main");
  },
  renderLastScore: function renderLastScore(step, time) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZUxheW91dC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXJyZW50TGV2ZWwiLCJlbGVTaXplIiwibGF5b3V0IiwiQXJyYXkiLCJibG9ja051bSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmxvY2siLCJ0eXBlIiwiUHJlZmFiIiwiZGlzcGxheU5hbWUiLCJ3YWxsIiwiYm94IiwiYmFsbCIsInJvbGVVcCIsInJvbGVSaWdodCIsInJvbGVEb3duIiwicm9sZUxlZnQiLCJwb3NpdGlvbiIsImdhbWVCbiIsIlNwcml0ZSIsImJveE51bSIsInN0ZXBDb3VudGVyIiwic3RlcENvdW50ZXJWYWx1ZSIsInRpbWVDb3VudGVyIiwidGltZUNvdW50ZXJWYWx1ZSIsInRpbWVDb3VudGVyVGltZXIiLCJsZXZlbENvdW50ZXIiLCJtb3ZlSGlzdG9yeUxpc3QiLCJsYXN0U2NvcmUiLCJsYXN0U3RlcE5vZGUiLCJsYXN0VGltZW5vZGUiLCJyYW5rSXRlbSIsIm9uTG9hZCIsInRoYXQiLCJpbml0V2luRWxlIiwicmVuZGVyQmciLCJpbml0TGV2ZWwiLCJmaW5kIiwibm9kZSIsImhlaWdodCIsIndpblNpemUiLCJ3aWR0aCIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJhZGRUb3VjaE1vdmUiLCJwZW5kYW50QWRkRXZlbnQiLCJyZWFsU2l6IiwiaSIsIm4iLCJ4IiwieSIsInNpZ24iLCJjb3ZlciIsImluaXRQb3NpdGlvbiIsImxlbmd0aCIsInN0YXJ0WCIsInN0YXJ0WSIsIm5ld0Jsb2NrIiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsImFkZENoaWxkIiwicmVuZGVyQm4iLCJnZXRDb21wb25lbnQiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiYmdVcmxCYXNlIiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwicmVjdCIsInNwcml0ZUZyYW1lIiwicmVuZGVyTGF5b3V0IiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0IiwibW92ZVVwIiwicmVzZXRQb3NpdGlvbiIsIm1vdmV0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtb3ZlRG93biIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiZGlyZWN0aW9uIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJzdWNjZXNzIiwicmVzdWx0IiwiZ2V0U3RvcmFnZSIsInJlcyIsInB1c2giLCJzdHJpbmciLCJjb3ZlckJveE51bSIsInNob3dSZXN1bHQiLCJjbGVhckludGVydmFsIiwic2V0dGluZyIsInRvdWNoTW92ZSIsImZpZ3VyZUxvY2F0aW9uIiwib24iLCJldmVudCIsImdldExvY2F0aW9uIiwiZW5kTG9jYXRpb24iLCJNYXRoIiwiYWJzIiwiQ2FudmFzTm9kZSIsIm9uUmVzb3VyY2VMb2FkZWQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkZWRSZXNvdXJjZSIsIm5ld015UHJlZmFiIiwiTGFiZWwiLCJsZXZlbEluZGV4IiwiY2xhc3NpY3NMZXZlbE51bSIsIm9wYWNpdHkiLCJsZXZlbENsYXNzaWZ5IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJpbml0UGVuZGFudCIsInJlcGxheUxheW91dCIsInRpdFN0cmluZyIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicXVlcnkiLCJsb2FkZXIiLCJsb2FkUmVzIiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwiYXBwSWQiLCJ1c2VTdGVwIiwidXNlVGltZSIsInBvcnRyYWl0IiwibG9naW5JbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJ0aGVuIiwiZXJyb3IiLCJyZW5kZXJMYXN0U2NvcmUiLCJjdXJMZXZlbE51bSIsImxldmVsRmluaXNoTnVtIiwiZmFpbCIsImxldmVsTm9kZSIsIk5vZGUiLCJzZXRBbmNob3JQb2ludCIsImFkZENvbXBvbmVudCIsImZvbnRTaXplIiwiZW5hYmxlQm9sZCIsIm92ZXJmbG93IiwiT3ZlcmZsb3ciLCJSRVNJWkVfSEVJR0hUIiwibGluZUhlaWdodCIsImhvcml6b250YWxBbGlnbiIsInRpbWVOb2RlIiwic2V0SW50ZXJ2YWwiLCJiaW5kIiwiYmFjayIsImNsaWNrTW92ZSIsInBvcCIsInNob3dMZXZlbFJhbmsiLCJMb2FkaW5nIiwic2hvdyIsImNvbnRlbnQiLCJoaWRlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzdGVwIiwidGltZSIsInJhbmtQYWdlIiwicmFua1BhZ2VTaXplIiwicmVzb3VyY2UiLCJyZW5kZXJMZXZlbFJhbmtMaXN0IiwicGFnZSIsInBhZ2VTaXplIiwiY3VycmVudEl0ZW1OdW0iLCJjaGlsZHJlbkNvdW50IiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9BOztBQUNBOzs7O0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUFBLE1BQU0sQ0FBQ0MsWUFBUCxHQUFzQixFQUF0QjtBQUVBRCxNQUFNLENBQUNFLE9BQVAsR0FBaUIsRUFBakI7QUFDQUYsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLElBQUlDLEtBQUosRUFBaEI7QUFDQUosTUFBTSxDQUFDSyxRQUFQLEdBQWtCLEVBQWxCO0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZOO0FBR0hDLE1BQUFBLFdBQVcsRUFBQztBQUhULEtBREM7QUFNUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FB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Qzs7QUFBQTtBQWlCOUM7O0FBQ0QyRSxVQUFBQSxPQUFPLENBQUNySSxNQUFSLEdBQWlCcUksT0FBTyxDQUFDYSxhQUFSLEdBQXdCMUosUUFBUSxDQUFDUSxNQUFsRDtBQUNILFNBcEJELE1Bb0JLO0FBQ0QsNkJBQU0sU0FBTixFQUFnQixJQUFoQjtBQUNIO0FBR0osT0FsQ0QsV0FrQ1MsVUFBQTZCLEdBQUcsRUFBSTtBQUNaekIsUUFBQUEsT0FBTyxDQUFDd0csS0FBUixDQUFjL0UsR0FBZDs7QUFDQXNHLHdCQUFRRyxJQUFSO0FBQ0gsT0FyQ0Q7QUFzQ0g7QUFFSjtBQXhoQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgbGV2ZWxzIGZyb20gJy4vbGV2ZWwnXHJcbmltcG9ydCB7Zm9ybWF0ZVJhbmtUaW1lLCBMb2FkaW5nLCBUb2FzdH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbndpbmRvdy5jdXJyZW50TGV2ZWwgPSBbXTtcclxuXHJcbndpbmRvdy5lbGVTaXplID0gMzU7XHJcbndpbmRvdy5sYXlvdXQgPSBuZXcgQXJyYXkoKTtcclxud2luZG93LmJsb2NrTnVtID0gMTI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJsb2NrOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2Jsb2NrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2FsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOid3YWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JveCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYmFsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVVcDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlVXAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlUmlnaHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVJpZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZURvd246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZURvd24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlTGVmdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlTGVmdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdhbWVCbjpjYy5TcHJpdGUsXHJcbiAgICAgICAgYm94TnVtOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBDb3VudGVyOm51bGwsXHJcbiAgICAgICAgc3RlcENvdW50ZXJWYWx1ZTogMCxcclxuICAgICAgICB0aW1lQ291bnRlcjpudWxsLFxyXG4gICAgICAgIHRpbWVDb3VudGVyVmFsdWU6MCxcclxuICAgICAgICB0aW1lQ291bnRlclRpbWVyOm51bGwsXHJcbiAgICAgICAgbGV2ZWxDb3VudGVyOiBudWxsLFxyXG4gICAgICAgIG1vdmVIaXN0b3J5TGlzdDpbXSxcclxuICAgICAgICBsYXN0U2NvcmU6IG51bGwsXHJcbiAgICAgICAgbGFzdFN0ZXBOb2RlOiBudWxsLFxyXG4gICAgICAgIGxhc3RUaW1lbm9kZTogbnVsbCxcclxuICAgICAgICByYW5rSXRlbTpjYy5QcmVmYWJcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdFdpbkVsZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblvZPliY3lhbPljaFcclxuICAgICAgICB0aGlzLmluaXRMZXZlbCgpO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMnLHRoaXMubm9kZSkuaGVpZ2h0ID0gIChjYy53aW5TaXplLmhlaWdodCAtIGNjLndpblNpemUud2lkdGgpLzI7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy51c2VyKVxyXG4gICAgICAgIC8vIHZhciBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2spO1xyXG4gICAgICAgIC8vIC8vIOS4uuiuvue9ruS9jee9rlxyXG4gICAgICAgIC8vIG5ld0Jsb2NrLnNldFBvc2l0aW9uKC0zNzUsNTApO1xyXG4gICAgICAgIC8vIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKG5ld0Jsb2NrKTtcclxuICAgICAgICAvLyBjYy5sb2cod2luZG93LmVsZVNpemUpXHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLnJlbmRlckxheW91dChsZXZlbHNbMF0pXHJcbiAgICAgICAgLy8gdGhpcy5pbml0KGxldmVsc1swXSk7XHJcblxyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICB0aGF0Lm1vdmVMZWZ0KGxldmVsc1swXSk7XHJcbiAgICAgICAgLy8gfSwxMDAwKVxyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICB0aGF0Lm1vdmVMZWZ0KGxldmVsc1swXSk7XHJcbiAgICAgICAgLy8gfSwyMDAwKVxyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICB0aGF0Lm1vdmVMZWZ0KGxldmVsc1swXSk7XHJcbiAgICAgICAgLy8gfSwzMDAwKVxyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICB0aGF0Lm1vdmVSaWdodChsZXZlbHNbMF0pO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2cobGV2ZWxzWzBdKVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gfSw0MDAwKVxyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICB0aGF0Lm1vdmVEb3duKGxldmVsc1swXSk7XHJcbiAgICAgICAgLy8gfSw1MDAwKVxyXG4gICAgICAgIHRoaXMuYWRkVG91Y2hNb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5wZW5kYW50QWRkRXZlbnQoKTtcclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBpbml0V2luRWxlKCl7XHJcblxyXG4gICAgICAgIGxldCByZWFsU2l6ID0gY2Mud2luU2l6ZS53aWR0aC93aW5kb3cuYmxvY2tOdW07XHJcbiAgICAgICAgd2luZG93LmVsZVNpemUgPSByZWFsU2l6O1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCB3aW5kb3cuYmxvY2tOdW07IG4rKyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldW25dID0ge3g6MCx5OjAsc2lnbjowLGNvdmVyOm51bGx9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdFBvc2l0aW9uKGxheW91dCl7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt9O1xyXG4gICAgICAgIHRoaXMuYm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGxheW91dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCBsYXlvdXRbMF0ubGVuZ3RoOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgLy9sYXlvdXRbaV1bbl0uc2lnbiAtLSDkurrniankvY3nva5cclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFtpXVtuXS5zaWduID09IDQgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNSB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA2IHx8IGxheW91dFtpXVtuXS5zaWduID09IDcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v566x5a2Q5pWw6YePXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveE51bSArKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyQmcoKXtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLShjYy53aW5TaXplLndpZHRoLzIpO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSAod2luZG93LmVsZVNpemUqd2luZG93LmJsb2NrTnVtKS8yO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCB3aW5kb3cuYmxvY2tOdW07IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IG4qd2luZG93LmVsZVNpemUgKyBzdGFydFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IC1pKndpbmRvdy5lbGVTaXplICsgc3RhcnRZO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbjowLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgLy8g5Li66K6+572u5L2N572uXHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJCbigpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZUJuID09IG51bGwpIHRoaXMuZ2FtZUJuID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9nYW1lQm4nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHdpbmRvdy5iZ1VybEJhc2UrICdfNDAweDI0MC5qcGcnLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUsIGNjLnJlY3QoMCwwLDQwMCwyNDApKTtcclxuICAgICAgICAgICAgdGhhdC5nYW1lQm4uc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJMYXlvdXQobGF5b3V0KXtcclxuICAgICAgICB0aGlzLnJlbmRlckJnKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gd2luZG93LmxheW91dFtpXVtuXS54O1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSB3aW5kb3cubGF5b3V0W2ldW25dLnk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gobGF5b3V0W2ldW25dLnNpZ24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1dhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdXYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdXYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCb3guc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0JveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0JhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZVVwID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlVXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlVXAuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1JvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVSaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVJpZ2h0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlRG93biA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlRG93bi5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlTGVmdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlTGVmdC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVVcChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuXHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnqbpcclxuICAgICAgICBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDApe1xyXG4gICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li65aKZ5L2TXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDEpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li6566x5a2QXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAvL+euseWtkOS4iuS4gOagvOS4uuepulxyXG4gICAgICAgICAgICBpZihsYXlvdXRbeS0yXVt4XS5zaWduID09IDApe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5LTFdW3hdLmNvdmVyKSBsYXlvdXRbeS0xXVt4XS5jb3ZlciA9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDkuIrkuIDmoLznkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0yXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5LTFdW3hdLmNvdmVyKSBsYXlvdXRbeS0xXVt4XS5jb3ZlciA9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5jb3ZlciA9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v56e75Yqo5ZCO5Zue5pi+55CD5L2TXHJcbiAgICAgICAgaWYobGF5b3V0W3ldW3hdLnNpZ24gPT0gMCAmJiBsYXlvdXRbeV1beF0uY292ZXIpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDM7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtb3ZldGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW92ZXRpbWVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG1vdmVEb3duKGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgICAgIC8v5LiL5LiA5qC85Li656m6XHJcbiAgICAgICAgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qC85Li65aKZ5L2TXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDEpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDY7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4i+S4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDkuIvkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3krMl1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeSsxXVt4XS5jb3ZlcikgbGF5b3V0W3krMV1beF0uY292ZXIgPSA2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDkuIvkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsyXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsyXVt4XS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5KzFdW3hdLmNvdmVyKSBsYXlvdXRbeSsxXVt4XS5jb3ZlciA9IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2Rvd24nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLmNvdmVyID0gNjtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1vdmV0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb3ZldGltZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgbW92ZUxlZnQobGF5b3V0KXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnqbpcclxuICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5zaWduID09IDApe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5bem5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5XVt4LTJdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0yXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3gtMV0uY292ZXIpIGxheW91dFt5XVt4LTFdLmNvdmVyID0gNztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5bem5LiA5qC85Li655CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMl0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMl0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5jb3ZlcikgbGF5b3V0W3ldW3gtMV0uY292ZXIgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5bem5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0xXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5jb3ZlciA9IDc7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3ZlciAmJiBsYXlvdXRbeV1beF0uY292ZXIgIT0gMil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtb3ZldGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW92ZXRpbWVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG1vdmVSaWdodChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+WPs+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5Y+z5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOWPs+S4gOagvOS4uueQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3ZlciAmJiBsYXlvdXRbeV1beF0uY292ZXIgIT0gMil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtb3ZldGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW92ZXRpbWVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHJlc2V0UG9zaXRpb24oZGlyZWN0aW9uKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogd2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RlcENvdW50ZXJWYWx1ZSArKztcclxuICAgICAgICAvLyB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgbGV0IGNvdmVyQm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHdpbmRvdy5jdXJyZW50TGV2ZWwubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbjx3aW5kb3cuY3VycmVudExldmVsWzBdLmxlbmd0aCA7IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuY3VycmVudExldmVsW2ldW25dLmNvdmVyICYmIHdpbmRvdy5jdXJyZW50TGV2ZWxbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJCb3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib3hOdW0gPT0gY292ZXJCb3hOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5oyR5oiY5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lQ291bnRlclRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFRvdWNoTW92ZSgpe1xyXG4gICAgICAgIGlmKCF3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBmaWd1cmVMb2NhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBmaWd1cmVMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGVuZExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoZmlndXJlTG9jYXRpb24ueCAtIGVuZExvY2F0aW9uLngpID4gTWF0aC5hYnMoZmlndXJlTG9jYXRpb24ueSAtIGVuZExvY2F0aW9uLnkpKXtcclxuICAgICAgICAgICAgICAgIGlmKChmaWd1cmVMb2NhdGlvbi54IC0gZW5kTG9jYXRpb24ueCkgPCAtNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Y+z5ruRXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlUmlnaHQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKChmaWd1cmVMb2NhdGlvbi54IC0gZW5kTG9jYXRpb24ueCkgPiA1MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlt6bmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVMZWZ0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKChmaWd1cmVMb2NhdGlvbi55IC0gZW5kTG9jYXRpb24ueSkgPCAtNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5LiK5ruRXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlVXAod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKChmaWd1cmVMb2NhdGlvbi55IC0gZW5kTG9jYXRpb24ueSkgPiA1MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIvmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVEb3duKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIHNob3dSZXN1bHQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvdXNlVGltZScsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmraXmlbDvvJpcIisgdGhhdC5zdGVwQ291bnRlclZhbHVlKyfmraUnO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvdXNlU3RlcCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLnlKjml7bvvJpcIisgdGhhdC50aW1lQ291bnRlclZhbHVlKyfnp5InO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxJbmRleCA+PSB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvbmV4dCcsbmV3TXlQcmVmYWIpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbENsYXNzaWZ5ID09ICdjbGFzc2ljc0xldmVsJyl7XHJcbiAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxJbmRleCA8IHdpbmRvdy5jbGFzc2ljc0xldmVsTnVtKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRMZXZlbCgpXHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3JlcGxheScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9zaGFyZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpdFN0cmluZyA9ICAn55uK5pm65o6o566xJztcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxDbGFzc2lmeSA9PSAnY2xhc3NpY3NMZXZlbCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAnLee7j+WFuOWFs+WNoSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih3aW5kb3cubGV2ZWxDbGFzc2lmeSA9PSAnbmV0TGV2ZWwnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJy3nvZHlj4voh6rliLblhbPljaEnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICfnrKwnK3dpbmRvdy5sZXZlbEluZGV4KyflhbMnKyct5L2/55So5q2l5pWw77yaJysgdGhhdC5zdGVwQ291bnRlclZhbHVlICsnLeaMkeaImOaIkOWKn++8gSc7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZU92ZXJBbGVydCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICB9LDApXHJcblxyXG4gICAgICAgIC8v5LiK5Lyg5YiG5pWwXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGF0Lmxhc3RTY29yZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSh0aGF0Lmxhc3RTY29yZS51c2VTdGVwLHRoYXQubGFzdFNjb3JlLnVzZVRpbWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5zdGVwQ291bnRlclZhbHVlIDwgdGhhdC5sYXN0U2NvcmUudXNlU3RlcCB8fCB0aGF0LnRpbWVDb3VudGVyVmFsdWUgPCB0aGF0Lmxhc3RTY29yZS51c2VUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKHRoYXQubGFzdFNjb3JlLnVzZVN0ZXAsdGhhdC5sYXN0U2NvcmUudXNlVGltZSlcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlQ2xhc3NpY3NMZXZlbFNjb3JlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGN1ckxldmVsTnVtID0gd2luZG93LmxldmVsSW5kZXg7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjAgJiYgcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtIDwgY3VyTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gY3VyTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcElkID0gd2luZG93LnVzZXIuYXBwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZXZlbEZpbmlzaE51bSA9IGN1ckxldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWUpIGRhdGEubmlja05hbWUgPSB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsKSBkYXRhLnBvcnRyYWl0ID0gd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3VwZGF0ZVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlcGxheUxheW91dCgpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiAnaW5pdExldmVsJyxcclxuICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0Lm1vdmVIaXN0b3J5TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoYXQubW92ZUhpc3RvcnlMaXN0KVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbCgpe1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdFBlbmRhbnQoKXtcclxuICAgICAgICAvL+WFs+WNoVxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbGV2ZWxOb2RlID0gbmV3IGNjLk5vZGUoJ2xldmVsQ291bnRlcicpO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUud2lkdGggPSAgMzAwO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuaGVpZ2h0ID0gMTAwO1xyXG4gICAgICAgICAgICB2YXIgbGV2ZWxDb3VudGVyID0gbGV2ZWxOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKDU1LCAgKGNjLndpblNpemUuaGVpZ2h0LzIpIC0gKGNjLndpblNpemUuaGVpZ2h0KjAuMDUpKVxyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzJztcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmZvbnRTaXplID0gNjA7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5lbmFibGVCb2xkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmxpbmVIZWlnaHQgPSA2MDtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmhvcml6b250YWxBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlciA9IGxldmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbE5vZGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlci5zdHJpbmcgPSAn56ysICcrIHdpbmRvdy5sZXZlbEluZGV4ICsgJyDlhbMnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mraXmlbBcclxuICAgICAgICBpZih0aGlzLnN0ZXBDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdzdGVwQ291bnRlcicpO1xyXG4gICAgICAgICAgICBub2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDgwKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gJ+atpeaVsO+8miAwJztcclxuICAgICAgICAgICAgdGhpcy5zdGVwQ291bnRlciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcENvdW50ZXJWYWx1ZSAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/nlKjml7ZcclxuICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgdGltZU5vZGUgPSBuZXcgY2MuTm9kZSgndGltZUNvdW50ZXInKTtcclxuICAgICAgICAgICAgdGltZU5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lQ291bnRlciA9IHRpbWVOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oMCAsIChjYy53aW5TaXplLndpZHRoLzIpICsgODApXHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLnN0cmluZyA9ICfnlKjml7bvvJogMCc7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXIgPSB0aW1lTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aW1lTm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGlzLnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLm1vdmVIaXN0b3J5TGlzdCA9IFtdO1xyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgcGVuZGFudEFkZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGNjLmZpbmQoJ2JhY2snLHRoaXMubm9kZSkub24oJ2NsaWNrJyx0aGlzLmJhY2ssIHRoaXMpXHJcbiAgICAgICAgLy/lvIDlkK/ngrnlh7vnp7vliqhcclxuICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5jbGlja01vdmUpIHtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvdXAnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZVVwKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvcmlnaHQnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZVJpZ2h0KHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvZG93bicsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlRG93bih3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2xlZnQnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZUxlZnQod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy91cCcsdGhpcy5ub2RlKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvcmlnaHQnLHRoaXMubm9kZSkub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2Rvd24nLHRoaXMubm9kZSkub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2xlZnQnLHRoaXMubm9kZSkub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2JhY2tTdGVwJyx0aGlzLm5vZGUpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZih0aGF0Lm1vdmVIaXN0b3J5TGlzdC5sZW5ndGggPiAxICYmIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSA+PSAxKXtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoYXQubW92ZUhpc3RvcnlMaXN0W3RoYXQubW92ZUhpc3RvcnlMaXN0Lmxlbmd0aC0xXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdGVwQ291bnRlclZhbHVlIC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGF0LnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9tZW51Jyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC50aW1lQ291bnRlclRpbWVyKTtcclxuICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSB0aGF0Lm5vZGU7XHJcbiAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL2NvbnRpbnVlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhhdC50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhhdCksMTAwMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL3JlcGxheScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vcmFuaycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd0xldmVsUmFuaygpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vc2hhcmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpdFN0cmluZyA9ICAn55uK5pm65o6o566xJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxldmVsQ2xhc3NpZnkgPT0gJ2NsYXNzaWNzTGV2ZWwnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICct57uP5YW45YWz5Y2hJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYod2luZG93LmxldmVsQ2xhc3NpZnkgPT0gJ25ldExldmVsJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAnLee9keWPi+iHquWItuWFs+WNoSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAn56ysJyt3aW5kb3cubGV2ZWxJbmRleCsn5YWzLeW/q+adpeaMkeaImOWQpyEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICct5L2/55So5q2l5pWw77yaJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZU1lbnUnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICAgICAgfSx0aGlzKVxyXG4gICAgfSxcclxuICAgIGluaXRMZXZlbCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIC8v57uP5YW45YWz5Y2hXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbENsYXNzaWZ5ID09ICdjbGFzc2ljc0xldmVsJyl7XHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMucmVzdWx0LmRhdGFbMF0uY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbmjILku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbFNjb3JlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDp3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSByZXMucmVzdWx0LmRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKHRoYXQubGFzdFNjb3JlLnVzZVN0ZXAsdGhhdC5sYXN0U2NvcmUudXNlVGltZSlcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSgn5pegJywn5pegJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v572R57uc5YWz5Y2hXHJcbiAgICAgICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmFjaygpe1xyXG4gICAgICAgIHRoaXMuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZUNvdW50ZXJUaW1lcilcclxuICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTGFzdFNjb3JlKHN0ZXAsdGltZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIC8v5pyA5L2z5q2l5pWwXHJcbiAgICAgICAgaWYodGhhdC5sYXN0U3RlcE5vZGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBsYXN0U3RlcE5vZGUgPSBuZXcgY2MuTm9kZSgnbGFzdFN0ZXBOb2RlJyk7XHJcbiAgICAgICAgICAgIGxhc3RTdGVwTm9kZS5zZXRBbmNob3JQb2ludCgwLCAxKTtcclxuICAgICAgICAgICAgdmFyIHN0ZXBDb3VudGVyID0gbGFzdFN0ZXBOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDE2MClcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gJ+acgOS9s+aIkOe7qe+8muatpeaVsCAnKyBzdGVwK1wiIC0g55So5pe2IFwiK3RpbWU7XHJcbiAgICAgICAgICAgIHRoYXQubGFzdFN0ZXBOb2RlID0gbGFzdFN0ZXBOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICAgICAgdGhhdC5ub2RlLmFkZENoaWxkKGxhc3RTdGVwTm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoYXQubGFzdFN0ZXBOb2RlLnN0cmluZyA9ICfmnIDkvbPmiJDnu6nvvJrmraXmlbAgJysgc3RlcCtcIiAtIOeUqOaXtiBcIit0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuICAgIHNob3dMZXZlbFJhbmsoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICB2YXIgcmFua1BhZ2UgPSAxLHJhbmtQYWdlU2l6ZSA9IDUwO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2MuZmluZCgncmFua0xpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMZXZlbFJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5maW5kKCdyYW5rTGlzdCcsbmV3TXlQcmVmYWIpLm9uKCdib3VuY2UtYm90dG9tJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJhbmtQYWdlKys7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgY2MuZmluZCgndGhMZXZlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+atpSDmlbAnXHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0xheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXJMZXZlbFJhbmtMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWxTY29yZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGk8PSByZXMucmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMucmVzdWx0LmRhdGFbaS0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGF0LnJhbmtJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZFJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkrY3VycmVudEl0ZW1OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkRGF0ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0ZVJhbmtUaW1lKGRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEudXNlU3RlcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShkYXRhLnBvcnRyYWl0Kyc/YWFhPWFhLmpwZycsICBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGROYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIitkYXRhLm5pY2tOYW1lK1wiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
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
      console.log(res.authSetting);

      if (res.authSetting["scope.userInfo"]) {
        console.log("用户已授权");
        wx.getUserInfo({
          success: function success(res) {
            //登陆操作
            // userInfo = res.userInfo;
            _success && _success(res.userInfo);
          }
        });
      } else {
        console.log("用户未授权"); //创建全屏透明登陆按钮

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
            console.log("用户授权:", res.userInfo); // userInfo = res.userInfo;

            _success && _success(res.userInfo);
            button.destroy();
          } else {
            console.log("用户拒绝授权:");
            _fail && _fail();
          }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uLmpzIl0sIm5hbWVzIjpbInd4TG9naW4iLCJfc3VjY2VzcyIsIl9mYWlsIiwibm9kZSIsImNjIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwid2luZG93IiwiaW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwidyIsInNjcmVlbldpZHRoIiwiaCIsInNjcmVlbkhlaWdodCIsImVsZVciLCJ3aWR0aCIsImVsZUgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwieSIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImJ1dHRvbiIsImNyZWF0ZVVzZXJJbmZvQnV0dG9uIiwidHlwZSIsInRleHQiLCJzdHlsZSIsInBhcnNlSW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJvblRhcCIsImRlc3Ryb3kiLCJUb2FzdCIsInRpbWUiLCJDYW52YXNOb2RlIiwiZmluZCIsIm9uUmVzb3VyY2VMb2FkZWQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkZWRSZXNvdXJjZSIsIlByZWZhYiIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJ0b2FzdEJnIiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJ0b2FzdFRleHQiLCJMYWJlbCIsInN0cmluZyIsImFkZENoaWxkIiwicm91bmRSZWN0IiwiZmlsbENvbG9yIiwiQ29sb3IiLCJCTEFDSyIsImZpbGwiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJyZW1vdmVGcm9tUGFyZW50IiwiY2xlYXJUaW1lb3V0IiwibG9hZGVyIiwibG9hZFJlcyIsIkxvYWRpbmciLCJlbGUiLCJoaWRlRmxhZ2UiLCJzaG93IiwiaGlkZSIsImZvcm1hdGVSYW5rVGltZSIsInRpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiWSIsImdldEZ1bGxZZWFyIiwiTSIsImdldE1vbnRoIiwiRCIsImdldERhdGUiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCQyxLQUEzQixFQUFpQ0MsSUFBakMsRUFBdUM7QUFDMUMsTUFBSUMsRUFBRSxDQUFDQyxHQUFILENBQU9DLFFBQVAsS0FBb0JGLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRSxXQUEvQixFQUE0QyxPQURGLENBRTFDOztBQUNBLE1BQU1DLEVBQUUsR0FBR0MsTUFBTSxDQUFDLElBQUQsQ0FBakIsQ0FIMEMsQ0FHbEI7O0FBQ3hCLE1BQU1DLElBQUksR0FBSUYsRUFBRSxDQUFDRyxpQkFBSCxFQUFkLENBSjBDLENBSUw7O0FBQ3JDLE1BQU1DLENBQUMsR0FBSUYsSUFBSSxDQUFDRyxXQUFoQixDQUwwQyxDQUtkOztBQUM1QixNQUFNQyxDQUFDLEdBQUlKLElBQUksQ0FBQ0ssWUFBaEIsQ0FOMEMsQ0FNYjs7QUFDN0IsTUFBTUMsSUFBSSxHQUFJYixJQUFJLENBQUNjLEtBQUwsR0FBVyxDQUFYLEdBQWEsSUFBZCxHQUFzQkwsQ0FBbkM7QUFDQSxNQUFNTSxJQUFJLEdBQUlmLElBQUksQ0FBQ2dCLE1BQUwsR0FBWSxDQUFaLEdBQWMsSUFBZixHQUF1QkwsQ0FBcEM7QUFDQSxNQUFNTSxJQUFJLEdBQUdSLENBQUMsR0FBQyxDQUFGLEdBQU1JLElBQUksR0FBQyxDQUF4QjtBQUNBLE1BQU1LLEdBQUcsR0FBR1AsQ0FBQyxHQUFDLENBQUYsR0FBTUksSUFBSSxHQUFDLENBQVgsR0FBZ0JmLElBQUksQ0FBQ21CLENBQUwsR0FBTyxJQUFSLEdBQWNSLENBQTdCLEdBQWlDWCxJQUFJLENBQUNtQixDQUFMLEdBQU8sSUFBUixHQUFjUixDQUFmLEdBQWtCLElBQTdELENBVjBDLENB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LEdBQTVCO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHWCxJQUFJLENBQUNZLFVBQUwsRUFBUjtBQUNBLE1BQUc3RSxDQUFDLENBQUM4RSxNQUFGLElBQVUsQ0FBYixFQUFnQjlFLENBQUMsR0FBRyxNQUFJQSxDQUFSO0FBQ2hCLE1BQUcwRSxDQUFDLENBQUNJLE1BQUYsSUFBVSxDQUFiLEVBQWdCSixDQUFDLEdBQUcsTUFBSUEsQ0FBUjtBQUNoQixNQUFHRSxDQUFDLENBQUNFLE1BQUYsSUFBVSxDQUFiLEVBQWdCRixDQUFDLEdBQUcsTUFBSUEsQ0FBUjtBQUVoQixTQUFPVCxDQUFDLEdBQUNFLENBQUYsR0FBSUUsQ0FBSixHQUFNdkUsQ0FBTixHQUFRMEUsQ0FBUixHQUFVRSxDQUFqQjtBQUNIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogd3jmjojmnYPnmbvpmYZcclxuICogQHBhcmFtIF9zdWNjZXNzIOeZu+mZhuaIkOWKn+i/lOWbnuWbnuiwgyDnrKzkuIDkuKrlj4LmlbDmmK93eOeUqOaIt+S/oeaBr1xyXG4gKiBAcGFyYW0gX2ZhaWwg5ouS57ud5o6I5p2D6L+U5ZueXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3hMb2dpbihfc3VjY2VzcywgX2ZhaWwsbm9kZSkge1xyXG4gICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSByZXR1cm47XHJcbiAgICAvL+W+ruS/oeeZu+mZhlxyXG4gICAgY29uc3Qgd3ggPSB3aW5kb3dbJ3d4J107Ly/pgb/lvIB0c+ivreazleajgOa1i1xyXG4gICAgY29uc3QgaW5mbyAgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpOy8v56uL5Y2z6I635Y+W57O757uf5L+h5oGvXHJcbiAgICBjb25zdCB3ICA9IGluZm8uc2NyZWVuV2lkdGg7Ly/lsY/luZXlrr1cclxuICAgIGNvbnN0IGggID0gaW5mby5zY3JlZW5IZWlnaHQ7Ly/lsY/luZXpq5hcclxuICAgIGNvbnN0IGVsZVcgPSAobm9kZS53aWR0aCoyLzEwODApICogdztcclxuICAgIGNvbnN0IGVsZUggPSAobm9kZS5oZWlnaHQqMi8yNDAwKSAqIGg7XHJcbiAgICBjb25zdCBsZWZ0ID0gdy8yIC0gZWxlVy8yO1xyXG4gICAgY29uc3QgdG9wID0gaC8yIC0gZWxlSC8yIC0gKG5vZGUueS8yNDAwKSpoKygobm9kZS55LzI0MDApKmgpKjAuMjU7XHJcblxyXG4gICAgLy/ojrflj5bnlKjmiLfnmoTlvZPliY3orr7nva7jgILov5Tlm57lgLzkuK3lj6rkvJrlh7rnjrDlsI/nqIvluo/lt7Lnu4/lkJHnlKjmiLfor7fmsYLov4fnmoTmnYPpmZDjgIJcclxuICAgIHd4LmdldFNldHRpbmcoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmF1dGhTZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55So5oi35bey5o6I5p2DXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55m76ZmG5pON5L2cXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdWNjZXNzICYmIF9zdWNjZXNzKHJlcy51c2VySW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnlKjmiLfmnKrmjojmnYNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yib5bu65YWo5bGP6YCP5piO55m76ZmG5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IHd4LmNyZWF0ZVVzZXJJbmZvQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBhcnNlSW50KGxlZnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBwYXJzZUludCh0b3ApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBhcnNlSW50KGVsZVcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwYXJzZUludChlbGVIKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAwMCcsLy/mnIDlkI7kuKTkvY3kuLrpgI/mmI7luqZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBwYXJzZUludChlbGVIKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBidXR0b24ub25UYXAoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueUqOaIt+aOiOadgzpcIiwgcmVzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3N1Y2Nlc3MgJiYgX3N1Y2Nlc3MocmVzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueUqOaIt+aLkue7neaOiOadgzpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZmFpbCAmJiBfZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb2FzdCh0ZXh0LHRpbWUpIHtcclxuICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCB3eCA9IHdpbmRvd1snd3gnXTsvL+mBv+W8gHRz6K+t5rOV5qOA5rWLXHJcbiAgICBjb25zdCBpbmZvICA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7Ly/nq4vljbPojrflj5bns7vnu5/kv6Hmga9cclxuICAgIGNvbnN0IHcgID0gaW5mby5zY3JlZW5XaWR0aDsvL+Wxj+W5leWuvVxyXG4gICAgY29uc3QgaCAgPSBpbmZvLnNjcmVlbkhlaWdodDsvL+Wxj+W5lemrmFxyXG4gICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgIHtcclxuICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgbGV0IHRvYXN0QmcgPSBjYy5maW5kKCdiYWNrZ3JvdW5kJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBsZXQgdG9hc3RUZXh0ID0gIGNjLmZpbmQoXCJ0ZXh0XCIsbmV3TXlQcmVmYWIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRvYXN0VGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRleHQ7XHJcbiAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB0b2FzdEJnLnJvdW5kUmVjdChcclxuICAgICAgICAgICAgLSggdG9hc3RUZXh0LndpZHRoICsgODApLzIsXHJcbiAgICAgICAgICAgIC0odG9hc3RUZXh0LmhlaWdodCs0MCkvMixcclxuICAgICAgICAgICAgdG9hc3RUZXh0LndpZHRoICsgODAsXHJcbiAgICAgICAgICAgIHRvYXN0VGV4dC5oZWlnaHQrNDAsXHJcbiAgICAgICAgICAgICh0b2FzdFRleHQuaGVpZ2h0KzQwKS8yXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0b2FzdEJnLmZpbGxDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgIHRvYXN0QmcuZmlsbCgpXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB0aW1lciA9IG51bGw7XHJcbiAgICAgICAgfSx0aW1lKVxyXG4gICAgfTtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKCd0b2FzdCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxufVxyXG5sZXQgTG9hZGluZyA9e1xyXG4gICAgZWxlOm51bGwsXHJcbiAgICBoaWRlRmxhZ2U6ZmFsc2UsXHJcbiAgICBzaG93KCl7XHJcbiAgICAgICAgTG9hZGluZy5oaWRlRmxhZ2UgPSBmYWxzZTtcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcblxyXG4gICAgICAgICAgICBpZighTG9hZGluZy5oaWRlRmxhZ2Upe1xyXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuZWxlID0gbmV3TXlQcmVmYWI7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsb2FkaW5nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIGhpZGUoKXtcclxuICAgICAgICBpZihMb2FkaW5nLmVsZSl7XHJcbiAgICAgICAgICAgIExvYWRpbmcuZWxlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgTG9hZGluZy5lbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBMb2FkaW5nLmVsZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIExvYWRpbmcuaGlkZUZsYWdlID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQge0xvYWRpbmd9O1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ZVJhbmtUaW1lKHRpbWVzdGFtcCl7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7Ly/ml7bpl7TmiLPkuLoxMOS9jemcgCoxMDAw77yM5pe26Ze05oiz5Li6MTPkvY3nmoTor53kuI3pnIDkuZgxMDAwXHJcbiAgICB2YXIgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJztcclxuICAgIHZhciBNID0gKGRhdGUuZ2V0TW9udGgoKSsxIDwgMTAgPyAnMCcrKGRhdGUuZ2V0TW9udGgoKSsxKSA6IGRhdGUuZ2V0TW9udGgoKSsxKSArICctJztcclxuICAgIHZhciBEID0gZGF0ZS5nZXREYXRlKCkgKyAnXFxuJztcclxuICAgIHZhciBoID0gZGF0ZS5nZXRIb3VycygpICsgJzonO1xyXG4gICAgdmFyIG0gPSBkYXRlLmdldE1pbnV0ZXMoKSArICc6JztcclxuICAgIHZhciBzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICBpZihoLmxlbmd0aDw9MSkgaCA9ICcwJytoO1xyXG4gICAgaWYobS5sZW5ndGg8PTEpIG0gPSAnMCcrbTtcclxuICAgIGlmKHMubGVuZ3RoPD0xKSBzID0gJzAnK3M7XHJcblxyXG4gICAgcmV0dXJuIFkrTStEK2grbStzO1xyXG59XHJcbiJdfQ==
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
      sign: 0
    };
    level2[n][i] = {
      sign: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWwuanMiXSwibmFtZXMiOlsibGV2ZWwiLCJBcnJheSIsImxldmVsMSIsImxldmVsMiIsImJsb2NrUm93IiwiYmxvY2tOdW0iLCJuIiwiaSIsInNpZ24iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxJQUFJQyxLQUFKLEVBQWQ7QUFFQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUQsS0FBSixFQUFmO0FBQUEsSUFDSUUsTUFBTSxHQUFHLElBQUlGLEtBQUosRUFEYjtBQUVBLElBQUlHLFFBQVEsR0FBRSxFQUFkO0FBQUEsSUFBa0JDLFFBQVEsR0FBRyxFQUE3Qjs7QUFFQSxLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBQ0YsUUFBakIsRUFBMkJFLENBQUMsRUFBNUIsRUFBK0I7QUFDM0JKLEVBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOLEdBQVksSUFBSUwsS0FBSixFQUFaO0FBQ0FFLEVBQUFBLE1BQU0sQ0FBQ0csQ0FBRCxDQUFOLEdBQVksSUFBSUwsS0FBSixFQUFaOztBQUNBLE9BQUksSUFBSU0sQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFDRixRQUFqQixFQUE0QkUsQ0FBQyxFQUE3QixFQUFnQztBQUM1QkwsSUFBQUEsTUFBTSxDQUFDSSxDQUFELENBQU4sQ0FBVUMsQ0FBVixJQUFlO0FBQUNDLE1BQUFBLElBQUksRUFBQztBQUFOLEtBQWY7QUFDQUwsSUFBQUEsTUFBTSxDQUFDRyxDQUFELENBQU4sQ0FBVUMsQ0FBVixJQUFlO0FBQUNDLE1BQUFBLElBQUksRUFBQztBQUFOLEtBQWY7QUFDSDtBQUNKOztBQUNETixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFDQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUVBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFDQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUVBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFDQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUNBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFDQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUVBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFDQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUNBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFDQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUNBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFFQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUNBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEIsRUFFQTtBQUNBOztBQUVBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBRUFOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFDQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUNBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFFQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUNBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFDQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUNBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFFQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUNBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFFQU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYU0sSUFBYixHQUFvQixDQUFwQjtBQUNBTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhTSxJQUFiLEdBQW9CLENBQXBCO0FBQ0FOLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFNLElBQWIsR0FBb0IsQ0FBcEI7QUFNQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBRUFMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBRUFMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFFQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFFQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBRUFMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFHQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFHQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBR0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQUNBTCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsQ0FBVixFQUFhSyxJQUFiLEdBQW9CLENBQXBCO0FBQ0FMLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxDQUFWLEVBQWFLLElBQWIsR0FBb0IsQ0FBcEI7QUFDQUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLENBQVYsRUFBYUssSUFBYixHQUFvQixDQUFwQjtBQVFBUixLQUFLLENBQUNTLElBQU4sQ0FBV1AsTUFBWCxFQUFrQkMsTUFBbEI7ZUFFZUgiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v6IOM5pmvIGNhc2UgMDpcclxuLy/lopkgY2FzZSAxOlxyXG4vL+euseWtkCBjYXNlIDI6XHJcbi8v55CDIGNhc2UgMzpcclxuLy/kuIogY2FzZSA0OlxyXG4vL+WPsyBjYXNlIDU6XHJcbi8v5LiLIGNhc2UgNjpcclxuLy/lt6YgY2FzZSA3OlxyXG5cclxuY29uc3QgbGV2ZWwgPSBuZXcgQXJyYXkoKTtcclxuXHJcbmNvbnN0IGxldmVsMSA9IG5ldyBBcnJheSgpLFxyXG4gICAgbGV2ZWwyID0gbmV3IEFycmF5KCk7XHJcbnZhciBibG9ja1JvdyA9MTIsIGJsb2NrTnVtID0gMTI7XHJcblxyXG5mb3IodmFyIG4gPSAwOyBuPGJsb2NrUm93OyBuKyspe1xyXG4gICAgbGV2ZWwxW25dID0gbmV3IEFycmF5KCk7XHJcbiAgICBsZXZlbDJbbl0gPSBuZXcgQXJyYXkoKTtcclxuICAgIGZvcih2YXIgaSA9IDA7IGk8YmxvY2tOdW0gOyBpKyspe1xyXG4gICAgICAgIGxldmVsMVtuXVtpXSA9IHtzaWduOjB9XHJcbiAgICAgICAgbGV2ZWwyW25dW2ldID0ge3NpZ246MH1cclxuICAgIH1cclxufVxyXG5sZXZlbDFbMV1bM10uc2lnbiA9IDE7XHJcbmxldmVsMVsxXVs0XS5zaWduID0gMTtcclxubGV2ZWwxWzFdWzVdLnNpZ24gPSAxO1xyXG5cclxubGV2ZWwxWzJdWzNdLnNpZ24gPSAxO1xyXG5sZXZlbDFbMl1bNF0uc2lnbiA9IDM7XHJcbmxldmVsMVsyXVs1XS5zaWduID0gMTtcclxuXHJcbmxldmVsMVszXVszXS5zaWduID0gMTtcclxubGV2ZWwxWzNdWzRdLnNpZ24gPSAwO1xyXG5sZXZlbDFbM11bNV0uc2lnbiA9IDE7XHJcbmxldmVsMVszXVs2XS5zaWduID0gMTtcclxubGV2ZWwxWzNdWzddLnNpZ24gPSAxO1xyXG5sZXZlbDFbM11bOF0uc2lnbiA9IDE7XHJcblxyXG5sZXZlbDFbNF1bMV0uc2lnbiA9IDE7XHJcbmxldmVsMVs0XVsyXS5zaWduID0gMTtcclxubGV2ZWwxWzRdWzNdLnNpZ24gPSAxO1xyXG5sZXZlbDFbNF1bNF0uc2lnbiA9IDI7XHJcbmxldmVsMVs0XVs1XS5zaWduID0gMDtcclxubGV2ZWwxWzRdWzZdLnNpZ24gPSAyO1xyXG5sZXZlbDFbNF1bN10uc2lnbiA9IDM7XHJcbmxldmVsMVs0XVs4XS5zaWduID0gMTtcclxuXHJcbmxldmVsMVs1XVsxXS5zaWduID0gMTtcclxubGV2ZWwxWzVdWzJdLnNpZ24gPSAzO1xyXG5sZXZlbDFbNV1bM10uc2lnbiA9IDA7XHJcblxyXG4vLyBsZXZlbDFbNV1bMl0uc2lnbiA9IDM7XHJcbi8vIGxldmVsMVs1XVszXS5zaWduID0gMztcclxuXHJcbmxldmVsMVs1XVs0XS5zaWduID0gMjtcclxuXHJcbmxldmVsMVs1XVs1XS5zaWduID0gNjtcclxubGV2ZWwxWzVdWzZdLnNpZ24gPSAxO1xyXG5sZXZlbDFbNV1bN10uc2lnbiA9IDE7XHJcbmxldmVsMVs1XVs4XS5zaWduID0gMTtcclxuXHJcbmxldmVsMVs2XVsxXS5zaWduID0gMTtcclxubGV2ZWwxWzZdWzJdLnNpZ24gPSAxO1xyXG5sZXZlbDFbNl1bM10uc2lnbiA9IDE7XHJcbmxldmVsMVs2XVs0XS5zaWduID0gMTtcclxubGV2ZWwxWzZdWzVdLnNpZ24gPSAyO1xyXG5sZXZlbDFbNl1bNl0uc2lnbiA9IDE7XHJcblxyXG5sZXZlbDFbN11bNF0uc2lnbiA9IDE7XHJcbmxldmVsMVs3XVs1XS5zaWduID0gMztcclxubGV2ZWwxWzddWzZdLnNpZ24gPSAxO1xyXG5cclxubGV2ZWwxWzhdWzRdLnNpZ24gPSAxO1xyXG5sZXZlbDFbOF1bNV0uc2lnbiA9IDE7XHJcbmxldmVsMVs4XVs2XS5zaWduID0gMTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5sZXZlbDJbMV1bMV0uc2lnbiA9IDE7XHJcbmxldmVsMlsxXVsyXS5zaWduID0gMTtcclxubGV2ZWwyWzFdWzNdLnNpZ24gPSAxO1xyXG5sZXZlbDJbMV1bNF0uc2lnbiA9IDE7XHJcbmxldmVsMlsxXVs1XS5zaWduID0gMTtcclxuXHJcbmxldmVsMlsyXVsxXS5zaWduID0gMTtcclxubGV2ZWwyWzJdWzJdLnNpZ24gPSA2O1xyXG5sZXZlbDJbMl1bNV0uc2lnbiA9IDE7XHJcblxyXG5sZXZlbDJbM11bMV0uc2lnbiA9IDE7XHJcbmxldmVsMlszXVszXS5zaWduID0gMjtcclxubGV2ZWwyWzNdWzRdLnNpZ24gPSAyO1xyXG5sZXZlbDJbM11bNV0uc2lnbiA9IDE7XHJcbmxldmVsMlszXVs3XS5zaWduID0gMTtcclxubGV2ZWwyWzNdWzhdLnNpZ24gPSAxO1xyXG5sZXZlbDJbM11bOV0uc2lnbiA9IDE7XHJcblxyXG5sZXZlbDJbNF1bMV0uc2lnbiA9IDE7XHJcbmxldmVsMls0XVszXS5zaWduID0gMjtcclxubGV2ZWwyWzRdWzVdLnNpZ24gPSAxO1xyXG5sZXZlbDJbNF1bN10uc2lnbiA9IDE7XHJcbmxldmVsMls0XVs4XS5zaWduID0gMztcclxubGV2ZWwyWzRdWzldLnNpZ24gPSAxO1xyXG5cclxubGV2ZWwyWzVdWzFdLnNpZ24gPSAxO1xyXG5sZXZlbDJbNV1bMl0uc2lnbiA9IDE7XHJcbmxldmVsMls1XVszXS5zaWduID0gMTtcclxubGV2ZWwyWzVdWzVdLnNpZ24gPSAxO1xyXG5sZXZlbDJbNV1bNl0uc2lnbiA9IDE7XHJcbmxldmVsMls1XVs3XS5zaWduID0gMTtcclxubGV2ZWwyWzVdWzhdLnNpZ24gPSAzO1xyXG5sZXZlbDJbNV1bOV0uc2lnbiA9IDE7XHJcblxyXG5sZXZlbDJbNl1bMl0uc2lnbiA9IDE7XHJcbmxldmVsMls2XVszXS5zaWduID0gMTtcclxubGV2ZWwyWzZdWzhdLnNpZ24gPSAzO1xyXG5sZXZlbDJbNl1bOV0uc2lnbiA9IDE7XHJcblxyXG5cclxubGV2ZWwyWzddWzJdLnNpZ24gPSAxO1xyXG5sZXZlbDJbN11bNl0uc2lnbiA9IDE7XHJcbmxldmVsMls3XVs5XS5zaWduID0gMTtcclxuXHJcblxyXG5sZXZlbDJbOF1bMl0uc2lnbiA9IDE7XHJcbmxldmVsMls4XVs2XS5zaWduID0gMTtcclxubGV2ZWwyWzhdWzddLnNpZ24gPSAxO1xyXG5sZXZlbDJbOF1bOF0uc2lnbiA9IDE7XHJcbmxldmVsMls4XVs5XS5zaWduID0gMTtcclxuXHJcblxyXG5sZXZlbDJbOV1bMl0uc2lnbiA9IDE7XHJcbmxldmVsMls5XVszXS5zaWduID0gMTtcclxubGV2ZWwyWzldWzRdLnNpZ24gPSAxO1xyXG5sZXZlbDJbOV1bNV0uc2lnbiA9IDE7XHJcbmxldmVsMls5XVs2XS5zaWduID0gMTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmxldmVsLnB1c2gobGV2ZWwxLGxldmVsMilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxldmVsIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxMYXlvdXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsZXZlbEl0ZW0iLCJQcmVmYWIiLCJsZXZlbExpc3QiLCJsZXZlbExpc3RDb250ZW4iLCJsZXZlbFNyb2xsVmlldyIsImNsYXNzaWNzTGV2ZWxCdG4iLCJCdXR0b24iLCJuZXRMZXZlbEJ0biIsImNsb3NlTGV2ZWxCdG4iLCJvbkxvYWQiLCJzdGFydCIsImZpbmQiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJsb2FkQ2xhc3NpY3NMZXZlbExpc3QiLCJsb2FkTmV0TGV2ZWxMaXN0IiwiY2xvc2VMZXZlbExheW91dCIsImNsYXNzaWNlQnRuTGFiZWwiLCJjb2xvciIsIm5ldEJ0bkxhYmVsIiwib3BhY2l0eSIsIndpbmRvdyIsImxldmVsQ2xhc3NpZnkiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJ0aGF0IiwibGV2ZWxIIiwibGV2ZWxSb3ciLCJsZXZlbFRvdGFsIiwiY2xhc3NpY3NMZXZlbE51bSIsImkiLCJpbnN0YW50aWF0ZSIsImluZGV4TGV2ZWwiLCJ1c2VyIiwibGV2ZWxGaW5pc2hOdW0iLCJnZXRDaGlsZEJ5TmFtZSIsIkxhYmVsIiwic3RyaW5nIiwidCIsImxldmVsSW5kZXgiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImFkZENoaWxkIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJoZWlnaHQiLCJuZXRMZXZlbE51bSIsInVzZXJJbmZvIiwibG9nIiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxTQUFTLEVBQUVKLEVBQUUsQ0FB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QjtBQUNILEdBbkhJO0FBb0hMVCxFQUFBQSxnQkFwSEssOEJBb0hhO0FBQ2QsU0FBS0wsSUFBTCxDQUFVc0MsZ0JBQVY7QUFDQSxTQUFLdEMsSUFBTCxDQUFVdUMsT0FBVjtBQUNILEdBdkhJLENBeUhMOztBQXpISyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBsZXZlbEl0ZW06IGNjLlByZWZhYixcclxuICAgICAgICBsZXZlbExpc3Q6bnVsbCxcclxuICAgICAgICBsZXZlbExpc3RDb250ZW46bnVsbCxcclxuICAgICAgICBsZXZlbFNyb2xsVmlldzpudWxsLFxyXG4gICAgICAgIGNsYXNzaWNzTGV2ZWxCdG46Y2MuQnV0dG9uLFxyXG4gICAgICAgIG5ldExldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgICAgICBjbG9zZUxldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3QgPSBjYy5maW5kKCdsZXZlbExpc3QvbGV2ZWxTY3JvbGxWaWV3L3ZpZXcvY29udGVudC9pdGVtTGlzdCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0Q29udGVuID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldy92aWV3L2NvbnRlbnQnLHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmxldmVsU3JvbGxWaWV3ID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldycsdGhpcy5ub2RlKVxyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5jbGFzc2ljc0xldmVsQnRuID09IG51bGwpIHRoaXMuY2xhc3NpY3NMZXZlbEJ0biA9IGNjLmZpbmQoJ2xldmVsTGlzdC9jbGFzc2lmeS9jbGFzc2ljc0xldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYodGhpcy5uZXRMZXZlbEJ0biA9PSBudWxsKSB0aGlzLm5ldExldmVsQnRuID0gY2MuZmluZCgnbGV2ZWxMaXN0L2NsYXNzaWZ5L25ldExldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYodGhpcy5jbG9zZUxldmVsQnRuID09IG51bGwpIHRoaXMuY2xvc2VMZXZlbEJ0biA9IGNjLmZpbmQoJ2Nsb3NlTGV2ZWwnLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLmxvYWRDbGFzc2ljc0xldmVsTGlzdCwgdGhpcylcclxuICAgICAgICB0aGlzLm5ldExldmVsQnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5sb2FkTmV0TGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMuY2xvc2VMZXZlbEJ0bi5ub2RlLm9uKCdjbGljaycsdGhpcy5jbG9zZUxldmVsTGF5b3V0LCB0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRDbGFzc2ljc0xldmVsTGlzdCgpO1xyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgbG9hZENsYXNzaWNzTGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgLy8g6K6+572u5YiH5o2i5YWz5Y2h57G75Z6L5oyJ6ZKu6YCJ5LitXHJcbiAgICAgICAgbGV0IGNsYXNzaWNlQnRuTGFiZWwgPSBjYy5maW5kKCdCYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgY2xhc3NpY2VCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDIwMiwxMjIsMCk7XHJcbiAgICAgICAgbGV0IG5ldEJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5uZXRMZXZlbEJ0bi5ub2RlKTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5vcGFjaXR5ID0gMTI1O1xyXG5cclxuICAgICAgICB3aW5kb3cubGV2ZWxDbGFzc2lmeSA9ICdjbGFzc2ljc0xldmVsJztcclxuXHJcbiAgICAgICAgLy/muIXnqbrlhbPljaHoo4Llj5hcclxuICAgICAgICB0aGlzLmxldmVsTGlzdC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxldmVsSCA9IDA7XHJcbiAgICAgICAgbGV0IGxldmVsUm93ID0gMTA7XHJcbiAgICAgICAgbGV0IGxldmVsVG90YWwgPSB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGV2ZWxUb3RhbCA7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbEl0ZW0pO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXhMZXZlbCA9IGkrMTtcclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA8PSAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0rMSl7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdsZXZlbE51bScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaW5kZXhMZXZlbDtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xldmVsTG9jaycpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vbigndG91Y2hlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxJbmRleCA9IGluZGV4TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxMaXN0LmFkZENoaWxkKG5vZGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKGluZGV4TGV2ZWwgPD0gbGV2ZWxSb3cpe1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxSb3cgPSBNYXRoLmZsb29yKGxldmVsVG90YWwgLyBNYXRoLmZsb29yKHRoaXMubGV2ZWxMaXN0Q29udGVuLndpZHRoIC8gbm9kZS53aWR0aCkgLTEpO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxIICs9IG5vZGUuaGVpZ2h0ICsgNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3RDb250ZW4uaGVpZ2h0ID0gbGV2ZWxIO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgbG9hZE5ldExldmVsTGlzdCgpe1xyXG4gICAgICAgIC8vIOiuvue9ruWIh+aNouWFs+WNoeexu+Wei+aMiemSrumAieS4rVxyXG4gICAgICAgIGxldCBjbGFzc2ljZUJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5jbGFzc2ljc0xldmVsQnRuLm5vZGUpO1xyXG4gICAgICAgIGNsYXNzaWNlQnRuTGFiZWwuY29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgY2xhc3NpY2VCdG5MYWJlbC5vcGFjaXR5ID0gMTI1O1xyXG4gICAgICAgIGxldCBuZXRCdG5MYWJlbCA9IGNjLmZpbmQoJ0JhY2tncm91bmQvTGFiZWwnLHRoaXMubmV0TGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgbmV0QnRuTGFiZWwuY29sb3IgPSBjYy5jb2xvcigyMDIsMTIyLDApO1xyXG5cclxuICAgICAgICB3aW5kb3cubGV2ZWxDbGFzc2lmeSA9ICduZXRMZXZlbCc7XHJcblxyXG4gICAgICAgIC8v5riF56m65YWz5Y2h6KOC5Y+YXHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3QuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBsZXZlbEggPSAwO1xyXG4gICAgICAgIGxldCBsZXZlbFJvdyA9IDEwO1xyXG4gICAgICAgIGxldCBsZXZlbFRvdGFsID0gd2luZG93Lm5ldExldmVsTnVtO1xyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxsZXZlbFRvdGFsIDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxldmVsSXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleExldmVsID0gaSsxO1xyXG4gICAgICAgICAgICBpZihpbmRleExldmVsIDw9IHdpbmRvdy51c2VySW5mby5jbGFzc2ljc0xldmVsTnVtKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xldmVsTnVtJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbmRleExldmVsO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxMb2NrJykub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sZXZlbExpc3QuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKCd0b3VjaGVuZCcsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbih0KXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ2xldmVsOicgKyBpbmRleExldmVsKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA8PSBsZXZlbFJvdyl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbFJvdyA9IE1hdGguZmxvb3IobGV2ZWxUb3RhbCAvIE1hdGguZmxvb3IodGhpcy5sZXZlbExpc3RDb250ZW4ud2lkdGggLyBub2RlLndpZHRoKSAtMSk7XHJcbiAgICAgICAgICAgICAgICBsZXZlbEggKz0gbm9kZS5oZWlnaHQgKyA3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxldmVsTGlzdENvbnRlbi5oZWlnaHQgPSBsZXZlbEg7XHJcbiAgICB9LFxyXG4gICAgY2xvc2VMZXZlbExheW91dCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
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
