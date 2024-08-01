import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import { AddCategory } from "./AddCategory";

export const SeTrigger = ({ text }) => {
  return (
    <div>
      <Label htmlFor="framework">Category</Label>
      <Select className="w-full">
        <SelectTrigger id="framework" className="bg-[#F9FAFB]">
          <SelectValue placeholder={text} />
        </SelectTrigger>
        <AddCategory />
      </Select>
    </div>
  );
};
