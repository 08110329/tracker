import { Checkbox } from "./ui/checkbox"
import { House } from 'lucide-react';
export const Lending = ({text, desc, tag}) => {
    return (
        <div className="w-full flex border-t-2 px-6 py-5 justify-between ">
             <div className="flex gap-4 items-center">
                <Checkbox className="border border-[#d0d2d7]"/>
                <House className="px-2 py-2 bg-[#0166FF] text-sm rounded-2xl w-[30px] h-[30px] text-[#FFFFFF]"/>
                <div>
                    <p className="text-base	font-normal">{text}</p>
                    <p className="text-xs font-normal text-[#aca9a9]">{desc}</p>
                </div>
             </div>
             <p className="flex items-center text-green-400	">{tag}</p>
            </div>  
    )
}