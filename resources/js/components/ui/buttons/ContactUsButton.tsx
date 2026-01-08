import React from 'react';
import './ContactUsButton.css';

interface ContactUsButtonProps {
    onClick?: () => void;
}

export const ContactUsButton: React.FC<ContactUsButtonProps> = ({ onClick }) => {
    return (
        <button className="contact-us-btn" onClick={onClick}>
            <svg
                className="contact-us-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                {/* Phone book/contact icon */}
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <path d="M8 6h8" />
                <circle cx="12" cy="13" r="3" />
                <path d="M9 18c0-1.5 1.5-2 3-2s3 .5 3 2" />
            </svg>
            <span className="contact-us-text">CONTACT US</span>
        </button>
    );
};

export default ContactUsButton;
