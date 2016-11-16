var api = require('./_api.js');
var ctrlName = 'TaskCenter';
/**
 * 任务中心
 * @exports AjaxCtrl/TaskCenter
 */
var taskCenter = {
    /**
     * 网络管理员修改项目负责人
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.chargeAccountID 指定负责人accountID
     * @param {String} args.projectId 当前网络ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    adminUpdateFolderChargeUser: function(args, options) {
        return api.fetchApi(ctrlName, 'AdminUpdateFolderChargeUser', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getProjectAllLeaveUserChargeFoldes: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectAllLeaveUserChargeFoldes', args, options);
    },
    
    /**
     * 获取左侧菜单栏
     * @param {Object} args 请求参数
     * @param {String} args.projectId 网络ID
     * @param {String} [args.other=null] 查看他人
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getLeftMenu: function(args, options) {
        return api.fetchApi(ctrlName, 'GetLeftMenu', args, options);
    },
    
    /**
     * 获取我负责的 我托付的 我参与的有新讨论并未屏蔽提醒的任务数
     * @param {Object} args 请求参数
     * @param {String} [args.projectId=all] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskTabControlCount: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskTabControlCount', args, options);
    },
    
    /**
     * 获取任务日志列表
     * @param {Object} args 请求参数
     * @param {String} args.taskID 
     * @param {String} args.projectId 
     * @param {Int32} [args.page=1] 页码 从1开始
     * @param {Int32} [args.size=10000] 页大小 默认10000
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskLog: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskLog', args, options);
    },
    
    /**
     * 获取任务附件列表
     * @param {Object} args 请求参数
     * @param {Int32} args.page 页码 从1开始
     * @param {Int32} args.size 页大小 默认0 不分页
     * @param {String} args.taskID 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskAtt: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskAtt', args, options);
    },
    
    /**
     * 获取任务列表
     * @param {Object} args 请求参数
     * @param {Int32} args.page 页码 从1开始
     * @param {Int32} args.size 页大小 默认20
     * @param {String} args.projectId 
     * @param {TaskOrderByType} args.sort 排序选项
     * @param {FilterType_TaskList} args.filterType 过滤类型
     * @param {TaskColor} [args.color=-1] 颜色选项
     * @param {TaskStatus} [args.status=-1] 状态
     * @param {MeTaskClassify} [args.classify=-1] 只获取某一分类的任务 否则传ALL
     * @param {Boolean} [args.star=False] 是否过滤加星 true  过滤 false 不过滤
     * @param {String} [args.filterTaskIDs=null] 需要排除的任务ID 使用逗号,隔开
     * @param {String} [args.filterMeTaskClassifys=null] 过滤分类 使用逗号,隔开
     * @param {Boolean} [args.isFirst=True] 是否第一次加载 如：刷新此值为true
     * @param {String} [args.other=null] 查看他人时  他人AccountID
     * @param {String} [args.tagID=null] 标签ID
     * @param {String} [args.folderID=null] 项目ID
     * @param {String} [args.keywords=null] 搜索关键字
     * @param {?DateTime} [args.completeTime=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskList', args, options);
    },
    
    /**
     * 获取星标任务
     * @param {Object} args 请求参数
     * @param {String} args.projectId 网络ID
     * @param {TaskStatus} [args.status=0] 任务状态
     * @param {?DateTime} [args.completeTime=null] 完成时间（状态进行中时无效）
     * @param {Int32} [args.pageIndex=1] 当前页码
     * @param {Int32} [args.pageSize=20] 页码尺寸
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskListWithStar: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskListWithStar', args, options);
    },
    
    /**
     * 获取指定任务的 子任务列表
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.projectId 任务所在网络ID
     * @param {TaskOrderByType} [args.sort=9] 排序
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getSubTask: function(args, options) {
        return api.fetchApi(ctrlName, 'GetSubTask', args, options);
    },
    
    /**
     * 获取项目下的任务列表
     * @param {Object} args 请求参数
     * @param {String} args.other 
     * @param {Int32} args.page 页码 从1开始
     * @param {Int32} args.size 页大小 默认20
     * @param {String} args.folderID 项目ID
     * @param {String} args.stageID 看板ID
     * @param {String} args.tagID ID
     * @param {String} args.projectId 网络ID
     * @param {TaskOrderByType} [args.sort=9] 排序选项
     * @param {TaskColor} [args.color=-1] 颜色选项
     * @param {TaskStatus} [args.status=-1] 状态
     * @param {?DateTime} [args.completeTime=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getFolderTaskList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderTaskList', args, options);
    },
    
    /**
     * 获取与我有关的任务列表简单信息
     * @param {Object} args 请求参数
     * @param {String} args.keywords 
     * @param {String} [args.projectId=all] 
     * @param {Int32} [args.pageIndex=1] 
     * @param {Int32} [args.pageSize=20] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getMyTaskList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetMyTaskList', args, options);
    },
    
    /**
     * 获取任务详情
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskDetail', args, options);
    },
    
    /**
     * 获取指定任务可以关联的全部任务
     * @param {Object} args 请求参数
     * @param {String} args.taskID 当前任务
     * @param {String} args.keyword 关键字
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskList_RelationParent: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskList_RelationParent', args, options);
    },
    
    /**
     * 获取与我协作的任务, 个人详情页使用
     * @param {Object} args 请求参数
     * @param {String} args.withAccountID 查看的用户AccountID
     * @param {Int32} args.pageNum page Number
     * @param {Int32} [args.pageSize=6] pageSize
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskWithMe: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskWithMe', args, options);
    },
    
    /**
     * 添加任务（指定项目不存在时创建项目）
     * @param {Object} args 请求参数
     * @param {String} args.taskName 任务名
     * @param {String} args.projectId 网络ID
     * @param {String} [args.stageID=null] 看板ID（有folder选中的情况下否则为穿空）
     * @param {String} [args.summary=null] 任务描述
     * @param {String} [args.folderID=null] 项目ID
     * @param {String} [args.folderName=null] 项目名(项目ID存在已项目ID为主，没项目ID则根据项目名新建项目)
     * @param {String} [args.chargeAccountID=null] 指定任务负责人ID
     * @param {String} [args.members=null] 添加的任务成员
     * @param {String} [args.parentID=null] 指定创建的任务所属母任务(与项目互斥，母任务ID优先于folderID,folderName)
     * @param {String} [args.postID=null] 动态ID，添加到动态用
     * @param {Boolean} [args.star=False] 是否创建同时加星（个人设置）
     * @param {String} [args.attachments=null] 附件，会以讨论形式添加
     * @param {Dictionary<String, String>} [args.specialAccounts=null] 特殊用户字典结构
     * @param {String} [args.appID=null] 
     * @param {?DateTime} [args.deadline=null] 截止时间
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    addTask: function(args, options) {
        return api.fetchApi(ctrlName, 'AddTask', args, options);
    },
    
    /**
     * 复制任务
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务
     * @param {String} args.taskName 任务名称
     * @param {Boolean} args.taskDesc 是否复制-任务描述
     * @param {Boolean} args.folderID 是否复制-项目信息
     * @param {String} args.chargeUser 负责人
     * @param {Boolean} args.members 是否复制-成员
     * @param {Boolean} args.tag 是否复制-标签
     * @param {Boolean} args.deadline 是否复制-截止日期
     * @param {Boolean} args.subTask 是否复制-子任务
     * @param {Boolean} args.subTaskDesc 
     * @param {String} args.projectId 
     * @param {String} [args.appID=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    duplicateTask: function(args, options) {
        return api.fetchApi(ctrlName, 'DuplicateTask', args, options);
    },
    
    /**
     * 删除任务（单个）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {Boolean} args.isSubTask 是否应用于子任务（是否删除子任务）
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    deleteTask: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteTask', args, options);
    },
    
    /**
     * 删除任务(批量)
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 多个逗号,隔开
     * @param {Boolean} args.isSubTask 是否应用于子任务（是否删除子任务）
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchDeleteTask: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchDeleteTask', args, options);
    },
    
    /**
     * 修改任务负责人
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务
     * @param {String} args.charge 负责人
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskCharge: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskCharge', args, options);
    },
    
    /**
     * 修改任务负责人 （多个）
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 使用逗号,隔开
     * @param {String} args.charge 负责人
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchUpdateTaskCharge: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchUpdateTaskCharge', args, options);
    },
    
    /**
     * 修改任务名称
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.name 新的任务名称
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskName: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskName', args, options);
    },
    
    /**
     * 修改任务描述
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.summary 任务描述
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskSummary: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskSummary', args, options);
    },
    
    /**
     * 修改任务截止日期（单个）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.deadline 新的截止日期
     * @param {Boolean} args.isInherit 是否应用子任务
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskDeadline: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskDeadline', args, options);
    },
    
    /**
     * 修改任务截止日期（多个）
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 使用逗号,隔开
     * @param {String} args.deadline 新的截止日期
     * @param {Boolean} args.isSubTask 是否应用子任务
     * @param {String} args.projectId 任务的网络ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchUpdateTaskDeadline: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchUpdateTaskDeadline', args, options);
    },
    
    /**
     * 修改任务锁定状态（单个）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {Boolean} args.locked 是否锁定
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskLocked: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskLocked', args, options);
    },
    
    /**
     * 修改任务锁定状态（多个）
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 使用逗号,隔开
     * @param {Boolean} args.locked 是否锁定
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchUpdateTaskLocked: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchUpdateTaskLocked', args, options);
    },
    
    /**
     * 修改任务看板ID （单个）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.stageID 看板ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskStageID: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskStageID', args, options);
    },
    
    /**
     * 修改任务看板ID  （多个）
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 使用逗号隔开
     * @param {String} args.stageID 看板ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchUpdateTaskStageID: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchUpdateTaskStageID', args, options);
    },
    
    /**
     * 修改任务完成状态 （单个）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {TaskStatus} args.status 状态
     * @param {Boolean} args.isSubTask 是否应用子任务
     * @param {String} args.projectId 任务网络ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskStatus: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskStatus', args, options);
    },
    
    /**
     * 修改任务完成状态 （多个）
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 使用逗号隔开
     * @param {TaskStatus} args.status 状态
     * @param {Boolean} args.isSubTask 是否应用子任务
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchUpdateTaskStatus: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchUpdateTaskStatus', args, options);
    },
    
    /**
     * 修改任务母任务ID （单个）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.parentID 母任务ID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskParentID: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskParentID', args, options);
    },
    
    /**
     * 修改任务母任务ID（多个）
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 使用逗号隔开
     * @param {String} args.parentID 母任务ID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchUpdateTaskParentID: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchUpdateTaskParentID', args, options);
    },
    
    /**
     * 修改任务母任务ID （单个）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.folderID 项目ID
     * @param {String} args.projectId 任务的网络ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskFolderID: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskFolderID', args, options);
    },
    
    /**
     * 修改任务母任务ID（多个）
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 使用逗号隔开
     * @param {String} args.folderID 项目ID
     * @param {String} args.projectId 任务的网络ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchUpdateTaskFolderID: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchUpdateTaskFolderID', args, options);
    },
    
    /**
     * 添加任务成员 多个
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID
     * @param {String} args.memberstr 被操纵用户 使用逗号,隔开
     * @param {Dictionary<String, String>} args.specialAccounts 
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchAddTaskMember: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchAddTaskMember', args, options);
    },
    
    /**
     * 添加任务成员 单个
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.accountID 被操纵用户
     * @param {Dictionary<String, String>} args.specialAccounts 特殊用户
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    addTaskMember: function(args, options) {
        return api.fetchApi(ctrlName, 'AddTaskMember', args, options);
    },
    
    /**
     * 申请加入任务
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    applyJoinTask: function(args, options) {
        return api.fetchApi(ctrlName, 'ApplyJoinTask', args, options);
    },
    
    /**
     * 删除任务成员
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.accountID 被操作者
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    deleteTaskMember: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteTaskMember', args, options);
    },
    
    /**
     * 删除任务成员
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 逗号,隔开
     * @param {String} args.accountID 被操作者
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchDeleteTaskMember: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchDeleteTaskMember', args, options);
    },
    
    /**
     * 同意申请加入任务
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.accountID 被操作任务ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    agreeApplyJoinTask: function(args, options) {
        return api.fetchApi(ctrlName, 'AgreeApplyJoinTask', args, options);
    },
    
    /**
     * 拒绝加入任务
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.accountID 被操作任务ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    refuseJoinTask: function(args, options) {
        return api.fetchApi(ctrlName, 'RefuseJoinTask', args, options);
    },
    
    /**
     * 修改任务成员星标状态（单个）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {Boolean} args.star 星标状态
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskMemberStar: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskMemberStar', args, options);
    },
    
    /**
     * 修改任务成员星标状态（多个）
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 使用逗号,隔开
     * @param {Boolean} args.star 星标状态
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchUpdateTaskMemberStar: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchUpdateTaskMemberStar', args, options);
    },
    
    /**
     * 修改任务成员颜色（单个）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {TaskColor} args.color 任务颜色
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskMemberColor: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskMemberColor', args, options);
    },
    
    /**
     * 修改任务成员颜色（多个）
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 使用逗号,隔开
     * @param {TaskColor} args.color 任务颜色
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchUpdateTaskMemberColor: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchUpdateTaskMemberColor', args, options);
    },
    
    /**
     * 修改任务成员提醒状态（单个）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {Boolean} args.notice 提醒状态
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskMemberNotice: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskMemberNotice', args, options);
    },
    
    /**
     * 修改任务成员提醒状态（多个）
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务ID 使用逗号,隔开
     * @param {Boolean} args.notice 提醒状态
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    batchUpdateTaskMemberNotice: function(args, options) {
        return api.fetchApi(ctrlName, 'BatchUpdateTaskMemberNotice', args, options);
    },
    
    /**
     * 修改任务成员 的分类  单个和多个
     * @param {Object} args 请求参数
     * @param {String} args.taskIDstr 任务
     * @param {MeTaskClassify} args.classify 分类
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTaskMemberClassify: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTaskMemberClassify', args, options);
    },
    
    /**
     * 获取任务讨论列表
     * @param {Object} args 请求参数
     * @param {Int32} args.page 页码
     * @param {Int32} args.size 页大小
     * @param {String} args.taskID 任务ID
     * @param {Boolean} args.isOnlyMe 是否只看与我有关的
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskTopicList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskTopicList', args, options);
    },
    
    /**
     * 获取讨论详情
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.topicID 讨论ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskTopic: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskTopic', args, options);
    },
    
    /**
     * 获取加星讨论数
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getStarTopicCount: function(args, options) {
        return api.fetchApi(ctrlName, 'GetStarTopicCount', args, options);
    },
    
    /**
     * 获取我与他人的讨论对话
     * @param {Object} args 请求参数
     * @param {String} args.taskID 所在任务ID
     * @param {String} args.projectId 
     * @param {String} args.others 操作者
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskTopic_TalkToOthers: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskTopic_TalkToOthers', args, options);
    },
    
    /**
     * 添加讨论 （讨论、回复）
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.msg 消息
     * @param {String} args.topicID 回复那边的讨论ID
     * @param {String} args.attachments 附件JSON
     * @param {String} [args.appID=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    addTaskTopic: function(args, options) {
        return api.fetchApi(ctrlName, 'AddTaskTopic', args, options);
    },
    
    /**
     * 添加动态回复到讨论
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.postID 动态ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    addTaskTopicFromPost: function(args, options) {
        return api.fetchApi(ctrlName, 'AddTaskTopicFromPost', args, options);
    },
    
    /**
     * 删除任务讨论
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.topicID 讨论ID
     * @param {Boolean} args.deleteFile 是否删除附件
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    deleteTaskTopic: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteTaskTopic', args, options);
    },
    
    /**
     * 修改讨论- 星标
     * @param {Object} args 请求参数
     * @param {String} args.taskID 任务ID
     * @param {String} args.topicID 讨论ID
     * @param {String} args.projectId 
     * @param {Boolean} args.star 是否加星
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateTopicStar: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateTopicStar', args, options);
    },
    
    /**
     * 搜索项目 OK
     * @param {Object} args 请求参数
     * @param {String} args.keywords 搜索内容
     * @param {String} args.otherAccountID 搜索他人,他人accountID,协作
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    searchFolderList: function(args, options) {
        return api.fetchApi(ctrlName, 'SearchFolderList', args, options);
    },
    
    /**
     * 获取项目计数
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getProjectsFolderNotice: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectsFolderNotice', args, options);
    },
    
    /**
     * 查询指定网络下文件夹和初层项目列表
     * @param {Object} args 请求参数
     * @param {String} args.projectId 项目ID
     * @param {String} args.accountID 他人accountID
     * @param {String} args.fileIDs 文件列表,分隔
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getMainFolderList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetMainFolderList', args, options);
    },
    
    /**
     * 获取指定文件下下的所有项目
     * @param {Object} args 请求参数
     * @param {String} args.fileID 文件夹ID
     * @param {String} args.accountID 他人accountID
     * @param {String} args.projectId 网络ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getMianFolderListInFile: function(args, options) {
        return api.fetchApi(ctrlName, 'GetMianFolderListInFile', args, options);
    },
    
    /**
     * 获取指定网络下的隐藏项目
     * @param {Object} args 请求参数
     * @param {String} args.accountID 他人accountID
     * @param {String} args.projectId 网络ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getHiddenFolderList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetHiddenFolderList', args, options);
    },
    
    /**
     * 获取指定网络ID下已归档的项目
     * @param {Object} args 请求参数
     * @param {String} args.accountID 他人accountID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getArchiveFolderList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetArchiveFolderList', args, options);
    },
    
    /**
     * 获取置顶项目
     * @param {Object} args 请求参数
     * @param {String} args.accountID 他人accountID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTopFolderList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTopFolderList', args, options);
    },
    
    /**
     * 获取指定网络下的协作用户数量
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTeamworkCount: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTeamworkCount', args, options);
    },
    
    /**
     * 获取指定网络下的所有协作用（按照协作次数倒叙）
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTeamworkMember: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTeamworkMember', args, options);
    },
    
    /**
     * 获取项目下属
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getSubordinate: function(args, options) {
        return api.fetchApi(ctrlName, 'GetSubordinate', args, options);
    },
    
    /**
     * 获取指定网络项目下拉选项卡,创建任务时用非搜索用
     * @param {Object} args 请求参数
     * @param {String} args.projectId 网络ID
     * @param {String} args.keyWords 查找关键字
     * @param {String} [args.excludeTaskIDs=null] 需排除的taskid,英文逗号拼接
     * @param {Int32} [args.pageSize=10] 页面尺寸
     * @param {Int32} [args.pageIndex=1] 当前页码
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getFolderList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderList', args, options);
    },
    
    /**
     * 获取项目描述和是否有编辑权限
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getFolderDescribe: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderDescribe', args, options);
    },
    
    /**
     * 获取项目日志 ok
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {Int32} [args.pageIndex=1] 请求页码 默认:1
     * @param {Int32} [args.pageSize=10] 分页尺寸 默认:10
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getFolderLog: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderLog', args, options);
    },
    
    /**
     * 验证该用户是不是项目下的某任务的负责人 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.accountID 指定用户accountID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    validationUserIsCharge: function(args, options) {
        return api.fetchApi(ctrlName, 'ValidationUserIsCharge', args, options);
    },
    
    /**
     * 创建项目 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderName 项目名称
     * @param {String} args.projectId 
     * @param {FolderVisibility} args.visibility 可见性类型
     * @param {String} args.groupID 群组
     * @param {String} [args.appID=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    addFolder: function(args, options) {
        return api.fetchApi(ctrlName, 'AddFolder', args, options);
    },
    
    /**
     * 移除项目
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.projectId 
     * @param {Boolean} args.isDeleteTask 删除任务与否
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    removeFolder: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveFolder', args, options);
    },
    
    /**
     * 修改项目归档状态
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {Boolean} args.archived 归档/退档
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderArchived: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderArchived', args, options);
    },
    
    /**
     * 项目修改可见性 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.projectId 
     * @param {FolderVisibility} args.visibility 项目可见性  0私密  1公开仅群组  2全公司
     * @param {String} args.groupID 群组
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderVisibility: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderVisibility', args, options);
    },
    
    /**
     * 修改项目负责人
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.chargeAccountID 下任负责人accountID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderCharge: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderCharge', args, options);
    },
    
    /**
     * 修改项目名称 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.folderName 项目名
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderName: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderName', args, options);
    },
    
    /**
     * 修改项目描述 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.describe 项目描述
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderDes: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderDes', args, options);
    },
    
    /**
     * 复制项目 ok
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.chargeAccountID 负责人accountID
     * @param {String} args.folderName 项目名称
     * @param {Boolean} args.stage 是否复制看板
     * @param {Boolean} args.describe 是否复制描述
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    duplicateFolder: function(args, options) {
        return api.fetchApi(ctrlName, 'DuplicateFolder', args, options);
    },
    
    /**
     * 复制项目2
     * @param {Object} args 请求参数
     * @param {String} args.folderID 被复制项目ID
     * @param {String} args.folderName 新项目名称
     * @param {String} args.chargeAccountID 项目负责人AID
     * @param {Boolean} [args.hasDes=True] 是否包含项目描述
     * @param {Boolean} [args.hasFolderMember=True] 是否包含项目成员
     * @param {Boolean} [args.hasStage=True] 是否包含看板
     * @param {Boolean} [args.hasTask=True] 是否包含项目下所有任务
     * @param {Boolean} [args.hasTaskMember=True] 是否包含任务成员
     * @param {Boolean} [args.hasTaskDes=True] 是否包含项目描述
     * @param {String} [args.appID=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    duplicateFolder2: function(args, options) {
        return api.fetchApi(ctrlName, 'DuplicateFolder2', args, options);
    },
    
    /**
     * 项目看板查询
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getFolderStage: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderStage', args, options);
    },
    
    /**
     * 项目看板新增 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.stageName 看板名
     * @param {Int32} args.sort 排序
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    addFolderStage: function(args, options) {
        return api.fetchApi(ctrlName, 'AddFolderStage', args, options);
    },
    
    /**
     * 修改项目看板
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.stageID 看板ID
     * @param {Int32} args.sort 排序
     * @param {String} args.stageName 看板名称
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderStage: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderStage', args, options);
    },
    
    /**
     * 删除项目看板
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.stageID 看板ID
     * @param {String} args.newStageID 新看板ID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    deleteFolderStage: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteFolderStage', args, options);
    },
    
    /**
     * 获取项目成员 和公开范围（项目设置接口用）
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getFolderDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderDetail', args, options);
    },
    
    /**
     * 获取当前用户在项目中的状态
     * @param {Object} args 请求参数
     * @param {String} args.folderID 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getFolderMemberType: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderMemberType', args, options);
    },
    
    /**
     * 申请加入项目成为项目成员
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.applyInfo 申请内容描述
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    applyFolderMember: function(args, options) {
        return api.fetchApi(ctrlName, 'ApplyFolderMember', args, options);
    },
    
    /**
     * 拒绝外人成为项目成员
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.projectId 
     * @param {String} args.accountID 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    refuseFolderMember: function(args, options) {
        return api.fetchApi(ctrlName, 'RefuseFolderMember', args, options);
    },
    
    /**
     * 项目成员新增 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.memberIDs 新增用户accountID
     * @param {Dictionary<String, String>} args.specialAccounts {"key1":"value1","key2":"value2"}
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    addFolderMembers: function(args, options) {
        return api.fetchApi(ctrlName, 'AddFolderMembers', args, options);
    },
    
    /**
     * 项目成员新增 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.memberID 新增用户accountID
     * @param {Boolean} args.isAdmin 是否默认为管理员
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderMemberStatusAndAuth: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderMemberStatusAndAuth', args, options);
    },
    
    /**
     * 移除项目成员 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.projectId 
     * @param {String} args.accountID 移除成员accountID,
     * @param {Boolean} [args.isRemoveTaskMember=False] 是否同步移除项目下任务成员
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    removeFolderMember: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveFolderMember', args, options);
    },
    
    /**
     * 项目加星 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 
     * @param {String} args.projectId 
     * @param {Boolean} args.isStar 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderMemberStar: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderMemberStar', args, options);
    },
    
    /**
     * 修改项目关于用户置顶 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {Boolean} args.isTop 是否置顶
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderTop: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderTop', args, options);
    },
    
    /**
     * 修改项目显示状态
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {Boolean} args.isHidden 是否隐藏
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderDisplay: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderDisplay', args, options);
    },
    
    /**
     * 移动项目至指定文件夹(fileID空为移出)
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.fileID 文件夹ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderIntoFile: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderIntoFile', args, options);
    },
    
    /**
     * 修改项目成员权限 ok
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.projectId 
     * @param {String} args.accountID 被修改者accountID
     * @param {Boolean} args.isAdmin 是否管理员
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateFolderMemberAuth: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateFolderMemberAuth', args, options);
    },
    
    /**
     * 获取项目讨论
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {Boolean} args.onlyMe 是否只看自己
     * @param {String} args.projectId 
     * @param {Int32} args.pageIndex 请求页码
     * @param {Int32} args.pageSize 页面尺寸
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getFolderTopicList: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderTopicList', args, options);
    },
    
    /**
     * 获取指定项目讨论message ok
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.topicID 项目讨论ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getFolderTopicMessage: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderTopicMessage', args, options);
    },
    
    /**
     * 创建项目讨论/回复
     * @param {Object} args 请求参数
     * @param {String} args.folderID 
     * @param {FileType} args.fileType 
     * @param {String} args.replyTopicID 
     * @param {String} args.replyAccountID 
     * @param {String} args.message 
     * @param {String} args.attachments 
     * @param {String} [args.appID=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    addFolderTopic: function(args, options) {
        return api.fetchApi(ctrlName, 'AddFolderTopic', args, options);
    },
    
    /**
     * 删除指定项目讨论
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.topicID 项目讨论ID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    removeFolderTopic: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveFolderTopic', args, options);
    },
    
    /**
     * 获取项目文件列表 OK
     * @param {Object} args 请求参数
     * @param {String} args.folderID 项目ID
     * @param {String} args.projectId 
     * @param {Int32} args.pageIndex 请求页面
     * @param {Int32} args.pageSize 页面尺寸
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getFolderFiles: function(args, options) {
        return api.fetchApi(ctrlName, 'GetFolderFiles', args, options);
    },
    
    /**
     * 项目文件夹添加
     * @param {Object} args 请求参数
     * @param {String} args.fileName 项目文件夹名称
     * @param {String} args.folderIDs 
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    addUserFolderFile: function(args, options) {
        return api.fetchApi(ctrlName, 'AddUserFolderFile', args, options);
    },
    
    /**
     * 项目文件修改
     * @param {Object} args 请求参数
     * @param {String} args.fileName 文件名
     * @param {String} args.ffileID 项目文件夹ID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    updateUserFolderFile: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateUserFolderFile', args, options);
    },
    
    /**
     * 删除项目文件夹
     * @param {Object} args 请求参数
     * @param {String} args.ffileID 项目文件夹ID
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    deleteUserFolderFile: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteUserFolderFile', args, options);
    },
    
    /**
     * 获取经常协作的用户
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getRelatedUsers: function(args, options) {
        return api.fetchApi(ctrlName, 'GetRelatedUsers', args, options);
    },
    
    /**
     * 获取指定任务列表的标签、项目
     * @param {Object} args 请求参数
     * @param {?FilterType_TaskList} args.type 过滤条件
     * @param {TaskStatus} args.status 任务状态
     * @param {String} args.projectId 
     * @param {String} [args.folderID=null] 所属项目ID
     * @param {String} [args.others=null] 获取的是协作任务时传
     * @param {TaskFromType} [args.fromType=0] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ReturnTemplate, ErrorModel>} 
     */
    getTaskTagAndFolder: function(args, options) {
        return api.fetchApi(ctrlName, 'GetTaskTagAndFolder', args, options);
    }
};
module.exports = taskCenter;
