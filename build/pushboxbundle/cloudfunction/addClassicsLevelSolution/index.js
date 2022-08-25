// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  //插入数据
  return await db.collection('classicsLevelSolution').add ({
    data: {
      content: event.content, 
      contentFile: event.contentFile,
      levelIndex: event.levelIndex, 
      appId: event.appId, 
      useStep: event.useStep,
      useTime: event.useTime,
      nickName: event.nickName,
      portrait: event.portrait,
      createTime: Date.now()
    }
  })  
}