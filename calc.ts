import { question } from "readline-sync";
function main():void
{
    const firstInput:string=question('enter first num');
    console.log('enter only operators: + - * /')
    const operator:string=question('\nenter the operator');
    const secondInput:string=question('\nenter the second num');
    const validInput:boolean=isNumber(firstInput) && isOperator(operator) && isNumber(secondInput)
    if(validInput)
    {
        const firstNum: number =parseInt(firstInput);
        const secondNum: number=parseInt(secondInput);
        const result= calculate(firstNum,operator,secondNum);
        console.log(result);
    }
    else
    {
        console.log('enter validinputs')
    }
}
function calculate(firstNum,operator,secondNum)
{
    switch(operator)
    {
        case '+': return firstNum + secondNum;
        case '-': return firstNum - secondNum;
        case '*': return firstNum * secondNum;
        case '/': return firstNum / secondNum;
        default:
            console.log('error');
    }
}
function isOperator(operator: string):boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str: string):boolean
{
    const num=parseInt(str);
    const isNum:boolean=!isNaN(num);
    return isNum;
}
main();