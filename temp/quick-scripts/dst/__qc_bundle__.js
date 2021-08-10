
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
    lastTimenode: null
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
            useTime: that.timeCounterValue
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
              useTime: that.timeCounterValue
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
        console.log('queryUser');
        console.log(res);

        if (res && res.result.data.length > 0 && res.result.data[0].levelFinishNum < curLevelNum) {
          window.user.levelFinishNum = curLevelNum;
          var data = {};
          data.appId = window.user.appId;
          data.levelFinishNum = curLevelNum;
          if (window.loginInfo.nickName) data.nickName = window.loginInfo.nickName;
          if (window.loginInfo.avatarUrl) data.avatarUrl = window.loginInfo.nickName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZUxheW91dC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXJyZW50TGV2ZWwiLCJlbGVTaXplIiwibGF5b3V0IiwiQXJyYXkiLCJibG9ja051bSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmxvY2siLCJ0eXBlIiwiUHJlZmFiIiwiZGlzcGxheU5hbWUiLCJ3YWxsIiwiYm94IiwiYmFsbCIsInJvbGVVcCIsInJvbGVSaWdodCIsInJvbGVEb3duIiwicm9sZUxlZnQiLCJwb3NpdGlvbiIsImdhbWVCbiIsIlNwcml0ZSIsImJveE51bSIsInN0ZXBDb3VudGVyIiwic3RlcENvdW50ZXJWYWx1ZSIsInRpbWVDb3VudGVyIiwidGltZUNvdW50ZXJWYWx1ZSIsInRpbWVDb3VudGVyVGltZXIiLCJsZXZlbENvdW50ZXIiLCJtb3ZlSGlzdG9yeUxpc3QiLCJsYXN0U2NvcmUiLCJsYXN0U3RlcE5vZGUiLCJsYXN0VGltZW5vZGUiLCJvbkxvYWQiLCJ0aGF0IiwiaW5pdFdpbkVsZSIsInJlbmRlckJnIiwiaW5pdExldmVsIiwiZmluZCIsIm5vZGUiLCJoZWlnaHQiLCJ3aW5TaXplIiwid2lkdGgiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiYWRkVG91Y2hNb3ZlIiwicGVuZGFudEFkZEV2ZW50IiwicmVhbFNpeiIsImkiLCJuIiwieCIsInkiLCJzaWduIiwiY292ZXIiLCJpbml0UG9zaXRpb24iLCJsZW5ndGgiLCJzdGFydFgiLCJzdGFydFkiLCJuZXdCbG9jayIsImluc3RhbnRpYXRlIiwic2V0UG9zaXRpb24iLCJhZGRDaGlsZCIsInJlbmRlckJuIiwiZ2V0Q29tcG9uZW50IiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImJnVXJsQmFzZSIsImVyciIsInRleHR1cmUiLCJzcHJpdGUiLCJTcHJpdGVGcmFtZSIsInJlY3QiLCJzcHJpdGVGcmFtZSIsInJlbmRlckxheW91dCIsIm5ld1dhbGwiLCJuZXdCb3giLCJuZXdCYWxsIiwibmV3Um9sZVVwIiwibmV3Um9sZVJpZ2h0IiwibmV3Um9sZURvd24iLCJuZXdSb2xlTGVmdCIsIm1vdmVVcCIsInJlc2V0UG9zaXRpb24iLCJtb3ZldGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwibW92ZURvd24iLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImRpcmVjdGlvbiIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsInNldFN0b3JhZ2UiLCJrZXkiLCJkYXRhIiwic3VjY2VzcyIsInJlc3VsdCIsImdldFN0b3JhZ2UiLCJyZXMiLCJwdXNoIiwic3RyaW5nIiwiY292ZXJCb3hOdW0iLCJzaG93UmVzdWx0IiwiY2xlYXJJbnRlcnZhbCIsInNldHRpbmciLCJ0b3VjaE1vdmUiLCJmaWd1cmVMb2NhdGlvbiIsIm9uIiwiZXZlbnQiLCJnZXRMb2NhdGlvbiIsImVuZExvY2F0aW9uIiwiTWF0aCIsImFicyIsIkNhbnZhc05vZGUiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJuZXdNeVByZWZhYiIsIkxhYmVsIiwibGV2ZWxJbmRleCIsImNsYXNzaWNzTGV2ZWxOdW0iLCJvcGFjaXR5IiwibGV2ZWxDbGFzc2lmeSIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwiaW5pdFBlbmRhbnQiLCJyZXBsYXlMYXlvdXQiLCJ0aXRTdHJpbmciLCJzaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInF1ZXJ5IiwibG9hZGVyIiwibG9hZFJlcyIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsImFwcElkIiwidXNlU3RlcCIsInVzZVRpbWUiLCJ0aGVuIiwiZXJyb3IiLCJyZW5kZXJMYXN0U2NvcmUiLCJjdXJMZXZlbE51bSIsImxldmVsRmluaXNoTnVtIiwibG9naW5JbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJmYWlsIiwibGV2ZWxOb2RlIiwiTm9kZSIsInNldEFuY2hvclBvaW50IiwiYWRkQ29tcG9uZW50IiwiZm9udFNpemUiLCJlbmFibGVCb2xkIiwib3ZlcmZsb3ciLCJPdmVyZmxvdyIsIlJFU0laRV9IRUlHSFQiLCJsaW5lSGVpZ2h0IiwiaG9yaXpvbnRhbEFsaWduIiwidGltZU5vZGUiLCJzZXRJbnRlcnZhbCIsImJpbmQiLCJiYWNrIiwiY2xpY2tNb3ZlIiwicG9wIiwiTG9hZGluZyIsInNob3ciLCJjb250ZW50IiwiaGlkZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic3RlcCIsInRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBQ0E7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQUEsTUFBTSxDQUFDQyxZQUFQLEdBQXNCLEVBQXRCO0FBRUFELE1BQU0sQ0FBQ0UsT0FBUCxHQUFpQixFQUFqQjtBQUNBRixNQUFNLENBQUNHLE1BQVAsR0FBZ0IsSUFBSUMsS0FBSixFQUFoQjtBQUNBSixNQUFNLENBQUNLLFFBQVAsR0FBa0IsRUFBbEI7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRk47QUFHSEMsTUFBQUEsV0FBVyxFQUFDO0FBSFQsS0FEQztBQU1SQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxJQURQO0FBRUZILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZQO0FBR0ZDLE1BQUFBLFdBQVcsRUFBQztBQUhWLEtBTkU7QUFXUkUsSUFBQUEsR0FBRyxFQUFFO0FBQ0QsaUJBQVMsSUFEUjtBQUVESixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGUjtBQUdEQyxNQUFBQSxXQUFXLEVBQUM7QUFIWCxLQVhHO0FBZ0JSRyxJQUFBQSxJQUFJLEVBQUU7QUFDRixp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eUJ0QyxFQUFFLENBQUNxQyxPQUFILENBQVdDLEtBQVgsR0FBaUIsSUFBdkUsRUFBZ0Z0QyxFQUFFLENBQUNxQyxPQUFILENBQVdDLEtBQVgsR0FBaUIsQ0FBbEIsR0FBdUIsR0FBdEc7QUFDQW5CLE1BQUFBLFdBQVcsQ0FBQ2lGLE1BQVosR0FBcUIsYUFBWXVFLElBQVosR0FBaUIsUUFBakIsR0FBMEJDLElBQS9DO0FBQ0E5SSxNQUFBQSxJQUFJLENBQUNILFlBQUwsR0FBb0JBLFlBQVksQ0FBQ2tDLFlBQWIsQ0FBMEI3RCxFQUFFLENBQUNzSCxLQUE3QixDQUFwQjtBQUNBeEYsTUFBQUEsSUFBSSxDQUFDSyxJQUFMLENBQVV3QixRQUFWLENBQW1CaEMsWUFBbkI7QUFDSCxLQVJELE1BUUs7QUFDREcsTUFBQUEsSUFBSSxDQUFDSCxZQUFMLENBQWtCeUUsTUFBbEIsR0FBMkIsYUFBWXVFLElBQVosR0FBaUIsUUFBakIsR0FBMEJDLElBQXJEO0FBQ0g7QUFHSjtBQS83QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgbGV2ZWxzIGZyb20gJy4vbGV2ZWwnXHJcbmltcG9ydCB7TG9hZGluZ30gZnJvbSBcIi4vY29tbW9uXCI7XHJcbndpbmRvdy5jdXJyZW50TGV2ZWwgPSBbXTtcclxuXHJcbndpbmRvdy5lbGVTaXplID0gMzU7XHJcbndpbmRvdy5sYXlvdXQgPSBuZXcgQXJyYXkoKTtcclxud2luZG93LmJsb2NrTnVtID0gMTI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJsb2NrOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2Jsb2NrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2FsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOid3YWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JveCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYmFsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVVcDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlVXAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlUmlnaHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVJpZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZURvd246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZURvd24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlTGVmdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlTGVmdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdhbWVCbjpjYy5TcHJpdGUsXHJcbiAgICAgICAgYm94TnVtOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBDb3VudGVyOm51bGwsXHJcbiAgICAgICAgc3RlcENvdW50ZXJWYWx1ZTogMCxcclxuICAgICAgICB0aW1lQ291bnRlcjpudWxsLFxyXG4gICAgICAgIHRpbWVDb3VudGVyVmFsdWU6MCxcclxuICAgICAgICB0aW1lQ291bnRlclRpbWVyOm51bGwsXHJcbiAgICAgICAgbGV2ZWxDb3VudGVyOiBudWxsLFxyXG4gICAgICAgIG1vdmVIaXN0b3J5TGlzdDpbXSxcclxuICAgICAgICBsYXN0U2NvcmU6IG51bGwsXHJcbiAgICAgICAgbGFzdFN0ZXBOb2RlOiBudWxsLFxyXG4gICAgICAgIGxhc3RUaW1lbm9kZTogbnVsbFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0V2luRWxlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJCZygpO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluW9k+WJjeWFs+WNoVxyXG4gICAgICAgIHRoaXMuaW5pdExldmVsKCk7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKCdnYW1lQnRucycsdGhpcy5ub2RlKS5oZWlnaHQgPSAgKGNjLndpblNpemUuaGVpZ2h0IC0gY2Mud2luU2l6ZS53aWR0aCkvMjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LnVzZXIpXHJcbiAgICAgICAgLy8gdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgLy8gLy8g5Li66K6+572u5L2N572uXHJcbiAgICAgICAgLy8gbmV3QmxvY2suc2V0UG9zaXRpb24oLTM3NSw1MCk7XHJcbiAgICAgICAgLy8gLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3QmxvY2spO1xyXG4gICAgICAgIC8vIGNjLmxvZyh3aW5kb3cuZWxlU2l6ZSlcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMucmVuZGVyTGF5b3V0KGxldmVsc1swXSlcclxuICAgICAgICAvLyB0aGlzLmluaXQobGV2ZWxzWzBdKTtcclxuXHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQubW92ZUxlZnQobGV2ZWxzWzBdKTtcclxuICAgICAgICAvLyB9LDEwMDApXHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQubW92ZUxlZnQobGV2ZWxzWzBdKTtcclxuICAgICAgICAvLyB9LDIwMDApXHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQubW92ZUxlZnQobGV2ZWxzWzBdKTtcclxuICAgICAgICAvLyB9LDMwMDApXHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQubW92ZVJpZ2h0KGxldmVsc1swXSk7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhsZXZlbHNbMF0pXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9LDQwMDApXHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoYXQubW92ZURvd24obGV2ZWxzWzBdKTtcclxuICAgICAgICAvLyB9LDUwMDApXHJcbiAgICAgICAgdGhpcy5hZGRUb3VjaE1vdmUoKTtcclxuICAgICAgICB0aGlzLnBlbmRhbnRBZGRFdmVudCgpO1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGluaXRXaW5FbGUoKXtcclxuXHJcbiAgICAgICAgbGV0IHJlYWxTaXogPSBjYy53aW5TaXplLndpZHRoL3dpbmRvdy5ibG9ja051bTtcclxuICAgICAgICB3aW5kb3cuZWxlU2l6ZSA9IHJlYWxTaXo7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0gPSB7eDowLHk6MCxzaWduOjAsY292ZXI6bnVsbH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbml0UG9zaXRpb24obGF5b3V0KXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge307XHJcbiAgICAgICAgdGhpcy5ib3hOdW0gPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8bGF5b3V0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IGxheW91dFswXS5sZW5ndGg7IG4rKyl7XHJcbiAgICAgICAgICAgICAgICAvL2xheW91dFtpXVtuXS5zaWduIC0tIOS6uueJqeS9jee9rlxyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W2ldW25dLnNpZ24gPT0gNCB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA1IHx8IGxheW91dFtpXVtuXS5zaWduID09IDYgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/nrrHlrZDmlbDph49cclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFtpXVtuXS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94TnVtICsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICByZW5kZXJCZygpe1xyXG4gICAgICAgIGxldCBzdGFydFggPSAtKGNjLndpblNpemUud2lkdGgvMik7XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9ICh3aW5kb3cuZWxlU2l6ZSp3aW5kb3cuYmxvY2tOdW0pLzI7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gbip3aW5kb3cuZWxlU2l6ZSArIHN0YXJ0WDtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gLWkqd2luZG93LmVsZVNpemUgKyBzdGFydFk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldW25dID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeSxcclxuICAgICAgICAgICAgICAgICAgICBzaWduOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6bnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAvLyDkuLrorr7nva7kvY3nva5cclxuICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAvLyDlsIbmlrDlop7nmoToioLngrnmt7vliqDliLAgQ2FudmFzIOiKgueCueS4i+mdolxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0Jsb2NrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlckJuKCl7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lQm4gPT0gbnVsbCkgdGhpcy5nYW1lQm4gPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2dhbWVCbicpLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUod2luZG93LmJnVXJsQmFzZSsgJ180MDB4MjQwLmpwZycsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSwgY2MucmVjdCgwLDAsNDAwLDI0MCkpO1xyXG4gICAgICAgICAgICB0aGF0LmdhbWVCbi5zcHJpdGVGcmFtZSA9IHNwcml0ZTsgLy/orr7nva7nsr7ngbXnu4Tku7blm77niYfotYTmupBcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlckxheW91dChsYXlvdXQpe1xyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSB3aW5kb3cubGF5b3V0W2ldW25dLng7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHdpbmRvdy5sYXlvdXRbaV1bbl0ueTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChsYXlvdXRbaV1bbl0uc2lnbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0Jsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3V2FsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMud2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1dhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1dhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdCb3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JveC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Qm94KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld0JhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlVXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVVcC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3Um9sZVVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZVJpZ2h0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlUmlnaHQuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1JvbGVSaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVEb3duID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVEb3duLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVMZWZ0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlTGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVMZWZ0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdSb2xlTGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVVwKGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG5cclxuICAgICAgICAvL+S4iuS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiK5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5LTJdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uY292ZXIpIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOS4iuS4gOagvOeQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5LTJdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTJdW3hdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uY292ZXIpIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3Zlcil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1vdmV0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb3ZldGltZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgbW92ZURvd24obGF5b3V0KXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrnqbpcclxuICAgICAgICBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDApe1xyXG4gICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2Rvd24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qC85Li6566x5a2QXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAvL+euseWtkOS4i+S4gOagvOS4uuepulxyXG4gICAgICAgICAgICBpZihsYXlvdXRbeSsyXVt4XS5zaWduID09IDApe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5KzFdW3hdLmNvdmVyKSBsYXlvdXRbeSsxXVt4XS5jb3ZlciA9IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2Rvd24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOS4i+S4gOagvOS4uueQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5KzJdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsyXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzJdW3hdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3krMV1beF0uY292ZXIpIGxheW91dFt5KzFdW3hdLmNvdmVyID0gNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4i+S4gOagvOS4uueQg1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uY292ZXIgPSA2O1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2Rvd24nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v56e75Yqo5ZCO5Zue5pi+55CD5L2TXHJcbiAgICAgICAgaWYobGF5b3V0W3ldW3hdLnNpZ24gPT0gMCAmJiBsYXlvdXRbeV1beF0uY292ZXIpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDM7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbW92ZXRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KGxheW91dClcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG1vdmV0aW1lcik7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtb3ZlTGVmdChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+W3puS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3ldW3gtMl0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5jb3ZlcikgbGF5b3V0W3ldW3gtMV0uY292ZXIgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0yXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMl0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0yXS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5XVt4LTFdLmNvdmVyKSBsYXlvdXRbeV1beC0xXS5jb3ZlciA9IDc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLmNvdmVyID0gNztcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyICYmIGxheW91dFt5XVt4XS5jb3ZlciAhPSAyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1vdmV0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb3ZldGltZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgbW92ZVJpZ2h0KGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgICAgIC8v5Y+z5LiA5qC85Li656m6XHJcbiAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPs+S4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3grMV0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPs+S4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3grMV0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDlj7PkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMl0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beCsxXS5jb3ZlcikgbGF5b3V0W3ldW3grMV0uY292ZXIgPSA1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5Y+z5LiA5qC85Li655CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3grMl0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3grMl0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beCsxXS5jb3ZlcikgbGF5b3V0W3ldW3grMV0uY292ZXIgPSA1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPs+S4gOagvOS4uueQg1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3grMV0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beCsxXS5zaWduID0gNTtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uY292ZXIgPSA1O1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyICYmIGxheW91dFt5XVt4XS5jb3ZlciAhPSAyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1vdmV0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChtb3ZldGltZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgcmVzZXRQb3NpdGlvbihkaXJlY3Rpb24pe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGVwQ291bnRlclZhbHVlICsrO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RlcENvdW50ZXIuc3RyaW5nID0gXCLmraXmlbDvvJpcIiArIHRoaXMuc3RlcENvdW50ZXJWYWx1ZTtcclxuICAgICAgICBsZXQgY292ZXJCb3hOdW0gPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8d2luZG93LmN1cnJlbnRMZXZlbC5sZW5ndGggOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuPHdpbmRvdy5jdXJyZW50TGV2ZWxbMF0ubGVuZ3RoIDsgbisrKXtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5jdXJyZW50TGV2ZWxbaV1bbl0uY292ZXIgJiYgd2luZG93LmN1cnJlbnRMZXZlbFtpXVtuXS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlckJveE51bSArKztcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJveE51bSA9PSBjb3ZlckJveE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmjJHmiJjmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVDb3VudGVyVGltZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYWRkVG91Y2hNb3ZlKCl7XHJcbiAgICAgICAgaWYoIXdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGZpZ3VyZUxvY2F0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGZpZ3VyZUxvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZW5kTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi54IC0gZW5kTG9jYXRpb24ueCkgPiBNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi55IC0gZW5kTG9jYXRpb24ueSkpe1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlj7Pmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW3pua7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUxlZnQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIrmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVVcCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4i+a7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZURvd24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jlc3VsdCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IHRoaXMubm9kZTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy91c2VUaW1lJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuatpeaVsO+8mlwiKyB0aGF0LnN0ZXBDb3VudGVyVmFsdWUrJ+atpSc7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy91c2VTdGVwJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIueUqOaXtu+8mlwiKyB0aGF0LnRpbWVDb3VudGVyVmFsdWUrJ+enkic7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEluZGV4ID49IHdpbmRvdy5jbGFzc2ljc0xldmVsTnVtKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgaWYod2luZG93LmxldmVsQ2xhc3NpZnkgPT0gJ2NsYXNzaWNzTGV2ZWwnKXtcclxuICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEluZGV4IDwgd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0pe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdExldmVsKClcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvcmVwbGF5JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlcGxheUxheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9zaGFyZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpdFN0cmluZyA9ICAn55uK5pm65o6o566xJztcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxDbGFzc2lmeSA9PSAnY2xhc3NpY3NMZXZlbCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAnLee7j+WFuOWFs+WNoSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih3aW5kb3cubGV2ZWxDbGFzc2lmeSA9PSAnbmV0TGV2ZWwnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJy3nvZHlj4voh6rliLblhbPljaEnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICfnrKwnK3dpbmRvdy5sZXZlbEluZGV4KyflhbMnKyct5L2/55So5q2l5pWw77yaJysgdGhhdC5zdGVwQ291bnRlclZhbHVlICsnLeaMkeaImOaIkOWKn++8gSc7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZU92ZXJBbGVydCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICB9LDApXHJcblxyXG4gICAgICAgIC8v5LiK5Lyg5YiG5pWwXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGF0Lmxhc3RTY29yZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSh0aGF0Lmxhc3RTY29yZS51c2VTdGVwLHRoYXQubGFzdFNjb3JlLnVzZVRpbWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5zdGVwQ291bnRlclZhbHVlIDwgdGhhdC5sYXN0U2NvcmUudXNlU3RlcCB8fCB0aGF0LnRpbWVDb3VudGVyVmFsdWUgPCB0aGF0Lmxhc3RTY29yZS51c2VUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKHRoYXQubGFzdFNjb3JlLnVzZVN0ZXAsdGhhdC5sYXN0U2NvcmUudXNlVGltZSlcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlQ2xhc3NpY3NMZXZlbFNjb3JlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJMZXZlbE51bSA9IHdpbmRvdy5sZXZlbEluZGV4O1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncXVlcnlVc2VyJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjAgJiYgcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtIDwgY3VyTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gY3VyTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcElkID0gd2luZG93LnVzZXIuYXBwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZXZlbEZpbmlzaE51bSA9IGN1ckxldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWUpIGRhdGEubmlja05hbWUgPSB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsKSBkYXRhLmF2YXRhclVybCA9IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3VwZGF0ZVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlcGxheUxheW91dCgpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiAnaW5pdExldmVsJyxcclxuICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0Lm1vdmVIaXN0b3J5TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoYXQubW92ZUhpc3RvcnlMaXN0KVxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbCgpe1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdFBlbmRhbnQoKXtcclxuICAgICAgICAvL+WFs+WNoVxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbGV2ZWxOb2RlID0gbmV3IGNjLk5vZGUoJ2xldmVsQ291bnRlcicpO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUud2lkdGggPSAgMzAwO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuaGVpZ2h0ID0gMTAwO1xyXG4gICAgICAgICAgICB2YXIgbGV2ZWxDb3VudGVyID0gbGV2ZWxOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKDU1LCAgKGNjLndpblNpemUuaGVpZ2h0LzIpIC0gKGNjLndpblNpemUuaGVpZ2h0KjAuMDUpKVxyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzJztcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmZvbnRTaXplID0gNjA7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5lbmFibGVCb2xkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmxpbmVIZWlnaHQgPSA2MDtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmhvcml6b250YWxBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlciA9IGxldmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbE5vZGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlci5zdHJpbmcgPSAn56ysICcrIHdpbmRvdy5sZXZlbEluZGV4ICsgJyDlhbMnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mraXmlbBcclxuICAgICAgICBpZih0aGlzLnN0ZXBDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdzdGVwQ291bnRlcicpO1xyXG4gICAgICAgICAgICBub2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDgwKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gJ+atpeaVsO+8miAwJztcclxuICAgICAgICAgICAgdGhpcy5zdGVwQ291bnRlciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcENvdW50ZXJWYWx1ZSAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/nlKjml7ZcclxuICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgdGltZU5vZGUgPSBuZXcgY2MuTm9kZSgndGltZUNvdW50ZXInKTtcclxuICAgICAgICAgICAgdGltZU5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lQ291bnRlciA9IHRpbWVOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oMCAsIChjYy53aW5TaXplLndpZHRoLzIpICsgODApXHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLnN0cmluZyA9ICfnlKjml7bvvJogMCc7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXIgPSB0aW1lTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aW1lTm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGlzLnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLm1vdmVIaXN0b3J5TGlzdCA9IFtdO1xyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgcGVuZGFudEFkZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGNjLmZpbmQoJ2JhY2snLHRoaXMubm9kZSkub24oJ2NsaWNrJyx0aGlzLmJhY2ssIHRoaXMpXHJcbiAgICAgICAgLy/lvIDlkK/ngrnlh7vnp7vliqhcclxuICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5jbGlja01vdmUpIHtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvdXAnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZVVwKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvcmlnaHQnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZVJpZ2h0KHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvZG93bicsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlRG93bih3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2xlZnQnLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZUxlZnQod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy91cCcsdGhpcy5ub2RlKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvcmlnaHQnLHRoaXMubm9kZSkub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2Rvd24nLHRoaXMubm9kZSkub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2xlZnQnLHRoaXMubm9kZSkub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2JhY2tTdGVwJyx0aGlzLm5vZGUpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZih0aGF0Lm1vdmVIaXN0b3J5TGlzdC5sZW5ndGggPiAxICYmIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSA+PSAxKXtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoYXQubW92ZUhpc3RvcnlMaXN0W3RoYXQubW92ZUhpc3RvcnlMaXN0Lmxlbmd0aC0xXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zdGVwQ291bnRlclZhbHVlIC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGF0LnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9tZW51Jyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC50aW1lQ291bnRlclRpbWVyKTtcclxuICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSB0aGF0Lm5vZGU7XHJcbiAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL2NvbnRpbnVlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhhdC50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhhdCksMTAwMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL3JlcGxheScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9zaGFyZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICfnm4rmmbrmjqjnrrEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxDbGFzc2lmeSA9PSAnY2xhc3NpY3NMZXZlbCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJy3nu4/lhbjlhbPljaEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih3aW5kb3cubGV2ZWxDbGFzc2lmeSA9PSAnbmV0TGV2ZWwnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICct572R5Y+L6Ieq5Yi25YWz5Y2hJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICfnrKwnK3dpbmRvdy5sZXZlbEluZGV4KyflhbMt5b+r5p2l5oyR5oiY5ZCnISdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJy3kvb/nlKjmraXmlbDvvJonXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICfliIbkuqsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lTWVudScsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICB9LHRoaXMpXHJcbiAgICB9LFxyXG4gICAgaW5pdExldmVsKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgLy/nu4/lhbjlhbPljaFcclxuICAgICAgICAgICAgaWYod2luZG93LmxldmVsQ2xhc3NpZnkgPT0gJ2NsYXNzaWNzTGV2ZWwnKXtcclxuICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5yZXN1bHQuZGF0YVswXS5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluaMguS7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOndpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IHJlcy5yZXN1bHQuZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUodGhhdC5sYXN0U2NvcmUudXNlU3RlcCx0aGF0Lmxhc3RTY29yZS51c2VUaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKCfml6AnLCfml6AnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nvZHnu5zlhbPljaFcclxuICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrKCl7XHJcbiAgICAgICAgdGhpcy5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lQ291bnRlclRpbWVyKVxyXG4gICAgICAgIHRoaXMudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXJMYXN0U2NvcmUoc3RlcCx0aW1lKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy/mnIDkvbPmraXmlbBcclxuICAgICAgICBpZih0aGF0Lmxhc3RTdGVwTm9kZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIGxhc3RTdGVwTm9kZSA9IG5ldyBjYy5Ob2RlKCdsYXN0U3RlcE5vZGUnKTtcclxuICAgICAgICAgICAgbGFzdFN0ZXBOb2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBsYXN0U3RlcE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigtKGNjLndpblNpemUud2lkdGgvMikgKyAoY2Mud2luU2l6ZS53aWR0aCowLjA1KSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgMTYwKVxyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5zdHJpbmcgPSAn5pyA5L2z5oiQ57up77ya5q2l5pWwICcrIHN0ZXArXCIgLSDnlKjml7YgXCIrdGltZTtcclxuICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUgPSBsYXN0U3RlcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGF0Lm5vZGUuYWRkQ2hpbGQobGFzdFN0ZXBOb2RlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUuc3RyaW5nID0gJ+acgOS9s+aIkOe7qe+8muatpeaVsCAnKyBzdGVwK1wiIC0g55So5pe2IFwiK3RpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uLmpzIl0sIm5hbWVzIjpbInd4TG9naW4iLCJfc3VjY2VzcyIsIl9mYWlsIiwibm9kZSIsImNjIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwid2luZG93IiwiaW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwidyIsInNjcmVlbldpZHRoIiwiaCIsInNjcmVlbkhlaWdodCIsImVsZVciLCJ3aWR0aCIsImVsZUgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwieSIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImJ1dHRvbiIsImNyZWF0ZVVzZXJJbmZvQnV0dG9uIiwidHlwZSIsInRleHQiLCJzdHlsZSIsInBhcnNlSW50IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJvblRhcCIsImRlc3Ryb3kiLCJUb2FzdCIsInRpbWUiLCJDYW52YXNOb2RlIiwiZmluZCIsIm9uUmVzb3VyY2VMb2FkZWQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkZWRSZXNvdXJjZSIsIlByZWZhYiIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJ0b2FzdEJnIiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJ0b2FzdFRleHQiLCJMYWJlbCIsInN0cmluZyIsImFkZENoaWxkIiwicm91bmRSZWN0IiwiZmlsbENvbG9yIiwiQ29sb3IiLCJCTEFDSyIsImZpbGwiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJyZW1vdmVGcm9tUGFyZW50IiwiY2xlYXJUaW1lb3V0IiwibG9hZGVyIiwibG9hZFJlcyIsIkxvYWRpbmciLCJlbGUiLCJoaWRlRmxhZ2UiLCJzaG93IiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFD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QUNrRSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsU0FBbEIsRUFBNkJ2QixnQkFBN0I7QUFDSCxHQXZCUTtBQXdCVDRCLEVBQUFBLElBeEJTLGtCQXdCSDtBQUNGLFFBQUdKLE9BQU8sQ0FBQ0MsR0FBWCxFQUFlO0FBQ1hELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxnQkFBWjtBQUNBSSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTlCLE9BQVo7QUFDQTZCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixHQUFjLElBQWQ7QUFDSDs7QUFDREQsSUFBQUEsT0FBTyxDQUFDRSxTQUFSLEdBQW9CLElBQXBCO0FBQ0g7QUEvQlEsQ0FBYiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIHd45o6I5p2D55m76ZmGXHJcbiAqIEBwYXJhbSBfc3VjY2VzcyDnmbvpmYbmiJDlip/ov5Tlm57lm57osIMg56ys5LiA5Liq5Y+C5pWw5pivd3jnlKjmiLfkv6Hmga9cclxuICogQHBhcmFtIF9mYWlsIOaLkue7neaOiOadg+i/lOWbnlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHd4TG9naW4oX3N1Y2Nlc3MsIF9mYWlsLG5vZGUpIHtcclxuICAgIGlmIChjYy5zeXMucGxhdGZvcm0gIT09IGNjLnN5cy5XRUNIQVRfR0FNRSkgcmV0dXJuO1xyXG4gICAgLy/lvq7kv6HnmbvpmYZcclxuICAgIGNvbnN0IHd4ID0gd2luZG93Wyd3eCddOy8v6YG/5byAdHPor63ms5Xmo4DmtYtcclxuICAgIGNvbnN0IGluZm8gID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTsvL+eri+WNs+iOt+WPluezu+e7n+S/oeaBr1xyXG4gICAgY29uc3QgdyAgPSBpbmZvLnNjcmVlbldpZHRoOy8v5bGP5bmV5a69XHJcbiAgICBjb25zdCBoICA9IGluZm8uc2NyZWVuSGVpZ2h0Oy8v5bGP5bmV6auYXHJcbiAgICBjb25zdCBlbGVXID0gKG5vZGUud2lkdGgqMi8xMDgwKSAqIHc7XHJcbiAgICBjb25zdCBlbGVIID0gKG5vZGUuaGVpZ2h0KjIvMjQwMCkgKiBoO1xyXG4gICAgY29uc3QgbGVmdCA9IHcvMiAtIGVsZVcvMjtcclxuICAgIGNvbnN0IHRvcCA9IGgvMiAtIGVsZUgvMiAtIChub2RlLnkvMjQwMCkqaCsoKG5vZGUueS8yNDAwKSpoKSowLjI1O1xyXG5cclxuICAgIC8v6I635Y+W55So5oi355qE5b2T5YmN6K6+572u44CC6L+U5Zue5YC85Lit5Y+q5Lya5Ye6546w5bCP56iL5bqP5bey57uP5ZCR55So5oi36K+35rGC6L+H55qE5p2D6ZmQ44CCXHJcbiAgICB3eC5nZXRTZXR0aW5nKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5hdXRoU2V0dGluZyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueUqOaIt+W3suaOiOadg1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+eZu+mZhuaTjeS9nFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3VjY2VzcyAmJiBfc3VjY2VzcyhyZXMudXNlckluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55So5oi35pyq5o6I5p2DXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WIm+W7uuWFqOWxj+mAj+aYjueZu+mZhuaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSB3eC5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwYXJzZUludChsZWZ0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcGFyc2VJbnQodG9wKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludChlbGVXKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGFyc2VJbnQoZWxlSCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwMDAnLC8v5pyA5ZCO5Lik5L2N5Li66YCP5piO5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogcGFyc2VJbnQoZWxlSCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLm9uVGFwKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VySW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnlKjmiLfmjojmnYM6XCIsIHJlcy51c2VySW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdWNjZXNzICYmIF9zdWNjZXNzKHJlcy51c2VySW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnlKjmiLfmi5Lnu53mjojmnYM6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ZhaWwgJiYgX2ZhaWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9hc3QodGV4dCx0aW1lKSB7XHJcbiAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgY29uc3Qgd3ggPSB3aW5kb3dbJ3d4J107Ly/pgb/lvIB0c+ivreazleajgOa1i1xyXG4gICAgY29uc3QgaW5mbyAgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpOy8v56uL5Y2z6I635Y+W57O757uf5L+h5oGvXHJcbiAgICBjb25zdCB3ICA9IGluZm8uc2NyZWVuV2lkdGg7Ly/lsY/luZXlrr1cclxuICAgIGNvbnN0IGggID0gaW5mby5zY3JlZW5IZWlnaHQ7Ly/lsY/luZXpq5hcclxuICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgIGxldCB0b2FzdEJnID0gY2MuZmluZCgnYmFja2dyb3VuZCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgbGV0IHRvYXN0VGV4dCA9ICBjYy5maW5kKFwidGV4dFwiLG5ld015UHJlZmFiKTtcclxuXHJcblxyXG5cclxuICAgICAgICB0b2FzdFRleHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0ZXh0O1xyXG4gICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgdG9hc3RCZy5yb3VuZFJlY3QoXHJcbiAgICAgICAgICAgIC0oIHRvYXN0VGV4dC53aWR0aCArIDgwKS8yLFxyXG4gICAgICAgICAgICAtKHRvYXN0VGV4dC5oZWlnaHQrNDApLzIsXHJcbiAgICAgICAgICAgIHRvYXN0VGV4dC53aWR0aCArIDgwLFxyXG4gICAgICAgICAgICB0b2FzdFRleHQuaGVpZ2h0KzQwLFxyXG4gICAgICAgICAgICAodG9hc3RUZXh0LmhlaWdodCs0MCkvMlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdG9hc3RCZy5maWxsQ29sb3IgPSBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICB0b2FzdEJnLmZpbGwoKVxyXG4gICAgICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgdGltZXIgPSBudWxsO1xyXG4gICAgICAgIH0sdGltZSlcclxuICAgIH07XHJcbiAgICBjYy5sb2FkZXIubG9hZFJlcygndG9hc3QnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbn1cclxubGV0IExvYWRpbmcgPXtcclxuICAgIGVsZTpudWxsLFxyXG4gICAgaGlkZUZsYWdlOmZhbHNlLFxyXG4gICAgc2hvdygpe1xyXG4gICAgICAgIExvYWRpbmcuaGlkZUZsYWdlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG5cclxuICAgICAgICAgICAgaWYoIUxvYWRpbmcuaGlkZUZsYWdlKXtcclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmVsZSA9IG5ld015UHJlZmFiO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbG9hZGluZycsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgIH0sXHJcbiAgICBoaWRlKCl7XHJcbiAgICAgICAgaWYoTG9hZGluZy5lbGUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLmVsZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIExvYWRpbmcuZWxlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgTG9hZGluZy5lbGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMb2FkaW5nLmhpZGVGbGFnZSA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHtMb2FkaW5nfTtcclxuIl19
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
        console.log('load err');
        window.classicsLevelNum = res.result.total;

        _common.Loading.hide();
      })["catch"](function (err) {
        console.error(err);
        console.log('load err1');
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
                      appId: window.user.appId
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsImNsb3VkIiwiaW5pdCIsInVzZXIiLCJjbGFzc2ljc0xldmVsTnVtIiwibmV0TGV2ZWxOdW0iLCJsZXZlbEluZGV4IiwiYmdVcmxCYXNlIiwibGV2ZWxGaW5pc2hOdW0iLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbmVTYXlMYWJlbCIsInR5cGUiLCJMYWJlbCIsImxvZ2lucGxheSIsIkJ1dHRvbiIsInZpc2l0b3JwbGF5IiwibGV2ZWxMYXlvdXQiLCJQcmVmYWIiLCJidWlsZExldmVsIiwic2V0dGluZyIsIm1haW5TaGFyZSIsIm9uTG9hZCIsIm1haW5CaW5kRXZlbnQiLCJzdGFydCIsInRoYXQiLCJMb2FkaW5nIiwic2hvdyIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInRvdGFsIiwiaGlkZSIsImVyciIsImVycm9yIiwiZ2V0VXNlckluZm8iLCJpbml0U2V0dGluZyIsImxvYWRJbWciLCJjb250YWluZXIiLCJmaW5kIiwiaW1nU2VydmVVcmwiLCJpbWdVcmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImltYWdlcyIsInVybGJhc2UiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlRnJhbWUiLCJzdGFyTm9kZSIsIk5vZGUiLCJzZXRQb3NpdGlvbiIsInN0YXJTcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzaXplTW9kZSIsIm5vZGUiLCJ3aWR0aCIsIndpblNpemUiLCJoZWlnaHQiLCJhZGRDaGlsZCIsIm9wZW4iLCJzZW5kIiwib25lU2F5IiwidXJsIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiaGl0b2tvdG8iLCJmcm9tIiwibG9naW5MZXZlbExpc3QiLCJsb2dpblR5cGUiLCJDYW52YXNOb2RlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibmV3TXlQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImxvYWRlciIsImxvYWRSZXMiLCJ2aXNpdG9yTGV2ZWxMaXN0IiwiZ2V0U3RvcmFnZSIsImtleSIsInN1Y2Nlc3MiLCJhcHBJZCIsImRhdGEiLCJsZW5ndGgiLCJmYWlsIiwic2V0U3RvcmFnZSIsIm9wZW5pZCIsImxvZ2luSW5mbyIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwib24iLCJ0aXRTdHJpbmciLCJzaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInF1ZXJ5IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJ0b3VjaE1vdmUiLCJjbGlja01vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOztBQUNBOzs7O0FBbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLEdBQVAsR0FBYSx5QkFBYjs7QUFDQSxJQUFJQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQkYsRUFBRSxDQUFDQyxHQUFILENBQU9FLFdBQS9CLEVBQTRDO0FBQ3hDQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjO0FBQUNQLElBQUFBLEdBQUcsRUFBRUQsTUFBTSxDQUFDQztBQUFiLEdBQWQ7QUFDSDs7QUFDREQsTUFBTSxDQUFDUyxJQUFQLEdBQWMsRUFBZDtBQUNBVCxNQUFNLENBQUNVLGdCQUFQLEdBQTBCLENBQTFCO0FBQ0FWLE1BQU0sQ0FBQ1csV0FBUCxHQUFxQixDQUFyQjtBQUNBWCxNQUFNLENBQUNZLFVBQVAsR0FBb0IsQ0FBcEI7QUFDQVosTUFB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QW9GRyxJQXBGSDtBQXNGSCxHQTVXSTtBQTZXTDlDLEVBQUFBLFdBN1dLLHlCQTZXUTtBQUNULFFBQUk3QyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQkYsRUFBRSxDQUFDQyxHQUFILENBQU9FLFdBQS9CLEVBQTRDO0FBQ3hDQyxNQUFBQSxFQUFFLENBQUMrRixVQUFILENBQWM7QUFDVkMsUUFBQUEsR0FBRyxFQUFFLFNBREs7QUFFVkMsUUFBQUEsT0FGVSxtQkFFRmpFLEdBRkUsRUFFRztBQUNUdEMsVUFBQUEsTUFBTSxDQUFDMkIsT0FBUCxHQUFpQlcsR0FBRyxDQUFDbUUsSUFBckI7QUFDSCxTQUpTO0FBS1ZFLFFBQUFBLElBTFUsZ0JBS0wvRCxHQUxLLEVBS0E7QUFDTjVDLFVBQUFBLE1BQU0sQ0FBQzJCLE9BQVAsR0FBaUI7QUFDYjZGLFlBQUFBLFNBQVMsRUFBRSxJQURFO0FBRWJDLFlBQUFBLFNBQVMsRUFBRTtBQUZFLFdBQWpCO0FBSUFuSCxVQUFBQSxFQUFFLENBQUNzRyxVQUFILENBQWM7QUFDVk4sWUFBQUEsR0FBRyxFQUFFLFNBREs7QUFFVkcsWUFBQUEsSUFBSSxFQUFFekcsTUFBTSxDQUFDMkI7QUFGSCxXQUFkO0FBSUg7QUFkUyxPQUFkO0FBZ0JIO0FBQ0o7QUFoWUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbndpbmRvdy5lbnYgPSBcImNsb3VkMS01Z3ZidWl5M2RkOTlmNjNjXCJcclxuaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICB3eC5jbG91ZC5pbml0KHtlbnY6IHdpbmRvdy5lbnZ9KVxyXG59XHJcbndpbmRvdy51c2VyID0ge307XHJcbndpbmRvdy5jbGFzc2ljc0xldmVsTnVtID0gMDtcclxud2luZG93Lm5ldExldmVsTnVtID0gMDtcclxud2luZG93LmxldmVsSW5kZXggPSAwO1xyXG53aW5kb3cuYmdVcmxCYXNlID0gJyc7XHJcbndpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gMDtcclxuXHJcblxyXG5pbXBvcnQgbGV2ZWxzIGZyb20gJy4vbGV2ZWwnXHJcbmltcG9ydCB7d3hMb2dpbixUb2FzdCxMb2FkaW5nfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgb25lU2F5TGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2lucGxheTogY2MuQnV0dG9uLFxyXG4gICAgICAgIHZpc2l0b3JwbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgbGV2ZWxMYXlvdXQ6IGNjLlByZWZhYixcclxuICAgICAgICBidWlsZExldmVsOiBjYy5CdXR0b24sXHJcbiAgICAgICAgc2V0dGluZzogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5TaGFyZTogY2MuQnV0dG9uLFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMOkUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8v5Yqg6L295LiA6KiAXHJcbiAgICAgICAgLy8gIHRoaXMub25lU2F5KCk7XHJcbiAgICAgICAgIHRoaXMubWFpbkJpbmRFdmVudCgpO1xyXG5cclxuXHJcbiAgICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgLy8gd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgLy8gICAgIG5hbWU6ICdhZGRDbGFzc2ljc0xldmVsJyxcclxuICAgICAgICAgICAgLy8gICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6IGxldmVsc1swXSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBsZXZlbEluZGV4OiAxXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgLy8gICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbmFtZTogJ2FkZENsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb250ZW50OiBsZXZlbHNbMV0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldmVsSW5kZXg6IDJcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAvLyAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dldENsYXNzaWNzTGV2ZWxOdW0nXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIGVycicpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQudG90YWw7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIGVycjEnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9hZEltZygpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICB0aGF0Lm9uZVNheSgpO1xyXG4gICAgICAgIC8vIH0sMTAwMDApXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB0aGlzLmluaXRTZXR0aW5nKCk7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuXHJcblxyXG4gICAgbG9hZEltZzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYmluZ0JnJyk7Ly/lm77niYflkYjnjrDkvY3nva5cclxuICAgICAgICB2YXIgaW1nU2VydmVVcmwgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vSFBJbWFnZUFyY2hpdmUuYXNweD9mb3JtYXQ9anMmaWR4PTAmbj0xJztcclxuICAgICAgICB2YXIgaW1nVXJsID0gJyc7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpbWdVcmwgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbScgKyByZXNwb25zZS5pbWFnZXNbMF0udXJsYmFzZSArICdfNzIweDEyODAuanBnJ1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnVXJsQmFzZSA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGltZ1VybCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIm+W7uuS4gOS4quS9v+eUqOWbvueJh+i1hOa6kOeahOaWsOiKgueCueWvueixoVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyTm9kZSA9IG5ldyBjYy5Ob2RlKCk7IC8v5Yib5bu65LiA5Liq5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUubmFtZSA9IFwic3RhcjFcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyU3ByaXRlID0gc3Rhck5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7IC8v5aKe5Yqg57K+54G157uE5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZTsgLy/orr7nva7nsr7ngbXnu4Tku7blm77niYfotYTmupBcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNpemVNb2RlID0gJ0NVU1RPTSc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLndpZHRoID0gY2Mud2luU2l6ZS53aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUubm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChzdGFyTm9kZSk7IC8v5Zy65pmv5Lit5aKe5Yqg5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgaW1nU2VydmVVcmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgb25lU2F5KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vdjEuaGl0b2tvdG8uY24vXCI7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGxldCBvbmVTYXlMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvbWFpbkJnL29uZVNheVwiKS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgaWYodGhhdC5vbmVTYXlMYWJlbCAmJiB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsKSB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYob25lU2F5TGFiZWwgJiYgb25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwgKSBvbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgLy/mjojmnYPnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIGxvZ2luTGV2ZWxMaXN0KCl7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2dpblR5cGUgPSAnd2VjaGF0JztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbGV2ZWxMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgLy/kuI3nmbvlvZXnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIHZpc2l0b3JMZXZlbExpc3QoKXtcclxuXHJcbiAgICAgICAgd2luZG93LmxvZ2luVHlwZSA9ICd2aXNpdG9yJztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbGV2ZWxMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG4gICAgICAgIC8vIGxldCBsZXZlbExpc3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxldmVsTGF5b3V0KTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobGV2ZWxMaXN0KTtcclxuICAgIH0sXHJcbiAgICBnZXRVc2VySW5mbygpe1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPlue8k+WtmGFwcElk5Yik5pat5piv5ZCm56ys5LiA5qyh6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnYXBwSWQnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuYXBwSWQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5sZXZlbEZpbmlzaE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmNsYXNzaWNzTGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0uY2xhc3NpY3NMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5ldExldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpe1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcElkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTpyZXMucmVzdWx0Lm9wZW5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmFwcElkID0gcmVzLnJlc3VsdC5vcGVuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+azqOWGjOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZFVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtYWluQmluZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIC8v5re75Yqg5o6I5p2D5oyJ6ZKuXHJcbiAgICAgICAgd3hMb2dpbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IHJlcy5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogcmVzLm5pY2tOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aOiOadg+Wksei0pScpXHJcbiAgICAgICAgfSx0aGlzLmxvZ2lucGxheS5ub2RlKTtcclxuICAgICAgICAvL+W8gOWni+a4uOaIj+aMiemSrlxyXG4gICAgICAgIGlmKHRoaXMubG9naW5wbGF5ID09IG51bGwpIHRoaXMubG9naW5wbGF5ID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9sb2dpbnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMubG9naW5wbGF5Lm5vZGUub24oJ2NsaWNrJywgdGhpcy5sb2dpbkxldmVsTGlzdCwgdGhpcylcclxuICAgICAgICBpZih0aGlzLnZpc2l0b3JwbGF5ID09IG51bGwpIHRoaXMudmlzaXRvcnBsYXkgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL3Zpc2l0b3JwbGF5JykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLnZpc2l0b3JwbGF5Lm5vZGUub24oJ2NsaWNrJywgdGhpcy52aXNpdG9yTGV2ZWxMaXN0LCB0aGlzKVxyXG5cclxuICAgICAgICBpZih0aGlzLm1haW5TaGFyZSA9PSBudWxsKSB0aGlzLm1haW5TaGFyZSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvbWFpblNoYXJlJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5tYWluU2hhcmUubm9kZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdFN0cmluZyA9ICAn5b+r5p2l5oyR5oiY4oCc55uK5pm65o6o566x4oCd5bCP5ri45oiP5ZCn77yBJztcclxuICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICfliIbkuqsnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5zZXR0aW5nID09IG51bGwpIHRoaXMuc2V0dGluZyA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvc2V0dGluZycpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZy5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2Nsb3NlU2V0dGluZycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL3RvdWNoTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlja01vdmUgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9jbGlja01vdmUvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcudG91Y2hNb3ZlKSB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB0b3VjaE1vdmUuc3RyaW5nID0gJ+W8gOWQr+inpuaRuOenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5jbGlja01vdmUpIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJztcclxuICAgICAgICAgICAgICAgIGVsc2UgY2xpY2tNb3ZlLnN0cmluZyA9ICflvIDlkK/mjInplK7np7vliqgnO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL3RvdWNoTW92ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbgm54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmUuc3RyaW5nID0gJ+W8gOWQr+inpuaRuOenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbjlhbPpl60g54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZighcmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOekuuiHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPIScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xpY2tNb3ZlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuCbngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcuY2xpY2tNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5byA5ZCv5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuOWFs+mXrSDngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiAhcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcuY2xpY2tNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o+Q56S66Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfoh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI8hJywxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3NldHRpbmdEaWFsb2cnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdFNldHRpbmcoKXtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19
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
