// Excel表列序号
// 与 Excel表列名称 问题类似。

// 给定一个Excel表格中的列名称，返回其相应的列序号。

// 示例:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var len = s.length;
    var res = 0;
    for(var i = 0;i<len;i++){
        res = res*26+s.charAt(i).charCodeAt()-64;
    }
    return res;
};

var s = "AAA";
console.log(titleToNumber(s));