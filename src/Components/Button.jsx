import React from "react";
import { ButtonGradient } from "../Components";

function Button() {
  return (
    (<div className="flex justify-center text-center">
      <ButtonGradient
        containerClassName="rounded-full"
        as="button"
        className=" bg-zinc-900 bg-opacity-30 backdrop-blur-md text-teal-700 hover:text-sky-700 flex items-center space-x-2">
        <span>Lets Code &#10137;</span>
      </ButtonGradient>
    </div>)
  );
}

export default Button;