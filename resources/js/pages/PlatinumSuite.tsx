import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Slider, { Slide } from '@/components/ui/slider/Slider';
import VideoSection from '@/components/home/VideoSection';
import UrbanVilaSection from '@/components/home/UrbanVilaSection';
import RoomFeatures from '@/components/room/RoomFeatures';
import InstagramFeedSection from '@/components/home/InstagramFeedSection';
import { BookingBar } from '@/components/ui/booking';

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

const platinumSlides: Slide[] = [
    {
        id: 1,
        image: '/images/slider/home1.png', // Using available slider image
        content: (
            <div>
                <h1 style={slideStyles.heading}>
                    Platinum <span style={slideStyles.highlight}>Suite</span>
                </h1>
                <p style={slideStyles.paragraph}>
                    Experience the ultimate luxury with our Platinum Suite, featuring panoramic views, exquisite design, and world-class amenities.
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <BookingBar />
                </div>
            </div>
        )
    }
];

export default function PlatinumSuite() {
    return (
        <MainLayout>
            <Slider slides={platinumSlides} />

            <VideoSection
                heading="About Our Room"
                passage="The Platinum Suite redefines elegance with its spacious living areas, premium furnishings, and breathtaking city views. Perfect for dignitaries and discerning travelers seeking privacy and sophistication."
                image="/images/accomodation/VideoSection.png"
                showButton={true}
            />

            <RoomFeatures
                title="Platinum Suites - Single/Couple Room"
                items={[
                    { title: '', icon: '/images/icons/roomsize.png' },
                    { title: '', icon: '/images/icons/capacity.png' },
                    { title: '', icon: '/images/icons/bed.png' },
                ]}
            />
            <RoomFeatures
                title="Amenities"
                items={[
                    { title: '', icon: '/images/icons/floor.png' },
                    { title: '', icon: '/images/icons/hours.png' },
                    { title: '', icon: '/images/icons/capacity.png' },
                    { title: '', icon: '/images/icons/contact.png' },
                ]}
            />
            <RoomFeatures
                title="Prohibited"
                items={[
                    { title: '', icon: '/images/icons/pet.png' },
                    { title: '', icon: '/images/icons/smoking.png' },
                    { title: '', icon: '/images/icons/visitor.png' }
                ]}
            />

            <UrbanVilaSection
                title="Discover Our Rooms and Suite"
                description="Indulge in exclusive services and features designed for the Platinum Suite guests.Indulge in exclusive services and features designed for the Platinum Suite guests."
                slides={[
                    { id: 1, title: 'Deluxe Room', image: '/images/accomodation/delux.png', link: '#' },
                    { id: 2, title: 'Platinum Suite', image: '/images/accomodation/accomodation2.png', link: '#' },
                    { id: 3, title: 'Deluxe Suite', image: '/images/accomodation/accomodation3.png', link: '#' }
                ]}
            />

            <InstagramFeedSection
                title="Platinum Moments On Instagram"
            />
        </MainLayout>
    );
}
