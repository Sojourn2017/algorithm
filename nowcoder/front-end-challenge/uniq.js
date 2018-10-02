// 数组去重

// 题目描述
// 为 Array 对象添加一个去除重复项的方法
// 示例1
// 输入
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
// 输出
// [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']

Array.prototype.uniq = function () {
  var res = [];
  var arr = this;
  var hasNaN = false;
  var include = function (array, val) {
    for (var i = 0, l = array.length; i < l; i++) {
      if (array[i] === val) {
        return true;
      }
    }
    return false;
  };
  for (var i = 0, len = arr.length; i < len; i++) {
    var val = arr[i];
    if (!include(res, val)) {
      if (val !== val) {
        if (!hasNaN) {
          hasNaN = true;
          res.push(NaN);
        }
      } else {
        res.push(val);
      }
    }
  }
  return res;
}

var a = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
console.log(a.uniq());