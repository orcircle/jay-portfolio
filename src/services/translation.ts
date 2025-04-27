// 支持的语言列表
export const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' }
];

// 翻译文本
export const translateText = async (text: string, targetLanguage: string): Promise<string> => {
  try {
    // 使用浏览器的翻译API
    const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${process.env.VITE_GOOGLE_TRANSLATE_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
      }),
    });

    if (!response.ok) {
      throw new Error('Translation failed');
    }

    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // 如果翻译失败，返回原文
  }
};

// 批量翻译对象
export const translateObject = async (obj: any, targetLanguage: string): Promise<any> => {
  const translatedObj: any = {};
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      translatedObj[key] = await translateText(value, targetLanguage);
    } else if (Array.isArray(value)) {
      translatedObj[key] = await Promise.all(
        value.map(async (item) => {
          if (typeof item === 'string') {
            return await translateText(item, targetLanguage);
          }
          return item;
        })
      );
    } else if (typeof value === 'object' && value !== null) {
      translatedObj[key] = await translateObject(value, targetLanguage);
    } else {
      translatedObj[key] = value;
    }
  }
  
  return translatedObj;
}; 