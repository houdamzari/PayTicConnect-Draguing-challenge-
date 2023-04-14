import React from "react";
import { useDragDrop } from "../../hooks/useDragDrop";
import {DropZone ,Button , Table , TextInput , TextArea , CheckBox as Checkbox, DropDown } from "../../components";
import { useSelector } from "react-redux";
import { States } from "../../interfaces";
import useRenderZone from "../../hooks/useRenderZone";
import useSaveData from "../../hooks/useSaveData";
const DragZones: React.FC = () => {
  const components: States.ComponentState[] = [
    { id: 1, el: <TextInput /> },
    { id: 2, el: <TextArea /> },
    { id: 3, el: <DropDown /> },
    { id: 4, el: <Checkbox /> },
  ];
  const inputs = useSelector((state: States.AppState) => state.inputs);
  const {
    status,
    status2,
    firstDrop,
    secondDrop,
    firstZoneComponent,
    secondZoneComponent,
  } = useDragDrop();
  const renderFirstZone = useRenderZone(components, firstZoneComponent);
  const renderSecondZone = useRenderZone(components, secondZoneComponent);
  const { data, handleSave } = useSaveData(secondZoneComponent, inputs);

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex flex-row justify-center flex-wrap h-full  items-center mobile:px-0 gap-8 p-8 ">
        <DropZone
          headerText="Drag To Right"
          isOver={status.isOver}
          containerRef={firstDrop}
        >
          <>{renderFirstZone}</>
        </DropZone>
        <DropZone
          headerText="Click On Save"
          isOver={status2.isOver}
          containerRef={secondDrop}
        >
          <>{renderSecondZone}</>
        </DropZone>
      </div>
      <Button handleSave={handleSave} />
      {data.length > 0 && <Table data={data} />}
    </div>
  );
};

export default DragZones;
