class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }

    this.spaceAvailable -= spaceRequired;
    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    });

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    const plant = this.plants.find((p) => p.plantName === plantName);
    if (plant === undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    } else if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    plant.ripe = true;
    plant.quantity += quantity;

    if (plant.quantity > 1) {
      return `${plant.quantity} ${plantName}s have successfully ripened.`;
    } else {
      return `${plant.quantity} ${plantName} has successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    const plantIndex = this.plants.findIndex((p) => p.plantName === plantName);
    const plant = this.plants[plantIndex];

    if (plantIndex === -1) {
      throw new Error(`There is no ${plantName} in the garden.`);
    } else if (plant.ripe === false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    this.plants.splice(plantIndex, 1);
    this.storage.push({
      plantName,
      quantity: plant.quantity,
    });
    this.spaceAvailable += plant.spaceRequired;
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    const plantsAsString = this.plants
      .map((p) => p.plantName)
      .sort((a, b) => a.localeCompare(b))
      .join(", ");
    let storageInfo = `Plants in storage: The storage is empty.`;

    if (this.storage.length > 0) {
      const storageAsString = this.storage.map(
        (p) => `${p.plantName} (${p.quantity})`
      );
      storageInfo = `Plants in storage: ${storageAsString.join(", ")}`;
    }

    return [
      `The garden has ${this.spaceAvailable} free space left.`,
      `Plants in the garden: ${plantsAsString}`,
      storageInfo,
    ].join("\n");
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
