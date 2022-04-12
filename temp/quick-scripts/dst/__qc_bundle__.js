
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
    buildArea: null
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
            clearInterval(this.timeCounterTimer);
            this.timeCounterTimer = null;
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
            }).then(function (result) {
              var levelUploadNum = parseInt(res.result.total) + 1;
              (0, _common.Toast)('关卡' + levelUploadNum + '上传成功，即将跳回主界面', 1500);
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

    if (!window.setting.relast) cc.find('gameBtns/backStep/Background/Label', this.node).getComponent(cc.Label).string = '重玩';
    cc.find('gameBtns/backStep', this.node).on('click', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZUxheW91dC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXJyZW50TGV2ZWwiLCJlbGVTaXplIiwibGF5b3V0IiwiQXJyYXkiLCJibG9ja051bSIsInVwbG9hZExldmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibG9jayIsInR5cGUiLCJQcmVmYWIiLCJkaXNwbGF5TmFtZSIsIndhbGwiLCJib3giLCJiYWxsIiwicm9sZVVwIiwicm9sZVJpZ2h0Iiwicm9sZURvd24iLCJyb2xlTGVmdCIsInBvc2l0aW9uIiwiZ2FtZUJuIiwiU3ByaXRlIiwiYm94TnVtIiwic3RlcENvdW50ZXIiLCJzdGVwQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXIiLCJ0aW1lQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXJUaW1lciIsImxldmVsQ291bnRlciIsIm1vdmVIaXN0b3J5TGlzdCIsImxhc3RTY29yZSIsImxhc3RTdGVwTm9kZSIsImxhc3RUaW1lbm9kZSIsInJhbmtJdGVtIiwiYnVpbGRBcmVhIiwib25Mb2FkIiwidGhhdCIsImluaXRXaW5FbGUiLCJyZW5kZXJCZyIsImluaXRMZXZlbCIsImZpbmQiLCJub2RlIiwiaGVpZ2h0Iiwid2luU2l6ZSIsIndpZHRoIiwic3RhcnQiLCJhZGRUb3VjaE1vdmUiLCJwZW5kYW50QWRkRXZlbnQiLCJyZWFsU2l6IiwiaSIsIm4iLCJ4IiwieSIsInNpZ24iLCJjb3ZlciIsImluaXRQb3NpdGlvbiIsImxlbmd0aCIsInN0YXJ0WCIsInN0YXJ0WSIsIm5ld0Jsb2NrIiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsImFkZENoaWxkIiwicmVuZGVyQm4iLCJnZXRDb21wb25lbnQiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiYmdVcmxCYXNlIiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwicmVjdCIsInNwcml0ZUZyYW1lIiwicmVuZGVyTGF5b3V0IiwiZGVzdHJveUFsbENoaWxkcmVuIiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0IiwibW92ZVVwIiwicmVzZXRQb3NpdGlvbiIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJkaXJlY3Rpb24iLCJzZXR0aW5nIiwicmVsYXN0Iiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiLCJzdWNjZXNzIiwicmVzdWx0IiwiZ2V0U3RvcmFnZSIsInJlcyIsInB1c2giLCJzdHJpbmciLCJjb3ZlckJveE51bSIsInNob3dSZXN1bHQiLCJjbGVhckludGVydmFsIiwibW92ZU11c2ljIiwicGF1c2VkIiwic3RvcCIsInBhdXNlIiwicGxheSIsInRvdWNoTW92ZSIsImZpZ3VyZUxvY2F0aW9uIiwib24iLCJldmVudCIsImdldExvY2F0aW9uIiwiZW5kTG9jYXRpb24iLCJNYXRoIiwiYWJzIiwiQ2FudmFzTm9kZSIsImNvbnNvbGUiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJuZXdNeVByZWZhYiIsIkxhYmVsIiwiZnJvbSIsImxldmVsSW5kZXgiLCJjbGFzc2ljc0xldmVsTnVtIiwib3BhY2l0eSIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwiaW5pdFBlbmRhbnQiLCJMb2FkaW5nIiwic2hvdyIsImNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInRoZW4iLCJjb250ZW50IiwidG90YWwiLCJhcHBJZCIsInVzZXIiLCJuaWNrTmFtZSIsImxvZ2luSW5mbyIsInN1YnN0cmluZyIsInBvcnRyYWl0IiwiYXZhdGFyVXJsIiwibGV2ZWxVcGxvYWROdW0iLCJwYXJzZUludCIsInNldFRpbWVvdXQiLCJoaWRlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJlcnJvciIsInJlcGxheUxheW91dCIsInNob3dMZXZlbFJhbmsiLCJ0aXRTdHJpbmciLCJzaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInF1ZXJ5IiwibG9hZGVyIiwibG9hZFJlcyIsInVzZVN0ZXAiLCJ1c2VUaW1lIiwicmVuZGVyTGFzdFNjb3JlIiwiY3VyTGV2ZWxOdW0iLCJsZXZlbEZpbmlzaE51bSIsImZhaWwiLCJsZXZlbE5vZGUiLCJOb2RlIiwic2V0QW5jaG9yUG9pbnQiLCJob3Jpem9udGFsQWxpZ24iLCJhZGRDb21wb25lbnQiLCJsZXZlbEJ5IiwiZm9udFNpemUiLCJlbmFibGVCb2xkIiwibGluZUhlaWdodCIsInRpbWVOb2RlIiwic2V0SW50ZXJ2YWwiLCJiaW5kIiwic3BsaWNlIiwiYmFjayIsImNsaWNrTW92ZSIsInBvcCIsImxldmVsQ2xhc3NpZnkiLCJzdGVwIiwidGltZSIsInJhbmtQYWdlIiwicmFua1BhZ2VTaXplIiwicmVzb3VyY2UiLCJyZW5kZXJMZXZlbFJhbmtMaXN0IiwicGFnZSIsInBhZ2VTaXplIiwiY3VycmVudEl0ZW1OdW0iLCJjaGlsZHJlbkNvdW50IiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9BOztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBQSxNQUFNLENBQUNDLFlBQVAsR0FBc0IsRUFBdEI7QUFFQUQsTUFBTSxDQUFDRSxPQUFQLEdBQWlCLEVBQWpCO0FBQ0FGLE1BQU0sQ0FBQ0csTUFBUCxHQUFnQixJQUFJQyxLQUFKLEVBQWhCO0FBQ0FKLE1BQU0sQ0FBQ0ssUUFBUCxHQUFrQixFQUFsQjtBQUNBTCxNQUFNLENBQUNNLFdBQVAsR0FBcUIsSUFBckI7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEMs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QUNtQyxLQUFSLENBQWN4RixHQUFkOztBQUNBbUUsd0JBQVFrQixJQUFSO0FBQ0gsT0F0Q0Q7QUF1Q0g7QUFFSjtBQWpuQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQge2Zvcm1hdGVSYW5rVGltZSwgTG9hZGluZywgVG9hc3R9IGZyb20gXCIuL2NvbW1vblwiO1xyXG53aW5kb3cuY3VycmVudExldmVsID0gW107XHJcblxyXG53aW5kb3cuZWxlU2l6ZSA9IDM1O1xyXG53aW5kb3cubGF5b3V0ID0gbmV3IEFycmF5KCk7XHJcbndpbmRvdy5ibG9ja051bSA9IDEyO1xyXG53aW5kb3cudXBsb2FkTGV2ZWwgPSBudWxsO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBibG9jazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidibG9jaydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTond2FsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidib3gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWxsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JhbGwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlVXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVVwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZVJpZ2h0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVSaWdodCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVEb3duOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVEb3duJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZUxlZnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZUxlZnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnYW1lQm46Y2MuU3ByaXRlLFxyXG4gICAgICAgIGJveE51bTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwQ291bnRlcjpudWxsLFxyXG4gICAgICAgIHN0ZXBDb3VudGVyVmFsdWU6IDAsXHJcbiAgICAgICAgdGltZUNvdW50ZXI6bnVsbCxcclxuICAgICAgICB0aW1lQ291bnRlclZhbHVlOjAsXHJcbiAgICAgICAgdGltZUNvdW50ZXJUaW1lcjpudWxsLFxyXG4gICAgICAgIGxldmVsQ291bnRlcjogbnVsbCxcclxuICAgICAgICBtb3ZlSGlzdG9yeUxpc3Q6W10sXHJcbiAgICAgICAgbGFzdFNjb3JlOiBudWxsLFxyXG4gICAgICAgIGxhc3RTdGVwTm9kZTogbnVsbCxcclxuICAgICAgICBsYXN0VGltZW5vZGU6IG51bGwsXHJcbiAgICAgICAgcmFua0l0ZW06Y2MuUHJlZmFiLFxyXG4gICAgICAgIGJ1aWxkQXJlYTpudWxsXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmluaXRXaW5FbGUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlckJnKCk7XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyW5b2T5YmN5YWz5Y2hXHJcbiAgICAgICAgdGhpcy5pbml0TGV2ZWwoKTtcclxuICAgICAgICBjYy5maW5kKCdnYW1lQnRucycsdGhpcy5ub2RlKS5oZWlnaHQgPSAgKGNjLndpblNpemUuaGVpZ2h0IC0gY2Mud2luU2l6ZS53aWR0aCkvMjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRUb3VjaE1vdmUoKTtcclxuICAgICAgICB0aGlzLnBlbmRhbnRBZGRFdmVudCgpO1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGluaXRXaW5FbGUoKXtcclxuICAgICAgICB0aGlzLmJ1aWxkQXJlYSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYnVpbGRBcmVhJyk7XHJcbiAgICAgICAgbGV0IHJlYWxTaXogPSBjYy53aW5TaXplLndpZHRoL3dpbmRvdy5ibG9ja051bTtcclxuICAgICAgICB3aW5kb3cuZWxlU2l6ZSA9IHJlYWxTaXo7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgd2luZG93LmxheW91dFtpXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHt4OjAseTowLHNpZ246MCxjb3ZlcjpudWxsfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRQb3NpdGlvbihsYXlvdXQpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7fTtcclxuICAgICAgICB0aGlzLmJveE51bSA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxsYXlvdXQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgbGF5b3V0WzBdLmxlbmd0aDsgbisrKXtcclxuICAgICAgICAgICAgICAgIC8vbGF5b3V0W2ldW25dLnNpZ24gLS0g5Lq654mp5L2N572uXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbaV1bbl0uc2lnbiA9PSA0IHx8IGxheW91dFtpXVtuXS5zaWduID09IDUgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNiB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA3KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+euseWtkOaVsOmHj1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W2ldW25dLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHJlbmRlckJnKCl7XHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC0oY2Mud2luU2l6ZS53aWR0aC8yKTtcclxuICAgICAgICBsZXQgc3RhcnRZID0gKHdpbmRvdy5lbGVTaXplKndpbmRvdy5ibG9ja051bSkvMjtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBuKndpbmRvdy5lbGVTaXplICsgc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSAtaSp3aW5kb3cuZWxlU2l6ZSArIHN0YXJ0WTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ246MCxcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjpudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgIC8vIOS4uuiuvue9ruS9jee9rlxyXG4gICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJCbigpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZUJuID09IG51bGwpIHRoaXMuZ2FtZUJuID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9nYW1lQm4nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHdpbmRvdy5iZ1VybEJhc2UrICdfNDAweDI0MC5qcGcnLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUsIGNjLnJlY3QoMCwwLDQwMCwyNDApKTtcclxuICAgICAgICAgICAgdGhhdC5nYW1lQm4uc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJMYXlvdXQobGF5b3V0KXtcclxuICAgICAgICB0aGlzLmJ1aWxkQXJlYS5kZXN0cm95QWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSB3aW5kb3cubGF5b3V0W2ldW25dLng7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHdpbmRvdy5sYXlvdXRbaV1bbl0ueTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChsYXlvdXRbaV1bbl0uc2lnbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3QmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdXYWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy53YWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3V2FsbC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdXYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCb3guc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Qm94KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3QmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVVcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVVwLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVSaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVJpZ2h0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVSaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVEb3duID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVEb3duLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVEb3duKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZUxlZnQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvbGVMZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZUxlZnQuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Um9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVVwKGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG5cclxuICAgICAgICAvL+S4iuS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiK5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5LTJdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uY292ZXIpIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOS4iuS4gOagvOeQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5LTJdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTJdW3hdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uY292ZXIpIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3Zlcil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3ZlRG93bihsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+S4i+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4i+S4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA2O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiL5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5KzJdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsyXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3krMV1beF0uY292ZXIpIGxheW91dFt5KzFdW3hdLmNvdmVyID0gNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiL5LiA5qC85Li655CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3krMl1beF0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMl1beF0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeSsxXVt4XS5jb3ZlcikgbGF5b3V0W3krMV1beF0uY292ZXIgPSA2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5jb3ZlciA9IDY7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3Zlcil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3ZlTGVmdChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+W3puS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3ldW3gtMl0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5jb3ZlcikgbGF5b3V0W3ldW3gtMV0uY292ZXIgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0yXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMl0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0yXS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5XVt4LTFdLmNvdmVyKSBsYXlvdXRbeV1beC0xXS5jb3ZlciA9IDc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLmNvdmVyID0gNztcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyICYmIGxheW91dFt5XVt4XS5jb3ZlciAhPSAyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgfSxcclxuICAgIG1vdmVSaWdodChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+WPs+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5Y+z5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOWPs+S4gOagvOS4uueQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3ZlciAmJiBsYXlvdXRbeV1beF0uY292ZXIgIT0gMil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KGxheW91dClcclxuICAgIH0sXHJcbiAgICByZXNldFBvc2l0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aYr+WQpuW8gOWQr+WbnumAgOWKn+iDvVxyXG4gICAgICAgIGlmICh3aW5kb3cuc2V0dGluZy5yZWxhc3QgJiYgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogd2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsYXN0TGF5b3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RlcENvdW50ZXJWYWx1ZSArKztcclxuICAgICAgICAvLyB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgbGV0IGNvdmVyQm94TnVtID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHdpbmRvdy5jdXJyZW50TGV2ZWwubGVuZ3RoIDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbjx3aW5kb3cuY3VycmVudExldmVsWzBdLmxlbmd0aCA7IG4rKyl7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuY3VycmVudExldmVsW2ldW25dLmNvdmVyICYmIHdpbmRvdy5jdXJyZW50TGV2ZWxbaV1bbl0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJCb3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib3hOdW0gPT0gY292ZXJCb3hOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5oyR5oiY5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lQ291bnRlclRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93Lm1vdmVNdXNpYyAmJiAhd2luZG93Lm1vdmVNdXNpYy5wYXVzZWQpIHdpbmRvdy5tb3ZlTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgIGlmKHdpbmRvdy5tb3ZlTXVzaWMgJiYgIXdpbmRvdy5tb3ZlTXVzaWMucGF1c2VkKSB3aW5kb3cubW92ZU11c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgaWYod2luZG93Lm1vdmVNdXNpYykgd2luZG93Lm1vdmVNdXNpYy5wbGF5KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFRvdWNoTW92ZSgpe1xyXG4gICAgICAgIGlmKCF3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBmaWd1cmVMb2NhdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBmaWd1cmVMb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGVuZExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMoZmlndXJlTG9jYXRpb24ueCAtIGVuZExvY2F0aW9uLngpID4gTWF0aC5hYnMoZmlndXJlTG9jYXRpb24ueSAtIGVuZExvY2F0aW9uLnkpKXtcclxuICAgICAgICAgICAgICAgIGlmKChmaWd1cmVMb2NhdGlvbi54IC0gZW5kTG9jYXRpb24ueCkgPCAtNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Y+z5ruRXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlUmlnaHQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKChmaWd1cmVMb2NhdGlvbi54IC0gZW5kTG9jYXRpb24ueCkgPiA1MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlt6bmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVMZWZ0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKChmaWd1cmVMb2NhdGlvbi55IC0gZW5kTG9jYXRpb24ueSkgPCAtNTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5LiK5ruRXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlVXAod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKChmaWd1cmVMb2NhdGlvbi55IC0gZW5kTG9jYXRpb24ueSkgPiA1MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIvmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVEb3duKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIHNob3dSZXN1bHQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvdXNlVGltZScsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmraXmlbDvvJpcIisgdGhhdC5zdGVwQ291bnRlclZhbHVlKyfmraUnO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvdXNlU3RlcCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLnlKjml7bvvJpcIisgdGhhdC50aW1lQ291bnRlclZhbHVlKyfnp5InO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSAhPSAnYnVpbGQnICYmIHdpbmRvdy5sZXZlbEluZGV4ID49IHdpbmRvdy5jbGFzc2ljc0xldmVsTnVtKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvbmV4dC9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAn5LiK5Lyg5YWz5Y2hJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tICE9ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxldmVsSW5kZXggPCB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0TGV2ZWwoKVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dldENsYXNzaWNzTGV2ZWxOdW0nXHJcbiAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRDbGFzc2ljc0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB3aW5kb3cudXBsb2FkTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiByZXMucmVzdWx0LnRvdGFsKzEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZT93aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV2ZWxVcGxvYWROdW0gPSBwYXJzZUludChyZXMucmVzdWx0LnRvdGFsKSsxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5YWz5Y2hJytsZXZlbFVwbG9hZE51bSsn5LiK5Lyg5oiQ5Yqf77yM5Y2z5bCG6Lez5Zue5Li755WM6Z2iJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDlpLHotKUnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9yZXBsYXknLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3JhbmsnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KCfmtYvor5XlhbPljaHmsqHmnInmjpLooYzmppwnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNob3dMZXZlbFJhbmsoKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50Qmcvc2hhcmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aXRTdHJpbmcgPSAgJ+ebiuaZuuaOqOeusSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gIT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICfnrKwnK3dpbmRvdy5sZXZlbEluZGV4KyflhbMnKyct5L2/55So5q2l5pWw77yaJysgdGhhdC5zdGVwQ291bnRlclZhbHVlICsnLeaMkeaImOaIkOWKn++8gSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZysn5bCP5ri45oiP77yM5b+r5p2l5oyR5oiY5ZCn77yBJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lT3ZlckFsZXJ0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sMClcclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJidWlsZFwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8v5LiK5Lyg5YiG5pWwXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGF0Lmxhc3RTY29yZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDliIbmlbDkuK0uLi4nLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkQ2xhc3NpY3NMZXZlbFNjb3JlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lP3dpbmRvdy5sb2dpbkluZm8ubmlja05hbWU6J+a4uOWuoicrd2luZG93LnVzZXIuYXBwSWQuc3Vic3RyaW5nKHdpbmRvdy51c2VyLmFwcElkLmxlbmd0aC01KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKHRoYXQubGFzdFNjb3JlLnVzZVN0ZXAsdGhhdC5sYXN0U2NvcmUudXNlVGltZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gfHwgdGhhdC50aW1lQ291bnRlclZhbHVlIDwgdGhhdC5sYXN0U2NvcmUudXNlVGltZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoYXQuc3RlcENvdW50ZXJWYWx1ZSA8IHRoYXQubGFzdFNjb3JlLnVzZVN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUodGhhdC5sYXN0U2NvcmUudXNlU3RlcCx0aGF0Lmxhc3RTY29yZS51c2VUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5YiG5pWw5LitLi4uJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlQ2xhc3NpY3NMZXZlbFNjb3JlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGN1ckxldmVsTnVtID0gd2luZG93LmxldmVsSW5kZXg7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjAgJiYgcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtIDwgY3VyTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gY3VyTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcElkID0gd2luZG93LnVzZXIuYXBwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZXZlbEZpbmlzaE51bSA9IGN1ckxldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWUpIGRhdGEubmlja05hbWUgPSB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsKSBkYXRhLnBvcnRyYWl0ID0gd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3VwZGF0ZVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlcGxheUxheW91dCgpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAga2V5OiAnaW5pdExldmVsJyxcclxuICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKCl7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBpbml0UGVuZGFudCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAvL+WFs+WNoVxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbGV2ZWxOb2RlID0gbmV3IGNjLk5vZGUoJ2xldmVsQ291bnRlcicpO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUud2lkdGggPSAgNzU2O1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuaGVpZ2h0ID0gMjQwO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuaG9yaXpvbnRhbEFsaWduID0gJ2NlbnRlcidcclxuICAgICAgICAgICAgdmFyIGxldmVsQ291bnRlciA9IGxldmVsTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigwLCAgKGNjLndpblNpemUuaGVpZ2h0LzIpIC0gKGNjLndpblNpemUuaGVpZ2h0KjAuMDUpKVxyXG4gICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxCeSl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzIC0gJyt3aW5kb3cubGV2ZWxCeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmZvbnRTaXplID0gNjA7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5lbmFibGVCb2xkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gbGV2ZWxDb3VudGVyLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmxpbmVIZWlnaHQgPSA2MDtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmhvcml6b250YWxBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlciA9IGxldmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbE5vZGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEJ5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyAtICcrd2luZG93LmxldmVsQnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfmtYvor5XlhbPljaEnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mraXmlbBcclxuICAgICAgICBpZih0aGlzLnN0ZXBDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdzdGVwQ291bnRlcicpO1xyXG4gICAgICAgICAgICBub2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDgwKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gJ+atpeaVsO+8miAwJztcclxuICAgICAgICAgICAgdGhpcy5zdGVwQ291bnRlciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcENvdW50ZXJWYWx1ZSAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/nlKjml7ZcclxuICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgdGltZU5vZGUgPSBuZXcgY2MuTm9kZSgndGltZUNvdW50ZXInKTtcclxuICAgICAgICAgICAgdGltZU5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lQ291bnRlciA9IHRpbWVOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oMCAsIChjYy53aW5TaXplLndpZHRoLzIpICsgODApXHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLnN0cmluZyA9ICfnlKjml7bvvJogMCc7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXIgPSB0aW1lTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aW1lTm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGlzLnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5tb3ZlSGlzdG9yeUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlSGlzdG9yeUxpc3Quc3BsaWNlKDAsdGhpcy5tb3ZlSGlzdG9yeUxpc3QubGVuZ3RoKVxyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6XCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBwZW5kYW50QWRkRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgY2MuZmluZCgnYmFjaycsdGhpcy5ub2RlKS5vbignY2xpY2snLHRoaXMuYmFjaywgdGhpcylcclxuICAgICAgICAvL+W8gOWQr+eCueWHu+enu+WKqFxyXG4gICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSkge1xyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy91cCcsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlVXAod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9yaWdodCcsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlUmlnaHQod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9kb3duJyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVEb3duKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbGVmdCcsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlTGVmdCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3VwJyx0aGlzLm5vZGUpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9yaWdodCcsdGhpcy5ub2RlKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvZG93bicsdGhpcy5ub2RlKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbGVmdCcsdGhpcy5ub2RlKS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYoIXdpbmRvdy5zZXR0aW5nLnJlbGFzdCkgY2MuZmluZCgnZ2FtZUJ0bnMvYmFja1N0ZXAvQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfph43njqknXHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvYmFja1N0ZXAnLHRoaXMubm9kZSkub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLnJlbGFzdCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGF0Lm1vdmVIaXN0b3J5TGlzdC5sZW5ndGggPiAxICYmIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSA+PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhhdC5tb3ZlSGlzdG9yeUxpc3RbdGhhdC5tb3ZlSGlzdG9yeUxpc3QubGVuZ3RoLTFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSAtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RlcENvdW50ZXIuc3RyaW5nID0gXCLmraXmlbDvvJpcIiArIHRoYXQuc3RlcENvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlcGxheUxheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbWVudScsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcik7XHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gdGhhdC5ub2RlO1xyXG4gICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9jb250aW51ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoYXQudGltZUNvdW50ZXJUaW1lciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoYXQudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoYXQpLDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9yZXBsYXknLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL3JhbmsnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+a1i+ivleWFs+WNoeayoeacieaOkuihjOamnCcsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd0xldmVsUmFuaygpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vc2hhcmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpdFN0cmluZyA9ICAn55uK5pm65o6o566xJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gIT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAn56ysJyt3aW5kb3cubGV2ZWxJbmRleCsn5YWzLeW/q+adpeaMkeaImOWQpyEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICflsI/muLjmiI/vvIzlv6vmnaXmjJHmiJjlkKfvvIEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJy3kvb/nlKjmraXmlbDvvJonXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICfliIbkuqsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lTWVudScsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICB9LHRoaXMpXHJcbiAgICB9LFxyXG4gICAgaW5pdExldmVsKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSgn5pegJywn5pegJylcclxuXHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6J2J1aWxkTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluaMguS7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OididWlsZExldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/nu4/lhbjlhbPljaFcclxuICAgICAgICAgICAgaWYod2luZG93LmxldmVsQ2xhc3NpZnkgPT0gJ2NsYXNzaWNzTGV2ZWwnKXtcclxuICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDp3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMucmVzdWx0LmRhdGFbMF0uY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxCeSA9IHJlcy5yZXN1bHQuZGF0YVswXS5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW5oyC5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWxTY29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6d2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0gcmVzLnJlc3VsdC5kYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSh0aGF0Lmxhc3RTY29yZS51c2VTdGVwLHRoYXQubGFzdFNjb3JlLnVzZVRpbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUoJ+aXoCcsJ+aXoCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEluZGV4ID09IDEpIFRvYXN0KCdUaXA6IOWPr+a7keWKqOWxj+W5leaOp+WItuS6uueJqScsMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+e9kee7nOWFs+WNoVxyXG4gICAgICAgICAgICBlbHNle1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJhY2soKXtcclxuICAgICAgICB0aGlzLmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVDb3VudGVyVGltZXIpXHJcbiAgICAgICAgdGhpcy50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICBpZih3aW5kb3cuZnJvbSl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh3aW5kb3cuZnJvbSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTGFzdFNjb3JlKHN0ZXAsdGltZSl7XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAvL+acgOS9s+atpeaVsFxyXG4gICAgICAgIGlmKHRoYXQubGFzdFN0ZXBOb2RlID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbGFzdFN0ZXBOb2RlID0gbmV3IGNjLk5vZGUoJ2xhc3RTdGVwTm9kZScpO1xyXG4gICAgICAgICAgICBsYXN0U3RlcE5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciBzdGVwQ291bnRlciA9IGxhc3RTdGVwTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKC0oY2Mud2luU2l6ZS53aWR0aC8yKSArIChjYy53aW5TaXplLndpZHRoKjAuMDUpLCAgKGNjLndpblNpemUud2lkdGgvMikgKyAxNjApXHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLnN0cmluZyA9ICfmnIDkvbPmiJDnu6nvvJrmraXmlbAgJysgc3RlcCtcIiAtIOeUqOaXtiBcIit0aW1lO1xyXG4gICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZSA9IGxhc3RTdGVwTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoYXQubm9kZS5hZGRDaGlsZChsYXN0U3RlcE5vZGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZS5zdHJpbmcgPSAn5pyA5L2z5oiQ57up77ya5q2l5pWwICcrIHN0ZXArXCIgLSDnlKjml7YgXCIrdGltZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBzaG93TGV2ZWxSYW5rKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgdmFyIHJhbmtQYWdlID0gMSxyYW5rUGFnZVNpemUgPSA1MDtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGNjLmZpbmQoJ3JhbmtMaXN0L3ZpZXcvY29udGVudCcsbmV3TXlQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY2xvc2UnLG5ld015UHJlZmFiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGlmKHRoYXQucmFua0l0ZW0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0l0ZW0nLCBmdW5jdGlvbiAoZXJyLHJlc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yYW5rSXRlbSA9IGNjLmluc3RhbnRpYXRlKHJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZmluZCgncmFua0xpc3QnLG5ld015UHJlZmFiKS5vbignYm91bmNlLWJvdHRvbScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByYW5rUGFnZSsrO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMZXZlbFJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3RoTGV2ZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfmraUg5pWwJ1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHBhZ2UscGFnZVNpemUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY3VycmVudEl0ZW1OdW0gPSBjb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDp3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGk8PSByZXMucmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMucmVzdWx0LmRhdGFbaS0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGF0LnJhbmtJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZFJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkrY3VycmVudEl0ZW1OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkRGF0ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0ZVJhbmtUaW1lKGRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEudXNlU3RlcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShkYXRhLnBvcnRyYWl0Kyc/YWFhPWFhLmpwZycsICBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGROYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIitkYXRhLm5pY2tOYW1lK1wiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJiZ011c2ljIiwibW92ZU11c2ljIiwiY2MiLCJzeXMiLCJwbGF0Zm9ybSIsIldFQ0hBVF9HQU1FIiwid3giLCJjbG91ZCIsImluaXQiLCJ1c2VyIiwiY2xhc3NpY3NMZXZlbE51bSIsIm5ldExldmVsTnVtIiwibGV2ZWxJbmRleCIsImJnVXJsQmFzZSIsImxldmVsRmluaXNoTnVtIiwibG9naW5JbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbmVTYXlMYWJlbCIsInR5cGUiLCJMYWJlbCIsImxvZ2lucGxheSIsIkJ1dHRvbiIsInZpc2l0b3JwbGF5IiwibWFpblJhbmsiLCJsZXZlbExheW91dCIsIlByZWZhYiIsImJ1aWxkTGV2ZWwiLCJzZXR0aW5nIiwibWFpblNoYXJlIiwicmFua0l0ZW0iLCJvbkxvYWQiLCJtYWluQmluZEV2ZW50IiwiZnJvbSIsImdhbWUiLCJvbiIsIkVWRU5UX1NIT1ciLCJwYXVzZWQiLCJwYXVzZSIsInBsYXkiLCJzdGFydCIsInRoYXQiLCJMb2FkaW5nIiwic2hvdyIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJoaWRlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibG9hZEltZyIsIm9uZVNheSIsImdldFVzZXJJbmZvIiwiaW5pdFNldHRpbmciLCJjb250YWluZXIiLCJmaW5kIiwiaW1nU2VydmVVcmwiLCJpbWdVcmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImltYWdlcyIsInVybGJhc2UiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlRnJhbWUiLCJzdGFyTm9kZSIsIk5vZGUiLCJzZXRQb3NpdGlvbiIsInN0YXJTcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzaXplTW9kZSIsIm5vZGUiLCJ3aWR0aCIsIndpblNpemUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiYWRkQ2hpbGQiLCJvcGFjaXR5VGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJvcGVuIiwic2VuZCIsInVybCIsImdldENvbXBvbmVudCIsInN0cmluZyIsImhpdG9rb3RvIiwibmV3WEhSIiwibG9naW5MZXZlbExpc3QiLCJsb2dpblR5cGUiLCJDYW52YXNOb2RlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImxvYWRlciIsImxvYWRSZXMiLCJ2aXNpdG9yTGV2ZWxMaXN0Iiwic2hvd01haW5SYW5rIiwicmFua1BhZ2UiLCJyYW5rUGFnZVNpemUiLCJjb250ZW50IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJyZXNvdXJjZSIsInJlbmRlck1haW5SYW5rTGlzdCIsInBhZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRJdGVtTnVtIiwiY2hpbGRyZW5Db3VudCIsImRhdGEiLCJsZW5ndGgiLCJpIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIiwicG9ydHJhaXQiLCJnZXRTdG9yYWdlIiwia2V5Iiwic3VjY2VzcyIsImFwcElkIiwiZmFpbCIsInNldFN0b3JhZ2UiLCJvcGVuaWQiLCJzdWJzdHJpbmciLCJBcnJheSIsInd4TG9naW5CdG4iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInRpdFN0cmluZyIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicXVlcnkiLCJ0b3VjaE1vdmUiLCJjbGlja01vdmUiLCJyZWxhc3QiLCJtdXNpYyIsImNvbXBsZXRlIiwic2V0TXVzaWMiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsInVzZVdlYkF1ZGlvSW1wbGVtZW50IiwicmVzb3VyY2VzIiwibG9hZCIsIkF1ZGlvQ2xpcCIsImNsaXAiLCJzcmMiLCJsb29wIiwicGxheWJhY2tSYXRlIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7O0FBdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLEdBQVAsR0FBYSx5QkFBYjtBQUNBRCxNQUFNLENBQUNFLE9BQVAsR0FBZSxJQUFmO0FBQ0FGLE1BQU0sQ0FBQ0csU0FBUCxHQUFpQixJQUFqQjs7QUFDQSxJQUFJQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsUUFBUCxLQUFvQkYsRUFBRSxDQUFDQyxHQUFILENBQU9FLFdBQS9CLEVBQTRDO0FBQ3hDQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjO0FBQUNULElBQUFBLEdBQUcsRUFBRUQsTUFBTSxDQUFDQztBQUFiLEdBQWQ7QUFDSDs7QUFDREQsTUFBTSxDQUFDVyxJQUFQLEdBQWMsRUFBZDtBQUNBWCxNQUFNLENBQUNZLGdCQUFQLEdBQTBCLENBQTFCO0FBQ0FaLE1BQU0sQ0FBQ2EsV0FBUCxHQUFxQixDQUFyQjtBQUNBYixNQUFNLENBQUNjLFVBQVAsR0FBb0IsQ0FBcEI7QUFDQWQsTUFBTSxDQUFDZSxTQUFQLEdBQW1CLEVBQW5CO0FBQ0FmLE1BQU0sQ0FBQ1csSUFBUCxDQUFZSyxjQUFaLEdBQTZCLENBQTdCO0FBQ0FoQixNQUFNLENBQUNpQixTQUFQLEdBQW1CO0FBQ2ZDLEVBQUFBLFNBQVMsRUFBRSxJQURJO0FBRWZDLEVBQUFBLFFBQVEsRUFBRTtBQUZLLENBQW5CO0FBT0FmLEVBQUUsQ0FBQ2dCLEtBQUgsQ0FBUztBQUNMLGFBQVNoQixFQUFFLENBQUNpQixTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRDLE1BQUFBLElBQUks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QUFDSjtBQXRqQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbndpbmRvdy5lbnYgPSBcImNsb3VkMS01Z3ZidWl5M2RkOTlmNjNjXCJcclxud2luZG93LmJnTXVzaWM9bnVsbDtcclxud2luZG93Lm1vdmVNdXNpYz1udWxsO1xyXG5pZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgIHd4LmNsb3VkLmluaXQoe2Vudjogd2luZG93LmVudn0pXHJcbn1cclxud2luZG93LnVzZXIgPSB7fTtcclxud2luZG93LmNsYXNzaWNzTGV2ZWxOdW0gPSAwO1xyXG53aW5kb3cubmV0TGV2ZWxOdW0gPSAwO1xyXG53aW5kb3cubGV2ZWxJbmRleCA9IDA7XHJcbndpbmRvdy5iZ1VybEJhc2UgPSAnJztcclxud2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSAwO1xyXG53aW5kb3cubG9naW5JbmZvID0ge1xyXG4gICAgYXZhdGFyVXJsOiBudWxsLFxyXG4gICAgbmlja05hbWU6IG51bGxcclxufVxyXG5cclxuaW1wb3J0IHt3eExvZ2luLFRvYXN0LExvYWRpbmcsZm9ybWF0ZVJhbmtUaW1lfSBmcm9tIFwiLi9jb21tb25cIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgb25lU2F5TGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2lucGxheTogY2MuQnV0dG9uLFxyXG4gICAgICAgIHZpc2l0b3JwbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgbWFpblJhbms6IGNjLkJ1dHRvbixcclxuICAgICAgICBsZXZlbExheW91dDogY2MuUHJlZmFiLFxyXG4gICAgICAgIGJ1aWxkTGV2ZWw6IGNjLkJ1dHRvbixcclxuICAgICAgICBzZXR0aW5nOiBjYy5CdXR0b24sXHJcbiAgICAgICAgbWFpblNoYXJlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgcmFua0l0ZW06Y2MuUHJlZmFiLFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMOkUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8v5Yqg6L295LiA6KiAXHJcbiAgICAgICAgLy8gIHRoaXMub25lU2F5KCk7XHJcbiAgICAgICAgIHRoaXMubWFpbkJpbmRFdmVudCgpO1xyXG4gICAgICAgICB3aW5kb3cuZnJvbSA9ICdtYWluJztcclxuICAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumHjeaWsOi/lOWbnua4uOaIj1wiKTtcclxuICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmICF3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiB3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBsYXkoKTtcclxuICAgICAgICAgfSx0aGlzKTtcclxuICAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcblxyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdnZXRDbGFzc2ljc0xldmVsTnVtJ1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQudG90YWw7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkSW1nKCk7XHJcbiAgICAgICAgdGhpcy5vbmVTYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNldHRpbmcoKTtcclxuXHJcblxyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGxvYWRJbWc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2JpbmdCZycpOy8v5Zu+54mH5ZGI546w5L2N572uXHJcbiAgICAgICAgdmFyIGltZ1NlcnZlVXJsID0gJ2h0dHBzOi8vd3d3LmJpbmcuY29tL0hQSW1hZ2VBcmNoaXZlLmFzcHg/Zm9ybWF0PWpzJmlkeD0wJm49MSc7XHJcbiAgICAgICAgdmFyIGltZ1VybCA9ICcnO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgaW1nVXJsID0gJ2h0dHBzOi8vY24uYmluZy5jb20nICsgcmVzcG9uc2UuaW1hZ2VzWzBdLnVybGJhc2UgKyAnXzcyMHgxMjgwLmpwZydcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ1VybEJhc2UgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbScgKyByZXNwb25zZS5pbWFnZXNbMF0udXJsYmFzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShpbWdVcmwsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/liJvlu7rkuIDkuKrkvb/nlKjlm77niYfotYTmupDnmoTmlrDoioLngrnlr7nosaFcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3Rhck5vZGUgPSBuZXcgY2MuTm9kZSgpOyAvL+WIm+W7uuS4gOS4quaWsOiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLm5hbWUgPSBcInN0YXIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUuc2V0UG9zaXRpb24oMCwwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhclNwcml0ZSA9IHN0YXJOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpOyAvL+WinuWKoOeyvueBtee7hOS7tlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5zaXplTW9kZSA9ICdDVVNUT00nO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUubm9kZS53aWR0aCA9IGNjLndpblNpemUud2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLm5vZGUuaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoc3Rhck5vZGUpOyAvL+WcuuaZr+S4reWinuWKoOaWsOiKgueCuVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eVRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcGFjaXR5Pj0yNTUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChvcGFjaXR5VGltZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5VGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSw1KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiZ2V0XCIsIGltZ1NlcnZlVXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSxcclxuICAgIG9uZVNheSgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgdXJsID0gXCJodHRwczovL3YxLmhpdG9rb3RvLmNuL1wiO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBsZXQgb25lU2F5TGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL21haW5CZy9vbmVTYXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgaWYodGhhdC5vbmVTYXlMYWJlbCAmJiB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsKSB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYob25lU2F5TGFiZWwgJiYgb25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwgKSBvbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgdGhpcy5vbmVTYXlMYWJlbC5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBuZXdYSFIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgbmV3WEhSLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdYSFIucmVhZHlTdGF0ZSA9PSA0ICYmIChuZXdYSFIuc3RhdHVzID49IDIwMCAmJiBuZXdYSFIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICBKU09OLnBhcnNlKG5ld1hIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoYXQub25lU2F5TGFiZWwgJiYgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCkgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYob25lU2F5TGFiZWwgJiYgb25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwgKSBvbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBuZXdYSFIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBuZXdYSFIuc2VuZCgpO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICB9LFxyXG4gICAgLy/mjojmnYPnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIGxvZ2luTGV2ZWxMaXN0KCl7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2dpblR5cGUgPSAnd2VjaGF0JztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbGV2ZWxMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgLy/kuI3nmbvlvZXnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIHZpc2l0b3JMZXZlbExpc3QoKXtcclxuXHJcbiAgICAgICAgd2luZG93LmxvZ2luVHlwZSA9ICd2aXNpdG9yJztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbGV2ZWxMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG4gICAgICAgIC8vIGxldCBsZXZlbExpc3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxldmVsTGF5b3V0KTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobGV2ZWxMaXN0KTtcclxuICAgIH0sXHJcbiAgICBzaG93TWFpblJhbmsoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICB2YXIgcmFua1BhZ2UgPSAxLHJhbmtQYWdlU2l6ZSA9IDUwO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2MuZmluZCgncmFua0xpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBjYy5maW5kKCdyYW5rTGlzdCcsbmV3TXlQcmVmYWIpLm9uKCdib3VuY2UtYm90dG9tJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgcmFua1BhZ2UrKztcclxuICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCByYW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAxOyBpPD0gcmVzLnJlc3VsdC5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSAgcmVzLnJlc3VsdC5kYXRhW2ktMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhhdC5yYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmtJdGVtID09IG51bGwpIHJhbmtJdGVtID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRSYW5rJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpK2N1cnJlbnRJdGVtTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZERhdGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZvcm1hdGVSYW5rVGltZShkYXRhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnBvcnRyYWl0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGRhdGEucG9ydHJhaXQrJz9hYWE9YWEuanBnJywgIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdtYXNrL0ltYWdlJyxub2RlLmdldENoaWxkQnlOYW1lKCd0ZFBvcnRyYWl0JykpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5uaWNrTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZE5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiK2RhdGEubmlja05hbWUrXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5oZWlnaHQgPSBjb250ZW50LmNoaWxkcmVuQ291bnQgKiByYW5rSXRlbS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuayoeacieabtOWkmuaVsOaNruS6hlwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bnvJPlrZhhcHBJZOWIpOaWreaYr+WQpuesrOS4gOasoei/m+WFpea4uOaIj1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2FwcElkJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmFwcElkID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0ubGV2ZWxGaW5pc2hOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmNsYXNzaWNzTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5uZXRMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5uZXRMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKXtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbidcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhcHBJZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6cmVzLnJlc3VsdC5vcGVuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5hcHBJZCA9IHJlcy5yZXN1bHQub3BlbmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5uZXRMZXZlbE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aDw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5rOo5YaM55So5oi35L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lPyB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1haW5CaW5kRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy/mt7vliqDmjojmnYPmjInpkq5cclxuICAgICAgICB3eExvZ2luKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvZ2luSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybDogcmVzLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiByZXMubmlja05hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2D5aSx6LSlJylcclxuICAgICAgICB9LHRoaXMubG9naW5wbGF5Lm5vZGUpO1xyXG4gICAgICAgIC8v5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgaWYodGhpcy5sb2dpbnBsYXkgPT0gbnVsbCkgdGhpcy5sb2dpbnBsYXkgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2xvZ2lucGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5sb2dpbnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLmxvZ2luTGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMudmlzaXRvcnBsYXkgPT0gbnVsbCkgdGhpcy52aXNpdG9ycGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvdmlzaXRvcnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMudmlzaXRvcnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLnZpc2l0b3JMZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5tYWluUmFuayA9PSBudWxsKSB0aGlzLm1haW5SYW5rID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluUmFuaycpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5tYWluUmFuay5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2hvd01haW5SYW5rLCB0aGlzKVxyXG5cclxuICAgICAgICBpZih0aGlzLmJ1aWxkTGV2ZWwgPT0gbnVsbCkgdGhpcy5idWlsZExldmVsID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9idWlsZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmJ1aWxkTGV2ZWwubm9kZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5idWlsZExldmVsID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy53eExvZ2luQnRuICkgd2luZG93Lnd4TG9naW5CdG4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJidWlsZFwiKTtcclxuXHJcbiAgICAgICAgfSwgdGhpcylcclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMubWFpblNoYXJlID09IG51bGwpIHRoaXMubWFpblNoYXJlID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluU2hhcmUnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLm1haW5TaGFyZS5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICflv6vmnaXmjJHmiJjigJznm4rmmbrmjqjnrrHigJ3lsI/muLjmiI/lkKfvvIEnO1xyXG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG5cclxuICAgICAgICBpZih0aGlzLnNldHRpbmcgPT0gbnVsbCkgdGhpcy5zZXR0aW5nID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9zZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xvc2VTZXR0aW5nJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2hNb3ZlID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCByZWxhc3QgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXVzaWMgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9tdXNpYy9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUpIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSkgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5yZWxhc3QpIHJlbGFzdC5zdHJpbmcgPSAn5YWz6Zet5Zue6YCA5Yqf6IO9JztcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVsYXN0LnN0cmluZyA9ICflvIDlkK/lm57pgIDlip/og70nO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcubXVzaWMpIG11c2ljLnN0cmluZyA9ICflhbPpl63pn7PmlYgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBtdXNpYy5zdHJpbmcgPSAn5byA5ZCv6Z+z5pWIJztcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi90b3VjaE1vdmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG4JueCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflvIDlkK/op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG45YWz6ZetIOeCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIXJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DnpLroh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8jyEnLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbgm54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbjlhbPpl60g54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgIXJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOekuuiHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPIScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbnumAgOWKn+iDvVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnJlbGFzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnJlbGFzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Quc3RyaW5nID0gJ+W8gOWQr+WbnumAgOWKn+iDvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcucmVsYXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXN0LnN0cmluZyA9ICflhbPpl63lm57pgIDlip/og70nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL211c2ljJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57pgIDlip/og71cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tdXNpYyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljLnN0cmluZyA9ICflvIDlkK/pn7PmlYgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVzaWMuc3RyaW5nID0gJ+WFs+mXremfs+aViCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdzZXR0aW5nRGlhbG9nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgfSxcclxuICAgIGluaXRTZXR0aW5nKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdXNpYzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogd2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRNdXNpYygpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLm11c2ljKXtcclxuICAgICAgICAgICAgaWYoIXdpbmRvdy5iZ011c2ljIHx8ICF3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCh7dXNlV2ViQXVkaW9JbXBsZW1lbnQ6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJtdXNpYy9iZ19tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYmdNdXNpYy5zcmMgPWNsaXAudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmICF3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwibXVzaWMvbW92ZV9tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLnNyYyA9Y2xpcC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5sb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5wbGF5YmFja1JhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmJnTXVzaWMgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
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
