// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  //插入数据
  return await db.collection('user').doc(event.appId).update({
    // data 为 users 集合内我要修改的内容 lover 为字段名 event.lover 为要修改成的内容
    data: {
      appId: event.appId, 
      openId: event.openId,
      levelFinishNum: 0,
      levelFinishTime: 0,
      classicsLevelNum: 0,
      netLevelNum: 0,
      unionId: null,
      nickName: null,
      portrait: null,
    }
  })

}