import React, { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import arrow from "../../assets/arrow.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeDropdown } from "../../reducer/inputsSlice";
import useOutsideClick from "../../hooks/useOutsideClick";
import { States } from "../../interfaces";
const DropDown: React.FC = () => {
  const { dropdown } = useSelector((state: States.AppState) => state.inputs);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "input",
    item: { id: 3 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const handleDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = (e.target as HTMLDivElement).innerHTML;
    dispatch(changeDropdown(value));
    setOpen(false);
  };
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    if (open) {
      setOpen(false);
    }
  });
  return (
    <div
      ref={drag}
      className={`relative flex flex-col justify-start items-start gap-[12px] ${
        isDragging ? "border-2 border-secondary-color opacity-[0.5]" : ""
      }`}
    >
      <h5 className="font-bold text-md">Status:</h5>
      <div ref={wrapperRef}>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer bg-white w-[331px] border border-secondary-color flex flex-row justify-between items-center outline-none h-[44px] px-[21px] rounded-[10px]"
        >
          <p>{dropdown ? dropdown : "Choose a status"}</p>
          <img src={arrow} alt="arrow" />
        </div>
        {open && (
          <div className="absolute top-[80px] p-[21px] flex flex-col gap-[20px] z-[99999] bg-primary-color w-full shadow-xl h-fit">
            <p className="cursor-pointer" onClick={(e) => handleDropdown(e)}>
              Allow Comments
            </p>
            <p className="cursor-pointer" onClick={(e) => handleDropdown(e)}>
              Disable Comments
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
