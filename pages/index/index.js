//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    wxUserInfo: {},
    mdAccountInfo: {},
  },
  onLoad: function () {
    app.getCalendar();
    if (!app.globalData.mdAccountInfo) {
      wx.navigateTo({
        url: '../login/login',
        fail() {
          console.log('跳转失败')
        }
      });
    }
  },
  onShow: function () {
    if (!app.globalData.mdAccountInfo) return;
    const page = this;
    Promise.all([app.getWxUserInfo(), app.getMdAccountInfo()]).then(function(values) {
      const [wxUserInfo, mdAccountInfo] = values;
      page.setData({wxUserInfo, mdAccountInfo});
    });
  },
})
