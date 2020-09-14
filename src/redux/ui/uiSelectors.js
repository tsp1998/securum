import { createSelector } from "reselect";

const selectUi = (state) => state.ui;

export const selectCurrentRoute = createSelector(
  [selectUi],
  (ui) => ui.currentRoute
);
