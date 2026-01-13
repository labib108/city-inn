import React from 'react';
import { AppButton } from '@/components/ui/buttons';
import './VideoSection.css';

const VideoSection: React.FC = () => {
    // Search Icon for the button
    const SearchIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.2rem', height: '1.2rem' }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    );

    return (
        <div className="video-section-container">
            <div className="video-section-left">
                <img
                    src="/images/home/video.png"
                    alt="Our Story in Motion"
                    className="video-section-image"
                    onError={(e) => {
                        // Fallback in case image is missing during dev
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.style.backgroundColor = '#222';
                    }}
                />
            </div>
            <div className="video-section-right">
                <div className="video-content-block">
                    <h2 className="video-heading">Our Story in Motion</h2>
                    <p className="video-passage">
                        City Inn is a comfortable and well-located hotel offering a pleasant stay for both business and leisure travelers. Known for its clean rooms, courteous service, and convenient access to key areas of the city, City Inn focuses on providing guests with a reliable, relaxing, and value-driven hospitality experience.
                    </p>
                    <AppButton
                        label="SEARCH ROOM"
                        icon={<SearchIcon />}
                        variant="outline-golden"  // "search room light button" - assuming outline-golden maps to "Light" style in this context or create custom
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
