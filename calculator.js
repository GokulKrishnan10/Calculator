const operator = "";
function Click(event) {
  console.log("BUtton clicked");
  const display = document.querySelector(".display");
  console.log(event.target.value);
  // if (["*", "/", "+", "-"].includes(event.target.value)) {
  //   operator = event.target.value;
  // }
  const target = event.target.value;
  if (display.innerText === "SYNTAX ERROR") {
    display.innerText = target;
  }
  if (!target) {
    console.log("Clicked Clear");
    display.innerText = "";
    return;
  }
  if (target === "=") {
    //Checking for validity of paranthesis
    if (!validParanthesis(display.innerText)) {
      display.innerText = "SYNTAX ERROR";
    }
    return;
  }
  // if (!operator && !["*", "/", "+", "-"].includes(event.target.value)) {
  //   const val = display.innerText;
  //   display.innerText = val + event.target.value;
  // }
  display.innerText += event.target.value;
}
function validParanthesis(string) {
  let arr = [];
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (char == "(" || char == ")") arr.push(char);
  }
  if (!arr) return true;
  for (let c in arr) {
    if (!stack || c == "(" || c == "{" || c == "[") {
      stack.push(c);
    } else if (c == ")" && stack.peek() == "(") {
      stack.pop();
    } else if (c == "}" && stack.peek() == "{") {
      stack.pop();
    } else if (c == "]" && stack.peek() == "[") {
      stack.pop();
    } else {
      return false;
    }
  }
  return true;
}
