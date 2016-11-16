var api = require('./_api.js');
var ctrlName = 'AccountScale';
/**
 * 账号注册成功后选择规模
 * @exports AjaxCtrl/AccountScale
 */
var accountScale = {
    /**
     * 记录用户选择的规模
     * @param {Object} args 请求参数
     * @param {AccountScaleType} args.type 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<undefined, ErrorModel>} 
     */
    addAccountScale: function(args, options) {
        return api.fetchApi(ctrlName, 'AddAccountScale', args, options);
    }
};
module.exports = accountScale;
