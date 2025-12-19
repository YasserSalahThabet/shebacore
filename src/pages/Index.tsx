import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { WhyShebaCore } from "@/components/home/WhyShebaCore";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { WhoWeServeSection } from "@/components/home/WhoWeServeSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <SolutionsSection />
      <WhyShebaCore />
      <HowItWorksSection />
      <WhoWeServeSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
