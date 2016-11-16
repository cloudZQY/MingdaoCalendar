var api = require('./_api.js');
var ctrlName = 'Message';
/**
 * @exports AjaxCtrl/Message
 */
var message = {
    /**
     * 给指定的AccountId发送聊天消息
     * @param {Object} args 请求参数
     * @param {String[]} args.accountIds 
     * @param {String} args.content 
     * @param {String} args.attachments 
     * @param {String} [args.projectId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<MessageResultModel, ErrorModel>} 
     */
    sendMessageToAccountIds: function(args, options) {
        return api.fetchApi(ctrlName, 'SendMessageToAccountIds', args, options);
    },
    
    /**
     * 发送邮件消息
     * @param {Object} args 请求参数
     * @param {String[]} args.accountIds 
     * @param {String} args.content 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<MessageResultModel, ErrorModel>} 
     */
    sendEmailMessageToAccountIds: function(args, options) {
        return api.fetchApi(ctrlName, 'SendEmailMessageToAccountIds', args, options);
    },
    
    /**
     * 发送手机短信消息
     * @param {Object} args 请求参数
     * @param {String[]} args.accountIds 
     * @param {String} args.content 
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<MessageResultModel, ErrorModel>} 
     */
    sendMobilePhoneMessageToAccountIds: function(args, options) {
        return api.fetchApi(ctrlName, 'SendMobilePhoneMessageToAccountIds', args, options);
    },
    
    /**
     * 发通告
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.content 
     * @param {String} args.attachments 
     * @param {String[]} args.groupIds 
     * @param {Boolean} args.allProject 
     * @param {Boolean} args.allAdmin 
     * @param {Boolean} args.sendEmail 
     * @param {Boolean} args.sendMessage 
     * @param {Boolean} args.sendMobileMessage 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<MessageResultModel, ErrorModel>} 
     */
    sendNotice: function(args, options) {
        return api.fetchApi(ctrlName, 'SendNotice', args, options);
    }
};
module.exports = message;
