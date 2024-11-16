import React, { ReactNode, useState } from 'react'
import { noop } from 'lodash'
import { twMerge } from 'tailwind-merge'

type Option = { value: string; label: string }

type CompoundListContextProps = {
    children: ReactNode
}

type CompoundListContext = {
    selectedOptions: string[]
    onChange: (value: string) => void
    clear: () => void
}

type CompoundListProps = {
    children: ReactNode
}

type CompoundListItemProps = {
    option: Option
}

const CompoundListContext = React.createContext<CompoundListContext>({
    selectedOptions: [],
    onChange: noop,
    clear: noop,
})

function CompoundList({ children }: CompoundListContextProps) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])

    const onChange = (value: string) => {
        const alreadySelected = selectedOptions.includes(value)
        const newSelectedOptions = alreadySelected
            ? selectedOptions.filter((item) => item !== value)
            : [...selectedOptions, value]
        console.log({ newSelectedOptions, alreadySelected, value })
        setSelectedOptions(newSelectedOptions)
    }

    const clear = () => {
        setSelectedOptions([])
    }

    const value = React.useMemo(
        () => ({
            selectedOptions,
            onChange,
            clear,
        }),
        [selectedOptions]
    )

    return (
        <CompoundListContext.Provider value={value}>
            {children}
        </CompoundListContext.Provider>
    )
}

function useCompoundList(): CompoundListContext {
    const context = React.useContext(CompoundListContext)

    if (!context) {
        throw new Error(
            'This component must be used within a <CompundListProvider> component.'
        )
    }

    return context
}

CompoundList.List = function List({ children }: CompoundListProps) {
    const { selectedOptions, clear } = useCompoundList()
    return (
        <div className="flex flex-col gap-4 align-middle">
            <div className="">
                Выбраны:{' '}
                {selectedOptions.map((item) => (
                    <span>{item}</span>
                ))}
            </div>
            <div className="">Выбрано: {selectedOptions.length}</div>
            <button
                type="button"
                className="py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
                onClick={clear}
            >
                Очистить
            </button>
            <div className="mt-2">{children}</div>
        </div>
    )
}
CompoundList.Item = function Checkbox({ option }: CompoundListItemProps) {
    const { selectedOptions, onChange } = useCompoundList()
    const isChecked = selectedOptions.includes(option.value)
    return (
        <div className="flex items-center  mb-4">
            <label
                className={twMerge(
                    'text-sm font-norma cursor-pointer text-gray-600 flex align-baseline',
                    isChecked && 'text-red-700'
                )}
                onChange={(_) => onChange(option.value)}
            >
                <input
                    checked={isChecked}
                    type="checkbox"
                    value={option.value}
                    className={twMerge(
                        'w-5 h-5 appearance-none border cursor-pointer border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                    )}
                />
                {option.value}
            </label>
        </div>
    )
}

export default CompoundList
