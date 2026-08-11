const scanner = require("prompt-sync")();
const firstNumber = scanner("Enter first number: ");
const secondNumber = scanner("Enter second number: ");

if (firstNumber < secondNumber){
    console.log("increasing");
}

else if (firstNumber > secondNumber){
    console.log("decreasing")
}

else
    console.log("equal");

