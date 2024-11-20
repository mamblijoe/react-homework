import { createColumnHelper } from '@tanstack/react-table'
import { Person } from '../types/type.ts'

const columnHelper = createColumnHelper<Person>()

export const columns = [
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
