const scanner = require("prompt-sync")();
const loginAttempt = Number(scanner("Enter number of login attempts: "));


if (loginAttempt >= 3){   
    console.log("Locked");
}

else if(loginAttempt = 2){
    console.log("Warning");
}

else
    console.log("Allowed");
