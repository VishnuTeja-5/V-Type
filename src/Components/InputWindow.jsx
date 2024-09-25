import React from "react";

const InputWindow = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <textarea
        rows="7"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={
          "focus:outline-none w-full h-full border border-gray-900 z-10 rounded-md p-4 transition duration-200 bg-black text-white"
        }
      ></textarea>
    </>
  );
};

export default InputWindow;