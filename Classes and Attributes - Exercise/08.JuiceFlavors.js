function juiceFlavors(input) {
  const juices = new Map();
  const bottleJuices = [];

  for (let tokens of input) {
    let [juice, qty] = tokens.split(" => ");
    qty = Number(qty);
    let currQty = 0;
    if (!juices.has(juice)) {
      juices.set(juice, qty);
    } else {
      currQty = juices.get(juice);
    }
    currQty += qty;
    juices.set(juice, currQty);

    if (juices.get(juice) >= 1000) {
      if (bottleJuices.includes(juice)) {
        let index = bottleJuices.indexOf(juice);
        bottleJuices[index + 1] += qty;
      } else {
        bottleJuices.push(juice, currQty);
      }
    }
  }

  for (let i = 0; i < bottleJuices.length; i += 2) {
    if (bottleJuices[i + 1] >= 1000) {
      bottleJuices[i + 1] /= 1000;
      console.log(`${bottleJuices[i]} => ${parseInt(bottleJuices[i + 1])}`);
    }
  }
}

juiceFlavors([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
