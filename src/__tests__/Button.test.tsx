import React from "react";
import { Props } from "../interfaces";
const Button: React.FC<Props.ButtonProps> = ({ handleSave }) => {
  return (
    <div
      onClick={() => handleSave()}
      className="bg-secondary-color px-[58px] py-[15px] uppercase 
      text-primary-color rounded-[20px] cursor-pointer hover:text-secondary-color 
    border hover:border-secondary-color hover:bg-primary-color transition-all mobile:mt-8"
    >
      Save
    </div>
  );
};

export default Button;
