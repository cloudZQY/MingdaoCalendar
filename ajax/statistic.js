var api = require('./_api.js');
var ctrlName = 'Statistic';
/**
 * @exports AjaxCtrl/Statistic
 */
var statistic = {
    /**
     * 用户统计
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} args.pageIndex 
     * @param {Int32} args.pageSize 
     * @param {String} args.startDate 
     * @param {String} args.endDate 
     * @param {SortReport} [args.sortField=0] 
     * @param {SortType} [args.sortType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<UserReportModel>, ErrorModel>} 
     */
    getUserReport: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserReport', args, options);
    },
    
    /**
     * 动态统计
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} args.pageIndex 
     * @param {Int32} args.pageSize 
     * @param {String} args.startDate 
     * @param {String} args.endDate 
     * @param {PostReportType} [args.postReportType=1] 
     * @param {SortReport} [args.sortField=5] 
     * @param {SortType} [args.sortType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<PostReportModel>, ErrorModel>} 
     */
    getPostReportByType: function(args, options) {
        return api.fetchApi(ctrlName, 'GetPostReportByType', args, options);
    },
    
    /**
     * 群组统计
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} args.pageIndex 
     * @param {Int32} args.pageSize 
     * @param {String} args.startDate 
     * @param {String} args.endDate 
     * @param {SortReport} [args.sortField=6] 
     * @param {SortType} [args.sortType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<GroupReportModel>, ErrorModel>} 
     */
    getGroupReport: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroupReport', args, options);
    }
};
module.exports = statistic;
