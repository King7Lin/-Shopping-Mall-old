Page({
  data: {
    content:'宏伟的教学楼',
    background:[
      {src:'../images/11.jpeg',content:'宏伟的教学楼'},
      {src:'../images/22.jpeg',content:'电子实训楼 '},
      {src:'../images/33.jpeg',content:'图文信息楼'},
    ],
    navbars:[
      {text:'最新上架'},
      {text:'压箱好书'},
      {text:'科幻'},
      {text:'历史'},
      {text:'经济'},
    ],
    book:[
      {
      cate_id: 1,
      ishaveChild: true,
      children:[{
        pic:'../images/wanli.jpeg',
        name:'万历十五年',
        author:'黄仁宇',
        money:'11.5',
        url:'/page/DetailPage/Detail'},
        {pic:'../images/renlei.jpeg',
        name:'人类简史',
        author:'尤瓦尔·赫拉利',
        money:'30.6',
        url:'/page/DetailPage/Detail'},
        {pic:'../images/xiaodao.jpeg',
        name:'小岛经济学',
        author:'彼得·希夫',
        money:'21.6',
        url:'/page/DetailPage/Detail'},] 
    },
    {
      cate_id: 2,
      ishaveChild: true,
      children:[
          {pic:'../images/juwairen.jpeg',
          name:'局外人',
          author:'阿尔贝·加缪',
          money:'18.5',
          url:'/page/DetailPage/Detail'},
          {pic:'../images/huozhe.jpeg',
          name:'活着',
          author:'余华',
          money:'15.2',
          url:'/page/DetailPage/Detail'},
          {pic:'../images/bailuyuan.jpeg',
          name:'白鹿原',
          author:'陈忠实',
          money:'39.8',
          url:'/page/DetailPage/Detail'},
      ],},
      {
      cate_id: 3,
      ishaveChild: true,
      children:[
        {pic:'../images/jiegouxing.jpeg',
        name:'结构性改革',
        author:'黄奇帆',
        money:'44',
        url:'/page/DetailPage/Detail'},
        {pic:'../images/ziben.jpeg',
        name:'资本论',
        author:'卡尔·海因里希·马克思',
        money:'38',
        url:'/page/DetailPage/Detail'},
        {pic:'../images/zui.jpeg',
        name:'追风筝的人',
        author:'卡勒德·胡赛尼',
        money:'21.3',
        url:'/page/DetailPage/Detail'},
      ]
    },
    {
      cate_id: 4,
      ishaveChild: false,
    },
    {
      cate_id: 5,
      ishaveChild: false,
    }
    ],
    currentTab: 0,
    active:null,
    carTab:null,
    curIndex:0
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
    // carTap(e){
    //   console.log(e)
    //   console.log(typeof e.currentTarget.dataset.car)
    //   this.setData({ 
    //     carTab:e.currentTarget.dataset.car,
    //     active:'active'
    //   })
    // }

})