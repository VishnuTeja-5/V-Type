import React from "react";
import { ButtonGradient } from "../Components";
import { Link } from "react-router-dom";

function Button() {
  return (
    
    (
      <div className="flex justify-center text-center">
      <Link to={'/code'}>
      <ButtonGradient
        containerClassName="rounded-full"
        as="button"
        className=" bg-zinc-900 bg-opacity-30 backdrop-blur-md text-teal-700 hover:text-sky-700 flex items-center space-x-2">
        <span>Lets Code &#10137;</span>
      </ButtonGradient>
      </Link>
    </div>
    )
  );
}

export default Button;