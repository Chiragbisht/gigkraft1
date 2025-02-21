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
      className="text-black p-2 rounded-sm w-36 bg-green-700 hover:bg-green-400"
      onClick={connectWallet} > Connect wallet</button>
   
    </div>
    </>
  );
}
