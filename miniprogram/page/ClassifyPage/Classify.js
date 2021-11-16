Page({
    data: {
      cateItems: [
        {
          cate_id: 1,
          cate_name: "热搜推荐",
          ishaveChild: true,
          children:
          [
            {
              child_id: 1,
              name: '活着',
              image: "../images/huozhe.jpeg"
            },
            {
              child_id: 2,
              name: '白鹿原',
              image: "../images/bailuyuan.jpeg"
            },
            {
              child_id: 3,
              name: '追风筝的人',
              image: "../images/zui.jpeg"
            },
            {
              child_id: 4,
              name: '局外人',
              image: "../images/juwairen.jpeg"
            }
          ]
        },
        {
          cate_id: 2,
          cate_name: "历史",
          ishaveChild: true,
          children:
          [
            {
              child_id: 1,
              name: '人类简史',
              image: "../images/renlei.jpeg"
            },
            {
              child_id: 2,
              name: '万历十五年',
              image: "../images/wanli.jpeg"
            }
          ]
        },
        {
          cate_id: 3,
          cate_name: "经济",
          ishaveChild: true,
          children:
          [
            {
              child_id: 1,
              name: '结构性改革',
              image: "../images/jiegouxing.jpeg"
            },
            {
              child_id: 2,
              name: '资本论',
              image: "../images/ziben.jpeg"
            },
            {
              child_id: 3,
              name: '小岛经济学',
              image: "../images/xiaodao.jpeg"
            }
          ]
        },
        {
          cate_id: 4,
          cate_name: "科技",
          ishaveChild: false,
          children: []
        }
      ],
      curNav: 1,
      curIndex: 0
    },
  
    //事件处理函数  
    switchRightTab: function (e) {
      // 获取item项的id，和数组的下标值  
      let id = e.target.dataset.id,
        index = parseInt(e.target.dataset.index);
      // 把点击到的某一项，设为当前index  
      this.setData({
        curNav: id,
        curIndex: index
      })
    },
    goSearch(){ //搜索框跳转
      wx.navigateTo({
        url: '/page/search/index'
      })
    },
  })  
  
  