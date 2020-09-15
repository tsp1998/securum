import { createSelector } from "reselect";

const selectTransactionState = (state) => state.transaction;

export const selectTransaction = createSelector(
  [selectTransactionState],
  (transaction) => transaction.transaction
);

export const selectTransactions = createSelector(
  [selectTransactionState],
  (transaction) => transaction.transactions
);

export const selectTransactionLoading = createSelector(
  [selectTransactionState],
  (transaction) => transaction.loading
);

export const selectTransactionError = createSelector(
  [selectTransactionState],
  (transaction) => transaction.error
);

export const selectTransactionSuccess = createSelector(
  [selectTransactionState],
  (transaction) => transaction.success
);

export const selectTransactionApiCall = createSelector(
  [selectTransactionState],
  (transaction) => transaction.apiCall
);
