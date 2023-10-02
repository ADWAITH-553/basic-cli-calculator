"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstInput = (0, readline_sync_1.question)('enter first num');
    console.log('enter only operators: + - * /');
    var operator = (0, readline_sync_1.question)('\nenter the operator');
    var secondInput = (0, readline_sync_1.question)('\nenter the second num');
    var validInput = isNumber(firstInput) && isOperator(operator) && isNumber(secondInput);
    if (validInput) {
        var firstNum = parseInt(firstInput);
        var secondNum = parseInt(secondInput);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('enter validinputs');
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+': return firstNum + secondNum;
        case '-': return firstNum - secondNum;
        case '*': return firstNum * secondNum;
        case '/': return firstNum / secondNum;
        default:
            console.log('error');
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var num = parseInt(str);
    var isNum = !isNaN(num);
    return isNum;
}
main();
