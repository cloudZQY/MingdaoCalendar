const {setSessionId, fetchApi} = require('ajax/_api.js');
const login = require('ajax/login.js');
const user = require('ajax/user.js');
App({
  globalData: {
    accessToken: null,
    refreshToken: null,
    appKey: "02CAB33E3A1D",
    appSecret: "604FCD37EE933BE4D3275D4A20EB98E6",
    mdUserInfo: null,
    wxUserInfo: null,
    mdAccountInfo: null,
    mdAccountId: null,
    calendarId: null,
    members: null,
    createData: null,
  },
  onLaunch() {
    // //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
  },
  getWxUserInfo() {
    const app = this;
    return new Promise(function (resolve, reject) {
      if (app.globalData.wxUserInfo) return resolve(app.globalData.wxUserInfo);
      wx.login({
        success() {
          wx.getUserInfo({
            success(res) {
              app.globalData.wxUserInfo = res.userInfo;
              resolve(app.globalData.wxUserInfo);
            },
            fail() {
              reject();
            }
          });
        },
        fail() {
          reject();
        },
      })
    });
  },
  getMdAccountInfo() {
    const app = this;
    return new Promise(function (resolve, reject) {
      console.log(app.globalData.mdAccountInfo)
      if (app.globalData.mdAccountInfo) return resolve(app.globalData.mdAccountInfo);
      reject();
    });
  },
  loginAndGetMdAccountInfo(formData) {
    const app = this;
    return new Promise(function (resolve, reject) {
      login.mDAccountLogin(formData).then(function (data) {
        const { accountResult, accountId } = data || {};
        if (accountResult === 7) {
          wx.showModal({
            title: '登陆失败',
            content: '账号或密码不正确',
            success: () => reject(),
          })
        } else if (accountResult !== 1 || !accountId) {
          wx.showModal({
            title: '登录失败',
            content: '返回状态码是 ' + accountResult,
            success: () => reject(),
          });
        } else {
          setSessionId(data.sessionId);
          app.globalData.mdAccountId = accountId;
          resolve();
        }
      }, function (res) {
        wx.showModal({
          title: '登录失败',
          content: res && res.errorMessage,
          success: () => reject(),
        });
      });
    });
  }

})