import { createSelector } from "reselect";

const selectBlockState = (state) => state.block;

export const selectBlock = createSelector(
  [selectBlockState],
  (block) => block.block
);

export const selectLastBlock = createSelector(
  [selectBlockState],
  (block) => block.lastBlock
);

export const selectBlockLoading = createSelector(
  [selectBlockState],
  (block) => block.loading
);


export const selectBlockError = createSelector(
  [selectBlockState],
  (block) => block.error
);

export const selectBlockSuccess = createSelector(
  [selectBlockState],
  (block) => block.success
);

export const selectBlockApiCall = createSelector(
  [selectBlockState],
  (block) => block.apiCall
);
