// 获取字符串的长度

// 题目描述
// 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
// 否则如果字符 Unicode 编码 > 255 则长度为 2
// 示例1
// 输入
// 'hello world, 牛客', false
// 输出
// 17

/* 
 * @param {String} s
 * @param {Boolean}} bUnicode255For1
 * @return {Number}
 */
function strLength(s, bUnicode255For1) {
  var len = s.length;
  if (!bUnicode255For1) {
    for (var i = 0; i < len; i++) {
      if (s.charCodeAt(i) > 255) {
        len++;
      }
    }
  }
  return len;
}

var a = strLength('hello world, 牛客', false);
console.log(a);