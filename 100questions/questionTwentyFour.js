const scanner = require("prompt-sync")();
const height = Number(scanner("Enter height: "));
const weight = Number(scanner("Enter weight: "));


let bmi = weight/(height*height);
if (bmi <= 18.5){   
    console.log("Underweight");
}

else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("Healthy Weight");
}

else if(bmi >= 25.0 && bmi <= 29.9){
    console.log("Overweight");
}

else
    console.log("Obese");
