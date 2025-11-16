import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, BarChart3 } from 'lucide-react';
import { Container } from '../ui/Container';

export const ProblemStatement: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Gateway Review Pressure',
      description: '30% of major programmes receive Red or Amber ratings at gateway reviews, risking project continuation and career progression.',
    },
    {
      icon: Clock,
      title: 'Resource-Intensive Processes',
      description: 'Traditional assurance processes take 6-12 months and cost £200K+ in consultant fees, with limited ongoing value.',
    },
    {
      icon: BarChart3,
      title: 'Lack of Early Warning Systems',
      description: 'Directors discover issues too late, without continuous health monitoring or predictive insights into programme performance.',
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
        <div className="text-center mb-16">
          <p className="section-label mb-3">
            THE CHALLENGE
          </p>
          <h2 className="heading-lg text-navy-primary">
            Major Programme Directors Face Unprecedented Scrutiny
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-light-grey rounded-full mb-6">
                  <Icon size={32} className="text-navy-primary" />
                </div>
                <h3 className="heading-sm text-navy-primary mb-4">{problem.title}</h3>
                <p className="body-base text-gray-600">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
