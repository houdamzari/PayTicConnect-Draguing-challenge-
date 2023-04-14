import React from "react";
import { Props, TableElement } from "../../interfaces";

const Table: React.FC<Props.TableProps> = ({ data }) => {
  return (
    <div className="w-full flex justify-center mobile:px-0 px-[50px] mb-14">
      <table className="shadow-lg w-full mt-8">
        <thead className="w-full">
          <tr className="flex flex-row w-full rounded-t-[28px] bg-secondary-color">
            <th className="w-full px-4 py-2 mobile:text-xs border border-r-white">
              ID
            </th>
            <th className="w-full px-4 py-2 mobile:text-xs  border border-r-white">
              TITLE
            </th>
            <th className="w-full px-4 py-2 mobile:text-xs border border-r-white">
              DESCRIPTION
            </th>
            <th className="w-full px-4 py-2 mobile:text-xs  border border-r-white">
              STATUS
            </th>
            <th className="w-full px-4 py-2 mobile:text-xs border">
              AUTO POST
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data.map((tableElement: TableElement) => (
            <tr
              className={`flex flex-row w-full items-center ${
                tableElement.id % 2 === 0
                  ? "bg-table-color"
                  : "bg-primary-color"
              }`}
              key={tableElement.id}
            >
              <td className=" px-4 py-2 w-full mobile:text-xs text-center border-r border-r-white">
                {tableElement.id}
              </td>
              <td className="px-4 py-2 w-full mobile:text-xs text-center border-r border-r-white">
                {tableElement.title}
              </td>
              <td className="px-4 py-2 w-full mobile:text-xs text-center ">
                {tableElement.description}
              </td>
              <td className="px-4 py-2 w-full mobile:text-xs text-center ">
                {tableElement.status}
              </td>
              <td className="px-4 py-2 w-full mobile:text-xs text-center ">
                {tableElement.auto}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;