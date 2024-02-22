
const http = require('request');
const URI = "http://api.openweathermap.org/data/3.0/onecall?lat=42.3&lon=-71.1&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial";
const getData = () => {
    http(URI,
        (error, response, body) => {
            if (error) {
                console.log(`${error.toString()}`);
            } else {
                console.log(`${body}`);
            }
        })
}
getData();