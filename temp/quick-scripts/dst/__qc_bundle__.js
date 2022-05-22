
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uLmpzIl0sIm5hbWVzIjpbInd4TG9naW4iLCJfc3VjY2VzcyIsIl9mYWlsIiwibm9kZSIsImNjIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwid2luZG93IiwiaW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwidyIsInNjcmVlbldpZHRoIiwiaCIsInNjcmVlbkhlaWdodCIsImVsZVciLCJ3aWR0aCIsImVsZUgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwieSIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiYnV0dG9uIiwiY3JlYXRlVXNlckluZm9CdXR0b24iLCJ0eXBlIiwidGV4dCIsInN0eWxlIiwicGFyc2VJbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsIm9uVGFwIiwiZGVzdHJveSIsInd4TG9naW5CdG4iLCJUb2FzdCIsInRpbWUiLCJDYW52YXNOb2RlIiwiZmluZCIsImNvbnNvbGUiLCJvblJlc291cmNlTG9hZGVkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGVkUmVzb3VyY2UiLCJsb2ciLCJQcmVmYWIiLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwidG9hc3RCZyIsImdldENvbXBvbmVudCIsIkdyYXBoaWNzIiwidG9hc3RUZXh0IiwiTGFiZWwiLCJzdHJpbmciLCJhZGRDaGlsZCIsInJvdW5kUmVjdCIsImZpbGxDb2xvciIsIkNvbG9yIiwiQkxBQ0siLCJmaWxsIiwidGltZXIiLCJzZXRUaW1lb3V0IiwicmVtb3ZlRnJvbVBhcmVudCIsImNsZWFyVGltZW91dCIsImxvYWRlciIsImxvYWRSZXMiLCJMb2FkaW5nIiwiZWxlIiwiaGlkZUZsYWdlIiwic2hvdyIsImhpZGUiLCJmb3JtYXRlUmFua1RpbWUiLCJ0aW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIlkiLCJnZXRGdWxsWWVhciIsIk0iLCJnZXRNb250aCIsIkQiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxPQUFULENBQWlCQyxRQUFqQixFQUEyQkMsS0FBM0IsRUFBaUNDLElBQWpDLEVBQXVDO0FBQzFDLE1BQUlDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxRQUFQLEtBQW9CRixFQUFFLENBQUNDLEdBQUgsQ0FBT0UsV0FBL0IsRUFBNEMsT0FERixDQUUxQzs7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQyxJQUFELENBQWpCLENBSDBDLENBR2xCOztBQUN4QixNQUFNQyxJQUFJLEdBQUlGLEVBQUUsQ0FBQ0csaUJBQUgsRUFBZCxDQUowQyxDQUlMOztBQUNyQyxNQUFNQyxDQUFDLEdBQUlGLElBQUksQ0FBQ0csV0FBaEIsQ0FMMEMsQ0FLZDs7QUFDNUIsTUFBTUMsQ0FBQyxHQUFJSixJQUFJLENBQUNLLFlBQWhCLENBTjBDLENBTWI7O0FBQzdCLE1BQU1DLElBQUksR0FBSWIsSUFBSSxDQUFDYyxLQUFMLEdBQVcsQ0FBWCxHQUFhLElBQWQsR0FBc0JMLENBQW5DO0FBQ0EsTUFBTU0sSUFBSSxHQUFJZixJQUFJLENBQUNnQixNQUFMLEdBQVksQ0FBWixHQUFjLElBQWYsR0FBdUJMLENBQXBDO0FBQ0EsTUFBTU0sSUFBSSxHQUFHUixDQUFDLEdBQUMsQ0FBRixHQUFNSSxJQUFJLEdBQUMsQ0FBeEI7QUFDQSxNQUFNSyxHQUFHLEdBQUdQLENBQUMsR0FBQyxDQUFGLEdBQU1JLElBQUksR0FBQyxDQUFYLEdBQWdCZixJQUFJLENBQUNtQixDQUFMLEdBQU8sSUFBUixHQUFjUixDQUE3QixHQUFpQ1gsSUFBSSxDQUFDbUIsQ0FBTCxHQUFPLElBQVIsR0FBY1IsQ0FBZixHQUFrQixJQUE3RCxDQVYwQyxDQVkxQzs7QUFDQU4sRUFBQUEsRUFBRSxDQUFDZSxVQUFILENBQ0k7QUFDSUMsSUFBQUEsT0FESixtQkFDWUMsR0FEWixFQUNpQjtBQUNULFVBQUlBLEdBQUcsQ0FBQ0MsV0FBSixDQUFnQixnQkFBaEIsQ0FBSixFQUF1QztBQUNuQ2xCLFFBQUFBLEVBQUUsQ0FBQ21CLFdBQUgsQ0FBZTtBQUNYSCxVQUFBQSxPQURXLG1CQUNIQyxHQURHLEVBQ0U7QUFDVDtBQUNBO0FBQ0F4QixZQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ3dCLEdBQUcsQ0FBQ0csUUFBTCxDQUFwQjtBQUNIO0FBTFUsU0FBZjtBQU9BLGVBQU8sS0FBUDtBQUNILE9BVEQsTUFTTztBQUVIO0FBQ0EsWUFBSUMsTUFBTSxHQUFHckIsRUFBRSxDQUFDc0Isb0JBQUgsQ0FBd0I7QUFDakNDLFVBQUFBLElBQUksRUFBRSxNQUQyQjtBQUVqQ0MsVUFBQUEsSUFBSSxFQUFFLEVBRjJCO0FBR2pDQyxVQUFBQSxLQUFLLEVBQUU7QUFDSGIsWUFBQUEsSUFBSSxFQUFFYyxRQUFRLENBQUNkLElBQUQsQ0FEWDtBQUVIQyxZQUFBQSxHQUFHLEVBQUVhLFFBQVEsQ0FBQ2IsR0FBRCxDQUZWO0FBR0hKLFlBQUFBLEtBQUssRUFBRWlCLFFBQVEsQ0FBQ2xCLElBQUQsQ0FIWjtBQUlIRyxZQUFBQSxNQUFNLEVBQUVlLFFBQVEsQ0FBQ2hCLElBQUQsQ0FKYjtBQUtIaUIsWUFBQUEsZUFBZSxFQUFFLFdBTGQ7QUFLMEI7QUFDN0JDLFlBQUFBLEtBQUssRUFBRSxTQU5KO0FBT0hDLFlBQUFBLFFBQVEsRUFBRSxFQVBQO0FBUUhDLFlBQUFBLFNBQVMsRUFBRSxRQVJSO0FBU0hDLFlBQUFBLFVBQVUsRUFBRUwsUUFBUSxDQUFDaEIsSUFBRDtBQVRqQjtBQUgwQixTQUF4QixDQUFiO0FBZ0JBVyxRQUFBQSxNQUFNLENBQUNXLEtBQVAsQ0FBYSxVQUFDZixHQUFELEVBQVM7QUFDbEIsY0FBSUEsR0FBRyxDQUFDRyxRQUFSLEVBQWtCO0FBQ2QzQixZQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ3dCLEdBQUcsQ0FBQ0csUUFBTCxDQUFwQjtBQUNBQyxZQUFBQSxNQUFNLENBQUNZLE9BQVA7QUFDSCxXQUhELE1BR087QUFDSHZDLFlBQUFBLEtBQUssSUFBSUEsS0FBSyxFQUFkO0FBQ0g7QUFDSixTQVBEO0FBUUFPLFFBQUFBLE1BQU0sQ0FBQ2lDLFVBQVAsR0FBb0JiLE1BQXBCO0FBQ0g7QUFFSjtBQXpDTCxHQURKO0FBOENIOztBQUVNLFNBQVNjLEtBQVQsQ0FBZVgsSUFBZixFQUFvQlksSUFBcEIsRUFBMEI7QUFDN0IsTUFBSUMsVUFBVSxHQUFHekMsRUFBRSxDQUFDMEMsSUFBSCxDQUFRLFFBQVIsQ0FBakI7O0FBQ0EsTUFBSSxDQUFDRCxVQUFMLEVBQWtCO0FBQUV6QyxJQUFBQSxFQUFFLENBQUMyQyxPQUFILENBQVksbUJBQVo7QUFBbUM7QUFBUzs7QUFDaEUsTUFBTXZDLEVBQUUsR0FBR0MsTUFBTSxDQUFDLElBQUQsQ0FBakIsQ0FINkIsQ0FHTDs7QUFDeEIsTUFBTUMsSUFBSSxHQUFJRixFQUFFLENBQUNHLGlCQUFILEVBQWQsQ0FKNkIsQ0FJUTs7QUFDckMsTUFBTUMsQ0FBQyxHQUFJRixJQUFJLENBQUNHLFdBQWhCLENBTDZCLENBS0Q7O0FBQzVCLE1BQU1DLENBQUMsR0FBSUosSUFBSSxDQUFDSyxZQUFoQixDQU42QixDQU1BOztBQUM3QixNQUFJaUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFTQyxZQUFULEVBQXVCQyxjQUF2QixFQUN2QjtBQUNJLFFBQUlELFlBQUosRUFBbUI7QUFBRUYsTUFBQUEsT0FBTyxDQUFDSSxHQUFSLENBQWEsa0JBQWtCRixZQUEvQjtBQUErQztBQUFTOztBQUM3RSxRQUFJLEVBQUdDLGNBQWMsWUFBWTlDLEVBQUUsQ0FBQ2dELE1BQWhDLENBQUosRUFBK0M7QUFBRUwsTUFBQUEsT0FBTyxDQUFDSSxHQUFSLENBQWEsY0FBYjtBQUErQjtBQUFTOztBQUN6RixRQUFJRSxXQUFXLEdBQUdqRCxFQUFFLENBQUNrRCxXQUFILENBQWdCSixjQUFoQixDQUFsQjtBQUNBLFFBQUlLLE9BQU8sR0FBR25ELEVBQUUsQ0FBQzBDLElBQUgsQ0FBUSxZQUFSLEVBQXFCTyxXQUFyQixFQUFrQ0csWUFBbEMsQ0FBK0NwRCxFQUFFLENBQUNxRCxRQUFsRCxDQUFkO0FBQ0EsUUFBSUMsU0FBUyxHQUFJdEQsRUFBRSxDQUFDMEMsSUFBSCxDQUFRLE1BQVIsRUFBZU8sV0FBZixDQUFqQjtBQUlBSyxJQUFBQSxTQUFTLENBQUNGLFlBQVYsQ0FBdUJwRCxFQUFFLENBQUN1RCxLQUExQixFQUFpQ0MsTUFBakMsR0FBMEM1QixJQUExQztBQUNBYSxJQUFBQSxVQUFVLENBQUNnQixRQUFYLENBQXFCUixXQUFyQjtBQUNBRSxJQUFBQSxPQUFPLENBQUNPLFNBQVIsQ0FDSSxFQUFHSixTQUFTLENBQUN6QyxLQUFWLEdBQWtCLEVBQXJCLElBQXlCLENBRDdCLEVBRUksRUFBRXlDLFNBQVMsQ0FBQ3ZDLE1BQVYsR0FBaUIsRUFBbkIsSUFBdUIsQ0FGM0IsRUFHSXVDLFNBQVMsQ0FBQ3pDLEtBQVYsR0FBa0IsRUFIdEIsRUFJSXlDLFNBQVMsQ0FBQ3ZDLE1BQVYsR0FBaUIsRUFKckIsRUFLSSxDQUFDdUMsU0FBUyxDQUFDdkMsTUFBVixHQUFpQixFQUFsQixJQUFzQixDQUwxQjtBQU9Bb0MsSUFBQUEsT0FBTyxDQUFDUSxTQUFSLEdBQW9CM0QsRUFBRSxDQUFDNEQsS0FBSCxDQUFTQyxLQUE3QjtBQUNBVixJQUFBQSxPQUFPLENBQUNXLElBQVI7QUFDQSxRQUFJQyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFZO0FBQy9CZixNQUFBQSxXQUFXLENBQUNnQixnQkFBWjtBQUNBaEIsTUFBQUEsV0FBVyxDQUFDWixPQUFaO0FBQ0E2QixNQUFBQSxZQUFZLENBQUNILEtBQUQsQ0FBWjtBQUNBQSxNQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNILEtBTHFCLEVBS3BCdkIsSUFMb0IsQ0FBdEI7QUFNSCxHQTNCRDs7QUE0QkF4QyxFQUFBQSxFQUFFLENBQUNtRSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkJ4QixnQkFBM0I7QUFDSDs7QUFDRCxJQUFJeUIsT0FBTyxHQUFFO0FBQ1RDLEVBQUFBLEdBQUcsRUFBQyxJQURLO0FBRVRDLEVBQUFBLFNBQVMsRUFBQyxLQUZEO0FBR1RDLEVBQUFBLElBSFMsa0JBR0g7QUFDRkgsSUFBQUEsT0FBTyxDQUFDRSxTQUFSLEdBQW9CLEtBQXBCO0FBQ0EsUUFBSTlCLFVBQVUsR0FBR3pDLEVBQUUsQ0FBQzBDLElBQUgsQ0FBUSxRQUFSLENBQWpCOztBQUNBLFFBQUksQ0FBQ0QsVUFBTCxFQUFrQjtBQUFFekMsTUFBQUEsRUFBRSxDQUFDMkMsT0FBSCxDQUFZLG1CQUFaO0FBQW1DO0FBQVM7O0FBQ2hFLFFBQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBU0MsWUFBVCxFQUF1QkMsY0FBdkIsRUFDdkI7QUFDSSxVQUFJRCxZQUFKLEVBQW1CO0FBQUVGLFFBQUFBLE9BQU8sQ0FBQ0ksR0FBUixDQUFhLGtCQUFrQkYsWUFBL0I7QUFBK0M7QUFBUzs7QUFDN0UsVUFBSSxFQUFHQyxjQUFjLFlBQVk5QyxFQUFFLENBQUNnRCxNQUFoQyxDQUFKLEVBQStDO0FBQUVMLFFBQUFBLE9BQU8sQ0FBQ0ksR0FBUixDQUFhLGNBQWI7QUFBK0I7QUFBUzs7QUFDekYsVUFBSUUsV0FBVyxHQUFHakQsRUFBRSxDQUFDa0QsV0FBSCxDQUFnQkosY0FBaEIsQ0FBbEI7O0FBRUEsVUFBRyxDQUFDdUIsT0FBTyxDQUFDRSxTQUFaLEVBQXNCO0FBQ2xCOUIsUUFBQUEsVUFBVSxDQUFDZ0IsUUFBWCxDQUFxQlIsV0FBckI7QUFDQW9CLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixHQUFjckIsV0FBZDtBQUNILE9BSEQsTUFHSztBQUNEQSxRQUFBQSxXQUFXLENBQUNaLE9BQVo7QUFDSDtBQUdKLEtBZEQ7O0FBZUFyQyxJQUFBQSxFQUFFLENBQUNtRSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsU0FBbEIsRUFBNkJ4QixnQkFBN0I7QUFDSCxHQXZCUTtBQXdCVDZCLEVBQUFBLElBeEJTLGtCQXdCSDtBQUNGLFFBQUdKLE9BQU8sQ0FBQ0MsR0FBWCxFQUFlO0FBQ1hELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxnQkFBWjtBQUNBSSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWpDLE9BQVo7QUFDQWdDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixHQUFjLElBQWQ7QUFDSDs7QUFDREQsSUFBQUEsT0FBTyxDQUFDRSxTQUFSLEdBQW9CLElBQXBCO0FBQ0g7QUEvQlEsQ0FBYjs7O0FBa0NPLFNBQVNHLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW1DO0FBQ3RDLE1BQUlDLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNGLFNBQVQsQ0FBWCxDQURzQyxDQUNQOztBQUMvQixNQUFJRyxDQUFDLEdBQUdGLElBQUksQ0FBQ0csV0FBTCxLQUFxQixHQUE3QjtBQUNBLE1BQUlDLENBQUMsR0FBRyxDQUFDSixJQUFJLENBQUNLLFFBQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsRUFBcEIsR0FBeUIsT0FBS0wsSUFBSSxDQUFDSyxRQUFMLEtBQWdCLENBQXJCLENBQXpCLEdBQW1ETCxJQUFJLENBQUNLLFFBQUwsS0FBZ0IsQ0FBcEUsSUFBeUUsR0FBakY7QUFDQSxNQUFJQyxDQUFDLEdBQUdOLElBQUksQ0FBQ08sT0FBTCxLQUFpQixJQUF6QjtBQUNBLE1BQUl6RSxDQUFDLEdBQUdrRSxJQUFJLENBQUNRLFFBQUwsS0FBa0IsR0FBMUI7QUFDQSxNQUFJQyxDQUFDLEdBQUdULElBQUksQ0FBQ1UsVUFBTCxLQUFvQixHQUE1QjtBQUNBLE1BQUlDLENBQUMsR0FBR1gsSUFBSSxDQUFDWSxVQUFMLEVBQVI7QUFDQSxNQUFHOUUsQ0FBQyxDQUFDK0UsTUFBRixJQUFVLENBQWIsRUFBZ0IvRSxDQUFDLEdBQUcsTUFBSUEsQ0FBUjtBQUNoQixNQUFHMkUsQ0FBQyxDQUFDSSxNQUFGLElBQVUsQ0FBYixFQUFnQkosQ0FBQyxHQUFHLE1BQUlBLENBQVI7QUFDaEIsTUFBR0UsQ0FBQyxDQUFDRSxNQUFGLElBQVUsQ0FBYixFQUFnQkYsQ0FBQyxHQUFHLE1BQUlBLENBQVI7QUFFaEIsU0FBT1QsQ0FBQyxHQUFDRSxDQUFGLEdBQUlFLENBQUosR0FBTXhFLENBQU4sR0FBUTJFLENBQVIsR0FBVUUsQ0FBakI7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIHd45o6I5p2D55m76ZmGXHJcbiAqIEBwYXJhbSBfc3VjY2VzcyDnmbvpmYbmiJDlip/ov5Tlm57lm57osIMg56ys5LiA5Liq5Y+C5pWw5pivd3jnlKjmiLfkv6Hmga9cclxuICogQHBhcmFtIF9mYWlsIOaLkue7neaOiOadg+i/lOWbnlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHd4TG9naW4oX3N1Y2Nlc3MsIF9mYWlsLG5vZGUpIHtcclxuICAgIGlmIChjYy5zeXMucGxhdGZvcm0gIT09IGNjLnN5cy5XRUNIQVRfR0FNRSkgcmV0dXJuO1xyXG4gICAgLy/lvq7kv6HnmbvpmYZcclxuICAgIGNvbnN0IHd4ID0gd2luZG93Wyd3eCddOy8v6YG/5byAdHPor63ms5Xmo4DmtYtcclxuICAgIGNvbnN0IGluZm8gID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTsvL+eri+WNs+iOt+WPluezu+e7n+S/oeaBr1xyXG4gICAgY29uc3QgdyAgPSBpbmZvLnNjcmVlbldpZHRoOy8v5bGP5bmV5a69XHJcbiAgICBjb25zdCBoICA9IGluZm8uc2NyZWVuSGVpZ2h0Oy8v5bGP5bmV6auYXHJcbiAgICBjb25zdCBlbGVXID0gKG5vZGUud2lkdGgqMi8xMDgwKSAqIHc7XHJcbiAgICBjb25zdCBlbGVIID0gKG5vZGUuaGVpZ2h0KjIvMjQwMCkgKiBoO1xyXG4gICAgY29uc3QgbGVmdCA9IHcvMiAtIGVsZVcvMjtcclxuICAgIGNvbnN0IHRvcCA9IGgvMiAtIGVsZUgvMiAtIChub2RlLnkvMjQwMCkqaCsoKG5vZGUueS8yNDAwKSpoKSowLjI1O1xyXG5cclxuICAgIC8v6I635Y+W55So5oi355qE5b2T5YmN6K6+572u44CC6L+U5Zue5YC85Lit5Y+q5Lya5Ye6546w5bCP56iL5bqP5bey57uP5ZCR55So5oi36K+35rGC6L+H55qE5p2D6ZmQ44CCXHJcbiAgICB3eC5nZXRTZXR0aW5nKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55m76ZmG5pON5L2cXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdWNjZXNzICYmIF9zdWNjZXNzKHJlcy51c2VySW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WIm+W7uuWFqOWxj+mAj+aYjueZu+mZhuaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSB3eC5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwYXJzZUludChsZWZ0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcGFyc2VJbnQodG9wKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwYXJzZUludChlbGVXKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGFyc2VJbnQoZWxlSCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwMDAnLC8v5pyA5ZCO5Lik5L2N5Li66YCP5piO5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogcGFyc2VJbnQoZWxlSCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLm9uVGFwKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51c2VySW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3N1Y2Nlc3MgJiYgX3N1Y2Nlc3MocmVzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZmFpbCAmJiBfZmFpbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lnd4TG9naW5CdG4gPSBidXR0b247XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb2FzdCh0ZXh0LHRpbWUpIHtcclxuICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCB3eCA9IHdpbmRvd1snd3gnXTsvL+mBv+W8gHRz6K+t5rOV5qOA5rWLXHJcbiAgICBjb25zdCBpbmZvICA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7Ly/nq4vljbPojrflj5bns7vnu5/kv6Hmga9cclxuICAgIGNvbnN0IHcgID0gaW5mby5zY3JlZW5XaWR0aDsvL+Wxj+W5leWuvVxyXG4gICAgY29uc3QgaCAgPSBpbmZvLnNjcmVlbkhlaWdodDsvL+Wxj+W5lemrmFxyXG4gICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgIHtcclxuICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgbGV0IHRvYXN0QmcgPSBjYy5maW5kKCdiYWNrZ3JvdW5kJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBsZXQgdG9hc3RUZXh0ID0gIGNjLmZpbmQoXCJ0ZXh0XCIsbmV3TXlQcmVmYWIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRvYXN0VGV4dC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRleHQ7XHJcbiAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB0b2FzdEJnLnJvdW5kUmVjdChcclxuICAgICAgICAgICAgLSggdG9hc3RUZXh0LndpZHRoICsgODApLzIsXHJcbiAgICAgICAgICAgIC0odG9hc3RUZXh0LmhlaWdodCs0MCkvMixcclxuICAgICAgICAgICAgdG9hc3RUZXh0LndpZHRoICsgODAsXHJcbiAgICAgICAgICAgIHRvYXN0VGV4dC5oZWlnaHQrNDAsXHJcbiAgICAgICAgICAgICh0b2FzdFRleHQuaGVpZ2h0KzQwKS8yXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0b2FzdEJnLmZpbGxDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgIHRvYXN0QmcuZmlsbCgpXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICB0aW1lciA9IG51bGw7XHJcbiAgICAgICAgfSx0aW1lKVxyXG4gICAgfTtcclxuICAgIGNjLmxvYWRlci5sb2FkUmVzKCd0b2FzdCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxufVxyXG5sZXQgTG9hZGluZyA9e1xyXG4gICAgZWxlOm51bGwsXHJcbiAgICBoaWRlRmxhZ2U6ZmFsc2UsXHJcbiAgICBzaG93KCl7XHJcbiAgICAgICAgTG9hZGluZy5oaWRlRmxhZ2UgPSBmYWxzZTtcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcblxyXG4gICAgICAgICAgICBpZighTG9hZGluZy5oaWRlRmxhZ2Upe1xyXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuZWxlID0gbmV3TXlQcmVmYWI7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsb2FkaW5nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIGhpZGUoKXtcclxuICAgICAgICBpZihMb2FkaW5nLmVsZSl7XHJcbiAgICAgICAgICAgIExvYWRpbmcuZWxlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgTG9hZGluZy5lbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBMb2FkaW5nLmVsZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIExvYWRpbmcuaGlkZUZsYWdlID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQge0xvYWRpbmd9O1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0ZVJhbmtUaW1lKHRpbWVzdGFtcCl7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7Ly/ml7bpl7TmiLPkuLoxMOS9jemcgCoxMDAw77yM5pe26Ze05oiz5Li6MTPkvY3nmoTor53kuI3pnIDkuZgxMDAwXHJcbiAgICB2YXIgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJztcclxuICAgIHZhciBNID0gKGRhdGUuZ2V0TW9udGgoKSsxIDwgMTAgPyAnMCcrKGRhdGUuZ2V0TW9udGgoKSsxKSA6IGRhdGUuZ2V0TW9udGgoKSsxKSArICctJztcclxuICAgIHZhciBEID0gZGF0ZS5nZXREYXRlKCkgKyAnXFxuJztcclxuICAgIHZhciBoID0gZGF0ZS5nZXRIb3VycygpICsgJzonO1xyXG4gICAgdmFyIG0gPSBkYXRlLmdldE1pbnV0ZXMoKSArICc6JztcclxuICAgIHZhciBzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICBpZihoLmxlbmd0aDw9MSkgaCA9ICcwJytoO1xyXG4gICAgaWYobS5sZW5ndGg8PTEpIG0gPSAnMCcrbTtcclxuICAgIGlmKHMubGVuZ3RoPD0xKSBzID0gJzAnK3M7XHJcblxyXG4gICAgcmV0dXJuIFkrTStEK2grbStzO1xyXG59XHJcbiJdfQ==
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
    solutionStepIndex: 0
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
                  content: that.moveHistoryList
                }
              }).then(function (res) {
                (0, _common.Toast)('攻略上传成功', 1500);

                _common.Loading.hide();

                setTimeout(function () {
                  cc.director.loadScene("game");
                }, 1000);
              })["catch"](function (err) {
                (0, _common.Toast)('上传失败,请稍后再试', 1500);

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
                content: that.moveHistoryList
              }
            }).then(function (res) {
              (0, _common.Toast)('攻略上传成功', 1500);

              _common.Loading.hide();

              setTimeout(function () {
                cc.director.loadScene("game");
              }, 1000);
            })["catch"](function (err) {
              (0, _common.Toast)('上传失败,请稍后再试', 1500);

              _common.Loading.hide();

              console.log(err);
            });
            ;
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
    if (window.from == 'review') leftBtn.string = '通过';else if (window.from == 'checkSolution') leftBtn.string = 'next';else if (!window.setting.relast) leftBtn.string = '重玩';
    cc.find('gameBtns/backStep', this.node).on('click', function () {
      //攻略播放
      if (window.from == 'checkSolution') {
        that.solutionStepIndex++;
        if (that.solutionStepIndex >= window.levelSolution.content.length) that.solutionStepIndex = 0;
        window.currentLevel = window.levelSolution.content[that.solutionStepIndex];
        that.renderLayout(window.currentLevel);
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
      }
    }, this);
    if (window.from == 'review') cc.find('gameBtns/menu/Background/Label', this.node).getComponent(cc.Label).string = '驳回';else if (window.from == "checkSolution") cc.find('gameBtns/menu/Background/Label', this.node).getComponent(cc.Label).string = 'prev';
    cc.find('gameBtns/menu', this.node).on("click", function () {
      clearInterval(that.timeCounterTimer);
      that.timeCounterTimer = null; //攻略播放

      if (window.from == 'checkSolution') {
        that.solutionStepIndex--;
        if (that.solutionStepIndex <= 0) that.solutionStepIndex = 0;
        window.currentLevel = window.levelSolution.content[that.solutionStepIndex];
        that.renderLayout(window.currentLevel);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZUxheW91dC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXJyZW50TGV2ZWwiLCJlbGVTaXplIiwibGF5b3V0IiwiQXJyYXkiLCJibG9ja051bSIsInVwbG9hZExldmVsIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJibG9jayIsInR5cGUiLCJQcmVmYWIiLCJkaXNwbGF5TmFtZSIsIndhbGwiLCJib3giLCJiYWxsIiwicm9sZVVwIiwicm9sZVJpZ2h0Iiwicm9sZURvd24iLCJyb2xlTGVmdCIsInBvc2l0aW9uIiwiZ2FtZUJuIiwiU3ByaXRlIiwiYm94TnVtIiwic3RlcENvdW50ZXIiLCJzdGVwQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXIiLCJ0aW1lQ291bnRlclZhbHVlIiwidGltZUNvdW50ZXJUaW1lciIsImxldmVsQ291bnRlciIsIm1vdmVIaXN0b3J5TGlzdCIsImxhc3RTY29yZSIsImxhc3RTdGVwTm9kZSIsImxhc3RUaW1lbm9kZSIsInJhbmtJdGVtIiwiYnVpbGRBcmVhIiwic29sdXRpb25CdG4iLCJub25lU2tpcENoYW5nZSIsInNvbHV0aW9uU3RlcEluZGV4Iiwib25Mb2FkIiwidGhhdCIsImluaXRXaW5FbGUiLCJyZW5kZXJCZyIsImluaXRMZXZlbCIsImZpbmQiLCJub2RlIiwiaGVpZ2h0Iiwid2luU2l6ZSIsIndpZHRoIiwic3RhcnQiLCJhZGRUb3VjaE1vdmUiLCJwZW5kYW50QWRkRXZlbnQiLCJyZWFsU2l6IiwiaSIsIm4iLCJ4IiwieSIsInNpZ24iLCJjb3ZlciIsImluaXRQb3NpdGlvbiIsImxlbmd0aCIsInN0YXJ0WCIsInN0YXJ0WSIsIm5ld0Jsb2NrIiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsImFkZENoaWxkIiwicmVuZGVyQm4iLCJnZXRDb21wb25lbnQiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiYmdVcmxCYXNlIiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZSIsIlNwcml0ZUZyYW1lIiwicmVjdCIsInNwcml0ZUZyYW1lIiwicmVuZGVyTGF5b3V0IiwiZGVzdHJveUFsbENoaWxkcmVuIiwibmV3V2FsbCIsIm5ld0JveCIsIm5ld0JhbGwiLCJuZXdSb2xlVXAiLCJuZXdSb2xlUmlnaHQiLCJuZXdSb2xlRG93biIsIm5ld1JvbGVMZWZ0IiwibW92ZVVwIiwicmVzZXRQb3NpdGlvbiIsIm1vdmVEb3duIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJkaXJlY3Rpb24iLCJmcm9tIiwic2V0dGluZyIsInJlbGFzdCIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsInNldFN0b3JhZ2UiLCJrZXkiLCJkYXRhIiwic3VjY2VzcyIsInJlc3VsdCIsImdldFN0b3JhZ2UiLCJyZXMiLCJwdXNoIiwic3RyaW5nIiwiY292ZXJCb3hOdW0iLCJzaG93UmVzdWx0IiwibW92ZU11c2ljIiwicGF1c2VkIiwic3RvcCIsInBhdXNlIiwicGxheSIsInRvdWNoTW92ZSIsImZpZ3VyZUxvY2F0aW9uIiwib24iLCJldmVudCIsImdldExvY2F0aW9uIiwiZW5kTG9jYXRpb24iLCJNYXRoIiwiYWJzIiwiY2xlYXJJbnRlcnZhbCIsIkNhbnZhc05vZGUiLCJjb25zb2xlIiwib25SZXNvdXJjZUxvYWRlZCIsImVycm9yTWVzc2FnZSIsImxvYWRlZFJlc291cmNlIiwibG9nIiwibmV3TXlQcmVmYWIiLCJMYWJlbCIsIkxvYWRpbmciLCJzaG93IiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwidGhlbiIsImNvbnRlbnQiLCJ1c2VTdGVwTnVtIiwibGV2ZWxJbmRleCIsInRvdGFsIiwiYXBwSWQiLCJ1c2VyIiwibmlja05hbWUiLCJsb2dpbkluZm8iLCJzdWJzdHJpbmciLCJwb3J0cmFpdCIsImF2YXRhclVybCIsImxldmVsVXBsb2FkTnVtIiwicGFyc2VJbnQiLCJoaWRlIiwiY3JlYXRlU2NlbnNlVXBsb2FkQWQiLCJzZXRUaW1lb3V0IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJvbkNsb3NlIiwiZXJyb3IiLCJsYXN0U29sdXRpb25TdGVwIiwidXNlU3RlcCIsInVzZVRpbWUiLCJjbGFzc2ljc0xldmVsTnVtIiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJpbml0UGVuZGFudCIsInJlcGxheUxheW91dCIsInNob3dMZXZlbFJhbmsiLCJ0aXRTdHJpbmciLCJzaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInF1ZXJ5IiwibG9hZGVyIiwibG9hZFJlcyIsInJlbmRlckxhc3RTY29yZSIsImN1ckxldmVsTnVtIiwibGV2ZWxGaW5pc2hOdW0iLCJmYWlsIiwibGV2ZWxOb2RlIiwiTm9kZSIsInNldEFuY2hvclBvaW50IiwiYWRkQ29tcG9uZW50IiwiZm9udFNpemUiLCJlbmFibGVCb2xkIiwibGluZUhlaWdodCIsImxldmVsQnkiLCJnYW1lQ2lyY2xlIiwiYXVkaXRMZXZlbEFkIiwic3lzSW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwiYXVkaXRMZXZlbEFkV2lkdGgiLCJ3aW5kb3dXaWR0aCIsImF1ZGl0TGV2ZWxBZExlZnQiLCJjcmVhdGVCYW5uZXJBZCIsImFkVW5pdElkIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwid2luZG93SGVpZ2h0Iiwib25FcnJvciIsInRpbWVOb2RlIiwic2V0SW50ZXJ2YWwiLCJiaW5kIiwic3BsaWNlIiwiYmFjayIsImNsaWNrTW92ZSIsImxlZnRCdG4iLCJsZXZlbFNvbHV0aW9uIiwicGFzc3dvcmQiLCJFZGl0Qm94IiwidGV4dExhYmVsIiwidXBsb2FkSW5mbyIsIl9pZCIsInJldmlld0lkIiwicG9wIiwibGV2ZWxDbGFzc2lmeSIsImRhdGUiLCJEYXRlIiwidG9kYXkiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzb2x1dGlvbkJ0bk5vZGUiLCJzb2x1dGlvbkJ0bkxhYmVsIiwiZW5hYmxlU2tpcCIsIm51bSIsInNraXBMZXZlbEFkIiwibG9hZCIsIm9mZkNsb3NlIiwiaXNFbmRlZCIsInVuZGVmaW5lZCIsImNoZWNrU29sdXRpb25MZXZlbEFkIiwic3RlcCIsInRpbWUiLCJsYXN0QmVzdFNjb3JlIiwicmFua1BhZ2UiLCJyYW5rUGFnZVNpemUiLCJyZXNvdXJjZSIsInJlbmRlckxldmVsUmFua0xpc3QiLCJwYWdlIiwicGFnZVNpemUiLCJjdXJyZW50SXRlbU51bSIsImNoaWxkcmVuQ291bnQiLCJnZXRDaGlsZEJ5TmFtZSIsImNyZWF0ZVRpbWUiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7O0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLE1BQU0sQ0FBQ0MsWUFBUCxHQUFzQixFQUF0QjtBQUVBRCxNQUFNLENBQUNFLE9BQVAsR0FBaUIsRUFBakI7QUFDQUYsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLElBQUlDLEtBQUosRUFBaEI7QUFDQUosTUFBTSxDQUFDSyxRQUFQLEdBQWtCLEVBQWxCO0FBQ0FMLE1BQU0sQ0FBQ00sV0FBUCxHQUFxQixJQUFyQjtBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sTUFGTjtBQUdIQyxNQUFBQSxXQUFXLEVBQUM7QUFIVCxLQURDO0FBTVJDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLElBRFA7QUFFRkgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLE1BRlA7QUFHRkMsTUFBQUEsV0FBVyxFQUFDO0FBSFYsS0FORTtBQVdSRSxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUZSO0FBR0RDLE1BQUFBLFdBQVcsRUFBQztBQUhYLEtBWEc7QUFnQlJHLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLElBRFA7QUFFRkwsTUFBQUEs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Q0E2RCx3QkFBUW1CLElBQVI7QUFDSCxPQXRDRDtBQXVDSDtBQUVKLEdBL3NESTtBQWd0REwyRixFQUFBQSxTQWh0REssdUJBZ3RETTtBQUVQLFFBQUdyUCxNQUFNLENBQUM2TCxZQUFWLEVBQXdCN0wsTUFBTSxDQUFDNkwsWUFBUCxDQUFvQnZCLE9BQXBCO0FBRTNCO0FBcHRESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7Zm9ybWF0ZVJhbmtUaW1lLCBMb2FkaW5nLCBUb2FzdH0gZnJvbSBcIi4vY29tbW9uXCI7XHJcbndpbmRvdy5jdXJyZW50TGV2ZWwgPSBbXTtcclxuXHJcbndpbmRvdy5lbGVTaXplID0gMzU7XHJcbndpbmRvdy5sYXlvdXQgPSBuZXcgQXJyYXkoKTtcclxud2luZG93LmJsb2NrTnVtID0gMTI7XHJcbndpbmRvdy51cGxvYWRMZXZlbCA9IG51bGw7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJsb2NrOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2Jsb2NrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2FsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOid3YWxsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm94OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J2JveCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhbGw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTonYmFsbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGVVcDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlVXAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlUmlnaHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZVJpZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sZURvd246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZToncm9sZURvd24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlTGVmdDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOidyb2xlTGVmdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdhbWVCbjpjYy5TcHJpdGUsXHJcbiAgICAgICAgYm94TnVtOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBDb3VudGVyOm51bGwsXHJcbiAgICAgICAgc3RlcENvdW50ZXJWYWx1ZTogMCxcclxuICAgICAgICB0aW1lQ291bnRlcjpudWxsLFxyXG4gICAgICAgIHRpbWVDb3VudGVyVmFsdWU6MCxcclxuICAgICAgICB0aW1lQ291bnRlclRpbWVyOm51bGwsXHJcbiAgICAgICAgbGV2ZWxDb3VudGVyOiBudWxsLFxyXG4gICAgICAgIG1vdmVIaXN0b3J5TGlzdDpbXSxcclxuICAgICAgICBsYXN0U2NvcmU6IG51bGwsXHJcbiAgICAgICAgbGFzdFN0ZXBOb2RlOiBudWxsLFxyXG4gICAgICAgIGxhc3RUaW1lbm9kZTogbnVsbCxcclxuICAgICAgICByYW5rSXRlbTpjYy5QcmVmYWIsXHJcbiAgICAgICAgYnVpbGRBcmVhOm51bGwsXHJcbiAgICAgICAgc29sdXRpb25CdG46bnVsbCxcclxuICAgICAgICBub25lU2tpcENoYW5nZTpmYWxzZSxcclxuICAgICAgICBzb2x1dGlvblN0ZXBJbmRleDogMFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0V2luRWxlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJCZygpO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluW9k+WJjeWFs+WNoVxyXG4gICAgICAgIHRoaXMuaW5pdExldmVsKCk7XHJcbiAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMnLHRoaXMubm9kZSkuaGVpZ2h0ID0gIChjYy53aW5TaXplLmhlaWdodCAtIGNjLndpblNpemUud2lkdGgpLzI7XHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRUb3VjaE1vdmUoKTtcclxuICAgICAgICB0aGlzLnBlbmRhbnRBZGRFdmVudCgpO1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGluaXRXaW5FbGUoKXtcclxuICAgICAgICB0aGlzLmJ1aWxkQXJlYSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYnVpbGRBcmVhJyk7XHJcbiAgICAgICAgbGV0IHJlYWxTaXogPSBjYy53aW5TaXplLndpZHRoL3dpbmRvdy5ibG9ja051bTtcclxuICAgICAgICB3aW5kb3cuZWxlU2l6ZSA9IHJlYWxTaXo7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHdpbmRvdy5ibG9ja051bTsgaSsrKXtcclxuICAgICAgICAgICAgd2luZG93LmxheW91dFtpXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxheW91dFtpXVtuXSA9IHt4OjAseTowLHNpZ246MCxjb3ZlcjpudWxsfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRQb3NpdGlvbihsYXlvdXQpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7fTtcclxuICAgICAgICB0aGlzLmJveE51bSA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxsYXlvdXQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgbGF5b3V0WzBdLmxlbmd0aDsgbisrKXtcclxuICAgICAgICAgICAgICAgIC8vbGF5b3V0W2ldW25dLnNpZ24gLS0g5Lq654mp5L2N572uXHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbaV1bbl0uc2lnbiA9PSA0IHx8IGxheW91dFtpXVtuXS5zaWduID09IDUgfHwgbGF5b3V0W2ldW25dLnNpZ24gPT0gNiB8fCBsYXlvdXRbaV1bbl0uc2lnbiA9PSA3KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+euseWtkOaVsOmHj1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W2ldW25dLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hOdW0gKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHJlbmRlckJnKCl7XHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IC0oY2Mud2luU2l6ZS53aWR0aC8yKTtcclxuICAgICAgICBsZXQgc3RhcnRZID0gKHdpbmRvdy5lbGVTaXplKndpbmRvdy5ibG9ja051bSkvMjtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBuKndpbmRvdy5lbGVTaXplICsgc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSAtaSp3aW5kb3cuZWxlU2l6ZSArIHN0YXJ0WTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sYXlvdXRbaV1bbl0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ246MCxcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcjpudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgIC8vIOS4uuiuvue9ruS9jee9rlxyXG4gICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdCbG9jayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJCbigpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZUJuID09IG51bGwpIHRoaXMuZ2FtZUJuID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9nYW1lQm4nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHdpbmRvdy5iZ1VybEJhc2UrICdfNDAweDI0MC5qcGcnLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUsIGNjLnJlY3QoMCwwLDQwMCwyNDApKTtcclxuICAgICAgICAgICAgdGhhdC5nYW1lQm4uc3ByaXRlRnJhbWUgPSBzcHJpdGU7IC8v6K6+572u57K+54G157uE5Lu25Zu+54mH6LWE5rqQXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJMYXlvdXQobGF5b3V0KXtcclxuICAgICAgICB0aGlzLmJ1aWxkQXJlYS5kZXN0cm95QWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMucmVuZGVyQmcoKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgd2luZG93LmJsb2NrTnVtOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IodmFyIG4gPSAwOyBuIDwgd2luZG93LmJsb2NrTnVtOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSB3aW5kb3cubGF5b3V0W2ldW25dLng7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHdpbmRvdy5sYXlvdXRbaV1bbl0ueTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChsYXlvdXRbaV1bbl0uc2lnbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3QmxvY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdXYWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy53YWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3V2FsbC5zZXRQb3NpdGlvbih4LHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXJlYS5hZGRDaGlsZChuZXdXYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdCb3guc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Qm94KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3QmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0JhbGwuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3QmFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVVcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVVwLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVSaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZVJpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZVJpZ2h0LnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVSaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvbGVEb3duID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlRG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1JvbGVEb3duLnNldFBvc2l0aW9uKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcmVhLmFkZENoaWxkKG5ld1JvbGVEb3duKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um9sZUxlZnQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvbGVMZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Um9sZUxlZnQuc2V0UG9zaXRpb24oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEFyZWEuYWRkQ2hpbGQobmV3Um9sZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbW92ZVVwKGxheW91dCl7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5wb3NpdGlvbi55O1xyXG5cclxuICAgICAgICAvL+S4iuS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiK5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5LTJdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uY292ZXIpIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOS4iuS4gOagvOeQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5LTJdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeS0yXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTJdW3hdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLnNpZ24gPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ktMV1beF0uY292ZXIpIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigndXAnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIrkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5LTFdW3hdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ktMV1beF0uc2lnbiA9IDQ7XHJcbiAgICAgICAgICAgIGxheW91dFt5LTFdW3hdLmNvdmVyID0gNDtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCd1cCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3Zlcil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3ZlRG93bihsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+S4i+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4i+S4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3krMV1beF0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA2O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/kuIvkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5KzFdW3hdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiL5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5KzJdW3hdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeSsyXVt4XS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3krMV1beF0uY292ZXIpIGxheW91dFt5KzFdW3hdLmNvdmVyID0gNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v566x5a2Q5LiL5LiA5qC85Li655CDXHJcbiAgICAgICAgICAgIGVsc2UgaWYobGF5b3V0W3krMl1beF0uc2lnbiA9PSAzKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5KzJdW3hdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMl1beF0uY292ZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3krMV1beF0uc2lnbiA9IDY7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeSsxXVt4XS5jb3ZlcikgbGF5b3V0W3krMV1beF0uY292ZXIgPSA2O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdkb3duJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qC85Li655CDXHJcbiAgICAgICAgZWxzZSBpZihsYXlvdXRbeSsxXVt4XS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIGxheW91dFt5KzFdW3hdLnNpZ24gPSA2O1xyXG4gICAgICAgICAgICBsYXlvdXRbeSsxXVt4XS5jb3ZlciA9IDY7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignZG93bicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3Zlcil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3ZlTGVmdChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+W3puS4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLnNpZ24gPSA3O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbignbGVmdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uuWimeS9k1xyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAxKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+W3puS4gOagvOS4uueuseWtkFxyXG4gICAgICAgIGVsc2UgaWYobGF5b3V0W3ldW3gtMV0uc2lnbiA9PSAyKXtcclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnqbpcclxuICAgICAgICAgICAgaWYobGF5b3V0W3ldW3gtMl0uc2lnbiA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4LTJdLnNpZ24gPSAyO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgICAgICBpZihsYXlvdXRbeV1beC0xXS5jb3ZlcikgbGF5b3V0W3ldW3gtMV0uY292ZXIgPSA3O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nrrHlrZDlt6bkuIDmoLzkuLrnkINcclxuICAgICAgICAgICAgZWxzZSBpZihsYXlvdXRbeV1beC0yXS5zaWduID09IDMpe1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0W3ldW3gtMl0uc2lnbiA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0yXS5jb3ZlciA9IDI7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beC0xXS5zaWduID0gNztcclxuICAgICAgICAgICAgICAgIGlmKGxheW91dFt5XVt4LTFdLmNvdmVyKSBsYXlvdXRbeV1beC0xXS5jb3ZlciA9IDc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oJ2xlZnQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lt6bkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4LTFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3gtMV0uc2lnbiA9IDc7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4LTFdLmNvdmVyID0gNztcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+enu+WKqOWQjuWbnuaYvueQg+S9k1xyXG4gICAgICAgIGlmKGxheW91dFt5XVt4XS5zaWduID09IDAgJiYgbGF5b3V0W3ldW3hdLmNvdmVyICYmIGxheW91dFt5XVt4XS5jb3ZlciAhPSAyKXtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLnNpZ24gPSAzO1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uY292ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZW5kZXJMYXlvdXQobGF5b3V0KVxyXG4gICAgfSxcclxuICAgIG1vdmVSaWdodChsYXlvdXQpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgeSA9IHRoaXMucG9zaXRpb24ueTtcclxuICAgICAgICAvL+WPs+S4gOagvOS4uuepulxyXG4gICAgICAgIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrlopnkvZNcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMSl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnrrHlrZBcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgIC8v566x5a2Q5Y+z5LiA5qC85Li656m6XHJcbiAgICAgICAgICAgIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+euseWtkOWPs+S4gOagvOS4uueQg1xyXG4gICAgICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzJdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beCsyXS5zaWduID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzJdLmNvdmVyID0gMjtcclxuICAgICAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLnNpZ24gPSA1O1xyXG4gICAgICAgICAgICAgICAgaWYobGF5b3V0W3ldW3grMV0uY292ZXIpIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigncmlnaHQnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRbeV1beF0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lj7PkuIDmoLzkuLrnkINcclxuICAgICAgICBlbHNlIGlmKGxheW91dFt5XVt4KzFdLnNpZ24gPT0gMyl7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMDtcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3grMV0uc2lnbiA9IDU7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4KzFdLmNvdmVyID0gNTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvc2l0aW9uKCdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/np7vliqjlkI7lm57mmL7nkIPkvZNcclxuICAgICAgICBpZihsYXlvdXRbeV1beF0uc2lnbiA9PSAwICYmIGxheW91dFt5XVt4XS5jb3ZlciAmJiBsYXlvdXRbeV1beF0uY292ZXIgIT0gMil7XHJcbiAgICAgICAgICAgIGxheW91dFt5XVt4XS5zaWduID0gMztcclxuICAgICAgICAgICAgbGF5b3V0W3ldW3hdLmNvdmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KGxheW91dClcclxuICAgIH0sXHJcbiAgICByZXNldFBvc2l0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aYr+WQpuW8gOWQr+WbnumAgOWKn+iDvVxyXG4gICAgICAgIGlmICh3aW5kb3cuZnJvbSA9PSBcInVwbG9hZFNvbHV0aW9uXCIgIHx8ICh3aW5kb3cuc2V0dGluZy5yZWxhc3QgJiYgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpKSB7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHdpbmRvdy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGVwQ291bnRlclZhbHVlICsrO1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuc3RlcENvdW50ZXIpdGhpcy5zdGVwQ291bnRlci5zdHJpbmcgPSBcIuatpeaVsO+8mlwiICsgdGhpcy5zdGVwQ291bnRlclZhbHVlO1xyXG4gICAgICAgIGxldCBjb3ZlckJveE51bSA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTx3aW5kb3cuY3VycmVudExldmVsLmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgbiA9IDA7IG48d2luZG93LmN1cnJlbnRMZXZlbFswXS5sZW5ndGggOyBuKyspe1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmN1cnJlbnRMZXZlbFtpXVtuXS5jb3ZlciAmJiB3aW5kb3cuY3VycmVudExldmVsW2ldW25dLnNpZ24gPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyQm94TnVtICsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYm94TnVtID09IGNvdmVyQm94TnVtKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+aMkeaImOaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5tb3ZlTXVzaWMgJiYgIXdpbmRvdy5tb3ZlTXVzaWMucGF1c2VkKSB3aW5kb3cubW92ZU11c2ljLnN0b3AoKTtcclxuICAgICAgICBpZih3aW5kb3cubW92ZU11c2ljICYmICF3aW5kb3cubW92ZU11c2ljLnBhdXNlZCkgd2luZG93Lm1vdmVNdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgIGlmKHdpbmRvdy5tb3ZlTXVzaWMpIHdpbmRvdy5tb3ZlTXVzaWMucGxheSgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYWRkVG91Y2hNb3ZlKCl7XHJcbiAgICAgICAgaWYoIXdpbmRvdy5zZXR0aW5nLnRvdWNoTW92ZSB8fCB3aW5kb3cuZnJvbSA9PSBcImNoZWNrU29sdXRpb25cIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGZpZ3VyZUxvY2F0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGZpZ3VyZUxvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZW5kTG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi54IC0gZW5kTG9jYXRpb24ueCkgPiBNYXRoLmFicyhmaWd1cmVMb2NhdGlvbi55IC0gZW5kTG9jYXRpb24ueSkpe1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlj7Pmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnggLSBlbmRMb2NhdGlvbi54KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW3pua7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZUxlZnQod2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA8IC01MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIrmu5FcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVVcCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKGZpZ3VyZUxvY2F0aW9uLnkgLSBlbmRMb2NhdGlvbi55KSA+IDUwKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4i+a7kVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubW92ZURvd24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jlc3VsdCh0eXBlKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyKXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGF0LnRpbWVDb3VudGVyVGltZXIpXHJcbiAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5mcm9tID09IFwicmV2aWV3XCIgfHwgd2luZG93LmZyb20gPT0gXCJjaGVja1NvbHV0aW9uXCIpe1xyXG4gICAgICAgICAgICBUb2FzdCgn5oyR5oiY5oiQ5Yqf77yBJywxNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcblxyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3VzZVRpbWUnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5q2l5pWw77yaXCIrIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSsn5q2lJztcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3VzZVN0ZXAnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi55So5pe277yaXCIrIHRoYXQudGltZUNvdW50ZXJWYWx1ZSsn56eSJztcclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdjb250ZW50QmcvbmV4dC9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAn5LiK5Lyg5YWz5Y2hJztcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dldFJldmlld0xldmVsTnVtJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkUmV2aWV3TGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogd2luZG93LnVwbG9hZExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXBOdW06IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiByZXMucmVzdWx0LnRvdGFsKzEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lP3dpbmRvdy5sb2dpbkluZm8ubmlja05hbWU6J+a4uOWuoicrd2luZG93LnVzZXIuYXBwSWQuc3Vic3RyaW5nKHdpbmRvdy51c2VyLmFwcElkLmxlbmd0aC01KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXZlbFVwbG9hZE51bSA9IHBhcnNlSW50KHJlcy5yZXN1bHQudG90YWwpKzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCflhbPljaHkuIrkvKDmiJDlip/lvoXlrqHmoLjvvIzlhbPpl63lub/lkYrlkI7ot7Plm57kuLvnlYzpnaInLDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQuc2hvdygpLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5YWz5Y2h5LiK5Lyg5oiQ5Yqf5b6F566h55CG5ZGY5a6h5qC477yM5Y2z5bCG6Lez5Zue5Li755WM6Z2iJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5aSx6LSlJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgfWVsc2UgaWYod2luZG93LmZyb20gPT0gXCJ1cGxvYWRTb2x1dGlvblwiKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0L0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfkuIrkvKDmlLvnlaUnO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sYXN0U29sdXRpb25TdGVwICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+abtOaWsOaUu+eVpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubGFzdFNvbHV0aW9uU3RlcD50aGF0LnN0ZXBDb3VudGVyVmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlQ2xhc3NpY3NMZXZlbFNvbHV0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGF0Lm1vdmVIaXN0b3J5TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5pS755Wl5LiK5Lyg5oiQ5YqfJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDEwMDApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWksei0pSzor7fnqI3lkI7lho3or5UnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfljp/mnInmlLvnlaXmraXmlbDmm7TlsJHvvIzkuIrkvKDlpLHotKUnLDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5LiK5Lyg5pS755WlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkQ2xhc3NpY3NMZXZlbFNvbHV0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0cmFpdDogd2luZG93LmxvZ2luSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhhdC5tb3ZlSGlzdG9yeUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+aUu+eVpeS4iuS8oOaIkOWKnycsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWksei0pSzor7fnqI3lkI7lho3or5UnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHdpbmRvdy5mcm9tICE9ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmxldmVsSW5kZXggPj0gd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0L0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICflm57kuLvnlYzpnaInXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC50aW1lQ291bnRlclRpbWVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDb3VudGVyVGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5LiL5LiA5YWzXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL25leHQnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxldmVsSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0TGV2ZWwoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNjLmZpbmQoJ2NvbnRlbnRCZy9uZXh0JyxuZXdNeVByZWZhYikub3BhY2l0eSA9IDA7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3JlcGxheScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJ1cGxvYWRTb2x1dGlvblwiKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZXBsYXlMYXlvdXQoKTtcclxuXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgY2MuZmluZCgnY29udGVudEJnL3JhbmsnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KCfmtYvor5XlhbPljaHmsqHmnInmjpLooYzmppwnLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNob3dMZXZlbFJhbmsoKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdjb250ZW50Qmcvc2hhcmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aXRTdHJpbmcgPSAgJ+ebiuaZuuaOqOeusSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmZyb20gIT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICfnrKwnK3dpbmRvdy5sZXZlbEluZGV4KyflhbMnKyct5L2/55So5q2l5pWw77yaJysgdGhhdC5zdGVwQ291bnRlclZhbHVlICsnLeaMkeaImOaIkOWKn++8gSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZysn5bCP5ri45oiP77yM5b+r5p2l5oyR5oiY5ZCn77yBJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdnYW1lT3ZlckFsZXJ0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sMClcclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gXCJidWlsZFwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHR5cGU9PSdza2lwJyl7XHJcbiAgICAgICAgICAgIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSA9ICc5OTk5JztcclxuICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclZhbHVlID0gJzk5OTknO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+S4iuS8oOWIhuaVsFxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBpZiAodGhhdC5sYXN0U2NvcmUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBUb2FzdCgn5LiK5Lyg5YiG5pWw5LitLi4uJywxNTAwKTtcclxuICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZENsYXNzaWNzTGV2ZWxTY29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVRpbWU6IHRoYXQudGltZUNvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZT93aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiB3aW5kb3cudXNlci5hcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VTdGVwOiB0aGF0LnN0ZXBDb3VudGVyVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSh0aGF0Lmxhc3RTY29yZS51c2VTdGVwLHRoYXQubGFzdFNjb3JlLnVzZVRpbWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHx8IHRoYXQudGltZUNvdW50ZXJWYWx1ZSA8IHRoYXQubGFzdFNjb3JlLnVzZVRpbWVcclxuICAgICAgICAgICAgICAgIGlmICh0aGF0LnN0ZXBDb3VudGVyVmFsdWUgPCB0aGF0Lmxhc3RTY29yZS51c2VTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVzZXIuYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVN0ZXA6IHRoYXQuc3RlcENvdW50ZXJWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKHRoYXQubGFzdFNjb3JlLnVzZVN0ZXAsdGhhdC5sYXN0U2NvcmUudXNlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWIhuaVsOS4rS4uLicsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3VwZGF0ZUNsYXNzaWNzTGV2ZWxTY29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlU3RlcDogdGhhdC5zdGVwQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlVGltZTogdGhhdC50aW1lQ291bnRlclZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHdpbmRvdy5sb2dpbkluZm8ubmlja05hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJMZXZlbE51bSA9IHdpbmRvdy5sZXZlbEluZGV4O1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wICYmIHJlcy5yZXN1bHQuZGF0YVswXS5sZXZlbEZpbmlzaE51bSA8IGN1ckxldmVsTnVtKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IGN1ckxldmVsTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBJZCA9IHdpbmRvdy51c2VyLmFwcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGV2ZWxGaW5pc2hOdW0gPSBjdXJMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lKSBkYXRhLm5pY2tOYW1lID0gd2luZG93LmxvZ2luSW5mby5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cubG9naW5JbmZvLmF2YXRhclVybCkgZGF0YS5wb3J0cmFpdCA9IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGVVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXBsYXlMYXlvdXQoKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBvc2l0aW9uKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKCl7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdFBlbmRhbnQoKXtcclxuXHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8v5YWz5Y2hXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbENvdW50ZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHZhciBsZXZlbE5vZGUgPSBuZXcgY2MuTm9kZSgnbGV2ZWxDb3VudGVyJyk7XHJcbiAgICAgICAgICAgIGxldmVsTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XHJcbiAgICAgICAgICAgIGxldmVsTm9kZS53aWR0aCA9ICBjYy53aW5TaXplLndpZHRoKjAuNztcclxuICAgICAgICAgICAgbGV2ZWxOb2RlLmhlaWdodCA9IDE4MDtcclxuICAgICAgICAgICAgLy8gbGV2ZWxOb2RlLmhvcml6b250YWxBbGlnbiA9ICdDRU5URVInXHJcbiAgICAgICAgICAgIHZhciBsZXZlbENvdW50ZXIgPSBsZXZlbE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgbGV2ZWxDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oMCwgIChjYy53aW5TaXplLmhlaWdodC8yKSAtIChjYy53aW5TaXplLmhlaWdodCowLjA1KSk7XHJcbiAgICAgICAgICAgIGxldmVsQ291bnRlci5mb250U2l6ZSA9IDYwO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIuZW5hYmxlQm9sZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGxldmVsQ291bnRlci5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LkNMQU1QO1xyXG4gICAgICAgICAgICBsZXZlbENvdW50ZXIubGluZUhlaWdodCA9IDYwO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxCeSl7XHJcbiAgICAgICAgICAgICAgICBsZXZlbENvdW50ZXIuc3RyaW5nID0gKCfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyAtICcrd2luZG93LmxldmVsQnkpLnN1YnN0cmluZygwLDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgbGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyID0gbGV2ZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGxldmVsTm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEJ5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICgn56ysICcrIHdpbmRvdy5sZXZlbEluZGV4ICsgJyDlhbMgLSAnK3dpbmRvdy5sZXZlbEJ5KS5zdWJzdHJpbmcoMCwxNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfnrKwgJysgd2luZG93LmxldmVsSW5kZXggKyAnIOWFsyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICfmtYvor5XlhbPljaEnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDb3VudGVyLnN0cmluZyA9ICflrqHmoLjlhbPljaEnO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5nYW1lQ2lyY2xlKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2FtZUNpcmNsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZ2FtZUNpcmNsZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYod2luZG93LmF1ZGl0TGV2ZWxBZCkgd2luZG93LmF1ZGl0TGV2ZWxBZC5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgJiYgIXdpbmRvdy5nYW1lQ2lyY2xlKXtcclxuICAgICAgICAgICAgICAgIGxldCBzeXNJbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpdExldmVsQWRXaWR0aCA9IHN5c0luZm8ud2luZG93V2lkdGgqMC42O1xyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGl0TGV2ZWxBZExlZnQgPSAoc3lzSW5mby53aW5kb3dXaWR0aCowLjQpLzI7XHJcbiAgICAgICAgICAgICAgICBpZihhdWRpdExldmVsQWRXaWR0aDw9MzAwKSBhdWRpdExldmVsQWRMZWZ0ID0gKHN5c0luZm8ud2luZG93V2lkdGgtMzAwKS8yO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5a6h5qC46aG16Z2iYm5BZFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmF1ZGl0TGV2ZWxBZCA9ICB3eC5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtYTE2NzBjMjI1MzM0ZGEyNycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXVkaXRMZXZlbEFkTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBzeXNJbmZvLndpbmRvd0hlaWdodCowLjA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXVkaXRMZXZlbEFkV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hdWRpdExldmVsQWQub25FcnJvcihlcnIgPT4ge30pXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXVkaXRMZXZlbEFkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmF1ZGl0TGV2ZWxBZC5zaG93KCkuY2F0Y2goKCk9Pnt9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAndXBsb2FkU29sdXRpb24nKXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzJysnIC0g5LiK5Lyg5pS755WlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2NoZWNrU29sdXRpb24nKXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbENvdW50ZXIuc3RyaW5nID0gJ+esrCAnKyB3aW5kb3cubGV2ZWxJbmRleCArICcg5YWzJysnIC0g5pS755WlJztcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/mraXmlbBcclxuICAgICAgICBpZih0aGlzLnN0ZXBDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCdzdGVwQ291bnRlcicpO1xyXG4gICAgICAgICAgICBub2RlLnNldEFuY2hvclBvaW50KDAsIDEpO1xyXG4gICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDgwKTtcclxuICAgICAgICAgICAgc3RlcENvdW50ZXIuc3RyaW5nID0gJ+atpeaVsO+8miAwJztcclxuICAgICAgICAgICAgdGhpcy5zdGVwQ291bnRlciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcENvdW50ZXJWYWx1ZSAgPSAwO1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0ZXBDb3VudGVyKSB0aGlzLnN0ZXBDb3VudGVyLnN0cmluZyA9IFwi5q2l5pWw77yaXCIgKyB0aGlzLnN0ZXBDb3VudGVyVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/nlKjml7ZcclxuICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgdGltZU5vZGUgPSBuZXcgY2MuTm9kZSgndGltZUNvdW50ZXInKTtcclxuICAgICAgICAgICAgdGltZU5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciB0aW1lQ291bnRlciA9IHRpbWVOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oMCAsIChjYy53aW5TaXplLndpZHRoLzIpICsgODApXHJcbiAgICAgICAgICAgIHRpbWVDb3VudGVyLnN0cmluZyA9ICfnlKjml7bvvJogMCc7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUNvdW50ZXIgPSB0aW1lTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aW1lTm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVmFsdWUgICsrO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50aW1lQ291bnRlcikgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksMTAwMClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhpcy50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyVGltZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb3VudGVyVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRpbWVDb3VudGVyKXRoaXMudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoaXMudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSwxMDAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLm1vdmVIaXN0b3J5TGlzdCA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLm1vdmVIaXN0b3J5TGlzdC5zcGxpY2UoMCx0aGlzLm1vdmVIaXN0b3J5TGlzdC5sZW5ndGgpXHJcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfSxcclxuICAgIHBlbmRhbnRBZGRFdmVudCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBjYy5maW5kKCdiYWNrJyx0aGlzLm5vZGUpLm9uKCdjbGljaycsdGhpcy5iYWNrLCB0aGlzKVxyXG4gICAgICAgIC8v5byA5ZCv54K55Ye756e75YqoXHJcbiAgICAgICAgaWYod2luZG93LnNldHRpbmcuY2xpY2tNb3ZlICYmIHdpbmRvdy5mcm9tICE9IFwiY2hlY2tTb2x1dGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3VwJyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVVcCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3JpZ2h0Jyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVSaWdodCh3aW5kb3cuY3VycmVudExldmVsKVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL2Rvd24nLHRoaXMubm9kZSkub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubW92ZURvd24od2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9sZWZ0Jyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1vdmVMZWZ0KHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MuZmluZCgnZ2FtZUJ0bnMvdXAnLHRoaXMubm9kZSkucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2dhbWVCdG5zL3JpZ2h0Jyx0aGlzLm5vZGUpLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9kb3duJyx0aGlzLm5vZGUpLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9sZWZ0Jyx0aGlzLm5vZGUpLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlZnRCdG4gPSBjYy5maW5kKCdnYW1lQnRucy9iYWNrU3RlcC9CYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3JldmlldycpIGxlZnRCdG4uc3RyaW5nID0gJ+mAmui/hyc7XHJcbiAgICAgICAgZWxzZSBpZih3aW5kb3cuZnJvbSA9PSAnY2hlY2tTb2x1dGlvbicpIGxlZnRCdG4uc3RyaW5nID0gJ25leHQnO1xyXG4gICAgICAgIGVsc2UgaWYoIXdpbmRvdy5zZXR0aW5nLnJlbGFzdCkgbGVmdEJ0bi5zdHJpbmcgPSAn6YeN546pJztcclxuICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9iYWNrU3RlcCcsdGhpcy5ub2RlKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8v5pS755Wl5pKt5pS+XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdjaGVja1NvbHV0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNvbHV0aW9uU3RlcEluZGV4ICsrIDtcclxuICAgICAgICAgICAgICAgIGlmKHRoYXQuc29sdXRpb25TdGVwSW5kZXg+PXdpbmRvdy5sZXZlbFNvbHV0aW9uLmNvbnRlbnQubGVuZ3RoKSB0aGF0LnNvbHV0aW9uU3RlcEluZGV4PTA7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gd2luZG93LmxldmVsU29sdXRpb24uY29udGVudFt0aGF0LnNvbHV0aW9uU3RlcEluZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lrqHmoLjlhbPljaHpgJrov4dcclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3Jldmlldycpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCd2ZXJpZnlDb250YWluL2Nsb3NlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gIGNjLmZpbmQoJ3ZlcmlmeUNvbnRhaW4vZWRpdGJveCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgndmVyaWZ5Q29udGFpbi9jb25maXJtJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhc3N3b3JkLnRleHRMYWJlbC5zdHJpbmcgPT0gJzE5OTcwNzIwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2dldENsYXNzaWNzTGV2ZWxOdW0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRDbGFzc2ljc0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB3aW5kb3cudXBsb2FkTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiByZXMucmVzdWx0LnRvdGFsKzEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDogd2luZG93LnVwbG9hZEluZm8uYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogd2luZG93LnVwbG9hZEluZm8ubmlja05hbWU/d2luZG93LnVwbG9hZEluZm8ubmlja05hbWU6J+a4uOWuoicrd2luZG93LnVwbG9hZEluZm8uYXBwSWQuc3Vic3RyaW5nKHdpbmRvdy51cGxvYWRJbmZvLmFwcElkLmxlbmd0aC01KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRyYWl0OiB3aW5kb3cudXBsb2FkSW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDp3aW5kb3cucmV2aWV3SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldmVsVXBsb2FkTnVtID0gcGFyc2VJbnQocmVzLnJlc3VsdC50b3RhbCkrMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCflhbPljaEnK2xldmVsVXBsb2FkTnVtKyfkuIrkvKDmiJDlip/vvIzljbPlsIbot7Plm57kuLvnlYzpnaInLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGF0LnRpbWVDb3VudGVyVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+S4iuS8oOWksei0pScsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+WvhueggemUmeivr++8gScsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3ZlcmlmeUFkbWluJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLnJlbGFzdCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGF0Lm1vdmVIaXN0b3J5TGlzdC5sZW5ndGggPiAxICYmIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSA+PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGFzdExheW91dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhhdC5tb3ZlSGlzdG9yeUxpc3RbdGhhdC5tb3ZlSGlzdG9yeUxpc3QubGVuZ3RoLTFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxhc3RMYXlvdXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RlcENvdW50ZXJWYWx1ZSAtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3RlcENvdW50ZXIuc3RyaW5nID0gXCLmraXmlbDvvJpcIiArIHRoYXQuc3RlcENvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jdXJyZW50TGV2ZWwgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlcGxheUxheW91dCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3JykgY2MuZmluZCgnZ2FtZUJ0bnMvbWVudS9CYWNrZ3JvdW5kL0xhYmVsJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+mps+WbnidcclxuICAgICAgICBlbHNlIGlmKHdpbmRvdy5mcm9tID09IFwiY2hlY2tTb2x1dGlvblwiKSBjYy5maW5kKCdnYW1lQnRucy9tZW51L0JhY2tncm91bmQvTGFiZWwnLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAncHJldidcclxuICAgICAgICBjYy5maW5kKCdnYW1lQnRucy9tZW51Jyx0aGlzLm5vZGUpLm9uKFwiY2xpY2tcIixmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC50aW1lQ291bnRlclRpbWVyKTtcclxuICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgLy/mlLvnlaXmkq3mlL5cclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2NoZWNrU29sdXRpb24nKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuc29sdXRpb25TdGVwSW5kZXggLS07XHJcbiAgICAgICAgICAgICAgICBpZih0aGF0LnNvbHV0aW9uU3RlcEluZGV4PD0wKSB0aGF0LnNvbHV0aW9uU3RlcEluZGV4PTA7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gd2luZG93LmxldmVsU29sdXRpb24uY29udGVudFt0aGF0LnNvbHV0aW9uU3RlcEluZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5a6h5qC45YWz5Y2h6amz5ZueXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdyZXZpZXcnKXtcclxuICAgICAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCd2ZXJpZnlDb250YWluL2Nsb3NlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gIGNjLmZpbmQoJ3ZlcmlmeUNvbnRhaW4vZWRpdGJveCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgndmVyaWZ5Q29udGFpbi9jb25maXJtJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhc3N3b3JkLnRleHRMYWJlbC5zdHJpbmcgPT0gJzE5OTcwNzIwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVJldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOndpbmRvdy5yZXZpZXdJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5YWz5Y2h5bey6amz5Zue77yM5Y2z5bCG6Lez5Zue5Li755WM6Z2iJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5a+G56CB6ZSZ6K+v77yBJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygndmVyaWZ5QWRtaW4nLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gdGhhdC5ub2RlO1xyXG4gICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9jb250aW51ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoYXQudGltZUNvdW50ZXJUaW1lciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXIuc3RyaW5nID0gXCLnlKjml7bvvJpcIiArIHRoYXQudGltZUNvdW50ZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoYXQpLDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9yZXBsYXknLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vbGV2ZWxzJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xldmVsTGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ2NvbnRhaW4vcmFuaycsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5mcm9tID09ICdidWlsZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5rWL6K+V5YWz5Y2h5rKh5pyJ5o6S6KGM5qacJywxNTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zaG93TGV2ZWxSYW5rKCk7XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnY29udGFpbi9zaGFyZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0U3RyaW5nID0gICfnm4rmmbrmjqjnrrEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuZnJvbSAhPSAnYnVpbGQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdFN0cmluZyA9IHRpdFN0cmluZyArICfnrKwnK3dpbmRvdy5sZXZlbEluZGV4KyflhbMt5b+r5p2l5oyR5oiY5ZCnISdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0U3RyaW5nID0gdGl0U3RyaW5nICsgJ+Wwj+a4uOaIj++8jOW/q+adpeaMkeaImOWQp++8gSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRTdHJpbmcgPSB0aXRTdHJpbmcgKyAnLeS9v+eUqOatpeaVsO+8midcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogJ+WIhuS6qycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2dhbWVNZW51Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgICAgIH0sdGhpcylcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdExldmVsKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBMb2FkaW5nLnNob3coKTtcclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSgn5pegJywn5pegJylcclxuXHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6J2J1aWxkTGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluaMguS7tlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp3aW5kb3cuY3VycmVudExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5tb3ZlSGlzdG9yeUxpc3QucHVzaChyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OididWlsZExldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTY29yZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxhc3RTY29yZSgn5pegJywn5pegJylcclxuXHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6J3Jldmlld0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRMZXZlbCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3VycmVudExldmVsID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGF5b3V0KHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmluaXRQb3NpdGlvbih3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yid5aeL5YyW5oyC5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5pdFBlbmRhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaW5pdExldmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5jdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcImluaXRMZXZlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvL+e7j+WFuOWFs+WNoVxyXG4gICAgICAgICAgICBpZih3aW5kb3cubGV2ZWxDbGFzc2lmeSA9PSAnY2xhc3NpY3NMZXZlbCcpe1xyXG4gICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOndpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmN1cnJlbnRMZXZlbCA9IHJlcy5yZXN1bHQuZGF0YVswXS5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxheW91dCh3aW5kb3cuY3VycmVudExldmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UG9zaXRpb24od2luZG93LmN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbEJ5ID0gcmVzLnJlc3VsdC5kYXRhWzBdLm5pY2tOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbmjILku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbml0UGVuZGFudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LmN1cnJlbnRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm1vdmVIaXN0b3J5TGlzdC5wdXNoKHdpbmRvdy5jdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVwbGF5TGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbFNjb3JlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBJZDp3aW5kb3cudXNlci5hcHBJZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U2NvcmUgPSByZXMucmVzdWx0LmRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGFzdFNjb3JlKHRoYXQubGFzdFNjb3JlLnVzZVN0ZXAsdGhhdC5sYXN0U2NvcmUudXNlVGltZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubGFzdFNjb3JlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMYXN0U2NvcmUoJ+aXoCcsJ+aXoCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sZXZlbEluZGV4ID09IDEpIFRvYXN0KCdUaXA6IOWPr+a7keWKqOWxj+W5leaOp+WItuS6uueJqScsNTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nvZHnu5zlhbPljaFcclxuICAgICAgICAgICAgZWxzZXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy/mlLvnlaVcclxuICAgICAgICAgICAgaWYod2luZG93LmZyb20gIT0gXCJ1cGxvYWRTb2x1dGlvblwiICYmIHdpbmRvdy5mcm9tICE9IFwiY2hlY2tTb2x1dGlvblwiKXtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RheSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc29sdXRpb25CdG5Ob2RlID0gbmV3IGNjLk5vZGUoJ3NraXBOb2RlJyk7XHJcbiAgICAgICAgICAgICAgICBzb2x1dGlvbkJ0bk5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc29sdXRpb25CdG5MYWJlbCA9IHNvbHV0aW9uQnRuTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgc29sdXRpb25CdG5MYWJlbC5ub2RlLnNldFBvc2l0aW9uKChjYy53aW5TaXplLndpZHRoLzIpIC0gKGNjLndpblNpemUud2lkdGgqMC4yKSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgODApO1xyXG4gICAgICAgICAgICAgICAgc29sdXRpb25CdG5MYWJlbC5zdHJpbmcgPSAn55u45YWz5pS755WlJztcclxuICAgICAgICAgICAgICAgIHRoYXQuc29sdXRpb25CdG4gPSBzb2x1dGlvbkJ0bk5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICAgICAgdGhhdC5ub2RlLmFkZENoaWxkKHNvbHV0aW9uQnRuTm9kZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5hYmxlU2tpcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdza2lwQWRJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5udW0+PTUpIHRoYXQubm9uZVNraXBDaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGF0LnNvbHV0aW9uQnRuLm5vZGUub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWVuYWJsZVNraXApIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVTa2lwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyKSBjbGVhckludGVydmFsKHRoYXQudGltZUNvdW50ZXJUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnc29sdXRpb25Db250YWluL2Nsb3NlJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclZhbHVlICArKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlcikgdGhhdC50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhhdC50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGF0KSwxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnc29sdXRpb25Db250YWluL3NraXBMZXZlbCcsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC5sYXN0U2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5b2T5YmN5YWz5Y2h5bey6YCa6L+H5peg6ZyA5YaN6Lez6L+HXCIsMTUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoYXQubm9uZVNraXBDaGFuZ2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5q+P5aSp5pyA5aSa6Lez6L+HNeS4quWFs+WNoVwiLDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXdpbmRvdy5za2lwTGV2ZWxBZCl7VG9hc3QoXCLlub/lkYrmi4nlj5blpLHotKVcIiwxNTAwKTtyZXR1cm47fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNraXBMZXZlbEFkLnNob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQubG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cuc2tpcExldmVsQWQuc2hvdygpKS5jYXRjaCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLlub/lkYrmi4nlj5blpLHotKVcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2tpcExldmVsQWQub2ZmQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5za2lwTGV2ZWxBZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bCP5LqOIDIuMS4wIOeahOWfuuehgOW6k+eJiOacrO+8jHJlcyDmmK/kuIDkuKogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCB8fCByZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlclRpbWVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ291bnRlclRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNvdW50ZXJWYWx1ZSAgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhhdC50aW1lQ291bnRlcikgdGhhdC50aW1lQ291bnRlci5zdHJpbmcgPSBcIueUqOaXtu+8mlwiICsgdGhhdC50aW1lQ291bnRlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoYXQpLDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dSZXN1bHQoJ3NraXAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6ZmQ5Yi26Lez6L+H5qyh5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc2tpcEFkSW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmRhdGUgPT0gdG9kYXkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5udW0+PTUpIHRoYXQubm9uZVNraXBDaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3NraXBBZEluZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6dG9kYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOnJlcy5kYXRhLm51bSsxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnc2tpcEFkSW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTp0b2RheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdza2lwQWRJbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTp0b2RheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bToxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnc29sdXRpb25Db250YWluL2NoZWNrU29sdXRpb24nLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbFNvbHV0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsSW5kZXg6IHdpbmRvdy5sZXZlbEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sZXZlbFNvbHV0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aD4wKXtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkKXtUb2FzdChcIuW5v+WRiuaLieWPluWksei0pVwiLDE1MDApO3JldHVybjt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZC5zaG93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZC5sb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkLnNob3coKSkuY2F0Y2goKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLlub/lkYrmi4nlj5blpLHotKVcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQub2ZmQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNoZWNrU29sdXRpb25MZXZlbEFkLm9uQ2xvc2UocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+S6huOAkOWFs+mXreW5v+WRiuOAkeaMiemSrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bCP5LqOIDIuMS4wIOeahOWfuuehgOW6k+eJiOacrO+8jHJlc3VsdCDmmK/kuIDkuKogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5pc0VuZGVkIHx8IHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5q2j5bi45pKt5pS+57uT5p2f77yM5Y+v5Lul5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZyb20gPSBcImNoZWNrU29sdXRpb25cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubGV2ZWxTb2x1dGlvbiA9IHJlcy5yZXN1bHQuZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+W9k+WJjeWFs+WNoeaaguaXoOaUu+eVpScsMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnc29sdXRpb25Db250YWluL3VwbG9hZFNvbHV0aW9uJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICd1cGxvYWRTb2x1dGlvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdzb2x1dGlvbkRpYWxvZycsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVTa2lwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICB9LCB0aGF0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJhY2soKXtcclxuICAgICAgICB0aGlzLmluaXRQZW5kYW50KCk7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVDb3VudGVyVGltZXIpXHJcbiAgICAgICAgdGhpcy50aW1lQ291bnRlclRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3Jldmlldycpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHdpbmRvdy5mcm9tID09ICd1cGxvYWRTb2x1dGlvbicpe1xyXG4gICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdnYW1lJ1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHdpbmRvdy5mcm9tID09ICdjaGVja1NvbHV0aW9uJyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImdhbWVcIik7XHJcbiAgICAgICAgfWVsc2UgaWYod2luZG93LmZyb20gPT0gJ2J1aWxkJyl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5mcm9tID0gJ2dhbWUnXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnYnVpbGQnKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgd2luZG93LmZyb20gPSAnZ2FtZSdcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHJlbmRlckxhc3RTY29yZShzdGVwLHRpbWUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnYnVpbGQnIHx8IHdpbmRvdy5mcm9tID09IFwicmV2aWV3XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93LmZyb20gPT0gJ3VwbG9hZFNvbHV0aW9uJyl7XHJcblxyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5Q2xhc3NpY3NMZXZlbFNvbHV0aW9uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbEluZGV4OiB3aW5kb3cubGV2ZWxJbmRleFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEJlc3RTY29yZSA9ICflvZPliY3mlLvnlaXvvJrmmoLml6AnO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lmxhc3RTb2x1dGlvblN0ZXAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzICYmIHJlcy5yZXN1bHQuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmxhc3RTb2x1dGlvblN0ZXAgPSByZXMucmVzdWx0LmRhdGFbMF0udXNlU3RlcDtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0QmVzdFNjb3JlID0gJ+W9k+WJjeaUu+eVpe+8muatpeaVsCcgKyByZXMucmVzdWx0LmRhdGFbMF0udXNlU3RlcCArICcgLSDotKHnjK7ogIXvvJonKyByZXMucmVzdWx0LmRhdGFbMF0ubmlja05hbWUuc3Vic3RyaW5nKDAsMTYpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhhdC5sYXN0U3RlcE5vZGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RTdGVwTm9kZSA9IG5ldyBjYy5Ob2RlKCdsYXN0U3RlcE5vZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U3RlcE5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ZXBDb3VudGVyID0gbGFzdFN0ZXBOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcENvdW50ZXIubm9kZS5zZXRQb3NpdGlvbigtKGNjLndpblNpemUud2lkdGgvMikgKyAoY2Mud2luU2l6ZS53aWR0aCowLjA1KSwgIChjYy53aW5TaXplLndpZHRoLzIpICsgMTYwKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBDb3VudGVyLnN0cmluZyA9IGxhc3RCZXN0U2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUgPSBsYXN0U3RlcE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubm9kZS5hZGRDaGlsZChsYXN0U3RlcE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5sYXN0U3RlcE5vZGUuc3RyaW5nID0gbGFzdEJlc3RTY29yZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cuZnJvbSA9PSAnY2hlY2tTb2x1dGlvbicpe1xyXG4gICAgICAgICAgICBpZih0aGF0Lmxhc3RTdGVwTm9kZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHZhciBsYXN0U3RlcE5vZGUgPSBuZXcgY2MuTm9kZSgnbGFzdFN0ZXBOb2RlJyk7XHJcbiAgICAgICAgICAgICAgICBsYXN0U3RlcE5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RlcENvdW50ZXIgPSBsYXN0U3RlcE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIHN0ZXBDb3VudGVyLm5vZGUuc2V0UG9zaXRpb24oLShjYy53aW5TaXplLndpZHRoLzIpICsgKGNjLndpblNpemUud2lkdGgqMC4wNSksICAoY2Mud2luU2l6ZS53aWR0aC8yKSArIDE2MClcclxuICAgICAgICAgICAgICAgIHN0ZXBDb3VudGVyLnN0cmluZyA9ICflvZPliY3mlLvnlaXvvJrmraXmlbAnICsgd2luZG93LmxldmVsU29sdXRpb24udXNlU3RlcCArICcgLSDotKHnjK7ogIXvvJonKyB3aW5kb3cubGV2ZWxTb2x1dGlvbi5uaWNrTmFtZS5zdWJzdHJpbmcoMCwxNik7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZSA9IGxhc3RTdGVwTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgICAgICB0aGF0Lm5vZGUuYWRkQ2hpbGQobGFzdFN0ZXBOb2RlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZS5zdHJpbmcgPSAn5b2T5YmN5pS755Wl77ya5q2l5pWwJyArIHdpbmRvdy5sZXZlbFNvbHV0aW9uLnVzZVN0ZXAgKyAnIC0g6LSh54yu6ICF77yaJysgd2luZG93LmxldmVsU29sdXRpb24ubmlja05hbWUuc3Vic3RyaW5nKDAsMTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+acgOS9s+atpeaVsFxyXG4gICAgICAgIGlmKHRoYXQubGFzdFN0ZXBOb2RlID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgbGFzdFN0ZXBOb2RlID0gbmV3IGNjLk5vZGUoJ2xhc3RTdGVwTm9kZScpO1xyXG4gICAgICAgICAgICBsYXN0U3RlcE5vZGUuc2V0QW5jaG9yUG9pbnQoMCwgMSk7XHJcbiAgICAgICAgICAgIHZhciBzdGVwQ291bnRlciA9IGxhc3RTdGVwTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBzdGVwQ291bnRlci5ub2RlLnNldFBvc2l0aW9uKC0oY2Mud2luU2l6ZS53aWR0aC8yKSArIChjYy53aW5TaXplLndpZHRoKjAuMDUpLCAgKGNjLndpblNpemUud2lkdGgvMikgKyAxNjApXHJcbiAgICAgICAgICAgIHN0ZXBDb3VudGVyLnN0cmluZyA9ICfmnIDkvbPmiJDnu6nvvJrmraXmlbAgJysgc3RlcCtcIiAtIOeUqOaXtiBcIit0aW1lO1xyXG4gICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZSA9IGxhc3RTdGVwTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgICAgIHRoYXQubm9kZS5hZGRDaGlsZChsYXN0U3RlcE5vZGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGF0Lmxhc3RTdGVwTm9kZS5zdHJpbmcgPSAn5pyA5L2z5oiQ57up77ya5q2l5pWwICcrIHN0ZXArXCIgLSDnlKjml7YgXCIrdGltZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBzaG93TGV2ZWxSYW5rKCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgdmFyIHJhbmtQYWdlID0gMSxyYW5rUGFnZVNpemUgPSA1MDtcclxuICAgICAgICBpZiggIUNhbnZhc05vZGUgKSB7IGNjLmNvbnNvbGUoICdmaW5kIENhbnZhcyBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgdmFyIG9uUmVzb3VyY2VMb2FkZWQgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIGlmKCAhKCBsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcicgKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGNjLmZpbmQoJ3JhbmtMaXN0L3ZpZXcvY29udGVudCcsbmV3TXlQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY2xvc2UnLG5ld015UHJlZmFiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGlmKHRoYXQucmFua0l0ZW0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0l0ZW0nLCBmdW5jdGlvbiAoZXJyLHJlc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yYW5rSXRlbSA9IGNjLmluc3RhbnRpYXRlKHJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlckxldmVsUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZmluZCgncmFua0xpc3QnLG5ld015UHJlZmFiKS5vbignYm91bmNlLWJvdHRvbScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByYW5rUGFnZSsrO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJMZXZlbFJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3RoTGV2ZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICfmraUg5pWwJ1xyXG4gICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTGV2ZWxSYW5rTGlzdChjb250ZW50LHBhZ2UscGFnZVNpemUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY3VycmVudEl0ZW1OdW0gPSBjb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlDbGFzc2ljc0xldmVsU2NvcmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxJbmRleDp3aW5kb3cubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGk8PSByZXMucmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMucmVzdWx0LmRhdGFbaS0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGF0LnJhbmtJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZFJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkrY3VycmVudEl0ZW1OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkRGF0ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0ZVJhbmtUaW1lKGRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEudXNlU3RlcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShkYXRhLnBvcnRyYWl0Kyc/YWFhPWFhLmpwZycsICBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGROYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIitkYXRhLm5pY2tOYW1lK1wiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gY29udGVudC5jaGlsZHJlbkNvdW50ICogcmFua0l0ZW0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QoXCLmsqHmnInmm7TlpJrmlbDmja7kuoZcIiwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCl7XHJcblxyXG4gICAgICAgIGlmKHdpbmRvdy5hdWRpdExldmVsQWQpIHdpbmRvdy5hdWRpdExldmVsQWQuZGVzdHJveSgpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuIl19
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
      adUnitId: 'adunit-d408eadf9ac9c0a9'
    });
    window.checkSolutionLevelAd = wx.createRewardedVideoAd({
      adUnitId: 'adunit-110d097df5bc8eb0'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlbnYiLCJiZ011c2ljIiwibW92ZU11c2ljIiwiY3JlYXRlU2NlbnNlVXBsb2FkQWQiLCJza2lwTGV2ZWxBZCIsImF1ZGl0TGV2ZWxBZCIsImNoZWNrU29sdXRpb25MZXZlbEFkIiwiZ2FtZUNpcmNsZSIsImRlc3Ryb3kiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJ3eCIsImNsb3VkIiwiaW5pdCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwiYWRVbml0SWQiLCJvbkVycm9yIiwiZXJyIiwidXNlciIsImNsYXNzaWNzTGV2ZWxOdW0iLCJuZXRMZXZlbE51bSIsImxldmVsSW5kZXgiLCJiZ1VybEJhc2UiLCJsZXZlbEZpbmlzaE51bSIsImxvZ2luSW5mbyIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25lU2F5TGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJsb2dpbnBsYXkiLCJCdXR0b24iLCJ2aXNpdG9ycGxheSIsIm1haW5SYW5rIiwibGV2ZWxMYXlvdXQiLCJQcmVmYWIiLCJyZXZpZXdMYXlvdXQiLCJyZXZpZXdMZXZlbCIsImJ1aWxkTGV2ZWwiLCJzZXR0aW5nIiwibWFpblNoYXJlIiwicmFua0l0ZW0iLCJvbkxvYWQiLCJtYWluQmluZEV2ZW50IiwiZnJvbSIsImdhbWUiLCJvbiIsIkVWRU5UX1NIT1ciLCJwYXVzZWQiLCJwYXVzZSIsInBsYXkiLCJzdGFydCIsInRoYXQiLCJMb2FkaW5nIiwic2hvdyIsImNhbGxGdW5jdGlvbiIsIm5hbWUiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwidG90YWwiLCJoaWRlIiwiY29uc29sZSIsImVycm9yIiwicmVtb3ZlU3RvcmFnZSIsImtleSIsImxvYWRJbWciLCJvbmVTYXkiLCJnZXRVc2VySW5mbyIsImluaXRTZXR0aW5nIiwiY29udGFpbmVyIiwiZmluZCIsImltZ1NlcnZlVXJsIiwiaW1nVXJsIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJpbWFnZXMiLCJ1cmxiYXNlIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsInRleHR1cmUiLCJzcHJpdGUiLCJTcHJpdGVGcmFtZSIsInNwcml0ZUZyYW1lIiwic3Rhck5vZGUiLCJOb2RlIiwic2V0UG9zaXRpb24iLCJzdGFyU3ByaXRlIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwic2l6ZU1vZGUiLCJub2RlIiwid2lkdGgiLCJ3aW5TaXplIiwiaGVpZ2h0Iiwib3BhY2l0eSIsImFkZENoaWxkIiwib3BhY2l0eVRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib3BlbiIsInNlbmQiLCJ1cmwiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJoaXRva290byIsIm5ld1hIUiIsImxvZ2luTGV2ZWxMaXN0IiwibG9naW5UeXBlIiwiQ2FudmFzTm9kZSIsIm9uUmVzb3VyY2VMb2FkZWQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkZWRSZXNvdXJjZSIsImxvZyIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJsb2FkZXIiLCJsb2FkUmVzIiwidmlzaXRvckxldmVsTGlzdCIsInNob3dSZXZpZXdMZXZlbCIsInJldmlld1BhZ2UiLCJyZXZpZXdQYWdlU2l6ZSIsImNvbnRlbnQiLCJyZW1vdmVGcm9tUGFyZW50IiwicmVzb3VyY2UiLCJyZW5kZXJSZXZpZXdMZXZlbExpc3QiLCJwYWdlIiwicGFnZVNpemUiLCJjdXJyZW50SXRlbU51bSIsImNoaWxkcmVuQ291bnQiLCJkYXRhIiwibGVuZ3RoIiwiaSIsImdldENoaWxkQnlOYW1lIiwiY3JlYXRlVGltZSIsInVzZVN0ZXBOdW0iLCJwb3J0cmFpdCIsInQiLCJ3eExvZ2luQnRuIiwic2V0U3RvcmFnZSIsInN1Y2Nlc3MiLCJ1cGxvYWRJbmZvIiwicmV2aWV3SWQiLCJfaWQiLCJhcHBJZCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic2hvd01haW5SYW5rIiwicmFua1BhZ2UiLCJyYW5rUGFnZVNpemUiLCJyZW5kZXJNYWluUmFua0xpc3QiLCJnZXRTdG9yYWdlIiwicm9sZXMiLCJmYWlsIiwib3BlbmlkIiwic3Vic3RyaW5nIiwiQXJyYXkiLCJ0aXRTdHJpbmciLCJzaGFyZUFwcE1lc3NhZ2UiLCJ0aXRsZSIsInF1ZXJ5IiwidG91Y2hNb3ZlIiwiY2xpY2tNb3ZlIiwicmVsYXN0IiwibXVzaWMiLCJjb21wbGV0ZSIsInNldE11c2ljIiwic3lzSW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwiY3JlYXRlR2FtZUNsdWJCdXR0b24iLCJpY29uIiwic3R5bGUiLCJsZWZ0Iiwid2luZG93V2lkdGgiLCJ0b3AiLCJ3aW5kb3dIZWlnaHQiLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsInVzZVdlYkF1ZGlvSW1wbGVtZW50IiwicmVzb3VyY2VzIiwibG9hZCIsIkF1ZGlvQ2xpcCIsImNsaXAiLCJzcmMiLCJsb29wIiwicGxheWJhY2tSYXRlIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7O0FBNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLEdBQVAsR0FBYSx5QkFBYjtBQUNBRCxNQUFNLENBQUNFLE9BQVAsR0FBZSxJQUFmO0FBQ0FGLE1BQU0sQ0FBQ0csU0FBUCxHQUFpQixJQUFqQjtBQUNBSCxNQUFNLENBQUNJLG9CQUFQLEdBQThCLElBQTlCO0FBQ0FKLE1BQU0sQ0FBQ0ssV0FBUCxHQUFxQixJQUFyQjtBQUNBTCxNQUFNLENBQUNNLFlBQVAsR0FBc0IsSUFBdEI7QUFDQU4sTUFBTSxDQUFDTyxvQkFBUCxHQUE4QixJQUE5QjtBQUNBUCxNQUFNLENBQUNRLFVBQVAsR0FBb0IsSUFBcEI7QUFD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LCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG53aW5kb3cuZW52ID0gXCJjbG91ZDEtNWd2YnVpeTNkZDk5ZjYzY1wiXHJcbndpbmRvdy5iZ011c2ljPW51bGw7XHJcbndpbmRvdy5tb3ZlTXVzaWM9bnVsbDtcclxud2luZG93LmNyZWF0ZVNjZW5zZVVwbG9hZEFkID0gbnVsbDtcclxud2luZG93LnNraXBMZXZlbEFkID0gbnVsbDtcclxud2luZG93LmF1ZGl0TGV2ZWxBZCA9IG51bGw7XHJcbndpbmRvdy5jaGVja1NvbHV0aW9uTGV2ZWxBZCA9IG51bGw7XHJcbndpbmRvdy5nYW1lQ2lyY2xlID0gbnVsbDtcclxuaWYod2luZG93LmF1ZGl0TGV2ZWxBZCkgd2luZG93LmF1ZGl0TGV2ZWxBZC5kZXN0cm95KCk7XHJcbmlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgd3guY2xvdWQuaW5pdCh7ZW52OiB3aW5kb3cuZW52fSlcclxuICAgIC8v5bm/5ZGK5Yid5aeL5YyWXHJcbiAgICBpZiAod3guY3JlYXRlSW50ZXJzdGl0aWFsQWQpe1xyXG4gICAgICAgIHdpbmRvdy5za2lwTGV2ZWxBZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWQ0MDhlYWRmOWFjOWMwYTknXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuY2hlY2tTb2x1dGlvbkxldmVsQWQgPSB3eC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG4gICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC0xMTBkMDk3ZGY1YmM4ZWIwJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2luZG93LnNraXBMZXZlbEFkLm9uRXJyb3IoZXJyID0+IHt9KTtcclxuICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWU3ZjIzYjUyYzlkNTkzMTUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3aW5kb3cuY3JlYXRlU2NlbnNlVXBsb2FkQWQub25FcnJvcihlcnIgPT4ge3dpbmRvdy5jcmVhdGVTY2Vuc2VVcGxvYWRBZCA9bnVsbDt9KTtcclxuICAgIH1cclxufVxyXG53aW5kb3cudXNlciA9IHt9O1xyXG53aW5kb3cuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5uZXRMZXZlbE51bSA9IDA7XHJcbndpbmRvdy5sZXZlbEluZGV4ID0gMDtcclxud2luZG93LmJnVXJsQmFzZSA9ICcnO1xyXG53aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcbndpbmRvdy5sb2dpbkluZm8gPSB7XHJcbiAgICBhdmF0YXJVcmw6IG51bGwsXHJcbiAgICBuaWNrTmFtZTogbnVsbFxyXG59O1xyXG53aW5kb3cuZ2FtZUNpcmNsZSA9IG51bGw7XHJcblxyXG5pbXBvcnQge3d4TG9naW4sVG9hc3QsTG9hZGluZyxmb3JtYXRlUmFua1RpbWV9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBvbmVTYXlMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5wbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgdmlzaXRvcnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICBtYWluUmFuazogY2MuQnV0dG9uLFxyXG4gICAgICAgIGxldmVsTGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcmV2aWV3TGF5b3V0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgcmV2aWV3TGV2ZWw6IGNjLkJ1dHRvbixcclxuICAgICAgICBidWlsZExldmVsOiBjYy5CdXR0b24sXHJcbiAgICAgICAgc2V0dGluZzogY2MuQnV0dG9uLFxyXG4gICAgICAgIG1haW5TaGFyZTogY2MuQnV0dG9uLFxyXG4gICAgICAgIHJhbmtJdGVtOmNjLlByZWZhYixcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTDpFIENBTExCQUNLUzpcclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvL+WKoOi9veS4gOiogFxyXG4gICAgICAgIC8vICB0aGlzLm9uZVNheSgpO1xyXG4gICAgICAgICB0aGlzLm1haW5CaW5kRXZlbnQoKTtcclxuICAgICAgICAgd2luZG93LmZyb20gPSAnbWFpbic7XHJcbiAgICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLph43mlrDov5Tlm57muLjmiI9cIik7XHJcbiAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiAhd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgd2luZG93LmJnTXVzaWMucGF1c2VkKSB3aW5kb3cuYmdNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgIH0sdGhpcyk7XHJcbiAgICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG5cclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ2V0Q2xhc3NpY3NMZXZlbE51bSdcclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsYXNzaWNzTGV2ZWxOdW0gPSByZXMucmVzdWx0LnRvdGFsO1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJpbml0TGV2ZWxcIlxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLmxvYWRJbWcoKTtcclxuICAgICAgICB0aGlzLm9uZVNheSgpO1xyXG5cclxuICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U2V0dGluZygpO1xyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgbG9hZEltZzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYmluZ0JnJyk7Ly/lm77niYflkYjnjrDkvY3nva5cclxuICAgICAgICB2YXIgaW1nU2VydmVVcmwgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vSFBJbWFnZUFyY2hpdmUuYXNweD9mb3JtYXQ9anMmaWR4PTAmbj0xJztcclxuICAgICAgICB2YXIgaW1nVXJsID0gJyc7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpbWdVcmwgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbScgKyByZXNwb25zZS5pbWFnZXNbMF0udXJsYmFzZSArICdfNzIweDEyODAuanBnJ1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnVXJsQmFzZSA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGltZ1VybCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIm+W7uuS4gOS4quS9v+eUqOWbvueJh+i1hOa6kOeahOaWsOiKgueCueWvueixoVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyTm9kZSA9IG5ldyBjYy5Ob2RlKCk7IC8v5Yib5bu65LiA5Liq5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUubmFtZSA9IFwic3RhcjFcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyU3ByaXRlID0gc3Rhck5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7IC8v5aKe5Yqg57K+54G157uE5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZTsgLy/orr7nva7nsr7ngbXnu4Tku7blm77niYfotYTmupBcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNpemVNb2RlID0gJ0NVU1RPTSc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLndpZHRoID0gY2Mud2luU2l6ZS53aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUubm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJOb2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChzdGFyTm9kZSk7IC8v5Zy65pmv5Lit5aKe5Yqg5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGFjaXR5VGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wYWNpdHk+PTI1NSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG9wYWNpdHlUaW1lcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LDUpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgaW1nU2VydmVVcmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgb25lU2F5KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vdjEuaGl0b2tvdG8uY24vXCI7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGxldCBvbmVTYXlMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvbWFpbkJnL29uZVNheVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9ICBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICBpZih0aGF0Lm9uZVNheUxhYmVsICYmIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwpIHRoYXQub25lU2F5TGFiZWwuc3RyaW5nID0gcmVzcG9uc2UuaGl0b2tvdG8gKyAnIC0tICcgKyAgcmVzcG9uc2UuZnJvbTtcclxuICAgICAgICAgICAgICAgZWxzZSBpZihvbmVTYXlMYWJlbCAmJiBvbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCApIG9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiZ2V0XCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB0aGlzLm9uZVNheUxhYmVsLm5vZGUub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGV0IG5ld1hIUiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBuZXdYSFIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1hIUi5yZWFkeVN0YXRlID09IDQgJiYgKG5ld1hIUi5zdGF0dXMgPj0gMjAwICYmIG5ld1hIUi5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UobmV3WEhSLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhhdC5vbmVTYXlMYWJlbCAmJiB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsKSB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvbmVTYXlMYWJlbCAmJiBvbmVTYXlMYWJlbC5zdHJpbmcgIT0gbnVsbCApIG9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG5ld1hIUi5vcGVuKFwiZ2V0XCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIG5ld1hIUi5zZW5kKCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgIH0sXHJcbiAgICAvL+aOiOadg+eZu+W9leaYvuekuuWFs+WNoeWIl+ihqFxyXG4gICAgbG9naW5MZXZlbExpc3QoKXtcclxuXHJcbiAgICAgICAgd2luZG93LmxvZ2luVHlwZSA9ICd3ZWNoYXQnO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsZXZlbExheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgIH0sXHJcbiAgICAvL+S4jeeZu+W9leeZu+W9leaYvuekuuWFs+WNoeWIl+ihqFxyXG4gICAgdmlzaXRvckxldmVsTGlzdCgpe1xyXG5cclxuICAgICAgICB3aW5kb3cubG9naW5UeXBlID0gJ3Zpc2l0b3InO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsZXZlbExheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGxldmVsTGlzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxMYXlvdXQpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbExpc3QpO1xyXG4gICAgfSxcclxuICAgIHNob3dSZXZpZXdMZXZlbCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciByZXZpZXdQYWdlID0gMSxyZXZpZXdQYWdlU2l6ZSA9IDUwO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gY2MuZmluZCgncmV2aWV3TGV2ZWxMaXN0L3ZpZXcvY29udGVudCcsbmV3TXlQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgY2MuZmluZCgnY2xvc2UnLG5ld015UHJlZmFiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgICAgIGlmKHRoYXQucmFua0l0ZW0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0l0ZW0nLCBmdW5jdGlvbiAoZXJyLHJlc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yYW5rSXRlbSA9IGNjLmluc3RhbnRpYXRlKHJlc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnJlbmRlclJldmlld0xldmVsTGlzdChjb250ZW50LHJldmlld1BhZ2UscmV2aWV3UGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyUmV2aWV3TGV2ZWxMaXN0KGNvbnRlbnQscmV2aWV3UGFnZSxyZXZpZXdQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZmluZCgncmV2aWV3TGV2ZWxMaXN0JyxuZXdNeVByZWZhYikub24oJ2JvdW5jZS1ib3R0b20nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3UGFnZSsrO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJSZXZpZXdMZXZlbExpc3QoY29udGVudCxyZXZpZXdQYWdlLHJldmlld1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmV2aWV3TGF5b3V0Jywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG4gICAgfSxcclxuICAgIHJlbmRlclJldmlld0xldmVsTGlzdChjb250ZW50LHBhZ2UscGFnZVNpemUpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgY3VycmVudEl0ZW1OdW0gPSBjb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlSZXZpZXdMZXZlbCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGk8PSByZXMucmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMucmVzdWx0LmRhdGFbaS0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGF0LnJhbmtJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZFJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkrY3VycmVudEl0ZW1OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkRGF0ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0ZVJhbmtUaW1lKGRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEudXNlU3RlcE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5wb3J0cmFpdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShkYXRhLnBvcnRyYWl0Kyc/YWFhPWFhLmpwZycsICBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSAgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgnbWFzay9JbWFnZScsbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGRQb3J0cmFpdCcpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEubmlja05hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGROYW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBcIitkYXRhLm5pY2tOYW1lK1wiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub24oJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHQpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAncmV2aWV3TGV2ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51cGxvYWRJbmZvID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZnJvbSA9ICdyZXZpZXcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJldmlld0lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mby5hcHBJZCA9IGRhdGEuYXBwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mby5uaWNrTmFtZSA9IGRhdGEubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXBsb2FkSW5mby5wb3J0cmFpdCA9IGRhdGEucG9ydHJhaXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmhlaWdodCA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudCAqIHJhbmtJdGVtLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCIsMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHNob3dNYWluUmFuaygpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciByYW5rUGFnZSA9IDEscmFua1BhZ2VTaXplID0gNTA7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjYy5maW5kKCdyYW5rTGlzdC92aWV3L2NvbnRlbnQnLG5ld015UHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ2Nsb3NlJyxuZXdNeVByZWZhYikub24oXCJjbGlja1wiLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICBpZih0aGF0LnJhbmtJdGVtID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ3JhbmtJdGVtJywgZnVuY3Rpb24gKGVycixyZXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQucmFua0l0ZW0gPSBjYy5pbnN0YW50aWF0ZShyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5yZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxyYW5rUGFnZSxyYW5rUGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVuZGVyTWFpblJhbmtMaXN0KGNvbnRlbnQscmFua1BhZ2UscmFua1BhZ2VTaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGNjLmZpbmQoJ3JhbmtMaXN0JyxuZXdNeVByZWZhYikub24oJ2JvdW5jZS1ib3R0b20nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICByYW5rUGFnZSsrO1xyXG4gICAgICAgICAgICAgICB0aGF0LnJlbmRlck1haW5SYW5rTGlzdChjb250ZW50LHJhbmtQYWdlLHJhbmtQYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygncmFua0xheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXJNYWluUmFua0xpc3QoY29udGVudCxwYWdlLHBhZ2VTaXplKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtTnVtID0gY29udGVudC5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIExvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIExvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmtJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGk8PSByZXMucmVzdWx0LmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9ICByZXMucmVzdWx0LmRhdGFbaS0xXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGF0LnJhbmtJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmFua0l0ZW0gPT0gbnVsbCkgcmFua0l0ZW0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0ZFJhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGkrY3VycmVudEl0ZW1OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkRGF0ZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0ZVJhbmtUaW1lKGRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEubGV2ZWxGaW5pc2hOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEucG9ydHJhaXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUoZGF0YS5wb3J0cmFpdCsnP2FhYT1hYS5qcGcnLCAgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ21hc2svSW1hZ2UnLG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkUG9ydHJhaXQnKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLm5pY2tOYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RkTmFtZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgXCIrZGF0YS5uaWNrTmFtZStcIiBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmhlaWdodCA9IGNvbnRlbnQuY2hpbGRyZW5Db3VudCAqIHJhbmtJdGVtLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KFwi5rKh5pyJ5pu05aSa5pWw5o2u5LqGXCIsMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRVc2VySW5mbygpe1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAvL+iOt+WPlue8k+WtmGFwcElk5Yik5pat5piv5ZCm56ys5LiA5qyh6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnYXBwSWQnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmFwcElkID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1ZXJ5VXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0LmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0ubGV2ZWxGaW5pc2hOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5jbGFzc2ljc0xldmVsTnVtID0gcmVzLnJlc3VsdC5kYXRhWzBdLmNsYXNzaWNzTGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5uZXRMZXZlbE51bSA9IHJlcy5yZXN1bHQuZGF0YVswXS5uZXRMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLnJvbGVzID0gcmVzLnJlc3VsdC5kYXRhWzBdLnJvbGVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZXJyKXtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsb2dpbidcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcyAmJiByZXMucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhcHBJZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6cmVzLnJlc3VsdC5vcGVuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5hcHBJZCA9IHJlcy5yZXN1bHQub3BlbmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIuY2xhc3NpY3NMZXZlbE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5uZXRMZXZlbE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5sZXZlbEZpbmlzaE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudXNlci5yb2xlcyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guY2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVlcnlVc2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLnJlc3VsdC5kYXRhLmxlbmd0aDw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5rOo5YaM55So5oi35L+h5oGvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkVXNlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IHdpbmRvdy51c2VyLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lPyB3aW5kb3cubG9naW5JbmZvLm5pY2tOYW1lOifmuLjlrqInK3dpbmRvdy51c2VyLmFwcElkLnN1YnN0cmluZyh3aW5kb3cudXNlci5hcHBJZC5sZW5ndGgtNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydHJhaXQ6IHdpbmRvdy5sb2dpbkluZm8uYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubGV2ZWxGaW5pc2hOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0ubGV2ZWxGaW5pc2hOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLmNsYXNzaWNzTGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0uY2xhc3NpY3NMZXZlbE51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnVzZXIubmV0TGV2ZWxOdW0gPSByZXMucmVzdWx0LmRhdGFbMF0ubmV0TGV2ZWxOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy51c2VyLnJvbGVzID0gcmVzLnJlc3VsdC5kYXRhWzBdLnJvbGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWFpbkJpbmRFdmVudCgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAvL+a3u+WKoOaOiOadg+aMiemSrlxyXG4gICAgICAgIHd4TG9naW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9naW5JbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsOiByZXMuYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgbmlja05hbWU6IHJlcy5uaWNrTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmjojmnYPlpLHotKUnKVxyXG4gICAgICAgIH0sdGhpcy5sb2dpbnBsYXkubm9kZSk7XHJcbiAgICAgICAgLy/lvIDlp4vmuLjmiI/mjInpkq5cclxuICAgICAgICBpZih0aGlzLmxvZ2lucGxheSA9PSBudWxsKSB0aGlzLmxvZ2lucGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvbG9naW5wbGF5JykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLmxvZ2lucGxheS5ub2RlLm9uKCdjbGljaycsIHRoaXMubG9naW5MZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy52aXNpdG9ycGxheSA9PSBudWxsKSB0aGlzLnZpc2l0b3JwbGF5ID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy92aXNpdG9ycGxheScpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy52aXNpdG9ycGxheS5ub2RlLm9uKCdjbGljaycsIHRoaXMudmlzaXRvckxldmVsTGlzdCwgdGhpcylcclxuICAgICAgICBpZih0aGlzLm1haW5SYW5rID09IG51bGwpIHRoaXMubWFpblJhbmsgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL21haW5SYW5rJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLm1haW5SYW5rLm5vZGUub24oJ2NsaWNrJywgdGhpcy5zaG93TWFpblJhbmssIHRoaXMpXHJcblxyXG4gICAgICAgIGlmKHRoaXMucmV2aWV3TGV2ZWwgPT0gbnVsbCkgdGhpcy5yZXZpZXdMZXZlbCA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvcmV2aWV3TGV2ZWwnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgIHRoaXMucmV2aWV3TGV2ZWwubm9kZS5vbignY2xpY2snLCB0aGlzLnNob3dSZXZpZXdMZXZlbCwgdGhpcylcclxuXHJcbiAgICAgICAgaWYodGhpcy5idWlsZExldmVsID09IG51bGwpIHRoaXMuYnVpbGRMZXZlbCA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYnVpbGRMZXZlbCcpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5idWlsZExldmVsLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYnVpbGRMZXZlbCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cud3hMb2dpbkJ0biApIHdpbmRvdy53eExvZ2luQnRuLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiYnVpbGRcIik7XHJcblxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgaWYodGhpcy5tYWluU2hhcmUgPT0gbnVsbCkgdGhpcy5tYWluU2hhcmUgPSBjYy5maW5kKCdDYW52YXMvbWFpbkJnL21haW5TaGFyZScpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHRoaXMubWFpblNoYXJlLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRTdHJpbmcgPSAgJ+W/q+adpeaMkeaImOKAnOebiuaZuuaOqOeuseKAneWwj+a4uOaIj+WQp++8gSc7XHJcbiAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IGRhdGEudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAn5YiG5LqrJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBpZih0aGlzLnNldHRpbmcgPT0gbnVsbCkgdGhpcy5zZXR0aW5nID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9zZXR0aW5nJykuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nLm5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIENhbnZhc05vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBsb2FkZWRSZXNvdXJjZSApO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vY2xvc2VTZXR0aW5nJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2hNb3ZlID0gY2MuZmluZCgnc2V0dGluZ0NvbnRhaW4vdG91Y2hNb3ZlL0JhY2tncm91bmQvTGFiZWwnLG5ld015UHJlZmFiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrTW92ZSA9IGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZS9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgICAgIGxldCByZWxhc3QgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QvQmFja2dyb3VuZC9MYWJlbCcsbmV3TXlQcmVmYWIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXVzaWMgPSBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9tdXNpYy9CYWNrZ3JvdW5kL0xhYmVsJyxuZXdNeVByZWZhYikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUpIHRvdWNoTW92ZS5zdHJpbmcgPSAn5YWz6Zet6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHRvdWNoTW92ZS5zdHJpbmcgPSAn5byA5ZCv6Kem5pG456e75YqoJztcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSkgY2xpY2tNb3ZlLnN0cmluZyA9ICflhbPpl63mjInplK7np7vliqgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCc7XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuc2V0dGluZy5yZWxhc3QpIHJlbGFzdC5zdHJpbmcgPSAn5YWz6Zet5Zue6YCA5Yqf6IO9JztcclxuICAgICAgICAgICAgICAgIGVsc2UgcmVsYXN0LnN0cmluZyA9ICflvIDlkK/lm57pgIDlip/og70nO1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LnNldHRpbmcubXVzaWMpIG11c2ljLnN0cmluZyA9ICflhbPpl63pn7PmlYgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBtdXNpYy5zdHJpbmcgPSAn5byA5ZCv6Z+z5pWIJztcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi90b3VjaE1vdmUnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG4JueCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlLnN0cmluZyA9ICflvIDlkK/op6bmkbjnp7vliqgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kem5pG45YWz6ZetIOeCueWHu+W8gOWQr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoIXJlcy5kYXRhLnRvdWNoTW92ZSAmJiByZXMuZGF0YS5jbGlja01vdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZy50b3VjaE1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE1vdmUuc3RyaW5nID0gJ+WFs+mXreinpuaRuOenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mj5DnpLroh7PlsJHlvIDlkK/kuIDnp43np7vliqjmlrnlvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8jyEnLDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL2NsaWNrTW92ZScsbmV3TXlQcmVmYWIpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRTdG9yYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbgm54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEudG91Y2hNb3ZlICYmIHJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmUuc3RyaW5nID0gJ+W8gOWQr+aMiemUruenu+WKqCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/op6bmkbjlhbPpl60g54K55Ye75byA5ZCvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihyZXMuZGF0YS50b3VjaE1vdmUgJiYgIXJlcy5kYXRhLmNsaWNrTW92ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLmNsaWNrTW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrTW92ZS5zdHJpbmcgPSAn5YWz6Zet5oyJ6ZSu56e75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aPkOekuuiHs+WwkeW8gOWQr+S4gOenjeenu+WKqOaWueW8j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6Iez5bCR5byA5ZCv5LiA56eN56e75Yqo5pa55byPIScsMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdzZXR0aW5nQ29udGFpbi9yZWxhc3QnLG5ld015UHJlZmFiKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WbnumAgOWKn+iDvVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnJlbGFzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLnJlbGFzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhc3Quc3RyaW5nID0gJ+W8gOWQr+WbnumAgOWKn+iDvSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldHRpbmcucmVsYXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXN0LnN0cmluZyA9ICflhbPpl63lm57pgIDlip/og70nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6J3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOndpbmRvdy5zZXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3NldHRpbmdDb250YWluL211c2ljJyxuZXdNeVByZWZhYikub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OidzZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lm57pgIDlip/og71cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5tdXNpYyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljLnN0cmluZyA9ICflvIDlkK/pn7PmlYgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nLm11c2ljID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVzaWMuc3RyaW5nID0gJ+WFs+mXremfs+aViCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTonc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6d2luZG93LnNldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LHRoaXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdzZXR0aW5nRGlhbG9nJywgb25SZXNvdXJjZUxvYWRlZCApO1xyXG5cclxuICAgICAgICAgICAgfSwgdGhpcylcclxuXHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiAhd2luZG93LmdhbWVDaXJjbGUpe1xyXG4gICAgICAgICAgICBsZXQgc3lzSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgICAgIC8v5ri45oiP5ZyI5oyJ6ZKuXHJcbiAgICAgICAgICAgIHdpbmRvdy5nYW1lQ2lyY2xlID0gIHd4LmNyZWF0ZUdhbWVDbHViQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGljb246ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IChzeXNJbmZvLndpbmRvd1dpZHRoKjAuOSktMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzeXNJbmZvLndpbmRvd0hlaWdodCowLjEyLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG4gICAgaW5pdFNldHRpbmcoKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHd4LmdldFN0b3JhZ2Uoe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnc2V0dGluZycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXR0aW5nID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0dGluZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja01vdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGFzdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11c2ljOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB3aW5kb3cuc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGUoKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNldE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldE11c2ljKCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtICE9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYod2luZG93LnNldHRpbmcubXVzaWMpe1xyXG4gICAgICAgICAgICBpZighd2luZG93LmJnTXVzaWMgfHwgIXdpbmRvdy5tb3ZlTXVzaWMpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnTXVzaWMgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYyA9IHd4LmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KHt1c2VXZWJBdWRpb0ltcGxlbWVudDp0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcIm11c2ljL2JnX211c2ljXCIsIGNjLkF1ZGlvQ2xpcCwgbnVsbCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5iZ011c2ljLnNyYyA9Y2xpcC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmJnTXVzaWMubG9vcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMgJiYgIXdpbmRvdy5iZ011c2ljLnBhdXNlZCkgd2luZG93LmJnTXVzaWMucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih3aW5kb3cuYmdNdXNpYyAmJiB3aW5kb3cuYmdNdXNpYy5wYXVzZWQpIHdpbmRvdy5iZ011c2ljLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJtdXNpYy9tb3ZlX211c2ljXCIsIGNjLkF1ZGlvQ2xpcCwgbnVsbCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMuc3JjID1jbGlwLnVybDtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLmxvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLnBsYXliYWNrUmF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYod2luZG93LmJnTXVzaWMpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnTXVzaWMuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnTXVzaWMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5tb3ZlTXVzaWMpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1vdmVNdXNpYy5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubW92ZU11c2ljLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cuYmdNdXNpYyA9IG51bGw7XHJcbiAgICAgICAgICAgIHdpbmRvdy5tb3ZlTXVzaWMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
