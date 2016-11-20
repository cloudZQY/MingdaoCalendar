 import user from '../../ajax/user'
 import calendarControl from '../../ajax/calendar'

 var app = getApp()

 Page({
   data: {
     users: [],
     pageIndex: 1,
   },
   onLoad(query) {
     this.data.id = query.id;
     this.getData();
   },
   getData() {
     user.getContactUserList({
       keywords: '',
       filterAccountIds: [],
       projectId: '',
       dataRange: 0,
       filterFriend: false,
       filterProjectId: '',
       firstLetter: '',
       pageIndex: this.data.pageIndex,
       pageSize: 20,
     }).then(data => {
       this.data.pageIndex ++;
       this.setData({
         users: this.data.users.concat(data.oftenUsers.list)
       });
     })
   },
   addMember(e) {
     if (this.data.id) {
       calendarControl.addMembers({
         calendarID: this.data.id,
         memberIDs: e.currentTarget.dataset.accountid,
         isAllCalendar: true,
         recurTime: '',
         specialAccounts:{}
       })
     }
    let member = {
      fullname: e.currentTarget.dataset.fullname,
      avatar: e.currentTarget.dataset.avatar,
      accountId: e.currentTarget.dataset.accountid
    }
    app.globalData.addMember = member;
    wx.navigateBack();
   }
 })
