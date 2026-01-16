import React from 'react';
import './RoomFeatures.css';

export interface RoomFeatureItem {
    title: string;
    icon: string;
}

interface RoomFeaturesProps {
    title?: string;
    items: RoomFeatureItem[];
}

const RoomFeatures: React.FC<RoomFeaturesProps> = ({ title, items }) => {
    return (
        <div className="room-features-container">
            {title && <h2 className="room-features-title">{title}</h2>}
            <div className="room-features-grid">
                {items.map((item, index) => (
                    <div key={index} className="room-feature-item">
                        <div className="room-feature-icon-wrapper">
                            <img src={item.icon} alt={item.title} className="room-feature-icon" />
                        </div>
                        <span className="room-feature-text">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomFeatures;
