geth --datadir "./" --http --http.api="web3, net, eth, admin, txpool, miner, debug, personal" --http.corsdomain "*" --port 3030 --networkid 8545 --allow-insecure-unlock console --preload "./preload.js"