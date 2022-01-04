Page({
  //清除历史记录
  cleanhistory: function (e) {
    this.setData({
      history: false, //隐藏历史记录
      historyArray: [], //清空历史记录数组
      newArray: [],
      shoopingtext: "" //清空搜索框
    })
  },
  async onLoad() {
    let res = await wx.cloud.callFunction({
      name: 'getHistory',
    })
    console.log(res)
    this.setData({
      history: res.result.res.data[0].names.reverse()
    })
  },
  async search(e) {
    const searchtext = this.data.shoopingtext;
    let res = await wx.cloud.callFunction({
      name: 'search',
      data: {
        searchtext
      }
    })
    console.log(res)
    this.setData({
      shoppinglist: res.result.res.data
    })
  },
  //搜索
  //   search: function(e) {
  //     var searchtext = this.data.shoopingtext; //搜索框的值
  //     var sss = true;
  //     if (searchtext != "") {
  //       //将搜索框的值赋给历史数组
  //       this.data.historyArray.push(searchtext);
  //       let res = await wx.cloud.callFunction({
  //         name:'search',   
  //         data:{
  //           searchtext:searchtext
  //         }     
  //       }).then( res=>{
  //           this.setData({
  //             resultarr:res.result.data
  //           })
  // })










  //模糊查询 循环查询数组中的title字段
  // for (var index in this.data.shoopingarray) {
  //   var num = this.data.shoopingarray[index].title.indexOf(searchtext);

  //   let temp = 'shoopingarray[' + index + '].status';
  //   if (num != -1) { //不匹配的不显示
  //     this.setData({
  //       [temp]: 1,
  //     })
  //          sss = false //隐藏未找到提示
  //     //   }
  //     // }

  //     this.setData({
  //       history: false, //隐藏历史记录
  //       noneview: sss, //隐藏未找到提示
  //       shoppinglist: true, //显示商品列表
  //       newArray: this.data.historyArray //给新历史记录数组赋值
  //     })
  //   } else {
  //     this.setData({
  //       noneview: true, //显示未找到提示
  //       shoppinglist: false, //隐藏商品列表
  //       history: false, //隐藏历史记录
  //     })
  //   }
  // },
  // data: {
  //   shoopingtext: "", //搜索框的值
  //   history: false, //显示历史记录
  //   noneview: false, //显示未找到提示
  //   shoppinglist: false, //显示商品列表
  //   historyArray: [], //历史记录数组,
  //   newArray: [], //添加历史记录数组
  //   shoopingarray: [{ //商品
  //     id: 0,
  //     images: "../images/huozhe.jpeg",
  //     title: "活着",
  //     money: "20.1",
  //     sold: "78本",
  //     status: 0
  //   }, {
  //     id: 1,
  //     images: "../images/jiegouxing.jpeg",
  //     title: "结构性改革",
  //     money: "26.80",
  //     sold: "34本",
  //     status: 0
  //   }]
  // },
  //搜索框的值
  shoppinginput: function (e) {
    //当删除input的值为空时
    if (e.detail.value == "") {
      this.setData({
        history: true, //显示历史记录
        shoppinglist: false //隐藏商品列表
      });
      //所有商品列表的状态改为0
      for (var index in this.data.shoopingarray) {
        let temp = 'shoopingarray[' + index + '].status';
        this.setData({
          [temp]: 0,
        })
      }
    }
    this.setData({
      shoopingtext: e.detail.value
    })
  },
  //点击历史记录赋值给搜索框
  textfz: function (e) {
    this.setData({
      shoopingtext: e.target.dataset.text
    })
  }
})