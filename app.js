const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Product = require('./routes/product.route')

const app = express()

let dev_db_url = 'mongodb+srv://umbertobomba:umbertobomba@mtglifecounter-he0do.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', Product)

app.listen(3000, () => { console.log('app running on port 3000')})