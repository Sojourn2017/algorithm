// 采购单

// 题目描述							
// 过年啦！小B高兴的不行了，她收到了很多红包，可以实现好多的愿望呢。
// 小B可是对商店货架上心仪的货物红眼好久了，只因囊中羞涩作罢，
// 这次她可是要大大的shopping一番。小B想去购物时，
// 总是习惯性的把要买的东西列在一个购买清单上，
// 每个物品单独列一行（即便要买多个某种物品），这次也不例外。
// 小B早早的来到了商店，由于她太激动，以至于她到达商店的时候，
// 服务员还没有把各个商品的价签排好，所有的价签还都在柜台上。
// 因此还需要一段时间，等服务器把价签放到对应的商品处，
// 小B才能弄清她的购买清单所需的费用。

// 小B都有些迫不及待了，她希望你能够根据购买清单，
// 帮她算算最好和最坏的情况下所需的费用，你能帮她吗？

// 输入
// 输入中有多组测试数据。
// 每组测试数据的第一行为两个整数n和m（1=＜n, m=＜1000），
// 分别表示价签的数量以及小B的购买清单中所列的物品数。
// 第二行为空格分隔的n个正整数，表示货架上各类物品的价格，
// 每个数的大小不超过100000。随后的m行为购买清单中物品的名称，
// 所有物品名称为非空的不超过32个拉丁字母构成的字符串，
// 保证清单中不同的物品种类数不超过n，且商店有小B想要购买的所有物品。

// 输出
// 对每组测试数据，在单独的行中输出两个数a和b，
// 表示购买清单上所有的物品可能需要的最小和最大费用。

// 输出描述:
// 对每组测试数据，在单独的一行中输出能相互观察到的岗哨的对数。

// 示例
// 输入：
// 6 5
// 3 5 1 6 8 1
// peach
// grapefruit
// banana
// orange
// orange

// 输出：
// 11 30

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
date = `6 5
3 5 1 6 8 1
peach
grapefruit
banana
orange
orange
`;

// write code here
let a, b;
let getCost = (arr1, arr2) => {
	let len1 = arr1.length, len2 = arr2.length, min = 0, max = 0;
    for (let i = 0; i < len2; i++) {
        min += arr2[i]*arr1[i];
      	max += arr2[i]*arr1[len1 - i - 1];
    }
  	return min + ' ' + max;
}
while ((a=readInt())!=null && (b=readInt())!=null) {
  	let arrA = [], arrB = [], obj = {};
	for (let i = 0; i < a; i++) {
    	arrA.push(readInt())
    }
  	arrA = arrA.sort((a,b) => a-b);
  	for (let i = 0; i < b; i++) {
        let item = read_line();
        if (obj[item] != null) {
          obj[item]++;
        } else {
          obj[item] = 1;
        }
    }
  	for (let i in obj) {
        arrB.push(obj[i]);
    }
  	arrB = arrB.sort((a,b) => b - a);
  	print(getCost(arrA,arrB));
}