import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            项目展示
          </h1>
          <p className="text-xl text-gray-300">精选作品集</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 项目卡片 1 */}
          <div className="card p-6 hover:scale-105 transition-transform duration-300">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src="/project1.jpg"
                alt="项目1"
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 gradient-text">电商平台</h3>
            <p className="text-gray-300 mb-4">
              一个完整的电商平台，包含用户认证、商品管理、购物车和支付功能。
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">MongoDB</span>
            </div>
            <a
              href="#"
              className="btn-primary inline-block"
            >
              查看详情
            </a>
          </div>

          {/* 项目卡片 2 */}
          <div className="card p-6 hover:scale-105 transition-transform duration-300">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src="/project2.jpg"
                alt="项目2"
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 gradient-text">任务管理系统</h3>
            <p className="text-gray-300 mb-4">
              一个团队协作的任务管理工具，支持任务分配、进度跟踪和团队沟通。
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">Vue.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
            <a
              href="#"
              className="btn-primary inline-block"
            >
              查看详情
            </a>
          </div>

          {/* 项目卡片 3 */}
          <div className="card p-6 hover:scale-105 transition-transform duration-300">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src="/project3.jpg"
                alt="项目3"
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 gradient-text">个人博客系统</h3>
            <p className="text-gray-300 mb-4">
              一个现代化的博客系统，支持Markdown编辑、评论系统和SEO优化。
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Tailwind CSS</span>
            </div>
            <a
              href="#"
              className="btn-primary inline-block"
            >
              查看详情
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 