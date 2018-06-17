// 快乐数
// 写一个算法来判断一个数是不是“快乐数”。

// 一个数是不是快乐是这么定义的：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，或是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

// 案例: 19 是一个快乐数。

// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var digitSquareSum = function(n){
        var sum = 0;
        var tmp;
        while(n){
            tmp = n%10;
            sum += tmp*tmp;
            n = Math.floor(n/10);
        }
        return sum;
    }
    var slow = n;
    var fast = n;
    do{
        slow = digitSquareSum(slow);
        console.log(slow);
        fast = digitSquareSum(fast);
        console.log(fast);
        fast = digitSquareSum(fast);
        console.log(fast);
        console.log(';');
        if(fast === 1){
            return true;
        }
    }while(slow != fast);
    return false;
};

var a = 19;
console.log(isHappy(a));

// var isHappy = function(n) {
//     let ts = 0
//     function fn(m){
//         var res = m.toString().split('').map(a => a * a ).reduce((c,d)=> c + d)
//         ts++
//         if(ts>=10){ return false }
        
//         return (res == 1) ? true: fn(res)
//     }
//     return fn(n)
// };