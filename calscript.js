function precedence(op){
  if (op == "+" || op == "-"){
    return 1;
  } else if (op == "*" || op == "/"){
    return 2;
  }
}


// Takes in an expression, sorts it into two stacks -- one for operands/values and one for operators
// It should then return the result of the expression, taking into account PEMDAS/operator precedence
function evaluate(tokens) {
  // stack for operand values
  var values = [];
  // stack for operators
  var ops = [];
  // variable for while loop
  var i = 0;

  // loop to sort tokens into operands and operators
  while (i < tokens.length) {
    if (/\d/.test(tokens[i])){
      var val = 0;
        while ( i < tokens.length && /\d/.test(tokens[i])){
          val += tokens[i];
          i += 1;
        }
      values.push(parseInt(val));
    } else if (/\D/.test(tokens[i])){
      while(precedence(ops[ops.length-1]) >= precedence(tokens[i])){
        val1 = values.pop();
        val2 = values.pop();
        op = ops.pop();

        values.push(operate(val1, val2, op));
      }
      ops.push(tokens[i]);
      i += 1;
    } 
  }

  // loop to apply operators to values, calling operate function and returning a result
  while (ops.length !== 0){
    val1 = values.pop();
    val2 = values.pop();
    op = ops.pop();

    values.push(operate(val1, val2, op));
  }
  return values[0];
}

evaluate("5*66+9");

// Takes in two values and an operator and returns the calculated result
function operate(val1, val2, op){
  if (op == "+") {
    return val1 + val2;
  }
  else if (op == "-") {
    return val1 - val2;
  }
  else if (op == "*") {
    return val1 * val2;
  }
  else if (op == "/") {
    return val1 / val2;
  }
}

function display() {
  let exp = "";
  let endResult;
  let dis = document.getElementById("display");
  let sub = document.getElementById("sub");
  let multiply = document.getElementById("multiply");
  let divide = document.getElementById("divide");

  clear.addEventListener("click", () => {
    exp = "";
    endResult = "";
    dis.innerHTML = "0";
  });

  one.addEventListener("click", () => {
    exp += "1";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  two.addEventListener("click", () => {
    exp += "2";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  three.addEventListener("click", () => {
    exp += "3";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  four.addEventListener("click", () => {
    exp += "4";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  five.addEventListener("click", () => {
    exp += "5";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  six.addEventListener("click", () => {
    exp += "6";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  seven.addEventListener("click", () => {
    exp += "7";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  eight.addEventListener("click", () => {
    exp += "8";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  nine.addEventListener("click", () => {
    exp += "9";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  zero.addEventListener("click", () => {
    exp += "0";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  decimal.addEventListener("click", () => {
    exp += ".";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  plus.addEventListener("click", () => {
    exp += "+";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  sub.addEventListener("click", () => {
    exp += "-";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  multiply.addEventListener("click", () => {
    exp += "*";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  divide.addEventListener("click", () => {
    exp += "/";
    disValue = checkSize(exp);
    dis.innerHTML = exp;
  });

  equal.addEventListener("click", () => {
    endResult = evaluate(exp);
    dis.innerHTML = endResult;
  });
}

function checkSize(exp){
  let resetNum = "";
  if (exp.length > 12) {
    resetNum = disValue[disValue.length-1];
    return resetNum;
    } return exp;
}


display();
