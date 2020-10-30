// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event,"这是event")
  console.log(context,"则是context")
  return {
    data: event.a + event.b
  }
}
