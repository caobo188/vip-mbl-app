// pages/goods/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [
      {'name': '星巴克咖啡店(高新园店)', 'saleCnt': 70},
      { 'name': '肯德基(高新园店)', 'saleCnt': 732 },
      { 'name': '七天酒店', 'saleCnt': 50 },
      { 'name': '欢乐谷', 'saleCnt': 76 }
    ]
  },
  onGoods(e) {
    console.log(e.currentTarget.dataset.idx)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})