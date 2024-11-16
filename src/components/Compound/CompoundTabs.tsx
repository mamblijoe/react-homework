import React, { ReactNode, useState } from 'react'
import { noop } from 'lodash'
import { twMerge } from 'tailwind-merge'

type Tab = { code: string; label: string; content: string }

type CompoundTabsContextProps = {
    children: ReactNode
    defaultTab: string
}

type CompoundTabsContext = {
    activeTab: string
    onClick: (tab: string) => void
}

type CompoundTabsProps = {
    children: ReactNode
}

type CompoundTabsItemProps = {
    tab: Tab
}

const CompoundTabsContext = React.createContext<CompoundTabsContext>({
    activeTab: '',
    onClick: noop,
})

function CompoundTabs({ children, defaultTab = '' }: CompoundTabsContextProps) {
    const [activeTab, setActiveTab] = useState<string>(defaultTab)

    const onClick = (tab: string) => {
        setActiveTab(tab)
    }

    const value = React.useMemo(
        () => ({
            activeTab,
            onClick,
        }),
        [activeTab]
    )

    return (
        <CompoundTabsContext.Provider value={value}>
            <div className="md:flex">{children}</div>
        </CompoundTabsContext.Provider>
    )
}

function useCompoundTabs(): CompoundTabsContext {
    const context = React.useContext(CompoundTabsContext)

    if (!context) {
        throw new Error(
            'This component must be used within a <CompundListProvider> component.'
        )
    }

    return context
}

CompoundTabs.Triggers = function Triggers({ children }: CompoundTabsProps) {
    return (
        <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
            {children}
        </ul>
    )
}

CompoundTabs.Trigger = function Trigger({ tab }: CompoundTabsItemProps) {
    const { activeTab, onClick } = useCompoundTabs()
    const isActive = tab.code === activeTab
    return (
        <li
            onClick={() => onClick(tab.code)}
            className={twMerge(
                'cursor-pointer inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg w-full dark:bg-gray-800 hover:dark:bg-blue-600',
                isActive && 'dark:bg-blue-600'
            )}
        >
            <svg
                className="w-4 h-4 me-2 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            {tab.label}
        </li>
    )
}

CompoundTabs.Contents = function Contents({ children }: CompoundTabsProps) {
    return (
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
            {children}
        </div>
    )
}

CompoundTabs.Content = function Content({ tab }: CompoundTabsItemProps) {
    const { activeTab } = useCompoundTabs()
    const isHide = tab.code !== activeTab
    return <div className={twMerge(isHide && 'hidden')}>{tab.content}</div>
}

export default CompoundTabs
