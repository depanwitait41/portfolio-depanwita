import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideDrawer from './SideDrawer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-[#2E2D2D] text-white">
      <Header onMenuClick={toggleDrawer} />
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
