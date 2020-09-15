import {
  CLEAR_ACCOUNT, SET_ACCOUNT, ACCOUNT_SET_SUCCESS,
  GET_ACCOUNT_DETAILS_FAIL, GET_ACCOUNT_DETAILS_START, GET_ACCOUNT_DETAILS_SUCCESS,
  CREATE_ACCOUNT_FAIL, CREATE_ACCOUNT_START, CREATE_ACCOUNT_SUCCESS,
  CLEAR_ALL_ACCOUNTS_PUBLIC_KEYS_FAIL, GET_ALL_ACCOUNTS_PUBLIC_KEYS_FAIL,
  GET_ALL_ACCOUNTS_PUBLIC_KEYS_START, GET_ALL_ACCOUNTS_PUBLIC_KEYS_SUCCESS,
  GET_ACCOUNT_BALANCE_FAIL,GET_ACCOUNT_BALANCE_START,GET_ACCOUNT_BALANCE_SUCCESS
} from "./accountTypes";
const initialState = {
  account: null,
  balance: null,
  allAccountsPublicKeys: [],
  error: "",
  loading: false,
  success: false,
  apiCall: ""
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return { ...state, account: action.account };
    case CLEAR_ACCOUNT:
      return { ...state, account: null };
    case ACCOUNT_SET_SUCCESS: return { ...state, success: action.value }

    case GET_ACCOUNT_DETAILS_START:
      return { ...state, loading: true, apiCall: GET_ACCOUNT_DETAILS_START }
    case GET_ACCOUNT_DETAILS_SUCCESS:
      return { ...state, loading: false, account: action.account }
    case GET_ACCOUNT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.error, account: null }

    case GET_ACCOUNT_BALANCE_START:
      return { ...state, loading: true, apiCall: GET_ACCOUNT_BALANCE_START }
    case GET_ACCOUNT_BALANCE_SUCCESS:
      return { ...state, loading: false, balance: action.balance }
    case GET_ACCOUNT_BALANCE_FAIL:
      return { ...state, loading: false, error: action.error, balance: null }

    case CREATE_ACCOUNT_START:
      return { ...state, loading: true, apiCall: CREATE_ACCOUNT_START }
    case CREATE_ACCOUNT_SUCCESS:
      return { ...state, loading: false, account: action.account, success: true }
    case CREATE_ACCOUNT_FAIL:
      return { ...state, loading: false, error: action.error, account: null, success: false }

    case GET_ALL_ACCOUNTS_PUBLIC_KEYS_START:
      return { ...state, loading: true, apiCall: GET_ALL_ACCOUNTS_PUBLIC_KEYS_START }
    case GET_ALL_ACCOUNTS_PUBLIC_KEYS_SUCCESS:
      return {
        ...state, loading: false, success: true,
        allAccountsPublicKeys: action.allAccountsPublicKeys,
      }
    case GET_ALL_ACCOUNTS_PUBLIC_KEYS_FAIL:
      return { ...state, loading: false, error: action.error, allAccountsPublicKeys: [], success: false }
    case CLEAR_ALL_ACCOUNTS_PUBLIC_KEYS_FAIL:
      return { ...state, allAccountsPublicKeys: [] }
    //default
    default:
      return state;
  }
};

export default uiReducer;
