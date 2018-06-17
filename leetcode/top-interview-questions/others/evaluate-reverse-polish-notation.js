// 逆波兰表达式求值
// 根据逆波兰表示法，求表达式的值。

// 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

// 说明：

// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
// 示例 1：
// 输入: ["2", "1", "+", "3", "*"]
// 输出: 9
// 解释: ((2 + 1) * 3) = 9

// 示例 2：
// 输入: ["4", "13", "5", "/", "+"]
// 输出: 6
// 解释: (4 + (13 / 5)) = 6

// 示例 3：
// 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// 输出: 22
// 解释: 
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var len = tokens.length;
  var stack = [];
  var num1,num2,result;
  if (len === 0) return 0;
  else if (len == 1) return parseInt(tokens[0]);
  var compute = function(a,b,c){
    switch(c){
      case "+":
        return parseInt(parseInt(a) + parseInt(b));
      case "-":
        return parseInt(parseInt(a) - parseInt(b));
      case "*":
        return parseInt(parseInt(a) * parseInt(b));
      case "/":  
        return parseInt(parseInt(a) / parseInt(b));
    }
  };
  for(var i = 0; i < len; i++){
    if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/') {
      num2 = stack.pop();
      num1 = stack.pop();
      result = compute(num1,num2,tokens[i]);
      stack.push(result);
    }else{
      stack.push(tokens[i]);
    }
  }
  return result;
};

// var evalRPN = function(tokens) {
//   var len = tokens.length;
//   if (len === 0) return 0;
//   else if (len == 1) return parseInt(tokens[0]);

//   var stack = [];
//   var result;
//   var num1, num2;
//   for (var i = 0; i < len; i++) {
//       var char = tokens[i];
//       if (char == '+' || char == '-' || char == '*' || char == '/') {

//           num2 = parseInt(stack.pop());
//           num1 = parseInt(stack.pop());

//           if (char == '+') result = num1 + num2;
//           else if (char == '-') result = num1 - num2;
//           else if (char == '*') result = num1 * num2;
//           else {
//               if ((num1 >= 0 && num2 > 0) || (num1 < 0 && num2 < 0))
//                   result = Math.floor(num1 / num2);
//               else
//                   result = Math.ceil(num1 / num2);
//           }
//           stack.push(result);
//       }
//       else stack.push(char);
//   }
//   return result; 
// };

var a = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(a));