function addAndRemoveElements(array) {
    'use strict';
    const result = [];
    let counter = 0;
   
    for(let i =  0; i < array.length; i++) {
        counter++;

        if(array[i] === 'add'){
          result.push(counter);
        } else {
          result.pop();
        }    
    }

      if(result.length > 0){
           console.log(result.join('\n'));
      } else {
           console.log('Empty');
      }

}
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
