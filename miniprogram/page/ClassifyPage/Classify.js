Page({
    data: {
      curNav: 1,
      curIndex: 0
    },
  async onShow(){
    wx.showLoading({
      title: '正在加载中',
    })
    let type = []
    let items = []
    wx.showLoading({
      title: '正在加载中',
    })
    let hot = await wx.cloud.callFunction({
      name:'index_random'
    })
    console.log('hot',hot);
    items.push(hot.result.arr)
    type.push('热门推荐')

    let Newbook = await wx.cloud.callFunction({
      name:'new_shelves'
    })
    console.log(Newbook)
    items.push(Newbook.result.newbook)
    type.push('最新上架')

    let books = await wx.cloud.callFunction({
      name:'classify'
    })
    console.log(books)
    for(let i=0;i<books.result.books.length;i++){
      items.push(books.result.books[i])
      type.push(books.result.list[i]._id)
    }
    if(hot.errMsg.indexOf('ok')>-1&&Newbook.errMsg.indexOf('ok')>-1&&books.errMsg.indexOf('ok')>-1){
      wx.hideLoading({
        success: (res) => {},
      })
    }
    console.log(type);
    console.log(items);
    this.setData({
      type,
      items
    })
  },
    //事件处理函数  
    switchRightTab: function (e) {
      console.log(e)
      // 获取item项的id，和数组的下标值  
      let id = e.target.dataset.id,
        index = parseInt(e.target.dataset.index);
      // 把点击到的某一项，设为当前index  
      // console.log(id,index,this.data.type.length)
      this.setData({
        curIndex: index
      })
    },
    goSearch(){ //搜索框跳转
      wx.navigateTo({
        url: '/page/search/index'
      })
    },
  })  
  
  