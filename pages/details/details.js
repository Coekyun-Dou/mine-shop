const { goodsDetails: goodsDetailsList } = require("../../utils/static-data.js")

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
        wx.showToast({
            title: "暂未开通购物车",
            icon: "none"
        })
    },
    onClickBuy() {
        wx.showToast({
            title: "暂未开通购买",
            icon: "none"
        })
    }
})