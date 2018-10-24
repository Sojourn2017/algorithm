// 数据流中的中位数

// 题目描述
// 如何得到一个数据流中的中位数？
// 如果从数据流中读出奇数个数值，
// 那么中位数就是所有数值排序之后位于中间的数值。
// 如果从数据流中读出偶数个数值，
// 那么中位数就是所有数值排序之后中间两个数的平均值。
// 我们使用Insert()方法读取数据流，
// 使用GetMedian()方法获取当前读取数据的中位数。

let arr = [];
function Insert(num) {
  let index = arr.length - 1;
  arr.push(num);
  for (let i = index; i >= 0; i--) {
    if (arr[i] > num) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    } else {
      break;
    }
  }
}
function GetMedian() {
  let len = arr.length;
  if (len <= 0) return;
  let mid = Math.floor((len - 1) / 2);
  return len % 2 == 0 ? (arr[mid] + arr[mid + 1]) / 2 : arr[mid];
}

let data = [5, 2, 3, 4, 1, 6, 7, 0, 8];

for (let i = 0, len = data.length; i < len; i++) {
  Insert(data[i]);
  console.log(GetMedian());
}
