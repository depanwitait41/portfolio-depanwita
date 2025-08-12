import React from 'react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-[#2E2D2D] border border-[#A59ADB]/20 rounded-lg shadow-xl max-w-md w-full mx-4">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#A59ADB]/20">
            <h2 className="text-2xl font-bold text-[#A59ADB]">Contact Me</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-[#A59ADB] transition-colors"
              aria-label="Close contact popup"
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

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Mobile Number */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#A59ADB]/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#A59ADB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Mobile Number</p>
                <p className="text-white font-medium">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#CE4DDB]/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#CE4DDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">depanwita.dey@example.com</p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#A59ADB]/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#A59ADB]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <p className="text-white font-medium">github.com/depanwita-dey</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-[#A59ADB]/20">
            <button
              onClick={onClose}
              className="w-full bg-[#A59ADB] hover:bg-[#CE4DDB] text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
