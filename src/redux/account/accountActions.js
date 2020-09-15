import {
  SET_ACCOUNT, CLEAR_ACCOUNT, ACCOUNT_SET_SUCCESS,
  CREATE_ACCOUNT_FAIL, CREATE_ACCOUNT_START, CREATE_ACCOUNT_SUCCESS,
  GET_ACCOUNT_DETAILS_FAIL, GET_ACCOUNT_DETAILS_START, GET_ACCOUNT_DETAILS_SUCCESS,
  GET_ALL_ACCOUNTS_PUBLIC_KEYS_FAIL, CLEAR_ALL_ACCOUNTS_PUBLIC_KEYS_FAIL,
  GET_ALL_ACCOUNTS_PUBLIC_KEYS_START, GET_ALL_ACCOUNTS_PUBLIC_KEYS_SUCCESS,
  GET_ACCOUNT_BALANCE_FAIL, GET_ACCOUNT_BALANCE_START, GET_ACCOUNT_BALANCE_SUCCESS
} from "./accountTypes";

//api
import {
  createAccount, getAccount, getAllAccountsPublicKeys, getAccountBalance
} from '../../api/accountApi'
import { createTransaction } from '../../api/transactionApi'

//actions
import { getTransactionsStart } from '../transaction/transactionActions'

export const setAccount = (account) => ({ type: SET_ACCOUNT, account });
export const clearAccount = () => ({ type: CLEAR_ACCOUNT })
export const clearAllAccountsPublicKeys = () => ({ type: CLEAR_ALL_ACCOUNTS_PUBLIC_KEYS_FAIL })


//create Account
export const createAccountStart = (keys, successCb, errorCb) => async dispatch => {
  dispatch({ type: CREATE_ACCOUNT_START })
  try {
    const { status, account } = await createAccount(keys);
    if (status === "success") {
      //initial 10 coins to user
      const { publicKey } = account;
      const { status, transaction } = await createTransaction({
        publicKey, privateKey: "0",
        amount: 10, fee: 0
      })
      dispatch(createAccountSuccess(account))
      dispatch(getTransactionsStart())
      dispatch(getAccountBalanceStart())
      successCb()
      setTimeout(() => { dispatch({ type: ACCOUNT_SET_SUCCESS, value: false }) }, 10000)
    } else throw new Error("Error While creating Account...");
  } catch (error) {
    dispatch(createAccountFail(error.message ||
      "Error: Something Went Wrong While creating Account..."));
    errorCb()
  }
}
export const createAccountSuccess = (account) => ({
  type: CREATE_ACCOUNT_SUCCESS,
  account
})
export const createAccountFail = (error) => ({
  type: CREATE_ACCOUNT_FAIL,
  error
})

//get Account
export const getAccountStart = (cb) => async dispatch => {
  dispatch({ type: GET_ACCOUNT_DETAILS_START })
  try {
    const { status, account } = await getAccount();
    if (status === "success") {
      dispatch(getAccountSuccess(account))
      cb()
    } else throw new Error("Error While getting Account...");
  } catch (error) {
    dispatch(getAccountFail(error.message ||
      "Error: Something Went Wrong While getting Account..."));
  }
}
export const getAccountSuccess = (account) => ({
  type: GET_ACCOUNT_DETAILS_SUCCESS,
  account
})
export const getAccountFail = (error) => ({
  type: GET_ACCOUNT_DETAILS_FAIL,
  error
})

//get Account Balance
export const getAccountBalanceStart = () => async (dispatch, getState) => {
  dispatch({ type: GET_ACCOUNT_BALANCE_START })
  try {
    const account = getState().account.account;
    const { status, balance } = await getAccountBalance({ userPublicKey: account.publicKey });
    if (status === "success") {
      dispatch(getAccountBalanceSuccess(balance))
    } else throw new Error("Error While getting Account Balance...");
  } catch (error) {
    dispatch(getAccountBalanceFail(error.message ||
      "Error: Something Went Wrong While getting Account Balance..."));
  }
}
export const getAccountBalanceSuccess = (balance) => ({
  type: GET_ACCOUNT_BALANCE_SUCCESS,
  balance
})
export const getAccountBalanceFail = (error) => ({
  type: GET_ACCOUNT_BALANCE_FAIL,
  error
})

//get all Accounts Public Keys
export const getAllAccountsPublicKeysStart = () => async dispatch => {
  dispatch({ type: GET_ALL_ACCOUNTS_PUBLIC_KEYS_START })
  try {
    const { status, allAccountsPublicKeys } = await getAllAccountsPublicKeys();
    if (status === "success") {
      dispatch(getAllAccountsPublicKeysSuccess(allAccountsPublicKeys))
    } else throw new Error("Error While getting Account...");
  } catch (error) {
    dispatch(getAllAccountsPublicKeysFail(error.message ||
      "Error: Something Went Wrong While getting Account..."));
  }
}
export const getAllAccountsPublicKeysSuccess = (allAccountsPublicKeys) => ({
  type: GET_ALL_ACCOUNTS_PUBLIC_KEYS_SUCCESS,
  allAccountsPublicKeys
})
export const getAllAccountsPublicKeysFail = (error) => ({
  type: GET_ALL_ACCOUNTS_PUBLIC_KEYS_FAIL,
  error
})