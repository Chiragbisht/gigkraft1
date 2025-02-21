"use client";

import { useState, useEffect } from "react";
import Web3 from "web3";
import { EthereumProvider } from "@walletconnect/ethereum-provider";

interface EthereumProviderInstance extends InstanceType<typeof EthereumProvider> {}

const ConnectWallet = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);
  const [provider, setProvider] = useState<EthereumProviderInstance | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [connecting, setConnecting] = useState(false); // Add connecting state

  useEffect(() => {
    const reconnectWallet = async () => {
      const isConnected = localStorage.getItem("walletconnect");
      if (isConnected) {
        try {
          await connectWallet();
        } catch (reconnectError) {
          console.error("Reconnect Error:", reconnectError);
        }
      }
    };

    reconnectWallet();
  }, []);

  const connectWallet = async () => {
    setConnecting(true); // Set connecting to true
    try {
      const ethereumProvider = await EthereumProvider.init({
        projectId: process.env.PROJECT_ID!, // Replace with your Project ID
        chains: [1], // Ethereum Mainnet (or your preferred chain)
        optionalChains: [56], // Optional: other chains
        showQrModal: true,
        methods: ["eth_sendTransaction", "personal_sign", "eth_accounts"],
        events: ["chainChanged", "accountsChanged"],
      });

      await ethereumProvider.enable();

      const web3Instance = new Web3(ethereumProvider);
      setWeb3(web3Instance);

      const accounts = await web3Instance.eth.getAccounts();
      const currentChainId = await web3Instance.eth.getChainId();

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setProvider(ethereumProvider);
        setChainId(currentChainId.toString());

        localStorage.setItem("walletconnect", "connected");

        // Send wallet data to backend (optional)
        await fetch("/api/payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ walletId: accounts[0], chainId: currentChainId.toString() }),
        });
      }

      ethereumProvider.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          disconnectWallet(); // Handle disconnection
        }
      });

      ethereumProvider.on("chainChanged", (chainId) => {
        setChainId(chainId.toString());
      });
    } catch (error) {
      console.error("Connect Wallet Error:", error);
    } finally {
      setConnecting(false); // Set connecting back to false
    }
  };

  const disconnectWallet = async () => {
    if (provider) {
      try {
        await provider.disconnect();
        localStorage.removeItem("walletconnect");
      } catch (error) {
        console.error("Disconnect Error:", error);
      }
    }

    setAccount(null);
    setProvider(null);
    setChainId(null);
    setWeb3(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {!account ? (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-blue-300" // Disable button while connecting
          disabled={connecting} // Disable while connecting
        >
          {connecting ? "Connecting..." : "Connect Wallet"} {/* Show connecting state */}
        </button>
      ) : (
        <div className="text-center">
          <p className="font-semibold">
            Connected: {account.slice(0, 6)}...{account.slice(-4)}
          </p>
          <p>Chain ID: {chainId}</p>
          <button
            onClick={disconnectWallet}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;