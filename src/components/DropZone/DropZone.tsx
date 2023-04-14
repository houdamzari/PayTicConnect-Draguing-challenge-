import React from "react";

const DropZone: React.FC<Props.DragZoneProps> = ({
  containerRef,
  children,
  headerText,
  isOver,
}) => {
  return (
    <div className="relative mobile:w-full mt-14">
      <div className="absolute w-full rounded-t-[20px] px-[26px] pt-[20px] pb-[25px] top-[-60px] bg-secondary-color">
        <h4 className="text-primary-color font-bold">{headerText}</h4>
      </div>
      <div
        className={`w-[400px] h-[410px] mobile:w-full  px-[26px] py-[21px] rounded-[20px] 
        flex-col flex justify-start items-start gap-[12px] relative z-[9999] shadow-lg ${
          isOver ? "bg-secondary-color opacity-[0.5]" : "bg-primary-color"
        }`}
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  );
};

export default DropZone;