import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export const FinalCTA: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.5 },
  };

  return (
    <section className="section-padding bg-navy-primary text-white">
      <Container>
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            Ready to Transform Your Programme Assurance?
          </h2>
          <p className="body-lg text-gray-200 mb-8">
            Start using Programme Insights today to reduce your gateway review preparation time
            and increase your chances of success.
          </p>
          <a href="https://app.programmeinsights.co.uk/signup">
            <Button variant="primary" size="lg">
              Schedule Consultation
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};
