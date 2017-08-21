const pluss = "pluss";
const minus = "minus";
const multiply = "multiply";
const divide = "divide";

const textToSign = {
  pluss: "+",
  minus: "-"
};

let numbers = [];
let operations = [];
let operation = pluss;

const markOperation = () => {
  $("[data-operation=" + operation + "]").addClass("active");
};

$(".number").click((e) => {
  if (numbers.length > 0) {
    operations.push(operation);
  }
  numbers.push(Number.parseInt(e.target.innerText));

  var result = "";
  var numberValue = 0;

  numbers.forEach((number, index) => {
    result += number.toString();
    if (index === 0) {
      numberValue = number;
    } else {
      if (operations[index - 1] === pluss) {
        numberValue += number;
      } else if (operations[index - 1] === minus) {
        numberValue -= number;
      }
    }
    if (index === numbers.length - 1) {
      result += " = ";
    } else {
      result += " " + textToSign[operations[index]] + " ";
    }
  });

  $("#result").text(result + numberValue);
});

$(".operation").click((e) => {
  operation = e.target.dataset.operation;
  $(".operation").removeClass("active");
  markOperation();
});

$(".clear").click((e) => {
  numbers = [];
  operations = [];
  $("#result").text(0);
});

markOperation();