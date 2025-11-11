const { getLogin } = require("../../api/index.js")
const { getCartCount } = require("../../utils/cart.js")

Page({
    data: {
        userInfo: {},
        orderCount: {
            unpaid: 0,
            unshipped: 0,
            unreceived: 0,
            unevaluated: 0
        },
        menuList: [
            {
                text: "我的收藏",
                icon: "like-o",
                color: "#ff0000",
                url: ""
            },
            {
                text: "优惠券",
                icon: "coupon-o",
                color: "#ff6b35",
                url: ""
            },
            {
                text: "积分商城",
                icon: "gem-o",
                color: "#fd4d72",
                url: ""
            },
            {
                text: "收货地址",
                icon: "location-o",
                color: "#2a83fe",
                url: ""
            },
            {
                text: "客服中心",
                icon: "chat-o",
                color: "#00b478",
                url: ""
            },
            {
                text: "关于我们",
                icon: "info-o",
                color: "#999999",
                url: ""
            }
        ]
    },
    onLoad(options) {
        // 验证用户登录信息的状态是否处于有效期：增加一个接口，然后测试有效期
        if(wx.getStorageSync('userInfo')){
            this.setData({
                userInfo:wx.getStorageSync('userInfo')
            })
        }
    },
    onShow() {
        // 每次显示页面时更新购物车数量
        const cartCount = getCartCount()
        this.setData({
            cartCount: cartCount
        })
    },
    // 点击订单状态
    clickOrder(e) {
        const type = e.currentTarget.dataset.type
        wx.showToast({
            title: "订单功能开发中",
            icon: "none"
        })
    },
    // 点击全部订单
    clickAllOrders() {
        wx.showToast({
            title: "订单功能开发中",
            icon: "none"
        })
    },
    // 点击菜单项
    clickMenu(e) {
        const index = e.currentTarget.dataset.index
        const item = this.data.menuList[index]
        if (item.url) {
            wx.navigateTo({
                url: item.url
            })
        } else {
            wx.showToast({
                title: item.text + "功能开发中",
                icon: "none"
            })
        }
    },
    getUserProfile() {
        wx.getUserProfile({
            desc: "展示用户信息",
            success: res => {
                this.setData({
                    userInfo:res.userInfo
                })
                this.loginHandle()
                wx.setStorageSync('userInfo', res.userInfo)
            },
            fail(err) {
                console.log(err);
            },
            complete() {
                console.log("获取完成");
            }
        })
    },
    loginHandle(){
        wx.login({
            success(response){
                // code:在发送给接口
                /**
                 * 如果大家使用此登录接口，使用外网服务器的情况下，必须使用我的AppID
                 * 如果大家使用此登录接口，使用自己的服务器的情况下，需要修改服务器
                 */
                getLogin({code:response.code}).then(res =>{
                    wx.setStorageSync('loginID', res.data.data)
                })
            },
            fail(err){
                console.log(err);
            }
        })
    }
})