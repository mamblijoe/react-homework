import React from 'react'
import Layout from '../Layout'
import {
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    RowPinningState,
    useReactTable,
} from '@tanstack/react-table'
import Head from './components/Head/Head.tsx'
import Body from './components/Body/Body.tsx'
import Pagination from './components/Pagination/Pagination.tsx'
import { TableContext } from './context/Context.tsx'
import { defaultData } from './data/data.ts'
import { columns } from './data/columns.tsx'
import Table from './components/Table.tsx'

const Tables = () => {
    const [data, _setData] = React.useState(() => [...defaultData])
    const [rowPinning, setRowPinning] = React.useState<RowPinningState>({
        top: [],
        bottom: [],
    })

    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([])

    const table = useReactTable({
        data,
        columns,
        filterFns: {},
        initialState: { pagination: { pageSize: 100, pageIndex: 0 } },
        state: {
            expanded: true,
            columnFilters,
            rowPinning,
        },
        onColumnFiltersChange: setColumnFilters,
        onRowPinningChange: setRowPinning,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        enableRowPinning: true,
        keepPinnedRows: true,
    })
    return (
        <Layout title={'React: Tables'}>
            <Table table={table} />
        </Layout>
    )
}

export default Tables
