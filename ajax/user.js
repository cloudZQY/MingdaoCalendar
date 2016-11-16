var api = require('./_api.js');
var ctrlName = 'User';
/**
 * 用户相关
 * @exports AjaxCtrl/User
 */
var user = {
    /**
     * 根据关键词自动联想用户
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} [args.keywords=null] 
     * @param {Int32} [args.maxRows=10] 
     * @param {Boolean} [args.filterMySelf=False] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UserModel[], ErrorModel>} 
     */
    getAutoUsersByKeywords: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAutoUsersByKeywords', args, options);
    },
    
    /**
     * 获取用户列表
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {String} [args.keywords=null] 
     * @param {String[]} [args.firstLetters=null] 
     * @param {String[]} [args.departments=null] 
     * @param {String[]} [args.workSites=null] 
     * @param {String[]} [args.groupIds=null] 
     * @param {UserStatus} [args.userStatus=1] 
     * @param {SortUser} [args.sortField=0] 
     * @param {SortType} [args.sortType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<UserModel>, ErrorModel>} 
     */
    getUserList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserList', args, options);
    },
    
    /**
     * 获取待审批的用户
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {SortUser} [args.sortField=10] 
     * @param {SortType} [args.sortType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ApprovalUserModel, ErrorModel>} 
     */
    getApprovalUser: function(args, options) {
        return api.fetchApi(ctrlName, 'GetApprovalUser', args, options);
    },
    
    /**
     * 用户筛选
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UserFilterModel, ErrorModel>} 
     */
    getUserFilterData: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserFilterData', args, options);
    },
    
    /**
     * 获取网络内用户信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UserModel, ErrorModel>} 
     */
    getUserCard: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserCard', args, options);
    },
    
    /**
     * 获取用户账号基本信息
     * @param {Object} args 请求参数
     * @param {String} [args.accountId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountInfoModel, ErrorModel>} 
     */
    getAccountBaseInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountBaseInfo', args, options);
    },
    
    /**
     * 获取用户详细信息
     * @param {Object} args 请求参数
     * @param {String} [args.accountId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountInfoModel, ErrorModel>} 
     */
    getAccountDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountDetail', args, options);
    },
    
    /**
     * mentionsInput 使用，@出来的用户和群组
     * @param {Object} args 请求参数
     * @param {Int32} [args.search=0] 
     * @param {String} args.keywords 
     * @param {Int32} [args.pageSize=10] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<MentionsInputModel, ErrorModel>} 
     */
    getUsersByKeywords: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUsersByKeywords', args, options);
    },
    
    /**
     * 获取当前用户经常协作的用户
     * @param {Object} args 请求参数
     * @param {Int32} [args.count=10] 
     * @param {String[]} [args.filterAccountIds=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UserModel[], ErrorModel>} 
     */
    getOftenMetionedUser: function(args, options) {
        return api.fetchApi(ctrlName, 'GetOftenMetionedUser', args, options);
    },
    
    /**
     * 获取用户列表（projectId不存在加载好友，projectId存在加载公司通讯录）
     *     当 dataRange=project时 projectId不能为空
     * @param {Object} args 请求参数
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {String} [args.keywords=null] 
     * @param {String} [args.projectId=null] 
     * @param {CooperationRange} [args.dataRange=0] 
     * @param {String} [args.firstLetter=null] 
     * @param {Boolean} [args.filterFriend=False] 
     * @param {String} [args.filterProjectId=null] 
     * @param {String[]} [args.filterAccountIds=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ContactUserModel, ErrorModel>} 
     */
    getContactUserList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetContactUserList', args, options);
    },
    
    /**
     * 设置用户信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.accountId 
     * @param {String} args.companyName 
     * @param {String} args.department 
     * @param {String} args.workSite 
     * @param {String} args.job 
     * @param {String} args.jobNumber 
     * @param {String} args.contactPhone 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UserActionResult, ErrorModel>} 
     */
    updateUserCard: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateUserCard', args, options);
    },
    
    /**
     * 更新用户部门信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String[]} args.accountIds 
     * @param {String} args.department 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateUserDepartment: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateUserDepartment', args, options);
    },
    
    /**
     * 移除用户
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RemoveUserStatus, ErrorModel>} 
     */
    removeUser: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveUser', args, options);
    },
    
    /**
     * 恢复用户
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UserActionResult, ErrorModel>} 
     */
    recoveryUser: function(args, options) {
        return api.fetchApi(ctrlName, 'RecoveryUser', args, options);
    },
    
    /**
     * 审批同意用户加入公司
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String[]} args.accountIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UserActionResult, ErrorModel>} 
     */
    agreeUserJoin: function(args, options) {
        return api.fetchApi(ctrlName, 'AgreeUserJoin', args, options);
    },
    
    /**
     * 审批拒绝用户加入公司
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String[]} args.accountIds 
     * @param {String} [args.refuseMessage=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    refuseUserJoin: function(args, options) {
        return api.fetchApi(ctrlName, 'RefuseUserJoin', args, options);
    },
    
    /**
     * 提醒填写工作电话
     * @param {Object} args 请求参数
     * @param {String[]} args.accountIds 
     * @param {ContactNoticeType} args.type 
     * @param {String} [args.projectId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<undefined, ErrorModel>} 
     */
    sendNotice: function(args, options) {
        return api.fetchApi(ctrlName, 'SendNotice', args, options);
    },
    
    /**
     * 根据ProjectId检测当前用户是不是网络管理员
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    validateUserIsProjectAdmin: function(args, options) {
        return api.fetchApi(ctrlName, 'ValidateUserIsProjectAdmin', args, options);
    },
    
    /**
     * 检查当前用户是否有好友
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    validateUserHaveFriend: function(args, options) {
        return api.fetchApi(ctrlName, 'ValidateUserHaveFriend', args, options);
    }
};
module.exports = user;
