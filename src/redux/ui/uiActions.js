import UI_ACTION_TYPES from "./uiTypes";

//current route
export const setProductLoading = (currentRoute) => ({ type: UI_ACTION_TYPES.SET_CURRENT_ROUTE, currentRoute });
export const clearRoute = () => ({ type: UI_ACTION_TYPES.CLEAR_CURRENT_ROUTE })