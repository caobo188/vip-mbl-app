// pages/bank/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    amt: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type = options.type
    let amt = ''
    if (type == 1) {
      amt = '2,731,433.68'
    } else if (type == 2) {
      amt = '11,310,749.38'
    } else if (type == 3) {
      amt = '712,876.23'
    } else {
      amt = '1,164.78'
    }
    this.setData({
      amt: amt
    })
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