import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface InteractiveFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const InteractiveFeatureCard: React.FC<InteractiveFeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-700 delay-${index * 100}ms ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card-elegant group cursor-pointer relative overflow-hidden ${
        isHovered ? 'shadow-2xl scale-105' : 'hover:scale-105'
      }`}>
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary-brand/5 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Floating particles effect */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-ping" />
            <div className="absolute bottom-6 left-6 w-1 h-1 bg-secondary-brand/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-accent-brand/30 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          </div>
        )}

        <div className="relative z-10">
          <div className={`w-16 h-16 bg-gradient-to-r from-primary to-secondary-brand rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
            isHovered ? 'rotate-6 scale-110 shadow-lg' : 'group-hover:animate-glow'
          }`}>
            <Icon className={`w-8 h-8 text-white transition-all duration-300 ${
              isHovered ? 'scale-110' : ''
            }`} />
          </div>
          
          <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
            isHovered ? 'text-primary' : ''
          }`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>

        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatureCard;