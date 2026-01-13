import React from 'react';
import { AppButton, CurrencyButton, ContactUsButton } from '@/components/ui/buttons';
import { Navbar } from '@/components/ui/navbar';
import Slider, { Slide } from '@/components/ui/slider/Slider';
import { BookingBar } from '@/components/ui/booking';
import VideoSection from '@/components/home/VideoSection';
import ConventionSection from '@/components/home/ConventionSection';
import UrbanVilaSection from '@/components/home/UrbanVilaSection';
import EventSection from '@/components/home/EventSection';
import DiningSection from '@/components/home/DiningSection';
import InstagramFeedSection from '@/components/home/InstagramFeedSection';
import ExploreSection from '@/components/home/ExploreSection';
import GoogleRatingSection from '@/components/home/GoogleRatingSection';
import CorporateTestimonialSection from '@/components/home/CorporateTestimonialSection';
import PartnersSection from '@/components/home/PartnersSection';
import Footer from '@/components/home/Footer';
import './Home.css';

// Styles for the specific slide texts
const slideStyles = {
    heading: {
        fontFamily: "'Playfair Display', serif",
        fontSize: '3.5rem',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '1rem',
        lineHeight: 1.2
    },
    highlight: {
        color: '#D9A84E'
    },
    paragraph: {
        fontFamily: "'Inter', sans-serif",
        fontSize: '1rem',
        color: '#f0f0f0', // Slight off-white for readability
        maxWidth: '31.25rem', // ~500px
        lineHeight: 1.6,
        marginBottom: '2rem'
    },
    contactRow: {
        display: 'flex',
        gap: '2rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        flexWrap: 'wrap' as const
    },
    contactCol: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.5rem',
        fontSize: '0.9rem'
    },
    contactLabel: {
        color: '#fff',
        fontWeight: 600,
        fontSize: '1.2rem',
    }
};

const homeSlides: Slide[] = [
    {
        id: 1,
        image: '/images/slider/home1.png',
        content: (
            <div>
                <h1 style={slideStyles.heading}>
                    Welcome to <span style={slideStyles.highlight}>City Inn Ltd.</span>
                </h1>
                <p style={slideStyles.paragraph}>
                    City Inn Ltd. is the most modern facilitated international standard hotel and holds a prime location and booming area in Khulna City the southern part of Bangladesh
                </p>
                <div style={slideStyles.contactRow}>
                    <div style={slideStyles.contactCol}>
                        <span style={slideStyles.contactLabel}>Address</span>
                        <span>City Inn Limited</span>
                        <span>B-1, Majid Sarani, KDA Ave<br />Khulna-9000, Bangladesh.</span>
                    </div>
                    <div style={slideStyles.contactCol}>
                        <span style={slideStyles.contactLabel}>Call</span>
                        <span>+880 1711298501</span>
                    </div>
                    <div style={slideStyles.contactCol}>
                        <span style={slideStyles.contactLabel}>Email</span>
                        <span>cityinnltd@gmail.com</span>
                    </div>
                </div>
                {/* BookingBar inside the first slide content */}
                <div style={{ marginTop: '2rem' }}>
                    <BookingBar />
                </div>
            </div>
        )
    },
    {
        id: 2,
        image: '/images/slider/home2.png',
        content: (
            <div>
                <h1 style={slideStyles.heading}>
                    Welcome to <span style={slideStyles.highlight}>Urban Vila</span>
                </h1>
                <p style={slideStyles.paragraph}>
                    Come home to the tranquility of your personal retreat, designed to reset your mind and body to a peaceful equilibrium with the plush accommodation, first-class facilities and impeccable service that Urban Vila is known for.
                </p>
            </div>
        )
    },
    {
        id: 3,
        image: '/images/slider/home3.png',
        content: (
            <div>
                <h1 style={slideStyles.heading}>
                    Welcome to <span style={slideStyles.highlight}>Dining</span>
                </h1>
                <p style={slideStyles.paragraph}>
                    Come home to the tranquility of your personal retreat, designed to reset your mind and body to a peaceful equilibrium with the plush accommodation, first-class facilities and impeccable service that City Inn, Khulna is known for.
                </p>
            </div>
        )
    },
    {
        id: 4,
        image: '/images/slider/home4.png',
        content: (
            <div>
                <h1 style={slideStyles.heading}>
                    <span style={slideStyles.highlight}>Events (Convention Hall)</span>
                </h1>
                <p style={slideStyles.paragraph}>
                    Come home to the tranquility of your personal retreat, designed to reset your mind and body to a peaceful equilibrium with the plush accommodation, first-class facilities and impeccable service that City Inn Khulna is known for.
                </p>
            </div>
        )
    }
];

const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

export default function Home() {
    return (
        <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
            <Navbar />

            <Slider slides={homeSlides} />

            <VideoSection />

            <ConventionSection />

            <UrbanVilaSection />

            <EventSection />

            <DiningSection />

            <InstagramFeedSection />

            <ExploreSection />

            <GoogleRatingSection />

            <CorporateTestimonialSection />

            <PartnersSection />

            <Footer />





            <div className="home-container" style={{ minHeight: 'auto', backgroundColor: 'transparent' }}>
                {/* BookingBar moved to Slide 1, so removing it from here */}

                <h1 className="home-title">City Inn - Component Preview</h1>

                <div className="buttons-grid">
                    {/* 1. Contact Us */}
                    <section className="button-group">
                        <h3>1. Contact Us</h3>
                        <ContactUsButton />
                    </section>

                    {/* 2. Currency Button */}
                    <section className="button-group">
                        <h3>2. Currency Button</h3>
                        <CurrencyButton />
                    </section>

                    {/* 3. Search Room Dark */}
                    <section className="button-group">
                        <h3>3. Search Room Dark</h3>
                        <AppButton label="SEARCH ROOM" icon={<SearchIcon />} variant="solid-golden" />
                    </section>

                    {/* 4. Search Room Light */}
                    <section className="button-group">
                        <h3>4. Search Room Light</h3>
                        <AppButton label="SEARCH ROOM" icon={<SearchIcon />} variant="outline-golden" />
                    </section>

                    {/* 5. Book Now */}
                    <section className="button-group">
                        <h3>5. Book Now</h3>
                        <AppButton label="BOOK NOW" variant="transparent-golden" width="10.625rem" />
                    </section>

                    {/* 6. See All */}
                    <section className="button-group">
                        <h3>6. See All</h3>
                        <AppButton label="SEE ALL" variant="solid-golden" />
                    </section>

                    {/* 7. View Rooms */}
                    <section className="button-group">
                        <h3>7. View Rooms & Rates</h3>
                        <AppButton label="VIEW ROOM & RATES" variant="transparent-golden" />
                    </section>

                    {/* 8. See More */}
                    <section className="button-group">
                        <h3>8. See More</h3>
                        <AppButton label="SEE MORE" variant="solid-golden" />
                    </section>

                    {/* 9. Follow Us */}
                    <section className="button-group">
                        <h3>9. Follow Us</h3>
                        <AppButton label="FOLLOW US" variant="solid-golden" />
                    </section>

                    {/* 10. Load More */}
                    <section className="button-group">
                        <h3>10. Load More</h3>
                        <AppButton label="LOAD MORE" variant="outline-golden" />
                    </section>

                    {/* 11. Load More Dark */}
                    <section className="button-group">
                        <h3>11. Load More Dark</h3>
                        <AppButton label="LOAD MORE" variant="outline-dark" />
                    </section>

                    {/* 12. Subscribe Us */}
                    <section className="button-group">
                        <h3>12. Subscribe Us</h3>
                        <AppButton label="SUBSCRIBE US" variant="solid-golden" />
                    </section>

                    {/* 13. Join Now */}
                    <section className="button-group">
                        <h3>13. Join Now</h3>
                        <AppButton label="JOIN NOW" variant="transparent-golden" />
                    </section>

                    {/* 14. Inquiry */}
                    <section className="button-group">
                        <h3>14. Send Inquiry</h3>
                        <AppButton label="SEND INQUIRY" variant="transparent-golden" />
                    </section>

                    {/* 15. Continue */}
                    <section className="button-group">
                        <h3>15. Continue</h3>
                        <AppButton label="CONTINUE" variant="solid-golden" />
                    </section>

                    {/* 16. Submit */}
                    <section className="button-group">
                        <h3>16. Submit</h3>
                        <AppButton label="SUBMIT" variant="solid-golden" />
                    </section>
                </div>
            </div>

        </div>
    );
}
