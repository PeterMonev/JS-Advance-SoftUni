function areAndVolumeCalc(func1,volIn,input){
      const date = JSON.parse(input);
      let result = [];

      for(let cube of date){
         let current = {
            area: func1.call(cube),
            volume: volIn.call(cube),
         }
         result.push(current);
      }

   console.log(result) ;
}


function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function myFunc(){
    return "myName";
}

areAndVolumeCalc(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )