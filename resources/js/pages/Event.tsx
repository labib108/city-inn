import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import VideoSection from '@/components/home/VideoSection';
import EventSection from '@/components/home/EventSection';
import InstagramFeedSection from '@/components/home/InstagramFeedSection';
import './Home.css'; // Reuse Home styles

export default function Event() {
    return (
        <MainLayout>
            <VideoSection
                heading="Convention Hall in Motion"
                image="/images/events/event.png"
                showButton={false}
            />

            <EventSection
                title="Meeting Event Venues"
                description="With a host of venues to pick from, organising the ideal executive function at Pan Pacific Sonargaon Dhaka is effortless, making the hotel the most preferred luxury Dhaka business hotel"
                showButton={false}
                events={[
                    { id: 1, title: 'City Convention Hall ( South Plaza)', image: '/images/events/event1.png' },
                    { id: 2, title: 'City Convention Hall ( North Plaza)', image: '/images/events/event2.png' },
                    { id: 3, title: 'Conference Hall  (BELLI)', image: '/images/events/event3.png' },
                    { id: 4, title: 'Conference Hall (BRIDGE)', image: '/images/events/event4.png' },
                    { id: 5, title: 'Conference Hall (Concept)', image: '/images/events/event5.png' },
                    { id: 6, title: 'Meting Room (Sweet Lily)', image: '/images/events/event6.png' }
                ]}
            />

            <InstagramFeedSection
                title="Conference Hall View On Instagram Reels"
            />
        </MainLayout>
    );
}

