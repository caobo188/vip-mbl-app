Component({
  properties: {
    current: {
      type: String,
      value: ''
    }
  },
  methods: {
    onNav(e) {
      let i = e.currentTarget.dataset.i
      let path = i == 1 ? 'cate' : i == 2 ? 'mine' : 'index'
      wx.navigateTo({
        url: `../${path}/${path}`
      })
    }
  }
})