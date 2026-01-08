import React from 'react';
import { AppButton, CurrencyButton, ContactUsButton } from '@/components/ui/buttons';
import { Navbar } from '@/components/ui/navbar';
import { BookingBar } from '@/components/ui/booking';
import './Home.css';

const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

export default function Home() {
    return (
        <div className="home-container">
            <Navbar />

            <div style={{ padding: '2rem 0' }}>
                <BookingBar />
            </div>

            <h1 className="home-title">City Inn - Component Preview</h1>

            <div className="buttons-grid">
                {/* 1. Contact Us */}
                <section className="button-group">
                    <h3>1. Contact Us</h3>
                    <ContactUsButton />
                </section>

                {/* 2. Currency Button */}
                <section className="button-group">
                    <h3>2. Currency Button</h3>
                    <CurrencyButton />
                </section>

                {/* 3. Search Room Dark */}
                <section className="button-group">
                    <h3>3. Search Room Dark</h3>
                    <AppButton label="SEARCH ROOM" icon={<SearchIcon />} variant="solid-golden" />
                </section>

                {/* 4. Search Room Light */}
                <section className="button-group">
                    <h3>4. Search Room Light</h3>
                    <AppButton label="SEARCH ROOM" icon={<SearchIcon />} variant="outline-golden" />
                </section>

                {/* 5. Book Now */}
                <section className="button-group">
                    <h3>5. Book Now</h3>
                    <AppButton label="BOOK NOW" variant="transparent-golden" width="10.625rem" />
                </section>

                {/* 6. See All */}
                <section className="button-group">
                    <h3>6. See All</h3>
                    <AppButton label="SEE ALL" variant="solid-golden" />
                </section>

                {/* 7. View Rooms */}
                <section className="button-group">
                    <h3>7. View Rooms & Rates</h3>
                    <AppButton label="VIEW ROOM & RATES" variant="transparent-golden" />
                </section>

                {/* 8. See More */}
                <section className="button-group">
                    <h3>8. See More</h3>
                    <AppButton label="SEE MORE" variant="solid-golden" />
                </section>

                {/* 9. Follow Us */}
                <section className="button-group">
                    <h3>9. Follow Us</h3>
                    <AppButton label="FOLLOW US" variant="solid-golden" />
                </section>

                {/* 10. Load More */}
                <section className="button-group">
                    <h3>10. Load More</h3>
                    <AppButton label="LOAD MORE" variant="outline-golden" />
                </section>

                {/* 11. Load More Dark */}
                <section className="button-group">
                    <h3>11. Load More Dark</h3>
                    <AppButton label="LOAD MORE" variant="outline-dark" />
                </section>

                {/* 12. Subscribe Us */}
                <section className="button-group">
                    <h3>12. Subscribe Us</h3>
                    <AppButton label="SUBSCRIBE US" variant="solid-golden" />
                </section>

                {/* 13. Join Now */}
                <section className="button-group">
                    <h3>13. Join Now</h3>
                    <AppButton label="JOIN NOW" variant="transparent-golden" />
                </section>

                {/* 14. Inquiry */}
                <section className="button-group">
                    <h3>14. Send Inquiry</h3>
                    <AppButton label="SEND INQUIRY" variant="transparent-golden" />
                </section>

                {/* 15. Continue */}
                <section className="button-group">
                    <h3>15. Continue</h3>
                    <AppButton label="CONTINUE" variant="solid-golden" />
                </section>

                {/* 16. Submit */}
                <section className="button-group">
                    <h3>16. Submit</h3>
                    <AppButton label="SUBMIT" variant="solid-golden" />
                </section>
            </div>
        </div>
    );
}
