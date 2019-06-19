var http = {}
var BASE_SERVER = "http://localhost:8081/api"
// 应用配置
var APP_ALIAS = 'ecfu.wex.app'
// 统一网关地址
var UNI_SERVER = BASE_SERVER + "/uni"
// 应用网关地址
var APP_SERVER = BASE_SERVER + "/tfc/usr"
// 图片服务器
var IMG_SERVER = BASE_SERVER
// 系统ID
var SYS_ID = "plt.tfc.usr.wexapp"
// 系统位标
var SYS_IDX = 3
// 用户类型角色
var UT_ROLE = 1
// 上传地址(type: img)
var UPLOAD_URL = "/upload/file.do"
// 默认图片定义
var DEF_IMGS = {
  avatar: '/imgs/avatar.svg'
}
var LOGINING = false
var WAIT_LOGIN_TASK_LIST = []
var UNI_APIs = []
var APP_APIs = ['Goods']
var CST_APIs = {
  "passwd": {
    uri: APP_SERVER + "/user/password.do",
    type: "post"
  },
  "reset": {
    uri: APP_SERVER + "/user/reset.do",
    type: "post"
  },
  "sendSms": {
    uri: APP_SERVER + '/sms/code/send.do',
    type: 'get'
  },
  "checkCode": {
    uri: APP_SERVER + '/sms/code/check.do',
    type: 'get'
  },
  "creGrpId": {
    uri: UNI_SERVER + '/uni/file/grpid.do',
    type: 'get'
  },
  "curUser": {
    uri: APP_SERVER + "/user/cur.do"
  },
  "setAvatar": {
    uri: APP_SERVER + "/user/setavatar.do",
    type: 'post'
  },
  "setMobile": {
    uri: APP_SERVER + "/user/setmobile.do"
  },
  "setName": {
    uri: APP_SERVER + "/user/setname.do",
    type: 'post'
  },
  "getMobile": {
    uri: APP_SERVER + "/user/mobile.do",
    type: 'post'
  },
  "qryPapState": {
    uri: APP_SERVER + "/wex/pap/query.do",
  },
  "getSignData": {
    uri: APP_SERVER + "/wex/pap/sign.do",
  },
  "papAuthNotify": {
    uri: APP_SERVER + "/wex/pap/auth.do",
  },
  "decrypt": {
    uri: APP_SERVER + "/wex/decrypt.do",
    type: 'post'
  },
  "addCarWithLic": {
    uri: APP_SERVER + "/car/addWithVeh.do",
    type: 'post'
  },
  "refresh": {
    uri: APP_SERVER + "/viQry/refresh.do"
  },
  "isSubscribe": {
    uri: APP_SERVER + "/app/is_subscribe.do"
  },
  "lockLane": {
    uri: APP_SERVER + "/careg/lock.do"
  },
  "cfmEntry": {
    uri: APP_SERVER + "/careg/cfmEntry.do"
  },
  "cfmExit": {
    uri: APP_SERVER + "/careg/cfmExit.do"
  },
  "getParkingFee": {
    uri: APP_SERVER + "/careg/fee.do"
  },
  "parkingPay": {
    uri: APP_SERVER + "/careg/pay.do"
  },
  "getQrInfo": {
    uri: APP_SERVER + "/qrcode/info.do"
  },
  "getUnboundCards": {
    uri: APP_SERVER + "/pcard/unbound.do"
  },
  "bindPCard": {
    uri: APP_SERVER + "/pcard/binding.do"
  },
  "getMyPCards": {
    uri: APP_SERVER + "/pcard/my.do"
  },
  "isFeePay": {
    uri: APP_SERVER + "/fee/isPay.do"
  },
  "pcardPay": {
    uri: APP_SERVER + "/pcard/pay.do"
  },
  "isRechrgOk": {
    uri: APP_SERVER + "/rechrg/isPay.do"
  },
  "maybeRechegPayFail": {
    uri: APP_SERVER + "/rechrg/payerr.do"
  },
  "getPCardPriceList": {
    uri: APP_SERVER + "/pcard/prices.do"
  },
  "maybeFeePayFail": {
    uri: APP_SERVER + "/fee/payerr.do"
  },
  "myCareg": {
    uri: APP_SERVER + "/careg/my.do"
  },
  "myCaregList": {
    uri: APP_SERVER + "/careg/mylist.do"
  },
  "findCareg": {
    uri: APP_SERVER + "/careg/find.do"
  },
  "bindCareg": {
    uri: APP_SERVER + "/careg/binding.do"
  },
  "unbindCareg": {
    uri: APP_SERVER + "/careg/unbind.do"
  },
  "unlock": {
    uri: APP_SERVER + "/careg/unlock.do"
  },
  "fixQuery": {
    uri: APP_SERVER + "/careg/fixQuery.do"
  },
  "fix": {
    uri: APP_SERVER + "/careg/fix.do"
  },
  "getLaneNear": {
    uri: APP_SERVER + "/lane/near.do"
  },
  "getStatNear": {
    uri: APP_SERVER + "/station/near.do"
  },
  "getLaneSts": {
    uri: APP_SERVER + "/careg/lane/status.do"
  },
  "orderCreate": {
    uri: APP_SERVER + "/order/create.do"
  },
  "orderPay": {
    uri: APP_SERVER + "/order/pay.do"
  },
  "orderSigned": {
    uri: APP_SERVER + "/order/signed.do"
  },
  "isOrdPay": {
    uri: APP_SERVER + "/order/isPay.do"
  },
  "invtSend": {
    uri: APP_SERVER + "/invt/send.do"
  },
  "invtJoin": {
    uri: APP_SERVER + "/invt/join.do"
  },
  "invtResend": {
    uri: APP_SERVER + "/invt/resend.do"
  },
  "invtDtl": {
    uri: APP_SERVER + "/invt/detail.do"
  },
  "laneGeo": {
    uri: APP_SERVER + "/lane/geo.do"
  },
  "userCards": {
    uri: APP_SERVER + "/user/cards.do"
  },
  "goodsCheck": {
    uri: APP_SERVER + "/goods/check.do"
  }
}

// toast
http.toast = (msg) => {
  wx.showToast({
    title: msg || '',
    icon: 'none',
    duration: 2000
  })
}

// 成功提示
http.success = (msg) => {
  wx.showToast({
    title: msg || '',
    icon: 'successe',
    duration: 2000
  })
}

// 错误提示
http.error = (msg) => {
  wx.showToast({
    title: msg || '',
    icon: 'none',
    duration: 4000
  })
}

http.back = () => {
  wx.navigateBack({
    delta: 1
  })
}

// 本地存储User
http.saveUser = function(user, force) {
  if (user || force) {
    wx.setStorage({
      key: 'userSession',
      data: user || {}
    })
  }
}

// 获取本地存储User
http.unSaveUser = function() {
  return wx.getStorageSync('userSession') || {}
}

// 设置Token
http.setToken = function(token) {
  wx.setStorage({
    key: 'TOKEN',
    data: token
  })
}

http.getToken = function() {
  return wx.getStorageSync('TOKEN') || ''
}

// 获取URL中最后一个路径名称
http.getUrlLastName = function(url) {
  if (url) {
    var i = url.lastIndexOf('/')
    if (i != -1) {
      var j = url.indexOf('.', i)
      if (j == -1) {
        j = url.indexOf('?', i)
      }
      return url.substring(i + 1, j == -1 ? url.length : j).trim()
    }
  }
  return ''
}

// 从url中提取指定的参数
http.getUrlParam = function(url, name, decode) {
  console.log('url: ', url)
  if(!url) {
    return ''
  }
  let idx = url.indexOf('?')
  let params = url
  if (idx != -1) {
    params = url.substring(idx + 1)
  }
  if(decode) {
    params = decodeURIComponent(params)
  }
  console.log('params: ', params)
  idx = params.indexOf(name + '=')
  if (idx != -1) {
    let j = params.indexOf('&', idx + 1)
    if(j != -1) {
      return params.substring(idx + name.length + 1, j)
    } else {
      return params.substring(idx + name.length + 1)
    }
  }
  return ''
}

// 
http.setDataList = function(page, res, listName) {
  // 隐藏所有loading样式
  if (page.hideLoad) {
    page.hideLoad()
  }
  let data = res.data || []
  let rtnLen = data.length
  let list = res._list || []
  // 根据手势选择对应加载数据方式
  if (res._dir == 'up') {
    list = [...list, ...data]
  } else {
    list = data
  }
  // 设置数据
  let dataModel = {}
  dataModel[listName || 'list'] = list
  page.setData(dataModel)
  // 判断是否加载完所有数据
  if (res.pageSize > rtnLen) {
    page.setData({
      noMore: true
    })
  }
  // 设置无数据显示
  page.setData({
    noData: list.length <= 0
  })
}

http.getStore = function(key) {
  return wx.getStorageSync(key) || {}
}

http.setStore = function(key, data) {
  wx.setStorage({
    key: key,
    data: data || {}
  })
}

http.storeAddr = function(id) {
  http.setStore('CUR_ADDR_ID', {id: id})
}

http.unStoreAddr = function() {
  return http.getStore('CUR_ADDR_ID').id
}

// 混合,将defObj混入newObj
http.mix = function(key, newObj, defObj) {
  var custom = newObj[key]
  if (custom) {
    // 覆盖
    newObj[key] = function () {
      var args = [].slice.call(arguments, 0)
      // 先调用默认的
      defObj[key].apply(this, args)
      // 再调用自定义的
      custom.apply(this, args)
    }
  } else {
    // 无需包裹，直接覆盖
    newObj[key] = defObj[key]
  }
}

// 创建Page页面对象
http.page = function (data) {
  var defs = {
    onLoad(opts) {
      this.data.opts = opts || {}
    },
    onReady() {

    },
    onShow() {
      this.setData({
        showPage: true
      })
    },
    onHide() {
      this.setData({
        showPage: false
      })
      if (this.reset) {
        this.reset()
      }
    },
    onUnload() {
      if (this.reset) {
        this.reset()
      }
    },
    onPullDownRefresh() {

    },
    onReachBottom() {

    },
    onLogin(rst) {
      console.log('登陆成功.页面回调')
    }
  }

  for (var key in defs) {
    http.mix(key, data, defs)
  }
  return data
}

// 网络请求
http.send = (method, url, data, cb, fb) => {
  data.token = http.getToken()
  data._ts = (new Date() - 0)
  //
  method = method || 'GET'
  let contentType = data.$_json ? 'application/json' : (method == 'POST' ? 'application/x-www-form-urlencoded' : '')
  wx.request({
    url: url,
    data: data,
    method: method,
    header: {
      'Content-Type': contentType
    },
    success: function(result) {
      var resp = result.data || {}
      // code = 200 或者不传或者为0则表示成功
      if (typeof(resp) !== 'string' && (resp.code == 200 || !resp.code)) {
        console.log('请求接口[OK]:', resp)
        cb && cb(resp)
      } else {
        console.log('请求接口[NO]:', resp)
        if (resp.code == 700) {
          // 放入待登陆任务列表
          WAIT_LOGIN_TASK_LIST.push({
            method: method,
            url: url,
            data: data,
            cb: cb,
            fb: fb
          })
          http.login()
        } else if (fb) {
          fb(resp)
        } else {
          http.error(resp.msg || '网络开小差了')
        }
      }
    },
    fail: function(e) {
      console.log('接口错误:', e)
      if (fb) {
        fb({
          code: 400,
          msg: '网络开小差了'
        })
      } else {
        http.error('网络开小差了')
      }
    }
  })
}

// 发起GET请求
http.get = function(url, data, cb, fb) {
  http.send('GET', url, data, cb, fb)
}

// 发起POST请求
http.post = function(url, data, cb, fb) {
  http.send('POST', url, data, cb, fb)
}

// 获取图片路径
http.getPicUrl = function(path, typeName) {
  return DEF_IMGS[typeName] || path || ''
}

// 上传图片
http.upload = function(path, data, cb, fcb) {
  wx.showLoading({
    title: '上传中',
    mask: true
  })
  let _data = data || {}
  let uploadUrl = IMG_SERVER + (_data.action || UPLOAD_URL)
  _data.type = _data.type ? _data.type : 'img'
  _data.fmSys = _data.fmSys || APP_ALIAS
  wx.uploadFile({
    url: uploadUrl,
    filePath: path,
    formData: _data,
    name: 'file',
    success: function(result) {
      let _res = JSON.parse(result.data)
      cb && cb(_res)
    },
    fail: function(result) {
      let _res = JSON.parse(result)
      http.toast(_res.msg)
      console.log('上传失败: ', _res)
      fcb && fcb(_res)
    },
    complete: function(result) {
      wx.hideLoading()
      let _res = JSON.parse(result.data)
      console.log('上传完成: ', _res)
      if (_res.code != 200) {
        console.log('识别失败: ', _res)
        http.error(_res.msg)
      } else {
        if (result.statusCode == 500) {
          http.toast('网络开小差，请稍后再试')
        }
      }
    }
  })
}

// 获取微信用户信息
http.getWxUserInfo = function(cb, fb) {
  wx.getUserInfo({
    withCredentials: true,
    success: function(res) {
      cb && cb(res)
    },
    fail: function() {
      fb && fb()
    }
  })
}

// 授权登录
http.auth = function(cb, fb) {
  wx.getSetting({
    // 获取设置成功
    success: function(res) {
      if (res.authSetting['scope.userInfo']) {
        // OK
        console.log('用户已授权')
        http.getWxUserInfo(cb, fb)
      } else {
        if (wx.canIUse('button.open-type.getUserInfo')) {
          // 新版本，跳转到授权引导页面
          console.log('...新版本，跳转到授权引导页面...')
          fb && fb()
          // ***注意: 必须使用navigateTo方式打开授权页面，请勿随便修改***
          wx.navigateTo({
            url: '/pages/auth/auth'
          })
        } else {
          // 旧版本，直接调用授权(微信自己会弹出窗口)
          console.log('旧版本')
          http.getWxUserInfo(cb, fb)
        }
      }
    },
    // 获取设置失败
    fail: function() {
      fb && fb()
    }
  })
}

// 微信登录
http.wxLogin = function(cb, fb) {
  wx.login({
    fail: function() {
      fb && fb()
    },
    success: function(res) {
      if (res.code) {
        cb && cb(res)
      } else {
        fb && fb()
      }
    }
  })
}

// 预登陆
http.preLogin = function(cb, fb) {
  // 1: 先微信登录
  http.wxLogin(function(wxRes) {
    var req = {
      ticket: wxRes.code, // 临时token
      alias: APP_ALIAS, // 应用别名
    }
    // 2: 应用登录
    http.get(APP_SERVER + '/app/pre_login.do', req, function(result) {
      cb && cb(wxRes, result)
    }, function() {
      fb && fb()
    })
  }, fb)
}

// 应用登录
http.appLogin = function(req, cb, fb) {
  http.get(APP_SERVER + '/app/login.do', req, function(result) {
    cb && cb(result)
  }, function() {
    fb && fb()
  })
}

// 登录失败处理
var loginFb = function() {
  // 设置标识
  LOGINING = false
  // 清空任务
  WAIT_LOGIN_TASK_LIST = []
  // 提示登陆失败
  http.error('登陆失败')
}

// 登陆
http.login = function(okCb) {
  console.log('登录请求: LOGINING=', LOGINING)
  if (!LOGINING) {
    LOGINING = true
    // 1: 预先登陆
    http.preLogin(function(wxRes, appRes) {
      // 2: 自动授权，并返回微信用户信息
      http.auth(function(wxUser) {
        var req = {
          ticket: wxRes.code, // 临时token
          alias: APP_ALIAS, // 应用别名,
          encryptedData: wxUser.encryptedData,
          iv: wxUser.iv,
          sessionKey: appRes.data.session_key
        }
        // 3: 系统登录
        http.appLogin(req, function(result) {
          LOGINING = false
          console.log('[登陆成功]: ', result)
          var user = result || {}
          http.setToken(user.token)
          http.saveUser(user)
          http.setStore('userInfo', '')
          WAIT_LOGIN_TASK_LIST.forEach(req => {
            console.log('登陆完成处理任务: ', req.url)
            http.send(req.method, req.url, req.data, req.cb, req.fb)
          })
          WAIT_LOGIN_TASK_LIST = []
          if (okCb && (typeof (okCb) === 'function')) {
            okCb(result)
          } else {
            var curPages = getCurrentPages()
            if (curPages && curPages.length) {
              var page = curPages[curPages.length - 1]
              if (page.onLogin) {
                page.onLogin(result)
              }
            }
          }
        }, loginFb)
        // 3: 系统登录
      }, loginFb)
      // 2: 自动授权
    }, loginFb)
    // 1: 预先登陆
  }
}

// 获取用户信息
http.user = function(cb) {
  var u = http.getStore('userInfo')
  if (!u || !u.name) {
    http.curUser({}, res => {
      http.setStore('userInfo', res.data)
      cb && cb(res.data)
    })
  } else {
    cb && cb(u)
  }
}

http.wexPay = function(payParams, cb) {
  wx.requestPayment({
    timeStamp: payParams.timeStamp || payParams.timestamp,
    nonceStr: payParams.nonceStr || noncestr,
    package: payParams["package"] || 'prepay_id=' + payParams.prepayId,
    signType: payParams.signType,
    paySign: payParams.paySign,
    success: res => {
      let errMsg = res.errMsg || res.err_msg
      console.log('支付成功')
      cb && cb(true, errMsg)
    },
    fail: res => {
      let errMsg = res.errMsg || res.err_msg
      console.error('支付失败: ' + errMsg)
      cb && cb(false, errMsg)
    },
    complete: res => {},
  })
}


// 将位拆开
http.splitBits = function(bits) {
  var posList = [],
    num = typeof(bits) === 'string' ? parseInt(bits) : bits
  for (var i = 0, pos; i < 30; i++) {
    pos = 1 << i
    if ((num & pos) === pos) {
      posList.push(i + 1)
    }
  }
  return posList
}


http.imgUrl = function(imgId, type) {
  if (imgId) {
    return imgId.substring(0, 4) == 'http' ? imgId : IMG_SERVER + imgId
  } else if (type == 'avatar') {
    return '/imgs/avatar.png'
  }
}

// 安装方法
var installMethod = function(obj, method, _url, exeFun) {
  if (!obj[method]) {
    obj[method] = function(data, cb, fb) {
      var doUrl = _url
      if (_url.indexOf('{0}') > 0) {
        doUrl = _url.replace('{0}', data)
        data = {}
      }
      exeFun.call(obj, doUrl, data, cb, fb)
    }
  }
}

// 安装对象
var installObj = function(server, objName) {
  var styles = ['get$', 'get$List', 'add$', 'upd$', 'del$', 'qry$']
  var urls = ['/$/{0}.do', '/$/list.do', '/$/add.do', '/$/upd.do', '/$/del/{0}.do', '/$/qry.do']
  var types = ['GET', 'POST', 'POST', 'POST', 'GET', 'POST']
  //
  styles.forEach((style, idx) => {
    var method = style.replace('$', objName)
    var _url = server + urls[idx].replace('$', objName.substring(0, 1).toLowerCase() + objName.substring(1))
    installMethod(http, method, _url, http[types[idx].toLowerCase()])
  })
}

// CST_APIS
var installMap = function(apiMap) {
  for (var method in apiMap) {
    if (http[method]) {
      continue
    }
    var def = apiMap[method]
    installMethod(http, method, def.uri, http[def.type || 'get'])
  }
}

// API安装
var installList = function(server, objList) {
  objList.forEach((name, idx) => {
    installObj(server, name)
  })
}

// 接口安装 >>>
installMap(CST_APIs)
installList(APP_SERVER, APP_APIs)
installList(UNI_SERVER, UNI_APIs)

module.exports = http