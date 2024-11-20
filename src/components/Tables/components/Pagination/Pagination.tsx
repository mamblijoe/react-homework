import React from 'react'
import Button from '../Button.tsx'
import PaginationCounter from './PaginationCounter.tsx'
import PaginationSelector from './PaginationSelector.tsx'
import PaginationRouter from './PaginationRouter.tsx'
import { useTableContext } from '../../hooks/useTableContext.ts'

const Pagination = () => {
    const { table } = useTableContext()

    return (
        <div
            className={
                'text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white p-4'
            }
        >
            <div className="flex items-center gap-2">
                <Button
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </Button>
                <Button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </Button>
                <Button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </Button>
                <Button
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    {'>>'}
                </Button>
                <PaginationCounter />
                <PaginationRouter />
                <PaginationSelector />
            </div>
        </div>
    )
}

export default Pagination
