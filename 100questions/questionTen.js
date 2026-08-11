const scanner = require("prompt-sync")();
const firstNumber = Number(scanner("Enter first number: "));
const secondNumber = Number(scanner("Enter second number: "));

let sum = firstNumber + secondNumber;
if (sum > 0){
    console.log("positive");
}
else if (sum < 0){
    console.log("negative");
}
else 
    console.log("zero");
