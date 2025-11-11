const { bannerData, goodsData: goodsList } = require("../../utils/static-data.js")

Page({
    data: {
        value: "",
        swiperOptions: {
            indicatorDots: true,
            autoplay: true,
            interval: 3000,
            duration: 1000
        },
        swiperData: bannerData,
        navData: [
            {
                text: "云荔爆款",
                icon: "like",
                color: "#ff0000"
            },
            {
                text: "限时特惠",
                icon: "star",
                color: "#ff0000"
            },
            {
                text: "文创周边",
                icon: "fire",
                color: "#ff0000"
            },
            {
                text: "荔枝文化",
                icon: "gift",
                color: "#ff0000"
            },
            {
                text: "荔枝制品",
                icon: "phone",
                color: "#ff0000"
            },
            {
                text: "新鲜荔枝",
                icon: "gem",
                color: "#ff0000"
            },
            {
                text: "妃子笑",
                icon: "gift-card",
                color: "#ff0000"
            },
            {
                text: "荔枝摆件",
                icon: "smile",
                color: "#ff0000"
            }
        ],
        goodsData: goodsList
    },
    onReachBottom() {
        wx.showToast({
            title: "已加载全部商品",
            icon: "none"
        })
    },
    clickSearch() {
        wx.navigateTo({
            url: "/pages/search/search"
        })
    }
})