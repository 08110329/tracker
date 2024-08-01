import { SquarePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IconMap } from "./IconMap";

export const Adds = () => {
  return (
    <Dialog>
      <div>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full flex justify-start">
            <div className=" flex p-4 gap-3 border-b-2">
              <SquarePlus />
              <p className="font-normal	text-base">Add Category</p>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[494px]">
          <DialogHeader className="border-b-2 py-5 px-6">
            <DialogTitle className="font-semibold text-xl">
              Add Category
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-8 p-6">
            <div className="flex gap-3">
              <IconMap />
              <div className="w-[350px] grid gap-2">
                <Input
                  type="Text"
                  placeholder="Write here"
                  className=" bg-[#F9FAFB]"
                ></Input>
              </div>
            </div>
            <Button className="w-full rounded-3xl bg-green-600">
              <p>Add Record</p>
            </Button>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};
