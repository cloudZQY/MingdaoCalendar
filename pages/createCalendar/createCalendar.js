import calendarControl from '../../ajax/calendar'
import util from '../../utils/util'

var app = getApp()
Page({
  data:{
    form: {
      remindType: 1,
      remindTime: 15,
    },
    show: {
      remind: '提前15分钟'
    }
  },
  onLoad: function(query) {
    let { remind } = query;
    if (remind) {
      this.data.form = Object.assign(this.data.form, remind);
      this.setData({
        remind: util.getRemindTxt(remind.remindType, remind.remindTime)
      })
    }
  },
  toRemind: function() {
    let remindType = this.data.form.remindType;
    let remindTime;
    if (this.data.form.remindType === 1) {
      remindTime = parseInt(this.data.form.remindTime);
    } else if (this.data.form.remindType === 2) {
      remindTime = parseInt(this.data.form.remindTime) * 60;
    } else if (this.data.form.remindType === 2) {
      remindTime = parseInt(this.data.form.remindTime) * 1440;
    } else {
      remindTime = 0;
    }
    wx.navigateTo({
      url: '../remind/remind?remindType=' + remindType + '&remindTime=' + remindTime
    })
  }
})