import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SquarePlus } from "lucide-react";
import { Adds } from "./Adds";
import { HouseIcon } from "../../public/House-Icon";

export const AddCategory = ({ text }) => {
  return (
    <div>
      <SelectContent position="popper">
        <Adds />
        <div className="grid">
          <SelectItem value="home" className="p-4 gap-3 border-b-2">
            <div className="flex gap-3">
              <HouseIcon />
              <p className="font-normal	text-base">Home</p>
            </div>
          </SelectItem>
          <SelectItem value="gift">
            <div className="flex gap-3">
              <img src="2.svg" />
              <p className="font-normal	text-base">Gift</p>
            </div>
          </SelectItem>
          <SelectItem value="food">
            <div className="flex gap-3">
              <img src="3.svg" />
              <p className="font-normal	text-base">Food</p>
            </div>
          </SelectItem>
          <SelectItem value="drink">
            <div className="flex gap-3">
              <img src="Wine.svg" />
              <p className="font-normal	text-base">Drink</p>
            </div>
          </SelectItem>
          <SelectItem value="taxi">
            <div className="flex gap-3">
              <img src="Taxi.svg" />
              <p className="font-normal	text-base">Taxi</p>
            </div>
          </SelectItem>
          <SelectItem value="shop">
            <div className="flex gap-3">
              <img src="TShirt.svg" />
              <p className="font-normal	text-base">Shopping</p>
            </div>
          </SelectItem>
        </div>
      </SelectContent>
    </div>
  );
};
