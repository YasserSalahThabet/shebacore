import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AIProcessSection } from "@/components/home/AIProcessSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { WhyShebaCore } from "@/components/home/WhyShebaCore";
import { WhoWeServeSection } from "@/components/home/WhoWeServeSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AIProcessSection />
      <WhatWeDoSection />
      <SolutionsSection />
      <WhyShebaCore />
      <WhoWeServeSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
