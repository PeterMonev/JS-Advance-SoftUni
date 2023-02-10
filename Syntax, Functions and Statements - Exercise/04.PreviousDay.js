function previosDay(year, month, day) {
  "use strict";
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() - 1);

  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}
previosDay(2016, 9, 30);
previosDay(2016, 9, 30);
