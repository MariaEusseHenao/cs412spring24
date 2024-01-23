














const doMath = (value, operation) => operation(value);

let result = doMath(
    30,
    val => val - 12 //lambda or anonymous function
)
console.log(result);



readFile(fileName, (result) => { //demonstrating callback
    console.log(result);
});

//DUNNO

console.log(a);  a is undefined
