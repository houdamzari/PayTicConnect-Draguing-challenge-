import { ReactNode } from "react";
export interface TableElement {
  id: number;
  title: string;
  description: string;
  status: string;
  auto: string;
}

export namespace States {
  interface StoredComponentState {
    id: number;
  }
  interface ComponentState {
    id: number;
    el: JSX.Element;
  }
  interface AppState {
    inputs: {
      title: string;
      description: string;
      firstZoneComponent: StoredComponentState[] | never[];
      secondZoneComponent: StoredComponentState[] | never[];
      checkbox: boolean;
      dropdown: string;
    };
  }
}
export namespace Props {
  interface TableProps {
    data?: TableElement[];
    children?: ReactNode;
  }
  interface ButtonProps {
    handleSave: () => void;
  }
  interface DragZoneProps {
    children: ReactNode;
    containerRef: ConnectDropTarget;
    headerText: string;
    isOver: boolean;
  }
  interface TableRowProps {
    children: ReactNode;
    className?: String
  }
  interface TableHeaderProps extends TableRowProps {
  }
}