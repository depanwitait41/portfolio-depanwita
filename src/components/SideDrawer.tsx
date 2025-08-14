import React, { useState } from 'react';
import Link from 'next/link';
import ContactPopup from './ContactPopup';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideDrawer({ isOpen, onClose }: SideDrawerProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Home', action: ()=> window.scrollTo({top:0, behavior: 'smooth'}) },
    { href: '#projects', label: 'Projects', action: ()=>document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactOpen(true);
    onClose(); // Close the side drawer when opening contact popup
  };

  const handleNavClick = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    action();
    onClose(); // Close the drawer after navigation
  };
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#2E2D2D] border-r border-[#A59ADB]/20 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#A59ADB]/20">
            <h2 className="text-xl font-bold text-[#A59ADB]">Menu</h2>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-[#A59ADB] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={(e)=> handleNavClick(e, link.action)}
                    className="block text-gray-300 hover:text-[#A59ADB] transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-[#A59ADB]/10"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={handleContactClick}
                  className="block w-full text-left text-gray-300 hover:text-[#A59ADB] transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-[#A59ADB]/10"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-[#A59ADB]/20">
            <p className="text-sm text-gray-400 text-center">
              © 2024 Portfolio
            </p>
          </div>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
}
