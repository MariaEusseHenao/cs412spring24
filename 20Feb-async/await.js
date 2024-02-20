(async function () { //This is an IIFE

const awaitFunc = async (value) => { //first thing the func as async
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    //the next line WAITS for the result
    //
    let result = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=42.3&lon=-71.1&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial", requestOptions)
    return result;
}

let result = await awaitFunc(3);
console.log(`Got ${result}`);
})()

