// 854. K-Similar Strings

// Strings A and B are K-similar (for some non-negative integer K) if we can swap the positions of two letters in A exactly K times so that the resulting string equals B.

// Given two anagrams A and B, return the smallest K for which A and B are K-similar.

// Example 1:

// Input: A = "ab", B = "ba"
// Output: 1
// Example 2:

// Input: A = "abc", B = "bca"
// Output: 2
// Example 3:

// Input: A = "abac", B = "baca"
// Output: 2
// Example 4:

// Input: A = "aabc", B = "abca"
// Output: 2
// Note:

// 1 <= A.length == B.length <= 20
// A and B contain only lowercase letters from the set {'a', 'b', 'c', 'd', 'e', 'f'}


/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var kSimilarity = function(A, B) {
  if (A === B) { return 0; }
  var a = A.split(""); // 将A转换为数组
  var b = B.split(""); // 将B转换为数组
  var stack = [[b,0,0]]; // 用于存放 [当前状态的数组,下一次开始交换的索引,当前已交换的次数] 的堆栈
  var len = a.length;
  var res = len; // 最不理想的状态下(每个字符都需要交换)K值为len
  while (stack.length) { // BFS
    var node = stack.pop();
    var arr = node[0];
    var index = node[1];
    var count = node[2];
    for (var i = index ; i < len; i++) { 
      if(arr[i] !== a[i]) {
        var choice = findStr(a,arr,a[i],i);
        while (choice.length) {
          var newArr = exchange(arr.slice(0),i,choice.pop());
          stack.push([newArr,i+1,count+1]);
        }
        break;
      }
    }
    if (i == len && count < res) { // 选择最小的K值
      res = count; 
    }
  }
  return res;
};

// 用于交换数组内指定索引的值
function exchange(arr,m,n) {
  var tmp = arr[m];
  arr[m] = arr[n];
  arr[n] = tmp;
  return arr;
}

// 用于寻找可以交换的的字符的索引
function findStr(arr1,arr2,s,index) {
  var len = arr2.length;
  var choice = [];
  for (var i = index; i < len; i++) {
    if (arr2[i] == s && arr1[i]!=s) {
      choice.push(i);
    }
  }
  return choice;
}

var a = "abcdeabcdeabcdeabcde";
var b = "aaaabbbbccccddddeeee";
console.log(kSimilarity(a,b));