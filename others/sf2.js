// 用JS计算两个时间相差的小时数

// 题目描述：
// 1. 要比较的两个时间的时间年月日格式为：（YYYY-MM-DD）
// 2. 要比较的两个时间的时间时分秒格式为：（ HH:mm:ss   秒可有可无）
// 3. 当相差的时间分钟在0-29区间时的记为0个小时，相差的时间分钟在30-59区间的记为0.5个小时
// 4. 当其中任意一个参数不能转为时间类型时返回0

// 输入
// 输入两个时间

// 输出
// 输出两者相差的小时数


// 样例输入
// 2018-06-23 11:10
// 2018-06-22 15:30
// 样例输出
// 19.5

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
  console.log(args.join(' '));
}

// set your date
date =`
2018-06-23 15:10
2018-06-33 15:30
`;

// write code here
var a, b;
var getSubHours = (a,b) => {
  let time1 = new Date(a).getTime();
  let time2 = new Date(b).getTime();
  let sub, dec, hour;
  sub = Math.abs(time1 - time2);
  if (!sub) {return 0};
  hour = sub/(1000 * 60 * 60);
  dec =  hour - Math.floor(hour) < 0.5 ? 0 : 0.5;
  return Math.floor(hour) + dec;
};
while((a=read_line())!=null && (b=read_line())!=null){
    let res = getSubHours(a, b);
    print(res)
}