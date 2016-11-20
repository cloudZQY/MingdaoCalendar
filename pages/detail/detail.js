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
      let time
      if (allDay) {
        time = start.slice(0, 10) + '  （全天）'
      } else {
        time = '从 ' + start + '到 ' + end
      }
      this.setData({
        calendar: {
          time,
          title,
          description,
          editable,
          address,
          isRecur,
          members,
          remind,
          createUserName,
        }
      })
    })
    
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
  }
})
