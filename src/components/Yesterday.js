import { Card } from "./Card"

export const Yesterday = () => {
    const box = ["Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks",]
    return (
        <div className="grid gap-3">
            <h1 className="text-base font-semibold">Yesterday</h1>
            {box?.map((item, i) => (
              <Card key={i} text={item. i}/>    
            ))}

            {/* {
                Array.from({length: 6}).map((_, i) => (
              <Card key={i} text="Food & Drinks"/>    

                ))
            }
           */}
        </div>
    )
}