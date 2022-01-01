Page({
    data: {
        consignee:'迪迦奥特曼',
        transportValues: ["广东机电职业技术学院"],
        campusValues:["北校区","南校区","西校区"],
        transportIndex:0,
        campusIndex:0
    },
    bindTransportDayChange:function(e){
        console.log(e.detail.value)
        this.setData({
            campusIndex:e.detail.value
        })
    },
     async saveAddress(e){
        var transportDay = e.detail.value.transportDay
        var consignee = e.detail.value.consignee
        var address = e.detail.value.address
        var mobile = e.detail.value.mobile
        await wx.cloud.callFunction({
            name: 'add_address',
            data:{
                transportDay:transportDay,
                consignee:consignee,
                address:address,
                mobile:mobile
            },
            success:function(res){
                wx.showToast({
                  title: '保存成功',
                }),
                wx.navigateBack({
                  delta: 1,
                })
            }  
        })

        console.log(e)
        
        this.setData({
            consignee,
            address,
            mobile
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})