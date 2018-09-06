// JS流程控制

// 创建一个Hero类,实现以下功能：

// run: Hero('Mike');
// output: 
// 'Hi! This is Mike!'

// run: Hero('Mike').kill(1).recover(30);
// output:
// 'Hi! This is Mike!'
// 'Kill 1 bug;'
// 'Recover 30 bloods;'

// run: Hero('Mike').sleep(10).kill(2);
// output:
// 'Hi! This is Mike!'
// (Waiting for 10 seconds...)
// 'Kill 2 bugs;'

// var HERO = {};

// function H() {
//   this.timer = 0;
// }

// HERO.H = function () {
//   return new H();
// }

// HERO.init = function (name) {
//   console.log('Hi! This is ' + name + '!');
//   return HERO.H();
// }

// HERO.init.fn = {
//   kill: function (num) {
//     var _this = this;
//     if (_this.timer) {
//       setTimeout(function () {
//         console.log('Kill ' + num + (num > 1 ? ' bugs;' : ' bug;'));
//         return _this;
//       }, _this.timer);
//     } else {
//       console.log('Kill ' + num + (num > 1 ? ' bugs;' : ' bug;'));
//       return _this;
//     }
//   },
//   recover: function (num) {
//     var _this = this;
//     if (_this.timer) {
//       setTimeout(function () {
//         console.log('Recover ' + num + (num > 1 ? ' bloods;' : ' blood;'));
//         return _this;
//       }, _this.timer)
//     } else {
//       console.log('Recover ' + num + (num > 1 ? ' bloods;' : ' blood;'));
//       return _this;
//     }
//   },
//   sleep: function (num) {
//     var _this = this;
//     var delay = 1000 * num;
//     _this.timer = delay;
//     return _this;
//   }
// }

// HERO.H.prototype = H.prototype = HERO.init.fn;

// var Hero = HERO.init;

class HERO {
  constructor (name) {
    console.log('Hi! This is ' + name + '!');
    this.timer = 0;
  }
  kill(num) {
    if (this.timer) {
      setTimeout(() => {
        console.log('Kill ' + num + (num > 1 ? ' bugs;' : ' bug;'));
        return this;
      }, this.timer);
    } else {
      console.log('Kill ' + num + (num > 1 ? ' bugs;' : ' bug;'));
      return this;
    }
  }
  recover(num) {
    if (this.timer) {
      setTimeout(function () {
        console.log('Recover ' + num + (num > 1 ? ' bloods;' : ' blood;'));
        return _this;
      }, this.timer)
    } else {
      console.log('Recover ' + num + (num > 1 ? ' bloods;' : ' blood;'));
      return this;
    }
  }
  sleep(num) {
    var delay = 1000 * num;
    this.timer = delay;
    return this;
  }
}

var H = function (name) {
  return new HERO(name);
}

var Hero = H;

Hero('Mike');

Hero('Mike').kill(1).recover(30);

Hero('Mike').sleep(10).kill(2); 