var str = "/\d+/g"
// 生成正则表达式，核心函数
function createRegex(regex) {
  try {
    if (regex[0] == "/") {
      regex = regex.split("/");
      regex.shift();
      var flags = regex.pop();
      regex = regex.join("/");
      regex = new RegExp(regex, flags);
    } else {
      regex = new RegExp(regex, "g");
    }
    return regex;
  } catch(e) {
    errBox.innerHTML = "无效的正则表达式";
    return false;
  }
}
console.log((str))
// 作者：老姚
// 链接：https://juejin.cn/post/6844903487155732494
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。