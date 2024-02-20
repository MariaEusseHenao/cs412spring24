
//A delay to simulate a network or database call, something that will
//take time

const delayIt = (seconds) => {
    console.log(`Entering with ${seconds}s`);
    setTimeout(() => {
            console.log(`In delay`);
            return 42;
        },
        seconds * 1000 //delay is in milliseconds
    )
    console.log(`Exiting with ${seconds}s`);
}

let result = delayIt(4);
console.log(`Result: ${result}`);