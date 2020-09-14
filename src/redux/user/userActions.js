import USER_ACTION_TYPES from "./userTypes";

//current route
export const setUser = (user) => ({ type: USER_ACTION_TYPES.SET_USER, user });
export const clearUser = () => ({ type: USER_ACTION_TYPES.CLEAR_USER })