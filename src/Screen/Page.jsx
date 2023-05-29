import React from "react";
import Input from "./../components/Input";
const Page = () => {
  return (
    <div>
      <div className="left hidden">hello</div>
      <div className="right">
        <div className="flex justify-center text-4xl text-[#525252] mt-14 font-semibold">
          Love Birds
        </div>
        <div className="font-thin text-[#525252] flex justify-center mt-6">
          Welcome To Lovebirds
        </div>
        {/* <div>
          <Input placeholder={"Enter Your Email Address"} />
        </div> */}
      </div>
    </div>
  );
};

export default Page;
