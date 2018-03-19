var express = require('express');
var router = express.Router({ caseSensitive: true });
var bcrypt = require('bcrypt-nodejs');
var Web3 = require('web3');
var web3Admin = require('web3admin');

var web3 = new Web3(Web3.givenProvider);
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3Admin.extend(web3)

// getTransaction 
// example: 0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e
router.get('/transaction/:transaction_hash', function(req, res) {
    var transactionId = req.params.transaction_hash
    web3.eth.getTransaction(transactionId, function(err, result){
        if (err) {
            return res.status(400).send(err)
        } else {
            return res.status(200).send(result)
        }
    })
})

// getBlock
router.get('/block/:block_number', function(req, res) {
    var blockNumber = req.params.block_number
    web3.eth.getBlock(blockNumber, function(err, result){
        if (err) {
            return res.status(400).send(err)
        } else {
            return res.status(200).send(result)
        }
    })
})



module.exports = router;