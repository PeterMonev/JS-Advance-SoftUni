function sumFirstLast(array){      
    const first = Number(array.shift());
    const last = Number(array.pop());
    console.log(first + last);

}
sumFirstLast(['20', '30', '40']);