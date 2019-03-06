//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    array: ['美国', '中国', '巴西', '日本'],
    src: ''
  },
  onLoad: function () {
    this.showLoading()
    setTimeout(() => {
      wx.hideLoading()
    }, 1000)
  },
  onTapMove (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  onPicker (e) {
    this.setData({
      index: e.detail.value
    })
  },
  // 滑动选择器
  onSlider (e) {
    console.log(e.detail.value)
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
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
