import React, { useMemo } from "react";
import { States } from "../interfaces";

const useRenderZone = (
  components: States.ComponentState[],
  zoneComponents: States.StoredComponentState[]
) => {
  return useMemo(() => {
    const condition = (id: number) =>
      zoneComponents.some(
        (component: States.StoredComponentState) => component.id === id
      );
    const list = components?.map((component: States.ComponentState) =>
      condition(component.id) ? (<div key={component.id}>{ component.el } </div>)  : null
    );

    return list;
  }, [zoneComponents]);
};

export default useRenderZone;
