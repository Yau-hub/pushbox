
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnVpbGQuanMiXSwibmFtZXMiOlsid2luZG93IiwiZWxlU2l6ZSIsImxheW91dCIsIkFycmF5IiwiYmxvY2tOdW0iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJsb2NrIiwidHlwZSIsIlByZWZhYiIsImRpc3BsYXlOYW1lIiwid2FsbCIsImJveCIsImJhbGwiLCJyb2xlVXAiLCJyb2xlUmlnaHQiLCJyb2xlRG93biIsInJvbGVMZWZ0IiwicG9zaXRpb24iLCJnYW1lQm4iLCJTcHJpdGUiLCJib3hOdW0iLCJzZWxlY3RFbGUiLCJ3YWxsRWxlIiwiYm94RWxlIiwiYmFsbEVsZSIsInVwRWxlIiwicmlnaHRFbGUiLCJkb3duRWxlIiwibGVmdEVsZSIsIm9uTG9hZCIsInRoYXQiLCJpbml0V2luRWxlIiwicmVuZGVyQmciLCJmcm9tIiwid3giLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsInJlcyIsImJ1aWxkTGV2ZWwiLCJkYXRhIiwicmVuZGVyTGF5b3V0IiwiZmluZCIsIm5vZGUiLCJoZWlnaHQiLCJ3aW5TaXplIiwid2lkdGgiLCJzdGFydCIsImFkZEV2ZW50IiwicmVuZGVyU2VsZWN0RWxlIiwicmVhbFNpeiIsImkiLCJuIiwieCIsInkiLCJzaWduIiwiY292ZXIiLCJpbml0UG9zaXRpb24iLCJsZW5ndGgiLCJzdGFydFgiLCJzdGFydFkiLCJuZXdCbG9jayIsImluc3RhbnRpYXRlIiwic2V0UG9zaXRpb24iLCJhZGRDaGlsZCIsInJlbmRlckJuIiwiZ2V0Q29tcG9uZW50IiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImJnVXJsQmFzZSIsImVyciIsInRleHR1cmUiLCJzcHJpdGUiLCJTcHJpdGVGcmFtZSIsInJlY3QiLCJzcHJpdGVGcmFtZSIsIm9uIiwiYmFjayIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJiYWxsTnVtIiwicm9sZU51bSIsInNldFN0b3JhZ2UiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImV2ZW50IiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsInRvdWNoUG9pbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsImNvbG9yIiwiQ29sb3IiLCJmcm9tSEVYIiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBakI7QUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLElBQUlDLEtBQUosRUFBaEI7QUFDQUgsTUFBTSxDQUFDSSxRQUFQLEdBQWtCLEVBQWxCO0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZOO0FBR0hDLE1BQUFBLFdBQVcsRUFBQztBQUhULEtBREM7QUFNUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUDtBQUdGQyxNQUFBQSxXQUFXLEVBQUM7QUFIVixLQU5FO0FBV1JFLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRlI7QUFHREMsTUFBQUEsV0FBVyxFQUFDO0FBSFgsS0FYRztBQWdCUkcsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGTCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUDtBQUdGQyxNQUFBQSxX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QUFDQXFGLFlBQUFBLFlBQVksQ0FBQ3BDLFdBQWIsQ0FBeUJWLENBQXpCLEVBQTJCQyxDQUEzQjtBQUNBLGlCQUFLWCxJQUFMLENBQVVxQixRQUFWLENBQW1CbUMsWUFBbkI7QUFDQTs7QUFDSixlQUFLLENBQUw7QUFDSSxnQkFBSUMsV0FBVyxHQUFHbEcsRUFBRSxDQUFDNEQsV0FBSCxDQUFlLEtBQUsvQyxRQUFwQixDQUFsQjtBQUNBcUYsWUFBQUEsV0FBVyxDQUFDckMsV0FBWixDQUF3QlYsQ0FBeEIsRUFBMEJDLENBQTFCO0FBQ0EsaUJBQUtYLElBQUwsQ0FBVXFCLFFBQVYsQ0FBbUJvQyxXQUFuQjtBQUNBOztBQUNKLGVBQUssQ0FBTDtBQUNJLGdCQUFJQyxXQUFXLEdBQUduRyxFQUFFLENBQUM0RCxXQUFILENBQWUsS0FBSzlDLFFBQXBCLENBQWxCO0FBQ0FxRixZQUFBQSxXQUFXLENBQUN0QyxXQUFaLENBQXdCVixDQUF4QixFQUEwQkMsQ0FBMUI7QUFDQSxpQkFBS1gsSUFBTCxDQUFVcUIsUUFBVixDQUFtQnFDLFdBQW5CO0FBQ0E7QUF4Q1I7QUEwQ0g7QUFDSjtBQUVKO0FBbFpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQge0xvYWRpbmcsIFRvYXN0fSBmcm9tIFwiLi9jb21tb25cIjtcclxud2luZG93LmVsZVNpemUgPSAzNTtcclxud2luZG93LmxheW91dCA9IG5ldyBBcnJheSgpO1xyXG53aW5kb3cuYmxvY2tOdW0gPSAxMjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBibG9jazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidibG9jaydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTond2FsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidib3gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWxsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JhbGwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlVXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVVwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZVJpZ2h0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVSaWdodCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVEb3duOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVEb3duJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZUxlZnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZUxlZnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnYW1lQm46Y2MuU3ByaXRlLFxyXG4gICAgICAgIGJveE51bTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RFbGU6IDEsXHJcbiAgICAgICAgd2FsbEVsZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgYm94RWxlOmNjLlByZWZhYixcclxuICAgICAgICBiYWxsRWxlOmNjLlByZWZhYixcclxuICAgICAgICB1cEVsZTpjYy5QcmVmYWIsXHJcbiAgICAgICAgcmlnaHRFbGU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIGRvd25FbGU6Y2MuUHJlZmFiLFxyXG4gICAgICAgIGxlZnRFbGU6Y2MuUHJlZmFiLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0V2luRWxlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJCZygpO1xyXG4gICAgICAgIC8vIHRoaXMucmVuZGVyQm4oKTtcclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnZ2FtZScpe1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTonYnVpbGRMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWwgPSByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5idWlsZExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZmluZCgnYnRucycsdGhpcy5ub2RlKS5oZWlnaHQgPSAgKGNjLndpblNpemUuaGVpZ2h0IC0gY2Mud2luU2l6ZS53aWR0aCkvMjtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclNlbGVjdEVsZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIGluaXRXaW5FbGUoKXtcclxuICAgICAgICBsZXQgcmVhbFNpeiA9IGNjLndpblNpemUud2lkdGgvd2luZG93LmJsb2NrTnVtO1xyXG4gICAgICAgIHdpbmRvdy5lbGVTaXplID0gcmVhbFNpejtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgd2luZG93LmxheW91dFtpXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHt4OjAseTowLHNpZ246MCxjb3ZlcjpudWxsfVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0gPSB7eDowLHk6MCxzaWduOjAsY292ZXI6bnVsbH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbml0UG9zaXRpb24obGF5b3V0KXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge307XHJcbiAgICAgICAgdGhpcy5ib3hOdW0gPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8bGF5b3V0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IGxheW91dFswXS5sZW5ndGg7IG4rKyl7XHJcbiAgICAgICAgICAgICAgICAvL2xheW91dFtpXVtuXS5zaWduIC0tIOS6uueJqeS9jee9rlxyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W2ldW25dLnNpZ24gPT0gNCB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA1IHx8IGxheW91dFtpXVtuXS5zaWduID09IDYgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/nrrHlrZDmlbDph49cclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFtpXVtuXS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94TnVtICsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICByZW5kZXJCZygpe1xyXG4gICAgICAgIGxldCBzdGFydFggPSAtKGNjLndpblNpemUud2lkdGgvMik7XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9ICh3aW5kb3cuZWxlU2l6ZSp3aW5kb3cuYmxvY2tOdW0pLzI7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gbip3aW5kb3cuZWxlU2l6ZSArIHN0YXJ0WDtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gLWkqd2luZG93LmVsZVNpemUgKyBzdGFydFk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldW25dID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeSxcclxuICAgICAgICAgICAgICAgICAgICBzaWduOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6bnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAvLyDkuLrorr7nva7kvY3nva5cclxuICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAvLyDlsIbmlrDlop7nmoToioLngrnmt7vliqDliLAgQ2FudmFzIOiKgueCueS4i+mdolxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0Jsb2NrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyQm4oKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lQm4gPT0gbnVsbCkgdGhpcy5nYW1lQm4gPSBjYy5maW5kKCdDYW52YXMvYnVpbGRCZy9nYW1lQm4nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHdpbmRvdy5iZ1VybEJhc2UrICdfNDAweDI0MC5qcGcnLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUsIGNjLnJlY3QoMCwwLDQwMCwyNDApKTtcclxuICAgICAgICAgICAgdGhhdC5nYW1lQm4uc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBhZGRFdmVudCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZih0aGlzLndhbGxFbGUgPT0gbnVsbCkgdGhpcy53YWxsRWxlID0gIGNjLmZpbmQoJ2J0bnMvd2FsbFdyYXAnLHRoaXMubm9kZSk7XHJcbiAgICAgICAgaWYodGhpcy5ib3hFbGUgPT0gbnVsbCkgdGhpcy5ib3hFbGUgPSAgY2MuZmluZCgnYnRucy9ib3hXcmFwJyx0aGlzLm5vZGUpXHJcbiAgICAgICAgaWYodGhpcy5iYWxsRWxlID09IG51bGwpIHRoaXMuYmFsbEVsZSA9ICBjYy5maW5kKCdidG5zL2JhbGxXcmFwJyx0aGlzLm5vZGUpXHJcbiAgICAgICAgaWYodGhpcy51cEVsZSA9PSBudWxsKSB0aGlzLnVwRWxlID0gIGNjLmZpbmQoJ2J0bnMvdXBXcmFwJyx0aGlzLm5vZGUpXHJcbiAgICAgICAgaWYodGhpcy5yaWdodEVsZSA9PSBudWxsKSB0aGlzLnJpZ2h0RWxlID0gIGNjLmZpbmQoJ2J0bnMvcmlnaHRXcmFwJyx0aGlzLm5vZGUpXHJcbiAgICAgICAgaWYodGhpcy5kb3duRWxlID09IG51bGwpIHRoaXMuZG93bkVsZSA9ICBjYy5maW5kKCdidG5zL2Rvd25XcmFwJyx0aGlzLm5vZGUpXHJcbiAgICAgICAgaWYodGhpcy5sZWZ0RWxlID09IG51bGwpIHRoaXMubGVmdEVsZSA9ICBjYy5maW5kKCdidG5zL2xlZnRXcmFwJyx0aGlzLm5vZGUpXHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ2JhY2snLHRoaXMubm9kZSkub24oJ2NsaWNrJyx0aGlzLmJhY2ssIHRoaXMpXHJcbiAgICAgICAgY2MuZmluZCgnYnRucy9jbGVhcicsdGhpcy5ub2RlKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoYXQuaW5pdFdpbkVsZSgpO1xyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckJnKCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuXHJcbiAgICAgICAgY2MuZmluZCgnYnRucy9wbGF5Jyx0aGlzLm5vZGUpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm94TnVtID0wLGJhbGxOdW0gPSAwLHJvbGVOdW0gPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveE51bSArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduID09IDMgfHwgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uY292ZXIgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsTnVtICsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPj0gNCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlTnVtICsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPT0gd2luZG93LmJsb2NrTnVtLTEgJiYgbiA9PSB3aW5kb3cuYmxvY2tOdW0tMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyb2xlTnVtPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5pyq5re75Yqg5Lq654mpJywxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJveE51bSAhPSBiYWxsTnVtKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn566x5a2Q5ZKM55CD5L2T5pWw6YeP5LiN5LiA6Ie0JywxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihib3hOdW0gPCAzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn566x5a2Q5pWw6YeP5LiN6IO95bCR5LqO5LiJ5LiqJywxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdidWlsZExldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB3aW5kb3cuYnVpbGRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2J1aWxkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8v5LiW55WM5Z2Q5qCHXHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKClcclxuICAgICAgICAgICAgLy/mnKzlnLDlnZDmoIdcclxuICAgICAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSBjYy5maW5kKCdDYW52YXMnKS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIC8v54K55Ye75pS+572u5Yy65Z+fXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yig6Zmk5YmN6Z2i5re75Yqg55qE5Lq654mpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxheW91dFswXVswXS54IDw9IHRvdWNoUG9pbnQueCAmJiB0b3VjaFBvaW50LnggPD0gd2luZG93LmxheW91dFswXVt3aW5kb3cuYmxvY2tOdW0tMV0ueCArIHdpbmRvdy5lbGVTaXplICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbMF1bMF0ueSA+PSB0b3VjaFBvaW50LnkgJiYgdG91Y2hQb2ludC55ID49IHdpbmRvdy5sYXlvdXRbd2luZG93LmJsb2NrTnVtLTFdW3dpbmRvdy5ibG9ja051bS0xXS55IC0gd2luZG93LmVsZVNpemVcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuc2VsZWN0RWxlID49IDQgJiYgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dLmNvdmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL+aUvue9ruWFg+e0oFxyXG4gICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sYXlvdXRbaV1bbl0ueCA8PSB0b3VjaFBvaW50LnggJiYgdG91Y2hQb2ludC54IDw9IHdpbmRvdy5sYXlvdXRbaV1bbl0ueCArIHdpbmRvdy5lbGVTaXplICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0ueSA+PSB0b3VjaFBvaW50LnkgJiYgdG91Y2hQb2ludC55ID49IHdpbmRvdy5sYXlvdXRbaV1bbl0ueSAtIHdpbmRvdy5lbGVTaXplXHJcbiAgICAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgaWYoIXdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gfHwgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dLnNpZ24gPSB0aGF0LnNlbGVjdEVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYod2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9PSAzICYmIHdpbmRvdy5idWlsZExldmVsW2ldW25dLmNvdmVyID09IG51bGwgJiYgKHRoYXQuc2VsZWN0RWxlICE9IDEgJiYgdGhhdC5zZWxlY3RFbGUgIT0gMykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uc2lnbiA9IHRoYXQuc2VsZWN0RWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWxbaV1bbl0uY292ZXIgPSB0aGF0LnNlbGVjdEVsZTtcclxuICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbFtpXVtuXS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsW2ldW25dLmNvdmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5idWlsZExldmVsKVxyXG5cclxuICAgICAgICAgICAgLy/ngrnlh7vmlL7nva7lhYPntKBcclxuICAgICAgICAgICAgaWYodGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnggPD0gbG9jYXRpb24ueFxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueCA8PSAgdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLngrdGhhdC53YWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICB0aGF0LndhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueSA8PSBsb2NhdGlvbi55XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi55IDw9ICB0aGF0LndhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueSt0aGF0LndhbGxFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuaGVpZ2h0XHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdEVsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclNlbGVjdEVsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoXHJcbiAgICAgICAgICAgICAgICB0aGF0LmJveEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQuYm94RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLngrdGhhdC5ib3hFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHRoYXQuYm94RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC5ib3hFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueSt0aGF0LmJveEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5oZWlnaHRcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0RWxlID0gMjtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyU2VsZWN0RWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihcclxuICAgICAgICAgICAgICAgIHRoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQuYmFsbEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC5iYWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC5iYWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC5iYWxsRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKFxyXG4gICAgICAgICAgICAgICAgdGhhdC51cEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQudXBFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueCt0aGF0LnVwRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICB0aGF0LnVwRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC51cEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55K3RoYXQudXBFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuaGVpZ2h0XHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdEVsZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclNlbGVjdEVsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoXHJcbiAgICAgICAgICAgICAgICB0aGF0LnJpZ2h0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnggPD0gbG9jYXRpb24ueFxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueCA8PSAgdGhhdC5yaWdodEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQucmlnaHRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHRoYXQucmlnaHRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueSA8PSBsb2NhdGlvbi55XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi55IDw9ICB0aGF0LnJpZ2h0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC5yaWdodEVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5oZWlnaHRcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0RWxlID0gNTtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyU2VsZWN0RWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihcclxuICAgICAgICAgICAgICAgIHRoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54IDw9IGxvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICYmIGxvY2F0aW9uLnggPD0gIHRoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54K3RoYXQuZG93bkVsZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhhdC5kb3duRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkgPD0gbG9jYXRpb24ueVxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueSA8PSAgdGhhdC5kb3duRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnkrdGhhdC5kb3duRWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmhlaWdodFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RFbGUgPSA2O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJTZWxlY3RFbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKFxyXG4gICAgICAgICAgICAgICAgdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnggPD0gbG9jYXRpb24ueFxyXG4gICAgICAgICAgICAgICAgJiYgbG9jYXRpb24ueCA8PSAgdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLngrdGhhdC5sZWZ0RWxlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLndpZHRoICYmXHJcbiAgICAgICAgICAgICAgICB0aGF0LmxlZnRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueSA8PSBsb2NhdGlvbi55XHJcbiAgICAgICAgICAgICAgICAmJiBsb2NhdGlvbi55IDw9ICB0aGF0LmxlZnRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueSt0aGF0LmxlZnRFbGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuaGVpZ2h0XHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbGVjdEVsZSA9IDc7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclNlbGVjdEVsZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgfSxcclxuICAgIHJlbmRlclNlbGVjdEVsZSgpe1xyXG4gICAgICAgIHRoaXMud2FsbEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjOTVENTJGXCIpO1xyXG4gICAgICAgIHRoaXMuYm94RWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcbiAgICAgICAgdGhpcy5iYWxsRWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5NUQ1MkZcIik7XHJcbiAgICAgICAgdGhpcy51cEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjOTVENTJGXCIpO1xyXG4gICAgICAgIHRoaXMucmlnaHRFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzk1RDUyRlwiKTtcclxuICAgICAgICB0aGlzLmRvd25FbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzk1RDUyRlwiKTtcclxuICAgICAgICB0aGlzLmxlZnRFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzk1RDUyRlwiKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKHRoaXMuc2VsZWN0RWxlKXtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53YWxsRWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3hFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbGxFbGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0ZGRkZGRlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwRWxlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93bkVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdEVsZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJhY2soKXtcclxuICAgICAgICB3aW5kb3cuZnJvbSA9ICdidWlsZCdcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlckxheW91dChsYXlvdXQpe1xyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSB3aW5kb3cubGF5b3V0W2ldW25dLng7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHdpbmRvdy5sYXlvdXRbaV1bbl0ueTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChsYXlvdXRbaV1bbl0uc2lnbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0Jsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3V2FsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMud2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1dhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1dhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdCb3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JveC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Qm94KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0JhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlVXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVVcC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZVVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZVJpZ2h0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlUmlnaHQuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1JvbGVSaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVEb3duID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVEb3duLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVMZWZ0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlTGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVMZWZ0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlTGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxMYXlvdXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsZXZlbEl0ZW0iLCJQcmVmYWIiLCJsZXZlbExpc3QiLCJsZXZlbExpc3RDb250ZW4iLCJsZXZlbFNyb2xsVmlldyIsImNsYXNzaWNzTGV2ZWxCdG4iLCJCdXR0b24iLCJuZXRMZXZlbEJ0biIsImNsb3NlTGV2ZWxCdG4iLCJvbkxvYWQiLCJzdGFydCIsImZpbmQiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJsb2FkQ2xhc3NpY3NMZXZlbExpc3QiLCJsb2FkTmV0TGV2ZWxMaXN0IiwiY2xvc2VMZXZlbExheW91dCIsImNsYXNzaWNlQnRuTGFiZWwiLCJjb2xvciIsIm5ldEJ0bkxhYmVsIiwib3BhY2l0eSIsIndpbmRvdyIsImxldmVsQ2xhc3NpZnkiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJ0aGF0IiwibGV2ZWxIIiwibGV2ZWxSb3ciLCJsZXZlbFRvdGFsIiwiY2xhc3NpY3NMZXZlbE51bSIsImkiLCJpbnN0YW50aWF0ZSIsImluZGV4TGV2ZWwiLCJ1c2VyIiwibGV2ZWxGaW5pc2hOdW0iLCJyb2xlcyIsImluY2x1ZGVzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJMYWJlbCIsInN0cmluZyIsInQiLCJsZXZlbEluZGV4Iiwid3hMb2dpbkJ0biIsImRlc3Ryb3kiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImFkZENoaWxkIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJoZWlnaHQiLCJuZXRMZXZlbE51bSIsInVzZXJJbmZvIiwibG9nIiwicmVtb3ZlRnJvbVBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFF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QUEsTUFBTSxJQUFJZCxJQUFJLENBQUNzQyxNQUFMLEdBQWMsRUFBeEI7QUFDSDtBQWpDUzs7QUFpQmQsU0FBSSxJQUFJcEIsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDRixVQUFmLEVBQTRCRSxDQUFDLEVBQTdCLEVBQWdDO0FBQUEsYUFBeEJBLENBQXdCO0FBaUIvQjs7QUFDRCxTQUFLM0IsZUFBTCxDQUFxQitDLE1BQXJCLEdBQThCeEIsTUFBOUI7QUFDSCxHQXBISTtBQXFITFQsRUFBQUEsZ0JBckhLLDhCQXFIYTtBQUNkLFNBQUtMLElBQUwsQ0FBVTBDLGdCQUFWO0FBQ0EsU0FBSzFDLElBQUwsQ0FBVStCLE9BQVY7QUFDSCxHQXhISSxDQTBITDs7QUExSEssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgbGV2ZWxJdGVtOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgbGV2ZWxMaXN0Om51bGwsXHJcbiAgICAgICAgbGV2ZWxMaXN0Q29udGVuOm51bGwsXHJcbiAgICAgICAgbGV2ZWxTcm9sbFZpZXc6bnVsbCxcclxuICAgICAgICBjbGFzc2ljc0xldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgICAgICBuZXRMZXZlbEJ0bjpjYy5CdXR0b24sXHJcbiAgICAgICAgY2xvc2VMZXZlbEJ0bjpjYy5CdXR0b24sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0ID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldy92aWV3L2NvbnRlbnQvaXRlbUxpc3QnLHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmxldmVsTGlzdENvbnRlbiA9IGNjLmZpbmQoJ2xldmVsTGlzdC9sZXZlbFNjcm9sbFZpZXcvdmlldy9jb250ZW50Jyx0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5sZXZlbFNyb2xsVmlldyA9IGNjLmZpbmQoJ2xldmVsTGlzdC9sZXZlbFNjcm9sbFZpZXcnLHRoaXMubm9kZSlcclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMuY2xhc3NpY3NMZXZlbEJ0biA9PSBudWxsKSB0aGlzLmNsYXNzaWNzTGV2ZWxCdG4gPSBjYy5maW5kKCdsZXZlbExpc3QvY2xhc3NpZnkvY2xhc3NpY3NMZXZlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmKHRoaXMubmV0TGV2ZWxCdG4gPT0gbnVsbCkgdGhpcy5uZXRMZXZlbEJ0biA9IGNjLmZpbmQoJ2xldmVsTGlzdC9jbGFzc2lmeS9uZXRMZXZlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIGlmKHRoaXMuY2xvc2VMZXZlbEJ0biA9PSBudWxsKSB0aGlzLmNsb3NlTGV2ZWxCdG4gPSBjYy5maW5kKCdjbG9zZUxldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5jbGFzc2ljc0xldmVsQnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5sb2FkQ2xhc3NpY3NMZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5uZXRMZXZlbEJ0bi5ub2RlLm9uKCdjbGljaycsIHRoaXMubG9hZE5ldExldmVsTGlzdCwgdGhpcylcclxuICAgICAgICB0aGlzLmNsb3NlTGV2ZWxCdG4ubm9kZS5vbignY2xpY2snLHRoaXMuY2xvc2VMZXZlbExheW91dCwgdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkQ2xhc3NpY3NMZXZlbExpc3QoKTtcclxuXHJcblxyXG4gICAgfSxcclxuICAgIGxvYWRDbGFzc2ljc0xldmVsTGlzdCgpe1xyXG4gICAgICAgIC8vIOiuvue9ruWIh+aNouWFs+WNoeexu+Wei+aMiemSrumAieS4rVxyXG4gICAgICAgIGxldCBjbGFzc2ljZUJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5jbGFzc2ljc0xldmVsQnRuLm5vZGUpO1xyXG4gICAgICAgIGNsYXNzaWNlQnRuTGFiZWwuY29sb3IgPSBjYy5jb2xvcigyMDIsMTIyLDApO1xyXG4gICAgICAgIGxldCBuZXRCdG5MYWJlbCA9IGNjLmZpbmQoJ0JhY2tncm91bmQvTGFiZWwnLHRoaXMubmV0TGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgbmV0QnRuTGFiZWwuY29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgbmV0QnRuTGFiZWwub3BhY2l0eSA9IDEyNTtcclxuXHJcbiAgICAgICAgd2luZG93LmxldmVsQ2xhc3NpZnkgPSAnY2xhc3NpY3NMZXZlbCc7XHJcblxyXG4gICAgICAgIC8v5riF56m65YWz5Y2h6KOC5Y+YXHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3QuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBsZXZlbEggPSAwO1xyXG4gICAgICAgIGxldCBsZXZlbFJvdyA9IDEwO1xyXG4gICAgICAgIGxldCBsZXZlbFRvdGFsID0gd2luZG93LmNsYXNzaWNzTGV2ZWxOdW07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGxldmVsVG90YWwgOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxJdGVtKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4TGV2ZWwgPSBpKzE7XHJcbiAgICAgICAgICAgIGlmKGluZGV4TGV2ZWwgPD0gIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtKzEgfHwgd2luZG93LnVzZXIucm9sZXMgJiYgd2luZG93LnVzZXIucm9sZXMuaW5jbHVkZXMoJ2FkbWluJykpe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxOdW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGluZGV4TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdsZXZlbExvY2snKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsSW5kZXggPSBpbmRleExldmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sZXZlbExpc3QuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA8PSBsZXZlbFJvdyl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbFJvdyA9IE1hdGguZmxvb3IobGV2ZWxUb3RhbCAvIE1hdGguZmxvb3IodGhpcy5sZXZlbExpc3RDb250ZW4ud2lkdGggLyBub2RlLndpZHRoKSAtMSk7XHJcbiAgICAgICAgICAgICAgICBsZXZlbEggKz0gbm9kZS5oZWlnaHQgKyA3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxldmVsTGlzdENvbnRlbi5oZWlnaHQgPSBsZXZlbEg7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkTmV0TGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgLy8g6K6+572u5YiH5o2i5YWz5Y2h57G75Z6L5oyJ6ZKu6YCJ5LitXHJcbiAgICAgICAgbGV0IGNsYXNzaWNlQnRuTGFiZWwgPSBjYy5maW5kKCdCYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgY2xhc3NpY2VCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICBjbGFzc2ljZUJ0bkxhYmVsLm9wYWNpdHkgPSAxMjU7XHJcbiAgICAgICAgbGV0IG5ldEJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5uZXRMZXZlbEJ0bi5ub2RlKTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDIwMiwxMjIsMCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sZXZlbENsYXNzaWZ5ID0gJ25ldExldmVsJztcclxuXHJcbiAgICAgICAgLy/muIXnqbrlhbPljaHoo4Llj5hcclxuICAgICAgICB0aGlzLmxldmVsTGlzdC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxldmVsSCA9IDA7XHJcbiAgICAgICAgbGV0IGxldmVsUm93ID0gMTA7XHJcbiAgICAgICAgbGV0IGxldmVsVG90YWwgPSB3aW5kb3cubmV0TGV2ZWxOdW07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGxldmVsVG90YWwgOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxJdGVtKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4TGV2ZWwgPSBpKzE7XHJcbiAgICAgICAgICAgIGlmKGluZGV4TGV2ZWwgPD0gd2luZG93LnVzZXJJbmZvLmNsYXNzaWNzTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxOdW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGluZGV4TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdsZXZlbExvY2snKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxldmVsTGlzdC5hZGRDaGlsZChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygnbGV2ZWw6JyArIGluZGV4TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBpZihpbmRleExldmVsIDw9IGxldmVsUm93KXtcclxuICAgICAgICAgICAgICAgIGxldmVsUm93ID0gTWF0aC5mbG9vcihsZXZlbFRvdGFsIC8gTWF0aC5mbG9vcih0aGlzLmxldmVsTGlzdENvbnRlbi53aWR0aCAvIG5vZGUud2lkdGgpIC0xKTtcclxuICAgICAgICAgICAgICAgIGxldmVsSCArPSBub2RlLmhlaWdodCArIDcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0Q29udGVuLmhlaWdodCA9IGxldmVsSDtcclxuICAgIH0sXHJcbiAgICBjbG9zZUxldmVsTGF5b3V0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
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
    skipLevel: null
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
    } //是否开启回退功能


    if (window.setting.relast && cc.sys.platform === cc.sys.WECHAT_GAME) {
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
          }
        }
      }
    }

    if (window.moveMusic && !window.moveMusic.paused) window.moveMusic.stop();
    if (window.moveMusic && !window.moveMusic.paused) window.moveMusic.pause();
    if (window.moveMusic) window.moveMusic.play();
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
  showResult: function showResult(type) {
    var that = this;

    if (that.timeCounterTimer) {
      clearInterval(that.timeCounterTimer);
      that.timeCounterTimer = null;
    }

    if (window.from == "review") {
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

      if (window.from != 'build') {
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

      if (window.from == 'build') {
        cc.find('contentBg/next/Background/Label', newMyPrefab).getComponent(cc.Label).string = '上传关卡';
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
                nickName: window.loginInfo.nickName ? window.loginInfo.nickName : '游客' + window.user.appId.substring(window.user.appId.length - 5),
                portrait: window.loginInfo.avatarUrl
              }
            }).then(function (result) {
              var levelUploadNum = parseInt(res.result.total) + 1;
              window.from = 'game';

              _common.Loading.hide();

              if (window.createScenseUploadAd) {
                (0, _common.Toast)('关卡上传成功待审核，关闭广告后跳回主界面', 2000);
                setTimeout(function () {
                  window.createScenseUploadAd.show();
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
            })["catch"](function (err) {
              _common.Loading.hide();

              (0, _common.Toast)('上传失败', 1500);
              console.error(err);
            });
          })["catch"](function (err) {
            console.error(err);
          });
        }, this);
      }

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
    if (window.from == "build") return;

    if (type == 'skip') {
      that.stepCounterValue = '9999';
      that.timeCounterValue = '9999';
    } //上传分数


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

    if (window.from == 'review') cc.find('gameBtns/backStep/Background/Label', this.node).getComponent(cc.Label).string = '通过';else if (!window.setting.relast) cc.find('gameBtns/backStep/Background/Label', this.node).getComponent(cc.Label).string = '重玩';
    cc.find('gameBtns/backStep', this.node).on('click', function () {
      //审核关卡通过
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
                    nickName: window.uploadInfo.nickName ? window.uploadInfo.nickName : '游客' + window.uploadInfo.appId.substring(window.uploadInfo.appId.length - 5),
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
                    (0, _common.Toast)('关卡' + levelUploadNum + '上传成功，即将跳回主界面', 1500);
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

                  (0, _common.Toast)('上传失败', 1500);
                  console.error(err);
                });
              })["catch"](function (err) {
                console.error(err);
              });
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
        that.initPendant();
      }
    }, this);
    if (window.from == 'review') cc.find('gameBtns/menu/Background/Label', this.node).getComponent(cc.Label).string = '驳回';
    cc.find('gameBtns/menu', this.node).on("click", function () {
      clearInterval(that.timeCounterTimer);
      that.timeCounterTimer = null; //审核关卡驳回

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
                (0, _common.Toast)('关卡已驳回，即将跳回主界面', 1500);
                setTimeout(function () {
                  _common.Loading.hide();

                  window.from = 'game';
                  cc.director.loadScene('main');
                }, 1500);
              });
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
          that.initPendant();
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
            if (window.levelIndex == 1) (0, _common.Toast)('Tip: 可滑动屏幕控制人物', 5000); //跳过关卡

            if (window.skipLevelAd) {
              var skipNode = new cc.Node('skipNode');
              skipNode.setAnchorPoint(0, 1);
              var skipLevelLabel = skipNode.addComponent(cc.Label);
              skipLevelLabel.node.setPosition(cc.winSize.width / 2 - cc.winSize.width * 0.2, cc.winSize.width / 2 + 80);
              skipLevelLabel.string = '跳过此关？';
              that.skipLevel = skipNode.getComponent(cc.Label);
              that.node.addChild(skipNode);
              var enableSkip = true;
              that.skipLevel.node.on('touchend', function () {
                if (!enableSkip) return;
                enableSkip = false;
                if (window.skipLevelAd) (0, _common.Toast)("观看广告至结束后跳过此关卡", 2000);else {
                  (0, _common.Toast)("广告拉取失败", 1500);
                  return;
                }
                setTimeout(function () {
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
                      that.showResult('skip');
                    } else {// 播放中途退出，不下发游戏奖励
                    }
                  });
                  enableSkip = true;
                }, 1500);
              }, that);
            }
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

    if (window.from == 'review') {
      cc.director.loadScene("main");
    } else if (window.from) {
      cc.director.loadScene(window.from);
    } else {
      cc.director.loadScene("main");
    }

    window.from = 'game';
  },
  renderLastScore: function renderLastScore(step, time) {
    if (window.from == 'build' || window.from == "review") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZUxheW91dC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXJyZW50TGV2ZWwiLCJlbGVTaXplIiwibGF5b3V0IiwiQXJyYXkiLCJibG9ja051bSIsInVwbG9hZExldmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibG9jayIsInR5cGUiLCJQcmVmYWIiLCJkaXNwbGF5TmFtZSIsIndhbGwiLCJib3giLCJiYWxsIiwicm9sZVVwIiwicm9sZVJpZ2h0Iiwicm9sZURvd24iLCJyb2xlTGVmdCIsInBvc2l0aW9uIiwiZ2FtZUJuIiwiU3ByaXRlIiwiYm94TnVtIiwic3RlcENvdW50ZXIiLCJzdGVwQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXIiLCJ0aW1lQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXJUaW1lciIsImxldmVsQ291bnRlciIsIm1vdmVIaXN0b3J5TGlzdCIsImxhc3RTY29yZSIsImxhc3RTdGVwTm9kZSIsImxhc3RUaW1lbm9kZSIsInJhbmtJdGVtIiwiYnVpbGRBcmVhIiwic2tpcExldmVsIiwib25Mb2FkIiwidGhhdCIsImluaXRXaW5FbGUiLCJyZW5kZXJCZyIsImluaXRMZXZlbCIsImZpbmQiLCJub2RlIiwiaGVpZ2h0Iiwid2luU2l6ZSIsIndpZHRoIiwic3RhcnQiLCJhZGRUb3VjaE1vdmUiLCJwZW5kYW50QWRkRXZlbnQiLCJyZWFsU2l6IiwiaSIsIm4iLCJ4IiwieSIsInNpZ24iLCJjb3ZlciIsImluaXRQb3NpdGlvbiIsImxlbmd0aCIsInN0YXJ0WCIsInN0YXJ0WSIsIm5ld0Jsb2NrIiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsImFkZENoaWxkIiwicmVuZGVyQm4iLCJnZXRDb21wb25lbnQiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiYmdVcmxCYXNlIiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwicmVjdCIsInNwcml0ZUZyYW1lIiwicmVuZGVyTGF5b3V0IiwiZGVzdHJveUFsbENoaWxkcmVuIiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0IiwibW92ZVVwIiwicmVzZXRQb3NpdGlvbiIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJkaXJlY3Rpb24iLCJzZXR0aW5nIiwicmVsYXN0Iiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJzdWNjZXNzIiwicmVzdWx0IiwiZ2V0U3RvcmFnZSIsInJlcyIsInB1c2giLCJzdHJpbmciLCJjb3ZlckJveE51bSIsInNob3dSZXN1bHQiLCJtb3ZlTXVzaWMiLCJwYXVzZWQiLCJzdG9wIiwicGF1c2UiLCJwbGF5IiwidG91Y2hNb3ZlIiwiZmlndXJlTG9jYXRpb24iLCJvbiIsImV2ZW50IiwiZ2V0TG9jYXRpb24iLCJlbmRMb2NhdGlvbiIsIk1hdGgiLCJhYnMiLCJjbGVhckludGVydmFsIiwiZnJvbSIsIkNhbnZhc05vZGUiLCJjb25zb2xlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJMYWJlbCIsImxldmVsSW5kZXgiLCJjbGFzc2ljc0xldmVsTnVtIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsImluaXRQZW5kYW50IiwiTG9hZGluZyIsInNob3ciLCJjbG91ZCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJ0aGVuIiwiY29udGVudCIsInVzZVN0ZXBOdW0iLCJ0b3RhbCIsImFwcElkIiwidXNlciIsIm5pY2tOYW1lIiwibG9naW5JbmZvIiwic3Vic3RyaW5nIiwicG9ydHJhaXQiLCJhdmF0YXJVcmwiLCJsZXZlbFVwbG9hZE51bSIsInBhcnNlSW50IiwiaGlkZSIsImNyZWF0ZVNjZW5zZVVwbG9hZEFkIiwic2V0VGltZW91dCIsIm9uQ2xvc2UiLCJlcnJvciIsInJlcGxheUxheW91dCIsInNob3dMZXZlbFJhbmsiLCJ0aXRTdHJpbmciLCJzaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInF1ZXJ5IiwibG9hZGVyIiwibG9hZFJlcyIsInVzZVN0ZXAiLCJ1c2VUaW1lIiwicmVuZGVyTGFzdFNjb3JlIiwiY3VyTGV2ZWxOdW0iLCJsZXZlbEZpbmlzaE51bSIsImZhaWwiLCJsZXZlbE5vZGUiLCJOb2RlIiwic2V0QW5jaG9yUG9pbnQiLCJhZGRDb21wb25lbnQiLCJmb250U2l6ZSIsImVuYWJsZUJvbGQiLCJsaW5lSGVpZ2h0IiwibGV2ZWxCeSIsInRpbWVOb2RlIiwic2V0SW50ZXJ2YWwiLCJiaW5kIiwic3BsaWNlIiwiYmFjayIsImNsaWNrTW92ZSIsIm9wYWNpdHkiLCJwYXNzd29yZCIsIkVkaXRCb3giLCJ0ZXh0TGFiZWwiLCJ1cGxvYWRJbmZvIiwiX2lkIiwicmV2aWV3SWQiLCJwb3AiLCJsZXZlbENsYXNzaWZ5Iiwic2tpcExldmVsQWQiLCJza2lwTm9kZSIsInNraXBMZXZlbExhYmVsIiwiZW5hYmxlU2tpcCIsImxvYWQiLCJvZmZDbG9zZSIsImlzRW5kZWQiLCJ1bmRlZmluZWQiLCJzdGVwIiwidGltZSIsInJhbmtQYWdlIiwicmFua1BhZ2VTaXplIiwicmVzb3VyY2UiLCJyZW5kZXJMZXZlbFJhbmtMaXN0IiwicGFnZSIsInBhZ2VTaXplIiwiY3VycmVudEl0ZW1OdW0iLCJjaGlsZHJlbkNvdW50IiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9BOztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxNQUFNLENBQUNDLFlBQVAsR0FBc0IsRUFBdEI7QUFFQUQsTUFBTSxDQUFDRSxPQUFQLEdBQWlCLEVBQWpCO0FBQ0FGLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixJQUFJQyxL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QWdCekMsTUFBbkMsRUFBMkNQLENBQUMsRUFBNUMsRUFBK0M7QUFBQSxnQkFDdkNnRCxJQUR1Qzs7QUFBQTtBQWlCOUM7O0FBQ0Q2QyxVQUFBQSxPQUFPLENBQUNwRyxNQUFSLEdBQWlCb0csT0FBTyxDQUFDdUUsYUFBUixHQUF3QnJMLFFBQVEsQ0FBQ1UsTUFBbEQ7QUFDSCxTQXBCRCxNQW9CSztBQUNELDZCQUFNLFNBQU4sRUFBZ0IsSUFBaEI7QUFDSDtBQUdKLE9BbkNELFdBbUNTLFVBQUEwQixHQUFHLEVBQUk7QUFDWnNELFFBQUFBLE9BQU8sQ0FBQ29DLEtBQVIsQ0FBYzFGLEdBQWQ7O0FBQ0FvRSx3QkFBUWtCLElBQVI7QUFDSCxPQXRDRDtBQXVDSDtBQUVKO0FBNzJDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7Zm9ybWF0ZVJhbmtUaW1lLCBMb2FkaW5nLCBUb2FzdH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbndpbmRvdy5jdXJyZW50TGV2ZWwgPSBbXTtcclxuXHJcbndpbmRvdy5lbGVTaXplID0gMzU7XHJcbndpbmRvdy5sYXlvdXQgPSBuZXcgQXJyYXkoKTtcclxud2luZG93LmJsb2NrTnVtID0gMTI7XHJcbndpbmRvdy51cGxvYWRMZXZlbCA9IG51bGw7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJsb2NrOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2Jsb2NrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2FsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOid3YWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JveCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYmFsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVVcDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlVXAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlUmlnaHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVJpZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZURvd246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZURvd24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlTGVmdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlTGVmdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdhbWVCbjpjYy5TcHJpdGUsXHJcbiAgICAgICAgYm94TnVtOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBDb3VudGVyOm51bGwsXHJcbiAgICAgICAgc3RlcENvdW50ZXJWYWx1ZTogMCxcclxuICAgICAgICB0aW1lQ291bnRlcjpudWxsLFxyXG4gICAgICAgIHRpbWVDb3VudGVyVmFsdWU6MCxcclxuICAgICAgICB0aW1lQ291bnRlclRpbWVyOm51bGwsXHJcbiAgICAgICAgbGV2ZWxDb3VudGVyOiBudWxsLFxyXG4gICAgICAgIG1vdmVIaXN0b3J5TGlzdDpbXSxcclxuICAgICAgICBsYXN0U2NvcmU6IG51bGwsXHJcbiAgICAgICAgbGFzdFN0ZXBOb2RlOiBudWxsLFxyXG4gICAgICAgIGxhc3RUaW1lbm9kZTogbnVsbCxcclxuICAgICAgICByYW5rSXRlbTpjYy5QcmVmYWIsXHJcbiAgICAgICAgYnVpbGRBcmVhOm51bGwsXHJcbiAgICAgICAgc2tpcExldmVsOm51bGxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdFdpbkVsZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblvZPliY3lhbPljaFcclxuICAgICAgICB0aGlzLmluaXRMZXZlbCgpO1xyXG4gICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zJyx0aGlzLm5vZGUpLmhlaWdodCA9ICAoY2Mud2luU2l6ZS5oZWlnaHQgLSBjYy53aW5TaXplLndpZHRoKS8yO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLmFkZFRvdWNoTW92ZSgpO1xyXG4gICAgICAgIHRoaXMucGVuZGFudEFkZEV2ZW50KCk7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgaW5pdFdpbkVsZSgpe1xyXG4gICAgICAgIHRoaXMuYnVpbGRBcmVhID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9idWlsZEFyZWEnKTtcclxuICAgICAgICBsZXQgcmVhbFNpeiA9IGNjLndpblNpemUud2lkdGgvd2luZG93LmJsb2NrTnVtO1xyXG4gICAgICAgIHdpbmRvdy5lbGVTaXplID0gcmVhbFNpejtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCB3aW5kb3cuYmxvY2tOdW07IG4rKyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldW25dID0ge3g6MCx5OjAsc2lnbjowLGNvdmVyOm51bGx9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdFBvc2l0aW9uKGxheW91dCl7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt9O1xyXG4gICAgICAgIHRoaXMuYm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGxheW91dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCBsYXlvdXRbMF0ubGVuZ3RoOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgLy9sYXlvdXRbaV1bbl0uc2lnbiAtLSDkurrniankvY3nva5cclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFtpXVtuXS5zaWduID09IDQgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNSB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA2IHx8IGxheW91dFtpXVtuXS5zaWduID09IDcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v566x5a2Q5pWw6YePXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveE51bSArKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyQmcoKXtcclxuICAgICAgICBsZXQgc3RhcnRYID0gLShjYy53aW5TaXplLndpZHRoLzIpO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSAod2luZG93LmVsZVNpemUqd2luZG93LmJsb2NrTnVtKS8yO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCB3aW5kb3cuYmxvY2tOdW07IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IG4qd2luZG93LmVsZVNpemUgKyBzdGFydFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IC1pKndpbmRvdy5lbGVTaXplICsgc3RhcnRZO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbjowLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgLy8g5Li66K6+572u5L2N572uXHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld0Jsb2NrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlckJuKCl7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lQm4gPT0gbnVsbCkgdGhpcy5nYW1lQm4gPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2dhbWVCbicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUod2luZG93LmJnVXJsQmFzZSsgJ180MDB4MjQwLmpwZycsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSwgY2MucmVjdCgwLDAsNDAwLDI0MCkpO1xyXG4gICAgICAgICAgICB0aGF0LmdhbWVCbi5zcHJpdGVGcmFtZSA9IHNwcml0ZTsgLy/orr7nva7nsr7ngbXnu4Tku7blm77niYfotYTmupBcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlckxheW91dChsYXlvdXQpe1xyXG4gICAgICAgIHRoaXMuYnVpbGRBcmVhLmRlc3Ryb3lBbGxDaGlsZHJlbigpXHJcbiAgICAgICAgdGhpcy5yZW5kZXJCZygpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG4gPCB3aW5kb3cuYmxvY2tOdW07IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHdpbmRvdy5sYXlvdXRbaV1bbl0ueDtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gd2luZG93LmxheW91dFtpXVtuXS55O1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGxheW91dFtpXVtuXS5zaWduKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1dhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdXYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1dhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdCb3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JveC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdCb3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdCYWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5iYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmFsbC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdCYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZVVwID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlVXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlVXAuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Um9sZVVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZVJpZ2h0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlUmlnaHQuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Um9sZVJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZURvd24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvbGVEb3duKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZURvd24uc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Um9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlTGVmdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlTGVmdC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdSb2xlTGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtb3ZlVXAobGF5b3V0KXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li656m6XHJcbiAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4iuS4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ktMV1beF0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4iuS4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ktMV1beF0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDkuIrkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3ktMl1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeS0xXVt4XS5jb3ZlcikgbGF5b3V0W3ktMV1beF0uY292ZXIgPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiK5LiA5qC855CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3ktMl1beF0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMl1beF0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeS0xXVt4XS5jb3ZlcikgbGF5b3V0W3ktMV1beF0uY292ZXIgPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4iuS4gOagvOS4uueQg1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ktMV1beF0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uY292ZXIgPSA0O1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcblxyXG4gICAgfSxcclxuICAgIG1vdmVEb3duKGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgICAgIC8v5LiL5LiA5qC85Li656m6XHJcbiAgICAgICAgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qC85Li65aKZ5L2TXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDEpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDY7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4i+S4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDkuIvkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3krMl1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeSsxXVt4XS5jb3ZlcikgbGF5b3V0W3krMV1beF0uY292ZXIgPSA2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDkuIvkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsyXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsyXVt4XS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5KzFdW3hdLmNvdmVyKSBsYXlvdXRbeSsxXVt4XS5jb3ZlciA9IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2Rvd24nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLmNvdmVyID0gNjtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcblxyXG4gICAgfSxcclxuICAgIG1vdmVMZWZ0KGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgICAgIC8v5bem5LiA5qC85Li656m6XHJcbiAgICAgICAgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5bem5LiA5qC85Li65aKZ5L2TXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0xXS5zaWduID09IDEpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5bem5LiA5qC85Li6566x5a2QXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0xXS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAvL+euseWtkOW3puS4gOagvOS4uuepulxyXG4gICAgICAgICAgICBpZihsYXlvdXRbeV1beC0yXS5zaWduID09IDApe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMl0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5XVt4LTFdLmNvdmVyKSBsYXlvdXRbeV1beC0xXS5jb3ZlciA9IDc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOW3puS4gOagvOS4uueQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTJdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0yXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTJdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3gtMV0uY292ZXIpIGxheW91dFt5XVt4LTFdLmNvdmVyID0gNztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uueQg1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uY292ZXIgPSA3O1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v56e75Yqo5ZCO5Zue5pi+55CD5L2TXHJcbiAgICAgICAgaWYobGF5b3V0W3ldW3hdLnNpZ24gPT0gMCAmJiBsYXlvdXRbeV1beF0uY292ZXIgJiYgbGF5b3V0W3ldW3hdLmNvdmVyICE9IDIpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDM7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5jb3ZlciA9IG51bGw7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcbiAgICB9LFxyXG4gICAgbW92ZVJpZ2h0KGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgICAgIC8v5Y+z5LiA5qC85Li656m6XHJcbiAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPs+S4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3grMV0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPs+S4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3grMV0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDlj7PkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMl0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beCsxXS5jb3ZlcikgbGF5b3V0W3ldW3grMV0uY292ZXIgPSA1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5Y+z5LiA5qC85Li655CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3grMl0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3grMl0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beCsxXS5jb3ZlcikgbGF5b3V0W3ldW3grMV0uY292ZXIgPSA1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPs+S4gOagvOS4uueQg1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3grMV0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beCsxXS5zaWduID0gNTtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uY292ZXIgPSA1O1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyICYmIGxheW91dFt5XVt4XS5jb3ZlciAhPSAyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgfSxcclxuICAgIHJlc2V0UG9zaXRpb24oZGlyZWN0aW9uKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5piv5ZCm5byA5ZCv5Zue6YCA5Yqf6IO9XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zZXR0aW5nLnJlbGFzdCAmJiBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGVwQ291bnRlclZhbHVlICsrO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RlcENvdW50ZXIuc3RyaW5nID0gXCLmraXmlbDvvJpcIiArIHRoaXMuc3RlcENvdW50ZXJWYWx1ZTtcclxuICAgICAgICBsZXQgY292ZXJCb3hOdW0gPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8d2luZG93LmN1cnJlbnRMZXZlbC5sZW5ndGggOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuPHdpbmRvdy5jdXJyZW50TGV2ZWxbMF0ubGVuZ3RoIDsgbisrKXtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5jdXJyZW50TGV2ZWxbaV1bbl0uY292ZXIgJiYgd2luZG93LmN1cnJlbnRMZXZlbFtpXVtuXS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlckJveE51bSArKztcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJveE51bSA9PSBjb3ZlckJveE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmjJHmiJjmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cubW92ZU11c2ljICYmICF3aW5kb3cubW92ZU11c2ljLnBhdXNlZCkgd2luZG93Lm1vdmVNdXNpYy5zdG9wKCk7XHJcbiAgICAgICAgaWYod2luZG93Lm1vdmVNdXNpYyAmJiAhd2luZG93Lm1vdmVNdXNpYy5wYXVzZWQpIHdpbmRvdy5tb3ZlTXVzaWMucGF1c2UoKTtcclxuICAgICAgICBpZih3aW5kb3cubW92ZU11c2ljKSB3aW5kb3cubW92ZU11c2ljLnBsYXkoKTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVG91Y2hNb3ZlKCl7XHJcbiAgICAgICAgaWYoIXdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGZpZ3VyZUxvY2F0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGZpZ3VyZUxvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZW5kTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi54IC0gZW5kTG9jYXRpb24ueCkgPiBNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi55IC0gZW5kTG9jYXRpb24ueSkpe1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlj7Pmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW3pua7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUxlZnQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIrmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVVcCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4i+a7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZURvd24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jlc3VsdCh0eXBlKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyKXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGF0LnRpbWVDb3VudGVyVGltZXIpXHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwicmV2aWV3XCIpe1xyXG4gICAgICAgICAgICBUb2FzdCgn5oyR5oiY5oiQ5Yqf77yBJywxNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy91c2VUaW1lJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuatpeaVsO+8mlwiKyB0aGF0LnN0ZXBDb3VudGVyVmFsdWUrJ+atpSc7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy91c2VTdGVwJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIueUqOaXtu+8mlwiKyB0aGF0LnRpbWVDb3VudGVyVmFsdWUrJ+enkic7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tICE9ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmxldmVsSW5kZXggPj0gd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0L0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICflm57kuLvnlYzpnaInXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC50aW1lQ291bnRlclRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5LiL5LiA5YWzXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0TGV2ZWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub3BhY2l0eSA9IDA7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+S4iuS8oOWFs+WNoSc7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvbmV4dCcsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdnZXRSZXZpZXdMZXZlbE51bSdcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZFJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHdpbmRvdy51cGxvYWRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwTnVtOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogcmVzLnJlc3VsdC50b3RhbCsxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZT93aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV2ZWxVcGxvYWROdW0gPSBwYXJzZUludChyZXMucmVzdWx0LnRvdGFsKSsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5YWz5Y2h5LiK5Lyg5oiQ5Yqf5b6F5a6h5qC477yM5YWz6Zet5bm/5ZGK5ZCO6Lez5Zue5Li755WM6Z2iJywyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNyZWF0ZVNjZW5zZVVwbG9hZEFkLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNyZWF0ZVNjZW5zZVVwbG9hZEFkLm9uQ2xvc2UocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCflhbPljaHkuIrkvKDmiJDlip/lvoXnrqHnkIblkZjlrqHmoLjvvIzljbPlsIbot7Plm57kuLvnlYzpnaInLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDlpLHotKUnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvcmVwbGF5JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlcGxheUxheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9yYW5rJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5rWL6K+V5YWz5Y2h5rKh5pyJ5o6S6KGM5qacJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhhdC5zaG93TGV2ZWxSYW5rKCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3NoYXJlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICfnm4rmmbrmjqjnrrEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tICE9ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAn56ysJyt3aW5kb3cubGV2ZWxJbmRleCsn5YWzJysnLeS9v+eUqOatpeaVsO+8micrIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSArJy3mjJHmiJjmiJDlip/vvIEnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcrJ+Wwj+a4uOaIj++8jOW/q+adpeaMkeaImOWQp++8gSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZU92ZXJBbGVydCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICB9LDApXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwiYnVpbGRcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0eXBlPT0nc2tpcCcpe1xyXG4gICAgICAgICAgICB0aGF0LnN0ZXBDb3VudGVyVmFsdWUgPSAnOTk5OSc7XHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJWYWx1ZSA9ICc5OTk5JztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkvKDliIbmlbBcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgaWYgKHRoYXQubGFzdFNjb3JlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWIhuaVsOS4rS4uLicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU/d2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXNlci5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVzZXIuYXBwSWQubGVuZ3RoLTUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUodGhhdC5sYXN0U2NvcmUudXNlU3RlcCx0aGF0Lmxhc3RTY29yZS51c2VUaW1lKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB8fCB0aGF0LnRpbWVDb3VudGVyVmFsdWUgPCB0aGF0Lmxhc3RTY29yZS51c2VUaW1lXHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5zdGVwQ291bnRlclZhbHVlIDwgdGhhdC5sYXN0U2NvcmUudXNlU3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSh0aGF0Lmxhc3RTY29yZS51c2VTdGVwLHRoYXQubGFzdFNjb3JlLnVzZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDliIbmlbDkuK0uLi4nLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGVDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY3VyTGV2ZWxOdW0gPSB3aW5kb3cubGV2ZWxJbmRleDtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCAmJiByZXMucmVzdWx0LmRhdGFbMF0ubGV2ZWxGaW5pc2hOdW0gPCBjdXJMZXZlbE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSBjdXJMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwSWQgPSB3aW5kb3cudXNlci5hcHBJZDtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmxldmVsRmluaXNoTnVtID0gY3VyTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxvZ2luSW5mby5uaWNrTmFtZSkgZGF0YS5uaWNrTmFtZSA9IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwpIGRhdGEucG9ydHJhaXQgPSB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVwbGF5TGF5b3V0KCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6ICdpbml0TGV2ZWwnLFxyXG4gICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwoKXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgIGluaXRQZW5kYW50KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIC8v5YWz5Y2hXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbENvdW50ZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBsZXZlbE5vZGUgPSBuZXcgY2MuTm9kZSgnbGV2ZWxDb3VudGVyJyk7XHJcbiAgICAgICAgICAgIGxldmVsTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XHJcbiAgICAgICAgICAgIGxldmVsTm9kZS53aWR0aCA9ICBjYy53aW5TaXplLndpZHRoKjAuNztcclxuICAgICAgICAgICAgbGV2ZWxOb2RlLmhlaWdodCA9IDE4MDtcclxuICAgICAgICAgICAgLy8gbGV2ZWxOb2RlLmhvcml6b250YWxBbGlnbiA9ICdDRU5URVInXHJcbiAgICAgICAgICAgIHZhciBsZXZlbENvdW50ZXIgPSBsZXZlbE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oMCwgIChjYy53aW5TaXplLmhlaWdodC8yKSAtIChjYy53aW5TaXplLmhlaWdodCowLjA1KSk7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5mb250U2l6ZSA9IDYwO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIuZW5hYmxlQm9sZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGxldmVsQ291bnRlci5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LkNMQU1QO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIubGluZUhlaWdodCA9IDYwO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxCeSl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbENvdW50ZXIuc3RyaW5nID0gKCfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyAtICcrd2luZG93LmxldmVsQnkpLnN1YnN0cmluZygwLDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyID0gbGV2ZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYod2luZG93LmxldmVsQnkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gKCfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyAtICcrd2luZG93LmxldmVsQnkpLnN1YnN0cmluZygwLDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+a1i+ivleWFs+WNoSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdyZXZpZXcnKXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+WuoeaguOWFs+WNoSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+atpeaVsFxyXG4gICAgICAgIGlmKHRoaXMuc3RlcENvdW50ZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IGNjLk5vZGUoJ3N0ZXBDb3VudGVyJyk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciBzdGVwQ291bnRlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigtKGNjLndpblNpemUud2lkdGgvMikgKyAoY2Mud2luU2l6ZS53aWR0aCowLjA1KSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgODApO1xyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5zdHJpbmcgPSAn5q2l5pWw77yaIDAnO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBDb3VudGVyID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zdGVwQ291bnRlclZhbHVlICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcENvdW50ZXIuc3RyaW5nID0gXCLmraXmlbDvvJpcIiArIHRoaXMuc3RlcENvdW50ZXJWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+eUqOaXtlxyXG4gICAgICAgIGlmKHRoaXMudGltZUNvdW50ZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciB0aW1lTm9kZSA9IG5ldyBjYy5Ob2RlKCd0aW1lQ291bnRlcicpO1xyXG4gICAgICAgICAgICB0aW1lTm9kZS5zZXRBbmNob3JQb2ludCgwLCAxKTtcclxuICAgICAgICAgICAgdmFyIHRpbWVDb3VudGVyID0gdGltZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgdGltZUNvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigwICwgKGNjLndpblNpemUud2lkdGgvMikgKyA4MClcclxuICAgICAgICAgICAgdGltZUNvdW50ZXIuc3RyaW5nID0gJ+eUqOaXtu+8miAwJztcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlciA9IHRpbWVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRpbWVOb2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXJUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXJWYWx1ZSAgKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGlzLnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwxMDAwKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGlzLnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZUNvdW50ZXJUaW1lciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXJUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoaXMudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSwxMDAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLm1vdmVIaXN0b3J5TGlzdCA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVIaXN0b3J5TGlzdC5zcGxpY2UoMCx0aGlzLm1vdmVIaXN0b3J5TGlzdC5sZW5ndGgpXHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfSxcclxuICAgIHBlbmRhbnRBZGRFdmVudCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBjYy5maW5kKCdiYWNrJyx0aGlzLm5vZGUpLm9uKCdjbGljaycsdGhpcy5iYWNrLCB0aGlzKVxyXG4gICAgICAgIC8v5byA5ZCv54K55Ye756e75YqoXHJcbiAgICAgICAgaWYod2luZG93LnNldHRpbmcuY2xpY2tNb3ZlKSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3VwJyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVVcCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3JpZ2h0Jyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2Rvd24nLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZURvd24od2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9sZWZ0Jyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVMZWZ0KHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvdXAnLHRoaXMubm9kZSkub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3JpZ2h0Jyx0aGlzLm5vZGUpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9kb3duJyx0aGlzLm5vZGUpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9sZWZ0Jyx0aGlzLm5vZGUpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdyZXZpZXcnKSBjYy5maW5kKCdnYW1lQnRucy9iYWNrU3RlcC9CYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+mAmui/hyc7XHJcbiAgICAgICAgZWxzZSBpZighd2luZG93LnNldHRpbmcucmVsYXN0KSBjYy5maW5kKCdnYW1lQnRucy9iYWNrU3RlcC9CYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+mHjeeOqSc7XHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2JhY2tTdGVwJyx0aGlzLm5vZGUpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL+WuoeaguOWFs+WNoemAmui/h1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3Jyl7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3ZlcmlmeUNvbnRhaW4vY2xvc2UnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc3dvcmQgPSAgY2MuZmluZCgndmVyaWZ5Q29udGFpbi9lZGl0Ym94JyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCd2ZXJpZnlDb250YWluL2NvbmZpcm0nLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFzc3dvcmQudGV4dExhYmVsLnN0cmluZyA9PSAnMTk5NzA3MjAnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZ2V0Q2xhc3NpY3NMZXZlbE51bSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZENsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHdpbmRvdy51cGxvYWRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHJlcy5yZXN1bHQudG90YWwrMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXBsb2FkSW5mby5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZT93aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXBsb2FkSW5mby5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVwbG9hZEluZm8uYXBwSWQubGVuZ3RoLTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy51cGxvYWRJbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlUmV2aWV3TGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOndpbmRvdy5yZXZpZXdJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV2ZWxVcGxvYWROdW0gPSBwYXJzZUludChyZXMucmVzdWx0LnRvdGFsKSsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+WFs+WNoScrbGV2ZWxVcGxvYWROdW0rJ+S4iuS8oOaIkOWKn++8jOWNs+Wwhui3s+WbnuS4u+eVjOmdoicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5aSx6LSlJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5a+G56CB6ZSZ6K+v77yBJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygndmVyaWZ5QWRtaW4nLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcucmVsYXN0KXtcclxuICAgICAgICAgICAgICAgIGlmKHRoYXQubW92ZUhpc3RvcnlMaXN0Lmxlbmd0aCA+IDEgJiYgdGhhdC5zdGVwQ291bnRlclZhbHVlID49IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGF0Lm1vdmVIaXN0b3J5TGlzdFt0aGF0Lm1vdmVIaXN0b3J5TGlzdC5sZW5ndGgtMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdGVwQ291bnRlclZhbHVlIC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdGVwQ291bnRlci5zdHJpbmcgPSBcIuatpeaVsO+8mlwiICsgdGhhdC5zdGVwQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3JldmlldycpIGNjLmZpbmQoJ2dhbWVCdG5zL21lbnUvQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfpqbPlm54nXHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbWVudScsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcik7XHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgIC8v5a6h5qC45YWz5Y2h6amz5ZueXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdyZXZpZXcnKXtcclxuICAgICAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCd2ZXJpZnlDb250YWluL2Nsb3NlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gIGNjLmZpbmQoJ3ZlcmlmeUNvbnRhaW4vZWRpdGJveCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgndmVyaWZ5Q29udGFpbi9jb25maXJtJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhc3N3b3JkLnRleHRMYWJlbC5zdHJpbmcgPT0gJzE5OTcwNzIwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOndpbmRvdy5yZXZpZXdJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5YWz5Y2h5bey6amz5Zue77yM5Y2z5bCG6Lez5Zue5Li755WM6Z2iJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5a+G56CB6ZSZ6K+v77yBJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygndmVyaWZ5QWRtaW4nLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gdGhhdC5ub2RlO1xyXG4gICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9jb250aW51ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoYXQudGltZUNvdW50ZXJUaW1lciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoYXQudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoYXQpLDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9yZXBsYXknLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vbGV2ZWxzJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vcmFuaycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5rWL6K+V5YWz5Y2h5rKh5pyJ5o6S6KGM5qacJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93TGV2ZWxSYW5rKCk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9zaGFyZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICfnm4rmmbrmjqjnrrEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSAhPSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICfnrKwnK3dpbmRvdy5sZXZlbEluZGV4KyflhbMt5b+r5p2l5oyR5oiY5ZCnISdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJ+Wwj+a4uOaIj++8jOW/q+adpeaMkeaImOWQp++8gSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAnLeS9v+eUqOatpeaVsO+8midcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2dhbWVNZW51Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sdGhpcylcclxuICAgIH0sXHJcbiAgICBpbml0TGV2ZWwoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKCfml6AnLCfml6AnKVxyXG5cclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTonYnVpbGRMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW5oyC5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6J2J1aWxkTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdyZXZpZXcnKXtcclxuICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKCfml6AnLCfml6AnKVxyXG5cclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleToncmV2aWV3TGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbmjILku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v57uP5YW45YWz5Y2hXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbENsYXNzaWZ5ID09ICdjbGFzc2ljc0xldmVsJyl7XHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6d2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLnJlc3VsdC5kYXRhWzBdLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsQnkgPSByZXMucmVzdWx0LmRhdGFbMF0ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluaMguS7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOndpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IHJlcy5yZXN1bHQuZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUodGhhdC5sYXN0U2NvcmUudXNlU3RlcCx0aGF0Lmxhc3RTY29yZS51c2VUaW1lKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSgn5pegJywn5pegJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxldmVsSW5kZXggPT0gMSkgVG9hc3QoJ1RpcDog5Y+v5ruR5Yqo5bGP5bmV5o6n5Yi25Lq654mpJyw1MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/ot7Pov4flhbPljaFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LnNraXBMZXZlbEFkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBza2lwTm9kZSA9IG5ldyBjYy5Ob2RlKCdza2lwTm9kZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcE5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2tpcExldmVsTGFiZWwgPSBza2lwTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcExldmVsTGFiZWwubm9kZS5zZXRQb3NpdGlvbigoY2Mud2luU2l6ZS53aWR0aC8yKSAtIChjYy53aW5TaXplLndpZHRoKjAuMiksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraXBMZXZlbExhYmVsLnN0cmluZyA9ICfot7Pov4fmraTlhbPvvJ8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5za2lwTGV2ZWwgPSBza2lwTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm5vZGUuYWRkQ2hpbGQoc2tpcE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVuYWJsZVNraXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5za2lwTGV2ZWwubm9kZS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFlbmFibGVTa2lwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlU2tpcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5za2lwTGV2ZWxBZCkgVG9hc3QoXCLop4LnnIvlub/lkYroh7Pnu5PmnZ/lkI7ot7Pov4fmraTlhbPljaFcIiwyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtUb2FzdChcIuW5v+WRiuaLieWPluWksei0pVwiLDE1MDApO3JldHVybjt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQuc2hvdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQubG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5za2lwTGV2ZWxBZC5zaG93KCkpLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5bm/5ZGK5ouJ5Y+W5aSx6LSlXCIsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNraXBMZXZlbEFkLm9mZkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5za2lwTGV2ZWxBZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnlKjmiLfngrnlh7vkuobjgJDlhbPpl63lub/lkYrjgJHmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwj+S6jiAyLjEuMCDnmoTln7rnoYDlupPniYjmnKzvvIxyZXMg5piv5LiA5LiqIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd1Jlc3VsdCgnc2tpcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVTa2lwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGF0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nvZHnu5zlhbPljaFcclxuICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrKCl7XHJcbiAgICAgICAgdGhpcy5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lQ291bnRlclRpbWVyKVxyXG4gICAgICAgIHRoaXMudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3Jldmlldycpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHdpbmRvdy5mcm9tKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHdpbmRvdy5mcm9tKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSdcclxuICAgIH0sXHJcbiAgICByZW5kZXJMYXN0U2NvcmUoc3RlcCx0aW1lKXtcclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnIHx8IHdpbmRvdy5mcm9tID09IFwicmV2aWV3XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy/mnIDkvbPmraXmlbBcclxuICAgICAgICBpZih0aGF0Lmxhc3RTdGVwTm9kZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIGxhc3RTdGVwTm9kZSA9IG5ldyBjYy5Ob2RlKCdsYXN0U3RlcE5vZGUnKTtcclxuICAgICAgICAgICAgbGFzdFN0ZXBOb2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBsYXN0U3RlcE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigtKGNjLndpblNpemUud2lkdGgvMikgKyAoY2Mud2luU2l6ZS53aWR0aCowLjA1KSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgMTYwKVxyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5zdHJpbmcgPSAn5pyA5L2z5oiQ57up77ya5q2l5pWwICcrIHN0ZXArXCIgLSDnlKjml7YgXCIrdGltZTtcclxuICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUgPSBsYXN0U3RlcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGF0Lm5vZGUuYWRkQ2hpbGQobGFzdFN0ZXBOb2RlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUuc3RyaW5nID0gJ+acgOS9s+aIkOe7qe+8muatpeaVsCAnKyBzdGVwK1wiIC0g55So5pe2IFwiK3RpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgc2hvd0xldmVsUmFuaygpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciByYW5rUGFnZSA9IDEscmFua1BhZ2VTaXplID0gNTA7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjYy5maW5kKCdyYW5rTGlzdC92aWV3L2NvbnRlbnQnLG5ld015UHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2Nsb3NlJyxuZXdNeVByZWZhYikub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBpZih0aGF0LnJhbmtJdGVtID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtJdGVtJywgZnVuY3Rpb24gKGVycixyZXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmFua0l0ZW0gPSBjYy5pbnN0YW50aWF0ZShyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMZXZlbFJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3JhbmtMaXN0JyxuZXdNeVByZWZhYikub24oJ2JvdW5jZS1ib3R0b20nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmFua1BhZ2UrKztcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCd0aExldmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAn5q2lIOaVsCdcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIHJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxwYWdlLHBhZ2VTaXplKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtTnVtID0gY29udGVudC5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbFNjb3JlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6d2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCByYW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAxOyBpPD0gcmVzLnJlc3VsdC5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSAgcmVzLnJlc3VsdC5kYXRhW2ktMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhhdC5yYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmtJdGVtID09IG51bGwpIHJhbmtJdGVtID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRSYW5rJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpK2N1cnJlbnRJdGVtTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZERhdGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZvcm1hdGVSYW5rVGltZShkYXRhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhLnVzZVN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEucG9ydHJhaXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZGF0YS5wb3J0cmFpdCsnP2FhYT1hYS5qcGcnLCAgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ21hc2svSW1hZ2UnLG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUG9ydHJhaXQnKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLm5pY2tOYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIrZGF0YS5uaWNrTmFtZStcIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmhlaWdodCA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudCAqIHJhbmtJdGVtLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCIsMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
