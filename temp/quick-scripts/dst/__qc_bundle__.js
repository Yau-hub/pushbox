
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJiZ011c2ljIiwibW92ZU11c2ljIiwiY3JlYXRlU2NlbnNlVXBsb2FkQWQiLCJza2lwTGV2ZWxBZCIsImF1ZGl0TGV2ZWxBZCIsImNoZWNrU29sdXRpb25MZXZlbEFkIiwiZ2FtZUNpcmNsZSIsImRlc3Ryb3kiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsImNsb3VkIiwiaW5pdCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwiYWRVbml0SWQiLCJtdWx0aXRvbiIsIm9uRXJyb3IiLCJlcnIiLCJ1c2VyIiwiY2xhc3NpY3NMZXZlbE51bSIsIm5ldExldmVsTnVtIiwibGV2ZWxJbmRleCIsImJnVXJsQmFzZSIsImxldmVsRmluaXNoTnVtIiwibG9naW5JbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbmVTYXlMYWJlbCIsInR5cGUiLCJMYWJlbCIsImxvZ2lucGxheSIsIkJ1dHRvbiIsInZpc2l0b3JwbGF5IiwibWFpblJhbmsiLCJsZXZlbExheW91dCIsIlByZWZhYiIsInJldmlld0xheW91dCIsInJldmlld0xldmVsIiwiYnVpbGRMZXZlbCIsInNldHRpbmciLCJtYWluU2hhcmUiLCJyYW5rSXRlbSIsIm9uTG9hZCIsIm1haW5CaW5kRXZlbnQiLCJmcm9tIiwiZ2FtZSIsIm9uIiwiRVZFTlRfU0hPVyIsInBhdXNlZCIsInBhdXNlIiwicGxheSIsInN0YXJ0IiwidGhhdCIsIkxvYWRpbmciLCJzaG93IiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInRoZW4iLCJyZXMiLCJyZXN1bHQiLCJ0b3RhbCIsImhpZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZW1vdmVTdG9yYWdlIiwia2V5IiwibG9hZEltZyIsIm9uZVNheSIsImdldFVzZXJJbmZvIiwiaW5pdFNldHRpbmciLCJjb250YWluZXIiLCJmaW5kIiwiaW1nU2VydmVVcmwiLCJpbWdVcmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImltYWdlcyIsInVybGJhc2UiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlRnJhbWUiLCJzdGFyTm9kZSIsIk5vZGUiLCJzZXRQb3NpdGlvbiIsInN0YXJTcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzaXplTW9kZSIsIm5vZGUiLCJ3aWR0aCIsIndpblNpemUiLCJoZWlnaHQiLCJvcGFjaXR5IiwiYWRkQ2hpbGQiLCJvcGFjaXR5VGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJvcGVuIiwic2VuZCIsInVybCIsImdldENvbXBvbmVudCIsInN0cmluZyIsImhpdG9rb3RvIiwibmV3WEhSIiwibG9naW5MZXZlbExpc3QiLCJsb2dpblR5cGUiLCJDYW52YXNOb2RlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImxvYWRlciIsImxvYWRSZXMiLCJ2aXNpdG9yTGV2ZWxMaXN0Iiwic2hvd1Jldmlld0xldmVsIiwicmV2aWV3UGFnZSIsInJldmlld1BhZ2VTaXplIiwiY29udGVudCIsInJlbW92ZUZyb21QYXJlbnQiLCJyZXNvdXJjZSIsInJlbmRlclJldmlld0xldmVsTGlzdCIsInBhZ2UiLCJwYWdlU2l6ZSIsImN1cnJlbnRJdGVtTnVtIiwiY2hpbGRyZW5Db3VudCIsImRhdGEiLCJsZW5ndGgiLCJpIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjcmVhdGVUaW1lIiwidXNlU3RlcE51bSIsInBvcnRyYWl0IiwidCIsInd4TG9naW5CdG4iLCJzZXRTdG9yYWdlIiwic3VjY2VzcyIsInVwbG9hZEluZm8iLCJyZXZpZXdJZCIsIl9pZCIsImFwcElkIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzaG93TWFpblJhbmsiLCJyYW5rUGFnZSIsInJhbmtQYWdlU2l6ZSIsInJlbmRlck1haW5SYW5rTGlzdCIsImdldFN0b3JhZ2UiLCJyb2xlcyIsImZhaWwiLCJvcGVuaWQiLCJzdWJzdHJpbmciLCJBcnJheSIsInRpdFN0cmluZyIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicXVlcnkiLCJ0b3VjaE1vdmUiLCJjbGlja01vdmUiLCJyZWxhc3QiLCJtdXNpYyIsImNvbXBsZXRlIiwic2V0TXVzaWMiLCJzeXNJbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJjcmVhdGVHYW1lQ2x1YkJ1dHRvbiIsImljb24iLCJzdHlsZSIsImxlZnQiLCJ3aW5kb3dXaWR0aCIsInRvcCIsIndpbmRvd0hlaWdodCIsImNyZWF0ZUlubmVyQXVkaW9Db250ZXh0IiwidXNlV2ViQXVkaW9JbXBsZW1lbnQiLCJyZXNvdXJjZXMiLCJsb2FkIiwiQXVkaW9DbGlwIiwiY2xpcCIsInNyYyIsImxvb3AiLCJwbGF5YmFja1JhdGUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQStDQTs7QUEvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsR0FBUCxHQUFhLHlCQUFiO0FBQ0FELE1BQU0sQ0FBQ0UsT0FBUCxHQUFlLElBQWY7QUFDQUYsTUFBTSxDQUFDRyxTQUFQLEdBQWlCLElBQWpCO0FBQ0FILE1BQU0sQ0FBQ0ksb0JBQVAsR0FBOEIsSUFBOUI7QUFDQUosTUFBTSxDQUFDSyxXQUFQLEdBQXFCLElBQXJCO0FBQ0FMLE1BQU0sQ0FBQ00sWUFBUCxHQUFzQixJQUF0QjtBQUNBTixNQUFNLENBQUNPLG9CQUFQLEdBQThCLElBQTlCO0FBQ0FQLE1BQU0sQ0FBQ1EsVUFBUCxHQUFv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LElBQWpCO0FBQ0F4TSxRQUFBQSxNQUFNLENBQUNHLFNBQVAsQ0FBaUJNLE9BQWpCO0FBQ0g7O0FBQ0RULE1BQUFBLE1BQU0sQ0FBQ0UsT0FBUCxHQUFpQixJQUFqQjtBQUNBRixNQUFBQSxNQUFNLENBQUNHLFNBQVAsR0FBbUIsSUFBbkI7QUFDSDtBQUNKO0FBM3JCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxud2luZG93LmVudiA9IFwiY2xvdWQxLTVndmJ1aXkzZGQ5OWY2M2NcIlxyXG53aW5kb3cuYmdNdXNpYz1udWxsO1xyXG53aW5kb3cubW92ZU11c2ljPW51bGw7XHJcbndpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCA9IG51bGw7XHJcbndpbmRvdy5za2lwTGV2ZWxBZCA9IG51bGw7XHJcbndpbmRvdy5hdWRpdExldmVsQWQgPSBudWxsO1xyXG53aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQgPSBudWxsO1xyXG53aW5kb3cuZ2FtZUNpcmNsZSA9IG51bGw7XHJcbmlmKHdpbmRvdy5hdWRpdExldmVsQWQpIHdpbmRvdy5hdWRpdExldmVsQWQuZGVzdHJveSgpO1xyXG5pZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgIHd4LmNsb3VkLmluaXQoe2Vudjogd2luZG93LmVudn0pXHJcbiAgICAvL+W5v+WRiuWIneWni+WMllxyXG4gICAgaWYgKHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKXtcclxuICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC1kNDA4ZWFkZjlhYzljMGE5JyxcclxuICAgICAgICAgICAgbXVsdGl0b246IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdpbmRvdy5za2lwTGV2ZWxBZC5vbkVycm9yKGVyciA9PiB7fSk7XHJcbiAgICAgICAgd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtMTEwZDA5N2RmNWJjOGViMCcsXHJcbiAgICAgICAgICAgIG11bHRpdG9uOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQub25FcnJvcihlcnIgPT4ge30pO1xyXG4gICAgICAgIHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCA9IHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcclxuICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtZTdmMjNiNTJjOWQ1OTMxNSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZC5vbkVycm9yKGVyciA9PiB7d2luZG93LmNyZWF0ZVNjZW5zZVVwbG9hZEFkID1udWxsO30pO1xyXG4gICAgfVxyXG59XHJcbndpbmRvdy51c2VyID0ge307XHJcbndpbmRvdy5jbGFzc2ljc0xldmVsTnVtID0gMDtcclxud2luZG93Lm5ldExldmVsTnVtID0gMDtcclxud2luZG93LmxldmVsSW5kZXggPSAwO1xyXG53aW5kb3cuYmdVcmxCYXNlID0gJyc7XHJcbndpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gMDtcclxud2luZG93LmxvZ2luSW5mbyA9IHtcclxuICAgIGF2YXRhclVybDogbnVsbCxcclxuICAgIG5pY2tOYW1lOiBudWxsXHJcbn07XHJcbndpbmRvdy5nYW1lQ2lyY2xlID0gbnVsbDtcclxuXHJcbmltcG9ydCB7d3hMb2dpbixUb2FzdCxMb2FkaW5nLGZvcm1hdGVSYW5rVGltZX0gZnJvbSBcIi4vY29tbW9uXCI7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG9uZVNheUxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpbnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICB2aXNpdG9ycGxheTogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5SYW5rOiBjYy5CdXR0b24sXHJcbiAgICAgICAgbGV2ZWxMYXlvdXQ6IGNjLlByZWZhYixcclxuICAgICAgICByZXZpZXdMYXlvdXQ6IGNjLlByZWZhYixcclxuICAgICAgICByZXZpZXdMZXZlbDogY2MuQnV0dG9uLFxyXG4gICAgICAgIGJ1aWxkTGV2ZWw6IGNjLkJ1dHRvbixcclxuICAgICAgICBzZXR0aW5nOiBjYy5CdXR0b24sXHJcbiAgICAgICAgbWFpblNoYXJlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgcmFua0l0ZW06Y2MuUHJlZmFiLFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMOkUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8v5Yqg6L295LiA6KiAXHJcbiAgICAgICAgLy8gIHRoaXMub25lU2F5KCk7XHJcbiAgICAgICAgIHRoaXMubWFpbkJpbmRFdmVudCgpO1xyXG4gICAgICAgICB3aW5kb3cuZnJvbSA9ICdtYWluJztcclxuICAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumHjeaWsOi/lOWbnua4uOaIj1wiKTtcclxuICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmICF3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiB3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBsYXkoKTtcclxuICAgICAgICAgfSx0aGlzKTtcclxuICAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcblxyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdnZXRDbGFzc2ljc0xldmVsTnVtJ1xyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQudG90YWw7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMubG9hZEltZygpO1xyXG4gICAgICAgIHRoaXMub25lU2F5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB0aGlzLmluaXRTZXR0aW5nKCk7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBsb2FkSW1nOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9iaW5nQmcnKTsvL+WbvueJh+WRiOeOsOS9jee9rlxyXG4gICAgICAgIHZhciBpbWdTZXJ2ZVVybCA9ICdodHRwczovL3d3dy5iaW5nLmNvbS9IUEltYWdlQXJjaGl2ZS5hc3B4P2Zvcm1hdD1qcyZpZHg9MCZuPTEnO1xyXG4gICAgICAgIHZhciBpbWdVcmwgPSAnJztcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGltZ1VybCA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlICsgJ183MjB4MTI4MC5qcGcnXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYmdVcmxCYXNlID0gJ2h0dHBzOi8vY24uYmluZy5jb20nICsgcmVzcG9uc2UuaW1hZ2VzWzBdLnVybGJhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoaW1nVXJsLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yib5bu65LiA5Liq5L2/55So5Zu+54mH6LWE5rqQ55qE5paw6IqC54K55a+56LGhXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJOb2RlID0gbmV3IGNjLk5vZGUoKTsgLy/liJvlu7rkuIDkuKrmlrDoioLngrlcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5uYW1lID0gXCJzdGFyMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLnNldFBvc2l0aW9uKDAsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJTcHJpdGUgPSBzdGFyTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTsgLy/lop7liqDnsr7ngbXnu4Tku7ZcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlOyAvL+iuvue9rueyvueBtee7hOS7tuWbvueJh+i1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUuc2l6ZU1vZGUgPSAnQ1VTVE9NJztcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLm5vZGUud2lkdGggPSBjYy53aW5TaXplLndpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLmhlaWdodCA9IGNjLndpblNpemUuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHN0YXJOb2RlKTsgLy/lnLrmma/kuK3lop7liqDmlrDoioLngrlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wYWNpdHlUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3BhY2l0eT49MjU1KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwob3BhY2l0eVRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eVRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sNSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCBpbWdTZXJ2ZVVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0sXHJcbiAgICBvbmVTYXkoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cHM6Ly92MS5oaXRva290by5jbi9cIjtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgbGV0IG9uZVNheUxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9tYWluQmcvb25lU2F5XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgIGlmKHRoYXQub25lU2F5TGFiZWwgJiYgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCkgdGhhdC5vbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICAgICBlbHNlIGlmKG9uZVNheUxhYmVsICYmIG9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsICkgb25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIHRoaXMub25lU2F5TGFiZWwubm9kZS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgbmV3WEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIG5ld1hIUi5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3WEhSLnJlYWR5U3RhdGUgPT0gNCAmJiAobmV3WEhSLnN0YXR1cyA+PSAyMDAgJiYgbmV3WEhSLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZShuZXdYSFIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGF0Lm9uZVNheUxhYmVsICYmIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwpIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9uZVNheUxhYmVsICYmIG9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsICkgb25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbmV3WEhSLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgbmV3WEhSLnNlbmQoKTtcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgfSxcclxuICAgIC8v5o6I5p2D55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICBsb2dpbkxldmVsTGlzdCgpe1xyXG5cclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3dlY2hhdCc7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIC8v5LiN55m75b2V55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICB2aXNpdG9yTGV2ZWxMaXN0KCl7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2dpblR5cGUgPSAndmlzaXRvcic7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAvLyBsZXQgbGV2ZWxMaXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbExheW91dCk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTGlzdCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jldmlld0xldmVsKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgdmFyIHJldmlld1BhZ2UgPSAxLHJldmlld1BhZ2VTaXplID0gNTA7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjYy5maW5kKCdyZXZpZXdMZXZlbExpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscmV2aWV3UGFnZSxyZXZpZXdQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJSZXZpZXdMZXZlbExpc3QoY29udGVudCxyZXZpZXdQYWdlLHJldmlld1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5maW5kKCdyZXZpZXdMZXZlbExpc3QnLG5ld015UHJlZmFiKS5vbignYm91bmNlLWJvdHRvbScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXZpZXdQYWdlKys7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclJldmlld0xldmVsTGlzdChjb250ZW50LHJldmlld1BhZ2UscmV2aWV3UGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyZXZpZXdMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMucmVzdWx0LmRhdGFbaS0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhhdC5yYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5rSXRlbSA9PSBudWxsKSByYW5rSXRlbSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZFJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkrY3VycmVudEl0ZW1OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZERhdGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZvcm1hdGVSYW5rVGltZShkYXRhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS51c2VTdGVwTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZGF0YS5wb3J0cmFpdCsnP2FhYT1hYS5qcGcnLCAgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIrZGF0YS5uaWNrTmFtZStcIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub24oJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih0KXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy53eExvZ2luQnRuICkgd2luZG93Lnd4TG9naW5CdG4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3Jldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mbyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ3Jldmlldyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJldmlld0lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVwbG9hZEluZm8uYXBwSWQgPSBkYXRhLmFwcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRJbmZvLm5pY2tOYW1lID0gZGF0YS5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mby5wb3J0cmFpdCA9IGRhdGEucG9ydHJhaXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKGkpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5oZWlnaHQgPSBjb250ZW50LmNoaWxkcmVuQ291bnQgKiByYW5rSXRlbS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuayoeacieabtOWkmuaVsOaNruS6hlwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBzaG93TWFpblJhbmsoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICB2YXIgcmFua1BhZ2UgPSAxLHJhbmtQYWdlU2l6ZSA9IDUwO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2MuZmluZCgncmFua0xpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBjYy5maW5kKCdyYW5rTGlzdCcsbmV3TXlQcmVmYWIpLm9uKCdib3VuY2UtYm90dG9tJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgcmFua1BhZ2UrKztcclxuICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCByYW5rSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAxOyBpPD0gcmVzLnJlc3VsdC5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSAgcmVzLnJlc3VsdC5kYXRhW2ktMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhhdC5yYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJhbmtJdGVtID09IG51bGwpIHJhbmtJdGVtID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRSYW5rJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpK2N1cnJlbnRJdGVtTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZERhdGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGZvcm1hdGVSYW5rVGltZShkYXRhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZExldmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBkYXRhLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnBvcnRyYWl0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGRhdGEucG9ydHJhaXQrJz9hYWE9YWEuanBnJywgIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdtYXNrL0ltYWdlJyxub2RlLmdldENoaWxkQnlOYW1lKCd0ZFBvcnRyYWl0JykpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5uaWNrTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZE5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiK2RhdGEubmlja05hbWUrXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5oZWlnaHQgPSBjb250ZW50LmNoaWxkcmVuQ291bnQgKiByYW5rSXRlbS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuayoeacieabtOWkmuaVsOaNruS6hlwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0VXNlckluZm8oKXtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgLy/ojrflj5bnvJPlrZhhcHBJZOWIpOaWreaYr+WQpuesrOS4gOasoei/m+WFpea4uOaIj1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2FwcElkJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5hcHBJZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5jbGFzc2ljc0xldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubmV0TGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0ubmV0TGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5yb2xlcyA9IHJlcy5yZXN1bHQuZGF0YVswXS5yb2xlcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGVycil7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYXBwSWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOnJlcy5yZXN1bHQub3BlbmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuYXBwSWQgPSByZXMucmVzdWx0Lm9wZW5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmNsYXNzaWNzTGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubmV0TGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIucm9sZXMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+azqOWGjOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZFVzZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZT8gd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXNlci5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVzZXIuYXBwSWQubGVuZ3RoLTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmxldmVsRmluaXNoTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmxldmVsRmluaXNoTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmNsYXNzaWNzTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLm5ldExldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5ldExldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5yb2xlcyA9IHJlcy5yZXN1bHQuZGF0YVswXS5yb2xlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1haW5CaW5kRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgLy/mt7vliqDmjojmnYPmjInpkq5cclxuICAgICAgICB3eExvZ2luKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvZ2luSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybDogcmVzLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiByZXMubmlja05hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2D5aSx6LSlJylcclxuICAgICAgICB9LHRoaXMubG9naW5wbGF5Lm5vZGUpO1xyXG4gICAgICAgIC8v5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgaWYodGhpcy5sb2dpbnBsYXkgPT0gbnVsbCkgdGhpcy5sb2dpbnBsYXkgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2xvZ2lucGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5sb2dpbnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLmxvZ2luTGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMudmlzaXRvcnBsYXkgPT0gbnVsbCkgdGhpcy52aXNpdG9ycGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvdmlzaXRvcnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMudmlzaXRvcnBsYXkubm9kZS5vbignY2xpY2snLCB0aGlzLnZpc2l0b3JMZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5tYWluUmFuayA9PSBudWxsKSB0aGlzLm1haW5SYW5rID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluUmFuaycpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5tYWluUmFuay5ub2RlLm9uKCdjbGljaycsIHRoaXMuc2hvd01haW5SYW5rLCB0aGlzKVxyXG5cclxuICAgICAgICBpZih0aGlzLnJldmlld0xldmVsID09IG51bGwpIHRoaXMucmV2aWV3TGV2ZWwgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL3Jldmlld0xldmVsJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLnJldmlld0xldmVsLm5vZGUub24oJ2NsaWNrJywgdGhpcy5zaG93UmV2aWV3TGV2ZWwsIHRoaXMpXHJcblxyXG4gICAgICAgIGlmKHRoaXMuYnVpbGRMZXZlbCA9PSBudWxsKSB0aGlzLmJ1aWxkTGV2ZWwgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2J1aWxkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMuYnVpbGRMZXZlbC5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93LmJ1aWxkTGV2ZWwgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgaWYod2luZG93Lnd4TG9naW5CdG4gKSB3aW5kb3cud3hMb2dpbkJ0bi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImJ1aWxkXCIpO1xyXG5cclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIGlmKHRoaXMubWFpblNoYXJlID09IG51bGwpIHRoaXMubWFpblNoYXJlID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9tYWluU2hhcmUnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB0aGlzLm1haW5TaGFyZS5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICflv6vmnaXmjJHmiJjigJznm4rmmbrmjqjnrrHigJ3lsI/muLjmiI/lkKfvvIEnO1xyXG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5zZXR0aW5nID09IG51bGwpIHRoaXMuc2V0dGluZyA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvc2V0dGluZycpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZy5ub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2Nsb3NlU2V0dGluZycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL3RvdWNoTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbGlja01vdmUgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9jbGlja01vdmUvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVsYXN0ID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vcmVsYXN0L0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG11c2ljID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vbXVzaWMvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcudG91Y2hNb3ZlKSB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB0b3VjaE1vdmUuc3RyaW5nID0gJ+W8gOWQr+inpuaRuOenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5jbGlja01vdmUpIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJztcclxuICAgICAgICAgICAgICAgIGVsc2UgY2xpY2tNb3ZlLnN0cmluZyA9ICflvIDlkK/mjInplK7np7vliqgnO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcucmVsYXN0KSByZWxhc3Quc3RyaW5nID0gJ+WFs+mXreWbnumAgOWKn+iDvSc7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlbGFzdC5zdHJpbmcgPSAn5byA5ZCv5Zue6YCA5Yqf6IO9JztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLm11c2ljKSBtdXNpYy5zdHJpbmcgPSAn5YWz6Zet6Z+z5pWIJztcclxuICAgICAgICAgICAgICAgIGVsc2UgbXVzaWMuc3RyaW5nID0gJ+W8gOWQr+mfs+aViCc7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuCbngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcudG91Y2hNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inpuaRuOWFs+mXrSDngrnlh7vlvIDlkK9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCFyZXMuZGF0YS50b3VjaE1vdmUgJiYgcmVzLmRhdGEuY2xpY2tNb3ZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcudG91Y2hNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflhbPpl63op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o+Q56S66Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfoh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI8hJywxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9jbGlja01vdmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG4JueCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5jbGlja01vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlLnN0cmluZyA9ICflvIDlkK/mjInplK7np7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG45YWz6ZetIOeCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmICFyZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5jbGlja01vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmUuc3RyaW5nID0gJ+WFs+mXreaMiemUruenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DnpLroh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8jyEnLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vcmVsYXN0JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57pgIDlip/og71cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5yZWxhc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5yZWxhc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXN0LnN0cmluZyA9ICflvIDlkK/lm57pgIDlip/og70nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnJlbGFzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGFzdC5zdHJpbmcgPSAn5YWz6Zet5Zue6YCA5Yqf6IO9J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9tdXNpYycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zue6YCA5Yqf6IO9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubXVzaWMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5tdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXNpYy5zdHJpbmcgPSAn5byA5ZCv6Z+z5pWIJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy5tdXNpYyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljLnN0cmluZyA9ICflhbPpl63pn7PmlYgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnc2V0dGluZ0RpYWxvZycsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcbiAgICAgICAgICAgIH0sIHRoaXMpXHJcblxyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgJiYgIXdpbmRvdy5nYW1lQ2lyY2xlKXtcclxuICAgICAgICAgICAgbGV0IHN5c0luZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgICAgICAvL+a4uOaIj+WciOaMiemSrlxyXG4gICAgICAgICAgICB3aW5kb3cuZ2FtZUNpcmNsZSA9ICB3eC5jcmVhdGVHYW1lQ2x1YkJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAoc3lzSW5mby53aW5kb3dXaWR0aCowLjkpLTIwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogc3lzSW5mby53aW5kb3dIZWlnaHQqMC4xMixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuICAgIGluaXRTZXR0aW5nKCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdXNpYzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogd2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRNdXNpYygpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSAhPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLm11c2ljKXtcclxuICAgICAgICAgICAgaWYoIXdpbmRvdy5iZ011c2ljIHx8ICF3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCh7dXNlV2ViQXVkaW9JbXBsZW1lbnQ6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJtdXNpYy9iZ19tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYmdNdXNpYy5zcmMgPWNsaXAudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljICYmICF3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwibXVzaWMvbW92ZV9tdXNpY1wiLCBjYy5BdWRpb0NsaXAsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLnNyYyA9Y2xpcC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5sb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5wbGF5YmFja1JhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5iZ011c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cubW92ZU11c2ljKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmJnTXVzaWMgPSBudWxsO1xyXG4gICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxMYXlvdXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsZXZlbEl0ZW0iLCJQcmVmYWIiLCJsZXZlbExpc3QiLCJsZXZlbExpc3RDb250ZW4iLCJsZXZlbFNyb2xsVmlldyIsImNsYXNzaWNzTGV2ZWxCdG4iLCJCdXR0b24iLCJuZXRMZXZlbEJ0biIsImNsb3NlTGV2ZWxCdG4iLCJvbkxvYWQiLCJzdGFydCIsImZpbmQiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJsb2FkQ2xhc3NpY3NMZXZlbExpc3QiLCJsb2FkTmV0TGV2ZWxMaXN0IiwiY2xvc2VMZXZlbExheW91dCIsImNsYXNzaWNlQnRuTGFiZWwiLCJjb2xvciIsIm5ldEJ0bkxhYmVsIiwib3BhY2l0eSIsIndpbmRvdyIsImxldmVsQ2xhc3NpZnkiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJ0aGF0IiwibGV2ZWxIIiwibGV2ZWxSb3ciLCJsZXZlbFRvdGFsIiwiY2xhc3NpY3NMZXZlbE51bSIsImkiLCJpbnN0YW50aWF0ZSIsImluZGV4TGV2ZWwiLCJ1c2VyIiwibGV2ZWxGaW5pc2hOdW0iLCJyb2xlcyIsImluY2x1ZGVzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJMYWJlbCIsInN0cmluZyIsInQiLCJsZXZlbEluZGV4Iiwid3hMb2dpbkJ0biIsImRlc3Ryb3kiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImFkZENoaWxkIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJoZWlnaHQiLCJ3aW5TaXplIiwibmV0TGV2ZWxOdW0iLCJ1c2VySW5mbyIsImxvZyIsInJlbW92ZUZyb21QYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFB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QUE2QnJDLElBQUksQ0FBQ3FDLEtBQTdDLENBQWIsR0FBa0UsQ0FBN0UsQ0FBWDtBQUNBdkIsUUFBQUEsTUFBTSxJQUFJZCxJQUFJLENBQUNzQyxNQUFMLEdBQWMsRUFBeEI7QUFDSDtBQWpDUzs7QUFpQmQsU0FBSSxJQUFJcEIsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDRixVQUFmLEVBQTRCRSxDQUFDLEVBQTdCLEVBQWdDO0FBQUEsYUFBeEJBLENBQXdCO0FBaUIvQjs7QUFDRCxTQUFLM0IsZUFBTCxDQUFxQitDLE1BQXJCLEdBQThCeEIsTUFBTSxHQUFFOUIsRUFBRSxDQUFDdUQsT0FBSCxDQUFXRCxNQUFYLEdBQWtCLEdBQXhEO0FBQ0gsR0FwSEk7QUFxSExqQyxFQUFBQSxnQkFySEssOEJBcUhhO0FBQ2QsU0FBS0wsSUFBTCxDQUFVMkMsZ0JBQVY7QUFDQSxTQUFLM0MsSUFBTCxDQUFVK0IsT0FBVjtBQUNILEdBeEhJLENBMEhMOztBQTFISyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBsZXZlbEl0ZW06IGNjLlByZWZhYixcclxuICAgICAgICBsZXZlbExpc3Q6bnVsbCxcclxuICAgICAgICBsZXZlbExpc3RDb250ZW46bnVsbCxcclxuICAgICAgICBsZXZlbFNyb2xsVmlldzpudWxsLFxyXG4gICAgICAgIGNsYXNzaWNzTGV2ZWxCdG46Y2MuQnV0dG9uLFxyXG4gICAgICAgIG5ldExldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgICAgICBjbG9zZUxldmVsQnRuOmNjLkJ1dHRvbixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3QgPSBjYy5maW5kKCdsZXZlbExpc3QvbGV2ZWxTY3JvbGxWaWV3L3ZpZXcvY29udGVudC9pdGVtTGlzdCcsdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0Q29udGVuID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldy92aWV3L2NvbnRlbnQnLHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmxldmVsU3JvbGxWaWV3ID0gY2MuZmluZCgnbGV2ZWxMaXN0L2xldmVsU2Nyb2xsVmlldycsdGhpcy5ub2RlKVxyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5jbGFzc2ljc0xldmVsQnRuID09IG51bGwpIHRoaXMuY2xhc3NpY3NMZXZlbEJ0biA9IGNjLmZpbmQoJ2xldmVsTGlzdC9jbGFzc2lmeS9jbGFzc2ljc0xldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYodGhpcy5uZXRMZXZlbEJ0biA9PSBudWxsKSB0aGlzLm5ldExldmVsQnRuID0gY2MuZmluZCgnbGV2ZWxMaXN0L2NsYXNzaWZ5L25ldExldmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgaWYodGhpcy5jbG9zZUxldmVsQnRuID09IG51bGwpIHRoaXMuY2xvc2VMZXZlbEJ0biA9IGNjLmZpbmQoJ2Nsb3NlTGV2ZWwnLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZS5vbignY2xpY2snLCB0aGlzLmxvYWRDbGFzc2ljc0xldmVsTGlzdCwgdGhpcylcclxuICAgICAgICB0aGlzLm5ldExldmVsQnRuLm5vZGUub24oJ2NsaWNrJywgdGhpcy5sb2FkTmV0TGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgICAgIHRoaXMuY2xvc2VMZXZlbEJ0bi5ub2RlLm9uKCdjbGljaycsdGhpcy5jbG9zZUxldmVsTGF5b3V0LCB0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRDbGFzc2ljc0xldmVsTGlzdCgpO1xyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgbG9hZENsYXNzaWNzTGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgLy8g6K6+572u5YiH5o2i5YWz5Y2h57G75Z6L5oyJ6ZKu6YCJ5LitXHJcbiAgICAgICAgbGV0IGNsYXNzaWNlQnRuTGFiZWwgPSBjYy5maW5kKCdCYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLmNsYXNzaWNzTGV2ZWxCdG4ubm9kZSk7XHJcbiAgICAgICAgY2xhc3NpY2VCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDIwMiwxMjIsMCk7XHJcbiAgICAgICAgbGV0IG5ldEJ0bkxhYmVsID0gY2MuZmluZCgnQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5uZXRMZXZlbEJ0bi5ub2RlKTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICBuZXRCdG5MYWJlbC5vcGFjaXR5ID0gMTI1O1xyXG5cclxuICAgICAgICB3aW5kb3cubGV2ZWxDbGFzc2lmeSA9ICdjbGFzc2ljc0xldmVsJztcclxuXHJcbiAgICAgICAgLy/muIXnqbrlhbPljaHoo4Llj5hcclxuICAgICAgICB0aGlzLmxldmVsTGlzdC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxldmVsSCA9IDA7XHJcbiAgICAgICAgbGV0IGxldmVsUm93ID0gMTA7XHJcbiAgICAgICAgbGV0IGxldmVsVG90YWwgPSB3aW5kb3cuY2xhc3NpY3NMZXZlbE51bTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGV2ZWxUb3RhbCA7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbEl0ZW0pO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXhMZXZlbCA9IGkrMTtcclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA8PSAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0rMSB8fCB3aW5kb3cudXNlci5yb2xlcyAmJiB3aW5kb3cudXNlci5yb2xlcy5pbmNsdWRlcygnYWRtaW4nKSl7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdsZXZlbE51bScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaW5kZXhMZXZlbDtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xldmVsTG9jaycpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vbigndG91Y2hlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxJbmRleCA9IGluZGV4TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy53eExvZ2luQnRuICkgd2luZG93Lnd4TG9naW5CdG4uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxldmVsTGlzdC5hZGRDaGlsZChub2RlKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZihpbmRleExldmVsIDw9IGxldmVsUm93KXtcclxuICAgICAgICAgICAgICAgIGxldmVsUm93ID0gTWF0aC5mbG9vcihsZXZlbFRvdGFsIC8gTWF0aC5mbG9vcih0aGlzLmxldmVsTGlzdENvbnRlbi53aWR0aCAvIG5vZGUud2lkdGgpIC0xKTtcclxuICAgICAgICAgICAgICAgIGxldmVsSCArPSBub2RlLmhlaWdodCArIDcwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0Q29udGVuLmhlaWdodCA9IGxldmVsSCsoY2Mud2luU2l6ZS5oZWlnaHQqMC4yKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWROZXRMZXZlbExpc3QoKXtcclxuICAgICAgICAvLyDorr7nva7liIfmjaLlhbPljaHnsbvlnovmjInpkq7pgInkuK1cclxuICAgICAgICBsZXQgY2xhc3NpY2VCdG5MYWJlbCA9IGNjLmZpbmQoJ0JhY2tncm91bmQvTGFiZWwnLHRoaXMuY2xhc3NpY3NMZXZlbEJ0bi5ub2RlKTtcclxuICAgICAgICBjbGFzc2ljZUJ0bkxhYmVsLmNvbG9yID0gY2MuY29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgIGNsYXNzaWNlQnRuTGFiZWwub3BhY2l0eSA9IDEyNTtcclxuICAgICAgICBsZXQgbmV0QnRuTGFiZWwgPSBjYy5maW5kKCdCYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLm5ldExldmVsQnRuLm5vZGUpO1xyXG4gICAgICAgIG5ldEJ0bkxhYmVsLmNvbG9yID0gY2MuY29sb3IoMjAyLDEyMiwwKTtcclxuXHJcbiAgICAgICAgd2luZG93LmxldmVsQ2xhc3NpZnkgPSAnbmV0TGV2ZWwnO1xyXG5cclxuICAgICAgICAvL+a4heepuuWFs+WNoeijguWPmFxyXG4gICAgICAgIHRoaXMubGV2ZWxMaXN0LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgbGV2ZWxIID0gMDtcclxuICAgICAgICBsZXQgbGV2ZWxSb3cgPSAxMDtcclxuICAgICAgICBsZXQgbGV2ZWxUb3RhbCA9IHdpbmRvdy5uZXRMZXZlbE51bTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGV2ZWxUb3RhbCA7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbEl0ZW0pO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXhMZXZlbCA9IGkrMTtcclxuICAgICAgICAgICAgaWYoaW5kZXhMZXZlbCA8PSB3aW5kb3cudXNlckluZm8uY2xhc3NpY3NMZXZlbE51bSl7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCdsZXZlbE51bScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaW5kZXhMZXZlbDtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xldmVsTG9jaycpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxMaXN0LmFkZENoaWxkKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgbm9kZS5vbigndG91Y2hlbmQnLFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24odCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCdsZXZlbDonICsgaW5kZXhMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGlmKGluZGV4TGV2ZWwgPD0gbGV2ZWxSb3cpe1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxSb3cgPSBNYXRoLmZsb29yKGxldmVsVG90YWwgLyBNYXRoLmZsb29yKHRoaXMubGV2ZWxMaXN0Q29udGVuLndpZHRoIC8gbm9kZS53aWR0aCkgLTEpO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxIICs9IG5vZGUuaGVpZ2h0ICsgNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sZXZlbExpc3RDb250ZW4uaGVpZ2h0ID0gbGV2ZWxIKyhjYy53aW5TaXplLmhlaWdodCowLjIpO1xyXG4gICAgfSxcclxuICAgIGNsb3NlTGV2ZWxMYXlvdXQoKXtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
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
            })["catch"](function (err) {
              _common.Loading.hide();

              (0, _common.Toast)('上传失败', 1500);
              console.error(err);
            });
          })["catch"](function (err) {
            console.error(err);
          });
        }, this);
      } else if (window.from == "uploadSolution") {
        cc.find('contentBg/next/Background/Label', newMyPrefab).getComponent(cc.Label).string = '上传攻略';
        cc.find('contentBg/next', newMyPrefab).on('click', function () {
          _common.Loading.show();

          if (window.lastSolutionStep != null) {
            //更新攻略
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
                (0, _common.Toast)('攻略上传成功', 1500);

                _common.Loading.hide();

                setTimeout(function () {
                  cc.director.loadScene("game");
                }, 1000);
              })["catch"](function (err) {
                (0, _common.Toast)('上传失败,请稍后再试', 3000);

                _common.Loading.hide();

                console.log(err);
              });
            } else {
              _common.Loading.hide();

              (0, _common.Toast)('原有攻略步数更少，上传失败', 3000);
            }
          } else {
            //上传攻略
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
              (0, _common.Toast)('攻略上传成功', 1500);

              _common.Loading.hide();

              setTimeout(function () {
                cc.director.loadScene("game");
              }, 1000);
            })["catch"](function (err) {
              (0, _common.Toast)('上传失败,请稍后再试', 3000);

              _common.Loading.hide();

              console.log(err);
            });
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
      //攻略播放
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

              wx.cloud.callFunction({
                name: 'getClassicsLevelNum'
              }).then(function (res) {
                wx.getStorage({
                  key: "initLevel",
                  success: function success(result) {
                    wx.cloud.callFunction({
                      name: 'addClassicsLevel',
                      data: {
                        content: result.data,
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
                  }
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
            that.renderLastScore('无', '无');
            if (window.levelIndex == 1) (0, _common.Toast)('Tip: 可滑动屏幕控制人物', 5000);
          }
        })["catch"](function (err) {
          console.error(err);
        });
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
              wx.cloud.callFunction({
                name: 'queryClassicsLevelSolution',
                data: {
                  levelIndex: window.levelIndex
                }
              }).then(function (res) {
                window.levelSolution = null;

                if (res && res.result.data.length > 0) {
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
                      window.levelSolution = res.result.data[0];
                      window.levelSolution.content = res.result.data[0].content.split(',');
                      cc.director.loadScene("game");
                    } else {// 播放中途退出，不下发游戏奖励
                    }
                  });
                } else {
                  (0, _common.Toast)('当前关卡暂无攻略', 3000);
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
        var lastBestScore = '当前攻略：暂无';
        window.lastSolutionStep = null;

        if (res && res.result.data.length > 0) {
          window.lastSolutionStep = res.result.data[0].useStep;
          lastBestScore = '当前攻略：步数' + res.result.data[0].useStep + ' - 贡献者：' + res.result.data[0].nickName.substring(0, 16);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZUxheW91dC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXJyZW50TGV2ZWwiLCJlbGVTaXplIiwibGF5b3V0IiwiQXJyYXkiLCJibG9ja051bSIsInVwbG9hZExldmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibG9jayIsInR5cGUiLCJQcmVmYWIiLCJkaXNwbGF5TmFtZSIsIndhbGwiLCJib3giLCJiYWxsIiwicm9sZVVwIiwicm9sZVJpZ2h0Iiwicm9sZURvd24iLCJyb2xlTGVmdCIsInBvc2l0aW9uIiwiZ2FtZUJuIiwiU3ByaXRlIiwiYm94TnVtIiwic3RlcENvdW50ZXIiLCJzdGVwQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXIiLCJ0aW1lQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXJUaW1lciIsImxldmVsQ291bnRlciIsIm1vdmVIaXN0b3J5TGlzdCIsImxhc3RTY29yZSIsImxhc3RTdGVwTm9kZSIsImxhc3RUaW1lbm9kZSIsInJhbmtJdGVtIiwiYnVpbGRBcmVhIiwic29sdXRpb25CdG4iLCJub25lU2tpcENoYW5nZSIsInNvbHV0aW9uU3RlcEluZGV4IiwicmVjb3JkU29sdXRpb25TdGVwIiwib25Mb2FkIiwidGhhdCIsImluaXRXaW5FbGUiLCJyZW5kZXJCZyIsImluaXRMZXZlbCIsImZpbmQiLCJub2RlIiwiaGVpZ2h0Iiwid2luU2l6ZSIsIndpZHRoIiwic3RhcnQiLCJhZGRUb3VjaE1vdmUiLCJwZW5kYW50QWRkRXZlbnQiLCJyZWFsU2l6IiwiaSIsIm4iLCJ4IiwieSIsInNpZ24iLCJjb3ZlciIsImluaXRQb3NpdGlvbiIsImxlbmd0aCIsInN0YXJ0WCIsInN0YXJ0WSIsIm5ld0Jsb2NrIiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsImFkZENoaWxkIiwicmVuZGVyQm4iLCJnZXRDb21wb25lbnQiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiYmdVcmxCYXNlIiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwicmVjdCIsInNwcml0ZUZyYW1lIiwicmVuZGVyTGF5b3V0IiwiZGVzdHJveUFsbENoaWxkcmVuIiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0IiwibW92ZVVwIiwicmVzZXRQb3NpdGlvbiIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJkaXJlY3Rpb24iLCJmcm9tIiwicHVzaCIsInNldHRpbmciLCJyZWxhc3QiLCJzeXMiLCJwbGF0Zm9ybSIsIldFQ0hBVF9HQU1FIiwid3giLCJzZXRTdG9yYWdlIiwia2V5IiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJnZXRTdG9yYWdlIiwicmVzIiwic3RyaW5nIiwiY292ZXJCb3hOdW0iLCJzaG93UmVzdWx0IiwibW92ZU11c2ljIiwicGF1c2VkIiwic3RvcCIsInBhdXNlIiwicGxheSIsInRvdWNoTW92ZSIsImZpZ3VyZUxvY2F0aW9uIiwib24iLCJldmVudCIsImdldExvY2F0aW9uIiwiZW5kTG9jYXRpb24iLCJNYXRoIiwiYWJzIiwiY2xlYXJJbnRlcnZhbCIsIkNhbnZhc05vZGUiLCJjb25zb2xlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJMYWJlbCIsIkxvYWRpbmciLCJzaG93IiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwidGhlbiIsImNvbnRlbnQiLCJ1c2VTdGVwTnVtIiwibGV2ZWxJbmRleCIsInRvdGFsIiwiYXBwSWQiLCJ1c2VyIiwibmlja05hbWUiLCJsb2dpbkluZm8iLCJzdWJzdHJpbmciLCJwb3J0cmFpdCIsImF2YXRhclVybCIsImxldmVsVXBsb2FkTnVtIiwicGFyc2VJbnQiLCJoaWRlIiwiY3JlYXRlU2NlbnNlVXBsb2FkQWQiLCJzZXRUaW1lb3V0IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJvbkNsb3NlIiwiZXJyb3IiLCJsYXN0U29sdXRpb25TdGVwIiwidXNlU3RlcCIsInVzZVRpbWUiLCJqb2luIiwiY2xhc3NpY3NMZXZlbE51bSIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwiaW5pdFBlbmRhbnQiLCJyZXBsYXlMYXlvdXQiLCJzaG93TGV2ZWxSYW5rIiwidGl0U3RyaW5nIiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJxdWVyeSIsImxvYWRlciIsImxvYWRSZXMiLCJyZW5kZXJMYXN0U2NvcmUiLCJjdXJMZXZlbE51bSIsImxldmVsRmluaXNoTnVtIiwiZmFpbCIsImxldmVsTm9kZSIsIk5vZGUiLCJzZXRBbmNob3JQb2ludCIsImFkZENvbXBvbmVudCIsImZvbnRTaXplIiwiZW5hYmxlQm9sZCIsImxpbmVIZWlnaHQiLCJsZXZlbEJ5IiwiZ2FtZUNpcmNsZSIsImF1ZGl0TGV2ZWxBZCIsInN5c0luZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsImF1ZGl0TGV2ZWxBZFdpZHRoIiwid2luZG93V2lkdGgiLCJhdWRpdExldmVsQWRMZWZ0IiwiY3JlYXRlQmFubmVyQWQiLCJhZFVuaXRJZCIsInN0eWxlIiwibGVmdCIsInRvcCIsIndpbmRvd0hlaWdodCIsIm9uRXJyb3IiLCJ0aW1lTm9kZSIsInNldEludGVydmFsIiwiYmluZCIsInNwbGljZSIsImJhY2siLCJjbGlja01vdmUiLCJsZWZ0QnRuIiwicGFzc3dvcmQiLCJFZGl0Qm94IiwidGV4dExhYmVsIiwidXBsb2FkSW5mbyIsIl9pZCIsInJldmlld0lkIiwicG9wIiwibGV2ZWxTb2x1dGlvbiIsImxldmVsQ2xhc3NpZnkiLCJkYXRlIiwiRGF0ZSIsInRvZGF5IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic29sdXRpb25CdG5Ob2RlIiwic29sdXRpb25CdG5MYWJlbCIsImVuYWJsZVNraXAiLCJudW0iLCJza2lwTGV2ZWxBZCIsImxvYWQiLCJvZmZDbG9zZSIsImlzRW5kZWQiLCJ1bmRlZmluZWQiLCJjaGVja1NvbHV0aW9uTGV2ZWxBZCIsInNwbGl0Iiwic3RlcCIsInRpbWUiLCJsYXN0QmVzdFNjb3JlIiwicmFua1BhZ2UiLCJyYW5rUGFnZVNpemUiLCJyZXNvdXJjZSIsInJlbmRlckxldmVsUmFua0xpc3QiLCJwYWdlIiwicGFnZVNpemUiLCJjdXJyZW50SXRlbU51bSIsImNoaWxkcmVuQ291bnQiLCJnZXRDaGlsZEJ5TmFtZSIsImNyZWF0ZVRpbWUiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLE1BQU0sQ0FBQ0MsWUFBUCxHQUFzQixFQUF0QjtBQUVBRCxNQUFNLENBQUNFLE9BQVAsR0FBaUIsRUFBakI7QUFDQUYsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLElBQUlDLEtBQUosRUFBaEI7QUFDQUosTUFBTSxDQUFDSyxRQUFQLEdBQWtCLEVBQWxCO0FBQ0FMLE1BQU0sQ0FBQ00sV0FBUCxHQUFxQixJQUFyQjtBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGTjtBQUdIQyxNQUFBQSxXQUFXLEVBQUM7QUFIVCxLQURDO0FBTVJDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLElBRFA7QUFFRkgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRlA7QUFHRkMsTUFBQUEsV0FBVyxFQUFDO0FBSFYsS0FORTtBQVdSRSxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZSO0FBR0RDLE1BQUFBLFdBQVcsRUFBQztBQUhYLEtBWEc7QUFnQlJHLElBQUFBLElB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QUE7QUFpQjlDOztBQUNEb0MsVUFBQUEsT0FBTyxDQUFDN0YsTUFBUixHQUFpQjZGLE9BQU8sQ0FBQ3VHLGFBQVIsR0FBd0JqTixRQUFRLENBQUNhLE1BQWxEO0FBQ0gsU0FwQkQsTUFvQks7QUFDRCw2QkFBTSxTQUFOLEVBQWdCLElBQWhCO0FBQ0g7QUFHSixPQW5DRCxXQW1DUyxVQUFBMEIsR0FBRyxFQUFJO0FBQ1pzRCxRQUFBQSxPQUFPLENBQUNnQyxLQUFSLENBQWN0RixHQUFkOztBQUNBNkQsd0JBQVFtQixJQUFSO0FBQ0gsT0F0Q0Q7QUF1Q0g7QUFFSixHQS91REk7QUFndkRMNkYsRUFBQUEsU0FodkRLLHVCQWd2RE07QUFFUCxRQUFHeFAsTUFBTSxDQUFDK0wsWUFBVixFQUF3Qi9MLE1BQU0sQ0FBQytMLFlBQVAsQ0FBb0J2QixPQUFwQjtBQUUzQjtBQXB2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQge2Zvcm1hdGVSYW5rVGltZSwgTG9hZGluZywgVG9hc3R9IGZyb20gXCIuL2NvbW1vblwiO1xyXG53aW5kb3cuY3VycmVudExldmVsID0gW107XHJcblxyXG53aW5kb3cuZWxlU2l6ZSA9IDM1O1xyXG53aW5kb3cubGF5b3V0ID0gbmV3IEFycmF5KCk7XHJcbndpbmRvdy5ibG9ja051bSA9IDEyO1xyXG53aW5kb3cudXBsb2FkTGV2ZWwgPSBudWxsO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBibG9jazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidibG9jaydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTond2FsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJveDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidib3gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWxsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JhbGwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlVXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVVwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZVJpZ2h0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVSaWdodCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVEb3duOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J3JvbGVEb3duJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZUxlZnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZUxlZnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnYW1lQm46Y2MuU3ByaXRlLFxyXG4gICAgICAgIGJveE51bTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwQ291bnRlcjpudWxsLFxyXG4gICAgICAgIHN0ZXBDb3VudGVyVmFsdWU6IDAsXHJcbiAgICAgICAgdGltZUNvdW50ZXI6bnVsbCxcclxuICAgICAgICB0aW1lQ291bnRlclZhbHVlOjAsXHJcbiAgICAgICAgdGltZUNvdW50ZXJUaW1lcjpudWxsLFxyXG4gICAgICAgIGxldmVsQ291bnRlcjogbnVsbCxcclxuICAgICAgICBtb3ZlSGlzdG9yeUxpc3Q6W10sXHJcbiAgICAgICAgbGFzdFNjb3JlOiBudWxsLFxyXG4gICAgICAgIGxhc3RTdGVwTm9kZTogbnVsbCxcclxuICAgICAgICBsYXN0VGltZW5vZGU6IG51bGwsXHJcbiAgICAgICAgcmFua0l0ZW06Y2MuUHJlZmFiLFxyXG4gICAgICAgIGJ1aWxkQXJlYTpudWxsLFxyXG4gICAgICAgIHNvbHV0aW9uQnRuOm51bGwsXHJcbiAgICAgICAgbm9uZVNraXBDaGFuZ2U6ZmFsc2UsXHJcbiAgICAgICAgc29sdXRpb25TdGVwSW5kZXg6IC0xLFxyXG4gICAgICAgIHJlY29yZFNvbHV0aW9uU3RlcDpbXVxyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdFdpbkVsZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJblvZPliY3lhbPljaFcclxuICAgICAgICB0aGlzLmluaXRMZXZlbCgpO1xyXG4gICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zJyx0aGlzLm5vZGUpLmhlaWdodCA9ICAoY2Mud2luU2l6ZS5oZWlnaHQgLSBjYy53aW5TaXplLndpZHRoKS8yO1xyXG5cclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkVG91Y2hNb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5wZW5kYW50QWRkRXZlbnQoKTtcclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBpbml0V2luRWxlKCl7XHJcbiAgICAgICAgdGhpcy5idWlsZEFyZWEgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL2J1aWxkQXJlYScpO1xyXG4gICAgICAgIGxldCByZWFsU2l6ID0gY2Mud2luU2l6ZS53aWR0aC93aW5kb3cuYmxvY2tOdW07XHJcbiAgICAgICAgd2luZG93LmVsZVNpemUgPSByZWFsU2l6O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB3aW5kb3cuYmxvY2tOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0gPSB7eDowLHk6MCxzaWduOjAsY292ZXI6bnVsbH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbml0UG9zaXRpb24obGF5b3V0KXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge307XHJcbiAgICAgICAgdGhpcy5ib3hOdW0gPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8bGF5b3V0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IGxheW91dFswXS5sZW5ndGg7IG4rKyl7XHJcbiAgICAgICAgICAgICAgICAvL2xheW91dFtpXVtuXS5zaWduIC0tIOS6uueJqeS9jee9rlxyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W2ldW25dLnNpZ24gPT0gNCB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA1IHx8IGxheW91dFtpXVtuXS5zaWduID09IDYgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/nrrHlrZDmlbDph49cclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFtpXVtuXS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94TnVtICsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICByZW5kZXJCZygpe1xyXG4gICAgICAgIGxldCBzdGFydFggPSAtKGNjLndpblNpemUud2lkdGgvMik7XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9ICh3aW5kb3cuZWxlU2l6ZSp3aW5kb3cuYmxvY2tOdW0pLzI7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gbip3aW5kb3cuZWxlU2l6ZSArIHN0YXJ0WDtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gLWkqd2luZG93LmVsZVNpemUgKyBzdGFydFk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubGF5b3V0W2ldW25dID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeSxcclxuICAgICAgICAgICAgICAgICAgICBzaWduOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXI6bnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAvLyDkuLrorr7nva7kvY3nva5cclxuICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAvLyDlsIbmlrDlop7nmoToioLngrnmt7vliqDliLAgQ2FudmFzIOiKgueCueS4i+mdolxyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3QmxvY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyQm4oKXtcclxuICAgICAgICBpZih0aGlzLmdhbWVCbiA9PSBudWxsKSB0aGlzLmdhbWVCbiA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvZ2FtZUJuJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZSh3aW5kb3cuYmdVcmxCYXNlKyAnXzQwMHgyNDAuanBnJywgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlLCBjYy5yZWN0KDAsMCw0MDAsMjQwKSk7XHJcbiAgICAgICAgICAgIHRoYXQuZ2FtZUJuLnNwcml0ZUZyYW1lID0gc3ByaXRlOyAvL+iuvue9rueyvueBtee7hOS7tuWbvueJh+i1hOa6kFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyTGF5b3V0KGxheW91dCl7XHJcbiAgICAgICAgdGhpcy5idWlsZEFyZWEuZGVzdHJveUFsbENoaWxkcmVuKClcclxuICAgICAgICB0aGlzLnJlbmRlckJnKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKHZhciBuID0gMDsgbiA8IHdpbmRvdy5ibG9ja051bTsgbisrKXtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gd2luZG93LmxheW91dFtpXVtuXS54O1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSB3aW5kb3cubGF5b3V0W2ldW25dLnk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2gobGF5b3V0W2ldW25dLnNpZ24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9jayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld0Jsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3V2FsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMud2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1dhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3V2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0JveCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm94KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Qm94LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld0JveCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0JhbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCYWxsLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld0JhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlVXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVVcC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdSb2xlVXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlUmlnaHQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvbGVSaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVSaWdodC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdSb2xlUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb2xlRG93biA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZURvd24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdSb2xlRG93bi5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdSb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVMZWZ0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlTGVmdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVMZWZ0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVMZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVVcChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuXHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnqbpcclxuICAgICAgICBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDApe1xyXG4gICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li65aKZ5L2TXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDEpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li6566x5a2QXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAvL+euseWtkOS4iuS4gOagvOS4uuepulxyXG4gICAgICAgICAgICBpZihsYXlvdXRbeS0yXVt4XS5zaWduID09IDApe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5LTFdW3hdLmNvdmVyKSBsYXlvdXRbeS0xXVt4XS5jb3ZlciA9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDkuIrkuIDmoLznkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0yXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ktMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5zaWduID0gNDtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5LTFdW3hdLmNvdmVyKSBsYXlvdXRbeS0xXVt4XS5jb3ZlciA9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3VwJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiK5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeS0xXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICBsYXlvdXRbeS0xXVt4XS5jb3ZlciA9IDQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v56e75Yqo5ZCO5Zue5pi+55CD5L2TXHJcbiAgICAgICAgaWYobGF5b3V0W3ldW3hdLnNpZ24gPT0gMCAmJiBsYXlvdXRbeV1beF0uY292ZXIpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDM7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KGxheW91dClcclxuXHJcbiAgICB9LFxyXG4gICAgbW92ZURvd24obGF5b3V0KXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrnqbpcclxuICAgICAgICBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDApe1xyXG4gICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2Rvd24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qC85Li6566x5a2QXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAvL+euseWtkOS4i+S4gOagvOS4uuepulxyXG4gICAgICAgICAgICBpZihsYXlvdXRbeSsyXVt4XS5zaWduID09IDApe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMl1beF0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5KzFdW3hdLmNvdmVyKSBsYXlvdXRbeSsxXVt4XS5jb3ZlciA9IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2Rvd24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOS4i+S4gOagvOS4uueQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5KzJdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsyXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzJdW3hdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3krMV1beF0uY292ZXIpIGxheW91dFt5KzFdW3hdLmNvdmVyID0gNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4i+S4gOagvOS4uueQg1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5zaWduID0gNjtcclxuICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uY292ZXIgPSA2O1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2Rvd24nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v56e75Yqo5ZCO5Zue5pi+55CD5L2TXHJcbiAgICAgICAgaWYobGF5b3V0W3ldW3hdLnNpZ24gPT0gMCAmJiBsYXlvdXRbeV1beF0uY292ZXIpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDM7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5jb3ZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KGxheW91dClcclxuXHJcbiAgICB9LFxyXG4gICAgbW92ZUxlZnQobGF5b3V0KXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnqbpcclxuICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5zaWduID09IDApe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5bem5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5XVt4LTJdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0yXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3gtMV0uY292ZXIpIGxheW91dFt5XVt4LTFdLmNvdmVyID0gNztcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5bem5LiA5qC85Li655CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMl0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMl0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5jb3ZlcikgbGF5b3V0W3ldW3gtMV0uY292ZXIgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5bem5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0xXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5jb3ZlciA9IDc7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3ZlciAmJiBsYXlvdXRbeV1beF0uY292ZXIgIT0gMil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KGxheW91dClcclxuICAgIH0sXHJcbiAgICBtb3ZlUmlnaHQobGF5b3V0KXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnqbpcclxuICAgICAgICBpZihsYXlvdXRbeV1beCsxXS5zaWduID09IDApe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beCsxXS5zaWduID0gNTtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+z5LiA5qC85Li65aKZ5L2TXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beCsxXS5zaWduID09IDEpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+z5LiA5qC85Li6566x5a2QXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beCsxXS5zaWduID09IDIpe1xyXG4gICAgICAgICAgICAvL+euseWtkOWPs+S4gOagvOS4uuepulxyXG4gICAgICAgICAgICBpZihsYXlvdXRbeV1beCsyXS5zaWduID09IDApe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3grMl0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsxXS5zaWduID0gNTtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5XVt4KzFdLmNvdmVyKSBsYXlvdXRbeV1beCsxXS5jb3ZlciA9IDU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDlj7PkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beCsyXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3grMl0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsxXS5zaWduID0gNTtcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5XVt4KzFdLmNvdmVyKSBsYXlvdXRbeV1beCsxXS5jb3ZlciA9IDU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Y+z5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beCsxXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beCsxXS5jb3ZlciA9IDU7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v56e75Yqo5ZCO5Zue5pi+55CD5L2TXHJcbiAgICAgICAgaWYobGF5b3V0W3ldW3hdLnNpZ24gPT0gMCAmJiBsYXlvdXRbeV1beF0uY292ZXIgJiYgbGF5b3V0W3ldW3hdLmNvdmVyICE9IDIpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDM7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5jb3ZlciA9IG51bGw7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LnJlbmRlckxheW91dChsYXlvdXQpXHJcbiAgICB9LFxyXG4gICAgcmVzZXRQb3NpdGlvbihkaXJlY3Rpb24pe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSBcInVwbG9hZFNvbHV0aW9uXCIpIHRoYXQucmVjb3JkU29sdXRpb25TdGVwLnB1c2goJ1UnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMTtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIikgdGhhdC5yZWNvcmRTb2x1dGlvblN0ZXAucHVzaCgnUicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJ1cGxvYWRTb2x1dGlvblwiKSB0aGF0LnJlY29yZFNvbHV0aW9uU3RlcC5wdXNoKCdEJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSBcInVwbG9hZFNvbHV0aW9uXCIpIHRoYXQucmVjb3JkU29sdXRpb25TdGVwLnB1c2goJ0wnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aYr+WQpuW8gOWQr+WbnumAgOWKn+iDvVxyXG4gICAgICAgIGlmICh3aW5kb3cuZnJvbSA9PSBcInVwbG9hZFNvbHV0aW9uXCIgIHx8ICh3aW5kb3cuc2V0dGluZy5yZWxhc3QgJiYgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpKSB7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHdpbmRvdy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGVwQ291bnRlclZhbHVlICsrO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuc3RlcENvdW50ZXIpdGhpcy5zdGVwQ291bnRlci5zdHJpbmcgPSBcIuatpeaVsO+8mlwiICsgdGhpcy5zdGVwQ291bnRlclZhbHVlO1xyXG4gICAgICAgIGxldCBjb3ZlckJveE51bSA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTx3aW5kb3cuY3VycmVudExldmVsLmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG48d2luZG93LmN1cnJlbnRMZXZlbFswXS5sZW5ndGggOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmN1cnJlbnRMZXZlbFtpXVtuXS5jb3ZlciAmJiB3aW5kb3cuY3VycmVudExldmVsW2ldW25dLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyQm94TnVtICsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm94TnVtID09IGNvdmVyQm94TnVtKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+aMkeaImOaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5tb3ZlTXVzaWMgJiYgIXdpbmRvdy5tb3ZlTXVzaWMucGF1c2VkKSB3aW5kb3cubW92ZU11c2ljLnN0b3AoKTtcclxuICAgICAgICBpZih3aW5kb3cubW92ZU11c2ljICYmICF3aW5kb3cubW92ZU11c2ljLnBhdXNlZCkgd2luZG93Lm1vdmVNdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgIGlmKHdpbmRvdy5tb3ZlTXVzaWMpIHdpbmRvdy5tb3ZlTXVzaWMucGxheSgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYWRkVG91Y2hNb3ZlKCl7XHJcbiAgICAgICAgaWYoIXdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSB8fCB3aW5kb3cuZnJvbSA9PSBcImNoZWNrU29sdXRpb25cIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGZpZ3VyZUxvY2F0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGZpZ3VyZUxvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZW5kTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi54IC0gZW5kTG9jYXRpb24ueCkgPiBNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi55IC0gZW5kTG9jYXRpb24ueSkpe1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlj7Pmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW3pua7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUxlZnQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIrmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVVcCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4i+a7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZURvd24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jlc3VsdCh0eXBlKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyKXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGF0LnRpbWVDb3VudGVyVGltZXIpXHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwicmV2aWV3XCIgfHwgd2luZG93LmZyb20gPT0gXCJjaGVja1NvbHV0aW9uXCIpe1xyXG4gICAgICAgICAgICBUb2FzdCgn5oyR5oiY5oiQ5Yqf77yBJywxNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcblxyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3VzZVRpbWUnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5q2l5pWw77yaXCIrIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSsn5q2lJztcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3VzZVN0ZXAnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi55So5pe277yaXCIrIHRoYXQudGltZUNvdW50ZXJWYWx1ZSsn56eSJztcclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvbmV4dC9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAn5LiK5Lyg5YWz5Y2hJztcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dldFJldmlld0xldmVsTnVtJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkUmV2aWV3TGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogd2luZG93LnVwbG9hZExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXBOdW06IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiByZXMucmVzdWx0LnRvdGFsKzEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lP3dpbmRvdy5sb2dpbkluZm8ubmlja05hbWU6J+a4uOWuoicrd2luZG93LnVzZXIuYXBwSWQuc3Vic3RyaW5nKHdpbmRvdy51c2VyLmFwcElkLmxlbmd0aC01KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXZlbFVwbG9hZE51bSA9IHBhcnNlSW50KHJlcy5yZXN1bHQudG90YWwpKzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCflhbPljaHkuIrkvKDmiJDlip/lvoXlrqHmoLjvvIzlhbPpl63lub/lkYrlkI7ot7Plm57kuLvnlYzpnaInLDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQuc2hvdygpLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5YWz5Y2h5LiK5Lyg5oiQ5Yqf5b6F566h55CG5ZGY5a6h5qC477yM5Y2z5bCG6Lez5Zue5Li755WM6Z2iJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5aSx6LSlJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgfWVsc2UgaWYod2luZG93LmZyb20gPT0gXCJ1cGxvYWRTb2x1dGlvblwiKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0L0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfkuIrkvKDmlLvnlaUnO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sYXN0U29sdXRpb25TdGVwICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+abtOaWsOaUu+eVpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGFzdFNvbHV0aW9uU3RlcD50aGF0LnN0ZXBDb3VudGVyVmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlQ2xhc3NpY3NMZXZlbFNvbHV0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGF0LnJlY29yZFNvbHV0aW9uU3RlcC5qb2luKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+aUu+eVpeS4iuS8oOaIkOWKnycsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxMDAwKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDlpLHotKUs6K+356iN5ZCO5YaN6K+VJywzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5Y6f5pyJ5pS755Wl5q2l5pWw5pu05bCR77yM5LiK5Lyg5aSx6LSlJywzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+S4iuS8oOaUu+eVpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZENsYXNzaWNzTGV2ZWxTb2x1dGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRoYXQucmVjb3JkU29sdXRpb25TdGVwLmpvaW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5pS755Wl5LiK5Lyg5oiQ5YqfJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5aSx6LSlLOivt+eojeWQjuWGjeivlScsMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih3aW5kb3cuZnJvbSAhPSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEluZGV4ID49IHdpbmRvdy5jbGFzc2ljc0xldmVsTnVtKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvbmV4dC9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAn5Zue5Li755WM6Z2iJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSdcclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvL+S4i+S4gOWFs1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdExldmVsKClcclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5maW5kKCdjb250ZW50QmcvbmV4dCcsbmV3TXlQcmVmYWIpLm9wYWNpdHkgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9yZXBsYXknLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwidXBsb2FkU29sdXRpb25cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcblxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9yYW5rJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5rWL6K+V5YWz5Y2h5rKh5pyJ5o6S6KGM5qacJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhhdC5zaG93TGV2ZWxSYW5rKCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3NoYXJlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICfnm4rmmbrmjqjnrrEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tICE9ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAn56ysJyt3aW5kb3cubGV2ZWxJbmRleCsn5YWzJysnLeS9v+eUqOatpeaVsO+8micrIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSArJy3mjJHmiJjmiJDlip/vvIEnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcrJ+Wwj+a4uOaIj++8jOW/q+adpeaMkeaImOWQp++8gSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZ2FtZU92ZXJBbGVydCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICB9LDApXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwiYnVpbGRcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0eXBlPT0nc2tpcCcpe1xyXG4gICAgICAgICAgICB0aGF0LnN0ZXBDb3VudGVyVmFsdWUgPSAnOTk5OSc7XHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJWYWx1ZSA9ICc5OTk5JztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkvKDliIbmlbBcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgaWYgKHRoYXQubGFzdFNjb3JlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWIhuaVsOS4rS4uLicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VUaW1lOiB0aGF0LnRpbWVDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU/d2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXNlci5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVzZXIuYXBwSWQubGVuZ3RoLTUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUodGhhdC5sYXN0U2NvcmUudXNlU3RlcCx0aGF0Lmxhc3RTY29yZS51c2VUaW1lKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB8fCB0aGF0LnRpbWVDb3VudGVyVmFsdWUgPCB0aGF0Lmxhc3RTY29yZS51c2VUaW1lXHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5zdGVwQ291bnRlclZhbHVlIDwgdGhhdC5sYXN0U2NvcmUudXNlU3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSh0aGF0Lmxhc3RTY29yZS51c2VTdGVwLHRoYXQubGFzdFNjb3JlLnVzZVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDliIbmlbDkuK0uLi4nLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGVDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY3VyTGV2ZWxOdW0gPSB3aW5kb3cubGV2ZWxJbmRleDtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeVVzZXInLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCAmJiByZXMucmVzdWx0LmRhdGFbMF0ubGV2ZWxGaW5pc2hOdW0gPCBjdXJMZXZlbE51bSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSBjdXJMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwSWQgPSB3aW5kb3cudXNlci5hcHBJZDtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmxldmVsRmluaXNoTnVtID0gY3VyTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxvZ2luSW5mby5uaWNrTmFtZSkgZGF0YS5uaWNrTmFtZSA9IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwpIGRhdGEucG9ydHJhaXQgPSB3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVwbGF5TGF5b3V0KCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6IFwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJ1cGxvYWRTb2x1dGlvblwiKSB0aGF0LnJlY29yZFNvbHV0aW9uU3RlcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbCgpe1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICAgIGluaXRQZW5kYW50KCl7XHJcblxyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcblxyXG5cclxuICAgICAgICAvL+WFs+WNoVxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbGV2ZWxOb2RlID0gbmV3IGNjLk5vZGUoJ2xldmVsQ291bnRlcicpO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xyXG4gICAgICAgICAgICBsZXZlbE5vZGUud2lkdGggPSAgY2Mud2luU2l6ZS53aWR0aCowLjc7XHJcbiAgICAgICAgICAgIGxldmVsTm9kZS5oZWlnaHQgPSAxODA7XHJcbiAgICAgICAgICAgIC8vIGxldmVsTm9kZS5ob3Jpem9udGFsQWxpZ24gPSAnQ0VOVEVSJ1xyXG4gICAgICAgICAgICB2YXIgbGV2ZWxDb3VudGVyID0gbGV2ZWxOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKDAsICAoY2Mud2luU2l6ZS5oZWlnaHQvMikgLSAoY2Mud2luU2l6ZS5oZWlnaHQqMC4wNSkpO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIuZm9udFNpemUgPSA2MDtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmVuYWJsZUJvbGQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBsZXZlbENvdW50ZXIub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5DTEFNUDtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLmxpbmVIZWlnaHQgPSA2MDtcclxuICAgICAgICAgICAgaWYod2luZG93LmxldmVsQnkpe1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxDb3VudGVyLnN0cmluZyA9ICgn56ysICcrIHdpbmRvdy5sZXZlbEluZGV4ICsgJyDlhbMgLSAnK3dpbmRvdy5sZXZlbEJ5KS5zdWJzdHJpbmcoMCwxNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGxldmVsQ291bnRlci5zdHJpbmcgPSAn56ysICcrIHdpbmRvdy5sZXZlbEluZGV4ICsgJyDlhbMnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlciA9IGxldmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbE5vZGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxCeSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlci5zdHJpbmcgPSAoJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzIC0gJyt3aW5kb3cubGV2ZWxCeSkuc3Vic3RyaW5nKDAsMTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlci5zdHJpbmcgPSAn56ysICcrIHdpbmRvdy5sZXZlbEluZGV4ICsgJyDlhbMnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlci5zdHJpbmcgPSAn5rWL6K+V5YWz5Y2hJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3Jldmlldycpe1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsQ291bnRlci5zdHJpbmcgPSAn5a6h5qC45YWz5Y2hJztcclxuXHJcblxyXG4gICAgICAgICAgICBpZih3aW5kb3cuZ2FtZUNpcmNsZSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmdhbWVDaXJjbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmdhbWVDaXJjbGUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5hdWRpdExldmVsQWQpIHdpbmRvdy5hdWRpdExldmVsQWQuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FICYmICF3aW5kb3cuZ2FtZUNpcmNsZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3lzSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaXRMZXZlbEFkV2lkdGggPSBzeXNJbmZvLndpbmRvd1dpZHRoKjAuNjtcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpdExldmVsQWRMZWZ0ID0gKHN5c0luZm8ud2luZG93V2lkdGgqMC40KS8yO1xyXG4gICAgICAgICAgICAgICAgaWYoYXVkaXRMZXZlbEFkV2lkdGg8PTMwMCkgYXVkaXRMZXZlbEFkTGVmdCA9IChzeXNJbmZvLndpbmRvd1dpZHRoLTMwMCkvMjtcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WuoeaguOmhtemdomJuQWRcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hdWRpdExldmVsQWQgPSAgd3guY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWExNjcwYzIyNTMzNGRhMjcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1ZGl0TGV2ZWxBZExlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogc3lzSW5mby53aW5kb3dIZWlnaHQqMC4wOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1ZGl0TGV2ZWxBZFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXVkaXRMZXZlbEFkLm9uRXJyb3IoZXJyID0+IHt9KVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmF1ZGl0TGV2ZWxBZC5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hdWRpdExldmVsQWQuc2hvdygpLmNhdGNoKCgpPT57fSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3VwbG9hZFNvbHV0aW9uJyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsycrJyAtIOS4iuS8oOaUu+eVpSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdjaGVja1NvbHV0aW9uJyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsycrJyAtIOaUu+eVpSc7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8v5q2l5pWwXHJcbiAgICAgICAgaWYodGhpcy5zdGVwQ291bnRlciA9PSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgnc3RlcENvdW50ZXInKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRBbmNob3JQb2ludCgwLCAxKTtcclxuICAgICAgICAgICAgdmFyIHN0ZXBDb3VudGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKC0oY2Mud2luU2l6ZS53aWR0aC8yKSArIChjYy53aW5TaXplLndpZHRoKjAuMDUpLCAgKGNjLndpblNpemUud2lkdGgvMikgKyA4MCk7XHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLnN0cmluZyA9ICfmraXmlbDvvJogMCc7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcENvdW50ZXIgPSBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBDb3VudGVyVmFsdWUgID0gMDtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGVwQ291bnRlcikgdGhpcy5zdGVwQ291bnRlci5zdHJpbmcgPSBcIuatpeaVsO+8mlwiICsgdGhpcy5zdGVwQ291bnRlclZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8v55So5pe2XHJcbiAgICAgICAgaWYodGhpcy50aW1lQ291bnRlciA9PSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIHRpbWVOb2RlID0gbmV3IGNjLk5vZGUoJ3RpbWVDb3VudGVyJyk7XHJcbiAgICAgICAgICAgIHRpbWVOb2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgdGltZUNvdW50ZXIgPSB0aW1lTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICB0aW1lQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKDAgLCAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDgwKVxyXG4gICAgICAgICAgICB0aW1lQ291bnRlci5zdHJpbmcgPSAn55So5pe277yaIDAnO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyID0gdGltZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGltZU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGltZUNvdW50ZXIpIHRoaXMudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoaXMudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLDEwMDApXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXJWYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoaXMudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lQ291bnRlclRpbWVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXJWYWx1ZSAgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy50aW1lQ291bnRlcil0aGlzLnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGlzLnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5tb3ZlSGlzdG9yeUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlSGlzdG9yeUxpc3Quc3BsaWNlKDAsdGhpcy5tb3ZlSGlzdG9yeUxpc3QubGVuZ3RoKVxyXG4gICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICBrZXk6XCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBwZW5kYW50QWRkRXZlbnQoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgY2MuZmluZCgnYmFjaycsdGhpcy5ub2RlKS5vbignY2xpY2snLHRoaXMuYmFjaywgdGhpcylcclxuICAgICAgICAvL+W8gOWQr+eCueWHu+enu+WKqFxyXG4gICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSAmJiB3aW5kb3cuZnJvbSAhPSBcImNoZWNrU29sdXRpb25cIikge1xyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy91cCcsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlVXAod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9yaWdodCcsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlUmlnaHQod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9kb3duJyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVEb3duKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbGVmdCcsdGhpcy5ub2RlKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb3ZlTGVmdCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3VwJyx0aGlzLm5vZGUpLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9yaWdodCcsdGhpcy5ub2RlKS5yZW1vdmVGcm9tUGFyZW50KClcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvZG93bicsdGhpcy5ub2RlKS5yZW1vdmVGcm9tUGFyZW50KClcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvbGVmdCcsdGhpcy5ub2RlKS5yZW1vdmVGcm9tUGFyZW50KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBsZWZ0QnRuID0gY2MuZmluZCgnZ2FtZUJ0bnMvYmFja1N0ZXAvQmFja2dyb3VuZC9MYWJlbCcsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdyZXZpZXcnKSBsZWZ0QnRuLnN0cmluZyA9ICfpgJrov4cnO1xyXG4gICAgICAgIGVsc2UgaWYod2luZG93LmZyb20gPT0gJ2NoZWNrU29sdXRpb24nKSBsZWZ0QnRuLnN0cmluZyA9ICdBZ2Fpbic7XHJcbiAgICAgICAgZWxzZSBpZighd2luZG93LnNldHRpbmcucmVsYXN0KSBsZWZ0QnRuLnN0cmluZyA9ICfph43njqknO1xyXG4gICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2JhY2tTdGVwJyx0aGlzLm5vZGUpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy/mlLvnlaXmkq3mlL5cclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2NoZWNrU29sdXRpb24nKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc29sdXRpb25TdGVwSW5kZXg9LTFcclxuICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lrqHmoLjlhbPljaHpgJrov4dcclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3Jldmlldycpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCd2ZXJpZnlDb250YWluL2Nsb3NlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gIGNjLmZpbmQoJ3ZlcmlmeUNvbnRhaW4vZWRpdGJveCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgndmVyaWZ5Q29udGFpbi9jb25maXJtJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhc3N3b3JkLnRleHRMYWJlbC5zdHJpbmcgPT0gJzE5OTcwNzIwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dldENsYXNzaWNzTGV2ZWxOdW0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZENsYXNzaWNzTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogcmVzLnJlc3VsdC50b3RhbCsxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVwbG9hZEluZm8uYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZT93aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZTon5ri45a6iJyt3aW5kb3cudXBsb2FkSW5mby5hcHBJZC5zdWJzdHJpbmcod2luZG93LnVwbG9hZEluZm8uYXBwSWQubGVuZ3RoLTUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LnVwbG9hZEluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6d2luZG93LnJldmlld0lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXZlbFVwbG9hZE51bSA9IHBhcnNlSW50KHJlcy5yZXN1bHQudG90YWwpKzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCflhbPljaEnK2xldmVsVXBsb2FkTnVtKyfkuIrkvKDmiJDlip/vvIzljbPlsIbot7Plm57kuLvnlYzpnaInLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC50aW1lQ291bnRlclRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfkuIrkvKDlpLHotKUnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCflr4bnoIHplJnor6/vvIEnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCd2ZXJpZnlBZG1pbicsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5yZWxhc3Qpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhhdC5tb3ZlSGlzdG9yeUxpc3QubGVuZ3RoID4gMSAmJiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUgPj0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJ1cGxvYWRTb2x1dGlvblwiKSB0aGF0LnJlY29yZFNvbHV0aW9uU3RlcC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhhdC5tb3ZlSGlzdG9yeUxpc3RbdGhhdC5tb3ZlSGlzdG9yeUxpc3QubGVuZ3RoLTFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSAtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RlcENvdW50ZXIuc3RyaW5nID0gXCLmraXmlbDvvJpcIiArIHRoYXQuc3RlcENvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlcGxheUxheW91dCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3JykgY2MuZmluZCgnZ2FtZUJ0bnMvbWVudS9CYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+mps+WbnidcclxuICAgICAgICBlbHNlIGlmKHdpbmRvdy5mcm9tID09IFwiY2hlY2tTb2x1dGlvblwiKSBjYy5maW5kKCdnYW1lQnRucy9tZW51L0JhY2tncm91bmQvTGFiZWwnLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAnTmV4dCdcclxuICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9tZW51Jyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC50aW1lQ291bnRlclRpbWVyKTtcclxuICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgLy/mlLvnlaXmkq3mlL5cclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2NoZWNrU29sdXRpb24nKXtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGF0LnNvbHV0aW9uU3RlcEluZGV4ICsrIDtcclxuICAgICAgICAgICAgICAgIGlmKHRoYXQuc29sdXRpb25TdGVwSW5kZXg+PXdpbmRvdy5sZXZlbFNvbHV0aW9uLmNvbnRlbnQubGVuZ3RoKSB0aGF0LnNvbHV0aW9uU3RlcEluZGV4PS0xO1xyXG4gICAgICAgICAgICAgICAgaWYodGhhdC5zb2x1dGlvblN0ZXBJbmRleCA8PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHdpbmRvdy5sZXZlbFNvbHV0aW9uLmNvbnRlbnRbdGhhdC5zb2x1dGlvblN0ZXBJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdVJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlVXAod2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZVJpZ2h0KHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVEb3duKHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0wnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVMZWZ0KHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+WuoeaguOWFs+WNoemps+WbnlxyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgndmVyaWZ5Q29udGFpbi9jbG9zZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXNzd29yZCA9ICBjYy5maW5kKCd2ZXJpZnlDb250YWluL2VkaXRib3gnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3ZlcmlmeUNvbnRhaW4vY29uZmlybScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwYXNzd29yZC50ZXh0TGFiZWwuc3RyaW5nID09ICcxOTk3MDcyMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVSZXZpZXdMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDp3aW5kb3cucmV2aWV3SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+WFs+WNoeW3sumps+Wbnu+8jOWNs+Wwhui3s+WbnuS4u+eVjOmdoicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+WvhueggemUmeivr++8gScsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3ZlcmlmeUFkbWluJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IHRoYXQubm9kZTtcclxuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vY29udGludWUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGF0LnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJWYWx1ZSAgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyLnN0cmluZyA9IFwi55So5pe277yaXCIgKyB0aGF0LnRpbWVDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGF0KSwxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vcmVwbGF5JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlcGxheUxheW91dCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL2xldmVscycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsZXZlbExheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250YWluL3JhbmsnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+a1i+ivleWFs+WNoeayoeacieaOkuihjOamnCcsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd0xldmVsUmFuaygpO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vc2hhcmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpdFN0cmluZyA9ICAn55uK5pm65o6o566xJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gIT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAn56ysJyt3aW5kb3cubGV2ZWxJbmRleCsn5YWzLeW/q+adpeaMkeaImOWQpyEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICflsI/muLjmiI/vvIzlv6vmnaXmjJHmiJjlkKfvvIEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJy3kvb/nlKjmraXmlbDvvJonXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICfliIbkuqsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lTWVudScsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgIGluaXRMZXZlbCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUoJ+aXoCcsJ+aXoCcpXHJcblxyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OididWlsZExldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbmjILku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUhpc3RvcnlMaXN0LnB1c2gocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTonYnVpbGRMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkTGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3Jldmlldycpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUoJ+aXoCcsJ+aXoCcpXHJcblxyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OidyZXZpZXdMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkTGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluaMguS7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy/nu4/lhbjlhbPljaFcclxuICAgICAgICAgICAgaWYod2luZG93LmxldmVsQ2xhc3NpZnkgPT0gJ2NsYXNzaWNzTGV2ZWwnKXtcclxuICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDp3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDogd2luZG93LmxldmVsSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMucmVzdWx0LmRhdGFbMF0uY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxCeSA9IHJlcy5yZXN1bHQuZGF0YVswXS5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW5oyC5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlcGxheUxheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWxTY29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6d2luZG93LnVzZXIuYXBwSWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0gcmVzLnJlc3VsdC5kYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSh0aGF0Lmxhc3RTY29yZS51c2VTdGVwLHRoYXQubGFzdFNjb3JlLnVzZVRpbWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKCfml6AnLCfml6AnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxJbmRleCA9PSAxKSBUb2FzdCgnVGlwOiDlj6/mu5HliqjlsY/luZXmjqfliLbkurrniaknLDUwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v572R57uc5YWz5Y2hXHJcbiAgICAgICAgICAgIGVsc2V7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8v5pS755WlXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tICE9IFwidXBsb2FkU29sdXRpb25cIiAmJiB3aW5kb3cuZnJvbSAhPSBcImNoZWNrU29sdXRpb25cIil7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kYXkgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNvbHV0aW9uQnRuTm9kZSA9IG5ldyBjYy5Ob2RlKCdza2lwTm9kZScpO1xyXG4gICAgICAgICAgICAgICAgc29sdXRpb25CdG5Ob2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNvbHV0aW9uQnRuTGFiZWwgPSBzb2x1dGlvbkJ0bk5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIHNvbHV0aW9uQnRuTGFiZWwubm9kZS5zZXRQb3NpdGlvbigoY2Mud2luU2l6ZS53aWR0aC8yKSAtIChjYy53aW5TaXplLndpZHRoKjAuMiksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDgwKTtcclxuICAgICAgICAgICAgICAgIHNvbHV0aW9uQnRuTGFiZWwuc3RyaW5nID0gJ+ebuOWFs+aUu+eVpSc7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNvbHV0aW9uQnRuID0gc29sdXRpb25CdG5Ob2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICAgICAgICAgIHRoYXQubm9kZS5hZGRDaGlsZChzb2x1dGlvbkJ0bk5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuYWJsZVNraXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnc2tpcEFkSW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubnVtPj01KSB0aGF0Lm5vbmVTa2lwQ2hhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhhdC5zb2x1dGlvbkJ0bi5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFlbmFibGVTa2lwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlU2tpcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoYXQudGltZUNvdW50ZXJUaW1lcikgY2xlYXJJbnRlcnZhbCh0aGF0LnRpbWVDb3VudGVyVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NvbHV0aW9uQ29udGFpbi9jbG9zZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoYXQudGltZUNvdW50ZXJUaW1lciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJWYWx1ZSAgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoYXQudGltZUNvdW50ZXIpIHRoYXQudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoYXQudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhhdCksMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NvbHV0aW9uQ29udGFpbi9za2lwTGV2ZWwnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoYXQubGFzdFNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuW9k+WJjeWFs+WNoeW3sumAmui/h+aXoOmcgOWGjei3s+i/h1wiLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoYXQubm9uZVNraXBDaGFuZ2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5q+P5aSp5pyA5aSa6Lez6L+HNeS4quWFs+WNoVwiLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLlub/lkYrmi4nlj5bkuK0uLi5cIiwxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF3aW5kb3cuc2tpcExldmVsQWQpe1RvYXN0KFwi5bm/5ZGK5ouJ5Y+W5aSx6LSlXCIsMTUwMCk7cmV0dXJuO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5za2lwTGV2ZWxBZC5zaG93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNraXBMZXZlbEFkLmxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2luZG93LnNraXBMZXZlbEFkLnNob3coKSkuY2F0Y2goKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5bm/5ZGK5ouJ5Y+W5aSx6LSlXCIsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNraXBMZXZlbEFkLm9mZkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQub25DbG9zZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+S6huOAkOWFs+mXreW5v+WRiuOAkeaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwj+S6jiAyLjEuMCDnmoTln7rnoYDlupPniYjmnKzvvIxyZXMg5piv5LiA5LiqIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmlzRW5kZWQgfHwgcmVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoYXQudGltZUNvdW50ZXJUaW1lciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoYXQudGltZUNvdW50ZXIpIHRoYXQudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoYXQudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGF0KSwxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93UmVzdWx0KCdza2lwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+mZkOWItui3s+i/h+asoeaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3NraXBBZEluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5kYXRlID09IHRvZGF5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEubnVtPj01KSB0aGF0Lm5vbmVTa2lwQ2hhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdza2lwQWRJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOnRvZGF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bTpyZXMuZGF0YS5udW0rMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3NraXBBZEluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6dG9kYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc2tpcEFkSW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6dG9kYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NvbHV0aW9uQ29udGFpbi9jaGVja1NvbHV0aW9uJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWxTb2x1dGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxTb2x1dGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5bm/5ZGK5ouJ5Y+W5LitLi4uXCIsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQpe1RvYXN0KFwi5bm/5ZGK5ouJ5Y+W5aSx6LSlXCIsMTUwMCk7cmV0dXJuO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkLnNob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkLmxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQuc2hvdygpKS5jYXRjaCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuW5v+WRiuaLieWPluWksei0pVwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZC5vZmZDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQub25DbG9zZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI/kuo4gMi4xLjAg55qE5Z+656GA5bqT54mI5pys77yMcmVzdWx0IOaYr+S4gOS4qiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmlzRW5kZWQgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9IFwiY2hlY2tTb2x1dGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbFNvbHV0aW9uID0gcmVzLnJlc3VsdC5kYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbFNvbHV0aW9uLmNvbnRlbnQgPSByZXMucmVzdWx0LmRhdGFbMF0uY29udGVudC5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmkq3mlL7kuK3pgJTpgIDlh7rvvIzkuI3kuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5b2T5YmN5YWz5Y2h5pqC5peg5pS755WlJywzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdzb2x1dGlvbkNvbnRhaW4vdXBsb2FkU29sdXRpb24nLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ3VwbG9hZFNvbHV0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3NvbHV0aW9uRGlhbG9nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVNraXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgIH0sIHRoYXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmFjaygpe1xyXG4gICAgICAgIHRoaXMuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZUNvdW50ZXJUaW1lcilcclxuICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICAgICAgfWVsc2UgaWYod2luZG93LmZyb20gPT0gJ3VwbG9hZFNvbHV0aW9uJyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgfWVsc2UgaWYod2luZG93LmZyb20gPT0gJ2NoZWNrU29sdXRpb24nKXtcclxuICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSdcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICB9ZWxzZSBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSdcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdidWlsZCcpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJ1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTGFzdFNjb3JlKHN0ZXAsdGltZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcgfHwgd2luZG93LmZyb20gPT0gXCJyZXZpZXdcIil7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAndXBsb2FkU29sdXRpb24nKXtcclxuXHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsU29sdXRpb24nLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0QmVzdFNjb3JlID0gJ+W9k+WJjeaUu+eVpe+8muaaguaXoCc7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubGFzdFNvbHV0aW9uU3RlcCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGFzdFNvbHV0aW9uU3RlcCA9IHJlcy5yZXN1bHQuZGF0YVswXS51c2VTdGVwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RCZXN0U2NvcmUgPSAn5b2T5YmN5pS755Wl77ya5q2l5pWwJyArIHJlcy5yZXN1bHQuZGF0YVswXS51c2VTdGVwICsgJyAtIOi0oeeMruiAhe+8micrIHJlcy5yZXN1bHQuZGF0YVswXS5uaWNrTmFtZS5zdWJzdHJpbmcoMCwxNilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGF0Lmxhc3RTdGVwTm9kZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdFN0ZXBOb2RlID0gbmV3IGNjLk5vZGUoJ2xhc3RTdGVwTm9kZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTdGVwTm9kZS5zZXRBbmNob3JQb2ludCgwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBsYXN0U3RlcE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGVwQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKC0oY2Mud2luU2l6ZS53aWR0aC8yKSArIChjYy53aW5TaXplLndpZHRoKjAuMDUpLCAgKGNjLndpblNpemUud2lkdGgvMikgKyAxNjApXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gbGFzdEJlc3RTY29yZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZSA9IGxhc3RTdGVwTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5ub2RlLmFkZENoaWxkKGxhc3RTdGVwTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZS5zdHJpbmcgPSBsYXN0QmVzdFNjb3JlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdjaGVja1NvbHV0aW9uJyl7XHJcbiAgICAgICAgICAgIGlmKHRoYXQubGFzdFN0ZXBOb2RlID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RTdGVwTm9kZSA9IG5ldyBjYy5Ob2RlKCdsYXN0U3RlcE5vZGUnKTtcclxuICAgICAgICAgICAgICAgIGxhc3RTdGVwTm9kZS5zZXRBbmNob3JQb2ludCgwLCAxKTtcclxuICAgICAgICAgICAgICAgIHZhciBzdGVwQ291bnRlciA9IGxhc3RTdGVwTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgc3RlcENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigtKGNjLndpblNpemUud2lkdGgvMikgKyAoY2Mud2luU2l6ZS53aWR0aCowLjA1KSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgMTYwKVxyXG4gICAgICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gJ+W9k+WJjeaUu+eVpe+8muatpeaVsCcgKyB3aW5kb3cubGV2ZWxTb2x1dGlvbi51c2VTdGVwICsgJyAtIOi0oeeMruiAhe+8micrIHdpbmRvdy5sZXZlbFNvbHV0aW9uLm5pY2tOYW1lLnN1YnN0cmluZygwLDE2KTtcclxuICAgICAgICAgICAgICAgIHRoYXQubGFzdFN0ZXBOb2RlID0gbGFzdFN0ZXBOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICAgICAgICAgIHRoYXQubm9kZS5hZGRDaGlsZChsYXN0U3RlcE5vZGUpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQubGFzdFN0ZXBOb2RlLnN0cmluZyA9ICflvZPliY3mlLvnlaXvvJrmraXmlbAnICsgd2luZG93LmxldmVsU29sdXRpb24udXNlU3RlcCArICcgLSDotKHnjK7ogIXvvJonKyB3aW5kb3cubGV2ZWxTb2x1dGlvbi5uaWNrTmFtZS5zdWJzdHJpbmcoMCwxNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8v5pyA5L2z5q2l5pWwXHJcbiAgICAgICAgaWYodGhhdC5sYXN0U3RlcE5vZGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBsYXN0U3RlcE5vZGUgPSBuZXcgY2MuTm9kZSgnbGFzdFN0ZXBOb2RlJyk7XHJcbiAgICAgICAgICAgIGxhc3RTdGVwTm9kZS5zZXRBbmNob3JQb2ludCgwLCAxKTtcclxuICAgICAgICAgICAgdmFyIHN0ZXBDb3VudGVyID0gbGFzdFN0ZXBOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDE2MClcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gJ+acgOS9s+aIkOe7qe+8muatpeaVsCAnKyBzdGVwK1wiIC0g55So5pe2IFwiK3RpbWU7XHJcbiAgICAgICAgICAgIHRoYXQubGFzdFN0ZXBOb2RlID0gbGFzdFN0ZXBOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICAgICAgdGhhdC5ub2RlLmFkZENoaWxkKGxhc3RTdGVwTm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoYXQubGFzdFN0ZXBOb2RlLnN0cmluZyA9ICfmnIDkvbPmiJDnu6nvvJrmraXmlbAgJysgc3RlcCtcIiAtIOeUqOaXtiBcIit0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuICAgIHNob3dMZXZlbFJhbmsoKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICB2YXIgcmFua1BhZ2UgPSAxLHJhbmtQYWdlU2l6ZSA9IDUwO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2MuZmluZCgncmFua0xpc3Qvdmlldy9jb250ZW50JyxuZXdNeVByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBjYy5maW5kKCdjbG9zZScsbmV3TXlQcmVmYWIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgaWYodGhhdC5yYW5rSXRlbSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdyYW5rSXRlbScsIGZ1bmN0aW9uIChlcnIscmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJhbmtJdGVtID0gY2MuaW5zdGFudGlhdGUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMZXZlbFJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5maW5kKCdyYW5rTGlzdCcsbmV3TXlQcmVmYWIpLm9uKCdib3VuY2UtYm90dG9tJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJhbmtQYWdlKys7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgY2MuZmluZCgndGhMZXZlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+atpSDmlbAnXHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0xheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXJMZXZlbFJhbmtMaXN0KGNvbnRlbnQscGFnZSxwYWdlU2l6ZSl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjdXJyZW50SXRlbU51bSA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdxdWVyeUNsYXNzaWNzTGV2ZWxTY29yZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OndpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFua0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaTw9IHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gIHJlcy5yZXN1bHQuZGF0YVtpLTFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoYXQucmFua0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyYW5rSXRlbSA9PSBudWxsKSByYW5rSXRlbSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUmFuaycpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaStjdXJyZW50SXRlbU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGREYXRlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRlUmFua1RpbWUoZGF0YS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZGF0YS51c2VTdGVwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnBvcnRyYWl0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGRhdGEucG9ydHJhaXQrJz9hYWE9YWEuanBnJywgIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ByaXRlICA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdtYXNrL0ltYWdlJyxub2RlLmdldENoaWxkQnlOYW1lKCd0ZFBvcnRyYWl0JykpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5uaWNrTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZE5hbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIFwiK2RhdGEubmlja05hbWUrXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5oZWlnaHQgPSBjb250ZW50LmNoaWxkcmVuQ291bnQgKiByYW5rSXRlbS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdChcIuayoeacieabtOWkmuaVsOaNruS6hlwiLDE1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKXtcclxuXHJcbiAgICAgICAgaWYod2luZG93LmF1ZGl0TGV2ZWxBZCkgd2luZG93LmF1ZGl0TGV2ZWxBZC5kZXN0cm95KCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
