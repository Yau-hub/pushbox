// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  //插入数据
   let json = event;
   let cloudPath = event.levelIndex + 'levelSolution.json'
   let buffer = Buffer.from(JSON.stringify(json),'utf8');
   return await cloud.uploadFile({
    cloudPath:cloudPath,
    fileContent:buffer
   })

}
