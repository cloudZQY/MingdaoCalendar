let app = getApp();
let user = require('../../../api/mingdao/users');
let calendarApi = require('../../../api/mingdao/calendar');
let pages = require('../../../utils/pages');

let asyncLib = require('../../../utils/async');
let datetime = require('../../../utils/datetime');
let formatDate = datetime.formatTime;

Page({
  data: {
    events: [],
    animation: null
  },

  tapCard: function (event) {
    // let id = event.currentTarget.dataset.id;
    // let changeIndex = 0;
    // let lastVisible = null;

    // this.data.events.forEach(function (e, i) {
    //   if (id === e.event_id) {
    //     changeIndex = i;
    //     lastVisible = e.hideDetail;
    //   }
    // });

    // let changeData = {};
    // changeData['events[' + changeIndex + '].hideDetail'] = !lastVisible;
    // //changeData['events[' + changeIndex + '].hideDetail'] = !lastVisible;
    // let animation = wx.createAnimation({
    //   duration: 400,
    //   timingFunction: "ease",
    //   delay: 0
    // });
    // if (lastVisible) { // 执行展开
    //   animation
    //     .height('300rpx').step()

    //   changeData['events[' + changeIndex + '].hideDetail'] = !lastVisible;
    //   changeData['events[' + changeIndex + '].animation'] = animation.export()
    //   this.setData(changeData);
    // } else { // 执行收起
    //   animation.height('0rpx').step()
    //   changeData['events[' + changeIndex + '].hideDetail'] = !lastVisible;
    //   changeData['events[' + changeIndex + '].animation'] = animation.export()
    //   this.setData(changeData);
    // }








  },
  tapConfirm: function (event) {
    let id = event.currentTarget.dataset.id;
    let isConfirm = event.currentTarget.dataset.confirm;

    calendarApi.confirmEvent(id, (isSuccess) => {

      let changeIndex = 0;

      this.data.events.forEach(function (e, i) {
        if (id === e.event_id) {
          changeIndex = i;
        }
      });

      let changeData = {};
      let animation = wx.createAnimation({
        duration: 400,
        timingFunction: "ease",
        delay: 0
      });
      animation
        .scale(0.1, 0.1).step()

      changeData['events[' + changeIndex + '].animation'] = animation.export();
      this.setData(changeData);

      setTimeout(() => {        
        changeData={};
        changeData['events[' + changeIndex + '].hideDetail'] = true;
        this.setData(changeData);
      }, 380)
    
    });

  },

  ///////////////////////////////////////////////

  onLoad: function () { },

  onShow: function () {
    let eventList = [];
    asyncLib.series([
      (next) => {
        if (app.globalData.mdAccountInfo == null) {
          user.GetCurrentUserDetail((mdAccountInfo) => {
            next();
          });
        } else {
          next();
        }
      },
      (next) => {
        if (app.globalData.category == null) {
          calendarApi.GetUserCategory((category) => {
            app.globalData.category = category;
            next();
          });
        } else {
          next();
        }
      },
      (next) => {
        let aid = app.globalData.mdAccountInfo.accountid;
        let today = formatDate(datetime.today);
        let nextMonth = formatDate(datetime.nextMonth);
        let catories = app.globalData.category.map((c) => {
          return c.category_id
        }).join(',');

        calendarApi.GetUnConfirmCalendars((list) => {
          eventList = list;
          next();
        })

        // calendarApi.GetCalendarList(today, nextMonth, aid, catories, (list) => {
        //   eventList = list;
        //   next();
        // });
      }
    ], () => {
      this.setData({
        events: eventList
      });

    });

  },
  onHide: function () {
    console.log('today onhide')
  },
  onUnload: function () {
    console.log('today onunload')
  },
  onReady: function () {
    console.log('today onready')




    // user.getUserInfo(function (userInfo) {

    // })
  },


})
