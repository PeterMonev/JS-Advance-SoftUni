function townPopulation(input) {
    'use strict';
    let obj = {};

    for(let lines of input) {
      let [name,population] = lines.split(' <-> ');
      population = Number(population);

      if(!obj.hasOwnProperty(name)){
        obj[name] = name
        obj[name] = Number(population)
   
    } else {
      obj[name] += Number(population);
    }

    }

    for(const lines in obj){
      console.log(`${lines} : ${obj[lines]}`);
    }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
