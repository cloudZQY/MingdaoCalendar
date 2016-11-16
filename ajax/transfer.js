var api = require('./_api.js');
var ctrlName = 'Transfer';
/**
 * @exports AjaxCtrl/Transfer
 */
var transfer = {
    /**
     * 按类型获取交接记录
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {TransferRecordType} args.transferRecordType 
     * @param {Int32} args.pageIndex 
     * @param {Int32} args.pageSize 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<TransferModel>, ErrorModel>} 
     */
    getTransferRecordByType: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTransferRecordByType', args, options);
    },
    
    /**
     * 执行交接
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.oldAccountId 
     * @param {String} args.toAccountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    transferAll: function(args, options) {
        return api.fetchApi(ctrlName, 'TransferAll', args, options);
    },
    
    /**
     * 单个交接
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.sourceId 
     * @param {TransferRecordType} args.transferRecordType 
     * @param {String} args.oldAccountId 
     * @param {String} args.toAccountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    transferOne: function(args, options) {
        return api.fetchApi(ctrlName, 'TransferOne', args, options);
    }
};
module.exports = transfer;
