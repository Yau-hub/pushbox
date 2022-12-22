// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  console.log(event)
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        "touser": event.openId,
        "page": 'index',
        "lang": 'zh_CN',
        "data": {
          "thing1": {
            "value": event.msgTitle
          },
          "thing2": {
            "value": event.msgContent
          },
          "time3": {
            "value": event.uploadDate
          },
          
        },
        "templateId": 'bQJbF0VLKfsMdYOaIplnfY0sErvIbZcK8sCzLgshILA',
        "miniprogramState": 'formal'
      })
    return result
  } catch (err) {
    return err
  }
}