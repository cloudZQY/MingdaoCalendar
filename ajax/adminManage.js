var api = require('./_api.js');
var ctrlName = 'AdminManage';
/**
 * 网络管理
 * @exports AjaxCtrl/AdminManage
 */
var adminManage = {
    /**
     * 账单详情
     * @param {Object} args 请求参数
     * @param {String} args.billid 
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AppBillDetailModel, ErrorModel>} 
     */
    appBillDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'AppBillDetail', args, options);
    },
    
    /**
     * 账单列表
     * @param {Object} args 请求参数
     * @param {String} args.appId 
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AppBillListModel, ErrorModel>} 
     */
    appBillList: function(args, options) {
        return api.fetchApi(ctrlName, 'AppBillList', args, options);
    },
    
    /**
     * 用户自助购买包
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ExpansionModel, ErrorModel>} 
     */
    expansionInfos: function(args, options) {
        return api.fetchApi(ctrlName, 'ExpansionInfos', args, options);
    },
    
    /**
     * 获取余额
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<String, ErrorModel>} 
     */
    getHidBalance: function(args, options) {
        return api.fetchApi(ctrlName, 'GetHidBalance', args, options);
    },
    
    /**
     * 获取企业号
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<String, ErrorModel>} 
     */
    corporateIdentity: function(args, options) {
        return api.fetchApi(ctrlName, 'CorporateIdentity', args, options);
    },
    
    /**
     * 网络到期天数信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectExpireDaysModel, ErrorModel>} 
     */
    projectExpireDays: function(args, options) {
        return api.fetchApi(ctrlName, 'ProjectExpireDays', args, options);
    },
    
    /**
     * 企业管理通告
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AnnouncementModel, ErrorModel>} 
     */
    announcement: function(args, options) {
        return api.fetchApi(ctrlName, 'Announcement', args, options);
    }
};
module.exports = adminManage;
