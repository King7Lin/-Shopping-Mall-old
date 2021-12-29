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
  let book1 = await book.get()
  let res = await book.aggregate()
  .group({
    _id:'$type'
  })
  .end()
  console.log(res)
  // console.log(book1)
  let list = res.list
  let type=[]
  let books=[]
  console.log(list[1]._id)
  // console.log(list[1]._id)
  for(let j=0;j<list.length;j++){
    for(let i=0;i<book1.data.length;i++){
      if(book1.data[i].type==list[j]._id){
        console.log()
        type.push(book1.data[i])
        console.log(book1.data[i].type)
      }
    }
    books.splice(books.length,0,type)
    type=[]
  }
  console.log(books)
  return {
    books,
    list
  }
}