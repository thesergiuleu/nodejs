require('dotenv').config();
let express     = require('express');
let mongoose    = require('mongoose');
let apiRoutes   = require('./routes/api');

let app = express();
//Connect to Mongoose
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, { useNewUrlParser: true});
let db = mongoose.connection;
//this is used to get x-www-form-urlencoded data via body
app.use(express.urlencoded());
//this loads api routes
app.use('/api', apiRoutes);
//here we are starting server
app.listen(process.env.APP_PORT);
console.log(`Running on port ${process.env.APP_PORT}...`);