import React from 'react'
import Head from './Head/Head.tsx'
import Body from './Body/Body.tsx'
import Pagination from './Pagination/Pagination.tsx'
import { Table as ReactTable } from '@tanstack/react-table'
import { TableContext } from '../context/Context.tsx'
import { Person } from '../types/type.ts'

type TableProps = {
    table: ReactTable<Person>
}

const Table = ({ table }: TableProps) => {
    return (
        <TableContext.Provider value={{ table }}>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg container">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-separate">
                    <Head />
                    <Body />
                </table>
                <Pagination />
            </div>
        </TableContext.Provider>
    )
}

export default Table
