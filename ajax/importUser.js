var api = require('./_api.js');
var ctrlName = 'ImportUser';
/**
 * 导入用户
 * @exports AjaxCtrl/ImportUser
 */
var importUser = {
    /**
     * 导入用户
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.verifyCode 
     * @param {String} args.fileName 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ImportUserResultModel, ErrorModel>} 
     */
    importUserList: function(args, options) {
        return api.fetchApi(ctrlName, 'ImportUserList', args, options);
    },
    
    /**
     * 重新邀请导入未响应的用户
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String[]} args.accounts 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    reInviteImportUser: function(args, options) {
        return api.fetchApi(ctrlName, 'ReInviteImportUser', args, options);
    },
    
    /**
     * 取消邀请导入的用户
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String[]} args.accounts 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    cancelImportUser: function(args, options) {
        return api.fetchApi(ctrlName, 'CancelImportUser', args, options);
    },
    
    /**
     * 查找整个网络的导入用户，未被使用的列表
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=10] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<ImportUserModel>, ErrorModel>} 
     */
    getImportUserDetails: function(args, options) {
        return api.fetchApi(ctrlName, 'GetImportUserDetails', args, options);
    }
};
module.exports = importUser;
