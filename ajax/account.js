var api = require('./_api.js');
var ctrlName = 'Account';
/**
 * 个人中心相关
 * @exports AjaxCtrl/Account
 */
var account = {
    /**
     * 获取账户一览信息
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountListModel, ErrorModel>} 
     */
    getAccountListInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountListInfo', args, options);
    },
    
    /**
     * 获取积分的途径列表
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountScoreModel>, ErrorModel>} 
     */
    getAccountScore: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountScore', args, options);
    },
    
    /**
     * 获取所用级别列表
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountPointModel>, ErrorModel>} 
     */
    getAccountPoint: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountPoint', args, options);
    },
    
    /**
     * 获取积分历史
     * @param {Object} args 请求参数
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountCostLog>, ErrorModel>} 
     */
    getAccountCostLogList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountCostLogList', args, options);
    },
    
    /**
     * 获取授权记录
     * @param {Object} args 请求参数
     * @param {String} args.pageIndex 
     * @param {String} args.pageSize 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountLicenseModel>, ErrorModel>} 
     */
    getAccountLicenseList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountLicenseList', args, options);
    },
    
    /**
     * 获取个人资料全部信息
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountInfoModel, ErrorModel>} 
     */
    getAccountAllInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountAllInfo', args, options);
    },
    
    /**
     * 获取个人账户基本信息
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountInfoModel, ErrorModel>} 
     */
    getAccountBasicInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountBasicInfo', args, options);
    },
    
    /**
     * 获取个人账户的头像
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountInfoModel, ErrorModel>} 
     */
    getAccountAvatar: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountAvatar', args, options);
    },
    
    /**
     * 获取个人账户的联系方式
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountInfoModel, ErrorModel>} 
     */
    getContactInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetContactInfo', args, options);
    },
    
    /**
     * 获取个人账户的工作/教育履历
     * @param {Object} args 请求参数
     * @param {AccountDetailType} args.type 用户资历类型
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountDetailListModel, ErrorModel>} 
     */
    getAccountDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountDetail', args, options);
    },
    
    /**
     * 删除履历
     * @param {Object} args 请求参数
     * @param {String} args.autoId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    delAccountDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'DelAccountDetail', args, options);
    },
    
    /**
     * 保存个人账户基本信息
     * @param {Object} args 请求参数
     * @param {String} [args.fullname=null] 真实姓名
     * @param {String} [args.birthdate=null] 出身日期
     * @param {Gender} [args.gender=0] 性别：1表示男性；2表示女性
     * @param {String} [args.companyName=null] 单位名称
     * @param {String} [args.profession=null] 职业
     * @param {String} [args.address=null] 通讯地址
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editAccountBasicInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'EditAccountBasicInfo', args, options);
    },
    
    /**
     * 保存个人账户的联系方式
     * @param {Object} args 请求参数
     * @param {String} [args.imQQ=null] QQ账号,null时不修改
     * @param {String} [args.snsLinkedin=null] Linkedin账号,null时不修改
     * @param {String} [args.snsSina=null] 新浪微博账号,null时不修改
     * @param {String} [args.snsQQ=null] 腾讯微博账号,null时不修改
     * @param {String} [args.weiXin=null] 微信号,null时不修改
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editContactInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'EditContactInfo', args, options);
    },
    
    /**
     * 保存个人账户的工作/教育履历
     * @param {Object} args 请求参数
     * @param {String} [args.name=null] 雇主/学校名称,null时不修改
     * @param {String} [args.title=null] 职位/学位&学历,null时不修改
     * @param {String} [args.description=null] 工作内容/核心课程,null时不修改
     * @param {String} [args.startDate=null] 开始年月份,null时不修改
     * @param {String} [args.endDate=null] 结束年月份,null时不修改
     * @param {AccountDetailType} [args.type=1] LOV：1表示工作；2表示教育,null时不修改
     * @param {Int32} [args.autoId=0] 修改的Id
     * @param {String} [args.isSoFar=null] 是否至今仍在 0：是的  1：不是
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editAccountDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'EditAccountDetail', args, options);
    },
    
    /**
     * 获取账户信息（手机/邮箱）
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountInfoModel, ErrorModel>} 
     */
    getAccountInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountInfo', args, options);
    },
    
    /**
     * 修改绑定手机
     * @param {Object} args 请求参数
     * @param {String} args.mobilePhone 
     * @param {String} args.verifyCode 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editMobilePhone: function(args, options) {
        return api.fetchApi(ctrlName, 'EditMobilePhone', args, options);
    },
    
    /**
     * 修改绑定邮箱
     * @param {Object} args 请求参数
     * @param {String} args.email 
     * @param {String} args.verifyCode 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editEmail: function(args, options) {
        return api.fetchApi(ctrlName, 'EditEmail', args, options);
    },
    
    /**
     * 修改账户密码
     * @param {Object} args 请求参数
     * @param {String} args.oldPwd 
     * @param {String} args.newPwd 
     * @param {String} args.confirmPwd 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editPwd: function(args, options) {
        return api.fetchApi(ctrlName, 'EditPwd', args, options);
    },
    
    /**
     * 发送修改帐号验证码
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    sendVerifyCode: function(args, options) {
        return api.fetchApi(ctrlName, 'SendVerifyCode', args, options);
    },
    
    /**
     * 注销用户 暂时不做该功能废除
     * @param {Object} args 请求参数
     * @param {String} args.checkCode 验证码
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    delAccount: function(args, options) {
        return api.fetchApi(ctrlName, 'DelAccount', args, options);
    },
    
    /**
     * 验证登陆密码
     * @param {Object} args 请求参数
     * @param {String} args.password 密码
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    checkAccount: function(args, options) {
        return api.fetchApi(ctrlName, 'CheckAccount', args, options);
    },
    
    /**
     * 修改账号
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {String} args.verifyCode 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editAccount: function(args, options) {
        return api.fetchApi(ctrlName, 'EditAccount', args, options);
    },
    
    /**
     * 取消绑定明道账号
     * @param {Object} args 请求参数
     * @param {String} args.state 
     * @param {TPType} args.tpType 1:微信  2:QQ  3:BQQ
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    unBindAccount: function(args, options) {
        return api.fetchApi(ctrlName, 'UnBindAccount', args, options);
    },
    
    /**
     * 个人账户登录
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {String} args.password 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    accountLogin: function(args, options) {
        return api.fetchApi(ctrlName, 'AccountLogin', args, options);
    },
    
    /**
     * 清理mq的session状态
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<undefined, ErrorModel>} 
     */
    clearMQSession: function(args, options) {
        return api.fetchApi(ctrlName, 'ClearMQSession', args, options);
    },
    
    /**
     * 获取我加入的网络
     * @param {Object} args 请求参数
     * @param {String} args.pageIndex 
     * @param {String} args.pageSize 0:返回所有
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<ProjectModel>, ErrorModel>} 
     */
    getProjectList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectList', args, options);
    },
    
    /**
     * 加入网络
     * @param {Object} args 请求参数
     * @param {String} args.projectCode 企业号
     * @param {String} args.checkCode 验证码
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectStatusModel, ErrorModel>} 
     */
    joinProject: function(args, options) {
        return api.fetchApi(ctrlName, 'JoinProject', args, options);
    },
    
    /**
     * 添加网络名片并将用户加入网络
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.job 
     * @param {Boolean} args.isDirectInvite 
     * @param {String} args.department 
     * @param {String} [args.companyName=null] 
     * @param {String} [args.workSite=null] 
     * @param {String} [args.jobNum=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    addUserCardInProject: function(args, options) {
        return api.fetchApi(ctrlName, 'AddUserCardInProject', args, options);
    },
    
    /**
     * 管理员在后台是否勾选需要用户填写
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectStatusModel, ErrorModel>} 
     */
    getProjectUserSetting: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectUserSetting', args, options);
    },
    
    /**
     * 明道组织网络号是否存在
     * @param {Object} args 请求参数
     * @param {String} args.projectCode 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectModel, ErrorModel>} 
     */
    getCompanyNameByCode: function(args, options) {
        return api.fetchApi(ctrlName, 'GetCompanyNameByCode', args, options);
    },
    
    /**
     * 获取网路名片
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {AuthType} args.authType 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UserModel, ErrorModel>} 
     */
    getUserCard: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserCard', args, options);
    },
    
    /**
     * 添加网路名片
     * @param {Object} args 请求参数
     * @param {String} args.projectId 组织ID
     * @param {String} [args.department=null] 部门名
     * @param {String} [args.job=null] 职位
     * @param {String} [args.companyName=null] 组织名称
     * @param {String} [args.workSite=null] 工作地点
     * @param {String} [args.jobNum=null] 工号
     * @param {String} [args.contactPhone=null] 电话
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editUserCard: function(args, options) {
        return api.fetchApi(ctrlName, 'EditUserCard', args, options);
    },
    
    /**
     * 申请成为网路管理员
     * @param {Object} args 请求参数
     * @param {String} args.projectId 网路ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ApplyAdminModel, ErrorModel>} 
     */
    applyForProjectAdmin: function(args, options) {
        return api.fetchApi(ctrlName, 'ApplyForProjectAdmin', args, options);
    },
    
    /**
     * 退出网络（密码验证）
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.password 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ExitProjectResult, ErrorModel>} 
     */
    validateExitProject: function(args, options) {
        return api.fetchApi(ctrlName, 'ValidateExitProject', args, options);
    },
    
    /**
     * 退出网络（全部交接给小秘书）
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.password 
     * @param {String} [args.newAdminAccountId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ExitProjectResult, ErrorModel>} 
     */
    exitProject: function(args, options) {
        return api.fetchApi(ctrlName, 'ExitProject', args, options);
    },
    
    /**
     * 提醒管理员审核
     * @param {Object} args 请求参数
     * @param {String} args.projectId 网络ID
     * @param {SendToAdminMsg} args.msgType 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    sendSystemMessageToAdmin: function(args, options) {
        return api.fetchApi(ctrlName, 'SendSystemMessageToAdmin', args, options);
    },
    
    /**
     * 获取我的邀请信息
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountAuthModel>, ErrorModel>} 
     */
    getMyAuthList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetMyAuthList', args, options);
    },
    
    /**
     * 获取我的未处理的邀请信息
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountAuthModel, ErrorModel>} 
     */
    getUntreatAuthList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUntreatAuthList', args, options);
    },
    
    /**
     * 同意邀请
     * @param {Object} args 请求参数
     * @param {String} args.projectId 企业组织ID
     * @param {String} args.inviterAccountId 邀请人账户ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    agreeInvition: function(args, options) {
        return api.fetchApi(ctrlName, 'AgreeInvition', args, options);
    },
    
    /**
     * 拒绝加入邀请
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.inviterAccountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    refuseInvition: function(args, options) {
        return api.fetchApi(ctrlName, 'RefuseInvition', args, options);
    },
    
    /**
     * 获取我的徽章
     * @param {Object} args 请求参数
     * @param {Int32} args.pageIndex 
     * @param {Int32} args.pageSize 
     * @param {MedalType} [args.type=-1] 
     * @param {String} [args.keyword=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountMedalModel>, ErrorModel>} 
     */
    getMedalByType: function(args, options) {
        return api.fetchApi(ctrlName, 'GetMedalByType', args, options);
    },
    
    /**
     * 修改是否显示
     * @param {Object} args 请求参数
     * @param {String} args.isShow 
     * @param {String} args.mediaId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editAccountMedalIsShow: function(args, options) {
        return api.fetchApi(ctrlName, 'EditAccountMedalIsShow', args, options);
    },
    
    /**
     * 授予勋章,若系统发放
     * @param {Object} args 请求参数
     * @param {String} args.toAccountIds 
     * @param {String} args.medalId 
     * @param {String} [args.remark=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    addAccountMedalGrantLog: function(args, options) {
        return api.fetchApi(ctrlName, 'AddAccountMedalGrantLog', args, options);
    },
    
    /**
     * 获得显示和不显示的徽章
     * @param {Object} args 请求参数
     * @param {String} args.displayType 0: 获得显示的徽章 1：获得不显示的徽章
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountMedalModel>, ErrorModel>} 
     */
    getDisplayMedalList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetDisplayMedalList', args, options);
    },
    
    /**
     * 获取系统默认全部勋章列表
     * @param {Object} args 请求参数
     * @param {MedalType} args.medalType -1：全部 0：技能类 1：管理类
     * @param {Int32} args.pageIndex 
     * @param {Int32} args.pageSize 
     * @param {String} [args.keyword=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountMedalModel>, ErrorModel>} 
     */
    getSystemMedals: function(args, options) {
        return api.fetchApi(ctrlName, 'GetSystemMedals', args, options);
    },
    
    /**
     * 获取本周用户已发勋章数
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountWeekMedalModel, ErrorModel>} 
     */
    getWeekMedalCount: function(args, options) {
        return api.fetchApi(ctrlName, 'GetWeekMedalCount', args, options);
    },
    
    /**
     * 检测密码是否正确
     * @param {Object} args 请求参数
     * @param {String} args.password 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    validatePassword: function(args, options) {
        return api.fetchApi(ctrlName, 'ValidatePassword', args, options);
    }
};
module.exports = account;
