import React from 'react';
import { useTranslation } from 'react-i18next';
import GlassCard from '../components/GlassCard';
import Title from '../components/Title';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: t('portfolio.projects.project1.title'),
      description: t('portfolio.projects.project1.description'),
      technologies: t('portfolio.projects.project1.technologies', { returnObjects: true }) as string[]
    },
    {
      title: t('portfolio.projects.project2.title'),
      description: t('portfolio.projects.project2.description'),
      technologies: t('portfolio.projects.project2.technologies', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <Title className="text-3xl md:text-4xl mb-8 text-center">
        {t('portfolio.title')}
      </Title>
      <p className="text-gray-300 text-center mb-12">
        {t('portfolio.description')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <GlassCard key={index} className="p-6">
            <h3 className="text-2xl font-bold gradient-text mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, techIndex: number) => (
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