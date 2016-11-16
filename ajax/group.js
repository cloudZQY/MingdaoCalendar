var api = require('./_api.js');
var ctrlName = 'Group';
/**
 * 群组相关
 * @exports AjaxCtrl/Group
 */
var group = {
    /**
     * 获取群组列表，包括名称和是否官方
     * @param {Object} args 请求参数
     * @param {String} [args.projectId=null] 网络 Id，不能和 excludeProjectId 同时存在
     * @param {String} [args.excludeProjectIds=null] 排除掉的网络 Id，逗号分割，不能和 projectId 同时存在
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<GroupModel>, ErrorModel>} 
     */
    getGroupsNameAndIsVerified: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroupsNameAndIsVerified', args, options);
    },
    
    /**
     * 获取最常使用的群组
     * @param {Object} args 请求参数
     * @param {Int32} [args.top=20] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KeyValueModel[], ErrorModel>} 
     */
    selectGroupMostFrequent: function(args, options) {
        return api.fetchApi(ctrlName, 'SelectGroupMostFrequent', args, options);
    },
    
    /**
     * 群组选择组件后台方法
     * @param {Object} args 请求参数
     * @param {String} args.projectId 网络 Id
     * @param {Boolean} [args.withRadio=False] 是否包括全员广播
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<KeyValueModel[], ErrorModel>} 
     */
    selectGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'SelectGroup', args, options);
    },
    
    /**
     * 获取群组列表
     * @param {Object} args 请求参数
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=2147483647] 
     * @param {String} [args.keywords=null] 
     * @param {GroupStatus} [args.status=-1] 
     * @param {SearchGroupType} [args.searchGroupType=-1] 
     * @param {SortGroup} [args.sortFiled=4] 
     * @param {SortType} [args.sortType=1] 
     * @param {GroupType} [args.groupType=-1] 
     * @param {String[]} [args.firstLetters=null] 
     * @param {Boolean} [args.containHidden=False] 
     * @param {String} [args.projectId=null] 
     * @param {Boolean} [args.withMapDepartment=False] 
     * @param {DataRange} [args.dataRange=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<GroupModel>, ErrorModel>} 
     */
    getGroups: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroups', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {String} [args.keywords=null] 
     * @param {String[]} [args.filterAccountIds=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ListModel<GroupModel>, ErrorModel>} 
     */
    getContactGroups: function(args, options) {
        return api.fetchApi(ctrlName, 'GetContactGroups', args, options);
    },
    
    /**
     * 加载群组成员（用户已加入此群组）
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=10] 
     * @param {String} [args.keywords=null] 
     * @param {GroupUserLoadType} [args.type=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupModel, ErrorModel>} 
     */
    getGroupUsers: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroupUsers', args, options);
    },
    
    /**
     * 关键词搜索群组内有效成员
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String} [args.keywords=null] 
     * @param {String[]} [args.filterAccountIds=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<UserModel[], ErrorModel>} 
     */
    getGroupEffectUsers: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroupEffectUsers', args, options);
    },
    
    /**
     * 加载群组默认头像
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupAvatarModel, ErrorModel>} 
     */
    getGroupAvatarSelectList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroupAvatarSelectList', args, options);
    },
    
    /**
     * 获取群组信息
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupModel, ErrorModel>} 
     */
    getGroupInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroupInfo', args, options);
    },
    
    /**
     * 群组名片
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupModel, ErrorModel>} 
     */
    getGroupCardInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetGroupCardInfo', args, options);
    },
    
    /**
     * 添加群组
     * @param {Object} args 请求参数
     * @param {String} args.groupName 
     * @param {String} [args.groupAbout=null] 
     * @param {String} [args.groupAvatar=null] 
     * @param {Boolean} [args.isApproval=False] 
     * @param {String} [args.projectId=null] 
     * @param {String} [args.mapDepartmentId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupModel, ErrorModel>} 
     */
    addGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'AddGroup', args, options);
    },
    
    /**
     * 添加讨论组
     * @param {Object} args 请求参数
     * @param {String[]} args.accountIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupModel, ErrorModel>} 
     */
    addDiscussionGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'AddDiscussionGroup', args, options);
    },
    
    /**
     * 设置管理员
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String[]} args.accountIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    addAdmin: function(args, options) {
        return api.fetchApi(ctrlName, 'AddAdmin', args, options);
    },
    
    /**
     * 申请加入群组
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupModel, ErrorModel>} 
     */
    applyJoinGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'ApplyJoinGroup', args, options);
    },
    
    /**
     * 审批通过
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String[]} args.accountIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    passJoinGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'PassJoinGroup', args, options);
    },
    
    /**
     * 退出群组
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupActionStatus, ErrorModel>} 
     */
    exitGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'ExitGroup', args, options);
    },
    
    /**
     * 开启群组
     * @param {Object} args 请求参数
     * @param {String[]} args.groupIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    openGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'OpenGroup', args, options);
    },
    
    /**
     * 关闭群组
     * @param {Object} args 请求参数
     * @param {String[]} args.groupIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    closeGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'CloseGroup', args, options);
    },
    
    /**
     * 更新群组push消息
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {Boolean} args.isPushNotice 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateGroupPushNotice: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateGroupPushNotice', args, options);
    },
    
    /**
     * 更改群头像
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String} args.avatar 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupModel, ErrorModel>} 
     */
    updateGroupAvatar: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateGroupAvatar', args, options);
    },
    
    /**
     * 修改群名称
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String} args.groupName 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateGroupName: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateGroupName', args, options);
    },
    
    /**
     * 修改群名称
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String} [args.groupAbout=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateGroupAbout: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateGroupAbout', args, options);
    },
    
    /**
     * 修改群审批
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {Boolean} args.isApproval 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateGroupApproval: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateGroupApproval', args, options);
    },
    
    /**
     * 修改群是否隐藏
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {Boolean} args.isHidden 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateGroupHidden: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateGroupHidden', args, options);
    },
    
    /**
     * 群组转换
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String} [args.projectId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateGroupToPost: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateGroupToPost', args, options);
    },
    
    /**
     * 修改官方群
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {Boolean} args.isVerified 
     * @param {String} [args.mapDepartmentId=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateGroupVerified: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateGroupVerified', args, options);
    },
    
    /**
     * 删除群组（解散）
     * @param {Object} args 请求参数
     * @param {String[]} args.groupIds 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    removeGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveGroup', args, options);
    },
    
    /**
     * 移除管理员
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupActionStatus, ErrorModel>} 
     */
    removeAdmin: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveAdmin', args, options);
    },
    
    /**
     * 移除群组用户
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupActionStatus, ErrorModel>} 
     */
    removeUser: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveUser', args, options);
    },
    
    /**
     * 拒绝用户加入
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupActionStatus, ErrorModel>} 
     */
    refuseUser: function(args, options) {
        return api.fetchApi(ctrlName, 'RefuseUser', args, options);
    },
    
    /**
     * 取消邀请
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {String} args.accountId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupActionStatus, ErrorModel>} 
     */
    cancelInviteUser: function(args, options) {
        return api.fetchApi(ctrlName, 'CancelInviteUser', args, options);
    },
    
    /**
     * 验证用户是否加入群组
     * @param {Object} args 请求参数
     * @param {String} args.groupId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<GroupModel, ErrorModel>} 
     */
    valideUserJoinGroup: function(args, options) {
        return api.fetchApi(ctrlName, 'ValideUserJoinGroup', args, options);
    }
};
module.exports = group;
