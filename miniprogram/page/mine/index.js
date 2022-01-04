let app = getApp()
Page({
  async onShow(){
    console.log(app.globalData.login)
    let login = app.globalData.login
    this.setData({
      login
    })
  },
  tosend(){
    if(app.globalData.login==true){
      wx.navigateTo({
        url: '../send/index'
      })
    }else{
      wx.showToast({
        title: '请登录',
      })
      wx.navigateTo({
        url: '../LoginPage/LoginPage',
      })
    } 
},
  tologin(){
    if(app.globalData.login==false){
      wx.showToast({
        title: '请登录',
        icon:'error'
      })
      // wx.navigateTo({
      //   url: '../LoginPage/LoginPage',
      // })
    }
  }
})