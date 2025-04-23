import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const { t } = useTranslation();

  // 临时占位图片
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: 'https://via.placeholder.com/600x400',
      description: 'Project description goes here',
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'https://via.placeholder.com/600x400',
      description: 'Project description goes here',
    },
    {
      id: 3,
      title: 'Project 3',
      image: 'https://via.placeholder.com/600x400',
      description: 'Project description goes here',
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t('projects.title')}
        </motion.h2>

        <p className="text-center text-gray-600 mb-12">
          {t('projects.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;