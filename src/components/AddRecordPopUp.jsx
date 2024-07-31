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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { SeTrigger } from "./SeTrigger";
import { Textarea } from "./ui/textarea";


export const AddRecordPopUp = ({ value }) => {
  return (
    <TabsContent value={value}>
      <Card>
        <CardContent className="grid gap-8">
          <div className="grid gap-5">
            <div className="">
              <Label htmlFor="name">Amount</Label>
              <Input placeholder="₮ 000.00" />
            </div>
            <SeTrigger
              text={value === "Income" ? "Find or choose category" : "Choose"}
            />
            <div className="flex gap-3">
              <div className="flex-1 grid gap-1">
                <label>Date</label>
                <Input
                  type="Date"
                  className="bg-[#F9FAFB] flex justify-center"
                ></Input>
              </div>
              <div className="flex-1 grid gap-1">
                <label>Time</label>
                <Input
                  type="Time"
                  className="bg-[#F9FAFB] flex justify-center"
                ></Input>
              </div>
            </div>
          </div>
          <Button style={{backgroundColor: value === "Income" ? "green" : "#0166FF"}} className="w-full rounded-3xl">
            <p>Add Record</p>
          </Button>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
