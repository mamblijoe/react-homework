import React from 'react'
import { Cell, flexRender } from '@tanstack/react-table'
import { Person } from '../../types/type.ts'

type BodyCellProps = {
    cell: Cell<Person, unknown>
}

const BodyCell = ({ cell }: BodyCellProps) => {
    return (
        <td
            key={cell.id}
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
    )
}

export default BodyCell
