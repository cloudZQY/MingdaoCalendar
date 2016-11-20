 import user from '../../ajax/user'

 var app = getApp()

 Page({
   data: {
     users: [],
     pageIndex: 1,
   },
   onLoad() {
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
     let member = {
       fullname: e.currentTarget.dataset.fullname,
       avatar: e.currentTarget.dataset.avatar,
       accountId: e.currentTarget.dataset.accountid
     }
     app.globalData.addMember = member;
     wx.navigateBack();
   }
 })
