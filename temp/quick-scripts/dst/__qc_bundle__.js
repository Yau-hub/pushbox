
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
    moveHistoryList: []
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
    // var newBlock = cc.instantiate(this.block);
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

      if (window.levelIndex < window.classicsLevelNum) {
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
    }, 5);
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
  },
  pendantAddEvent: function pendantAddEvent() {
    var that = this;
    cc.find('back', this.node).on('click', this.back, this);
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
      //经典关卡
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZUxheW91dC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXJyZW50TGV2ZWwiLCJlbGVTaXplIiwibGF5b3V0IiwiQXJyYXkiLCJibG9ja051bSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmxvY2siLCJ0eXBlIiwiUHJlZmFiIiwiZGlzcGxheU5hbWUiLCJ3YWxsIiwiYm94IiwiYmFsbCIsInJvbGVVcCIsInJvbGVSaWdodCIsInJvbGVEb3duIiwicm9sZUxlZnQiLCJwb3NpdGlvbiIsImdhbWVCbiIsIlNwcml0ZSIsImJveE51bSIsInN0ZXBDb3VudGVyIiwic3RlcENvdW50ZXJWYWx1ZSIsInRpbWVDb3VudGVyIiwidGltZUNvdW50ZXJWYWx1ZSIsInRpbWVDb3VudGVyVGltZXIiLCJsZXZlbENvdW50ZXIiLCJtb3ZlSGlzdG9yeUxpc3QiLCJvbkxvYWQiLCJ0aGF0IiwiaW5pdFdpbkVsZSIsInJlbmRlckJnIiwiaW5pdExldmVsIiwiZmluZCIsIm5vZGUiLCJoZWlnaHQiLCJ3aW5TaXplIiwid2lkdGgiLCJzdGFydCIsImFkZFRvdWNoTW92ZSIsInBlbmRhbnRBZGRFdmVudCIsInJlYWxTaXoiLCJpIiwibiIsIngiLCJ5Iiwic2lnbiIsImNvdmVyIiwiaW5pdFBvc2l0aW9uIiwibGVuZ3RoIiwic3RhcnRYIiwic3RhcnRZIiwibmV3QmxvY2siLCJpbnN0YW50aWF0ZSIsInNldFBvc2l0aW9uIiwiYWRkQ2hpbGQiLCJyZW5kZXJCbiIsImdldENvbXBvbmVudCIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJiZ1VybEJhc2UiLCJlcnIiLCJ0ZXh0dXJlIiwic3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJyZWN0Iiwic3ByaXRlRnJhbWUiLCJyZW5kZXJMYXlvdXQiLCJuZXdXYWxsIiwibmV3Qm94IiwibmV3QmFsbCIsIm5ld1JvbGVVcCIsIm5ld1JvbGVSaWdodCIsIm5ld1JvbGVEb3duIiwibmV3Um9sZUxlZnQiLCJtb3ZlVXAiLCJyZXNldFBvc2l0aW9uIiwibW92ZXRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJkaXJlY3Rpb24iLCJzeXMiLCJwbGF0Zm9ybSIsIldFQ0hBVF9HQU1FIiwid3giLCJzZXRTdG9yYWdlIiwia2V5IiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJnZXRTdG9yYWdlIiwicmVzIiwicHVzaCIsInN0cmluZyIsImNvdmVyQm94TnVtIiwic2hvd1Jlc3VsdCIsImNsZWFySW50ZXJ2YWwiLCJmaWd1cmVMb2NhdGlvbiIsIm9uIiwiZXZlbnQiLCJnZXRMb2NhdGlvbiIsImVuZExvY2F0aW9uIiwiTWF0aCIsImFicyIsIkNhbnZhc05vZGUiLCJjb25zb2xlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJMYWJlbCIsImxldmVsSW5kZXgiLCJjbGFzc2ljc0xldmVsTnVtIiwib3BhY2l0eSIsImxldmVsQ2xhc3NpZnkiLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsImluaXRQZW5kYW50IiwicmVwbGF5TGF5b3V0IiwidGl0U3RyaW5nIiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJxdWVyeSIsImxvYWRlciIsImxvYWRSZXMiLCJmYWlsIiwibGV2ZWxOb2RlIiwiTm9kZSIsInNldEFuY2hvclBvaW50IiwiYWRkQ29tcG9uZW50IiwiZm9udFNpemUiLCJlbmFibGVCb2xkIiwib3ZlcmZsb3ciLCJPdmVyZmxvdyIsIlJFU0laRV9IRUlHSFQiLCJsaW5lSGVpZ2h0IiwiaG9yaXpvbnRhbEFsaWduIiwidGltZU5vZGUiLCJzZXRJbnRlcnZhbCIsImJpbmQiLCJiYWNrIiwicG9wIiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwidGhlbiIsImNvbnRlbnQiLCJlcnJvciIsImRpcmVjdG9y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Q0FBYzFGLEdBQWQ7QUFDSCxTQTdCRDtBQThCSCxPQS9CRCxDQWdDQTtBQWhDQSxXQWlDSSxDQUVIO0FBR0o7QUFDSixHQW56Qkk7QUFvekJMbUYsRUFBQUEsSUFwekJLLGtCQW96QkM7QUFDRixTQUFLdkIsV0FBTDtBQUNBdEIsSUFBQUEsYUFBYSxDQUFDLEtBQUsxRSxnQkFBTixDQUFiO0FBQ0EsU0FBS0EsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDQXZCLElBQUFBLEVBQUUsQ0FBQ3NKLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixNQUF0QjtBQUNIO0FBenpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBsZXZlbHMgZnJvbSAnLi9sZXZlbCdcclxud2luZG93LmN1cnJlbnRMZXZlbCA9IFtdO1xyXG5cclxud2luZG93LmVsZVNpemUgPSAzNTtcclxud2luZG93LmxheW91dCA9IG5ldyBBcnJheSgpO1xyXG53aW5kb3cuYmxvY2tOdW0gPSAxMjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmxvY2s6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYmxvY2snXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YWxsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3dhbGwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib3g6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYm94J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidiYWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZVVwOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVVcCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVSaWdodDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlUmlnaHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlRG93bjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlRG93bidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVMZWZ0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVMZWZ0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2FtZUJuOmNjLlNwcml0ZSxcclxuICAgICAgICBib3hOdW06e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcENvdW50ZXI6bnVsbCxcclxuICAgICAgICBzdGVwQ291bnRlclZhbHVlOiAwLFxyXG4gICAgICAgIHRpbWVDb3VudGVyOm51bGwsXHJcbiAgICAgICAgdGltZUNvdW50ZXJWYWx1ZTowLFxyXG4gICAgICAgIHRpbWVDb3VudGVyVGltZXI6bnVsbCxcclxuICAgICAgICBsZXZlbENvdW50ZXI6IG51bGwsXHJcbiAgICAgICAgbW92ZUhpc3RvcnlMaXN0OltdXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmluaXRXaW5FbGUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlckJnKCk7XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyW5b2T5YmN5YWz5Y2hXHJcbiAgICAgICAgdGhpcy5pbml0TGV2ZWwoKTtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zJyx0aGlzLm5vZGUpLmhlaWdodCA9ICAoY2Mud2luU2l6ZS5oZWlnaHQgLSBjYy53aW5TaXplLndpZHRoKS8yO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuXHJcbiAgICAgICAgLy8gdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgLy8gLy8g5Li66K6+572u5L2N572uXHJcbiAgICAgICAgLy8gbmV3QmxvY2suc2V0UG9zaXRpb24oLTM3NSw1MCk7XHJcbiAgICAgICAgLy8gLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3QmxvY2spO1xyXG4gICAgICAgIC8vIGNjLmxvZyh3aW5kb3cuZWxlU2l6ZSlcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMucmVuZGVyTGF5b3V0KGxldmVsc1swXSlcclxuICAgICAgICAvLyB0aGlzLmluaXQobGV2ZWxzWzBdKTtcclxuXHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQubW92ZUxlZnQobGV2ZWxzWzBdKTtcclxuICAgICAgICAvLyB9LDEwMDApXHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQubW92ZUxlZnQobGV2ZWxzWzBdKTtcclxuICAgICAgICAvLyB9LDIwMDApXHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQubW92ZUxlZnQobGV2ZWxzWzBdKTtcclxuICAgICAgICAvLyB9LDMwMDApXHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQubW92ZVJpZ2h0KGxldmVsc1swXSk7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhsZXZlbHNbMF0pXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9LDQwMDApXHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQubW92ZURvd24obGV2ZWxzWzBdKTtcclxuICAgICAgICAvLyB9LDUwMDApXHJcbiAgICAgICAgdGhpcy5hZGRUb3VjaE1vdmUoKTtcclxuICAgICAgICB0aGlzLnBlbmRhbnRBZGRFdmVudCgpO1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGluaXRXaW5FbGUoKXtcclxuXHJcbiAgICAgICAgbGV0IHJlYWxTaXogPSBjYy53aW5TaXplLndpZHRoL3dpbmRvdy5ibG9ja051bTtcclxuICAgICAgICB3aW5kb3cuZWxlU2l6ZSA9IHJlYWxTaXo7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0gPSB7eDowLHk6MCxzaWduOjAsY292ZXI6bnVsbH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbml0UG9zaXRpb24obGF5b3V0KXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge307XHJcbiAgICAgICAgdGhpcy5ib3hOdW0gPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8bGF5b3V0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IGxheW91dFswXS5sZW5ndGg7IG4rKyl7XHJcbiAgICAgICAgICAgICAgICAvL2xheW91dFtpXVtuXS5zaWduIC0tIOS6uueJqeS9jee9rlxyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W2ldW25dLnNpZ24gPT0gNCB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA1IHx8IGxheW91dFtpXVtuXS5zaWduID09IDYgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/nrrHlrZDmlbDph49cclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFtpXVtuXS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94TnVtICsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICByZW5kZXJCZygpe1xyXG4gICAgICAgIGxldCBzdGFydFggPSAtKGNjLndpblNpemUud2lkdGgvMik7XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9ICh3aW5kb3cuZWxlU2l6ZSp3aW5kb3cuYmxvY2tOdW0pLzI7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gbip3aW5kb3cuZWxlU2l6ZSArIHN0YXJ0WDtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gLWkqd2luZG93LmVsZVNpemUgKyBzdGFydFk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldW25dID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeSxcclxuICAgICAgICAgICAgICAgICAgICBzaWduOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6bnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAvLyDkuLrorr7nva7kvY3nva5cclxuICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAvLyDlsIbmlrDlop7nmoToioLngrnmt7vliqDliLAgQ2FudmFzIOiKgueCueS4i+mdolxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0Jsb2NrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlckJuKCl7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lQm4gPT0gbnVsbCkgdGhpcy5nYW1lQm4gPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2dhbWVCbicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUod2luZG93LmJnVXJsQmFzZSsgJ180MDB4MjQwLmpwZycsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSwgY2MucmVjdCgwLDAsNDAwLDI0MCkpO1xyXG4gICAgICAgICAgICB0aGF0LmdhbWVCbi5zcHJpdGVGcmFtZSA9IHNwcml0ZTsgLy/orr7nva7nsr7ngbXnu4Tku7blm77niYfotYTmupBcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlckxheW91dChsYXlvdXQpe1xyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSB3aW5kb3cubGF5b3V0W2ldW25dLng7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHdpbmRvdy5sYXlvdXRbaV1bbl0ueTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChsYXlvdXRbaV1bbl0uc2lnbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0Jsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3V2FsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMud2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1dhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1dhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdCb3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JveC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Qm94KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0JhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlVXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVVcC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZVVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZVJpZ2h0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlUmlnaHQuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1JvbGVSaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVEb3duID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVEb3duLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVMZWZ0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlTGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVMZWZ0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlTGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICBtb3ZlVXAobGF5b3V0KXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li656m6XHJcbiAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4iuS4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ktMV1beF0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4iuS4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ktMV1beF0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDkuIrkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3ktMl1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeS0xXVt4XS5jb3ZlcikgbGF5b3V0W3ktMV1beF0uY292ZXIgPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiK5LiA5qC855CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3ktMl1beF0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMl1beF0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeS0xXVt4XS5jb3ZlcikgbGF5b3V0W3ktMV1beF0uY292ZXIgPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4iuS4gOagvOS4uueQg1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ktMV1beF0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uY292ZXIgPSA0O1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbW92ZXRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KGxheW91dClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1vdmV0aW1lcik7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG5cclxuICAgIG1vdmVEb3duKGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgICAgIC8v5LiL5LiA5qC85Li656m6XHJcbiAgICAgICAgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qC85Li65aKZ5L2TXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDEpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDY7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4i+S4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDkuIvkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3krMl1beF0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeSsxXVt4XS5jb3ZlcikgbGF5b3V0W3krMV1beF0uY292ZXIgPSA2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDkuIvkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsyXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsyXVt4XS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5KzFdW3hdLmNvdmVyKSBsYXlvdXRbeSsxXVt4XS5jb3ZlciA9IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2Rvd24nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLmNvdmVyID0gNjtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1vdmV0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb3ZldGltZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBtb3ZlTGVmdChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+W3puS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3ldW3gtMl0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5jb3ZlcikgbGF5b3V0W3ldW3gtMV0uY292ZXIgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0yXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMl0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0yXS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5XVt4LTFdLmNvdmVyKSBsYXlvdXRbeV1beC0xXS5jb3ZlciA9IDc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLmNvdmVyID0gNztcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyICYmIGxheW91dFt5XVt4XS5jb3ZlciAhPSAyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1vdmV0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb3ZldGltZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVSaWdodChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+WPs+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5Y+z5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOWPs+S4gOagvOS4uueQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3ZlciAmJiBsYXlvdXRbeV1beF0uY292ZXIgIT0gMil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtb3ZldGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobW92ZXRpbWVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICByZXNldFBvc2l0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHdpbmRvdy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0ZXBDb3VudGVyVmFsdWUgKys7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGVwQ291bnRlci5zdHJpbmcgPSBcIuatpeaVsO+8mlwiICsgdGhpcy5zdGVwQ291bnRlclZhbHVlO1xyXG4gICAgICAgIGxldCBjb3ZlckJveE51bSA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTx3aW5kb3cuY3VycmVudExldmVsLmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG48d2luZG93LmN1cnJlbnRMZXZlbFswXS5sZW5ndGggOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmN1cnJlbnRMZXZlbFtpXVtuXS5jb3ZlciAmJiB3aW5kb3cuY3VycmVudExldmVsW2ldW25dLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyQm94TnVtICsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm94TnVtID09IGNvdmVyQm94TnVtKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+aMkeaImOaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZUNvdW50ZXJUaW1lcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUb3VjaE1vdmUoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGZpZ3VyZUxvY2F0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGZpZ3VyZUxvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZW5kTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi54IC0gZW5kTG9jYXRpb24ueCkgPiBNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi55IC0gZW5kTG9jYXRpb24ueSkpe1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlj7Pmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW3pua7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUxlZnQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIrmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVVcCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4i+a7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZURvd24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jlc3VsdCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy91c2VUaW1lJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuatpeaVsO+8mlwiKyB0aGF0LnN0ZXBDb3VudGVyVmFsdWUrJ+atpSc7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy91c2VTdGVwJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIueUqOaXtu+8mlwiKyB0aGF0LnRpbWVDb3VudGVyVmFsdWUrJ+enkic7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEluZGV4IDwgd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvbmV4dCcsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxDbGFzc2lmeSA9PSAnY2xhc3NpY3NMZXZlbCcpe1xyXG4gICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxldmVsSW5kZXggPCB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0TGV2ZWwoKVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9yZXBsYXknLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3NoYXJlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICfnm4rmmbrmjqjnrrEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbENsYXNzaWZ5ID09ICdjbGFzc2ljc0xldmVsJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICct57uP5YW45YWz5Y2hJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHdpbmRvdy5sZXZlbENsYXNzaWZ5ID09ICduZXRMZXZlbCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAnLee9keWPi+iHquWItuWFs+WNoSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJ+esrCcrd2luZG93LmxldmVsSW5kZXgrJ+WFsycrJy3kvb/nlKjmraXmlbDvvJonKyB0aGF0LnN0ZXBDb3VudGVyVmFsdWUgKyct5oyR5oiY5oiQ5Yqf77yBJztcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lT3ZlckFsZXJ0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sNSlcclxuICAgIH0sXHJcbiAgICByZXBsYXlMYXlvdXQoKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogJ2luaXRMZXZlbCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKCl7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdFBlbmRhbnQoKXtcclxuXHJcbiAgICAgICAgLy/lhbPljaFcclxuICAgICAgICBpZih0aGlzLmxldmVsQ291bnRlciA9PSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIGxldmVsTm9kZSA9IG5ldyBjYy5Ob2RlKCdsZXZlbENvdW50ZXInKTtcclxuICAgICAgICAgICAgbGV2ZWxOb2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcclxuICAgICAgICAgICAgbGV2ZWxOb2RlLndpZHRoID0gIDMwMDtcclxuICAgICAgICAgICAgbGV2ZWxOb2RlLmhlaWdodCA9IDEwMDtcclxuICAgICAgICAgICAgdmFyIGxldmVsQ291bnRlciA9IGxldmVsTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbig1NSwgIChjYy53aW5TaXplLmhlaWdodC8yKSAtIChjYy53aW5TaXplLmhlaWdodCowLjA1KSlcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyc7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5mb250U2l6ZSA9IDYwO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIuZW5hYmxlQm9sZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LlJFU0laRV9IRUlHSFQ7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5saW5lSGVpZ2h0ID0gNjA7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5ob3Jpem9udGFsQWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIgPSBsZXZlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobGV2ZWxOb2RlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5q2l5pWwXHJcbiAgICAgICAgaWYodGhpcy5zdGVwQ291bnRlciA9PSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnc3RlcENvdW50ZXInKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRBbmNob3JQb2ludCgwLCAxKTtcclxuICAgICAgICAgICAgdmFyIHN0ZXBDb3VudGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKC0oY2Mud2luU2l6ZS53aWR0aC8yKSArIChjYy53aW5TaXplLndpZHRoKjAuMDUpLCAgKGNjLndpblNpemUud2lkdGgvMikgKyA4MClcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gJ+atpeaVsO+8miAwJztcclxuICAgICAgICAgICAgdGhpcy5zdGVwQ291bnRlciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcENvdW50ZXJWYWx1ZSAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/nlKjml7ZcclxuICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgdGltZU5vZGUgPSBuZXcgY2MuTm9kZSgndGltZUNvdW50ZXInKTtcclxuICAgICAgICAgICAgdGltZU5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lQ291bnRlciA9IHRpbWVOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oMCAsIChjYy53aW5TaXplLndpZHRoLzIpICsgODApXHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLnN0cmluZyA9ICfnlKjml7bvvJogMCc7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXIgPSB0aW1lTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aW1lTm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGlzLnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcGVuZGFudEFkZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGNjLmZpbmQoJ2JhY2snLHRoaXMubm9kZSkub24oJ2NsaWNrJyx0aGlzLmJhY2ssIHRoaXMpXHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvdXAnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5tb3ZlVXAod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvcmlnaHQnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5tb3ZlUmlnaHQod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvZG93bicsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0Lm1vdmVEb3duKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2xlZnQnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5tb3ZlTGVmdCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgIH0sdGhpcylcclxuICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9iYWNrU3RlcCcsdGhpcy5ub2RlKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYodGhhdC5tb3ZlSGlzdG9yeUxpc3QubGVuZ3RoID4gMSAmJiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUgPj0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGF0Lm1vdmVIaXN0b3J5TGlzdFt0aGF0Lm1vdmVIaXN0b3J5TGlzdC5sZW5ndGgtMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSAtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdGVwQ291bnRlci5zdHJpbmcgPSBcIuatpeaVsO+8mlwiICsgdGhhdC5zdGVwQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbWVudScsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcik7XHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gdGhhdC5ub2RlO1xyXG4gICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9jb250aW51ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoYXQudGltZUNvdW50ZXJUaW1lciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoYXQudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoYXQpLDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9yZXBsYXknLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vc2hhcmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpdFN0cmluZyA9ICAn55uK5pm65o6o566xJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxldmVsQ2xhc3NpZnkgPT0gJ2NsYXNzaWNzTGV2ZWwnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICct57uP5YW45YWz5Y2hJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYod2luZG93LmxldmVsQ2xhc3NpZnkgPT0gJ25ldExldmVsJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAnLee9keWPi+iHquWItuWFs+WNoSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAn56ysJyt3aW5kb3cubGV2ZWxJbmRleCsn5YWzLeW/q+adpeaMkeaImOWQpyEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICct5L2/55So5q2l5pWw77yaJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZU1lbnUnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICAgICAgfSx0aGlzKVxyXG4gICAgfSxcclxuICAgIGluaXRMZXZlbCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuXHJcbiAgICAgICAgICAgIC8v57uP5YW45YWz5Y2hXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbENsYXNzaWZ5ID09ICdjbGFzc2ljc0xldmVsJyl7XHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMucmVzdWx0LmRhdGFbMF0uY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW5oyC5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nvZHnu5zlhbPljaFcclxuICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrKCl7XHJcbiAgICAgICAgdGhpcy5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lQ291bnRlclRpbWVyKVxyXG4gICAgICAgIHRoaXMudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuIl19
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

      if (indexLevel == 1) {
        node.getChildByName('levelNum').getComponent(cc.Label).string = indexLevel;
        node.getChildByName('levelLock').opacity = 0;
      }

      _this.levelList.addChild(node);

      node.on('touchend', function (t) {
        window.levelIndex = indexLevel;
        cc.director.loadScene("game");
      }, _this);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxMYXlvdXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsZXZlbEl0ZW0iLCJQcmVmYWIiLCJsZXZlbExpc3QiLCJsZXZlbExpc3RDb250ZW4iLCJsZXZlbFNyb2xsVmlldyIsImNsYXNzaWNzTGV2ZWxCdG4iLCJCdXR0b24iLCJuZXRMZXZlbEJ0biIsImNsb3NlTGV2ZWxCdG4iLCJvbkxvYWQiLCJzdGFydCIsImZpbmQiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJsb2FkQ2xhc3NpY3NMZXZlbExpc3QiLCJsb2FkTmV0TGV2ZWxMaXN0IiwiY2xvc2VMZXZlbExheW91dCIsImNsYXNzaWNlQnRuTGFiZWwiLCJjb2xvciIsIm5ldEJ0bkxhYmVsIiwib3BhY2l0eSIsIndpbmRvdyIsImxldmVsQ2xhc3NpZnkiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJ0aGF0IiwibGV2ZWxIIiwibGV2ZWxSb3ciLCJsZXZlbFRvdGFsIiwiY2xhc3NpY3NMZXZlbE51bSIsImkiLCJpbnN0YW50aWF0ZSIsImluZGV4TGV2ZWwiLCJnZXRDaGlsZEJ5TmFtZSIsIkxhYmVsIiwic3RyaW5nIiwiYWRkQ2hpbGQiLCJ0IiwibGV2ZWxJbmRleCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJoZWlnaHQiLCJuZXRMZXZlbE51bSIsInVzZXJJbmZvIiwibG9nIiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUVSQyxJQUFBQSxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssTUFGTjtBQUdSQyxJQUFBQSxTQUFT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O0FBQ0EsU0FBS3BDLElBQUwsQ0FBVXFDLE9BQVY7QUFDSCxHQXpISSxDQTJITDs7QUEzSEssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBsZXZlbEl0ZW06IGNjLlByZWZhYixcclxuICAgICAgICBsZXZlbExpc3Q6bnVsbCxcclxuICAgICAgICBsZXZlbExpc3RDb250ZW46bnVsbCxcclxuICAgICAgICBsZXZlbFNyb2xsVmlldzpudWxsLFxyXG4gICAgICAgIGNsYXNzaWNzTGV2ZWxCdG46Y2MuQnV0dG9uLFxyXG4gICAgICAgIG5ldExldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgICAgICBjbG9zZUxldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3QgPSBjYy5maW5kKCdsZXZlbExpc3QvbGV2ZWxTY3JvbGxWaWV3L3ZpZXcvY29udGVudC9pdGVtTGlzdCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0Q29udGVuID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldy92aWV3L2NvbnRlbnQnLHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmxldmVsU3JvbGxWaWV3ID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldycsdGhpcy5ub2RlKVxyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5jbGFzc2ljc0xldmVsQnRuID09IG51bGwpIHRoaXMuY2xhc3NpY3NMZXZlbEJ0biA9IGNjLmZpbmQoJ2xldmVsTGlzdC9jbGFzc2lmeS9jbGFzc2ljc0xldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYodGhpcy5uZXRMZXZlbEJ0biA9PSBudWxsKSB0aGlzLm5ldExldmVsQnRuID0gY2MuZmluZCgnbGV2ZWxMaXN0L2NsYXNzaWZ5L25ldExldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYodGhpcy5jbG9zZUxldmVsQnRuID09IG51bGwpIHRoaXMuY2xvc2VMZXZlbEJ0biA9IGNjLmZpbmQoJ2Nsb3NlTGV2ZWwnLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLmxvYWRDbGFzc2ljc0xldmVsTGlzdCwgdGhpcylcclxuICAgICAgICB0aGlzLm5ldExldmVsQnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5sb2FkTmV0TGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMuY2xvc2VMZXZlbEJ0bi5ub2RlLm9uKCdjbGljaycsdGhpcy5jbG9zZUxldmVsTGF5b3V0LCB0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRDbGFzc2ljc0xldmVsTGlzdCgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgbG9hZENsYXNzaWNzTGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgLy8g6K6+572u5YiH5o2i5YWz5Y2h57G75Z6L5oyJ6ZKu6YCJ5LitXHJcbiAgICAgICAgbGV0IGNsYXNzaWNlQnRuTGFiZWwgPSBjYy5maW5kKCdCYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgY2xhc3NpY2VCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDIwMiwxMjIsMCk7XHJcbiAgICAgICAgbGV0IG5ldEJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5uZXRMZXZlbEJ0bi5ub2RlKTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5vcGFjaXR5ID0gMTI1O1xyXG5cclxuICAgICAgICB3aW5kb3cubGV2ZWxDbGFzc2lmeSA9ICdjbGFzc2ljc0xldmVsJztcclxuXHJcbiAgICAgICAgLy/muIXnqbrlhbPljaHoo4Llj5hcclxuICAgICAgICB0aGlzLmxldmVsTGlzdC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxldmVsSCA9IDA7XHJcbiAgICAgICAgbGV0IGxldmVsUm93ID0gMTA7XHJcbiAgICAgICAgbGV0IGxldmVsVG90YWwgPSB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGV2ZWxUb3RhbCA7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbEl0ZW0pO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXhMZXZlbCA9IGkrMTtcclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA9PSAxKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xldmVsTnVtJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbmRleExldmVsO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxMb2NrJykub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sZXZlbExpc3QuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICBub2RlLm9uKCd0b3VjaGVuZCcsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbih0KXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxJbmRleCA9IGluZGV4TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA8PSBsZXZlbFJvdyl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbFJvdyA9IE1hdGguZmxvb3IobGV2ZWxUb3RhbCAvIE1hdGguZmxvb3IodGhpcy5sZXZlbExpc3RDb250ZW4ud2lkdGggLyBub2RlLndpZHRoKSAtMSk7XHJcbiAgICAgICAgICAgICAgICBsZXZlbEggKz0gbm9kZS5oZWlnaHQgKyA3MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxldmVsTGlzdENvbnRlbi5oZWlnaHQgPSBsZXZlbEg7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkTmV0TGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgLy8g6K6+572u5YiH5o2i5YWz5Y2h57G75Z6L5oyJ6ZKu6YCJ5LitXHJcbiAgICAgICAgbGV0IGNsYXNzaWNlQnRuTGFiZWwgPSBjYy5maW5kKCdCYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgY2xhc3NpY2VCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICBjbGFzc2ljZUJ0bkxhYmVsLm9wYWNpdHkgPSAxMjU7XHJcbiAgICAgICAgbGV0IG5ldEJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5uZXRMZXZlbEJ0bi5ub2RlKTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDIwMiwxMjIsMCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sZXZlbENsYXNzaWZ5ID0gJ25ldExldmVsJztcclxuXHJcbiAgICAgICAgLy/muIXnqbrlhbPljaHoo4Llj5hcclxuICAgICAgICB0aGlzLmxldmVsTGlzdC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxldmVsSCA9IDA7XHJcbiAgICAgICAgbGV0IGxldmVsUm93ID0gMTA7XHJcbiAgICAgICAgbGV0IGxldmVsVG90YWwgPSB3aW5kb3cubmV0TGV2ZWxOdW07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGxldmVsVG90YWwgOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxJdGVtKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4TGV2ZWwgPSBpKzE7XHJcbiAgICAgICAgICAgIGlmKGluZGV4TGV2ZWwgPD0gd2luZG93LnVzZXJJbmZvLmNsYXNzaWNzTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGV2ZWxOdW0nKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGluZGV4TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdsZXZlbExvY2snKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxldmVsTGlzdC5hZGRDaGlsZChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUub24oJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZygnbGV2ZWw6JyArIGluZGV4TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBpZihpbmRleExldmVsIDw9IGxldmVsUm93KXtcclxuICAgICAgICAgICAgICAgIGxldmVsUm93ID0gTWF0aC5mbG9vcihsZXZlbFRvdGFsIC8gTWF0aC5mbG9vcih0aGlzLmxldmVsTGlzdENvbnRlbi53aWR0aCAvIG5vZGUud2lkdGgpIC0xKTtcclxuICAgICAgICAgICAgICAgIGxldmVsSCArPSBub2RlLmhlaWdodCArIDcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0Q29udGVuLmhlaWdodCA9IGxldmVsSDtcclxuICAgIH0sXHJcbiAgICBjbG9zZUxldmVsTGF5b3V0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
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
            userInfo = res.userInfo;
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
            console.log("用户授权:", res.userInfo);
            userInfo = res.userInfo;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uLmpzIl0sIm5hbWVzIjpbInd4TG9naW4iLCJfc3VjY2VzcyIsIl9mYWlsIiwibm9kZSIsImNjIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwid2luZG93IiwiaW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwidyIsInNjcmVlbldpZHRoIiwiaCIsInNjcmVlbkhlaWdodCIsImVsZVciLCJ3aWR0aCIsImVsZUgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwieSIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImJ1dHRvbiIsImNyZWF0ZVVzZXJJbmZvQnV0dG9uIiwidHlwZSIsInRleHQiLCJzdHlsZSIsInBhcnNlSW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJvblRhcCIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCQyxLQUEzQixFQUFpQ0MsSUFBakMsRUFBdUM7QUFDMUMsTUFBSUMsRUFBRSxDQUFDQyxHQUFILENBQU9DLFFBQVAsS0FBb0JGLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRSxXQUEvQixFQUE0QyxPQURGLENBRTFDOztBQUNBLE1BQU1DLEVBQUUsR0FBR0MsTUFBTSxDQUFDLElBQUQsQ0FBakIsQ0FIMEMsQ0FHbEI7O0FBQ3hCLE1BQU1DLElBQUksR0FBSUYsRUFBRSxDQUFDRyxpQkFBSCxFQUFkLENBSjBDLENBSUw7O0FBQ3JDLE1BQU1DLENBQUMsR0FBSUYsSUFBSSxDQUFDRyxXQUFoQixDQUwwQyxDQUtkOztBQUM1QixNQUFNQyxDQUFDLEdBQUlKLElBQUksQ0FBQ0ss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g+eZu+mZhlxyXG4gKiBAcGFyYW0gX3N1Y2Nlc3Mg55m76ZmG5oiQ5Yqf6L+U5Zue5Zue6LCDIOesrOS4gOS4quWPguaVsOaYr3d455So5oi35L+h5oGvXHJcbiAqIEBwYXJhbSBfZmFpbCDmi5Lnu53mjojmnYPov5Tlm55cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3eExvZ2luKF9zdWNjZXNzLCBfZmFpbCxub2RlKSB7XHJcbiAgICBpZiAoY2Muc3lzLnBsYXRmb3JtICE9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHJldHVybjtcclxuICAgIC8v5b6u5L+h55m76ZmGXHJcbiAgICBjb25zdCB3eCA9IHdpbmRvd1snd3gnXTsvL+mBv+W8gHRz6K+t5rOV5qOA5rWLXHJcbiAgICBjb25zdCBpbmZvICA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7Ly/nq4vljbPojrflj5bns7vnu5/kv6Hmga9cclxuICAgIGNvbnN0IHcgID0gaW5mby5zY3JlZW5XaWR0aDsvL+Wxj+W5leWuvVxyXG4gICAgY29uc3QgaCAgPSBpbmZvLnNjcmVlbkhlaWdodDsvL+Wxj+W5lemrmFxyXG4gICAgY29uc3QgZWxlVyA9IChub2RlLndpZHRoKjIvMTA4MCkgKiB3O1xyXG4gICAgY29uc3QgZWxlSCA9IChub2RlLmhlaWdodCoyLzI0MDApICogaDtcclxuICAgIGNvbnN0IGxlZnQgPSB3LzIgLSBlbGVXLzI7XHJcbiAgICBjb25zdCB0b3AgPSBoLzIgLSBlbGVILzIgLSAobm9kZS55LzI0MDApKmgrKChub2RlLnkvMjQwMCkqaCkqMC4yNTtcclxuXHJcbiAgICAvL+iOt+WPlueUqOaIt+eahOW9k+WJjeiuvue9ruOAgui/lOWbnuWAvOS4reWPquS8muWHuueOsOWwj+eoi+W6j+W3sue7j+WQkeeUqOaIt+ivt+axgui/h+eahOadg+mZkOOAglxyXG4gICAgd3guZ2V0U2V0dGluZyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuYXV0aFNldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1tcInNjb3BlLnVzZXJJbmZvXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnlKjmiLflt7LmjojmnYNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nmbvpmYbmk43kvZxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3N1Y2Nlc3MgJiYgX3N1Y2Nlc3MocmVzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueUqOaIt+acquaOiOadg1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/liJvlu7rlhajlsY/pgI/mmI7nmbvpmYbmjInpkq5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gd3guY3JlYXRlVXNlckluZm9CdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogcGFyc2VJbnQobGVmdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHBhcnNlSW50KHRvcCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGFyc2VJbnQoZWxlVyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBhcnNlSW50KGVsZUgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMDAwJywvL+acgOWQjuS4pOS9jeS4uumAj+aYjuW6plxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHBhcnNlSW50KGVsZUgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5vblRhcCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55So5oi35o6I5p2DOlwiLCByZXMudXNlckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3VjY2VzcyAmJiBfc3VjY2VzcyhyZXMudXNlckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55So5oi35ouS57ud5o6I5p2DOlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9mYWlsICYmIF9mYWlsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufVxyXG4iXX0=
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
                    console.log('至少开启一种移动方式');
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
                    console.log('至少开启一种移动方式');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsImNsb3VkIiwiaW5pdCIsInVzZXJJbmZvIiwiY2xhc3NpY3NMZXZlbE51bSIsIm5ldExldmVsTnVtIiwibGV2ZWxJbmRleCIsImJnVXJsQmFzZSIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uZVNheUxhYmVsIiwidHlwZSIsIkxhYmVsIiwibG9naW5wbGF5IiwiQnV0dG9uIiwidmlzaXRvcnBsYXkiLCJsZXZlbExheW91dCIsIlByZWZhYiIsImJ1aWxkTGV2ZWwiLCJzZXR0aW5nIiwibWFpblNoYXJlIiwib25Mb2FkIiwibWFpbkJpbmRFdmVudCIsInN0YXJ0IiwidGhhdCIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRVc2VySW5mbyIsImluaXRTZXR0aW5nIiwibG9hZEltZyIsImNvbnRhaW5lciIsImZpbmQiLCJpbWdTZXJ2ZVVybCIsImltZ1VybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaW1hZ2VzIiwidXJsYmFzZSIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJ0ZXh0dXJlIiwic3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSIsInN0YXJOb2RlIiwiTm9kZSIsInNldFBvc2l0aW9uIiwic3RhclNwcml0ZSIsImFkZENvbXBvbmVudCIsIlNwcml0ZSIsInNpemVNb2RlIiwibm9kZSIsIndpZHRoIiwid2luU2l6ZSIsImhlaWdodCIsImFkZENoaWxkIiwib3BlbiIsInNlbmQiLCJvbmVTYXkiLCJ1cmwiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJoaXRva290byIsImZyb20iLCJsb2dpbkxldmVsTGlzdCIsImxvZ2luVHlwZSIsIkNhbnZhc05vZGUiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwibG9hZGVyIiwibG9hZFJlcyIsInZpc2l0b3JMZXZlbExpc3QiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsImFwcElkIiwiZGF0YSIsImxlbmd0aCIsImZhaWwiLCJzZXRTdG9yYWdlIiwiYXBwaWQiLCJvcGVuaWQiLCJvcGVuSWQiLCJsb2dpbkluZm8iLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIm9uIiwidGl0U3RyaW5nIiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJxdWVyeSIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwidG91Y2hNb3ZlIiwiY2xpY2tNb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7OztBQW5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxHQUFQLEdBQWEseUJBQWI7O0FBQ0EsSUFBSUMsRUFBRSxDQUFDQyxHQUFILENBQU9DLFFBQVAsS0FBb0JGLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRSxXQUEvQixFQUE0QztBQUN4Q0MsRUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNDLElBQVQsQ0FBYztBQUFDUCxJQUFBQSxHQUFHLEVBQUVELE1BQU0sQ0FBQ0M7QUFBYixHQUFkO0FBQ0g7O0FBQ0RELE1BQU0sQ0FBQ1MsUUFBUCxHQUFrQixFQUFsQjtBQUNBVCxNQUFNLENBQUNVLGdCQUFQLEdBQTBCLENBQTFCO0FBQ0FWLE1BQU0sQ0FBQ1csV0FBUCxHQUFxQixDQUFyQjtBQUNBWCxNQUFNLENBQUNZLFVBQVAsR0FBb0IsQ0FBcEI7QUFDQVosTUFBTSxDQUFDYSxTQUFQLEdBQW1C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OlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbndpbmRvdy5lbnYgPSBcImNsb3VkMS01Z3ZidWl5M2RkOTlmNjNjXCJcclxuaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICB3eC5jbG91ZC5pbml0KHtlbnY6IHdpbmRvdy5lbnZ9KVxyXG59XHJcbndpbmRvdy51c2VySW5mbyA9IHt9O1xyXG53aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5uZXRMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5sZXZlbEluZGV4ID0gMDtcclxud2luZG93LmJnVXJsQmFzZSA9ICcnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgbGV2ZWxzIGZyb20gJy4vbGV2ZWwnXHJcbmltcG9ydCB7d3hMb2dpbn0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG9uZVNheUxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpbnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICB2aXNpdG9ycGxheTogY2MuQnV0dG9uLFxyXG4gICAgICAgIGxldmVsTGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgYnVpbGRMZXZlbDogY2MuQnV0dG9uLFxyXG4gICAgICAgIHNldHRpbmc6IGNjLkJ1dHRvbixcclxuICAgICAgICBtYWluU2hhcmU6IGNjLkJ1dHRvbixcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTDpFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvL+WKoOi9veS4gOiogFxyXG4gICAgICAgIC8vICB0aGlzLm9uZVNheSgpO1xyXG5cclxuICAgICAgICAgdGhpcy5tYWluQmluZEV2ZW50KCk7XHJcblxyXG5cclxuICAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICAvLyB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAvLyAgICAgbmFtZTogJ2FkZENsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAvLyAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29udGVudDogbGV2ZWxzWzBdLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldmVsSW5kZXg6IDFcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIC8vIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdnZXRDbGFzc2ljc0xldmVsTnVtJ1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQudG90YWw7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLmxvYWRJbWcoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgdGhhdC5vbmVTYXkoKTtcclxuICAgICAgICAvLyB9LDEwMDAwKVxyXG5cclxuICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U2V0dGluZygpO1xyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuXHJcblxyXG4gICAgbG9hZEltZzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYmluZ0JnJyk7Ly/lm77niYflkYjnjrDkvY3nva5cclxuICAgICAgICB2YXIgaW1nU2VydmVVcmwgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vSFBJbWFnZUFyY2hpdmUuYXNweD9mb3JtYXQ9anMmaWR4PTAmbj0xJztcclxuICAgICAgICB2YXIgaW1nVXJsID0gJyc7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpbWdVcmwgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbScgKyByZXNwb25zZS5pbWFnZXNbMF0udXJsYmFzZSArICdfNzIweDEyODAuanBnJ1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnVXJsQmFzZSA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGltZ1VybCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIm+W7uuS4gOS4quS9v+eUqOWbvueJh+i1hOa6kOeahOaWsOiKgueCueWvueixoVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyTm9kZSA9IG5ldyBjYy5Ob2RlKCk7IC8v5Yib5bu65LiA5Liq5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUubmFtZSA9IFwic3RhcjFcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyU3ByaXRlID0gc3Rhck5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7IC8v5aKe5Yqg57K+54G157uE5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZTsgLy/orr7nva7nsr7ngbXnu4Tku7blm77niYfotYTmupBcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNpemVNb2RlID0gJ0NVU1RPTSc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLndpZHRoID0gY2Mud2luU2l6ZS53aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUubm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChzdGFyTm9kZSk7IC8v5Zy65pmv5Lit5aKe5Yqg5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgaW1nU2VydmVVcmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgb25lU2F5KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vdjEuaGl0b2tvdG8uY24vXCI7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGxldCBvbmVTYXlMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvbWFpbkJnL29uZVNheVwiKS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgaWYodGhhdC5vbmVTYXlMYWJlbCAmJiB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsKSB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYob25lU2F5TGFiZWwgJiYgb25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwgKSBvbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgLy/mjojmnYPnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIGxvZ2luTGV2ZWxMaXN0KCl7XHJcblxyXG5cclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3dlY2hhdCc7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGV2ZWxMaXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbExheW91dCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTGlzdCk7XHJcbiAgICB9LFxyXG4gICAgLy/kuI3nmbvlvZXnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIHZpc2l0b3JMZXZlbExpc3QoKXtcclxuXHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2dpblR5cGUgPSAndmlzaXRvcic7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGV2ZWxMaXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbExheW91dCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTGlzdCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bnvJPlrZhhcHBJZOWIpOaWreaYr+WQpuesrOS4gOasoei/m+WFpea4uOaIj1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2FwcElkJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VySW5mby5hcHBJZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlckluZm8uYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlckluZm8uY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5jbGFzc2ljc0xldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXJJbmZvLm5ldExldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5ldExldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYXBwSWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOnJlcy5yZXN1bHQuYXBwaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwib3BlbklkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTpyZXMucmVzdWx0Lm9wZW5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VySW5mby5hcHBJZCA9IHJlcy5yZXN1bHQuYXBwaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlckluZm8uY2xhc3NpY3NMZXZlbE51bSA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VySW5mby5uZXRMZXZlbE51bSA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+azqOWGjOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogcmVzLnJlc3VsdC5hcHBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbklkOiByZXMucmVzdWx0Lm9wZW5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtYWluQmluZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIC8v5re75Yqg5o6I5p2D5oyJ6ZKuXHJcbiAgICAgICAgd3hMb2dpbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IHJlcy5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogcmVzLm5pY2tOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aOiOadg+Wksei0pScpXHJcbiAgICAgICAgfSx0aGlzLmxvZ2lucGxheS5ub2RlKVxyXG4gICAgICAgIC8v5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgaWYodGhpcy5sb2dpbnBsYXkgPT0gbnVsbCkgdGhpcy5sb2dpbnBsYXkgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2xvZ2lucGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5sb2dpbnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLmxvZ2luTGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMudmlzaXRvcnBsYXkgPT0gbnVsbCkgdGhpcy52aXNpdG9ycGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvdmlzaXRvcnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMudmlzaXRvcnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLnZpc2l0b3JMZXZlbExpc3QsIHRoaXMpXHJcblxyXG4gICAgICAgIGlmKHRoaXMubWFpblNoYXJlID09IG51bGwpIHRoaXMubWFpblNoYXJlID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluU2hhcmUnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLm1haW5TaGFyZS5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICflv6vmnaXmjJHmiJjigJznm4rmmbrmjqjnrrHigJ3lsI/muLjmiI/lkKfvvIEnO1xyXG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG5cclxuICAgICAgICBpZih0aGlzLnNldHRpbmcgPT0gbnVsbCkgdGhpcy5zZXR0aW5nID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9zZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xvc2VTZXR0aW5nJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2hNb3ZlID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUpIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSkgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCc7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuCbngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcudG91Y2hNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuOWFs+mXrSDngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCFyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcudG91Y2hNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflhbPpl63op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o+Q56S66Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfoh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI8nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xpY2tNb3ZlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuCbngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcuY2xpY2tNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5byA5ZCv5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuOWFs+mXrSDngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiAhcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcuY2xpY2tNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o+Q56S66Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfoh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI8nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnc2V0dGluZ0RpYWxvZycsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuICAgIH0sXHJcbiAgICBpbml0U2V0dGluZygpe1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKGVycil7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
