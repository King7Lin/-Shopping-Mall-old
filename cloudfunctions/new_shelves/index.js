// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db=cloud.database()
  const book = db.collection('book')

  let newbook = await book.get()
  const $ = db.command.aggregate
  let res = await book.aggregate()
  .sort({
    time:-1
  })
  .limit(12)
  .end()
  return {
    newbook:res.list
  }
}