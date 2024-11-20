import { createContext } from 'react'
import { TableContextType } from '../types/type.ts'

export const TableContext = createContext<TableContextType | undefined>(
    undefined
)
