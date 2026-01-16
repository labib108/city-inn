import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Slider, { Slide } from '@/components/ui/slider/Slider';
import ConventionSection from '@/components/home/ConventionSection';
import EventSection from '@/components/home/EventSection';
import InstagramFeedSection from '@/components/home/InstagramFeedSection';
import { BookingBar } from '@/components/ui/booking';
import './Home.css'; // Reuse Home styles

// Reusing styles from Home.tsx/Accommodation.tsx (can be moved to a shared file later)
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
    }
};

const diningSlides: Slide[] = [
    {
        id: 1,
        image: '/images/slider/home3.png', // Reusing dining image
        content: (
            <div>
                <h1 style={slideStyles.heading}>
                    Welcome to <span style={slideStyles.highlight}>Dining</span>
                </h1>
                <p style={slideStyles.paragraph}>
                    Experience culinary excellence with our diverse range of dining options, offering flavors from around the world in an elegant setting.
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <BookingBar />
                </div>
            </div>
        )
    },
    {
        id: 2,
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
        id: 3,
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

export default function Dining() {
    return (
        <MainLayout>
            <Slider slides={diningSlides} />

            <ConventionSection
                items={[
                    { title: 'Orchid', image: '/images/dining/orchid.png' },
                    { title: 'Rooftop Restaurant', image: '/images/dining/rooftop.png' },
                    { title: 'Chinese Restaurant', image: '/images/dining/chinese.png' },
                    { title: 'City Corporate Cafe', image: '/images/dining/cafe.png' }
                ]}
            />

            <EventSection 
            title="Best Dishes from our Dining"
                description="Accommodation is mandatory in a Luxury hotel."
                showButton={false}
                events={[
                    { id: 1, title: 'Orchid', image: '/images/dining/dish1.png' },
                    { id: 2, title: 'Food Name 2', image: '/images/dining/dish2.png' },
                    { id: 3, title: 'Food Name 3', image: '/images/dining/dish3.png' },
                    { id: 1, title: 'Food Name 4', image: '/images/dining/dish4.png' },
                    { id: 2, title: 'Food Name 5', image: '/images/dining/dish5.png' },
                    { id: 3, title: 'Food Name 6', image: '/images/dining/dish6.png' }
                ]}
            />

            <InstagramFeedSection 
            title="Dining View On Instagram Reels"
            />
        </MainLayout>
    );
}
