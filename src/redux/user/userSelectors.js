import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentRoute = createSelector(
  [selectUser],
  (user) => user.currentUser
);
