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
3
1
5
21
`;

// write code here
var a, b;
var solveMeFirst = (a,b) => a+b;
while((a=readInt())!=null && (b=readInt())!=null){
    let c = solveMeFirst(a, b);
    print(c);
}

let a;
let link = (road1, road2) => {
  if (road1[1] == road2[0]) return [road1[0], road2[1]];
  if (road1[0] == road2[1]) {
    return [road1[0],road2[1]];
  } 
  if (road1[0] == road2[0]) {
    return road1[1] < road2[1] ?  [road1[0],road2[1]] : [road1[0],road1[1]];
  }
  if (road1[1] == road2[1]) {
    return road1[0] < road2[0] ?  [road1[0],road2[1]] : [road2[0],road2[1]];
  }
  return road1;
}
let resolve = (arr, index, road1, val1, road2, val2) => {
  let len = arr.length;
  if (index >= len) {
    return val1 * val2;
  }
  if (road1 === 0) {
    return resolve(arr, index + 1, arr[index], val1 + 1, road2, val2);
  }
  if (road2 === 0) {
    return resolve(arr, index + 1, road1, val1, arr[index], val2 + 1);
  }
  return Math.max(resolve(arr, index + 1, link(road1, arr[index]), val1 + 1, road2, val2),resolve(arr, index + 1, road1, val1, link(road2,arr[index]), val2 + 1));
}
while ((a = readInt()) != null) {
  let arr = [],
    city1, city2;
  for (let i = 0, l = a - 1; i < l; i++) {
    city1 = readInt();
    city2 = readInt();
    if (city1 < city2) {
      arr.push([city1, city2]);
    } else {
      arr.push([city2, city1]);
    }
  }
  var res = resolve(arr, 0, 0, 0, 0, 0);
  print(res);
}