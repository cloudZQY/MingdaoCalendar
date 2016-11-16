var api = require('./_api.js');
var ctrlName = 'Calendar';
/**
 * @exports AjaxCtrl/Calendar
 */
var calendar = {
    /**
     * 获取指定时间段内的日程
     * @param {Object} args 请求参数
     * @param {String} args.accountIDs 被查看人的accountID,英文逗号拼接
     * @param {DateTime} args.startDate 开始时间
     * @param {Boolean} args.isCooperation 
     * @param {?DateTime} [args.endDate=null] 结束时间
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getWidgetCalendars: function(args, options) {
        return api.fetchApi(ctrlName, 'GetWidgetCalendars', args, options);
    },
    
    /**
     * 获取受邀日程数
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getUserInvitedCalendarsCount: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserInvitedCalendarsCount', args, options);
    },
    
    /**
     * 获取用户信息
     * @param {Object} args 请求参数
     * @param {String} args.accountIDs 用户accountID,英文逗号拼接
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getUserInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserInfo', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getIcsUrl: function(args, options) {
        return api.fetchApi(ctrlName, 'GetIcsUrl', args, options);
    },
    
    /**
     * 获取冲突日程(查看忙碌状态不管网络只要有但是不包含就是忙碌)
     * @param {Object} args 请求参数
     * @param {String} args.accountID 
     * @param {DateTime} args.startDate 
     * @param {DateTime} args.endDate 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getUserBusyStatus: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserBusyStatus', args, options);
    },
    
    /**
     * 待确定日程
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    invitedCalendars: function(args, options) {
        return api.fetchApi(ctrlName, 'InvitedCalendars', args, options);
    },
    
    /**
     * 获取左侧列表:今天:Today;明天:Tomorrow;本周:Week;本月:Month;更晚:Later
     * @param {Object} args 请求参数
     * @param {DateTime} args.startDate 开始时间
     * @param {DateTime} args.endDate 结束时间
     * @param {String} args.memberIDs 查询用户accountID,英文逗号拼接
     * @param {Boolean} [args.isWorkCalendar=True] 是否包含工作日程
     * @param {Boolean} [args.isTaskCalendar=True] 是否包含任务日程
     * @param {String} [args.categoryIDs=All] 标签ID，英文逗号拼接
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getCalendarList2: function(args, options) {
        return api.fetchApi(ctrlName, 'GetCalendarList2', args, options);
    },
    
    /**
     * 获取我的全部日程
     * @param {Object} args 请求参数
     * @param {String} args.keywords 关键字
     * @param {?DateTime} [args.startDate=null] 开始时间
     * @param {?DateTime} [args.endDate=null] 结束时间
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getMeCalendars: function(args, options) {
        return api.fetchApi(ctrlName, 'GetMeCalendars', args, options);
    },
    
    /**
     * 获取日程列表
     * @param {Object} args 请求参数
     * @param {DateTime} args.startDate 开始时间
     * @param {DateTime} args.endDate 结束时间
     * @param {String} args.memberIDs 查看accountID,英文逗号拼接
     * @param {String} [args.categoryIDs=All] 查看标签ID，英文逗号拼接
     * @param {Boolean} [args.isWorkCalendar=True] 是否查看工作日程
     * @param {Boolean} [args.isTaskCalendar=True] 是否查看任务日程
     * @param {FilterType_TaskList} [args.filterTaskType=1] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getCalendars: function(args, options) {
        return api.fetchApi(ctrlName, 'GetCalendars', args, options);
    },
    
    /**
     * 获取日程详情
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 日程ID
     * @param {?DateTime} args.recurTime 复发时间
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getCalendarDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetCalendarDetail', args, options);
    },
    
    /**
     * 
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 日程ID
     * @param {?DateTime} args.recurTime 复发时间
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getCalendarDetail2: function(args, options) {
        return api.fetchApi(ctrlName, 'GetCalendarDetail2', args, options);
    },
    
    /**
     * 获取日程分享详情（日程详情）
     * @param {Object} args 请求参数
     * @param {String} args.token 路由token
     * @param {String} [args.thirdID=null] 第三方ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getCalendarShareDetail: function(args, options) {
        return api.fetchApi(ctrlName, 'GetCalendarShareDetail', args, options);
    },
    
    /**
     * 修改日程分享状态或KEY
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 日程ID
     * @param {?DateTime} args.recurTime 复发时间
     * @param {Boolean} args.keyStatus 状态
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    updateCalednarShare: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateCalednarShare', args, options);
    },
    
    /**
     * 新增日程微信成员
     * @param {Object} args 请求参数
     * @param {String} args.thirdID 第三方ID
     * @param {String} args.token 路由token
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    insertCalendarWeChatMember: function(args, options) {
        return api.fetchApi(ctrlName, 'InsertCalendarWeChatMember', args, options);
    },
    
    /**
     * 移除日程中的微信成员
     * @param {Object} args 请求参数
     * @param {String} args.thirdID 第三方ID
     * @param {String} args.calendarID 日程ID
     * @param {?DateTime} args.recurTime 子日程复发时间
     * @param {Boolean} args.isAllCalendar 是否整个日程
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    removeCalendarWeChatMember: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveCalendarWeChatMember', args, options);
    },
    
    /**
     * 获取日程分享微信配置信息
     * @param {Object} args 请求参数
     * @param {String} args.url 
     * @param {String} args.jsapi_ticket 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getShareConfig: function(args, options) {
        return api.fetchApi(ctrlName, 'GetShareConfig', args, options);
    },
    
    /**
     * 新增日程
     * @param {Object} args 请求参数
     * @param {String} args.name 日程名称
     * @param {String} args.address 地址
     * @param {String} args.desc 描述
     * @param {DateTime} args.startDate 开始时间
     * @param {DateTime} args.endDate 截止时间
     * @param {Boolean} args.isAll 是否全天日程
     * @param {String} args.membersIDs 成员accountID 英文逗号拼接
     * @param {Dictionary<String, String>} args.specialAccounts {"key":"value","key1":"value1"}
     * @param {Boolean} args.isPrivate 是否私有日程
     * @param {String} [args.categoryID=1] 日程分类ID
     * @param {Boolean} [args.isRecur=False] 是否重复
     * @param {String} [args.attachments=null] 附件
     * @param {Int32} [args.remindTime=0] 提醒时间
     * @param {Int32} [args.remindType=0] 提醒时间分类
     * @param {Frequency} [args.frequency=0] 重复频率时间
     * @param {Int32} [args.interval=1] 重复间隔
     * @param {Int32} [args.recurCount=0] 重复次数
     * @param {?DateTime} [args.untilDate=null] 结束时间
     * @param {WeekDay} [args.weekDay=0] 周几
     * @param {String} [args.recurText=null] 重复描述
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    insertCalendar: function(args, options) {
        return api.fetchApi(ctrlName, 'InsertCalendar', args, options);
    },
    
    /**
     * 删除日程
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 日程ID
     * @param {?DateTime} args.recurTime 复发时间
     * @param {Boolean} args.isAllCalendar 是否全部日程
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    deleteCalendar: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteCalendar', args, options);
    },
    
    /**
     * 修改日程私密状态
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 日程ID
     * @param {Boolean} args.isPrivate 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    updateCalendarIsPrivate: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateCalendarIsPrivate', args, options);
    },
    
    /**
     * 修改日程颜色分类
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 
     * @param {String} [args.catID=1] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    updateCalendarCatId: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateCalendarCatId', args, options);
    },
    
    /**
     * 修改日程提醒
     * @param {Object} args 请求参数
     * @param {Int32} args.remindTime 提醒时间
     * @param {RemindType} args.remindType 提醒类型
     * @param {String} args.calendarID 日程ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    updateMemberRemind: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateMemberRemind', args, options);
    },
    
    /**
     * 编辑日程
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 日程ID
     * @param {String} args.name 日程名称
     * @param {String} args.address 地址
     * @param {String} args.desc 描述
     * @param {DateTime} args.startDate 开始时间
     * @param {DateTime} args.endDate 截止时间
     * @param {Boolean} args.isAll 是否全天日程
     * @param {Boolean} [args.isRecur=False] 是否复发
     * @param {Boolean} [args.isLock=False] 是否锁
     * @param {String} [args.attachments=null] 附件
     * @param {Frequency} [args.frequency=0] 频率
     * @param {Int32} [args.interval=1] 重复间隔
     * @param {Int32} [args.recurCount=0] 重复次数
     * @param {?DateTime} [args.untilDate=null] 结束日期
     * @param {WeekDay} [args.weekDay=0] 重复周期
     * @param {String} [args.recurText=null] 重复描述
     * @param {?DateTime} [args.recurTime=null] 复发时间
     * @param {Boolean} [args.isAllCalendar=False] 是否全部日程
     * @param {Boolean} [args.reConfirm=False] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    editCalendar: function(args, options) {
        return api.fetchApi(ctrlName, 'EditCalendar', args, options);
    },
    
    /**
     * 编辑日程时间
     * @param {Object} args 请求参数
     * @param {?DateTime} args.recurTime 重复日程的复发日期
     * @param {String} args.calendarID 日程ID
     * @param {Boolean} args.isAllCalendar 是否整个日程
     * @param {Int32} args.dayDelta 日偏移量
     * @param {Int32} args.minuteDelta 分钟偏移量
     * @param {Boolean} args.isAll 全天事件
     * @param {Boolean} args.reType 是否重新邀请
     * @param {Boolean} args.isResize 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    editCalendarTime: function(args, options) {
        return api.fetchApi(ctrlName, 'EditCalendarTime', args, options);
    },
    
    /**
     * 添加日程成员
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 日程ID
     * @param {String} args.memberIDs 已注册日程成员accountID,英文逗号拼接
     * @param {Dictionary<String, String>} args.specialAccounts 未注册用户，{"key":"value","key1":"value1"}
     * @param {Boolean} [args.isAllCalendar=True] 
     * @param {?DateTime} [args.recurTime=null] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    addMembers: function(args, options) {
        return api.fetchApi(ctrlName, 'AddMembers', args, options);
    },
    
    /**
     * 重新邀请（未定）
     * @param {Object} args 请求参数
     * @param {String} args.accountID 邀请accountID
     * @param {String} args.calendarID 日程ID
     * @param {?DateTime} [args.recurTime=null] 复发时间
     * @param {Boolean} [args.isAllCalendar=True] 是否整个日程
     * @param {String} [args.memberFlag=null] 无accountID状态下的phone或者email
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    reInvite: function(args, options) {
        return api.fetchApi(ctrlName, 'ReInvite', args, options);
    },
    
    /**
     * 编辑日程成员状态(同意加入或拒绝)
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 日程ID
     * @param {?DateTime} args.recurTime 复发时间
     * @param {MemberStatus} args.newStatus 状态
     * @param {String} args.remark 描述
     * @param {String} [args.catID=1] 日程分类ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    changeMember: function(args, options) {
        return api.fetchApi(ctrlName, 'ChangeMember', args, options);
    },
    
    /**
     * 移除日程成员
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 日程ID
     * @param {String} args.accountID 被移除成员accountID
     * @param {?DateTime} args.recurTime 复发日程
     * @param {Boolean} args.isAllCalendar 是否整个日程
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    removeMember: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveMember', args, options);
    },
    
    /**
     * 旧用户，无accountID成员移除
     * @param {Object} args 请求参数
     * @param {String} args.calendarID 
     * @param {String} args.memberFlag 
     * @param {?DateTime} [args.recurTime=null] 
     * @param {Boolean} [args.isAllCalendar=False] 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    removeMemberWithoutAccountID: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveMemberWithoutAccountID', args, options);
    },
    
    /**
     * 添加日程分类
     * @param {Object} args 请求参数
     * @param {String} args.catName 日程分类名称
     * @param {CategroyColor} args.color 颜色
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    appendUserCalCategory: function(args, options) {
        return api.fetchApi(ctrlName, 'AppendUserCalCategory', args, options);
    },
    
    /**
     * 删除日程分类
     * @param {Object} args 请求参数
     * @param {String} args.catID 日程分类ID
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    deleteUserCalCategory: function(args, options) {
        return api.fetchApi(ctrlName, 'DeleteUserCalCategory', args, options);
    },
    
    /**
     * 修改日程分类
     * @param {Object} args 请求参数
     * @param {String} args.newCalCategory json
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    updateUserCalCategoryInfo: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateUserCalCategoryInfo', args, options);
    },
    
    /**
     * 修改日程分类顺序
     * @param {Object} args 请求参数
     * @param {String} args.cateIDs 日程分类ID，英文逗号拼接
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    updateUserCalCategoriesIndex: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateUserCalCategoriesIndex', args, options);
    },
    
    /**
     * 查找用户所有分类
     * @param {Object} args 请求参数
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<RetrunResult, ErrorModel>} 
     */
    getUserAllCalCategories: function(args, options) {
        return api.fetchApi(ctrlName, 'GetUserAllCalCategories', args, options);
    }
};
module.exports = calendar;
