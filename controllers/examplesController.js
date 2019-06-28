Example = require('../models/example');

module.exports.getExamples = (req, res) => {
    Example.getExamples((err, examples) => {
        if (err) {
            throw err;
        }
        res.json(examples);
    });
};

module.exports.getExample = (req, res) => {
    let example = Example.findOne({_id: req.params.exampleId});
    console.log(example);
    res.end();
};

module.exports.postExamples = (req, res) => {
    const name = req.body.name;
    let example = new Example ({
       name: name
    });
    example.save();
    res.json(example);
};