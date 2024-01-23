var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/profile', (req, res, next) => {
  res.send('in profile');
} )

router.get('/stories', (req, res) => {

})
module.exports = router;
