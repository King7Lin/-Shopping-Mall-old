// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'lin-0gd1s4ir5c7fcba1'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const db=cloud.database()
  const book = db.collection('book')
  // const $ = db.command.aggregate
  // let res = await book.get()

  let res = await book.aggregate()
  .sort({
    time:1
  })
  .limit(10)
  .end()
  console.log(res)
  return {
    Tbook:res.list
  }
}