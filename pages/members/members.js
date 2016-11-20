import {
  getAccountListInfo
} from '../../ajax/account'
import moment from '../../utils/moment.min.js'
import calendarControl from '../../ajax/calendar'

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    members: [],
  },
  onLoad: function (query) {
    this.data.id = query.id;
  },
  onShow: function () {
    if (app.globalData.addMember) {
      this.setData({
        members: this.data.members.concat({
          memberName: app.globalData.addMember.fullname,
          head: app.globalData.addMember.avatar,
          accountId: app.globalData.addMember.accountId
        })
      })
      app.globalData.createMembers = this.data.members;
    }
  },
  onReady() {
    this.setData({
      members: app.globalData.members,
    })
    console.log(app.globalData.members);
  },
  onUnload() {
    app.globalData.members = null;
    app.addMember = null;
  },
  focus() {
    this.setData({
      active: true
    })
  },
  submit() {},
  addMember() {
    wx.navigateTo({
      url: '../addMember/addMember?id=' + (this.data.id || '')
    })
  }
})
