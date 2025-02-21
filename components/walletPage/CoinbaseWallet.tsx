"use client";

import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import { useState } from "react";
import Web3 from "web3";

const ConnectCoinbaseWallet = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    const coinbaseWallet = new CoinbaseWalletSDK({
      appName: "My Awesome Dapp",
    });

    const ethereum = coinbaseWallet.makeWeb3Provider();
    const web3 = new Web3(ethereum);

    try {
      const accounts:any = await ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } catch (error) {
      console.error("Error connecting to Coinbase Wallet:", error);
    }
  };

  return (
    <div>
      <button onClick={connectWallet} className="px-4 py-2 bg-blue-500 text-white rounded">
        Connect Coinbase Wallet
      </button>
      {account && <p className="mt-2">Connected: {account}</p>}
    </div>
  );
};

export default ConnectCoinbaseWallet;
