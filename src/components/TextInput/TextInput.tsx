import React from "react";
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle } from "../../reducer/inputsSlice";
const TextInput: React.FC = () => {
  const dispatch = useDispatch();
  const { title } = useSelector((state: any) => state.inputs);
  const [, drag] = useDrag(() => ({
    type: "input",
    item: { id: 1 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div ref={drag} className="flex flex-col justify-start items-start  gap-[12px]"
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