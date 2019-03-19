module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 == 1) {
    return false;
}
let stack = [];
for (let i = 0; i <str.length; i++) {
    let param = false;
    for (let j = 0; j < bracketsConfig.length; j++) {
        if (str[i] == bracketsConfig[j][0]) {
            param = true;
            if (bracketsConfig[j][0] == bracketsConfig[j][1]) {
                if (stack[stack.length - 1] == bracketsConfig[j][0]) {
                    stack.pop();
                    break;
                }
            }
            stack.push(bracketsConfig[j][1]);
            break;
        }
    }
    if (param==false) {
        if (stack.length == 0 || str[i] != stack[stack.length - 1]) {
            return false;
        }
        stack.pop();
    }
}
  return stack.length===0;
}
