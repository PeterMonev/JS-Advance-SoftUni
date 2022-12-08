function tickets (arr, criteria){
  class Ticket{
      constructor(destination, price,status){
          this.destination = destination;
          this.price = price;
          this.status = status;
      }
     
  
  }
  let destArr=[];

  for (let i = 0; i < arr.length; i++) {
    let row = arr[i].split("|");
    let city = row[0];
    let price = Number(row[1]);
      let status = row[2];
      let ticket = new Ticket(city,price,status);
      destArr.push(ticket);
  }
  const sortMapper = {
      "destination": (a,b) => a.destination.localeCompare(b.destination),
      "price": (a,b) => a.price - b.price,
      "status": (a,b) => a.status.localeCompare(b.status)
  }
  
  return destArr.sort(sortMapper[criteria]);
}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)

tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
