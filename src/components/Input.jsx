import React from "react";

const Input = ({ placeholder }) => {
  return (
    <div className="flex justify-center">
      <input
        className="border w-72 sm:w-80 md:w-96 rounded-md p-2 mt-2 outline-[#525252]"
        type="text"
        placeholder={placeholder}
        name=""
        id=""
      />
    </div>
  );
};

export default Input;
