const scanner = require("prompt-sync")();
const firstNumber = Number(scanner("Enter first number: "));
const secondNumber = Number(scanner("Enter second number: "));
const thirdNumber = Number(scanner("Enter third number: "));


if (firstNumber + secondNumber === thirdNumber){
    console.log("Right Triangle");
}

else
    console.log("Not Right");
