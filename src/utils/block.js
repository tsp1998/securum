import sha256 from 'sha256'

export const proofOfWork = (prevBlockHash, currentBlockData) => {
  let nonce = 0;
  let hash = hashBlock(prevBlockHash, currentBlockData, nonce);
  while (hash.substring(0, 4) !== '0000') {
    nonce++;
    hash = hashBlock(prevBlockHash, currentBlockData, nonce);
  }
  return nonce;
}

export const hashBlock = (prevBlockHash, currentBlockData, nonce) => {
  const dataAsString = prevBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
}
