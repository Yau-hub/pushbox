// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  event.createTime = Date.now()
  return await db.collection("classicsLevelScore")
  .where({appId: event.appId,levelIndex:event.levelIndex})
  .update({
    data:event
  }) 

  
}
