var api = require('./_api.js');
var ctrlName = 'Post';
/**
 * 动态和回复相关操作
 * @exports AjaxCtrl/Post
 */
var post = {
    /**
     * 发布动态
     * @param {Object} args 请求参数
     * @param {String} args.postMsg 内容
     * @param {PostType} [args.postType=0] 类型
     * @param {PostShareScopeReq} [args.scope=null] 分享范围
     * @param {String} [args.appId=null] 来源应用 Id
     * @param {String} [args.remark=null] 附加信息
     * @param {PostShowType} [args.showType=0] 呈现类型（目前表示是否在动态墙中呈现）
     * @param {String} [args.attachments=null] 上传的附件
     * @param {String} [args.knowledgeAttach=null] 引用的知识中心附件
     * @param {Boolean} [args.addToKc=False] 是否把上传的附件添加到知识中心
     * @param {String} [args.addToKcParentId=null] 添加到知识中心的父节点 Id
     * @param {String} [args.addToKcRootId=null] 添加到知识中心的根节点 Id
     * @param {String} [args.linkUrl=null] 链接类型动态的链接地址
     * @param {String} [args.linkTitle=null] 链接类型动态的标题
     * @param {String} [args.linkDesc=null] 链接类型动态的描述
     * @param {String} [args.linkThumb=null] 链接类型动态的缩略图
     * @param {String} [args.voteOptions=null] 投票类型动态的选项
     * @param {String} [args.voteOptionFiles=null] 投票类型动态的选项附件
     * @param {String} [args.voteLastTime=null] 投票类型动态的截止日期
     * @param {Int32} [args.voteLastHour=0] 投票类型动态的截止小时
     * @param {Int32} [args.voteAvailableNumber=0] 投票类型动态的可投项数
     * @param {Boolean} [args.voteAnonymous=False] 投票类型动态是否匿名
     * @param {Boolean} [args.voteVisble=False] 投票类型动态匿名投票是否所有人可见结果（目前没用，所有人都可见）
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    addPost: function(args, options) {
        return api.fetchApi(ctrlName, 'AddPost', args, options);
    },
    
    /**
     * 修改动态分享范围
     * @param {Object} args 请求参数
     * @param {String} args.postId 
     * @param {PostShareScopeReq} args.scope 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    editPostShareScope: function(args, options) {
        return api.fetchApi(ctrlName, 'EditPostShareScope', args, options);
    },
    
    /**
     * 修改动态
     * @param {Object} args 请求参数
     * @param {String} args.postId 动态 Id
     * @param {PostType} args.postType 类型
     * @param {PostShareScopeReq} [args.scope=null] 发布范围
     * @param {String} [args.postMsg=null] 新的动态内容
     * @param {String} [args.oldPostMsg=null] 原始动态内容
     * @param {String} [args.attachments=null] 上传的附件
     * @param {String} [args.knowledgeAttach=null] 引用的知识中心附件
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    editPost: function(args, options) {
        return api.fetchApi(ctrlName, 'EditPost', args, options);
    },
    
    /**
     * 获取动态详情
     * @param {Object} args 请求参数
     * @param {String} args.postId 动态 Id
     * @param {String} [args.knowledgeId=null] 在知识门户里的 Id
     * @param {String} [args.projectId=null] 网络 Id， 用于知识门户里的动态
     * @param {String} [args.detail=null] 控制视频大小
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    getPostDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetPostDetail', args, options);
    },
    
    /**
     * 获取动态列表
     * @param {Object} args 请求参数
     * @param {PostPara} args.pPara 动态列表参数
     * @param {?DateTime} args.firstPostDateTime 创建时间大于此时间
     * @param {?DateTime} args.lastPostDateTime 创建时间小于此时间
     * @param {String} args.accountId 要查看的帐号 Id
     * @param {String} args.groupId 群组 Id
     * @param {String} args.listType 列表类型, 为 group,groups,project,ireply,fav,user,myself 中的一个
     * @param {Int32} args.pageIndex 页码，1 开始
     * @param {Int32} args.pageSize 每页数量
     * @param {String} args.projectId 网络 Id
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    getPostList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetPostList', args, options);
    },
    
    /**
     * 获取我回复他人的回复列表
     * @param {Object} args 请求参数
     * @param {Int32} [args.pageSize=10] 每页大小
     * @param {String} [args.maxCommentId=null] 从此条回复开始
     * @param {String} [args.keywords=null] 关键词
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject, ErrorModel>} 
     */
    getIRepliedList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetIRepliedList', args, options);
    },
    
    /**
     * 判断是否有查看动态的权限
     * @param {Object} args 请求参数
     * @param {String} args.postId 动态 Id
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    checkPostPermission: function(args, options) {
        return api.fetchApi(ctrlName, 'CheckPostPermission', args, options);
    },
    
    /**
     * 获取置顶动态
     * @param {Object} args 请求参数
     * @param {String} [args.projectId=null] 网络 Id， 不传为所有网络
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<JObject[], ErrorModel>} 
     */
    getTopPosts: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTopPosts', args, options);
    },
    
    /**
     * 添加置顶动态
     * @param {Object} args 请求参数
     * @param {String} args.postId 要置顶的动态 Id
     * @param {Int32} [args.hours=0] 置顶的小时数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    addTopPost: function(args, options) {
        return api.fetchApi(ctrlName, 'AddTopPost', args, options);
    },
    
    /**
     * 取消动态置顶
     * @param {Object} args 请求参数
     * @param {String} args.postId 要取消置顶的动态 Id
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    removeTopPost: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveTopPost', args, options);
    },
    
    /**
     * 给动态点赞或取消
     * @param {Object} args 请求参数
     * @param {String} args.postId 动态 Id
     * @param {Boolean} [args.isLike=True] 点赞还是取消点赞
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    like: function(args, options) {
        return api.fetchApi(ctrlName, 'Like', args, options);
    },
    
    /**
     * 收藏或取消收藏动态
     * @param {Object} args 请求参数
     * @param {String} args.postId 动态 Id
     * @param {Boolean} [args.isFavorite=True] 收藏还是取消收藏
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    favorite: function(args, options) {
        return api.fetchApi(ctrlName, 'Favorite', args, options);
    },
    
    /**
     * 给投票类型的动态投票
     * @param {Object} args 请求参数
     * @param {String} args.postId 动态 Id
     * @param {String} args.optionIndex 投票项
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    votePost: function(args, options) {
        return api.fetchApi(ctrlName, 'VotePost', args, options);
    },
    
    /**
     * 修改投票截止时间
     * @param {Object} args 请求参数
     * @param {String} args.postId 
     * @param {DateTime} args.deadline 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    editVoteDeadline: function(args, options) {
        return api.fetchApi(ctrlName, 'EditVoteDeadline', args, options);
    }
};
module.exports = post;
