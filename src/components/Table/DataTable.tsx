import React from "react";
import { Props, TableElement } from "../../interfaces";
import {Table} from "../../components";

const DataTable: React.FC<Props.TableProps> = ({ data }) => {
  return (
    <div className="w-full flex justify-center mobile:px-0 px-[50px] mb-14 border-0">
      <Table >
        <Table.Head>
            <Table.Header>ID</Table.Header>
            <Table.Header>TITLE</Table.Header>
            <Table.Header>DESCRIPTION</Table.Header>
            <Table.Header>STATUS</Table.Header>
            <Table.Header className={'border-0'}>AUTO POST</Table.Header>
         </Table.Head>
        <tbody className="w-full">
          {data && data.map((tableElement: TableElement) => (
            <tr
              className={`flex flex-row w-full items-center ${
                tableElement.id % 2 === 0
                  ? "bg-table-color"
                  : "bg-primary-color"
              }`}
              key={tableElement.id}
            >
              <Table.Row> {tableElement.id}</Table.Row>
              <Table.Row > {tableElement.title}</Table.Row>
              <Table.Row > {tableElement.description}</Table.Row>
              <Table.Row > {tableElement.status}</Table.Row>
              <Table.Row className='border-0'> {tableElement.auto}</Table.Row>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;