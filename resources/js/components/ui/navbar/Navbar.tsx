import React from 'react';
import { ContactUsButton, CurrencyButton } from '../buttons';
import './Navbar.css';

const MenuIcon = () => (
    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2H34" stroke="#D9A84E" strokeWidth="3" />
        <path d="M0 12H34" stroke="#D9A84E" strokeWidth="3" />
        <path d="M0 22H34" stroke="#D9A84E" strokeWidth="3" />
    </svg>
);

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-grid">
                {/* Left Section: Menu + Logo (2 Grids) */}
                <div className="nav-left">
                    <button className="menu-toggle">
                        <MenuIcon />
                    </button>
                    <div className="logo-container">
                        <img
                            src="/images/logos/logo1.png"
                            alt="City Inn Logo"
                            className="nav-logo"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = '<span class="logo-text">City<span>Inn</span></span>';
                            }}
                        />
                    </div>
                </div>

                {/* Individual links in grids 4, 5, 6, 7, 8 */}
                <a href="/" className="nav-item nav-item-1 active">HOME</a>
                <a href="/accommodation" className="nav-item nav-item-2">ACCOMMODATION</a>
                <a href="/dining" className="nav-item nav-item-3">DINING</a>
                <a href="/events" className="nav-item nav-item-4">EVENT'S</a>
                <a href="/tourism" className="nav-item nav-item-5">TOURISM</a>

                {/* Right Section: Buttons (3 Grids: 9, 10, 11) */}
                <div className="nav-right">
                    <ContactUsButton />
                    <CurrencyButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
