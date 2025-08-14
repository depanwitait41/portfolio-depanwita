import React, { useState } from 'react';
import Layout from '../components/Layout';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      image: '/api/placeholder/400/300',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com',
      github: 'https://github.com/example/ecommerce',
      featured: true,
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: '/api/placeholder/400/300',
      category: 'Web App',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      link: 'https://example.com',
      github: 'https://github.com/example/task-app',
      featured: true,
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and TypeScript.',
      image: '/api/placeholder/400/300',
      category: 'Web Design',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://example.com',
      github: 'https://github.com/example/portfolio',
      featured: false,
    },
    {
      id: '4',
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasts and interactive maps.',
      image: '/api/placeholder/400/300',
      category: 'Web App',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      link: 'https://example.com',
      github: 'https://github.com/example/weather',
      featured: false,
    },
    {
      id: '5',
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile application for tracking workouts and nutrition.',
      image: '/api/placeholder/400/300',
      category: 'Mobile',
      technologies: ['React Native', 'Expo', 'Firebase'],
      link: 'https://example.com',
      github: 'https://github.com/example/fitness-app',
      featured: true,
    },
    {
      id: '6',
      title: 'Data Visualization Tool',
      description: 'An interactive dashboard for visualizing complex datasets with custom charts.',
      image: '/api/placeholder/400/300',
      category: 'Data Science',
      technologies: ['D3.js', 'Python', 'Flask', 'PostgreSQL'],
      link: 'https://example.com',
      github: 'https://github.com/example/data-viz',
      featured: false,
    },
  ];

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      <div id="projects" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#A59ADB] mb-6">My Projects</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of my work, from web applications to mobile apps and everything in between
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#A59ADB] text-white'
                    : 'bg-[#2E2D2D] text-gray-300 border border-[#A59ADB]/20 hover:border-[#A59ADB]/40'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#2E2D2D] border border-[#A59ADB]/20 rounded-lg overflow-hidden hover:border-[#A59ADB]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#A59ADB]/10 group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-[#A59ADB]/20 to-[#CE4DDB]/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-[#A59ADB] text-6xl">💻</div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-[#CE4DDB] text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#CE4DDB] bg-[#CE4DDB]/10 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#A59ADB] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-[#A59ADB]/10 text-[#A59ADB] px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#A59ADB] hover:bg-[#CE4DDB] text-white text-center py-2 px-4 rounded text-sm font-medium transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-[#A59ADB] text-[#A59ADB] hover:bg-[#A59ADB] hover:text-white text-center py-2 px-4 rounded text-sm font-medium transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-[#A59ADB] text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-400">
                No projects match the selected category. Try a different filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
