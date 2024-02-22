const http = require('request'); //This will get wrapped in a Promise
const URI = "http://api.openweathermap.org/data/3.0/onecall?lat=42.3&lon=-71.1&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial";
const getData = () => {
    return new Promise((resolve, reject) => {
        http(URI,
            (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body); //basically a return
                }
            });
    })
}
getData()
.then(
    (body) => {
        console.log(`${body}`);
        return (body);    //basically a return just like line 10
    },
    (error) => console.log(`${error.toString()}`),
)
.then( (body) => console.log(`second resolve`));