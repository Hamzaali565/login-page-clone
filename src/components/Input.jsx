import React from "react";

const Input = ({ placeholder }) => {
  return (
    <div className="flex justify-center">
      <input
        className="border w-72 p-2 mt-2"
        type="text"
        placeholder={placeholder}
        name=""
        id=""
      />
    </div>
  );
};

export default Input;
