require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food pledge razor spider under install immense army gate'; 
let testAccounts = [
"0xa5406aa0e4a885299718543dd3819611b1e5ba4efbd64e1ba43c5ed84e42b8ec",
"0x5b5d542c669b363ea838f9a5c59b04ee52f0f7f35086a984fcbf78ba9d258f5d",
"0x416f527f69d8a64e4a9a300d499a5b16eba748c53007aa1bf32769fabbf909a0",
"0x7dd26e72af0de59af98cca0c706fb3d7d23cb661ca397980c2ce2ca359c5c88b",
"0x6d1bcddc687135c536257d5c0664ab78a579214adcc37ec62b3e6d1042b137a9",
"0x5adaee7e57963b8b6d3a83af24eaff77d23e29d4d5f2422ccc590663a0a87dad",
"0x13ab9ee3637144e3e488a85e5c504a332992f195767af4f0392e2281d8811824",
"0x703525a64166f8752ff99cac14d1724521fcb123e17d73dcdcd9fdb0bf17a743",
"0xb0789cefcb86a3aec40bec9367c80d3472b397de77844db96112706782887ad6",
"0xa78b833133ed841395de4d810f507fd4d84988dd9e929cc6b6a8e485d066a8d8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
