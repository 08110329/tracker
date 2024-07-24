import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="w-[1440px] m-auto flex justify-between py-4	bg-[#FFFFFF]">
      <div className="flex gap-x-6">
        <img src="/Vector.png" className="w-[27px] h-[27px]"/>
        <p className="text-base	font-normal	">Dashboard</p>
        <p className="font-semibold	text-base">Records</p>
      </div>
      <div className="flex gap-x-6">
        <Button className="bg-[#0166FF] rounded-3xl gap-x-1">
          <p className="text-2xl font-normal">+</p>
          <p className="text-base	font-normal	">Record</p>
        </Button>
        <img src="/Placeholder.png"/>
      </div>
    </div>
  );
};
