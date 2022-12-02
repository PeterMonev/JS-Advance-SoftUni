function listOfNames(array){
  'use strict';
  let counter = 0;

  array.sort((a,b)=> a.localeCompare(b)).forEach((name)=>{
  counter++;
  console.log(`${counter}.${name}`);
 });
  
}
listOfNames(["John", "Bob", "Christina", "Ema"]);