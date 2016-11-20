function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

function json2Form(json) {  
    var str = [];  
    for(var p in json){  
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));  
    }  
    return str.join("&");  
} 

function getRemindTxt(remindType, remindTime) {
  let remind = remindTime;
  if (remindType === 0) {
    remind = '不提醒';
  } else if (remindType === 1) {
    remind = '提前' + remind + '分钟'
  } else if (remindType === 2) {
    remind = '提前' + remind / 60 + '小时'
  } else if (remindType === 3) {
    remind = '提前' + remind / 1440 + '天'
  }
  return remind;
}

module.exports = {
  formatTime,
  trim,
  json2Form,
  getRemindTxt,
}
