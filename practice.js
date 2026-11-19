
function createValidator(minLength){
    return function String(text){
        return text.length >= minLength;
    
    };
  }

const isUsernameValid = createValidator(5);


const isPasswordValid = createValidator(8);



console.log(isUsernameValid("Alex"));     
console.log(isUsernameValid("Alex123")); 


console.log(isPasswordValid("pass"));     
console.log(isPasswordValid("secret12")); 



