import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 初始化 Lenis - 性能优化配置
    lenisRef.current = new Lenis({
      duration: 0.8, // 减少duration提升响应速度
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // 简化easing函数
      smoothWheel: true,
      wheelMultiplier: 1, // 标准滚轮倍率
      touchMultiplier: 2, // 触摸滚动倍率
      infinite: false, // 禁用无限滚动
    });

    // 将Lenis实例暴露到全局，供ScrollToTop使用
    (window as any).lenis = lenisRef.current;

    // 动画循环
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // 清理
    return () => {
      lenisRef.current?.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return {
    lenis: lenisRef.current,
  };
}; 