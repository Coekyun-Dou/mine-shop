const { getCart, removeFromCart, clearCart } = require("../../utils/cart.js")

Page({
    data: {
        cartData: []
    },
    onLoad() {
        // 首次加载时清空原有购物车数据（仅执行一次）
        const hasCleared = wx.getStorageSync('cart_cleared')
        if (!hasCleared) {
            clearCart()
            wx.setStorageSync('cart_cleared', true)
        }
        this.loadCart()
    },
    onShow() {
        this.loadCart()
    },
    loadCart() {
        const cartData = getCart()
        this.setData({
            cartData: cartData
        })
    },
    delCartHandle(e) {
        const id = e.currentTarget.dataset.id
        if (!id) {
            wx.showToast({
                title: "删除失败",
                icon: "none"
            })
            return
        }
        
        wx.showModal({
            title: "提示",
            content: "确定要删除这个商品吗？",
            success: (res) => {
                if (res.confirm) {
                    const success = removeFromCart(Number(id))
                    if (success) {
                        wx.showToast({
                            title: "删除成功",
                            icon: "success"
                        })
                        this.loadCart()
                    } else {
                        wx.showToast({
                            title: "删除失败",
                            icon: "none"
                        })
                    }
                }
            }
        })
    }
})