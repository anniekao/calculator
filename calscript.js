function add(x, y){
  let result = x + y;
  return result;
}

function sub(x, y){
  let result = x - y;
  return result;
}

function multiply(x, y){
  let result = x*y;
  return result;
}

function divide(x, y){
  let result = x/y;
  return result;
}

function operate(x, y, op) {
  if (op == "+") {
    console.log(add(x,y))
  }
  else if (op == "-") {
    console.log(sub(x,y))
  }
  else if (op == "*") {
    console.log(multiply(x,y))
  }
  else if (op == "/") {
    console.log(divide(x,y))
  }
}

let x = 6;
let y = 2;
let op = "-"

operate(x,y,op)
