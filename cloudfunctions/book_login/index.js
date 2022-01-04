// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    let openid = wxContext.OPENID
    const db = cloud.database()
    const userCollection = db.collection('user')
    let res = await userCollection.where({
      openid:openid
    }).get()
    console.log(res)
    if(res.data.length>0){
      result = res.data[0]
    }else{
      result = {name:'nobody'}
    }
  
    return {
      result
    }
}