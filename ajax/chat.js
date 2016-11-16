var api = require('./_api.js');
var ctrlName = 'Chat';
/**
 * @exports AjaxCtrl/Chat
 */
var chat = {
    /**
     * 文件传输助手
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<BaseModel, ErrorModel>} 
     */
    sentFileTransfer: function(args, options) {
        return api.fetchApi(ctrlName, 'SentFileTransfer', args, options);
    },
    
    /**
     * 获取预览链接
     * @param {Object} args 请求参数
     * @param {String} args.id 
     * @param {String} args.path 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<PreViewLinkModel, ErrorModel>} 
     */
    getPreviewLink: function(args, options) {
        return api.fetchApi(ctrlName, 'GetPreviewLink', args, options);
    },
    
    /**
     * 获取用户列表(好友支持分页)
     * @param {Object} args 请求参数
     * @param {String} [args.projectId=null] 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ContactUserModel, ErrorModel>} 
     */
    getUserList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserList', args, options);
    },
    
    /**
     * 获取部门用户列表
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.departmentId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<UserModel>, ErrorModel>} 
     */
    getUserListByDepartment: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserListByDepartment', args, options);
    },
    
    /**
     * 获取
     * @param {Object} args 请求参数
     * @param {String} [args.task=null] 
     * @param {String} [args.post=null] 
     * @param {String} [args.calendar=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<CardEntityModel, ErrorModel>} 
     */
    getCardDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetCardDetail', args, options);
    },
    
    /**
     * 获取群文件列表
     * @param {Object} args 请求参数
     * @param {String} args.groupId 群ID
     * @param {String} [args.start=null] 查询起始时间
     * @param {String} [args.end=null] 查询结束时间
     * @param {Int32} [args.pageIndex=1] pageIndex
     * @param {String} [args.keywords=null] 
     * @param {Int32} [args.pageSize=20] pageSize
     * @param {Int32} [args.fileType=-1] optional -1.all 1. 纯文本 2. 图片 3. 语音 4. 附件
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<MessageFileModel>, ErrorModel>} 
     */
    getGroupFileList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroupFileList', args, options);
    },
    
    /**
     * 获取群组详情中tab计数
     * @param {Object} args 请求参数
     * @param {String} args.keywords 
     * @param {String} args.groupId 
     * @param {Int32} args.loadTabType 1 成员列表, 2 文件列表, 4 消息列表 ; 并集加起来, 如,成员数和消息列表,则是 1+4=5
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupCountModel, ErrorModel>} 
     */
    getGroupCountByTabName: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroupCountByTabName', args, options);
    },
    
    /**
     * 获取群卡片列表
     * @param {Object} args 请求参数
     * @param {String} args.groupId 群id
     * @param {Int32} [args.cardType=-1] 卡片类型 1 任务 2 日程 3 动态 4 投票
     * @param {Int32} [args.pageIndex=1] pageIndex
     * @param {Int32} [args.pageSize=20] pageSize
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<MessageCardModel>, ErrorModel>} 
     */
    getGroupCardList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroupCardList', args, options);
    }
};
module.exports = chat;
