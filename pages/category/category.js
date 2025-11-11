const { categories, goodsData: goodsList } = require("../../utils/static-data.js")

const sliderData = Array.from(new Set(categories.map(item => item.cate))).map((text, index) => ({
    id: index,
    text
}))

function filterCategoryByTag(tag) {
    return categories.filter(item => item.cate === tag)
}

function filterGoodsByTag(tag) {
    return goodsList.filter(item => item.tag === tag)
}

function getHero(tag) {
    const list = filterCategoryByTag(tag)
    return list.length ? list[0] : null
}

Page({
    data: {
        activeKey: 0,
        sliderData,
        currentTag: sliderData.length ? sliderData[0].text : "",
        categoryData: sliderData.length ? filterCategoryByTag(sliderData[0].text) : [],
        heroCategory: sliderData.length ? getHero(sliderData[0].text) : null
    },
    onLoad() {
        if (!this.data.currentTag) {
            wx.showToast({
                title: "暂无分类数据",
                icon: "none"
            })
        }
    },
    clickItemNav(e) {
        const index = e.currentTarget.dataset.index
        const title = e.currentTarget.dataset.title
        const list = filterCategoryByTag(title)
        this.setData({
            activeKey: index,
            currentTag: title,
            categoryData: list,
            heroCategory: list.length ? list[0] : null
        })
        if (!list.length) {
            wx.showToast({
                title: "暂无分类数据",
                icon: "none"
            })
        }
    },
    clickItem(e) {
        const tag = e.currentTarget.dataset.tag
        const goods = filterGoodsByTag(tag)
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