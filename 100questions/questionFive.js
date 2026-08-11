const scanner = require("prompt-sync")();
const firstNumber = scanner("Enter first number: ");
const secondNumber = scanner("Enter second number: ");
const thirdNumber = scanner("Enter third number: ");


let largest = firstNumber;

if (secondNumber > largest){
    (largest = secondNumber);
 
    }

if (thirdNumber > largest){
    (largest = thirdNumber);
 
    }
    
console.log("largest numbr is: " + largest);
