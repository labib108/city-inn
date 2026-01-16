import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AppButton } from '@/components/ui/buttons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import './UrbanVilaSection.css';

export interface SlideData {
    id: number;
    title: string;
    image: string;
    link: string;
}

const defaultSlides: SlideData[] = [
    { id: 1, title: 'Deluxe', image: '/images/home/urban-vila1.png', link: '#' },
    { id: 2, title: 'Premium', image: '/images/home/urban-vila2.png', link: '#' },
    { id: 3, title: 'Deluxe Twin', image: '/images/home/urban-vila1.png', link: '#' },
    { id: 4, title: 'Premium Suite', image: '/images/home/urban-vila2.png', link: '#' }
];

interface UrbanVilaSectionProps {
    title?: string;
    description?: string;
    slides?: SlideData[];
}

const UrbanVilaSection: React.FC<UrbanVilaSectionProps> = ({
    title = "Its An Urban Vila",
    description = "Come home to the tranquility of your personal retreat, designed to reset your mind and body to a peaceful equilibrium with the plush accommodation, first-class facilities and impeccable service that Pan Pacific Sonargaon Dhaka is known for.",
    slides = defaultSlides
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerScreen = 2;
    const maxIndex = Math.max(0, slides.length - itemsPerScreen);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const navButtons = (
        <div className="urban-vila-nav">
            <button className="nav-arrow-btn" onClick={prevSlide} aria-label="Previous Slide">
                <ArrowLeft size={28} />
            </button>
            <button className="nav-arrow-btn" onClick={nextSlide} aria-label="Next Slide">
                <ArrowRight size={28} />
            </button>
            <AppButton label="SEE ALL" variant="solid-golden" className="urban-see-all" />
        </div>
    );

    return (
        <section className="urban-vila-container">
            <SectionHeader
                title={title}
                description={description}
                action={navButtons}
            />

            <div className="urban-slider-window">
                <div
                    className="urban-slider-track"
                    style={{ transform: `translateX(calc(-${currentIndex} * (50% + 0.75rem)))` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="urban-slide-card">
                            <img src={slide.image} alt={slide.title} className="urban-slide-image" />
                            <div className="urban-slide-overlay-strip">
                                <span className="urban-slide-title">{slide.title}</span>
                                <button className="urban-slide-btn" onClick={() => router.visit('/booking')}>VIEW ROOM & RATES</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UrbanVilaSection;
