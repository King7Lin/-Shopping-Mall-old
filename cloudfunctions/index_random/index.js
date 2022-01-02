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

  let arr=[]
  let res = await book.get()
  console.log(res.data.length)
  let arr0 = res.data
  for(let i=0;i<10;i++){
    let num =Math.floor(Math.random()*arr0.length)
    if(res.data[num]){
      arr.push(arr0[num])
      arr0.splice(num,1)
    }
  }
  return {
    arr
  }
}