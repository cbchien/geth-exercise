// port
var port = process.env.PORT || 8000;

// router
var router = require('./routes/api')

// load packages
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var app = express();
var Web3 = require('web3');
var web3Admin = require('web3admin');

var web3 = new Web3(Web3.givenProvider);
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3Admin.extend(web3)

// load in environment variables, if needed
dotenv.config({ verbose: true});

//application setting
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
// No user interface. Using router directly as api
app.use('/', router);

//Start server
app.listen(port, function(){
    console.log('Front end client is listening on ' + port)
    // Display in console for web3.js status
    if(!web3.isConnected()) {
        console.log("web3 is not connected");
    } else {
        console.log("web3 is connected");
    }
})