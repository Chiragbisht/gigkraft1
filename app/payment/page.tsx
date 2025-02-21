import BillingPage from "@/components/payMentPage/payment";
import { montserrat } from "../fonts/font";


export default function Payment() {
    return (
       <div className={`  bg-gray-50 ${montserrat.className}`}>
          <div className=" w-full min-h-screen flex items-center justify-center max-w-6xl  mx-auto  ">
               <BillingPage/>
          </div>
          </div>
    );
  }