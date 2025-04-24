import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    NProgress.start();
    setTimeout(() => {
      navigate(path);
      setIsMenuOpen(false);
      NProgress.done();
    }, 300);
  };

  // 配置 NProgress
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      minimum: 0.1,
      easing: 'ease',
      speed: 500,
      trickle: true,
      trickleSpeed: 200,
    });
  }, []);

  return (
    <nav className="bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-xl font-bold gradient-text">
              ORCIRCLE
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['/', '/portfolio', '/about', '/contact'].map((path) => (
              <motion.div
                key={path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(path);
                  }}
                  className={`nav-link ${isActive(path) ? 'text-primary' : ''}`}
                >
                  {path === '/' && '个人资料'}
                  {path === '/portfolio' && '作品集'}
                  {path === '/about' && '关于ORCIRCLE'}
                  {path === '/contact' && '联系我'}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <motion.button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-lg"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">打开主菜单</span>
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['/', '/portfolio', '/about', '/contact'].map((path) => (
                <motion.div
                  key={path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(path);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(path) ? 'text-primary' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {path === '/' && '个人资料'}
                    {path === '/portfolio' && '作品集'}
                    {path === '/about' && '关于ORCIRCLE'}
                    {path === '/contact' && '联系我'}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;