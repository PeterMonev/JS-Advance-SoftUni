function argumentInfo(...arg) {
  let types = {};

  for (let ele of arg) {
    const type = typeof ele;
    console.log(`${type}: ${ele}`);

    if (types[type] === undefined) {
      types[type] = 0;
    }
    types[type]++;
  }

  types = Object.entries(types).sort((a, b) => b[1] - a[1]);

  for (let [type, count] of types) {
    console.log(`${type} = ${count}`);
  }
}
argumentInfo([
  "object:",
  "number: 3.333",
  "number: 9.999",
  "number = 2",
  "object = 1",
]);
