import React from "react";
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { changeCheckbox } from "../../reducer/inputsSlice";
import check from "../../assets/check.svg";
import { States } from "../../interfaces";
const CheckBox: React.FC = () => {
  const dispatch = useDispatch();
  const { checkbox } = useSelector((state: States.AppState) => state.inputs);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "input",
    item: { id: 4 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`flex flex-row justify-start items-center gap-[13px] ${
        isDragging ? "border-2 border-secondary-color opacity-[0.5]" : ""
      } mb-10`}
    >
      <div
        className={`relative border border-secondary-color w-[24px] h-[24px] flex justify-center items-center ${
          checkbox ? "bg-secondary-color" : "bg-transparent"
        }`}
      >
        <input
          type="checkbox"
          role={"checkbox"}
          checked={checkbox}
          onChange={() => dispatch(changeCheckbox())}
          className="appearance-none absolute z-[99999] w-full h-full top-0 left-0 cursor-pointer"
        />
        <img src={check} alt="check" />
      </div>
      <h5 className="text-base font-bold ">Post Automatically</h5>
    </div>
  );
};

export default CheckBox;