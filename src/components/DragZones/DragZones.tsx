import React, { useState } from "react";
import DropZone from "./DropZone";
import Button from "./Button";
import Table from "./Table";
import { useSelector } from "react-redux";
const DragZones: React.FC = () => {
  const { title, description } = useSelector((state: any) => state.inputs);
  const { firstDrop, secondDrop, firstZoneComponent, secondZoneComponent } =
    useDragDrop();

  const [data, setData] = useState<any>([]);
  const handleSave = () => {
    const titleCondition = secondZoneComponent.some(
      (zone: any) => zone.id === 1
    );
    const descCondition = secondZoneComponent.some(
      (zone: any) => zone.id === 2
    );
    const id = data.length + 1;
    setData([
      ...data,
      {
        id: id,
        title: titleCondition ? title : "",
        description: descCondition ? description : "",
      },
    ]);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-row justify-center items-center  gap-8 p-8">
        <DropZone headerText="Drag To Right" containerRef={firstDrop}>
          {firstZoneComponent.map((component) => component.el)}
        </DropZone>
        <DropZone headerText="Click On Save" containerRef={secondDrop}>
          {secondZoneComponent.map(
            (component: { id: number; el: JSX.Element }) => component?.el
          )}
        </DropZone>
      </div>
      <Button handleSave={handleSave} />
      {data.length > 0 && <Table data={data} />}
    </div>
  );
};

export default DragZones;