import { getAccountListInfo } from '../../ajax/account'
import moment from '../../utils/moment.min.js'
import calendarControl from '../../ajax/calendar'
import util from '../../utils/util'
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    calendar: null,
    id: null,
    calendarData: null,
  },
  onLoad: function (query) {
    this.data.id = query.id;
  },
  onShow: function () {
    calendarControl.getCalendarDetail2({
      calendarId: this.data.id,
      recurTime: '',
    }).then(data => {
      console.log(data);
      let calendar = data.data.calendar;
      this.data.calendarData = calendar;
      let {
        start,
        end,
        title,
        description,
        address,
        editable,
        isRecur,
        members,
        remindTime,
        remindType,
        allDay,
        createUserName,
      } = calendar;
      let remind = util.getRemindTxt(remindType, remindTime)
      let startTime,endTime;
      if (allDay) {
        startTime = start.slice(0, 10) + ' 到'
        endTime = end.slice(0,10)
      } else {
        startTime = start + ' 到 '
        endTime = end
      }
      this.setData({
        calendar: {
          startTime,
          endTime,
          title,
          description,
          editable,
          address,
          isRecur,
          members,
          remind,
          createUserName,
          start,
          end,
          allDay,
        }
      })
    })

  },
  editInfo() {
    
  },

  onReady() {

  },
  toMembers() {
    app.globalData.members = this.data.calendarData.members;
    wx.navigateTo({
      url: '../members/members?id=' + this.data.id,
    })
  },
  toRemind() {
    wx.navigateTo({
      url: '../remind/remind?remindType=' + this.data.calendarData.remindType + '&remindTime=' + this.data.calendarData.remindTime + '&id=' + this.data.id,
    })
  },
  toEdit() {
    app.globalData.editData = {
      title: this.data.calendar.title,
      desc: this.data.calendar.description,
      address: this.data.calendar.address,
      id: this.data.id,
      start: this.data.calendar.start,
      isAll: this.data.calendar.allDay,
      end: this.data.calendar.end,
    }
    wx.navigateTo({
      url: '../editCalendar/editCalendar'
    })
  }
})
