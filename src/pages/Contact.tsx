import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import GlassCard from '../components/GlassCard';

const Contact: React.FC = () => {
  const contactInfo = [
    { label: '邮箱', value: 'example@example.com' },
    { label: '电话', value: '+86 123 4567 8901' },
    { label: '微信', value: 'example_wechat' }
  ];

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* 第一页：联系方式介绍 */}
      <section className="h-screen snap-start grid place-items-center p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <div className="text-center space-y-4 md:space-y-6">
              <Title className="text-4xl md:text-6xl">联系我</Title>
              <Subtitle className="text-xl md:text-2xl">期待与您合作</Subtitle>
            </div>
          </div>
        </div>
      </section>

      {/* 第二页：联系方式详情 */}
      <section className="h-screen snap-start grid place-items-center p-4 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <GlassCard>
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  联系方式
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index}>
                      <p className="text-gray-400">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
            <div className="w-full">
              <GlassCard>
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  发送消息
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="您的姓名"
                      className="w-full px-4 py-2 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="您的邮箱"
                      className="w-full px-4 py-2 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="您的消息"
                      rows={4}
                      className="w-full px-4 py-2 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    发送
                  </button>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 