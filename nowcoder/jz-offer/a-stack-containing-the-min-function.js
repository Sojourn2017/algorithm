// 包含min函数的栈

// 题目描述
// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数
// （时间复杂度应为O（1））。

let stack = {
  sort: [],
  val: []
};
function push(node) {
  let res = stack.val.push(node);
  let [small, big, index] = [0, stack.sort.length, 0];
  let mid = Math.floor(big / 2);
  while (small + 1 < big) {
    if (stack.sort[mid] <= node) {
      small = mid;
    } else {
      big = mid;
    }
    mid = Math.floor((small + big) / 2);
  }
  if (stack.sort.length > 1) {
    if (stack.sort[small] < node && stack.sort[big] < node) {
      stack.sort.push(node);
    } else if (stack.sort[small] < node && stack.sort[big] > node) {
      stack.sort.splice(big, 0, node);
    } else {
      stack.sort.splice(small, 0, node);
    }
  } else if (stack.sort.length == 1) {
    if (stack.sort[small] > node) {
      stack.sort.splice(small, 0, node);
    } else {
      stack.sort.push(node);
    }
  } else {
    stack.sort.push(node);
  }
  // return res;
}
function pop() {
  let res = stack.val.pop();
  let index = stack.sort.indexOf(res);
  stack.sort.splice(index, 1);
  // return res;
}
function top() {
  return stack.val[0];
}
function min() {
  return stack.sort[0];
}

var oprate = [
  push(3),
  min(),
  push(4),
  min(),
  push(2),
  min(),
  push(3),
  min(),
  pop(),
  min(),
  pop(),
  min(),
  pop(),
  min(),
  push(0),
  min()
];

oprate.forEach(val => {
  console.log(val);
});
