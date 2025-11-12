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
        heroCategory: sliderData.length ? getHero(sliderData[0].text) : null,
        recommendGoods: [] // 推荐商品列表
    },
    onLoad() {
        if (!this.data.currentTag) {
            wx.showToast({
                title: "暂无分类数据",
                icon: "none"
            })
        } else {
            // 加载当前分类的推荐商品
            this.loadRecommendGoods(this.data.currentTag)
        }
    },
    // 加载推荐商品
    loadRecommendGoods(cate) {
        const goods = filterGoodsByTag(cate)
        // 最多显示6个推荐商品
        this.setData({
            recommendGoods: goods.slice(0, 6)
        })
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
        // 加载新分类的推荐商品
        this.loadRecommendGoods(title)
        if (!list.length) {
            wx.showToast({
                title: "暂无分类数据",
                icon: "none"
            })
        }
    },
    // 点击推荐商品
    clickGoods(e) {
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: "/pages/details/details?id=" + id
        })
    },
    // 查看更多商品
    viewMore() {
        const goods = filterGoodsByTag(this.data.currentTag)
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
    },
    clickItem(e) {
        // 使用cate字段来匹配商品的tag字段
        const cate = e.currentTarget.dataset.cate
        const goods = filterGoodsByTag(cate)
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