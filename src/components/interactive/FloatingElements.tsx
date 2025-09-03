import React from 'react';
import { Brain, Cpu, Zap, Sparkles } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Brain, delay: '0s', size: 'w-8 h-8', position: 'top-20 left-10' },
    { Icon: Cpu, delay: '2s', size: 'w-6 h-6', position: 'top-40 right-16' },
    { Icon: Zap, delay: '4s', size: 'w-10 h-10', position: 'bottom-40 left-20' },
    { Icon: Sparkles, delay: '1s', size: 'w-7 h-7', position: 'bottom-20 right-10' },
    { Icon: Brain, delay: '3s', size: 'w-5 h-5', position: 'top-60 left-1/3' },
    { Icon: Cpu, delay: '5s', size: 'w-9 h-9', position: 'bottom-60 right-1/3' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const Icon = element.Icon;
        return (
          <div
            key={index}
            className={`absolute ${element.position} opacity-20 animate-float`}
            style={{ animationDelay: element.delay, animationDuration: '6s' }}
          >
            <Icon className={`${element.size} text-primary`} />
          </div>
        );
      })}
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary-brand/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-accent-brand/10 to-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default FloatingElements;