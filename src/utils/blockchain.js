import axios from 'axios'
import rp from 'request-promise'
import { SERVER_API } from '../constants/urls'
import { getBlock } from '../api/blockApi'
import { hashBlock } from './block'

export const consensus = (currentBlockchain) => {
  return new Promise((resolve, reject) => {
    const requestPromises = []
    if (currentBlockchain.networkMiners && currentBlockchain.networkMiners.length === 0){
      setTimeout(() => {
        return reject(currentBlockchain)
      }, 10000);
    }

    currentBlockchain.networkMiners.forEach(async networkMiner => {
      requestPromises.push(
        axios.get(`${SERVER_API}/blockchain/${networkMiner}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("securumToken")}`
          }
        })
      )
    });
    Promise.all(requestPromises)
      .then(blockchains => {
        if (blockchains.length > 0) {
          const currentChainLength = currentBlockchain.chain.length;
          let maxChainLength = currentChainLength;
          let newLongestChain = null;

          blockchains.forEach(blockchain => {
            blockchain = blockchain.data.blockchain;
            if (blockchain.chain.length > maxChainLength) {
              maxChainLength = blockchain.chain.length;
              newLongestChain = blockchain.chain;
            };
          });
          if (!newLongestChain || (newLongestChain && newLongestChain.chain && !chainIsValid(newLongestChain))) {
            return reject(currentBlockchain)
          }
          else {
            return resolve(newLongestChain)
          }
        }
      })
  })
}

export const chainIsValid = async (blockchain) => {
  let validChain = true;

  const { chain } = blockchain

  for (var i = 1; i < chain.length; i++) {
    const currentBlock = chain[i];
    const prevBlock = chain[i - 1];
    const { status, block } = await getBlock()
    const { transactions, index } = block
    const blockHash = hashBlock(prevBlock['hash'], { transactions, index }, currentBlock['nonce']);
    if (blockHash.substring(0, 4) !== '0000') validChain = false;
    if (currentBlock['prevBlockHash'] !== prevBlock['hash']) validChain = false;
  };

  const genesisBlock = chain[0];
  const correctNonce = genesisBlock['nonce'] === 0;
  const correctprevBlockHash = genesisBlock['prevBlockHash'] === '00000000000000000000';
  const correctHash = genesisBlock['hash'] === '00000000000000000000';

  if (!correctNonce || !correctprevBlockHash || !correctHash) validChain = false;

  return validChain;
}