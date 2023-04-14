import { useState } from "react";
import { States, TableElement } from "../interfaces";

const useSaveData = (
  secondZoneComponent: States.StoredComponentState[],
  inputs: States.AppState["inputs"]
) => {
  const [data, setData] = useState<TableElement[]>([]);

  const handleSave = () => {
    const id = data.length + 1;
    const newData = {
      id,
      title: "",
      description: "",
      status: "",
      auto: "",
    };

    secondZoneComponent.forEach((zone: States.StoredComponentState) => {
      switch (zone.id) {
        case 1:
          newData.title = inputs.title;
          break;
        case 2:
          newData.description = inputs.description;
          break;
        case 3:
          newData.status = inputs.dropdown;
          break;
        case 4:
          newData.auto = `${inputs.checkbox}`;
          break;
      }
    });

    setData([...data, newData]);
  };

  return { data, handleSave };
};

export default useSaveData;
