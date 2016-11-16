var api = require('./_api.js');
var ctrlName = 'Order';
/**
 * 订单
 * @exports AjaxCtrl/Order
 */
var order = {
    /**
     * 获取网络下的升级订单
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OrderModel, ErrorModel>} 
     */
    getProjectUpgradeOrder: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectUpgradeOrder', args, options);
    },
    
    /**
     * 获取高级模式升级最优产品组合
     * @param {Object} args 请求参数
     * @param {Int32} args.userCount 
     * @param {Int32} args.years 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OrderModel, ErrorModel>} 
     */
    getProductUpgradeBestPrice: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProductUpgradeBestPrice', args, options);
    },
    
    /**
     * 添加升级订单
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} args.userCount 
     * @param {Int32} args.years 
     * @param {Boolean} [args.needSalesAssistance=True] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OrderModel, ErrorModel>} 
     */
    addUpgradeOrder: function(args, options) {
        return api.fetchApi(ctrlName, 'AddUpgradeOrder', args, options);
    },
    
    /**
     * 获取增值产品
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProductModel[], ErrorModel>} 
     */
    getIncrementProduct: function(args, options) {
        return api.fetchApi(ctrlName, 'GetIncrementProduct', args, options);
    },
    
    /**
     * 添加充值订单
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.productId 
     * @param {Int32} args.count 
     * @param {Boolean} [args.needSalesAssistance=True] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OrderModel, ErrorModel>} 
     */
    addIncrementOrder: function(args, options) {
        return api.fetchApi(ctrlName, 'AddIncrementOrder', args, options);
    },
    
    /**
     * 最优产品组合
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} args.userCount 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OrderModel, ErrorModel>} 
     */
    getProjectUserPackageBectPrice: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectUserPackageBectPrice', args, options);
    },
    
    /**
     * 增补包订单
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} args.userCount 
     * @param {Boolean} [args.needSalesAssistance=True] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OrderModel, ErrorModel>} 
     */
    addUserPackageOrder: function(args, options) {
        return api.fetchApi(ctrlName, 'AddUserPackageOrder', args, options);
    },
    
    /**
     * 其他方式付款（记录用户操作日志）
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.orderId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    addThreePartPayOrderLog: function(args, options) {
        return api.fetchApi(ctrlName, 'AddThreePartPayOrderLog', args, options);
    },
    
    /**
     * 余额支付
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.orderId 
     * @param {String} args.password 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<PayResultModel, ErrorModel>} 
     */
    balancePayOrder: function(args, options) {
        return api.fetchApi(ctrlName, 'BalancePayOrder', args, options);
    },
    
    /**
     * 获取临时续费信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<TempRenewalModel, ErrorModel>} 
     */
    getTempRenewalPrice: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTempRenewalPrice', args, options);
    },
    
    /**
     * 添加临时升级包
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OrderModel, ErrorModel>} 
     */
    addTempRenewalOrder: function(args, options) {
        return api.fetchApi(ctrlName, 'AddTempRenewalOrder', args, options);
    },
    
    /**
     * 获取订单详情
     * @param {Object} args 请求参数
     * @param {String} args.orderId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OrderModel, ErrorModel>} 
     */
    getProjectPayResult: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectPayResult', args, options);
    },
    
    /**
     * 取消升级订单
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.orderId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    cancelOrder: function(args, options) {
        return api.fetchApi(ctrlName, 'CancelOrder', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.orderId 
     * @param {Boolean} [args.sendEmail=False] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<String, ErrorModel>} 
     */
    downloadBankInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'DownloadBankInfo', args, options);
    },
    
    /**
     * 获取交易记录
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {OrderRecordStatus} [args.status=0] 
     * @param {OrderRecordType[]} [args.recordTypes=null] 
     * @param {String} [args.startDate=null] 
     * @param {String} [args.endDate=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<TransactionRecordModel>, ErrorModel>} 
     */
    getTransactionRecordByPage: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTransactionRecordByPage', args, options);
    },
    
    /**
     * 根据recordId获取交易记录
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.recordId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<TransactionRecordModel, ErrorModel>} 
     */
    getTransactionRecordByRecordId: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTransactionRecordByRecordId', args, options);
    },
    
    /**
     * 根据orderId获取交易记录
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.orderId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<TransactionRecordModel, ErrorModel>} 
     */
    getTransactionRecordByOrderId: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTransactionRecordByOrderId', args, options);
    },
    
    /**
     * 编辑备注
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.recordId 
     * @param {String} args.remark 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateTransactionRecordRemark: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTransactionRecordRemark', args, options);
    },
    
    /**
     * 申请发票
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.orderId 
     * @param {String} args.companyName 
     * @param {Decimal} args.price 
     * @param {String} args.address 
     * @param {String} args.userName 
     * @param {String} args.contactPhone 
     * @param {InvoiceType} args.invoiceType 
     * @param {String} [args.taxNumber=null] 
     * @param {String} [args.taxBank=null] 
     * @param {String} [args.taxBankNumber=null] 
     * @param {String} [args.taxRegAddress=null] 
     * @param {String} [args.taxRegContactPhone=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    applyInvoice: function(args, options) {
        return api.fetchApi(ctrlName, 'ApplyInvoice', args, options);
    }
};
module.exports = order;
