import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh.json';

// 定义翻译资源的类型
interface TranslationResources {
  [key: string]: {
    translation: typeof enTranslations;
  };
}

// 初始化翻译资源
const resources: TranslationResources = {
  en: {
    translation: enTranslations
  },
  zh: {
    translation: zhTranslations
  }
};

// 初始化i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // 默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// 导出语言切换函数
export const changeLanguage = async (language: string) => {
  await i18n.changeLanguage(language);
};

export default i18n; 