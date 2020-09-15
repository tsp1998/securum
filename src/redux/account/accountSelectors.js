import { createSelector } from "reselect";

const selectAccountState = (state) => state.account;

export const selectAccount = createSelector(
  [selectAccountState],
  (account) => account.account
);

export const selectAccountBalance = createSelector(
  [selectAccountState],
  (account) => account.balance
);

export const selectAccountLoading = createSelector(
  [selectAccountState],
  (account) => account.loading
);

export const selectAccountError = createSelector(
  [selectAccountState],
  (account) => account.error
);

export const selectAccountSuccess = createSelector(
  [selectAccountState],
  (account) => account.success
);

export const selectAccountApiCall = createSelector(
  [selectAccountState],
  (account) => account.apiCall
);

export const selectAllAccountsPublicKeys = createSelector(
  [selectAccountState],
  (account) => account.allAccountsPublicKeys
);
