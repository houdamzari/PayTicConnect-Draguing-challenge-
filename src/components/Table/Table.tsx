import React from "react";

function Table({ data }: any) {
  return (
    <div>
      <table className="shadow-lg mt-8">
        <thead>
          <tr className="flex flex-row rounded-t-[28px] bg-secondary-color">
            <th className="px-[83px] py-[24px] border border-r-white">ID</th>
            <th className="px-[83px] py-[24px] border border-r-white">TITLE</th>
            <th className="px-[83px] py-[24px]">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p: any) => (
            <tr className="flex flex-row items-center" key={p.id}>
              <div className="w-[184px] px-[83px] py-[24px] border-r border-r-white">
                {p.id}
              </div>
              <div className="w-[208.5px] px-[83px] py-[24px] border-r border-r-white">
                {p.title}
              </div>
              <div className="w-[270px] px-[83px] py-[24px] ">
                {p.description}
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;