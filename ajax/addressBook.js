var api = require('./_api.js');
var ctrlName = 'AddressBook';
/**
 * 通讯录控制器
 * @exports AjaxCtrl/AddressBook
 */
var addressBook = {
    /**
     * 根据账号查找用户
     * @param {Object} args 请求参数
     * @param {String} args.account 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountInfoModel>, ErrorModel>} 
     */
    getAccountByAccount: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAccountByAccount', args, options);
    },
    
    /**
     * 获取加我为好友，我还没有同意的人的列表
     * @param {Object} args 请求参数
     * @param {Int32} [args.pageIndex=1] 页码
     * @param {Int32} [args.pageSize=10] 每页多少个
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountFriendModel>, ErrorModel>} 
     */
    getNewFriends: function(args, options) {
        return api.fetchApi(ctrlName, 'GetNewFriends', args, options);
    },
    
    /**
     * 获取根据手机通讯录推荐的明道联系人
     * @param {Object} args 请求参数
     * @param {Int32} args.pageIndex 
     * @param {Int32} args.pageSize 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountInfoModel>, ErrorModel>} 
     */
    getMobileAddressRecommend: function(args, options) {
        return api.fetchApi(ctrlName, 'GetMobileAddressRecommend', args, options);
    },
    
    /**
     * 获取我的所有联系人的集合
     * @param {Object} args 请求参数
     * @param {String} args.firstCode 首字母
     * @param {String} args.projectId 网络ID
     * @param {String} [args.department=null] 
     * @param {CooperationRange} [args.range=0] 获取范围
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {Boolean} [args.isFilterOther=False] 通讯录使用，全部联系人中是否过滤其它协作关系，true：过滤其它协作关系 即好友+同事，false：不过滤， 好友+同事+其它协作
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountInfoModel>, ErrorModel>} 
     */
    getAllAddressbook: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAllAddressbook', args, options);
    },
    
    /**
     * 获取我的好友列表
     * @param {Object} args 请求参数
     * @param {String} args.firstCode 首字母
     * @param {Int32} [args.pageIndex=1] pageIndex
     * @param {Int32} [args.pageSize=20] pageSize
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountInfoModel>, ErrorModel>} 
     */
    getMyFriends: function(args, options) {
        return api.fetchApi(ctrlName, 'GetMyFriends', args, options);
    },
    
    /**
     * 关键词搜索我的所有通讯录
     * @param {Object} args 请求参数
     * @param {String} args.keywords 
     * @param {Int32} [args.pageSize=20] 
     * @param {GroupStatus} [args.groupStatus=-1] 
     * @param {SearchGroupType} [args.searchGroupType=-1] 
     * @param {String[]} [args.filterAccounts=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KeywordResult[], ErrorModel>} 
     */
    getAllAddressbookByKeywords: function(args, options) {
        return api.fetchApi(ctrlName, 'GetAllAddressbookByKeywords', args, options);
    },
    
    /**
     * 关键词搜索通讯录
     * @param {Object} args 请求参数
     * @param {String} args.keywords 关键词
     * @param {String} [args.projectId=null] 要搜索的网络ID
     * @param {Int32} [args.pageIndex=1] 页码
     * @param {Int32} [args.pageSize=20] 每页多少个
     * @param {String[]} [args.filterAccountIds=null] 需要过滤的accountid
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<AccountInfoModel>, ErrorModel>} 
     */
    getUserAddressbookByKeywords: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserAddressbookByKeywords', args, options);
    },
    
    /**
     * 忽略推荐好友
     * @param {Object} args 请求参数
     * @param {String} args.recomendId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    addIgnoreMobileAddress: function(args, options) {
        return api.fetchApi(ctrlName, 'AddIgnoreMobileAddress', args, options);
    },
    
    /**
     * 请求添加好友
     * @param {Object} args 请求参数
     * @param {String} args.accountId 要添加的人
     * @param {String} args.message 备注信息
     * @param {String} [args.companyName=null] 
     * @param {String} [args.profession=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OperateStatus, ErrorModel>} 
     */
    addFriend: function(args, options) {
        return api.fetchApi(ctrlName, 'AddFriend', args, options);
    },
    
    /**
     * 移除好友
     * @param {Object} args 请求参数
     * @param {String} args.accountId 要移除的人
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    removeFriend: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveFriend', args, options);
    },
    
    /**
     * 同意请求添加好友
     * @param {Object} args 请求参数
     * @param {String} args.accountId 请求加我为好友的人
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    editAgreeFriend: function(args, options) {
        return api.fetchApi(ctrlName, 'EditAgreeFriend', args, options);
    },
    
    /**
     * 拒绝请求添加好友
     * @param {Object} args 请求参数
     * @param {String} args.accountId 请求加我为好友的人
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    editRefuseFriend: function(args, options) {
        return api.fetchApi(ctrlName, 'EditRefuseFriend', args, options);
    },
    
    /**
     * 忽略请求加为好友
     * @param {Object} args 请求参数
     * @param {String} args.accountId 请求加我为好友的人
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    editIgnoreFriend: function(args, options) {
        return api.fetchApi(ctrlName, 'EditIgnoreFriend', args, options);
    }
};
module.exports = addressBook;
