import { montserrat } from "@/app/fonts/font";
import { Separator } from "@radix-ui/react-select";
import Image from "next/image";

interface WelcomeStepProps {
  nextStep: () => void;
}

export function WelcomeStep({ nextStep }: WelcomeStepProps) {
  return (
    <div
     className=" flex flex-col items-center justify-center h-full"
    >
      <h1 className={`${montserrat.className} mb-4 lg:text-[30px] text-[20px] font-semibold text-center max-w-[450px]`}>
        Hey Adam. Ready for your next big opportunity?
      </h1>
      <div className={`mx-auto max-w-2xl space-y-3 text-center ${montserrat.className}`}>
        <p className="text-[16px]">Build a profile to show the world what you can do</p>
        <Separator className="h-[1px] bg-[#000000]/20 rounded-[10px] py-[0.2px] max-w-[770px]" />
        <p className="text-[16px]">Apply on jobs posted from clients, around the world</p>
        <Separator className="h-[1px] bg-[#000000]/20 rounded-[10px] py-[0.2px] max-w-[770px]" />
        <p className="text-[16px]">Get paid safely and know we're here to help</p>
      </div>
      <button
        onClick={nextStep}
        className="mt-6 max-w-[360px] bg-[#FF4C4A] rounded-full h-[35px] px-8 font-medium text-white hover:bg-[#FF4C4A]/80"
      >
        <span className={`${montserrat.className} text-[16px] font-[600]`}>Create Your Profile</span>
      </button>
    </div>
  );
}
