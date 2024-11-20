import React from 'react'
import { useTableContext } from '../../hooks/useTableContext.ts'

const sizes = [10, 20, 30, 40, 50]

const PaginationSelector = () => {
    const { table } = useTableContext()
    return (
        <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
                table.setPageSize(Number(e.target.value))
            }}
        >
            {sizes.map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                </option>
            ))}
        </select>
    )
}

export default PaginationSelector
