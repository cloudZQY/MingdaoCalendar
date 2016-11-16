var api = require('./_api.js');
var ctrlName = 'Application';
/**
 * 应用相关操作
 * @exports AjaxCtrl/Application
 */
var application = {
    /**
     * 获取用户安装应用 包括置顶
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    getAccountApps: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountApps', args, options);
    },
    
    /**
     * 应用排序
     * @param {Object} args 请求参数
     * @param {Boolean} args.isTop 
     * @param {String} args.apps array appid projectid
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    orderAccountApps: function(args, options) {
        return api.fetchApi(ctrlName, 'OrderAccountApps', args, options);
    },
    
    /**
     * 应用置顶
     * @param {Object} args 请求参数
     * @param {Boolean} args.isTop 
     * @param {String} args.apps 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    updateAccountAppTop: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateAccountAppTop', args, options);
    },
    
    /**
     * 获取网络安装的应用
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=0] 
     * @param {Int32} [args.pageSize=2147483647] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    getProjectInstallApps: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectInstallApps', args, options);
    },
    
    /**
     * 获取网络安装记录
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} args.pageIndex 
     * @param {Int32} args.pageSize 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    getProjectUseLog: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectUseLog', args, options);
    },
    
    /**
     * 卸载应用
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.appId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    unInstallProjectApp: function(args, options) {
        return api.fetchApi(ctrlName, 'UnInstallProjectApp', args, options);
    },
    
    /**
     * 获取网络安装的付费应用
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    getProjectBuyApps: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectBuyApps', args, options);
    },
    
    /**
     * 按条件查询网络下的应用账单
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.status 
     * @param {String} args.appId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    getProjectAppBilings: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectAppBilings', args, options);
    },
    
    /**
     * 获取应用账单详情
     * @param {Object} args 请求参数
     * @param {String} args.billingId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    getAppBillingDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAppBillingDetail', args, options);
    },
    
    /**
     * 修改应用账单状态
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.billingId 
     * @param {Int32} args.status 0:关闭，2:支付，5：质疑
     * @param {String} args.password 
     * @param {String} args.queryMsg 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    updateAppBillingStatus: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateAppBillingStatus', args, options);
    },
    
    /**
     * 判断网络是否安装应用
     * @param {Object} args 请求参数
     * @param {String} args.projectId 网络 Id
     * @param {String} args.appId 应用 Id 或应用名。支持的应用名：video(企业音视频)、knowledgePortal(知识门户)、goukuai（够快云存储）
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    isProjectInstall: function(args, options) {
        return api.fetchApi(ctrlName, 'IsProjectInstall', args, options);
    },
    
    /**
     * 批量判断网络是否安装应用
     * @param {Object} args 请求参数
     * @param {String} args.projectIds 网络 Id，逗号隔开
     * @param {String} args.appId 应用 Id 或应用名。支持的应用名：video(企业音视频)、knowledgePortal(知识门户)、goukuai（够快云存储）
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Dictionary<String, Boolean>, ErrorModel>} 
     */
    isProjectsInstall: function(args, options) {
        return api.fetchApi(ctrlName, 'IsProjectsInstall', args, options);
    },
    
    /**
     * 获取应用Url
     * @param {Object} args 请求参数
     * @param {ApplicationExpand} args.app 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<String, ErrorModel>} 
     */
    getAppLink: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAppLink', args, options);
    }
};
module.exports = application;
