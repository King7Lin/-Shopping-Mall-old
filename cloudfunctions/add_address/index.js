// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env:'lin-0gd1s4ir5c7fcba1'
  })

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const db=cloud.database()
    const address = db.collection('address')
    return await address.add({
        data:{
            consignee:event.consignee,
            transportDay:event.transportDay,
            mobile:event.mobile,
            address:event.address,
            transportValues:'广东机电职业技术学院'
        }
    })
    
}