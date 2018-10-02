// 根据包名，在指定空间中创建对象

// 题目描述
// 根据包名，在指定空间中创建对象
// 输入描述:
// namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出描述:
// {a: {test: 1, b: {c: {d: {}}}}}

/* 
 * @param {Object} oNamespace
 * @param {String} sPackage
 * @return {Object}
 */
function namespace(oNamespace, sPackage) {
  var res = oNamespace;
  var obj = res;
  sPackage.replace(/(\w+)\.?/g, function (m, p) {
    obj[p] = typeof obj[p] === 'object' ? obj[p] : {};
    obj = obj[p];
  })
  return res;
}

var a = namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
console.log(a);