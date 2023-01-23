class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    let result = `Successfully added `;

    for (let token of vegetables) {
      let [type, quantity, price] = token.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      let filter = this.availableProducts.filter((p) => p.type === type)[0];

      if (filter === undefined) {
        this.availableProducts.push({ type, quantity, price });
        result += type + ", ";
      } else {
        filter.quantity += quantity;

        if (filter.price < price) {
          filter.price = price;
        }
      }
    }
    return result.substring(0, result.length - 2);
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (let token of selectedProducts) {
      let [type, quantity] = token.split(" ");
      quantity = Number(quantity);

      let filter = this.availableProducts.filter((p) => p.type === type)[0];

      if (filter === undefined) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else if (filter.quantity < quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      } else {
        totalPrice += quantity * filter.price;
        filter.quantity -= quantity;
      }
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    let filter = this.availableProducts.filter((p) => p.type === type)[0];

    if (filter === undefined) {
      throw new Error(`${type} is not available in the store.`);
    } else if (quantity > filter.quantity) {
      filter.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    } else {
      filter.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`;
    }
  }

  revision() {
    let result = ["Available vegetables:"];
    this.availableProducts.sort((a, b) => a.price - b.price);

    for (let tokens of this.availableProducts) {
      result.push(`${tokens.type}-${tokens.quantity}-$${tokens.price}`);
    }
    result.push(
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    );

    return result.join("\n");
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
