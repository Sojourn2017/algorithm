function add() {
  let sum = 0;
  let arr = [].slice.call(arguments);
	let getSum = (arr) => {
		for (let i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
		} 
		return sum;
	}
  console.log(getSum(arr));
  let f = function () {
    let arr = [].slice.call(arguments);
    console.log(getSum(arr));
    return f;
  }
	return f;
}

// add(1, 2)(3)(...[2,3,4])

var arr = [213,211,229,201,224,201,203,196,203,185,203,191,216,201,203,196,203,203,203,203,198,221,201,196,198,208,218,196,208];
var obj = {};

arr.forEach((v) => {
  if (obj[v]) {
    obj[v]++;
  } else {
    obj[v] = 1;
  }
})

console.log(obj);