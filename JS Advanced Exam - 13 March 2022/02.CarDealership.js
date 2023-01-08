class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (model !== "" && horsepower >= 0 && price >= 0 && mileage >= 0) {
      this.availableCars.push({ model, horsepower, price, mileage });
      return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
        2
      )} km - ${price.toFixed(2)}$`;
    } else {
      throw new Error("Invalid input!");
    }
  }

  sellCar(model, desiredMileage) {
    const currModel = this.availableCars.filter((car) => car.model === model);
    const index = this.availableCars.indexOf(currModel[0]);
    if (currModel.length === 0) {
      throw new Error(`${model} was not found!`);
    }

    const mileage = currModel[0].mileage;

    if (mileage >= desiredMileage) {
      if (desiredMileage <= mileage) {
        if (Math.abs(mileage - desiredMileage) <= 40000) {
          currModel[0].price -= currModel[0].price * 0.05;
        } else if (Math.abs(mileage - desiredMileage) > 40000) {
          currModel[0].price -= currModel[0].price * 0.1;
        }
      }
    }
    this.totalIncome += currModel[0].price;
    this.soldCars.push(currModel[0]);
    this.availableCars.splice(index, 1);
    return `${model} was sold for ${currModel[0].price.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length === 0) {
      return "There are no available cars";
    } else {
      let cars = `-Available cars:\n`;
      for (let i = 0; i < this.availableCars.length; i++) {
        if (i === this.availableCars.length - 1) {
          cars += `---${this.availableCars[i].model} - ${
            this.availableCars[i].horsepower
          } HP - ${this.availableCars[i].mileage.toFixed(
            2
          )} km - ${this.availableCars[i].price.toFixed(2)}$`;
        } else {
          cars += `---${this.availableCars[i].model} - ${
            this.availableCars[i].horsepower
          } HP - ${this.availableCars[i].mileage.toFixed(
            2
          )} km - ${this.availableCars[i].price.toFixed(2)}$\n`;
        }
      }
      return cars;
    }
  }

  salesReport(criteria) {
    if (criteria !== "horsepower" && criteria !== "model") {
      throw new Error("Invalid criteria!");
    }
    let soldedCars = this.soldCars.length;
    let carsinfo = `-${
      this.name
    } has a total income of ${this.totalIncome.toFixed(
      2
    )}$\n-${soldedCars} cars sold:\n`;

    if (criteria === "horsepower") {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);

      for (let i = 0; i < this.soldCars.length; i++) {
        if (i === this.soldCars.length - 1) {
          carsinfo += `---${this.soldCars[i].model} - ${
            this.soldCars[i].horsepower
          } HP - ${this.soldCars[i].price.toFixed(2)}$`;
        } else {
          carsinfo += `---${this.soldCars[i].model} - ${
            this.soldCars[i].horsepower
          } HP - ${this.soldCars[i].price.toFixed(2)}$\n`;
        }
      }
      return carsinfo;
    } else if (criteria === "model") {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));

      for (let i = 0; i < this.soldCars.length; i++) {
        if (i === this.soldCars.length - 1) {
          carsinfo += `---${this.soldCars[i].model} - ${
            this.soldCars[i].horsepower
          } HP - ${this.soldCars[i].price.toFixed(2)}$`;
        } else {
          carsinfo += `---${this.soldCars[i].model} - ${
            this.soldCars[i].horsepower
          } HP - ${this.soldCars[i].price.toFixed(2)}$\n`;
        }
      }
      return carsinfo;
    }
  }
}

let dealership = new CarDealership("SoftAuto");

dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
console.log(dealership.salesReport("horsepower"));
console.log(dealership.currentCar());
