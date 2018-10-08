// 用两个栈实现队列

// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

let queue = [];
function push(node) {
  queue.push(node);
}
function pop() {
  return queue.length ? queue.shift() : false;
}