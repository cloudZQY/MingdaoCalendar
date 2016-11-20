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
    date: null,
    activeDate: null,
    showExit: false,
    showCreate: true,
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
    this.setData({
      activeDate: moment(),
    })
  },
  onReady() {
    user.getAccountBaseInfo().then(data => {
      app.globalData.mdAccountInfo = data;
      this.setData({
        mdAccountInfo: data
      })
      this._getDateArr(this.data.activeDate.clone());
    });
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
    this.showCreate();
    let dateArr = this.data.dateArr.map(week => week.map(item => {
      if (item.date === event.currentTarget.dataset.date) {
        item.choosed = true;
        this.setData({
          calendars: item.calendars.map(calendar => {
            let { title, start, end, head, allDay, id } = calendar;
            return {
              title,
              startTime: start.slice(-6),
              endTime: end.slice(-6),
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
    })
  },
  _getDateArr(mDate) {
    this.setData({
      date: this._format(mDate, 'YYYY-MM'),
    })
    let dateArr = [];
    let firstDay = mDate.startOf('month').day();
    let lastDay = mDate.endOf('month').day();
    let lastDate = mDate.endOf('month').date();
    let showAllDays = lastDate + firstDay - lastDay + 6;
    let showFirstDay = mDate.clone().startOf('month').subtract(firstDay - 1, 'day');
    // 减一天开始循环
    let accountDay = showFirstDay.clone().subtract(1, 'day');
    for (let row = 0; row < showAllDays / 7; row ++) {
      let week = [];
      for (let col =0; col < 7; col ++) {
        let date = this._format(accountDay.add(1, 'day'));
        week.push({
          date,
          showDate: date.slice(date.search(/\d{1,2}$/)),
          prevMonth: moment(date).month() < mDate.month(),
          nextMonth: moment(date).month() > mDate.month(),
        })
      }
      dateArr.push(week);
    }
    this.setData({dateArr})
    let request = calendarControl.getCalendars({
      memberIDs: app.globalData.mdAccountInfo.accountId,
      isWorkCalendar: true,
      isTaskCalendar: true,
      categoryIds: 'All',
      startDate: this._format(showFirstDay, 'YYYY-MM-DD'),
      endDate: this._format(showFirstDay.clone().add(34, 'day')),
    })
    this.request = request;
    request.then(data => {
      if (this.request !== request) {
        return false;
      }
      let dateArr = [];
      console.log(data.data.calendars)
      let calendars = data.data.calendars;
      let calendarsForDate = {};
      calendars.forEach(calendar => {
        let date = calendar.start.slice(0, 10);
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
            prevMonth: moment(date).month() < mDate.month(),
            nextMonth: moment(date).month() > mDate.month(),
          })
        }
        dateArr.push(week);
      }
      this.setData({dateArr})
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
  },
  toNextMonth() {
    this.data.activeDate = this.data.activeDate.clone().add(1, 'month');
    this._getDateArr(this.data.activeDate.clone());
  },
  toPrevMonth() {
    this.data.activeDate = this.data.activeDate.clone().subtract(1, 'month');
    this._getDateArr(this.data.activeDate.clone());
  },
  touchstart(e) {
    this.clientX = e.changedTouches[0].clientX;
    
  },
  touchend(e) {
    if (e.changedTouches[0].clientX - this.clientX > 170) {
      this.toPrevMonth();
    }
    if (e.changedTouches[0].clientX - this.clientX < -170) {
      this.toNextMonth();
    }
  },
  showExit(e) {
    this.setData({
      showExit: true,
    })
  },
  hideExit() {
    this.setData({
      showExit: false,
    })
  },
  toCreateCalendar() {
    wx.navigateTo({
      url: '../createCalendar/createCalendar?',
    })
  },
  scroll(e) {
    console.log(e)
  },
  showCreate(e) {
    this.setData({
      showCreate: true,
    })
  },
  hideCreate(e) {
    this.setData({
      showCreate: false,
    })
  },
  toList() {
    wx.redirectTo({
      url: '../list/today/today',
      fail() {
        console.log('跳转失败')
      }
    })
  }
})
