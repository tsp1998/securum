import axios from 'axios'
import { SERVER_API } from '../constants/urls'

export const consensus = (currentBlockchain) => {
  const requestPromises = [];
  chainBlockchain.networkMiners.forEach(networkMiner => {
    // const requestOptions = {
    //   uri: `SERVER_API/currentBlockchain/${}`,
    //   method: 'GET',
    //   json: true
    // };
    const axiosRP = axios.get(`SERVER_API/blockchains/${networkMiner}`, {
      Authorization: `Bearer ${localStorage.securumToken}`
    })
    requestPromises.push(rp(axiosRP));
  });

  Promise.all(requestPromises)
    .then(blockchains => {
      const currentChainLength = currentBlockchain.chain.length;
      let maxChainLength = currentChainLength;
      let newLongestChain = null;
      let newPendingTransactions = null;

      blockchains.forEach(blockchain => {
        if (blockchain.chain.length > maxChainLength) {
          maxChainLength = blockchain.chain.length;
          newLongestChain = blockchain.chain;
          newPendingTransactions = blockchain.pendingTransactions;
        };
      });


      if (!newLongestChain || (newLongestChain && !bitcoin.chainIsValid(newLongestChain))) {
        res.json({
          note: 'Current chain has not been replaced.',
          chain: bitcoin.chain
        });
      }
      else {
        bitcoin.chain = newLongestChain;
        bitcoin.pendingTransactions = newPendingTransactions;
        res.json({
          note: 'This chain has been replaced.',
          chain: bitcoin.chain
        });
      }
    });

}

export const chainIsValid = (blockchain) => {
  let validChain = true;

  const { chain } = blockchain

  for (var i = 1; i < chain.length; i++) {
    const currentBlock = chain[i];
    const prevBlock = chain[i - 1];
    const blockHash = hashBlock(prevBlock['hash'], { transactions: currentBlock['transactions'], index: currentBlock['index'] }, currentBlock['nonce']);
    if (blockHash.substring(0, 4) !== '0000') validChain = false;
    if (currentBlock['previousBlockHash'] !== prevBlock['hash']) validChain = false;
  };

  const genesisBlock = chain[0];
  const correctNonce = genesisBlock['nonce'] === 100;
  const correctPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
  const correctHash = genesisBlock['hash'] === '0';
  const correctTransactions = genesisBlock['transactions'].length === 0;

  if (!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions) validChain = false;

  return validChain;
}