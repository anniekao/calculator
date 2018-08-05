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
  x = Number(x);
  y = Number(y);
  if (op == "+") {
    return add(x,y);
  }
  else if (op == "-") {
    return sub(x,y);
  }
  else if (op == "*") {
    return multiply(x,y);
  }
  else if (op == "/") {
    return divide(x,y);
  }
}

function display() {
  disValue = "";
  dis = document.getElementById("display");
  let sub = document.getElementById("sub");
  let multiply = document.getElementById("multiply");
  let divide = document.getElementById("divide");

  clear.addEventListener("click", () => {
    disValue = "";
    dis.innerHTML = "0";
  })

  one.addEventListener("click", () => {
    disValue += "1";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  two.addEventListener("click", () => {
    disValue += "2";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  three.addEventListener("click", () => {
    disValue += "3";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  four.addEventListener("click", () => {
    disValue += "4";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  five.addEventListener("click", () => {
    disValue += "5";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  six.addEventListener("click", () => {
    disValue += "6";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  seven.addEventListener("click", () => {
    disValue += "7";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  eight.addEventListener("click", () => {
    disValue += "8";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  nine.addEventListener("click", () => {
    disValue += "9";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  zero.addEventListener("click", () => {
    disValue += "0";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  plus.addEventListener("click", () => {
    disValue += "+";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  sub.addEventListener("click", () => {
    disValue += "-";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  multiply.addEventListener("click", () => {
    disValue += "*";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  divide.addEventListener("click", () => {
    disValue += "/";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  })

  equal.addEventListener("click", () => {
    dis.innerHTML = operate(disValue[0],disValue[2], disValue[1]);
  })
}

function checkSize(disValue){
  disValue = disValue.toString();
  let resetNum = "";
  if (disValue.length > 12) {
    resetNum = disValue[disValue.length-1];
    return resetNum;
    } return disValue;
}


display();
