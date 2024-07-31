"use client";
const Loading = () => {
  return (
    <div className="w-full h-[100vh] m-auto flex flex-col gap-12">
      <div className="flex gap-2  pt-1">
        <img src="Vector.png" className="w-[23px] h-[23px]" />
        <img src="Geld.png" className="w-[48px] h-[16px] mt-1" />
      </div>
      <div className="grid">
        <svg className="animate-spin h-4 w-4"></svg>
        <p>Түр хүлээнэ үү</p>
      </div>
    </div>
  );
};
export default Loading;
