import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaHouse } from "react-icons/fa6";
import { PiHouseLineFill } from "react-icons/pi";
import { BiDonateHeart } from "react-icons/bi";
import { BiConversation } from "react-icons/bi";
import { BiCloudLightning } from "react-icons/bi";
import { BiBroadcast } from "react-icons/bi";
import { BiCycling } from "react-icons/bi";
import { BiFootball } from "react-icons/bi";
import { BiGame } from "react-icons/bi";
import { BiImageAlt } from "react-icons/bi";
import { BiLaugh } from "react-icons/bi";
import { BiLogoChrome } from "react-icons/bi";
import { BiMath } from "react-icons/bi";

export const IconMap = () => {
  const house = [
    {
      value: "hause",
      icon: PiHouseLineFill,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiConversation,
    },
    {
      value: "heart",
      icon: BiCloudLightning,
    },
    {
      value: "heart",
      icon: BiBroadcast,
    },
    {
      value: "heart",
      icon: BiCycling,
    },
    {
      value: "heart",
      icon: BiFootball,
    },
    {
      value: "heart",
      icon: BiGame,
    },
    {
      value: "heart",
      icon: BiImageAlt,
    },
    {
      value: "heart",
      icon: BiLaugh,
    },
    {
      value: "heart",
      icon: BiLogoChrome,
    },
    {
      value: "heart",
      icon: BiMath,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
    {
      value: "heart",
      icon: BiDonateHeart,
    },
  ];
  return (
    <Select>
      <SelectTrigger className="w-[84px]">
        <SelectValue placeholder="icon" />
      </SelectTrigger>
      <SelectContent className="w-[312px]">
        <SelectGroup>
          <div className="p-6 grid grid-rows-5 grid-cols-6 ">
            {house.map((item) => {
              const Icon = item.icon;
              return (
                <SelectItem value={item.value} className="border ">
                  <Icon className="w-[24px] h-[24px]" />
                </SelectItem>
              );
            })}
          </div>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
