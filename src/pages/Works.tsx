import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: 'web' | 'mobile' | 'backend';
}

const Works = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: '电商平台',
      description: '使用React和Node.js构建的全功能电商平台，具有实时库存管理和安全支付处理功能。',
      image: '/projects/ecommerce.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'web'
    },
    {
      id: 2,
      title: '移动应用开发',
      description: '使用React Native开发的跨平台移动应用，提供类似原生的性能和用户体验。',
      image: '/projects/mobile-app.jpg',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'API开发',
      description: '使用Node.js和Express构建的RESTful API服务，实现了安全性、可扩展性和性能的最佳实践。',
      image: '/projects/api.jpg',
      tags: ['Go', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'backend'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <FaCode className="text-primary" />;
      case 'mobile':
        return <FaMobile className="text-secondary" />;
      case 'backend':
        return <FaServer className="text-accent" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="section-title animate-float">我的项目</h1>
          <p className="section-subtitle">这里展示了我的一些精选项目，展示我的技术能力和创造力。</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-full">
                  {getCategoryIcon(project.category)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="skill-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <FaExternalLinkAlt />
                      <span>查看项目</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works; 