import { Circle, } from "lucide-react";

export const List = ({text,tag,desc}) => {
  return (
    <div className="flex w-[337px] justify-between">
      <div className="flex gap-2 items-center ">
        <Circle className="w-[12px] h-[12px] border "/>
        <p className="font-normal text-sm">{text}</p>
      </div>
      <p className="font-normal text-sm">{tag}</p>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
};
