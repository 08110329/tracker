import { Eye } from "lucide-react";
import { ChevronRight } from "lucide-react";


export const Selectjs = ({text}) => {
    return (
        <div className="grid gap-2">
            <div className="flex justify-between px-3 py-2">
              <div className="flex gap-1">
                <Eye className="w-[20px] h-[20px]"/>
                <p className="text-base	font-normal	">{text}</p>
              </div>
              <p>
                <ChevronRight />
              </p>
            </div>
          </div>
    )
}