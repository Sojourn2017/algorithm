// 用两个栈来实现队列

// 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

let inStack = [];
let outStack = [];
function push(node) {
    return inStack.push(node);
}
function pop() {
    if (!outStack.length) {
        while (inStack.length) {
            outStack.push(inStack.pop());
        }
    }
    return outStack.pop();
}

// let queue = [];
// function push(node) {
//   queue.push(node);
// }
// function pop() {
//   return queue.length ? queue.shift() : false;
// }