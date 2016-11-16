var api = require('./_api.js');
var ctrlName = 'Login';
/**
 * 登录
 * @exports AjaxCtrl/Login
 */
var login = {
    /**
     * 使用明道账号登录
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {String} args.password 
     * @param {String} [args.verifyCode=null] 
     * @param {Boolean} [args.isCookie=False] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<LoginModel, ErrorModel>} 
     */
    mDAccountLogin: function(args, options) {
        return api.fetchApi(ctrlName, 'MDAccountLogin', args, options);
    },
    
    /**
     * LDAP账号登录
     * @param {Object} args 请求参数
     * @param {String} args.userName 
     * @param {String} args.password 
     * @param {String} args.projectId 
     * @param {String} [args.verifyCode=null] 
     * @param {Boolean} [args.isCookie=False] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<LoginModel, ErrorModel>} 
     */
    lDAPLogin: function(args, options) {
        return api.fetchApi(ctrlName, 'LDAPLogin', args, options);
    },
    
    /**
     * 第三方个人账号登录（微信，QQ）
     * @param {Object} args 请求参数
     * @param {String} args.unionId 
     * @param {String} args.state 
     * @param {String} args.tpType 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<LoginModel, ErrorModel>} 
     */
    tPLogin: function(args, options) {
        return api.fetchApi(ctrlName, 'TPLogin', args, options);
    },
    
    /**
     * 企业QQ账号登录
     * @param {Object} args 请求参数
     * @param {String} args.unionId 
     * @param {String} args.state 
     * @param {String} args.tpType 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BQQLoginModel, ErrorModel>} 
     */
    bQQLogin: function(args, options) {
        return api.fetchApi(ctrlName, 'BQQLogin', args, options);
    }
};
module.exports = login;
