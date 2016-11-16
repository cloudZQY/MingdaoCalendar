var api = require('./_api.js');
var ctrlName = 'Project';
/**
 * 网络信息
 * @exports AjaxCtrl/Project
 */
var project = {
    /**
     * 获取网络基本信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectModel, ErrorModel>} 
     */
    getProjectInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectInfo', args, options);
    },
    
    /**
     * 保存公司信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.companyName 
     * @param {String} args.companyDisplayName 
     * @param {String} [args.companyNameEnglish=null] 
     * @param {Int32} [args.geographyId=0] 
     * @param {Int32} [args.industryId=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectActionResult, ErrorModel>} 
     */
    setProjectInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'SetProjectInfo', args, options);
    },
    
    /**
     * 二级域名页面
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectSubDomainModel, ErrorModel>} 
     */
    getProjectSubDomainInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectSubDomainInfo', args, options);
    },
    
    /**
     * 联想企业域名的邮箱
     * @param {Object} args 请求参数
     * @param {String} args.keywords 
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<String[], ErrorModel>} 
     */
    getProjectDomainEmail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectDomainEmail', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectFinanceModel, ErrorModel>} 
     */
    getProjectFinance: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectFinance', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.address 
     * @param {String} args.userName 
     * @param {String} args.postcode 
     * @param {String} args.contactPhone 
     * @param {String} args.mobilePhone 
     * @param {String} args.email 
     * @param {String} args.emailName 
     * @param {String} args.fax 
     * @param {InvoiceType} args.invoiceType 
     * @param {String} [args.taxNumber=null] 
     * @param {String} [args.taxBank=null] 
     * @param {String} [args.taxBankNumber=null] 
     * @param {String} [args.taxRegAddress=null] 
     * @param {String} [args.taxRegContactPhone=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateProjectFinance: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateProjectFinance', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<LicenseSupportModel, ErrorModel>} 
     */
    getProjectLicenseSupportInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectLicenseSupportInfo', args, options);
    },
    
    /**
     * 获取网络注销记录
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectCancelModel, ErrorModel>} 
     */
    getProjectLogOff: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectLogOff', args, options);
    },
    
    /**
     * 申请注销企业网络
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} [args.reason=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    applyCancelProject: function(args, options) {
        return api.fetchApi(ctrlName, 'ApplyCancelProject', args, options);
    },
    
    /**
     * 取消申请注销企业网络
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    removeApplyCancelProject: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveApplyCancelProject', args, options);
    },
    
    /**
     * 取消高级模式试用授权
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    removeProjectTrialLicense: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveProjectTrialLicense', args, options);
    },
    
    /**
     * 获取我邀请加入网络成员的历史记录；
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=10] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<HistoryInviteModel, ErrorModel>} 
     */
    getInvitedUsersJoinProjectLog: function(args, options) {
        return api.fetchApi(ctrlName, 'GetInvitedUsersJoinProjectLog', args, options);
    },
    
    /**
     * 检测网络非免费网络
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    checkProjectIsNotFree: function(args, options) {
        return api.fetchApi(ctrlName, 'CheckProjectIsNotFree', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<InviteExcitationModel, ErrorModel>} 
     */
    getInviteGiveRule: function(args, options) {
        return api.fetchApi(ctrlName, 'GetInviteGiveRule', args, options);
    }
};
module.exports = project;
