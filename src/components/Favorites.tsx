import React from 'react';

interface FavoriteItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

interface FavoritesProps {
  items?: FavoriteItem[];
}

export default function Favorites({ items = [] }: FavoritesProps) {
  // Sample data - replace with your actual favorites
  const defaultItems: FavoriteItem[] = [
    {
      id: '1',
      title: 'React Portfolio',
      description: 'A modern portfolio built with React and TypeScript',
      image: '/api/placeholder/300/200',
      category: 'Web Development',
      link: 'https://github.com/example/react-portfolio',
    },
    {
      id: '2',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      image: '/api/placeholder/300/200',
      category: 'Full Stack',
      link: 'https://github.com/example/ecommerce',
    },
    {
      id: '3',
      title: 'Mobile App',
      description: 'Cross-platform mobile application built with React Native',
      image: '/api/placeholder/300/200',
      category: 'Mobile Development',
      link: 'https://github.com/example/mobile-app',
    },
    {
      id: '4',
      title: 'Data Visualization',
      description: 'Interactive data visualization dashboard with D3.js',
      image: '/api/placeholder/300/200',
      category: 'Data Science',
      link: 'https://github.com/example/data-viz',
    },
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#A59ADB] mb-4">
            My Favorites
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of my favorite projects and works that I'm most proud of.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#2E2D2D] border border-[#A59ADB]/20 rounded-lg overflow-hidden hover:border-[#A59ADB]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#A59ADB]/10"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-[#A59ADB]/20 to-[#CE4DDB]/20 flex items-center justify-center">
                <div className="text-[#A59ADB] text-4xl">📁</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#CE4DDB] bg-[#CE4DDB]/10 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#A59ADB] hover:text-[#CE4DDB] transition-colors text-sm font-medium"
                  >
                    View Project
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {displayItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-[#A59ADB] text-6xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No favorites yet
            </h3>
            <p className="text-gray-400">
              Add your favorite projects here to showcase them.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
