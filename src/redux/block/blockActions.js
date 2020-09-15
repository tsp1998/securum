import {
  SET_BLOCK, CLEAR_BLOCK, BLOCK_SET_SUCCESS,
  CREATE_BLOCK_FAIL, CREATE_BLOCK_START, CREATE_BLOCK_SUCCESS,
  GET_BLOCK_FAIL, GET_BLOCK_START, GET_BLOCK_SUCCESS,
  GET_LAST_BLOCK_FAIL, GET_LAST_BLOCK_START, GET_LAST_BLOCK_SUCCESS,
  MINE_BLOCK_FAIL, MINE_BLOCK_START, MINE_BLOCK_SUCCESS
} from "./blockTypes";

//api
import { createBlock, getBlock, getLastBlock } from '../../api/blockApi'
import { getBlockchain, updateBlockchain } from '../../api/blockchainApi'
import { createTransaction, updateTransactions } from '../../api/transactionApi'

//actions
import { setBlockchain } from '../blockchain/blockchainActions'
import { setFailedTransactionsUpdates, getTransactionsStart } from '../transaction/transactionActions'

//utils
import { hashBlock, proofOfWork } from '../../utils/block'
import sha256 from 'sha256'

export const setBlock = (block) => ({ type: SET_BLOCK, block });
export const clearBlock = () => ({ type: CLEAR_BLOCK })

//create block
export const createBlockStart = () => async dispatch => {
  dispatch({ type: CREATE_BLOCK_START })
  try {
    const { status, block } = await createBlock();
    if (status === "success") {
      dispatch(createBlockSuccess(block))
      setTimeout(() => { dispatch({ type: BLOCK_SET_SUCCESS, value: false }) }, 10000)
    } else throw new Error("Error While creating Block...");
  } catch (error) {
    dispatch(createBlockFail(error.message ||
      "Error: Something Went Wrong While creating Block..."));
  }
}
export const createBlockSuccess = (block) => ({
  type: CREATE_BLOCK_SUCCESS,
  block
})
export const createBlockFail = (error) => ({
  type: CREATE_BLOCK_FAIL,
  error
})

//get block
export const getBlockStart = () => async dispatch => {
  dispatch({ type: GET_BLOCK_START })
  try {
    const { status, block } = await getBlock();
    if (status === "success") {
      dispatch(getBlockSuccess(block))
    } else throw new Error("Error While getting Block...");
  } catch (error) {
    dispatch(getBlockFail(error.message ||
      "Error: Something Went Wrong While getting Block..."));
  }
}
export const getBlockSuccess = (block) => ({
  type: GET_BLOCK_SUCCESS,
  block
})
export const getBlockFail = (error) => ({
  type: GET_BLOCK_FAIL,
  error
})

//get last block
export const getLastBlockStart = () => async dispatch => {
  dispatch({ type: GET_LAST_BLOCK_START })
  try {
    const { status, lastblock } = await getLastBlock();
    if (status === "success") {
      dispatch(getLastBlockSuccess(lastblock))
    } else throw new Error("Error While getting LastBlock...");
  } catch (error) {
    dispatch(getLastBlockFail(error.message ||
      "Error: Something Went Wrong While getting LastBlock..."));
  }
}
export const getLastBlockSuccess = (lastblock) => ({
  type: GET_LAST_BLOCK_SUCCESS,
  lastblock
})
export const getLastBlockFail = (error) => ({
  type: GET_LAST_BLOCK_FAIL,
  error
})

//mine the block
export const mineBlockStart = (selectedTransactions, cb) => async (dispatch, getState) => {
  dispatch({ type: MINE_BLOCK_START })
  try {
    let blockchain = getState().blockchain.blockchain;
    let transactions = getState().transaction.transactions;
    if (!blockchain) {
      const { status, blockchain: fetchedBlockchain } = await getBlockchain();
      if (status === "success") {
        blockchain = fetchedBlockchain;
      } else throw new Error("No Blockchain Found for this Miner...")
    }
    const prevBlockHash = blockchain.chain[blockchain.chain.length - 1].hash;
    const newBlock = { index: blockchain.chain.length + 1, transactions: [] }
    let totalFee = 12.5;
    selectedTransactions.forEach(selectedTransaction => {
      const transaction = transactions.find(t => t._id === selectedTransaction)
      newBlock.transactions.push(transaction)
      totalFee += transaction.fee;
    });
    const nonce = proofOfWork(prevBlockHash, newBlock)
    if (nonce) {
      newBlock.nonce = nonce
      const hash = hashBlock(prevBlockHash, newBlock, nonce)
      if (hash) newBlock.hash = hash
    }
    if (newBlock.hash && newBlock.nonce) newBlock.prevBlockHash = prevBlockHash;
    const { status, block } = await createBlock(newBlock);
    if (status === "success") {
      //add block in blockchain chain
      const { nonce, hash, prevBlockHash } = block;
      const { status, blockchainUpdated } = await updateBlockchain({ chain: [{ nonce, hash, prevBlockHash }] })
      if (status === "success") {
        //update transactions status
        dispatch(setBlockchain(blockchainUpdated))
        const { status, failedTransactionUpdates } = await updateTransactions(selectedTransactions)
        if (status === "success") {
          if (failedTransactionUpdates.length > 0)
            dispatch(setFailedTransactionsUpdates(failedTransactionUpdates))
        } else throw new Error("Error while updating transactions...")
        //create reward transaction for miner
        let account = getState().account.account;
        if (account) {
          const { publicKey } = account;
          const { status, transaction } = await createTransaction({
            publicKey, privateKey: "0",
            amount: totalFee, fee: 0
          })
        }
        dispatch(mineBlockSuccess(block))
        dispatch(getTransactionsStart())
        cb();
      } else throw new Error("Error While creating block in Blockchain...")
    } else throw new Error("Error While creating block...")
  } catch (error) {
    console.log('error', error)
    dispatch(mineBlockFail(error.message ||
      "Error: Something Went Wrong While getting LastBlock..."));
  }
}
export const mineBlockSuccess = (minedBlock) => ({
  type: MINE_BLOCK_SUCCESS,
  minedBlock
})
export const mineBlockFail = (error) => ({
  type: MINE_BLOCK_FAIL,
  error
})
