// 获取 url 参数

// 题目描述
// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组

// 示例1
// 输入
// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe
// 输出
// [1, 2, 3]

/* 
 * @param {String} sUrl
 * @param {String} sKey
 * @return {String | Array | Object}
 */
function getUrlParam(sUrl, sKey) {
  var res = '';
  sKey
    ? sUrl.replace(new RegExp('\\??' + sKey + '=(\\w+)&?', 'g'), function (m, p1) {
      res = res ? [].concat(res, p1) : p1;
    })
    : sUrl.replace(/\??(\w+)=(\w+)&?/g, function (m, p1, p2) {
      res = res || {};
      res[p1] = res[p1]
        ? [].concat(res[p1], p2)
        : p2;
    }) 
  return res;
}

var a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe','test')
console.log(a)