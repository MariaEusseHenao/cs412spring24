
function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2
        val1 = val2
        val2 = result
        yield result
    }
}


//Get a few fibs
myFibs = fibs()
let count = 5;
while (count --> 0) {
    console.log(myFibs.next().value)
}

for (let count = 0; count < 20; count++) {
    console.log(myFibs.next().value)
}

// let x = [1,2,3,4,5];
// console.log([...x]);
[a, b, ...blah] = [1,2,3,4,5,6,7,8]
console.log(blah);

 [1,2,3,4,5,6].map(value => console.log(value +100))

 let pows = (x) => [x*x, x*x*x, x*x*x*x, x*x*x*x]
 console.log(pows(5))

 square = x => x*x
 console.log(square(5))