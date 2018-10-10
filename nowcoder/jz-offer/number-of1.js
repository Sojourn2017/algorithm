// 二进制中1的个数

// 题目描述
// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

/**
 * @param {Number} n
 * @return {number}
 */
function NumberOf1(n) {
  let res = 0;
  while(n) {
    res += n & 1;
    n = n >>> 1;
  }
  return res;
}

// function NumberOf1(n)
// {
//     // write code here
//     //-123的二进制表示为-1111011，123的为1111011，因此首先要得到负数二进制的补码表示
//     //其后面部分的补码0000101 = 122的正码1111011按位取反，
//     //这个正码加上前面的0即是再全部按位取反即得-123的补码表示
//     if(n < 0){
//         n = -n;
//         n = n-1;
//         var str = (Array(32).join("0")+n.toString(2)).slice(-32);
//         str = exchange(str);
//     }else{
//         var str = (Array(32).join("0")+n.toString(2)).slice(-32);
//     }

//     return cal(str);
// }
// //计算1的个数
// function cal(str){
//     var sum = 0;
//     for(var i = 0; i < str.length; i++){
//         if(str[i] == 1){
//             sum ++;
//         }
//     }
//     return sum;
// }
// //如果是负数，0变1，1变0
// function exchange(str){
//     var arr = str.split('');
//     for(var i = 0; i < arr.length; i++){
//         (arr[i] == 0)?arr[i] = 1:arr[i] = 0;
//     }
//     str = arr.join("");
//     return str;
// }

var a = NumberOf1(-122)

console.log(a)
