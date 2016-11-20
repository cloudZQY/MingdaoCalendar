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
    isAll: null,
    startDate: null,
    endDate: null,
    show: {},
  },
  onLoad: function (query) {
    this.setData({
      isAll: query.isAll ? true : false,
      startDate: query.startDate,
      endDate: query.endDate,
    })
    this.setshow();
  },
  setshow() {
    this.setData({
      show:{
      startDate: this.data.startDate.slice(0, 10),
      startTime: this.data.startDate.slice(11),
      endDate: this.data.endDate.slice(0, 10),
      endTime: this.data.endDate.slice(11),
    }
    })
  },
  onShow: function () {
    
  },
  onReady() {
    
  },
  onUnload() {
    
  },
  startDateChange(e){
    this.data.startDate = this.data.startDate.replace(/\d\d\d\d-\d\d-\d\d/, e.detail.value);
    this.setshow();
  },
  startTimeChange(e){
    this.data.startDate = this.data.startDate.replace(/\d\d:\d\d/, e.detail.value);
    this.setshow();
  },
  endDateChange(e){
    this.data.endDate = this.data.endDate.replace(/\d\d\d\d-\d\d-\d\d/, e.detail.value);
    this.setshow();
  },
  endTimeChange(e){
    this.data.endDate = this.data.endDate.replace(/\d\d:\d\d/, e.detail.value);
    this.setshow();
  },
  changeAllDay(e) {
    this.setData({
      isAll: !this.data.isAll
    })
  },
  submit() {
    app.globalData.time = {
      isAll: this.data.isAll,
      startDate: this.data.startDate,
      endDate: this.data.endDate,
    }
    wx.navigateBack();
  }
})
