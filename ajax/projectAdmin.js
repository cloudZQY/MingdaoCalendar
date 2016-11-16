var api = require('./_api.js');
var ctrlName = 'ProjectAdmin';
/**
 * @exports AjaxCtrl/ProjectAdmin
 */
var projectAdmin = {
    /**
     * 获取网络管理员列表
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=2147483647] 
     * @param {SortAdmin} [args.sortField=0] 
     * @param {SortType} [args.sortType=0] 
     * @param {SystemRole} [args.role=0] 
     * @param {SystemRoleStatus} [args.status=1] 
     * @param {String} [args.keywords=null] 
     * @param {String[]} [args.firstLetters=null] 
     * @param {String[]} [args.departments=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<UserModel>, ErrorModel>} 
     */
    getProjectAdmin: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectAdmin', args, options);
    },
    
    /**
     * 申请成为网络管理员
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String[]} args.toAccountIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    applyProjectAdmin: function(args, options) {
        return api.fetchApi(ctrlName, 'ApplyProjectAdmin', args, options);
    },
    
    /**
     * 添加网络管理员
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.accountId 
     * @param {Int32} args.role 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OperateStatus, ErrorModel>} 
     */
    addProjectAdmin: function(args, options) {
        return api.fetchApi(ctrlName, 'AddProjectAdmin', args, options);
    },
    
    /**
     * 修改角色的状态
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} args.role 
     * @param {Int32} args.status 
     * @param {String[]} args.accountIds 
     * @param {Boolean} [args.isApproval=False] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateProjectRoleStatus: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateProjectRoleStatus', args, options);
    },
    
    /**
     * 取消管理员
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String[]} args.accountIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UpdateProjectAdminModel, ErrorModel>} 
     */
    cancelProjectAdmin: function(args, options) {
        return api.fetchApi(ctrlName, 'CancelProjectAdmin', args, options);
    }
};
module.exports = projectAdmin;
