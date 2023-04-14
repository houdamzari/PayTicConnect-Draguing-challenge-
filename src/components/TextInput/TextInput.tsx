import React from "react";
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle } from "../../reducer/inputsSlice";
import { States } from "../../interfaces";
const TextInput: React.FC = () => {
  const dispatch = useDispatch();
  const { title } = useSelector((state: States.AppState) => state.inputs);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "input",
    item: { id: 1 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`flex flex-col justify-start items-start gap-[12px] ${
        isDragging ? "border-2 border-secondary-color opacity-[0.5]" : ""
      }`}
    >
      <h5 className="font-bold text-md">Title:</h5>
      <input
        type="text"
        value={title}
        onChange={(e) => dispatch(changeTitle(e.target.value))}
        placeholder="Choose a name..."
        className="bg-white w-[331px] border border-secondary-color outline-none h-[44px] px-[21px] rounded-[10px]"
      />
    </div>
  );
};

export default TextInput;
