// 第一个只出现一次的字符

// 题目描述
// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)
// 中找到第一个只出现一次的字符,并返回它的位置, 
// 如果没有则返回 -1（需要区分大小写）.

/**
 * @param {String} str
 * @return {Number}
 */
function FirstNotRepeatingChar(str) {
  let obj = Object.create(null);
  for (let i = 0, len = str.length; i < len; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  for (let item in obj) {
    if (obj[item] == 1) {
      return str.indexOf(item);
    }
  }
  return -1;
}

console.log(FirstNotRepeatingChar('google'));