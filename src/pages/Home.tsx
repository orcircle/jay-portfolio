import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import AboutCard from '../components/AboutCard';
import GlassCard from '../components/GlassCard';
import Typewriter from '../components/Typewriter';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const basicInfo = [
    { label: t('basicInfo.name'), value: t('values.name') },
    { label: t('basicInfo.gender'), value: t('values.gender') },
    { label: t('basicInfo.age'), value: t('values.age')},
    { label: t('basicInfo.hometown'), value: t('values.hometown') },
    { label: t('basicInfo.wechat'), value: t('values.wechat') },
    { label: t('basicInfo.email'), value: t('values.email') },
    { label: t('basicInfo.worktime'), value: `${new Date().getFullYear() - 2022}${t('basicUnit.year')}` }
  ];

  interface SkillProgressItem {
    nameZh: string;
    nameEn: string;
    level: number;
    category: string;
  }


  const skillsData: SkillProgressItem[] = [
    // 后端技能
    { nameZh: 'Java/Spring', nameEn: 'Java/Spring', level: 95, category: 'backend' },
    { nameZh: 'Python/FastAPI', nameEn: 'Python/FastAPI', level: 85, category: 'backend' },
    { nameZh: 'Go/Gin', nameEn: 'Go/Gin', level: 80, category: 'backend' },
    { nameZh: 'Node.js', nameEn: 'Node.js', level: 75, category: 'backend' },
    
    // 数据层技能
    { nameZh: 'MySQL优化', nameEn: 'MySQL Optimization', level: 90, category: 'data' },
    { nameZh: 'Redis集群', nameEn: 'Redis Cluster', level: 88, category: 'data' },
    { nameZh: 'RabbitMQ', nameEn: 'RabbitMQ', level: 85, category: 'data' },
    { nameZh: 'MQTT', nameEn: 'MQTT', level: 80, category: 'data' },
    
    // 前端技能
    { nameZh: 'TypeScript/JavaScript', nameEn: 'TypeScript/JavaScript', level: 85, category: 'frontend' },
    { nameZh: 'React/Vue', nameEn: 'React/Vue', level: 82, category: 'frontend' },
    { nameZh: 'Flutter', nameEn: 'Flutter', level: 75, category: 'frontend' },
    { nameZh: 'Next.js', nameEn: 'Next.js', level: 70, category: 'frontend' },
    
    // DevOps技能
    { nameZh: 'Docker/K8s', nameEn: 'Docker/K8s', level: 85, category: 'devops' },
    { nameZh: 'Linux/Shell', nameEn: 'Linux/Shell', level: 90, category: 'devops' },
    { nameZh: '阿里云/AWS', nameEn: 'Alibaba Cloud/AWS', level: 80, category: 'devops' },
    { nameZh: 'CI/CD', nameEn: 'CI/CD', level: 88, category: 'devops' },
  ];

  const skillCategories = [
    { 
      key: 'backend', 
      title: isZh ? '后端开发' : 'Backend Dev', 
      color: 'from-blue-500 to-blue-600' 
    },
    { 
      key: 'data', 
      title: isZh ? '数据处理' : 'Data Processing', 
      color: 'from-green-500 to-green-600' 
    },
    { 
      key: 'frontend', 
      title: isZh ? '前端技术' : 'Frontend Tech', 
      color: 'from-purple-500 to-purple-600' 
    },
    { 
      key: 'devops', 
      title: 'DevOps', 
      color: 'from-orange-500 to-orange-600' 
    }
  ];

const SkillProgressBar: React.FC<{ skill: SkillProgressItem; color: string }> = ({ skill, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }} // 简化动画
    viewport={{ once: true, margin: "-50px" }} // 提前触发
    className="mb-4"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-white font-medium text-sm">{isZh ? skill.nameZh : skill.nameEn}</span>
      <span className="text-gray-400 text-xs">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ 
          duration: 0.8, 
          delay: 0.1, 
          ease: "easeOut" // 简化缓动函数
        }}
        viewport={{ once: true, margin: "-50px" }}
        className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
      >
        {/* 移除持续动画的pulse效果 */}
        <div className="absolute inset-0 bg-white opacity-10 rounded-full"></div>
      </motion.div>
    </div>
  </motion.div>
);

  return (
    <div className="min-h-screen">
      {/* 首屏内容 */}
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
                t('roles.fullstack'),
                t('roles.java'),
                t('roles.microservice'),
                t('roles.backend'),
                t('roles.frontend'),
                t('roles.creative'),
                t('roles.learner')
              ]}
            />
          </Subtitle>
        </motion.div>
      </div>

      {/* 关于我部分 */}
      <div className="min-h-screen pt-20 flex flex-col">
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
          <Title className="text-3xl md:text-4xl mb-6">{t('skills.title')}</Title>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <GlassCard key={category.key} className="p-6">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg font-bold text-primary mb-4 flex items-center"
                >
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-2`}></div>
                  {category.title}
                </motion.h3>
                <div className="space-y-3">
                  {skillsData
                    .filter(skill => skill.category === category.key)
                    .map((skill) => (
      <SkillProgressBar 
        key={`${skill.nameEn}-${skill.category}`} 
        skill={skill} 
        color={category.color}
      />
                    ))
                  }
                </div>
              </GlassCard>
            ))}
          </div>
          
          {/* 技能等级说明 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <div className="flex justify-center items-center gap-6 text-xs text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                <span>{isZh ? '精通 (85-95%)' : 'Expert (85-95%)'}</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                <span>{isZh ? '熟练 (70-84%)' : 'Proficient (70-84%)'}</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-1"></div>
                <span>{isZh ? '了解 (<70%)' : 'Familiar (<70%)'}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;