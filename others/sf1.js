// 从两个字符串（只包含0-9a-zA-Z）中获取两者不同的字符按顺序生成对称字符串

// 题目描述：
// 1.获取两个字符串中不同的字符（区分大小写，本身字符串中有重复的也要去除）（例：abc与bcd -》 ad）
// 2.得到的字符根据ASCII码从小到大排序
// 3.根据第3步的结果生成一个对称字符串（例：abc -》abccba）


function compare(str, str1) {
  var s = str + str1;
  var code = [];
  var arr = [];
  for (var i = 0, len = s.length; i < len; i++) {
    var char = s[i].charCodeAt();
    if (code[char] != null) {
      code[char]++;
    } else {
      code[char] = 1;
    }
  }
  code.forEach(function (v, i) {
    if (v == 1) {
      arr.push(String.fromCharCode(i));
    }
  })
  return arr.join('')+arr.reverse().join('');
}

console.log(compare("aAs185B23df","wqe12rd"));