Page({
  data: {
    background:[
      {src:'../images/11.jpeg'},
      {src:'../images/22.jpeg'},
      {src:'../images/33.jpeg'},
    ],
    // navbars:[
    //   '热门推荐',
    //   '压箱好书',
    // ],
    currentTab: 0,
    active:null,
    carTab:null,
    curIndex:0,
  },
  async onLoad(){
    let book=[]
    let navbars=[]
    let hot = await wx.cloud.callFunction({
      name:'index_random'
    })
    console.log(hot)
    book.push(hot.result.arr)
    navbars.push('热门推荐')
    let Tbook = await wx.cloud.callFunction({
      name:'index_time'
    })
    console.log(Tbook)
    book.push(Tbook.result.Tbook)
    navbars.push('压箱好书')
    let books = await wx.cloud.callFunction({
      name:'index'
    })
    console.log(books)
    for(let i=0;i<books.result.books.length;i++){
      book.push(books.result.books[i])
      navbars.push(books.result.list[i]._id)
    }
    this.setData({
      book,
      navbars
    })
  },
  goSearch(){ //搜索框跳转
    wx.navigateTo({
      url: '/page/search/index'
    })
  },
  bindchange(e){  //轮播字体
    let index =e.detail.current
    let content=this.data.background[index].content
    this.setData({
      content
    })
  },
    // 导航切换监听
    navbarTap: function (e) {
      // console.debug(e);
      this.setData({
        currentTab: e.currentTarget.dataset.idx,
        curIndex:e.currentTarget.dataset.idx,
      })
    },
    
})