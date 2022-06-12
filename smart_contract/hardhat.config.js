require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgzrjeMRmrZu15yCOiijBKaRv',
      accounts: ['2e96bdc4185384b1b97d9fcf04d75c1bad8367b22524831ac38e2eae5463ac88'],
    },
  },
};