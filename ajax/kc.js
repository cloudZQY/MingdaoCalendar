var api = require('./_api.js');
var ctrlName = 'Kc';
/**
 * 知识中心相关接口
 * @exports AjaxCtrl/Kc
 */
var kc = {
    /**
     * 获取根目录(共享文件夹)列表
     * @param {Object} args 请求参数
     * @param {String} [args.keywords=null] 
     * @param {RootFilterType} [args.rootFilterType=0] 
     * @param {NodeStatus} [args.status=1] 
     * @param {String} [args.projectId=null] 网络 Id，不能和 excludeProjectIds 同时存在
     * @param {String} [args.excludeProjectIds=null] 排除掉的网络 Id，逗号分割，不能和 projectId 同时存在
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcRootModel[], ErrorModel>} 
     */
    getRoots: function(args, options) {
        return api.fetchApi(ctrlName, 'GetRoots', args, options);
    },
    
    /**
     * 获取根目录详情
     * @param {Object} args 请求参数
     * @param {String} args.id 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcRootModel, ErrorModel>} 
     */
    getRootDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetRootDetail', args, options);
    },
    
    /**
     * 添加根目录(共享文件夹)
     * @param {Object} args 请求参数
     * @param {String} args.name 根节点名称
     * @param {RootMember[]} args.members 正常的明道用户
     * @param {Boolean} [args.star=False] 是否标星
     * @param {String} [args.projectId=null] 所归属的网络
     * @param {InvitedMember[]} [args.invitedMembers=null] 被邀请的未注册用户
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcRootModel, ErrorModel>} 
     */
    addRoot: function(args, options) {
        return api.fetchApi(ctrlName, 'AddRoot', args, options);
    },
    
    /**
     * 根目录标星
     * @param {Object} args 请求参数
     * @param {String} args.id 
     * @param {Boolean} args.star 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    starRoot: function(args, options) {
        return api.fetchApi(ctrlName, 'StarRoot', args, options);
    },
    
    /**
     * 删除根目录(共享文件夹)
     * @param {Object} args 请求参数
     * @param {String} args.id 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    removeRoot: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveRoot', args, options);
    },
    
    /**
     * 退出/移除根目录成员
     * @param {Object} args 请求参数
     * @param {String} args.id 根目录 Id
     * @param {String} args.memberId 要移除的成员 accountId
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    removeRootMember: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveRootMember', args, options);
    },
    
    /**
     * 添加根目录成员
     * @param {Object} args 请求参数
     * @param {String} args.id 根节点ID
     * @param {String[]} [args.memberIds=null] 要添加的成员List
     * @param {Dictionary<String, String>} [args.inviteAccount=null] 被邀请的用户Dictionary
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcAddRootMemberModel, ErrorModel>} 
     */
    addRootMembers: function(args, options) {
        return api.fetchApi(ctrlName, 'AddRootMembers', args, options);
    },
    
    /**
     * 更新根目录的成员的权限
     * @param {Object} args 请求参数
     * @param {String} args.id 根目录ID
     * @param {String} args.memberId 被成员AccountId
     * @param {PermissionType} args.permission 更改为的权限
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateMemberPermission: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateMemberPermission', args, options);
    },
    
    /**
     * 托付根目录的拥有者
     * @param {Object} args 请求参数
     * @param {String} args.id 根目录的ID
     * @param {String} args.memberId 被托付的成员AccountId
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateRootOwner: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateRootOwner', args, options);
    },
    
    /**
     * 更改根目录的名称
     * @param {Object} args 请求参数
     * @param {String} args.id 根目录ID
     * @param {String} args.name 更改的名称
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateRootName: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateRootName', args, options);
    },
    
    /**
     * 更改被邀请的状态
     * @param {Object} args 请求参数
     * @param {String} args.id 
     * @param {String} args.memberId 
     * @param {MemberStatus} args.memberStatus 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateMemberStatus: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateMemberStatus', args, options);
    },
    
    /**
     * 重发邀请
     * @param {Object} args 请求参数
     * @param {String} args.id 
     * @param {String} args.memberId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    resendInvite: function(args, options) {
        return api.fetchApi(ctrlName, 'ResendInvite', args, options);
    },
    
    /**
     * 获取共享文件夹下节点列表
     * @param {Object} args 请求参数
     * @param {NodeLocationType} args.rootType 
     * @param {String} [args.parentId=null] 
     * @param {String} [args.keywords=null] 
     * @param {NodeStatus} [args.status=1] 
     * @param {NodeOrderField} [args.sortBy=2] 
     * @param {SortType} [args.sortType=2] 
     * @param {Int32} [args.skip=0] 
     * @param {Int32} [args.limit=20] 
     * @param {NodeType} [args.nodeType=0] 
     * @param {String[]} [args.filterIDs=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeListWithTotalCountModel, ErrorModel>} 
     */
    getNodes: function(args, options) {
        return api.fetchApi(ctrlName, 'GetNodes', args, options);
    },
    
    /**
     * 全局搜索，包括我的文件和所有根目录
     * @param {Object} args 请求参数
     * @param {String} args.keywords 
     * @param {NodeOrderField} [args.sortBy=2] 
     * @param {SortType} [args.sortType=2] 
     * @param {Int32} [args.skip=0] 
     * @param {Int32} [args.limit=20] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeListWithTotalCountModel, ErrorModel>} 
     */
    globalSearch: function(args, options) {
        return api.fetchApi(ctrlName, 'GlobalSearch', args, options);
    },
    
    /**
     * 获取列表中文件夹总数和其中的文件总大小
     * @param {Object} args 请求参数
     * @param {NodeLocationType} args.rootType 
     * @param {String} args.keywords 
     * @param {String} args.parentId 
     * @param {NodeStatus} [args.status=1] 
     * @param {NodeOrderField} [args.sortBy=2] 
     * @param {SortType} [args.sortType=2] 
     * @param {Int32} [args.skip=0] 
     * @param {Int32} [args.limit=20] 
     * @param {String[]} [args.filterIDs=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcTotalFolderCountAndTotalFileSizeModel, ErrorModel>} 
     */
    getNodesTotalFolderCountAndFileSize: function(args, options) {
        return api.fetchApi(ctrlName, 'GetNodesTotalFolderCountAndFileSize', args, options);
    },
    
    /**
     * 获取节点详情
     * @param {Object} args 请求参数
     * @param {String} [args.id=null] 
     * @param {String} [args.path=null] 
     * @param {NodeActionType} [args.actionType=12] 查看类型是分享地址还是从知识中心读取
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeModel, ErrorModel>} 
     */
    getNodeDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetNodeDetail', args, options);
    },
    
    /**
     * 添加节点
     * @param {Object} args 请求参数
     * @param {String} args.name 
     * @param {NodeType} args.type 
     * @param {String} [args.parentId=null] 
     * @param {String} [args.rootId=null] 
     * @param {NodeSource} [args.source=null] 
     * @param {?Int32} [args.size=null] 
     * @param {String} [args.filePath=null] 
     * @param {String} [args.originLinkUrl=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeModel, ErrorModel>} 
     */
    addNode: function(args, options) {
        return api.fetchApi(ctrlName, 'AddNode', args, options);
    },
    
    /**
     * 更新节点
     * @param {Object} args 请求参数
     * @param {String} args.id 
     * @param {String} [args.name=null] 
     * @param {?Boolean} [args.isDownloadable=null] 
     * @param {?Boolean} [args.isEditable=null] 
     * @param {?NodeVisibleType} [args.visibleType=null] 
     * @param {String} [args.newLinkUrl=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeModel, ErrorModel>} 
     */
    updateNode: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateNode', args, options);
    },
    
    /**
     * 节点标星
     * @param {Object} args 请求参数
     * @param {String} args.id 
     * @param {Boolean} [args.star=True] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    starNode: function(args, options) {
        return api.fetchApi(ctrlName, 'StarNode', args, options);
    },
    
    /**
     * 根据 Id 列表删除或彻底删除节点
     * @param {Object} args 请求参数
     * @param {String[]} args.ids 要删除的 id 列表
     * @param {Boolean} [args.isPermanent=False] 是否彻底删除
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeUpdateResultModel, ErrorModel>} 是否成功
     */
    removeNode: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveNode', args, options);
    },
    
    /**
     * 根据父节点 Id 和搜索条件删除或彻底删除节点
     * @param {Object} args 请求参数
     * @param {String} args.keywords 
     * @param {String} args.parentId 
     * @param {Boolean} args.isPermanent 
     * @param {NodeLocationType} args.locationType 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeUpdateResultModel, ErrorModel>} 
     */
    removeNodeByParentId: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveNodeByParentId', args, options);
    },
    
    /**
     * 还原回收站中的节点
     * @param {Object} args 请求参数
     * @param {String[]} args.ids 节点列表
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeUpdateResultModel, ErrorModel>} 
     */
    restoreNode: function(args, options) {
        return api.fetchApi(ctrlName, 'RestoreNode', args, options);
    },
    
    /**
     * 根据父节点 Id 和搜索条件还原回收站中的节点
     * @param {Object} args 请求参数
     * @param {String} args.keywords 
     * @param {String} args.parentId 
     * @param {NodeLocationType} args.locationType 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeUpdateResultModel, ErrorModel>} 
     */
    restoreNodeByParentId: function(args, options) {
        return api.fetchApi(ctrlName, 'RestoreNodeByParentId', args, options);
    },
    
    /**
     * 根据节点 Id 移动节点
     * @param {Object} args 请求参数
     * @param {String[]} args.ids 被移动的节点 id
     * @param {String} args.toId 移动到的节点或根节点 id
     * @param {NodeLocationType} args.toType 移动到的节点根目录类型
     * @param {ExistNameExecuteType} [args.handleNameType=1] 重名时选择节点操作方式
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeUpdateResultModel, ErrorModel>} 
     */
    moveNode: function(args, options) {
        return api.fetchApi(ctrlName, 'MoveNode', args, options);
    },
    
    /**
     * 全选移动节点
     * @param {Object} args 请求参数
     * @param {String} args.keywords 
     * @param {String} args.parentId 
     * @param {NodeLocationType} args.fromType 
     * @param {String} args.toId 
     * @param {NodeLocationType} args.toType 
     * @param {ExistNameExecuteType} [args.existNameExecuteType=1] 
     * @param {String[]} [args.excludeNodeIds=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeUpdateResultModel, ErrorModel>} 
     */
    moveNodeByParentId: function(args, options) {
        return api.fetchApi(ctrlName, 'MoveNodeByParentId', args, options);
    },
    
    /**
     * 根据节点 Id 复制节点
     * @param {Object} args 请求参数
     * @param {} args.ids 
     * @param {String} args.toId 
     * @param {NodeLocationType} args.toType 
     * @param {ExistNameExecuteType} [args.handleNameType=1] 
     * @param {Boolean} [args.copySource=True] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeUpdateResultModel, ErrorModel>} 
     */
    copyNode: function(args, options) {
        return api.fetchApi(ctrlName, 'CopyNode', args, options);
    },
    
    /**
     * 全选复制节点
     * @param {Object} args 请求参数
     * @param {String} args.keywords 
     * @param {String} args.parentId 
     * @param {NodeLocationType} args.fromType 
     * @param {String} args.toId 
     * @param {NodeLocationType} args.toType 
     * @param {ExistNameExecuteType} [args.existNameExecuteType=1] 
     * @param {String[]} [args.excludeNodeIds=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeUpdateResultModel, ErrorModel>} 
     */
    copyNodeByParentId: function(args, options) {
        return api.fetchApi(ctrlName, 'CopyNodeByParentId', args, options);
    },
    
    /**
     * 获取节点日志
     * @param {Object} args 请求参数
     * @param {String} args.id 节点 Id
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcNodeLog, ErrorModel>} 
     */
    getNodeLogDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetNodeLogDetail', args, options);
    },
    
    /**
     * 获取根节点日志
     * @param {Object} args 请求参数
     * @param {String} args.id 根节点 Id
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcRootLog, ErrorModel>} 
     */
    getRootLogDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetRootLogDetail', args, options);
    },
    
    /**
     * 获取“我的文件”日志
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcRootLog, ErrorModel>} 
     */
    getMyLogDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetMyLogDetail', args, options);
    },
    
    /**
     * 增加阅读数
     * @param {Object} args 请求参数
     * @param {String} args.id 节点 ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    addNodeViewCount: function(args, options) {
        return api.fetchApi(ctrlName, 'AddNodeViewCount', args, options);
    },
    
    /**
     * 增加下载数
     * @param {Object} args 请求参数
     * @param {String} args.id 节点 ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    addNodeDownloadCount: function(args, options) {
        return api.fetchApi(ctrlName, 'AddNodeDownloadCount', args, options);
    },
    
    /**
     * 获取当前使用的流量和可用流量总数
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KcUsageModel, ErrorModel>} 
     */
    getUsage: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUsage', args, options);
    },
    
    /**
     * 获取当前用户使用的总空间，已用存储空间 = “我的文件”+拥有者为该用户的共享文件夹（包括企业和个人）。
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Int64, ErrorModel>} 
     */
    getTotalUsedSize: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTotalUsedSize', args, options);
    }
};
module.exports = kc;
