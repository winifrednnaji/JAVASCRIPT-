const scanner = require ("prompt-sync")();
const firstLength = scanner("Enter first length: ");
const secondLength = scanner("Enter second length: ");
const thirdLength = scanner("Enter third length: ");

if (firstLength === secondLength && firstLength === thirdLength && secondLength === thirdLength){
    console.log("Equilateral");
}
else if (firstLength === secondLength || firstLength === thirdLength || secondLength === thirdLength){
    console.log("Isosceles");
    
}
else 
    console.log("Scalene");
