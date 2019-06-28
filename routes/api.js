var express = require('express');
var router = express.Router();
ExamplesController = require('../controllers/examplesController');

/**
 * Here are routes what have /api
 */

router.get('/', function(req, res) {
    res.send('Hi!');
});

router.get('/examples', ExamplesController.getExamples);

router.get('/examples/:exampleId', ExamplesController.getExample);

router.post('/examples', ExamplesController.postExamples);

module.exports = router;