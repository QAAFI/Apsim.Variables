import React from "react";

type Variation = "normal" | 'ghost';

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    fullWidth?: boolean;
    variation?: Variation;
}


export const Button = ({
    className = '',
    children,
    disabled = false,
    onClick = () => null,
    fullWidth = false,
    variation = 'normal',
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={`px-3 py-1 text-base ${variation === 'normal' ? 'border border-gray-400 rounded-md bg-gray-100' : ''} ${fullWidth ? 'w-full' : ''}`}
            onClick={onClick}
        >
            {children}
        </button >
    );
}