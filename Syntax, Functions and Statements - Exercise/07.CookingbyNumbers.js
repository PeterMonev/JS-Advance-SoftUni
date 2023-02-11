function cookingByNumbers(...arr) {
  let points = Number(arr.shift());

  for (let line of arr) {
    switch (line) {
      case "chop":
        points /= 2;
        break;
      case "dice":
        points = Math.sqrt(points);
        break;
      case "spice":
        points += 1;
        break;
      case "bake":
        points *= 3;
        break;
      case "fillet":
        points = (points * 0.8).toFixed(1);
        break;
    }
    console.log(points);
  }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
