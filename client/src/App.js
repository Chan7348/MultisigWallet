import React, { useEffect, useState } from 'react';
import { getWallet } from "./utils.js";
import Header from './Header.js';
import NewTransfer from './NewTransfer.js';
import TransferList from './TransferList.js';
import { ethers } from 'ethers';
function App() {
  // const [provider, setProvider] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);

  async function connectWallet() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      // 请求用户授权连接 MetaMask
      await provider.send("eth_requestAccounts", []);
      // 连接成功后的逻辑
      const signer = provider.getSigner();
      // 进行需要用户授权后才能执行的操作...
      return signer;
    } catch (error) {
      console.error('Wallet connection error:', error);
      // 在这里处理用户未授权或其他错误
    }
  }

  useEffect(() => {
    const init = async () => {

      const wallet = await getWallet();
      // if(!wallet) {
      //   console.error('Wallet contract not initialized!');
      //   return;
      // }
      setWallet(wallet);

      const accounts = await wallet.provider.listAccounts();
      const approvers = await wallet.getApprovers();
      const quorum = await wallet.quorum();
      const transfers = await wallet.getTransfers();

        
      setAccounts(accounts);
      setApprovers(approvers);
      setQuorum(quorum.toString());
      console.log(accounts, approvers, quorum.toString());
    };
    init();
  },[]);

  const createTransfer = transfer => {
    wallet.createTransfer(transfer.amount, transfer.to);
  }

  const approveTransfer = transferId => {
    wallet.approveTransfer(transferId);
  }


  // if (typeof provider === 'undefined' || typeof accounts === 'undefined' || typeof wallet === 'undefined') {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      Multisig Wallet Dapp
      <Header approvers={approvers} quorum={quorum} />
      <NewTransfer createTransfer={createTransfer} />
      <TransferList transfers={transfers} />
      <TransferList transfers={transfers} createTransfer={createTransfer} />
    </div>
  );
}

export default App;
