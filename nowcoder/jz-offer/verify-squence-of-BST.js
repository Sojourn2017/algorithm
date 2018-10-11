// 二叉搜索树的后序遍历序列

// 题目描述
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
// 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

/**
 * @param {Array []} sequence
 * @return {Boolean}
 */
function VerifySquenceOfBST(sequence) {
  let [len, i] = [sequence.length, 0];
  if (len == 0) {
    return false;
  }
  while (--len) {
    while (sequence[i++] < sequence[len]);
    while (sequence[i++] > sequence[len]);
    if (i < len) return false;
    i = 0;
  }
  return true;
}

// // recursive
// function VerifySquenceOfBST(sequence) {
//   if (sequence.length == 0) { return false; }
//   return recursive(sequence, 0, sequence.length - 1, );
// }

// function recursive (arr, start, root) {
//   if (start >= root) { return true; }
//   while (arr[start] < arr[root]) { start++; }
//   let l = start - 1;
//   while (arr[start] > arr[root]) { start++;}
//   return start < root ? false : recursive(arr, 0, l) && recursive(arr, l + 1, root - 1);
// }

// var a = [4,8,6,12,16,14,10];
// console.log(VerifySquenceOfBST(a));
