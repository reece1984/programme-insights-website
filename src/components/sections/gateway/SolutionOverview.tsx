import React from 'react';
import { Container } from '../../ui/Container';

export const SolutionOverview: React.FC = () => {
  const pillars = [
    {
      title: 'PREDICT',
      subtitle: 'Your AI-Powered Crystal Ball',
      description: 'Know your likely rating 90+ days before reviewers arrive. Our machine learning model, trained on hundreds of reviews, shows you exactly where you stand—updated daily.'
    },
    {
      title: 'PREPARE',
      subtitle: 'Evidence That Actually Matters',
      description: 'Stop guessing what reviewers want. Gateway Success maps your evidence to IPA criteria, showing gaps and staleness. Focus only on what moves you toward GREEN.'
    },
    {
      title: 'PERFORM',
      subtitle: 'Practice Makes Perfect',
      description: 'Face AI reviewers modeled on real panel archetypes. Practice your defense, refine your answers, and walk into reviews knowing you\'ll succeed.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-6">
          Continuous Readiness, Not Panicked Preparation
        </h2>
        <p className="body-lg text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          Gateway Success transforms reviews from Russian roulette into predictable processes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index}>
              <div className="mb-4">
                <h3 className="section-label mb-2">{pillar.title}</h3>
                <h4 className="heading-sm text-theme-primary mb-4">
                  {pillar.subtitle}
                </h4>
              </div>
              <p className="body-base text-gray-700">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
