let operator = "";
class Calculator {
  constructor(operator) {
    this.operator = operator;
  }
  delete() {}
  calculate() {}
  validParanthesis() {}
}
function Click(event) {
  console.log("BUtton clicked");
  const display = document.querySelector(".display");
  console.log(event.target.value);
  const target = event.target.value;

  if (target === "=") {
    //Checking for validity of paranthesis
    if (!validParanthesis(display.innerText)) {
      display.innerText = "SYNTAX ERROR";
      return;
    }
  }

  if (["*", "/", "+", "-"].includes(event.target.value)) {
    operator = event.target.value;
  }

  if (target === "backspace") {
    if (display.innerText === "SYNTAX ERROR") {
      display.innerText = "";
      return;
    }
    let text = display.innerText;
    display.innerText = text.slice(0, -1);
    return;
  }

  if (display.innerText === "SYNTAX ERROR") {
    display.innerText = target;
  }

  if (!target) {
    console.log("Clicked Clear");
    display.innerText = "";
    return;
  }

  // if (!operator && !["*", "/", "+", "-"].includes(event.target.value)) {
  //   const val = display.innerText;
  //   display.innerText = val + event.target.value;
  // }
  display.innerText += event.target.value;
}

function validParanthesis(string) {
  if (!string) return true;
  let arr = Array.from(string);
  if (!arr.some((c) => c === "(" || c === ")")) {
    return true;
  }
  console.log("HERE", arr);
  let stack = [];
  for (let c of arr) {
    if (!stack || c == "(") {
      stack.push(c);
    } else if (c == ")" && stack.at(-1) == "(") {
      stack.pop();
    } else {
      return false;
    }
  }
  console.log("GOT IT HERE............");
  return true;
}
