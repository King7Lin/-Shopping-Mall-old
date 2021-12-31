Page({
    async onLoad(){
        let find_address = await wx.cloud.callFunction({
            name:'find_address'
          })
          console.log(find_address);

          let addressArr = new Array();
          addressArr.push(find_address.result.get_address.data)
          console.log(addressArr);
          this.setData({
              addressArr
          })
    },
    addAddress:function(){
        wx.navigateTo({ url: 'AddAddress' });
    },

})