import React from 'react';
import GlassCard from './GlassCard';

const AboutCard: React.FC = () => {
  return (
    <GlassCard className="p-8">
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        个人优势
      </h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-400">后端技术栈</p>
          <p className="text-white">
            具备深厚的JavaSE和JavaEE技术功底，能熟练应用SpringBoot和SpringCloud框架进行项目开发，
            具备分布式数据库的操作经验，对Mybatis有深入理解和应用能力，同时，对数据库索引优化和MQ队列消费、
            推送有实战经验，能熟练运用Redis集群进行数据管理。具备高可用性、高并发场景下的项目开发经验。
          </p>
        </div>
        <div>
          <p className="text-gray-400">前端技术栈</p>
          <p className="text-white">
            对JavaScript、Vue、Vuex、React、Redux、ReactRouter、Next.js等前端技术有深入理解和应用能力，
            熟悉前端主流技术栈。同时，对移动端开发技术如ReactNative和Flutter也有涉猎，对Dart、TypeScript等编程语言有一定了解。
          </p>
        </div>
        <div>
          <p className="text-gray-400">运维能力</p>
          <p className="text-white">
            掌握Linux操作系统的基本使用和管理，具备Docker部署和云服务部署的能力，
            熟悉AWS、Azure、阿里云等主流云服务平台的操作，能够实现OSS与云服务器的无缝对接，
            并能通过静态项目CDN加速提升系统性能和用户体验。
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default AboutCard; 