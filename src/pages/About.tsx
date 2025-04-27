import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import GlassCard from '../components/GlassCard';

const About: React.FC = () => {
  const { t } = useTranslation();

  const frontendItems = t('aboutPage.tech.frontend.items', { returnObjects: true }) as string[];
  const performanceItems = t('aboutPage.tech.performance.items', { returnObjects: true }) as string[];

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
        {/* 网站介绍 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">{t('aboutPage.intro.title')}</h2>
          <p className="text-gray-300">
            {t('aboutPage.intro.content')}
          </p>
        </GlassCard>

        {/* 设计理念 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">{t('aboutPage.design.title')}</h2>
          <p className="text-gray-300">
            {t('aboutPage.design.content')}
          </p>
        </GlassCard>

        {/* 技术特点 */}
        <GlassCard className="p-6 md:col-span-2">
          <h2 className="text-2xl font-bold gradient-text mb-4">{t('aboutPage.tech.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">{t('aboutPage.tech.frontend.title')}</h3>
              <ul className="text-gray-300 space-y-2">
                {frontendItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">{t('aboutPage.tech.performance.title')}</h3>
              <ul className="text-gray-300 space-y-2">
                {performanceItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>

        {/* 未来展望 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">{t('aboutPage.future.title')}</h2>
          <p className="text-gray-300">
            {t('aboutPage.future.content')}
          </p>
        </GlassCard>

        {/* 联系方式 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">{t('aboutPage.contact.title')}</h2>
          <p className="text-gray-300 mb-4">
            {t('aboutPage.contact.intro')}
          </p>
          <div className="text-gray-300 space-y-2">
            <p>{t('aboutPage.contact.email')}</p>
            <p>{t('aboutPage.contact.wechat')}</p>
            <p>{t('aboutPage.contact.github')}</p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default About; 