// 字符流中第一个不重复的字符

// 题目描述
// 请实现一个函数用来找出字符流中第一个只出现一次的字符。
// 例如，当从字符流中只读出前两个字符"go"时，
// 第一个只出现一次的字符是"g"。
// 当从该字符流中读出前六个字符“google"时，
// 第一个只出现一次的字符是"l"。
// 输出描述:
// 如果当前字符流没有存在出现一次的字符，返回#字符。

// 示例：
// 输入: 'google'
// 输出: 'ggg#ll'

//Init module if you need
function Init() {
  this.map = {};
  this.stream = [];
  this.index = 0;
}
//Insert one char from stringstream
function Insert(ch) {
  if (typeof ch === 'string') {
    let [map, stream] = [this.map, this.stream];
    map[ch] = map[ch] > 0 ? ++map[ch] : 1;
    stream.push(ch);
  }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
  let [map, stream, index] = [this.map, this.stream, this.index];
  let len = stream.length;
  for (let i = index; i < len; i++) {
    let ch = stream[i];
    if (map[ch] == 1) {
      this.index = i;
      return ch;
    }
  }
  this.index = len;
  return '#';
}

var s = 'google';
Init();
for (let i = 0, len = s.length; i < len; i++) {
  Insert(s[i]);
  console.log(FirstAppearingOnce());
}
