// 将整数字符串解析成数字

// 给定一个字符串类型的整数，把它转换成对应的数字类型

// 例：
// 输入："12345",
// 输出：12345

/**
 * @param {string} str
 * @return {number}
 */

 function parseStrToInt(str) {
  // // 若存在parseInt(),则直接转换
  // if (Number.parseInt) {
  //   return Number.parseInt(str);
  // }
  let len = str.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    // 遍历字符串，若存在charCodeAt(),则手动获取字符对应的ASCII码
    // 0~9对应的ASCII码为48~57
    // 使用ASCII码-48，再乘以倍数，结果累加，即是转换后的数字类型
    if (String.prototype.charCodeAt) {
      res += (str[i].charCodeAt() - 48) * 10 ** (len - i - 1);
    } else {
      res += str[i] * 10 ** (len - i - 1);
    }
  }
  return res;
 }

 var a = parseStrToInt("12345");

 console.log(a);