import React from 'react';
import { GatewayHero } from '../components/sections/gateway/GatewayHero';
import { SuccessVision } from '../components/sections/gateway/SuccessVision';
import { ProblemAgitation } from '../components/sections/gateway/ProblemAgitation';
import { SolutionOverview } from '../components/sections/gateway/SolutionOverview';
import { ConfidentExperience } from '../components/sections/gateway/ConfidentExperience';
import { Features } from '../components/sections/gateway/Features';
import { ROICalculator } from '../components/sections/gateway/ROICalculator';
import { GatewayCredibility } from '../components/sections/gateway/GatewayCredibility';
import { Comparison } from '../components/sections/gateway/Comparison';
import { Guarantee } from '../components/sections/gateway/Guarantee';
import { GatewayFinalCTA } from '../components/sections/gateway/GatewayFinalCTA';

export const GatewaySuccess: React.FC = () => {
  return (
    <main>
      <GatewayHero />
      <SuccessVision />
      <ProblemAgitation />
      <SolutionOverview />
      <ConfidentExperience />
      <Features />
      <ROICalculator />
      <GatewayCredibility />
      <Comparison />
      <Guarantee />
      <GatewayFinalCTA />
    </main>
  );
};
