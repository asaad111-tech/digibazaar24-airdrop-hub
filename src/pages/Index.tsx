
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AirdropDetailsSection from '@/components/AirdropDetailsSection';
import ProjectAnnouncementSection from '@/components/ProjectAnnouncementSection';
import NftMintingSection from '@/components/NftMintingSection';
import CountdownSection from '@/components/CountdownSection';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      <Navbar />
      <HeroSection />
      
      <section id="airdrop">
        <AirdropDetailsSection />
      </section>
      
      <section id="defi">
        <ProjectAnnouncementSection />
      </section>
      
      <section id="nfts">
        <NftMintingSection />
      </section>
      
      <CountdownSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
