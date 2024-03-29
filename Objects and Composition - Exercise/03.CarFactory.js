function carFactory(car){
   const engine = {};
   const carriage = {};
   let wheels = [];

   if(car.power <= 90){
     engine.power = 90;
     engine.volume = 1800;

   } else if (car.power <= 120){
     engine.power = 120;
     engine.volume = 2400;

     
   } else if (car.power <= 200){
      engine.power = 200;
      engine.volume =  3500;
   }

  carriage.type = car.carriage;
  carriage.color = car.color;

   if(car.wheelsize % 2 === 0){
    car.wheelsize--;
   }

   for(let i = 0; i < 4; i++){
    wheels.push(car.wheelsize)
    };

const resultCar = {
    model: car.model,
    engine: engine,
    carriage: carriage,
    wheels: wheels
  };

 return resultCar;
};

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);