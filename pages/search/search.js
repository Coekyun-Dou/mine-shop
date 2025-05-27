// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:" "
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  /**
   * 搜索框内容发生改变
   */
  onChange(e){
    console.log(e.detail);
  },
  //实现搜索
  onSearch(){
    console.log("搜索");
  },
  onSearchClick(){
    console.log("点击搜索按钮");
  }
 
})