/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 *
 * https://leetcode-cn.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (47.49%)
 * Total Accepted:    18.3K
 * Total Submissions: 38.2K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 *
 *
 * push(x) -- 将元素 x 推入栈中。
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 *
 *
 * 示例:
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 *
 *
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minArr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.getMin() >= x || !this.minArr.length) this.minArr.push(x);
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let val = this.stack.pop();
  if (this.getMin() === val) this.minArr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minArr[this.minArr.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//  test

let funcArr = [
  "MinStack",
  "push",
  "push",
  "getMin",
  "getMin",
  "push",
  "getMin",
  "getMin",
  "top",
  "getMin",
  "pop",
  "push",
  "push",
  "getMin",
  "push",
  "pop",
  "top",
  "getMin",
  "pop"
];
let valArr = [
  [],
  [-10],
  [14],
  [],
  [],
  [-20],
  [],
  [],
  [],
  [],
  [],
  [10],
  [-7],
  [],
  [-7],
  [],
  [],
  [],
  []
];

let a;
funcArr.forEach((funcName, index) => {
  if (funcName == "MinStack") {
    a = new MinStack();
    global.a = a;
  } else {
    a[funcName].apply(a, valArr[index]);
  }
});
