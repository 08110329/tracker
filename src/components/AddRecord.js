import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { SeTrigger } from "./SeTrigger";
import { Textarea } from "./ui/textarea";
import { AddRecordPopUp } from "./AddRecordPopUp";
import { useState } from "react";

export const AddRecord = () => {
  return (
    <div>
      <Dialog>
        <div className="w-fit h-fit grid gap-y-6 ">
          <p className="font-semibold text-2xl">Record</p>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-[250px] bg-[#0166FF] rounded-full text-white flex gap-2 text-base font-normal"
            >
              <PlusIcon />
              Add
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[792px]">
            <DialogHeader className="border-b-2 py-5 px-6">
              <DialogTitle className="font-semibold text-xl">
                Add record
              </DialogTitle>
            </DialogHeader>
            <div>
              <Tabs defaultValue="Expense" className="w-[400px]">
                <div className="w-[792px] flex gap-5">
                  <div className="flex-1 px-6 py-5">
                    <TabsList className="grid w-full grid-cols-2 rounded-full">
                      <TabsTrigger value="Expense" className="rounded-full">
                        Expense
                      </TabsTrigger>
                      <TabsTrigger value="Income" className="rounded-full">
                        Income
                      </TabsTrigger>
                    </TabsList>
                    <AddRecordPopUp value={"Expense"} />
                    <AddRecordPopUp value={"Income"} />
                  </div>
                  <div className="flex-1 flex flex-col gap-6 px-6 py-5">
                    <div className="grid gap-2">
                      <label>Payee</label>
                      <Input
                        type="Text"
                        placeholder="Write here"
                        className=" bg-[#F9FAFB]"
                      ></Input>
                    </div>
                    <div className="grid gap-2">
                      <label>Note</label>
                      <Textarea
                        placeholder="Write here"
                        className="bg-[#F9FAFB] pb-40 pt-4"
                      />
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};
