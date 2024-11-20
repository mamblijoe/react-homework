import React from 'react'
import { useTableContext } from '../../hooks/useTableContext.ts'

const PaginationRouter = () => {
    const { table } = useTableContext()
    return (
        <span className="flex items-center gap-1">
            | Go to page:
            <input
                type="number"
                min="1"
                max={table.getPageCount()}
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    table.setPageIndex(page)
                }}
                className="border p-1 rounded w-16"
            />
        </span>
    )
}

export default PaginationRouter
