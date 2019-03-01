const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 确认弹框
const confirm = (content, okCb, cancleCb) => {
  wx.showModal({
    title: '提示',
    content: content,
    showCancel: true,
    success: function (res) {
      if (res.confirm) {
        okCb && okCb()
      } else if (res.cancel) {
        cancleCb && cancleCb()
      }
    }
  })
}

// 提示框
const toast = (title) => {
  wx.showToast({
    title: title,
    icon: 'success',
    duration: 1500
  })
}

module.exports = {
  formatTime: formatTime,
  confirm: confirm,
  toast: toast
}
