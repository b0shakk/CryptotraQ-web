// https://eth-goerli.g.alchemy.com/v2/9dr8_PxXGI3u0Bik_dbGq3m2p5yU3VTU

require('@nomiclabs/hardhat-waffle');

module.exports= {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/9dr8_PxXGI3u0Bik_dbGq3m2p5yU3VTU',
      accounts: ['da86d2b59594e8b03b5040ac0a53f3478041bb4fb38337149752b30be00d8b73']
    }
  }
}
