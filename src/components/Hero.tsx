import React, { useState } from 'react';

export default function Hero() {
  const [showTick, setShowTick] = useState(false);

  const handleGetInTouch = () => {
    setShowTick(true);
    // Reset tick after 3 seconds
    setTimeout(() => setShowTick(false), 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E2D2D] via-[#2E2D2D] to-[#1a1a1a]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#A59ADB]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#CE4DDB]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="mb-6">
          <span className="text-[#A59ADB] text-lg font-medium">{`Hello, I'm`} </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="text-[#A59ADB]">Depanwita</span>
          <span className="text-[#CE4DDB]"> Dey</span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          Full Stack Developer & Designer
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I create beautiful, functional, and user-centered digital experiences. 
          Passionate about clean code, innovative design, and building products that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#A59ADB] hover:bg-[#CE4DDB] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#A59ADB]/25">
            View My Work
          </button>
          <div className="relative">
            <button 
              onClick={handleGetInTouch}
              className="border border-[#A59ADB] text-[#A59ADB] hover:bg-[#A59ADB] hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            {/* Green Tick */}
            {showTick && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#CE4DDB] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <svg 
                  className="w-4 h-4 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
            )}
          </div>
        </div>


        {/* Scroll Indicator */}
        <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#A59ADB] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#A59ADB] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 text-[#A59ADB] text-4xl opacity-20 animate-float">
        💻
      </div>
      <div className="absolute bottom-20 left-20 text-[#CE4DDB] text-4xl opacity-20 animate-float-delayed">
        🎨
      </div>
    </section>
  );
}
