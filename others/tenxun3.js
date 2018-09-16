/* 
 * util 牛客网
 */
var date = ""
var patt = /(.+(?=\n))/g;

function readline() {
  var line = patt.exec(date)
  return line ? line[1] : line;
}
var print = function (s) {
  console.log(s);
}

// set your date
date = `
aaa
aa
`;

// write code here
var s = readline();
var p = readline().split("");
var arr = [p.join('')];
var len = p.length;
var j = len - 1;
for (let i = 0; i < len; i++) {
  if (p[i] == p[j]) {
    var s = p.concat(p.slice(i));
    arr.push(s);
  }
}
for (let i = 0, l = arr.length; i < l; i++) {
  var r = new RegExp('(' + arr[i] + ')', g);
  console.log(r.exec(str));
}

print(arr);
