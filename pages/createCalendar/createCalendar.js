import calendarControl from '../../ajax/calendar'
import util from '../../utils/util'
import moment from '../../utils/moment.min.js'

var app = getApp()
Page({
  data:{
    form: {
      remindType: 1,
      remindTime: 15,
      name: '',
      desc: '',
      address: '',
      membersIDs: [],
      startDate: '',
      endDate: '',
      isAll: true,
    },
    show: {
      remind: '提前15分钟',
      name: '',
      desc: '',
      address: '',
      membersIDs: '',
    },
    members: []
  },
  onLoad: function(query) {
    this.data.form.membersIDs = [app.globalData.mdAccountInfo.accountId];
    if (query.date) {
      this.data.form.startDate = app.momentFormat(moment(query.date), 'YYYY-MM-DD HH:mm');
      this.data.form.endDate = app.momentFormat(moment(query.date).endOf('day'), 'YYYY-MM-DD HH:mm');
    }
    this.setshow();
  },
  onShow() {
    if(app.createData) {
      this.data.form = Object.assign(this.data.form, app.createData)
      this.setshow();
    }
    if (app.globalData.createMembers) {
      this.data.members = app.globalData.createMembers;
      this.data.form.membersIDs = app.globalData.createMembers.map(member => member.accountId);
      this.setshow();
    }
    if (app.globalData.time) {
      this.data.form.isAll = app.globalData.time.isAll;
      this.data.form.startDate = app.globalData.time.startDate;
      this.data.form.endDate = app.globalData.time.endDate;
      this.setshow();
    }
  },
  onUnload() {
    app.globalData.createMembers = null;
    app.createData = null;
    app.globalData.time = null;
  },
  setshow() {
    let remind;
    let data = this.data.form;
    let { remindType, remindTime } = data;
    if (remindType === 0) {
      remind = '无提醒';
    } else if (remindType === 1) {
      remind = '提前' + remindTime + '分钟'
    } else if (remindType === 2) {
      remind = '提前' + remindTime + '小时'
    } else if (remindType === 3) {
      remind = '提前' + remindTime + '天'
    }
    let time = '';
    if (data.isAll) {
      time = app.momentFormat(moment(data.startDate), 'YYYY-MM-DD') + ' 到 ' + app.momentFormat(moment(data.endDate), 'YYYY-MM-DD');
    } else {
      time = data.startDate + '到' + data.endDate;
    }
    let show = {
      remind,
      name: data.name,
      desc: data.desc,
      address: data.address,
      members: !data.membersIDs ? '' : data.membersIDs.length + '人',
      time,
    }
    this.setData({
      show: Object.assign(this.data.show, show)
    })
  },
  toRemind: function() {
    let remindType = this.data.form.remindType;
    let remindTime = util.getApiRemindNum(this.data.form.remindType, this.data.form.remindTime)
    wx.navigateTo({
      url: '../remind/remind?remindType=' + remindType + '&remindTime=' + remindTime + '&returnUrl=../createCalendar/createCalendar'
    })
  },
  handleInput(e) {
    this.data.form = Object.assign(this.data.form, {
      [e.currentTarget.dataset.name]: e.detail.value
    });
  },
  createCalendar() {
    let data = this.data.form;
    if (!data.name) {
      wx.showModal({
        title: '标题不能为空',
        showCancel: false,
        confirmColor: '#1e88e5',
      })
      return false;
    }
    this.data.form.membersIDs = this.data.form.membersIDs.slice(1).join(',');
    calendarControl.insertCalendar(Object.assign({},this.data.form,{
      categoryID:1,
      specialAccounts:{},
      isRecur:false,
      attachments:{},
      frequency:'',
      interval:'',
      recurCount:0,
      untilDate: '',
      weekDay: '',
      isPrivate:false,
      recurText: '',
    })).then(data => {
        if (data.code === 1) {
          wx.showToast({
            title: '创建成功',
            icon: 'sucess',
          })
        }
        wx.navigateBack();
      })
  },
  toMember() {
    app.globalData.members = [{
      accountId: app.globalData.mdAccountInfo.accountId,
      memberName: app.globalData.mdAccountInfo.fullname,
      head: app.globalData.mdAccountInfo.avatar
    }].concat(this.data.members);
    wx.navigateTo({
      url: '../members/members'
    })
  },
  toTime() {
    wx.navigateTo({
      url: '../time/time?isAll=' + this.data.form.isAll + '&startDate=' +this.data.form.startDate + '&endDate=' + this.data.form.endDate
    })
  }
})