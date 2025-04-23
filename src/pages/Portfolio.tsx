import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import GlassCard from '../components/GlassCard';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: '项目1',
      description: '这是一个使用React和TypeScript开发的项目',
      technologies: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: '项目2',
      description: '这是一个使用Node.js和MongoDB开发的后端项目',
      technologies: ['Node.js', 'MongoDB', 'Express']
    }
  ];

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* 第一页：作品集介绍 */}
      <section className="h-screen snap-start grid place-items-center p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <div className="text-center space-y-4 md:space-y-6">
              <Title className="text-4xl md:text-6xl">我的作品</Title>
              <Subtitle className="text-xl md:text-2xl">精选项目展示</Subtitle>
            </div>
          </div>
        </div>
      </section>

      {/* 第二页：项目列表 */}
      <section className="h-screen snap-start grid place-items-center p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="w-full">
                <GlassCard>
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 rounded-full text-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 