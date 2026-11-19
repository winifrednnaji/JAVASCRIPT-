
function addArrays(firstList, secondList){

    const newList  = [];
    newList.length = firstList.length + secondList.length;

    for (let count = 0; count < newList.length; count++) {
        if (count < firstList.length){
            newList[count] = firstList[count];
        }
        else {
            newList[count] = secondList[count - firstList.length];
        }
    }

    return newList;
}

let firstList = [2, 4, 1];
let secondList = [3, 2, 6];
console.log(addArrays(firstList, secondList));



