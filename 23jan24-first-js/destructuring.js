// const div = ({top, bottom}) => top / bottom;
//
// //console.log(`5 / 4 = ${div(4, 5)}`);
//
// console.log(`5 / 4 = ${div(
//     {
//         top: 5,
//         bottom: 4
//
//     }
// )}`);



const squareAndCube = x => [x*x, x*x*x, x*x*x*x];

const [s,c,d] = squareAndCube(3);
//equivalent:
// results = squareAndCube(3);
// s = results[0]; c = results[1]; etc

let a = 'aaba'
let b = a.split('b');
console.log(`B: ${b}`)
console.log(b[2]);

console.log(`Square: ${s}\nCube: ${c}\nQuad: ${d}`);


