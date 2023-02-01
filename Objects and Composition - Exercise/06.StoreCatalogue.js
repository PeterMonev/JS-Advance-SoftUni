function storeCatalogue(input) {
  const sorted = input.sort((a, b) => a.localeCompare(b));
  const products = {};

  for (const tokens of sorted) {
    let [product, price] = tokens.split(" : ");
    price = Number(price);
    products[product] = price;
  }

  let letter = "";

  for (const line in products) {
    if (line[0] != letter) {
      letter = line[0];
      console.log(letter);
      console.log(`  ${line}: ${products[line]}`);
    } else {
      console.log(`  ${line}: ${products[line]}`);
    }
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
