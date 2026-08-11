const scanner = require("prompt-sync")();
const grade = scanner("Enter a grade letter(A-F): ");

if (grade === "A" || grade === "B" || grade === "C" || grade === "D" || grade === "E"){
    console.log("Pass");
}

else if (grade === "F"){
    console.log(Fail);
}

else
    console.log("Invalid");
