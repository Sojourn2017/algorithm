// 保卫方案

// 题目描述
// 战争游戏的至关重要环节就要到来了，这次的结果将决定王国的生死存亡，
// 小B负责首都的防卫工作。首都位于一个四面环山的盆地中，
// 周围的n个小山构成一个环，作为预警措施，小B计划在每个小山上设置一个观察哨，
// 日夜不停的瞭望周围发生的情况。 一旦发生外地入侵事件，山顶上的岗哨将点燃烽烟，
// 若两个岗哨所在的山峰之间没有更高的山峰遮挡且两者之间有相连通路，
// 则岗哨可以观察到另一个山峰上的烽烟是否点燃。由于小山处于环上，
// 任意两个小山之间存在两个不同的连接通路。
// 满足上述不遮挡的条件下，一座山峰上岗哨点燃的烽烟至少可以通过一条通路被另一端观察到。
// 对于任意相邻的岗哨，一端的岗哨一定可以发现一端点燃的烽烟。 
// 小B设计的这种保卫方案的一个重要特性是能够观测到对方烽烟的岗哨对的数量，
// 她希望你能够帮她解决这个问题。 

// 输入描述:
// 输入中有多组测试数据，每一组测试数据的第一行为一个整数n(3<=n<=10^6),
// 为首都周围的小山数量，第二行为n个整数，依次表示为小山的高度h（1<=h<=10^9）.

// 输出描述:
// 对每组测试数据，在单独的一行中输出能相互观察到的岗哨的对数。

// 示例
// 输入：
// 5
// 1 2 4 5 3

// 输出：
// 7

/* 
 * util 牛客网
 */
var date = ""
var patt = /(.+(?=\n))/g;

function readline() {
  var line = patt.exec(date)
  return line ? line[1] : line;
}
var print = function (s) {
  console.log(s);
}

// set your date
date = '10\n6 3 6 7 1 7 4 3 1 1\n';

// write code here
var a;
var foo = (arr, index) => {
  let count = 0;
  let = len = arr.length - 1;
  let val = arr[index];
  let [L, R, m] = [index, index, 10 ** 9];
  for (let i = 0; i < len; i++) {
    R = R < len ? ++R : 0;
    let sub = val - arr[R];
    if (sub < 0) {
      if (i == 0 || sub <= m) {
        count++;
      }
      flag = true;
      break;
    } else {
      if (sub <= m) {
        count++;
        m = sub;
      } else {
        if (i == len - 1) {
          while (arr[R] < val) {
            R = R > 0 ? --R : len;
          }
        }
        continue;
      }
    }
  }
  m = 10 ** 9;
  for (let i = 0; i < len; i++) {
    L = L > 0 ? --L : len;
    if (L == R) break;
    let sub = val - arr[L];
    if (sub < 0) {
      if (i == 0 || sub <= m) {
        count++;
      }
      break;
    } else {
      if (sub <= m) {
        count++;
        m = sub;
      } else {
        continue;
      }
    }
  }
  return count;
}
while (a = parseInt(readline())) {
  var arr = readline().split(' ');
  var sum = 0;
  var len = arr.length;
  var flag = 0;
  if (a > 0) {
    var first = parseInt(arr[0])
  }
  for (let i = 1; i < len; i++) {
    var val = parseInt(arr[i]);
    if (val == first) flag++;
    arr[i] = val;
  }
  // 若山峰等高直接输出
  if (flag == a - 1) {
    print((a * (a - 1) / 2));
    continue;
  }

  for (let i = 0, l = arr.length; i < l; i++) {
    sum += foo(arr, i);
  }
  print(sum / 2);
}