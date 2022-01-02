// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db=cloud.database()
  const send = db.collection('book')
  console.log(event)
  return await send.add({
    data:{
      name:event.name,
      type:event.type,
      detail:event.src,
      money:event.price,
      author:event.author,
      url:'/page/DetailPage/Detail',
      time:db.serverDate()
    }
  })
}