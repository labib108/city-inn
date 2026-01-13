import React from 'react';
import { AppButton } from '@/components/ui/buttons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import './ExploreSection.css';

const ExploreSection: React.FC = () => {

    // Row 1 Action Buttons
    const headerAction = (
        <div className="explore-header-action">
            <AppButton label="LOAD MORE" variant="outline-dark" className="explore-btn" />
            <AppButton label="SUBSCRIBE US" variant="solid-golden" className="explore-btn" />
        </div>
    );

    // Video Row Content
    const videoRowContent = {
        title: "Explore Video on Youtube",
        description: "Come home to the tranquility of your personal retreat, designed to reset your mind and body to a peaceful equilibrium with the plush accommodation, first-class facilities and impeccable service that Urban Vila is known for.",
        videoUrl: "https://www.youtube.com/embed/Z-Uc1iRp998?si=sLLYeRsy9UgrsJ4a"
    };

    return (
        <section className="explore-section">
            {/* Row 1: Header */}
            <SectionHeader
                title="Explore on Youtube"
                description="Come home to the tranquility of your personal retreat, designed to reset your mind and body to a peaceful equilibrium with the plush accommodation, first-class facilities and impeccable service that Pan Pacific Sonargaon Dhaka is known for."
                action={headerAction}
            />

            <div className="explore-content-wrapper">
                {/* Row 2: Video Left, Text Right */}
                <div className="explore-row">
                    <div className="explore-video-col">
                        <iframe
                            className="explore-iframe"
                            src={videoRowContent.videoUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="explore-text-col">
                        <h3 className="explore-row-title">{videoRowContent.title}</h3>
                        <p className="explore-row-desc">{videoRowContent.description}</p>
                        <div className="explore-row-action">
                            {/* Optional button if needed, user didn't specify for the video rows explicitly but usually there is one. 
                                 prompt: "heading and text in right" - no button mentioned for video rows, only for first row. 
                                 I will leave it text only for now.
                             */}
                        </div>
                    </div>
                </div>

                {/* Row 3: Video Left, Text Right (Similar to Row 2) */}
                <div className="explore-row">
                    <div className="explore-video-col">
                        <iframe
                            className="explore-iframe"
                            src={videoRowContent.videoUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="explore-text-col">
                        <h3 className="explore-row-title">{videoRowContent.title}</h3>
                        <p className="explore-row-desc">{videoRowContent.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreSection;
