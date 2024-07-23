import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup } from "./ui/radio-group";
import { Select } from "./ui/select";
import { Eye } from "lucide-react";
import { ChevronRight } from "lucide-react";

export const Contentjs = () => {
  return (
    <div className="w-full m-auto flex ">
      <div className="pt-6 px-4 bg-[#F9FAFB] border border-[#E5E7EB] grid gap-y-6 rounded-xl">
        <div className="w-fit h-fit grid gap-y-6	">
          <h1 className="font-semibold text-2xl">Records</h1>
          <Button className="w-[250px] rounded-3xl bg-[#0166FF]">
            <p className="text-base	font-normal">+</p>
            <p className="text-base	font-normal">Add</p>
          </Button>
        </div>
        <div>
          <Input placeholder="Search"></Input>
        </div>
        <div className="grid gap-y-2.5 text-base font-semibold">
          <h1>Types</h1>
          <div className="grid ">
            <div className="flex gap-2 px-3	py-3">
              <Checkbox id="terms" className="rounded-lg" />
              <Label htmlFor="terms" className="text-base font-normal">
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
            <p>Clear</p>
          </div>
          <div className="grid gap-2">
            <div className="flex justify-between px-3	">
              <div className="flex gap-1">
                <Eye className="w-[20px] h-[20px]"/>
                <p className="text-base	font-normal	">Food & Drinks</p>
              </div>
              <p>
                <ChevronRight />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
