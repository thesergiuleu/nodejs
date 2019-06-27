let mongoose = require('mongoose');

//Here is schema for the the table without id
let genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Example', genreSchema);
/**
 * in case you want to use Example here
 */
let Example = module.exports = mongoose.model('Example', genreSchema);
/**
 * This is how a get request to all rows from Example model looks like,
 * and we export it to use this function somewhere else ( in controller for example )
 */

module.exports.getExamples =  (callback) => {
    Example.find(callback);
};