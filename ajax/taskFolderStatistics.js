var api = require('./_api.js');
var ctrlName = 'TaskFolderStatistics';
/**
 * @exports AjaxCtrl/TaskFolderStatistics
 */
var taskFolderStatistics = {
    /**
     * 获取头部即时数据
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getFolderStatisticsNow: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderStatisticsNow', args, options);
    },
    
    /**
     * 获取指定时间段日常统计数据（当天数据为即时数据）
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {DateTime} args.startDate 开始时间
     * @param {DateTime} args.endDate 结束时间
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getDailyFolderStatistics: function(args, options) {
        return api.fetchApi(ctrlName, 'GetDailyFolderStatistics', args, options);
    },
    
    /**
     * 获取全部负责人
     * @param {Object} args 请求参数
     * @param {String} args.folderID 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getTaskCharges: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskCharges', args, options);
    },
    
    /**
     * 获取为当前用户下属的项目负责人
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getSubordinate: function(args, options) {
        return api.fetchApi(ctrlName, 'GetSubordinate', args, options);
    },
    
    /**
     * 获取负责人数据
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String[]} args.chargeAccountIDs 负责人IDList
     * @param {Boolean} args.isAuto true:查询所有负责人,false：查询chargeAccountIDs所指定的负责人
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getTaskChargeStatistics: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskChargeStatistics', args, options);
    },
    
    /**
     * 获取看板数据
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getFolderStageStatistics: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderStageStatistics', args, options);
    }
};
module.exports = taskFolderStatistics;
