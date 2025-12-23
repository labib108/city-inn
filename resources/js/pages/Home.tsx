import React from 'react';
import { Navbar, Banner } from '@/components/home';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <Navbar />
            <Banner
                title="Welcome to City Inn"
                subtitle="Experience luxury and comfort in the heart of the city"
                backgroundImage="/images/background/home-bg1.png"
            />

            {/* Add more sections here as needed */}
            <section className="content-section">
                <div className="container">
                    <h2>Discover Our Hotel</h2>
                    <p>Your perfect stay awaits you</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
