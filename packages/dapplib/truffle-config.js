require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift razor spider coach inflict kitten slot giggle'; 
let testAccounts = [
"0xe2566cebe9539042f9e712055e0a0b68755cf24a93ea072535b56204f091e998",
"0xf322a41ddf3b237e8cd3892d3de03cf46b7f7a611fecb0ffc80a8a8dc2725ccb",
"0xf87a85d7f7bf2ae3fec4d58881c57909ff0a70f0b5763f89e28e8a88548a7213",
"0xaf7938b45afff614101537bb2d923a3305166f098987cb6e12e081a3f54078a7",
"0x36468c6d8a941bbd2f6af68fd621eba50d8b79d67b8817c529149db43ea838a4",
"0x488d842edf63018a39c00910177932dabe7be9aec07ad23e06058eb722cd8376",
"0xbc914af6092c10b6cb6d9b19f56bd40b3e1c8eb031ecdd63826bee3f708db9f2",
"0xae7fa39198fdb3bb48f140fe8d5d10c18649414fc5c40c1de4993fc895fba54a",
"0xfffd98363c3dd7d8af3e479acc3729cc0a12f5eb820cb4792f4be9fcb1cd5381",
"0x9e9abdbe1a314c40c0f0dc6842d0e1fa11873f732a5cbbbfeefb8bfd50c71cd3"
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
