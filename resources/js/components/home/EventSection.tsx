import React from 'react';
import { AppButton } from '@/components/ui/buttons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import './EventSection.css';

interface EventItem {
    id: number;
    title: string;
    image: string;
}

const events: EventItem[] = [
    { id: 1, title: 'City Convention Hall(South Plaza)', image: '/images/home/event1.png' },
    { id: 2, title: 'City Convention Hall(North Plaza)', image: '/images/home/event2.png' },
    { id: 3, title: 'City Convention Hall(BELI)', image: '/images/home/event3.png' }
];

const EventSection: React.FC = () => {
    const seeMoreButton = (
        <AppButton label="SEE MORE" variant="solid-golden" width="10rem" />
    );

    return (
        <div className="event-section-wrapper">
            <SectionHeader
                title="Events in a luxury hotel"
                description="Conference Hall, Meeting venue, and other banquet hall with Others
logistics."
                action={seeMoreButton}
            />

            <div className="event-grid-container">
                <div className="event-grid">
                    {events.map((event) => (
                        <div key={event.id} className="event-card">
                            <img src={event.image} alt={event.title} className="event-image" />
                            <div className="event-overlay">
                                <h3 className="event-card-title">{event.title}</h3>
                                <AppButton
                                    label="BOOK NOW"
                                    variant="solid-golden"
                                    width="auto"
                                    className="event-book-btn"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventSection;
