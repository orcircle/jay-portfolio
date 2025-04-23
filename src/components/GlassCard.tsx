import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* 毛玻璃背景 */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-[20px] shadow-lg 
        transition-all duration-300 group-hover:bg-white/10 group-hover:shadow-xl
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:rounded-[20px]
        before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100
        after:absolute after:inset-0 after:bg-gradient-to-br after:from-black/20 after:to-transparent after:rounded-[20px]
        after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100
        [&::before]:[background-image:radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        [&::before]:[--tw-gradient-stops:theme(colors.white/0.1)_0%,theme(colors.white/0.05)_50%,transparent_100%]
        [&::before]:[background-size:200%_200%]
        [&::before]:[background-position:0%_0%]
        group-hover:[&::before]:[background-position:100%_100%]
        [&::after]:[background-image:radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        [&::after]:[--tw-gradient-stops:theme(colors.white/0.1)_0%,theme(colors.white/0.05)_50%,transparent_100%]
        [&::after]:[background-size:200%_200%]
        [&::after]:[background-position:0%_0%]
        group-hover:[&::after]:[background-position:100%_100%]" />
      
      {/* 毛玻璃颗粒效果 */}
      <div className="absolute inset-0 rounded-[20px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
          [--tw-gradient-stops:theme(colors.white/0.1)_0%,theme(colors.white/0.05)_50%,transparent_100%]
          [background-size:200%_200%]
          [background-position:0%_0%]
          group-hover:[background-position:100%_100%]
          [mask-image:radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
          [--tw-gradient-stops:black_0%,black_50%,transparent_100%]
          [mask-size:200%_200%]
          [mask-position:0%_0%]
          group-hover:[mask-position:100%_100%]
          transition-all duration-300" />
      </div>
      
      {/* 内容 */}
      <div className="relative p-6">
        {children}
      </div>
    </div>
  );
};

export default GlassCard; 