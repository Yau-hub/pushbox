
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
        //layout[i][n].sign -- ????????????
        if (layout[i][n].sign == 4 || layout[i][n].sign == 5 || layout[i][n].sign == 6 || layout[i][n].sign == 7) {
          this.position.x = n;
          this.position.y = i;
        } //????????????


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
        var newBlock = cc.instantiate(this.block); // ???????????????

        newBlock.setPosition(x, y); // ??????????????????????????? Canvas ????????????

        this.node.addChild(newBlock);
      }
    }
  },
  renderBn: function renderBn() {
    var that = this;
    if (this.gameBn == null) this.gameBn = cc.find('Canvas/buildBg/gameBn').getComponent(cc.Sprite);
    cc.assetManager.loadRemote(window.bgUrlBase + '_400x240.jpg', function (err, texture) {
      var sprite = new cc.SpriteFrame(texture, cc.rect(0, 0, 400, 240));
      that.gameBn.spriteFrame = sprite; //??????????????????????????????
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
                (0, _common.Toast)('???????????????', 1500);
                return;
              }

              if (boxNum != ballNum) {
                (0, _common.Toast)('??????????????????????????????', 1500);
                return;
              }

              if (boxNum < 3) {
                (0, _common.Toast)('??????????????????????????????', 1500);
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
      //????????????
      var location = event.getLocation(); //????????????

      var touchPoint = cc.find('Canvas').convertToNodeSpaceAR(location); //??????????????????

      for (var i = 0; i < window.blockNum; i++) {
        for (var n = 0; n < window.blockNum; n++) {
          //???????????????????????????
          if (window.layout[0][0].x <= touchPoint.x && touchPoint.x <= window.layout[0][window.blockNum - 1].x + window.eleSize && window.layout[0][0].y >= touchPoint.y && touchPoint.y >= window.layout[window.blockNum - 1][window.blockNum - 1].y - window.eleSize) {
            if (that.selectEle >= 4 && window.buildLevel[i][n].sign >= 4) {
              window.buildLevel[i][n].sign = 0;
              window.buildLevel[i][n].cover = null;
            }
          } //????????????


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

      that.renderLayout(window.buildLevel); //??????????????????

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnVpbGQuanMiXSwibmFtZXMiOlsid2luZG93IiwiZWxlU2l6ZSIsImxheW91dCIsIkFycmF5IiwiYmxvY2tOdW0iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJsb2NrIiwidHlwZSIsIlByZWZhYiIsImRpc3BsYXlOYW1lIiwid2FsbCIsImJveCIsImJhbGwiLCJyb2xlVXAiLCJyb2xlUmlnaHQiLCJyb2xlRG93biIsInJvbGVMZWZ0IiwicG9zaXRpb24iLCJnYW1lQm4iLCJTcHJpdGUiLCJib3hOdW0iLCJzZWxlY3RFbGUiLCJ3YWxsRWxlIiwiYm94RWxlIiwiYmFsbEVsZSIsInVwRWxlIiwicmlnaHRFbGUiLCJkb3duRWxlIiwibGVmdEVsZSIsIm9uTG9hZCIsInRoYXQiLCJpbml0V2luRWxlIiwicmVuZGVyQmciLCJmcm9tIiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsImJ1aWxkTGV2ZWwiLCJkYXRhIiwicmVuZGVyTGF5b3V0IiwiZmluZCIsIm5vZGUiLCJoZWlnaHQiLCJ3aW5TaXplIiwid2lkdGgiLCJzdGFydCIsImFkZEV2ZW50IiwicmVuZGVyU2VsZWN0RWxlIiwicmVhbFNpeiIsImkiLCJuIiwieCIsInkiLCJzaWduIiwiY292ZXIiLCJpbml0UG9zaXRpb24iLCJsZW5ndGgiLCJzdGFydFgiLCJzdGFydFkiLCJuZXdCbG9jayIsImluc3RhbnRpYXRlIiwic2V0UG9zaXRpb24iLCJhZGRDaGlsZCIsInJlbmRlckJuIiwiZ2V0Q29tcG9uZW50IiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImJnVXJsQmFzZSIsImVyciIsInRleHR1cmUiLCJzcHJpdGUiLCJTcHJpdGVGcmFtZSIsInJlY3QiLCJzcHJpdGVGcmFtZSIsIm9uIiwiYmFjayIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJiYWxsTnVtIiwicm9sZU51bSIsInNldFN0b3JhZ2UiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImV2ZW50IiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsInRvdWNoUG9pbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsImNvbG9yIiwiQ29sb3IiLCJmcm9tSEVYIiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0Iiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBakI7QUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLElBQUlDLEtBQUosRUFBaEI7QUFDQUgsTUFBTSxDQUFDSSxRQUFQLEdBQWtCLEVBQWxCO0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZOO0FBR0hDLE1BQUFBLFdBQVcsRUFBQztBQUhULEtBREM7QUFNUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUDtBQUdGQyxNQUFBQSxXQUFXLEVBQUM7QUFIVixLQU5FO0FBV1JFLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRlI7QUFHREMsTUFBQUEsV0FBVyxFQUFDO0FBSFgsS0FYRztBQWdCUkcsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGTCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUDtBQUdGQyxNQUFBQSxXQUFXLEVBQUM7QUFIVixLQWhCRTtBQXFCUkksSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKTixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGTDtBQUdKQyxNQUFBQSxXQUFXLEVBQUM7QUFIUixLQXJCQTtBQTBCUkssSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsSUFERjtBQUVQUCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGRjtBQUdQQyxNQUFBQSxXQUFXLEVBQUM7QUFITCxLQTFCSDtBQStCUk0sSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOUixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGSDtBQUdOQyxNQUFBQSxXQUFXLEVBQUM7QUFITixLQS9CRjtBQW9DUk8sSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOVCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGSDtBQUdOQyxNQUFBQSxXQUFXLEVBQUM7QUFITixLQXBDRjtBQXlDUlEsSUFBQUEsUUFBUSxFQUFDO0FBQ0wsaUJBQVM7QUFESixLQXpDRDtBQTRDUkMsSUFBQUEsTUFBTSxFQUFDaEIsRUFBRSxDQUFDaUIsTUE1Q0Y7QUE2Q1JDLElBQUFBLE1BQU0sRUFBQztBQUNILGlCQUFTO0FBRE4sS0E3Q0M7QUFnRFJDLElBQUFBLFNBQVMsRUFBRSxDQWhESDtBQWlEUkMsSUFBQUEsT0FBTyxFQUFDcEIsRUFBRSxDQUFDTSxNQWpESDtBQWtEUmUsSUFBQUEsTUFBTSxFQUFDckIsRUFBRSxDQUFDTSxNQWxERjtBQW1EUmdCLElBQUFBLE9BQU8sRUFBQ3RCLEVBQUUsQ0FBQ00sTUFuREg7QUFvRFJpQixJQUFBQSxLQUFLLEVBQUN2QixFQUFFLENBQUNNLE1BcEREO0FBcURSa0IsSUFBQUEsUUFBUSxFQUFDeEIsRUFBRSxDQUFDTSxNQXJESjtBQXNEUm1CLElBQUFBLE9BQU8sRUFBQ3pCLEVBQUUsQ0FBQ00sTUF0REg7QUF1RFJvQixJQUFBQSxPQUFPLEVBQUMxQixFQUFFLENBQUNNO0FBdkRILEdBRlA7QUE2REw7QUFFQXFCLEVBQUFBLE1BL0RLLG9CQStESztBQUNOLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS0MsVUFBTDtBQUNBLFNBQUtDLFFBQUwsR0FITSxDQUlOOztBQUNBLFFBQUduQyxNQUFNLENBQUNvQyxJQUFQLElBQWUsTUFBbEIsRUFBeUI7QUFDckJDLE1BQUFBLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjO0FBQ1ZDLFFBQUFBLEdBQUcsRUFBQyxZQURNO0FBRVZDLFFBQUFBLE9BRlUsbUJBRUZDLEdBRkUsRUFFRTtBQUNSekMsVUFBQUEsTUFBTSxDQUFDMEMsVUFBUCxHQUFvQkQsR0FBRyxDQUFDRSxJQUF4QjtBQUNBVixVQUFBQSxJQUFJLENBQUNXLFlBQUwsQ0FBa0I1QyxNQUFNLENBQUMwQyxVQUF6QjtBQUNIO0FBTFMsT0FBZDtBQU9IOztBQUNEckMsSUFBQUEsRUFBRSxDQUFDd0MsSUFBSCxDQUFRLE1BQVIsRUFBZSxLQUFLQyxJQUFwQixFQUEwQkMsTUFBMUIsR0FBb0MsQ0FBQzFDLEVBQUUsQ0FBQzJDLE9BQUgsQ0FBV0QsTUFBWCxHQUFvQjFDLEVBQUUsQ0FBQzJDLE9BQUgsQ0FBV0MsS0FBaEMsSUFBdUMsQ0FBM0U7QUFDSCxHQTlFSTtBQWdGTEMsRUFBQUEsS0FoRkssbUJBZ0ZJO0FBQ0wsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDSCxHQW5GSTtBQXFGTDtBQUNBbEIsRUFBQUEsVUF0Rkssd0JBc0ZPO0FBQ1IsUUFBSW1CLE9BQU8sR0FBR2hELEVBQUUsQ0FBQzJDLE9BQUgsQ0FBV0MsS0FBWCxHQUFpQmpELE1BQU0sQ0FBQ0ksUUFBdEM7QUFDQUosSUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCb0QsT0FBakI7O0FBRUEsU0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUd0RCxNQUFNLENBQUNJLFFBQTFCLEVBQW9Da0QsQ0FBQyxFQUFyQyxFQUF3QztBQUNwQ3RELE1BQUFBLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjb0QsQ0FBZCxJQUFtQixJQUFJbkQsS0FBSixFQUFuQjtBQUNBSCxNQUFBQSxNQUFNLENBQUMwQyxVQUFQLENBQWtCWSxDQUFsQixJQUF1QixJQUFJbkQsS0FBSixFQUF2Qjs7QUFDQSxXQUFJLElBQUlvRCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUd2RCxNQUFNLENBQUNJLFFBQTFCLEVBQW9DbUQsQ0FBQyxFQUFyQyxFQUF3QztBQUNwQ3ZELFFBQUFBLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjb0QsQ0FBZCxFQUFpQkMsQ0FBakIsSUFBc0I7QUFBQ0MsVUFBQUEsQ0FBQyxFQUFDLENBQUg7QUFBS0MsVUFBQUEsQ0FBQyxFQUFDLENBQVA7QUFBU0MsVUFBQUEsSUFBSSxFQUFDLENBQWQ7QUFBZ0JDLFVBQUFBLEtBQUssRUFBQztBQUF0QixTQUF0QjtBQUNBM0QsUUFBQUEsTUFBTSxDQUFDMEMsVUFBUCxDQUFrQlksQ0FBbEIsRUFBcUJDLENBQXJCLElBQTBCO0FBQUNDLFVBQUFBLENBQUMsRUFBQyxDQUFIO0FBQUtDLFVBQUFBLENBQUMsRUFBQyxDQUFQO0FBQVNDLFVBQUFBLElBQUksRUFBQyxDQUFkO0FBQWdCQyxVQUFBQSxLQUFLLEVBQUM7QUFBdEIsU0FBMUI7QUFDSDtBQUNKO0FBQ0osR0FsR0k7QUFtR0xDLEVBQUFBLFlBbkdLLHdCQW1HUTFELE1BbkdSLEVBbUdlO0FBQ2hCLFNBQUtrQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0csTUFBTCxHQUFjLENBQWQ7O0FBQ0EsU0FBSSxJQUFJK0IsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFDcEQsTUFBTSxDQUFDMkQsTUFBeEIsRUFBZ0NQLENBQUMsRUFBakMsRUFBb0M7QUFDaEMsV0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdyRCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUyRCxNQUE3QixFQUFxQ04sQ0FBQyxFQUF0QyxFQUF5QztBQUNyQztBQUNBLFlBQUdyRCxNQUFNLENBQUNvRCxDQUFELENBQU4sQ0FBVUMsQ0FBVixFQUFhRyxJQUFiLElBQXFCLENBQXJCLElBQTBCeEQsTUFBTSxDQUFDb0QsQ0FBRCxDQUFOLENBQVVDLENBQVYsRUFBYUcsSUFBYixJQUFxQixDQUEvQyxJQUFvRHhELE1BQU0sQ0FBQ29ELENBQUQsQ0FBTixDQUFVQyxDQUFWLEVBQWFHLElBQWIsSUFBcUIsQ0FBekUsSUFBOEV4RCxNQUFNLENBQUNvRCxDQUFELENBQU4sQ0FBVUMsQ0FBVixFQUFhRyxJQUFiLElBQXFCLENBQXRHLEVBQXdHO0FBQ3BHLGVBQUt0QyxRQUFMLENBQWNvQyxDQUFkLEdBQWtCRCxDQUFsQjtBQUNBLGVBQUtuQyxRQUFMLENBQWNxQyxDQUFkLEdBQWtCSCxDQUFsQjtBQUNILFNBTG9DLENBTXJDOzs7QUFDQSxZQUFHcEQsTUFBTSxDQUFDb0QsQ0FBRCxDQUFOLENBQVVDLENBQVYsRUFBYUcsSUFBYixJQUFxQixDQUF4QixFQUEwQjtBQUN0QixlQUFLbkMsTUFBTDtBQUNIO0FBQ0o7QUFDSjtBQUVKLEdBcEhJO0FBcUhMWSxFQUFBQSxRQXJISyxzQkFxSEs7QUFDTixRQUFJMkIsTUFBTSxHQUFHLEVBQUV6RCxFQUFFLENBQUMyQyxPQUFILENBQVdDLEtBQVgsR0FBaUIsQ0FBbkIsQ0FBYjtBQUNBLFFBQUljLE1BQU0sR0FBSS9ELE1BQU0sQ0FBQ0MsT0FBUCxHQUFlRCxNQUFNLENBQUNJLFFBQXZCLEdBQWlDLENBQTlDOztBQUNBLFNBQUksSUFBSWtELENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR3RELE1BQU0sQ0FBQ0ksUUFBMUIsRUFBb0NrRCxDQUFDLEVBQXJDLEVBQXdDO0FBQ3BDLFdBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHdkQsTUFBTSxDQUFDSSxRQUExQixFQUFvQ21ELENBQUMsRUFBckMsRUFBd0M7QUFDcEMsWUFBSUMsQ0FBQyxHQUFHRCxDQUFDLEdBQUN2RCxNQUFNLENBQUNDLE9BQVQsR0FBbUI2RCxNQUEzQjtBQUNBLFlBQUlMLENBQUMsR0FBRyxDQUFDSCxDQUFELEdBQUd0RCxNQUFNLENBQUNDLE9BQVYsR0FBb0I4RCxNQUE1QjtBQUNBL0QsUUFBQUEsTUFBTSxDQUFDRSxNQUFQLENBQWNvRCxDQUFkLEVBQWlCQyxDQUFqQixJQUFzQjtBQUNsQkMsVUFBQUEsQ0FBQyxFQUFEQSxDQURrQjtBQUVsQkMsVUFBQUEsQ0FBQyxFQUFEQSxDQUZrQjtBQUdsQkMsVUFBQUEsSUFBSSxFQUFDLENBSGE7QUFJbEJDLFVBQUFBLEtBQUssRUFBQztBQUpZLFNBQXRCO0FBTUEsWUFBSUssUUFBUSxHQUFHM0QsRUFBRSxDQUFDNEQsV0FBSCxDQUFlLEtBQUt4RCxLQUFwQixDQUFmLENBVG9DLENBVXBDOztBQUNBdUQsUUFBQUEsUUFBUSxDQUFDRSxXQUFULENBQXFCVixDQUFyQixFQUF1QkMsQ0FBdkIsRUFYb0MsQ0FZcEM7O0FBQ0EsYUFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQkgsUUFBbkI7QUFDSDtBQUNKO0FBRUosR0ExSUk7QUEySUxJLEVBQUFBLFFBM0lLLHNCQTJJSztBQUNOLFFBQUluQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUcsS0FBS1osTUFBTCxJQUFlLElBQWxCLEVBQXdCLEtBQUtBLE1BQUwsR0FBY2hCLEVBQUUsQ0FBQ3dDLElBQUgsQ0FBUSx1QkFBUixFQUFpQ3dCLFlBQWpDLENBQThDaEUsRUFBRSxDQUFDaUIsTUFBakQsQ0FBZDtBQUN4QmpCLElBQUFBLEVBQUUsQ0FBQ2lFLFlBQUgsQ0FBZ0JDLFVBQWhCLENBQTJCdkUsTUFBTSxDQUFDd0UsU0FBUCxHQUFrQixjQUE3QyxFQUE2RCxVQUFVQyxHQUFWLEVBQWVDLE9BQWYsRUFBd0I7QUFDakYsVUFBSUMsTUFBTSxHQUFJLElBQUl0RSxFQUFFLENBQUN1RSxXQUFQLENBQW1CRixPQUFuQixFQUE0QnJFLEVBQUUsQ0FBQ3dFLElBQUgsQ0FBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLEdBQVosRUFBZ0IsR0FBaEIsQ0FBNUIsQ0FBZDtBQUNBNUMsTUFBQUEsSUFBSSxDQUFDWixNQUFMLENBQVl5RCxXQUFaLEdBQTBCSCxNQUExQixDQUZpRixDQUUvQztBQUVyQyxLQUpEO0FBS0gsR0FuSkk7QUFxSkx4QixFQUFBQSxRQXJKSyxzQkFxSks7QUFDTixRQUFJbEIsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFHLEtBQUtSLE9BQUwsSUFBZ0IsSUFBbkIsRUFBeUIsS0FBS0EsT0FBTCxHQUFnQnBCLEVBQUUsQ0FBQ3dDLElBQUgsQ0FBUSxlQUFSLEVBQXdCLEtBQUtDLElBQTdCLENBQWhCO0FBQ3pCLFFBQUcsS0FBS3BCLE1BQUwsSUFBZSxJQUFsQixFQUF3QixLQUFLQSxNQUFMLEdBQWVyQixFQUFFLENBQUN3QyxJQUFILENBQVEsY0FBUixFQUF1QixLQUFLQyxJQUE1QixDQUFmO0FBQ3hCLFFBQUcsS0FBS25CLE9BQUwsSUFBZ0IsSUFBbkIsRUFBeUIsS0FBS0EsT0FBTCxHQUFnQnRCLEVBQUUsQ0FBQ3dDLElBQUgsQ0FBUSxlQUFSLEVBQXdCLEtBQUtDLElBQTdCLENBQWhCO0FBQ3pCLFFBQUcsS0FBS2xCLEtBQUwsSUFBYyxJQUFqQixFQUF1QixLQUFLQSxLQUFMLEdBQWN2QixFQUFFLENBQUN3QyxJQUFILENBQVEsYUFBUixFQUFzQixLQUFLQyxJQUEzQixDQUFkO0FBQ3ZCLFFBQUcsS0FBS2pCLFFBQUwsSUFBaUIsSUFBcEIsRUFBMEIsS0FBS0EsUUFBTCxHQUFpQnhCLEVBQUUsQ0FBQ3dDLElBQUgsQ0FBUSxnQkFBUixFQUF5QixLQUFLQyxJQUE5QixDQUFqQjtBQUMxQixRQUFHLEtBQUtoQixPQUFMLElBQWdCLElBQW5CLEVBQXlCLEtBQUtBLE9BQUwsR0FBZ0J6QixFQUFFLENBQUN3QyxJQUFILENBQVEsZUFBUixFQUF3QixLQUFLQyxJQUE3QixDQUFoQjtBQUN6QixRQUFHLEtBQUtmLE9BQUwsSUFBZ0IsSUFBbkIsRUFBeUIsS0FBS0EsT0FBTCxHQUFnQjFCLEVBQUUsQ0FBQ3dDLElBQUgsQ0FBUSxlQUFSLEVBQXdCLEtBQUtDLElBQTdCLENBQWhCO0FBRXpCekMsSUFBQUEsRUFBRSxDQUFDd0MsSUFBSCxDQUFRLE1BQVIsRUFBZSxLQUFLQyxJQUFwQixFQUEwQmlDLEVBQTFCLENBQTZCLE9BQTdCLEVBQXFDLEtBQUtDLElBQTFDLEVBQWdELElBQWhEO0FBQ0EzRSxJQUFBQSxFQUFFLENBQUN3QyxJQUFILENBQVEsWUFBUixFQUFxQixLQUFLQyxJQUExQixFQUFnQ2lDLEVBQWhDLENBQW1DLE9BQW5DLEVBQTJDLFlBQVU7QUFDakQ5QyxNQUFBQSxJQUFJLENBQUNDLFVBQUw7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxRQUFMO0FBQ0gsS0FIRCxFQUdHLElBSEg7QUFLQTlCLElBQUFBLEVBQUUsQ0FBQ3dDLElBQUgsQ0FBUSxXQUFSLEVBQW9CLEtBQUtDLElBQXpCLEVBQStCaUMsRUFBL0IsQ0FBa0MsT0FBbEMsRUFBMEMsWUFBVTtBQUNoRCxVQUFJMUUsRUFBRSxDQUFDNEUsR0FBSCxDQUFPQyxRQUFQLEtBQW9CN0UsRUFBRSxDQUFDNEUsR0FBSCxDQUFPRSxXQUEvQixFQUE0QztBQUN4QyxZQUFJNUQsTUFBTSxHQUFFLENBQVo7QUFBQSxZQUFjNkQsT0FBTyxHQUFHLENBQXhCO0FBQUEsWUFBMEJDLE9BQU8sR0FBRyxDQUFwQzs7QUFFQSxhQUFJLElBQUkvQixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUd0RCxNQUFNLENBQUNJLFFBQTFCLEVBQW9Da0QsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxlQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd2RCxNQUFNLENBQUNJLFFBQTNCLEVBQXFDbUQsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxnQkFBR3ZELE1BQU0sQ0FBQzBDLFVBQVAsQ0FBa0JZLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkcsSUFBeEIsSUFBZ0MsQ0FBbkMsRUFBcUM7QUFDakNuQyxjQUFBQSxNQUFNO0FBQ1Q7O0FBQ0QsZ0JBQUd2QixNQUFNLENBQUMwQyxVQUFQLENBQWtCWSxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JHLElBQXhCLElBQWdDLENBQWhDLElBQXFDMUQsTUFBTSxDQUFDMEMsVUFBUCxDQUFrQlksQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCSSxLQUF4QixJQUFpQyxJQUF6RSxFQUE4RTtBQUMxRXlCLGNBQUFBLE9BQU87QUFDVjs7QUFDRCxnQkFBR3BGLE1BQU0sQ0FBQzBDLFVBQVAsQ0FBa0JZLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkcsSUFBeEIsSUFBZ0MsQ0FBbkMsRUFBcUM7QUFDakMyQixjQUFBQSxPQUFPO0FBQ1Y7O0FBQ0QsZ0JBQUcvQixDQUFDLElBQUl0RCxNQUFNLENBQUNJLFFBQVAsR0FBZ0IsQ0FBckIsSUFBMEJtRCxDQUFDLElBQUl2RCxNQUFNLENBQUNJLFFBQVAsR0FBZ0IsQ0FBbEQsRUFBb0Q7QUFDaEQsa0JBQUdpRixPQUFPLElBQUUsQ0FBWixFQUFjO0FBQ1YsbUNBQU0sT0FBTixFQUFjLElBQWQ7QUFDQTtBQUNIOztBQUNELGtCQUFHOUQsTUFBTSxJQUFJNkQsT0FBYixFQUFxQjtBQUNqQixtQ0FBTSxZQUFOLEVBQW1CLElBQW5CO0FBQ0E7QUFDSDs7QUFFRCxrQkFBRzdELE1BQU0sR0FBRyxDQUFaLEVBQWM7QUFDVixtQ0FBTSxZQUFOLEVBQW1CLElBQW5CO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFFRGMsUUFBQUEsRUFBRSxDQUFDaUQsVUFBSCxDQUFjO0FBQ1YvQyxVQUFBQSxHQUFHLEVBQUUsWUFESztBQUVWSSxVQUFBQSxJQUFJLEVBQUUzQyxNQUFNLENBQUMwQyxVQUZIO0FBR1ZGLFVBQUFBLE9BSFUscUJBR0Q7QUFDTHhDLFlBQUFBLE1BQU0sQ0FBQ29DLElBQVAsR0FBYyxPQUFkO0FBQ0EvQixZQUFBQSxFQUFFLENBQUNrRixRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSDtBQU5TLFNBQWQ7QUFRSDtBQUNKLEtBMUNELEVBMENHLElBMUNIO0FBNENBLFNBQUsxQyxJQUFMLENBQVVpQyxFQUFWLENBQWEsVUFBYixFQUF3QixVQUFVVSxLQUFWLEVBQWlCO0FBQ3JDO0FBQ0EsVUFBSUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLFdBQU4sRUFBZixDQUZxQyxDQUdyQzs7QUFDQSxVQUFJQyxVQUFVLEdBQUd2RixFQUFFLENBQUN3QyxJQUFILENBQVEsUUFBUixFQUFrQmdELG9CQUFsQixDQUF1Q0gsUUFBdkMsQ0FBakIsQ0FKcUMsQ0FLckM7O0FBQ0EsV0FBSSxJQUFJcEMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHdEQsTUFBTSxDQUFDSSxRQUExQixFQUFvQ2tELENBQUMsRUFBckMsRUFBd0M7QUFDcEMsYUFBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUd2RCxNQUFNLENBQUNJLFFBQTFCLEVBQW9DbUQsQ0FBQyxFQUFyQyxFQUF3QztBQUNwQztBQUNBLGNBQUd2RCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9Cc0QsQ0FBcEIsSUFBeUJvQyxVQUFVLENBQUNwQyxDQUFwQyxJQUF5Q29DLFVBQVUsQ0FBQ3BDLENBQVgsSUFBZ0J4RCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxDQUFkLEVBQWlCRixNQUFNLENBQUNJLFFBQVAsR0FBZ0IsQ0FBakMsRUFBb0NvRCxDQUFwQyxHQUF3Q3hELE1BQU0sQ0FBQ0MsT0FBeEcsSUFDQ0QsTUFBTSxDQUFDRSxNQUFQLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQnVELENBQXBCLElBQXlCbUMsVUFBVSxDQUFDbkMsQ0FEckMsSUFDMENtQyxVQUFVLENBQUNuQyxDQUFYLElBQWdCekQsTUFBTSxDQUFDRSxNQUFQLENBQWNGLE1BQU0sQ0FBQ0ksUUFBUCxHQUFnQixDQUE5QixFQUFpQ0osTUFBTSxDQUFDSSxRQUFQLEdBQWdCLENBQWpELEVBQW9EcUQsQ0FBcEQsR0FBd0R6RCxNQUFNLENBQUNDLE9BRDVILEVBRUU7QUFDRSxnQkFBSWdDLElBQUksQ0FBQ1QsU0FBTCxJQUFrQixDQUFsQixJQUF1QnhCLE1BQU0sQ0FBQzBDLFVBQVAsQ0FBa0JZLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkcsSUFBeEIsSUFBZ0MsQ0FBM0QsRUFBOEQ7QUFDMUQxRCxjQUFBQSxNQUFNLENBQUMwQyxVQUFQLENBQWtCWSxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JHLElBQXhCLEdBQStCLENBQS9CO0FBQ0ExRCxjQUFBQSxNQUFNLENBQUMwQyxVQUFQLENBQWtCWSxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JJLEtBQXhCLEdBQWdDLElBQWhDO0FBQ0g7QUFDSixXQVRtQyxDQVVwQzs7O0FBQ0gsY0FBRzNELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjb0QsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLElBQXlCb0MsVUFBVSxDQUFDcEMsQ0FBcEMsSUFBeUNvQyxVQUFVLENBQUNwQyxDQUFYLElBQWdCeEQsTUFBTSxDQUFDRSxNQUFQLENBQWNvRCxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsR0FBd0J4RCxNQUFNLENBQUNDLE9BQXhGLElBQ0NELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjb0QsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0JFLENBQXBCLElBQXlCbUMsVUFBVSxDQUFDbkMsQ0FEckMsSUFDMENtQyxVQUFVLENBQUNuQyxDQUFYLElBQWdCekQsTUFBTSxDQUFDRSxNQUFQLENBQWNvRCxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQkUsQ0FBcEIsR0FBd0J6RCxNQUFNLENBQUNDLE9BRDVGLEVBRUM7QUFDRyxnQkFBRyxDQUFDRCxNQUFNLENBQUMwQyxVQUFQLENBQWtCWSxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JHLElBQXpCLElBQWlDMUQsTUFBTSxDQUFDMEMsVUFBUCxDQUFrQlksQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCRyxJQUF4QixJQUFnQyxDQUFwRSxFQUFzRTtBQUNsRTFELGNBQUFBLE1BQU0sQ0FBQzBDLFVBQVAsQ0FBa0JZLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkcsSUFBeEIsR0FBK0J6QixJQUFJLENBQUNULFNBQXBDO0FBQ0gsYUFGRCxNQUVNLElBQUd4QixNQUFNLENBQUMwQyxVQUFQLENBQWtCWSxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JHLElBQXhCLElBQWdDLENBQWhDLElBQXFDMUQsTUFBTSxDQUFDMEMsVUFBUCxDQUFrQlksQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCSSxLQUF4QixJQUFpQyxJQUF0RSxJQUErRTFCLElBQUksQ0FBQ1QsU0FBTCxJQUFrQixDQUFsQixJQUF1QlMsSUFBSSxDQUFDVCxTQUFMLElBQWtCLENBQTNILEVBQThIO0FBQ2hJeEIsY0FBQUEsTUFBTSxDQUFDMEMsVUFBUCxDQUFrQlksQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCRyxJQUF4QixHQUErQnpCLElBQUksQ0FBQ1QsU0FBcEM7QUFDQXhCLGNBQUFBLE1BQU0sQ0FBQzBDLFVBQVAsQ0FBa0JZLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QkksS0FBeEIsR0FBZ0MxQixJQUFJLENBQUNULFNBQXJDO0FBQ0gsYUFISyxNQUdEO0FBQ0R4QixjQUFBQSxNQUFNLENBQUMwQyxVQUFQLENBQWtCWSxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JHLElBQXhCLEdBQStCLENBQS9CO0FBQ0ExRCxjQUFBQSxNQUFNLENBQUMwQyxVQUFQLENBQWtCWSxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JJLEtBQXhCLEdBQWdDLElBQWhDO0FBQ0g7QUFFSjtBQUNEO0FBQ0o7O0FBRUQxQixNQUFBQSxJQUFJLENBQUNXLFlBQUwsQ0FBa0I1QyxNQUFNLENBQUMwQyxVQUF6QixFQW5DcUMsQ0FxQ3JDOztBQUNBLFVBQUdULElBQUksQ0FBQ1IsT0FBTCxDQUFhcUUscUJBQWIsR0FBcUN0QyxDQUFyQyxJQUEwQ2tDLFFBQVEsQ0FBQ2xDLENBQW5ELElBQ0lrQyxRQUFRLENBQUNsQyxDQUFULElBQWV2QixJQUFJLENBQUNSLE9BQUwsQ0FBYXFFLHFCQUFiLEdBQXFDdEMsQ0FBckMsR0FBdUN2QixJQUFJLENBQUNSLE9BQUwsQ0FBYXFFLHFCQUFiLEdBQXFDN0MsS0FEL0YsSUFFQ2hCLElBQUksQ0FBQ1IsT0FBTCxDQUFhcUUscUJBQWIsR0FBcUNyQyxDQUFyQyxJQUEwQ2lDLFFBQVEsQ0FBQ2pDLENBRnBELElBR0lpQyxRQUFRLENBQUNqQyxDQUFULElBQWV4QixJQUFJLENBQUNSLE9BQUwsQ0FBYXFFLHFCQUFiLEdBQXFDckMsQ0FBckMsR0FBdUN4QixJQUFJLENBQUNSLE9BQUwsQ0FBYXFFLHFCQUFiLEdBQXFDL0MsTUFIbEcsRUFJQztBQUNHZCxRQUFBQSxJQUFJLENBQUNULFNBQUwsR0FBaUIsQ0FBakI7QUFDQVMsUUFBQUEsSUFBSSxDQUFDbUIsZUFBTDtBQUNILE9BUEQsTUFRSyxJQUNEbkIsSUFBSSxDQUFDUCxNQUFMLENBQVlvRSxxQkFBWixHQUFvQ3RDLENBQXBDLElBQXlDa0MsUUFBUSxDQUFDbEMsQ0FBbEQsSUFDR2tDLFFBQVEsQ0FBQ2xDLENBQVQsSUFBZXZCLElBQUksQ0FBQ1AsTUFBTCxDQUFZb0UscUJBQVosR0FBb0N0QyxDQUFwQyxHQUFzQ3ZCLElBQUksQ0FBQ1AsTUFBTCxDQUFZb0UscUJBQVosR0FBb0M3QyxLQUQ1RixJQUVBaEIsSUFBSSxDQUFDUCxNQUFMLENBQVlvRSxxQkFBWixHQUFvQ3JDLENBQXBDLElBQXlDaUMsUUFBUSxDQUFDakMsQ0FGbEQsSUFHR2lDLFFBQVEsQ0FBQ2pDLENBQVQsSUFBZXhCLElBQUksQ0FBQ1AsTUFBTCxDQUFZb0UscUJBQVosR0FBb0NyQyxDQUFwQyxHQUFzQ3hCLElBQUksQ0FBQ1AsTUFBTCxDQUFZb0UscUJBQVosR0FBb0MvQyxNQUozRixFQUtKO0FBQ0dkLFFBQUFBLElBQUksQ0FBQ1QsU0FBTCxHQUFpQixDQUFqQjtBQUNBUyxRQUFBQSxJQUFJLENBQUNtQixlQUFMO0FBQ0gsT0FSSSxNQVNBLElBQ0RuQixJQUFJLENBQUNOLE9BQUwsQ0FBYW1FLHFCQUFiLEdBQXFDdEMsQ0FBckMsSUFBMENrQyxRQUFRLENBQUNsQyxDQUFuRCxJQUNHa0MsUUFBUSxDQUFDbEMsQ0FBVCxJQUFldkIsSUFBSSxDQUFDTixPQUFMLENBQWFtRSxxQkFBYixHQUFxQ3RDLENBQXJDLEdBQXVDdkIsSUFBSSxDQUFDTixPQUFMLENBQWFtRSxxQkFBYixHQUFxQzdDLEtBRDlGLElBRUFoQixJQUFJLENBQUNOLE9BQUwsQ0FBYW1FLHFCQUFiLEdBQXFDckMsQ0FBckMsSUFBMENpQyxRQUFRLENBQUNqQyxDQUZuRCxJQUdHaUMsUUFBUSxDQUFDakMsQ0FBVCxJQUFleEIsSUFBSSxDQUFDTixPQUFMLENBQWFtRSxxQkFBYixHQUFxQ3JDLENBQXJDLEdBQXVDeEIsSUFBSSxDQUFDTixPQUFMLENBQWFtRSxxQkFBYixHQUFxQy9DLE1BSjdGLEVBS0o7QUFDR2QsUUFBQUEsSUFBSSxDQUFDVCxTQUFMLEdBQWlCLENBQWpCO0FBQ0FTLFFBQUFBLElBQUksQ0FBQ21CLGVBQUw7QUFDSCxPQVJJLE1BU0EsSUFDRG5CLElBQUksQ0FBQ0wsS0FBTCxDQUFXa0UscUJBQVgsR0FBbUN0QyxDQUFuQyxJQUF3Q2tDLFFBQVEsQ0FBQ2xDLENBQWpELElBQ0drQyxRQUFRLENBQUNsQyxDQUFULElBQWV2QixJQUFJLENBQUNMLEtBQUwsQ0FBV2tFLHFCQUFYLEdBQW1DdEMsQ0FBbkMsR0FBcUN2QixJQUFJLENBQUNMLEtBQUwsQ0FBV2tFLHFCQUFYLEdBQW1DN0MsS0FEMUYsSUFFQWhCLElBQUksQ0FBQ0wsS0FBTCxDQUFXa0UscUJBQVgsR0FBbUNyQyxDQUFuQyxJQUF3Q2lDLFFBQVEsQ0FBQ2pDLENBRmpELElBR0dpQyxRQUFRLENBQUNqQyxDQUFULElBQWV4QixJQUFJLENBQUNMLEtBQUwsQ0FBV2tFLHFCQUFYLEdBQW1DckMsQ0FBbkMsR0FBcUN4QixJQUFJLENBQUNMLEtBQUwsQ0FBV2tFLHFCQUFYLEdBQW1DL0MsTUFKekYsRUFLSjtBQUNHZCxRQUFBQSxJQUFJLENBQUNULFNBQUwsR0FBaUIsQ0FBakI7QUFDQVMsUUFBQUEsSUFBSSxDQUFDbUIsZUFBTDtBQUNILE9BUkksTUFTQSxJQUNEbkIsSUFBSSxDQUFDSixRQUFMLENBQWNpRSxxQkFBZCxHQUFzQ3RDLENBQXRDLElBQTJDa0MsUUFBUSxDQUFDbEMsQ0FBcEQsSUFDR2tDLFFBQVEsQ0FBQ2xDLENBQVQsSUFBZXZCLElBQUksQ0FBQ0osUUFBTCxDQUFjaUUscUJBQWQsR0FBc0N0QyxDQUF0QyxHQUF3Q3ZCLElBQUksQ0FBQ0osUUFBTCxDQUFjaUUscUJBQWQsR0FBc0M3QyxLQURoRyxJQUVBaEIsSUFBSSxDQUFDSixRQUFMLENBQWNpRSxxQkFBZCxHQUFzQ3JDLENBQXRDLElBQTJDaUMsUUFBUSxDQUFDakMsQ0FGcEQsSUFHR2lDLFFBQVEsQ0FBQ2pDLENBQVQsSUFBZXhCLElBQUksQ0FBQ0osUUFBTCxDQUFjaUUscUJBQWQsR0FBc0NyQyxDQUF0QyxHQUF3Q3hCLElBQUksQ0FBQ0osUUFBTCxDQUFjaUUscUJBQWQsR0FBc0MvQyxNQUovRixFQUtKO0FBQ0dkLFFBQUFBLElBQUksQ0FBQ1QsU0FBTCxHQUFpQixDQUFqQjtBQUNBUyxRQUFBQSxJQUFJLENBQUNtQixlQUFMO0FBQ0gsT0FSSSxNQVNBLElBQ0RuQixJQUFJLENBQUNILE9BQUwsQ0FBYWdFLHFCQUFiLEdBQXFDdEMsQ0FBckMsSUFBMENrQyxRQUFRLENBQUNsQyxDQUFuRCxJQUNHa0MsUUFBUSxDQUFDbEMsQ0FBVCxJQUFldkIsSUFBSSxDQUFDSCxPQUFMLENBQWFnRSxxQkFBYixHQUFxQ3RDLENBQXJDLEdBQXVDdkIsSUFBSSxDQUFDSCxPQUFMLENBQWFnRSxxQkFBYixHQUFxQzdDLEtBRDlGLElBRUFoQixJQUFJLENBQUNILE9BQUwsQ0FBYWdFLHFCQUFiLEdBQXFDckMsQ0FBckMsSUFBMENpQyxRQUFRLENBQUNqQyxDQUZuRCxJQUdHaUMsUUFBUSxDQUFDakMsQ0FBVCxJQUFleEIsSUFBSSxDQUFDSCxPQUFMLENBQWFnRSxxQkFBYixHQUFxQ3JDLENBQXJDLEdBQXVDeEIsSUFBSSxDQUFDSCxPQUFMLENBQWFnRSxxQkFBYixHQUFxQy9DLE1BSjdGLEVBS0o7QUFDR2QsUUFBQUEsSUFBSSxDQUFDVCxTQUFMLEdBQWlCLENBQWpCO0FBQ0FTLFFBQUFBLElBQUksQ0FBQ21CLGVBQUw7QUFDSCxPQVJJLE1BU0EsSUFDRG5CLElBQUksQ0FBQ0YsT0FBTCxDQUFhK0QscUJBQWIsR0FBcUN0QyxDQUFyQyxJQUEwQ2tDLFFBQVEsQ0FBQ2xDLENBQW5ELElBQ0drQyxRQUFRLENBQUNsQyxDQUFULElBQWV2QixJQUFJLENBQUNGLE9BQUwsQ0FBYStELHFCQUFiLEdBQXFDdEMsQ0FBckMsR0FBdUN2QixJQUFJLENBQUNGLE9BQUwsQ0FBYStELHFCQUFiLEdBQXFDN0MsS0FEOUYsSUFFQWhCLElBQUksQ0FBQ0YsT0FBTCxDQUFhK0QscUJBQWIsR0FBcUNyQyxDQUFyQyxJQUEwQ2lDLFFBQVEsQ0FBQ2pDLENBRm5ELElBR0dpQyxRQUFRLENBQUNqQyxDQUFULElBQWV4QixJQUFJLENBQUNGLE9BQUwsQ0FBYStELHFCQUFiLEdBQXFDckMsQ0FBckMsR0FBdUN4QixJQUFJLENBQUNGLE9BQUwsQ0FBYStELHFCQUFiLEdBQXFDL0MsTUFKN0YsRUFLSjtBQUNHZCxRQUFBQSxJQUFJLENBQUNULFNBQUwsR0FBaUIsQ0FBakI7QUFDQVMsUUFBQUEsSUFBSSxDQUFDbUIsZUFBTDtBQUNIO0FBR0osS0F0R0QsRUFzR0UsSUF0R0Y7QUF3R0gsR0F6VEk7QUEwVExBLEVBQUFBLGVBMVRLLDZCQTBUWTtBQUNiLFNBQUszQixPQUFMLENBQWFzRSxLQUFiLEdBQXFCLElBQUkxRixFQUFFLENBQUMyRixLQUFQLEdBQWVDLE9BQWYsQ0FBdUIsU0FBdkIsQ0FBckI7QUFDQSxTQUFLdkUsTUFBTCxDQUFZcUUsS0FBWixHQUFvQixJQUFJMUYsRUFBRSxDQUFDMkYsS0FBUCxHQUFlQyxPQUFmLENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsU0FBS3RFLE9BQUwsQ0FBYW9FLEtBQWIsR0FBcUIsSUFBSTFGLEVBQUUsQ0FBQzJGLEtBQVAsR0FBZUMsT0FBZixDQUF1QixTQUF2QixDQUFyQjtBQUNBLFNBQUtyRSxLQUFMLENBQVdtRSxLQUFYLEdBQW1CLElBQUkxRixFQUFFLENBQUMyRixLQUFQLEdBQWVDLE9BQWYsQ0FBdUIsU0FBdkIsQ0FBbkI7QUFDQSxTQUFLcEUsUUFBTCxDQUFja0UsS0FBZCxHQUFzQixJQUFJMUYsRUFBRSxDQUFDMkYsS0FBUCxHQUFlQyxPQUFmLENBQXVCLFNBQXZCLENBQXRCO0FBQ0EsU0FBS25FLE9BQUwsQ0FBYWlFLEtBQWIsR0FBcUIsSUFBSTFGLEVBQUUsQ0FBQzJGLEtBQVAsR0FBZUMsT0FBZixDQUF1QixTQUF2QixDQUFyQjtBQUNBLFNBQUtsRSxPQUFMLENBQWFnRSxLQUFiLEdBQXFCLElBQUkxRixFQUFFLENBQUMyRixLQUFQLEdBQWVDLE9BQWYsQ0FBdUIsU0FBdkIsQ0FBckI7O0FBRUEsWUFBTyxLQUFLekUsU0FBWjtBQUNJLFdBQUssQ0FBTDtBQUNJLGFBQUtDLE9BQUwsQ0FBYXNFLEtBQWIsR0FBcUIsSUFBSTFGLEVBQUUsQ0FBQzJGLEtBQVAsR0FBZUMsT0FBZixDQUF1QixTQUF2QixDQUFyQjtBQUNBOztBQUNKLFdBQUssQ0FBTDtBQUNJLGFBQUt2RSxNQUFMLENBQVlxRSxLQUFaLEdBQW9CLElBQUkxRixFQUFFLENBQUMyRixLQUFQLEdBQWVDLE9BQWYsQ0FBdUIsU0FBdkIsQ0FBcEI7QUFDQTs7QUFDSixXQUFLLENBQUw7QUFDSSxhQUFLdEUsT0FBTCxDQUFhb0UsS0FBYixHQUFxQixJQUFJMUYsRUFBRSxDQUFDMkYsS0FBUCxHQUFlQyxPQUFmLENBQXVCLFNBQXZCLENBQXJCO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0ksYUFBS3JFLEtBQUwsQ0FBV21FLEtBQVgsR0FBbUIsSUFBSTFGLEVBQUUsQ0FBQzJGLEtBQVAsR0FBZUMsT0FBZixDQUF1QixTQUF2QixDQUFuQjtBQUNBOztBQUNKLFdBQUssQ0FBTDtBQUNJLGFBQUtwRSxRQUFMLENBQWNrRSxLQUFkLEdBQXNCLElBQUkxRixFQUFFLENBQUMyRixLQUFQLEdBQWVDLE9BQWYsQ0FBdUIsU0FBdkIsQ0FBdEI7QUFDQTs7QUFDSixXQUFLLENBQUw7QUFDSSxhQUFLbkUsT0FBTCxDQUFhaUUsS0FBYixHQUFxQixJQUFJMUYsRUFBRSxDQUFDMkYsS0FBUCxHQUFlQyxPQUFmLENBQXVCLFNBQXZCLENBQXJCO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0ksYUFBS2xFLE9BQUwsQ0FBYWdFLEtBQWIsR0FBcUIsSUFBSTFGLEVBQUUsQ0FBQzJGLEtBQVAsR0FBZUMsT0FBZixDQUF1QixTQUF2QixDQUFyQjtBQUNBO0FBckJSO0FBdUJILEdBMVZJO0FBMlZMakIsRUFBQUEsSUEzVkssa0JBMlZDO0FBQ0ZoRixJQUFBQSxNQUFNLENBQUNvQyxJQUFQLEdBQWMsT0FBZDtBQUNBL0IsSUFBQUEsRUFBRSxDQUFDa0YsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0gsR0E5Vkk7QUErVkw1QyxFQUFBQSxZQS9WSyx3QkErVlExQyxNQS9WUixFQStWZTtBQUNoQixTQUFLaUMsUUFBTDs7QUFDQSxTQUFJLElBQUltQixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUd0RCxNQUFNLENBQUNJLFFBQTFCLEVBQW9Da0QsQ0FBQyxFQUFyQyxFQUF3QztBQUNwQyxXQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR3ZELE1BQU0sQ0FBQ0ksUUFBMUIsRUFBb0NtRCxDQUFDLEVBQXJDLEVBQXdDO0FBQ3BDLFlBQUlDLENBQUMsR0FBR3hELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjb0QsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0JDLENBQTVCO0FBQ0EsWUFBSUMsQ0FBQyxHQUFHekQsTUFBTSxDQUFDRSxNQUFQLENBQWNvRCxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQkUsQ0FBNUI7O0FBQ0EsZ0JBQU92RCxNQUFNLENBQUNvRCxDQUFELENBQU4sQ0FBVUMsQ0FBVixFQUFhRyxJQUFwQjtBQUNJLGVBQUssQ0FBTDtBQUNJLGdCQUFJTSxRQUFRLEdBQUczRCxFQUFFLENBQUM0RCxXQUFILENBQWUsS0FBS3hELEtBQXBCLENBQWY7QUFDQXVELFlBQUFBLFFBQVEsQ0FBQ0UsV0FBVCxDQUFxQlYsQ0FBckIsRUFBdUJDLENBQXZCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVXFCLFFBQVYsQ0FBbUJILFFBQW5CO0FBQ0E7O0FBQ0osZUFBSyxDQUFMO0FBQ0ksZ0JBQUlrQyxPQUFPLEdBQUc3RixFQUFFLENBQUM0RCxXQUFILENBQWUsS0FBS3BELElBQXBCLENBQWQ7QUFDQXFGLFlBQUFBLE9BQU8sQ0FBQ2hDLFdBQVIsQ0FBb0JWLENBQXBCLEVBQXNCQyxDQUF0QjtBQUNBLGlCQUFLWCxJQUFMLENBQVVxQixRQUFWLENBQW1CK0IsT0FBbkI7QUFDQTs7QUFDSixlQUFLLENBQUw7QUFDSSxnQkFBSUMsTUFBTSxHQUFHOUYsRUFBRSxDQUFDNEQsV0FBSCxDQUFlLEtBQUtuRCxHQUFwQixDQUFiO0FBQ0FxRixZQUFBQSxNQUFNLENBQUNqQyxXQUFQLENBQW1CVixDQUFuQixFQUFxQkMsQ0FBckI7QUFDQSxpQkFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQmdDLE1BQW5CO0FBQ0E7O0FBQ0osZUFBSyxDQUFMO0FBQ0ksZ0JBQUlDLE9BQU8sR0FBRy9GLEVBQUUsQ0FBQzRELFdBQUgsQ0FBZSxLQUFLbEQsSUFBcEIsQ0FBZDtBQUNBcUYsWUFBQUEsT0FBTyxDQUFDbEMsV0FBUixDQUFvQlYsQ0FBcEIsRUFBc0JDLENBQXRCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVXFCLFFBQVYsQ0FBbUJpQyxPQUFuQjtBQUNBOztBQUNKLGVBQUssQ0FBTDtBQUNJLGdCQUFJQyxTQUFTLEdBQUdoRyxFQUFFLENBQUM0RCxXQUFILENBQWUsS0FBS2pELE1BQXBCLENBQWhCO0FBQ0FxRixZQUFBQSxTQUFTLENBQUNuQyxXQUFWLENBQXNCVixDQUF0QixFQUF3QkMsQ0FBeEI7QUFDQSxpQkFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQmtDLFNBQW5CO0FBQ0E7O0FBQ0osZUFBSyxDQUFMO0FBQ0ksZ0JBQUlDLFlBQVksR0FBR2pHLEVBQUUsQ0FBQzRELFdBQUgsQ0FBZSxLQUFLaEQsU0FBcEIsQ0FBbkI7QUFDQXFGLFlBQUFBLFlBQVksQ0FBQ3BDLFdBQWIsQ0FBeUJWLENBQXpCLEVBQTJCQyxDQUEzQjtBQUNBLGlCQUFLWCxJQUFMLENBQVVxQixRQUFWLENBQW1CbUMsWUFBbkI7QUFDQTs7QUFDSixlQUFLLENBQUw7QUFDSSxnQkFBSUMsV0FBVyxHQUFHbEcsRUFBRSxDQUFDNEQsV0FBSCxDQUFlLEtBQUsvQyxRQUFwQixDQUFsQjtBQUNBcUYsWUFBQUEsV0FBVyxDQUFDckMsV0FBWixDQUF3QlYsQ0FBeEIsRUFBMEJDLENBQTFCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVXFCLFFBQVYsQ0FBbUJvQyxXQUFuQjtBQUNBOztBQUNKLGVBQUssQ0FBTDtBQUNJLGdCQUFJQyxXQUFXLEdBQUduRyxFQUFFLENBQUM0RCxXQUFILENBQWUsS0FBSzlDLFFBQXBCLENBQWxCO0FBQ0FxRixZQUFBQSxXQUFXLENBQUN0QyxXQUFaLENBQXdCVixDQUF4QixFQUEwQkMsQ0FBMUI7QUFDQSxpQkFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQnFDLFdBQW5CO0FBQ0E7QUF4Q1I7QUEwQ0g7QUFDSjtBQUVKLEdBbFpJO0FBbVpMQyxFQUFBQSxTQW5aSyx1QkFtWk0sQ0FHVjtBQXRaSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0IHtMb2FkaW5nLCBUb2FzdH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbndpbmRvdy5lbGVTaXplID0gMzU7XHJcbndpbmRvdy5sYXlvdXQgPSBuZXcgQXJyYXkoKTtcclxud2luZG93LmJsb2NrTnVtID0gMTI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmxvY2s6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYmxvY2snXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YWxsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3dhbGwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib3g6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYm94J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidiYWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZVVwOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVVcCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVSaWdodDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlUmlnaHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlRG93bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlRG93bidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVMZWZ0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVMZWZ0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2FtZUJuOmNjLlNwcml0ZSxcclxuICAgICAgICBib3hOdW06e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0RWxlOiAxLFxyXG4gICAgICAgIHdhbGxFbGU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIGJveEVsZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgYmFsbEVsZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgdXBFbGU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIHJpZ2h0RWxlOmNjLlByZWZhYixcclxuICAgICAgICBkb3duRWxlOmNjLlByZWZhYixcclxuICAgICAgICBsZWZ0RWxlOmNjLlByZWZhYixcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdFdpbkVsZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuICAgICAgICAvLyB0aGlzLnJlbmRlckJuKCk7XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2dhbWUnKXtcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6J2J1aWxkTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuYnVpbGRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoJ2J0bnMnLHRoaXMubm9kZSkuaGVpZ2h0ID0gIChjYy53aW5TaXplLmhlaWdodCAtIGNjLndpblNpemUud2lkdGgpLzI7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICBpbml0V2luRWxlKCl7XHJcbiAgICAgICAgbGV0IHJlYWxTaXogPSBjYy53aW5TaXplLndpZHRoL3dpbmRvdy5ibG9ja051bTtcclxuICAgICAgICB3aW5kb3cuZWxlU2l6ZSA9IHJlYWxTaXo7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0gPSB7eDowLHk6MCxzaWduOjAsY292ZXI6bnVsbH1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dID0ge3g6MCx5OjAsc2lnbjowLGNvdmVyOm51bGx9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdFBvc2l0aW9uKGxheW91dCl7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt9O1xyXG4gICAgICAgIHRoaXMuYm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGxheW91dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCBsYXlvdXRbMF0ubGVuZ3RoOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgLy9sYXlvdXRbaV1bbl0uc2lnbiAtLSDkurrniankvY3nva5cclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFtpXVtuXS5zaWduID09IDQgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNSB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA2IHx8IGxheW91dFtpXVtuXS5zaWduID09IDcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v566x5a2Q5pWw6YePXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveE51bSArKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyQmcoKXtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLShjYy53aW5TaXplLndpZHRoLzIpO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSAod2luZG93LmVsZVNpemUqd2luZG93LmJsb2NrTnVtKS8yO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCB3aW5kb3cuYmxvY2tOdW07IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IG4qd2luZG93LmVsZVNpemUgKyBzdGFydFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IC1pKndpbmRvdy5lbGVTaXplICsgc3RhcnRZO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbjowLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgLy8g5Li66K6+572u5L2N572uXHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHJlbmRlckJuKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZUJuID09IG51bGwpIHRoaXMuZ2FtZUJuID0gY2MuZmluZCgnQ2FudmFzL2J1aWxkQmcvZ2FtZUJuJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh3aW5kb3cuYmdVcmxCYXNlKyAnXzQwMHgyNDAuanBnJywgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlLCBjYy5yZWN0KDAsMCw0MDAsMjQwKSk7XHJcbiAgICAgICAgICAgIHRoYXQuZ2FtZUJuLnNwcml0ZUZyYW1lID0gc3ByaXRlOyAvL+iuvue9rueyvueBtee7hOS7tuWbvueJh+i1hOa6kFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYodGhpcy53YWxsRWxlID09IG51bGwpIHRoaXMud2FsbEVsZSA9ICBjYy5maW5kKCdidG5zL3dhbGxXcmFwJyx0aGlzLm5vZGUpO1xyXG4gICAgICAgIGlmKHRoaXMuYm94RWxlID09IG51bGwpIHRoaXMuYm94RWxlID0gIGNjLmZpbmQoJ2J0bnMvYm94V3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMuYmFsbEVsZSA9PSBudWxsKSB0aGlzLmJhbGxFbGUgPSAgY2MuZmluZCgnYnRucy9iYWxsV3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMudXBFbGUgPT0gbnVsbCkgdGhpcy51cEVsZSA9ICBjYy5maW5kKCdidG5zL3VwV3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMucmlnaHRFbGUgPT0gbnVsbCkgdGhpcy5yaWdodEVsZSA9ICBjYy5maW5kKCdidG5zL3JpZ2h0V3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMuZG93bkVsZSA9PSBudWxsKSB0aGlzLmRvd25FbGUgPSAgY2MuZmluZCgnYnRucy9kb3duV3JhcCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIGlmKHRoaXMubGVmdEVsZSA9PSBudWxsKSB0aGlzLmxlZnRFbGUgPSAgY2MuZmluZCgnYnRucy9sZWZ0V3JhcCcsdGhpcy5ub2RlKVxyXG5cclxuICAgICAgICBjYy5maW5kKCdiYWNrJyx0aGlzLm5vZGUpLm9uKCdjbGljaycsdGhpcy5iYWNrLCB0aGlzKVxyXG4gICAgICAgIGNjLmZpbmQoJ2J0bnMvY2xlYXInLHRoaXMubm9kZSkub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGF0LmluaXRXaW5FbGUoKTtcclxuICAgICAgICAgICAgdGhhdC5yZW5kZXJCZygpO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ2J0bnMvcGxheScsdGhpcy5ub2RlKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJveE51bSA9MCxiYWxsTnVtID0gMCxyb2xlTnVtID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9PSAzIHx8IHdpbmRvdy5idWlsZExldmVsW2ldW25dLmNvdmVyICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbE51bSArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduID49IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZU51bSArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpID09IHdpbmRvdy5ibG9ja051bS0xICYmIG4gPT0gd2luZG93LmJsb2NrTnVtLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocm9sZU51bTw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+acqua3u+WKoOS6uueJqScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihib3hOdW0gIT0gYmFsbE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+euseWtkOWSjOeQg+S9k+aVsOmHj+S4jeS4gOiHtCcsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYm94TnVtIDwgMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+euseWtkOaVsOmHj+S4jeiDveWwkeS6juS4ieS4qicsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnYnVpbGRMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogd2luZG93LmJ1aWxkTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdidWlsZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hlbmQnLGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAvL+S4lueVjOWdkOagh1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgICAgIC8v5pys5Zyw5Z2Q5qCHXHJcbiAgICAgICAgICAgIGxldCB0b3VjaFBvaW50ID0gY2MuZmluZCgnQ2FudmFzJykuY29udmVydFRvTm9kZVNwYWNlQVIobG9jYXRpb24pO1xyXG4gICAgICAgICAgICAvL+eCueWHu+aUvue9ruWMuuWfn1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIoOmZpOWJjemdoua3u+WKoOeahOS6uueJqVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sYXlvdXRbMF1bMF0ueCA8PSB0b3VjaFBvaW50LnggJiYgdG91Y2hQb2ludC54IDw9IHdpbmRvdy5sYXlvdXRbMF1bd2luZG93LmJsb2NrTnVtLTFdLnggKyB3aW5kb3cuZWxlU2l6ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0WzBdWzBdLnkgPj0gdG91Y2hQb2ludC55ICYmIHRvdWNoUG9pbnQueSA+PSB3aW5kb3cubGF5b3V0W3dpbmRvdy5ibG9ja051bS0xXVt3aW5kb3cuYmxvY2tOdW0tMV0ueSAtIHdpbmRvdy5lbGVTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LnNlbGVjdEVsZSA+PSA0ICYmIHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPj0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mlL7nva7lhYPntKBcclxuICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGF5b3V0W2ldW25dLnggPD0gdG91Y2hQb2ludC54ICYmIHRvdWNoUG9pbnQueCA8PSB3aW5kb3cubGF5b3V0W2ldW25dLnggKyB3aW5kb3cuZWxlU2l6ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldW25dLnkgPj0gdG91Y2hQb2ludC55ICYmIHRvdWNoUG9pbnQueSA+PSB3aW5kb3cubGF5b3V0W2ldW25dLnkgLSB3aW5kb3cuZWxlU2l6ZVxyXG4gICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKCF3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduIHx8IHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduID0gdGhhdC5zZWxlY3RFbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPT0gMyAmJiB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5jb3ZlciA9PSBudWxsICYmICh0aGF0LnNlbGVjdEVsZSAhPSAxICYmIHRoYXQuc2VsZWN0RWxlICE9IDMpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPSB0aGF0LnNlbGVjdEVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dLmNvdmVyID0gdGhhdC5zZWxlY3RFbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuYnVpbGRMZXZlbClcclxuXHJcbiAgICAgICAgICAgIC8v54K55Ye75pS+572u5YWD57SgXHJcbiAgICAgICAgICAgIGlmKHRoYXQud2FsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQud2FsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQud2FsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKFxyXG4gICAgICAgICAgICAgICAgdGhhdC5ib3hFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LmJveEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQuYm94RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICB0aGF0LmJveEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQuYm94RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC5ib3hFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuaGVpZ2h0XHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdEVsZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclNlbGVjdEVsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoXHJcbiAgICAgICAgICAgICAgICB0aGF0LmJhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LmJhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCt0aGF0LmJhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHRoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55K3RoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5oZWlnaHRcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0RWxlID0gMztcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyU2VsZWN0RWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihcclxuICAgICAgICAgICAgICAgIHRoYXQudXBFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LnVwRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLngrdGhhdC51cEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC51cEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQudXBFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueSt0aGF0LnVwRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKFxyXG4gICAgICAgICAgICAgICAgdGhhdC5yaWdodEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQucmlnaHRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCt0aGF0LnJpZ2h0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICB0aGF0LnJpZ2h0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC5yaWdodEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55K3RoYXQucmlnaHRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuaGVpZ2h0XHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdEVsZSA9IDU7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclNlbGVjdEVsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoXHJcbiAgICAgICAgICAgICAgICB0aGF0LmRvd25FbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCA8PSBsb2NhdGlvbi54XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi54IDw9ICB0aGF0LmRvd25FbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCt0aGF0LmRvd25FbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHRoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55IDw9IGxvY2F0aW9uLnlcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnkgPD0gIHRoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55K3RoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5oZWlnaHRcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0RWxlID0gNjtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyU2VsZWN0RWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihcclxuICAgICAgICAgICAgICAgIHRoYXQubGVmdEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQubGVmdEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQubGVmdEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgIH0sXHJcbiAgICByZW5kZXJTZWxlY3RFbGUoKXtcclxuICAgICAgICB0aGlzLndhbGxFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzk1RDUyRlwiKTtcclxuICAgICAgICB0aGlzLmJveEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjOTVENTJGXCIpO1xyXG4gICAgICAgIHRoaXMuYmFsbEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjOTVENTJGXCIpO1xyXG4gICAgICAgIHRoaXMudXBFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzk1RDUyRlwiKTtcclxuICAgICAgICB0aGlzLnJpZ2h0RWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcbiAgICAgICAgdGhpcy5kb3duRWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcbiAgICAgICAgdGhpcy5sZWZ0RWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnNlbGVjdEVsZSl7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMud2FsbEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYm94RWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWxsRWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd25FbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrKCl7XHJcbiAgICAgICAgd2luZG93LmZyb20gPSAnYnVpbGQnXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXJMYXlvdXQobGF5b3V0KXtcclxuICAgICAgICB0aGlzLnJlbmRlckJnKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gd2luZG93LmxheW91dFtpXVtuXS54O1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSB3aW5kb3cubGF5b3V0W2ldW25dLnk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gobGF5b3V0W2ldW25dLnNpZ24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1dhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdXYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdXYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCb3guc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0JveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0JhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdCYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZVVwID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlVXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlVXAuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1JvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVSaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVJpZ2h0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlRG93biA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlRG93bi5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlTGVmdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlTGVmdC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcblxyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
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
//?????? case 0:
//??? case 1:
//?????? case 2:
//??? case 3:
//??? case 4:
//??? case 5:
//??? case 6:
//??? case 7:
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
    this.renderBg(); //?????????????????????

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
        //layout[i][n].sign -- ????????????
        if (layout[i][n].sign == 4 || layout[i][n].sign == 5 || layout[i][n].sign == 6 || layout[i][n].sign == 7) {
          this.position.x = n;
          this.position.y = i;
        } //????????????


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
        var newBlock = cc.instantiate(this.block); // ???????????????

        newBlock.setPosition(x, y); // ??????????????????????????? Canvas ????????????

        this.buildArea.addChild(newBlock);
      }
    }
  },
  renderBn: function renderBn() {
    if (this.gameBn == null) this.gameBn = cc.find('Canvas/mainBg/gameBn').getComponent(cc.Sprite);
    cc.assetManager.loadRemote(window.bgUrlBase + '_400x240.jpg', function (err, texture) {
      var sprite = new cc.SpriteFrame(texture, cc.rect(0, 0, 400, 240));
      that.gameBn.spriteFrame = sprite; //??????????????????????????????
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
    var y = this.position.y; //???????????????

    if (layout[y - 1][x].sign == 0) {
      layout[y - 1][x].sign = 4;
      layout[y][x].sign = 0;
      this.resetPosition('up');
    } //??????????????????
    else if (layout[y - 1][x].sign == 1) {
        layout[y][x].sign = 4;
      } //??????????????????
      else if (layout[y - 1][x].sign == 2) {
          //?????????????????????
          if (layout[y - 2][x].sign == 0) {
            layout[y][x].sign = 0;
            layout[y - 2][x].sign = 2;
            layout[y - 1][x].sign = 4;
            if (layout[y - 1][x].cover) layout[y - 1][x].cover = 4;
            this.resetPosition('up');
          } //??????????????????
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
        } //???????????????
        else if (layout[y - 1][x].sign == 3) {
            layout[y][x].sign = 0;
            layout[y - 1][x].sign = 4;
            layout[y - 1][x].cover = 4;
            this.resetPosition('up');
          } //?????????????????????


    if (layout[y][x].sign == 0 && layout[y][x].cover) {
      layout[y][x].sign = 3;
      layout[y][x].cover = null;
    }

    that.renderLayout(layout);
  },
  moveDown: function moveDown(layout) {
    var that = this;
    var x = this.position.x;
    var y = this.position.y; //???????????????

    if (layout[y + 1][x].sign == 0) {
      layout[y + 1][x].sign = 6;
      layout[y][x].sign = 0;
      this.resetPosition('down');
    } //??????????????????
    else if (layout[y + 1][x].sign == 1) {
        layout[y][x].sign = 6;
      } //??????????????????
      else if (layout[y + 1][x].sign == 2) {
          //?????????????????????
          if (layout[y + 2][x].sign == 0) {
            layout[y][x].sign = 0;
            layout[y + 2][x].sign = 2;
            layout[y + 1][x].sign = 6;
            if (layout[y + 1][x].cover) layout[y + 1][x].cover = 6;
            this.resetPosition('down');
          } //?????????????????????
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
        } //???????????????
        else if (layout[y + 1][x].sign == 3) {
            layout[y][x].sign = 0;
            layout[y + 1][x].sign = 6;
            layout[y + 1][x].cover = 6;
            this.resetPosition('down');
          } //?????????????????????


    if (layout[y][x].sign == 0 && layout[y][x].cover) {
      layout[y][x].sign = 3;
      layout[y][x].cover = null;
    }

    that.renderLayout(layout);
  },
  moveLeft: function moveLeft(layout) {
    var that = this;
    var x = this.position.x;
    var y = this.position.y; //???????????????

    if (layout[y][x - 1].sign == 0) {
      layout[y][x - 1].sign = 7;
      layout[y][x].sign = 0;
      this.resetPosition('left');
    } //??????????????????
    else if (layout[y][x - 1].sign == 1) {
        layout[y][x].sign = 7;
      } //??????????????????
      else if (layout[y][x - 1].sign == 2) {
          //?????????????????????
          if (layout[y][x - 2].sign == 0) {
            layout[y][x].sign = 0;
            layout[y][x - 2].sign = 2;
            layout[y][x - 1].sign = 7;
            if (layout[y][x - 1].cover) layout[y][x - 1].cover = 7;
            this.resetPosition('left');
          } //?????????????????????
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
        } //???????????????
        else if (layout[y][x - 1].sign == 3) {
            layout[y][x].sign = 0;
            layout[y][x - 1].sign = 7;
            layout[y][x - 1].cover = 7;
            this.resetPosition('left');
          } //?????????????????????


    if (layout[y][x].sign == 0 && layout[y][x].cover && layout[y][x].cover != 2) {
      layout[y][x].sign = 3;
      layout[y][x].cover = null;
    }

    that.renderLayout(layout);
  },
  moveRight: function moveRight(layout) {
    var that = this;
    var x = this.position.x;
    var y = this.position.y; //???????????????

    if (layout[y][x + 1].sign == 0) {
      layout[y][x + 1].sign = 5;
      layout[y][x].sign = 0;
      this.resetPosition('right');
    } //??????????????????
    else if (layout[y][x + 1].sign == 1) {
        layout[y][x].sign = 5;
      } //??????????????????
      else if (layout[y][x + 1].sign == 2) {
          //?????????????????????
          if (layout[y][x + 2].sign == 0) {
            layout[y][x].sign = 0;
            layout[y][x + 2].sign = 2;
            layout[y][x + 1].sign = 5;
            if (layout[y][x + 1].cover) layout[y][x + 1].cover = 5;
            this.resetPosition('right');
          } //?????????????????????
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
        } //???????????????
        else if (layout[y][x + 1].sign == 3) {
            layout[y][x].sign = 0;
            layout[y][x + 1].sign = 5;
            layout[y][x + 1].cover = 5;
            this.resetPosition('right');
          } //?????????????????????


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
    } //????????????????????????


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

    if (this.stepCounter) this.stepCounter.string = "?????????" + this.stepCounterValue;
    var coverBoxNum = 0;

    for (var i = 0; i < window.currentLevel.length; i++) {
      for (var n = 0; n < window.currentLevel[0].length; n++) {
        if (window.currentLevel[i][n].cover && window.currentLevel[i][n].sign == 2) {
          // this.gameOver = false;
          coverBoxNum++;

          if (this.boxNum == coverBoxNum) {
            // console.log('????????????')
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
          // console.log("??????")
          that.moveRight(window.currentLevel);
        } else if (figureLocation.x - endLocation.x > 50) {
          // console.log("??????")
          that.moveLeft(window.currentLevel);
        }
      } else {
        if (figureLocation.y - endLocation.y < -50) {
          // console.log("??????")
          that.moveUp(window.currentLevel);
        } else if (figureLocation.y - endLocation.y > 50) {
          // console.log("??????")
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
      (0, _common.Toast)('???????????????', 1500);
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
      cc.find('contentBg/useTime', newMyPrefab).getComponent(cc.Label).string = "?????????" + that.stepCounterValue + '???';
      cc.find('contentBg/useStep', newMyPrefab).getComponent(cc.Label).string = "?????????" + that.timeCounterValue + '???';

      if (window.from == 'build') {
        cc.find('contentBg/next/Background/Label', newMyPrefab).getComponent(cc.Label).string = '????????????';
        cc.find('contentBg/next', newMyPrefab).on('click', function () {
          _common.Loading.show();

          wx.cloud.callFunction({
            name: 'getReviewLevelNum'
          }).then(function (res) {
            wx.cloud.callFunction({
              name: 'addReviewLevel',
              data: {
                content: window.uploadLevel,
                useStepNum: that.stepCounterValue,
                levelIndex: res.result.total + 1,
                appId: window.user.appId,
                nickName: window.loginInfo.nickName ? window.loginInfo.nickName : '??????' + window.user.appId.substring(window.user.appId.length - 5),
                portrait: window.loginInfo.avatarUrl
              }
            }).then(function (result) {
              var levelUploadNum = parseInt(res.result.total) + 1;
              window.from = 'game';

              _common.Loading.hide();

              if (window.createScenseUploadAd) {
                (0, _common.Toast)('????????????????????????????????????????????????????????????', 2000);
                setTimeout(function () {
                  window.createScenseUploadAd.show()["catch"](function () {
                    cc.director.loadScene('main');
                  });
                  window.createScenseUploadAd.onClose(function (res) {
                    cc.director.loadScene('main');
                  });
                }, 1500);
              } else {
                (0, _common.Toast)('????????????????????????????????????????????????????????????', 1500);
                setTimeout(function () {
                  cc.director.loadScene('main');
                }, 1500);
              }
            })["catch"](function (err) {
              _common.Loading.hide();

              (0, _common.Toast)('????????????', 1500);
              console.error(err);
            });
          })["catch"](function (err) {
            console.error(err);
          });
        }, this);
      } else if (window.from == "uploadSolution") {
        cc.find('contentBg/next/Background/Label', newMyPrefab).getComponent(cc.Label).string = '????????????';
        cc.find('contentBg/next', newMyPrefab).on('click', function () {
          _common.Loading.show();

          if (window.lastSolutionStep != null) {
            //????????????
            if (window.lastSolutionStep > that.stepCounterValue) {
              wx.cloud.callFunction({
                name: 'updateClassicsLevelSolution',
                data: {
                  levelIndex: window.levelIndex,
                  appId: window.user.appId,
                  useStep: that.stepCounterValue,
                  useTime: that.timeCounterValue,
                  portrait: window.loginInfo.avatarUrl,
                  nickName: window.loginInfo.nickName,
                  content: that.recordSolutionStep.join()
                }
              }).then(function (res) {
                (0, _common.Toast)('??????????????????', 1500);

                _common.Loading.hide();

                setTimeout(function () {
                  cc.director.loadScene("game");
                }, 1000);
              })["catch"](function (err) {
                (0, _common.Toast)('????????????,???????????????', 3000);

                _common.Loading.hide();

                console.log(err);
              });
            } else {
              _common.Loading.hide();

              (0, _common.Toast)('???????????????????????????????????????', 3000);
            }
          } else {
            //????????????
            wx.cloud.callFunction({
              name: 'addClassicsLevelSolution',
              data: {
                levelIndex: window.levelIndex,
                appId: window.user.appId,
                useStep: that.stepCounterValue,
                useTime: that.timeCounterValue,
                portrait: window.loginInfo.avatarUrl,
                nickName: window.loginInfo.nickName,
                content: that.recordSolutionStep.join()
              }
            }).then(function (res) {
              (0, _common.Toast)('??????????????????', 1500);

              _common.Loading.hide();

              setTimeout(function () {
                cc.director.loadScene("game");
              }, 1000);
            })["catch"](function (err) {
              (0, _common.Toast)('????????????,???????????????', 3000);

              _common.Loading.hide();

              console.log(err);
            });
          }
        }, this);
      } else if (window.from != 'build') {
        if (window.levelIndex >= window.classicsLevelNum) {
          cc.find('contentBg/next/Background/Label', newMyPrefab).getComponent(cc.Label).string = '????????????';
          cc.find('contentBg/next', newMyPrefab).on('click', function () {
            clearInterval(that.timeCounterTimer);
            that.timeCounterTimer = null;
            cc.director.loadScene("main");
            window.from = 'game';
          }, this);
        } else {
          //?????????
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
          (0, _common.Toast)('???????????????????????????', 1500);
          return;
        }

        that.showLevelRank();
      }, this);
      cc.find('contentBg/share', newMyPrefab).on('click', function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
          var titString = '????????????';

          if (window.from != 'build') {
            titString = titString + '???' + window.levelIndex + '???' + '-???????????????' + that.stepCounterValue + '-???????????????';
          } else {
            titString = titString + '??????????????????????????????';
          }

          wx.shareAppMessage({
            title: titString,
            // imageUrl: data.url,
            query: '??????'
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
    } //????????????


    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      if (that.lastScore == null) {
        _common.Loading.show();

        (0, _common.Toast)('???????????????...', 1500);
        wx.cloud.callFunction({
          name: 'addClassicsLevelScore',
          data: {
            levelIndex: window.levelIndex,
            appId: window.user.appId,
            useStep: that.stepCounterValue,
            useTime: that.timeCounterValue,
            portrait: window.loginInfo.avatarUrl,
            nickName: window.loginInfo.nickName ? window.loginInfo.nickName : '??????' + window.user.appId.substring(window.user.appId.length - 5)
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

          (0, _common.Toast)('???????????????...', 1500);
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
    var that = this; //??????

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
        levelCounter.string = ('??? ' + window.levelIndex + ' ??? - ' + window.levelBy).substring(0, 16);
      } else {
        levelCounter.string = '??? ' + window.levelIndex + ' ???';
      }

      this.levelCounter = levelNode.getComponent(cc.Label);
      this.node.addChild(levelNode);
    } else {
      if (window.levelBy) {
        this.levelCounter.string = ('??? ' + window.levelIndex + ' ??? - ' + window.levelBy).substring(0, 16);
      } else {
        this.levelCounter.string = '??? ' + window.levelIndex + ' ???';
      }
    }

    if (window.from == 'build') {
      this.levelCounter.string = '????????????';
    }

    if (window.from == 'review') {
      this.levelCounter.string = '????????????';

      if (window.gameCircle) {
        window.gameCircle.destroy();
        window.gameCircle = null;
      }

      if (window.auditLevelAd) window.auditLevelAd.destroy();

      if (cc.sys.platform === cc.sys.WECHAT_GAME && !window.gameCircle) {
        var sysInfo = wx.getSystemInfoSync();
        var auditLevelAdWidth = sysInfo.windowWidth * 0.6;
        var auditLevelAdLeft = sysInfo.windowWidth * 0.4 / 2;
        if (auditLevelAdWidth <= 300) auditLevelAdLeft = (sysInfo.windowWidth - 300) / 2; //????????????bnAd

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
      this.levelCounter.string = '??? ' + window.levelIndex + ' ???' + ' - ????????????';
    }

    if (window.from == 'checkSolution') {
      this.levelCounter.string = '??? ' + window.levelIndex + ' ???' + ' - ??????';
      return;
    } //??????


    if (this.stepCounter == null) {
      var node = new cc.Node('stepCounter');
      node.setAnchorPoint(0, 1);
      var stepCounter = node.addComponent(cc.Label);
      stepCounter.node.setPosition(-(cc.winSize.width / 2) + cc.winSize.width * 0.05, cc.winSize.width / 2 + 80);
      stepCounter.string = '????????? 0';
      this.stepCounter = node.getComponent(cc.Label);
      this.node.addChild(node);
    } else {
      this.stepCounterValue = 0;
      if (this.stepCounter) this.stepCounter.string = "?????????" + this.stepCounterValue;
    } //??????


    if (this.timeCounter == null) {
      var timeNode = new cc.Node('timeCounter');
      timeNode.setAnchorPoint(0, 1);
      var timeCounter = timeNode.addComponent(cc.Label);
      timeCounter.node.setPosition(0, cc.winSize.width / 2 + 80);
      timeCounter.string = '????????? 0';
      this.timeCounter = timeNode.getComponent(cc.Label);
      this.node.addChild(timeNode);
      this.timeCounterTimer = setInterval(function () {
        this.timeCounterValue++;
        if (this.timeCounter) this.timeCounter.string = "?????????" + this.timeCounterValue;
      }.bind(this), 1000);
    } else {
      this.timeCounterValue = 0;
      this.timeCounter.string = "?????????" + this.timeCounterValue;

      if (this.timeCounterTimer == null) {
        this.timeCounterTimer = setInterval(function () {
          this.timeCounterValue++;
          if (this.timeCounter) this.timeCounter.string = "?????????" + this.timeCounterValue;
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
    cc.find('back', this.node).on('click', this.back, this); //??????????????????

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
    if (window.from == 'review') leftBtn.string = '??????';else if (window.from == 'checkSolution') leftBtn.string = 'Again';else if (!window.setting.relast) leftBtn.string = '??????';
    cc.find('gameBtns/backStep', this.node).on('click', function () {
      //????????????
      if (window.from == 'checkSolution') {
        that.solutionStepIndex = -1;
        that.replayLayout();
        return;
      } //??????????????????


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

              wx.cloud.callFunction({
                name: 'getClassicsLevelNum'
              }).then(function (res) {
                wx.cloud.callFunction({
                  name: 'addClassicsLevel',
                  data: {
                    content: window.uploadLevel,
                    levelIndex: res.result.total + 1,
                    appId: window.uploadInfo.appId,
                    nickName: window.uploadInfo.nickName ? window.uploadInfo.nickName : '??????' + window.uploadInfo.appId.substring(window.uploadInfo.appId.length - 5),
                    portrait: window.uploadInfo.avatarUrl
                  }
                }).then(function (result) {
                  wx.cloud.callFunction({
                    name: 'removeReviewLevel',
                    data: {
                      _id: window.reviewId
                    }
                  }).then(function (result) {
                    var levelUploadNum = parseInt(res.result.total) + 1;
                    (0, _common.Toast)('??????' + levelUploadNum + '????????????????????????????????????', 1500);
                    setTimeout(function () {
                      clearInterval(that.timeCounterTimer);
                      that.timeCounterTimer = null;

                      _common.Loading.hide();

                      window.from = 'game';
                      cc.director.loadScene('main');
                    }, 1500);
                  });
                })["catch"](function (err) {
                  _common.Loading.hide();

                  (0, _common.Toast)('????????????', 1500);
                  console.error(err);
                });
              })["catch"](function (err) {
                console.error(err);
              });
            } else {
              (0, _common.Toast)('???????????????', 1500);
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
                    that.stepCounter.string = "?????????" + that.stepCounterValue;
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
    if (window.from == 'review') cc.find('gameBtns/menu/Background/Label', this.node).getComponent(cc.Label).string = '??????';else if (window.from == "checkSolution") cc.find('gameBtns/menu/Background/Label', this.node).getComponent(cc.Label).string = 'Next';
    cc.find('gameBtns/menu', this.node).on("click", function () {
      clearInterval(that.timeCounterTimer);
      that.timeCounterTimer = null; //????????????

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
      } //??????????????????


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

              wx.cloud.callFunction({
                name: 'removeReviewLevel',
                data: {
                  _id: window.reviewId
                }
              }).then(function (result) {
                (0, _common.Toast)('???????????????????????????????????????', 1500);
                setTimeout(function () {
                  _common.Loading.hide();

                  window.from = 'game';
                  cc.director.loadScene('main');
                }, 1500);
              });
            } else {
              (0, _common.Toast)('???????????????', 1500);
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
              that.timeCounter.string = "?????????" + that.timeCounterValue;
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
            (0, _common.Toast)('???????????????????????????', 1500);
            return;
          }

          that.showLevelRank();
        }, this);
        cc.find('contain/share', newMyPrefab).on('click', function () {
          if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            var titString = '????????????';

            if (window.from != 'build') {
              titString = titString + '???' + window.levelIndex + '???-???????????????!';
            } else {
              titString = titString + '??????????????????????????????';
            } // titString = titString + '-???????????????'


            wx.shareAppMessage({
              title: titString,
              // imageUrl: data.url,
              query: '??????'
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
        that.renderLastScore('???', '???');
        wx.getStorage({
          key: 'buildLevel',
          success: function success(res) {
            window.currentLevel = res.data;
            that.renderLayout(window.currentLevel);
            that.initPosition(window.currentLevel); // ???????????????

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
        that.renderLastScore('???', '???');
        wx.getStorage({
          key: 'reviewLevel',
          success: function success(res) {
            window.uploadLevel = res.data;
            window.currentLevel = res.data;
            that.renderLayout(window.currentLevel);
            that.initPosition(window.currentLevel); // ???????????????

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
      } //????????????


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
            window.levelBy = res.result.data[0].nickName; // ???????????????

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
            that.renderLastScore('???', '???');
            if (window.levelIndex == 1) (0, _common.Toast)('Tip: ???????????????????????????', 5000);
          }
        })["catch"](function (err) {
          console.error(err);
        });
      } //????????????
      else {} //??????


      if (window.from != "uploadSolution" && window.from != "checkSolution") {
        var date = new Date();
        var today = date.toLocaleDateString();
        var solutionBtnNode = new cc.Node('skipNode');
        solutionBtnNode.setAnchorPoint(0, 1);
        var solutionBtnLabel = solutionBtnNode.addComponent(cc.Label);
        solutionBtnLabel.node.setPosition(cc.winSize.width / 2 - cc.winSize.width * 0.2, cc.winSize.width / 2 + 80);
        solutionBtnLabel.string = '????????????';
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
                  if (that.timeCounter) that.timeCounter.string = "?????????" + that.timeCounterValue;
                }.bind(that), 1000);
              }

              newMyPrefab.removeFromParent();
              newMyPrefab.destroy();
            }, this);
            cc.find('solutionContain/skipLevel', newMyPrefab).on('click', function () {
              if (that.lastScore) {
                (0, _common.Toast)("????????????????????????????????????", 1500);
                return;
              }

              if (that.noneSkipChange) {
                (0, _common.Toast)("??????????????????5?????????", 1500);
                return;
              }

              (0, _common.Toast)("???????????????...", 1500);

              if (!window.skipLevelAd) {
                (0, _common.Toast)("??????????????????", 1500);
                return;
              }

              window.skipLevelAd.show()["catch"](function (err) {
                window.skipLevelAd.load().then(function () {
                  return window.skipLevelAd.show();
                })["catch"](function () {
                  (0, _common.Toast)("??????????????????", 1500);
                });
              });
              window.skipLevelAd.offClose();
              window.skipLevelAd.onClose(function (res) {
                // ???????????????????????????????????????
                // ?????? 2.1.0 ?????????????????????res ????????? undefined
                if (res && res.isEnded || res === undefined) {
                  // ?????????????????????????????????????????????
                  if (that.timeCounterTimer == null) {
                    that.timeCounterTimer = setInterval(function () {
                      that.timeCounterValue++;
                      if (that.timeCounter) that.timeCounter.string = "?????????" + that.timeCounterValue;
                    }.bind(that), 1000);
                  }

                  newMyPrefab.removeFromParent();
                  newMyPrefab.destroy();
                  that.showResult('skip'); //??????????????????

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
                } else {// ??????????????????????????????????????????
                }
              });
            }, this);
            cc.find('solutionContain/checkSolution', newMyPrefab).on('click', function () {
              wx.cloud.callFunction({
                name: 'queryClassicsLevelSolution',
                data: {
                  levelIndex: window.levelIndex
                }
              }).then(function (res) {
                window.levelSolution = null;

                if (res && res.result.data.length > 0) {
                  (0, _common.Toast)("???????????????...", 1500);

                  if (!window.checkSolutionLevelAd) {
                    (0, _common.Toast)("??????????????????", 1500);
                    return;
                  }

                  window.checkSolutionLevelAd.show()["catch"](function (err) {
                    window.checkSolutionLevelAd.load().then(function () {
                      return window.checkSolutionLevelAd.show();
                    })["catch"](function () {
                      (0, _common.Toast)("??????????????????", 1500);
                    });
                  });
                  window.checkSolutionLevelAd.offClose();
                  window.checkSolutionLevelAd.onClose(function (result) {
                    // ???????????????????????????????????????
                    // ?????? 2.1.0 ?????????????????????result ????????? undefined
                    if (result && result.isEnded || result === undefined) {
                      // ?????????????????????????????????????????????
                      window.from = "checkSolution";
                      window.levelSolution = res.result.data[0];
                      window.levelSolution.content = res.result.data[0].content.split(',');
                      cc.director.loadScene("game");
                    } else {// ??????????????????????????????????????????
                    }
                  });
                } else {
                  (0, _common.Toast)('????????????????????????', 3000);
                }
              })["catch"](function (err) {
                console.error(err);
              });
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
      wx.cloud.callFunction({
        name: 'queryClassicsLevelSolution',
        data: {
          levelIndex: window.levelIndex
        }
      }).then(function (res) {
        var lastBestScore = '?????????????????????';
        window.lastSolutionStep = null;

        if (res && res.result.data.length > 0) {
          window.lastSolutionStep = res.result.data[0].useStep;
          lastBestScore = '?????????????????????' + res.result.data[0].useStep + ' - ????????????' + res.result.data[0].nickName.substring(0, 16);
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
      })["catch"](function (err) {
        console.error(err);
      });
      return;
    }

    if (window.from == 'checkSolution') {
      if (that.lastStepNode == null) {
        var lastStepNode = new cc.Node('lastStepNode');
        lastStepNode.setAnchorPoint(0, 1);
        var stepCounter = lastStepNode.addComponent(cc.Label);
        stepCounter.node.setPosition(-(cc.winSize.width / 2) + cc.winSize.width * 0.05, cc.winSize.width / 2 + 160);
        stepCounter.string = '?????????????????????' + window.levelSolution.useStep + ' - ????????????' + window.levelSolution.nickName.substring(0, 16);
        that.lastStepNode = lastStepNode.getComponent(cc.Label);
        that.node.addChild(lastStepNode);
      } else {
        that.lastStepNode.string = '?????????????????????' + window.levelSolution.useStep + ' - ????????????' + window.levelSolution.nickName.substring(0, 16);
      }

      return;
    } //????????????


    if (that.lastStepNode == null) {
      var lastStepNode = new cc.Node('lastStepNode');
      lastStepNode.setAnchorPoint(0, 1);
      var stepCounter = lastStepNode.addComponent(cc.Label);
      stepCounter.node.setPosition(-(cc.winSize.width / 2) + cc.winSize.width * 0.05, cc.winSize.width / 2 + 160);
      stepCounter.string = '????????????????????? ' + step + " - ?????? " + time;
      that.lastStepNode = lastStepNode.getComponent(cc.Label);
      that.node.addChild(lastStepNode);
    } else {
      that.lastStepNode.string = '????????????????????? ' + step + " - ?????? " + time;
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
      cc.find('thLevel', newMyPrefab).getComponent(cc.Label).string = '??? ???';
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
          (0, _common.Toast)("?????????????????????", 1500);
        }
      })["catch"](function (err) {
        console.error(err);

        _common.Loading.hide();
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZUxheW91dC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXJyZW50TGV2ZWwiLCJlbGVTaXplIiwibGF5b3V0IiwiQXJyYXkiLCJibG9ja051bSIsInVwbG9hZExldmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibG9jayIsInR5cGUiLCJQcmVmYWIiLCJkaXNwbGF5TmFtZSIsIndhbGwiLCJib3giLCJiYWxsIiwicm9sZVVwIiwicm9sZVJpZ2h0Iiwicm9sZURvd24iLCJyb2xlTGVmdCIsInBvc2l0aW9uIiwiZ2FtZUJuIiwiU3ByaXRlIiwiYm94TnVtIiwic3RlcENvdW50ZXIiLCJzdGVwQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXIiLCJ0aW1lQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXJUaW1lciIsImxldmVsQ291bnRlciIsIm1vdmVIaXN0b3J5TGlzdCIsImxhc3RTY29yZSIsImxhc3RTdGVwTm9kZSIsImxhc3RUaW1lbm9kZSIsInJhbmtJdGVtIiwiYnVpbGRBcmVhIiwic29sdXRpb25CdG4iLCJub25lU2tpcENoYW5nZSIsInNvbHV0aW9uU3RlcEluZGV4IiwicmVjb3JkU29sdXRpb25TdGVwIiwib25Mb2FkIiwidGhhdCIsImluaXRXaW5FbGUiLCJyZW5kZXJCZyIsImluaXRMZXZlbCIsImZpbmQiLCJub2RlIiwiaGVpZ2h0Iiwid2luU2l6ZSIsIndpZHRoIiwic3RhcnQiLCJhZGRUb3VjaE1vdmUiLCJwZW5kYW50QWRkRXZlbnQiLCJyZWFsU2l6IiwiaSIsIm4iLCJ4IiwieSIsInNpZ24iLCJjb3ZlciIsImluaXRQb3NpdGlvbiIsImxlbmd0aCIsInN0YXJ0WCIsInN0YXJ0WSIsIm5ld0Jsb2NrIiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsImFkZENoaWxkIiwicmVuZGVyQm4iLCJnZXRDb21wb25lbnQiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiYmdVcmxCYXNlIiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwicmVjdCIsInNwcml0ZUZyYW1lIiwicmVuZGVyTGF5b3V0IiwiZGVzdHJveUFsbENoaWxkcmVuIiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0IiwibW92ZVVwIiwicmVzZXRQb3NpdGlvbiIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJkaXJlY3Rpb24iLCJmcm9tIiwicHVzaCIsInNldHRpbmciLCJyZWxhc3QiLCJzeXMiLCJwbGF0Zm9ybSIsIldFQ0hBVF9HQU1FIiwid3giLCJzZXRTdG9yYWdlIiwia2V5IiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJnZXRTdG9yYWdlIiwicmVzIiwic3RyaW5nIiwiY292ZXJCb3hOdW0iLCJzaG93UmVzdWx0IiwibW92ZU11c2ljIiwicGF1c2VkIiwic3RvcCIsInBhdXNlIiwicGxheSIsInRvdWNoTW92ZSIsImZpZ3VyZUxvY2F0aW9uIiwib24iLCJldmVudCIsImdldExvY2F0aW9uIiwiZW5kTG9jYXRpb24iLCJNYXRoIiwiYWJzIiwiY2xlYXJJbnRlcnZhbCIsIkNhbnZhc05vZGUiLCJjb25zb2xlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJMYWJlbCIsIkxvYWRpbmciLCJzaG93IiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwidGhlbiIsImNvbnRlbnQiLCJ1c2VTdGVwTnVtIiwibGV2ZWxJbmRleCIsInRvdGFsIiwiYXBwSWQiLCJ1c2VyIiwibmlja05hbWUiLCJsb2dpbkluZm8iLCJzdWJzdHJpbmciLCJwb3J0cmFpdCIsImF2YXRhclVybCIsImxldmVsVXBsb2FkTnVtIiwicGFyc2VJbnQiLCJoaWRlIiwiY3JlYXRlU2NlbnNlVXBsb2FkQWQiLCJzZXRUaW1lb3V0IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJvbkNsb3NlIiwiZXJyb3IiLCJsYXN0U29sdXRpb25TdGVwIiwidXNlU3RlcCIsInVzZVRpbWUiLCJqb2luIiwiY2xhc3NpY3NMZXZlbE51bSIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwiaW5pdFBlbmRhbnQiLCJyZXBsYXlMYXlvdXQiLCJzaG93TGV2ZWxSYW5rIiwidGl0U3RyaW5nIiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJxdWVyeSIsImxvYWRlciIsImxvYWRSZXMiLCJyZW5kZXJMYXN0U2NvcmUiLCJjdXJMZXZlbE51bSIsImxldmVsRmluaXNoTnVtIiwiZmFpbCIsImxldmVsTm9kZSIsIk5vZGUiLCJzZXRBbmNob3JQb2ludCIsImFkZENvbXBvbmVudCIsImZvbnRTaXplIiwiZW5hYmxlQm9sZCIsImxpbmVIZWlnaHQiLCJsZXZlbEJ5IiwiZ2FtZUNpcmNsZSIsImF1ZGl0TGV2ZWxBZCIsInN5c0luZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsImF1ZGl0TGV2ZWxBZFdpZHRoIiwid2luZG93V2lkdGgiLCJhdWRpdExldmVsQWRMZWZ0IiwiY3JlYXRlQmFubmVyQWQiLCJhZFVuaXRJZCIsInN0eWxlIiwibGVmdCIsInRvcCIsIndpbmRvd0hlaWdodCIsIm9uRXJyb3IiLCJ0aW1lTm9kZSIsInNldEludGVydmFsIiwiYmluZCIsInNwbGljZSIsImJhY2siLCJjbGlja01vdmUiLCJsZWZ0QnRuIiwicGFzc3dvcmQiLCJFZGl0Qm94IiwidGV4dExhYmVsIiwidXBsb2FkSW5mbyIsIl9pZCIsInJldmlld0lkIiwicG9wIiwibGV2ZWxTb2x1dGlvbiIsImxldmVsQ2xhc3NpZnkiLCJkYXRlIiwiRGF0ZSIsInRvZGF5IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic29sdXRpb25CdG5Ob2RlIiwic29sdXRpb25CdG5MYWJlbCIsImVuYWJsZVNraXAiLCJudW0iLCJza2lwTGV2ZWxBZCIsImxvYWQiLCJvZmZDbG9zZSIsImlzRW5kZWQiLCJ1bmRlZmluZWQiLCJjaGVja1NvbHV0aW9uTGV2ZWxBZCIsInNwbGl0Iiwic3RlcCIsInRpbWUiLCJsYXN0QmVzdFNjb3JlIiwicmFua1BhZ2UiLCJyYW5rUGFnZVNpemUiLCJyZXNvdXJjZSIsInJlbmRlckxldmVsUmFua0xpc3QiLCJwYWdlIiwicGFnZVNpemUiLCJjdXJyZW50SXRlbU51bSIsImNoaWxkcmVuQ291bnQiLCJnZXRDaGlsZEJ5TmFtZSIsImNyZWF0ZVRpbWUiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLE1BQU0sQ0FBQ0MsWUFBUCxHQUFzQixFQUF0QjtBQUVBRCxNQUFNLENBQUNFLE9BQVAsR0FBaUIsRUFBakI7QUFDQUYsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLElBQUlDLEtBQUosRUFBaEI7QUFDQUosTUFBTSxDQUFDSyxRQUFQLEdBQWtCLEVBQWxCO0FBQ0FMLE1BQU0sQ0FBQ00sV0FBUCxHQUFxQixJQUFyQjtBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGTjtBQUdIQyxNQUFBQSxXQUFXLEVBQUM7QUFIVCxLQURDO0FBTVJDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLElBRFA7QUFFRkgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRlA7QUFHRkMsTUFBQUEsV0FBVyxFQUFDO0FBSFYsS0FORTtBQVdSRSxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZSO0FBR0RDLE1BQUFBLFdBQVcsRUFBQztBQUhYLEtBWEc7QUFnQlJHLElBQUFBLElB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QUFNLFNBQU4sRUFBZ0IsSUFBaEI7QUFDSDtBQUdKLE9BbkNELFdBbUNTLFVBQUEwQixHQUFHLEVBQUk7QUFDWnNELFFBQUFBLE9BQU8sQ0FBQ2dDLEtBQVIsQ0FBY3RGLEdBQWQ7O0FBQ0E2RCx3QkFBUW1CLElBQVI7QUFDSCxPQXRDRDtBQXVDSDtBQUVKLEdBdHVESTtBQXV1REw2RixFQUFBQSxTQXZ1REssdUJBdXVETTtBQUVQLFFBQUd4UCxNQUFNLENBQUMrTCxZQUFWLEVBQXdCL0wsTUFBTSxDQUFDK0wsWUFBUCxDQUFvQnZCLE9BQXBCO0FBRTNCO0FBM3VESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7Zm9ybWF0ZVJhbmtUaW1lLCBMb2FkaW5nLCBUb2FzdH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbndpbmRvdy5jdXJyZW50TGV2ZWwgPSBbXTtcclxuXHJcbndpbmRvdy5lbGVTaXplID0gMzU7XHJcbndpbmRvdy5sYXlvdXQgPSBuZXcgQXJyYXkoKTtcclxud2luZG93LmJsb2NrTnVtID0gMTI7XHJcbndpbmRvdy51cGxvYWRMZXZlbCA9IG51bGw7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJsb2NrOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2Jsb2NrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2FsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOid3YWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JveCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYmFsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVVcDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlVXAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlUmlnaHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVJpZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZURvd246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZURvd24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlTGVmdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlTGVmdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdhbWVCbjpjYy5TcHJpdGUsXHJcbiAgICAgICAgYm94TnVtOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBDb3VudGVyOm51bGwsXHJcbiAgICAgICAgc3RlcENvdW50ZXJWYWx1ZTogMCxcclxuICAgICAgICB0aW1lQ291bnRlcjpudWxsLFxyXG4gICAgICAgIHRpbWVDb3VudGVyVmFsdWU6MCxcclxuICAgICAgICB0aW1lQ291bnRlclRpbWVyOm51bGwsXHJcbiAgICAgICAgbGV2ZWxDb3VudGVyOiBudWxsLFxyXG4gICAgICAgIG1vdmVIaXN0b3J5TGlzdDpbXSxcclxuICAgICAgICBsYXN0U2NvcmU6IG51bGwsXHJcbiAgICAgICAgbGFzdFN0ZXBOb2RlOiBudWxsLFxyXG4gICAgICAgIGxhc3RUaW1lbm9kZTogbnVsbCxcclxuICAgICAgICByYW5rSXRlbTpjYy5QcmVmYWIsXHJcbiAgICAgICAgYnVpbGRBcmVhOm51bGwsXHJcbiAgICAgICAgc29sdXRpb25CdG46bnVsbCxcclxuICAgICAgICBub25lU2tpcENoYW5nZTpmYWxzZSxcclxuICAgICAgICBzb2x1dGlvblN0ZXBJbmRleDogLTEsXHJcbiAgICAgICAgcmVjb3JkU29sdXRpb25TdGVwOltdXHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0V2luRWxlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJCZygpO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluW9k+WJjeWFs+WNoVxyXG4gICAgICAgIHRoaXMuaW5pdExldmVsKCk7XHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMnLHRoaXMubm9kZSkuaGVpZ2h0ID0gIChjYy53aW5TaXplLmhlaWdodCAtIGNjLndpblNpemUud2lkdGgpLzI7XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRUb3VjaE1vdmUoKTtcclxuICAgICAgICB0aGlzLnBlbmRhbnRBZGRFdmVudCgpO1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGluaXRXaW5FbGUoKXtcclxuICAgICAgICB0aGlzLmJ1aWxkQXJlYSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYnVpbGRBcmVhJyk7XHJcbiAgICAgICAgbGV0IHJlYWxTaXogPSBjYy53aW5TaXplLndpZHRoL3dpbmRvdy5ibG9ja051bTtcclxuICAgICAgICB3aW5kb3cuZWxlU2l6ZSA9IHJlYWxTaXo7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgd2luZG93LmxheW91dFtpXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHt4OjAseTowLHNpZ246MCxjb3ZlcjpudWxsfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRQb3NpdGlvbihsYXlvdXQpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7fTtcclxuICAgICAgICB0aGlzLmJveE51bSA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxsYXlvdXQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgbGF5b3V0WzBdLmxlbmd0aDsgbisrKXtcclxuICAgICAgICAgICAgICAgIC8vbGF5b3V0W2ldW25dLnNpZ24gLS0g5Lq654mp5L2N572uXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbaV1bbl0uc2lnbiA9PSA0IHx8IGxheW91dFtpXVtuXS5zaWduID09IDUgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNiB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA3KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+euseWtkOaVsOmHj1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W2ldW25dLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHJlbmRlckJnKCl7XHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC0oY2Mud2luU2l6ZS53aWR0aC8yKTtcclxuICAgICAgICBsZXQgc3RhcnRZID0gKHdpbmRvdy5lbGVTaXplKndpbmRvdy5ibG9ja051bSkvMjtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBuKndpbmRvdy5lbGVTaXplICsgc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSAtaSp3aW5kb3cuZWxlU2l6ZSArIHN0YXJ0WTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ246MCxcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjpudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgIC8vIOS4uuiuvue9ruS9jee9rlxyXG4gICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJCbigpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZUJuID09IG51bGwpIHRoaXMuZ2FtZUJuID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9nYW1lQm4nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHdpbmRvdy5iZ1VybEJhc2UrICdfNDAweDI0MC5qcGcnLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUsIGNjLnJlY3QoMCwwLDQwMCwyNDApKTtcclxuICAgICAgICAgICAgdGhhdC5nYW1lQm4uc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJMYXlvdXQobGF5b3V0KXtcclxuICAgICAgICB0aGlzLmJ1aWxkQXJlYS5kZXN0cm95QWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSB3aW5kb3cubGF5b3V0W2ldW25dLng7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHdpbmRvdy5sYXlvdXRbaV1bbl0ueTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChsYXlvdXRbaV1bbl0uc2lnbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3QmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdXYWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy53YWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3V2FsbC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdXYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCb3guc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Qm94KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3QmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVVcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVVwLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVSaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVJpZ2h0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVSaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVEb3duID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVEb3duLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVEb3duKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZUxlZnQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvbGVMZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZUxlZnQuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Um9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVVwKGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG5cclxuICAgICAgICAvL+S4iuS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiK5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5LTJdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uY292ZXIpIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOS4iuS4gOagvOeQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5LTJdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTJdW3hdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uY292ZXIpIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3Zlcil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3ZlRG93bihsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+S4i+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4i+S4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA2O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiL5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5KzJdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsyXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3krMV1beF0uY292ZXIpIGxheW91dFt5KzFdW3hdLmNvdmVyID0gNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiL5LiA5qC85Li655CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3krMl1beF0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMl1beF0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeSsxXVt4XS5jb3ZlcikgbGF5b3V0W3krMV1beF0uY292ZXIgPSA2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5jb3ZlciA9IDY7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3Zlcil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3ZlTGVmdChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+W3puS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3ldW3gtMl0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5jb3ZlcikgbGF5b3V0W3ldW3gtMV0uY292ZXIgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0yXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMl0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0yXS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5XVt4LTFdLmNvdmVyKSBsYXlvdXRbeV1beC0xXS5jb3ZlciA9IDc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLmNvdmVyID0gNztcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyICYmIGxheW91dFt5XVt4XS5jb3ZlciAhPSAyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgfSxcclxuICAgIG1vdmVSaWdodChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+WPs+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5Y+z5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOWPs+S4gOagvOS4uueQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3ZlciAmJiBsYXlvdXRbeV1beF0uY292ZXIgIT0gMil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KGxheW91dClcclxuICAgIH0sXHJcbiAgICByZXNldFBvc2l0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIikgdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAucHVzaCgnVScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJ1cGxvYWRTb2x1dGlvblwiKSB0aGF0LnJlY29yZFNvbHV0aW9uU3RlcC5wdXNoKCdSJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSBcInVwbG9hZFNvbHV0aW9uXCIpIHRoYXQucmVjb3JkU29sdXRpb25TdGVwLnB1c2goJ0QnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIikgdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAucHVzaCgnTCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5piv5ZCm5byA5ZCv5Zue6YCA5Yqf6IO9XHJcbiAgICAgICAgaWYgKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIiAgfHwgKHdpbmRvdy5zZXR0aW5nLnJlbGFzdCAmJiBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkpIHtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogd2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0ZXBDb3VudGVyVmFsdWUgKys7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy5zdGVwQ291bnRlcil0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgbGV0IGNvdmVyQm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHdpbmRvdy5jdXJyZW50TGV2ZWwubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbjx3aW5kb3cuY3VycmVudExldmVsWzBdLmxlbmd0aCA7IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuY3VycmVudExldmVsW2ldW25dLmNvdmVyICYmIHdpbmRvdy5jdXJyZW50TGV2ZWxbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJCb3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib3hOdW0gPT0gY292ZXJCb3hOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5oyR5oiY5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93Lm1vdmVNdXNpYyAmJiAhd2luZG93Lm1vdmVNdXNpYy5wYXVzZWQpIHdpbmRvdy5tb3ZlTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgIGlmKHdpbmRvdy5tb3ZlTXVzaWMgJiYgIXdpbmRvdy5tb3ZlTXVzaWMucGF1c2VkKSB3aW5kb3cubW92ZU11c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgaWYod2luZG93Lm1vdmVNdXNpYykgd2luZG93Lm1vdmVNdXNpYy5wbGF5KCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUb3VjaE1vdmUoKXtcclxuICAgICAgICBpZighd2luZG93LnNldHRpbmcudG91Y2hNb3ZlIHx8IHdpbmRvdy5mcm9tID09IFwiY2hlY2tTb2x1dGlvblwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgZmlndXJlTG9jYXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZmlndXJlTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBlbmRMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmKE1hdGguYWJzKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA+IE1hdGguYWJzKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSl7XHJcbiAgICAgICAgICAgICAgICBpZigoZmlndXJlTG9jYXRpb24ueCAtIGVuZExvY2F0aW9uLngpIDwgLTUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWPs+a7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZVJpZ2h0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZigoZmlndXJlTG9jYXRpb24ueCAtIGVuZExvY2F0aW9uLngpID4gNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5bem5ruRXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlTGVmdCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZigoZmlndXJlTG9jYXRpb24ueSAtIGVuZExvY2F0aW9uLnkpIDwgLTUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4iua7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZVVwKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZigoZmlndXJlTG9jYXRpb24ueSAtIGVuZExvY2F0aW9uLnkpID4gNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5LiL5ruRXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlRG93bih3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBzaG93UmVzdWx0KHR5cGUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZih0aGF0LnRpbWVDb3VudGVyVGltZXIpe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcilcclxuICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJyZXZpZXdcIiB8fCB3aW5kb3cuZnJvbSA9PSBcImNoZWNrU29sdXRpb25cIil7XHJcbiAgICAgICAgICAgIFRvYXN0KCfmjJHmiJjmiJDlip/vvIEnLDE1MDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvdXNlVGltZScsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmraXmlbDvvJpcIisgdGhhdC5zdGVwQ291bnRlclZhbHVlKyfmraUnO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvdXNlU3RlcCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLnlKjml7bvvJpcIisgdGhhdC50aW1lQ291bnRlclZhbHVlKyfnp5InO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0L0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfkuIrkvKDlhbPljaEnO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZ2V0UmV2aWV3TGV2ZWxOdW0nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRSZXZpZXdMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB3aW5kb3cudXBsb2FkTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcE51bTogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHJlcy5yZXN1bHQudG90YWwrMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU/d2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXNlci5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVzZXIuYXBwSWQubGVuZ3RoLTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldmVsVXBsb2FkTnVtID0gcGFyc2VJbnQocmVzLnJlc3VsdC50b3RhbCkrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmNyZWF0ZVNjZW5zZVVwbG9hZEFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+WFs+WNoeS4iuS8oOaIkOWKn+W+heWuoeaguO+8jOWFs+mXreW5v+WRiuWQjui3s+WbnuS4u+eVjOmdoicsMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZC5zaG93KCkuY2F0Y2goKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNyZWF0ZVNjZW5zZVVwbG9hZEFkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCflhbPljaHkuIrkvKDmiJDlip/lvoXnrqHnkIblkZjlrqHmoLjvvIzljbPlsIbot7Plm57kuLvnlYzpnaInLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDlpLHotKUnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICB9ZWxzZSBpZih3aW5kb3cuZnJvbSA9PSBcInVwbG9hZFNvbHV0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+S4iuS8oOaUu+eVpSc7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvbmV4dCcsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93Lmxhc3RTb2x1dGlvblN0ZXAgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5pu05paw5pS755WlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sYXN0U29sdXRpb25TdGVwPnRoYXQuc3RlcENvdW50ZXJWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGVDbGFzc2ljc0xldmVsU29sdXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoYXQucmVjb3JkU29sdXRpb25TdGVwLmpvaW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5pS755Wl5LiK5Lyg5oiQ5YqfJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDEwMDApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWksei0pSzor7fnqI3lkI7lho3or5UnLDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfljp/mnInmlLvnlaXmraXmlbDmm7TlsJHvvIzkuIrkvKDlpLHotKUnLDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5LiK5Lyg5pS755WlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkQ2xhc3NpY3NMZXZlbFNvbHV0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAuam9pbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfmlLvnlaXkuIrkvKDmiJDlip8nLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDlpLHotKUs6K+356iN5ZCO5YaN6K+VJywzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHdpbmRvdy5mcm9tICE9ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmxldmVsSW5kZXggPj0gd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0L0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICflm57kuLvnlYzpnaInXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC50aW1lQ291bnRlclRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5LiL5LiA5YWzXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0TGV2ZWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub3BhY2l0eSA9IDA7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3JlcGxheScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJ1cGxvYWRTb2x1dGlvblwiKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3JhbmsnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KCfmtYvor5XlhbPljaHmsqHmnInmjpLooYzmppwnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNob3dMZXZlbFJhbmsoKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50Qmcvc2hhcmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aXRTdHJpbmcgPSAgJ+ebiuaZuuaOqOeusSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gIT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICfnrKwnK3dpbmRvdy5sZXZlbEluZGV4KyflhbMnKyct5L2/55So5q2l5pWw77yaJysgdGhhdC5zdGVwQ291bnRlclZhbHVlICsnLeaMkeaImOaIkOWKn++8gSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZysn5bCP5ri45oiP77yM5b+r5p2l5oyR5oiY5ZCn77yBJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lT3ZlckFsZXJ0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sMClcclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJidWlsZFwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHR5cGU9PSdza2lwJyl7XHJcbiAgICAgICAgICAgIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSA9ICc5OTk5JztcclxuICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclZhbHVlID0gJzk5OTknO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4iuS8oOWIhuaVsFxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBpZiAodGhhdC5sYXN0U2NvcmUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5YiG5pWw5LitLi4uJywxNTAwKTtcclxuICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZENsYXNzaWNzTGV2ZWxTY29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZT93aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSh0aGF0Lmxhc3RTY29yZS51c2VTdGVwLHRoYXQubGFzdFNjb3JlLnVzZVRpbWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHx8IHRoYXQudGltZUNvdW50ZXJWYWx1ZSA8IHRoYXQubGFzdFNjb3JlLnVzZVRpbWVcclxuICAgICAgICAgICAgICAgIGlmICh0aGF0LnN0ZXBDb3VudGVyVmFsdWUgPCB0aGF0Lmxhc3RTY29yZS51c2VTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKHRoYXQubGFzdFNjb3JlLnVzZVN0ZXAsdGhhdC5sYXN0U2NvcmUudXNlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWIhuaVsOS4rS4uLicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3VwZGF0ZUNsYXNzaWNzTGV2ZWxTY29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJMZXZlbE51bSA9IHdpbmRvdy5sZXZlbEluZGV4O1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wICYmIHJlcy5yZXN1bHQuZGF0YVswXS5sZXZlbEZpbmlzaE51bSA8IGN1ckxldmVsTnVtKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IGN1ckxldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBJZCA9IHdpbmRvdy51c2VyLmFwcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGV2ZWxGaW5pc2hOdW0gPSBjdXJMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lKSBkYXRhLm5pY2tOYW1lID0gd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCkgZGF0YS5wb3J0cmFpdCA9IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGVVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXBsYXlMYXlvdXQoKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSBcInVwbG9hZFNvbHV0aW9uXCIpIHRoYXQucmVjb3JkU29sdXRpb25TdGVwID0gW107XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKCl7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdFBlbmRhbnQoKXtcclxuXHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8v5YWz5Y2hXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbENvdW50ZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBsZXZlbE5vZGUgPSBuZXcgY2MuTm9kZSgnbGV2ZWxDb3VudGVyJyk7XHJcbiAgICAgICAgICAgIGxldmVsTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XHJcbiAgICAgICAgICAgIGxldmVsTm9kZS53aWR0aCA9ICBjYy53aW5TaXplLndpZHRoKjAuNztcclxuICAgICAgICAgICAgbGV2ZWxOb2RlLmhlaWdodCA9IDE4MDtcclxuICAgICAgICAgICAgLy8gbGV2ZWxOb2RlLmhvcml6b250YWxBbGlnbiA9ICdDRU5URVInXHJcbiAgICAgICAgICAgIHZhciBsZXZlbENvdW50ZXIgPSBsZXZlbE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oMCwgIChjYy53aW5TaXplLmhlaWdodC8yKSAtIChjYy53aW5TaXplLmhlaWdodCowLjA1KSk7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5mb250U2l6ZSA9IDYwO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIuZW5hYmxlQm9sZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGxldmVsQ291bnRlci5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LkNMQU1QO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIubGluZUhlaWdodCA9IDYwO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxCeSl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbENvdW50ZXIuc3RyaW5nID0gKCfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyAtICcrd2luZG93LmxldmVsQnkpLnN1YnN0cmluZygwLDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyID0gbGV2ZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEJ5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICgn56ysICcrIHdpbmRvdy5sZXZlbEluZGV4ICsgJyDlhbMgLSAnK3dpbmRvdy5sZXZlbEJ5KS5zdWJzdHJpbmcoMCwxNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfmtYvor5XlhbPljaEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICflrqHmoLjlhbPljaEnO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5nYW1lQ2lyY2xlKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2FtZUNpcmNsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2FtZUNpcmNsZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod2luZG93LmF1ZGl0TGV2ZWxBZCkgd2luZG93LmF1ZGl0TGV2ZWxBZC5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgJiYgIXdpbmRvdy5nYW1lQ2lyY2xlKXtcclxuICAgICAgICAgICAgICAgIGxldCBzeXNJbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpdExldmVsQWRXaWR0aCA9IHN5c0luZm8ud2luZG93V2lkdGgqMC42O1xyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGl0TGV2ZWxBZExlZnQgPSAoc3lzSW5mby53aW5kb3dXaWR0aCowLjQpLzI7XHJcbiAgICAgICAgICAgICAgICBpZihhdWRpdExldmVsQWRXaWR0aDw9MzAwKSBhdWRpdExldmVsQWRMZWZ0ID0gKHN5c0luZm8ud2luZG93V2lkdGgtMzAwKS8yO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5a6h5qC46aG16Z2iYm5BZFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmF1ZGl0TGV2ZWxBZCA9ICB3eC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtYTE2NzBjMjI1MzM0ZGEyNycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXVkaXRMZXZlbEFkTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBzeXNJbmZvLndpbmRvd0hlaWdodCowLjA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXVkaXRMZXZlbEFkV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hdWRpdExldmVsQWQub25FcnJvcihlcnIgPT4ge30pXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXVkaXRMZXZlbEFkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmF1ZGl0TGV2ZWxBZC5zaG93KCkuY2F0Y2goKCk9Pnt9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAndXBsb2FkU29sdXRpb24nKXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzJysnIC0g5LiK5Lyg5pS755WlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2NoZWNrU29sdXRpb24nKXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzJysnIC0g5pS755WlJztcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/mraXmlbBcclxuICAgICAgICBpZih0aGlzLnN0ZXBDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdzdGVwQ291bnRlcicpO1xyXG4gICAgICAgICAgICBub2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDgwKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gJ+atpeaVsO+8miAwJztcclxuICAgICAgICAgICAgdGhpcy5zdGVwQ291bnRlciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcENvdW50ZXJWYWx1ZSAgPSAwO1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0ZXBDb3VudGVyKSB0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/nlKjml7ZcclxuICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgdGltZU5vZGUgPSBuZXcgY2MuTm9kZSgndGltZUNvdW50ZXInKTtcclxuICAgICAgICAgICAgdGltZU5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lQ291bnRlciA9IHRpbWVOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oMCAsIChjYy53aW5TaXplLndpZHRoLzIpICsgODApXHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLnN0cmluZyA9ICfnlKjml7bvvJogMCc7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXIgPSB0aW1lTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aW1lTm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50aW1lQ291bnRlcikgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyKXRoaXMudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoaXMudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSwxMDAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLm1vdmVIaXN0b3J5TGlzdCA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVIaXN0b3J5TGlzdC5zcGxpY2UoMCx0aGlzLm1vdmVIaXN0b3J5TGlzdC5sZW5ndGgpXHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfSxcclxuICAgIHBlbmRhbnRBZGRFdmVudCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBjYy5maW5kKCdiYWNrJyx0aGlzLm5vZGUpLm9uKCdjbGljaycsdGhpcy5iYWNrLCB0aGlzKVxyXG4gICAgICAgIC8v5byA5ZCv54K55Ye756e75YqoXHJcbiAgICAgICAgaWYod2luZG93LnNldHRpbmcuY2xpY2tNb3ZlICYmIHdpbmRvdy5mcm9tICE9IFwiY2hlY2tTb2x1dGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3VwJyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVVcCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3JpZ2h0Jyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2Rvd24nLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZURvd24od2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9sZWZ0Jyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVMZWZ0KHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvdXAnLHRoaXMubm9kZSkucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3JpZ2h0Jyx0aGlzLm5vZGUpLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9kb3duJyx0aGlzLm5vZGUpLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9sZWZ0Jyx0aGlzLm5vZGUpLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlZnRCdG4gPSBjYy5maW5kKCdnYW1lQnRucy9iYWNrU3RlcC9CYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3JldmlldycpIGxlZnRCdG4uc3RyaW5nID0gJ+mAmui/hyc7XHJcbiAgICAgICAgZWxzZSBpZih3aW5kb3cuZnJvbSA9PSAnY2hlY2tTb2x1dGlvbicpIGxlZnRCdG4uc3RyaW5nID0gJ0FnYWluJztcclxuICAgICAgICBlbHNlIGlmKCF3aW5kb3cuc2V0dGluZy5yZWxhc3QpIGxlZnRCdG4uc3RyaW5nID0gJ+mHjeeOqSc7XHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvYmFja1N0ZXAnLHRoaXMubm9kZSkub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvL+aUu+eVpeaSreaUvlxyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnY2hlY2tTb2x1dGlvbicpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zb2x1dGlvblN0ZXBJbmRleD0tMVxyXG4gICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WuoeaguOWFs+WNoemAmui/h1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3Jyl7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3ZlcmlmeUNvbnRhaW4vY2xvc2UnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc3dvcmQgPSAgY2MuZmluZCgndmVyaWZ5Q29udGFpbi9lZGl0Ym94JyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCd2ZXJpZnlDb250YWluL2NvbmZpcm0nLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFzc3dvcmQudGV4dExhYmVsLnN0cmluZyA9PSAnMTk5NzA3MjAnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZ2V0Q2xhc3NpY3NMZXZlbE51bSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZENsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHdpbmRvdy51cGxvYWRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHJlcy5yZXN1bHQudG90YWwrMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXBsb2FkSW5mby5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZT93aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXBsb2FkSW5mby5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVwbG9hZEluZm8uYXBwSWQubGVuZ3RoLTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy51cGxvYWRJbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlUmV2aWV3TGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOndpbmRvdy5yZXZpZXdJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV2ZWxVcGxvYWROdW0gPSBwYXJzZUludChyZXMucmVzdWx0LnRvdGFsKSsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+WFs+WNoScrbGV2ZWxVcGxvYWROdW0rJ+S4iuS8oOaIkOWKn++8jOWNs+Wwhui3s+WbnuS4u+eVjOmdoicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5aSx6LSlJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5a+G56CB6ZSZ6K+v77yBJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygndmVyaWZ5QWRtaW4nLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcucmVsYXN0KXtcclxuICAgICAgICAgICAgICAgIGlmKHRoYXQubW92ZUhpc3RvcnlMaXN0Lmxlbmd0aCA+IDEgJiYgdGhhdC5zdGVwQ291bnRlclZhbHVlID49IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIikgdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoYXQubW92ZUhpc3RvcnlMaXN0W3RoYXQubW92ZUhpc3RvcnlMaXN0Lmxlbmd0aC0xXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN0ZXBDb3VudGVyVmFsdWUgLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGF0LnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3JldmlldycpIGNjLmZpbmQoJ2dhbWVCdG5zL21lbnUvQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfpqbPlm54nXHJcbiAgICAgICAgZWxzZSBpZih3aW5kb3cuZnJvbSA9PSBcImNoZWNrU29sdXRpb25cIikgY2MuZmluZCgnZ2FtZUJ0bnMvbWVudS9CYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ05leHQnXHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbWVudScsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcik7XHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgIC8v5pS755Wl5pKt5pS+XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdjaGVja1NvbHV0aW9uJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5zb2x1dGlvblN0ZXBJbmRleCArKyA7XHJcbiAgICAgICAgICAgICAgICBpZih0aGF0LnNvbHV0aW9uU3RlcEluZGV4Pj13aW5kb3cubGV2ZWxTb2x1dGlvbi5jb250ZW50Lmxlbmd0aCkgdGhhdC5zb2x1dGlvblN0ZXBJbmRleD0tMTtcclxuICAgICAgICAgICAgICAgIGlmKHRoYXQuc29sdXRpb25TdGVwSW5kZXggPD0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh3aW5kb3cubGV2ZWxTb2x1dGlvbi5jb250ZW50W3RoYXQuc29sdXRpb25TdGVwSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZVVwKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdEJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlRG93bih3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdMJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlTGVmdCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lrqHmoLjlhbPljaHpqbPlm55cclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3Jldmlldycpe1xyXG4gICAgICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3ZlcmlmeUNvbnRhaW4vY2xvc2UnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc3dvcmQgPSAgY2MuZmluZCgndmVyaWZ5Q29udGFpbi9lZGl0Ym94JyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCd2ZXJpZnlDb250YWluL2NvbmZpcm0nLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFzc3dvcmQudGV4dExhYmVsLnN0cmluZyA9PSAnMTk5NzA3MjAnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlUmV2aWV3TGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6d2luZG93LnJldmlld0lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCflhbPljaHlt7LpqbPlm57vvIzljbPlsIbot7Plm57kuLvnlYzpnaInLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCflr4bnoIHplJnor6/vvIEnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCd2ZXJpZnlBZG1pbicsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSB0aGF0Lm5vZGU7XHJcbiAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL2NvbnRpbnVlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhhdC50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhhdCksMTAwMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL3JlcGxheScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9sZXZlbHMnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbGV2ZWxMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9yYW5rJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfmtYvor5XlhbPljaHmsqHmnInmjpLooYzmppwnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dMZXZlbFJhbmsoKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL3NoYXJlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aXRTdHJpbmcgPSAgJ+ebiuaZuuaOqOeusSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tICE9ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJ+esrCcrd2luZG93LmxldmVsSW5kZXgrJ+WFsy3lv6vmnaXmjJHmiJjlkKchJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAn5bCP5ri45oiP77yM5b+r5p2l5oyR5oiY5ZCn77yBJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICct5L2/55So5q2l5pWw77yaJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZU1lbnUnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBpbml0TGV2ZWwoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKCfml6AnLCfml6AnKVxyXG5cclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTonYnVpbGRMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW5oyC5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6J2J1aWxkTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdyZXZpZXcnKXtcclxuICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKCfml6AnLCfml6AnKVxyXG5cclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleToncmV2aWV3TGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbmjILku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8v57uP5YW45YWz5Y2hXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbENsYXNzaWZ5ID09ICdjbGFzc2ljc0xldmVsJyl7XHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6d2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLnJlc3VsdC5kYXRhWzBdLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsQnkgPSByZXMucmVzdWx0LmRhdGFbMF0ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluaMguS7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2god2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOndpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IHJlcy5yZXN1bHQuZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUodGhhdC5sYXN0U2NvcmUudXNlU3RlcCx0aGF0Lmxhc3RTY29yZS51c2VUaW1lKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSgn5pegJywn5pegJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxldmVsSW5kZXggPT0gMSkgVG9hc3QoJ1RpcDog5Y+v5ruR5Yqo5bGP5bmV5o6n5Yi25Lq654mpJyw1MDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+e9kee7nOWFs+WNoVxyXG4gICAgICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvL+aUu+eVpVxyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSAhPSBcInVwbG9hZFNvbHV0aW9uXCIgJiYgd2luZG93LmZyb20gIT0gXCJjaGVja1NvbHV0aW9uXCIpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5ID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzb2x1dGlvbkJ0bk5vZGUgPSBuZXcgY2MuTm9kZSgnc2tpcE5vZGUnKTtcclxuICAgICAgICAgICAgICAgIHNvbHV0aW9uQnRuTm9kZS5zZXRBbmNob3JQb2ludCgwLCAxKTtcclxuICAgICAgICAgICAgICAgIHZhciBzb2x1dGlvbkJ0bkxhYmVsID0gc29sdXRpb25CdG5Ob2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBzb2x1dGlvbkJ0bkxhYmVsLm5vZGUuc2V0UG9zaXRpb24oKGNjLndpblNpemUud2lkdGgvMikgLSAoY2Mud2luU2l6ZS53aWR0aCowLjIpLCAgKGNjLndpblNpemUud2lkdGgvMikgKyA4MCk7XHJcbiAgICAgICAgICAgICAgICBzb2x1dGlvbkJ0bkxhYmVsLnN0cmluZyA9ICfnm7jlhbPmlLvnlaUnO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zb2x1dGlvbkJ0biA9IHNvbHV0aW9uQnRuTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgICAgICB0aGF0Lm5vZGUuYWRkQ2hpbGQoc29sdXRpb25CdG5Ob2RlKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmFibGVTa2lwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3NraXBBZEluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLm51bT49NSkgdGhhdC5ub25lU2tpcENoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoYXQuc29sdXRpb25CdG4ubm9kZS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighZW5hYmxlU2tpcCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVNraXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGF0LnRpbWVDb3VudGVyVGltZXIpIGNsZWFySW50ZXJ2YWwodGhhdC50aW1lQ291bnRlclRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdzb2x1dGlvbkNvbnRhaW4vY2xvc2UnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGF0LnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGF0LnRpbWVDb3VudGVyKSB0aGF0LnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGF0LnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoYXQpLDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdzb2x1dGlvbkNvbnRhaW4vc2tpcExldmVsJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGF0Lmxhc3RTY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLlvZPliY3lhbPljaHlt7LpgJrov4fml6DpnIDlho3ot7Pov4dcIiwxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGF0Lm5vbmVTa2lwQ2hhbmdlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuavj+WkqeacgOWkmui3s+i/hzXkuKrlhbPljaFcIiwxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5bm/5ZGK5ouJ5Y+W5LitLi4uXCIsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighd2luZG93LnNraXBMZXZlbEFkKXtUb2FzdChcIuW5v+WRiuaLieWPluWksei0pVwiLDE1MDApO3JldHVybjt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQuc2hvdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5za2lwTGV2ZWxBZC5sb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5za2lwTGV2ZWxBZC5zaG93KCkpLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuW5v+WRiuaLieWPluWksei0pVwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5za2lwTGV2ZWxBZC5vZmZDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNraXBMZXZlbEFkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobjgJDlhbPpl63lub/lkYrjgJHmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI/kuo4gMi4xLjAg55qE5Z+656GA5bqT54mI5pys77yMcmVzIOaYr+S4gOS4qiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGF0LnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGF0LnRpbWVDb3VudGVyKSB0aGF0LnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGF0LnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhhdCksMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd1Jlc3VsdCgnc2tpcCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/pmZDliLbot7Pov4fmrKHmlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdza2lwQWRJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuZGF0ZSA9PSB0b2RheSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLm51bT49NSkgdGhhdC5ub25lU2tpcENoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc2tpcEFkSW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTp0b2RheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06cmVzLmRhdGEubnVtKzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdza2lwQWRJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOnRvZGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bToxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3NraXBBZEluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOnRvZGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmkq3mlL7kuK3pgJTpgIDlh7rvvIzkuI3kuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSx0aGlzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdzb2x1dGlvbkNvbnRhaW4vY2hlY2tTb2x1dGlvbicsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsU29sdXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsU29sdXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuW5v+WRiuaLieWPluS4rS4uLlwiLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkKXtUb2FzdChcIuW5v+WRiuaLieWPluWksei0pVwiLDE1MDApO3JldHVybjt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZC5zaG93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZC5sb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkLnNob3coKSkuY2F0Y2goKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLlub/lkYrmi4nlj5blpLHotKVcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQub2ZmQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkLm9uQ2xvc2UocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+S6huOAkOWFs+mXreW5v+WRiuOAkeaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bCP5LqOIDIuMS4wIOeahOWfuuehgOW6k+eJiOacrO+8jHJlc3VsdCDmmK/kuIDkuKogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5pc0VuZGVkIHx8IHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZyb20gPSBcImNoZWNrU29sdXRpb25cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxTb2x1dGlvbiA9IHJlcy5yZXN1bHQuZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxTb2x1dGlvbi5jb250ZW50ID0gcmVzLnJlc3VsdC5kYXRhWzBdLmNvbnRlbnQuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+W9k+WJjeWFs+WNoeaaguaXoOaUu+eVpScsMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnc29sdXRpb25Db250YWluL3VwbG9hZFNvbHV0aW9uJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICd1cGxvYWRTb2x1dGlvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdzb2x1dGlvbkRpYWxvZycsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVTa2lwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICB9LCB0aGF0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJhY2soKXtcclxuICAgICAgICB0aGlzLmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVDb3VudGVyVGltZXIpXHJcbiAgICAgICAgdGhpcy50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3Jldmlldycpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHdpbmRvdy5mcm9tID09ICd1cGxvYWRTb2x1dGlvbicpe1xyXG4gICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJ1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHdpbmRvdy5mcm9tID09ICdjaGVja1NvbHV0aW9uJyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgfWVsc2UgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnYnVpbGQnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSdcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHJlbmRlckxhc3RTY29yZShzdGVwLHRpbWUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnIHx8IHdpbmRvdy5mcm9tID09IFwicmV2aWV3XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3VwbG9hZFNvbHV0aW9uJyl7XHJcblxyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbFNvbHV0aW9uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEJlc3RTY29yZSA9ICflvZPliY3mlLvnlaXvvJrmmoLml6AnO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lmxhc3RTb2x1dGlvblN0ZXAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmxhc3RTb2x1dGlvblN0ZXAgPSByZXMucmVzdWx0LmRhdGFbMF0udXNlU3RlcDtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0QmVzdFNjb3JlID0gJ+W9k+WJjeaUu+eVpe+8muatpeaVsCcgKyByZXMucmVzdWx0LmRhdGFbMF0udXNlU3RlcCArICcgLSDotKHnjK7ogIXvvJonKyByZXMucmVzdWx0LmRhdGFbMF0ubmlja05hbWUuc3Vic3RyaW5nKDAsMTYpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhhdC5sYXN0U3RlcE5vZGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RTdGVwTm9kZSA9IG5ldyBjYy5Ob2RlKCdsYXN0U3RlcE5vZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U3RlcE5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ZXBDb3VudGVyID0gbGFzdFN0ZXBOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigtKGNjLndpblNpemUud2lkdGgvMikgKyAoY2Mud2luU2l6ZS53aWR0aCowLjA1KSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgMTYwKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBDb3VudGVyLnN0cmluZyA9IGxhc3RCZXN0U2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUgPSBsYXN0U3RlcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubm9kZS5hZGRDaGlsZChsYXN0U3RlcE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUuc3RyaW5nID0gbGFzdEJlc3RTY29yZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnY2hlY2tTb2x1dGlvbicpe1xyXG4gICAgICAgICAgICBpZih0aGF0Lmxhc3RTdGVwTm9kZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHZhciBsYXN0U3RlcE5vZGUgPSBuZXcgY2MuTm9kZSgnbGFzdFN0ZXBOb2RlJyk7XHJcbiAgICAgICAgICAgICAgICBsYXN0U3RlcE5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBsYXN0U3RlcE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDE2MClcclxuICAgICAgICAgICAgICAgIHN0ZXBDb3VudGVyLnN0cmluZyA9ICflvZPliY3mlLvnlaXvvJrmraXmlbAnICsgd2luZG93LmxldmVsU29sdXRpb24udXNlU3RlcCArICcgLSDotKHnjK7ogIXvvJonKyB3aW5kb3cubGV2ZWxTb2x1dGlvbi5uaWNrTmFtZS5zdWJzdHJpbmcoMCwxNik7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZSA9IGxhc3RTdGVwTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgICAgICB0aGF0Lm5vZGUuYWRkQ2hpbGQobGFzdFN0ZXBOb2RlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZS5zdHJpbmcgPSAn5b2T5YmN5pS755Wl77ya5q2l5pWwJyArIHdpbmRvdy5sZXZlbFNvbHV0aW9uLnVzZVN0ZXAgKyAnIC0g6LSh54yu6ICF77yaJysgd2luZG93LmxldmVsU29sdXRpb24ubmlja05hbWUuc3Vic3RyaW5nKDAsMTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+acgOS9s+atpeaVsFxyXG4gICAgICAgIGlmKHRoYXQubGFzdFN0ZXBOb2RlID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbGFzdFN0ZXBOb2RlID0gbmV3IGNjLk5vZGUoJ2xhc3RTdGVwTm9kZScpO1xyXG4gICAgICAgICAgICBsYXN0U3RlcE5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciBzdGVwQ291bnRlciA9IGxhc3RTdGVwTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKC0oY2Mud2luU2l6ZS53aWR0aC8yKSArIChjYy53aW5TaXplLndpZHRoKjAuMDUpLCAgKGNjLndpblNpemUud2lkdGgvMikgKyAxNjApXHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLnN0cmluZyA9ICfmnIDkvbPmiJDnu6nvvJrmraXmlbAgJysgc3RlcCtcIiAtIOeUqOaXtiBcIit0aW1lO1xyXG4gICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZSA9IGxhc3RTdGVwTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoYXQubm9kZS5hZGRDaGlsZChsYXN0U3RlcE5vZGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZS5zdHJpbmcgPSAn5pyA5L2z5oiQ57up77ya5q2l5pWwICcrIHN0ZXArXCIgLSDnlKjml7YgXCIrdGltZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBzaG93TGV2ZWxSYW5rKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgdmFyIHJhbmtQYWdlID0gMSxyYW5rUGFnZVNpemUgPSA1MDtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGNjLmZpbmQoJ3JhbmtMaXN0L3ZpZXcvY29udGVudCcsbmV3TXlQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY2xvc2UnLG5ld015UHJlZmFiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGlmKHRoYXQucmFua0l0ZW0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0l0ZW0nLCBmdW5jdGlvbiAoZXJyLHJlc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yYW5rSXRlbSA9IGNjLmluc3RhbnRpYXRlKHJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZmluZCgncmFua0xpc3QnLG5ld015UHJlZmFiKS5vbignYm91bmNlLWJvdHRvbScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByYW5rUGFnZSsrO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMZXZlbFJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3RoTGV2ZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfmraUg5pWwJ1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHBhZ2UscGFnZVNpemUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY3VycmVudEl0ZW1OdW0gPSBjb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDp3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGk8PSByZXMucmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMucmVzdWx0LmRhdGFbaS0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGF0LnJhbmtJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZFJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkrY3VycmVudEl0ZW1OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkRGF0ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0ZVJhbmtUaW1lKGRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEudXNlU3RlcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShkYXRhLnBvcnRyYWl0Kyc/YWFhPWFhLmpwZycsICBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGROYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIitkYXRhLm5pY2tOYW1lK1wiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5hdWRpdExldmVsQWQpIHdpbmRvdy5hdWRpdExldmVsQWQuZGVzdHJveSgpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuIl19
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

    // ????????????????????????????????????
    var classiceBtnLabel = cc.find('Background/Label', this.classicsLevelBtn.node);
    classiceBtnLabel.color = cc.color(202, 122, 0);
    var netBtnLabel = cc.find('Background/Label', this.netLevelBtn.node);
    netBtnLabel.color = cc.color(255, 255, 255);
    netBtnLabel.opacity = 125;
    window.levelClassify = 'classicsLevel'; //??????????????????

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

    this.levelListConten.height = levelH;
  },
  loadNetLevelList: function loadNetLevelList() {
    var _this2 = this;

    // ????????????????????????????????????
    var classiceBtnLabel = cc.find('Background/Label', this.classicsLevelBtn.node);
    classiceBtnLabel.color = cc.color(255, 255, 255);
    classiceBtnLabel.opacity = 125;
    var netBtnLabel = cc.find('Background/Label', this.netLevelBtn.node);
    netBtnLabel.color = cc.color(202, 122, 0);
    window.levelClassify = 'netLevel'; //??????????????????

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxMYXlvdXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsZXZlbEl0ZW0iLCJQcmVmYWIiLCJsZXZlbExpc3QiLCJsZXZlbExpc3RDb250ZW4iLCJsZXZlbFNyb2xsVmlldyIsImNsYXNzaWNzTGV2ZWxCdG4iLCJCdXR0b24iLCJuZXRMZXZlbEJ0biIsImNsb3NlTGV2ZWxCdG4iLCJvbkxvYWQiLCJzdGFydCIsImZpbmQiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJsb2FkQ2xhc3NpY3NMZXZlbExpc3QiLCJsb2FkTmV0TGV2ZWxMaXN0IiwiY2xvc2VMZXZlbExheW91dCIsImNsYXNzaWNlQnRuTGFiZWwiLCJjb2xvciIsIm5ldEJ0bkxhYmVsIiwib3BhY2l0eSIsIndpbmRvdyIsImxldmVsQ2xhc3NpZnkiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJ0aGF0IiwibGV2ZWxIIiwibGV2ZWxSb3ciLCJsZXZlbFRvdGFsIiwiY2xhc3NpY3NMZXZlbE51bSIsImkiLCJpbnN0YW50aWF0ZSIsImluZGV4TGV2ZWwiLCJ1c2VyIiwibGV2ZWxGaW5pc2hOdW0iLCJyb2xlcyIsImluY2x1ZGVzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJMYWJlbCIsInN0cmluZyIsInQiLCJsZXZlbEluZGV4Iiwid3hMb2dpbkJ0biIsImRlc3Ryb3kiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImFkZENoaWxkIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJoZWlnaHQiLCJuZXRMZXZlbE51bSIsInVzZXJJbmZvIiwibG9nIiwicmVtb3ZlRnJvbVBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFF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QUEsTUFBTSxJQUFJZCxJQUFJLENBQUNzQyxNQUFMLEdBQWMsRUFBeEI7QUFDSDtBQWpDUzs7QUFpQmQsU0FBSSxJQUFJcEIsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDRixVQUFmLEVBQTRCRSxDQUFDLEVBQTdCLEVBQWdDO0FBQUEsYUFBeEJBLENBQXdCO0FBaUIvQjs7QUFDRCxTQUFLM0IsZUFBTCxDQUFxQitDLE1BQXJCLEdBQThCeEIsTUFBOUI7QUFDSCxHQXBISTtBQXFITFQsRUFBQUEsZ0JBckhLLDhCQXFIYTtBQUNkLFNBQUtMLElBQUwsQ0FBVTBDLGdCQUFWO0FBQ0EsU0FBSzFDLElBQUwsQ0FBVStCLE9BQVY7QUFDSCxHQXhISSxDQTBITDs7QUExSEssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgbGV2ZWxJdGVtOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgbGV2ZWxMaXN0Om51bGwsXHJcbiAgICAgICAgbGV2ZWxMaXN0Q29udGVuOm51bGwsXHJcbiAgICAgICAgbGV2ZWxTcm9sbFZpZXc6bnVsbCxcclxuICAgICAgICBjbGFzc2ljc0xldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgICAgICBuZXRMZXZlbEJ0bjpjYy5CdXR0b24sXHJcbiAgICAgICAgY2xvc2VMZXZlbEJ0bjpjYy5CdXR0b24sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0ID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldy92aWV3L2NvbnRlbnQvaXRlbUxpc3QnLHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmxldmVsTGlzdENvbnRlbiA9IGNjLmZpbmQoJ2xldmVsTGlzdC9sZXZlbFNjcm9sbFZpZXcvdmlldy9jb250ZW50Jyx0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5sZXZlbFNyb2xsVmlldyA9IGNjLmZpbmQoJ2xldmVsTGlzdC9sZXZlbFNjcm9sbFZpZXcnLHRoaXMubm9kZSlcclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMuY2xhc3NpY3NMZXZlbEJ0biA9PSBudWxsKSB0aGlzLmNsYXNzaWNzTGV2ZWxCdG4gPSBjYy5maW5kKCdsZXZlbExpc3QvY2xhc3NpZnkvY2xhc3NpY3NMZXZlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmKHRoaXMubmV0TGV2ZWxCdG4gPT0gbnVsbCkgdGhpcy5uZXRMZXZlbEJ0biA9IGNjLmZpbmQoJ2xldmVsTGlzdC9jbGFzc2lmeS9uZXRMZXZlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmKHRoaXMuY2xvc2VMZXZlbEJ0biA9PSBudWxsKSB0aGlzLmNsb3NlTGV2ZWxCdG4gPSBjYy5maW5kKCdjbG9zZUxldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5jbGFzc2ljc0xldmVsQnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5sb2FkQ2xhc3NpY3NMZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZXRMZXZlbEJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMubG9hZE5ldExldmVsTGlzdCwgdGhpcylcclxuICAgICAgICB0aGlzLmNsb3NlTGV2ZWxCdG4ubm9kZS5vbignY2xpY2snLHRoaXMuY2xvc2VMZXZlbExheW91dCwgdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkQ2xhc3NpY3NMZXZlbExpc3QoKTtcclxuXHJcblxyXG4gICAgfSxcclxuICAgIGxvYWRDbGFzc2ljc0xldmVsTGlzdCgpe1xyXG4gICAgICAgIC8vIOiuvue9ruWIh+aNouWFs+WNoeexu+Wei+aMiemSrumAieS4rVxyXG4gICAgICAgIGxldCBjbGFzc2ljZUJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5jbGFzc2ljc0xldmVsQnRuLm5vZGUpO1xyXG4gICAgICAgIGNsYXNzaWNlQnRuTGFiZWwuY29sb3IgPSBjYy5jb2xvcigyMDIsMTIyLDApO1xyXG4gICAgICAgIGxldCBuZXRCdG5MYWJlbCA9IGNjLmZpbmQoJ0JhY2tncm91bmQvTGFiZWwnLHRoaXMubmV0TGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgbmV0QnRuTGFiZWwuY29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgbmV0QnRuTGFiZWwub3BhY2l0eSA9IDEyNTtcclxuXHJcbiAgICAgICAgd2luZG93LmxldmVsQ2xhc3NpZnkgPSAnY2xhc3NpY3NMZXZlbCc7XHJcblxyXG4gICAgICAgIC8v5riF56m65YWz5Y2h6KOC5Y+YXHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3QuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBsZXZlbEggPSAwO1xyXG4gICAgICAgIGxldCBsZXZlbFJvdyA9IDEwO1xyXG4gICAgICAgIGxldCBsZXZlbFRvdGFsID0gd2luZG93LmNsYXNzaWNzTGV2ZWxOdW07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGxldmVsVG90YWwgOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxJdGVtKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4TGV2ZWwgPSBpKzE7XHJcbiAgICAgICAgICAgIGlmKGluZGV4TGV2ZWwgPD0gIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtKzEgfHwgd2luZG93LnVzZXIucm9sZXMgJiYgd2luZG93LnVzZXIucm9sZXMuaW5jbHVkZXMoJ2FkbWluJykpe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxOdW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGluZGV4TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdsZXZlbExvY2snKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsSW5kZXggPSBpbmRleExldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sZXZlbExpc3QuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA8PSBsZXZlbFJvdyl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbFJvdyA9IE1hdGguZmxvb3IobGV2ZWxUb3RhbCAvIE1hdGguZmxvb3IodGhpcy5sZXZlbExpc3RDb250ZW4ud2lkdGggLyBub2RlLndpZHRoKSAtMSk7XHJcbiAgICAgICAgICAgICAgICBsZXZlbEggKz0gbm9kZS5oZWlnaHQgKyA3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxldmVsTGlzdENvbnRlbi5oZWlnaHQgPSBsZXZlbEg7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkTmV0TGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgLy8g6K6+572u5YiH5o2i5YWz5Y2h57G75Z6L5oyJ6ZKu6YCJ5LitXHJcbiAgICAgICAgbGV0IGNsYXNzaWNlQnRuTGFiZWwgPSBjYy5maW5kKCdCYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgY2xhc3NpY2VCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICBjbGFzc2ljZUJ0bkxhYmVsLm9wYWNpdHkgPSAxMjU7XHJcbiAgICAgICAgbGV0IG5ldEJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5uZXRMZXZlbEJ0bi5ub2RlKTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDIwMiwxMjIsMCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sZXZlbENsYXNzaWZ5ID0gJ25ldExldmVsJztcclxuXHJcbiAgICAgICAgLy/muIXnqbrlhbPljaHoo4Llj5hcclxuICAgICAgICB0aGlzLmxldmVsTGlzdC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxldmVsSCA9IDA7XHJcbiAgICAgICAgbGV0IGxldmVsUm93ID0gMTA7XHJcbiAgICAgICAgbGV0IGxldmVsVG90YWwgPSB3aW5kb3cubmV0TGV2ZWxOdW07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGxldmVsVG90YWwgOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxJdGVtKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4TGV2ZWwgPSBpKzE7XHJcbiAgICAgICAgICAgIGlmKGluZGV4TGV2ZWwgPD0gd2luZG93LnVzZXJJbmZvLmNsYXNzaWNzTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxOdW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGluZGV4TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdsZXZlbExvY2snKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxldmVsTGlzdC5hZGRDaGlsZChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygnbGV2ZWw6JyArIGluZGV4TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBpZihpbmRleExldmVsIDw9IGxldmVsUm93KXtcclxuICAgICAgICAgICAgICAgIGxldmVsUm93ID0gTWF0aC5mbG9vcihsZXZlbFRvdGFsIC8gTWF0aC5mbG9vcih0aGlzLmxldmVsTGlzdENvbnRlbi53aWR0aCAvIG5vZGUud2lkdGgpIC0xKTtcclxuICAgICAgICAgICAgICAgIGxldmVsSCArPSBub2RlLmhlaWdodCArIDcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0Q29udGVuLmhlaWdodCA9IGxldmVsSDtcclxuICAgIH0sXHJcbiAgICBjbG9zZUxldmVsTGF5b3V0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
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
 * wx????????????
 * @param _success ???????????????????????? ??????????????????wx????????????
 * @param _fail ??????????????????
 */
function wxLogin(_success, _fail, node) {
  if (cc.sys.platform !== cc.sys.WECHAT_GAME) return; //????????????

  var wx = window['wx']; //??????ts????????????

  var info = wx.getSystemInfoSync(); //????????????????????????

  var w = info.screenWidth; //?????????

  var h = info.screenHeight; //?????????

  var eleW = node.width * 2 / 1080 * w;
  var eleH = node.height * 2 / 2400 * h;
  var left = w / 2 - eleW / 2;
  var top = h / 2 - eleH / 2 - node.y / 2400 * h + node.y / 2400 * h * 0.25; //???????????????????????????????????????????????????????????????????????????????????????????????????

  wx.getSetting({
    success: function success(res) {
      if (res.authSetting["scope.userInfo"]) {
        wx.getUserInfo({
          success: function success(res) {
            //????????????
            // userInfo = res.userInfo;
            _success && _success(res.userInfo);
          }
        });
        return false;
      } else {
        //??????????????????????????????
        var button = wx.createUserInfoButton({
          type: 'text',
          text: '',
          style: {
            left: parseInt(left),
            top: parseInt(top),
            width: parseInt(eleW),
            height: parseInt(eleH),
            backgroundColor: '#00000000',
            //????????????????????????
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

  var wx = window['wx']; //??????ts????????????

  var info = wx.getSystemInfoSync(); //????????????????????????

  var w = info.screenWidth; //?????????

  var h = info.screenHeight; //?????????

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
  var date = new Date(timestamp); //????????????10??????*1000???????????????13??????????????????1000

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
if (window.auditLevelAd) window.auditLevelAd.destroy();

if (cc.sys.platform === cc.sys.WECHAT_GAME) {
  wx.cloud.init({
    env: window.env
  }); //???????????????

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
    //????????????
    //  this.oneSay();
    this.mainBindEvent();
    window.from = 'main';
    cc.game.on(cc.game.EVENT_SHOW, function () {
      // console.log("??????????????????");
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
    var container = cc.find('Canvas/mainBg/bingBg'); //??????????????????

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
          container.spriteFrame = sprite; //????????????????????????????????????????????????

          var starNode = new cc.Node(); //?????????????????????

          starNode.name = "star1";
          starNode.setPosition(0, 0);
          var starSprite = starNode.addComponent(cc.Sprite); //??????????????????

          starSprite.spriteFrame = sprite; //??????????????????????????????

          starSprite.sizeMode = 'CUSTOM';
          starSprite.node.width = cc.winSize.width;
          starSprite.node.height = cc.winSize.height;
          starNode.opacity = 0;
          container.addChild(starNode); //????????????????????????

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
  //??????????????????????????????
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
  //?????????????????????????????????
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
          (0, _common.Toast)("?????????????????????", 1500);
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
          (0, _common.Toast)("?????????????????????", 1500);
        }
      })["catch"](function (err) {
        console.error(err);

        _common.Loading.hide();
      });
    }
  },
  getUserInfo: function getUserInfo() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      //????????????appId?????????????????????????????????
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
                  //??????????????????
                  wx.cloud.callFunction({
                    name: 'addUser',
                    data: {
                      appId: window.user.appId,
                      nickName: window.loginInfo.nickName ? window.loginInfo.nickName : '??????' + window.user.appId.substring(window.user.appId.length - 5),
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
    var that = this; //??????????????????

    (0, _common.wxLogin)(function (res) {
      window.loginInfo = {
        avatarUrl: res.avatarUrl,
        nickName: res.nickName
      };
    }, function () {
      console.log('????????????');
    }, this.loginplay.node); //??????????????????

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
        var titString = '?????????????????????????????????????????????';
        wx.shareAppMessage({
          title: titString,
          // imageUrl: data.url,
          query: '??????'
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
        if (window.setting.touchMove) touchMove.string = '??????????????????';else touchMove.string = '??????????????????';
        if (window.setting.clickMove) clickMove.string = '??????????????????';else clickMove.string = '??????????????????';
        if (window.setting.relast) relast.string = '??????????????????';else relast.string = '??????????????????';
        if (window.setting.music) music.string = '????????????';else music.string = '????????????';
        cc.find('settingContain/touchMove', newMyPrefab).on('click', function () {
          if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            wx.getStorage({
              key: 'setting',
              success: function success(res) {
                //??????&????????????
                if (res.data.touchMove && res.data.clickMove) {
                  window.setting.touchMove = false;
                  touchMove.string = '??????????????????';
                } //???????????? ????????????
                else if (!res.data.touchMove && res.data.clickMove) {
                    window.setting.touchMove = true;
                    touchMove.string = '??????????????????';
                  } else {
                    //????????????????????????????????????
                    (0, _common.Toast)('??????????????????????????????!', 1500);
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
                //??????&????????????
                if (res.data.touchMove && res.data.clickMove) {
                  window.setting.clickMove = false;
                  clickMove.string = '??????????????????';
                } //???????????? ????????????
                else if (res.data.touchMove && !res.data.clickMove) {
                    window.setting.clickMove = true;
                    clickMove.string = '??????????????????';
                  } else {
                    //????????????????????????????????????
                    (0, _common.Toast)('??????????????????????????????!', 1500);
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
                //????????????
                if (res.data.relast) {
                  window.setting.relast = false;
                  relast.string = '??????????????????';
                } else {
                  window.setting.relast = true;
                  relast.string = '??????????????????';
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
                //????????????
                if (res.data.music) {
                  window.setting.music = false;
                  music.string = '????????????';
                } else {
                  window.setting.music = true;
                  music.string = '????????????';
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
      var sysInfo = wx.getSystemInfoSync(); //???????????????

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJiZ011c2ljIiwibW92ZU11c2ljIiwiY3JlYXRlU2NlbnNlVXBsb2FkQWQiLCJza2lwTGV2ZWxBZCIsImF1ZGl0TGV2ZWxBZCIsImNoZWNrU29sdXRpb25MZXZlbEFkIiwiZ2FtZUNpcmNsZSIsImRlc3Ryb3kiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsImNsb3VkIiwiaW5pdCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwiYWRVbml0SWQiLCJtdWx0aXRvbiIsIm9uRXJyb3IiLCJlcnIiLCJ1c2VyIiwiY2xhc3NpY3NMZXZlbE51bSIsIm5ldExldmVsTnVtIiwibGV2ZWxJbmRleCIsImJnVXJsQmFzZSIsImxldmVsRmluaXNoTnVtIiwibG9naW5JbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbmVTYXlMYWJlbCIsInR5cGUiLCJMYWJlbCIsImxvZ2lucGxheSIsIkJ1dHRvbiIsInZpc2l0b3JwbGF5IiwibWFpblJhbmsiLCJsZXZlbExheW91dCIsIlByZWZhYiIsInJldmlld0xheW91dCIsInJldmlld0xldmVsIiwiYnVpbGRMZXZlbCIsInNldHRpbmciLCJtYWluU2hhcmUiLCJyYW5rSXRlbSIsIm9uTG9hZCIsIm1haW5CaW5kRXZlbnQiLCJmcm9tIiwiZ2FtZSIsIm9uIiwiRVZFTlRfU0hPVyIsInBhdXNlZCIsInBhdXNlIiwicGxheSIsInN0YXJ0IiwidGhhdCIsIkxvYWRpbmciLCJzaG93IiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInRoZW4iLCJyZXMiLCJyZXN1bHQiLCJ0b3RhbCIsImhpZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZW1vdmVTdG9yYWdlIiwia2V5IiwibG9hZEltZyIsIm9uZVNheSIsImdldFVzZXJJbmZvIiwiaW5pdFNldHRpbmciLCJjb250YWluZXIiLCJmaW5kIiwiaW1nU2VydmVVcmwiLCJpbWdVcmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImltYWdlcyIsInVybGJhc2UiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlRnJhbWUiLCJzdGFyTm9kZSIsIk5vZGUiLCJzZXRQb3NpdGlvbiIsInN0YXJTcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzaXplTW9kZSIsIm5vZGUiLCJ3aWR0aCIsIndpblNpemUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiYWRkQ2hpbGQiLCJvcGFjaXR5VGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJvcGVuIiwic2VuZCIsInVybCIsImdldENvbXBvbmVudCIsInN0cmluZyIsImhpdG9rb3RvIiwibmV3WEhSIiwibG9naW5MZXZlbExpc3QiLCJsb2dpblR5cGUiLCJDYW52YXNOb2RlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImxvYWRlciIsImxvYWRSZXMiLCJ2aXNpdG9yTGV2ZWxMaXN0Iiwic2hvd1Jldmlld0xldmVsIiwicmV2aWV3UGFnZSIsInJldmlld1BhZ2VTaXplIiwiY29udGVudCIsInJlbW92ZUZyb21QYXJlbnQiLCJyZXNvdXJjZSIsInJlbmRlclJldmlld0xldmVsTGlzdCIsInBhZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRJdGVtTnVtIiwiY2hpbGRyZW5Db3VudCIsImRhdGEiLCJsZW5ndGgiLCJpIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIiwidXNlU3RlcE51bSIsInBvcnRyYWl0IiwidCIsInd4TG9naW5CdG4iLCJzZXRTdG9yYWdlIiwic3VjY2VzcyIsInVwbG9hZEluZm8iLCJyZXZpZXdJZCIsIl9pZCIsImFwcElkIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzaG93TWFpblJhbmsiLCJyYW5rUGFnZSIsInJhbmtQYWdlU2l6ZSIsInJlbmRlck1haW5SYW5rTGlzdCIsImdldFN0b3JhZ2UiLCJyb2xlcyIsImZhaWwiLCJvcGVuaWQiLCJzdWJzdHJpbmciLCJBcnJheSIsInRpdFN0cmluZyIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicXVlcnkiLCJ0b3VjaE1vdmUiLCJjbGlja01vdmUiLCJyZWxhc3QiLCJtdXNpYyIsImNvbXBsZXRlIiwic2V0TXVzaWMiLCJzeXNJbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJjcmVhdGVHYW1lQ2x1YkJ1dHRvbiIsImljb24iLCJzdHlsZSIsImxlZnQiLCJ3aW5kb3dXaWR0aCIsInRvcCIsIndpbmRvd0hlaWdodCIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0IiwidXNlV2ViQXVkaW9JbXBsZW1lbnQiLCJyZXNvdXJjZXMiLCJsb2FkIiwiQXVkaW9DbGlwIiwiY2xpcCIsInNyYyIsImxvb3AiLCJwbGF5YmFja1JhdGUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQStDQTs7QUEvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsR0FBUCxHQUFhLHlCQUFiO0FBQ0FELE1BQU0sQ0FBQ0UsT0FBUCxHQUFlLElBQWY7QUFDQUYsTUFBTSxDQUFDRyxTQUFQLEdBQWlCLElBQWpCO0FBQ0FILE1BQU0sQ0FBQ0ksb0JBQVAsR0FBOEIsSUFBOUI7QUFDQUosTUFBTSxDQUFDSyxXQUFQLEdBQXFCLElBQXJCO0FBQ0FMLE1BQU0sQ0FBQ00sWUFBUCxHQUFzQixJQUF0QjtBQUNBTixNQUFNLENBQUNPLG9CQUFQLEdBQThCLElBQTlCO0FBQ0FQLE1BQU0sQ0FBQ1EsVUFBUCxHQUFv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LElBQWpCO0FBQ0F4TSxRQUFBQSxNQUFNLENBQUNHLFNBQVAsQ0FBaUJNLE9BQWpCO0FBQ0g7O0FBQ0RULE1BQUFBLE1BQU0sQ0FBQ0UsT0FBUCxHQUFpQixJQUFqQjtBQUNBRixNQUFBQSxNQUFNLENBQUNHLFNBQVAsR0FBbUIsSUFBbkI7QUFDSDtBQUNKO0FBM3JCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxud2luZG93LmVudiA9IFwiY2xvdWQxLTVndmJ1aXkzZGQ5OWY2M2NcIlxyXG53aW5kb3cuYmdNdXNpYz1udWxsO1xyXG53aW5kb3cubW92ZU11c2ljPW51bGw7XHJcbndpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCA9IG51bGw7XHJcbndpbmRvdy5za2lwTGV2ZWxBZCA9IG51bGw7XHJcbndpbmRvdy5hdWRpdExldmVsQWQgPSBudWxsO1xyXG53aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQgPSBudWxsO1xyXG53aW5kb3cuZ2FtZUNpcmNsZSA9IG51bGw7XHJcbmlmKHdpbmRvdy5hdWRpdExldmVsQWQpIHdpbmRvdy5hdWRpdExldmVsQWQuZGVzdHJveSgpO1xyXG5pZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgIHd4LmNsb3VkLmluaXQoe2Vudjogd2luZG93LmVudn0pXHJcbiAgICAvL+W5v+WRiuWIneWni+WMllxyXG4gICAgaWYgKHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKXtcclxuICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC1kNDA4ZWFkZjlhYzljMGE5JyxcclxuICAgICAgICAgICAgbXVsdGl0b246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdpbmRvdy5za2lwTGV2ZWxBZC5vbkVycm9yKGVyciA9PiB7fSk7XHJcbiAgICAgICAgd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtMTEwZDA5N2RmNWJjOGViMCcsXHJcbiAgICAgICAgICAgIG11bHRpdG9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQub25FcnJvcihlcnIgPT4ge30pO1xyXG4gICAgICAgIHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCA9IHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcclxuICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtZTdmMjNiNTJjOWQ1OTMxNSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZC5vbkVycm9yKGVyciA9PiB7d2luZG93LmNyZWF0ZVNjZW5zZVVwbG9hZEFkID1udWxsO30pO1xyXG4gICAgfVxyXG59XHJcbndpbmRvdy51c2VyID0ge307XHJcbndpbmRvdy5jbGFzc2ljc0xldmVsTnVtID0gMDtcclxud2luZG93Lm5ldExldmVsTnVtID0gMDtcclxud2luZG93LmxldmVsSW5kZXggPSAwO1xyXG53aW5kb3cuYmdVcmxCYXNlID0gJyc7XHJcbndpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gMDtcclxud2luZG93LmxvZ2luSW5mbyA9IHtcclxuICAgIGF2YXRhclVybDogbnVsbCxcclxuICAgIG5pY2tOYW1lOiBudWxsXHJcbn07XHJcbndpbmRvdy5nYW1lQ2lyY2xlID0gbnVsbDtcclxuXHJcbmltcG9ydCB7d3hMb2dpbixUb2FzdCxMb2FkaW5nLGZvcm1hdGVSYW5rVGltZX0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG9uZVNheUxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpbnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICB2aXNpdG9ycGxheTogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5SYW5rOiBjYy5CdXR0b24sXHJcbiAgICAgICAgbGV2ZWxMYXlvdXQ6IGNjLlByZWZhYixcclxuICAgICAgICByZXZpZXdMYXlvdXQ6IGNjLlByZWZhYixcclxuICAgICAgICByZXZpZXdMZXZlbDogY2MuQnV0dG9uLFxyXG4gICAgICAgIGJ1aWxkTGV2ZWw6IGNjLkJ1dHRvbixcclxuICAgICAgICBzZXR0aW5nOiBjYy5CdXR0b24sXHJcbiAgICAgICAgbWFpblNoYXJlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgcmFua0l0ZW06Y2MuUHJlZmFiLFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMOkUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8v5Yqg6L295LiA6KiAXHJcbiAgICAgICAgLy8gIHRoaXMub25lU2F5KCk7XHJcbiAgICAgICAgIHRoaXMubWFpbkJpbmRFdmVudCgpO1xyXG4gICAgICAgICB3aW5kb3cuZnJvbSA9ICdtYWluJztcclxuICAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumHjeaWsOi/lOWbnua4uOaIj1wiKTtcclxuICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmICF3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiB3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBsYXkoKTtcclxuICAgICAgICAgfSx0aGlzKTtcclxuICAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcblxyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdnZXRDbGFzc2ljc0xldmVsTnVtJ1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQudG90YWw7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMubG9hZEltZygpO1xyXG4gICAgICAgIHRoaXMub25lU2F5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB0aGlzLmluaXRTZXR0aW5nKCk7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBsb2FkSW1nOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9iaW5nQmcnKTsvL+WbvueJh+WRiOeOsOS9jee9rlxyXG4gICAgICAgIHZhciBpbWdTZXJ2ZVVybCA9ICdodHRwczovL3d3dy5iaW5nLmNvbS9IUEltYWdlQXJjaGl2ZS5hc3B4P2Zvcm1hdD1qcyZpZHg9MCZuPTEnO1xyXG4gICAgICAgIHZhciBpbWdVcmwgPSAnJztcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGltZ1VybCA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlICsgJ183MjB4MTI4MC5qcGcnXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmdVcmxCYXNlID0gJ2h0dHBzOi8vY24uYmluZy5jb20nICsgcmVzcG9uc2UuaW1hZ2VzWzBdLnVybGJhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoaW1nVXJsLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yib5bu65LiA5Liq5L2/55So5Zu+54mH6LWE5rqQ55qE5paw6IqC54K55a+56LGhXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJOb2RlID0gbmV3IGNjLk5vZGUoKTsgLy/liJvlu7rkuIDkuKrmlrDoioLngrlcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5uYW1lID0gXCJzdGFyMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLnNldFBvc2l0aW9uKDAsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJTcHJpdGUgPSBzdGFyTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTsgLy/lop7liqDnsr7ngbXnu4Tku7ZcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlOyAvL+iuvue9rueyvueBtee7hOS7tuWbvueJh+i1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUuc2l6ZU1vZGUgPSAnQ1VTVE9NJztcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLm5vZGUud2lkdGggPSBjYy53aW5TaXplLndpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLmhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHN0YXJOb2RlKTsgLy/lnLrmma/kuK3lop7liqDmlrDoioLngrlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wYWNpdHlUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3BhY2l0eT49MjU1KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwob3BhY2l0eVRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sNSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCBpbWdTZXJ2ZVVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0sXHJcbiAgICBvbmVTYXkoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly92MS5oaXRva290by5jbi9cIjtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgbGV0IG9uZVNheUxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9tYWluQmcvb25lU2F5XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgIGlmKHRoYXQub25lU2F5TGFiZWwgJiYgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCkgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICBlbHNlIGlmKG9uZVNheUxhYmVsICYmIG9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsICkgb25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIHRoaXMub25lU2F5TGFiZWwubm9kZS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgbmV3WEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIG5ld1hIUi5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3WEhSLnJlYWR5U3RhdGUgPT0gNCAmJiAobmV3WEhSLnN0YXR1cyA+PSAyMDAgJiYgbmV3WEhSLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZShuZXdYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGF0Lm9uZVNheUxhYmVsICYmIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwpIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9uZVNheUxhYmVsICYmIG9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsICkgb25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbmV3WEhSLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgbmV3WEhSLnNlbmQoKTtcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgfSxcclxuICAgIC8v5o6I5p2D55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICBsb2dpbkxldmVsTGlzdCgpe1xyXG5cclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3dlY2hhdCc7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIC8v5LiN55m75b2V55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICB2aXNpdG9yTGV2ZWxMaXN0KCl7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2dpblR5cGUgPSAndmlzaXRvcic7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGV2ZWxMaXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbExheW91dCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTGlzdCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jldmlld0xldmVsKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgdmFyIHJldmlld1BhZ2UgPSAxLHJldmlld1BhZ2VTaXplID0gNTA7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjYy5maW5kKCdyZXZpZXdMZXZlbExpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscmV2aWV3UGFnZSxyZXZpZXdQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJSZXZpZXdMZXZlbExpc3QoY29udGVudCxyZXZpZXdQYWdlLHJldmlld1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5maW5kKCdyZXZpZXdMZXZlbExpc3QnLG5ld015UHJlZmFiKS5vbignYm91bmNlLWJvdHRvbScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXZpZXdQYWdlKys7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclJldmlld0xldmVsTGlzdChjb250ZW50LHJldmlld1BhZ2UscmV2aWV3UGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyZXZpZXdMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMucmVzdWx0LmRhdGFbaS0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhhdC5yYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5rSXRlbSA9PSBudWxsKSByYW5rSXRlbSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZFJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkrY3VycmVudEl0ZW1OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZERhdGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZvcm1hdGVSYW5rVGltZShkYXRhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS51c2VTdGVwTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZGF0YS5wb3J0cmFpdCsnP2FhYT1hYS5qcGcnLCAgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIrZGF0YS5uaWNrTmFtZStcIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub24oJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih0KXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy53eExvZ2luQnRuICkgd2luZG93Lnd4TG9naW5CdG4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3Jldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mbyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ3Jldmlldyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJldmlld0lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZEluZm8uYXBwSWQgPSBkYXRhLmFwcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRJbmZvLm5pY2tOYW1lID0gZGF0YS5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mby5wb3J0cmFpdCA9IGRhdGEucG9ydHJhaXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKGkpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5oZWlnaHQgPSBjb250ZW50LmNoaWxkcmVuQ291bnQgKiByYW5rSXRlbS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuayoeacieabtOWkmuaVsOaNruS6hlwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBzaG93TWFpblJhbmsoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICB2YXIgcmFua1BhZ2UgPSAxLHJhbmtQYWdlU2l6ZSA9IDUwO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2MuZmluZCgncmFua0xpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBjYy5maW5kKCdyYW5rTGlzdCcsbmV3TXlQcmVmYWIpLm9uKCdib3VuY2UtYm90dG9tJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgcmFua1BhZ2UrKztcclxuICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCByYW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAxOyBpPD0gcmVzLnJlc3VsdC5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSAgcmVzLnJlc3VsdC5kYXRhW2ktMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhhdC5yYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmtJdGVtID09IG51bGwpIHJhbmtJdGVtID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRSYW5rJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpK2N1cnJlbnRJdGVtTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZERhdGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZvcm1hdGVSYW5rVGltZShkYXRhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnBvcnRyYWl0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGRhdGEucG9ydHJhaXQrJz9hYWE9YWEuanBnJywgIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdtYXNrL0ltYWdlJyxub2RlLmdldENoaWxkQnlOYW1lKCd0ZFBvcnRyYWl0JykpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5uaWNrTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZE5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiK2RhdGEubmlja05hbWUrXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5oZWlnaHQgPSBjb250ZW50LmNoaWxkcmVuQ291bnQgKiByYW5rSXRlbS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuayoeacieabtOWkmuaVsOaNruS6hlwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bnvJPlrZhhcHBJZOWIpOaWreaYr+WQpuesrOS4gOasoei/m+WFpea4uOaIj1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2FwcElkJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5hcHBJZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5jbGFzc2ljc0xldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubmV0TGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0ubmV0TGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5yb2xlcyA9IHJlcy5yZXN1bHQuZGF0YVswXS5yb2xlcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGVycil7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYXBwSWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOnJlcy5yZXN1bHQub3BlbmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuYXBwSWQgPSByZXMucmVzdWx0Lm9wZW5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmNsYXNzaWNzTGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubmV0TGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIucm9sZXMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+azqOWGjOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZFVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZT8gd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXNlci5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVzZXIuYXBwSWQubGVuZ3RoLTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmNsYXNzaWNzTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5ldExldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5yb2xlcyA9IHJlcy5yZXN1bHQuZGF0YVswXS5yb2xlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1haW5CaW5kRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy/mt7vliqDmjojmnYPmjInpkq5cclxuICAgICAgICB3eExvZ2luKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvZ2luSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybDogcmVzLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiByZXMubmlja05hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2D5aSx6LSlJylcclxuICAgICAgICB9LHRoaXMubG9naW5wbGF5Lm5vZGUpO1xyXG4gICAgICAgIC8v5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgaWYodGhpcy5sb2dpbnBsYXkgPT0gbnVsbCkgdGhpcy5sb2dpbnBsYXkgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2xvZ2lucGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5sb2dpbnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLmxvZ2luTGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMudmlzaXRvcnBsYXkgPT0gbnVsbCkgdGhpcy52aXNpdG9ycGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvdmlzaXRvcnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMudmlzaXRvcnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLnZpc2l0b3JMZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5tYWluUmFuayA9PSBudWxsKSB0aGlzLm1haW5SYW5rID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluUmFuaycpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5tYWluUmFuay5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2hvd01haW5SYW5rLCB0aGlzKVxyXG5cclxuICAgICAgICBpZih0aGlzLnJldmlld0xldmVsID09IG51bGwpIHRoaXMucmV2aWV3TGV2ZWwgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL3Jldmlld0xldmVsJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLnJldmlld0xldmVsLm5vZGUub24oJ2NsaWNrJywgdGhpcy5zaG93UmV2aWV3TGV2ZWwsIHRoaXMpXHJcblxyXG4gICAgICAgIGlmKHRoaXMuYnVpbGRMZXZlbCA9PSBudWxsKSB0aGlzLmJ1aWxkTGV2ZWwgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2J1aWxkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuYnVpbGRMZXZlbC5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWwgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgaWYod2luZG93Lnd4TG9naW5CdG4gKSB3aW5kb3cud3hMb2dpbkJ0bi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJ1aWxkXCIpO1xyXG5cclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMubWFpblNoYXJlID09IG51bGwpIHRoaXMubWFpblNoYXJlID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluU2hhcmUnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLm1haW5TaGFyZS5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICflv6vmnaXmjJHmiJjigJznm4rmmbrmjqjnrrHigJ3lsI/muLjmiI/lkKfvvIEnO1xyXG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5zZXR0aW5nID09IG51bGwpIHRoaXMuc2V0dGluZyA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvc2V0dGluZycpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZy5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2Nsb3NlU2V0dGluZycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL3RvdWNoTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlja01vdmUgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9jbGlja01vdmUvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVsYXN0ID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vcmVsYXN0L0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG11c2ljID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vbXVzaWMvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcudG91Y2hNb3ZlKSB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB0b3VjaE1vdmUuc3RyaW5nID0gJ+W8gOWQr+inpuaRuOenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5jbGlja01vdmUpIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJztcclxuICAgICAgICAgICAgICAgIGVsc2UgY2xpY2tNb3ZlLnN0cmluZyA9ICflvIDlkK/mjInplK7np7vliqgnO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcucmVsYXN0KSByZWxhc3Quc3RyaW5nID0gJ+WFs+mXreWbnumAgOWKn+iDvSc7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlbGFzdC5zdHJpbmcgPSAn5byA5ZCv5Zue6YCA5Yqf6IO9JztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLm11c2ljKSBtdXNpYy5zdHJpbmcgPSAn5YWz6Zet6Z+z5pWIJztcclxuICAgICAgICAgICAgICAgIGVsc2UgbXVzaWMuc3RyaW5nID0gJ+W8gOWQr+mfs+aViCc7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuCbngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcudG91Y2hNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuOWFs+mXrSDngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCFyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcudG91Y2hNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflhbPpl63op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o+Q56S66Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfoh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI8hJywxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9jbGlja01vdmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG4JueCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5jbGlja01vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlLnN0cmluZyA9ICflvIDlkK/mjInplK7np7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG45YWz6ZetIOeCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmICFyZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5jbGlja01vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmUuc3RyaW5nID0gJ+WFs+mXreaMiemUruenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DnpLroh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8jyEnLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vcmVsYXN0JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57pgIDlip/og71cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5yZWxhc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5yZWxhc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXN0LnN0cmluZyA9ICflvIDlkK/lm57pgIDlip/og70nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnJlbGFzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGFzdC5zdHJpbmcgPSAn5YWz6Zet5Zue6YCA5Yqf6IO9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9tdXNpYycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zue6YCA5Yqf6IO9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubXVzaWMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5tdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXNpYy5zdHJpbmcgPSAn5byA5ZCv6Z+z5pWIJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5tdXNpYyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljLnN0cmluZyA9ICflhbPpl63pn7PmlYgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnc2V0dGluZ0RpYWxvZycsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcbiAgICAgICAgICAgIH0sIHRoaXMpXHJcblxyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgJiYgIXdpbmRvdy5nYW1lQ2lyY2xlKXtcclxuICAgICAgICAgICAgbGV0IHN5c0luZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICAvL+a4uOaIj+WciOaMiemSrlxyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZUNpcmNsZSA9ICB3eC5jcmVhdGVHYW1lQ2x1YkJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAoc3lzSW5mby53aW5kb3dXaWR0aCowLjkpLTIwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc3lzSW5mby53aW5kb3dIZWlnaHQqMC4xMixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuICAgIGluaXRTZXR0aW5nKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdXNpYzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogd2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRNdXNpYygpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLm11c2ljKXtcclxuICAgICAgICAgICAgaWYoIXdpbmRvdy5iZ011c2ljIHx8ICF3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCh7dXNlV2ViQXVkaW9JbXBsZW1lbnQ6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJtdXNpYy9iZ19tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYmdNdXNpYy5zcmMgPWNsaXAudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmICF3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwibXVzaWMvbW92ZV9tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLnNyYyA9Y2xpcC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5sb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5wbGF5YmFja1JhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmJnTXVzaWMgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
