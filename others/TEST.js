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

add(1, 2)(3)(...[2,3,4])