import React, { useState } from 'react';
import './Banner.css';

interface BannerProps {
    className?: string;
}

const Banner: React.FC<BannerProps> = ({ className = '' }) => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [rooms, setRooms] = useState('1');

    return (
        <section className={`banner ${className}`}>
            {/* Background Image */}
            <div
                className="banner-bg"
                style={{ backgroundImage: `url(/images/background/home-bg1.png)` }}
            ></div>

            {/* Booking Card - Left Side */}
            <div className="booking-card">
                <h2 className="booking-title">
                    Luxurious Rooms<br />
                    <span>Tailored for you.</span>
                </h2>

                <div className="booking-form">
                    <div className="booking-field">
                        <label>Check In</label>
                        <div className="input-wrapper">
                            <img src="/images/icons/date.png" alt="" className="field-icon" />
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="booking-field">
                        <label>Check Out</label>
                        <div className="input-wrapper">
                            <img src="/images/icons/date.png" alt="" className="field-icon" />
                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="booking-field">
                        <label>Rooms</label>
                        <div className="input-wrapper">
                            <img src="/images/icons/room.png" alt="" className="field-icon" />
                            <select
                                value={rooms}
                                onChange={(e) => setRooms(e.target.value)}
                            >
                                <option value="1">1 Room</option>
                                <option value="2">2 Rooms</option>
                                <option value="3">3 Rooms</option>
                                <option value="4">4 Rooms</option>
                            </select>
                        </div>
                    </div>

                    <button className="book-now-btn">
                        Book Now
                    </button>
                </div>
            </div>

            {/* Welcome Card - Right Side */}
            <div className="welcome-card">
                <span className="welcome-label">Welcome to City Inn</span>
                <p className="welcome-text">
                    Experience the perfect blend of luxury and comfort at City Inn.
                    Our elegant rooms and exceptional service ensure a memorable stay
                    in the heart of the city.
                </p>
            </div>
        </section>
    );
};

export default Banner;
