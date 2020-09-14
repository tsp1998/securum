import UI_ACTION_TYPES from "./uiTypes";
const initialState = {
  currentRoute: null
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_ACTION_TYPES.SET_CURRENT_ROUTE:
      return { ...state, currentRoute: action.currentRoute };
    case UI_ACTION_TYPES.CLEAR_CURRENT_ROUTE:
      return { ...state, currentRoute: null };

    //default
    default:
      return state;
  }
};

export default uiReducer;
