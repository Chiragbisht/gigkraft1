import Image from "next/image";
import MetaMask from "@/components/metaMaskPage/metaMask";
import Welcome from "@/components/landingPgae/welcome/welcome";
import LandingPage from "@/components/landingPgae/landingPage";

export default function Home() {
  return (
  <div className=" w-full bg-gray-50 dark:bg-gray-900 h-full">
    <LandingPage/>
  </div>
  );
}
