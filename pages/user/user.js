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
        this.checkLoginStatus()
    },
    // 检查登录状态
    checkLoginStatus() {
        const userInfo = wx.getStorageSync('userInfo')
        const isLogin = wx.getStorageSync('isLogin')
        
        if (userInfo && isLogin) {
            this.setData({
                userInfo: userInfo
            })
        } else {
            // 清除可能存在的过期数据
            wx.removeStorageSync('userInfo')
            wx.removeStorageSync('isLogin')
            this.setData({
                userInfo: {}
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
    // 用户登录
    getUserProfile() {
        wx.showLoading({
            title: '登录中...',
            mask: true
        })
        
        // 先获取微信登录code（可选，用于后续后端验证）
        wx.login({
            success: (loginRes) => {
                // 获取用户信息
                wx.getUserProfile({
                    desc: '用于完善用户资料',
                    success: (res) => {
                        const userInfo = {
                            nickName: res.userInfo.nickName,
                            avatarUrl: res.userInfo.avatarUrl,
                            gender: res.userInfo.gender,
                            country: res.userInfo.country,
                            province: res.userInfo.province,
                            city: res.userInfo.city,
                            language: res.userInfo.language,
                            loginTime: Date.now(),
                            code: loginRes.code // 保存code，可用于后续后端验证
                        }
                        
                        // 保存用户信息到本地
                        wx.setStorageSync('userInfo', userInfo)
                        wx.setStorageSync('isLogin', true)
                        wx.setStorageSync('loginTime', Date.now())
                        
                        // 更新页面数据
                        this.setData({
                            userInfo: userInfo
                        })
                        
                        wx.hideLoading()
                        wx.showToast({
                            title: '登录成功',
                            icon: 'success',
                            duration: 2000
                        })
                        
                        // 如果需要后端验证，可以在这里调用
                        // this.sendLoginToServer(loginRes.code, userInfo)
                    },
                    fail: (err) => {
                        wx.hideLoading()
                        console.error('获取用户信息失败', err)
                        if (err.errMsg.includes('getUserProfile:fail')) {
                            wx.showToast({
                                title: '需要授权才能登录',
                                icon: 'none',
                                duration: 2000
                            })
                        } else {
                            wx.showToast({
                                title: '登录失败，请重试',
                                icon: 'none',
                                duration: 2000
                            })
                        }
                    }
                })
            },
            fail: (err) => {
                wx.hideLoading()
                console.error('微信登录失败', err)
                wx.showToast({
                    title: '登录失败，请重试',
                    icon: 'none',
                    duration: 2000
                })
            }
        })
    },
    
    // 退出登录
    logout() {
        wx.showModal({
            title: '提示',
            content: '确定要退出登录吗？',
            success: (res) => {
                if (res.confirm) {
                    // 清除登录信息
                    wx.removeStorageSync('userInfo')
                    wx.removeStorageSync('isLogin')
                    wx.removeStorageSync('loginTime')
                    wx.removeStorageSync('loginID')
                    
                    // 更新页面
                    this.setData({
                        userInfo: {}
                    })
                    
                    wx.showToast({
                        title: '已退出登录',
                        icon: 'success',
                        duration: 2000
                    })
                }
            }
        })
    },
    
    // 发送登录信息到服务器（可选，如果需要后端验证）
    sendLoginToServer(code, userInfo) {
        // 如果需要后端验证，可以调用这个接口
        // getLogin({ code: code, userInfo: userInfo }).then(res => {
        //     if (res.data.status === 200) {
        //         wx.setStorageSync('loginID', res.data.data)
        //     }
        // }).catch(err => {
        //     console.error('后端登录失败', err)
        // })
    }
})