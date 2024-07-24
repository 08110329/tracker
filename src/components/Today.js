import { Checkbox } from "./ui/checkbox"
import { House } from 'lucide-react';
import { Utensils } from 'lucide-react';
import { Card } from "./Card";

export const Today = () => {
    return (
        <div className="w-[1440px] m-auto grid gap-3">
            <h1 className="text-base font-semibold">Today</h1>
            <div className="w-[894px] h-[64px] flex rounded-xl border border-[#E5E7EB] px-6 py-2 justify-between ">
             <div className="flex gap-4 items-center">
                <Checkbox />
                <House className="px-2 py-2 bg-[#0166FF] text-sm rounded-2xl w-[30px] h-[30px] text-[#FFFFFF]"/>
                <div>
                    <p className="text-base	font-normal">Lending & Renting</p>
                    <p className="text-xs font-normal text-[#aca9a9]">14:00</p>
                </div>
             </div>
             <p className="flex items-center text-green-400	">- 1000T</p>
            </div>
            <div className="w-[894px] h-[64px] flex rounded-xl border border-[#E5E7EB] px-6 py-2 justify-between ">
             <div className="flex gap-4 items-center">
                <Checkbox />
                <Utensils className="px-2 py-2 bg-[#f43939] text-sm rounded-2xl w-[30px] h-[30px] text-[#FFFFFF]"/>
                <div>
                    <p className="text-base	font-normal">Food & Drinks</p>
                    <p className="text-xs font-normal text-[#aca9a9]">14:00</p>
                </div>
             </div>
             <p className="flex items-center text-[#f43939] 	">- 1000T</p>
            </div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}