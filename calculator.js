const operator = "";
function Click(event) {
  console.log("BUtton clicked");
  const display = document.querySelector(".display");
  console.log(event.target.value);
  // if (["*", "/", "+", "-"].includes(event.target.value)) {
  //   operator = event.target.value;
  // }
  if (!event.target.value) {
    console.log("Clicked Clear");
    display.innerText = "0";
    return;
  }
  // if (!operator && !["*", "/", "+", "-"].includes(event.target.value)) {
  //   const val = display.innerText;
  //   display.innerText = val + event.target.value;
  // }
  display.innerText += event.target.value;
}
