import { getAccountListInfo } from '../../ajax/account'
import moment from '../../utils/moment.min.js'
import calendarControl from '../../ajax/calendar'
import user from '../../ajax/user'
import flatten from '../../utils/flatten'
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    wxUserInfo: {},
    mdAccountInfo: {},
    dateArr: [],
    calendars: [],
  },
  onLoad: function () {
    if (!wx.getStorageSync('md_pss_id')) {
      wx.redirectTo({
        url: '../login/login',
        fail() {
          console.log('跳转失败')
        }
      })
    } 
  },
  onReady() {
    this._getDateArr(moment());
  },
  logout() {
    wx.setStorageSync('md_pss_id', '');
     wx.redirectTo({
        url: '../login/login',
        fail() {
          console.log('跳转失败')
        }
      });
  },
  dateClick(event) {
    let dateArr = this.data.dateArr.map(week => week.map(item => {
      if (item.date === event.currentTarget.dataset.date) {
        item.choosed = true;
        this.setData({
          calendars: item.calendars.map(calendar => {
            let { title, startTime, endTime, head, allDay, id } = calendar;
            return {
              title,
              startTime: startTime.slice(-6),
              endTime: endTime.slice(-6),
              allDay,
              head,
              id,
            }
          })
        })
      } else {
        item.choosed = false;
      }
      return item;
    }))
    this.setData({
      dateArr,
    });
    console.log(this.data.dateArr)
  },
  toDetail(e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.id,
      query: 'a',
    })
  },
  _getDateArr(mDate) {
    let dateArr = [];
    let firstDay = mDate.startOf('month').day();
    let lastDay = mDate.endOf('month').day();
    let lastDate = mDate.endOf('month').date();
    console.log(firstDay, lastDay)
    let showAllDays = lastDate + firstDay - lastDay + 6;
    let showFirstDay = mDate.startOf('month').subtract(firstDay - 1, 'day');
    console.log(showFirstDay)
    user.getAccountBaseInfo().then(data => {
      console.log(data);
      app.globalData.mdAccountInfo = data;
      calendarControl.getCalendars({
        memberIDs: app.globalData.mdAccountInfo.accountId,
        isWorkCalendar: true,
        isTaskCalendar: true,
        categoryIds: 'All',
        startDate: this._format(showFirstDay, 'YYYY-MM-DD'),
        endDate: this._format(showFirstDay.clone().add(34, 'day')),
      }).then(data => {
        console.log(data.data.calendars)
        let calendars = data.data.calendars;
        let calendarsForDate = {};
        calendars.forEach(calendar => {
          let date = calendar.startTime.slice(0, 10);
          if (calendarsForDate[date]) {
            calendarsForDate[date].push(calendar);
          } else {
            calendarsForDate[date] = [calendar];
          }
        })
        // 减一天开始循环
        let accountDay = showFirstDay.clone().subtract(1, 'day');
        for (let row = 0; row < showAllDays / 7; row ++) {
          let week = [];
          for (let col =0; col < 7; col ++) {
            let date = this._format(accountDay.add(1, 'day'));
            week.push({
              date,
              showDate: date.slice(date.search(/\d{1,2}$/)),
              isToday: date === this._format(moment()),
              calendars: calendarsForDate[date] || [],
              choosed: false,
            })
          }
          dateArr.push(week);
        }
        this.setData({dateArr})
      })
    })
  },
  _format(mDate, str = 'YYYY-MM-DD') {
    let year = mDate.year();
    let month = mDate.month() + 1;
    let date = mDate.date();
    let hours = mDate.hours();
    let minutes = mDate.minutes();
    let seconds = mDate.seconds();
    const getDoubleNum = num => num < 10 ? '0' + num : '' + num;
    return str.replace('YYYY', year).replace('MM', getDoubleNum(month)).replace('DD', getDoubleNum(date)).replace('HH', getDoubleNum(hours)).replace('mm', getDoubleNum(minutes)).replace('SS', getDoubleNum(seconds));
  }
})
