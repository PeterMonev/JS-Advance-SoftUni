function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

const arr = [1, 2, 3, 4, 5];

const obj = {
  name: "Peter",
};

function print() {
  console.log(this.name);
}

module.exports = {
  sum,
  product,
  arr,
  print: print.bind(obj),
};
