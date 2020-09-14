import USER_ACTION_TYPES from "./userTypes";
const initialState = {
  currentUser: {}
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_USER:
      return { ...state, currentUser: action.user };
    case USER_ACTION_TYPES.CLEAR_USER:
      return { ...state, currentUser: {} };

    //default
    default:
      return state;
  }
};

export default uiReducer;
