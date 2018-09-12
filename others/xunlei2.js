// 学生排序

// 题目描述：
// 给定一个学生列表，学生信息由班级、分数、姓名等组成。请按下列规则对学生列表进行排序：
// 按班级从小到大排
// 班级相同时，按成绩从大到小排序
// 班级和成绩相同时，按原学生列表中的先后顺序排序

// 输入
// 学生列表

// 输出
// 排序后的学生列表


// 样例输入
// [{"name":"张三","class":2,"score":64},{"name":"李四","class":1,"score":80},
// {"name":"王五","class":1,"score":80},{"name":"赵六","class":4,"score":94}]
// 样例输出
// [{"name":"李四","class":1,"score":80},{"name":"王五","class":1,"score":80},
// {"name":"张三","class":2,"score":64},{"name":"赵六","class":4,"score":94}]

/* 
 * util 赛码网
 */
var date = ""
var index = 0;
var pattLine = /(.+(?=\n))/;
function read_line() {
  var line = date.substr(index).match(pattLine);
  // var line = pattLine.exec(date.substr(index));
  index = line ? index + line[1].length + 1 : index;
  return line ? line[1] : line;
}
var pattInt = /(\d+(?=\ |\n))/;
function readInt() {
  var _int = date.substr(index).match(pattInt);
  // var _int = pattInt.exec(date.substr(index))
  index = _int ? index + _int[1].length + 1 : index;
  return _int ? parseInt(_int[1]) : _int;
}
var print = function () {
  var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  console.log(args);
}

// set your date
date =`
[{"name":"张三","class":2,"score":64},{"name":"李四","class":1,"score":80},{"name":"王五","class":1,"score":80},{"name":"赵六","class":4,"score":94}]
`;

// write code here
/*请完成下面这个函数，实现题目要求的功能
当然，你也可以不按照下面这个模板来作答，完全按照自己的想法来 ^-^ 
******************************开始写代码******************************/
// let partition = (arr, L, R) => {
//   let pivot = arr[R];
//   let j = L;
//   for (let i = L; i < R; i++) {
//     if (arr[i].class < pivot.class || arr[i].class === pivot.class && arr[i].score > pivot.score) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       j++;
//     }
//   }
//   [arr[j], arr[R]] = [arr[R], arr[j]];
//   return j;
// }
function sortStudents(students) {
  let len = students.length;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len; j++) {
      if (students[j - 1].class > students[j].class || students[j - 1].class == students[j].class && students[j - 1].score < students[j].score) {
        var temp = students[j - 1];
        students[j - 1] = students[j];
        students[j] = temp;
      }
    }
  }
  return students;
}
_students = JSON.parse(read_line());
sortStudents(_students);
print(JSON.stringify(_students));