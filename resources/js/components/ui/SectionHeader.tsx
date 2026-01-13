import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
    title: string;
    description?: string;
    action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    description,
    action
}) => {
    return (
        <div className="section-header-wrapper">
            <div className="section-header-content">
                <h2 className="section-header-title">{title}</h2>
                {description && <p className="section-header-desc">{description}</p>}
            </div>

            {action && (
                <div className="section-header-action">
                    {action}
                </div>
            )}
        </div>
    );
};
