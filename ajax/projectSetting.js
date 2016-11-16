var api = require('./_api.js');
var ctrlName = 'ProjectSetting';
/**
 * @exports AjaxCtrl/ProjectSetting
 */
var projectSetting = {
    /**
     * 获取企业标识
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectSettingModel, ErrorModel>} 
     */
    getProjectIdentity: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectIdentity', args, options);
    },
    
    /**
     * 界面定制
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectSettingModel, ErrorModel>} 
     */
    getSysColor: function(args, options) {
        return api.fetchApi(ctrlName, 'GetSysColor', args, options);
    },
    
    /**
     * 生日提醒
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectSettingModel, ErrorModel>} 
     */
    getBirthdayNotice: function(args, options) {
        return api.fetchApi(ctrlName, 'GetBirthdayNotice', args, options);
    },
    
    /**
     * 二级域名
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectSettingModel, ErrorModel>} 
     */
    getSubDomain: function(args, options) {
        return api.fetchApi(ctrlName, 'GetSubDomain', args, options);
    },
    
    /**
     * 多域名
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectSettingModel, ErrorModel>} 
     */
    getProjectDomain: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectDomain', args, options);
    },
    
    /**
     * 新用户加入企业必填字段
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<ProjectSettingModel, ErrorModel>} 
     */
    getPrivacy: function(args, options) {
        return api.fetchApi(ctrlName, 'GetPrivacy', args, options);
    },
    
    /**
     * 企业标识
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Boolean} args.allowProjectCodeJoin 
     * @param {Boolean} args.allowProjectQrCodeJoin 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    setProjectIdentity: function(args, options) {
        return api.fetchApi(ctrlName, 'SetProjectIdentity', args, options);
    },
    
    /**
     * LOGO
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.logoName 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    setLogo: function(args, options) {
        return api.fetchApi(ctrlName, 'SetLogo', args, options);
    },
    
    /**
     * 二级域名页面背景图片
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.imageName 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    setCustomeHomeImage: function(args, options) {
        return api.fetchApi(ctrlName, 'SetCustomeHomeImage', args, options);
    },
    
    /**
     * 生日提醒
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Boolean} args.birthdayNoticeEnabled 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    setBirthdayNotice: function(args, options) {
        return api.fetchApi(ctrlName, 'SetBirthdayNotice', args, options);
    },
    
    /**
     * 设置审批
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Boolean} args.isAudit 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    setAudit: function(args, options) {
        return api.fetchApi(ctrlName, 'SetAudit', args, options);
    },
    
    /**
     * 设置二级域名
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.subDomain 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<OperateStatus, ErrorModel>} 
     */
    setSubDomin: function(args, options) {
        return api.fetchApi(ctrlName, 'SetSubDomin', args, options);
    },
    
    /**
     * 删除绑定的域名
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {String} args.domain 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    removeProjectDomain: function(args, options) {
        return api.fetchApi(ctrlName, 'RemoveProjectDomain', args, options);
    },
    
    /**
     * 新用户加入企业必填字段
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Boolean} args.mustFillCompany 
     * @param {Boolean} args.mustFillWorkSite 
     * @param {Boolean} args.mustFillJobNumber 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    setPrivacy: function(args, options) {
        return api.fetchApi(ctrlName, 'SetPrivacy', args, options);
    },
    
    /**
     * 获取LDAP信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<LdapModel, ErrorModel>} 
     */
    getProjectLdapSetting: function(args, options) {
        return api.fetchApi(ctrlName, 'GetProjectLdapSetting', args, options);
    },
    
    /**
     * 修改LDAP信息
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Int32} args.ldapType 
     * @param {String} args.port 
     * @param {Boolean} args.enableSSL 
     * @param {String} args.serverIP 
     * @param {String} args.user 
     * @param {String} args.password 
     * @param {String} args.domainPath 
     * @param {String} args.searchFilter 
     * @param {String} args.emailAttr 
     * @param {String} args.fullnameAttr 
     * @param {String} args.departmentAttr 
     * @param {String} args.jobAttr 
     * @param {String} args.workphoneAttr 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateProjectLdapSetting: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateProjectLdapSetting', args, options);
    },
    
    /**
     * 修改LDAP开启状态
     * @param {Object} args 请求参数
     * @param {String} args.projectId 
     * @param {Boolean} args.isEffect 
     * @param {Object} options 配置参数
     * @param {Boolean} options.silent 是否禁止错误弹层
     * @returns {Promise<Boolean, ErrorModel>} 
     */
    updateLdapState: function(args, options) {
        return api.fetchApi(ctrlName, 'UpdateLdapState', args, options);
    }
};
module.exports = projectSetting;
