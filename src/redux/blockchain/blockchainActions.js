import {
  SET_BLOCKCHAIN, CLEAR_BLOCKCHAIN, BLOCKCHAIN_SET_SUCCESS,
  CREATE_BLOCKCHAIN_FAIL, CREATE_BLOCKCHAIN_START, CREATE_BLOCKCHAIN_SUCCESS,
  GET_BLOCKCHAIN_FAIL, GET_BLOCKCHAIN_START, GET_BLOCKCHAIN_SUCCESS,
  CONSENSUS_FAIL, CONSENSUS_START, CONSENSUS_SUCCESS
} from "./blockchainTypes";

//api
import { createBlockchain, getBlockchain, replaceBlockchain } from '../../api/blockchainApi'

//utils
import { consensus } from '../../utils/blockchain'

export const setBlockchain = (blockchain) => ({ type: SET_BLOCKCHAIN, blockchain });
export const clearBlockchain = () => ({ type: CLEAR_BLOCKCHAIN })

//create blockchain
export const createBlockchainStart = () => async dispatch => {
  dispatch({ type: CREATE_BLOCKCHAIN_START })
  try {
    const { status, blockchain } = await createBlockchain();
    if (status === "success") {
      dispatch(createBlockchainSuccess(blockchain))
      setTimeout(() => { dispatch({ type: BLOCKCHAIN_SET_SUCCESS, value: false }) }, 10000)
    } else throw new Error("Error While creating Blockchain...");
  } catch (error) {
    dispatch(createBlockchainFail(error.message ||
      "Error: Something Went Wrong While creating Blockchain..."));
  }
}
export const createBlockchainSuccess = (blockchain) => ({
  type: CREATE_BLOCKCHAIN_SUCCESS,
  blockchain
})
export const createBlockchainFail = (error) => ({
  type: CREATE_BLOCKCHAIN_FAIL,
  error
})

//get blockchain
export const getBlockchainStart = () => async dispatch => {
  dispatch({ type: GET_BLOCKCHAIN_START })
  try {
    const res = await getBlockchain();
    const { status, blockchain } = res;
    if (status === "success") {
      dispatch(getBlockchainSuccess(blockchain))
    } else throw new Error("Error While getting Blockchain...");
  } catch (error) {
    dispatch(getBlockchainFail(error.message ||
      "Error: Something Went Wrong While getting Blockchain..."));
  }
}
export const getBlockchainSuccess = (blockchain) => ({
  type: GET_BLOCKCHAIN_SUCCESS,
  blockchain
})
export const getBlockchainFail = (error) => ({
  type: GET_BLOCKCHAIN_FAIL,
  error
})

//consensus 
export const consensusStart = (cb) => async (dispatch, getState) => {
  dispatch({ type: CONSENSUS_START })
  try {
    const currentBlockchain = getState().blockchain.blockchain
    const minerId = getState().user._id
    let blockchain = await consensus(currentBlockchain);
    if (blockchain && blockchain !== currentBlockchain) {
      const { status, replacedBlockchain } = await replaceBlockchain({ minerId, newChain: blockchain })
      if (status === "success") {
        dispatch(consensusSuccess(replacedBlockchain))
        dispatch(getBlockchainStart())
        cb()
      } else throw new Error("Error while replacing Blockchain")
    } else throw new Error("Error while performing Consensus")
  } catch (error) {
    dispatch(consensusFail(error.message ||
      "Error: Something Went Wrong While getting Blockchain..."));
    cb()
  }
}
export const consensusSuccess = (blockchain) => ({
  type: CONSENSUS_SUCCESS,
  blockchain
})
export const consensusFail = (error) => ({
  type: CONSENSUS_FAIL,
  error
})