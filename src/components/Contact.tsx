import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <FaPhone className="text-primary text-2xl" />,
      label: t('contact.phone'),
      value: '+86 19522716628',
    },
    {
      icon: <FaEnvelope className="text-primary text-2xl" />,
      label: t('contact.email'),
      value: 'jieyuanprivate@gmail.com',
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t('contact.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-primary mb-6">
              {t('contact.title')}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {item.icon}
                  <div>
                    <p className="text-gray-600">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-primary mb-6">
              {t('contact.social')}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;