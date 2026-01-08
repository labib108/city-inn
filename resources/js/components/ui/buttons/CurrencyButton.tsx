import React from 'react';
import './CurrencyButton.css';

interface CurrencyButtonProps {
    leftLabel?: string;
    rightLabel?: string;
    onClickLeft?: () => void;
    onClickRight?: () => void;
}

export const CurrencyButton: React.FC<CurrencyButtonProps> = ({
    leftLabel = 'BDT',
    rightLabel = 'USD',
    onClickLeft,
    onClickRight
}) => {
    return (
        <div className="currency-btn-container">
            <button className="currency-part left" onClick={onClickLeft}>
                {leftLabel}
            </button>
            <button className="currency-part right" onClick={onClickRight}>
                {rightLabel}
            </button>
        </div>
    );
};
