// 修改 this 指向

// 题目描述
// 封装函数 f，使 f 的 this 指向指定的对象

/* 
 * @param {Function} f
 * @param {Object} oTarget
 * @return {Function}
 */
function bindThis(f, oTarget) {
  return f.bind(oTarget);
}

