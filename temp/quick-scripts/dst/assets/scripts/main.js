
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

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    oneSayLabel: {
      "default": null,
      type: cc.Label
    },
    loginplay: cc.Button,
    visitorplay: cc.Button,
    levelLayout: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //加载一言
    this.oneSay(); //开始游戏按钮

    if (this.loginplay == null) this.loginplay = cc.find('Canvas/mainBg/loginplay').getComponent(cc.Button);
    this.loginplay.node.on('click', this.loginLevelList, this);
    if (this.visitorplay == null) this.visitorplay = cc.find('Canvas/mainBg/visitorplay').getComponent(cc.Button);
    this.visitorplay.node.on('click', this.visitorLevelList, this);
  },
  start: function start() {
    var that = this;
    this.loadImg();
    setInterval(function () {
      that.oneSay();
    }, 10000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uZVNheUxhYmVsIiwidHlwZSIsIkxhYmVsIiwibG9naW5wbGF5IiwiQnV0dG9uIiwidmlzaXRvcnBsYXkiLCJsZXZlbExheW91dCIsIlByZWZhYiIsIm9uTG9hZCIsIm9uZVNheSIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJub2RlIiwib24iLCJsb2dpbkxldmVsTGlzdCIsInZpc2l0b3JMZXZlbExpc3QiLCJzdGFydCIsInRoYXQiLCJsb2FkSW1nIiwic2V0SW50ZXJ2YWwiLCJjb250YWluZXIiLCJpbWdTZXJ2ZVVybCIsImltZ1VybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaW1hZ2VzIiwidXJsYmFzZSIsIndpbmRvdyIsImJnVXJsQmFzZSIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJlcnIiLCJ0ZXh0dXJlIiwic3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSIsInN0YXJOb2RlIiwiTm9kZSIsIm5hbWUiLCJzZXRQb3NpdGlvbiIsInN0YXJTcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzaXplTW9kZSIsIndpZHRoIiwid2luU2l6ZSIsImhlaWdodCIsImFkZENoaWxkIiwib3BlbiIsInNlbmQiLCJ1cmwiLCJzdHJpbmciLCJoaXRva290byIsImZyb20iLCJsb2dpblR5cGUiLCJDYW52YXNOb2RlIiwiY29uc29sZSIsIm9uUmVzb3VyY2VMb2FkZWQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkZWRSZXNvdXJjZSIsImxvZyIsIm5ld015UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJsb2FkZXIiLCJsb2FkUmVzIl0sIm1hcHBpbmdzIjoi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QUFBK0I7QUFBUzs7QUFDekYsVUFBSUMsV0FBVyxHQUFHeEUsRUFBRSxDQUFDeUUsV0FBSCxDQUFnQkgsY0FBaEIsQ0FBbEI7QUFDQUosTUFBQUEsVUFBVSxDQUFDUixRQUFYLENBQXFCYyxXQUFyQjtBQUNILEtBTkQ7O0FBT0F4RSxJQUFBQSxFQUFFLENBQUMwRSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUNQLGdCQUFqQyxFQVhjLENBYWQ7QUFDQTtBQUNIO0FBekhJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBvbmVTYXlMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5wbGF5OiBjYy5CdXR0b24sXHJcbiAgICAgICAgdmlzaXRvcnBsYXk6IGNjLkJ1dHRvbixcclxuICAgICAgICBsZXZlbExheW91dDogY2MuUHJlZmFiXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8v5Yqg6L295LiA6KiAXHJcbiAgICAgICAgIHRoaXMub25lU2F5KCk7XHJcbiAgICAgICAgIC8v5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgIGlmKHRoaXMubG9naW5wbGF5ID09IG51bGwpIHRoaXMubG9naW5wbGF5ID0gY2MuZmluZCgnQ2FudmFzL21haW5CZy9sb2dpbnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgICB0aGlzLmxvZ2lucGxheS5ub2RlLm9uKCdjbGljaycsIHRoaXMubG9naW5MZXZlbExpc3QsIHRoaXMpXHJcbiAgICAgICAgIGlmKHRoaXMudmlzaXRvcnBsYXkgPT0gbnVsbCkgdGhpcy52aXNpdG9ycGxheSA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvdmlzaXRvcnBsYXknKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxyXG4gICAgICAgICB0aGlzLnZpc2l0b3JwbGF5Lm5vZGUub24oJ2NsaWNrJywgdGhpcy52aXNpdG9yTGV2ZWxMaXN0LCB0aGlzKVxyXG4gICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkSW1nKCk7XHJcblxyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5vbmVTYXkoKTtcclxuICAgICAgICB9LDEwMDAwKVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgbG9hZEltZzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNjLmZpbmQoJ0NhbnZhcy9tYWluQmcvYmluZ0JnJyk7Ly/lm77niYflkYjnjrDkvY3nva5cclxuICAgICAgICB2YXIgaW1nU2VydmVVcmwgPSAnaHR0cHM6Ly93d3cuYmluZy5jb20vSFBJbWFnZUFyY2hpdmUuYXNweD9mb3JtYXQ9anMmaWR4PTAmbj0xJztcclxuICAgICAgICB2YXIgaW1nVXJsID0gJyc7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpbWdVcmwgPSAnaHR0cHM6Ly9jbi5iaW5nLmNvbScgKyByZXNwb25zZS5pbWFnZXNbMF0udXJsYmFzZSArICdfNzIweDEyODAuanBnJ1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmJnVXJsQmFzZSA9ICdodHRwczovL2NuLmJpbmcuY29tJyArIHJlc3BvbnNlLmltYWdlc1swXS51cmxiYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGltZ1VybCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcHJpdGUgID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WIm+W7uuS4gOS4quS9v+eUqOWbvueJh+i1hOa6kOeahOaWsOiKgueCueWvueixoVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyTm9kZSA9IG5ldyBjYy5Ob2RlKCk7IC8v5Yib5bu65LiA5Liq5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgc3Rhck5vZGUubmFtZSA9IFwic3RhcjFcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGFyTm9kZS5zZXRQb3NpdGlvbigwLDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFyU3ByaXRlID0gc3Rhck5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7IC8v5aKe5Yqg57K+54G157uE5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZTsgLy/orr7nva7nsr7ngbXnu4Tku7blm77niYfotYTmupBcclxuICAgICAgICAgICAgICAgICAgICBzdGFyU3ByaXRlLnNpemVNb2RlID0gJ0NVU1RPTSc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhclNwcml0ZS5ub2RlLndpZHRoID0gY2Mud2luU2l6ZS53aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcHJpdGUubm9kZS5oZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChzdGFyTm9kZSk7IC8v5Zy65pmv5Lit5aKe5Yqg5paw6IqC54K5XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLm9wZW4oXCJnZXRcIiwgaW1nU2VydmVVcmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgb25lU2F5KCl7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHBzOi8vdjEuaGl0b2tvdG8uY24vXCI7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGxldCBvbmVTYXlMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvbWFpbkJnL29uZVNheVwiKS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSAgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgaWYodGhhdC5vbmVTYXlMYWJlbCAmJiB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyAhPSBudWxsKSB0aGF0Lm9uZVNheUxhYmVsLnN0cmluZyA9IHJlc3BvbnNlLmhpdG9rb3RvICsgJyAtLSAnICsgIHJlc3BvbnNlLmZyb207XHJcbiAgICAgICAgICAgICAgIGVsc2UgaWYob25lU2F5TGFiZWwgJiYgb25lU2F5TGFiZWwuc3RyaW5nICE9IG51bGwgKSBvbmVTYXlMYWJlbC5zdHJpbmcgPSByZXNwb25zZS5oaXRva290byArICcgLS0gJyArICByZXNwb25zZS5mcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgLy/mjojmnYPnmbvlvZXmmL7npLrlhbPljaHliJfooahcclxuICAgIGxvZ2luTGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgd2luZG93LmxvZ2luVHlwZSA9ICd3ZWNoYXQnO1xyXG4gICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCgnQ2FudmFzJyk7XHJcbiAgICAgICAgaWYoICFDYW52YXNOb2RlICkgeyBjYy5jb25zb2xlKCAnZmluZCBDYW52YXMgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgIHZhciBvblJlc291cmNlTG9hZGVkID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiggZXJyb3JNZXNzYWdlICkgeyBjb25zb2xlLmxvZyggJ1ByZWZhYiBlcnJvcjonICsgZXJyb3JNZXNzYWdlICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiggISggbG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3InICk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICB2YXIgbmV3TXlQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSggbG9hZGVkUmVzb3VyY2UgKTtcclxuICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsZXZlbExheW91dCcsIG9uUmVzb3VyY2VMb2FkZWQgKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGxldmVsTGlzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGV2ZWxMYXlvdXQpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZChsZXZlbExpc3QpO1xyXG4gICAgfSxcclxuICAgIC8v5LiN55m75b2V55m75b2V5pi+56S65YWz5Y2h5YiX6KGoXHJcbiAgICB2aXNpdG9yTGV2ZWxMaXN0KCl7XHJcbiAgICAgICAgd2luZG93LmxvZ2luVHlwZSA9ICd2aXNpdG9yJztcclxuICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIGlmKCAhQ2FudmFzTm9kZSApIHsgY2MuY29uc29sZSggJ2ZpbmQgQ2FudmFzIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICB2YXIgb25SZXNvdXJjZUxvYWRlZCA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY29uc29sZS5sb2coICdQcmVmYWIgZXJyb3I6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYoICEoIGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuUHJlZmFiICkgKSB7IGNvbnNvbGUubG9nKCAnUHJlZmFiIGVycm9yJyApOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIGxvYWRlZFJlc291cmNlICk7XHJcbiAgICAgICAgICAgIENhbnZhc05vZGUuYWRkQ2hpbGQoIG5ld015UHJlZmFiICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbGV2ZWxMYXlvdXQnLCBvblJlc291cmNlTG9hZGVkICk7XHJcblxyXG4gICAgICAgIC8vIGxldCBsZXZlbExpc3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxldmVsTGF5b3V0KTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobGV2ZWxMaXN0KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==