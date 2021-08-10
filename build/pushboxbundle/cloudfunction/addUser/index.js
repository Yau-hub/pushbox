// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  //插入数据
  return await db.collection('user').add ({
    data: {
      appId: event.appId, 
      levelFinishNum: 0,
      levelFinishTime: 0,
      classicsLevelNum: 0,
      netLevelNum: 0,
      unionId: null,
      nickName: null,
      portrait: null,
      createTime: Date.now()
    }
  })  
}
/*
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,

    nickname: 微信名
    portrait: 头像

    levelfinishnum: 关卡完成数
    levelfinishtime: 关卡完成用时

    classicslevelnum: 经典关卡完成数
    netlevelnum: 网友自制关卡完成数


*/