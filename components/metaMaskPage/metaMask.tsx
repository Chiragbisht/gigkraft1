"use client"

import { ethers } from "ethers"
declare global{
  interface Window{
    ethereum?: any
  }
}


export default function MetaMask() {


  const connectWallet = async () =>{
    let signer = null

    let provider

    if(window.ethereum == null){

      console.log("No metamask wallet installed!")
    }
else{
    provider = new ethers.BrowserProvider(window.ethereum)
    signer = await provider.getSigner()
  
    const addrress =  signer.getAddress()
    console.log(addrress)}

  }



  return (
   
    <>
    <div>
     
      <button 
      className="text-black bg-green-700 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-gray-300
       font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
        dark:focus:ring-gray-700 dark:border-gray-700"
      onClick={connectWallet} > Connect wallet</button>
   
    </div>
    </>
  );
}
