function lowestPriceInCities(input) {
  "use strict";

  const products = [];

  for (const tokens of input) {
    let [town, product, price] = tokens.split(" | ");
    price = Number(price);
    let obj = products.find((x) => x.product === product);

    if (obj === undefined) {
      products.push({ town, product, price });
    } else {
      if (obj.price > price) {
        obj.price = Number(price);
        obj.town = town;
      }
    }
  }

  for (const line of products) {
    console.log(`${line.product} -> ${line.price} (${line.town})`);
  }
}
lowestPriceInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
