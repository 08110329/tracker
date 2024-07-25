"use client"; 

import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Login = () => {
  return (
    <div className="w-full h-full m-auto flex">
      <div className="flex w-[50%] items-center justify-center">
        <div className="grid gap-y-10 w-[384px] h-[426px]">
          <div className="flex gap-2 justify-center pt-1">
            <img src="Vector.png" className="w-[23px] h-[23px]"/>
            <img src="Geld.png" className="w-[48px] h-[16px]"/>
          </div>
          <div className="grid justify-center">
            <h1 className="text-2xl	font-semibold flex justify-center">Welcome Back</h1>
            <p className="font-normal text-base	text-slate-700">Welcome back, Please enter your details</p>
          </div>
          <div className="grid gap-4">
            <Input placeholder="Email" className="bg-[#F3F4F6]"/>
            <Input placeholder="Password" className="bg-[#F3F4F6]"/>
            <Button className="rounded-2xl bg-[#0166FF]">Log in</Button>
          </div>
          <div className="flex justify-center gap-1">
            <p className="font-normal text-base	">Don’t have account?</p>
            <Link className="font-normal text-base text-[#0166FF]" href={`/signup`}>Sign up</Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-[#0166FF]"></div>
    </div>
  );
};
