/**
 * 
 * @typedef {BaseModel} AccountAuthModel
 * @property {ActionResult} state 
 * @property {String} projectId 企业组织ID
 * @property {String} companyName 组织网络名
 * @property {?Int32} status 受邀状态
 * @property {?Int32} authId ID
 * @property {String} token 
 * @property {?Int32} count 未处理的邀请个数
 * @property {String} inviterAccountId 邀请人的账户ID
 */
/**
 * 
 * @typedef {Object} AccountCostLog
 * @property {String} title 
 * @property {?Int32} costMark 
 * @property {?Int32} leftMark 
 * @property {?DateTime} createTime 
 */
/**
 * 
 * @typedef {Object} AccountDetailModel
 * @property {String} autoId 用户工作经历与教育经历表ID
 * @property {String} name 雇主/学校名称
 * @property {String} title 职位/学位学历
 * @property {String} description 工作内容/核心课程
 * @property {String} startDate 开始年月份
 * @property {String} endDate 结束年月份
 */
/**
 * 
 * @typedef {ListModel} AccountDetailListModel
 * @property {AccountDetailModel[]} list 当前页列表
 * @property {?Int32} pageIndex 当前页码
 * @property {?Int32} allCount 总条目数
 * @property {?ActionResult} state 状态
 * @property {?Int32} score 
 */
/**
 * 
 * @typedef {Object} AccountFriendModel
 * @property {String} accountIdA 发起加好友的人
 * @property {String} accountIdB 被加好友的人
 * @property {?Int32} status 当前的状态
 * @property {String} message 备注信息
 * @property {AccountFullInfo} createAccount 发起加好友的人
 * @property {?DateTime} createTime 发起的时间
 */
/**
 * 等级
 * @typedef {Object} AccountGradeModel
 * @property {?Int32} scoreValue 等级积分
 * @property {String} scoreName 等级名称
 */
/**
 * 
 * @typedef {BaseModel} AccountInfoModel
 * @property {ActionResult} state 
 * @property {String} accountId 账户编号
 * @property {String} account 账号（手机或邮箱）
 * @property {String} mobilePhone 手机号
 * @property {String} email 邮箱
 * @property {String} profession 职业
 * @property {String} avatar 原始头像
 * @property {String} avatarSmall 小头像
 * @property {String} avatarMiddle 中头像
 * @property {String} avatarBig 大头像
 * @property {String} fullname 真实姓名
 * @property {String} companyName 公司名称
 * @property {String} enFullname 拼音姓名
 * @property {?Gender} gender 性别
 * @property {?DateTime} birthdate 出身日期
 * @property {String} imQQ QQ账号
 * @property {String} snsSina 新浪微博账号
 * @property {String} snsQQ 腾讯微博账号
 * @property {String} snsLinkedin Linkedin账号
 * @property {String} weiXin 微信号
 * @property {String} firstCode 姓名首字母
 * @property {AccountStatus} accountStatus 账户的状态
 * @property {?Int32} mark 积分
 * @property {String} grade 等级
 * @property {AccountGradeModel} currentGrade 当前等级
 * @property {AccountGradeModel} nextGrade 下一等级
 * @property {?Int32} lastMark 剩余积分
 * @property {?Int32} numLogin 登录次数
 * @property {?Int32} loginDays 使用明道的天数
 * @property {?Int32} numView 浏览次数
 * @property {?Int32} numPost Post提交数量
 * @property {?Int32} numComment 回复数量
 * @property {?Boolean} isFriend 
 * @property {String} appId 用户注册来源
 * @property {String} loginIP 上次登录的IP
 * @property {?DateTime} lastLoginTime 最后一次登录时间
 * @property {?Int32} addEduScore 添加学校履历的积分
 * @property {?Int32} addJobScore 添加工作履历的积分
 * @property {?Boolean} isHavePrj 该是否在组织中
 * @property {UserModel} user 在某个网络中的用户信息
 * @property {AccountDetailModel[]} jobList 学校履历
 * @property {AccountDetailModel[]} eduList 工作履历
 * @property {AccountMedalModel[]} accountMedal 我的徽章
 * @property {?DateTime} createTime 创建时间
 * @property {ProjectModel[]} projects 网络列表
 * @property {?AccountType} accountType 账户类型
 * @property {?Int32} expireDays 最后授权剩下的天数
 * @property {?DateTime} expireDate 到期日期
 * @property {BindDataModel} weiXinBind 微信绑定
 * @property {BindDataModel} qQBind qq绑定
 * @property {UserModel[]} userCards 
 * @property {?Boolean} isContact 是否是联系人
 * @property {String} address 通讯地址
 * @property {String} moblieName 手机通讯录中的姓名
 */
/**
 * 
 * @typedef {Object} AccountLicenseModel
 * @property {String} startDate 授权开始时间
 * @property {String} endDate 授权结束时间
 * @property {String} companyName 授权组织
 */
/**
 * 
 * @typedef {ListModel} AccountListModel
 * @property {AccountMedalModel[]} list 当前页列表
 * @property {?Int32} pageIndex 当前页码
 * @property {?Int32} allCount 总条目数
 * @property {?ActionResult} state 状态
 * @property {AccountInfoModel} accountInfo 
 * @property {AccountMedalModel[]} accountMedal 我的徽章
 * @property {Int64} dataPlan 每月用户流量（单位M）
 * @property {Int64} storageSpace 账户总存储空间（单位G）
 * @property {Int64} dataUsage 已使用的用户流量（单位M）
 * @property {Int64} usedStorageSpace 已使用的账户总存储空间（单位G）
 * @property {Int32} reStartDay 
 */
/**
 * 
 * @typedef {BaseModel} AccountMedalModel
 * @property {ActionResult} state 
 * @property {String} grantId 添加勋章的编号
 * @property {String} medalId 勋章编号
 * @property {String} medalName 勋章名称
 * @property {String} largePath 勋章大图片路径
 * @property {String} middlePath 勋章中图片路径
 * @property {String} smallPath 勋章小图片路径
 * @property {String} description 描述
 * @property {String} remark 备注
 * @property {?Int32} medalType 勋章类型
 * @property {?Int32} count 徽章数量
 */
/**
 * 
 * @typedef {BaseModel} AccountModel
 * @property {ActionResult} state 
 * @property {String} id 
 * @property {String} name 
 * @property {String[]} ids 
 */
/**
 * 
 * @typedef {Object} AccountPointModel
 * @property {String} name 添加积分项的名称
 * @property {?Int32} value 分值
 * @property {?Int32} dayMaxValue 每日封顶
 * @property {?Int32} maxValue 封顶
 * @property {String} description 积分描述
 */
/**
 * 
 * @typedef {Object} AccountScoreModel
 * @property {String} name 级别名
 * @property {?Int32} value 级别值
 * @property {String} autoId 级别变号
 */
/**
 * 
 * @typedef {BaseModel} AccountSettingModel
 * @property {ActionResult} state 
 * @property {String} accountId 账户编号
 * @property {Boolean} isEmailSystemMsg 系统通知设置项
 * @property {Boolean} isEmailApps 第三方通知设置项
 * @property {?Boolean} openDeskNotice 开启桌面通知设置项
 * @property {?Boolean} openWeixinLogin 开启微信登陆提醒通知设置项
 * @property {?Boolean} isHasWeixin 是否已经绑定微信
 * @property {?Boolean} openSettingPanel 群消息开启面板通知设置项
 * @property {?JoinFriendType} joinFriendMode 隐私通知设置项
 * @property {?LangType} lang 语言通知设置项
 * @property {?Boolean} isHasEmail 该账户是否已绑定Email
 * @property {?Boolean} isHasPhone 该账户是否已绑定手机号
 * @property {?Boolean} isPrivateMobile 手机号是否大家可见，false：大家都可见， true：仅自己可见
 * @property {?Boolean} isPrivateEmail //邮箱是否大家可见，false： 大家都可见，true：仅自己可见
 * @property {BindDataModel} weiXinBind 微信绑定
 */
/**
 * 
 * @typedef {BaseModel} AccountWeekMedalModel
 * @property {ActionResult} state 
 * @property {?Int32} count 
 */
/**
 * 
 * @typedef {Object} BindDataModel
 * @property {String} nickName 
 * @property {String} state 
 * @property {Boolean} isBind 
 */
/**
 * 
 * @typedef {Object} KeywordResult
 * @property {ProjectModel} project 
 * @property {ListModel<GroupModel>} groups 
 * @property {ListModel<AccountInfoModel>} accounts 
 */
/**
 * 
 * @typedef {AccountInfoModel} OftenAccountResult
 * @property {ActionResult} state 
 * @property {String} accountId 账户编号
 * @property {String} account 账号（手机或邮箱）
 * @property {String} mobilePhone 手机号
 * @property {String} email 邮箱
 * @property {String} profession 职业
 * @property {String} avatar 原始头像
 * @property {String} avatarSmall 小头像
 * @property {String} avatarMiddle 中头像
 * @property {String} avatarBig 大头像
 * @property {String} fullname 真实姓名
 * @property {String} companyName 公司名称
 * @property {String} enFullname 拼音姓名
 * @property {?Gender} gender 性别
 * @property {?DateTime} birthdate 出身日期
 * @property {String} imQQ QQ账号
 * @property {String} snsSina 新浪微博账号
 * @property {String} snsQQ 腾讯微博账号
 * @property {String} snsLinkedin Linkedin账号
 * @property {String} weiXin 微信号
 * @property {String} firstCode 姓名首字母
 * @property {AccountStatus} accountStatus 账户的状态
 * @property {?Int32} mark 积分
 * @property {String} grade 等级
 * @property {AccountGradeModel} currentGrade 当前等级
 * @property {AccountGradeModel} nextGrade 下一等级
 * @property {?Int32} lastMark 剩余积分
 * @property {?Int32} numLogin 登录次数
 * @property {?Int32} loginDays 使用明道的天数
 * @property {?Int32} numView 浏览次数
 * @property {?Int32} numPost Post提交数量
 * @property {?Int32} numComment 回复数量
 * @property {?Boolean} isFriend 
 * @property {String} appId 用户注册来源
 * @property {String} loginIP 上次登录的IP
 * @property {?DateTime} lastLoginTime 最后一次登录时间
 * @property {?Int32} addEduScore 添加学校履历的积分
 * @property {?Int32} addJobScore 添加工作履历的积分
 * @property {?Boolean} isHavePrj 该是否在组织中
 * @property {UserModel} user 在某个网络中的用户信息
 * @property {AccountDetailModel[]} jobList 学校履历
 * @property {AccountDetailModel[]} eduList 工作履历
 * @property {AccountMedalModel[]} accountMedal 我的徽章
 * @property {?DateTime} createTime 创建时间
 * @property {ProjectModel[]} projects 网络列表
 * @property {?AccountType} accountType 账户类型
 * @property {?Int32} expireDays 最后授权剩下的天数
 * @property {?DateTime} expireDate 到期日期
 * @property {BindDataModel} weiXinBind 微信绑定
 * @property {BindDataModel} qQBind qq绑定
 * @property {UserModel[]} userCards 
 * @property {?Boolean} isContact 是否是联系人
 * @property {String} address 通讯地址
 * @property {String} moblieName 手机通讯录中的姓名
 * @property {ProjectModel} project 
 */
/**
 * 
 * @typedef {GroupModel} OftenGroupResult
 * @property {String} groupId 群组ID
 * @property {String} name 群组名称
 * @property {String} about 群公告
 * @property {String} avatar 群组头像
 * @property {String} projectId 所属网络ID
 * @property {?Boolean} isVerified 是否官方群组
 * @property {?Boolean} isPushNotice push提醒
 * @property {?Boolean} isHidden 是否隐藏提醒
 * @property {?Boolean} isPost 是否是动态群
 * @property {String} pushNotice 是否推送通知
 * @property {?GroupStatus} status 群组状态
 * @property {?Int32} groupMemberCount 群组有效成员数
 * @property {?Int32} postCount 动态数
 * @property {AccountInfoModel} createAccount 群组创建者
 * @property {DateTime} createTime 创建时间
 * @property {?Boolean} isMember 是否在当前群组中
 * @property {?Boolean} isApply 是否已经申请加入群组中
 * @property {?Boolean} isAdmin 是管理员
 * @property {?Boolean} isOpen 群组状态
 * @property {?Boolean} isApproval 是否需要审批
 * @property {String} qrLink 二维码图片地址
 * @property {Int32} matchedMemberCount 匹配群组成员总数
 * @property {?Boolean} isProjectAdmin 
 * @property {ProjectModel} project 
 * @property {String} mapDepartmentId 
 * @property {String} mapDepartmentName 
 * @property {GroupUserModel[]} groupUsers 
 * @property {GroupUserModel[]} adminUsers 
 */
/**
 * 
 * @typedef {Object} AnnouncementModel
 * @property {String} projectBalance 余额
 * @property {Int32} projectEffectUserCount 网络有效用户
 * @property {Int32} projectAdminUserCount 网络管理员
 * @property {Boolean} isSendMobileMessage 是否可以发送短信
 */
/**
 * 
 * @typedef {Object} AppBillDetailModel
 * @property {Int32} currStatus 账单状态
 * @property {String} currStatusDes 账单状态描述
 * @property {Int32} currDebitType 
 * @property {Decimal} currBillingAmount 金额
 * @property {Decimal} currBalance 当前余额
 * @property {String} appId 
 * @property {Boolean} isAppAuth 是否有app权限
 * @property {String} billingId 
 * @property {String} billingTitle 账单名称
 * @property {String} billingExpireDate 账单支付期限
 */
/**
 * 账单list
 * @typedef {Object} AppBillListModel
 * @property {String} projectBalance 余额
 * @property {Boolean} isAppAuth 是否有app权限
 */
/**
 * 添加顾问
 * @typedef {Object} ExpansionModel
 * @property {String} hidUserLimitNumber 剩余人数
 * @property {String} projectBalance 余额
 * @property {String} counsellorName 顾问名称
 */
/**
 * 网络到期信息
 * @typedef {Object} ProjectExpireDaysModel
 * @property {Boolean} isTrial 是否试用
 * @property {Int32} expireDays 到期天数
 */
/**
 * 动态、任务等带的附件实体
 * @typedef {Object} Attachment
 * @property {AttachmentType} attachmentType 附件类型
 * @property {FromType} fromType 来源类型，动态还是任务还是其他什么的
 * @property {String} fileId 文件 Id，代表一个版本
 * @property {String} docVersionId 附件版本 Id，代表一个附件，可能有多个版本
 * @property {String} sourceId 如果来自动态，则为动态 Id，以此类推
 * @property {String} commentId 如果来自动态回复，则为动态回复 Id，以此类推
 * @property {String} originalFilename 原始文件名，一般不包括扩展名
 * @property {String} ext 扩展名
 * @property {Int32} filesize 文件大小（byte）
 * @property {String} appId 来源应用 Id
 * @property {AccountFullInfo} createAccount 创建者
 * @property {?DateTime} createTime 创建时间
 * @property {?DateTime} updateTime 更新时间
 * @property {?Boolean} allowDown 是否允许下载
 * @property {String} fileRealPath 加密后的实际地址，用于下载
 * @property {String} filename 实际文件名，用于图片的呈现（原图）
 * @property {String} filepath 实际文件路径，用于图片的呈现
 * @property {String} shareUrl 分享链接
 * @property {String} refId 从知识引用的话为知识 Node Id
 * @property {FileRefType} refType 文件引用类型，目前只有正常和知识
 */
/**
 * 
 * @typedef {Object} CalendarAccountModel
 * @property {String} accountID 
 * @property {String} avatar 
 * @property {String} fullName 
 * @property {?Boolean} isSubordinate 是否下属 部分地方用到 所以可以为空 避免其他接口获得参数混淆
 */
/**
 * 
 * @typedef {Object} CalendarBusyModel
 * @property {String} calendarID 
 * @property {Boolean} allDay 
 * @property {String} startTime 
 * @property {String} endTime 
 * @property {Boolean} canLook 
 * @property {String} calendarName 
 */
/**
 * 
 * @typedef {Object} CalendarDetailModel
 * @property {String} id 
 * @property {String} eventID 
 * @property {Boolean} locked 
 * @property {Boolean} isChildCalendar 
 * @property {Boolean} editable 
 * @property {String} catID 
 * @property {String} catName 
 * @property {Int32} remindTime 
 * @property {RemindType} remindType 
 * @property {Boolean} isContain 
 * @property {CategroyColor} color 
 * @property {String} title 
 * @property {String} description 
 * @property {String} address 
 * @property {String} start 
 * @property {String} end 
 * @property {String} oldStartTime 
 * @property {String} oldEndTime 
 * @property {Boolean} allDay 
 * @property {Boolean} isRecur 
 * @property {String} recurTime 
 * @property {Int32} frequency 
 * @property {Int32} interval 
 * @property {Int32} recurCount 
 * @property {String} untilDate 
 * @property {String} recurType 
 * @property {String} weekDay 
 * @property {String} createUserName 
 * @property {String} createAccountID 
 * @property {String} createUserHead 
 * @property {String} createUser 
 * @property {String} createEmail 
 * @property {String} createMobile 
 * @property {MemberViewModel[]} members 
 * @property {Object[]} attachments 
 * @property {Boolean} canLook 
 * @property {Boolean} isPrivate 
 */
/**
 * 
 * @typedef {Object} CalendarModel
 * @property {String} token 
 * @property {String} calendarName 
 * @property {String} calendarID 
 * @property {String} description 
 * @property {String} address 
 * @property {Int32} successCount 
 */
/**
 * 
 * @typedef {Object} Calendar4OtherModel
 * @property {String} id 
 * @property {String} eventID 
 * @property {Boolean} isRecur 
 * @property {Boolean} editable 
 * @property {String} title 
 * @property {String} description 
 * @property {String} address 
 * @property {String} start 
 * @property {String} end 
 * @property {Boolean} allDay 
 * @property {String} createUserAccountID 
 * @property {String} head 
 * @property {Boolean} isPrivate 
 * @property {PGDeserialize[]} pGList 
 * @property {Boolean} canLook 
 */
/**
 * 
 * @typedef {Object} CalendarViewModel
 * @property {String} id 
 * @property {String} eventID 
 * @property {Boolean} isRecur 
 * @property {Boolean} locked 
 * @property {Boolean} isChildCalendar 
 * @property {String} recurTime 
 * @property {Boolean} isContain 
 * @property {Boolean} editable 
 * @property {String} title 
 * @property {String} description 
 * @property {String} address 
 * @property {String} endTime 
 * @property {Boolean} allDay 
 * @property {Boolean} isAllDay 
 * @property {String} startTime 
 * @property {String} start 
 * @property {String} end 
 * @property {String} oldStartTime 
 * @property {String} oldEndTime 
 * @property {String} borderColor 
 * @property {Boolean} disableDragging 
 * @property {String} backgroundColor 
 * @property {String} textColor 
 * @property {String} createColor 
 * @property {String} createUser 
 * @property {String} createUserName 
 * @property {String} head 
 * @property {Boolean} isTask 
 * @property {String} color 
 * @property {Frequency} frequency 
 * @property {Int32} interval 
 * @property {MemberViewModel[]} members 
 * @property {Boolean} isPrivate 
 * @property {Int32} recurType 
 * @property {Int32} recurCount 
 * @property {String} weekDay 
 * @property {Boolean} canLook 
 * @property {String} untilDate 
 * @property {ThirdUserModel[]} thirdUserList 
 */

/**
 * 
 * @typedef {Object} MemberViewModel
 * @property {String} calendarID 
 * @property {Int32} type 
 * @property {String} accountID 
 * @property {String} email 
 * @property {Int32} status 
 * @property {String} remark 
 * @property {String} mobile 
 * @property {String} memberName 
 * @property {String} head 
 */
/**
 * 
 * @typedef {Object} CategoryDeserialize
 * @property {String} catName 
 * @property {CategroyColor} color 
 * @property {?Guid} catID 
 */
/**
 * 
 * @typedef {Object} CategoryModel
 * @property {String} catID 日程分类ID
 * @property {String} catName 日程分类名称
 * @property {Int32} displayOrder 自定义分类排序编号
 * @property {Int32} color 颜色枚举int值
 */
/**
 * 
 * @typedef {Object} PGDeserialize
 * @property {String} projectID 网络ID
 * @property {String[]} groupIDList 群组IDList
 */
/**
 * 
 * @typedef {Object} ThirdUserModel
 * @property {String} thirdID 对应微信OPENID
 * @property {String} nickName 用户昵称
 * @property {String} face 用户头像
 */
/**
 * 
 * @typedef {Object} CardAccountModel
 * @property {String} accountId 
 * @property {String} avatar 
 * @property {String} fullname 
 */
/**
 * 获取卡片详情列表实体
 * @typedef {BaseModel} CardEntityModel
 * @property {ActionResult} state 
 * @property {TaskCardModel[]} tasks 任务详情列表
 * @property {CalendarDetailModel[]} calendars 日程详情列表
 * @property {PostCardModel[]} posts 日程详情列表
 */
/**
 * 消息卡片实体
 * @typedef {BaseModel} MessageCardModel
 * @property {ActionResult} state 
 * @property {String} title 卡片标题
 * @property {Int32} type 卡片类型
 * @property {String} url 卡片URL
 * @property {String} text 卡片文本
 * @property {String} entityId 卡片实体ID
 * @property {CardAccountModel} createAccount 卡片创建者
 * @property {TaskCardModel} task 任务卡片信息
 * @property {CalendarDetailModel} calendar 日程卡片信息
 * @property {PostCardModel} post 动态卡片信息
 */
/**
 * 
 * @typedef {BaseModel} MessageFileModel
 * @property {ActionResult} state 
 * @property {String} url URL
 * @property {String} fileId 文件ID
 * @property {String} key 七牛资源地址
 * @property {Int32} type 文件类型
 * @property {String} hash 文件Hash
 * @property {Int32} size 文件大小
 * @property {String} name 文件名称
 * @property {String} time 文件上传时间
 * @property {CardAccountModel} createAccount 文件上传者
 */
/**
 * 动态消息卡片实体
 * @typedef {Object} PostCardModel
 * @property {String} postID 动态ID
 * @property {String} voteID 投票ID
 * @property {String} groupNameStr 分享范围
 * @property {String} noLinkMessage 投票内容
 * @property {Int32} num_user 投票参与人数
 * @property {String} deadline 投票到期日期
 * @property {Int32} commentCount 动态回复数
 */
/**
 * 
 * @typedef {BaseModel} PreViewLinkModel
 * @property {ActionResult} state 
 * @property {String} link 链接
 */
/**
 * 
 * @typedef {Object} ShareCalendarModel
 * @property {String} id 
 * @property {String} calendarName 
 * @property {String} description 
 * @property {String} address 
 * @property {String} start 
 * @property {String} end 
 * @property {String} oldStartTime 
 * @property {String} oldEndTime 
 * @property {Boolean} allDay 
 * @property {Boolean} isRecur 
 * @property {String} recurTime 
 * @property {Int32} frequency 
 * @property {Int32} interval 
 * @property {Int32} recurCount 
 * @property {String} untilDate 
 * @property {String} recurType 
 * @property {String} weekDay 
 * @property {Boolean} isChildCalendar 
 * @property {String} createUserName 
 * @property {String} createAccountID 
 * @property {String} createUserHead 
 * @property {String} createUser 
 * @property {MemberViewModel[]} members 
 * @property {AttachmentModel[]} attachments 
 * @property {PGDeserialize[]} pGList 
 * @property {Boolean} editable 
 */
/**
 * 任务卡片实体
 * @typedef {BaseModel} TaskCardModel
 * @property {ActionResult} state 
 * @property {String} taskId 任务ID
 * @property {String} name 任务名称
 * @property {Int32} subCount 任务子任务数
 * @property {Int32} completedCount 任务已完成子任务数
 * @property {String} chargeAccountId 任务负责人ID
 * @property {String} chargeFullName 任务负责人名称
 */
/**
 * 
 * @typedef {Object} AttachmentModel
 * @property {Int32} attachmentType 
 * @property {Int32} fromType 
 * @property {String} fileID 
 * @property {String} sourceID 
 * @property {String} commentID 
 * @property {String} docVersionID 
 * @property {String} createUserID 
 * @property {String} createUserName 
 * @property {String} createUserAvatar 
 * @property {String} originalFilename 
 * @property {String} ext 
 * @property {Int32} filesize 
 * @property {String} appID 
 * @property {String} createTime 
 * @property {String} updateTime 
 * @property {String} thumbnailName 
 * @property {String} thumbnailPath 
 * @property {String} middleName 
 * @property {String} middlePath 
 * @property {String} largeThumbnailName 
 * @property {String} largeThumbnailPath 
 * @property {String} filename 
 * @property {String} filepath 
 * @property {String} shareUrl 
 * @property {String} refID 
 * @property {FileRefType} refType 
 * @property {Boolean} allowDown 
 * @property {String} fileRealPath 
 */
/**
 * 
 * @typedef {Object} GroupAvatarModel
 * @property {String} basePath 
 * @property {String[]} names 
 */
/**
 * 群组成员
 * @typedef {Object} GroupUserModel
 * @property {String} accountId 账号ID
 * @property {String} avatar 头像
 * @property {String} email 邮箱
 * @property {?Boolean} isCreateUser 是否是创建者
 * @property {?Int32} groupUserRole 群组成员角色
 * @property {?Int32} status 群组成员状态
 * @property {String} fullname 姓名
 * @property {String} companyName 公司名称
 * @property {String} department 部门
 * @property {String} job 职位
 * @property {?Boolean} isProjectUser 是否是公司成员
 */
/**
 * 群组选择的附加信息
 * @typedef {Object} SelectGroupExtraModel
 * @property {String} projectId 网络 Id
 * @property {?LicenseType} licenseType 网络授权类型
 * @property {?Boolean} isRadio 是否是全员广播
 * @property {?Boolean} isProject 是否是网络
 * @property {?Boolean} isMe 是否是我自己
 */
/**
 * 
 * @typedef {Object} InviteGroupModel
 * @property {SendMessageResult} sendMessageResult 
 * @property {AccountInfoModel[]} accountInfos 邀请成功的用户
 * @property {AccountInfoModel[]} existAccountInfos 已存在的用户
 */
/**
 * 
 * @typedef {Object} ImportUserModel
 * @property {String} account 
 * @property {?Int32} status 
 * @property {String} fullname 
 * @property {String} department 
 * @property {String} job 
 */
/**
 * 
 * @typedef {Object} ImportUserResultModel
 * @property {ImportUserActionResult} actionResult 
 * @property {?Int32} totalCount 导入总人数
 * @property {?Int32} successCount 成功人数
 * @property {ImportUserModel[]} failUsers 失败
 * @property {ImportUserModel[]} existsUsers 已有人数
 */
/**
 * 
 * @typedef {Object} InviteItemModel
 * @property {String} sourceId 某个资源
 * @property {AccountInfoModel[]} accountInfos 邀请成功的用户
 * @property {AccountInfoModel[]} existAccountInfos 已存在的用户
 * @property {AccountInfoModel[]} failedAccountInfos 邀请失败的用户
 * @property {AccountInfoModel[]} limitAccountInfos 邀请失败的用户
 */
/**
 * 邀请结果
 * @typedef {Object} InviteResultModel
 * @property {SendMessageResult} sendMessageResult 邀请状态
 * @property {InviteItemModel[]} results 邀请结果详细信息
 */
/**
 * 
 * @typedef {Object} LinkAuthModel
 * @property {Int32} autoId 
 * @property {String} sourceId 
 * @property {InviteFromType} inviteFromType 
 * @property {String} token 
 * @property {String} inviteUrl 
 * @property {String} projectId 
 * @property {String} createAccountId 
 * @property {AccountFullInfo} createAccount 
 * @property {LinkFromType} linkFromType 
 * @property {DateTime} deadTime 
 * @property {DateTime} createTime 
 * @property {DateTime} updateTime 
 */
/**
 * 生成短链接和token
 * @typedef {Object} LinkUrlModel
 * @property {String} linkUrl 短链接
 * @property {String} token linkauth token
 */
/**
 * 注册使用的加入网络卡片
 * @typedef {Object} UserCardModel
 * @property {String} fullname 
 * @property {String} companyName 
 * @property {String} department 
 * @property {String} job 
 * @property {String} workSite 
 * @property {String} jobNumber 
 */
/**
 * 添加成员返回值
 * @typedef {Object} KcAddRootMemberModel
 * @property {AccountInfoModel[]} limitAccountInfos 是否超出邀请限制  true 超出限制 没有添加
 * @property {AccountInfoModel[]} successAccountInfos 成功添加的用户信息
 * @property {KcRootMemberModel[]} successMembers 成功添加的rootMember 实体
 * @property {AccountInfoModel[]} failedAccountInfos 添加失败的成员ID
 * @property {AccountInfoModel[]} existAccountInfos 已存在的成员ID
 */
/**
 * 被邀请成员实体
 * @typedef {Object} KcInviteMemberModel
 * @property {String} account 被邀请用户的Account
 * @property {String} accountId 用户的AccountId
 * @property {String} fullName 用户姓名
 */
/**
 * 知识中心节点日志列表
 * @typedef {Object} KcRootLog
 * @property {Int32} logCount 日志条数
 * @property {KcRootLogItem[]} logContent 日志列表
 */

/**
 * 知识中心节点日志单条记录
 * @typedef {Object} KcRootLogItem
 * @property {String} logId 日志 Id
 * @property {RootLogType} type 日志类型
 * @property {AccountInfoModel} handleUser 操作者
 * @property {JObject} content 日志内容
 * @property {DateTime} time 创建时间
 */
/**
 * 知识中心节点日志列表
 * @typedef {Object} KcNodeLog
 * @property {Int32} logCount 日志条数
 * @property {KcNodeLogItem[]} logContent 日志列表
 */

/**
 * 知识中心节点日志单条记录
 * @typedef {Object} KcNodeLogItem
 * @property {String} logId 
 * @property {NodeActionType} type 
 * @property {AccountInfoModel} handleUser 
 * @property {JObject} content 
 * @property {DateTime} time 
 */
/**
 * 知识中心查询结果文件夹总数和文件总大小
 * @typedef {Object} KcTotalFolderCountAndTotalFileSizeModel
 * @property {?Int64} totalFolderCount 查询结果的文件夹节点总数
 * @property {?Int64} totalFileSize 查询结果的节点总大小
 */
/**
 * 知识中心文件节点
 * @typedef {Object} KcNodeModel
 * @property {String} id 节点 Id
 * @property {String} hash 七牛返回的文件哈希值
 * @property {String} name 不包含扩展名的文件名
 * @property {String} ext 扩展名
 * @property {NodeType} type 节点类型（文件/文件夹/etc.）
 * @property {NodeStatus} status 节点状态（正常/回收站/删除）
 * @property {String} parentId 父节点 Id，我的文件第一层节点此值为 null，共享文件夹第一层节点此值为 rootId
 * @property {String} rootId 根节点 Id，我的文件中的节点此值为 null
 * @property {String} position 逻辑存储路径
 * @property {Boolean} isStared 当前用户是否对节点标星
 * @property {AccountInfoModel} creator 原始创建者 // TODO: 改名
 * @property {AccountInfoModel} updater 最后更新者
 * @property {AccountInfoModel} owner 当前拥有者
 * @property {DateTime} createTime 创建时间
 * @property {DateTime} updateTime 最后更新时间
 * @property {Boolean} isDownloadable 文件属性-是否可下载，不考虑其他有权限的情况
 * @property {Boolean} isEditable 文件属性-是否可编辑，不考虑其他有权限的情况
 * @property {Boolean} isAdmin 是否是该节点所属共享文件夹的管理员
 * @property {Boolean} canDownload 能否下载
 * @property {Boolean} canEdit 能否编辑
 * @property {Boolean} canChangeDownloadable 能否修改可下载属性
 * @property {Boolean} canChangeEditable 能否修改可编辑属性
 * @property {Boolean} canChangeSharable 能否修改分享范围
 * @property {?Int64} size 节点大小，文件夹为 null
 * @property {String} shareUrl 分享链接
 * @property {String} viewUrl 查看链接，例如图片节点为图片地址，Office 文档为 OWA 地址，etc.
 * @property {String} previewUrl 缩略图链接
 * @property {String} downloadUrl 下载链接
 * @property {ViewType} viewType 查看方法的类型
 * @property {NodeVisibleType} visibleType 分享范围
 * @property {Int32} viewCount 查看次数
 * @property {Int32} downloadCount 下载次数
 * @property {KcNodeSourceModel} source 来源
 * @property {String} fullName 设置完整文件名，包括扩展名
 * @property {String} originLinkUrl 链接原Url
 * @property {String} shortLinkUrl 链接（短链接）
 */
/**
 * 知识中心节点来源
 * @typedef {Object} KcNodeSourceModel
 * @property {NodeSourceType} type 来源类型
 * @property {String} name 来源名称
 * @property {String} link 来源链接
 */
/**
 * 知识中心节点列表及节点总数
 * @typedef {Object} KcNodeListWithTotalCountModel
 * @property {KcNodeModel[]} list 分页返回节点列表
 * @property {?Int64} totalCount 查询结果的节点总数
 */
/**
 * 更新节点结果字典，key 为操作结果（整型），value 为该结果的节点列表
 * @typedef {Dictionary} KcNodeUpdateResultModel
 * @property {IEqualityComparer<Int32>} comparer 
 * @property {Int32} count 
 * @property {KeyCollection} keys 
 * @property {ValueCollection} values 
 * @property {String[]} this[] 
 */
/**
 * 知识中心用户相关信息
 * @typedef {AccountInfoModel} KcRootMemberModel
 * @property {ActionResult} state 
 * @property {String} accountId 账户编号
 * @property {String} account 账号（手机或邮箱）
 * @property {String} mobilePhone 手机号
 * @property {String} email 邮箱
 * @property {String} profession 职业
 * @property {String} avatar 原始头像
 * @property {String} avatarSmall 小头像
 * @property {String} avatarMiddle 中头像
 * @property {String} avatarBig 大头像
 * @property {String} fullname 真实姓名
 * @property {String} companyName 公司名称
 * @property {String} enFullname 拼音姓名
 * @property {?Gender} gender 性别
 * @property {?DateTime} birthdate 出身日期
 * @property {String} imQQ QQ账号
 * @property {String} snsSina 新浪微博账号
 * @property {String} snsQQ 腾讯微博账号
 * @property {String} snsLinkedin Linkedin账号
 * @property {String} weiXin 微信号
 * @property {String} firstCode 姓名首字母
 * @property {AccountStatus} accountStatus 账户的状态
 * @property {?Int32} mark 积分
 * @property {String} grade 等级
 * @property {AccountGradeModel} currentGrade 当前等级
 * @property {AccountGradeModel} nextGrade 下一等级
 * @property {?Int32} lastMark 剩余积分
 * @property {?Int32} numLogin 登录次数
 * @property {?Int32} loginDays 使用明道的天数
 * @property {?Int32} numView 浏览次数
 * @property {?Int32} numPost Post提交数量
 * @property {?Int32} numComment 回复数量
 * @property {?Boolean} isFriend 
 * @property {String} appId 用户注册来源
 * @property {String} loginIP 上次登录的IP
 * @property {?DateTime} lastLoginTime 最后一次登录时间
 * @property {?Int32} addEduScore 添加学校履历的积分
 * @property {?Int32} addJobScore 添加工作履历的积分
 * @property {?Boolean} isHavePrj 该是否在组织中
 * @property {UserModel} user 在某个网络中的用户信息
 * @property {AccountDetailModel[]} jobList 学校履历
 * @property {AccountDetailModel[]} eduList 工作履历
 * @property {AccountMedalModel[]} accountMedal 我的徽章
 * @property {?DateTime} createTime 创建时间
 * @property {ProjectModel[]} projects 网络列表
 * @property {?AccountType} accountType 账户类型
 * @property {?Int32} expireDays 最后授权剩下的天数
 * @property {?DateTime} expireDate 到期日期
 * @property {BindDataModel} weiXinBind 微信绑定
 * @property {BindDataModel} qQBind qq绑定
 * @property {UserModel[]} userCards 
 * @property {?Boolean} isContact 是否是联系人
 * @property {String} address 通讯地址
 * @property {String} moblieName 手机通讯录中的姓名
 * @property {PermissionType} permission 用户在共享文件夹中的权限
 * @property {MemberStatus} memberStatus 用户在共享文件夹中的状态
 * @property {String} inviterAccountId 邀请者的AccountId
 * @property {String} inviterFullName 邀请者的名称
 */
/**
 * 知识中心共享文件夹
 * @typedef {Object} KcRootModel
 * @property {String} id 共享文件夹 Id
 * @property {String} name 共享文件夹名称
 * @property {ProjectModel} project 共享文件夹从属网络
 * @property {Boolean} isStared 当前用户是否标星此共享文件夹
 * @property {?DateTime} staredTime 当前用户标星时间，未标星则为 null
 * @property {KcRootMemberModel[]} members 当前共享文件夹的成员
 * @property {PermissionType} permission 当前成员在共享文件夹中的权限
 * @property {RootStatus} status 共享文件夹的状态（正常/回收站/删除），现在应该没有回收站状态
 */
/**
 * 知识中心使用情况
 * @typedef {Object} KcUsageModel
 * @property {?Int64} used 本期已用上传流量
 * @property {?Int64} total 本期总共可用上传流量
 * @property {DateTime} periodStart 本期流量计算起始时间
 */
/**
 * 键值对 model，用于 select、autocomplete 等组件
 * @typedef {BaseModel} KeyValueModel
 * @property {ActionResult} state 
 * @property {String} id 键值对的键
 * @property {String} value 键值对的值
 * @property {Object} extra 附加信息
 */

/**
 * 键值对 model，包括特定类型的附加信息，用于 select、autocomplete 等组件
 * @typedef {KeyValueModel} KeyValueModel
 * @property {ActionResult} state 
 * @property {String} id 键值对的键
 * @property {String} value 键值对的值
 * @property {TExtra} extra 附加信息
 */
/**
 * 所有返回列表的Model
 * @typedef {Object} ListModel
 * @property {T[]} list 当前页列表
 * @property {?Int32} pageIndex 当前页码
 * @property {?Int32} allCount 总条目数
 * @property {?ActionResult} state 状态
 */
/**
 * 
 * @typedef {LoginModel} BQQLoginModel
 * @property {AccountResult} accountResult 账号检测结果
 * @property {String} accountId 账号ID
 * @property {String} sessionId Session 标识符
 * @property {?Boolean} isLoginState 
 * @property {?Boolean} isBindMDAPP 企业QQ是否开启了明道应用
 * @property {String} bindMDProjectId 企业QQ绑定的明道网络Id
 * @property {String} companyName 
 * @property {?Boolean} isCompanyAdmin 是否是企业QQ管理员
 */
/**
 * 登录
 * @typedef {Object} LoginModel
 * @property {AccountResult} accountResult 账号检测结果
 * @property {String} accountId 账号ID
 * @property {String} sessionId Session 标识符
 * @property {?Boolean} isLoginState 
 */
/**
 * 
 * @typedef {Object} MessageResultModel
 * @property {MessageActionResult} actionResult 
 * @property {Int32} successCount 成功数量
 * @property {Int32} failCount 失败的数量
 * @property {String[]} noEmailAccountIds 
 * @property {String[]} noMobilePhoneAccountIds 
 */
/**
 * 订单
 * @typedef {Object} OrderModel
 * @property {String} orderId 订单号
 * @property {?Int32} orderType 订单类型
 * @property {?Decimal} totalPrice 订单总金额
 * @property {?Decimal} discountTotalPrice 折扣后总金额
 * @property {?Int32} totalUserCount 订单对应的用户数
 * @property {?Int32} years 几年包
 * @property {?Int32} payType 订单支付方式
 * @property {?DateTime} startDate 开始时间
 * @property {?DateTime} endDate 结束时间
 * @property {String} projectId 网络ID
 * @property {ProductModel[]} products 产品
 */
/**
 * 支付
 * @typedef {Object} PayResultModel
 * @property {UserPayValidateResult} validateResult 
 * @property {?Boolean} isSuccess 
 */
/**
 * 产品
 * @typedef {Object} ProductModel
 * @property {String} productId 产品Id
 * @property {?Decimal} price 产品价格
 * @property {?Decimal} discountPrice 打折产品价格
 * @property {?Int32} userCount 用户数
 * @property {?Int32} count 数量
 */
/**
 * 动态分享范围
 * @typedef {Object} PostShareScope
 * @property {ProjectModel[]} shareProjects 分享到所有同事的网络
 * @property {GroupModel[]} shareGroups 分享到的群组
 */
/**
 * 动态实体
 * @typedef {Object} Post
 * @property {String} postId 动态 Id
 * @property {Int64} autoId 递增自动编号，其实是时间戳
 * @property {PostType} postType 动态类型
 * @property {String} message 动态内容
 * @property {Attachment[]} attachments 动态附件列表
 * @property {ListModel<PostComment>} comments 动态回复列表
 * @property {GroupModel[]} groups 发布到的群组
 * @property {CategoryModel[]} categories 话题列表
 * @property {TagModel[]} tags 标签列表
 * @property {GroupModel[]} mentionedGroups 提到的群组
 * @property {AccountFullInfo[]} mentionedAccounts 提到的用户
 * @property {ProjectModel} project 所属网络
 * @property {AccountFullInfo} createAccount 创建者
 * @property {?DateTime} createTime 创建时间
 * @property {?DateTime} lastCommentCreateTime 最后回复时间
 * @property {?PostShowType} postShowType 显示类型，如是否仅在知识门户呈现
 * @property {Object} sourceApp 来源应用
 * @property {?Int32} viewCount 详情页被查看次数
 * @property {?Int32} likeCount 点赞人数
 * @property {?Boolean} isSecretary 是否明道小秘书
 * @property {?Boolean} isDelete 是否被删除
 * @property {PostLinkInfo} link 链接信息
 * @property {PostVoteInfo} vote 投票信息
 * @property {PostVideoInfo} video 音视频信息
 * @property {PostMedalInfo} medal 徽章
 * @property {Post} resharedPost 转发动态详情
 * @property {?Boolean} allowLike 是否可以点赞
 * @property {?Boolean} allowOperate 是否可以操作
 * @property {?Boolean} allowReshare 是否可以转发
 * @property {?Boolean} allowFeedTop 是否允许置顶
 * @property {?Boolean} isLike 是否已点赞
 * @property {?Boolean} isFeedTop 是否已置顶
 * @property {?Boolean} isStar 是否已标星
 */
/**
 * 动态回复
 * @typedef {Object} PostComment
 * @property {String} message 回复内容
 * @property {AccountFullInfo} createAccount 创建者
 * @property {?DateTime} createTime 创建时间
 * @property {AccountFullInfo} replyToAccount 回复给的用户
 * @property {String} postId 回复到的动态 Id
 * @property {Attachment[]} attachments 附件
 * @property {Object} sourceApp 来源
 * @property {?Boolean} isSecretary 是否小秘书
 * @property {?Boolean} isDelete 是否已删除
 * @property {?Boolean} allowOperate 是否允许操作
 */
/**
 * 链接动态详情
 * @typedef {Object} PostLinkInfo
 * @property {String} url 链接地址
 * @property {String} title 链接标题
 * @property {String} description 链接内容描述
 * @property {String} thumbnail 缩略图
 */
/**
 * 徽章信息
 * @typedef {Object} PostMedalInfo
 * @property {String} name 徽章名
 * @property {String} description 徽章描述
 * @property {String} image 徽章图片地址
 */
/**
 * 徽章信息
 * @typedef {Object} PostRemarkInfo
 */
/**
 * 动态分享范围，前端传来实体
 * @typedef {Object} PostShareScopeReq
 * @property {String[]} shareProjectIds 分享到所有同事的网络
 * @property {String[]} shareGroupIds 分享到的群组
 * @property {String} radioProjectId 全员广播的网络
 */
/**
 * 动态音视频信息
 * @typedef {Object} PostVideoInfo
 * @property {String} videoId 音视频 Id
 * @property {Int32} playCount 播放次数
 * @property {Int32} downCount 下载次数
 * @property {Boolean} allowDown 是否允许下载
 * @property {Boolean} allowShare 是否允许分享
 * @property {String} filename 原始文件名
 * @property {String} filesize 文件大小
 * @property {String} thumbnail 缩略图地址
 * @property {String} videoUrl 音视频地址
 * @property {String} outVideoUrl 分享嵌入链接
 * @property {String} outShareUrl 分享页面链接
 */
/**
 * 投票类动态中的投票信息
 * @typedef {Object} PostVoteInfo
 * @property {Boolean} isAnonymous 是否匿名投票
 * @property {Int32} availableNumber 投票可选个数
 * @property {?DateTime} deadLine 截止时间
 * @property {Boolean} allowViewResult 是否允许查看结果
 * @property {PostVoteOption[]} options 投票选项列表
 * @property {?Boolean} isVoted 是否已投票
 * @property {Int32} allAccountCount 投票人数
 */
/**
 * 动态投票选项
 * @typedef {Object} PostVoteOption
 * @property {Int32} index 投票序号
 * @property {String} name 选项名
 * @property {String} thumbnail 选项附件缩略图
 * @property {String} file 选项附件
 * @property {Int32} count 票数
 * @property {AccountFullInfo[]} members 投此项的成员
 * @property {?Boolean} isVoted 当前用户是否投给此项
 */
/**
 * 
 * @typedef {BaseModel} ApplyAdminModel
 * @property {ActionResult} state 
 * @property {String} notifyWay 
 */
/**
 * 
 * @typedef {Object} InviteDetailModel
 * @property {String} accountId 
 * @property {String} fullName 
 * @property {Boolean} isMember 
 */
/**
 * 
 * @typedef {Object} DepartmentModel
 * @property {String} departmentId 
 * @property {String} departmentName 
 * @property {?Int32} userCount 
 * @property {String} mappingGroupName 
 * @property {String} mappingGroupID 
 * @property {UserModel[]} users 
 */
/**
 * 
 * @typedef {Object} HistoryInviteModel
 * @property {Int32} allCount 
 * @property {InviteDetailModel[]} listDetail 
 */
/**
 * 
 * @typedef {Object} InviteExcitationModel
 * @property {Int32} invitedUserCount 已邀请数量
 * @property {DateTime} expireDate 到期日期
 * @property {Int32} leftDays 剩余天数
 * @property {InviteGiveRuleModel[]} rules 规则
 */
/**
 * 
 * @typedef {Object} InviteGiveRuleModel
 * @property {Int32} inviteCount 
 * @property {Int32} addDays 
 * @property {Int32} achieveDays 
 */
/**
 * 
 * @typedef {Object} LdapModel
 * @property {?Boolean} effective 
 * @property {?Int32} type 
 * @property {String} serverIP 
 * @property {?Int32} port 
 * @property {?Boolean} enableSSL 
 * @property {String} user 
 * @property {String} password 
 * @property {String} domainPath 
 * @property {String} searchFilter 
 * @property {String} emailAttr 
 * @property {String} fullnameAttr 
 * @property {String} departmentAttr 
 * @property {String} jobAttr 
 * @property {String} workphoneAttr 
 */
/**
 * 
 * @typedef {Object} LicenseSupportModel
 * @property {?Decimal} balance 余额
 * @property {?Int32} userLimitNumber 网络人数上限
 * @property {?Int32} effectiveUsersCount 当前有效人数
 * @property {?DateTime} endDate 到期时间
 * @property {?Int32} surplusDay 剩余到期天数
 * @property {?Boolean} isPaid 是否是付费模式
 */
/**
 * 
 * @typedef {Object} LogoffModel
 * @property {AccountInfoModel} createUser 
 * @property {?Int32} type 
 * @property {String} title 
 * @property {String} description 
 * @property {?DateTime} createTime 
 */
/**
 * 取消管理员操作
 * @typedef {Object} UpdateProjectAdminModel
 * @property {Boolean} isSuccess 是否成功，true：成功，false：失败
 * @property {Int32} errorCode err msg ，暂时只有一个错误信息，以后有其它再添加
    0:成功， 1： 操作失败（有可能是数据库操作失败，等未知错误），2：网络至少包含一个网络管理员，
 */
/**
 * 
 * @typedef {Object} ProjectCancelModel
 * @property {?LicenseType} licenseType 
 * @property {LogoffModel[]} logoffs 
 */
/**
 * 
 * @typedef {Object} ProjectFinanceModel
 * @property {String} projectId 
 * @property {String} address 
 * @property {String} recipientName 
 * @property {String} postcode 
 * @property {String} contactPhone 
 * @property {String} mobilePhone 
 * @property {String} fax 
 * @property {String} email 
 * @property {String} emailRecipientName 
 * @property {?InvoiceType} invoiceType 
 * @property {String} taxNumber 
 * @property {String} taxBank 
 * @property {String} taxBankNumber 
 * @property {String} taxRegAddress 
 * @property {String} taxRegContactPhone 
 * @property {?Boolean} isGeneralTaxpayer 
 */
/**
 * 
 * @typedef {Object} ProjectSettingModel
 * @property {String} logo 
 * @property {String} homeImage 
 * @property {String} customeHome 
 * @property {?Boolean} birthdayNoticeEnabled 
 * @property {String} baseAuthenticationDomain 
 * @property {String} authenticationDomain 
 * @property {?Int32} userLimitNumber 
 * @property {?Boolean} userAuditEnabled 
 * @property {String} subDomain 
 * @property {?Boolean} userFillCompanyEnabled 
 * @property {?Boolean} userFillWorkSiteEnabled 
 * @property {?Boolean} userFillJobNumberEnabled 
 * @property {?Boolean} allowProjectCodeJoin 
 * @property {?Boolean} allowProjectQrCodeJoin 
 */
/**
 * 二级域名首页信息
 * @typedef {Object} ProjectSubDomainModel
 * @property {?Boolean} isFree 
 * @property {String} projectId 
 * @property {String} companyName 
 * @property {String} baseDomain 
 * @property {String} homeImage 
 * @property {String} logo 
 * @property {?Boolean} openLDAP 
 * @property {UserModel[]} admins 
 */
/**
 * 
 * @typedef {BaseModel} QuitStatusModel
 * @property {ActionResult} state 
 * @property {QuitStatus} quitStatus 管理员删除时的状态
 */
/**
 * 
 * @typedef {Object} BaseModel
 * @property {ActionResult} state 
 */
/**
 * 错误信息，给前端用
 * @typedef {Object} ErrorModel
 * @property {Int32} errorCode 错误码。-1 为无法解析，0 为断网，1 为取消，三位数为 HTTP 错误码
 * @property {String} errorMessage 错误信息，后端返回或前端预设
 */
/**
 * 
 * @typedef {Object} GroupModel
 * @property {String} groupId 群组ID
 * @property {String} name 群组名称
 * @property {String} about 群公告
 * @property {String} avatar 群组头像
 * @property {String} projectId 所属网络ID
 * @property {?Boolean} isVerified 是否官方群组
 * @property {?Boolean} isPushNotice push提醒
 * @property {?Boolean} isHidden 是否隐藏提醒
 * @property {?Boolean} isPost 是否是动态群
 * @property {String} pushNotice 是否推送通知
 * @property {?GroupStatus} status 群组状态
 * @property {?Int32} groupMemberCount 群组有效成员数
 * @property {?Int32} postCount 动态数
 * @property {AccountInfoModel} createAccount 群组创建者
 * @property {DateTime} createTime 创建时间
 * @property {?Boolean} isMember 是否在当前群组中
 * @property {?Boolean} isApply 是否已经申请加入群组中
 * @property {?Boolean} isAdmin 是管理员
 * @property {?Boolean} isOpen 群组状态
 * @property {?Boolean} isApproval 是否需要审批
 * @property {String} qrLink 二维码图片地址
 * @property {Int32} matchedMemberCount 匹配群组成员总数
 * @property {?Boolean} isProjectAdmin 
 * @property {ProjectModel} project 
 * @property {String} mapDepartmentId 
 * @property {String} mapDepartmentName 
 * @property {GroupUserModel[]} groupUsers 
 * @property {GroupUserModel[]} adminUsers 
 */
/**
 * 
 * @typedef {BaseModel} GroupSettingModel
 * @property {ActionResult} state 
 * @property {GroupModel[]} groupList 
 */
/**
 * 
 * @typedef {BaseModel} ProjectStatusModel
 * @property {ActionResult} state 
 * @property {?Boolean} isTrial 是否体验过
 * @property {String} projectId 组织ID
 * @property {?Boolean} isUserFillWorkSiteEnabled 管理员是否设置工作点勾选项
 * @property {?Boolean} isUserFillCompanyEnabled 管理员是否设置公司名称勾选项
 * @property {?Boolean} isUserFillJobNumberEnabled 管理员是否设置工号勾选项
 * @property {UserStatus} projectUserStatus 网络成员状态
 */
/**
 * 
 * @typedef {Object} ProjectModel
 * @property {String} autoId 
 * @property {String} projectCode 组织网络号
 * @property {String} projectId 组织ID
 * @property {String} companyName 组织名称，只在发票抬头用，其他地方用 companyDisplayName
 * @property {String} companyNameEnglish 英文名
 * @property {String} companyDisplayName 呈现名称
 * @property {?Int32} geographyId 地区
 * @property {?Int32} industryId 行业
 * @property {LicenseType} licenseType 模式
 * @property {?Int32} userNum 计费人数
 * @property {?UserRole} role 权限
 * @property {?DateTime} lastDay 到期日期
 * @property {?Int32} expireDate 剩余时间
 * @property {?ProjectStatuTypes} prjStatus 网路状态
 * @property {GroupModel[]} groups 
 * @property {?Boolean} isCreateUser 
 * @property {?UserStatus} prjUserStatus 该账户在本网路中的用户状态
 * @property {?DateTime} prjUserUpdateTime 该账户在本网路中的加入时间
 * @property {?Boolean} isProjectAdmin 是否是网络管理员
 */
/**
 * 交易记录
 * @typedef {Object} TransactionRecordModel
 * @property {String} recordId 记录ID号
 * @property {String} orderId 订单号
 * @property {String} projectId 网络Id
 * @property {?DateTime} createTime 创建时间
 * @property {?DateTime} updateTime 修改时间
 * @property {OrderRecordType} recordType 消费记录类型
 * @property {?Decimal} price 金额
 * @property {OrderRecordStatus} status 订单状态
 * @property {String} remark 备注
 * @property {String} cancelRemark 取消订单备注
 * @property {InvoiceStatus} invoiceStatus 发票状态
 * @property {AccountInfoModel} createAccountInfo 创建者
 * @property {AccountInfoModel} payAccountInfo 更新者
 */
/**
 * 
 * @typedef {Object} WorkSiteModel
 * @property {String} workSiteId 
 * @property {String} workSiteName 
 * @property {?Int32} userCount 
 */
/**
 * 七牛 token
 * @typedef {Object} QiniuTokenModel
 * @property {String} uptoken 七牛上传 token
 */
/**
 * BQQ绑定网络
 * @typedef {Object} BindProjectModel
 * @property {Boolean} isBind 如果用户只有一个网络，则直接绑定
 * @property {ProjectModel[]} projects 加入是网络列表
 */
/**
 * 
 * @typedef {Object} InviteInfoModel
 * @property {InviteFromType} fromType 
 * @property {String} createUserName 
 * @property {String} sourceName 
 * @property {String} sourceId 
 * @property {String} account 
 * @property {?Boolean} isPost 
 * @property {?Boolean} isNormal 
 * @property {?Boolean} isMustCompanyName 
 * @property {?Boolean} isMustDepartment 
 * @property {?Boolean} isMustWorkSite 
 * @property {?Boolean} isMustJobNumber 
 * @property {String[]} departments 
 * @property {String[]} workSites 
 * @property {UserCardModel} userCard 
 */
/**
 * 
 * @typedef {Object} LinkInviteModel
 * @property {RegActionResult} actionResult 
 * @property {InviteInfoModel} inviteInfo 
 */
/**
 * 
 * @typedef {Object} RegisterModel
 * @property {RegActionResult} actionResult 
 * @property {UserInfoModel} user 
 */
/**
 * 
 * @typedef {Object} UserInfoModel
 * @property {String} accountId 
 * @property {String} projectId 
 * @property {String} companyName 
 * @property {String} fullname 
 * @property {String} job 
 * @property {String} encrypeAccount 
 * @property {String} encrypePassword 
 */
/**
 * 
 * @typedef {Object} GroupReportModel
 * @property {String} groupId 
 * @property {String} groupName 
 * @property {?Int32} numFollower 
 * @property {?Int32} postCount 
 * @property {?Int32} docCount 
 * @property {?Int32} qaCount 
 * @property {UserModel} createUser 
 */
/**
 * 
 * @typedef {Object} PostReportModel
 * @property {UserModel} user 
 * @property {String} message 
 * @property {String} postId 
 * @property {?Int32} numView 
 * @property {?Int32} numComment 
 */
/**
 * 
 * @typedef {Object} UserReportModel
 * @property {UserModel} user 
 * @property {?Int32} postCount 
 * @property {?Int32} commentCount 
 * @property {?Int32} docCount 
 * @property {?Int32} qaCount 
 * @property {?Int32} voteCount 
 * @property {?Int32} createTaskCount 
 * @property {?Int32} completeTaskCount 
 */
/**
 * 话题
 * @typedef {Object} CategoryModel
 * @property {String} categoryId 话题ID
 * @property {String} categoryName 话题名称
 * @property {?Int32} numPost 动态数
 * @property {?Int32} numDoc 文档数
 * @property {?Int32} numPic 图片数
 * @property {?Int32} numAnswer 文档数
 * @property {?Int32} numVote 投票数
 * @property {?Int32} numTask 任务数
 * @property {?Boolean} predefined 是否是预定义
 * @property {?DateTime} createTime 创建时间
 */
/**
 * 
 * @typedef {BaseModel} TagModel
 * @property {ActionResult} state 
 * @property {String} tagName 
 * @property {String} tagId 
 * @property {?DateTime} createTime 
 */
/**
 * 
 * @typedef {Object} Folder4ChargeLeaveModel
 * @property {String} folderID 
 * @property {String} folderName 
 * @property {String} head 
 * @property {String} chagreAccountID 
 * @property {String} fullName 
 * @property {String} job 
 * @property {String} companyName 
 * @property {String} department 
 * @property {String} lastLoginTime 
 */
/**
 * 
 * @typedef {Object} FolderFileModel
 * @property {String} fFileID 
 * @property {String} fFileName 
 * @property {String} projectID 
 * @property {Int32} sort 
 * @property {FolderInfoModel[]} folderList 
 * @property {Boolean} isNotice 
 */
/**
 * 
 * @typedef {Object} MainFolderModel
 * @property {FolderFileModel[]} folderFileList 
 * @property {FolderInfoModel[]} folderList 
 * @property {Boolean} hasHiddenFile 
 * @property {Boolean} hasArchivedFile 
 * @property {Boolean} hasNoFIDFile 
 */
/**
 * 
 * @typedef {Object} Project4FolderNotice
 * @property {String} projectID 
 * @property {Int32} noticeCount 
 */
/**
 * 
 * @typedef {Object} ProjectFolderListModel
 * @property {String} projectName 
 * @property {FolderEasyModel[]} folderList 
 */

/**
 * 
 * @typedef {Object} FolderEasyModel
 * @property {String} folderID 
 * @property {String} folderName 
 */
/**
 * 发讨论@所用实体
 * @typedef {Object} RUser4TopicModel
 * @property {String} aid 
 * @property {String} name 
 */
/**
 * 
 * @typedef {Object} TaskAccountFullInfoModel
 * @property {String} fullname 
 * @property {String} avatar 
 * @property {String} accountID 
 * @property {Boolean} isSubordinate 
 */
/**
 * 账号信息
 * @typedef {Object} TaskAccountInfoModel
 * @property {String} accountID 账号ID
 * @property {String} avatar 头像
 * @property {AccountStatus} status 状态
 * @property {String} fullName 名字
 * @property {String} inviteFullName 
 * @property {String} inviteAccountID 
 */
/**
 * 
 * @typedef {Object} AddTaskModel
 * @property {String} taskID 任务ID
 * @property {String} name 任务名称
 * @property {String} deadline 截止日期  为空为null 未设定
 * @property {String} folderID 项目ID
 * @property {TaskAccountInfoModel} charge 负责人信息
 * @property {Boolean} locked 是否锁定
 * @property {TaskColor} color 颜色
 * @property {TaskMemberType} meType 我想对于该任务的类型
 * @property {Int32} limitedCount 限制短信邀请被拦人数
 */
/**
 * 
 * @typedef {Object} FolderAttachmentModel
 * @property {AttachmentType} attachmentType 附件类型
 * @property {FromType} fromType 来源类型
 * @property {String} fileID 文件ID
 * @property {String} sourceID 数据源ID
 * @property {String} docVersionID 
 * @property {String} commentID 如讨论ID
 * @property {TaskAccountInfoModel} createAccount 创建者
 * @property {String} accountID 创建者ID 冗余字段，附件预览层组件用
 * @property {String} createUserAvatar 冗余字段，附件预览层组件用
 * @property {String} createUserName 冗余字段，附件预览层组件用
 * @property {String} originalFilename 原文件名
 * @property {String} ext 扩展名
 * @property {Int32} filesize 文件大小
 * @property {String} createTime 创建时间
 * @property {Boolean} allowDown 支持下载
 * @property {String} fileRealPath 真-文件路径
 * @property {String} server 文明server
 * @property {Boolean} isFolder 是否是项目文件
 * @property {String} taskName 任务名
 * @property {String} projectID 网络ID
 * @property {String} filename 文件名称
 * @property {String} filepath 文件路径
 * @property {String} thumbnailName 缩略图
 * @property {String} thumbnailPath 缩略路径
 * @property {String} middleName 中缩略名称
 * @property {String} middlePath 中缩略图路径
 * @property {String} largeThumbnailName 大缩略图名字
 * @property {String} largeThumbnailPath 大缩略图路径
 */

/**
 * 图片福建额外属性
 * @typedef {Object} FolderPicture
 * @property {String} thumbnailName 缩略图
 * @property {String} thumbnailPath 缩略路径
 * @property {String} middleName 中缩略名称
 * @property {String} middlePath 中缩略图路径
 * @property {String} largeThumbnailName 大缩略图名字
 * @property {String} largeThumbnailPath 大缩略图路径
 */
/**
 * 
 * @typedef {Object} FolderDetailModel
 * @property {String} folderID 项目ID
 * @property {String} folderName 项目名称
 * @property {String} projectID 
 * @property {TaskAccountInfoModel} chargeUser 项目负责人
 * @property {TaskAccountInfoModel} createUser 项目创建人
 * @property {Boolean} isFavorite 是否关注
 * @property {Boolean} isAdmin 是否管理员
 * @property {Int32} auth 权限
 * @property {Boolean} isMember 是否成员
 * @property {Boolean} folderGuide 是否项目引导
 * @property {Boolean} isTop 是否置顶
 * @property {String} fFileID 文件夹ID
 * @property {FolderMemberModel[]} member 项目成员
 * @property {Int32} applyCount 申请数
 * @property {Int32} visibility 项目可见性
 * @property {FolderGroupInfo[]} groupInfo 项目可见群组
 * @property {Boolean} isNotice 
 */
/**
 * 
 * @typedef {Object} FolderMemberModel
 * @property {TaskAccountInfoModel} member 成员基本信息
 * @property {Int32} type 成员类型
 * @property {Boolean} isAdmin 是否管理员
 */
/**
 * 
 * @typedef {Object} FolderStageModel
 * @property {String} name 
 * @property {String} iD 
 * @property {Int32} sort 
 * @property {String} folderID 
 */
/**
 * 
 * @typedef {Object} FolderTopicModel
 * @property {String} folderID 
 * @property {String} topicID 
 * @property {String} message 
 * @property {String} replyID 
 * @property {String} createTime 
 * @property {String} folderName 
 * @property {RUser4TopicModel[]} rUserList 
 * @property {GroupModel[]} rGroupList 
 * @property {TaskAccountInfoModel} createUser 
 * @property {TaskAccountInfoModel} replyUser 
 * @property {Object[]} attList 
 */
/**
 * 项目可见群组
 * @typedef {Object} FolderGroupInfo
 * @property {String} groupName 群组名称
 * @property {String} groupID 群组ID
 * @property {Int32} status 
 */
/**
 * 任务信息
 * @typedef {Object} FolderInfoModel
 * @property {String} folderID 项目ID
 * @property {String} folderName 项目名称
 * @property {Boolean} top 是否加星
 * @property {TaskAccountInfoModel} charge 负责人信息
 * @property {Boolean} archived 归档状态
 * @property {TaskAuth} auth 任务权限
 * @property {Int32} taskNum 任务数
 * @property {Int32} taskOngoingNum 进行中任务数
 * @property {String} projectID 项目所在网络ID
 * @property {Boolean} isPredefined 是否预置 2016/2/5 by Rennbon
 * @property {Int32} visibility 可见性
 * @property {Boolean} isMember 是否成员
 * @property {Boolean} isNotice 
 */
/**
 * 
 * @typedef {Object} GroupModel
 * @property {String} groupID 群组 Id
 * @property {String} groupName 群组名称
 * @property {Boolean} isDeleted 群组是否已被删除
 */
/**
 * 
 * @typedef {Object} LogModel
 * @property {String} createTime 记录时间
 * @property {TaskAccountInfoModel} account 操作者信息
 * @property {String} msg 日志内容
 * @property {Int32} type 操作类型
 */
/**
 * 
 * @typedef {Object} ReFolderModel
 * @property {String} folderID 
 * @property {String} folderName 
 * @property {String[]} groupIDs 
 * @property {String[]} errorGroupIDs 
 * @property {String} describe 
 * @property {Boolean} isAdmin 
 */
/**
 * 
 * @typedef {Object} TaskEasyInfo
 * @property {String} taskID 
 * @property {String} taskName 
 */
/**
 * 
 * @typedef {Object} TaskLeftMenuModel
 * @property {Int64} myTaskCount 我的任务
 * @property {Boolean} myTaskHasNew 是否有新
 * @property {Int64} myResponsibleCount 我负责的任务数
 * @property {Boolean} myResponsibleHasNew 
 * @property {Int64} myTrustCount 我托付的任务数
 * @property {Boolean} myTrustHasNew 
 * @property {Int64} myJoinCount 我参加的任务数
 * @property {Boolean} myJoinHasNew 
 * @property {Int64} myStarCount 星标任务数
 * @property {Boolean} myStarHasNew 
 * @property {Int64} withMeCount 与我协作的任务数
 * @property {Boolean} withMeHasNew 
 */
/**
 * 
 * @typedef {Object} UpdateTaskParentIDModel
 * @property {String} folderID 新母任务所在项目ID
 * @property {String} folderName 新母任务项目名称
 * @property {Boolean} isFolderMember 是否是项目成员
 * @property {String} stageID 新阶段ID
 * @property {String} stageName 新阶段名称
 * @property {StageModel[]} stages 新项目的阶段列表
 * @property {String} parentID 新的母任务ID
 * @property {String} parenName 新的母任务名称
 * @property {TaskInfoModel[]} ancestors 祖先列表
 * @property {TaskAuth} auth 当前任务的权限
 */
/**
 * 
 * @typedef {Object} MainFSModel
 * @property {Int32} amount 任务总数
 * @property {Int32} underway 进行中任务总数
 * @property {Int32} underway_A 逾期进行中任务数
 * @property {Int64} timespan_Und 进行中任务总逾期时间
 * @property {Int64} timespan_Com 已完成任务总逾期时间
 * @property {Int32} completed 已完成任务总数
 * @property {Int32} completed_A 逾期已完成任务总数
 * @property {Int32} memberAmount 参与成员数
 * @property {Int32} chargeAmount 任务负责人数
 */
/**
 * 
 * @typedef {Object} MemberStatisticsModel
 * @property {String} accountID 
 * @property {String} avatar 
 * @property {AccountStatus} status 
 * @property {String} fullName 
 * @property {Int32} amount 任务总数
 * @property {Int32} underway 进行中任务总数
 * @property {Int32} underway_N 正常状态进行中任务数
 * @property {Int32} underway_A 逾期进行中任务数
 * @property {Int32} underway_U 未设定截止日期的进行中任务数
 * @property {Int64} timespan 总逾期时间
 * @property {Int64} timespan_Und 进行中任务总逾期时间
 * @property {Int64} timespan_Com 已完成任务总逾期时间
 * @property {Int32} completed 已完成任务总数
 * @property {Int32} completed_N 正常已完成任务数
 * @property {Int32} completed_A 逾期已完成任务总数
 * @property {Int32} completed_U 未设定截止日期已完成任务数
 * @property {Int32} completedTimeAvg 平均完成任务时间(小时)
 */
/**
 * 
 * @typedef {Object} TFSAccountModel
 * @property {String} accountID 
 * @property {String} avatar 
 * @property {AccountStatus} status 
 * @property {String} fullName 
 */
/**
 * 
 * @typedef {Object} ThemeModel
 * @property {String} val 主题值
 * @property {String} thumbnail 缩略图
 * @property {String} name 名称
 */
/**
 * 
 * @typedef {Object} TransferModel
 * @property {String} sourceId 
 * @property {String} sourceName 
 * @property {TransferRecordType} transferRecordType 
 * @property {UserModel} currentChargeUser 
 * @property {UserModel} originalChargeUser 
 * @property {Boolean} isDelete 
 */
/**
 * 合同
 * @typedef {Object} ContractModel
 * @property {String} companyName 公司名称
 * @property {?Int32} geographyId 所在城市
 * @property {String} address 公司具体地址
 * @property {String} postcode 邮编
 * @property {String} email 邮件
 * @property {String} recipientName 联系人
 * @property {String} mobilePhone 手机号
 * @property {String} contactPhone 电话
 * @property {String} fax 传真
 */
/**
 * 
 * @typedef {Object} UpgradeModel
 * @property {Int32} userCount 
 * @property {AccountInfoModel} accountInfo 
 */
/**
 * 临时续费
 * @typedef {Object} TempRenewalModel
 * @property {LicenseType} licenseType 
 * @property {Decimal} price 
 * @property {?DateTime} startDate 
 * @property {?DateTime} endDate 
 */
/**
 * 
 * @typedef {Object} ApprovalUserModel
 * @property {ProjectSettingModel} projectSetting 
 * @property {ListModel<UserModel>} users 
 */
/**
 * 
 * @typedef {Object} ContactUserModel
 * @property {ListModel<UserModel>} oftenUsers 经常协作的用户
 * @property {ListModel<UserModel>} users 好友
 * @property {ListModel<DepartmentModel>} departments 部门
 */
/**
 * mentionsInput 的返回结果
 * @typedef {Object} MentionsInputModel
 * @property {?Boolean} isNewAccount 是否是全新用户
 * @property {AccountInfoModel[]} accounts 帐号列表
 * @property {GroupModel[]} groups 群组列表
 */
/**
 * 
 * @typedef {Object} UserFilterModel
 * @property {WorkSiteModel[]} workSites 
 * @property {DepartmentModel[]} departments 
 * @property {GroupModel[]} groups 
 */
/**
 * 
 * @typedef {BaseModel} UserModel
 * @property {ActionResult} state 
 * @property {String} userId 用户编号
 * @property {String} accountId 账号编号
 * @property {String} avatar 头像
 * @property {String} mobilePhone 手机号
 * @property {String} email 邮箱
 * @property {String} projectId 网络项目编号
 * @property {String} companyName 单位名称
 * @property {String} fullname 真实姓名
 * @property {String} enFullname 英文名
 * @property {String} job 职位名称
 * @property {String} department 部门
 * @property {String} contactPhone 联系电话
 * @property {String} workSite 作业点
 * @property {String} jobNumber 工号
 * @property {?UserStatus} status 状态
 * @property {AccountInfoModel} lastModifyUser 状态修改用户
 * @property {?DateTime} createTime 创建时间
 * @property {?DateTime} updateTime 更新时间
 * @property {String} firstCode 首字母
 * @property {?Boolean} isAdmin 是否网络管理员
 * @property {String[]} departments 网络的所有部门
 * @property {String[]} workSites 网络的所有作业点
 */
/**
 * 
 * @typedef {Object} AddTopicModel
 * @property {TopicModel} topic 讨论信息
 * @property {TaskAccountInfoModel[]} addMember 被添加为成员
 * @property {String} textMsg 把AccountID都替换为FullName
 * @property {String} taskID 任务ID
 * @property {String} taskName 任务名称
 */
/**
 * 
 * @typedef {Object} AttachmentModel
 * @property {AttachmentType} attachmentType 附件类型
 * @property {FromType} fromType 来源类型
 * @property {String} fileID 文件ID
 * @property {String} docVersionID 
 * @property {String} sourceID 数据源ID
 * @property {String} commentID 如讨论ID
 * @property {TaskAccountInfoModel} createAccount 创建者
 * @property {String} accountId 创建者ID 冗余字段，附件预览层组件用
 * @property {String} createUserAvatar 冗余字段，附件预览层组件用
 * @property {String} createUserName 冗余字段，附件预览层组件用
 * @property {String} originalFilename 原文件名
 * @property {String} ext 扩展名
 * @property {Int32} filesize 文件大小
 * @property {String} createTime 创建时间
 * @property {Boolean} allowDown 
 * @property {String} fileRealPath 
 * @property {String} server 文明server
 * @property {String} projectID 网络ID
 * @property {String} filename 文件名称
 * @property {String} filepath 文件路径
 * @property {String} thumbnailName 缩略图
 * @property {String} thumbnailPath 缩略路径
 * @property {String} middleName 中缩略名称
 * @property {String} middlePath 中缩略图路径
 * @property {String} largeThumbnailName 大缩略图名字
 * @property {String} largeThumbnailPath 大缩略图路径
 */

/**
 * 图片福建额外属性
 * @typedef {Object} Picture
 * @property {String} thumbnailName 缩略图
 * @property {String} thumbnailPath 缩略路径
 * @property {String} middleName 中缩略名称
 * @property {String} middlePath 中缩略图路径
 * @property {String} largeThumbnailName 大缩略图名字
 * @property {String} largeThumbnailPath 大缩略图路径
 * @property {String} filename 文件名称
 * @property {String} filepath 文件路径
 */
/**
 * 批量操作统一返回格式
 * @typedef {Object} BatchOperationModel
 * @property {String[]} success 成功的数据ID
 * @property {String[]} fail 失败的数据ID
 * @property {String[]} noAuth 无权限的数据ID
 * @property {String[]} param 非法参数
 */
/**
 * 
 * @typedef {Object} FolderTaskListModel
 * @property {StageModel[]} stages 阶段列表
 * @property {String} folderName 项目名称
 * @property {String} folderID 项目ID
 * @property {String} projectID 网络ID
 * @property {TaskAuth} auth 当前用户相对于该项目的权限
 * @property {FolderVisibility} visibility 项目可见性
 * @property {Boolean} isTop 是否置顶
 * @property {Int32} memberCount 成员数
 * @property {Int32} applyMemberCount 申请中的成员数
 * @property {TaskColor[]} meColors 我的任务颜色列表
 * @property {Int64} taskNum 任务数
 */
/**
 * 获取任务列表  分类视图
 * @typedef {Object} GetTaskListClassifyModel
 * @property {TaskInfoModel[]} classify_0 
 * @property {Int64} num_0 
 * @property {TaskInfoModel[]} classify_1 
 * @property {Int64} num_1 
 * @property {TaskInfoModel[]} classify_2 
 * @property {Int64} num_2 
 * @property {TaskInfoModel[]} classify_3 
 * @property {Int64} num_3 
 */
/**
 * 获取任务列表 按照项目排序
 * @typedef {Object} GetTaskListFolderModel
 * @property {String} folderID 项目ID
 * @property {String} folderName 项目名称
 * @property {TaskInfoModel[]} tasks 任务列表
 */
/**
 * 任务列表  模板
 * @typedef {Object} GetTaskListModel
 * @property {TaskColor[]} meColors 我的任务颜色列表
 * @property {Int64} taskNum 任务数
 * @property {Object} data 数据
 */
/**
 * 成员
 * @typedef {Object} MemberModel
 * @property {TaskAccountInfoModel} account 用户信息
 * @property {TaskMemberType} type 类型
 * @property {ApplyType} status 状态
 */
/**
 * 返回结果
 * @typedef {Object} ReturnTemplate
 * @property {Boolean} status 执行状态 true 成功 false 失败
 * @property {Object} data 业务返回的数据
 * @property {TaskError} error 错误信息
 */

/**
 * 错误信息
 * @typedef {Object} TaskError
 * @property {ErrorType} type 异常类型
 * @property {TaskExceptionType} code 系统自定义错误编号
 * @property {String} msg 自定义错误消息  前端可以直接提示
 * @property {String} ex 原始堆栈信息
 */
/**
 * 
 * @typedef {Object} StageModel
 * @property {String} id 阶段ID
 * @property {String} name 阶段名称
 * @property {Int32} sort 阶段顺序
 * @property {Int64} count 任务数
 * @property {TaskInfoModel[]} tasks 任务列表
 */
/**
 * 
 * @typedef {Object} TagModel
 * @property {String} tagID 标签ID
 * @property {String} name 标签名称
 */
/**
 * 任务详情
 * @typedef {Object} TaskDetailModel
 * @property {String} taskID 任务ID
 * @property {String} taskName 任务名称
 * @property {String} summary 任务描述
 * @property {String} deadline 任务截止日期
 * @property {Boolean} star 是否加星
 * @property {TaskAccountInfoModel} charge 负责人信息
 * @property {TaskStatus} status 任务状态
 * @property {Int32} topicCount 讨论 数
 * @property {TaskColor} color 任务颜色
 * @property {Boolean} notice 是否接收通知
 * @property {MeTaskClassify} classify 我的分类
 * @property {Boolean} locked 是否锁定
 * @property {String} statusModifyTime 状态改变时间
 * @property {TaskAuth} auth 任务权限
 * @property {Int32} subCount 子任务数
 * @property {Int32} completedNum 已完成子任务数
 * @property {Boolean} newTask 是否新任务
 * @property {String} projectID 任务所在网络ID
 * @property {String} projectName 网络名称
 * @property {Boolean} isFolderMember 是否项目成员
 * @property {String} folderID 项目ID
 * @property {String} folderName 项目名称
 * @property {String} stageID 阶段ID
 * @property {String} stageName 阶段名称
 * @property {TaskInfoModel[]} ancestors 祖先列表
 * @property {TaskInfoModel[]} subTask 子任务列表
 * @property {MemberModel[]} member 成员列表
 * @property {TopicModel[]} topicList 讨论列表
 * @property {TagModel[]} tags 任务标签
 * @property {StageModel[]} stages 当有修改任务阶段的权限时 提供
 * @property {Int64} withMeAbout 与我有关讨论数量
 * @property {String} currentTime 服务器时间
 * @property {Boolean} isTaskMember 是否任务成员
 * @property {Boolean} folderCanLook 项目是否可见
 */
/**
 * 任务信息
 * @typedef {Object} TaskInfoModel
 * @property {String} taskID 任务ID
 * @property {String} taskName 任务名称
 * @property {String} parentTaskID 母任务ID
 * @property {String} stageID 阶段ID
 * @property {String} deadline 任务截止日期
 * @property {Boolean} star 是否加星
 * @property {TaskAccountInfoModel} charge 负责人信息
 * @property {TaskStatus} status 任务状态
 * @property {Int32} notificationCount 未读计数
 * @property {Int32} topicCount 讨论 数
 * @property {TaskColor} color 任务颜色
 * @property {Boolean} locked 是否锁定
 * @property {String} statusModifyTime 状态改变时间
 * @property {TaskAuth} auth 任务权限
 * @property {Int32} subCount 子任务数
 * @property {Int32} completedNum 已完成子任务数
 * @property {Boolean} newTask 是否新任务
 * @property {String} projectID 任务所在网络ID
 * @property {Boolean} isNotice 任务提醒
 */
/**
 * 
 * @typedef {Object} TopicModel
 * @property {String} topicID 讨论ID
 * @property {String} message 消息
 * @property {String} createTime 创建时间
 * @property {TaskAccountInfoModel} createAccount 创建者
 * @property {TaskAccountInfoModel} replyAccount 回复 人信息
 * @property {String} replyID 回复那条讨论ID
 * @property {Object[]} attachment 附件列表
 * @property {String} projectID 讨论所在的网络ID
 * @property {Boolean} star 是否加星
 * @property {RUser4TopicModel[]} rUserList 
 * @property {GroupModel[]} rGroupList 
 */
/**
 * 
 * @typedef {Object} UpdateTaskDeadlineModel
 * @property {String[]} taskID 受影响的任务ID列表
 * @property {String} deadline 新的截止日期
 * @property {String} statusModifyDate 状态改变时间
 * @property {Int32} compareDay 截止日期 和当前时间的比较 相差N天
 */
