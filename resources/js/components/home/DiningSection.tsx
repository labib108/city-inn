import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import './DiningSection.css';

interface DiningItem {
    id: number;
    title: string;
    image: string;
}

const diningItems: DiningItem[] = [
    { id: 1, title: 'Orchid', image: '/images/home/orchid.png' },
    { id: 2, title: 'Rooftop', image: '/images/home/rooftop.png' },
    { id: 3, title: 'Chinese Buffet Lounge', image: '/images/home/buffet-lounge.png' },
    { id: 4, title: 'City Corporate Cafe ( Work In Progress)', image: '/images/home/corporate-cafe.png' }
];

const DiningSection: React.FC = () => {
    return (
        <div className="dining-section-wrapper">
            <SectionHeader
                title="Recommended Dinning and Restaurant"
                description="Come home to the tranquility of your personal retreat, designed to reset your mind and body to a peaceful equilibrium with the plush accommodation, first-class facilities and impeccable service that Pan Pacific Sonargaon Dhaka is known for."
            />

            <div className="dining-grid">
                {diningItems.map((item) => (
                    <div key={item.id} className="dining-card">
                        <img src={item.image} alt={item.title} className="dining-image" />
                        <h3 className="dining-overlay-title">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiningSection;
