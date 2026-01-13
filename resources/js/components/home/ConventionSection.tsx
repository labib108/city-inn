import React from 'react';
import './ConventionSection.css';

interface ConventionItemProps {
    title: string;
    image: string;
}

const items: ConventionItemProps[] = [
    { title: 'Restaurant', image: '/images/home/resturant.png' },
    { title: 'Convention Hall', image: '/images/home/convention_hall.png' },
    { title: 'Lobby', image: '/images/home/lobby.png' },
    { title: 'Swimming Pool', image: '/images/home/swimming_pool.png' }
];

const ConventionSection: React.FC = () => {
    return (
        <div className="convention-section-container">
            {items.map((item, index) => (
                <div key={index} className="convention-item">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="convention-image"
                        onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/400x350/1a1a1a/FFF?text=Image+Missing';
                        }}
                    />
                    <div className="convention-banner">
                        <span className="convention-title">{item.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ConventionSection;
