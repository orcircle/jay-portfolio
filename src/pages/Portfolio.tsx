import React from 'react';
import GlassCard from '../components/GlassCard';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: '项目一',
      description: '这是一个使用React和TypeScript开发的项目',
      technologies: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: '项目二',
      description: '这是一个使用Vue和Node.js开发的项目',
      technologies: ['Vue', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <GlassCard key={index} className="p-6">
            <h3 className="text-2xl font-bold gradient-text mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio; 