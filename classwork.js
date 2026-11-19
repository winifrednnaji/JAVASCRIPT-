function repeatAction(times, callback){

    for(let count = 1; count <= times; count++){
    
    callback(count);
    
    }
    
}


function repitition(count){
    console.log('Repitition ${count}');
}


repeatAction(3, repitition);

