// 模块

// 题目描述
// 完成函数 createModule，调用之后满足如下要求：
// 1、返回一个对象
// 2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
// 3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值

/**
 * @param {String} str1
 * @param {String} str2
 * @return {}
 */
function createModule(str1, str2) {
  return {
    greeting: str1,
    name: str2,
    sayIt: function () {
      return this.greeting + ', ' + this.name;
    }
  }
}