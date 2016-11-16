var api = require('./_api.js');
var ctrlName = 'TPStatistic';
/**
 * 第三方统计系统（intercom,growingIO）
 * @exports AjaxCtrl/TPStatistic
 */
var tPStatistic = {
    /**
     * 统计
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<undefined, ErrorModel>} 
     */
    addInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'AddInfo', args, options);
    }
};
module.exports = tPStatistic;
