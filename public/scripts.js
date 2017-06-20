const pluss = "pluss";
const minus = "minus";
const multiply = "multiply";
const divide = "divide";

let result = 0;
let operation = pluss;

const markOperation = () => {
    $("[data-operation=" + operation + "]").addClass("active");
};

$(".number").click((e) => {
    if (operation === pluss) {
        result += Number.parseInt(e.target.innerText);
    } else if (operation === minus) {
        result -= Number.parseInt(e.target.innerText);
    }
    $("#result").text(result);
});

$(".operation").click((e) => {
    operation = e.target.dataset.operation;
    $(".operation").removeClass("active");
    markOperation();
});

markOperation();