import React from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import GlassCard from '../components/GlassCard';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <Title>关于 ORCIRCLE</Title>
        <Subtitle className="text-xl md:text-2xl">探索无限可能的创意空间</Subtitle>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* 网站介绍 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">网站介绍</h2>
          <p className="text-gray-300">
            ORCIRCLE 是一个充满创意和活力的个人作品展示平台，致力于为创作者提供一个展示自我、分享作品的空间。在这里，我们相信每个创意都值得被看见，每个故事都值得被讲述。
          </p>
        </GlassCard>

        {/* 设计理念 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">设计理念</h2>
          <p className="text-gray-300">
            ORCIRCLE 的设计理念源于对简约与功能的平衡追求。我们相信，优秀的设计应该既美观又实用，既能吸引用户的注意力，又能提供流畅的用户体验。通过精心设计的界面和交互，我们致力于为用户创造一个愉悦的浏览环境。
          </p>
        </GlassCard>

        {/* 技术特点 */}
        <GlassCard className="p-6 md:col-span-2">
          <h2 className="text-2xl font-bold gradient-text mb-4">技术特点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">前端技术</h3>
              <ul className="text-gray-300 space-y-2">
                <li>React + TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>响应式设计</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">性能优化</h3>
              <ul className="text-gray-300 space-y-2">
                <li>代码分割</li>
                <li>懒加载</li>
                <li>性能监控</li>
                <li>SEO优化</li>
              </ul>
            </div>
          </div>
        </GlassCard>

        {/* 未来展望 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">未来展望</h2>
          <p className="text-gray-300">
            ORCIRCLE 将持续更新和优化，为用户带来更好的体验。我们计划添加更多功能，包括作品评论系统、用户互动功能、作品分类浏览等。同时，我们也会不断优化网站性能，确保快速加载和流畅运行。
          </p>
        </GlassCard>

        {/* 联系方式 */}
        <GlassCard className="p-6">
          <h2 className="text-2xl font-bold gradient-text mb-4">联系我们</h2>
          <p className="text-gray-300 mb-4">
            如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
          </p>
          <div className="text-gray-300 space-y-2">
            <p>邮箱：contact@orcircle.com</p>
            <p>微信：ORCIRCLE</p>
            <p>GitHub：github.com/orcircle</p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default About; 