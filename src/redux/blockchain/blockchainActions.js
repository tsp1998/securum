import {
  SET_BLOCKCHAIN, CLEAR_BLOCKCHAIN, BLOCKCHAIN_SET_SUCCESS,
  CREATE_BLOCKCHAIN_FAIL, CREATE_BLOCKCHAIN_START, CREATE_BLOCKCHAIN_SUCCESS,
  GET_BLOCKCHAIN_FAIL, GET_BLOCKCHAIN_START, GET_BLOCKCHAIN_SUCCESS
} from "./blockchainTypes";

//api
import { createBlockchain, getBlockchain } from '../../api/blockchainApi'

export const setBlockchain = (blockchain) => ({ type: SET_BLOCKCHAIN, blockchain });
export const clearBlockchain = () => ({ type: CLEAR_BLOCKCHAIN })

//create blockchain
export const createBlockchainStart = () => async dispatch => {
  dispatch({ type: CREATE_BLOCKCHAIN_START })
  try {
    const { status, blockchain } = await createBlockchain();
    if (status === "success") {
      dispatch(createBlockchainSuccess(blockchain))
      setTimeout(() => { dispatch({ type: BLOCKCHAIN_SET_SUCCESS, value: false }) }, 5000)
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
    console.log('res', res)
    if (status === "success") {
      dispatch(getBlockchainSuccess(blockchain))
    } else throw new Error("Error While getting Blockchain...");
  } catch (error) {
    console.log('error', error)
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