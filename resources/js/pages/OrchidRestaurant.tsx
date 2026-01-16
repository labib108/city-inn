import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Slider, { Slide } from '@/components/ui/slider/Slider';
import VideoSection from '@/components/home/VideoSection';
import ConventionSection from '@/components/home/ConventionSection';
import InstagramFeedSection from '@/components/home/InstagramFeedSection';
import { BookingBar } from '@/components/ui/booking';
import RoomFeatures from '@/components/room/RoomFeatures';

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

const orchidSlides: Slide[] = [
    {
        id: 1,
        image: '/images/dining/orchid.png',
        content: (
            <div>
                <h1 style={slideStyles.heading}>
                    Welcome to <span style={slideStyles.highlight}>orchid Restaurant</span>
                </h1>
                <p style={slideStyles.paragraph}>
                    Savor the finest cuisines in an ambiance of sophistication and warmth.
                </p>
                {/* <div style={{ marginTop: '2rem' }}>
                    <BookingBar />
                </div> */}
            </div>
        )
    }
];

export default function OrchidRestaurant() {
    return (
        <MainLayout>
            <Slider slides={orchidSlides} />

            <VideoSection
                heading="Orchid Dining Experience"
                passage="Our Orchid Restaurant offers a delightful array of international and local dishes, prepared by expert chefs. Whether it's a breakfast buffet or an a la carte dinner, every meal is a celebration of taste."
                image="/images/home/resturant.png"
                showButton={true}
            />

            <ConventionSection
                items={[
                    { title: 'Buffet Setup', image: '/images/dining/dish1.png' },
                    { title: 'Fine Dining', image: '/images/dining/dish2.png' },
                    { title: 'Private Corner', image: '/images/dining/dish3.png' },
                    { title: 'Dessert Station', image: '/images/dining/dish4.png' }
                ]}
            />

            <RoomFeatures
                title="Orchid Restaurant"
                items={[
                    { title: '', icon: '/images/icons/floor.png' },
                    { title: '', icon: '/images/icons/hours.png' },
                    { title: '', icon: '/images/icons/capacity.png' },
                    { title: '', icon: '/images/icons/contact.png' },
                ]}
            />

            <InstagramFeedSection
                title="Orchid Delights On Instagram"
            />
        </MainLayout>
    );
}
