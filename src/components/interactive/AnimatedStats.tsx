import React, { useEffect } from 'react';
import { useScrollAnimation, useCounterAnimation } from '@/hooks/useScrollAnimation';

interface StatItem {
  number: string;
  label: string;
}

interface AnimatedStatsProps {
  stats: StatItem[];
}

const AnimatedStats: React.FC<AnimatedStatsProps> = ({ stats }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      ref={elementRef}
      className={`section-padding bg-gradient-to-r from-primary/5 to-secondary-brand/5 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gradient-primary">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable results that speak to our commitment to AI excellence and innovation across the Gulf region.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStatCard key={index} stat={stat} delay={index * 200} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AnimatedStatCardProps {
  stat: StatItem;
  delay: number;
  isVisible: boolean;
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({ stat, delay, isVisible }) => {
  const numericValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
  const { count, startAnimation } = useCounterAnimation(numericValue, 2000);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        startAnimation();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, startAnimation]);

  const displayValue = stat.number.includes('+') ? `${count}+` : count.toString();

  return (
    <div className={`text-center group transition-all duration-500 delay-${delay}ms ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-secondary-brand/5">
        <div className="text-4xl md:text-5xl font-bold font-display text-gradient-primary mb-2">
          {displayValue}
        </div>
        <div className="text-sm md:text-base font-medium text-muted-foreground">
          {stat.label}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;