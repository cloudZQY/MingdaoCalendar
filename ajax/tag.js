var api = require('./_api.js');
var ctrlName = 'Tag';
/**
 * 标签相关接口
 * @exports AjaxCtrl/Tag
 */
var tag = {
    /**
     * 删除某账户的实体的标签
     * @param {Object} args 请求参数
     * @param {String} args.sourceId 实体Id
     * @param {String} args.tagId 标签Id
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    removeSourceTag: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveSourceTag', args, options);
    },
    
    /**
     * 添加动态的标签
     * @param {Object} args 请求参数
     * @param {String} args.postId 动态Id
     * @param {String} args.tagName 标签名
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KeyValueModel, ErrorModel>} 
     */
    addPostTag: function(args, options) {
        return api.fetchApi(ctrlName, 'AddPostTag', args, options);
    },
    
    /**
     * 添加任务的标签
     * @param {Object} args 请求参数
     * @param {String} args.taskId 任务Id
     * @param {String} args.tagName 标签名
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KeyValueModel, ErrorModel>} 
     */
    addTaskTag: function(args, options) {
        return api.fetchApi(ctrlName, 'AddTaskTag', args, options);
    },
    
    /**
     * 获取当前用户常用标签 "#"联想搜索
     * @param {Object} args 请求参数
     * @param {String} [args.keyWords=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<KeyValueModel>, ErrorModel>} 
     */
    getUserCommonTag: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserCommonTag', args, options);
    }
};
module.exports = tag;
