var api = require('./_api.js');
var ctrlName = 'Structure';
/**
 * 组织结构相关接口
 * @exports AjaxCtrl/Structure
 */
var structure = {
    /**
     * 组织结构人员选择接口
     * @param {Object} args 请求参数
     * @param {String} [args.accountId=null] 当前被操作的用户帐号, userType 为 up 或者 down 时不能为空，*不一定是当前用户 ID*
     * @param {?StructureUserQueryType} [args.userType=null] 筛选的用户类型
     * @param {Int32} [args.pageIndex=1] 页码
     * @param {Int32} [args.pageSize=2147483647] 单页大小
     * @param {String} [args.keywords=null] 关键词
     * @param {String[]} [args.filterAccountIds=null] 从结果集中移除的 accountId
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<UserModel>, ErrorModel>} 
     */
    getStructureUsers: function(args, options) {
        return api.fetchApi(ctrlName, 'GetStructureUsers', args, options);
    },
    
    /**
     * 按关键词搜索部门，同时搜索部门下的用户，通用邀请层使用
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} [args.accountId=null] 
     * @param {StructureUserQueryType} [args.userType=1] 
     * @param {String} [args.keywords=null] 
     * @param {String[]} [args.filterAccountIds=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<DepartmentModel>, ErrorModel>} 
     */
    getContactProjectDepartments: function(args, options) {
        return api.fetchApi(ctrlName, 'GetContactProjectDepartments', args, options);
    },
    
    /**
     * 按部门 Id 获取用户
     * @param {Object} args 请求参数
     * @param {String} args.departmentId 
     * @param {String} [args.accountId=null] 当前被操作的用户帐号, userType 为 up 或者 down 时不能为空
     * @param {?StructureUserQueryType} [args.userType=null] 筛选的用户类型
     * @param {String} [args.keywords=null] 关键词
     * @param {String[]} [args.filterAccountIds=null] 从结果集中移除的 accountId
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<UserModel>, ErrorModel>} 
     */
    getDepartmentUsers: function(args, options) {
        return api.fetchApi(ctrlName, 'GetDepartmentUsers', args, options);
    },
    
    /**
     * 我的下属
     * @param {Object} args 请求参数
     * @param {String} [args.keywords=null] 关键词
     * @param {Boolean} [args.directOnly=False] 是否只查询直系下属
     * @param {Int32} [args.pageIndex=1] 页码
     * @param {Int32} [args.pageSize=2147483647] 单页大小
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<UserModel>, ErrorModel>} 
     */
    getSubordinateUsers: function(args, options) {
        return api.fetchApi(ctrlName, 'GetSubordinateUsers', args, options);
    }
};
module.exports = structure;
