import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import AboutCard from '../components/AboutCard';
import InfoCard from '../components/InfoCard';

const Profile: React.FC = () => {
  const basicInfo = [
    { label: '姓名', value: '袁杰' },
    { label: '职业', value: '高级软件工程师' },
    { label: '经验', value: '3年+' }
  ];

  const skills = [
    { label: '前端', value: 'React, TypeScript, Tailwind CSS' },
    { label: '后端', value: 'Node.js, Express, MongoDB' },
    { label: '其他', value: 'Git, Docker, AWS' }
  ];

  return (
    <div className="snap-container">
      {/* 移动端：第一页 - 标题 */}
      <section className="snap-section flex items-center justify-center p-4 md:hidden">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <Title className="text-4xl md:text-6xl">你好，我是袁杰</Title>
            <Subtitle className="text-xl md:text-2xl mt-4">高级软件工程师</Subtitle>
          </div>
        </div>
      </section>

      {/* 移动端：第二页 - 关于我 */}
      <section className="snap-section flex items-center justify-center p-4 md:hidden">
        <div className="w-full max-w-7xl mx-auto">
          <AboutCard />
        </div>
      </section>

      {/* 桌面端：标题和关于我 */}
      <section className="snap-section flex items-center justify-center p-4 md:p-8 hidden md:flex">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col justify-center h-full">
              <Title className="text-4xl md:text-6xl">你好，我是袁杰</Title>
              <Subtitle className="text-xl md:text-2xl mt-4">高级软件工程师</Subtitle>
            </div>
            <div className="w-full">
              <AboutCard />
            </div>
          </div>
        </div>
      </section>

      {/* 第二页：基本信息和技能 */}
      <section className="snap-section flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <InfoCard title="基本信息" items={basicInfo} />
            </div>
            <div className="w-full">
              <InfoCard title="技能" items={skills} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile; 