// 随机打乱数组

/**
 * @param {Array} arr
 * @return {Array}
 */
function printRandom(arr) {
  let a = arr.slice(0);
  for (let i = 0, l = a.length; i < l; i++) {
    let r = Math.floor(Math.random()*l);
    [a[i], a[r]] = [a[r], a[i]];
  }
  return a;
}

let arr = [1,2,3,4,5,6,7,8,9];
console.log(printRandom(arr))