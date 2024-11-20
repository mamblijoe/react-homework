import React, { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    onClick: () => void
    disabled: boolean
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
    return (
        <button
            className="border rounded p-1"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
