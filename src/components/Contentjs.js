import { Selectjs } from "./Selectjs";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup } from "./ui/radio-group";
import { Select } from "./ui/select";
import { ChevronRight } from "lucide-react";
import { Slider } from "./ui/slider";
import { Today } from "./Today";
import { Yesterday } from "./Yesterday";
import { Lcard } from "./Lcard";
import { Day } from "@/components/Day";
import { AddExpense } from "./AddExpense";

export const Contentjs = () => {
  const categories = [
    {
      name: "Food & Drinks",
      id: "0",
    },
    {
      name: "Shopping",
      id: "1",
    },
    {
      name: "Housing",
      id: "2",
    },
    {
      name: "Transportation",
      id: "3",
    },
    {
      name: "Vehicle",
      id: "4",
    },
    {
      name: "Life & Entertainment",
      id: "5",
    },
    {
      name: "Communication, PC",
      id: "6",
    },
    {
      name: "Financial expenses",
      id: "7",
    },
    {
      name: "Investments",
      id: "8",
    },
    {
      name: "Income",
      id: "9",
    },
    {
      name: "Others",
      id: "10",
    },
  ];
  return (
    <div className="w-full h-100vh bg-gray-200">
      <div className="w-fit m-auto flex gap-4 p-6">
        <div className="py-6 px-4 bg-slate-50 border border-[#d0d2d7] grid gap-y-6 rounded-xl">
          <AddExpense/>
          <div>
            <Input placeholder="Search"></Input>
          </div>
          <div className="grid gap-y-2.5 text-base font-semibold">
            <h1>Types</h1>
            <div className="grid ">
              <div className="flex gap-2 px-3	py-3">
                <Checkbox id="terms" className="rounded-lg " />
                <Label htmlFor="terms" className="text-base font-normal ">
                  All
                </Label>
              </div>
              <div className="flex gap-2 px-3	py-3">
                <Checkbox id="terms" className="rounded-lg" />
                <Label htmlFor="terms" className="text-base font-normal">
                  Income
                </Label>
              </div>
              <div className="flex gap-2 px-3	py-3">
                <Checkbox id="terms" className="rounded-lg " />
                <Label htmlFor="terms" className="text-base font-normal">
                  Expense
                </Label>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex justify-between">
              <h1 className="font-semibold text-base">Category</h1>
              <p className="text-[#d4d6d9] font-normal text-base">Clear</p>
            </div>
            <div className="grid gap-2">
              {categories?.map((el, index) => (
                <Selectjs key={index} text={el.name} />
              ))}
            </div>
            <div className="flex gap-2 px-3 py-2">
              <p className="font-normal text-base text-[#0166FF]">+</p>
              <p className="font-normal text-base">Add Category</p>
            </div>
          </div>
          <div className="grid gap-4">
            <h1 className="font-semibold text-base">Amount Range</h1>
            <div className="flex gap-4">
              <Button className="flex-1 bg-[#F3F4F6] border border-[#E5E7EB] text-black	">
                <p>0</p>
              </Button>
              <Button className="flex-1 bg-[#F3F4F6] border border-[#E5E7EB] text-black	">
                <p>1000</p>
              </Button>
            </div>
            <div className="grid">
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className=""
              ></Slider>
              <div className="flex justify-between">
                <p>0</p>
                <p>1000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid my-8">
          <Day />
          <div className="w-fit grid gap-6 bg-gray-200">
            <Lcard />
            <Today />
            <Yesterday />
          </div>
        </div>
      </div>
    </div>
  );
};
