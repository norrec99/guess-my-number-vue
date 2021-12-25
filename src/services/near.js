import { keyStores, Near, WalletConnection } from 'near-api-js';
// import BN from 'bn.js';

export const CONTRACT_ID = 'dev-1640005046231-41519361833531';
// const gas = new BN('70000000000000');

// new NEAR is using  here to  awoid  async/await
export const near = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org'
});

export const wallet = new WalletConnection(near, 'guessmynumber');
