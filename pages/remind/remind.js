import { getAccountListInfo } from '../../ajax/account'
import moment from '../../utils/moment.min.js'
import calendarControl from '../../ajax/calendar'
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    remindType: null,
    remindTime: null,
    active: null,
    id: null,
  },
  onLoad: function (query) {
    let remindType = parseInt(query.remindType)
    let remindTime = parseInt(query.remindTime)
    this.data.id = query.id;
    this.data.remindType = remindType;
    if (remindType === 1) {
      this.data.remindTime = remindTime
    } else if (remindType === 2) {
      this.data.remindTime = remindTime / 60
    } else if (remindType === 3) {
      this.data.remindTime = remindTime / 1440
    } else {
      this.data.remindTime = ''
    }
  },
  onShow: function () {

  },
  onReady() {
   
  },
  focus() {
    this.setData({
      active: true
    })
  },
  blur() {
    this.setData({
      active: false
    })
  },
  input(e) {
    this.data.remindTime = parseInt(e.detail.value);
  },
  radioChange(e) {
    this.data.remindType = parseInt(e.detail.value)
  },
  submit() {
    if(this.data.id) {
      calendarControl.updateMemberRemind({
        remindTime: this.data.remindTime,
        remindType: this.data.remindType,
        calendarID: this.data.id,
      }).then(data => {
         if (data.code === 1) {
              wx.showToast({
              title: '修改成功',
              icon: 'sucess',
            })
         }
        wx.navigateBack()
      })
    } else {
      app.createData = {
        remindTime: this.data.remindTime,
        remindType: this.data.remindType,
      }
      wx.navigateBack()
    }
  }
})
