const { stringify } = require('./_querystring.js');

// const SERVER = 'http://localhost:10001'
const SERVER = 'https://wx.mingdao.net';
const AJAX_URL = SERVER + '/ajaxpage/AjaxHeader.ashx';
let pssId = wx.getStorageSync('md_pss_id');

if (!Promise.prototype.fail) Promise.prototype.fail = Promise.prototype.catch;

function fetchApi (controller, action, body, options) {
  const header = { 'Content-Type': 'application/x-www-form-urlencoded' };
  if (pssId) header['Authorization'] = 'md_pss_id ' + pssId;
  const data = {};
  if (body) {
    Object.keys(body).forEach(k => {
      let v = body[k];
      if (typeof v === 'function') v = v();
      if (typeof v === 'object') v = JSON.stringify(v);
      data[k] = v;
    });
  }
  
  const promise = new Promise((resolve, reject) => {
    wx.request({
      header,
      url: AJAX_URL + '?' + stringify({ controller, action }),
      data: stringify(data),
      method: 'POST',
      success(res) {
        if (res.statusCode > 299) {
          return reject({
            errorCode: res.statusCode,
            errorMessage: getErrorMessageByCode(res.statusCode),
          })
        }
        if (!res.data) {
          return reject({
            errorCode: -1,
            errorMessage: '服务端未返回结果',
          });
        }
        if (res.data.exception) {
          return reject({
            errorCode: res.data.state,
            errorMessage: res.data.exception,
          });
        }
        resolve(res.data.data);
      },
      fail(res) {
        reject({
          errorCode: res.statusCode,
          errorMessage: res.errMsg,
        });
      },
    });
  });
  promise.fail(err => console.error(err));
  return promise;
}

function setSessionId(sessionId) {
  pssId = sessionId;
  wx.setStorageSync('md_pss_id', sessionId);
}

function getErrorMessageByCode(statusCode) {
  if (statusCode >= 400 && statusCode < 500) {
    if (statusCode == 401) {
      return '您可能未登录或登录超时，请先登录';
    } else if (statusCode == 403) {
      return '您的帐号没有足够的权限';
    } else if (statusCode == 404) {
      return '您请求的页面不存在';
    } else if (statusCode == 405) {
      return '您发起的请求方法不能被用于请求相应的资源，请联系明道支持';
    } else if (statusCode == 413) {
      return '您的请求因数据量过大而不被支持，请联系明道支持';
    } else if (statusCode == 414) {
      return '您的请求因 URL 过长而不被支持，请联系明道支持';
    } else if (statusCode == 421) {
      return '您发起的请求过于频繁，请稍后再试';
    } else {
      return '服务器无法理解该请求，请联系明道支持';
    }
  }
  if (statusCode >= 500) {
    if (statusCode == 501) {
      return '服务端不支持此方法，请联系明道支持';
    } else if (statusCode == 502) {
      return '上游服务器发生异常，请稍候再试';
    } else if (statusCode == 503) {
      return '服务临时不可用，请稍后重试';
    } else if (statusCode == 504) {
      return '服务超时，请稍后重试';
    } else if (statusCode == 505) {
      return '服务器不支持您的 HTTP 版本，请联系明道支持';
    } else {
      return '服务端发生错误';
    }
  }
}

module.exports = {
  fetchApi,
  setSessionId,
};