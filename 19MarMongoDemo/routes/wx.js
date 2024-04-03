const express = require('express');
const router = express.Router();
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
//import { createClient } from 'redis';
const createClient = require('redis').createClient;
const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

router.route('/wx')
    .get(async (req, res, next) => {
        await client.connect();
        //Is the current wx in cache?
        //
        let currentWx = await client.get('currentWx');
        //If it isn't, go out to the API
        if (currentWx) {
//the next line WAITS for the result
//
            let result = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=42.3&lon=-71.1&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial", requestOptions)
            //Drop the result into the cache
            //
            await client.set('currentWx', JSON.stringify(result));
            //If necessary, we can drop into mongodb here
            //(we aren't in this demo)
             currentWx = await client.get('currentWx');
            console.log(currentWx);
        }
        next()
    });


module.exports = router;
