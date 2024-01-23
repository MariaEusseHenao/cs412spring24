// function adder(left, right) {
//
//     let foo = 5;
//
//     return left + right;
// }
// console.log(`${adder(30,12)}`);


let adder = undefined;

const adder2 = function (left, right) {
    return left+right;
}
const adder3 = function (left, right) {
    return left+right;
}

if (true) {
    adder = adder2;
    adder2()
}
console.log(`${adder2(30,12)}`);
