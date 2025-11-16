import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';

export const PlatformOverview: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.5 },
  };

  return (
    <section id="platform" className="section-padding bg-light-grey">
      <Container>
        <motion.div {...fadeInUp} className="text-center mb-12">
          <p className="section-label mb-3">
            ONE INTEGRATED PLATFORM
          </p>
          <h2 className="heading-lg text-navy-primary mb-6">
            Continuous Assurance Across Your Programme Lifecycle
          </h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            Upload your programme documents once and deploy intelligence across every module.
            From gateway readiness to baseline monitoring, tender evaluation to risk management.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="bg-white shadow-sm p-8 md:p-12 mb-12"
        >
          <div className="aspect-video bg-light-grey rounded-lg overflow-hidden mb-8">
            <img
              src="/platform-screenshot.png"
              alt="Programme Insights Platform Interface showing Assessment Results with RAG ratings, critical issues, and actions"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-navy-primary text-white p-6 md:p-8">
            <h3 className="heading-sm mb-4">Unlike Point Solutions</h3>
            <p className="body-base text-gray-200">
              Programme Insights provides a consistent, repeatable assurance framework across your entire
              programme lifecycle. One platform, one upload, comprehensive insights across all modules.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
