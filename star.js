
//for(let row =1; row < 6;){
//    for(let column = 0; column < row; column++){
//        process.stdout.write("*");
//    }
//    console.log("");
//    row++
//}


for(let row =1; row < 6;){
    for(let column = 1; column < row; column++){
        process.stdout.write(" ");
    }
    for(let column = 6; column > row; column--){
        process.stdout.write("*");
    }
    console.log("");
    row++
}




