import React from 'react';
import { Navbar } from '@/components/ui/navbar';
import Footer from '@/components/home/Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
