import { List } from "@/components/List";
export const Income2 = () => {
  const list = [
    {
      name: "Bills",
      id: "0",
      tag: "5’000’000₮",
      desc: "15.50%",
    },
    {
      name: "Food",
      id: "1",
      tag: "5’000’000₮",
      desc: "15.50%",
    },
    {
      name: "Shopping",
      id: "2",
      tag: "5’000’000₮",
      desc: "15.50%",
    },
    {
      name: "Insurance",
      id: "3",
      tag: "5’000’000₮",
      desc: "15.50%",
    },
    {
      name: "Clothing",
      id: "4",
      tag: "5’000’000₮",
      desc: "15.50%",
    },
  ];
  return (
    <div className="flex-1 rounded-xl	bg-white">
      <div className="flex px-6 items-center py-4 gap-2 justify-between">
        <p className="font-semibold	text-base">Income - Expense</p>
        <p className="text-base font-normal	text-gray-500">Jun 1 - Nov 30</p>
      </div>
      <div className="flex px-6 py-8 gap-12 border-t-2 ">
        <div className="flex-1">gtg</div>
        <div className="flex-2">
          {list?.map((el, i) => (
            <List key={i} text={el.name}
            tag={el.tag}
            desc={el.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
