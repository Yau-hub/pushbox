// 云函数入口文件
const cloud = require('./node_modules/wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  var filter = event ? event : {} ;  //筛选条件，默认为空，格式 {key:'values'}  
  return await db.collection('user_base').where( event ).get()    //查询数据并返回给前端  
}
