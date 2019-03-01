//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
  },
  onLoad: function () {
    this.showLoading()
    setTimeout(() => {
      wx.hideLoading()
    }, 1000)
  },
  // 确认弹框
  onComfirm () {
    util.confirm('确认删除？', () => {
      console.log('执行确认')
    })
  },
  // 提示框
  onToast () {
    util.toast('操作成功')
  },
  // 显示加载框
  showLoading () {
    wx.showLoading({
      title: '加载中...',
    })
  }
})
