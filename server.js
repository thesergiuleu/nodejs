require('dotenv').config();
let express     = require('express');
let mongoose    = require('mongoose');
let apiRoutes   = require('./routes/api');

let app = express();
//Connect to Mongoose
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, { useNewUrlParser: true});
let db = mongoose.connection;
app.use('/api', apiRoutes);
app.listen(process.env.APP_PORT);
console.log(`Running on port ${process.env.APP_PORT}...`);