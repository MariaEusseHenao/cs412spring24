const express = require('express');
const router = express.Router();

//import { createClient } from 'redis';
const createClient = require('redis').createClient;
const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));
/* GET home page. */
router.get('/', async function(req, res, next) {
  await client.connect();
  await client.set('Ed', '22');
  const value = await client.get('Ed');

  res.render('index', { title: value });
});




module.exports = router;
