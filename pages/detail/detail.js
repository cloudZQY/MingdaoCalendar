import { getAccountListInfo } from '../../ajax/account'
import moment from '../../utils/moment.min.js'
import calendarControl from '../../ajax/calendar'
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    calendar: null,
    id: null,
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
      let {
        start,
        end,
        title,
        description,
        address,
        isRecur,
        members,
        remindTime,
        remindType,
        allDay,
        createUserName,
      } = calendar;
      let remind = remindTime;
      let time
      if (remindType === 0) {
        remind = '不提醒';
      } else if (remindType === 1) {
        remind += '分钟'
      } else if (remindType === 2) {
        remind = remind / 60 + '小时'
      } else if (remindType === 3) {
        remind = remind / 1440 + '天'
      }
      if (allDay) {
        time = start.slice(0, 10) + '  （全天）'
      } else {
        time = start + ' - ' + end
      }
      this.setData({
        calendar: {
          time,
          title,
          description,
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
})
