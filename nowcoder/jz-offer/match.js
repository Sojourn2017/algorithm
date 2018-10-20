// 正则表达式匹配

// 题目描述
// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。
// 模式中的字符'.'表示任意一个字符，
// 而'*'表示它前面的字符可以出现任意次（包含0次）。 
// 在本题中，匹配是指字符串的所有字符匹配整个模式。
// 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，
// 但是与"aa.a"和"ab*a"均不匹配

/**
 * @param {String} s
 * @param {String} pattern
 * @return {boolean}
 */
function match(s, pattern) {
  let [sLen, pLen] = [s.length, pattern.length];
  if (sLen === pLen && s === pattern) {
    return true;
  } else {
    return matchCore(s, pattern, 0, 0, sLen, pLen);
  }
}

function matchCore(s, p, sIndex, pIndex, sLen, pLen) {
  if (sIndex == sLen && pIndex == pLen) {
    return true;
  }
  if (sIndex != sLen && pIndex == pLen) {
    return false;
  }
  let [a, b, c] = [s[sIndex], p[pIndex], p[pIndex + 1]];
  if (pIndex + 1 < pLen && c === '*') {
    if (sIndex !== sLen && a === b || b === '.' && sIndex !== sLen) {
      return matchCore(s, p, sIndex + 1, pIndex, sLen, pLen) ||
        matchCore(s, p, sIndex, pIndex + 2, sLen, pLen) ||
        matchCore(s, p, sIndex + 1, pIndex + 2, sLen, pLen);
    } else {
      return matchCore(s, p, sIndex, pIndex + 2, sLen, pLen);
    }
  } else {
    if (sIndex !== sLen && a === b || b === '.' && sIndex !== sLen) {
      return matchCore(s, p, sIndex + 1, pIndex + 1, sLen, pLen);
    } else {
      return false;
    }
  }
}

console.log(match("aaa", "ab*ac*a"));