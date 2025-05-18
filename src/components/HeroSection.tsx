
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background with new uploaded image */}
      <div className="absolute inset-0 bg-hero-pattern">
        <img 
          src="/lovable-uploads/3277bb77-f81e-43ac-a307-9c4fcee7eec0.png" 
          alt="Digital Art" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-crypto-primary/10 via-transparent to-transparent opacity-70"></div>
      
      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-crypto-primary/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-crypto-secondary/10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container relative z-10 text-center">
        <div className="inline-block mb-2 py-1 px-3 rounded-full bg-muted/40 backdrop-blur-sm border border-muted/50">
          <span className="text-sm font-medium text-crypto-accent">NFTerra NFT Studio presents</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="crypto-gradient-text">DigiBazaar24</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          🚀 Claim Your 2025 Exclusive Airdrop – Free NFTs & Tokens Worth $500!
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Grab Ethereum (ETH) & Matic (MATIC) instantly! Limited slots left.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/mint">
            <Button className="crypto-button glow-effect" size="lg">
              Claim Now – Limited Time Offer
            </Button>
          </Link>
          
          <div className="flex items-center gap-2 py-2 px-4 rounded-full bg-muted/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-crypto-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">12,458 users claimed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
