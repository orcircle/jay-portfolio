import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { changeLanguage } from '../i18n';
import { supportedLanguages } from '../services/translation';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = async (languageCode: string) => {
    await changeLanguage(languageCode);
    setIsLanguageMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-white text-xl font-bold cursor-pointer"
            >
              {t('name')}
            </Link>
          </div>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              {t('about')}
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              {t('skills')}
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              {t('portfolio')}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              {t('contact')}
            </Link>
            
            {/* 语言选择下拉菜单 */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                {t('language')}
              </button>
              {isLanguageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                >
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/10 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('skills')}
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('portfolio')}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            
            {/* 移动端语言选择 */}
            <div className="px-3 py-2">
              <button
                onClick={toggleLanguageMenu}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                {t('language')}
              </button>
              {isLanguageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 space-y-1"
                >
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="block w-full text-left px-3 py-2 text-sm text-white hover:text-gray-300"
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation; 