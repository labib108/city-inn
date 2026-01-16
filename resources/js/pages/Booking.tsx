import React from 'react'; // Implied import even if not always strictly needed in modern React setup depending on config, but good practice
import MainLayout from '@/Layouts/MainLayout';
import BookingForm from '@/components/booking/BookingForm';

export default function Booking() {
    return (
        <MainLayout>
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
                <BookingForm />
            </div>
        </MainLayout>
    );
}
