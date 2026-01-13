import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import './CorporateTestimonialSection.css';

const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800" />
    </svg>
);

const testimonialData = [
    {
        id: 1,
        text: "Very trustworthy and clearly platform to invest in various kind of category. Safe investment with monthly payout. Highly Recommended.",
        name: "Sabitri Roy Chowdhury",
        image: "/images/home/reviewer.png"
    },
    {
        id: 2,
        text: "Very trustworthy and clearly platform to invest in various kind of category. Safe investment with monthly payout. Highly Recommended.",
        name: "Sabitri Roy Chowdhury",
        image: "/images/home/reviewer.png"
    },
    {
        id: 3,
        text: "Very trustworthy and clearly platform to invest in various kind of category. Safe investment with monthly payout. Highly Recommended.",
        name: "Sabitri Roy Chowdhury",
        image: "/images/home/reviewer.png"
    }
];

const CorporateTestimonialSection: React.FC = () => {
    return (
        <section className="corporate-testimonial-section">
            <div className="corporate-testimonial-overlay">
                <SectionHeader
                    title="Corporate Client Testimonial"
                    description="City Inn Hotel has earned a strong presence on Google with a positive overall rating, reflecting consistent guest satisfaction. Visitors frequently highlight its convenient location, clean rooms, courteous staff, and good value for money, making City Inn a reliable choice for both business and leisure travelers."
                />

                <div className="testimonial-grid">
                    {testimonialData.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <p className="testimonial-text">
                                {item.text}
                            </p>

                            <div className="testimonial-client-info">
                                <img src={item.image} alt={item.name} className="testimonial-image" />
                                <div className="testimonial-meta">
                                    <h4 className="testimonial-name">{item.name}</h4>
                                    <div className="testimonial-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorporateTestimonialSection;
