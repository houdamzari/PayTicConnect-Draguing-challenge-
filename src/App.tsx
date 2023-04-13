import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragZones } from "./components";
import Button from "./components/Button";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragZones />
    </DndProvider>
  );
};

export default App;