
function StringManipulation(word,letter){

let index = 0;
            
for (let count = 0; count < word.length; count++) {
    if (letter == word[count]) {
        index++;
                 
                   }
             }
            
      return index;
       }
 
 
 
let word = "Happy";
let letter = 'p';

console.log(StringManipulation(word,letter));


