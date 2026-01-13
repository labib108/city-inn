import React, { useState, useEffect } from 'react';
import './Slider.css';

export interface Slide {
    id: string | number;
    image: string;
    content: React.ReactNode;
}

interface SliderProps {
    slides: Slide[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
}

export const Slider: React.FC<SliderProps> = ({
    slides,
    autoSlide = true,
    autoSlideInterval = 5000,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(nextSlide, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, slides.length]);

    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={slide.image} alt="Slide Background" className="slide-image-bg" />
                        <div className="slide-overlay"></div>

                        <div className="slide-content-container">
                            {slide.content}
                        </div>
                    </div>
                ))}
            </div>

            <div className="slider-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
