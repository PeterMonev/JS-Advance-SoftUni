function filterEmployees(input, inputCriteria) {
  let counter = 0;
  let [personData, criteriaData] = inputCriteria.split("-");
  const data = JSON.parse(input).forEach((p) => byCriteria.call(p));

  function byCriteria() {
    if (this[personData] === criteriaData || inputCriteria === "all") {
      return console.log(
        `${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`
      );
    }
  }
}

filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
