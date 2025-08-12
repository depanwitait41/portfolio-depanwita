import React, { useState } from 'react';
import Link from 'next/link';
import ContactPopup from './ContactPopup';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E2D2D] border-b border-[#A59ADB]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-[#A59ADB] hover:text-[#CE4DDB] transition-colors">
                Portfolio
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-[#A59ADB] transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleContactClick}
                className="text-gray-300 hover:text-[#A59ADB] transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={onMenuClick}
                className="text-gray-300 hover:text-[#A59ADB] transition-colors p-2"
                aria-label="Open menu"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Popup */}
      <ContactPopup 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
}
