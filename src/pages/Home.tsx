import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import AboutCard from '../components/AboutCard';
import GlassCard from '../components/GlassCard';
import Typewriter from '../components/Typewriter';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  const basicInfo = [
    { label: t('basicInfo.name'), value: t('values.name') },
    { label: t('basicInfo.gender'), value: t('values.gender') },
    { label: t('basicInfo.age'), value: new Date().getFullYear() - 1999},
    { label: t('basicInfo.hometown'), value: t('values.hometown') },
    { label: t('basicInfo.wechat'), value: t('values.wechat') },
    { label: t('basicInfo.email'), value: t('values.email') },
    { label: t('basicInfo.worktime'), value: `${new Date().getFullYear() - 2022}${t('basicUnit.year')}` }
  ];

  const skills = [
    { label: t('skills.backend'), value: 'JavaSE, JavaEE, SpringBoot, SpringCloud, Mybatis, Redis, MQ' },
    { label: t('skills.frontend'), value: 'JavaScript, Vue, React, ReactNative, Flutter, TypeScript' },
    { label: t('skills.devops'), value: 'Linux, Docker, AWS, Azure, 阿里云' }
  ];

  const scrollToSection = (targetY: number) => {
    if (isScrolling.current) return;
    
    isScrolling.current = true;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // 如果在第一屏（0px）向下滚动
      if (scrollPosition < viewportHeight / 2 && e.deltaY > 0) {
        e.preventDefault();
        scrollToSection(viewportHeight);
      }
      // 如果在第二屏顶部（100vh）向上滚动
      else if (scrollPosition > viewportHeight / 2 && e.deltaY < 0) {
        e.preventDefault();
        scrollToSection(0);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const deltaY = touchEndY - touchStartY.current;
      
      // 如果在第一屏（0px）向下滑动
      if (scrollPosition < viewportHeight / 2 && deltaY < -50) {
        scrollToSection(viewportHeight);
      }
      // 如果在第二屏顶部（100vh）向上滑动
      else if (scrollPosition > viewportHeight / 2 && deltaY > 50) {
        scrollToSection(0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* 标题部分 */}
      <div className="h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Title className="whitespace-nowrap text-[clamp(2rem,5vw,4rem)]">{t('greeting')}</Title>
          <Subtitle className="text-xl md:text-2xl">
            <Typewriter
              words={[
                t('roles.frontend'),
                t('roles.uiux'),
                t('roles.creative'),
                t('roles.learner')
              ]}
            />
          </Subtitle>
        </motion.div>
      </div>

      {/* 内容部分 */}
      <div ref={contentRef} className="min-h-screen mt-16">
        {/* 个人信息和介绍 */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 px-4 py-8"
        >
          <Title className="text-3xl md:text-4xl mb-8 text-center">{t('about')}</Title>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* 左侧个人信息卡片 */}
            <GlassCard className="p-8 md:w-[25%]">
              <div className="flex flex-col items-center gap-8">
                {/* 头像部分 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GlassCard className="w-32 h-32 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <div className="text-5xl">👨‍💻</div>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* 个人信息部分 */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <div className="flex flex-wrap justify-between gap-4">
                    {basicInfo.map((item, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="text-gray-400 text-sm font-medium">{item.label}</span>
                        <span className="text-white text-lg mt-1">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </GlassCard>

            {/* 右侧介绍卡片 */}
            <AboutCard className="md:w-[75%]"/>
          </div>
        </motion.div>

        {/* 技术栈 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-6 rounded-lg"
        >
          <Title className="text-3xl md:text-4xl mb-4">{t('skills.title')}</Title>
          <GlassCard className="p-6">
            <div className="space-y-4">
              {skills.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-gray-400 text-sm mb-1">{item.label}</span>
                  <span className="text-white text-lg">{item.value}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;