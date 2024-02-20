//Using Promises

//a promise a placeholder that something will show up

const delayMe = (value) => {
    return new Promise((resolve, reject) => {
        //this is the async work...
        //...to here
        //then examine the resulting values...
        if (value > 5) {
            fred(value)
        } else {
            reject(value)
        }
    })
}

delayMe(47)
    .then(
        (value) => {
            console.log(`Resolved ${value}`);
            return value * 2; //this returns the value TO the next Promise
        },
        (value) => {
            console.log(`Rejected with ${value}`);
        }
    )
    .then(
        (value) => {
            console.log(`Got ${value} in second call`);
        }
    )
