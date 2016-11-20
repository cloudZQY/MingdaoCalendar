const login = require('../../ajax/login.js');
const util = require('../../utils/util');
const apiAuth = require('../../api/mingdao/auth');
const asyncLib = require('../../utils/async');

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
  },
  loginSubmit(e) {
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

    asyncLib.parallel([
      (done) => {
        apiAuth.GetAccessToken(this.data.account, this.data.password, () => {
          done();
        });
      },
      (done) => {
        app.loginAndGetMdAccountInfo(e.detail.value).then(function () {
            done();
        });
      }
    ], function (err) {
      if (page.data.returnUrl) {
        wx.redirectTo(this.data.returnUrl);
      } else {
        console.log('跳转')
        wx.redirectTo({
          url: '../index/index',
          fail() {
            console.log('跳转失败')
          }
        });
      }
    });




    // app.loginAndGetMdAccountInfo(e.detail.value).then(function () {
    //   if (page.data.returnUrl) {
    //     wx.redirectTo(this.data.returnUrl);
    //   } else {
    //     console.log('跳转')
    //     wx.redirectTo({
    //       url: '../index/index',
    //       fail() {
    //         console.log('跳转失败')
    //       }
    //     });
    //   }
    // });


  },
})