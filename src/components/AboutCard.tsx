import React from 'react';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

interface AboutCardProps {
  className?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <GlassCard className={`p-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {t('skills.strengths.title')}
      </h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-400">{t('skills.strengths.backend.title')}</p>
          <p className="text-white">
            {t('skills.strengths.backend.content')}
          </p>
        </div>
        <div>
          <p className="text-gray-400">{t('skills.strengths.frontend.title')}</p>
          <p className="text-white">
            {t('skills.strengths.frontend.content')}
          </p>
        </div>
        <div>
          <p className="text-gray-400">{t('skills.strengths.devops.title')}</p>
          <p className="text-white">
            {t('skills.strengths.devops.content')}
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default AboutCard; 