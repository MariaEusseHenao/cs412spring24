var express = require('express');
var router = express.Router();

// Define routes for /ps3
router.get('/', function(req, res, next) {
    res.send('Hello from PS3 route!');
});


// Route using the GET method
router.get('/fixed', (req, res) => {
    // Replace 'Hey now' with any string you like
    const fixedString = 'Hey now';

    // Sending a JSON response
    res.json({ string: fixedString });
});


// Route using the POST method
router.post('/post', (req, res) => {
    // Retrieving the string parameter from the request body
    const originalString = req.body.inputString;
    const length = originalString.length;

    // Sending a JSON response with two key/value pairs
    res.json({ originalString, length });
});


// Route using the GET method with a named parameter
router.get('/names/:nameParam', (req, res) => {
//taking param from URL
    const name = req.params.nameParam;

    // Passing the parameter into a JSON object for rendering
    res.json( { response: { originalString: name, length: name.length } });
});

module.exports = router;
