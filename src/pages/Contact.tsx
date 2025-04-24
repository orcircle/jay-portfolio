import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import GlassCard from '../components/GlassCard';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        {/* 联系方式 */}
        <div className="text-center">
          <Title>联系我</Title>
          <Subtitle className="text-xl md:text-2xl">联系方式</Subtitle>
        </div>

        {/* 联系表单 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">邮箱</h4>
                <p className="text-gray-300">example@example.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">电话</h4>
                <p className="text-gray-300">+86 123 4567 8900</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">地址</h4>
                <p className="text-gray-300">中国北京市朝阳区</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-2xl font-bold gradient-text mb-6">留言</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">姓名</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">邮箱</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">留言</label>
                <textarea 
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                发送
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Contact; 