import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import './styles/nprogress.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen overflow-hidden">
        {/* 背景形状 - 固定定位 */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* 圆形 */}
          <div 
            className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-secondary/30 rounded-full blur-2xl animate-circle"
          ></div>
          
          {/* 三角形 */}
          <div 
            className="absolute top-[60%] right-[25%] animate-triangle blur-2xl"
            style={{
              width: 0,
              height: 0,
              borderLeft: '150px solid transparent',
              borderRight: '150px solid transparent',
              borderBottom: '260px solid rgba(var(--color-primary-rgb), 0.3)'
            }}
          ></div>

          {/* 方形 */}
          <div 
            className="absolute top-[40%] left-[60%] w-[200px] h-[200px] bg-primary/30 rotate-45 blur-2xl animate-square"
          ></div>

          {/* 小圆点1 */}
          <div 
            className="absolute top-[20%] right-[40%] w-[100px] h-[100px] bg-accent/30 rounded-full blur-xl animate-dot"
          ></div>

          {/* 小圆点2 */}
          <div 
            className="absolute bottom-[30%] left-[40%] w-[80px] h-[80px] bg-secondary/30 rounded-full blur-xl animate-dot"
            style={{ animationDelay: '-10s' }}
          ></div>

          {/* 小圆点3 */}
          <div 
            className="absolute top-[50%] right-[15%] w-[120px] h-[120px] bg-primary/30 rounded-full blur-xl animate-dot"
            style={{ animationDelay: '-20s' }}
          ></div>
        </div>
        
        {/* 毛玻璃效果层 */}
        <div className="fixed inset-0 backdrop-blur-[80px] pointer-events-none"></div>
        
        {/* 内容 */}
        <div className="relative z-10">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <main className="px-4 md:px-12 lg:px-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full animate-circle" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full animate-circle" style={{ animationDelay: '-5s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-500/10 rounded-full animate-circle" style={{ animationDelay: '-10s' }} />
          
          <div className="absolute top-1/2 left-1/2 w-0 h-0 border-l-[50px] border-r-[50px] border-b-[86.6px] border-l-transparent border-r-transparent border-b-purple-500/10 animate-triangle" />
          <div className="absolute bottom-1/3 right-1/3 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[52px] border-l-transparent border-r-transparent border-b-blue-500/10 animate-triangle" style={{ animationDelay: '-7s' }} />
          
          <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-green-500/10 rotate-45 animate-square" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-yellow-500/10 rotate-45 animate-square" style={{ animationDelay: '-15s' }} />
          
          <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-red-500/10 rounded-full animate-dot" />
          <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-indigo-500/10 rounded-full animate-dot" style={{ animationDelay: '-12s' }} />
          <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-teal-500/10 rounded-full animate-dot" style={{ animationDelay: '-8s' }} />
        </div>
      </div>
    </Router>
  );
};

export default App;