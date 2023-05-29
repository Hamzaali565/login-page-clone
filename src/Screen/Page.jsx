import React from "react";
import Input from "./../components/Input";
import Button from "./../components/Button";
import Google from "../components/Google";
const Page = () => {
  return (
    <div className="lg:flex lg:justify-between ">
      <div className="left hidden lg:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
          alt=""
          className="h-screen"
        />
      </div>
      <div className="right lg:border lg:w-1/2 h-screen ">
        <div className="flex justify-center text-4xl text-[#525252] mt-14 font-semibold lg:mt-24 ">
          Love Birds
        </div>
        <div className="font-thin text-2xl text-[#525252] flex justify-center mt-6">
          Welcome To Lovebirds
        </div>
        <div className="mt-5">
          <Input placeholder={"Enter Your Email Address"} />
        </div>
        <div>
          <Input placeholder={"Enter Your Password"} />
        </div>
        <div className=" flex justify-center mt-2 text-sm text-[#525252] cursor-pointer hover:underline ">
          Forgot Password?
        </div>
        <div className="mt-3">
          <Button />
        </div>
        <div className="flex items-center justify-center space-x-3 mt-4">
          <div className="bg-gray-400 h-0.5 w-24" />
          <div>or</div>
          <div className="bg-gray-400 h-0.5 w-24" />
        </div>

        <div className="mt-4 cursor-pointer">
          <Google />
        </div>
        <div className="text-xs flex justify-center mt-4">
          New to Lovebirds?{" "}
          <span className="underline ml-1 cursor-pointer">Create Account</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
