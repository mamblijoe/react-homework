import { useContext } from 'react'
import { TableContext } from '../context/Context.tsx'
import { TableContextType } from '../types/type.ts'

export const useTableContext = (): TableContextType => {
    const context = useContext(TableContext)

    if (!context) {
        throw new Error('No context')
    }
    return context
}
