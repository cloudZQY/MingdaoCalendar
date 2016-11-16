var api = require('./_api.js');
var ctrlName = 'Weixin';
/**
 * @exports AjaxCtrl/Weixin
 */
var weixin = {
    /**
     * 获取微信服务号二维码
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<String, ErrorModel>} 
     */
    getWeiXinServiceNumberQRCode: function(args, options) {
        return api.fetchApi(ctrlName, 'GetWeiXinServiceNumberQRCode', args, options);
    },
    
    /**
     * 检查是否绑定微信服务号
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    checkWeiXinServiceNumberBind: function(args, options) {
        return api.fetchApi(ctrlName, 'CheckWeiXinServiceNumberBind', args, options);
    },
    
    /**
     * 设置或取消微信登录提醒
     * @param {Object} args 请求参数
     * @param {Boolean} args.isOpen 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    setLoginWeixinNotify: function(args, options) {
        return api.fetchApi(ctrlName, 'SetLoginWeixinNotify', args, options);
    }
};
module.exports = weixin;
