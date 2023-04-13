import React from "react";

const Button: React.FC<any> = ({ handleSave }) => {
  return (
    <div
      onClick={() => handleSave()}
      className="bg-secondary-color px-[58px] py-[15px] uppercase 
      text-primary-color rounded-[20px] cursor-pointer hover:text-secondary-color 
    border hover:border-secondary-color hover:bg-primary-color transition-all"
    >
      Save
    </div>
  );
};

export default Button;