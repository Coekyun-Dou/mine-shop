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
                icon: "hot",
                color: "#ff0000"
            },
            {
                text: "限时特惠",
                icon: "discount",
                color: "#ff0000"
            },
            {
                text: "文创周边",
                icon: "gift",
                color: "#ff0000"
            },
            {
                text: "商品收藏",
                icon: "like",
                color: "#ff0000"
            },
            {
                text: "果树认购",
                icon: "new",
                color: "#ff0000"
            },
            {
                text: "荔枝制品",
                icon: "goods-collect",
                color: "#ff0000"
            },
            {
                text: "荔枝文化",
                icon: "records",
                color: "#ff0000"
            },
            {
                text: "研学旅行",
                icon: "map-marked",
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