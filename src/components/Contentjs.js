import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup } from "./ui/radio-group";

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
              <Checkbox id="terms" className="rounded-lg"/>
              <Label htmlFor="terms" className="text-base font-normal">All</Label>
            </div>
            <div className="flex gap-2 px-3	py-3">
              <Checkbox id="terms" className="rounded-lg"/>
              <Label htmlFor="terms" className="text-base font-normal">Income</Label>
            </div>
            <div className="flex gap-2 px-3	py-3">
              <Checkbox id="terms" className="rounded-lg "/>
              <Label htmlFor="terms" className="text-base font-normal">Expense</Label>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};
