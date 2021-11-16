Page({
    data: {
      isLike: true,
      // banner
      imgUrls: [
        "../images/wanli.jpeg",
      ],
      indicatorDots: true, //是否显示面板指示点
      autoplay: true, //是否自动切换
      interval: 3000, //自动切换时间间隔,3s
      duration: 1000, //  滑动动画时长1s
  
      // 商品详情介绍
      detailImg: [
        "../images/huozhe.jpeg",
        "../images/bailuyuan.jpeg",
      ],
    },
    //预览图片
    previewImage: function (e) {
      var current = e.target.dataset.src;
  
      wx.previewImage({
        current: current, // 当前显示图片的http链接  
        urls: this.data.imgUrls // 需要预览的图片http链接列表  
      })
    },
    // 收藏
    addLike() {
      this.setData({
        isLike: !this.data.isLike
      });
    },
    // 跳到购物车
    toCar() {
      wx.switchTab({
        url: '/pages/cart/cart'
      })
    },
    // 立即购买
    immeBuy() {
      wx.showToast({
        title: '购买成功',
        icon: 'success',
        duration: 2000
      });
    },
  })
  
  
  