import React from "react";
import { Props } from "../../interfaces";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import TableHead from "./TableHead";

const Table: React.FC<Props.TableProps> = ({ children}) => {
  return (
    <div className="w-full flex justify-center mobile:px-0 px-[50px] mb-14 border-0">
      <table className="shadow-lg w-full mt-8">
       {children}
      </table>
    </div>
  );
};

export default Object.assign(Table, {
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow
})