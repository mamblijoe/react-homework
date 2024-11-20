import { Table } from '@tanstack/react-table'

export type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
}
export type TableContextType = {
    table: Table<Person>
}
