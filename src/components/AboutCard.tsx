import React from 'react';
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

interface AboutCardProps {
  className?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const highlights = isZh ? [
    '以 Java微服务与分布式系统 为主，涉猎 Python(FastAPI) 的数据解析与自动化服务',
    '在半导体 MES 栈与银行核心账务等高一致性、高可用场景有系统实践',
    '具备从需求→架构→编码→测试→容器化→CI/CD→多云上线的端到端交付经验',
    '银行业务：核心动账通知系统 QPS提升 300%（异步化与架构解耦）',
    '半导体：构建 M2M实时消息网关与产线数据解析微服务，支撑追溯与良率分析'
  ] : [
    'Specializing in Java microservices and distributed systems, with experience in Python (FastAPI) for data parsing and automation services',
    'Systematic practice in semiconductor MES stack and banking core accounting with high consistency and high availability scenarios',
    'End-to-end delivery experience from requirements → architecture → coding → testing → containerization → CI/CD → multi-cloud deployment',
    'Banking: Improved core transaction notification system QPS by 300% through asynchronous architecture and decoupling',
    'Semiconductor: Built M2M real-time message gateway and production data parsing microservices for traceability and yield analysis'
  ];

  const strengthsData = isZh ? [
    { title: '后端架构', content: 'Java生态、微服务治理、分布式系统' },
    { title: '数据处理', content: 'MySQL优化、Redis集群、消息队列' },
    { title: '工程实践', content: 'DevOps、性能调优、可观测性' },
    { title: '跨栈能力', content: '全栈开发、移动端、云原生' }
  ] : [
    { title: 'Backend Architecture', content: 'Java ecosystem, microservices governance, distributed systems' },
    { title: 'Data Processing', content: 'MySQL optimization, Redis clusters, message queues' },
    { title: 'Engineering Practices', content: 'DevOps, performance tuning, observability' },
    { title: 'Cross-stack Capabilities', content: 'Full-stack development, mobile, cloud-native' }
  ];

  return (
    <GlassCard className={`p-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {isZh ? '技术概述' : 'Technical Overview'}
      </h2>
      <div className="space-y-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start">
            <span className="text-primary mr-2 mt-1 flex-shrink-0">▸</span>
            <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
          </div>
        ))}
        
        <div className="mt-6 pt-4 border-t border-gray-600">
          <h3 className="text-lg font-bold text-primary mb-3">
            {isZh ? '核心专长' : 'Core Strengths'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {strengthsData.map((item, index) => (
              <div key={index}>
                <p className="text-gray-400 font-medium">{item.title}</p>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default AboutCard; 