import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { DragZones } from "./components";
import { useDispatch } from "react-redux";
import { addElementFirstZone, resetSecondZone } from "./reducer/inputsSlice";
const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addElementFirstZone([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]));
    dispatch(resetSecondZone());
  }, []);
  const options = {
    enableMouseEvents: true,
  };
  return (
    <DndProvider backend={TouchBackend} options={options}>
      <DragZones />
    </DndProvider>
  );
};

export default App;