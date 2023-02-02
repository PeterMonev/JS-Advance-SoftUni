function createSortedList() {
  "use strict";
  let list = [];

  return {
    add(number) {
      if (typeof number === "number") {
        list.push(number);
        list.sort((a, b) => a - b);
      } else {
        console.log("The array takes only numbers.");
      }
    },

    remove(index) {
      if (index >= 0 && index <= list.length) {
        list.splice(index, 1);
      } else {
        console.error("The index is outside the bounds of the array");
      }
    },

    get(index) {
      if (index >= 0 && index <= list.length) {
        return list[index];
      } else {
        console.error("The index is outside the bounds of the array");
      }
    },

    get size() {
      return list.length;
    },
  };
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
