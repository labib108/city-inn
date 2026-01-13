import React from 'react';
import './PartnersSection.css';

const partnerLogos = [
    { id: 1, src: '/images/home/partners/Bizcon Holidays.png', alt: 'Bizcon Holidays' },
    { id: 2, src: '/images/home/partners/Inno Global.png', alt: 'Inno Global' },
    { id: 3, src: '/images/home/partners/Our startups.png', alt: 'Our startups' },
    { id: 4, src: '/images/home/partners/ShareTrip.png', alt: 'ShareTrip' },
    { id: 5, src: '/images/home/partners/TourPlanners Limited.png', alt: 'TourPlanners Limited' },
];

const PartnersSection: React.FC = () => {
    return (
        <section className="partners-section">
            <h2 className="partners-title">Our Partners</h2>

            <div className="logos-slider-container">
                <div className="logos-slider-track">
                    {/* Double the logos for seamless infinite scroll */}
                    {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                        <div key={`${logo.id}-${index}`} className="logo-slide">
                            <img src={logo.src} alt={logo.alt} className="partner-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
