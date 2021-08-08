// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('classicsLevel').where( {levelIndex:parseInt(event.levelIndex)} ).get()    //查询数据并返回给前端  
}