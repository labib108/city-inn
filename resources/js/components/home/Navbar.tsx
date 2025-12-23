import React, { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
    const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Rooms', href: '/rooms' },
        { label: 'Dining', href: '/dining' },
        { label: 'Facilities', href: '/facilities' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'About Us', href: '/about' },
    ];

    const toggleCurrency = () => {
        setCurrency(prev => (prev === 'BDT' ? 'USD' : 'BDT'));
    };

    return (
        <nav className={`navbar ${className}`}>
            <div className="navbar-container">
                {/* Mobile Menu Button */}
                <button
                    className="navbar-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <img
                        src="/images/icons/menu.png"
                        alt="Menu"
                        className="menu-icon"
                    />
                </button>

                {/* Logo */}
                <div className="navbar-logo">
                    <a href="/">
                        <img
                            src="/images/logos/logo1.png"
                            alt="City Inn Logo"
                            className="logo-image"
                        />
                    </a>
                </div>

                {/* Desktop Menu Items */}
                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    {menuItems.map((item, index) => (
                        <li key={index} className="navbar-menu-item">
                            <a href={item.href} className="navbar-link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Section: Contact & Currency */}
                <div className="navbar-right">
                    {/* Contact Us Button */}
                    <a href="/contact" className="contact-btn">
                        <img
                            src="/images/icons/phone.png"
                            alt="Phone"
                            className="phone-icon"
                        />
                        <span>Contact Us</span>
                    </a>

                    {/* Currency Toggle */}
                    <div className="currency-toggle">
                        <button
                            className={`currency-btn ${currency === 'BDT' ? 'active' : ''}`}
                            onClick={() => setCurrency('BDT')}
                        >
                            BDT
                        </button>
                        <div className="currency-divider"></div>
                        <button
                            className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
                            onClick={() => setCurrency('USD')}
                        >
                            USD
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
