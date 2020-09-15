import {
  CLEAR_TRANSACTIONS, SET_TRANSACTIONS, TRANSACTIONS_SET_SUCCESS,
  CLEAR_FAILED_TRANSACTIONS_UPDATES, SET_FAILED_TRANSACTIONS_UPDATES,
  CREATE_TRANSACTION_FAIL, CREATE_TRANSACTION_START, CREATE_TRANSACTION_SUCCESS,
  GET_TRANSACTIONS_FAIL, GET_TRANSACTIONS_START, GET_TRANSACTIONS_SUCCESS
} from "./transactionTypes";

//api
import { createTransaction, getTransactions } from '../../api/transactionApi'

export const setTransactions = (transactions) => ({ type: SET_TRANSACTIONS, transactions });
export const clearTransactions = () => ({ type: CLEAR_TRANSACTIONS })

export const setFailedTransactionsUpdates = (failedTransactionUpdates) =>
  ({ type: SET_FAILED_TRANSACTIONS_UPDATES, failedTransactionUpdates });
export const clearFailedTransactionsUpdates = () => ({ type: CLEAR_FAILED_TRANSACTIONS_UPDATES })

//create Transaction
export const createTransactionStart = (transactionData, cb) => async dispatch => {
  dispatch({ type: CREATE_TRANSACTION_START })
  try {
    const { status, transaction } = await createTransaction(transactionData);
    if (status === "success") {
      dispatch(createTransactionSuccess(transaction))
      cb();
      setTimeout(() => { dispatch({ type: TRANSACTIONS_SET_SUCCESS, value: false }) }, 5000)
    } else throw new Error("Error While creating Transaction...");
  } catch (error) {
    dispatch(createTransactionFail(error.message ||
      "Error: Something Went Wrong While creating Transaction..."));
  }
}
export const createTransactionSuccess = (transaction) => ({
  type: CREATE_TRANSACTION_SUCCESS,
  transaction
})
export const createTransactionFail = (error) => ({
  type: CREATE_TRANSACTION_FAIL,
  error
})

//get Transaction
export const getTransactionsStart = () => async dispatch => {
  dispatch({ type: GET_TRANSACTIONS_START })
  try {
    const { status, transactions } = await getTransactions();
    if (status === "success") {
      dispatch(getTransactionsSuccess(transactions))
    } else throw new Error("Error While getting Transactions...");
  } catch (error) {
    dispatch(getTransactionsFail(error.message ||
      "Error: Something Went Wrong While getting Transactions..."));
  }
}
export const getTransactionsSuccess = (transactions) => ({
  type: GET_TRANSACTIONS_SUCCESS,
  transactions
})
export const getTransactionsFail = (error) => ({
  type: GET_TRANSACTIONS_FAIL,
  error
})