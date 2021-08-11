// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  event.createTime = Date.now()
  return await db.collection("classicsLevelScore").where({appId: event.appId}).update({
    data:event
  }) 
  
  /*
    // 单条更新数据，把  _id=e62469b25fcde25c010afdaa0a33b0ea  的年龄更改为20岁
    return await db.collection("user_base").doc('e62469b25fcde25c010afdaa0a33b0ea').update({
      data:{
        age:20
      }
    }) 
  */
  
}
