// 将字符串转换为驼峰格式

// 题目描述
// css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
// 1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
// 2. -webkit-border-image 转换后的结果为 webkitBorderImage
// 示例1
// 输入
// 'font-size'
// 输出
// fontSize

/* 
 * @param {String} sName
 * @return {String}
 */
function cssStyle2DomStyle(sName) {
  return sName.replace(/^-/g,"").replace(/-./g,function(s){
      return s[1].toUpperCase();
  });
}

var a = cssStyle2DomStyle("-webkit-border-image");
console.log(a);