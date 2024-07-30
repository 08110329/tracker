import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { SeTrigger } from "./SeTrigger";
import { ChevronDown } from "lucide-react";

export const AddExpense = () => {
  return (
    <Dialog>
      <div className="w-fit h-fit grid gap-y-6">
        <h1 className="font-semibold text-2xl">Records</h1>
        <DialogTrigger asChild>
          <Button
            className="w-[250px] rounded-3xl bg-[#0166FF]"
            variant="outline"
          >
            <p className="text-base	font-normal text-white">+ Add</p>
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className=" font-semibold text-base">
            Add Record
          </DialogTitle>
        </DialogHeader>
        <div className="flex px-4 py-6 gap-5">
          <div className="flex-1 ">
            <Tabs defaultValue="expense" className="grid gap-5">
              <TabsList className="rounded-3xl">
                <TabsTrigger
                  value="expense"
                  className="rounded-3xl px-6 flex-1"
                >
                  Expense
                </TabsTrigger>
                <TabsTrigger
                  value="income"
                  className="rounded-3xl  px-6 flex-1"
                >
                  Income
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Expense">
                <div className="grid gap-8">
                  <CardContent className="grid gap-5">
                    <div>
                      <Label htmlFor="name">Amount</Label>
                      <Input placeholder="₮ 000.00" />
                    </div>
                    <SeTrigger />
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label>Date</label>
                        <Input type="Date" className="bg-[#F9FAFB] "></Input>
                      </div>
                      <div className="flex-1">
                        <label>Time</label>
                        <Input type="Time" className="bg-[#F9FAFB] "></Input>
                      </div>
                    </div>
                  </CardContent>
                  <Button className="w-full bg-[#0166FF] rounded-3xl">
                    <p>Add Record</p>
                  </Button>
                </div>
                <div className="flex-1 flex flex-col gap-6">
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
                    <Input
                      type="Text"
                      placeholder="Write here"
                      className="bg-[#F9FAFB] pb-56 pt-4"
                    ></Input>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Income">
                <div className="grid gap-8">
                  <CardContent className="grid gap-5">
                    <div>
                      <Label htmlFor="name">Amount</Label>
                      <Input placeholder="₮ 000.00" />
                    </div>
                    <SeTrigger />
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label>Date</label>
                        <Input type="Date" className="bg-[#F9FAFB] "></Input>
                      </div>
                      <div className="flex-1">
                        <label>Time</label>
                        <Input type="Time" className="bg-[#F9FAFB] "></Input>
                      </div>
                    </div>
                  </CardContent>
                  <Button className="w-full bg-[#0166FF] rounded-3xl">
                    <p>Add Record</p>
                  </Button>
                </div>
                <div className="flex-1 flex flex-col gap-6">
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
                    <Input
                      type="Text"
                      placeholder="Write here"
                      className="bg-[#F9FAFB] pb-56 pt-4"
                    ></Input>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
