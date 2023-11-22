IF NOT EXIST "/geth" (
	geth --datadir "./" init genesis.json
)
geth --datadir "./" --http --http.api="admin, debug, web3, eth, txpool, personal, miner, net" --http.corsdomain "*" --port 3030 --networkid 8545 --allow-insecure-unlock console --preload "./preload.js"