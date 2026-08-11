const scanner = require("prompt-sync")();
const balance = Number(scanner("Enter balance: "));


if (balance < 100){   
    console.log("Low");
}

else if(balance >= 100 && balance <= 1000){
    console.log("Medium");
}

else
    console.log("High");
