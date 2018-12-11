var rs = require("readline-sync")

var num1 = rs.questionInt('Please Enter your First Number: ');
// console.log(num1)
var num2 = rs.questionInt('Please Enter your Second Number: ');
// console.log(num2)
var choice = ['add', 'subtract', 'divide', 'multiply']
var options = [add(), subtract(), divide(), multiply()];

var choiceIndex = rs.keyInSelect(choice, "Which math operator?");
console.log('The result is: ' + options[choiceIndex])


function add(options){
    return (num1 + num2)
}

function subtract(options){
    return (num1 - num2)
}

function divide(options){
    return (num1 / num2)
}

function multiply(options){
    return (num1 * num2)
}
