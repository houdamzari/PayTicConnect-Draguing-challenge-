import React from 'react'
import { Props } from '../../interfaces'

const TableHead: React.FC<Props.TableHeaderProps>= ({children}) =>{
  return (
            <thead className="w-full">
          <tr className="flex flex-row w-full rounded-t-[28px] bg-secondary-color">{children}</tr>
        </thead>
  )
}

export default TableHead