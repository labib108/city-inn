import React from 'react';
import './Footer.css';
import { AppButton } from '@/components/ui/buttons/AppButton';

// Icons as inline SVGs for consistency or fallback
const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const FacebookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const TwitterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);

const LocationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            {/* Top Footer */}
            <div className="footer-top">
                <div className="footer-content-wrapper">
                    <div className="footer-grid">
                        {/* Column 1: Services */}
                        <div className="footer-col">
                            <h3 className="footer-heading">Our Services</h3>
                            <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Accommodation</a></li>
                                <li><a href="#">Restaurant</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Tourism</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Column 2: Info & Inquiry */}
                        <div className="footer-col">
                            <h3 className="footer-heading">Room Reservation</h3>
                            <div className="contact-info">
                                <div className="info-item">
                                    <div className="info-icon-gold"><LocationIcon /></div>
                                    <span>B-65, Shibbari Moar, Khulna-9000, Bangladesh</span>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon-gold"><PhoneIcon /></div>
                                    <span>+880 1711-298501</span>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon-gold"><MailIcon /></div>
                                    <span>reservation@cityinnltd.com</span>
                                </div>
                            </div>

                            <div className="inquiry-section">
                                <h4 className="footer-subheading">Want to leave us Instead?</h4>
                                <AppButton label="SEND INQUIRY" variant="outline-golden" className="inquiry-btn" />
                            </div>
                        </div>

                        {/* Column 3: Newsletter */}
                        <div className="footer-col">
                            <h3 className="footer-heading">Sign Up for Newsletter</h3>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Be the first to know about our exclusive deals." className="newsletter-input" />
                                <AppButton label="JOIN NOW" variant="solid-golden" className="join-now-btn" />
                            </div>
                        </div>
                    </div>

                    {/* Socials Row */}
                    <div className="footer-socials">
                        <span className="socials-label">Get the latest from Our socials</span>
                        <div className="social-icons">
                            <a href="#" className="social-link"><FacebookIcon /></a>
                            <a href="#" className="social-link"><InstagramIcon /></a>
                            <a href="#" className="social-link"><TwitterIcon /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="bottom-links-row">
                        <div className="footer-logo-left">
                            <img src="/images/logos/logo1.png" alt="City Inn Logo" className="footer-logo" />
                        </div>

                        <div className="bottom-links">
                            <a href="#">Hotel Policy</a>
                            <a href="#">Site Map</a>
                            <a href="#">Data Protection Policy</a>
                            <a href="#">Data Protection Notice (GDPR)</a>
                            <a href="#">UGC Terms and Conditions</a>
                            <a href="#">Manage Cookie Preference</a>
                        </div>

                        <div className="footer-logo-right">
                            <img src="/images/logos/logo2.png" alt="Partner Logo" className="footer-logo" />
                        </div>
                    </div>
                    <div className="copyright-row">
                        <p>
                            &copy; {new Date().getFullYear()} City Inn Ltd. All Rights Reserved.
                            <span style={{ marginLeft: '1rem' }}>Developed by Nandanik</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
