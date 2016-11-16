var api = require('./_api.js');
var ctrlName = 'WorkSite';
/**
 * @exports AjaxCtrl/WorkSite
 */
var workSite = {
    /**
     * 获取工作地点列表
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {String} [args.keywords=null] 
     * @param {SortWorkSite} [args.sortField=0] 
     * @param {SortType} [args.sortType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<WorkSiteModel>, ErrorModel>} 
     */
    getWorkSites: function(args, options) {
        return api.fetchApi(ctrlName, 'GetWorkSites', args, options);
    },
    
    /**
     * 添加工作地点
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.workSiteName 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OperateStatus, ErrorModel>} 
     */
    addWorkSite: function(args, options) {
        return api.fetchApi(ctrlName, 'AddWorkSite', args, options);
    },
    
    /**
     * 修改工作地点名称
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.workSiteId 
     * @param {String} args.workSiteName 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OperateStatus, ErrorModel>} 
     */
    updateWorkSiteName: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateWorkSiteName', args, options);
    },
    
    /**
     * 工作地点合并
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.workSiteId 
     * @param {String[]} args.toMergerIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    mergeWorkSites: function(args, options) {
        return api.fetchApi(ctrlName, 'MergeWorkSites', args, options);
    },
    
    /**
     * 删除工作地点
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String[]} args.workSiteIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    deleteWorkSites: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteWorkSites', args, options);
    },
    
    /**
     * 获取用户列表
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.workSiteId 
     * @param {SortType} [args.sortType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<UserModel>, ErrorModel>} 
     */
    getWorkSiteUsers: function(args, options) {
        return api.fetchApi(ctrlName, 'GetWorkSiteUsers', args, options);
    },
    
    /**
     * 添加用户
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.workSiteId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    addWorkSiteUser: function(args, options) {
        return api.fetchApi(ctrlName, 'AddWorkSiteUser', args, options);
    },
    
    /**
     * 删除用户
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    deleteWorkSiteUser: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteWorkSiteUser', args, options);
    }
};
module.exports = workSite;
