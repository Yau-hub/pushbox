// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  var filter = {};
  if(event.appId) filter.appId = event.appId;
  if(!event.page) event.page = 1;
  if(!event.pageSize) event.pageSize = 50;
  return await db.collection('user')
  .orderBy('levelFinishNum', 'desc')
  .orderBy('createTime', 'asc')
  .where( filter )
  .skip((event.page - 1) * event.pageSize) // 跳过结果集中的前 10 条，从第 11 条开始返回
  .limit(event.pageSize) // 限制返回数量为 10 条
  .get()    //查询数据并返回给前端  
}