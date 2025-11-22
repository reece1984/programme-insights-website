import React from 'react';
import { Container } from '../../ui/Container';

export const Features: React.FC = () => {
  const features = [
    {
      title: '90-Day Prediction Engine',
      description: 'See your future rating with 85% accuracy. Updated daily based on your evidence health.'
    },
    {
      title: 'Evidence Decay Tracking',
      description: '30-day-old risk registers lose impact. We track freshness and prompt updates before it matters.'
    },
    {
      title: 'Trajectory to GREEN',
      description: 'Not just where you are—where you\'re heading. See exactly when you\'ll achieve GREEN at current pace.'
    },
    {
      title: 'AI Review Simulator',
      description: 'Practice with virtual reviewers. Get feedback on your answers. Build muscle memory for success.'
    },
    {
      title: 'Success Pattern Library',
      description: 'Learn from GREEN-rated projects. See what worked for projects like yours.'
    },
    {
      title: 'Action Plan Generator',
      description: 'Specific tasks assigned to roles. No generic advice—just what YOU need to do next.'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-16">
          Intelligence, Not Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="heading-sm text-theme-primary mb-3">
                {feature.title}
              </h3>
              <p className="body-base text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
