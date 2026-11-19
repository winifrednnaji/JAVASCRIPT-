//const q = ["Ada", "Tunde"];
//q.push("Zainab");
//console.log(q.shift());
//q.unshift("Ife");
//console.log(q.pop());
//console.log(q);
//
//
//
//const a = ["Ada", "Tunde"];
//const copy = [...a];
//copy.push("Zainab");
//console.log(a);
//console.log(copy);
//const same = a;
//console.log(same === a, copy === a);
//
//
//
//
//
//let number = 123;
//
//
//let reverse = 0;
//
//while (number != 0){
//    let lastDigit = number % 10;
//    
//    reverse = (reverse * 10) + lastDigit
//    
//    number = Math.floor(number/10);
//}
//
//console.log(reverse);
//
//
//
//
//
//let number = [1,2,3];
//
//
//
//
//
//
//function range(firstNumber, lastNumber){
//    let numbers = [];
//    for(let count = firstNumber; count <= lastNumber; count++){
//        numbers.push(count);
//    }    
//    
//    return numbers;
//    
//}
//
//
//function sumRange(firstNumbers, lastNumbers){
//    let sum = 0;
//    for(let count = firstNumbers; count <= lastNumbers; count++){
//        sum += count;
//    }    
//    
//    return sum;
//    
//}
//
//
//
//
//function reverseArray (numbers){
//    let reversedArray = [];
//    for(let count = numbers.length-1; count >= 0; count--){
//        reversedArray.push(numbers[count]);
//    }
//    
//    return reversedArray;
//
//}
//
//
//
//
//function sameArrayReverse(numberss){
//    let firstNumberss = 0;
//    let lastNumberss = numberss.length-1;
//    
//    while (firstNumberss < lastNumberss){
//        let temp = numberss[firstNumberss];
//        numberss[firstNumberss] = numberss[lastNumberss];
//        numberss[lastNumberss] = temp;
//        
//        firstNumberss++;
//        lastNumberss--;
//    }
//    return numberss;
//    
//}
//
//
//
//
//
//
//let firstNumber = 1;
//let lastNumber = 5;
//console.log(range(firstNumber, lastNumber));
//
//
//let firstNumbers = 1;
//let lastNumbers = 10;
//console.log(sumRange(firstNumbers, lastNumbers));
//
//
//let numbers = [1,2,3];
//console.log(reverseArray(numbers));
//
//
//let numberss = [1,2,3,4,6];
//console.log(sameArrayReverse(numberss));
//
//
//
//const student = {
//    name: "Ada",
//    age: 19,
//    course: "JavaScript"
// };
//console.log(student.name);
//console.log(student.age);
//console.log(student.grade);
//    
//    
//    
//
//const students = {
//    name: "Ada",
//    greet() {
//        console.log("Hi, I am " + this.name);
//   }
// 
//};    
//
//students.greet();
//console.log(typeof student.greet);
//



//
//const studentss= [
//    { name: "Ada", score: 90 },
//    { name: "Tunde", score: 72 }
//];
//console.log(studentss[1].name);
//for (const s of studentss) {
//    console.log(s.name + ": " + s.score");
//}
//




const a = { x: 1 };
const b = { x: 1 };
const c = a;
console.log( a === b );
console.log( a === c );
console.log(JSON.stringify(a) === JSON.stringify(b));

