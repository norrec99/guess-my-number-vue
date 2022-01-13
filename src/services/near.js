import * as nearAPI from 'near-api-js'; // import BN from 'bn.js';

export const CONTRACT_ID = 'dev-1641814602199-59406748281412';
// const gas = new BN('70000000000000');

const near = new nearAPI.Near({
  networkId: 'testnet',
  keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org'
});

export const wallet = new nearAPI.WalletConnection(near);

const contract = new nearAPI.Contract(
  wallet.account(),
  CONTRACT_ID,
  // `${CONTRACT_ID}.testnet`, // the account object that is connecting
  {
    // name of contract you're connecting to
    viewMethods: ['get_lastGames'], // view methods do not change state but usually return a value
    changeMethods: ['createGame'], // change methods modify state
    sender: wallet.account() // account object to initialize and sign transactions.
  }
);

//function to createGame
export const createGame = async ({ attachedDeposit }) => {
  attachedDeposit = nearAPI.utils.format.parseNearAmount(attachedDeposit);
  return await contract.createGame({}, 300000000000000, attachedDeposit);
};

export const getLastGames = async () => {
  return await contract.get_lastGames();
};
