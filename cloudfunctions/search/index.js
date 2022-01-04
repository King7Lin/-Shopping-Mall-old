// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  const db=cloud.database()
  const book = db.collection('book')

  //输入框的值
  const name = event.searchtext
  console.log(event.searchtext)
  let res = await book.where({
    name:{
      $regex:'.*'+event.searchtext+'.*',
      $options:'i'
    }
  }).get()

  // await db.collection('history')
  //   .doc('54ad1eea61d29198029773f31b802ac6')
  //   .update({
  //     data: {
  //       names: _.addToSet(name)
  //     }
  //   })

  return {
    res,
  }
}