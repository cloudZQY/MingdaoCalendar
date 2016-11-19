import { getAccountListInfo } from '../../ajax/account'
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
    
  },
  onShow: function () {

  },
  onReady() {
   this.setData({
     members: app.globalData.members,
   })
   console.log(app.globalData.members);
  },
  focus() {
    this.setData({
      active: true
    })
  },
  submit() {
  }
})
