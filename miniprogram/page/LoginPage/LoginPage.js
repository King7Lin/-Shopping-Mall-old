const app = getApp()
Page({
  async formsubmit(e){
    console.log(e)
    let {phoneNumber,password} = e.detail.value
    // if(!this.data.nickName){
    //   wx.showToast({
    //     title: '请获取微信账号信息',
    //   })
    //   return
    // }
    if(phoneNumber==''&&password==''){
      wx.showToast({
        title: '请输入账号或密码'
      })
      return
    }
    if(!/^\d{8}$/.test(phoneNumber)){
      wx.showToast({
        title: '请输入8位数字的账号',
      })
      return
    }

    // let nickName = this.data.nickName
    // let avatarUrl = this.data.avatarUrl

    let res = await wx.cloud.callFunction({
      name:'register',
      data:{
        phoneNumber,
        password
      }
    })
    console.log(res)
    if(res.result.login==true){
      app.globalData.login=true
      // app.globalData.user = res.result.user
      wx.showToast({
        title: '登录成功',
      })
      wx.switchTab({
        url: '../index/index',
      })
    }else{
      wx.showModal({
        title:'输入信息有误'
      })
    }
    console.log(app.globalData.login)
  },
})