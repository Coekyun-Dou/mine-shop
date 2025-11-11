const { keywords, goodsData: goodsList } = require("../../utils/static-data.js")

function filterGoods(keyword) {
    const value = keyword.trim().toLowerCase()
    if (!value) {
        return []
    }
    return goodsList.filter(item =>
        item.title.toLowerCase().includes(value) ||
        item.tag.toLowerCase().includes(value)
    )
}

Page({
    data: {
        search: "",
        hotSearch: [],
        value: "",
        goodsData: []
    },
    onLoad() {
        this.setData({
            hotSearch: keywords
        })
    },
    onChange(e) {
        this.setData({
            value: e.detail
        })
    },
    onSearch() {
        this.handleSearch(this.data.value)
    },
    onSearchCliclk() {
        this.handleSearch(this.data.value)
    },
    clickGetKeyWords(e) {
        const keyword = e.currentTarget.dataset.hotkey
        this.setData({
            value: keyword
        })
        this.handleSearch(keyword)
    },
    handleSearch(keyword) {
        const goods = filterGoods(keyword)
        if (goods.length) {
            wx.navigateTo({
                url: "/pages/goods/goods?goodsData=" + JSON.stringify(goods)
            })
        } else {
            wx.showToast({
                title: "暂无相关商品",
                icon: "none"
            })
        }
    }
})