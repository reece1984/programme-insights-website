import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

interface ModuleCardProps {
  badge: 'available' | 'coming-soon';
  badgeText: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imagePosition: 'left' | 'right';
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  badge,
  badgeText,
  title,
  subtitle,
  description,
  features,
  imagePosition,
}) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      {...fadeInUp}
      className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
        imagePosition === 'right' ? '' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}>
        <Badge variant={badge} className="mb-4">
          {badgeText}
        </Badge>
        <h3 className="heading-md text-navy-primary mb-3">{title}</h3>
        <p className="text-lg text-theme-accent font-semibold mb-4">{subtitle}</p>
        <p className="body-base text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="inline-block w-1.5 h-1.5 bg-theme-accent rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Screenshot Placeholder */}
      <div className={imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}>
        <div className="aspect-video bg-light-grey rounded-lg shadow-sm flex items-center justify-center">
          <p className="text-gray-500 font-medium">{title} Screenshot</p>
        </div>
      </div>
    </motion.div>
  );
};
