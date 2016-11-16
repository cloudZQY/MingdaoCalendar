var api = require('./_api.js');
var ctrlName = 'Department';
/**
 * @exports AjaxCtrl/Department
 */
var department = {
    /**
     * 获取所以部门列表
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<DepartmentModel>, ErrorModel>} 
     */
    getProjectDepartments: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectDepartments', args, options);
    },
    
    /**
     * 分页获取部门列表
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {SortDepartment} [args.sortField=0] 
     * @param {SortType} [args.sortType=0] 
     * @param {String} [args.keywords=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<DepartmentModel>, ErrorModel>} 
     */
    getProjectDepartmentByPage: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectDepartmentByPage', args, options);
    },
    
    /**
     * 按关键词搜索部门，同时搜索部门下的用户，通用邀请层使用
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
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
     * 创建部门
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.departmentName 
     * @param {String} [args.mapGroupId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OperateStatus, ErrorModel>} 
     */
    addDepartment: function(args, options) {
        return api.fetchApi(ctrlName, 'AddDepartment', args, options);
    },
    
    /**
     * 批量创建部门
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String[]} args.departments 
     * @param {Boolean} args.withGroup 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    addDepartments: function(args, options) {
        return api.fetchApi(ctrlName, 'AddDepartments', args, options);
    },
    
    /**
     * 编辑部门
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.departmentId 
     * @param {String} args.newDepartmentName 
     * @param {String} [args.mapGroupId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OperateStatus, ErrorModel>} 
     */
    updateDepartment: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateDepartment', args, options);
    },
    
    /**
     * 设置部门关联群组（groupId为空标识取消部门关联群组）
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.departmentId 
     * @param {String} [args.groupId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateDeptMappingGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateDeptMappingGroup', args, options);
    },
    
    /**
     * 合并部门
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.departmentId 
     * @param {String[]} args.toMergerIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    mergeDepartments: function(args, options) {
        return api.fetchApi(ctrlName, 'MergeDepartments', args, options);
    },
    
    /**
     * 批量删除部门
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String[]} args.departmentIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    deleteDepartments: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteDepartments', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.departmentId 
     * @param {String} [args.keywords=null] 
     * @param {String[]} [args.filterAccountIds=null] 
     * @param {SortUser} [args.sortField=5] 
     * @param {SortType} [args.sortType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<UserModel>, ErrorModel>} 
     */
    getDepartmentUsers: function(args, options) {
        return api.fetchApi(ctrlName, 'GetDepartmentUsers', args, options);
    },
    
    /**
     * 添加部门成员
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.departmentId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    addDepartmentUser: function(args, options) {
        return api.fetchApi(ctrlName, 'AddDepartmentUser', args, options);
    },
    
    /**
     * 删除部门成员
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    deleteDepartmentUser: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteDepartmentUser', args, options);
    }
};
module.exports = department;
