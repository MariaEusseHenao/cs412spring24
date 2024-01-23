

let aString = "this is a string";
let result = aString.toUpperCase().sub().split('').map(item => item.toLowerCase()).join('');

console.log(`${result}`);
