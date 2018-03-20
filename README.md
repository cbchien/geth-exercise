# Go-ethereum Exercise
This is an exercise using Go-ethereum, JSON RPC API, and Web.js *LOCALLY*.

## Follow the resources to set up geth
[Go-ethereum (geth)](https://github.com/ethereum/go-ethereum/)
[Installation Instructions](https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum#installation-instructions)
[JSON RPC API](https://github.com/ethereum/wiki/wiki/JSON-RPC)
[Web3.js](https://github.com/ethereum/web3.js/)

## Run the following commonads after setting up Golang,

`cd PATH-TO-GETH-PROJECT-FOLDER`

`geth --rpc --rpcport 8545 --rpcaddr 0.0.0.0 --rpccorsdomain --rpcapi "eth,web3" --ipcapi "admin,web3"`

## Run on a separate command line interface
`git clone https://github.com/cbchien/geth-exercise.git`

`cd PATH-TO-THIS-REPOSITORY-PROJECT`

`npm install`

`npm run start`

## APIs
API can be access through `localhost:8000/{api}`
`/node`                                  # return node information

`/block/{block_number}`                  # return block information base on block number

`/transaction/{transation_hash}`         # return transaction information base on hash
