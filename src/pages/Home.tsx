import React from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import AboutCard from '../components/AboutCard';
import GlassCard from '../components/GlassCard';
import Typewriter from '../components/Typewriter';

const Home: React.FC = () => {
  const basicInfo = [
    { label: '姓名', value: '袁杰' },
    { label: '性别', value: '男' },
    { label: '年龄', value: '24岁' },
    { label: '籍贯', value: '苏州' },
    { label: '政治面貌', value: '非党员' },
    { label: '微信号', value: '19522716628' },
    { label: '邮箱', value: 'yuanjie1224@gmail.com' }
  ];

  const skills = [
    { label: '后端技术', value: 'JavaSE, JavaEE, SpringBoot, SpringCloud, Mybatis, Redis, MQ' },
    { label: '前端技术', value: 'JavaScript, Vue, React, ReactNative, Flutter, TypeScript' },
    { label: '运维能力', value: 'Linux, Docker, AWS, Azure, 阿里云' }
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        {/* 标题部分 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center h-screen flex flex-col justify-center"
        >
          <Title className="whitespace-nowrap text-[clamp(2rem,5vw,4rem)]">你好，我是袁杰</Title>
          <Subtitle className="text-xl md:text-2xl">
            <Typewriter
              words={[
                '前端开发工程师',
                'UI/UX 设计师',
                '创意工作者',
                '终身学习者'
              ]}
            />
          </Subtitle>
          {/* 背景装饰 */}
          <div className="bg-primary/10 rounded-full"></div>
          <div className="bg-secondary/10 rounded-full"></div>
        </motion.div>

        {/* 个人信息和介绍 */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 px-4 py-8"
        >
          <Title className="text-3xl md:text-4xl mb-8 text-center">关于我</Title>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* 左侧个人信息卡片 */}
            <GlassCard className="p-8 md:w-1/3">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <AboutCard />
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
          <Title className="text-3xl md:text-4xl mb-4">技术栈</Title>
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