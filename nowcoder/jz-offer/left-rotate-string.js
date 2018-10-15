// 左旋转字符串

// 题目描述
// 汇编语言中有一种移位指令叫做循环左移（ROL），
// 现在有个简单的任务，就是用字符串模拟这个指令的运算结果。
// 对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。
// 例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。
// 是不是很简单？OK，搞定它！

/**
 * @param {String} str
 * @param {Number} n
 * @return {String}
 */
function LeftRotateString(str, n) {
  return substr(str, n) + substr(str, 0, n);
}

function substr(str, start, count) {
  if (typeof str != "string") return "";
  let [s, len, st, en] = ["", str.length];
  st = typeof start == "number" && start >= 0 ? start : 0;
  en = typeof count == "number" && count >= 0 ? count : len;
  while (st < en && st < len) {
    s += str[st];
    st++;
  }
  return s;
}

console.log(LeftRotateString("abcdefg", 0));
