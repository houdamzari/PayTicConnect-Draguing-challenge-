import React from "react";
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { changeDescription } from "../reducer/inputsSlice";
const TextArea: React.FC = () => {
  const dispatch = useDispatch();
  const { description } = useSelector((state: any) => state.inputs);
  const [, drag] = useDrag(() => ({
    type: "input",
    item: { id: 2 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className="flex flex-col justify-start items-start gap-[12px]"
    >
      <h5 className="font-bold text-md">Description:</h5>
      <textarea
        value={description}
        onChange={(e) => dispatch(changeDescription(e.target.value))}
        name="description"
        placeholder="Choose a description..."
        className="bg-white border w-[331px] h-[100px] outline-none resize-none px-[21px] py-[8px] border-secondary-color rounded-[10px]"
      ></textarea>
    </div>
  );
};

export default TextArea;