// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'lin-0gd1s4ir5c7fcba1'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db=cloud.database()
  const detail = db.collection('book')
  return await detail.where({_id:event.id}).get()
}