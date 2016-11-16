const {setSessionId, fetchApi} = require('ajax/_api.js');
const login = require('ajax/login.js');
const user = require('ajax/user.js');
App({
  globalData: {
    wxUserInfo:null,
    mdAccountInfo: null,
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
  getCalendar() {
    fetchApi('Calendar', 'GetCalendars', {
      isWorkCalendar:true,
      isTaskCalendar:true,
      filterTaskType:'2',
      categoryIDs:'All',
      memberIDs:'c9903772-ca46-496d-8ea4-fa0892b8eb37',
      startDate:'2016-11-15',
      endDate:'2016-11-16',
    }).then(data => {
      console.log(data)
    })
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
          user.getAccountDetail({accountId}).then(function (data) {
            app.globalData.mdAccountInfo = data;
            console.log('获取帐号信息成功', data)
            resolve(app.globalData.mdAccountInfo);
          }, function (err) {
            console.error('获取帐号信息失败', err)
            reject();
          });
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