// const colorCodes = {
//     blue:   1,
//     red:    2,
//     add:    (left, right) => left + right
// }
//
// console.log(`Blue is code ${colorCodes.blue}`);
// console.log(`40 + 2 is ${colorCodes.add(40,2)}`);

//
//
// const divider = ({top, bottom}, ...frank) => {
//     return top / bottom;
// }
//
const div2 = function (top, bottom, ...fred) {
    console.log(`In div2`);
    return top / bottom;
}

const div3 = function ({top, bottom}, side) {
    console.log(`In div3`);
    return top / bottom;
}
//
 div3({bottom: 4, top: 5});
// // div2(4, 5, 6)
//
// // console.log(divider({top:8, bottom: 2, side: 16}))  //4
// const dividerSpread = ({top, bottom, ...frank}, ...bob) => {
//  console.log(`Area: ${frank.area}`);
// 
//     return top / bottom;
// }
// //console.log(frank.area); //bombs, as we expect
//
//  //console.log(divider({bottom:2, top: 8}, 2, 3, 4))  //4
// console.log(dividerSpread({bottom:2, top: 8, side: 4}, 2, 3, 4))  //4
//
//
//
// const anArray = [1,2,3,4,5,6];
// console.log(anArray);
// console.log(...anArray);

const blarg = () => 42;
const bazeezle = _ => {
    return 42;
}

const squareAndCube = x => [x*x, x*x*x, x*x*x*x];

const [s,c,d] = squareAndCube(3);

console.log(`Square: ${s}\nCube: ${c}\nQuad: ${d}`);
console.log(bazeezle(3))
