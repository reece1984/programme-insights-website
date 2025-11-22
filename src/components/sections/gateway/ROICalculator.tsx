import React from 'react';
import { Container } from '../../ui/Container';

export const ROICalculator: React.FC = () => {
  const costs = [
    { label: 'Career impact cost', value: 'Unquantifiable' },
    { label: 'Project delay cost', value: '£2-5M per month' },
    { label: 'Remediation cost', value: '£500K+' },
    { label: 'Team morale cost', value: '30% productivity loss' },
    { label: 'Political capital cost', value: 'Years to rebuild' }
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <h2 className="heading-lg text-center text-theme-primary mb-16">
          The Cost of One RED Rating
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 mb-8">
            <h3 className="heading-sm text-red-900 mb-6">
              Impact of a RED Rating
            </h3>
            <div className="space-y-4">
              {costs.map((cost, index) => (
                <div key={index} className="flex justify-between items-center border-b border-red-200 pb-3 last:border-0">
                  <span className="body-base text-red-900 font-medium">
                    {cost.label}
                  </span>
                  <span className="body-base text-red-700 font-bold">
                    {cost.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-8">
            <h3 className="heading-sm text-green-900 mb-6">
              Versus: Gateway Success Investment
            </h3>
            <div className="flex justify-between items-center mb-4">
              <span className="body-lg text-green-900 font-medium">
                Annual Platform Fee
              </span>
              <span className="text-3xl font-bold text-green-700">
                £40,000
              </span>
            </div>
            <div className="pt-4 border-t border-green-200">
              <p className="body-lg text-green-900 font-bold text-center">
                ROI: Avoid one RED rating = 50x return
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
