// 题目描述

// 按所给的时间格式输出指定的时间
// 格式说明
// 对于 2014.09.05 13:14:20
// yyyy: 年份，2014
// yy: 年份，14
// MM: 月份，补满两位，09
// M: 月份, 9
// dd: 日期，补满两位，05
// d: 日期, 5
// HH: 24制小时，补满两位，13
// H: 24制小时，13
// hh: 12制小时，补满两位，01
// h: 12制小时，补满两位，1
// mm: 分钟，补满两位，14
// m: 分钟，14
// ss: 秒，补满两位，20
// s: 秒，20
// w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五

// 示例1
// 输入
// formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')

// 输出
// 2014-09-05 13:14:20 星期五

/**
 * @param {new Date()} date
 * @return {string} str
 */

function formatDate(date,str){
    var obj = {
      yyyy:date.getFullYear(),
      yy:(""+ date.getFullYear()).slice(-2),
      M:date.getMonth()+1,
      MM:("0"+ (date.getMonth()+1)).slice(-2),
      d:date.getDate(),
      dd:("0" + date.getDate()).slice(-2),
      H:date.getHours(),
      HH:("0" + date.getHours()).slice(-2),
      h:date.getHours() % 12,
      hh:("0"+date.getHours() % 12).slice(-2),
      m:date.getMinutes(),
      mm:("0" + date.getMinutes()).slice(-2),
      s:date.getSeconds(),
      ss:("0" + date.getSeconds()).slice(-2),
      w:['日', '一', '二', '三', '四', '五', '六'][date.getDay()]
    };
    return str.replace(/([a-zA-Z]+)/g,function(key){return obj[key]});
  }

  console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'));