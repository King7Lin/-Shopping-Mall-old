// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const db = cloud.database()
  const usercollection = db.collection('user')
  let login=false

  // let openid = wxContext.OPENID
console.log('event',event)
let {phoneNumber,password} = event
console.log(phoneNumber)
let res = await usercollection.where({
    phoneNumber:phoneNumber,
    password:password
}).get()
if(res.data[0]){
  login=true
}
console.log('res',res)

// let user = {}
// let reg = 'ok'
// let errMsg = ''
// if(res.data.length==0){
//   reg = 'err'
//   errMsg='没有找到匹配的学号姓名，请核实'
// }else{
//   let {_id} = res.data[0]
//   let student = res.data[0]
//   if(!res.data[0].nickName){
//     res = usercollection.doc(_id).update({
//       data:{
//         nickName,avatarUrl,openid
//       }
//     })
//     user = {...student,nickName,avatarUrl,openid}
//   }else{
//     reg = 'err'
//     errMsg = '学号：'+phoneNumber+'已被'+res.data[0].nickName+'绑定。'
//   }
// }
return{
  login
}
}