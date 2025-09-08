import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 页面切换时滚动到顶部
    // 使用setTimeout确保在路由切换完成后执行
    const timer = setTimeout(() => {
      // 先尝试使用原生滚动
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // 如果Lenis存在，也重置其滚动状态
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
