var api = require('./_api.js');
var ctrlName = 'Upgrade';
/**
 * 升级流程
 * @exports AjaxCtrl/Upgrade
 */
var upgrade = {
    /**
     * 申请顾问
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {UpgradeEnterType} args.type 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<undefined, ErrorModel>} 
     */
    applyForSalesAssistance: function(args, options) {
        return api.fetchApi(ctrlName, 'ApplyForSalesAssistance', args, options);
    },
    
    /**
     * 获取网络升级信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UpgradeModel, ErrorModel>} 
     */
    getProjectUpgradeInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectUpgradeInfo', args, options);
    },
    
    /**
     * 获取合同信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ContractModel, ErrorModel>} 
     */
    getProjectContractInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectContractInfo', args, options);
    },
    
    /**
     * 修改合同信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.companyName 
     * @param {Int32} args.geographyId 
     * @param {String} args.address 
     * @param {String} args.postcode 
     * @param {String} args.email 
     * @param {String} args.recipientName 
     * @param {String} args.mobilePhone 
     * @param {String} args.contactPhone 
     * @param {String} args.fax 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateProjectContractInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateProjectContractInfo', args, options);
    }
};
module.exports = upgrade;
