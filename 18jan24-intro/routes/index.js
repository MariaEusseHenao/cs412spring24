var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dead', (req, res, next) => {
  res.send('Hey now, listen to 12/31/78 Winterland using ' + req.method);
})
router.post('/dead', (req, res, next) => {
  res.send('Hey now, listen to 12/31/78 Winterland using ' + req.method);
})
module.exports = router;

//Map CRUD data operations like this:

POST    CREATE
GET     READ
PUT     UPDATE
DELETE  DELETE
