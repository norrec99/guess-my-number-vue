import { keyStores, Near, WalletConnection, utils } from 'near-api-js';
// import BN from 'bn.js';

export const CONTRACT_ID = 'dev-1641814602199-59406748281412';
// const gas = new BN('70000000000000');

// new NEAR is using  here to  awoid  async/await
export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org'
});

export const wallet = new WalletConnection(near, 'guessmynumber');

//function to createGame
export const createGame = ({ attachedDeposit }) => {
  attachedDeposit = utils.format.parseNearAmount(attachedDeposit);
  return wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: 'createGame',
    args: {},
    attachedDeposit: attachedDeposit
  });
};

export const getGameIds = () => {
  return wallet.account().viewFunction({
    contractId: CONTRACT_ID,
    methodName: 'get_gameIds',
    args: {}
  });
};
