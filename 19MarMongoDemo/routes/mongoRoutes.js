const express = require('express');
const router = express.Router();
const db = require('../mongoCx');
//let mongo = await db.getDB('cs412');

router.route('/') //RESTful, so CREATE = POST
    .post(async (req, res) => {
    let mongo = await db.getDB('cs412');
    let results = await mongo.collection('fall23names').insertOne(req.body);
    res.send(`Inserted ${req.body.name}`);
})
    .get(async (req, res) => {
        let mongo = await db.getDB('cs412');
        let results = await mongo.collection('fall23names').find({name: 'Bob'}).toArray();
        if (!results.length)  {
            res.send('Not found');
        }
        else {
            res.json(results);
        }
    })
//use named parameter :name, like http://localhost/mongo/fred (fred is the named param)
    router.get('/:name', async (req, res) => {
        let mongo = await db.getDB('cs412');
        let results = await mongo.collection('sum23names').find({name: req.params.name}).toArray();
        if (!results.length)  {
            res.send('Not found');
        }
        else {
            res.json(results);
        }
    })

module.exports = router;
