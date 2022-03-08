import * as nearAPI from 'near-api-js'; // import BN from 'bn.js';

export const CONTRACT_ID = 'dev-1643621904533-57249296893867';
// const gas = new BN('70000000000000');

const near = new nearAPI.Near({
  networkId: 'testnet',
  keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org'
});

export const wallet = new nearAPI.WalletConnection(near);

export const formatNEAR = near => {
  return nearAPI.utils.format.formatNearAmount(near, 1);
};

const contract = new nearAPI.Contract(
  wallet.account(),
  CONTRACT_ID,
  // `${CONTRACT_ID}.testnet`, // the account object that is connecting
  {
    // name of contract you're connecting to
    viewMethods: ['get_lastGames', 'viewAllGames', 'viewGame'], // view methods do not change state but usually return a value
    changeMethods: ['createGame', 'joinGame', 'play'], // change methods modify state
    sender: wallet.account() // account object to initialize and sign transactions.
  }
);

//function to createGame
export const createGame = async ({ attachedDeposit }) => {
  attachedDeposit = nearAPI.utils.format.parseNearAmount(attachedDeposit);
  return await contract.createGame({}, 300000000000000, attachedDeposit);
};

export const joinGame = async (id, { attachedDeposit }) => {
  attachedDeposit = nearAPI.utils.format.parseNearAmount(attachedDeposit);
  return await contract.joinGame({ id: id }, 300000000000000, attachedDeposit);
};
export const play = async (id, selectedNumber) => {
  return await contract.play({ id: id, selectedNumber: selectedNumber });
};

export const viewAllGames = async () => {
  return await contract.viewAllGames();
};
export const viewGame = async id => {
  return await contract.viewGame({ id: id });
};
