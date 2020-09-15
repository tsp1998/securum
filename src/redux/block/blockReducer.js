import {
  SET_BLOCK, CLEAR_BLOCK, BLOCK_SET_SUCCESS,
  CREATE_BLOCK_FAIL, CREATE_BLOCK_START, CREATE_BLOCK_SUCCESS,
  GET_BLOCK_FAIL, GET_BLOCK_START, GET_BLOCK_SUCCESS,
  GET_LAST_BLOCK_FAIL, GET_LAST_BLOCK_START, GET_LAST_BLOCK_SUCCESS,
  MINE_BLOCK_FAIL, MINE_BLOCK_START, MINE_BLOCK_SUCCESS
} from "./blockTypes";
const initialState = {
  block: null,
  lastBlock: null,
  minedBlock: null,
  error: "",
  loading: false,
  success: false,
  apiCall: ""
};

const BLOCKReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOCK_SET_SUCCESS: return { ...state, success: action.value }
    case SET_BLOCK:
      return { ...state, block: action.block };
    case CLEAR_BLOCK:
      return { ...state, block: null };

    case CREATE_BLOCK_START:
      return { ...state, error: "", loading: true, apiCall: CREATE_BLOCK_START }
    case CREATE_BLOCK_SUCCESS:
      return state = {
        ...state, error: "", loading: false, success: true,
        block: action.block,
      }
    case CREATE_BLOCK_FAIL:
      return {
        ...state, error: action.error, loading: false,
        block: null
      }

    case GET_BLOCK_START:
      return { ...state, error: "", loading: true, apiCall: GET_BLOCK_START }
    case GET_BLOCK_SUCCESS:
      return state = {
        ...state, error: "", loading: false,
        block: action.block
      }
    case GET_BLOCK_FAIL:
      return {
        ...state, error: action.error, loading: false,
        block: null
      }

    case GET_LAST_BLOCK_START:
      return { ...state, error: "", loading: true, apiCall: GET_LAST_BLOCK_START }
    case GET_LAST_BLOCK_SUCCESS:
      return state = {
        ...state, error: "", loading: false,
        lastBlock: action.lastBlock
      }
    case GET_LAST_BLOCK_FAIL:
      return {
        ...state, error: action.error, loading: false,
        lastBlock: null
      }

    case MINE_BLOCK_START:
      return { ...state, error: "", loading: true, apiCall: MINE_BLOCK_START }
    case MINE_BLOCK_SUCCESS:
      return state = {
        ...state, error: "", loading: false, success: true,
        minedBlock: action.minedBlock,
      }
    case MINE_BLOCK_FAIL:
      return {
        ...state, error: action.error, loading: false,
        minedBlock: null
      }

    //default
    default:
      return state;
  }
};

export default BLOCKReducer;
