import React from 'react';
import { AppButton } from '@/components/ui/buttons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import './InstagramFeedSection.css';

const defaultImages = Array.from({ length: 12 }, (_, i) => `/images/home/instafeed/${i + 1}.png`);

interface InstagramFeedSectionProps {
    title?: string;
    description?: string;
    images?: string[];
}

const InstagramFeedSection: React.FC<InstagramFeedSectionProps> = ({
    title = "Instagram Feed",
    description = "Come home to the tranquility of your personal retreat, designed to reset your mind and body to a peaceful equilibrium with the plush accommodation, first-class facilities and impeccable service that Pan Pacific Sonargaon Dhaka is known for.",
    images = defaultImages
}) => {
    const instagramLink = 'https://instagram.com/yourprofile'; // placeholder link

    const headerAction = (
        <div className="instagram-action">
            <AppButton label="LOAD MORE" variant="outline-golden" className="instagram-btn" />
            <AppButton label="FOLLOW US" variant="solid-golden" className="instagram-btn" />
        </div>
    );

    return (
        <section className="instagram-section">
            <SectionHeader
                title={title}
                description={description}
                action={headerAction}
            />
            <div className="instagram-grid">
                {images.map((src, idx) => (
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer" key={idx} className="instagram-item">
                        <img src={src} alt={`Instagram ${idx + 1}`} className="instagram-image" />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default InstagramFeedSection;
