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

export const AddExpense = () => {
  return (
    <Dialog>
      <div className="w-fit h-fit grid gap-y-6	">
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
      <DialogContent className="">
        <DialogHeader className="px-6 border">
          <DialogTitle className="font-semibold text-base">
            Add Record
          </DialogTitle>
        </DialogHeader>
        <div className="flex ">
          <div className=" flex-1 border">
            <Tabs defaultValue="expense" >
              <TabsList className="w-full rounded-2xl">
                <TabsTrigger value="expense" className="rounded-2xl px-6">Expense</TabsTrigger>
                <TabsTrigger value="income" className="rounded-2xl  px-6">Income</TabsTrigger>
              </TabsList>
              <TabsContent value="expense">
                <Card className="">
                  <CardContent>
                    <div>
                    <Label htmlFor="name">Amount</Label>
                    <Input placeholder="₮ 000.00" className="bg-[#F3F4F6]"/>
                    </div>
                    <SeTrigger/>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex-1 border">
            <p>Payee</p>
            <div>
                <p>New</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
