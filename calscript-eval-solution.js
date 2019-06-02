function evaluate(str) {
 return eval(str);
}

function display() {
  let disValue = "";
  let valStr = "";
  let endResult;
  let dis = document.getElementById("display");
  let sub = document.getElementById("sub");
  let multiply = document.getElementById("multiply");
  let divide = document.getElementById("divide");

  clear.addEventListener("click", () => {
    disValue = "";
    endResult = "";
    valStr = "";
    dis.innerHTML = "0";
  });

  one.addEventListener("click", () => {
    disValue += "1";
    valStr += "1";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  two.addEventListener("click", () => {
    disValue += "2";
    valStr += "2";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  three.addEventListener("click", () => {
    disValue += "3";
    valStr += "3";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  four.addEventListener("click", () => {
    disValue += "4";
    valStr += "4";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  five.addEventListener("click", () => {
    disValue += "5";
    valStr += "5";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  six.addEventListener("click", () => {
    disValue += "6";
    valStr += "6";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  seven.addEventListener("click", () => {
    disValue += "7";
    valStr += "7";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  eight.addEventListener("click", () => {
    disValue += "8";
    valStr += "8";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  nine.addEventListener("click", () => {
    disValue += "9";
    valStr += "9";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  zero.addEventListener("click", () => {
    disValue += "0";
    valStr += "0";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  decimal.addEventListener("click", () => {
    disValue += ".";
    valStr += ".";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  plus.addEventListener("click", () => {
    disValue += "+";
    valStr += "+";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  sub.addEventListener("click", () => {
    disValue += "-";
    valStr += "-";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  multiply.addEventListener("click", () => {
    disValue += "*";
    valStr += "*";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  divide.addEventListener("click", () => {
    disValue += "/";
    valStr += "/";
    disValue = checkSize(disValue);
    dis.innerHTML = disValue;
  });

  equal.addEventListener("click", () => {
    endResult = evaluate(valStr);
    dis.innerHTML = endResult;
    valStr = "";
    disValue = "";
  });
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
