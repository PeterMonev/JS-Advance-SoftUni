function listProcessor(input) {
    let arr = [];
 
    let obj = {
     add: value => arr.push(value),
     remove: value => (arr = arr.filter(x=> x !== value)),
     print: value => console.log(arr.join(','))
    };
 
    input.forEach(x=>{
     const [command,value] = x.split(' ');
 
     obj[command](value);
    })
 
 }
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])