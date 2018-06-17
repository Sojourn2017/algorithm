// 数组去重

function removeRepeat(array) {  
  if (Array.from && Set) {  
    return Array.from(new Set(array));  
  } else {  
    var result = [];  
    for(var i=0; i<array.length; i++){  
      var flag = true;  
      for(var j=0; j<result.length; j++){  
        if(array[i] == result[j]){  
          flag = false;  
          break;  
        };  
      };   
      if(flag){  
        result.push(array[i]);  
      };  
    };  
    return result;  
  }  
}  
console.log(removeRepeat([1,2,3,4,5,1,2,3]));