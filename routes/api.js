var express = require('express');
var router = express.Router({ caseSensitive: true });
var bcrypt = require('bcrypt-nodejs');
var Web3 = require('web3');
var web3Admin = require('web3admin');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3Admin.extend(web3)

/**
 * Calls JSON_RPC eth_getTransactionByHash
 * { :transaction_hash } 32 Bytes - hash of a transaction
 * example: 0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e
 * For more details, please refer to https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gettransactionbyhash
 */
router.get('/node', function(req, res) {
    // The method admin_nodeInfo does not exist/is not available
    // Seems to be missing --ipcapi for Web3.js
    // https://github.com/ethereum/go-ethereum/#programatically-interfacing-geth-nodes
    return res.status(200).json({
        message: 'The method admin_nodeInfo does not exist/is not available',
        code: 'var version = web3.admin.nodeInfo'
    })
    // var version = web3.admin.nodeInfo;
    // return res.status(200).json({
    //     enode: version['enode'],
    //     name: version['name']
    // })
})

/**
 * Calls JSON_RPC eth_getTransactionByHash
 * { :transaction_hash } 32 Bytes - hash of a transaction
 * example: 0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e
 * For more details, please refer to https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_gettransactionbyhash
 */
router.get('/transaction/:transaction_hash', function(req, res) {
    var transactionId = req.params.transaction_hash
    web3.eth.getTransaction(transactionId, function(err, result){
        if (err) {
            return res.status(400).json({
				Message: 'Please check your transaction hash',
				Error: err
			})
        } else {
            return res.status(200).send(result)
        }
    })
})

/**
 * Calls JSON_RPC eth_getTransactionByHash
 * { :block_number } QUANTITY|TAG - integer of a block number, or the string "earliest", "latest" 
 * or "pending", as in the default block parameter.
 * For more details, please refer to https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getblockbynumber
 */
router.get('/block/:block_number', function(req, res) {
    var blockNumber = req.params.block_number
    web3.eth.getBlock(blockNumber, function(err, result){
        if (err) {
            return res.status(400).json({
				Message: 'Please check your block number',
				Error: err
			})
        } else {
            return res.status(200).send(result)
        }
    })
})

module.exports = router;