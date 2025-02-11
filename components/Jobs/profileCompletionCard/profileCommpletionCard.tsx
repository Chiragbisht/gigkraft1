import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/app/fonts/font";

export default function ProfileCompletionCard() {
  return (
    <Card className="max-w-[392px] w-full h-[auto] rounded-[10px] mx-auto py-[24px] px-[27px] "
    style={{ boxShadow: "0px 4px 45px 0px #0000001F" }}
    > 
      <CardContent className={`${montserrat.className} space-y-4`}>
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-[22px] font-bold text-[#1F2937]">Adam Smith</h1>
          <p className="text-[14px] font-[400] text-gray-600">Uptechhuntlab</p> 
        </div>

        {/* Progress Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[14px] font-bold text-[#1F2937]">
              Set up your account
            </h2>
            <span className="text-[14px] font-bold text-[#1F2937]">82%</span>
          </div>
          <Progress value={82} className="h-2 bg-gray-200" />
        </div>

        {/* Action Button */}
        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            className="text-[#FF4F4F] border-[#FF4F4F] border-2 text-[12px] py-6 px-12 rounded-full hover:bg-[#FF4F4F] hover:text-white transition-colors"
          >
            Complete your profile
          </Button>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-600 text-[12px] italic">
          100% completion of you profile will help your get more reach.
        </p>
      </CardContent>
    </Card>
  );
}
