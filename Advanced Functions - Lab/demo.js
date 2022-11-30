function printContex(a,b) {
  console.log(a + b);
  console.log(this);
}

obj = {
  counter: 5,
  printContex,
};
 
printContex.apply(obj,[4,9]);
printContex.call(obj,5,6);
printContex(3,5)

// obj.printContex();

// document.querySelector('button').addEventListener('click', obj.printContex);
