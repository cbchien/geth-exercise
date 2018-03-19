// port
var port = process.env.PORT || 8000;

// router
// var router = require('./routes/api')

// load packages
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var app = express();
var Web3 = require('web3');


// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
// } else {
//     // set the provider you want from Web3.providers
//     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//     console.log('this is web3', web3)
// }
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));


// test 
// var nodeInfo = web3.admin.nodeInfo;

// load in environment variables
dotenv.config({ verbose: true});

//application setting
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
// app.use('/api', router);
app.get("*", function(req, res){
	res.sendFile(__dirname + '/public/index.html');
})

//Start server
app.listen(port, function(){
    console.log('listening on ' + port)
    // console.log('nodeInfo ' + nodeInfo)
    if(!web3.isConnected()) {
        console.log("web3 is not connected");
    } else {
        console.log("web3 is connected");
    }
})