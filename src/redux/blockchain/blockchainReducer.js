import {
  SET_BLOCKCHAIN, CLEAR_BLOCKCHAIN, BLOCKCHAIN_SET_SUCCESS,
  CREATE_BLOCKCHAIN_FAIL, CREATE_BLOCKCHAIN_START, CREATE_BLOCKCHAIN_SUCCESS,
  GET_BLOCKCHAIN_FAIL, GET_BLOCKCHAIN_START, GET_BLOCKCHAIN_SUCCESS
} from "./blockchainTypes";
const initialState = {
  blockchain: null,
  error: "",
  loading: false,
  success: false,
  apiCall: ""
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOCKCHAIN_SET_SUCCESS: return { ...state, success: action.value }
    case SET_BLOCKCHAIN:
      return { ...state, blockchain: action.blockchain };
    case CLEAR_BLOCKCHAIN:
      return { ...state, blockchain: null };

    case CREATE_BLOCKCHAIN_START:
      return { ...state, error: "", loading: true, apiCall: CREATE_BLOCKCHAIN_START }
    case CREATE_BLOCKCHAIN_SUCCESS:
      return state = {
        ...state, error: "", loading: false, success: true, apiCall: "",
        blockchain: action.blockchain,
      }
    case CREATE_BLOCKCHAIN_FAIL:
      return {
        ...state, error: action.error, loading: false, apiCall: "",
        blockchain: null
      }

    case GET_BLOCKCHAIN_START:
      return { ...state, error: "", loading: true, apiCall: GET_BLOCKCHAIN_START }
    case GET_BLOCKCHAIN_SUCCESS:
      return state = {
        ...state, error: "", loading: false, apiCall: "",
        blockchain: action.blockchain
      }
    case GET_BLOCKCHAIN_FAIL:
      return {
        ...state, error: action.error, loading: false, apiCall: "",
        blockchain: null
      }

    //default
    default:
      return state;
  }
};

export default blockchainReducer;
