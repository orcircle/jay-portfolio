import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GlassCard from '../components/GlassCard';
import Title from '../components/Title';

interface Project {
  key: string;
  title: string;
  description: string;
  responsibilities: string[];
  techPoints: string[];
  achievements: string[];
  technologies: string[];
}

interface Company {
  key: string;
  name: string;
  type: string;
  position: string;
  period: string;
  projects: Project[];
}

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  // 简单的模态框管理
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedProject) {
        closeProjectModal();
      }
    };

    if (selectedProject) {
      // 简单的背景滚动锁定
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      // 简单的恢复
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      // 清理
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  // 获取公司数据
  const companyKeys = ['kulicke_soffa', 'shanghai_bank', 'changshu_bank', 'freelance'];
  
  const companies: Company[] = companyKeys.map(companyKey => {
    const companyData = t(`portfolio.companies.${companyKey}`, { returnObjects: true }) as any;
    const projectKeys = Object.keys(companyData.projects || {});
    
    const projects: Project[] = projectKeys.map(projectKey => ({
      key: `${companyKey}-${projectKey}`,
      title: companyData.projects[projectKey].title,
      description: companyData.projects[projectKey].description,
      responsibilities: companyData.projects[projectKey].responsibilities || [],
      techPoints: companyData.projects[projectKey].techPoints || [],
      achievements: companyData.projects[projectKey].achievements || [],
      technologies: companyData.projects[projectKey].technologies || []
    }));

    return {
      key: companyKey,
      name: companyData.name,
      type: companyData.type,
      position: companyData.position,
      period: companyData.period,
      projects
    };
  });

  const openProjectModal = (project: Project, company: Company) => {
    setSelectedProject(project);
    setSelectedCompany(company);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setSelectedCompany(null);
  };

  const getCompanyIcon = (companyKey: string) => {
    const icons = {
      'kulicke_soffa': '🏭',
      'shanghai_bank': '🏦',
      'changshu_bank': '🏦',
      'freelance': '💼'
    };
    return icons[companyKey as keyof typeof icons] || '🏢';
  };

  const getCompanyColor = (companyKey: string) => {
    const colors = {
      'kulicke_soffa': 'from-blue-500 to-blue-600',
      'shanghai_bank': 'from-green-500 to-green-600',
      'changshu_bank': 'from-purple-500 to-purple-600',
      'freelance': 'from-orange-500 to-orange-600'
    };
    return colors[companyKey as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Title className="text-3xl md:text-4xl mb-4">
          {t('portfolio.title')}
        </Title>
        <p className="text-gray-300 text-lg">
          {t('portfolio.description')}
        </p>
      </motion.div>

      <div className="space-y-8">
        {companies.map((company, companyIndex) => (
          <motion.div
            key={company.key}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: companyIndex * 0.1 }}
          >
            {/* 公司头部 */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getCompanyColor(company.key)} flex items-center justify-center text-2xl`}>
                  {getCompanyIcon(company.key)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{company.name}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{company.type}</span>
                    <span>•</span>
                    <span>{company.position}</span>
                    <span>•</span>
                    <span>{company.period}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 项目列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {company.projects.map((project, projectIndex) => (
                <motion.div
                  key={project.key}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: projectIndex * 0.05 }}
                >
                  <GlassCard className="portfolio-card p-6 cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group no-select">
                    <div onClick={() => openProjectModal(project, company)}>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold gradient-text leading-tight group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="text-sm text-gray-500 group-hover:text-primary transition-colors">
                          ···
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded text-xs text-blue-400 border border-blue-500/30">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="text-xs text-gray-400 group-hover:text-primary transition-colors flex items-center gap-1">
                        <span>{t('portfolio.clickToView')}</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 项目详情大卡片模态框 */}
      <AnimatePresence>
        {selectedProject && selectedCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl w-full max-w-4xl max-h-full shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {/* 模态框头部 */}
              <div className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 p-4 md:p-6 flex-shrink-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 md:w-12 md:h-12 mobile-modal-icon rounded-full bg-gradient-to-r ${getCompanyColor(selectedCompany.key)} flex items-center justify-center text-2xl md:text-2xl`}>
                      {getCompanyIcon(selectedCompany.key)}
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl mobile-modal-title font-bold gradient-text">{selectedProject.title}</h2>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                        <span>{selectedCompany.name}</span>
                        <span>•</span>
                        <span>{selectedCompany.period}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeProjectModal}
                    className="touch-target text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                    aria-label={t('portfolio.close')}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 模态框内容 */}
              <div className="p-4 md:p-6 space-y-4 md:space-y-6 flex-1 overflow-y-auto">
                {/* 项目描述 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">📋 {t('portfolio.projectIntro')}</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* 核心职责 */}
                {selectedProject.responsibilities.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">🎯 {t('portfolio.responsibilities')}</h3>
                    <div className="space-y-2">
                      {selectedProject.responsibilities.map((resp, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg"
                        >
                          <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                          <span className="text-gray-300">{resp}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 技术要点 */}
                {selectedProject.techPoints.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">⚡ {t('portfolio.techPoints')}</h3>
                    <div className="space-y-2">
                      {selectedProject.techPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg"
                        >
                          <span className="text-purple-400 mt-1 flex-shrink-0">●</span>
                          <span className="text-gray-300">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 项目成果 */}
                {selectedProject.achievements.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3">🏆 {t('portfolio.achievements')}</h3>
                    <div className="space-y-2">
                      {selectedProject.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
                        >
                          <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-300">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 技术栈 */}
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">🛠️ {t('portfolio.fullTechStack')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        className="px-3 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg text-sm text-gray-300 hover:scale-105 transition-transform"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio; 