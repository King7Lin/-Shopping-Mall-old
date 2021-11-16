// pages/MyOrderPage/MyOrderPage.js
Page({
    data: {
        tabs:[
            {
                id:0,
                value:"全部",
                isActive:true
            },
            {
                id:1,
                value:"待付款",
                isActive:false
            },
            {
                id:2,
                value:"待收货",
                isActive:false
            },
            {
                id:3,
                value:"已完成",
                isActive:false
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    //标题点击事件，从子组件传递过来
    handleTabsItemChange(e){
        //console.log(e);
        //1 获取被点击的标题索引
        const {index} = e.detail;
        //2 修改源数组
        let {tabs} = this.data;
        tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        //3 赋值到data中
        this.setData({
            tabs
        })
    },
    order:[
        {
            indexid:1,
            TabCur:true,
            list:[
                {
                time:'2021-11-11 9:38',
                status:'已完成',
                pic:'../images/huozhe.jpeg',
                name:'活着',
                price:'39',
                count:1,
            },
            {
                time:'2021-11-10 9:11',
                status:'已完成',
                pic:'../images/bailuyuan.jpeg',
                name:'活着',
                price:'39',
                count:1,
            }
        ]

        }
    ]
})