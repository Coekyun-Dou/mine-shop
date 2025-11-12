const { goodsDetails: goodsDetailsList } = require("../../utils/static-data.js")
const { addToCart } = require("../../utils/cart.js")

Page({
    data: {
        goodsDetails: null
    },
    onLoad(options) {
        const id = Number(options.id)
        const detail = goodsDetailsList.find(item => item.id === id)
        if (detail) {
            this.setData({
                goodsDetails: detail
            })
        } else {
            wx.showToast({
                title: "未找到商品",
                icon: "none"
            })
        }
    },
    onClickKF() {
        wx.showToast({
            title: "请稍后再试",
            icon: "none"
        })
    },
    onClickCart() {
        wx.switchTab({
            url: "/pages/cart/cart"
        })
    },
    onClickAddCart() {
        const goods = this.data.goodsDetails
        if (!goods) {
            wx.showToast({
                title: "商品信息错误",
                icon: "none"
            })
            return
        }
        
        const success = addToCart({
            id: goods.id,
            title: goods.title,
            price: goods.price,
            topimage: goods.topimage
        })
        
        if (success) {
            wx.showToast({
                title: "已加入购物车",
                icon: "success",
                duration: 2000
            })
        } else {
            wx.showToast({
                title: "加入失败，请重试",
                icon: "none"
            })
        }
    },
    onClickBuy() {
        wx.showToast({
            title: "暂未开通购买",
            icon: "none"
        })
    }
})