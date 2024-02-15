const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//Way 1: Use an HTML form
router.post('/form', (req, res, next) => {
//responds to http://localhost:3000/form?name=Maggie&dept=BUFOOD on a POST
    let foo;
    res.send(req.body.name);
})
//Way 2: Query string
router.get('/form', (req, res, next) => {
//responds to http://localhost:3000/form?name=Maggie&dept=BUFOOD on a GET
    let foo;
    res.send(req.query.name);
})

//Way 3: Use named params
router.get('/way3/:name/:dept', (req, res, next) => {
//responds to http://localhost:3000/form/Maggie, name is the first param, dept the second and so on
    let foo;
    //res.send(req.params.dept);
    res.render('index', {
        name: req.params.name,
        dept: req.params.dept,
        title: "CS412"
    })
})
module.exports = router;
