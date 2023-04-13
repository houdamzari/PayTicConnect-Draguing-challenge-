import React from "react";

const DropZone: React.FC<any> = ({ containerRef, children, headerText }) => {
  return (
    <div className="relative">
      <div className="absolute w-full rounded-t-[20px] px-[26px] pt-[20px] pb-[25px] top-[-60px] bg-secondary-color">
        <h4 className="text-primary-color font-bold">{headerText}</h4>
      </div>
      <div
        className="w-[400px] h-[280px] bg-primary-color px-[26px] py-[21px] rounded-[20px] flex-col flex justify-start items-start gap-[12px] relative z-[9999] shadow-lg"
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  );
};

export default DropZone;