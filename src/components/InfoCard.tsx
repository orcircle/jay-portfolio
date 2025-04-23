import React from 'react';
import GlassCard from './GlassCard';

interface InfoCardProps {
  title: string;
  items: Array<{
    label: string;
    value: string;
  }>;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, items }) => {
  return (
    <GlassCard>
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <p className="text-gray-400">{item.label}</p>
            <p className="text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default InfoCard; 