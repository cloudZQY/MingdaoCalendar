import calendarControl from '../../ajax/calendar'
//获取应用实例
var app = getApp()
Page({
  data: {
    title: null,
    desc: null,
    address: null,
    show: {},
  },
  onLoad() {
    let query = app.globalData.editData;
    this.setData({
      title: query.title,
      desc: query.desc,
      address: query.address,
      id: query.id,
      start: query.start,
      end: query.end,
      isAll: query.isAll,
    })
    this.setshow();
  },
  onShow() {
    if (app.globalData.time) {
      this.setData({
        start: app.globalData.time.startDate,
        end: app.globalData.time.endDate,
        isAll: app.globalData.time.isAll
      })
      this.setshow();
    }
  },
  onUnload() {
    app.globalData.time = null;
  },
  setshow(){
    let { isAll, start, end } = this.data;
    let startTime = '';
    let endTime = '';
    if (isAll) {
      startTime = start.slice(0, 10) + ' 到';
      endTime = end.slice(0,10);
    } else {
      startTime = start + ' 到 '
      endTime = end
    }
    this.setData({
      show: {
        startTime,
        endTime
      }
    })
  },
    openMap() {
      console.log(1)
    wx.chooseLocation({
      success: data => {
        this.setData({
          address: data.address + ' ' + data.name,
        })
      }
    })
  },
  titleChange(e) {
    this.setData({
      title: e.detail.value
    })
  },
  descChange(e) {
    this.setData({
      desc: e.detail.value
    })
  },
  addressChange(e) {
    this.setData({
      address: e.detail.value
    })
  },
  submit() {
    calendarControl.editCalendar({
      calendarId: this.data.id,
      name:this.data.title,
      address:this.data.address,
      startDate:this.data.start,
      endDate:this.data.end,
      desc:this.data.desc,
      isAll:false,
      isRecur:false,
      attachments:[],
      frequency: '',
      interval: '',
      recurCount:0,
      pgStr:[],
      untilDate: '',
      weekDay:0,
      recurtime: '',
      isAllCalendar:true,
      reConfirm:false,
      recurText: '',
    }).then(data => {
      if (data.code === 1) {
        wx.showToast({
          title: '修改成功',
          icon: 'sucess',
        })
      }
      wx.navigateBack();
    })
  },
  toTime() {
    wx.navigateTo({
      url:'../time/time?isAll=' + this.data.isAll + '&startDate=' +this.data.start + '&endDate=' + this.data.end
    })
  }
})