import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

export const Resources: React.FC = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Understanding NISTA Requirements',
      description: 'A comprehensive guide to navigating NISTA gateway reviews and maximizing your chances of success.',
      link: '#',
    },
    {
      icon: AlertCircle,
      title: 'The Cost of Failed Gateway Reviews',
      description: 'Research on the financial and reputational impact of gateway review failures on major programmes.',
      link: '#',
    },
    {
      icon: Sparkles,
      title: 'AI in Programme Assurance',
      description: 'How artificial intelligence is transforming programme assurance and reducing time to value.',
      link: '#',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.5 },
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="section-label mb-3">
            RESOURCES
          </p>
          <h2 className="heading-lg text-navy-primary">
            Insights for Programme Leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              >
                <Card padding="lg" className="h-full hover:border-theme-accent border-2 border-transparent transition-colors cursor-pointer">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-theme-accent/10 rounded-lg mb-4">
                    <Icon size={24} className="text-theme-accent" />
                  </div>
                  <h3 className="heading-sm text-navy-primary mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-theme-accent font-semibold hover:text-theme-accent transition-colors inline-flex items-center gap-2"
                  >
                    Read More
                    <span aria-hidden="true">→</span>
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
