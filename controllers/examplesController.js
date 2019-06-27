Example = require('../models/example');

module.exports.getExamples = (req, res) => {
    Example.getExamples((err, examples) => {
        if (err) {
            throw err;
        }
        res.json(examples);
    });
};