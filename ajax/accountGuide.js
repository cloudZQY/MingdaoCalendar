var api = require('./_api.js');
var ctrlName = 'AccountGuide';
/**
 * 用户引导
 * @exports AjaxCtrl/AccountGuide
 */
var accountGuide = {
    /**
     * 设置引导
     * @param {Object} args 请求参数
     * @param {UserGuideSetting} args.userGuideSetting 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<undefined, ErrorModel>} 
     */
    setAccountGuide: function(args, options) {
        return api.fetchApi(ctrlName, 'SetAccountGuide', args, options);
    }
};
module.exports = accountGuide;
