import React, { useState } from "react";
import { TextInput, TextArea } from "../components";
import { useDrop } from "react-dnd";

export const useDragDrop = () => {
  const [firstZoneComponent, setFirstZone] = useState([
    { id: 1, el: <TextInput /> },
    {
      id: 2,
      el: <TextArea />,
    },
  ]);
  const [secondZoneComponent, setSecondZone] = useState<any>([]);
  const [, firstDrop] = useDrop(() => ({
    accept: "input",
    drop: (item: { id: number }) => handleSwitchRightToLeft(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const [, secondDrop] = useDrop(() => ({
    accept: "input",
    drop: (item: { id: number }) => handleSwitchRLeftToRight(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const handleSwitchRightToLeft = (id: number) => {
    console.log(id);
    const removeComponent = secondZoneComponent.filter(
      (el: { id: number; el: JSX.Element }) => el.id !== id
    );
    const addElement = secondZoneComponent.filter(
      (el: { id: number; el: JSX.Element }) => el.id === id
    );
    setSecondZone(removeComponent);
    setFirstZone([...firstZoneComponent, ...addElement]);
  };
  const handleSwitchRLeftToRight = (id: number) => {
    console.log(id);
    const removeComponent = firstZoneComponent.filter(
      (el: { id: number; el: JSX.Element }) => el.id !== id
    );
    const addElement = firstZoneComponent.filter(
      (el: { id: number; el: JSX.Element }) => el.id === id
    );

    setFirstZone(removeComponent);
    setSecondZone([...secondZoneComponent, ...addElement]);
  };
  return { firstDrop, secondDrop, firstZoneComponent, secondZoneComponent };
};
