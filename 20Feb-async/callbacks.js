// With callback
//Avoid callback hell...

function callbackMe(seconds, callback) {
    console.log(`Delaying for ${seconds} seconds`);
    setTimeout(() => {
        if (seconds > 5) {
            // Simulate a successful operation after the delay
            callback(null, `Success: Delayed for ${seconds} seconds`); // First argument for error is null
        } else {
            // Simulate an error if the delay is 5 seconds or less
            callback(new Error(`${seconds} seconds is too short`), null); // Second argument for result is null
        }
        console.log(`Exiting timer`);
    }, seconds * 1000); // Convert seconds to milliseconds
}

console.log(`Start`);
callbackMe(6, (error, result) => {
    if (error) {
        console.error(`Error: ${error.message}`);
    } else {
        console.log(result);
    }
});
