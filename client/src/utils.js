// import Web3 from 'web3';
import { ethers } from 'ethers';
import Wallet from './contracts/Wallet.json';

const contractAddress = '0xbB2D16E19D873A315CCDD90DF3E6255ddc0D2d6e';

// const getProvider = () => {
//     return new ethers.providers.Web3Provider(window.ethereum);
// };


const getWallet = async () => {

    // return new Promise((resolve, reject) => {
    //     window.addEventListener('load', async () => {
    //         if(window.ethereum) {
    //             const web3 = new ethers.providers.Web3Provider(window.ethereum);
    //             try {
    //                 await window.ethereum.enable();
    //                 resolve(web3);
    //             } catch(error) {
    //                 reject(error);
    //             }
    //         } else if(window.web3) {
    //             resolve(window.web3);
    //         } else {
    //             reject('Must install Metamask');
    //         }

    //     });
    // });

    //创建provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    //请求用户授权provider
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const wallet = new ethers.Contract(contractAddress, Wallet.abi, signer);
    return wallet;
};

export { getWallet };