import React from 'react';
import Slider, { Slide } from '@/components/ui/slider/Slider';
import VideoSection from '@/components/home/VideoSection';
import EventSection from '@/components/home/EventSection';
import InstagramFeedSection from '@/components/home/InstagramFeedSection';
import MainLayout from '@/Layouts/MainLayout';
import { BookingBar } from '@/components/ui/booking';
import './Home.css'; // Reusing Home styles for consistency

// Styles for the specific slide texts - reused from Home.tsx for now
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
        color: '#f0f0f0',
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
        id: 2,
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

export default function Accommodation() {
    return (
        <MainLayout>
            <Slider slides={homeSlides} />

            <VideoSection
                image="/images/accomodation/VideoSection.png"
            />

            <EventSection
                title="Accommodation in a Luxury Hotel"
                description="Accommodation is mandatory in a Luxury hotel."
                showButton={false}
                events={[
                    { id: 1, title: 'Platinum Suite', image: '/images/accomodation/accomodation1.png' },
                    { id: 2, title: 'Exclusive Suite', image: '/images/accomodation/accomodation2.png' },
                    { id: 3, title: 'Suite', image: '/images/accomodation/accomodation3.png' },
                    { id: 1, title: 'City Suite', image: '/images/accomodation/accomodation4.png' },
                    { id: 2, title: 'Super Deluxe', image: '/images/accomodation/accomodation5.png' },
                    { id: 3, title: 'Deluxe', image: '/images/accomodation/accomodation6.png' },
                    { id: 3, title: 'Classic', image: '/images/accomodation/accomodation7.png' }
                ]}
            />

            <InstagramFeedSection
                title="Hotel Room On Instagram Reels"
            />

        </MainLayout>
    );
}
