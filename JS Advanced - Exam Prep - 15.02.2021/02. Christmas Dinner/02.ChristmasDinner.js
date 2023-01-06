class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};

    if (this.budget <= 0) {
      throw new Error("The budget cannot be a negative number");
    }
  }

  shopping(product) {
    let name = product[0];
    let price = product[1];
    price = Number(price);

    if (price > this.budget) {
      throw new Error("Not enough money to buy this product");
    } else {
      this.products.push(name);
      this.budget -= price;
      return `You have successfully bought ${name}!`;
    }
  }

  recipes({ recipeName, productsList }) {
    let recipeNameToCook= recipeName;
    let productsForReciepe = productsList;
    
   for (const product of productsForReciepe) {
    if(!this.products.includes(product)){
        throw new Error ("We do not have this product")
    }   
   }
    this.dishes.push({ recipeName, productsList })
    return `${recipeNameToCook} has been successfully cooked!`
  }

  inviteGuests(name, dish) {
    if (this.dishes.some(d => d.recipeName == dish) == false) {
        throw new Error("We do not have this dish");
    } else if (this.guests.hasOwnProperty(name)) {
        throw new Error("This guest has already been invited");
    }

    this.guests[name] = dish;
        return `You have successfully invited ${name}!`
  }

  showAttendance() {
    let result = [];

    Object.entries(this.guests).forEach(([guestName, dish]) => {
      result.push(
        `${guestName} will eat ${dish}, which consists of ${this.dishes
          .find((d) => d.recipeName == dish)
          .productsList.join(", ")}`
      );
    });

    return result.join("\n");
  }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"],
});
dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});
dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"],
});

dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());
