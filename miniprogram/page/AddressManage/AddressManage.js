Page({
    async onShow(){
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
    async delAddress(e){
        console.log(e);
        await wx.cloud.callFunction({
            name:'del_address',
            data:{
                id:e.currentTarget.dataset.id
            }
        })
        this.onShow()
    },
    
})