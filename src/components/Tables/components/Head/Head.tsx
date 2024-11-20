import React from 'react'
import HeadCell from './HeadCell.tsx'
import { useTableContext } from '../../hooks/useTableContext.ts'

const Head = () => {
    const { table } = useTableContext()
    return (
        <thead
            className={
                'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
            }
        >
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        return (
                            <th
                                key={header.id}
                                colSpan={header.colSpan}
                                className={'px-6 py-3'}
                            >
                                {!header.isPlaceholder && (
                                    <HeadCell key={header.id} header={header} />
                                )}
                            </th>
                        )
                    })}
                </tr>
            ))}
        </thead>
    )
}

export default Head
