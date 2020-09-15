import {
  CLEAR_TRANSACTIONS, SET_TRANSACTIONS, TRANSACTIONS_SET_SUCCESS,
  CLEAR_FAILED_TRANSACTIONS_UPDATES, SET_FAILED_TRANSACTIONS_UPDATES,
  CREATE_TRANSACTION_FAIL, CREATE_TRANSACTION_START, CREATE_TRANSACTION_SUCCESS,
  GET_TRANSACTIONS_FAIL, GET_TRANSACTIONS_START, GET_TRANSACTIONS_SUCCESS
} from "./transactionTypes";
const initialState = {
  transaction: null,
  transactions: [],
  failedTransactionUpdates: [],
  error: "",
  loading: false,
  success: false,
  apiCall: ""
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTIONS_SET_SUCCESS: return { ...state, success: action.value }
    case SET_TRANSACTIONS:
      return { ...state, transaction: action.transaction };
    case CLEAR_TRANSACTIONS:
      return { ...state, transaction: null };
    case SET_FAILED_TRANSACTIONS_UPDATES:
      return { ...state, failedTransactionUpdates: action.failedTransactionUpdates };
    case CLEAR_FAILED_TRANSACTIONS_UPDATES:
      return { ...state, failedTransactionUpdates: [] };

    case CREATE_TRANSACTION_START:
      return { ...state, error: "", loading: true, apiCall: CREATE_TRANSACTION_START }
    case CREATE_TRANSACTION_SUCCESS:
      return state = {
        ...state, error: "", loading: false, success: true,
        transaction: action.transaction,
        transactions: [action.transaction, ...state.transactions]
      }
    case CREATE_TRANSACTION_FAIL:
      return {
        ...state, error: action.error, loading: false,
        transaction: null
      }

    case GET_TRANSACTIONS_START:
      return { ...state, error: "", loading: true, apiCall: GET_TRANSACTIONS_START }
    case GET_TRANSACTIONS_SUCCESS:
      return state = {
        ...state, error: "", loading: false,
        transactions: action.transactions
      }
    case GET_TRANSACTIONS_FAIL:
      return {
        ...state, error: action.error, loading: false,
        transactions: []
      }

    //default
    default:
      return state;
  }
};

export default transactionReducer;
