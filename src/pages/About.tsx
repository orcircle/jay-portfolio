import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import GlassCard from '../components/GlassCard';

const About: React.FC = () => {
  const { t } = useTranslation();

  const servicesItems = t('aboutPage.services.items', { returnObjects: true }) as string[];
  const achievementItems = t('aboutPage.achievements.items', { returnObjects: true }) as string[];
  const designItems = t('aboutPage.tech.design.items', { returnObjects: true }) as string[];
  const developmentItems = t('aboutPage.tech.development.items', { returnObjects: true }) as string[];
  const toolsItems = t('aboutPage.tech.tools.items', { returnObjects: true }) as string[];
  const valuesItems = t('aboutPage.values.items', { returnObjects: true }) as string[];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <Title>{t('aboutPage.title')}</Title>
        <Subtitle className="text-xl md:text-2xl">{t('aboutPage.subtitle')}</Subtitle>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* 工作室介绍 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">{t('aboutPage.intro.title')}</h2>
          <p className="text-gray-300">
            {t('aboutPage.intro.content')}
          </p>
        </GlassCard>

        {/* 核心服务 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">{t('aboutPage.services.title')}</h2>
          <p className="text-gray-300 mb-4">
            {t('aboutPage.services.content')}
          </p>
          <ul className="text-gray-300 space-y-2">
            {servicesItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1 flex-shrink-0">▸</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* 技术理念 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">{t('aboutPage.philosophy.title')}</h2>
          <p className="text-gray-300">
            {t('aboutPage.philosophy.content')}
          </p>
        </GlassCard>

        {/* 项目成果 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">{t('aboutPage.achievements.title')}</h2>
          <ul className="text-gray-300 space-y-3">
            {achievementItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-400 mr-2 mt-1 flex-shrink-0">✓</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* 技术栈 */}
        <GlassCard className="p-6 md:col-span-2">
          <h2 className="text-2xl font-bold gradient-text mb-6">{t('aboutPage.tech.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-pink-400 mb-3 flex items-center">
                <span className="w-2 h-2 rounded-full bg-pink-400 mr-2"></span>
                {t('aboutPage.tech.design.title')}
              </h3>
              <ul className="text-gray-300 space-y-2">
                {designItems.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                {t('aboutPage.tech.development.title')}
              </h3>
              <ul className="text-gray-300 space-y-2">
                {developmentItems.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
                <span className="w-2 h-2 rounded-full bg-orange-400 mr-2"></span>
                {t('aboutPage.tech.tools.title')}
              </h3>
              <ul className="text-gray-300 space-y-2">
                {toolsItems.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>

        {/* 工作室价值观 */}
        <GlassCard className="p-6 md:col-span-2">
          <h2 className="text-2xl font-bold gradient-text mb-4">{t('aboutPage.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {valuesItems.map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1 flex-shrink-0">◆</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </GlassCard>

      </motion.div>
    </div>
  );
};

export default About; 