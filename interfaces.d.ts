import React from "react";
export interface TextInputProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export interface TextAreaProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}