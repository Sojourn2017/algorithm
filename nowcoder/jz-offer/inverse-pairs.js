// 数组中的逆序对

// 题目描述
// 在数组中的两个数字，如果前面一个数字大于后面的数字，
// 则这两个数字组成一个逆序对。输入一个数组,
// 求出这个数组中的逆序对的总数P。
// 并将P对1000000007取模的结果输出。
// 即输出P%1000000007

/**
 * @param {Number} index
 * @return {Number}
 */
function InversePairs(data) {
  if (!data || data.length < 2) return 0;
  return mergeSort(data, data.slice(), 0, data.length - 1) % 1000000007;
}

function mergeSort(arr, newArr, start, end) {
  if (start == end) return 0;
  let mid = (end + start) >> 1,
    left = mergeSort(newArr, arr, start, mid),
    right = mergeSort(newArr, arr, mid + 1, end),
    count = 0,
    index1 = mid,
    index2 = end,
    curIndex = end;
  while (index1 >= start && index2 >= mid + 1) {
    if (arr[index1] > arr[index2]) {
      count += index2 - mid;
      newArr[curIndex--] = arr[index1--];
    } else {
      newArr[curIndex--] = arr[index2--];
    }
  }
  while (index1 >= start) {
    newArr[curIndex--] = arr[index1--];
  }
  while (index2 >= mid + 1) {
    newArr[curIndex--] = arr[index2--];
  }
  return left + right + count;
}

let count = InversePairs([7, 5, 6, 4]);

console.log(count);
