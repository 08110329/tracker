"use client";

import { Contentjs } from "@/components/Contentjs";
import { Header } from "@/components/Header";


export default function Home() {
  return (
   <div className="w-full m-auto">
    <Header/>
    <Contentjs/>
   </div>
  );
}
// import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";

// const RecordBlue = () => {
//   return (
//     <div className="w-[792px] h-[512px] m-auto">
//       <div className="grid">
//         <div className="flex">
//           <p>Add Record</p>
//           <X />
//         </div>
//         <div className="flex">
//           <div>
//             <Button>
//                 <Button></Button>
//                 <Button></Button>
//             </Button>
//             <div></div>
//           </div>
//           <div></div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default RecordBlue;

