function townToJSON(input) {
    const parameters = input.shift();
    const result = [];

    class Town {
      constructor(town,latitude,longitude) {
        this.Town = town;
        this.Latitude = Number(latitude);
        this.Longitude = Number(longitude);
      }
    }

    for(const tokens of input){
       let [townName,latitude,longitude] = tokens.split(' | ');
       townName = townName.substr(2);
       latitude = Number(latitude).toFixed(2);
       longitude = Number(longitude.substr(0,longitude.length-2)).toFixed(2);
       const town = new Town(townName, latitude, longitude)
       result.push(town);
    }
   
   console.log(JSON.stringify(result));
}
townToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
