import { Checkbox } from "./ui/checkbox"

export const Lcard = () => {
    return (
        <div className="w-[894px] h-[64px] flex rounded-xl border border-[#E5E7EB] px-6 py-2 justify-between ">
             <div className="flex gap-4 items-center">
                <Checkbox />
                <div>
                    <p className="text-base	font-normal">Select All</p>
                </div>
             </div>
             <p className="flex items-center text-[#434241]">- 35,500T</p>
            </div>
    )
}