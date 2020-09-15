import { combineReducers } from "redux";

//reducers
import uiReducer from "./ui/uiReducer";
import userReducer from "./user/userReducer";
import blockchainReducer from "./blockchain/blockchainReducer";
import blockReducer from "./block/blockReducer";
import accountReducer from "./account/accountReducer";
import transactionReducer from "./transaction/transactionReducer";

export default combineReducers({
  ui: uiReducer,
  user: userReducer,
  blockchain: blockchainReducer,
  block: blockReducer,
  account: accountReducer,
  transaction: transactionReducer,
});
