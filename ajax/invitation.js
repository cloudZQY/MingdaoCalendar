var api = require('./_api.js');
var ctrlName = 'Invitation';
/**
 * 邀请
 * @exports AjaxCtrl/Invitation
 */
var invitation = {
    /**
     * 获取邀请账户信息
     * @param {Object} args 请求参数
     * @param {Dictionary<String, String>} args.accounts 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountInfoModel[], ErrorModel>} 
     */
    getInviteAccountInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetInviteAccountInfo', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.sourceId 
     * @param {InviteFromType} args.fromType 
     * @param {String[]} [args.accountIds=null] 
     * @param {Dictionary<String, String>} [args.accounts=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<InviteResultModel, ErrorModel>} 
     */
    inviteUser: function(args, options) {
        return api.fetchApi(ctrlName, 'InviteUser', args, options);
    },
    
    /**
     * 通用邀请链接 知识、任务、群组、网络、个人好友
     * @param {Object} args 请求参数
     * @param {String} args.sourceId 
     * @param {Int32} args.fromType 
     * @param {Int32} args.linkFromType 
     * @param {Int32} [args.hours=0] 多少小时后失效
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<LinkUrlModel, ErrorModel>} 
     */
    getInviteLink: function(args, options) {
        return api.fetchApi(ctrlName, 'GetInviteLink', args, options);
    },
    
    /**
     * 二维码链接
     * @param {Object} args 请求参数
     * @param {String} args.sourceId 
     * @param {Int32} args.fromType 
     * @param {Int32} args.linkFromType 
     * @param {Int32} [args.width=200] 
     * @param {Int32} [args.height=200] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<LinkUrlModel, ErrorModel>} 
     */
    getQRCodeInviteLink: function(args, options) {
        return api.fetchApi(ctrlName, 'GetQRCodeInviteLink', args, options);
    },
    
    /**
     * 获取当前用户所有有效的链接
     *     SourceId 是指群组、任务等
     *     isAll ,false :指获取当前用户发送的邀请，ture: 获取SourceId的所有邀请
     * @param {Object} args 请求参数
     * @param {String} args.sourceId 
     * @param {Boolean} [args.isAll=False] 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=10] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<LinkAuthModel[], ErrorModel>} 
     */
    getAllValidTokenByAccountId: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAllValidTokenByAccountId', args, options);
    },
    
    /**
     * 使得链接失效
     * @param {Object} args 请求参数
     * @param {String} args.token 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateAuthToExpire: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateAuthToExpire', args, options);
    },
    
    /**
     * 更新链接失效时间
     * @param {Object} args 请求参数
     * @param {String[]} args.tokens 
     * @param {Int32} [args.hours=0] 多少小时后失效
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateAuthDeadtime: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateAuthDeadtime', args, options);
    }
};
module.exports = invitation;
