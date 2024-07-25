"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";


const Signup = () => {
  return (
    <div className="w-full h-full m-auto flex">
      <div className="flex-1 ">
        <div className="grid gap-y-10 w-[384px] h-[426px]">
          <div className="flex gap-2 justify-center pt-1">
            <img src="Vector.png" className="w-[23px] h-[23px]" />
            <img src="Geld.png" className="w-[48px] h-[16px]" />
          </div>
          <div className="grid justify-center">
            <h1 className="text-2xl	font-semibold flex justify-center">
              Create Geld account
            </h1>
            <p className="font-normal text-base	text-slate-700">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="grid gap-4">
            <Input placeholder="Name" className="bg-[#F3F4F6]"></Input>
            <Input placeholder="Email" className="bg-[#F3F4F6]"></Input>
            <Input placeholder="Password" className="bg-[#F3F4F6]"></Input>
            <Input placeholder="Re-assword" className="bg-[#F3F4F6]"></Input>
             <Button className="rounded-2xl bg-[#0166FF]">Sign up</Button> 
          </div>
          <div className="flex justify-center gap-1">
            <p className="font-normal text-base	">Already have account?</p>
            <Link className="font-normal text-base text-[#0166FF]" href={`/`}>Log in</Link>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#0166FF]"></div>
    </div>
  );
};
export default Signup;
