






// const getOperation = operator => {
//
//     switch (operator) {
//         case '+':
//             return (left, right) => left + right;
//             break;
//     }
// }
//
// let mathFunction = getOperation('+');
// console.log(mathFunction(30,12))
//
//
const adder7 = (left, right, cb) => cb(left + right);

let result = adder7(15, 6,
    sum => sum*2
)
console.log(result)
