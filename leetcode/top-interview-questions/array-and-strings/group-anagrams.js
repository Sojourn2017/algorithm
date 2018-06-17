// 字谜分组
// 给定一个字符串数组，将相同字谜组合在一起。（字谜是指颠倒字母顺序而成的字）

// 例如，给定 ["eat", "tea", "tan", "ate", "nat", "bat"]，返回：

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
 

// 注意：所有的输入都是小写的。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var arr = [];
var len = strs.length;
var res = [];
for (var i = 0; i<len; i++) {
    arr[i] = [0];
    arr[i].push(strs[i]);
    var temp =  strs[i].split("");
    for (var j = 0; j<temp.length; j++) {   
        arr[i][0] += Math.pow(temp[j].charCodeAt(),4);
    }
}
arr.sort();
res[0] = [arr[0][1]];
for (var i = 1; i<len; i++) {
    if (arr[i-1][0] === arr[i][0]) {
        if (res[res.length-1] instanceof Array){
            res[res.length-1].push(arr[i][1]);
        }else{
            res[res.length-1] = [res[res.length-1]];
            res[res.length-1].push(arr[i][1]);
        }
    }else{
            res.push([arr[i][1]]);
    }
}
return res.sort();
};

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
var a = ["methodologies"];
console.log(groupAnagrams(a));