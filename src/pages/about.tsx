import Layout from '../components/Layout';

export default function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Docker', level: 65 },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#A59ADB] mb-6">About Me</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate developer with a love for creating meaningful digital experiences
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Story */}
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">My Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a full-stack developer with over 5 years of experience building web applications 
                  and digital solutions. My journey in tech started with a curiosity about how things work 
                  on the internet, which led me to learn programming and design.
                </p>
                <p>
                  I specialize in modern web technologies like React, TypeScript, and Node.js, 
                  but I'm always eager to learn new tools and frameworks. I believe in writing clean, 
                  maintainable code and creating user experiences that are both beautiful and functional.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">Skills & Technologies</h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-[#A59ADB] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#A59ADB] to-[#CE4DDB] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-white mb-8 text-center">Experience</h2>
            <div className="space-y-8">
              <div className="bg-[#2E2D2D] border border-[#A59ADB]/20 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Senior Full Stack Developer</h3>
                    <p className="text-[#A59ADB]">Tech Company Inc.</p>
                  </div>
                  <span className="text-gray-400 text-sm">2022 - Present</span>
                </div>
                <p className="text-gray-300">
                  Leading development of scalable web applications using React, Node.js, and AWS. 
                  Mentoring junior developers and implementing best practices for code quality and performance.
                </p>
              </div>

              <div className="bg-[#2E2D2D] border border-[#A59ADB]/20 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Frontend Developer</h3>
                    <p className="text-[#A59ADB]">Digital Agency</p>
                  </div>
                  <span className="text-gray-400 text-sm">2020 - 2022</span>
                </div>
                <p className="text-gray-300">
                  Built responsive web applications and e-commerce platforms. Collaborated with designers 
                  to create seamless user experiences and optimized performance for better user engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
