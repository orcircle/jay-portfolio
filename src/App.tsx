import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import { useLenis } from './hooks/useLenis';
import './App.css';
import './styles/nprogress.css';

const AppContent: React.FC = () => {
  // 启用 Lenis 平滑滚动
  useLenis();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 高科技多彩云背景 */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* 主要云团1 - 紫蓝渐变（暗化） */}
        <div 
          className="absolute top-[20%] left-[15%] w-[400px] h-[300px] bg-gradient-to-br from-purple-500/55 via-blue-600/45 to-cyan-500/35 rounded-full blur-3xl animate-cloud-drift-1"
        ></div>
        
        {/* 主要云团2 - 粉紫渐变（暗化） */}
        <div 
          className="absolute top-[60%] right-[20%] w-[350px] h-[280px] bg-gradient-to-tl from-pink-500/45 via-purple-600/55 to-indigo-500/35 rounded-[60%] blur-3xl animate-cloud-drift-2"
        ></div>

        {/* 主要云团3 - 橙红渐变（暗化） */}
        <div 
          className="absolute top-[40%] left-[50%] w-[320px] h-[250px] bg-gradient-to-r from-orange-500/35 via-red-500/45 to-pink-600/55 rounded-[50%] blur-3xl animate-cloud-pulse-1"
        ></div>

        {/* 辅助云团4 - 青蓝渐变（暗化） */}
        <div 
          className="absolute top-[10%] right-[40%] w-[280px] h-[200px] bg-gradient-to-bl from-teal-400/45 via-cyan-500/35 to-blue-600/45 rounded-full blur-2xl animate-cloud-float-1"
        ></div>

        {/* 辅助云团5 - 绿青渐变（暗化） */}
        <div 
          className="absolute bottom-[20%] left-[30%] w-[260px] h-[180px] bg-gradient-to-tr from-emerald-500/35 via-teal-600/45 to-cyan-500/40 rounded-[70%] blur-2xl animate-cloud-float-2"
        ></div>

        {/* 小型光点1（暗化） */}
        <div 
          className="absolute top-[30%] right-[30%] w-[120px] h-[120px] bg-gradient-to-r from-yellow-400/55 to-orange-500/45 rounded-full blur-xl animate-glow-pulse-1"
        ></div>

        {/* 小型光点2（暗化） */}
        <div 
          className="absolute bottom-[40%] right-[15%] w-[100px] h-[100px] bg-gradient-to-br from-violet-400/45 to-purple-600/55 rounded-full blur-lg animate-glow-pulse-2"
        ></div>

        {/* 流光效果1（暗化） */}
        <div 
          className="absolute top-[50%] left-[20%] w-[200px] h-[80px] bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent rounded-full blur-md animate-flow-light-1"
        ></div>

        {/* 流光效果2（暗化） */}
        <div 
          className="absolute bottom-[30%] right-[40%] w-[180px] h-[60px] bg-gradient-to-l from-transparent via-pink-400/20 to-transparent rounded-full blur-lg animate-flow-light-2"
        ></div>
      </div>
      
      {/* 内容 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <main className="flex-grow px-4 md:px-12 lg:px-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router basename="/jay-portfolio">
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;