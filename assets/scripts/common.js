/**
 * wx授权登陆
 * @param _success 登陆成功返回回调 第一个参数是wx用户信息
 * @param _fail 拒绝授权返回
 */
export function wxLogin(_success, _fail,node) {
    if (cc.sys.platform !== cc.sys.WECHAT_GAME) return;
    //微信登陆
    const wx = window['wx'];//避开ts语法检测
    const info  = wx.getSystemInfoSync();//立即获取系统信息
    const w  = info.screenWidth;//屏幕宽
    const h  = info.screenHeight;//屏幕高
    const eleW = (node.width*2/1080) * w;
    const eleH = (node.height*2/2400) * h;
    const left = w/2 - eleW/2;
    const top = h/2 - eleH/2 - (node.y/2400)*h+((node.y/2400)*h)*0.25;

    //获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
    wx.getSetting(
        {
            success(res) {
                if (res.authSetting["scope.userInfo"]) {
                    wx.getUserInfo({
                        success(res) {
                            //登陆操作
                            // userInfo = res.userInfo;
                            _success && _success(res.userInfo);
                        }
                    });
                    return false;
                } else {

                    //创建全屏透明登陆按钮
                    let button = wx.createUserInfoButton({
                        type: 'text',
                        text: '',
                        style: {
                            left: parseInt(left),
                            top: parseInt(top),
                            width: parseInt(eleW),
                            height: parseInt(eleH),
                            backgroundColor: '#00000000',//最后两位为透明度
                            color: '#ffffff',
                            fontSize: 20,
                            textAlign: "center",
                            lineHeight: parseInt(eleH),
                        }
                    });

                    button.onTap((res) => {
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

        }
    );
}

export function Toast(text,time) {
    var CanvasNode = cc.find('Canvas');
    if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
    const wx = window['wx'];//避开ts语法检测
    const info  = wx.getSystemInfoSync();//立即获取系统信息
    const w  = info.screenWidth;//屏幕宽
    const h  = info.screenHeight;//屏幕高
    var onResourceLoaded = function(errorMessage, loadedResource )
    {
        if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
        if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
        var newMyPrefab = cc.instantiate( loadedResource );
        let toastBg = cc.find('background',newMyPrefab).getComponent(cc.Graphics);
        let toastText =  cc.find("text",newMyPrefab);



        toastText.getComponent(cc.Label).string = text;
        CanvasNode.addChild( newMyPrefab );
        toastBg.roundRect(
            -( toastText.width + 80)/2,
            -(toastText.height+40)/2,
            toastText.width + 80,
            toastText.height+40,
            (toastText.height+40)/2
        );
        toastBg.fillColor = cc.Color.BLACK;
        toastBg.fill()
        let timer = setTimeout(function () {
            newMyPrefab.removeFromParent();
            newMyPrefab.destroy();
            clearTimeout(timer);
            timer = null;
        },time)
    };
    cc.loader.loadRes('toast', onResourceLoaded );
}
let Loading ={
    ele:null,
    hideFlage:false,
    show(){
        Loading.hideFlage = false;
        var CanvasNode = cc.find('Canvas');
        if( !CanvasNode ) { cc.console( 'find Canvas error' ); return; }
        var onResourceLoaded = function(errorMessage, loadedResource )
        {
            if( errorMessage ) { console.log( 'Prefab error:' + errorMessage ); return; }
            if( !( loadedResource instanceof cc.Prefab ) ) { console.log( 'Prefab error' ); return; }
            var newMyPrefab = cc.instantiate( loadedResource );

            if(!Loading.hideFlage){
                CanvasNode.addChild( newMyPrefab );
                Loading.ele = newMyPrefab;
            }else{
                newMyPrefab.destroy();
            }


        };
        cc.loader.loadRes('loading', onResourceLoaded );
    },
    hide(){
        if(Loading.ele){
            Loading.ele.removeFromParent();
            Loading.ele.destroy();
            Loading.ele = null;
        }
        Loading.hideFlage = true;
    }
}
export {Loading};
export function formateRankTime(timestamp){
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + '\n';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    if(h.length<=1) h = '0'+h;
    if(m.length<=1) m = '0'+m;
    if(s.length<=1) s = '0'+s;

    return Y+M+D+h+m+s;
}
