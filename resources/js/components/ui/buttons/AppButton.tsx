import React from 'react';
import './AppButton.css';

export type ButtonVariant = 'solid-golden' | 'outline-golden' | 'transparent-golden' | 'outline-dark';

interface AppButtonProps {
    label: string;
    variant?: ButtonVariant;
    icon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    width?: string; // Custom width if not 200px
}

export const AppButton: React.FC<AppButtonProps> = ({
    label,
    variant = 'solid-golden',
    icon,
    onClick,
    className = '',
    width
}) => {
    const style = width ? { width } : {};

    return (
        <button
            className={`app-btn btn-${variant} ${className}`}
            onClick={onClick}
            style={style}
        >
            {icon && <span className="btn-icon">{icon}</span>}
            <span className="btn-label">{label}</span>
        </button>
    );
};
