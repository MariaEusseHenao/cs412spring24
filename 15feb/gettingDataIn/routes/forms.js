var express = require('express');
var router = express.Router();

//Pull data from req.body on a POST
//
//Express would see this first if no params
//(hides the next route)
//
router.get('/way1/:name/:instrument', (req, res, next) =>{
    router.send('hey');
})
router.get('/way1', (req, res, next) => {
    res.send("Welcome " + req.body.name);
})

router.post('/way2', function(req, res, next) {
    res.send("Welcome " + req.body.name);
});
//illustrating that the method is included in the match
//
router.put('/way1', function(req, res, next) {
    res.send("Welcome " + req.body.name);
});

//Named params
//

//These end up on req.params (for named vars)
//
router.get('/way3/:name/:instrument', (req, res, next) =>{
    res.send("Welcome " + req.params.name);
})

//data is on req.query in this case
//
router.get('/way3/dataOnParams', (req, res, next) => {

res.send("Welcome " + req.query.name);
})

module.exports = router;
