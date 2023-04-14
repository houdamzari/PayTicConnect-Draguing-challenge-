import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragZones, Button } from "./components";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragZones />
    </DndProvider>
  );
};

export default App;