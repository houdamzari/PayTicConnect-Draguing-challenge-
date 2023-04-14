import React from 'react';
import { Props } from '../../interfaces';

const TableHeader:React.FC<Props.TableHeaderProps> = ({children, className}) => {
  return (
    <th className={`w-full px-4 py-2 mobile:text-xs  border-r border-r-white ${className} `} >
              {children}
            </th>
  );
}

export default TableHeader;