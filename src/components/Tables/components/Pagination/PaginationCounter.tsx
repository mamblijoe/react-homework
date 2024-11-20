import React from 'react'
import { useTableContext } from '../../hooks/useTableContext.ts'

const PaginationCounter = () => {
    const { table } = useTableContext()
    return (
        <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
                {table.getState().pagination.pageIndex + 1} of{' '}
                {table.getPageCount()}
            </strong>
        </span>
    )
}

export default PaginationCounter
