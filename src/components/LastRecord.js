import { Lending } from "./Lending";

export const LastRecord = () => {
  const lists = [
    {
      name: "Lending & Renting",
      id: "0",
      desc: "3 hours ago",
      tag: "- 1,000₮"
    },
    {
        name: "Lending & Renting",
        id: "0",
        desc: "3 hours ago",
        tag: "- 1,000₮"
      },
      {
        name: "Lending & Renting",
        id: "0",
        desc: "3 hours ago",
        tag: "- 1,000₮"
      },
      {
        name: "Lending & Renting",
        id: "0",
        desc: "3 hours ago",
        tag: "- 1,000₮"
      },
      {
        name: "Lending & Renting",
        id: "0",
        desc: "3 hours ago",
        tag: "- 1,000₮"
      },

  ];
  return (
    <div className="w-full rounded-xl	bg-white">
      <div className="flex px-6 items-center py-4 gap-2">
        <p className="font-semibold	text-base">Last Records</p>
      </div>
      <div className="grid px-6 py-8 gap-3 border-t-2">
        {lists?.map((el,i) => (
        <Lending key={i} text={el. name}
        desc={el. desc}
        tag={el. tag}/>    
        ))}  
      </div>
    </div>
  );
};
