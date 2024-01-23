const express = require('express');
const router = express.Router();

router.get('/getwx', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    //From Postman:
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

//use built-in web client to make a call..
    fetch("https://api.openweathermap.org/data/3.0/onecall?lat=42.3&lon=-71.1&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial", requestOptions)
        .then(response => response.text())//implicit return value, one-line function
        .then(result => {
            console.log(result);
            return result;
        })
        .then((result) => res.json(result))
        .catch(error => console.log('error', error));
});

//need to 'mount' the route file...what is the base URL?

module.exports = router;
