// 输出正确的执行完成顺序

// list为任务队列，count为可执行窗口，完善queen函数，使其输出正确的执行完成顺序

// 实例
// 输入：
// queen([fun1, fun2, fun3], 2);
// 输出：
// 2
// 3
// 1
// 解释：按队列执行，fun1去窗口1，fun2去窗口2，fun3等待空闲窗口，
// 150ms后fun2执行完成输出2后释放窗口2，fun3使用窗口2，再过100ms执行完成输出3后释放窗口2,
// 再过50ms后fun1执行完成输出1释放窗口1;

function fun1(cb) {
  setTimeout(() => {
      console.log(1);
      cb && cb();
  }, 300);
}

function fun2(cb) {
  setTimeout(() => {
      console.log(2);
      cb && cb();
  }, 150);
}

function fun3(cb) {
  setTimeout(() => {
      console.log(3);
      cb && cb();
  }, 100);
}

function queen(list, count) {
  while (count > 0) {
    if (list.length > 0) {
      var f = list.shift();
      count--;
      let p = new Promise((resolve, reject)=>{
        f(resolve);
      })
      p.then(() => {
        count++;
        return queen(list, count);
      })
    } else {
      return;
    }
  }
}


queen([fun1, fun2, fun3], 2);