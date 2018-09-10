// 修路

// 题目描述：
// A国有n个城市，他们计划修建n-1条长度为1的道路连接两个城市，
// 城市规划已经给出，最终使得n个城市互相连通，
// 从i城市到j城市有且只有一条唯一路径。
// 有一家施工队计划承包两段道路的修建工作，
// 要求这两段道路不经过相同的城市(包括路径端点)，
// 他们可以获得的利润是两段道路长度的乘积，现在要使得利润最大化，
// 问最大能获得多少利润。

// 输入
// 输入共有n行，第一行包含一个整数n，表示城市的数量。（n<=200）
// 接下来有n-1行，每行有两个整数,a,b,表示在a城市和b城市之间存在一条长度为1的道路。

// 输出
// 输出包含一行，表示最多可以获得的利润是多少

// 样例输入
// 4
// 1 2
// 2 3
// 3 4
// 样例输出
// 1

// Hint
// 输入样例2
// 6
// 1 2
// 2 3
// 2 4
// 5 4
// 6 4

// 输出样例2
// 4

// 样例解释
// 样例2应该选取1-2-3和5-4-6,这样一来两条道路的长度都为2，利润最大为2*2=4.

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
date = `
8
1 8
1 2
2 3
3 4
4 5
5 6
6 7
`;

// write code here
let a;
// 合并有序数组
let merge = (arr1, arr2) => {
  let arr = [];
  let [i, j, len1, len2] = [0, 0, arr1.length, arr2.length];
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      arr.push(arr2[j]);
      j++;
    } else {
      arr.push(arr2[j]);
      j++;
      i++;
    }
  }
  while (i < len1) {
    arr.push(arr1[i]);
    i++;
  }
  while (j < len2) {
    arr.push(arr2[j]);
    j++;
  }
  return arr;
}
// 判断两路是否有交点
let isIntersect = (road1, road2) => {
  let [i, j, len1, len2] = [0, 0, road1.length, road2.length];
  while (i < len1 && j < len2) {
    if (road1[i] < road2[j]) {
      i++;
    } else if(road1[i] > road2[j]) {
      j++;
    } else {
      return true;
    }
  }
  return false;
}
let canLink = (road1, road2) => {
  if (road1 == 0 || road2 == 0) return false;
  let last1 = road1[road1.length - 1];
  let last2 = road2[road2.length - 1];
  return  last1 == road2[0] || road1[0] == last2 
    || road1[0] == road2[0] || last1 == last2;
}
// 连接相邻的两条路
let link = (road1, road2) => {
  if (road1 == 0) return road2;
  return canLink(road1, road2)
    ? merge(road1, road2)
    : road1;
}
// 递归
let resolve = (arr, index, road1, val1, road2, val2) => {
  if (road1 != null && road2 != null && isIntersect(road1, road2)) {
    return 0;
  }
  let len = arr.length;
  if (index >= len) {
    let val = val1*val2;
    if (val == 9) {
      console.log('road');
      console.log(road1);
      console.log(road2);
      console.log(val);
    }
    return val;
  }
  let newRoad = arr[index];
  let newRoad1 = link(road1, newRoad);
  let newRoad2 = link(road2, newRoad);
  return Math.max( resolve(arr, index + 1, road1, val1, road2, val2),
  resolve(arr, index + 1, newRoad1, newRoad1.length - 1, road2, val2),
  resolve(arr, index + 1, road1, val1, newRoad2, newRoad2.length - 1));
}
// 处理输入
while ((a = readInt()) != null) {
  let arr = [],
    city1, city2;
  for (let i = 0, l = a - 1; i < l; i++) {
    city1 = readInt();
    city2 = readInt();
    // 编号小的城市在前
    if (city1 < city2) {
      arr.push([city1, city2]);
    } else {
      arr.push([city2, city1]);
    }
  }
  var res = resolve(arr, 0, 0, 0, 0, 0);
  print(res);
}