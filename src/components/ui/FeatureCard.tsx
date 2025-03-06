
import React from 'react';
import { cn } from '@/lib/utils';
import GlassCard from './GlassCard';
import Chip from './Chip';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  label?: string;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  label,
  className 
}: FeatureCardProps) => {
  return (
    <GlassCard 
      className={cn('p-6 h-full transition-all duration-500 hover:translate-y-[-5px]', className)}
      hoverEffect
    >
      <div className="flex flex-col h-full gap-4">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
            {icon}
          </div>
          {label && (
            <Chip variant="outline">{label}</Chip>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 flex-grow">
          {description}
        </p>
      </div>
    </GlassCard>
  );
};

export default FeatureCard;
