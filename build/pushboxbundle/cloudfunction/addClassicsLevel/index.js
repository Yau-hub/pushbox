// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  //插入数据
  return await db.collection('classicsLevel').add ({
    data: {
      content: event.content, 
      levelIndex: event.levelIndex, 
      // levelIndex:db.command.inc(1),
      createTime: Date.now()
    }
  })  
}
