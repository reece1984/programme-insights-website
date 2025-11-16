import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, TrendingDown, Target } from 'lucide-react';
import { Container } from '../ui/Container';

export const SocialProof: React.FC = () => {
  const metrics = [
    {
      icon: Users,
      value: '7',
      label: 'Programmes in Pilot',
      description: '3 programmes over £750M',
    },
    {
      icon: CheckCircle2,
      value: '50+',
      label: 'Assessment Criteria',
      description: 'Across NISTA/PAR frameworks',
    },
    {
      icon: TrendingDown,
      value: '3 Months',
      label: 'Reduced Preparation Time',
      description: 'For gateway reviews',
    },
    {
      icon: Target,
      value: '85%+',
      label: 'Accuracy Rate',
      description: 'In automated compliance checks',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.5 },
  };

  return (
    <section className="section-padding bg-light-grey">
      <Container>
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="section-label mb-3">
            PROVEN RESULTS
          </p>
          <h2 className="heading-lg text-navy-primary">
            Trusted by Major UK Infrastructure Programmes
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                className="bg-white p-8 shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-theme-accent/10 rounded-full mb-4">
                  <Icon size={28} className="text-theme-accent" />
                </div>
                <div className="text-4xl font-bold text-navy-primary mb-2">{metric.value}</div>
                <div className="font-semibold text-gray-900 mb-2">{metric.label}</div>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
