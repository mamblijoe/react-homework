import React from 'react'
import BodyCell from './BodyCell.tsx'
import { useTableContext } from '../../hooks/useTableContext.ts'

const Body = () => {
    const { table } = useTableContext()
    const rows = table.getRowModel().rows
    return (
        <tbody>
            {rows.map((row) => (
                <tr
                    key={row.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    {row.getVisibleCells().map((cell) => (
                        <BodyCell key={cell.id} cell={cell} />
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default Body
