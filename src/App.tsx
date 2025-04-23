import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import GlassCard from './components/GlassCard';
import './App.css';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-center">
            <h1 className="text-6xl font-bold mb-4 gradient-text">你好，我是袁杰</h1>
            <p className="text-2xl text-gray-300 mb-8">高级软件工程师</p>
          </div>
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold mb-4 gradient-text">关于我</h2>
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
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* 导航栏 */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link to="/" className="text-xl font-bold gradient-text">
                  袁杰
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex space-x-4">
                  <Link to="/" className="nav-link">个人资料</Link>
                  <Link to="/portfolio" className="nav-link">作品集</Link>
                  <Link to="/contact" className="nav-link">联系我</Link>
                </div>
              </div>
              {/* 移动端菜单按钮 */}
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">打开主菜单</span>
                  {/* 汉堡菜单图标 */}
                  <svg
                    className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* 关闭菜单图标 */}
                  <svg
                    className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* 移动端菜单 */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                个人资料
              </Link>
              <Link
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                作品集
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                联系我
              </Link>
            </div>
          </div>
        </nav>

        {/* 路由内容 */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;