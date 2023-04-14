import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
  addElementFirstZone,
  addElementSecondZone,
  removeElementFirstZone,
  removeElementSecondZone,
} from "../reducer/inputsSlice";
import { States } from "../interfaces";
export const useDragDrop = () => {
  const dispatch = useDispatch();
  const { firstZoneComponent, secondZoneComponent } = useSelector(
    (state: States.AppState) => state.inputs
  );
  const [status, firstDrop] = useDrop(() => ({
    accept: "input",
    drop: (item: { id: number }) => handleSwitchRightToLeft(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const [status2, secondDrop] = useDrop(() => ({
    accept: "input",
    drop: (item: { id: number }) => handleSwitchRLeftToRight(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const handleSwitchRightToLeft = (id: number) => {
    dispatch(addElementFirstZone([{ id: id }]));
    dispatch(removeElementSecondZone(id));
  };
  const handleSwitchRLeftToRight = (id: number) => {
    dispatch(addElementSecondZone([{ id: id }]));
    dispatch(removeElementFirstZone(id));
  };
  return {
    status,
    status2,
    firstDrop,
    secondDrop,
    firstZoneComponent,
    secondZoneComponent,
  };
};
