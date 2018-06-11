// 分数到小数
// 给定两个整数，分别表示分数的分子和分母，返回字符串格式的小数。

// 如果小数部分为循环小数，则将重复部分括在括号内。

// 例如，

// 给出 分子 = 1， 分母 = 2，返回 "0.5".
// 给出 分子 = 2， 分母 = 1，返回 "2".
// 给出 分子 = 2， 分母 = 3，返回 "0.(6)".

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  var integer = 0;
  var decimal = "";
  var arr = [];
  var flag = false;
  var loop;
  var result;
  if(denominator === 0){return false;}
  if(numerator * denominator < 0){flag = true;}
  if(numerator < 0){numerator = -numerator;}
  if(denominator < 0){denominator = -denominator;}  
  if(numerator >= denominator){
    integer = Math.floor(numerator/denominator);
    numerator = numerator%denominator;    
  }
  for(var i = 0; i < 19; i++){
    if(numerator === 0){break;}
    if(arr.indexOf(numerator) === -1){
      arr.push(numerator);
    }else{
      loop = decimal.substring(arr.indexOf(numerator),decimal.length);
      decimal = `${decimal.substring(0,arr.indexOf(numerator))}(${loop})`;
      result = `${integer}.${decimal}`;
      return flag ? `-${result}` : result;
    }
    decimal += `${Math.floor(numerator*10/denominator)}`;
    numerator = numerator*10%denominator; 
  }
  result = decimal === "" ? `${integer}` : `${integer}.${decimal}`;
  return flag ? `-${result}` : result;
};

console.log(fractionToDecimal(-22,-2));