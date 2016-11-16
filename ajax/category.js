var api = require('./_api.js');
var ctrlName = 'Category';
/**
 * 话题操作
 * @exports AjaxCtrl/Category
 */
var category = {
    /**
     * 获取用户最常使用标签
     * @param {Object} args 请求参数
     * @param {String} args.accountId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=6] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<CategoryModel[], ErrorModel>} 
     */
    getUserOftenCategory: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserOftenCategory', args, options);
    },
    
    /**
     * 搜索
     * @param {Object} args 请求参数
     * @param {String} args.keywords 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KeyValueModel[], ErrorModel>} 
     */
    autoCompleteCategory: function(args, options) {
        return api.fetchApi(ctrlName, 'AutoCompleteCategory', args, options);
    }
};
module.exports = category;
