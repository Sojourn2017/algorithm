// 最大映射

// 有 n 个字符串，每个字符串都是由 A-J 的大写字符构成。
// 现在你将每个字符映射为一个 0-9 的数字，不同字符映射为不同的数字。
// 这样每个字符串就可以看做一个整数，
// 唯一的要求是这些整数必须是正整数且它们的字符串不能有前导零。
// 现在问你怎样映射字符才能使得这些字符串表示的整数之和最大？

// 输入描述:
// 每组测试用例仅包含一组数据，每组数据第一行为一个正整数 n ， 
// 接下来有 n 行，每行一个长度不超过 12 且仅包含大写字母 A-J 的字符串。
// n 不大于 50，且至少存在一个字符不是任何字符串的首字母。

// 输出描述:
// 输出一个数，表示最大和是多少。

// 输入例子1:
// 2
// ABC
// BCA

// 输出例子1:
// 1875

/* 
 * util 牛客网
 */
var date = ""
var patt = /(.+(?=\n))/g;

function readline() {
  var line = patt.exec(date)
  return line ? line[1] : line;
}
var print = function () {
  console.log.apply(this, arguments);
}

// set your date
date = `
50
IAAAHAHCJGBJ
FAAABCABGIFF
FABBJIAGICCG
CAJEAIHBCFIF
CAEBJCGFEEJC
JAJEFADFHHDH
FAFCEDDGBIIH
EACHGBAJJICF
CACECDFDBFFC
BAJADCBDDDCE
JAEFEDICECGH
FAAHGHABHFIC
CAIIAJDHBCDJ
FAIHHJGDEBHA
DAFCHCCDIIDG
HAHAHIIGADGI
IAJECCIDJABD
EACFDDDCCBBA
IAFJFIDFEDGG
IAGIJBIGDIFB
DAFHBFCBJGDB
EACIBEIEGHAH
FAJDHJBIBBCC
BABIACEFHGDJ
JAEAHBABBDIB
FAHJCEAFHHAF
DAHAFCBAJCHE
IAEFCFCIJBBA
FAGEIEJFGGIH
CADBHGCGAJCA
EAJHGGGCCBBC
GAHFEHFHIJAI
CAADICHAJACG
CADFFHIHFCAF
EAIFFIFHAJGI
IAICCJIACEDE
CABJIBGECJEA
DAFGIEFBDGDG
FACDAIIJCJJF
BAAJHJFIHGHD
BAIDCEABEHDD
JAGHGICFHDAI
GACBGJBEJCAJ
GAJDEDBGGFJF
DAHAFEHEJHJD
JAJDEDGJBCBI
CAFGFJEIGFAI
CAHGDEDACGDI
CABACDGJDJHJ
EAFAIDAAFAAI
`;

// write code here
let n = readline();
let arr = [];
let obj = {};
for (let i = 0; i < n; i++) {
    let str = readline();
    let count = str.length,
        len = str.length;
    while (count) {
        count--;
        if (obj[str[count]]) {
            obj[str[count]][0] += 10 ** (len - count - 1);
        } else {
            obj[str[count]] = [10 ** (len - count - 1)];
        }
        if(count == 0) {
          obj[str[count]][1] = 1;
        }
    }
}
for (let item in obj) {
    arr.push(obj[item]);
}
arr.sort((a, b) => b[0] - a[0]);
if (arr.length > 9) {
  let tmp = arr[arr.length - 1]
  for (let i = arr.length - 1; i > 0; i--) {
    if(tmp[1]) {
      [tmp, arr[i - 1]] = [arr[i - 1], tmp];
    } else {
      arr[arr.length - 1] = tmp;
      break;
    }
  }
}
let num = 9;
let res = arr.reduce((sum, cur) => {
  return sum + cur[0] * num--;
}, 0)
print(res);