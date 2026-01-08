import React from 'react';
import { AppButton } from '../buttons';
import './BookingBar.css';

const CalendarIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#D9A84E" strokeWidth="1.5" />
        <path d="M16 2V6" stroke="#D9A84E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 2V6" stroke="#D9A84E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 10H21" stroke="#D9A84E" strokeWidth="1.5" />
        <circle cx="7" cy="14" r="1.5" fill="#D9A84E" />
        <circle cx="12" cy="14" r="1.5" fill="#D9A84E" />
        <circle cx="17" cy="14" r="1.5" fill="#D9A84E" />
        <circle cx="7" cy="18" r="1.5" fill="#D9A84E" />
        <circle cx="12" cy="18" r="1.5" fill="#D9A84E" />
        <circle cx="17" cy="18" r="1.5" fill="#D9A84E" />
    </svg>
);

const DoorIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3V21" stroke="#D9A84E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 3H16L20 5V21H4" stroke="#D9A84E" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="15" y="11" width="2" height="2" rx="1" fill="#D9A84E" />
    </svg>
);

const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

export const BookingBar: React.FC = () => {
    return (
        <div className="booking-bar-wrapper">
            <div className="booking-bar">
                {/* Date Section */}
                <div className="booking-section">
                    <div className="section-icon">
                        <CalendarIcon />
                    </div>
                    <div className="section-content">
                        <span className="section-title">Date</span>
                        <span className="section-subtitle">20 Nov 2025 - 30 Nov 2025</span>
                    </div>
                </div>

                <div className="section-divider"></div>

                {/* Room & Guests Section */}
                <div className="booking-section">
                    <div className="section-icon">
                        <DoorIcon />
                    </div>
                    <div className="section-content">
                        <span className="section-title">Room & Guests</span>
                        <span className="section-subtitle">1 Adult, 0 Childs</span>
                    </div>
                </div>

                <div className="booking-actions">
                    <AppButton
                        label="SEARCH ROOM"
                        variant="solid-golden"
                        icon={<SearchIcon />}
                    />
                    <AppButton
                        label="BOOK NOW"
                        variant="transparent-golden"
                        width="10.625rem"
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingBar;
