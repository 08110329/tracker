import { Income1 } from "@/components/Income1"
import { Income2 } from "@/components/Income2"
import { LastRecord } from "./LastRecord";
export const DContent = () => {
  return (
    <div className="w-full h-100vh bg-gray-200">
      <div className="w-[1440px] m-auto flex px-32 gap-6 py-6">
        <div className="flex-1 ">
          <img src="Large.jpg" className="w-[384px] h-[216px] rounded-xl	"/>
        </div>
        <div className="flex-1 rounded-xl	bg-white">
          <div className="flex px-6 items-center py-4 gap-2">
            <img src="Ellipse 124.png" className="w-[8px] h-[8px]"/>
            <p className="font-semibold	text-base	">Your Income</p>
          </div>
          <div className="grid px-6 py-5 gap-3 border-t-2 ">
            <div className="grid gap-1">
              <h1 className="text-4xl	font-semibold	">1,200,000 ₮</h1>
            <p className="text-lg	font-normal	text-[#64748B]">Your Income Amount</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="Vecto.png" className="w-[19.5px] h-[19.5px]"/>
            <p className="text-lg	font-normal	">32% from last month</p>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-xl	bg-white">
          <div className="flex px-6 items-center py-4 gap-2">
            <img src="Ellipse .png" className="w-[8px] h-[8px]"/>
            <p className="font-semibold	text-base	">Total Expenses</p>
          </div>
          <div className="grid px-6 py-5 gap-3 border-t-2 ">
            <div className="grid gap-1">
              <h1 className="text-4xl	font-semibold	">-1,200,000 ₮</h1>
            <p className="text-lg	font-normal	text-[#64748B]">Your Income Amount</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="Vecto.png" className="w-[19.5px] h-[19.5px]"/>
            <p className="text-lg	font-normal	">32% from last month</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] m-auto flex px-32 gap-6 py-6">
        <div className="flex-1">
          <Income1/>
        </div>
        <div className="flex-1">
        <Income2/>
        </div>
      </div>
      <div className="w-[1440px] m-auto flex px-32 gap-6 py-6">
        <LastRecord/>
      </div>
    </div>
  );
};
