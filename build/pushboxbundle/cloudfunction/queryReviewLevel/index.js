// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  var filter = {};
  if(event.levelIndex) filter.levelIndex = parseInt(event.levelIndex);
  if(!event.page) event.page = 1;
  if(!event.pageSize) event.pageSize = 1;
  return await db.collection('reviewLevel')
  .orderBy('levelIndex', 'asc')
  .where( filter )
  .skip((event.page - 1) * event.pageSize) 
  .limit(event.pageSize)
  .get()    //查询数据并返回给前端  
}