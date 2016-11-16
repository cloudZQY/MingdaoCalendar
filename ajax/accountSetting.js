var api = require('./_api.js');
var ctrlName = 'AccountSetting';
/**
 * 账户设置
 * @exports AjaxCtrl/AccountSetting
 */
var accountSetting = {
    /**
     * 获取系统设置
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<AccountSettingModel, ErrorModel>} 
     */
    getAccountSettings: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountSettings', args, options);
    },
    
    /**
     * 获取主题
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ThemeModel[], ErrorModel>} 
     */
    getThemes: function(args, options) {
        return api.fetchApi(ctrlName, 'GetThemes', args, options);
    },
    
    /**
     * 更新系统设置
     * @param {Object} args 请求参数
     * @param {String} [args.settingType=null] 设置项PrivateMobile=9, PrivateEmail=10,
     * @param {String} [args.settingValue=null] 设置值1:true, 0:false
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editAccountSetting: function(args, options) {
        return api.fetchApi(ctrlName, 'EditAccountSetting', args, options);
    },
    
    /**
     * 更新系统设置
     * @param {Object} args 请求参数
     * @param {String} args.items 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editAccountSettingItems: function(args, options) {
        return api.fetchApi(ctrlName, 'EditAccountSettingItems', args, options);
    },
    
    /**
     * 设置指定账户的群组消息提醒
     * @param {Object} args 请求参数
     * @param {String} args.groupIds 群组ID，多个时已逗号分隔
     * @param {String} [args.value=null] 设置的值 0 ：不显示消息数目并且没有push提醒  1：显示消息数目并且有push提醒  2：显示消息数目没有push提醒 （目前2不支持）
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    editGroupSetting: function(args, options) {
        return api.fetchApi(ctrlName, 'EditGroupSetting', args, options);
    }
};
module.exports = accountSetting;
