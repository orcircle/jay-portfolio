import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import GlassCard from '../components/GlassCard';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="flex flex-col gap-8">
        {/* 联系方式 */}
        <div className="text-center">
          <Title>{t('contact.title')}</Title>
          <p className="text-gray-300 mt-4">{t('contact.description')}</p>
        </div>

        {/* 联系表单 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <Subtitle className="text-xl md:text-2xl mb-4 font-bold">{t('contact.title')}</Subtitle>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">{t('basicInfo.email')}</h4>
                <p className="text-gray-300">{t('values.email')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">{t('basicInfo.wechat')}</h4>
                <p className="text-gray-300">{t('values.wechat')}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-2xl font-bold gradient-text mb-6">{t('contact.form.message')}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">{t('contact.form.message')}</label>
                <textarea 
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Contact; 