import React, { FC, ReactElement } from 'react'
import Navigation from '../Navigation'

type LayoutProps = {
    children: ReactElement
    title: string
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
    return (
        <div className="min-h-screen flex flex-col text-black p-4">
            <header className="bg-white shadow-xl shadow-inner rounded-2xl mb-4 p-4">
                {title}
            </header>
            <div className="flex-1 flex flex-row gap-4 ">
                <main className="flex-1 p-4 bg-white shadow-xl shadow-inner rounded-2xl overflow-hidden">
                    {children}
                </main>
                <nav className="order-first  p-4 bg-white shadow-xl shadow-inner rounded-2xl">
                    <Navigation />
                </nav>
            </div>
        </div>
    )
}

export default Layout
