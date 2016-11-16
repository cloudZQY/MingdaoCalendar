var api = require('./_api.js');
var ctrlName = 'Qiniu';
/**
 * 七牛相关接口
 * @exports AjaxCtrl/Qiniu
 */
var qiniu = {
    /**
     * 获取七牛上传 token
     * @param {Object} args 请求参数
     * @param {BucketType} args.bucket 空间名
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<QiniuTokenModel, ErrorModel>} 
     */
    getUploadToken: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUploadToken', args, options);
    }
};
module.exports = qiniu;
