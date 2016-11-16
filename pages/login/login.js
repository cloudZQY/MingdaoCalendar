const login = require('../../ajax/login.js');
const util = require('../../utils/util');
const app = getApp();
Page({
  data: {
    account: '',
    password: '',
    active: '',
  },
  onLoad(options) {
    this.setData({    
      returnUrl: options.returnUrl,
    });
  },
  focus(e) {
    this.setData({
      active: e.currentTarget.dataset.name
    })
  },
  blur(e) {
    this.setData({
      active: ''
    })
  },
  validate(event) {
    this.setData({
      [event.currentTarget.dataset.name]: util.trim(event.detail.value)
    })
    console.log(this.data)
  },
  loginSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', this.data)
    const page = this;
    if (e.currentTarget.dataset.disabled === 'true') return false;
    if (this.data.password === '') {
      wx.showModal({
        title: '登录失败',
        content: '密码不能为空，请输入密码',
        showCancel: false,
        confirmColor: '#1e88e5',
      })
      return false;
    }
    app.loginAndGetMdAccountInfo(e.detail.value).then(function () {
      if (page.data.returnUrl) {
        wx.redirectTo(this.data.returnUrl);
      } else {
        wx.navigateBack();
      }
    });
  },
})