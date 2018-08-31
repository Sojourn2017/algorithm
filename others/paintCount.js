// 最少的绘画笔数

// 题目描述
// 对于一个N*M(N行M列)空白的方格，格子空白记为"X"，蓝色记为"B", 
// 黄色记为"Y", 绿色记为"G"(蓝色+黄色为绿色),
// 现有蓝色和黄色画笔,
// 蓝色画笔只能左斜画格("/")，斜率为1,
// 黄色画笔只能右斜画格("\"), 斜率为-1,
// 求画成指定颜色的方格所需最少绘画笔数
// 输入2个参数，
// 第一个参数是包含N、M的字符串，以" "分隔开，
// 第二个参数为长度为N的数组，数组元素为长度为M的字符串。
// 示例：
// 输入:"4 4",['YXXB','XYGX','XBYY','BXXY']
// 输出：3
// 过程：
// X X X X          Y X X X          Y X X B          Y X X B
// X X X X    ==>   X Y X X    ==>   X Y B X    ==>   X Y G X
// X X X X          X X Y X          X B Y X          X B Y Y
// X X X X          X X X Y          B X X Y          B X X Y 

/* 
 * @param {String ""} str
 * @param {Array []} paint
 * @return {Number}
 */
function paintCount(str, paint) {
  var n = str.split(" ");
  var row = parseInt(n[0]);
  var col = parseInt(n[1]);
  var arr = [];
  var ans = 0;
  for (var i = 0; i < row; i++) {
    var r = paint[i];
    arr[i] = "";
    for (var j = 0, l = r.length; j < l; j++) {
      arr[i] += r[j];
      if (r[j] == "Y") {
        if (arr[i - 1] === undefined || arr[i - 1][j - 1] != "Y" && arr[i - 1][j - 1] != "G") {
          ans++;
        }
      } else if (r[j] == "B") {
        if (arr[i - 1] === undefined || arr[i - 1][j + 1] != "B" && arr[i - 1][j + 1] != "G") {
          ans++;
        }
      } else if (r[j] == "G") {
        if (arr[i - 1] === undefined || arr[i - 1][j - 1] != "Y" && arr[i - 1][j - 1] != "G") {
          ans++;
        }
        if (arr[i - 1] === undefined || arr[i - 1][j + 1] != "B" && arr[i - 1][j + 1] != "G") {
          ans++;
        }
      }
    }
  }
  return ans;
}

console.log(paintCount("4 5",['YXXB','XYGX','XBYY','BXXY']));