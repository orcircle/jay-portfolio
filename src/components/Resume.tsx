import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const SkillCard = ({ title, items }: { title: string; items: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg p-6"
  >
    <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

const Resume = () => {
  const { t } = useTranslation();

  return (
    <section id="resume" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t('profile.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-primary mb-4">
              {t('profile.about.title')}
            </h3>
            <p className="text-gray-700">{t('profile.about.description')}</p>
          </motion.div>

          <div className="space-y-6">
            <SkillCard
              title={t('profile.skills.frontend.title')}
              items={t('profile.skills.frontend.items', { returnObjects: true })}
            />
            <SkillCard
              title={t('profile.skills.backend.title')}
              items={t('profile.skills.backend.items', { returnObjects: true })}
            />
            <SkillCard
              title={t('profile.skills.cloud.title')}
              items={t('profile.skills.cloud.items', { returnObjects: true })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 