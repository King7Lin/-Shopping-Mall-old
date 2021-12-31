// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env:'lin-0gd1s4ir5c7fcba1'
  })


// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const db=cloud.database()
    const find_address = db.collection('address')
    // const $ = db.command.aggregate
    let get_address = await find_address.get()
    console.log(get_address);
    return {
        get_address
    }
}