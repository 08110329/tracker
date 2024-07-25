import { Checkbox } from "./ui/checkbox"

export const Lcard = () => {
    return (
        <div className="w-[894px] h-[48px] flex rounded-xl border border-[#d0d2d7] bg-slate-50 px-6  justify-between ">
             <div className="flex gap-4 items-center">
                <Checkbox className="border border-[#d0d2d7]"/>
                <div>
                    <p className="text-base	font-normal">Select All</p>
                </div>
             </div>
             <p className="flex items-center text-[#434241]">- 35,500T</p>
            </div>
    )
}