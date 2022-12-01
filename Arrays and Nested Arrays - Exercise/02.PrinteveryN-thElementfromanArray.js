function printEveryNElement(array, step) {
    'use strict';
 
    return array.filter((el,index)=> index % step === 0);

}
printEveryNElement(["5", "20", "31", "4", "20"], 2);
