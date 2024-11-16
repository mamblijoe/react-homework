import { range } from 'lodash'
import React, { CSSProperties } from 'react'
import Layout from '../Layout'
import {
    Column,
    ColumnFiltersState,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    RowPinningState,
    useReactTable,
} from '@tanstack/react-table'
import { faker } from '@faker-js/faker/locale/en'
import { Filter } from './Filter.tsx'

type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
}

const defaultData: Person[] = range(200).map((_item) => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 20, max: 100 }),
    visits: faker.number.int({ min: 1, max: 1000 }),
}))

const columnHelper = createColumnHelper<Person>()

const columns = [
    columnHelper.accessor('firstName', {
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.lastName, {
        id: 'lastName',
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor('age', {
        header: () => 'Age',
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
    }),
    columnHelper.accessor('visits', {
        header: () => <span>Visits</span>,
        footer: (info) => info.column.id,
    }),
]

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
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg container">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-separate">
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
                                            {header.isPlaceholder ? null : (
                                                <>
                                                    <div
                                                        {...{
                                                            className:
                                                                header.column.getCanSort()
                                                                    ? 'cursor-pointer select-none'
                                                                    : '',
                                                            onClick:
                                                                header.column.getToggleSortingHandler(),
                                                        }}
                                                    >
                                                        {flexRender(
                                                            header.column
                                                                .columnDef
                                                                .header,
                                                            header.getContext()
                                                        )}
                                                        {{
                                                            asc: ' 🔼 ASC',
                                                            desc: ' 🔽 DESC',
                                                        }[
                                                            header.column.getIsSorted() as string
                                                        ] ?? null}
                                                    </div>
                                                    {header.column.getCanFilter() ? (
                                                        <div>
                                                            <Filter
                                                                column={
                                                                    header.column
                                                                }
                                                            />
                                                        </div>
                                                    ) : null}
                                                </>
                                            )}
                                        </th>
                                    )
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                key={row.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div
                    className={
                        'text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white p-4'
                    }
                >
                    <div className="flex items-center gap-2">
                        <button
                            className="border rounded p-1"
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}
                        >
                            {'<<'}
                        </button>
                        <button
                            className="border rounded p-1"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            {'<'}
                        </button>
                        <button
                            className="border rounded p-1"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            {'>'}
                        </button>
                        <button
                            className="border rounded p-1"
                            onClick={() =>
                                table.setPageIndex(table.getPageCount() - 1)
                            }
                            disabled={!table.getCanNextPage()}
                        >
                            {'>>'}
                        </button>
                        <span className="flex items-center gap-1">
                            <div>Page</div>
                            <strong>
                                {table.getState().pagination.pageIndex + 1} of{' '}
                                {table.getPageCount()}
                            </strong>
                        </span>
                        <span className="flex items-center gap-1">
                            | Go to page:
                            <input
                                type="number"
                                min="1"
                                max={table.getPageCount()}
                                defaultValue={
                                    table.getState().pagination.pageIndex + 1
                                }
                                onChange={(e) => {
                                    const page = e.target.value
                                        ? Number(e.target.value) - 1
                                        : 0
                                    table.setPageIndex(page)
                                }}
                                className="border p-1 rounded w-16"
                            />
                        </span>
                        <select
                            value={table.getState().pagination.pageSize}
                            onChange={(e) => {
                                table.setPageSize(Number(e.target.value))
                            }}
                        >
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Tables
