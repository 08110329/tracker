import { Checkbox } from "./ui/checkbox"
import { Utensils } from 'lucide-react';
export const Card = ({text}) => {
    return (
        <div className="w-[894px] h-[64px] flex rounded-xl border border-[#d0d2d7] bg-slate-50 px-6 py-2 justify-between ">
             <div className="flex gap-4 items-center">
                <Checkbox className="border border-[#d0d2d7]"/>
                <Utensils className="px-2 py-2 bg-[#f43939] text-sm rounded-2xl w-[30px] h-[30px] text-[#FFFFFF]"/>
                <div>
                    <p className="text-base	font-normal">{text}</p>
                    <p className="text-xs font-normal text-[#aca9a9]">14:00</p>
                </div>
             </div>
             <p className="flex items-center text-[#f1a656] 	">- 1000T</p>
            </div>
    )
}