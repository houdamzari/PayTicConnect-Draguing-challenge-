import React from 'react'
import { Props } from '../../interfaces'
const TableRow:React.FC<Props.TableRowProps>= ({children, className})=> {
  return (
    <td className={`px-4 py-2 w-full mobile:text-xs text-center border-r border-r-white 
     ${className}`}>
                {children}
              </td>
  )
}

export default TableRow