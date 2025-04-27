import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import './styles/nprogress.css';

const App: React.FC = () => {
  return (
    <Router basename="/jay-portfolio">
      <div className="relative min-h-screen overflow-hidden">
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
    </Router>
  );
};

export default App;