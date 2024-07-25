import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export const Day = () => {
  return (
    <div className="w-[894px] flex justify-between">
      <div className="flex gap-4 ">
        <Button className="bg-[#F9FAFB] border border-[#E5E7EB] text-black ">
          <ChevronLeft />
        </Button>
        <p className=" py-2 font-normal text-base">Last 30 Days</p>
        <Button className=" bg-[#F9FAFB] border border-[#E5E7EB] text-black ">
          <ChevronRight />
        </Button>
      </div>
      <Button className="bg-[#F9FAFB] border border-[#E5E7EB] text-black gap-5">
        <p className="font-normal text-base">Newest fisrt</p>
        <ChevronDown className=" font-normal text-base" />
      </Button>
    </div>
  );
};
