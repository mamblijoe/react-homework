import React from 'react'
import { flexRender, Header } from '@tanstack/react-table'
import { Filter } from '../Filter.tsx'
import { Person } from '../../types/type.ts'

type HeadCellProps = {
    header: Header<Person, unknown>
}
const sortIcons = {
    asc: ' 🔼 ASC',
    desc: ' 🔽 DESC',
}
const HeadCell = ({ header }: HeadCellProps) => {
    const sortDir = header.column.getIsSorted() as 'asc' | 'desc'
    const sortIcon = sortIcons[sortDir] || null
    const className = header.column.getCanSort()
        ? 'cursor-pointer select-none'
        : ''
    return (
        <>
            <div
                className={className}
                onClick={header.column.getToggleSortingHandler()}
            >
                {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                )}
                {sortIcon}
            </div>
            {header.column.getCanFilter() && <Filter column={header.column} />}
        </>
    )
}

export default HeadCell
