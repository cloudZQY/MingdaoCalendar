var api = require('./_api.js');
var ctrlName = 'Register';
/**
 * 注册
 * @exports AjaxCtrl/Register
 */
var register = {
    /**
     * 防止攻击使用 Session 验证
     * @param {Object} args 请求参数
     * @param {String} args.mobilePhone 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    validateMobilePhone: function(args, options) {
        return api.fetchApi(ctrlName, 'ValidateMobilePhone', args, options);
    },
    
    /**
     * 发送验证码
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {VerifyCodeType} [args.verifyCodeType=0] 
     * @param {Boolean} [args.isFirstTime=True] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    sendRegisterVerifyCode: function(args, options) {
        return api.fetchApi(ctrlName, 'SendRegisterVerifyCode', args, options);
    },
    
    /**
     * 已有账号检测
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {String} args.password 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    checkExistAccount: function(args, options) {
        return api.fetchApi(ctrlName, 'CheckExistAccount', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.confirmation 
     * @param {String} args.password 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    checkExistAccountByConfirmation: function(args, options) {
        return api.fetchApi(ctrlName, 'CheckExistAccountByConfirmation', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    checkExistAccountByCurrentAccount: function(args, options) {
        return api.fetchApi(ctrlName, 'CheckExistAccountByCurrentAccount', args, options);
    },
    
    /**
     * 邀请链接验证
     * @param {Object} args 请求参数
     * @param {String} args.confirmation 
     * @param {Boolean} args.isLink 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<LinkInviteModel, ErrorModel>} 
     */
    checkInviteLink: function(args, options) {
        return api.fetchApi(ctrlName, 'CheckInviteLink', args, options);
    },
    
    /**
     * 申请加入网络，根据projectId获取网络设置信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<LinkInviteModel, ErrorModel>} 
     */
    checkJoinLink: function(args, options) {
        return api.fetchApi(ctrlName, 'CheckJoinLink', args, options);
    },
    
    /**
     * 如果已有账号加入某个邀请模块(不含加入公司)
     * @param {Object} args 请求参数
     * @param {String} args.password 
     * @param {String} args.confirmation 
     * @param {Boolean} args.isLink 
     * @param {String} [args.account=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    joinByExistAccount: function(args, options) {
        return api.fetchApi(ctrlName, 'JoinByExistAccount', args, options);
    },
    
    /**
     * 创建账号
     * @param {Object} args 请求参数
     * @param {String} args.password 
     * @param {String} args.fullname 
     * @param {Boolean} [args.setSession=True] 
     * @param {String} [args.verifyCode=null] 
     * @param {String} [args.account=null] 
     * @param {String} [args.confirmation=null] 
     * @param {Boolean} [args.isLink=False] 
     * @param {String} [args.unionId=null] 
     * @param {String} [args.state=null] 
     * @param {TPType} [args.tpType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    createAccount: function(args, options) {
        return api.fetchApi(ctrlName, 'CreateAccount', args, options);
    },
    
    /**
     * 创建企业网络
     * @param {Object} args 请求参数
     * @param {String} args.companyName 
     * @param {String} args.job 
     * @param {String} [args.code=null] 
     * @param {String} [args.unionId=null] 
     * @param {String} [args.state=null] 
     * @param {TPType} [args.tpType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    createCompany: function(args, options) {
        return api.fetchApi(ctrlName, 'CreateCompany', args, options);
    },
    
    /**
     * 邀请加入网络
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {String} args.password 
     * @param {String} args.verifyCode 
     * @param {String} args.fullname 
     * @param {String} args.job 
     * @param {String} args.confirmation 
     * @param {Boolean} args.isLink 
     * @param {String} args.companyName 
     * @param {String} args.department 
     * @param {String} args.workSite 
     * @param {String} args.jobNumber 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    inviteJoinCompany: function(args, options) {
        return api.fetchApi(ctrlName, 'InviteJoinCompany', args, options);
    },
    
    /**
     * 主动申请加入网络
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.account 
     * @param {String} args.password 
     * @param {String} args.verifyCode 
     * @param {String} args.fullname 
     * @param {String} args.job 
     * @param {String} args.companyName 
     * @param {String} args.department 
     * @param {String} args.workSite 
     * @param {String} args.jobNumber 
     * @param {String} [args.unionId=null] 
     * @param {String} [args.state=null] 
     * @param {TPType} [args.tpType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    applyJoinCompany: function(args, options) {
        return api.fetchApi(ctrlName, 'ApplyJoinCompany', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {String} args.password 
     * @param {String} args.unionId 
     * @param {String} args.state 
     * @param {TPType} args.tpType 
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    bindByExistsAccount: function(args, options) {
        return api.fetchApi(ctrlName, 'BindByExistsAccount', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {String} args.password 
     * @param {String} args.unionId 
     * @param {String} args.state 
     * @param {TPType} args.tpType 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BindProjectModel, ErrorModel>} 
     */
    bindByExistsProjects: function(args, options) {
        return api.fetchApi(ctrlName, 'BindByExistsProjects', args, options);
    },
    
    /**
     * 发送找回密码验证码
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {VerifyCodeType} args.verifyCodeType 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    sendFindPasswordVerifyCode: function(args, options) {
        return api.fetchApi(ctrlName, 'SendFindPasswordVerifyCode', args, options);
    },
    
    /**
     * 更新密码
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {String} args.verifyCode 
     * @param {String} args.password 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RegisterModel, ErrorModel>} 
     */
    updatePassword: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdatePassword', args, options);
    }
};
module.exports = register;
