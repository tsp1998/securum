import { createSelector } from "reselect";

const selectBlockchainState = (state) => state.blockchain;

export const selectBlockchain = createSelector(
  [selectBlockchainState],
  (blockchain) => blockchain.blockchain
);

export const selectBlockchainLoading = createSelector(
  [selectBlockchainState],
  (blockchain) => blockchain.loading
);

export const selectBlockchainError = createSelector(
  [selectBlockchainState],
  (blockchain) => blockchain.error
);

export const selectBlockchainSuccess = createSelector(
  [selectBlockchainState],
  (blockchain) => blockchain.success
);

export const selectBlockchainApiCall = createSelector(
  [selectBlockchainState],
  (blockchain) => blockchain.apiCall
);
