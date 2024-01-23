//spread and rest operator
// const  foo = (first, second, ...fred) => {
//     console.log(`First: ${first}, Second: ${second}, Rest: ${fred}`);
//     console.log(`Array? ${fred[2]}`);
//     return fred;
// }
//
// foo(42, 29);
// foo(42, 29, 27, 19);

//
// let baz = foo(42, 29, 27, 19,6,2,5,6,88);
// console.log(`Sorted: ${baz.sort()}`);
// baz.map((input) => console.log(input*2))

let cities = [
    {name: 'Miami', temperature: 20},
    {name: 'Atlanta', temperature: 50},
    {name: 'Boston', temperature: 42}
]
let largestTemperature = Math.max(...Array.from(cities, city => city.temperature))
let hottestCity = cities.find((city) => city.temperature == largestTemperature)

console.log(`Hottest city: ${hottestCity.name}`);
console.table(cities);
