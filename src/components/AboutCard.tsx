import React from 'react';
import GlassCard from './GlassCard';

const AboutCard: React.FC = () => {
  return (
    <GlassCard className="p-8">
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        关于我
      </h2>
      <p className="text-gray-300 mb-6">
        我是一名热爱技术的高级软件工程师，专注于构建现代化的Web应用。
        拥有丰富的React、Node.js和TypeScript开发经验，致力于创造高效、可维护的代码。
      </p>
      <div className="space-y-4">
        <div>
          <p className="text-gray-400">主要技能</p>
          <p className="text-white">React, TypeScript, Node.js, MongoDB</p>
        </div>
        <div>
          <p className="text-gray-400">开发理念</p>
          <p className="text-white">注重代码质量，追求最佳实践</p>
        </div>
      </div>
    </GlassCard>
  );
};

export default AboutCard; 